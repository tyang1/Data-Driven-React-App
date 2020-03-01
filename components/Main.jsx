import React, { createRef } from 'react';
import {createFragmentContainer, graphql, createRefetchContainer} from 'react-relay';
import Link from './Link.jsx';
import createLinkMutation from '../mutations/CreateLinkMutation';
import { debounce } from 'lodash';
import s from './Main.scss';

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.search = debounce(this.searchHandler, 300);
    }
    setLimit = (e) => {
        let newLimit = Number(e.target.value);
        this.props.relay.refetch({limit: newLimit})
    } 
    searchHandler = (e) => {
        e.preventDefault();
        let query = e.target.value;
        this.props.relay.refetch({query});

    }
    handleNewLink = (e) => {
        e.preventDefault();
        createLinkMutation(this.props.relay.environment, this.props.store.id, {title: this.refs.newTitle.value, url: this.refs.newUrl.value, store:this.props.store})
        this.refs.newTitle.value = "";
        this.refs.newUrl.value = "";

    }
    render(){
        const content = this.props.store.linkConnection && this.props.store.linkConnection.edges.map(edge => {
            return <Link link={edge.node}/>
        })
        return(
            <div className={s.MainContainer}>
                <h3>Links</h3>
                <form
                    onSubmit = {this.handleNewLink}
                    >
                    <input type="text" placeholder="Title" ref="newTitle"/>
                    <input type="text" placeholder="Url" ref="newUrl"/> 
                    <button type="submit">Add</button>
                </form>
                <input type="text" placeholder='Search' onChange={ (e) => { e.persist(); this.search(e)}}/>

                <select onChange={this.setLimit}>
                    <option value='1'>1</option>
                    <option value='100' selected>100</option>
                </select>
                <ul>
                    {content}
                </ul>
            </div>
        )
    }
}

function NewcreateRefetchContainer(Component, fragments, taggedNode, createRefetchContainer) {
    console.log("Composes a React component class, returning a new class that intercepts props, resolving them with the provided fragments and subscribing for updates." + "\n", createRefetchContainer.prototype.constructor)
    return createRefetchContainer.call(this, Component, fragments, taggedNode );
};



const fragment = {
    store: graphql`
    fragment Main_store on Store @argumentDefinitions(
        limit: {type: "Int", defaultValue: 10},
        query: {type: "String", defaultValue: ""}
        ){
            id,
            linkConnection(first: $limit, query: $query)@connection(key:"Main_linkConnection", filters: ["limit"]){
                edges{
                    node{
                        id,
                        ...Link_link
                    }
                }
            }
        }`
    }

const Test = NewcreateRefetchContainer(Main, fragment,
    graphql`query MainRefetchQuery($limit: Int, $query: String){
        store {
            ...Main_store @arguments(limit: $limit, query: $query)
        }
    }`, createRefetchContainer
)

export default Test