# w-component-vue
A combination for vue component.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![language](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://github.com/vuejs/vue) 
[![npm version](http://img.shields.io/npm/v/w-component-vue.svg?style=flat)](https://npmjs.org/package/w-component-vue) 
[![Build Status](https://travis-ci.org/yuda-lyu/w-component-vue.svg?branch=master)](https://travis-ci.org/yuda-lyu/w-component-vue) 
[![license](https://img.shields.io/npm/l/w-component-vue.svg?style=flat)](https://npmjs.org/package/w-component-vue) 
[![gzip file size](http://img.badgesize.io/yuda-lyu/w-component-vue/master/dist/w-component-vue.umd.js.svg?compression=gzip)](https://github.com/yuda-lyu/w-component-vue)
[![npm download](https://img.shields.io/npm/dt/w-component-vue.svg)](https://npmjs.org/package/w-component-vue) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-component-vue.svg)](https://www.jsdelivr.com/package/npm/w-component-vue)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-component-vue/module-WBadge.html).

## Example
To view some examples for more understanding, visit examples:

> **all components:** [web](https://yuda-lyu.github.io/w-component-vue/examples/app.html) [[source code](https://github.com/yuda-lyu/w-component-vue/blob/master/docs/examples/app.html)]

## Installation
### Using npm(ES6 module):
> **Note:** w-component-vue depends on `vuetify`.

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
```

### In a browser(UMD module):
> **Note:** umd file includes with `element-ui`, `lodash` and `wsemi`, by using tree-shaking for dead-code elimination.

[Optional] Add script with nomodule for IE11.
```alias
<script nomodule src="https://cdn.jsdelivr.net/npm/@babel/polyfill/dist/polyfill.min.js"></script>
```
[Necessary] Add script for vue.
```alias
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
```
[Optional] Add link for icon.
```alias
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css" rel="stylesheet">
<link href="https://use.fontawesome.com/releases/v5.10.0/css/all.css" rel="stylesheet">
```
[Necessary] Add script and link for vuetify.
```alias
<link href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.js"></script>
```
[Necessary] Add script for w-component-vue.
```alias
<script src="https://cdn.jsdelivr.net/npm/w-component-vue@1.2.21/dist/w-component-vue.umd.js"></script>
```
Directly use:
```alias
//choose component
<w-text
    ...
></w-text>

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