import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
// import API from '../API';
// import LinkStores  from '../store/LinkStores';
import {eventEmitter} from '../store/LinkStores';
import {ActionTypes} from '../Constants';

export class Main extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     links : this._getLinks(),
        // }
        // this.onChange = this.onChange.bind(this);
    }

    // _getLinks(){
    //     return LinkStores.getAll();
    // }

    // componentDidMount(){
    //   API.fetchLinks();
    //   LinkStores.subscribe("change", this.onChange)
    // }

    // onChange(){
    //     console.log("4. Change has been listened by the View")
    //     this.setState(() => ({
    //         links: this._getLinks()}))
    // }
    render(){
        console.log("this.props.store", this.props.store)
        const content = this.props.store.links && this.props.store.links.map(link => {
            return <li id={link._id}>
                <a href={link.url}>{link.title}</a>
            </li>
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
            url,
            title,
            _id
        }
    }
    `
})