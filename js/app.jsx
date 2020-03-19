import React from "react";
import ReactDOM from "react-dom";
import { graphql, QueryRenderer } from "react-relay";
import Main from "../components/Main.tsx";
import WithLogicLogin from "../components/Login.jsx";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { FormLogic } from "../components/FormLogic.jsx";
import { BrowserRouter, Route } from "react-router-dom";

function fetchQuery(operation, variables) {
  return fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

const renderQuery = ({ error, props }) => {
  if (error) {
    return <div>Error!</div>;
  }
  if (!props) {
    return <div>Loading...</div>;
  }

  //Comment: what does not matter to the view of the Main's form component would be
  //passed to the interested component in the form of context (i.e. login functionality)
  const storeProps = props.store;
  return (
    <FormLogic logic={"test"}>
      <BrowserRouter>
        <Route exact path="/" component={WithLogicLogin} />
        <Route
          path="/HomePage"
          render={props => <Main {...props} store={storeProps} />}
        />
      </BrowserRouter>
    </FormLogic>
  );
};

ReactDOM.render(
  <QueryRenderer
    environment={environment}
    query={graphql`
      query appQuery {
        store {
          ...Main_store
        }
      }
    `}
    render={renderQuery}
  />,
  document.getElementById("react")
);
