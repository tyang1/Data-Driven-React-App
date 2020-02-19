/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Link_link$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Main_store$ref: FragmentReference;
declare export opaque type Main_store$fragmentType: Main_store$ref;
export type Main_store = {|
  +linkConnection: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: Link_link$ref,
      |}
    |}>
  |},
  +$refType: Main_store$ref,
|};
export type Main_store$data = Main_store;
export type Main_store$key = {
  +$data?: Main_store$data,
  +$fragmentRefs: Main_store$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Main_store",
  "type": "Store",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "limit",
      "type": "Int",
      "defaultValue": 1
    }
  ],
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
                  "kind": "FragmentSpread",
                  "name": "Link_link",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '31ff590fb0304de78495a7b00e861176';

module.exports = node;
