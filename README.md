# w-component-vue
A simple component for vue(vue2).

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![language](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://github.com/vuejs/vue) 
[![npm version](http://img.shields.io/npm/v/w-component-vue.svg?style=flat)](https://npmjs.org/package/w-component-vue) 
[![license](https://img.shields.io/npm/l/w-component-vue.svg?style=flat)](https://npmjs.org/package/w-component-vue) 
[![npm download](https://img.shields.io/npm/dt/w-component-vue.svg)](https://npmjs.org/package/w-component-vue) 
[![npm download](https://img.shields.io/npm/dm/w-component-vue.svg)](https://npmjs.org/package/w-component-vue)
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-component-vue.svg)](https://www.jsdelivr.com/package/npm/w-component-vue)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-component-vue/global.html).

## Example
To view some examples for more understanding, visit examples:

> **all components:** [web](//yuda-lyu.github.io/w-component-vue/examples/app.html) [[source code](https://github.com/yuda-lyu/w-component-vue/blob/master/docs/examples/app.html)]

## Installation

### Using npm(ES6 module):
```alias
npm i w-component-vue
```
Import all components:
```alias
//choose component
<w-text
    ...
></w-text>

//import
import WComponentVue from 'w-component-vue'

//use
Vue.use(WComponentVue)
```
Import one component:
```alias
//choose component
<w-text
    ...
></w-text>

//import
import WText from 'w-component-vue/src/components/WText.vue'

//component
Vue.component('w-text',WText)
//or
export default {
    components: {
        WText,
        //or
        'w-text': WText,
    },
    ...
}
```

### In a browser(UMD module):

Add script for vue.
```alias
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.min.js"></script>
```

[Optional] Add link for icon.
```alias
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@7.2.96/css/materialdesignicons.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.2/css/all.min.css" rel="stylesheet">
```

Add script for w-component-vue.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-component-vue@2.5.35/dist/w-component-vue.umd.js"></script>
```

Directly use:
```alias
//app and component
<div id="app">
    <w-text
        ...
    ></w-text>
</div>

//use
Vue.use(window['w-component-vue'])

//new
new Vue({
    el: '#app',
    data: {
        ...
    }
})
```

## State attribute of components with transitions

Components with transition animations expose a `state` attribute in the DOM (same vocabulary as `WDrawer`), so that applications and e2e tests can wait for a transition to finish instead of guessing with fixed delays or geometry polling. Only the attribute is added; appearance, animation time and interaction are unchanged.

| Component | Element carrying `state` | Values |
|---|---|---|
| WDrawer | root | `hidden`, `opening`, `opened`, `hiding` |
| WDialog | root | `hidden`, `opening`, `opened`, `resizing` |
| WTooltip, WPopup and components built on them (WTextSelect, WTextSuggest, WTimeday, WColorSelect...) | `.WPopperFix` (teleported to body) | `hidden`, `opening`, `opened` |
| WListExpandItem | root | `collapsed`, `expanding`, `expanded`, `collapsing` |
| WGroupTags, WGroupDragdrop | root | `idle`, `moving` |

When `state` changes:

- **WDialog**: `show` becomes true -> `opening` (overlay and panel transitions, about 0.3s) -> `opened`. After opened, a change of `fullscreen`, `minWidth`, `maxWidth`, `ratioHeightMax` or `autoFullscreenWhenNarrow` that resizes the panel -> `resizing` (100ms size transition) -> `opened`. Closing has no transition: `opened` or `resizing` goes straight to `hidden` (`hiding` is not used). The shake animation of a modal dialog (click outside) is not reflected in `state`.
- **Popper (`.WPopperFix`)**: shown -> `opening` (inner content fades and slides in during `transitionTime`, default 200ms; `.WPopperFix` itself does not move) -> `opened`. Hidden -> `hidden` immediately (no `hiding`).
- **WListExpandItem**: `active` becomes true -> `expanding` -> `expanded`; false -> `collapsing` -> `collapsed` (height and opacity transition, 0.5s). The initial render has no transition: `expanded` or `collapsed` according to `active`.
- **WGroupTags, WGroupDragdrop**: the set or order of items changes (add, remove, reorder) -> `moving` -> `idle` (enter, leave and 0.5s move transitions; a removed item stays 0.5s before it is removed and the following items move into place only then). The initial render stays `idle`.

The tip of WSlider builds its own `.WPopperFix` without a transition and has no `state`. The following are not reflected in `state`: the shake animation of a modal WDialog (click outside), a WDialog panel that resizes because the window size changed while it is fullscreen, and the height transition of an expanded WListExpandItem whose content size changed afterwards.

A transient state turns into its final state when no transition of the component's own element is running any more: it follows the element's own `transitionend`/`transitioncancel` (transitions of descendants are ignored), and a timeout fallback settles it when the events are not fired (for example under heavy load), so the final state is always reached (when no transition runs at all, for example `transitionTime` is 0 or the component is inside a hidden container, the transient state lasts until that timeout, at most about 0.8s). When the final state is reached the positions of the elements no longer change. The transient state is written in the same tick as the change that causes it (before the browser starts the transition), so reading `state` right after the triggering click already returns the transient value.

Detect with Playwright (any e2e tool that can wait for an attribute works). The attribute name `state` is shared by WDrawer, WDialog and `.WPopperFix`, so scope the selector to the component you wait for:

```alias
//wait until the dropdown (WTextSelect, WPopup...) stops moving, then measure
await page.locator('.WPopperFix[state="opened"]').waitFor()

//dialog: give the wrapper element of WDialog an id, then wait until opened (after maximize/restore, until back to opened)
await page.locator('#myDialog [state="opened"]').waitFor()
```
