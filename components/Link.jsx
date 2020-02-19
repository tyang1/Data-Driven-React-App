import React from 'react';
import {createFragmentContainer, graphql} from 'react-relay';

class Link extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
      const {link} = this.props;
            return (<li id={link.id}>
                <a href={link.url}>{link.title}</a>
            </li>)
    }
}

export default createFragmentContainer(Link, {
    link: graphql`
    fragment Link_link on Link{
            url,
            title,
    }
    `
})

