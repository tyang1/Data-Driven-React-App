/**
 * @flow
 * @relayHash 818838b3c93d48f46a86c13bf30b2a32
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Main_store$ref = any;
export type MainRefetchQueryVariables = {|
  limit?: ?number
|};
export type MainRefetchQueryResponse = {|
  +store: ?{|
    +$fragmentRefs: Main_store$ref
  |}
|};
export type MainRefetchQuery = {|
  variables: MainRefetchQueryVariables,
  response: MainRefetchQueryResponse,
|};
*/


/*
query MainRefetchQuery(
  $limit: Int
) {
  store {
    ...Main_store_1UvIyz
  }
}

fragment Link_link on Link {
  url
  title
}

fragment Main_store_1UvIyz on Store {
  linkConnection(first: $limit) {
    edges {
      node {
        id
        ...Link_link
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "limit",
    "type": "Int",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MainRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "Store",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Main_store",
            "args": [
              {
                "kind": "Variable",
                "name": "limit",
                "variableName": "limit"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MainRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "store",
        "storageKey": null,
        "args": null,
        "concreteType": "Store",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "linkConnection",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "limit"
              }
            ],
            "concreteType": "LinkConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "LinkEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Link",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "id",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "url",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MainRefetchQuery",
    "id": null,
    "text": "query MainRefetchQuery(\n  $limit: Int\n) {\n  store {\n    ...Main_store_1UvIyz\n  }\n}\n\nfragment Link_link on Link {\n  url\n  title\n}\n\nfragment Main_store_1UvIyz on Store {\n  linkConnection(first: $limit) {\n    edges {\n      node {\n        id\n        ...Link_link\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '58fcff57e22bcfb7e3f9f8fdb3ed70af';

module.exports = node;
