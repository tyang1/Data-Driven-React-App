/**
 * @flow
 * @relayHash f3067d1ffebca250e64d1efee64585c4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Main_store$ref = any;
export type MainRefetchQueryVariables = {|
  limit?: ?number,
  query?: ?string,
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
  $query: String
) {
  store {
    ...Main_store_3HzzW
    id
  }
}

fragment Link_link on Link {
  url
  title
  createdAt
}

fragment Main_store_3HzzW on Store {
  id
  linkConnection(first: $limit, query: $query) {
    edges {
      node {
        id
        ...Link_link
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
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
  },
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "limit"
  },
  (v1/*: any*/)
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
              },
              (v1/*: any*/)
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
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "linkConnection",
            "storageKey": null,
            "args": (v3/*: any*/),
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
                      (v2/*: any*/),
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
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "createdAt",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "linkConnection",
            "args": (v3/*: any*/),
            "handle": "connection",
            "key": "Main_linkConnection",
            "filters": [
              "limit"
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
    "text": "query MainRefetchQuery(\n  $limit: Int\n  $query: String\n) {\n  store {\n    ...Main_store_3HzzW\n    id\n  }\n}\n\nfragment Link_link on Link {\n  url\n  title\n  createdAt\n}\n\nfragment Main_store_3HzzW on Store {\n  id\n  linkConnection(first: $limit, query: $query) {\n    edges {\n      node {\n        id\n        ...Link_link\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b6778d8edfe27d07297a2fd705200cbf';

module.exports = node;
