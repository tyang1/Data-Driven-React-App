/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Link_link$ref: FragmentReference;
declare export opaque type Link_link$fragmentType: Link_link$ref;
export type Link_link = {|
  +url: ?string,
  +title: ?string,
  +$refType: Link_link$ref,
|};
export type Link_link$data = Link_link;
export type Link_link$key = {
  +$data?: Link_link$data,
  +$fragmentRefs: Link_link$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Link_link",
  "type": "Link",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'dae1e3919d9aed9f0821aab8cf122831';

module.exports = node;
