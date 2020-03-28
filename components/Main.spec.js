import React from "react";
import { FormLogicContext } from "./FormLogic.jsx";
import { graphql, QueryRenderer } from "react-relay";
import ReactTestRenderer from "react-test-renderer";
// import { configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import { mount, shallow } from "enzyme";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";

// configure({ adapter: new Adapter() });

const getLogicWithFormLogicContext = (
  context = { logicStore: [], set: () => null, get: () => null }
) => {
  // Will then mock the FormLogic module being used in our Main component
  jest.mock("./FormLogic.jsx", () => {
    return {
      FormLogicContext: {
        Consumer: props => props.children(null)
      }
    };
  });
  return require("./Main").Main;
};

describe("<Main/>", () => {
  it("should render component", () => {
    const Main = getLogicWithFormLogicContext();
    const environment = createMockEnvironment();
    const TestRenderer = () => (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query MainSpecQuery @relay_test_operation {
            store {
              ...Main_store
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (props) {
            return <Main store={props.store} />;
          } else if (error) {
            return error.message;
          }
          return "Loading...";
        }}
      />
    );
    const renderer = ReactTestRenderer.create(<TestRenderer />);
    environment.mock.resolveMostRecentOperation(operation =>
      MockPayloadGenerator.generate(operation)
    );

    expect(renderer).toMatchSnapshot();
  });
});
