---
"@patternfly/elements": major
---

Removed `<pfe-avatar>` and added `<pf-avatar>`.

- Added `border` and `alt` attributes
- Added `canvas` and `img` CSS parts

### Breaking Changes
- Removed `name`, `pattern`, and `shape` attributes
- Removed `pfe-avatar:connected` event. Use `await pfeAvatar.updateComplete` 
  instead
- Removed `pfe-avatar:options-shown`, `pfe-avatar:option-cleared`, 
  `pfe-avatar:search-event`, and `pfe-avatar:option-selected` events.
- Removed `--pfe-*` CSS custom properties in favour of `--pf-*` ones. See 
  [PFv4][PFv4] docs.

There are more changes than these, including breaking changes. See the 
[docs][docs] for more info.

[docs]: https://patternflyelements.org/components/avatar/
[PFv4]: https://patternfly.org/v4/