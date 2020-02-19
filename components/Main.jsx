import React from 'react';
import {createFragmentContainer, graphql, createRefetchContainer} from 'react-relay';
import {eventEmitter} from '../store/LinkStores';
import {ActionTypes} from '../Constants';
import Link from './Link.jsx';

export class Main extends React.Component{
    constructor(props){
        super(props);
    }
    setLimit = (e) => {
        let newLimit = Number(e.target.value);
        this.props.relay.refetch({limit: newLimit})
    }
    render(){
        const content = this.props.store.linkConnection && this.props.store.linkConnection.edges.map(edge => {
            return <Link link={edge.node}/>
        })
        return(
            <div>
                <h3>Links</h3>
                <select onChange={this.setLimit}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
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
        limit: {type: "Int", defaultValue: 1}
        ){
        linkConnection(first: $limit){
            edges{
                node{
                    id,
                    ...Link_link
                }
            }
        }
      }`
    },
    graphql`query MainRefetchQuery($limit: Int){
        store {
            ...Main_store @arguments(limit: $limit)
        }
    }`
)