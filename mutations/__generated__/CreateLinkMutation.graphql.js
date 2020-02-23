/**
 * @flow
 * @relayHash 4d9cca7616069bdba4771dcb58e575a0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateLinkInput = {|
  title: string,
  url: string,
  clientMutationId?: ?string,
|};
export type CreateLinkMutationVariables = {|
  input: CreateLinkInput
|};
export type CreateLinkMutationResponse = {|
  +createLinks: ?{|
    +linkEdge: ?{|
      +node: ?{|
        +url: ?string,
        +title: ?string,
        +createdAt: ?string,
      |}
    |}
  |}
|};
export type CreateLinkMutation = {|
  variables: CreateLinkMutationVariables,
  response: CreateLinkMutationResponse,
|};
*/


/*
mutation CreateLinkMutation(
  $input: CreateLinkInput!
) {
  createLinks(input: $input) {
    linkEdge {
      node {
        url
        title
        createdAt
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateLinkInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateLinkMutation",
    "type": "mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createLinks",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateLinkPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "linkEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "LinkEdge",
            "plural": false,
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
                  (v3/*: any*/),
                  (v4/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateLinkMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createLinks",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateLinkPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "linkEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "LinkEdge",
            "plural": false,
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
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
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateLinkMutation",
    "id": null,
    "text": "mutation CreateLinkMutation(\n  $input: CreateLinkInput!\n) {\n  createLinks(input: $input) {\n    linkEdge {\n      node {\n        url\n        title\n        createdAt\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e38e62d31ee6a023366d213dcd499593';

module.exports = node;
