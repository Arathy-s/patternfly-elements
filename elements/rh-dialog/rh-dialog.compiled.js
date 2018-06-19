!function(e,t){if("function"==typeof define&&define.amd)define(["../rhelement/rhelement.compiled.js","../../dialog-polyfill/dialog-polyfill.js"],t);else if("undefined"!=typeof exports)t(require("../rhelement/rhelement.compiled.js"),require("../../dialog-polyfill/dialog-polyfill.js"));else{t(e.rhelementCompiled,e.dialogPolyfill),e.rhDialog={}}}(this,function(e){"use strict";var t,n=(t=e)&&t.__esModule?t:{default:t};var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var i=document.createElement("template");i.innerHTML="\n<style>dialog {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  margin: auto;\n  border: solid;\n  padding: 1em;\n  background: white;\n  color: black;\n  display: block; }\n\ndialog:not([open]) {\n  display: none; }\n\ndialog + .backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.1); }\n\n._dialog_overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\ndialog.fixed {\n  position: fixed;\n  top: 50%;\n  transform: translate(0, -50%); }</style>\n<dialog>\n    <slot></slot>\n  </dialog>\n";var r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"rh-dialog",i))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default),o(t,[{key:"connectedCallback",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var l=i.get;return void 0!==l?l.call(o):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=this.shadowRoot.querySelector("dialog");dialogPolyfill.registerDialog(e);var n=document.querySelector(this.getAttribute("data-trigger")),o=document.querySelector("#cancel");n.addEventListener("click",function(){e.showModal()}),o.addEventListener("click",function(){e.close()})}},{key:"disconnectedCallback",value:function(){}}]),t}();window.customElements.define("rh-dialog",r)});