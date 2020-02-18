import React from 'react';
import API from '../API';
import LinkStores  from '../store/LinkStores';
import {eventEmitter} from '../store/LinkStores';
import {ActionTypes} from '../Constants';

class Main extends React.Component<IMain.IProps, IMain.IState>{
    constructor(props: IMain.IProps){
        super(props);
        this.state = {
            links : this._getLinks(),
        }
        this.onChange = this.onChange.bind(this);
    }

    _getLinks(){
        return LinkStores.getAll();
    }

    componentDidMount(){
      API.fetchLinks();
      LinkStores.subscribe("change", this.onChange)
    }

    onChange(){
        console.log("4. Change has been listened by the View")
        this.setState(() => ({
            links: this._getLinks()}))
    }
    render(){
        console.log("this.props.limit", this.props.limit)
        const content = this.state.links && this.state.links.map(link => {
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

export default Main