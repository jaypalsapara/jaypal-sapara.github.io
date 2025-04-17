(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(e){if(e.ep)return;e.ep=!0;const c=o(e);fetch(e.href,c)}})();/**
 * @license lucide v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=([t,r,o])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(r).forEach(e=>{n.setAttribute(e,String(r[e]))}),o!=null&&o.length&&o.forEach(e=>{const c=p(e);n.appendChild(c)}),n},h=(t,r={})=>{const o="svg",n={...f,...r};return p([o,n,t])};/**
 * @license lucide v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t=>Array.from(t.attributes).reduce((r,o)=>(r[o.name]=o.value,r),{}),y=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",g=t=>t.flatMap(y).map(o=>o.trim()).filter(Boolean).filter((o,n,e)=>e.indexOf(o)===n).join(" "),b=t=>t.replace(/(\w)(\w*)(_|-|\s*)/g,(r,o,n)=>o.toUpperCase()+n.toLowerCase()),d=(t,{nameAttr:r,icons:o,attrs:n})=>{var u;const e=t.getAttribute(r);if(e==null)return;const c=b(e),s=o[c];if(!s)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const i=w(t),a={...f,"data-lucide":e,...n,...i},l=g(["lucide",`lucide-${e}`,i,n]);l&&Object.assign(a,{class:l});const m=h(s,a);return(u=t.parentNode)==null?void 0:u.replaceChild(m,t)};/**
 * @license lucide v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];/**
 * @license lucide v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]];/**
 * @license lucide v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
 * @license lucide v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=({icons:t={},nameAttr:r="data-lucide",attrs:o={}}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${r}]`);if(Array.from(n).forEach(e=>d(e,{nameAttr:r,icons:t,attrs:o})),r==="data-lucide"){const e=document.querySelectorAll("[icon-name]");e.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(e).forEach(c=>d(c,{nameAttr:"icon-name",icons:t,attrs:o})))}};C({icons:{ArrowUpRight:v,Linkedin:N,Instagram:E,Github:A}});
