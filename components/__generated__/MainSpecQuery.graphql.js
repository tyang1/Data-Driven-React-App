/**
 * @flow
 * @relayHash 63bb93b7bdc48b41b88bf8cc9cb8a3d5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Main_store$ref = any;
export type MainSpecQueryVariables = {||};
export type MainSpecQueryResponse = {|
  +store: ?{|
    +$fragmentRefs: Main_store$ref
  |}
|};
export type MainSpecQuery = {|
  variables: MainSpecQueryVariables,
  response: MainSpecQueryResponse,
|};
*/


/*
query MainSpecQuery {
  store {
    ...Main_store
    id
  }
}

fragment Link_link on Link {
  id
  url
  title
  createdAt
}

fragment Main_store on Store {
  id
  linkConnection(first: 10, query: "") {
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "query",
    "value": ""
  }
],
v2 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": false
},
v3 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MainSpecQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MainSpecQuery",
    "argumentDefinitions": [],
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
          (v0/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "linkConnection",
            "storageKey": "linkConnection(first:10,query:\"\")",
            "args": (v1/*: any*/),
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
                      (v0/*: any*/),
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
            "args": (v1/*: any*/),
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
    "name": "MainSpecQuery",
    "id": null,
    "text": "query MainSpecQuery {\n  store {\n    ...Main_store\n    id\n  }\n}\n\nfragment Link_link on Link {\n  id\n  url\n  title\n  createdAt\n}\n\nfragment Main_store on Store {\n  id\n  linkConnection(first: 10, query: \"\") {\n    edges {\n      node {\n        id\n        ...Link_link\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "store": {
          "type": "Store",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "store.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "store.linkConnection": {
          "type": "LinkConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "store.linkConnection.edges": {
          "type": "LinkEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "store.linkConnection.pageInfo": {
          "type": "PageInfo",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "store.linkConnection.edges.node": {
          "type": "Link",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "store.linkConnection.edges.node.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "store.linkConnection.edges.cursor": (v2/*: any*/),
        "store.linkConnection.pageInfo.endCursor": (v3/*: any*/),
        "store.linkConnection.pageInfo.hasNextPage": {
          "type": "Boolean",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "store.linkConnection.edges.node.url": (v3/*: any*/),
        "store.linkConnection.edges.node.title": (v3/*: any*/),
        "store.linkConnection.edges.node.createdAt": (v3/*: any*/),
        "store.linkConnection.edges.node.__typename": (v2/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2a2835a4ef63d43085f46e99b3206baf';

module.exports = node;
