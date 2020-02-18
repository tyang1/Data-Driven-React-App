/**
 * @flow
 * @relayHash c9c69aebfdb0cc7efb4e4f98fc75e4f3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type appQueryVariables = {||};
export type appQueryResponse = {|
  +links: ?$ReadOnlyArray<?{|
    +title: ?string
  |}>
|};
export type appQuery = {|
  variables: appQueryVariables,
  response: appQueryResponse,
|};
*/


/*
query appQuery {
  links {
    title
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "links",
    "storageKey": null,
    "args": null,
    "concreteType": "LinkType",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "appQuery",
    "id": null,
    "text": "query appQuery {\n  links {\n    title\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'adfa4d2e12906d15142d4263e47a6805';

module.exports = node;
