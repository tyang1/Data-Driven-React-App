import React from 'react';
import {createFragmentContainer, graphql, createRefetchContainer} from 'react-relay';
import Link from './Link.jsx';
import createLinkMutation from '../mutations/CreateLinkMutation';

export class Main extends React.Component{
    constructor(props){
        super(props);
    }
    setLimit = (e) => {
        let newLimit = Number(e.target.value);
        this.props.relay.refetch({limit: newLimit})
    }
    searchHandler = (e) => {
        let query = e.target.value;
        this.props.relay.refetch({query})
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
            <div>
                <h3>Links</h3>
                <form
                    onSubmit = {this.handleNewLink}
                    >
                    <input type="text" placeholder="Title" ref="newTitle"/>
                    <input type="text" placeholder="Url" ref="newUrl"/> 
                    <button type="submit">Add</button>
                </form>
                <input type="text" placeholder='Search' onChange={this.searchHandler}/>

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
//createFragmentContainer is a HOC => why using HOC?
//decorating the class to be part of the relay class before rendering

export default createRefetchContainer(Main, {
    store: graphql`
    fragment Main_store on Store @argumentDefinitions(
        limit: {type: "Int", defaultValue: 10},
        query: {type: "String"}
        ){
        id,
        linkConnection(first: $limit, query: $query)@connection(key:"Main_linkConnection"){
            edges{
                node{
                    id,
                    ...Link_link
                }
            }
        }
      }`
    },
    graphql`query MainRefetchQuery($limit: Int, $query: String!){
        store {
            ...Main_store @arguments(limit: $limit, query: $query)
        }
    }`
)