/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,i,o){var a,r=arguments.length,s=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(s=(r<3?a(s):r>3?a(t,i,s):a(t,i))||s);return r>3&&s&&Object.defineProperty(t,i,s),s
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol();class o{constructor(e,t){if(t!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return t&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const a=new Map,r=e=>{let t=a.get(e);return void 0===t&&a.set(e,t=new o(e,i)),t},s=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,a)=>t+(e=>{if(e instanceof o)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1]),e[0]);return r(i)},n=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>r("string"==typeof e?e:e+""))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l,c,d,h;const u={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},m=(e,t)=>t!==e&&(t==t||e==e),b={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m};class g extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(e){var t;null!==(t=this.v)&&void 0!==t||(this.v=[]),this.v.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const o=this.Πp(i,t);void 0!==o&&(this.Πm.set(o,i),e.push(o))})),e}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const a=this[e];this[t]=o,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||b}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static"Πp"(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this.Πg=new Promise((e=>this.enableUpdating=e)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(e=this.constructor.v)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this.ΠU)&&void 0!==t?t:this.ΠU=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this.ΠU)||void 0===t||t.splice(this.ΠU.indexOf(e)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this.Πi.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((t=>{const i=document.createElement("style");i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)})),this.Πo=new Promise((e=>this.Πl=e))}attributeChangedCallback(e,t,i){this.K(e,i)}"Πj"(e,t,i=b){var o,a;const r=this.constructor.Πp(e,i);if(void 0!==r&&!0===i.reflect){const s=(null!==(a=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==a?a:u.toAttribute)(t,i.type);this.Πh=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this.Πh=null}}K(e,t){var i,o,a;const r=this.constructor,s=r.Πm.get(e);if(void 0!==s&&this.Πh!==s){const e=r.getPropertyOptions(s),n=e.converter,l=null!==(a=null!==(o=null===(i=n)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof n?n:null)&&void 0!==a?a:u.fromAttribute;this.Πh=s,this[s]=l(t,e.type),this.Πh=null}}requestUpdate(e,t,i){let o=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this.L.has(e)||this.L.set(e,t),!0===i.reflect&&this.Πh!==e&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(e,i))):o=!1),!this.isUpdatePending&&o&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}const e=this.performUpdate();return null!=e&&await e,!this.isUpdatePending}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((e,t)=>this[t]=e)),this.Πi=void 0);let t=!1;const i=this.L;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this.Π$()}catch(e){throw t=!1,this.Π$(),e}t&&this.E(i)}willUpdate(e){}E(e){var t;null===(t=this.ΠU)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(e){return!0}update(e){void 0!==this.Πk&&(this.Πk.forEach(((e,t)=>this.Πj(t,this[t],e))),this.Πk=void 0),this.Π$()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p,_,f,v;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null===(c=(l=globalThis).reactiveElementPlatformSupport)||void 0===c||c.call(l,{ReactiveElement:g}),(null!==(d=(h=globalThis).reactiveElementVersions)&&void 0!==d?d:h.reactiveElementVersions=[]).push("1.0.0-rc.2");const y=globalThis.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,k=`lit$${(Math.random()+"").slice(9)}$`,x="?"+k,$=`<${x}>`,S=document,A=(e="")=>S.createComment(e),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,I=Array.isArray,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,P=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,N=/'/g,T=/"/g,B=/^(?:script|style|textarea)$/i,z=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),U=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),H=new WeakMap,D=S.createTreeWalker(S,129,null,!1);class j{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,r=0;const s=e.length-1,n=this.parts,[l,c]=((e,t)=>{const i=e.length-1,o=[];let a,r=2===t?"<svg>":"",s=O;for(let t=0;t<i;t++){const i=e[t];let n,l,c=-1,d=0;for(;d<i.length&&(s.lastIndex=d,l=s.exec(i),null!==l);)d=s.lastIndex,s===O?"!--"===l[1]?s=M:void 0!==l[1]?s=P:void 0!==l[2]?(B.test(l[2])&&(a=RegExp("</"+l[2],"g")),s=C):void 0!==l[3]&&(s=C):s===C?">"===l[0]?(s=null!=a?a:O,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?C:'"'===l[3]?T:N):s===T||s===N?s=C:s===M||s===P?s=O:(s=C,a=void 0);const h=s===C&&e[t+1].startsWith("/>")?" ":"";r+=s===O?i+$:c>=0?(o.push(n),i.slice(0,c)+"$lit$"+i.slice(c)+k+h):i+k+(-2===c?(o.push(void 0),t):h)}const n=r+(e[i]||"<?>")+(2===t?"</svg>":"");return[void 0!==w?w.createHTML(n):n,o]})(e,t);if(this.el=j.createElement(l,i),D.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=D.nextNode())&&n.length<s;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(k)){const i=c[r++];if(e.push(t),void 0!==i){const e=o.getAttribute(i.toLowerCase()+"$lit$").split(k),t=/([.?@])?(.*)/.exec(i);n.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?Z:"@"===t[1]?q:W})}else n.push({type:6,index:a})}for(const t of e)o.removeAttribute(t)}if(B.test(o.tagName)){const e=o.textContent.split(k),t=e.length-1;if(t>0){o.textContent=y?y.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],A()),D.nextNode(),n.push({type:2,index:++a});o.append(e[t],A())}}}else if(8===o.nodeType)if(o.data===x)n.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(k,e+1));)n.push({type:7,index:a}),e+=k.length-1}a++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function G(e,t,i=e,o){var a,r,s,n;if(t===U)return t;let l=void 0!==o?null===(a=i.Σi)||void 0===a?void 0:a[o]:i.Σo;const c=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l.O)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l.T(e,i,o)),void 0!==o?(null!==(s=(n=i).Σi)&&void 0!==s?s:n.Σi=[])[o]=l:i.Σo=l),void 0!==l&&(t=G(e,l.S(e,t.values),l,o)),t}class L{constructor(e,t){this.l=[],this.N=void 0,this.D=e,this.M=t}u(e){var t;const{el:{content:i},parts:o}=this.D,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(i,!0);D.currentNode=a;let r=D.nextNode(),s=0,n=0,l=o[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new V(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new F(r,this,e)),this.l.push(t),l=o[++n]}s!==(null==l?void 0:l.index)&&(r=D.nextNode(),s++)}return a}v(e){let t=0;for(const i of this.l)void 0!==i&&(void 0!==i.strings?(i.I(e,i,t),t+=i.strings.length-2):i.I(e[t])),t++}}class V{constructor(e,t,i,o){this.type=2,this.N=void 0,this.A=e,this.B=t,this.M=i,this.options=o}setConnected(e){var t;null===(t=this.P)||void 0===t||t.call(this,e)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(e,t=this){e=G(this,e,t),E(e)?e===R||null==e||""===e?(this.H!==R&&this.R(),this.H=R):e!==this.H&&e!==U&&this.m(e):void 0!==e._$litType$?this._(e):void 0!==e.nodeType?this.$(e):(e=>{var t;return I(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.g(e):this.m(e)}k(e,t=this.B){return this.A.parentNode.insertBefore(e,t)}$(e){this.H!==e&&(this.R(),this.H=this.k(e))}m(e){const t=this.A.nextSibling;null!==t&&3===t.nodeType&&(null===this.B?null===t.nextSibling:t===this.B.previousSibling)?t.data=e:this.$(S.createTextNode(e)),this.H=e}_(e){var t;const{values:i,_$litType$:o}=e,a="number"==typeof o?this.C(e):(void 0===o.el&&(o.el=j.createElement(o.h,this.options)),o);if((null===(t=this.H)||void 0===t?void 0:t.D)===a)this.H.v(i);else{const e=new L(a,this),t=e.u(this.options);e.v(i),this.$(t),this.H=e}}C(e){let t=H.get(e.strings);return void 0===t&&H.set(e.strings,t=new j(e)),t}g(e){I(this.H)||(this.H=[],this.R());const t=this.H;let i,o=0;for(const a of e)o===t.length?t.push(i=new V(this.k(A()),this.k(A()),this,this.options)):i=t[o],i.I(a),o++;o<t.length&&(this.R(i&&i.B.nextSibling,o),t.length=o)}R(e=this.A.nextSibling,t){var i;for(null===(i=this.P)||void 0===i||i.call(this,!1,!0,t);e&&e!==this.B;){const t=e.nextSibling;e.remove(),e=t}}}class W{constructor(e,t,i,o,a){this.type=1,this.H=R,this.N=void 0,this.V=void 0,this.element=e,this.name=t,this.M=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this.H=Array(i.length-1).fill(R),this.strings=i):this.H=R}get tagName(){return this.element.tagName}I(e,t=this,i,o){const a=this.strings;let r=!1;if(void 0===a)e=G(this,e,t,0),r=!E(e)||e!==this.H&&e!==U,r&&(this.H=e);else{const o=e;let s,n;for(e=a[0],s=0;s<a.length-1;s++)n=G(this,o[i+s],t,s),n===U&&(n=this.H[s]),r||(r=!E(n)||n!==this.H[s]),n===R?e=R:e!==R&&(e+=(null!=n?n:"")+a[s+1]),this.H[s]=n}r&&!o&&this.W(e)}W(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class K extends W{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===R?void 0:e}}class Z extends W{constructor(){super(...arguments),this.type=4}W(e){e&&e!==R?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class q extends W{constructor(){super(...arguments),this.type=5}I(e,t=this){var i;if((e=null!==(i=G(this,e,t,0))&&void 0!==i?i:R)===U)return;const o=this.H,a=e===R&&o!==R||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==R&&(o===R||a);a&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this.H=e}handleEvent(e){var t,i;"function"==typeof this.H?this.H.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this.H.handleEvent(e)}}class F{constructor(e,t,i){this.element=e,this.type=6,this.N=void 0,this.V=void 0,this.M=t,this.options=i}I(e){G(this,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,Y,Q,X,ee,te;null===(_=(p=globalThis).litHtmlPlatformSupport)||void 0===_||_.call(p,j,V),(null!==(f=(v=globalThis).litHtmlVersions)&&void 0!==f?f:v.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(J=(te=globalThis).litElementVersions)&&void 0!==J?J:te.litElementVersions=[]).push("3.0.0-rc.2");class ie extends g{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();super.update(e),this.Φt=((e,t,i)=>{var o,a;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:t;let s=r._$litPart$;if(void 0===s){const e=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:null;r._$litPart$=s=new V(t.insertBefore(A(),e),e,void 0,i)}return s.I(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this.Φt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.Φt)||void 0===e||e.setConnected(!1)}render(){return U}}ie.finalized=!0,ie._$litElement$=!0,null===(Q=(Y=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(Y,{LitElement:ie}),null===(ee=(X=globalThis).litElementPlatformSupport)||void 0===ee||ee.call(X,{LitElement:ie});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ae=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function re(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ae(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function se(e){return re({...e,state:!0,attribute:!1})}var ne="[^\\s]+";function le(e,t){for(var i=[],o=0,a=e.length;o<a;o++)i.push(e[o].substr(0,t));return i}var ce=function(e){return function(t,i){var o=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return o>-1?o:null}};function de(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var o=0,a=t;o<a.length;o++){var r=a[o];for(var s in r)e[s]=r[s]}return e}var he=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ue=["January","February","March","April","May","June","July","August","September","October","November","December"],me=le(ue,3),be={dayNamesShort:le(he,3),dayNames:he,monthNamesShort:me,monthNames:ue,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},ge=(de({},be),function(e){return+e-1}),pe=[null,"[1-9]\\d?"],_e=[null,ne],fe=["isPm",ne,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],ve=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}];ce("monthNamesShort"),ce("monthNames");var ye;!function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(ye||(ye={}));var we=function(e,t,i,o){o=o||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=i,e.dispatchEvent(a),a};var ke={version:"Version",name:"BodyMiScale Karte",description:"Die BodyMiScale Karte zeigt Ihren gewichtsmäßigen Körperstatus an.",not_available:"BodyMiScale ist momenatan nicht verfügbar",toggle_power:"Weitere Details wie BMI kCal anzeigen / ausblenden"},xe={ok:"MESSUNG: OK",unknown:"STATUS: unbekannt",problem:"Problem",none:"keine","weight unavailable":"Gewichts Messung nicht verfügbar","impedance unavailable":"Bioelektrische Impedanz Messung (Körperzusammensetzung) nicht verfügbar","weight unavailable, impedance unavailable":"Gewichts und bioelektrische Impedanz Messung (Körperzusammensetzung) nicht verfügbar."},$e={"weight: ":"Gewicht: ","impedance: ":"Zusammensetzung: ","height: ":"Körpergröße: ","age: ":"Alter: ","gender: ":"Geschlecht: "},Se={male:"männl.",female:"weibl.","unavailable kg":"Gewichtsmessung momentan nicht verfügbar","unavailable ohm":"Bio Impedanzmessung momentan nicht verfügbar"},Ae={bmi:"BMI",bmi_label:"BMI Klassifikation",visceral_fat:"Bauchfett",body_fat:"Körperfett",protein:"Protein",water:"Wasser",muscle_mass:"Muskelmasse",bone_mass:"Knochenmasse",weight:"Gewicht",ideal:"Idealgewicht",basal_metabolism:"Grundumsatz",body_type:"Körperbau",metabolic_age:"stoffwechselbedingtes Körperalter"},Ee={Skinny:"schlank","Balanced-skinny":"ausgeglichen schlank","Skinny-muscular":"muskulös schlank",Balanced:"ausgewogen","Balanced-muscular":"ausgewogen muskulös","Lack-exercise":"Bewegungsmangel","Thick-set":"stämmig",Obese:"fettleibig",Overweight:"übergewicht",Underweight:"Untergewicht","Normal or Healthy Weight":"Normal - gesundes Gewicht","Slight overweight":"leichtes Übergewicht","Moderate obesity":"moderate Fettleibigkeit","Severe obesity":"schwere Fettleibigkeit","Massive obesity":"massive Fettleibigkeit"},Ie={" years":" Jahre"},Oe={missing_entity:"Bitte definieren Sie einen Waagen Sensor in der Konfiguration.",missing_entity_bodymiscale:"Bitte definieren Sie den Waagen Sensor in der Konfiguration."},Me={entity:"Bitte ein Konto auf der Waage wählen (erforderlich) !",image:"Hintergrundbild (optional)",model:"AKTIVIEREN, wenn auf der Waage 4 graue, 5 cm Ø Kreise sind",model1:"( = Modell 181B) !",model_aria_label_on:"Umschalten von Modell Impedanzmessung ein",model_aria_label_off:"Modell Impedanzmessung ausschalten",show_name:"Namen des Konto als Titel anzeigen ?",show_name_aria_label_on:"Namensanzeige einschalten",show_name_aria_label_off:"Namesanzeige ausschalten",show_states:"Status anzeigen (Symbole links oben) ?",show_states_aria_label_on:"Statusanzeige einschalten",show_states_aria_label_off:"Statusanzeige ausschalten",show_attributes:"persönliche Stammdaten anzeigen (rechts oben) ?",show_attributes_aria_label_on:"Basis Daten einblenden (rechts oben) einschalten",show_attributes_aria_label_off:"Basis Daten einblenden (rechts oben) ausschalten",show_toolbar:"Fortgeschrittene Optionen anzeigen ?",show_toolbar_aria_label_on:"Symbolleiste anzeigen einschalten",show_toolbar_aria_label_off:"Symbolleiste anzeigen ausschalten",show_body:"Weitere Messergebnisse anbieten",show_body1:"(untere Hälfte - per Chevron-Symbol einblenden) ?",show_body_aria_label_on:"Körperwertanzeige einschalten",show_body_aria_label_off:"Körperwertanzeige ausschalten",show_buttons:"Kontowechsel erlauben ?",show_buttons_aria_label_on:"Schaltfläche anzeigen einschalten",show_buttons_aria_label_off:"Schaltfläche anzeigen ausschalten",code_information:"ÄNDERUNGEN WERDEN ERST NACH DEM SPEICHERN SICHTBAR.",header_options:"1. Kartenkopf Optionen",body_options:"2. mehr Kartenoptionen",warning:"ACHTUNG:",code_only_note:"Weitere Optionen sind nur im Code Editor verfügbar."},Pe={common:ke,states:xe,attributes:$e,attributes_value:Se,body:Ae,body_value:Ee,unit:Ie,error:Oe,editor:Me},Ce={version:"Version",name:"BodyMiScale Card",description:"The bodymiscale card shows you your weight wise / related body status.",not_available:"BodyMiScale is not available",toggle_power:"More details like BMI kCal show / hide"},Ne={ok:"MEASUREMENT: OK",unknown:"STATE: unknown",problem:"Problem",none:"None","weight unavailable":"Weight unavailable","impedance unavailable":"Impedance unavailable","weight unavailable, impedance unavailable":"Weight unavailable, impedance unavailable","weight low":"Weight low","impedance low":"Impedance low","weight low, impedance low":"Weight low, impedance low","weight high":"Weight high","impedance high":"Impedance high","weight high, impedance high":"Weight high, impedance high","weight high, impedance low":"Weight high, impedance low","weight low, impedance high":"Weight low, impedance high"},Te={"weight: ":"Weight: ","impedance: ":"Impedance: ","height: ":"Height: ","age: ":"Age: ","gender: ":"Gender: "},Be={male:"male",female:"female","unavailable kg":"unavailable","unavailable ohm":"unavailable"},ze={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Visceral fat",body_fat:"Body fat",protein:"Protein",water:"Water",muscle_mass:"Muscle mass",bone_mass:"Bone mass",weight:"Weight",ideal:"Ideal",basal_metabolism:"Basal metabolism",body_type:"Body type",metabolic_age:"Metabolic age"},Ue={Skinny:"Skinny","Balanced-skinny":"Balanced-skinny","Skinny-muscular":"Skinny-muscular",Balanced:"Balanced","Balanced-muscular":"Balanced-muscular","Lack-exercise":"Lack-exercise","Thick-set":"Thick-set",Obese:"Obese",Overweight:"Overweight",Underweight:"Underweight","Normal or Healthy Weight":"Normal or Healthy Weight","Slight overweight":"Slight overweight","Moderate obesity":"Moderate obesity","Severe obesity":"Severe obesity","Massive obesity":"Massive obesity"},Re={" years":" years"},He={missing_entity:"Please define an entity.",missing_entity_bodymiscale:"Please define a bodymiscale entity."},De={entity:"Please select an account on the scale (required) !",image:"Background image (optional)",model:"ACTIVATE if the scale has 4 grey circles of 5 cm Ø on top",model1:"( = model 181B) !",model_aria_label_on:"Toggle model impedance on",model_aria_label_off:"Toggle model impedance off",show_name:"Show the name of the account as title ?",show_name_aria_label_on:"Toggle display name on",show_name_aria_label_off:"Toggle display name off",show_states:"Show State ?",show_states_aria_label_on:"Toggle display state on",show_states_aria_label_off:"Toggle display state off",show_attributes:"Show personal master data (top right) ?",show_attributes_aria_label_on:"Toggle display attributes on",show_attributes_aria_label_off:"Toggle display attributes off",show_toolbar:"Show advanced options ?",show_toolbar_aria_label_on:"Toggle display advanced options on",show_toolbar_aria_label_off:"Toggle display advanced options off",show_body:"Offer further measurement details",show_body1:"(lower half - icon chevron down will show those) ?",show_body_aria_label_on:"Toggle display body score on",show_body_aria_label_off:"Toggle display body score off",show_buttons:"Allow account switch ?",show_buttons_aria_label_on:"Toggle display buttons on",show_buttons_aria_label_off:"Toggle display buttons off",code_information:"CHANGES WILL ONLY APPEAR AFTER THEY HAVE BEEN SAVED.",header_options:"1. Card header options",body_options:"2. More card options",warning:"ATTENTION:",code_only_note:"Additional options are only available in the code editor."},je={common:Ce,states:Ne,attributes:Te,attributes_value:Be,body:ze,body_value:Ue,unit:Re,error:He,editor:De},Ge={version:"Version",name:"Carte BodyMiScale",description:"La carte bodymiscale corporelle vous indique votre poids et votre état corporel.",not_available:"BodyMiScale n'est pas disponible",toggle_power:"Plus de détails comme IMC kCal afficher / cacher"},Le={ok:"MESURE: OK",unknown:"ÉTAT: inconnu",problem:"Problème",none:"Aucun","weight unavailable":"Poids indisponible","impedance unavailable":"Impédance indisponible","weight unavailable, impedance unavailable":"Poids indisponible, impédance indisponible","weight low":"Poids faible","impedance low":"Impédance faible","weight low, impedance low":"Poids faible, impédance faible","weight high":"Poids élevé","impedance high":"Impédance élevé","weight high, impedance high":"Poids élevé, impédance élevé","weight high, impedance low":"Poids élevé, impédance faible","weight low, impedance high":"Poids faible, impédance élevé"},Ve={"weight: ":"Poids: ","impedance: ":"Impédance: ","height: ":"Taille: ","age: ":"Age: ","gender: ":"Genre: "},We={male:"homme",female:"femme","unavailable kg":"indisponible","unavailable ohm":"indisponible"},Ke={bmi:"IMC",bmi_label:"Étiquette IMC",visceral_fat:"Graisse viscérale",body_fat:"Graisse corporelle",protein:"Protéine",water:"Eau",muscle_mass:"Muscle",bone_mass:"Masse osseuse",weight:"Poids",ideal:"Poids idéal",basal_metabolism:"Métabolisme de base",body_type:"Corpulence",metabolic_age:"Age corporel"},Ze={Skinny:"Maigre","Balanced-skinny":"Équilibré maigre","Skinny-muscular":"Maigre musclé",Balanced:"Équilibré","Balanced-muscular":"Musclé équilibré","Lack-exercise":"Manque d'exercice","Thick-set":"Trapu",Obese:"Obèse",Overweight:"Surpoids",Underweight:"Insuffisance pondérale","Normal or Healthy Weight":"Normal - poids de santé","Slight overweight":"Léger surpoids","Moderate obesity":"Obésité modérée","Severe obesity":"Obésité sévère","Massive obesity":"Obésité massive"},qe={" years":" ans"},Fe={missing_entity:"Veuillez définir une entité.",missing_entity_bodymiscale:"Veuillez définir une entité Bodymiscale."},Je={entity:"Veuillez choisir un compte de la balance (obligatoire) !",image:"Image de fond (facultatif)",model:"ACTIVER si la balance à 4 cercles gris de 5 cm Ø en haut",model1:"( = modèle 181B) !",model_aria_label_on:"Activer la balance à 4 cercles gris de 5 cm Ø en haut",model_aria_label_off:"Désactiver la balance à 4 cercles gris de 5 cm Ø en haut",show_name:"Afficher le nom du compte comme titre ?",show_name_aria_label_on:"Activer affichage du nom",show_name_aria_label_off:"Désactiver affichage du nom",show_states:"Afficher l'état ?",show_states_aria_label_on:"Activer l'affichage de l'état",show_states_aria_label_off:"Désactiver l'affichage de l'état",show_attributes:"Afficher les données personnelles de base (en haut à droite) ?",show_attributes_aria_label_on:"Activer l'affichage des données personnelles de base",show_attributes_aria_label_off:"Désactiver l'affichage des données personnelles de base",show_toolbar:"Afficher les options avancées ?",show_toolbar_aria_label_on:"Activer l'affichage des options avancées",show_toolbar_aria_label_off:"Désactiver l'affichage des options avancées",show_body:"Offrir d'autres détails de mesure",show_body1:"(partie inférieure - affichage via l'icone chevron bas) ?",show_body_aria_label_on:"Activer l'affichage des autres détails de mesure",show_body_aria_label_off:"Désactiver l'affichage des autres détails de mesure",show_buttons:"Autoriser le changement de compte ?",show_buttons_aria_label_on:"Activer le changement de compte",show_buttons_aria_label_off:"Désactiver le changement de compte",code_information:"LES MODIFICATIONS N'APPARAÎTRONT QU'APRÈS AVOIR ÉTÉ SAUVEGARDÉES",warning:"ATTENTION:",header_options:"1. Options d'en-tête de la carte",body_options:"2. Plus d'options de la cartes",code_only_note:"Les options supplémentaires ne sont disponibles que dans l'éditeur de code."},Ye={common:Ge,states:Le,attributes:Ve,attributes_value:We,body:Ke,body_value:Ze,unit:qe,error:Fe,editor:Je},Qe={version:"Versie",name:"BodyMiScale Card",description:"De bodymiscale kaart toont u uw gewicht / gerelateerde lichaamsstatus.",not_available:"Bodymiscale is niet beschikbaar",toggle_power:"Meer details zoals BMI kCal tonen / verbergen"},Xe={ok:"METING: OK",unknown:"STATUS: onbekend",problem:"Probleem",none:"Geen","weight unavailable":"Gewicht niet beschikbar","impedance unavailable":"Impedantie niet beschikbaar","weight unavailable, impedance unavailable":"Gewicht niet beschikbaar, impedantie niet beschikbaar","weight low":"Gewicht laag","impedance low":"Impedantie laag","weight low, impedance low":"Gewicht laag, impedantie laag","weight high":"Gewicht hoog","impedance high":"Impedantie hoog","weight high, impedance high":"Gewicht hoog, impedantie hoog","weight high, impedance low":"Gewicht hoog, impedantie laag","weight low, impedance high":"Gewicht laag, impedantie hoog"},et={"weight: ":"Gewicht: ","impedance: ":"Impedantie: ","height: ":"Lengte: ","age: ":"Leeftijd: ","gender: ":"Geslacht: "},tt={male:"man",female:"vrouw","unavailable kg":"niet beschikbaar","unavailable ohm":"niet beschikbaar"},it={bmi:"BMI",bmi_label:"BMI label",visceral_fat:"Visceraal vet",body_fat:"Lichaamsvet",protein:"Proteine",water:"Water",muscle_mass:"Spiermassa",bone_mass:"Botgewicht",weight:"Gewicht",ideal:"Ideaal",basal_metabolism:"Basaal metabolisme",body_type:"Lichaamstype",metabolic_age:"Metabolistische leeftijd"},ot={Skinny:"Mager","Balanced-skinny":"Gebalanceerd-mager","Skinny-muscular":"Mager-gespierd",Balanced:"Gebalanceerd","Balanced-muscular":"Gebalanceerd-gespierd","Lack-exercise":"Weinig-beweging","Thick-set":"Dik",Obese:"Obesitas",Overweight:"Overgewicht",Underweight:"Ondergewicht","Normal or Healthy Weight":"Normaal of gezond gewicht","Slight overweight":"Licht overgewicht","Moderate obesity":"Gemiddeld overgewicht","Severe obesity":"Ruim overgewicht","Massive obesity":"Enorm overgewicht"},at={" years":" jaren"},rt={missing_entity:"Geef een entiteit in.",missing_entity_bodymiscale:"Geef een bodymiscale entiteit in."},st={entity:"Kies een account op de schaal (verplicht) !",image:"Achtergrondafbeelding (facultatief)",model:"ACTIVEREN indien de weegschaal 4 grijze cirkels van 5 cm Ø",model1:"aan de bovenkant heeft ( = model 181B) !",model_aria_label_on:"Model impedantiemeting inschakelen",model_aria_label_off:"Model impedantiemeting uitschakelen",show_name:"Toon de naam van de rekening als titel ?",show_name_aria_label_on:"Zet naam aan",show_name_aria_label_off:"Zet naam uit",show_states:"Geef status weer ?",show_states_aria_label_on:"Zet status aan",show_states_aria_label_off:"Zet status uit",show_attributes:"Persoonlijke stamgegevens weergeven (rechtsboven) ?",show_attributes_aria_label_on:"Zet attributen aan",show_attributes_aria_label_off:"Zet attributen uit",show_toolbar:"Toon geavanceerde opties ?",show_toolbar_aria_label_on:"Zet knoppenbalk aan",show_toolbar_aria_label_off:"Zet knoppenbalk uit",show_body:"Bieden verdere meting details",show_body1:"(onderste helft - pictogram chevron naar beneden zal tonen die) ?",show_body_aria_label_on:"Zet lichaamsscore aan",show_body_aria_label_off:"Zet lichaamsscore uit",show_buttons:"Accountwissel toestaan ?",show_buttons_aria_label_on:"Zet knoppen aan",show_buttons_aria_label_off:"Zet knoppen uit",code_information:"WIJZIGINGEN VERSCHIJNEN PAS NADAT ZE ZIJN OPGESLAGEN.",header_options:"1. Kaart koptekst opties",body_options:"2. Meer boordopties",warning:"LET OP:",code_only_note:"Extra opties zijn alleen beschikbaar in de code editor."},nt={common:Qe,states:Xe,attributes:et,attributes_value:tt,body:it,body_value:ot,unit:at,error:rt,editor:st},lt={version:"Versão",name:"BodyMiScale Card",description:"O cartão bodymiscale mostra-lhe o estado do seu corpo em relação ao peso.",not_available:"Bodymiscale não é avaialável",toggle_power:"Mais detalhes como o kCal show / hide da BMI"},ct={ok:"MEDIÇÃO: OK",unknown:"ESTATUTO: desconhecido",problem:"Problema",none:"Nenhum","weight unavailable":"Peso indisponível","impedance unavailable":"Impedance indisponível","weight unavailable, impedance unavailable":"Peso indisponível, impedance indisponível","weight low":"Peso baixo","impedance low":"Impedância baixa","weight low, impedance low":"Peso baixo, impedância baixa","weight high":"Peso alto","impedance high":"Impedância alta","weight high, impedance high":"Peso alto, impedância alta","weight high, impedance low":"Peso alto, impedância baixa","weight low, impedance high":"Peso baixo, impedância alta"},dt={"weight: ":"Peso: ","impedance: ":"Impedance: ","height: ":"Cintura: ","age: ":"Idade: ","gender: ":"Gênero: "},ht={male:"macho",female:"fêmea","unavailable kg":"indisponível","unavailable ohm":"indisponível"},ut={bmi:"IMC",bmi_label:"Etiqueta IMC",visceral_fat:"Gordura visceral",body_fat:"Gordura corporal",protein:"Proteína",water:"Água",muscle_mass:"Massa muscular",bone_mass:"Massa óssea",weight:"Peso",ideal:"Ideal",basal_metabolism:"Metabolismo basal",body_type:"Tipo de corpo",metabolic_age:"Idade metabólica"},mt={Skinny:"Magro","Balanced-skinny":"Magro equilibrado","Skinny-muscular":"Magro musculoso",Balanced:"Equilibrado","Balanced-muscular":"Musculoso equilibrado","Lack-exercise":"Falta de exercício","Thick-set":"Grosso-conjunto",Obese:"Obeso",Overweight:"Sobrepeso",Underweight:"Underweight","Normal or Healthy Weight":"Normal","Slight overweight":"Ligeiro acima do peso","Moderate obesity":"Obesidade moderada","Severe obesity":"Obesidade severa","Massive obesity":"Obesidade maciça"},bt={" years":" Anos"},gt={missing_entity:"Por favor, defina uma entidade.",missing_entity_bodymiscale:"Por favor, defina uma entidade bodymiscale."},pt={entity:"Por favor, escolha uma conta na escala (obrigatório) !",image:"Imagem de fundo (opcional)",model:"ATIVAR se a escala tiver 4 círculos cinzentos de 5 cm Ø no topo",model1:"( = modelo 181B) !",model_aria_label_on:"Alternar o modelo impedância em",model_aria_label_off:"Alternar o modelo impedância desligado",show_name:"Mostrar o nome da conta como título ?",show_name_aria_label_on:"Alternar o nome da exibição",show_name_aria_label_off:"Alternar o nome da exibição",show_states:"Mostrar Estado ?",show_states_aria_label_on:"Alternar estado de exibição ligado",show_states_aria_label_off:"Alternar estado de exibição fora",show_attributes:"Mostrar dados mestres pessoais (canto superior direito) ?",show_attributes_aria_label_on:"Alternar atributos de exibição em",show_attributes_aria_label_off:"Alternar atributos de exibição fora",show_toolbar:"Mostrar opções avançadas ?",show_toolbar_aria_label_on:"Alternar a barra de ferramentas do display em",show_toolbar_aria_label_off:"Alternar barra de ferramentas de exibição fora",show_body:"Oferecer mais detalhes de medição",show_body1:"(parte inferior - ícone chevron down mostrará aqueles) ?",show_body_aria_label_on:"Alternar a pontuação do corpo do display em",show_body_aria_label_off:"Alternar a pontuação do corpo do display fora",show_buttons:"Permitir a troca de conta ?",show_buttons_aria_label_on:"Alternar botões de exibição",show_buttons_aria_label_off:"Alternar botões de exibição desligados",code_information:"AS MUDANÇAS SÓ APARECERÃO DEPOIS DE TEREM SIDO SALVAS.",header_options:"1. Opções do cabeçalho do cartão",body_options:"2. Mais opções de placas",warning:"CUIDADO:",code_only_note:"Opções adicionais estão disponíveis apenas no editor de código."},_t={common:lt,states:ct,attributes:dt,attributes_value:ht,body:ut,body_value:mt,unit:bt,error:gt,editor:pt};const ft={de:Object.freeze({__proto__:null,common:ke,states:xe,attributes:$e,attributes_value:Se,body:Ae,body_value:Ee,unit:Ie,error:Oe,editor:Me,default:Pe}),en:Object.freeze({__proto__:null,common:Ce,states:Ne,attributes:Te,attributes_value:Be,body:ze,body_value:Ue,unit:Re,error:He,editor:De,default:je}),fr:Object.freeze({__proto__:null,common:Ge,states:Le,attributes:Ve,attributes_value:We,body:Ke,body_value:Ze,unit:qe,error:Fe,editor:Je,default:Ye}),nl:Object.freeze({__proto__:null,common:Qe,states:Xe,attributes:et,attributes_value:tt,body:it,body_value:ot,unit:at,error:rt,editor:st,default:nt}),pt_BR:Object.freeze({__proto__:null,common:lt,states:ct,attributes:dt,attributes_value:ht,body:ut,body_value:mt,unit:bt,error:gt,editor:pt,default:_t})};function vt(e,t="",i=""){const o=e.split(".")[0],a=e.split(".")[1],r=(localStorage.getItem("selectedLanguage")||navigator.language.split("-")[0]||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=ft[r][o][a]}catch(e){s=ft.en[o][a]}return void 0===s&&(s=ft.en[o][a]),""!==t&&""!==i&&(s=s.replace(t,i)),s}let yt=class extends ie{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _entity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity)||""}get _image(){var e;return(null===(e=this._config)||void 0===e?void 0:e.image)||""}get _model(){var e;return(null===(e=this._config)||void 0===e?void 0:e.model)||!1}get _show_name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_name)||!1}get _show_states(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_states)||!1}get _show_attributes(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_attributes)||!1}get _show_body(){var e;return!1!==this._show_toolbar&&((null===(e=this._config)||void 0===e?void 0:e.show_body)||!1)}get _show_buttons(){var e;return!1!==this._show_toolbar&&((null===(e=this._config)||void 0===e?void 0:e.show_buttons)||!1)}get _show_toolbar(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_toolbar)||!1}render(){if(!this.hass||!this._helpers)return z``;const e=Object.keys(this.hass.states).filter((e=>"bodymiscale"===e.substr(0,e.indexOf("."))));return z`
      <div class="card-config">
        <strong>
          ${vt("editor.code_information")}
        </strong>

        <paper-dropdown-menu
          label="${vt("editor.entity")}"
          @value-changed=${this._valueChanged}
          .configValue=${"entity"}
        >
          <paper-listbox
            slot="dropdown-content"
            .selected=${e.indexOf(this._entity)}
          >
            ${e.map((e=>z` <paper-item>${e}</paper-item> `))}
          </paper-listbox>
        </paper-dropdown-menu>

        <paper-input
          label="${vt("editor.image")}"
          .value=${this._image}
          .configValue=${"image"}
          @value-changed=${this._valueChanged}
        ></paper-input>

        <p class="option">
          <ha-switch
            aria-label=${vt(this._model?"editor.model_aria_label_off":"editor.model_aria_label_on")}
            .checked=${!1!==this._model}
            .configValue=${"model"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${vt("editor.model")}<br>
          ${vt("editor.model1")}
        </p>

        <strong style="font-size: large; line-height: 200%;">
          <U>${vt("editor.header_options")}</U>
        </strong>

        <p class="option">
          <ha-switch
            aria-label=${vt(this._show_name?"editor.show_name_aria_label_off":"editor.show_name_aria_label_on")}
            .checked=${!1!==this._show_name}
            .configValue=${"show_name"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${vt("editor.show_name")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${vt(this._show_states?"editor.show_states_aria_label_off":"editor.show_states_aria_label_on")}
            .checked=${!1!==this._show_states}
            .configValue=${"show_states"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${vt("editor.show_states")}
        </p>

        <p class="option">
          <ha-switch
            aria-label=${vt(this._show_attributes?"editor.show_attributes_aria_label_off":"editor.show_attributes_aria_label_on")}
            .checked=${!1!==this._show_attributes}
            .configValue=${"show_attributes"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${vt("editor.show_attributes")}
        </p>

        <strong style="font-size: large; line-height: 200%;">
          <U>${vt("editor.body_options")}</U>
        </strong>

        <p class="option">
          <ha-switch
            aria-label=${vt(this._show_toolbar?"editor.show_toolbar_aria_label_off":"editor.show_toolbar_aria_label_on")}
            .checked=${!1!==this._show_toolbar}
            .configValue=${"show_toolbar"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${vt("editor.show_toolbar")}
        </p>

        <p class="option" style="padding:0 0 0 45px;">
          <ha-switch
            aria-label=${vt(this._show_body?"editor.show_body_aria_label_off":"editor.show_body_aria_label_on")}
            .checked=${!1!==this._show_body}
            .configValue=${"show_body"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${vt("editor.show_body")}<br>
          ${vt("editor.show_body1")}
        </p>

        <p class="option" style="padding:0 0 0 45px;">
          <ha-switch
            aria-label=${vt(this._show_buttons?"editor.show_buttons_aria_label_off":"editor.show_buttons_aria_label_on")}
            .checked=${!1!==this._show_buttons}
            .configValue=${"show_buttons"}
            @change=${this._valueChanged}
          >
          </ha-switch>
          ${vt("editor.show_buttons")}
        </p>
        
        <p>
          <U><B>${vt("editor.warning")}</B></U> ${vt("editor.code_only_note")}
        </p>
      </div>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(e){var t,i;if(!this._config||!this.hass)return;const o=e.target,a=null!==(i=null===(t=e.detail)||void 0===t?void 0:t.value)&&void 0!==i?i:o.value;this[`_${o.configValue}`]!==a&&(o.configValue&&(""===a?delete this._config[o.configValue]:this._config=Object.assign(Object.assign({},this._config),{[o.configValue]:void 0!==o.checked?o.checked:a})),we(this,"config-changed",{config:this._config}))}static get styles(){return s`
    .card-config paper-dropdown-menu {
      width: 100%;
    }
    .option {
      display: flex;
      align-items: center;
    }
    .option ha-switch {
      margin-right: 10px;
    }
  `}};e([re({attribute:!1})],yt.prototype,"hass",void 0),e([se()],yt.prototype,"_config",void 0),e([se()],yt.prototype,"_helpers",void 0),yt=e([oe("body-miscale-card-editor")],yt);const wt={status:{key:"status",icon:"mdi:scale-bathroom"},problem:{key:"problem",icon:"mdi:alert"}},kt={weight:{key:"weight",label:vt("attributes.weight: "),unit:" kg"},impedance:{key:"impedance",label:vt("attributes.impedance: "),unit:" ohm"},height:{key:"height",label:vt("attributes.height: "),unit:" cm"},age:{key:"age",label:vt("attributes.age: "),unit:vt("unit. years")},gender:{key:"gender",label:vt("attributes.gender: ")}},xt={bmi:{key:"bmi",label:vt("body.bmi"),icon:"/local/images/bodyscoreIcon/bmi.webp",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:40,min:0,severity:[{from:0,to:18.5,color:"blue"},{from:18.51,to:25,color:"green"},{from:25.01,to:28,color:"orange"},{from:28.01,to:32,color:"orangered"},{from:32.01,to:1/0,color:"red"}],target:25},bmi_label:{key:"bmi_label",label:vt("body.bmi_label"),icon:"/local/images/bodyscoreIcon/body_type.webp",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))"},visceral_fat:{key:"visceral_fat",label:vt("body.visceral_fat"),icon:"/local/images/bodyscoreIcon/visceral_fat.webp",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:20,min:0,severity:[{from:0,to:10,color:"green"},{from:10.01,to:15,color:"orange"},{from:15.01,to:1/0,color:"orangered"}],target:10},body_fat:{key:"body_fat",label:vt("body.body_fat"),icon:"/local/images/bodyscoreIcon/body_fat.webp",unit:" %",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:40,min:0,severity:[{from:0,to:12,color:"blue"},{from:12.01,to:18,color:"royalblue"},{from:18.01,to:23,color:"green"},{from:23.01,to:28,color:"orange"},{from:28.01,to:1/0,color:"orangered"}],target:23},protein:{key:"protein",label:vt("body.protein"),icon:"/local/images/bodyscoreIcon/protein.webp",unit:" %",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:32,min:0,severity:[{from:0,to:16,color:"orangered"},{from:16.01,to:20,color:"green"},{from:20.01,to:1/0,color:"darkgreen"}],target:20},water:{key:"water",label:vt("body.water"),icon:"/local/images/bodyscoreIcon/water.webp",unit:" %",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:80,min:0,severity:[{from:0,to:55,color:"orangered"},{from:55.01,to:65.1,color:"green"},{from:65.11,to:1/0,color:"darkgreen"}],target:65.1},muscle_mass:{key:"muscle_mass",label:vt("body.muscle_mass"),icon:"/local/images/bodyscoreIcon/muscle_mass.webp",unit:" kg",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:100,min:0,severity:[{from:0,to:49.4,color:"orangered"},{from:49.41,to:59.5,color:"green"},{from:59.51,to:1/0,color:"darkgreen"}],target:59.5},bone_mass:{key:"bone_mass",label:vt("body.bone_mass"),icon:"/local/images/bodyscoreIcon/bone_mass.webp",unit:" kg",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:8,min:0,severity:[{from:0,to:2,color:"orangered"},{from:2.01,to:4.2,color:"green"},{from:4.21,to:1/0,color:"darkgreen"}],target:4.2},weight:{key:"weight",label:vt("body.weight"),icon:"/local/images/bodyscoreIcon/ideal.webp",unit:" kg",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:130,min:0,severity:[{from:0,to:57.3,color:"blue"},{from:57.31,to:77.4,color:"green"},{from:77.41,to:86.7,color:"orange"},{from:86.71,to:99.1,color:"orangered"},{from:99.11,to:1/0,color:"red"}],target:77.4},ideal:{key:"ideal",label:vt("body.ideal"),icon:"/local/images/bodyscoreIcon/ideal.webp",unit:" kg",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:130,min:0,severity:[{from:0,to:57.3,color:"blue"},{from:57.31,to:77.4,color:"green"},{from:77.41,to:86.7,color:"orange"},{from:86.71,to:99.1,color:"orangered"},{from:99.11,to:1/0,color:"red"}],target:67.2},basal_metabolism:{key:"basal_metabolism",label:vt("body.basal_metabolism"),icon:"/local/images/bodyscoreIcon/basal_metabolism.webp",unit:" kcal",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:3e3,min:0,severity:[{from:0,to:1530,color:"orangered"},{from:1530.01,to:1/0,color:"green"}],target:1530},body_type:{key:"body_type",label:vt("body.body_type"),icon:"/local/images/bodyscoreIcon/body_type.webp",direction:"right",height:"30px",width:"100%",positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))"},metabolic_age:{key:"metabolic_age",label:vt("body.metabolic_age"),icon:"/local/images/bodyscoreIcon/metabolic_age.webp",unit:vt("unit. years"),direction:"right",height:"30px",width:"100%",positions:{icon:"outside",name:"inside",minmax:"off",value:"inside"},color:"var(--score-card-color, var(--ha-card-background))",max:"",min:"",severity:"",target:""}},$t={user1:{show:!1,label:"User1",icon:"mdi:alpha-u-circle"},user2:{show:!1,label:"User2",icon:"mdi:alpha-u-circle"},user3:{show:!1,label:"User3",icon:"mdi:alpha-u-circle"},user4:{show:!1,label:"User4",icon:"mdi:alpha-u-circle"},user5:{show:!1,label:"User5",icon:"mdi:alpha-u-circle"}},St={false:{states:{status:{key:"state"}},attributes:{weight:{key:"weight"},impedance:!1,height:{key:"height"},age:{key:"age"},gender:{key:"gender"}},body:{bmi:{key:"bmi"},bmi_label:{key:"bmi_label"},visceral_fat:{key:"visceral_fat"},body_fat:!1,protein:!1,water:!1,muscle_mass:!1,bone_mass:!1,weight:{key:"weight"},ideal:{key:"ideal"},basal_metabolism:{key:"basal_metabolism"},body_type:!1,metabolic_age:!1}},true:{states:{status:{key:"state"}},attributes:{weight:{key:"weight"},impedance:{key:"impedance"},height:{key:"height"},age:{key:"age"},gender:{key:"gender"}},body:{bmi:{key:"bmi"},bmi_label:{key:"bmi_label"},visceral_fat:{key:"visceral_fat"},body_fat:{key:"body_fat"},protein:{key:"protein"},water:{key:"water"},muscle_mass:{key:"muscle_mass"},bone_mass:{key:"bone_mass"},weight:{key:"weight"},ideal:{key:"ideal"},basal_metabolism:{key:"basal_metabolism"},body_type:{key:"body_type"},metabolic_age:{key:"metabolic_age"}}}},At=s`
  ha-card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .background {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 220px;
  }
  .pointer {
    cursor: pointer;
  }
  .preview {
    background-color: var(--primary-color);
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }
  .preview.not-available {
    filter: grayscale(1);
  }
  .not-available {
    text-align: center;
    color: var(--text-primary-color);
    font-size: 16px;
  }
  .metadata {
    margin: 10px auto;
  }
  .title {
    font-size: 20px;
    padding: 12px 16px 8px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, auto);
    cursor: pointer;
  }
  .grid-content {
    display: grid;
    align-content: flex-start;
    grid-row-gap: 6px;
  }
  .grid-left {
    text-align: left;
    font-size: 110%;
    padding-left: 10px;
    border-left: 2px solid var(--primary-color);
  }
  .grid-right {
    text-align: right;
    padding-right: 10px;
    border-right: 2px solid var(--primary-color);
  }
  #items {
    padding: 0;
    margin: 0;
    overflow: hidden;
    max-height: 0;
  }
  #items[open] {
    overflow: visible;
    max-height: none;
  }
  .toolbar {
    min-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .toolbar ha-icon-button:first-child {
    margin-left: 5px;
  }
  .toolbar ha-icon-button:last-child {
    margin-right: 5px;
  }
  .fill-gap {
    flex-grow: 1;
  }
  .image {
    display: var(--ha-icon-display, inline-flex);
    align-items: center;
    justify-content: center;
    position: relative;
    vertical-align: middle;
    fill: currentcolor;
    width: var(--mdc-icon-size, 24px);
    height: var(--mdc-icon-size, 24px);
  }
  .ok {
    visibility: hidden;
  }
  .problem {
    color: var(--error-color);
    animation: blinker 2s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
  }
  @keyframes blinker {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .state-div {
    display: grid;
    grid-template-columns: 24px repeat(1, auto);
  }
  .state-label {
    padding: 3px 0px 0px 10px;
  }
  #score {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 8px;
  }
  #score > * {
    margin-bottom: 8px;
  }
  #score > :last-child {
    margin-top: 0px;
    margin-bottom: 0px;
  }
  #score > :first-child {
    margin-top: 0px;
  }
  score-card-row {
    display: flex;
    flex-grow: 1;
  }
  score-card-row > div {
    flex-basis: 100%;
  }
  score-card-row:empty {
    display: none;
  }
  score-card-card {
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    margin-right: 8px;
  }
  score-card-card:last-child {
    margin-right: 0px;
  }
  score-card-background {
    cursor: pointer;
    flex-grow: 1;
    position: relative;
  }
  score-card-iconbar {
    color: var(--icon-color, var(--paper-item-icon-color));
    align-items: center;
    align-self: center;
    display: flex;
    height: 30px;
    justify-content: center;
    position: relative;
    width: 30px;
  }
  score-card-currentbar,
  score-card-backgroundbar,
  score-card-contentbar,
  score-card-targetbar {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: var(--score-card-border-radius, var(--ha-card-border-radius));
  }
  score-card-contentbar {
    align-items: center;
    color: var(--primary-text-color);
    display: flex;
    justify-content: flex-start;
  }
  .contentbar-direction-right {
    flex-direction: row;
  }
  .contentbar-direction-up {
    flex-direction: column;
  }
  score-card-backgroundbar {
    background: var(--bar-color);
    filter: brightness(0.5);
    opacity: 0.25;
  }
  score-card-currentbar {
    background: linear-gradient(
      to var(--bar-direction),
      var(--bar-color) var(--bar-percent),
      #0000 var(--bar-percent),
      #0000 var(--bar-percent)
    );
  }
  score-card-targetbar {
    background: linear-gradient(
      to var(--bar-direction),
      #0000 var(--bar-percent),
      var(--bar-color) var(--bar-percent),
      var(--bar-color) var(--bar-target-percent),
      #0000 var(--bar-target-percent)
    );
    display: var(--target-display);
    filter: brightness(0.66);
    opacity: 0.33;
  }
  score-card-markerbar {
    background: var(--bar-color);
    filter: brightness(0.75);
    opacity: 50%;
    position: absolute;
  }
  score-card-name {
    align-items: center;
    align-self: center;
    justify-content: center;
    margin: 4px;
    overflow: hidden;
    position: relative;
    text-align: left;
    text-overflow: ellipsis;
  }
  .name-outside {
    margin-left: 16px;
  }
  score-card-value,
  score-card-min,
  score-card-max,
  score-card-divider {
    align-self: center;
    position: relative;
  }
  score-card-min,
  score-card-max,
  score-card-divider {
    font-size: 10px;
    margin: 2px;
    opacity: 0.5;
  }
  .min-direction-up {
    margin-top: auto;
  }
  .min-direction-right {
    margin-left: auto;
  }
  score-card-divider {
    margin-left: 0px;
    margin-right: 0px;
  }
  score-card-value {
    white-space: nowrap;
    margin: 4px;
  }
  .value-direction-right {
    margin-left: auto;
  }
  .value-direction-up {
    margin-top: auto;
  }
`;function Et(...e){const t=e=>e&&"object"==typeof e,i={};return e.filter((e=>t(e))).forEach((e=>{Object.keys(e).forEach((o=>{const a=i[o],r=e[o];Array.isArray(a)&&Array.isArray(r)?i[o]=a.concat(r):t(a)&&t(r)?i[o]=Et(Object.assign({},a),r):i[o]=r}))})),i}var It;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(It||(It={}));const Ot=(e,t,i)=>{let o;switch(null==t?void 0:t.number_format){case It.comma_decimal:o=["en-US","en"];break;case It.decimal_comma:o=["de","es","it"];break;case It.space_comma:o=["fr","sv","cs"];break;case It.system:o=void 0;break;default:o=null==t?void 0:t.language}if(Number.isNaN=Number.isNaN||function e(t){return"number"==typeof t&&e(t)},!Number.isNaN(Number(e))&&Intl&&(null==t?void 0:t.number_format)!==It.none)try{return new Intl.NumberFormat(o,Mt(e,i)).format(Number(e))}catch(t){return console.error(t),new Intl.NumberFormat(void 0,Mt(e,i)).format(Number(e))}return e.toString()},Mt=(e,t)=>{const i=t||{};if("string"!=typeof e)return i;if(!t||!t.minimumFractionDigits&&!t.maximumFractionDigits){const t=e.indexOf(".")>-1?e.split(".")[1].length:0;i.minimumFractionDigits=t,i.maximumFractionDigits=t}return i};console.info(`%c  Body-miscale-card \n%c  ${vt("common.version")} 5.0.0    `,"color: cyan; background: black; font-weight: bold;","color: darkblue; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:"body-miscale-card",name:vt("common.name"),description:vt("common.description")});let Pt=class extends ie{constructor(){super(...arguments),this._configArray=[],this.open=!1}static async getConfigElement(){return document.createElement("body-miscale-card-editor")}static getStubConfig(){return{}}getCardSize(){return this.config.show_name&&this.config.show_buttons?4:this.config.show_name||this.config.show_buttons?3:2}setConfig(e){if(!e.entity)throw new Error(vt("error.missing_entity"));if("bodymiscale"!==e.entity.split(".")[0])throw new Error(vt("error.missing_entity_bodymiscale"));if(e.model&&!(e.model in St))throw new Error(vt("error.missing_model"));const t=St[e.model]||St.false;this.config=Object.assign(Object.assign({name:e.name,show_name:e.show_name,show_states:e.show_states,show_attributes:e.show_attributes,show_body:e.show_body,show_buttons:e.show_buttons,show_toolbar:e.show_toolbar},e),{states:Et(wt,t.states,e.states),attributes:Et(kt,t.attributes,e.attributes),body:Et(xt,t.body,e.body),buttons:Et($t,t.buttons,e.buttons),direction:"right",styles:{background:e.image?`background-image: url('${e.image}'); color: white; text-shadow: 0 0 10px black;`:"",icon:`color: ${e.image?"white":"var(--paper-item-icon-color)"};`,iconbody:"background-color: white;",content:`padding: ${!1!==e.name?"8px":"16px"} ${!1!==e.buttons?"8px":"16px"};`}}),this.open=this.open||this.config.open}shouldUpdate(e){return function(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var o=t.get("hass");return!o||o.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}toggle(e){e&&e.stopPropagation(),this.open=!this.open}_customEvent(e){e.detail.fold_row&&this.toggle(e)}render(){if(!this.hass||!this.config)return z``;const e=this.hass.states[this.config.entity];return e?z` <ha-card>
      <div class="background" style="${this.config.styles.background}">
        <div>${this.renderName(e)}</div>
        <div class="grid" style="${this.config.styles.content}" @click="${this._moreInfo}" tabindex="0">
          <div class="grid-content grid-left">
            ${Object.values(this.config.states).filter((e=>e)).map(this.renderState.bind(this))}
          </div>
          <div class="grid-content grid-right">
            ${Object.values(this.config.attributes).filter((e=>e)).map(this.renderAttribute.bind(this))}
          </div>
        </div>
      </div>
      ${this.renderToolbar()}
      <div id="items" ?open=${this.open}>
        <div id="score" class="card-content" style="${"up"==this.config.direction?"":"flex-grow: 0;"}">
          ${Object.values(this.config.body).filter((e=>e)).map(this.renderBody.bind(this))}
          </score-card-row>
        </div>
      </div>
    </ha-card>`:z`
        <ha-card>
          <div class="preview not-available">
            <div class="metadata">
              <div class="not-available">${vt("common.not_available")}</div>
            </div>
          </div>
        </ha-card>
      `}renderName(e){return this.config.show_name?z` <div class="title">${this.config.name||e.attributes.friendly_name}</div> `:z``}renderState(e){if(!this.config.show_states)return z``;const t=this.hass.states[this.config.entity],i=e&&e.key in t.attributes,o=e&&e.key in t,a=i?t.attributes[e.key]:o?t[e.key]:this.hass.localize("state.default.unavailable"),r=Ot(a,this.hass.locale),s=z`<div class="state-div ${"ok"===t.state&&"mdi:alert"===e.icon?"ok":""}">
      <div>${e.icon&&this.renderIcon(e)}</div>
      <div class="state-label">
        ${(e.label||"")+(vt(`states.${a}`)||r)+(e.unit||"")}
      </div>
    </div>`;return`${e.key}_list`in t.attributes&&(i||o)?this.renderDropdown(s,e.key):s}renderAttribute(e){if(!this.config.show_attributes)return z``;const t=this.hass.states[this.config.entity],i=e&&e.key in t.attributes,o=e&&e.key in t,a=i?t.attributes[e.key]:o?t[e.key]:this.hass.localize("state.default.unavailable"),r=Ot(a,this.hass.locale),s=z`<div>
      ${e.icon&&this.renderIcon(e)}${(e.label||"")+(vt(`attributes_value.${a}`)||r)+(e.unit||"")}
    </div>`;return`${e.key}_list`in t.attributes&&(i||o)?this.renderDropdown(s,e.key):s}renderBody(e){if(!this.config.show_body)return z``;const t=this.hass.states[this.config.entity],i=e&&e.key in t.attributes,o=e&&e.key in t,a=i?t.attributes[e.key]:o?t[e.key]:this.hass.localize("state.default.unavailable"),r=Ot(a,this.hass.locale);let s=30;e.height&&(s=e.height);let n,l,c,d,h,u,m,b,g="stretch",p="0px 0px 0px 13px",_="right",f="row",v="left",y="height: 100%; width: 2px;";switch(e.direction){case"right":_="right",v="left";break;case"up":p="0px",_="top",f="column-reverse",v="bottom",y="height: 2px; width: 100%;"}switch(e.positions.icon){case"outside":n=z` <score-card-iconbar> ${e.icon&&this.renderIconbody(e)} </score-card-iconbar> `;break;case"inside":l=z` <score-card-iconbar> ${e.icon&&this.renderIconbody(e)} </score-card-iconbar> `,p="0px";break;case"off":p="0px"}switch(e.positions.name){case"outside":c=z`
          <score-card-name
            style="${"up"==e.direction?"":e.width?`width: calc(100% - ${e.width});`:""}"
            >${e.label||""}</score-card-name
          >
        `,p="0px";break;case"inside":d=z` <score-card-name>${e.label||""}</score-card-name> `}switch(e.positions.minmax){case"outside":h=z`
          <score-card-min>${e.min+(e.unit||"")}</score-card-min>
          <score-card-divider>/</score-card-divider>
          <score-card-max>${e.max+(e.unit||"")}</score-card-max>
        `;break;case"inside":u=z`
          <score-card-min class="${"up"==e.direction?"min-direction-up":"min-direction-right"}"
            >${e.min+(e.unit||"")}</score-card-min
          >
          <score-card-divider>/</score-card-divider>
          <score-card-max> ${e.max+(e.unit||"")}</score-card-max>
        `}switch(e.positions.value){case"outside":m=z`
          <score-card-value class="${"up"==e.direction?"value-direction-up":"value-direction-right"}"
            >${(vt(`body_value.${a}`)||r)+(e.unit||"")}</score-card-value
          >
        `;break;case"inside":b=z`
          <score-card-value
            class="${"inside"==e.positions.minmax?"":"up"==e.direction?"value-direction-up":"value-direction-right"}"
            >${(vt(`body_value.${a}`)||r)+(e.unit||"")}</score-card-value
          >
        `;break;case"off":p="0px"}const w=this._computeBarColor(e,Number(a)),k=this._computePercent(e,Number(a)),x=this._computePercent(e,e.target);let $=k,S=this._computePercent(e,e.target);S<$&&($=S,S=k);let A="";e.width&&(g="center",A=`width: ${e.width}`);let E="column";this.config.columns&&(E="row");const I=z` <score-card-row style="flex-direction: ${E};">
      <score-card-card style="flex-direction: ${f}; align-items: ${g};">
        ${n} ${c}
        <score-card-background
          style="margin: ${p}; height: ${s}${"number"==typeof s?"px":""}; ${A}"
        >
          <score-card-backgroundbar style="--bar-color: ${w};"></score-card-backgroundbar>
          <score-card-currentbar
            style="--bar-color: ${w}; --bar-percent: ${k}%; --bar-direction: ${_}"
          ></score-card-currentbar>
          ${e.target?z`
                <score-card-targetbar
                  style="--bar-color: ${w}; --bar-percent: ${$}%; --bar-target-percent: ${S}%; --bar-direction: ${_};"
                ></score-card-targetbar>
                <score-card-markerbar
                  style="--bar-color: ${w}; --bar-target-percent: ${x}%; ${v}: calc(${x}% - 1px); ${y}"
                ></score-card-markerbar>
              `:""}
          <score-card-contentbar
            class="${"up"==e.direction?"contentbar-direction-up":"contentbar-direction-right"}"
          >
            ${l} ${d} ${u} ${b}
          </score-card-contentbar>
        </score-card-background>
        ${h} ${m}
      </score-card-card>
    </score-card-row>`;return`${e.key}_list`in t.attributes&&(i||o)?this.renderDropdown(I,e.key):I}renderIcon(e){const t=this.hass.states[this.config.entity],i="water"===e.key&&"water_icon"in this.stateObj.attributes?this.stateObj.attributes.water_icon:e.icon;return"none"!==t.attributes.problem&&"mdi:alert"===i?z`<ha-icon class="problem" icon="${i}"></ha-icon>`:z`<ha-icon icon="${i}" style="margin-right: 10px; ${this.config.styles.icon}"></ha-icon>`}renderIconbody(e){const t="Water"===e.key&&"water_icon"in this.stateObj.attributes?this.stateObj.attributes.water_icon:e.icon;return z`<ha-icon
      class="image"
      style="-webkit-mask-box-image: url('${t}'); ${this.config.styles.iconbody}"
    ></ha-icon>`}renderButton(e){return this.config.show_buttons?e&&!1!==e.show?z`<ha-icon-button
          @click="${()=>this.callService(e.service,e.service_data)}"
          icon="${e.icon}"
          title="${e.label||""}"
          style="${this.config.styles.icon}"
        ></ha-icon-button>`:null:z``}renderToolbar(){return this.config.show_toolbar?z`
      <div class="toolbar" @ll-custom=${this._customEvent} ?open=${this.open}>
        <ha-icon-button
          @click=${this.toggle}
          icon=${this.open?"mdi:chevron-up":"mdi:chevron-down"}
          title="${vt("common.toggle_power")}"
          style="color: var(--primary-color);"
        >
        </ha-icon-button>
        <div class="fill-gap"></div>
        ${Object.values(this.config.buttons).filter((e=>e)).map(this.renderButton.bind(this))}
      </div>
    `:z``}handleChange(e,t){const i=this.hass.states[this.config.entity],o=e.target.getAttribute("value");this.callService(`bodymiscale.set_${t}`,{entity_id:i.entity_id,[t]:o})}callService(e,t={entity_id:this.stateObj.entity_id}){const[i,o]=e.split(".");this.hass.callService(i,o,t)}renderDropdown(e,t){if(!this.hass||!this.config)return z``;const i=this.hass.states[this.config.entity],o=i.attributes[t],a=i.attributes[`${t}_list`];return z`
      <paper-menu-button slot="dropdown-trigger" @click="${e=>e.stopPropagation()}" style="padding: 0">
        <paper-button slot="dropdown-trigger">${e}</paper-button>
        <paper-listbox
          slot="dropdown-content"
          selected="${a.indexOf(o)}"
          @click="${e=>this.handleChange(e,t)}"
        >
          ${a.map((e=>z`<paper-item value="${e}" style="text-shadow: none;">${e}</paper-item>`))}
        </paper-listbox>
      </paper-menu-button>
    `}static get styles(){return At}_computeBarColor(e,t){let i;return i=e.severity?this._computeSeverityColor(e,t):"unavailable"==e?`var(--score-card-disabled-color, ${e.color})`:e.color,i}_computeSeverityColor(e,t){const i=e.severity;let o;return isNaN(t)?i.forEach((t=>{e==t.text&&(o=t.color)})):i.forEach((e=>{t>=e.from&&t<=e.to&&(o=e.color)})),null==o&&(o=e.color),o}_computePercent(e,t){if("unavailable"==e)return 0;if(isNaN(t))return 100;switch(e.direction){case"right-reverse":case"left-reverse":case"up-reverse":case"down-reverse":return 100-100*(t-e.min)/(e.max-e.min);default:return 100*(t-e.min)/(e.max-e.min)}}_moreInfo(){we(this,"hass-more-info",{entityId:this.config.entity})}};e([re({attribute:!1})],Pt.prototype,"hass",void 0),e([se()],Pt.prototype,"config",void 0),e([se()],Pt.prototype,"_configArray",void 0),e([se()],Pt.prototype,"open",void 0),Pt=e([oe("body-miscale-card")],Pt);export{Pt as BodyMiScaleCard};
