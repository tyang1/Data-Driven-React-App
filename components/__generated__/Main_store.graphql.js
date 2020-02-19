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
  +links: ?$ReadOnlyArray<?{|
    +_id: ?string,
    +$fragmentRefs: Link_link$ref,
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
          "name": "_id",
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
};
// prettier-ignore
(node/*: any*/).hash = '6d3477137a8fc8689647ed1e64aeac09';

module.exports = node;
