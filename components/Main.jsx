import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
// import API from '../API';
// import LinkStores  from '../store/LinkStores';
import {eventEmitter} from '../store/LinkStores';
import {ActionTypes} from '../Constants';
import Link from './Link.jsx';

export class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log("this.props.store", this.props.store)
        const content = this.props.store.links && this.props.store.links.map(link => {
            return <Link link={link}/>
        })
        return(
            <div>
                <h3>Links</h3>
                <ul>
                    {content}
                </ul>
            </div>
        )
    }
}
//createFragmentContainer is a HOC => why using HOC?
//decorating the class to be part of the relay class before rendering

export default createFragmentContainer(Main, {
    store: graphql`
    fragment Main_store on Store{
        links{
            _id,
            ...Link_link
        }
    }
    `
})