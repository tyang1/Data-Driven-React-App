/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Main_store$ref: FragmentReference;
declare export opaque type Main_store$fragmentType: Main_store$ref;
export type Main_store = {|
  +links: ?$ReadOnlyArray<?{|
    +url: ?string,
    +title: ?string,
    +_id: ?string,
  |}>,
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
  "argumentDefinitions": [],
  "selections": [
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
          "name": "_id",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd59ee1c6adfe93ad429e1d1f82b018be';

module.exports = node;
