import React from "react";
import { graphql, createRefetchContainer } from "react-relay";
import Link from "./Link.jsx";
import createLinkMutation from "../mutations/CreateLinkMutation";
import { debounce } from "lodash";
import s from "./Main.scss";
import { FormLogicContext } from "./FormLogic.jsx";

export interface ConstructorMethods<T> {
  (arg: T): void;
}

export class Main extends React.Component<IMain.IProps, IMain.IState> {
  search: ConstructorMethods<object>;
  setTextInputRef: (element: any) => void;
  setURLInputRef: (element: any) => void;
  textInput: { value: string };
  urlInput: { value: string };

  constructor(props) {
    super(props);
    this.search = debounce(this.searchHandler, 300);
    this.setTextInputRef = element => {
      this.textInput = element;
    };
    this.setURLInputRef = element => {
      this.urlInput = element;
    };
    this.textInput = { value: "" };
    this.urlInput = { value: "" };
  }

  static contextType = FormLogicContext;
  setLimit = (e): void => {
    const newLimit = Number(e.target.value);
    this.props.relay.refetch({ limit: newLimit });
  };
  searchHandler = (e): void => {
    e.preventDefault();
    const query = e.target.value;
    this.props.relay.refetch({ query });
  };
  handleNewLink = (e): void => {
    e.preventDefault();
    //Here is where the node ID needs to be requested because your refetchQuery needs to know the nodeID
    createLinkMutation(this.props.relay.environment, this.props.store, {
      title: this.textInput.value,
      url: this.urlInput.value,
      store: this.props.store
    });
    this.textInput.value = "";
    this.urlInput.value = "";
  };
  render() {
    const content =
      this.props.store.linkConnection &&
      this.props.store.linkConnection.edges.map(edge => {
        return <Link link={edge.node} />;
      });
    return (
      <div className={s.MainContainer}>
        <h3>Links</h3>
        <form onSubmit={this.handleNewLink}>
          <input type="text" placeholder="Title" ref={this.setTextInputRef} />
          <input type="text" placeholder="Url" ref={this.setURLInputRef} />
          <button type="submit">Add</button>
        </form>
        <input
          type="text"
          placeholder="Search"
          onChange={(e): void => {
            e.persist();
            this.search(e);
          }}
        />

        <select onChange={this.setLimit}>
          <option value="1">1</option>
          <option value="10" selected>
            10
          </option>
        </select>
        <ul className={s.linkLayout}>{content}</ul>
      </div>
    );
  }
}

function createRefetchContainerWithLogs(
  Component,
  taggedNode,
  createRefetchContainer
) {
  console.log(
    "On first rendering! Relay composes a React component class, returning a new class that intercepts props, resolving them with the provided fragments and subscribing for updates." +
      "\n",
    createRefetchContainer.prototype.constructor
  );
  return createRefetchContainer(
    Component,
    {
      store: graphql`
        fragment Main_store on Store
          @argumentDefinitions(
            limit: { type: "Int", defaultValue: 10 }
            query: { type: "String", defaultValue: "" }
          ) {
          id
          linkConnection(first: $limit, query: $query)
            @connection(key: "Main_linkConnection", filters: ["limit"]) {
            edges {
              node {
                id
                ...Link_link
              }
            }
          }
        }
      `
    },
    taggedNode
  );
}

const mainRefetchContainer = createRefetchContainerWithLogs(
  Main,
  graphql`
    query MainRefetchQuery($limit: Int, $query: String) {
      store {
        ...Main_store @arguments(limit: $limit, query: $query)
      }
    }
  `,
  createRefetchContainer
);

export default mainRefetchContainer;
