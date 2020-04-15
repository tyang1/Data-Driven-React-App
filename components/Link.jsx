import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import moment from "moment";
import s from "./Link.scss";

class Link extends React.Component {
  constructor(props) {
    super(props);
  }
  dateLabel = () => {
    if (this.props.link.createdAt == "Saving") return "Saving";
    return moment(this.props.link.createdAt).format("L");
  };

  render() {
    const { link } = this.props;
    return (
      <li className={s.linkInfo} key={link.id}>
        <a className={s.linkDate}>{this.dateLabel()}</a>
        <a href={link.url}>{link.title}</a>
      </li>
    );
  }
}

export default createFragmentContainer(Link, {
  link: graphql`
    fragment Link_link on Link {
      id
      url
      title
      createdAt
    }
  `
});
