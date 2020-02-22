import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';
import moment from 'moment';

class Link extends React.Component{
    constructor(props){
        super(props)
    }
    dateLabel = () => moment(this.props.link.createdAt).format("L")
    render(){
      const {link} = this.props;
            return (<li key={link.id}>
                <a>{this.dateLabel()}</a>
                <a href={link.url}>{link.title}</a>
            </li>)
    }
}

export default createFragmentContainer(Link, {
    link: graphql`
    fragment Link_link on Link{
            url,
            title,
            createdAt
    }
    `
})

