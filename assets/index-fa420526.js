(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function so(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ge={},En=[],st=()=>{},lf=()=>!1,cf=/^on[^a-z]/,bi=t=>cf.test(t),io=t=>t.startsWith("onUpdate:"),we=Object.assign,ro=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},af=Object.prototype.hasOwnProperty,ee=(t,e)=>af.call(t,e),W=Array.isArray,Cn=t=>wi(t)==="[object Map]",da=t=>wi(t)==="[object Set]",K=t=>typeof t=="function",Ce=t=>typeof t=="string",oo=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",pa=t=>me(t)&&K(t.then)&&K(t.catch),_a=Object.prototype.toString,wi=t=>_a.call(t),uf=t=>wi(t).slice(8,-1),ga=t=>wi(t)==="[object Object]",lo=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=so(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ii=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hf=/-(\w)/g,ft=Ii(t=>t.replace(hf,(e,n)=>n?n.toUpperCase():"")),ff=/\B([A-Z])/g,Bn=Ii(t=>t.replace(ff,"-$1").toLowerCase()),Si=Ii(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gi=Ii(t=>t?`on${Si(t)}`:""),ds=(t,e)=>!Object.is(t,e),Ys=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Js=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},df=t=>{const e=Ce(t)?Number(t):NaN;return isNaN(e)?t:e};let El;const mr=()=>El||(El=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function co(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?mf(s):co(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ce(t))return t;if(me(t))return t}}const pf=/;(?![^(]*\))/g,_f=/:([^]+)/,gf=/\/\*[^]*?\*\//g;function mf(t){const e={};return t.replace(gf,"").split(pf).forEach(n=>{if(n){const s=n.split(_f);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ao(t){let e="";if(Ce(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=ao(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vf=so(yf);function ma(t){return!!t||t===""}const iC=t=>Ce(t)?t:t==null?"":W(t)||me(t)&&(t.toString===_a||!K(t.toString))?JSON.stringify(t,ya,2):String(t),ya=(t,e)=>e&&e.__v_isRef?ya(t,e.value):Cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:da(e)?{[`Set(${e.size})`]:[...e.values()]}:me(e)&&!W(e)&&!ga(e)?String(e):e;let ze;class va{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ze,!e&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ze;try{return ze=this,e()}finally{ze=n}}}on(){ze=this}off(){ze=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ea(t){return new va(t)}function Ef(t,e=ze){e&&e.active&&e.effects.push(t)}function Ca(){return ze}function Cf(t){ze&&ze.cleanups.push(t)}const uo=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ba=t=>(t.w&Bt)>0,wa=t=>(t.n&Bt)>0,bf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bt},wf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ba(i)&&!wa(i)?i.delete(t):e[n++]=i,i.w&=~Bt,i.n&=~Bt}e.length=n}},Zs=new WeakMap;let Zn=0,Bt=1;const yr=30;let Ze;const en=Symbol(""),vr=Symbol("");class ho{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ef(this,s)}run(){if(!this.active)return this.fn();let e=Ze,n=Ot;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ze,Ze=this,Ot=!0,Bt=1<<++Zn,Zn<=yr?bf(this):Cl(this),this.fn()}finally{Zn<=yr&&wf(this),Bt=1<<--Zn,Ze=this.parent,Ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ze===this?this.deferStop=!0:this.active&&(Cl(this),this.onStop&&this.onStop(),this.active=!1)}}function Cl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ot=!0;const Ia=[];function Hn(){Ia.push(Ot),Ot=!1}function Un(){const t=Ia.pop();Ot=t===void 0?!0:t}function je(t,e,n){if(Ot&&Ze){let s=Zs.get(t);s||Zs.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=uo()),Sa(i)}}function Sa(t,e){let n=!1;Zn<=yr?wa(t)||(t.n|=Bt,n=!ba(t)):n=!t.has(Ze),n&&(t.add(Ze),Ze.deps.push(t))}function vt(t,e,n,s,i,r){const o=Zs.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&W(t)){const c=Number(s);o.forEach((a,u)=>{(u==="length"||u>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":W(t)?lo(n)&&l.push(o.get("length")):(l.push(o.get(en)),Cn(t)&&l.push(o.get(vr)));break;case"delete":W(t)||(l.push(o.get(en)),Cn(t)&&l.push(o.get(vr)));break;case"set":Cn(t)&&l.push(o.get(en));break}if(l.length===1)l[0]&&Er(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);Er(uo(c))}}function Er(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&bl(s);for(const s of n)s.computed||bl(s)}function bl(t,e){(t!==Ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function If(t,e){var n;return(n=Zs.get(t))==null?void 0:n.get(e)}const Sf=so("__proto__,__v_isRef,__isVue"),Ta=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(oo)),Tf=fo(),Rf=fo(!1,!0),xf=fo(!0),wl=Nf();function Nf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)je(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Hn();const s=Z(this)[e].apply(this,n);return Un(),s}}),t}function Af(t){const e=Z(this);return je(e,"has",t),e.hasOwnProperty(t)}function fo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?qf:Pa:e?Aa:Na).get(s))return s;const o=W(s);if(!t){if(o&&ee(wl,i))return Reflect.get(wl,i,r);if(i==="hasOwnProperty")return Af}const l=Reflect.get(s,i,r);return(oo(i)?Ta.has(i):Sf(i))||(t||je(s,"get",i),e)?l:Ee(l)?o&&lo(i)?l:l.value:me(l)?t?ka(l):Os(l):l}}const Pf=Ra(),Of=Ra(!0);function Ra(t=!1){return function(n,s,i,r){let o=n[s];if(Nn(o)&&Ee(o)&&!Ee(i))return!1;if(!t&&(!ei(i)&&!Nn(i)&&(o=Z(o),i=Z(i)),!W(n)&&Ee(o)&&!Ee(i)))return o.value=i,!0;const l=W(n)&&lo(s)?Number(s)<n.length:ee(n,s),c=Reflect.set(n,s,i,r);return n===Z(r)&&(l?ds(i,o)&&vt(n,"set",s,i):vt(n,"add",s,i)),c}}function kf(t,e){const n=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&vt(t,"delete",e,void 0),s}function Df(t,e){const n=Reflect.has(t,e);return(!oo(e)||!Ta.has(e))&&je(t,"has",e),n}function Mf(t){return je(t,"iterate",W(t)?"length":en),Reflect.ownKeys(t)}const xa={get:Tf,set:Pf,deleteProperty:kf,has:Df,ownKeys:Mf},Lf={get:xf,set(t,e){return!0},deleteProperty(t,e){return!0}},Ff=we({},xa,{get:Rf,set:Of}),po=t=>t,Ti=t=>Reflect.getPrototypeOf(t);function Hs(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(e!==r&&je(i,"get",e),je(i,"get",r));const{has:o}=Ti(i),l=s?po:n?mo:ps;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function Us(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(t!==i&&je(s,"has",t),je(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Ws(t,e=!1){return t=t.__v_raw,!e&&je(Z(t),"iterate",en),Reflect.get(t,"size",t)}function Il(t){t=Z(t);const e=Z(this);return Ti(e).has.call(e,t)||(e.add(t),vt(e,"add",t,t)),this}function Sl(t,e){e=Z(e);const n=Z(this),{has:s,get:i}=Ti(n);let r=s.call(n,t);r||(t=Z(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ds(e,o)&&vt(n,"set",t,e):vt(n,"add",t,e),this}function Tl(t){const e=Z(this),{has:n,get:s}=Ti(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&vt(e,"delete",t,void 0),r}function Rl(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&vt(t,"clear",void 0,void 0),n}function $s(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Z(o),c=e?po:t?mo:ps;return!t&&je(l,"iterate",en),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function js(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=Cn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?po:e?mo:ps;return!e&&je(r,"iterate",c?vr:en),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function St(t){return function(...e){return t==="delete"?!1:this}}function Bf(){const t={get(r){return Hs(this,r)},get size(){return Ws(this)},has:Us,add:Il,set:Sl,delete:Tl,clear:Rl,forEach:$s(!1,!1)},e={get(r){return Hs(this,r,!1,!0)},get size(){return Ws(this)},has:Us,add:Il,set:Sl,delete:Tl,clear:Rl,forEach:$s(!1,!0)},n={get(r){return Hs(this,r,!0)},get size(){return Ws(this,!0)},has(r){return Us.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:$s(!0,!1)},s={get(r){return Hs(this,r,!0,!0)},get size(){return Ws(this,!0)},has(r){return Us.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:$s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=js(r,!1,!1),n[r]=js(r,!0,!1),e[r]=js(r,!1,!0),s[r]=js(r,!0,!0)}),[t,n,e,s]}const[Hf,Uf,Wf,$f]=Bf();function _o(t,e){const n=e?t?$f:Wf:t?Uf:Hf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ee(n,i)&&i in s?n:s,i,r)}const jf={get:_o(!1,!1)},Vf={get:_o(!1,!0)},zf={get:_o(!0,!1)},Na=new WeakMap,Aa=new WeakMap,Pa=new WeakMap,qf=new WeakMap;function Kf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gf(t){return t.__v_skip||!Object.isExtensible(t)?0:Kf(uf(t))}function Os(t){return Nn(t)?t:go(t,!1,xa,jf,Na)}function Oa(t){return go(t,!1,Ff,Vf,Aa)}function ka(t){return go(t,!0,Lf,zf,Pa)}function go(t,e,n,s,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Gf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function kt(t){return Nn(t)?kt(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function ei(t){return!!(t&&t.__v_isShallow)}function Da(t){return kt(t)||Nn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Ri(t){return Js(t,"__v_skip",!0),t}const ps=t=>me(t)?Os(t):t,mo=t=>me(t)?ka(t):t;function Ma(t){Ot&&Ze&&(t=Z(t),Sa(t.dep||(t.dep=uo())))}function La(t,e){t=Z(t);const n=t.dep;n&&Er(n)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function yo(t){return Fa(t,!1)}function Yf(t){return Fa(t,!0)}function Fa(t,e){return Ee(t)?t:new Qf(t,e)}class Qf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:ps(e)}get value(){return Ma(this),this._value}set value(e){const n=this.__v_isShallow||ei(e)||Nn(e);e=n?e:Z(e),ds(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ps(e),La(this))}}function bn(t){return Ee(t)?t.value:t}const Xf={get:(t,e,n)=>bn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ba(t){return kt(t)?t:new Proxy(t,Xf)}function Jf(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=ed(t,n);return e}class Zf{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return If(Z(this._object),this._key)}}function ed(t,e,n){const s=t[e];return Ee(s)?s:new Zf(t,e,n)}class td{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ho(e,()=>{this._dirty||(this._dirty=!0,La(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return Ma(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function nd(t,e,n=!1){let s,i;const r=K(t);return r?(s=t,i=st):(s=t.get,i=t.set),new td(s,i,r||!i,n)}function Dt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){xi(r,e,n)}return i}function Qe(t,e,n,s){if(K(t)){const r=Dt(t,e,n,s);return r&&pa(r)&&r.catch(o=>{xi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Qe(t[r],e,n,s));return i}function xi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Dt(c,null,10,[t,o,l]);return}}sd(t,n,i,s)}function sd(t,e,n,s=!0){console.error(t)}let _s=!1,Cr=!1;const De=[];let ut=0;const wn=[];let gt=null,Gt=0;const Ha=Promise.resolve();let vo=null;function Eo(t){const e=vo||Ha;return t?e.then(this?t.bind(this):t):e}function id(t){let e=ut+1,n=De.length;for(;e<n;){const s=e+n>>>1;gs(De[s])<t?e=s+1:n=s}return e}function Co(t){(!De.length||!De.includes(t,_s&&t.allowRecurse?ut+1:ut))&&(t.id==null?De.push(t):De.splice(id(t.id),0,t),Ua())}function Ua(){!_s&&!Cr&&(Cr=!0,vo=Ha.then($a))}function rd(t){const e=De.indexOf(t);e>ut&&De.splice(e,1)}function od(t){W(t)?wn.push(...t):(!gt||!gt.includes(t,t.allowRecurse?Gt+1:Gt))&&wn.push(t),Ua()}function xl(t,e=_s?ut+1:0){for(;e<De.length;e++){const n=De[e];n&&n.pre&&(De.splice(e,1),e--,n())}}function Wa(t){if(wn.length){const e=[...new Set(wn)];if(wn.length=0,gt){gt.push(...e);return}for(gt=e,gt.sort((n,s)=>gs(n)-gs(s)),Gt=0;Gt<gt.length;Gt++)gt[Gt]();gt=null,Gt=0}}const gs=t=>t.id==null?1/0:t.id,ld=(t,e)=>{const n=gs(t)-gs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $a(t){Cr=!1,_s=!0,De.sort(ld);const e=st;try{for(ut=0;ut<De.length;ut++){const n=De[ut];n&&n.active!==!1&&Dt(n,null,14)}}finally{ut=0,De.length=0,Wa(),_s=!1,vo=null,(De.length||wn.length)&&$a()}}function cd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ge;f&&(i=n.map(_=>Ce(_)?_.trim():_)),h&&(i=n.map(gr))}let l,c=s[l=Gi(e)]||s[l=Gi(ft(e))];!c&&r&&(c=s[l=Gi(Bn(e))]),c&&Qe(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Qe(a,t,6,i)}}function ja(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!K(t)){const c=a=>{const u=ja(a,e,!0);u&&(l=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(me(t)&&s.set(t,null),null):(W(r)?r.forEach(c=>o[c]=null):we(o,r),me(t)&&s.set(t,o),o)}function Ni(t,e){return!t||!bi(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Bn(e))||ee(t,e))}let xe=null,Va=null;function ti(t){const e=xe;return xe=t,Va=t&&t.type.__scopeId||null,e}function ad(t,e=xe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Wl(-1);const r=ti(e);let o;try{o=t(...i)}finally{ti(r),s._d&&Wl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Yi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:C}=t;let N,A;const O=ti(t);try{if(n.shapeFlag&4){const D=i||s;N=at(u.call(D,D,h,r,_,f,m)),A=c}else{const D=e;N=at(D.length>1?D(r,{attrs:c,slots:l,emit:a}):D(r,null)),A=e.props?c:ud(c)}}catch(D){rs.length=0,xi(D,t,1),N=Fe(Xe)}let j=N;if(A&&C!==!1){const D=Object.keys(A),{shapeFlag:q}=j;D.length&&q&7&&(o&&D.some(io)&&(A=hd(A,o)),j=Ht(j,A))}return n.dirs&&(j=Ht(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),N=j,ti(O),N}const ud=t=>{let e;for(const n in t)(n==="class"||n==="style"||bi(n))&&((e||(e={}))[n]=t[n]);return e},hd=(t,e)=>{const n={};for(const s in t)(!io(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function fd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Nl(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ni(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Nl(s,o,a):!0:!!o;return!1}function Nl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ni(n,r))return!0}return!1}function dd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const pd=t=>t.__isSuspense;function _d(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):od(t)}const Vs={};function ts(t,e,n){return za(t,e,n)}function za(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ge){var l;const c=Ca()===((l=Ie)==null?void 0:l.scope)?Ie:null;let a,u=!1,h=!1;if(Ee(t)?(a=()=>t.value,u=ei(t)):kt(t)?(a=()=>t,s=!0):W(t)?(h=!0,u=t.some(D=>kt(D)||ei(D)),a=()=>t.map(D=>{if(Ee(D))return D.value;if(kt(D))return Xt(D);if(K(D))return Dt(D,c,2)})):K(t)?e?a=()=>Dt(t,c,2):a=()=>{if(!(c&&c.isUnmounted))return f&&f(),Qe(t,c,3,[_])}:a=st,e&&s){const D=a;a=()=>Xt(D())}let f,_=D=>{f=O.onStop=()=>{Dt(D,c,4)}},m;if(vs)if(_=st,e?n&&Qe(e,c,3,[a(),h?[]:void 0,_]):a(),i==="sync"){const D=gp();m=D.__watcherHandles||(D.__watcherHandles=[])}else return st;let C=h?new Array(t.length).fill(Vs):Vs;const N=()=>{if(O.active)if(e){const D=O.run();(s||u||(h?D.some((q,le)=>ds(q,C[le])):ds(D,C)))&&(f&&f(),Qe(e,c,3,[D,C===Vs?void 0:h&&C[0]===Vs?[]:C,_]),C=D)}else O.run()};N.allowRecurse=!!e;let A;i==="sync"?A=N:i==="post"?A=()=>He(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),A=()=>Co(N));const O=new ho(a,A);e?n?N():C=O.run():i==="post"?He(O.run.bind(O),c&&c.suspense):O.run();const j=()=>{O.stop(),c&&c.scope&&ro(c.scope.effects,O)};return m&&m.push(j),j}function gd(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?qa(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Ie;An(this);const l=za(i,r.bind(s),n);return o?An(o):tn(),l}function qa(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Xt(t,e){if(!me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ee(t))Xt(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Xt(t[n],e);else if(da(t)||Cn(t))t.forEach(n=>{Xt(n,e)});else if(ga(t))for(const n in t)Xt(t[n],e);return t}function rC(t,e){const n=xe;if(n===null)return t;const s=Di(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=ge]=e[r];o&&(K(o)&&(o={mounted:o,updated:o}),o.deep&&Xt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a}))}return t}function $t(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Hn(),Qe(c,n,8,[t.el,l,t,e]),Un())}}function md(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ja(()=>{t.isMounted=!0}),Za(()=>{t.isUnmounting=!0}),t}const qe=[Function,Array],Ka={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},yd={name:"BaseTransition",props:Ka,setup(t,{slots:e}){const n=cp(),s=md();let i;return()=>{const r=e.default&&Ya(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const C of r)if(C.type!==Xe){o=C;break}}const l=Z(t),{mode:c}=l;if(s.isLeaving)return Qi(o);const a=Al(o);if(!a)return Qi(o);const u=br(a,l,s,n);wr(a,u);const h=n.subTree,f=h&&Al(h);let _=!1;const{getTransitionKey:m}=a.type;if(m){const C=m();i===void 0?i=C:C!==i&&(i=C,_=!0)}if(f&&f.type!==Xe&&(!Yt(a,f)||_)){const C=br(f,l,s,n);if(wr(f,C),c==="out-in")return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Qi(o);c==="in-out"&&a.type!==Xe&&(C.delayLeave=(N,A,O)=>{const j=Ga(s,f);j[String(f.key)]=f,N._leaveCb=()=>{A(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},vd=yd;function Ga(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function br(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:C,onAppear:N,onAfterAppear:A,onAppearCancelled:O}=e,j=String(t.key),D=Ga(n,t),q=(x,F)=>{x&&Qe(x,s,9,F)},le=(x,F)=>{const z=F[1];q(x,F),W(x)?x.every(te=>te.length<=1)&&z():x.length<=1&&z()},ne={mode:r,persisted:o,beforeEnter(x){let F=l;if(!n.isMounted)if(i)F=C||l;else return;x._leaveCb&&x._leaveCb(!0);const z=D[j];z&&Yt(t,z)&&z.el._leaveCb&&z.el._leaveCb(),q(F,[x])},enter(x){let F=c,z=a,te=u;if(!n.isMounted)if(i)F=N||c,z=A||a,te=O||u;else return;let M=!1;const se=x._enterCb=Ne=>{M||(M=!0,Ne?q(te,[x]):q(z,[x]),ne.delayedLeave&&ne.delayedLeave(),x._enterCb=void 0)};F?le(F,[x,se]):se()},leave(x,F){const z=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return F();q(h,[x]);let te=!1;const M=x._leaveCb=se=>{te||(te=!0,F(),se?q(m,[x]):q(_,[x]),x._leaveCb=void 0,D[z]===t&&delete D[z])};D[z]=t,f?le(f,[x,M]):M()},clone(x){return br(x,e,n,s)}};return ne}function Qi(t){if(Ai(t))return t=Ht(t),t.children=null,t}function Al(t){return Ai(t)?t.children?t.children[0]:void 0:t}function wr(t,e){t.shapeFlag&6&&t.component?wr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ya(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ke?(o.patchFlag&128&&i++,s=s.concat(Ya(o.children,e,l))):(e||o.type!==Xe)&&s.push(l!=null?Ht(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Qa(t,e){return K(t)?(()=>we({name:t.name},e,{setup:t}))():t}const ns=t=>!!t.type.__asyncLoader,Ai=t=>t.type.__isKeepAlive;function Ed(t,e){Xa(t,"a",e)}function Cd(t,e){Xa(t,"da",e)}function Xa(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Pi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ai(i.parent.vnode)&&bd(s,e,n,i),i=i.parent}}function bd(t,e,n,s){const i=Pi(e,t,s,!0);eu(()=>{ro(s[e],i)},n)}function Pi(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Hn(),An(n);const l=Qe(e,n,t,o);return tn(),Un(),l});return s?i.unshift(r):i.push(r),r}}const bt=t=>(e,n=Ie)=>(!vs||t==="sp")&&Pi(t,(...s)=>e(...s),n),wd=bt("bm"),Ja=bt("m"),Id=bt("bu"),Sd=bt("u"),Za=bt("bum"),eu=bt("um"),Td=bt("sp"),Rd=bt("rtg"),xd=bt("rtc");function Nd(t,e=Ie){Pi("ec",t,e)}const tu="components";function Ad(t,e){return Od(tu,t,!0,e)||t}const Pd=Symbol.for("v-ndc");function Od(t,e,n=!0,s=!1){const i=xe||Ie;if(i){const r=i.type;if(t===tu){const l=dp(r,!1);if(l&&(l===e||l===ft(e)||l===Si(ft(e))))return r}const o=Pl(i[t]||r[t],e)||Pl(i.appContext[t],e);return!o&&s?r:o}}function Pl(t,e){return t&&(t[e]||t[ft(e)]||t[Si(ft(e))])}function oC(t,e,n,s){let i;const r=n&&n[s];if(W(t)||Ce(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}function lC(t,e,n={},s,i){if(xe.isCE||xe.parent&&ns(xe.parent)&&xe.parent.isCE)return e!=="default"&&(n.name=e),Fe("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),So();const o=r&&nu(r(n)),l=fu(Ke,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function nu(t){return t.some(e=>si(e)?!(e.type===Xe||e.type===Ke&&!nu(e.children)):!0)?t:null}const Ir=t=>t?_u(t)?Di(t)||t.proxy:Ir(t.parent):null,ss=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ir(t.parent),$root:t=>Ir(t.root),$emit:t=>t.emit,$options:t=>bo(t),$forceUpdate:t=>t.f||(t.f=()=>Co(t.update)),$nextTick:t=>t.n||(t.n=Eo.bind(t.proxy)),$watch:t=>gd.bind(t)}),Xi=(t,e)=>t!==ge&&!t.__isScriptSetup&&ee(t,e),kd={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Xi(s,e))return o[e]=1,s[e];if(i!==ge&&ee(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&ee(a,e))return o[e]=3,r[e];if(n!==ge&&ee(n,e))return o[e]=4,n[e];Sr&&(o[e]=0)}}const u=ss[e];let h,f;if(u)return e==="$attrs"&&je(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ge&&ee(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ee(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Xi(i,e)?(i[e]=n,!0):s!==ge&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ge&&ee(t,o)||Xi(e,o)||(l=r[0])&&ee(l,o)||ee(s,o)||ee(ss,o)||ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ol(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Sr=!0;function Dd(t){const e=bo(t),n=t.proxy,s=t.ctx;Sr=!1,e.beforeCreate&&kl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:C,deactivated:N,beforeDestroy:A,beforeUnmount:O,destroyed:j,unmounted:D,render:q,renderTracked:le,renderTriggered:ne,errorCaptured:x,serverPrefetch:F,expose:z,inheritAttrs:te,components:M,directives:se,filters:Ne}=e;if(a&&Md(a,s,null),o)for(const he in o){const re=o[he];K(re)&&(s[he]=re.bind(n))}if(i){const he=i.call(n,n);me(he)&&(t.data=Os(he))}if(Sr=!0,r)for(const he in r){const re=r[he],pt=K(re)?re.bind(n,n):K(re.get)?re.get.bind(n,n):st,It=!K(re)&&K(re.set)?re.set.bind(n):st,ot=Ge({get:pt,set:It});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Be=>ot.value=Be})}if(l)for(const he in l)su(l[he],s,n,he);if(c){const he=K(c)?c.call(n):c;Reflect.ownKeys(he).forEach(re=>{Qs(re,he[re])})}u&&kl(u,t,"c");function J(he,re){W(re)?re.forEach(pt=>he(pt.bind(n))):re&&he(re.bind(n))}if(J(wd,h),J(Ja,f),J(Id,_),J(Sd,m),J(Ed,C),J(Cd,N),J(Nd,x),J(xd,le),J(Rd,ne),J(Za,O),J(eu,D),J(Td,F),W(z))if(z.length){const he=t.exposed||(t.exposed={});z.forEach(re=>{Object.defineProperty(he,re,{get:()=>n[re],set:pt=>n[re]=pt})})}else t.exposed||(t.exposed={});q&&t.render===st&&(t.render=q),te!=null&&(t.inheritAttrs=te),M&&(t.components=M),se&&(t.directives=se)}function Md(t,e,n=st){W(t)&&(t=Tr(t));for(const s in t){const i=t[s];let r;me(i)?"default"in i?r=ht(i.from||s,i.default,!0):r=ht(i.from||s):r=ht(i),Ee(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function kl(t,e,n){Qe(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function su(t,e,n,s){const i=s.includes(".")?qa(n,s):()=>n[s];if(Ce(t)){const r=e[t];K(r)&&ts(i,r)}else if(K(t))ts(i,t.bind(n));else if(me(t))if(W(t))t.forEach(r=>su(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&ts(i,r,t)}}function bo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>ni(c,a,o,!0)),ni(c,e,o)),me(e)&&r.set(e,c),c}function ni(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ni(t,r,n,!0),i&&i.forEach(o=>ni(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Ld[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ld={data:Dl,props:Ml,emits:Ml,methods:es,computed:es,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:es,directives:es,watch:Bd,provide:Dl,inject:Fd};function Dl(t,e){return e?t?function(){return we(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Fd(t,e){return es(Tr(t),Tr(e))}function Tr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function es(t,e){return t?we(Object.create(null),t,e):e}function Ml(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:we(Object.create(null),Ol(t),Ol(e??{})):e}function Bd(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const s in e)n[s]=Le(t[s],e[s]);return n}function iu(){return{app:null,config:{isNativeTag:lf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hd=0;function Ud(t,e){return function(s,i=null){K(s)||(s=we({},s)),i!=null&&!me(i)&&(i=null);const r=iu(),o=new Set;let l=!1;const c=r.app={_uid:Hd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:mp,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&K(a.install)?(o.add(a),a.install(c,...u)):K(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const f=Fe(s,i);return f.appContext=r,u&&e?e(f,a):t(f,a,h),l=!0,c._container=a,a.__vue_app__=c,Di(f.component)||f.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c},runWithContext(a){ms=c;try{return a()}finally{ms=null}}};return c}}let ms=null;function Qs(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function ht(t,e,n=!1){const s=Ie||xe;if(s||ms){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ms._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}function Wd(){return!!(Ie||xe||ms)}function $d(t,e,n,s=!1){const i={},r={};Js(r,ki,1),t.propsDefaults=Object.create(null),ru(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Oa(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function jd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Z(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ni(t.emitsOptions,f))continue;const _=e[f];if(c)if(ee(r,f))_!==r[f]&&(r[f]=_,a=!0);else{const m=ft(f);i[m]=Rr(c,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,a=!0)}}}else{ru(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!ee(e,h)&&((u=Bn(h))===h||!ee(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Rr(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!ee(e,h))&&(delete r[h],a=!0)}a&&vt(t,"set","$attrs")}function ru(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Gs(c))continue;const a=e[c];let u;i&&ee(i,u=ft(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:Ni(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Z(n),a=l||ge;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Rr(i,c,h,a[h],t,!ee(a,h))}}return o}function Rr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=ee(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&K(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(An(i),s=a[n]=c.call(null,e),tn())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Bn(n))&&(s=!0))}return s}function ou(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!K(t)){const u=h=>{c=!0;const[f,_]=ou(h,e,!0);we(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return me(t)&&s.set(t,En),En;if(W(r))for(let u=0;u<r.length;u++){const h=ft(r[u]);Ll(h)&&(o[h]=ge)}else if(r)for(const u in r){const h=ft(u);if(Ll(h)){const f=r[u],_=o[h]=W(f)||K(f)?{type:f}:we({},f);if(_){const m=Hl(Boolean,_.type),C=Hl(String,_.type);_[0]=m>-1,_[1]=C<0||m<C,(m>-1||ee(_,"default"))&&l.push(h)}}}const a=[o,l];return me(t)&&s.set(t,a),a}function Ll(t){return t[0]!=="$"}function Fl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Bl(t,e){return Fl(t)===Fl(e)}function Hl(t,e){return W(e)?e.findIndex(n=>Bl(n,t)):K(e)&&Bl(e,t)?0:-1}const lu=t=>t[0]==="_"||t==="$stable",wo=t=>W(t)?t.map(at):[at(t)],Vd=(t,e,n)=>{if(e._n)return e;const s=ad((...i)=>wo(e(...i)),n);return s._c=!1,s},cu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(lu(i))continue;const r=t[i];if(K(r))e[i]=Vd(i,r,s);else if(r!=null){const o=wo(r);e[i]=()=>o}}},au=(t,e)=>{const n=wo(e);t.slots.default=()=>n},zd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),Js(e,"_",n)):cu(e,t.slots={})}else t.slots={},e&&au(t,e);Js(t.slots,ki,1)},qd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ge;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(we(i,e),!n&&l===1&&delete i._):(r=!e.$stable,cu(e,i)),o=e}else e&&(au(t,e),o={default:1});if(r)for(const l in i)!lu(l)&&!(l in o)&&delete i[l]};function xr(t,e,n,s,i=!1){if(W(t)){t.forEach((f,_)=>xr(f,e&&(W(e)?e[_]:e),n,s,i));return}if(ns(s)&&!i)return;const r=s.shapeFlag&4?Di(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===ge?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(Ce(a)?(u[a]=null,ee(h,a)&&(h[a]=null)):Ee(a)&&(a.value=null)),K(c))Dt(c,l,12,[o,u]);else{const f=Ce(c),_=Ee(c);if(f||_){const m=()=>{if(t.f){const C=f?ee(h,c)?h[c]:u[c]:c.value;i?W(C)&&ro(C,r):W(C)?C.includes(r)||C.push(r):f?(u[c]=[r],ee(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ee(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,He(m,n)):m()}}}const He=_d;function Kd(t){return Gd(t)}function Gd(t,e){const n=mr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=st,insertStaticContent:m}=t,C=(d,p,g,y=null,E=null,b=null,P=!1,S=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Yt(d,p)&&(y=v(d),Be(d,E,b,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:H,shapeFlag:L}=p;switch(w){case Oi:N(d,p,g,y);break;case Xe:A(d,p,g,y);break;case Ji:d==null&&O(p,g,y,P);break;case Ke:M(d,p,g,y,E,b,P,S,T);break;default:L&1?q(d,p,g,y,E,b,P,S,T):L&6?se(d,p,g,y,E,b,P,S,T):(L&64||L&128)&&w.process(d,p,g,y,E,b,P,S,T,R)}H!=null&&E&&xr(H,d&&d.ref,b,p||d,!p)},N=(d,p,g,y)=>{if(d==null)s(p.el=l(p.children),g,y);else{const E=p.el=d.el;p.children!==d.children&&a(E,p.children)}},A=(d,p,g,y)=>{d==null?s(p.el=c(p.children||""),g,y):p.el=d.el},O=(d,p,g,y)=>{[d.el,d.anchor]=m(d.children,p,g,y,d.el,d.anchor)},j=({el:d,anchor:p},g,y)=>{let E;for(;d&&d!==p;)E=f(d),s(d,g,y),d=E;s(p,g,y)},D=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},q=(d,p,g,y,E,b,P,S,T)=>{P=P||p.type==="svg",d==null?le(p,g,y,E,b,P,S,T):F(d,p,E,b,P,S,T)},le=(d,p,g,y,E,b,P,S)=>{let T,w;const{type:H,props:L,shapeFlag:U,transition:V,dirs:X}=d;if(T=d.el=o(d.type,b,L&&L.is,L),U&8?u(T,d.children):U&16&&x(d.children,T,null,y,E,b&&H!=="foreignObject",P,S),X&&$t(d,null,y,"created"),ne(T,d,d.scopeId,P,y),L){for(const ae in L)ae!=="value"&&!Gs(ae)&&r(T,ae,null,L[ae],b,d.children,y,E,ke);"value"in L&&r(T,"value",null,L.value),(w=L.onVnodeBeforeMount)&&ct(w,y,d)}X&&$t(d,null,y,"beforeMount");const fe=(!E||E&&!E.pendingBranch)&&V&&!V.persisted;fe&&V.beforeEnter(T),s(T,p,g),((w=L&&L.onVnodeMounted)||fe||X)&&He(()=>{w&&ct(w,y,d),fe&&V.enter(T),X&&$t(d,null,y,"mounted")},E)},ne=(d,p,g,y,E)=>{if(g&&_(d,g),y)for(let b=0;b<y.length;b++)_(d,y[b]);if(E){let b=E.subTree;if(p===b){const P=E.vnode;ne(d,P,P.scopeId,P.slotScopeIds,E.parent)}}},x=(d,p,g,y,E,b,P,S,T=0)=>{for(let w=T;w<d.length;w++){const H=d[w]=S?At(d[w]):at(d[w]);C(null,H,p,g,y,E,b,P,S)}},F=(d,p,g,y,E,b,P)=>{const S=p.el=d.el;let{patchFlag:T,dynamicChildren:w,dirs:H}=p;T|=d.patchFlag&16;const L=d.props||ge,U=p.props||ge;let V;g&&jt(g,!1),(V=U.onVnodeBeforeUpdate)&&ct(V,g,p,d),H&&$t(p,d,g,"beforeUpdate"),g&&jt(g,!0);const X=E&&p.type!=="foreignObject";if(w?z(d.dynamicChildren,w,S,g,y,X,b):P||re(d,p,S,null,g,y,X,b,!1),T>0){if(T&16)te(S,p,L,U,g,y,E);else if(T&2&&L.class!==U.class&&r(S,"class",null,U.class,E),T&4&&r(S,"style",L.style,U.style,E),T&8){const fe=p.dynamicProps;for(let ae=0;ae<fe.length;ae++){const be=fe[ae],Je=L[be],dn=U[be];(dn!==Je||be==="value")&&r(S,be,Je,dn,E,d.children,g,y,ke)}}T&1&&d.children!==p.children&&u(S,p.children)}else!P&&w==null&&te(S,p,L,U,g,y,E);((V=U.onVnodeUpdated)||H)&&He(()=>{V&&ct(V,g,p,d),H&&$t(p,d,g,"updated")},y)},z=(d,p,g,y,E,b,P)=>{for(let S=0;S<p.length;S++){const T=d[S],w=p[S],H=T.el&&(T.type===Ke||!Yt(T,w)||T.shapeFlag&70)?h(T.el):g;C(T,w,H,null,y,E,b,P,!0)}},te=(d,p,g,y,E,b,P)=>{if(g!==y){if(g!==ge)for(const S in g)!Gs(S)&&!(S in y)&&r(d,S,g[S],null,P,p.children,E,b,ke);for(const S in y){if(Gs(S))continue;const T=y[S],w=g[S];T!==w&&S!=="value"&&r(d,S,w,T,P,p.children,E,b,ke)}"value"in y&&r(d,"value",g.value,y.value)}},M=(d,p,g,y,E,b,P,S,T)=>{const w=p.el=d?d.el:l(""),H=p.anchor=d?d.anchor:l("");let{patchFlag:L,dynamicChildren:U,slotScopeIds:V}=p;V&&(S=S?S.concat(V):V),d==null?(s(w,g,y),s(H,g,y),x(p.children,g,H,E,b,P,S,T)):L>0&&L&64&&U&&d.dynamicChildren?(z(d.dynamicChildren,U,g,E,b,P,S),(p.key!=null||E&&p===E.subTree)&&Io(d,p,!0)):re(d,p,g,H,E,b,P,S,T)},se=(d,p,g,y,E,b,P,S,T)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?E.ctx.activate(p,g,y,P,T):Ne(p,g,y,E,b,P,T):Me(d,p,T)},Ne=(d,p,g,y,E,b,P)=>{const S=d.component=lp(d,y,E);if(Ai(d)&&(S.ctx.renderer=R),ap(S),S.asyncDep){if(E&&E.registerDep(S,J),!d.el){const T=S.subTree=Fe(Xe);A(null,T,p,g)}return}J(S,d,p,g,E,b,P)},Me=(d,p,g)=>{const y=p.component=d.component;if(fd(d,p,g))if(y.asyncDep&&!y.asyncResolved){he(y,p,g);return}else y.next=p,rd(y.update),y.update();else p.el=d.el,y.vnode=p},J=(d,p,g,y,E,b,P)=>{const S=()=>{if(d.isMounted){let{next:H,bu:L,u:U,parent:V,vnode:X}=d,fe=H,ae;jt(d,!1),H?(H.el=X.el,he(d,H,P)):H=X,L&&Ys(L),(ae=H.props&&H.props.onVnodeBeforeUpdate)&&ct(ae,V,H,X),jt(d,!0);const be=Yi(d),Je=d.subTree;d.subTree=be,C(Je,be,h(Je.el),v(Je),d,E,b),H.el=be.el,fe===null&&dd(d,be.el),U&&He(U,E),(ae=H.props&&H.props.onVnodeUpdated)&&He(()=>ct(ae,V,H,X),E)}else{let H;const{el:L,props:U}=p,{bm:V,m:X,parent:fe}=d,ae=ns(p);if(jt(d,!1),V&&Ys(V),!ae&&(H=U&&U.onVnodeBeforeMount)&&ct(H,fe,p),jt(d,!0),L&&oe){const be=()=>{d.subTree=Yi(d),oe(L,d.subTree,d,E,null)};ae?p.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=Yi(d);C(null,be,g,y,d,E,b),p.el=be.el}if(X&&He(X,E),!ae&&(H=U&&U.onVnodeMounted)){const be=p;He(()=>ct(H,fe,be),E)}(p.shapeFlag&256||fe&&ns(fe.vnode)&&fe.vnode.shapeFlag&256)&&d.a&&He(d.a,E),d.isMounted=!0,p=g=y=null}},T=d.effect=new ho(S,()=>Co(w),d.scope),w=d.update=()=>T.run();w.id=d.uid,jt(d,!0),w()},he=(d,p,g)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,jd(d,p.props,y,g),qd(d,p.children,g),Hn(),xl(),Un()},re=(d,p,g,y,E,b,P,S,T=!1)=>{const w=d&&d.children,H=d?d.shapeFlag:0,L=p.children,{patchFlag:U,shapeFlag:V}=p;if(U>0){if(U&128){It(w,L,g,y,E,b,P,S,T);return}else if(U&256){pt(w,L,g,y,E,b,P,S,T);return}}V&8?(H&16&&ke(w,E,b),L!==w&&u(g,L)):H&16?V&16?It(w,L,g,y,E,b,P,S,T):ke(w,E,b,!0):(H&8&&u(g,""),V&16&&x(L,g,y,E,b,P,S,T))},pt=(d,p,g,y,E,b,P,S,T)=>{d=d||En,p=p||En;const w=d.length,H=p.length,L=Math.min(w,H);let U;for(U=0;U<L;U++){const V=p[U]=T?At(p[U]):at(p[U]);C(d[U],V,g,null,E,b,P,S,T)}w>H?ke(d,E,b,!0,!1,L):x(p,g,y,E,b,P,S,T,L)},It=(d,p,g,y,E,b,P,S,T)=>{let w=0;const H=p.length;let L=d.length-1,U=H-1;for(;w<=L&&w<=U;){const V=d[w],X=p[w]=T?At(p[w]):at(p[w]);if(Yt(V,X))C(V,X,g,null,E,b,P,S,T);else break;w++}for(;w<=L&&w<=U;){const V=d[L],X=p[U]=T?At(p[U]):at(p[U]);if(Yt(V,X))C(V,X,g,null,E,b,P,S,T);else break;L--,U--}if(w>L){if(w<=U){const V=U+1,X=V<H?p[V].el:y;for(;w<=U;)C(null,p[w]=T?At(p[w]):at(p[w]),g,X,E,b,P,S,T),w++}}else if(w>U)for(;w<=L;)Be(d[w],E,b,!0),w++;else{const V=w,X=w,fe=new Map;for(w=X;w<=U;w++){const Ve=p[w]=T?At(p[w]):at(p[w]);Ve.key!=null&&fe.set(Ve.key,w)}let ae,be=0;const Je=U-X+1;let dn=!1,ml=0;const zn=new Array(Je);for(w=0;w<Je;w++)zn[w]=0;for(w=V;w<=L;w++){const Ve=d[w];if(be>=Je){Be(Ve,E,b,!0);continue}let lt;if(Ve.key!=null)lt=fe.get(Ve.key);else for(ae=X;ae<=U;ae++)if(zn[ae-X]===0&&Yt(Ve,p[ae])){lt=ae;break}lt===void 0?Be(Ve,E,b,!0):(zn[lt-X]=w+1,lt>=ml?ml=lt:dn=!0,C(Ve,p[lt],g,null,E,b,P,S,T),be++)}const yl=dn?Yd(zn):En;for(ae=yl.length-1,w=Je-1;w>=0;w--){const Ve=X+w,lt=p[Ve],vl=Ve+1<H?p[Ve+1].el:y;zn[w]===0?C(null,lt,g,vl,E,b,P,S,T):dn&&(ae<0||w!==yl[ae]?ot(lt,g,vl,2):ae--)}}},ot=(d,p,g,y,E=null)=>{const{el:b,type:P,transition:S,children:T,shapeFlag:w}=d;if(w&6){ot(d.component.subTree,p,g,y);return}if(w&128){d.suspense.move(p,g,y);return}if(w&64){P.move(d,p,g,R);return}if(P===Ke){s(b,p,g);for(let L=0;L<T.length;L++)ot(T[L],p,g,y);s(d.anchor,p,g);return}if(P===Ji){j(d,p,g);return}if(y!==2&&w&1&&S)if(y===0)S.beforeEnter(b),s(b,p,g),He(()=>S.enter(b),E);else{const{leave:L,delayLeave:U,afterLeave:V}=S,X=()=>s(b,p,g),fe=()=>{L(b,()=>{X(),V&&V()})};U?U(b,X,fe):fe()}else s(b,p,g)},Be=(d,p,g,y=!1,E=!1)=>{const{type:b,props:P,ref:S,children:T,dynamicChildren:w,shapeFlag:H,patchFlag:L,dirs:U}=d;if(S!=null&&xr(S,null,g,d,!0),H&256){p.ctx.deactivate(d);return}const V=H&1&&U,X=!ns(d);let fe;if(X&&(fe=P&&P.onVnodeBeforeUnmount)&&ct(fe,p,d),H&6)Bs(d.component,g,y);else{if(H&128){d.suspense.unmount(g,y);return}V&&$t(d,null,p,"beforeUnmount"),H&64?d.type.remove(d,p,g,E,R,y):w&&(b!==Ke||L>0&&L&64)?ke(w,p,g,!1,!0):(b===Ke&&L&384||!E&&H&16)&&ke(T,p,g),y&&hn(d)}(X&&(fe=P&&P.onVnodeUnmounted)||V)&&He(()=>{fe&&ct(fe,p,d),V&&$t(d,null,p,"unmounted")},g)},hn=d=>{const{type:p,el:g,anchor:y,transition:E}=d;if(p===Ke){fn(g,y);return}if(p===Ji){D(d);return}const b=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:S}=E,T=()=>P(g,b);S?S(d.el,b,T):T()}else b()},fn=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},Bs=(d,p,g)=>{const{bum:y,scope:E,update:b,subTree:P,um:S}=d;y&&Ys(y),E.stop(),b&&(b.active=!1,Be(P,d,p,g)),S&&He(S,p),He(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ke=(d,p,g,y=!1,E=!1,b=0)=>{for(let P=b;P<d.length;P++)Be(d[P],p,g,y,E)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),k=(d,p,g)=>{d==null?p._vnode&&Be(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,g),xl(),Wa(),p._vnode=d},R={p:C,um:Be,m:ot,r:hn,mt:Ne,mc:x,pc:re,pbc:z,n:v,o:t};let B,oe;return e&&([B,oe]=e(R)),{render:k,hydrate:B,createApp:Ud(k,B)}}function jt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Io(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=At(i[r]),l.el=o.el),n||Io(o,l)),l.type===Oi&&(l.el=o.el)}}function Yd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Qd=t=>t.__isTeleport,is=t=>t&&(t.disabled||t.disabled===""),Ul=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Nr=(t,e)=>{const n=t&&t.to;return Ce(n)?e?e(n):null:n},Xd={__isTeleport:!0,process(t,e,n,s,i,r,o,l,c,a){const{mc:u,pc:h,pbc:f,o:{insert:_,querySelector:m,createText:C,createComment:N}}=a,A=is(e.props);let{shapeFlag:O,children:j,dynamicChildren:D}=e;if(t==null){const q=e.el=C(""),le=e.anchor=C("");_(q,n,s),_(le,n,s);const ne=e.target=Nr(e.props,m),x=e.targetAnchor=C("");ne&&(_(x,ne),o=o||Ul(ne));const F=(z,te)=>{O&16&&u(j,z,te,i,r,o,l,c)};A?F(n,le):ne&&F(ne,x)}else{e.el=t.el;const q=e.anchor=t.anchor,le=e.target=t.target,ne=e.targetAnchor=t.targetAnchor,x=is(t.props),F=x?n:le,z=x?q:ne;if(o=o||Ul(le),D?(f(t.dynamicChildren,D,F,i,r,o,l),Io(t,e,!0)):c||h(t,e,F,z,i,r,o,l,!1),A)x||zs(e,n,q,a,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const te=e.target=Nr(e.props,m);te&&zs(e,te,null,a,0)}else x&&zs(e,le,ne,a,1)}uu(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:l,children:c,anchor:a,targetAnchor:u,target:h,props:f}=t;if(h&&r(u),(o||!is(f))&&(r(a),l&16))for(let _=0;_<c.length;_++){const m=c[_];i(m,e,n,!0,!!m.dynamicChildren)}},move:zs,hydrate:Jd};function zs(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:a,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||is(u))&&c&16)for(let f=0;f<a.length;f++)i(a[f],e,n,2);h&&s(l,e,n)}function Jd(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:l,querySelector:c}},a){const u=e.target=Nr(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(is(e.props))e.anchor=a(o(t),e,l(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}a(h,e,u,n,s,i,r)}uu(e)}return e.anchor&&o(e.anchor)}const cC=Xd;function uu(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Ke=Symbol.for("v-fgt"),Oi=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),Ji=Symbol.for("v-stc"),rs=[];let tt=null;function So(t=!1){rs.push(tt=t?null:[])}function Zd(){rs.pop(),tt=rs[rs.length-1]||null}let ys=1;function Wl(t){ys+=t}function hu(t){return t.dynamicChildren=ys>0?tt||En:null,Zd(),ys>0&&tt&&tt.push(t),t}function ep(t,e,n,s,i,r){return hu(pu(t,e,n,s,i,r,!0))}function fu(t,e,n,s,i){return hu(Fe(t,e,n,s,i,!0))}function si(t){return t?t.__v_isVNode===!0:!1}function Yt(t,e){return t.type===e.type&&t.key===e.key}const ki="__vInternal",du=({key:t})=>t??null,Xs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Ee(t)||K(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function pu(t,e=null,n=null,s=0,i=null,r=t===Ke?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&du(e),ref:e&&Xs(e),scopeId:Va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xe};return l?(To(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ce(n)?8:16),ys>0&&!o&&tt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&tt.push(c),c}const Fe=tp;function tp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Pd)&&(t=Xe),si(t)){const l=Ht(t,e,!0);return n&&To(l,n),ys>0&&!r&&tt&&(l.shapeFlag&6?tt[tt.indexOf(t)]=l:tt.push(l)),l.patchFlag|=-2,l}if(pp(t)&&(t=t.__vccOpts),e){e=np(e);let{class:l,style:c}=e;l&&!Ce(l)&&(e.class=ao(l)),me(c)&&(Da(c)&&!W(c)&&(c=we({},c)),e.style=co(c))}const o=Ce(t)?1:pd(t)?128:Qd(t)?64:me(t)?4:K(t)?2:0;return pu(t,e,n,s,i,o,r,!0)}function np(t){return t?Da(t)||ki in t?we({},t):t:null}function Ht(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?ip(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&du(l),ref:e&&e.ref?n&&i?W(i)?i.concat(Xs(e)):[i,Xs(e)]:Xs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ke?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ht(t.ssContent),ssFallback:t.ssFallback&&Ht(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function sp(t=" ",e=0){return Fe(Oi,null,t,e)}function aC(t="",e=!1){return e?(So(),fu(Xe,null,t)):Fe(Xe,null,t)}function at(t){return t==null||typeof t=="boolean"?Fe(Xe):W(t)?Fe(Ke,null,t.slice()):typeof t=="object"?At(t):Fe(Oi,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ht(t)}function To(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),To(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(ki in e)?e._ctx=xe:i===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),s&64?(n=16,e=[sp(e)]):n=8);t.children=e,t.shapeFlag|=n}function ip(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ao([e.class,s.class]));else if(i==="style")e.style=co([e.style,s.style]);else if(bi(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){Qe(t,e,7,[n,s])}const rp=iu();let op=0;function lp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||rp,r={uid:op++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new va(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ou(s,i),emitsOptions:ja(s,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=cd.bind(null,r),t.ce&&t.ce(r),r}let Ie=null;const cp=()=>Ie||xe;let Ro,pn,$l="__VUE_INSTANCE_SETTERS__";(pn=mr()[$l])||(pn=mr()[$l]=[]),pn.push(t=>Ie=t),Ro=t=>{pn.length>1?pn.forEach(e=>e(t)):pn[0](t)};const An=t=>{Ro(t),t.scope.on()},tn=()=>{Ie&&Ie.scope.off(),Ro(null)};function _u(t){return t.vnode.shapeFlag&4}let vs=!1;function ap(t,e=!1){vs=e;const{props:n,children:s}=t.vnode,i=_u(t);$d(t,n,i,e),zd(t,s);const r=i?up(t,e):void 0;return vs=!1,r}function up(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ri(new Proxy(t.ctx,kd));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?fp(t):null;An(t),Hn();const r=Dt(s,t,0,[t.props,i]);if(Un(),tn(),pa(r)){if(r.then(tn,tn),e)return r.then(o=>{jl(t,o,e)}).catch(o=>{xi(o,t,0)});t.asyncDep=r}else jl(t,r,e)}else gu(t,e)}function jl(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Ba(e)),gu(t,n)}let Vl;function gu(t,e,n){const s=t.type;if(!t.render){if(!e&&Vl&&!s.render){const i=s.template||bo(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=we(we({isCustomElement:r,delimiters:l},o),c);s.render=Vl(i,a)}}t.render=s.render||st}An(t),Hn(),Dd(t),Un(),tn()}function hp(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return je(t,"get","$attrs"),e[n]}}))}function fp(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return hp(t)},slots:t.slots,emit:t.emit,expose:e}}function Di(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ba(Ri(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ss)return ss[n](t)},has(e,n){return n in e||n in ss}}))}function dp(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function pp(t){return K(t)&&"__vccOpts"in t}const Ge=(t,e)=>nd(t,e,vs);function xo(t,e,n){const s=arguments.length;return s===2?me(e)&&!W(e)?si(e)?Fe(t,null,[e]):Fe(t,e):Fe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&si(n)&&(n=[n]),Fe(t,e,n))}const _p=Symbol.for("v-scx"),gp=()=>ht(_p),mp="3.3.4",yp="http://www.w3.org/2000/svg",Qt=typeof document<"u"?document:null,zl=Qt&&Qt.createElement("template"),vp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Qt.createElementNS(yp,t):Qt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Qt.createTextNode(t),createComment:t=>Qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{zl.innerHTML=s?`<svg>${t}</svg>`:t;const l=zl.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ep(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Cp(t,e,n){const s=t.style,i=Ce(n);if(n&&!i){if(e&&!Ce(e))for(const r in e)n[r]==null&&Ar(s,r,"");for(const r in n)Ar(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ql=/\s*!important$/;function Ar(t,e,n){if(W(n))n.forEach(s=>Ar(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=bp(t,e);ql.test(n)?t.setProperty(Bn(s),n.replace(ql,""),"important"):t[s]=n}}const Kl=["Webkit","Moz","ms"],Zi={};function bp(t,e){const n=Zi[e];if(n)return n;let s=ft(e);if(s!=="filter"&&s in t)return Zi[e]=s;s=Si(s);for(let i=0;i<Kl.length;i++){const r=Kl[i]+s;if(r in t)return Zi[e]=r}return e}const Gl="http://www.w3.org/1999/xlink";function wp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Gl,e.slice(6,e.length)):t.setAttributeNS(Gl,e,n);else{const r=vf(e);n==null||r&&!ma(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function Ip(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const a=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";a!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ma(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function mn(t,e,n,s){t.addEventListener(e,n,s)}function Sp(t,e,n,s){t.removeEventListener(e,n,s)}function Tp(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Rp(e);if(s){const a=r[e]=Ap(s,i);mn(t,l,a,c)}else o&&(Sp(t,l,o,c),r[e]=void 0)}}const Yl=/(?:Once|Passive|Capture)$/;function Rp(t){let e;if(Yl.test(t)){e={};let s;for(;s=t.match(Yl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bn(t.slice(2)),e]}let er=0;const xp=Promise.resolve(),Np=()=>er||(xp.then(()=>er=0),er=Date.now());function Ap(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(Pp(s,n.value),e,5,[s])};return n.value=t,n.attached=Np(),n}function Pp(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ql=/^on[a-z]/,Op=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?Ep(t,s,i):e==="style"?Cp(t,n,s):bi(e)?io(e)||Tp(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kp(t,e,s,i))?Ip(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),wp(t,e,s,i))};function kp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Ql.test(e)&&K(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ql.test(e)&&Ce(n)?!1:e in t}const Tt="transition",qn="animation",mu=(t,{slots:e})=>xo(vd,Dp(t),e);mu.displayName="Transition";const yu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};mu.props=we({},Ka,yu);const Vt=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},Xl=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function Dp(t){const e={};for(const M in t)M in yu||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:a=o,appearToClass:u=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,m=Mp(i),C=m&&m[0],N=m&&m[1],{onBeforeEnter:A,onEnter:O,onEnterCancelled:j,onLeave:D,onLeaveCancelled:q,onBeforeAppear:le=A,onAppear:ne=O,onAppearCancelled:x=j}=e,F=(M,se,Ne)=>{zt(M,se?u:l),zt(M,se?a:o),Ne&&Ne()},z=(M,se)=>{M._isLeaving=!1,zt(M,h),zt(M,_),zt(M,f),se&&se()},te=M=>(se,Ne)=>{const Me=M?ne:O,J=()=>F(se,M,Ne);Vt(Me,[se,J]),Jl(()=>{zt(se,M?c:r),Rt(se,M?u:l),Xl(Me)||Zl(se,s,C,J)})};return we(e,{onBeforeEnter(M){Vt(A,[M]),Rt(M,r),Rt(M,o)},onBeforeAppear(M){Vt(le,[M]),Rt(M,c),Rt(M,a)},onEnter:te(!1),onAppear:te(!0),onLeave(M,se){M._isLeaving=!0;const Ne=()=>z(M,se);Rt(M,h),Bp(),Rt(M,f),Jl(()=>{M._isLeaving&&(zt(M,h),Rt(M,_),Xl(D)||Zl(M,s,N,Ne))}),Vt(D,[M,Ne])},onEnterCancelled(M){F(M,!1),Vt(j,[M])},onAppearCancelled(M){F(M,!0),Vt(x,[M])},onLeaveCancelled(M){z(M),Vt(q,[M])}})}function Mp(t){if(t==null)return null;if(me(t))return[tr(t.enter),tr(t.leave)];{const e=tr(t);return[e,e]}}function tr(t){return df(t)}function Rt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function zt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Jl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Lp=0;function Zl(t,e,n,s){const i=t._endId=++Lp,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:c}=Fp(t,e);if(!o)return s();const a=o+"end";let u=0;const h=()=>{t.removeEventListener(a,f),r()},f=_=>{_.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},l+1),t.addEventListener(a,f)}function Fp(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Tt}Delay`),r=s(`${Tt}Duration`),o=ec(i,r),l=s(`${qn}Delay`),c=s(`${qn}Duration`),a=ec(l,c);let u=null,h=0,f=0;e===Tt?o>0&&(u=Tt,h=o,f=r.length):e===qn?a>0&&(u=qn,h=a,f=c.length):(h=Math.max(o,a),u=h>0?o>a?Tt:qn:null,f=u?u===Tt?r.length:c.length:0);const _=u===Tt&&/\b(transform|all)(,|$)/.test(s(`${Tt}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:_}}function ec(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>tc(n)+tc(t[s])))}function tc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Bp(){return document.body.offsetHeight}const nc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Ys(e,n):e};function Hp(t){t.target.composing=!0}function sc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const uC={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=nc(i);const r=s||i.props&&i.props.type==="number";mn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=gr(l)),t._assign(l)}),n&&mn(t,"change",()=>{t.value=t.value.trim()}),e||(mn(t,"compositionstart",Hp),mn(t,"compositionend",sc),mn(t,"change",sc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=nc(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&gr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},hC={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Kn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Kn(t,!0),s.enter(t)):s.leave(t,()=>{Kn(t,!1)}):Kn(t,e))},beforeUnmount(t,{value:e}){Kn(t,e)}};function Kn(t,e){t.style.display=e?t._vod:"none"}const Up=we({patchProp:Op},vp);let ic;function Wp(){return ic||(ic=Kd(Up))}const $p=(...t)=>{const e=Wp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=jp(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function jp(t){return Ce(t)?document.querySelector(t):t}const Vp=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},zp={},qp={id:"app"};function Kp(t,e){const n=Ad("router-view");return So(),ep("div",qp,[Fe(n)])}const Gp=Vp(zp,[["render",Kp]]);var Yp=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let vu;const Mi=t=>vu=t,Eu=Symbol();function Pr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var os;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(os||(os={}));function Qp(){const t=Ea(!0),e=t.run(()=>yo({}));let n=[],s=[];const i=Ri({install(r){Mi(i),i._a=r,r.provide(Eu,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Yp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Cu=()=>{};function rc(t,e,n,s=Cu){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ca()&&Cf(i),i}function _n(t,...e){t.slice().forEach(n=>{n(...e)})}const Xp=t=>t();function Or(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Pr(i)&&Pr(s)&&t.hasOwnProperty(n)&&!Ee(s)&&!kt(s)?t[n]=Or(i,s):t[n]=s}return t}const Jp=Symbol();function Zp(t){return!Pr(t)||!t.hasOwnProperty(Jp)}const{assign:Nt}=Object;function e_(t){return!!(Ee(t)&&t.effect)}function t_(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=Jf(n.state.value[t]);return Nt(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Ri(Ge(()=>{Mi(n);const _=n._s.get(t);return o[f].call(_,_)})),h),{}))}return c=bu(t,a,e,n,s,!0),c}function bu(t,e,n={},s,i,r){let o;const l=Nt({actions:{}},n),c={deep:!0};let a,u,h=[],f=[],_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),yo({});let C;function N(x){let F;a=u=!1,typeof x=="function"?(x(s.state.value[t]),F={type:os.patchFunction,storeId:t,events:_}):(Or(s.state.value[t],x),F={type:os.patchObject,payload:x,storeId:t,events:_});const z=C=Symbol();Eo().then(()=>{C===z&&(a=!0)}),u=!0,_n(h,F,s.state.value[t])}const A=r?function(){const{state:F}=n,z=F?F():{};this.$patch(te=>{Nt(te,z)})}:Cu;function O(){o.stop(),h=[],f=[],s._s.delete(t)}function j(x,F){return function(){Mi(s);const z=Array.from(arguments),te=[],M=[];function se(J){te.push(J)}function Ne(J){M.push(J)}_n(f,{args:z,name:x,store:q,after:se,onError:Ne});let Me;try{Me=F.apply(this&&this.$id===t?this:q,z)}catch(J){throw _n(M,J),J}return Me instanceof Promise?Me.then(J=>(_n(te,J),J)).catch(J=>(_n(M,J),Promise.reject(J))):(_n(te,Me),Me)}}const D={_p:s,$id:t,$onAction:rc.bind(null,f),$patch:N,$reset:A,$subscribe(x,F={}){const z=rc(h,x,F.detached,()=>te()),te=o.run(()=>ts(()=>s.state.value[t],M=>{(F.flush==="sync"?u:a)&&x({storeId:t,type:os.direct,events:_},M)},Nt({},c,F)));return z},$dispose:O},q=Os(D);s._s.set(t,q);const le=s._a&&s._a.runWithContext||Xp,ne=s._e.run(()=>(o=Ea(),le(()=>o.run(e))));for(const x in ne){const F=ne[x];if(Ee(F)&&!e_(F)||kt(F))r||(m&&Zp(F)&&(Ee(F)?F.value=m[x]:Or(F,m[x])),s.state.value[t][x]=F);else if(typeof F=="function"){const z=j(x,F);ne[x]=z,l.actions[x]=F}}return Nt(q,ne),Nt(Z(q),ne),Object.defineProperty(q,"$state",{get:()=>s.state.value[t],set:x=>{N(F=>{Nt(F,x)})}}),s._p.forEach(x=>{Nt(q,o.run(()=>x({store:q,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(q.$state,m),a=!0,u=!0,q}function fC(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,c){const a=Wd();return l=l||(a?ht(Eu,null):null),l&&Mi(l),l=vu,l._s.has(s)||(r?bu(s,e,i,l):t_(s,i,l)),l._s.get(s)}return o.$id=s,o}const n_="modulepreload",s_=function(t){return"/user/"+t},oc={},i_=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=s_(r),r in oc)return;oc[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":n_,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((u,h)=>{a.addEventListener("load",u),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const yn=typeof window<"u";function r_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function nr(t,e){const n={};for(const s in e){const i=e[s];n[s]=rt(i)?i.map(t):t(i)}return n}const ls=()=>{},rt=Array.isArray,o_=/\/$/,l_=t=>t.replace(o_,"");function sr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=h_(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function c_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function a_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Pn(e.matched[s],n.matched[i])&&wu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!u_(t[n],e[n]))return!1;return!0}function u_(t,e){return rt(t)?cc(t,e):rt(e)?cc(e,t):t===e}function cc(t,e){return rt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function h_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Es;(function(t){t.pop="pop",t.push="push"})(Es||(Es={}));var cs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(cs||(cs={}));function f_(t){if(!t)if(yn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),l_(t)}const d_=/^[^#]+#/;function p_(t,e){return t.replace(d_,"#")+e}function __(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Li=()=>({left:window.pageXOffset,top:window.pageYOffset});function g_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=__(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function ac(t,e){return(history.state?history.state.position-e:-1)+t}const kr=new Map;function m_(t,e){kr.set(t,e)}function y_(t){const e=kr.get(t);return kr.delete(t),e}let v_=()=>location.protocol+"//"+location.host;function Iu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),lc(c,"")}return lc(n,t)+s+i}function E_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=Iu(t,location),m=n.value,C=e.value;let N=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}N=C?f.position-C.position:0}else s(_);i.forEach(A=>{A(n.value,m,{delta:N,type:Es.pop,direction:N?N>0?cs.forward:cs.back:cs.unknown})})};function c(){o=n.value}function a(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(ce({},f.state,{scroll:Li()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:a,destroy:h}}function uc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Li():null}}function C_(t){const{history:e,location:n}=window,s={value:Iu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:v_()+t+c;try{e[u?"replaceState":"pushState"](a,"",f),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(c,a){const u=ce({},e.state,uc(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=ce({},i.value,e.state,{forward:c,scroll:Li()});r(u.current,u,!0);const h=ce({},uc(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function b_(t){t=f_(t);const e=C_(t),n=E_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ce({location:"",base:t,go:s,createHref:p_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function w_(t){return typeof t=="string"||t&&typeof t=="object"}function Su(t){return typeof t=="string"||typeof t=="symbol"}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Tu=Symbol("");var hc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hc||(hc={}));function On(t,e){return ce(new Error,{type:t,[Tu]:!0},e)}function _t(t,e){return t instanceof Error&&Tu in t&&(e==null||!!(t.type&e))}const fc="[^/]+?",I_={sensitive:!1,strict:!1,start:!0,end:!0},S_=/[.+*?^${}()[\]/\\]/g;function T_(t,e){const n=ce({},I_,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const f=a[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(S_,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:C,optional:N,regexp:A}=f;r.push({name:m,repeatable:C,optional:N});const O=A||fc;if(O!==fc){_+=10;try{new RegExp(`(${O})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+D.message)}}let j=C?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(j=N&&a.length<2?`(?:/${j})`:"/"+j),N&&(j+="?"),i+=j,_+=20,N&&(_+=-8),C&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:C,optional:N}=_,A=m in a?a[m]:"";if(rt(A)&&!C)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=rt(A)?A.join("/"):A;if(!O)if(N)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function R_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function x_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=R_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(dc(s))return 1;if(dc(i))return-1}return i.length-s.length}function dc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const N_={type:0,value:""},A_=/[a-zA-Z0-9_]/;function P_(t){if(!t)return[[]];if(t==="/")return[[N_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){a&&(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function f(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:A_.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function O_(t,e,n){const s=T_(P_(t.path),n),i=ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function k_(t,e){const n=[],s=new Map;e=gc({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=D_(u);m.aliasOf=f&&f.record;const C=gc(e,u),N=[m];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of j)N.push(ce({},m,{components:f?f.record.components:m.components,path:D,aliasOf:f?f.record:m}))}let A,O;for(const j of N){const{path:D}=j;if(h&&D[0]!=="/"){const q=h.record.path,le=q[q.length-1]==="/"?"":"/";j.path=h.record.path+(D&&le+D)}if(A=O_(j,h,C),f?f.alias.push(A):(O=O||A,O!==A&&O.alias.push(A),_&&u.name&&!_c(A)&&o(u.name)),m.children){const q=m.children;for(let le=0;le<q.length;le++)r(q[le],A,f&&f.children[le])}f=f||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return O?()=>{o(O)}:ls}function o(u){if(Su(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){let h=0;for(;h<n.length&&x_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ru(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!_c(u)&&s.set(u.record.name,u)}function a(u,h){let f,_={},m,C;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw On(1,{location:u});C=f.record.name,_=ce(pc(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&pc(u.params,f.keys.map(O=>O.name))),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(O=>O.re.test(m)),f&&(_=f.parse(m),C=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw On(1,{location:u,currentLocation:h});C=f.record.name,_=ce({},h.params,u.params),m=f.stringify(_)}const N=[];let A=f;for(;A;)N.unshift(A.record),A=A.parent;return{name:C,path:m,params:_,matched:N,meta:L_(N)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:a,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function pc(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function D_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:M_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function M_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function _c(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function L_(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function gc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ru(t,e){return e.children.some(n=>n===t||Ru(t,n))}const xu=/#/g,F_=/&/g,B_=/\//g,H_=/=/g,U_=/\?/g,Nu=/\+/g,W_=/%5B/g,$_=/%5D/g,Au=/%5E/g,j_=/%60/g,Pu=/%7B/g,V_=/%7C/g,Ou=/%7D/g,z_=/%20/g;function No(t){return encodeURI(""+t).replace(V_,"|").replace(W_,"[").replace($_,"]")}function q_(t){return No(t).replace(Pu,"{").replace(Ou,"}").replace(Au,"^")}function Dr(t){return No(t).replace(Nu,"%2B").replace(z_,"+").replace(xu,"%23").replace(F_,"%26").replace(j_,"`").replace(Pu,"{").replace(Ou,"}").replace(Au,"^")}function K_(t){return Dr(t).replace(H_,"%3D")}function G_(t){return No(t).replace(xu,"%23").replace(U_,"%3F")}function Y_(t){return t==null?"":G_(t).replace(B_,"%2F")}function ii(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Q_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Nu," "),o=r.indexOf("="),l=ii(o<0?r:r.slice(0,o)),c=o<0?null:ii(r.slice(o+1));if(l in e){let a=e[l];rt(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function mc(t){let e="";for(let n in t){const s=t[n];if(n=K_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(rt(s)?s.map(r=>r&&Dr(r)):[s&&Dr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function X_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=rt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const J_=Symbol(""),yc=Symbol(""),Ao=Symbol(""),ku=Symbol(""),Mr=Symbol("");function Gn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(On(4,{from:n,to:e})):h instanceof Error?l(h):w_(h)?l(On(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},a=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(a);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function ir(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(Z_(l)){const a=(l.__vccOpts||l)[e];a&&i.push(Pt(a,n,s,r,o))}else{let c=l();i.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=r_(a)?a.default:a;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Pt(f,n,s,r,o)()}))}}return i}function Z_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vc(t){const e=ht(Ao),n=ht(ku),s=Ge(()=>e.resolve(bn(t.to))),i=Ge(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Pn.bind(null,u));if(f>-1)return f;const _=Ec(c[a-2]);return a>1&&Ec(u)===_&&h[h.length-1].path!==_?h.findIndex(Pn.bind(null,c[a-2])):f}),r=Ge(()=>i.value>-1&&sg(n.params,s.value.params)),o=Ge(()=>i.value>-1&&i.value===n.matched.length-1&&wu(n.params,s.value.params));function l(c={}){return ng(c)?e[bn(t.replace)?"replace":"push"](bn(t.to)).catch(ls):Promise.resolve()}return{route:s,href:Ge(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const eg=Qa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vc,setup(t,{slots:e}){const n=Os(vc(t)),{options:s}=ht(Ao),i=Ge(()=>({[Cc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Cc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:xo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),tg=eg;function ng(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sg(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!rt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Ec(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Cc=(t,e,n)=>t??e??n,ig=Qa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ht(Mr),i=Ge(()=>t.route||s.value),r=ht(yc,0),o=Ge(()=>{let a=bn(r);const{matched:u}=i.value;let h;for(;(h=u[a])&&!h.components;)a++;return a}),l=Ge(()=>i.value.matched[o.value]);Qs(yc,Ge(()=>o.value+1)),Qs(J_,l),Qs(Mr,i);const c=yo();return ts(()=>[c.value,l.value,t.name],([a,u,h],[f,_,m])=>{u&&(u.instances[h]=a,_&&_!==u&&a&&a===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),a&&u&&(!_||!Pn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(C=>C(a))},{flush:"post"}),()=>{const a=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return bc(n.default,{Component:f,route:a});const _=h.props[u],m=_?_===!0?a.params:typeof _=="function"?_(a):_:null,N=xo(f,ce({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return bc(n.default,{Component:N,route:a})||N}}});function bc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rg=ig;function og(t){const e=k_(t.routes,t),n=t.parseQuery||Q_,s=t.stringifyQuery||mc,i=t.history,r=Gn(),o=Gn(),l=Gn(),c=Yf(xt);let a=xt;yn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=nr.bind(null,v=>""+v),h=nr.bind(null,Y_),f=nr.bind(null,ii);function _(v,k){let R,B;return Su(v)?(R=e.getRecordMatcher(v),B=k):B=v,e.addRoute(B,R)}function m(v){const k=e.getRecordMatcher(v);k&&e.removeRoute(k)}function C(){return e.getRoutes().map(v=>v.record)}function N(v){return!!e.getRecordMatcher(v)}function A(v,k){if(k=ce({},k||c.value),typeof v=="string"){const g=sr(n,v,k.path),y=e.resolve({path:g.path},k),E=i.createHref(g.fullPath);return ce(g,y,{params:f(y.params),hash:ii(g.hash),redirectedFrom:void 0,href:E})}let R;if("path"in v)R=ce({},v,{path:sr(n,v.path,k.path).path});else{const g=ce({},v.params);for(const y in g)g[y]==null&&delete g[y];R=ce({},v,{params:h(g)}),k.params=h(k.params)}const B=e.resolve(R,k),oe=v.hash||"";B.params=u(f(B.params));const d=c_(s,ce({},v,{hash:q_(oe),path:B.path})),p=i.createHref(d);return ce({fullPath:d,hash:oe,query:s===mc?X_(v.query):v.query||{}},B,{redirectedFrom:void 0,href:p})}function O(v){return typeof v=="string"?sr(n,v,c.value.path):ce({},v)}function j(v,k){if(a!==v)return On(8,{from:k,to:v})}function D(v){return ne(v)}function q(v){return D(ce(O(v),{replace:!0}))}function le(v){const k=v.matched[v.matched.length-1];if(k&&k.redirect){const{redirect:R}=k;let B=typeof R=="function"?R(v):R;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=O(B):{path:B},B.params={}),ce({query:v.query,hash:v.hash,params:"path"in B?{}:v.params},B)}}function ne(v,k){const R=a=A(v),B=c.value,oe=v.state,d=v.force,p=v.replace===!0,g=le(R);if(g)return ne(ce(O(g),{state:typeof g=="object"?ce({},oe,g.state):oe,force:d,replace:p}),k||R);const y=R;y.redirectedFrom=k;let E;return!d&&a_(s,B,R)&&(E=On(16,{to:y,from:B}),ot(B,B,!0,!1)),(E?Promise.resolve(E):z(y,B)).catch(b=>_t(b)?_t(b,2)?b:It(b):re(b,y,B)).then(b=>{if(b){if(_t(b,2))return ne(ce({replace:p},O(b.to),{state:typeof b.to=="object"?ce({},oe,b.to.state):oe,force:d}),k||y)}else b=M(y,B,!0,p,oe);return te(y,B,b),b})}function x(v,k){const R=j(v,k);return R?Promise.reject(R):Promise.resolve()}function F(v){const k=fn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(v):v()}function z(v,k){let R;const[B,oe,d]=lg(v,k);R=ir(B.reverse(),"beforeRouteLeave",v,k);for(const g of B)g.leaveGuards.forEach(y=>{R.push(Pt(y,v,k))});const p=x.bind(null,v,k);return R.push(p),ke(R).then(()=>{R=[];for(const g of r.list())R.push(Pt(g,v,k));return R.push(p),ke(R)}).then(()=>{R=ir(oe,"beforeRouteUpdate",v,k);for(const g of oe)g.updateGuards.forEach(y=>{R.push(Pt(y,v,k))});return R.push(p),ke(R)}).then(()=>{R=[];for(const g of d)if(g.beforeEnter)if(rt(g.beforeEnter))for(const y of g.beforeEnter)R.push(Pt(y,v,k));else R.push(Pt(g.beforeEnter,v,k));return R.push(p),ke(R)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),R=ir(d,"beforeRouteEnter",v,k),R.push(p),ke(R))).then(()=>{R=[];for(const g of o.list())R.push(Pt(g,v,k));return R.push(p),ke(R)}).catch(g=>_t(g,8)?g:Promise.reject(g))}function te(v,k,R){l.list().forEach(B=>F(()=>B(v,k,R)))}function M(v,k,R,B,oe){const d=j(v,k);if(d)return d;const p=k===xt,g=yn?history.state:{};R&&(B||p?i.replace(v.fullPath,ce({scroll:p&&g&&g.scroll},oe)):i.push(v.fullPath,oe)),c.value=v,ot(v,k,R,p),It()}let se;function Ne(){se||(se=i.listen((v,k,R)=>{if(!Bs.listening)return;const B=A(v),oe=le(B);if(oe){ne(ce(oe,{replace:!0}),B).catch(ls);return}a=B;const d=c.value;yn&&m_(ac(d.fullPath,R.delta),Li()),z(B,d).catch(p=>_t(p,12)?p:_t(p,2)?(ne(p.to,B).then(g=>{_t(g,20)&&!R.delta&&R.type===Es.pop&&i.go(-1,!1)}).catch(ls),Promise.reject()):(R.delta&&i.go(-R.delta,!1),re(p,B,d))).then(p=>{p=p||M(B,d,!1),p&&(R.delta&&!_t(p,8)?i.go(-R.delta,!1):R.type===Es.pop&&_t(p,20)&&i.go(-1,!1)),te(B,d,p)}).catch(ls)}))}let Me=Gn(),J=Gn(),he;function re(v,k,R){It(v);const B=J.list();return B.length?B.forEach(oe=>oe(v,k,R)):console.error(v),Promise.reject(v)}function pt(){return he&&c.value!==xt?Promise.resolve():new Promise((v,k)=>{Me.add([v,k])})}function It(v){return he||(he=!v,Ne(),Me.list().forEach(([k,R])=>v?R(v):k()),Me.reset()),v}function ot(v,k,R,B){const{scrollBehavior:oe}=t;if(!yn||!oe)return Promise.resolve();const d=!R&&y_(ac(v.fullPath,0))||(B||!R)&&history.state&&history.state.scroll||null;return Eo().then(()=>oe(v,k,d)).then(p=>p&&g_(p)).catch(p=>re(p,v,k))}const Be=v=>i.go(v);let hn;const fn=new Set,Bs={currentRoute:c,listening:!0,addRoute:_,removeRoute:m,hasRoute:N,getRoutes:C,resolve:A,options:t,push:D,replace:q,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:J.add,isReady:pt,install(v){const k=this;v.component("RouterLink",tg),v.component("RouterView",rg),v.config.globalProperties.$router=k,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>bn(c)}),yn&&!hn&&c.value===xt&&(hn=!0,D(i.location).catch(oe=>{}));const R={};for(const oe in xt)Object.defineProperty(R,oe,{get:()=>c.value[oe],enumerable:!0});v.provide(Ao,k),v.provide(ku,Oa(R)),v.provide(Mr,c);const B=v.unmount;fn.add(v),v.unmount=function(){fn.delete(v),fn.size<1&&(a=xt,se&&se(),se=null,c.value=xt,hn=!1,he=!1),B()}}};function ke(v){return v.reduce((k,R)=>k.then(()=>F(R)),Promise.resolve())}return Bs}function lg(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>Pn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>Pn(a,c))||i.push(c))}return[n,s,i]}const cg="/user/",ag=[{path:cg+":pathMatch(.*)",name:"error",component:()=>i_(()=>import("./index-15539098.js"),[])}],ug=og({history:b_(),routes:ag});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw Wn(e)},Wn=function(t){return new Error("Firebase Database ("+Du.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw new fg;const f=r<<2|l>>4;if(s.push(f),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const m=a<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lu=function(t){const e=Mu(t);return Po.encodeByteArray(e,!0)},ri=function(t){return Lu(t).replace(/\./g,"")},Lr=function(t){try{return Po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t){return Fu(void 0,t)}function Fu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!pg(n)||(t[n]=Fu(t[n],e[n]));return t}function pg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=()=>_g().__FIREBASE_DEFAULTS__,mg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lr(t[1]);return e&&JSON.parse(e)},Bu=()=>{try{return gg()||mg()||yg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vg=t=>{var e,n;return(n=(e=Bu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Eg=t=>{const e=vg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Hu=()=>{var t;return(t=Bu())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ri(JSON.stringify(n)),ri(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bg())}function wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wu(){return Du.NODE_ADMIN===!0}function Ig(){try{return typeof indexedDB=="object"}catch{return!1}}function Sg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg="FirebaseError";class ks extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Tg,Object.setPrototypeOf(this,ks.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$u.prototype.create)}}class $u{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Rg(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ks(i,l,s)}}function Rg(t,e){return t.replace(xg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const xg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t){return JSON.parse(t)}function Re(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Cs(Lr(r[0])||""),n=Cs(Lr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Ng=function(t){const e=ju(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ag=function(t){const e=ju(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function wc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Fr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ic(r)&&Ic(o)){if(!Fr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ic(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Oo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Bi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(t){return t&&t._delegate?t._delegate:t}class bs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Fi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lg(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Mg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mg(t){return t===qt?void 0:t}function Lg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const Bg={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},Hg=pe.INFO,Ug={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},Wg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ug[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=Hg,this._logHandler=Wg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const $g=(t,e)=>e.some(n=>t instanceof n);let Sc,Tc;function jg(){return Sc||(Sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vg(){return Tc||(Tc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zu=new WeakMap,Br=new WeakMap,qu=new WeakMap,rr=new WeakMap,ko=new WeakMap;function zg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zu.set(n,t)}).catch(()=>{}),ko.set(e,t),e}function qg(t){if(Br.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Br.set(t,e)}let Hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Br.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kg(t){Hr=t(Hr)}function Gg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(or(this),e,...n);return qu.set(s,e.sort?e.sort():[e]),Mt(s)}:Vg().includes(t)?function(...e){return t.apply(or(this),e),Mt(zu.get(this))}:function(...e){return Mt(t.apply(or(this),e))}}function Yg(t){return typeof t=="function"?Gg(t):(t instanceof IDBTransaction&&qg(t),$g(t,jg())?new Proxy(t,Hr):t)}function Mt(t){if(t instanceof IDBRequest)return zg(t);if(rr.has(t))return rr.get(t);const e=Yg(t);return e!==t&&(rr.set(t,e),ko.set(e,t)),e}const or=t=>ko.get(t);function Qg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const Xg=["get","getKey","getAll","getAllKeys","count"],Jg=["put","add","delete","clear"],lr=new Map;function Rc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lr.get(e))return lr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Jg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Xg.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return lr.set(e,r),r}Kg(t=>({...t,get:(e,n,s)=>Rc(e,n)||t.get(e,n,s),has:(e,n)=>!!Rc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(em(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function em(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ur="@firebase/app",xc="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Vu("@firebase/app"),tm="@firebase/app-compat",nm="@firebase/analytics-compat",sm="@firebase/analytics",im="@firebase/app-check-compat",rm="@firebase/app-check",om="@firebase/auth",lm="@firebase/auth-compat",cm="@firebase/database",am="@firebase/database-compat",um="@firebase/functions",hm="@firebase/functions-compat",fm="@firebase/installations",dm="@firebase/installations-compat",pm="@firebase/messaging",_m="@firebase/messaging-compat",gm="@firebase/performance",mm="@firebase/performance-compat",ym="@firebase/remote-config",vm="@firebase/remote-config-compat",Em="@firebase/storage",Cm="@firebase/storage-compat",bm="@firebase/firestore",wm="@firebase/firestore-compat",Im="firebase",Sm="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]",Tm={[Ur]:"fire-core",[tm]:"fire-core-compat",[sm]:"fire-analytics",[nm]:"fire-analytics-compat",[rm]:"fire-app-check",[im]:"fire-app-check-compat",[om]:"fire-auth",[lm]:"fire-auth-compat",[cm]:"fire-rtdb",[am]:"fire-rtdb-compat",[um]:"fire-fn",[hm]:"fire-fn-compat",[fm]:"fire-iid",[dm]:"fire-iid-compat",[pm]:"fire-fcm",[_m]:"fire-fcm-compat",[gm]:"fire-perf",[mm]:"fire-perf-compat",[ym]:"fire-rc",[vm]:"fire-rc-compat",[Em]:"fire-gcs",[Cm]:"fire-gcs-compat",[bm]:"fire-fst",[wm]:"fire-fst-compat","fire-js":"fire-js",[Im]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Map,$r=new Map;function Rm(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if($r.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;$r.set(e,t);for(const n of li.values())Rm(n,t);return!0}function xm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new $u("app","Firebase",Nm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=Sm;function Ku(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=Hu()),!n)throw Lt.create("no-options");const r=li.get(i);if(r){if(Fr(n,r.options)&&Fr(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new Fg(i);for(const c of $r.values())o.addComponent(c);const l=new Am(n,s,o);return li.set(i,l),l}function Om(t=Wr){const e=li.get(t);if(!e&&t===Wr&&Hu())return Ku();if(!e)throw Lt.create("no-app",{appName:t});return e}function In(t,e,n){var s;let i=(s=Tm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(l.join(" "));return}ci(new bs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="firebase-heartbeat-database",Dm=1,ws="firebase-heartbeat-store";let cr=null;function Gu(){return cr||(cr=Qg(km,Dm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ws)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),cr}async function Mm(t){try{return await(await Gu()).transaction(ws).objectStore(ws).get(Yu(t))}catch(e){if(e instanceof ks)sn.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(n.message)}}}async function Nc(t,e){try{const s=(await Gu()).transaction(ws,"readwrite");await s.objectStore(ws).put(e,Yu(t)),await s.done}catch(n){if(n instanceof ks)sn.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(s.message)}}}function Yu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=1024,Fm=30*24*60*60*1e3;class Bm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Um(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ac();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Fm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ac(),{heartbeatsToSend:n,unsentEntries:s}=Hm(this._heartbeatsCache.heartbeats),i=ri(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ac(){return new Date().toISOString().substring(0,10)}function Hm(t,e=Lm){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Pc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Um{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ig()?Sg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Nc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pc(t){return ri(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t){ci(new bs("platform-logger",e=>new Zg(e),"PRIVATE")),ci(new bs("heartbeat",e=>new Bm(e),"PRIVATE")),In(Ur,xc,t),In(Ur,xc,"esm2017"),In("fire-js","")}Wm("");var $m="firebase",jm="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In($m,jm,"app");const Oc="@firebase/database",kc="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu="";function Vm(t){Qu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Cs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zm(e)}}catch{}return new qm},Jt=Xu("localStorage"),jr=Xu("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Vu("@firebase/database"),Km=function(){let t=1;return function(){return t++}}(),Ju=function(t){const e=kg(t),n=new Og;n.update(e);const s=n.digest();return Po.encodeByteArray(s)},Ds=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ds.apply(null,s):typeof s=="object"?e+=Re(s):e+=s,e+=" "}return e};let nn=null,Dc=!0;const Gm=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Sn.logLevel=pe.VERBOSE,nn=Sn.log.bind(Sn),e&&jr.set("logging_enabled",!0)):typeof t=="function"?nn=t:(nn=null,jr.remove("logging_enabled"))},Ae=function(...t){if(Dc===!0&&(Dc=!1,nn===null&&jr.get("logging_enabled")===!0&&Gm(!0)),nn){const e=Ds.apply(null,t);nn(e)}},Ms=function(t){return function(...e){Ae(t,...e)}},Vr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ds(...t);Sn.error(e)},Et=function(...t){const e=`FIREBASE FATAL ERROR: ${Ds(...t)}`;throw Sn.error(e),new Error(e)},$e=function(...t){const e="FIREBASE WARNING: "+Ds(...t);Sn.warn(e)},Ym=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Do=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Qm=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dn="[MIN_NAME]",rn="[MAX_NAME]",an=function(t,e){if(t===e)return 0;if(t===Dn||e===rn)return-1;if(e===Dn||t===rn)return 1;{const n=Mc(t),s=Mc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Xm=function(t,e){return t===e?0:t<e?-1:1},Yn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Re(e))},Mo=function(t){if(typeof t!="object"||t===null)return Re(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Re(e[s]),n+=":",n+=Mo(t[e[s]]);return n+="}",n},Zu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const eh=function(t){I(!Do(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},Jm=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Zm=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ey(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ty=new RegExp("^-?(0*)\\d{1,10}$"),ny=-2147483648,sy=2147483647,Mc=function(t){if(ty.test(t)){const e=Number(t);if(e>=ny&&e<=sy)return e}return null},$n=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $e("Exception was thrown by user callback.",n),e},Math.floor(0))}},iy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},as=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){$e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$e(e)}}class Tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="5",th="v",nh="s",sh="r",ih="f",rh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oh="ls",lh="p",zr="ac",ch="websocket",ah="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ly(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function hh(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===ch)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ah)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ly(t)&&(n.ns=t.namespace);const i=[];return Oe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(){this.counters_={}}incrementCounter(e,n=1){dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar={},ur={};function Fo(t){const e=t.toString();return ar[e]||(ar[e]=new cy),ar[e]}function ay(t,e){const n=t.toString();return ur[n]||(ur[n]=e()),ur[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&$n(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="start",hy="close",fy="pLPCommand",dy="pRTLPCB",fh="id",dh="pw",ph="ser",py="cb",_y="seg",gy="ts",my="d",yy="dframe",_h=1870,gh=30,vy=_h-gh,Ey=25e3,Cy=3e4;class vn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ms(e),this.stats_=Fo(n),this.urlFn=c=>(this.appCheckToken&&(c[zr]=this.appCheckToken),hh(n,ah,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new uy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cy)),Qm(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bo((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Lc)this.id=l,this.password=c;else if(o===hy)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Lc]="t",s[ph]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[py]=this.scriptTagHolder.uniqueCallbackIdentifier),s[th]=Lo,this.transportSessionId&&(s[nh]=this.transportSessionId),this.lastSessionId&&(s[oh]=this.lastSessionId),this.applicationId&&(s[lh]=this.applicationId),this.appCheckToken&&(s[zr]=this.appCheckToken),typeof location<"u"&&location.hostname&&rh.test(location.hostname)&&(s[sh]=ih);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vn.forceAllow_=!0}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){return vn.forceAllow_?!0:!vn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Jm()&&!Zm()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lu(n),i=Zu(s,vy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[yy]="t",s[fh]=e,s[dh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Re(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bo{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Km(),window[fy+this.uniqueCallbackIdentifier]=e,window[dy+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bo.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fh]=this.myID,e[dh]=this.myPW,e[ph]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gh+s.length<=_h;){const o=this.pendingSegs.shift();s=s+"&"+_y+i+"="+o.seg+"&"+gy+i+"="+o.ts+"&"+my+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Ey)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=16384,wy=45e3;let ai=null;typeof MozWebSocket<"u"?ai=MozWebSocket:typeof WebSocket<"u"&&(ai=WebSocket);class et{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ms(this.connId),this.stats_=Fo(n),this.connURL=et.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[th]=Lo,typeof location<"u"&&location.hostname&&rh.test(location.hostname)&&(o[sh]=ih),n&&(o[nh]=n),s&&(o[oh]=s),i&&(o[zr]=i),r&&(o[lh]=r),hh(e,ch,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jt.set("previous_websocket_failure",!0);try{let s;Wu(),this.mySock=new ai(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ai!==null&&!et.forceDisallow_}static previouslyFailed(){return Jt.isInMemoryStorage||Jt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Cs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Re(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zu(n,by);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}et.responsesRequiredToBeHealthy=2;et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vn,et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=et&&et.isAvailable();let s=n&&!et.previouslyFailed();if(e.webSocketOnly&&(n||$e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[et];else{const i=this.transports_=[];for(const r of Is.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Is.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Is.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=6e4,Sy=5e3,Ty=10*1024,Ry=100*1024,hr="t",Fc="d",xy="s",Bc="r",Ny="e",Hc="o",Uc="a",Wc="n",$c="p",Ay="h";class Py{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ms("c:"+this.id+":"),this.transportManager_=new Is(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=as(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ry?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ty?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hr in e){const n=e[hr];n===Uc?this.upgradeIfSecondaryHealthy_():n===Bc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Yn("t",e),s=Yn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:$c,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Yn("t",e),s=Yn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Yn(hr,e);if(Fc in e){const s=e[Fc];if(n===Ay){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===xy?this.onConnectionShutdown_(s):n===Bc?this.onReset_(s):n===Ny?Vr("Server Error: "+s):n===Hc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Vr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Lo!==s&&$e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),as(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Iy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):as(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Sy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:$c,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends yh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ui}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc=32,Vc=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new ue("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ut(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function Ho(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Oy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ss(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ue(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=Y(t),s=Y(e);if(n===null)return e;if(n===s)return Ue(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ky(t,e){const n=Ss(t,0),s=Ss(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=an(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Uo(t,e){if(Ut(t)!==Ut(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ye(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ut(t)>Ut(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Dy{constructor(e,n){this.errorPrefix_=n,this.parts_=Ss(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Bi(this.parts_[s]);Eh(this)}}function My(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bi(e),Eh(t)}function Ly(t){const e=t.parts_.pop();t.byteLength_-=Bi(e),t.parts_.length>0&&(t.byteLength_-=1)}function Eh(t){if(t.byteLength_>Vc)throw new Error(t.errorPrefix_+"has a key path longer than "+Vc+" bytes ("+t.byteLength_+").");if(t.parts_.length>jc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jc+") or object contains a cycle "+Kt(t))}function Kt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends yh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wo}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=1e3,Fy=60*5*1e3,zc=30*1e3,By=1.3,Hy=3e4,Uy="server_kill",qc=3;class yt extends mh{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=yt.nextPersistentConnectionId_++,this.log_=Ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qn,this.maxReconnectDelay_=Fy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Wu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ui.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Re(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Fi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;yt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dt(e,"w")){const s=kn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();$e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ag(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ng(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Vr("Unrecognized action received from server: "+Re(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Hy&&(this.reconnectDelay_=Qn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*By)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new Py(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{$e(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Uy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&$e(h),c())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wc(this.interruptReasons_)&&(this.reconnectDelay_=Qn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Mo(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qc&&(this.reconnectDelay_=zc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qu.replace(/\./g,"-")]=1,Uu()?e["framework.cordova"]=1:wg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ui.getInstance().currentlyOnline();return wc(this.interruptReasons_)&&e}}yt.nextPersistentConnectionId_=0;yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new G(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(Dn,e),i=new G(Dn,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs;class Ch extends Ui{static get __EMPTY_NODE(){return qs}static set __EMPTY_NODE(e){qs=e}compare(e,n){return an(e.name,n.name)}isDefinedOn(e){throw Wn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(rn,qs)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,qs)}toString(){return".key"}}const Rn=new Ch;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Te.RED,this.left=i??We.EMPTY_NODE,this.right=r??We.EMPTY_NODE}copy(e,n,s,i,r){return new Te(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class Wy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Te(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ks(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ks(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new Wy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(t,e){return an(t.name,e.name)}function $o(t,e){return an(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr;function jy(t){qr=t}const bh=function(t){return typeof t=="number"?"number:"+eh(t):"string:"+t},wh=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dt(e,".sv"),"Priority must be a string or number.")}else I(t===qr||t.isEmpty(),"priority of unexpected type.");I(t===qr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc;class Se{constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wh(this.priorityNode_)}static set __childrenNodeConstructor(e){Kc=e}static get __childrenNodeConstructor(){return Kc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:Y(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Y(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||Ut(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=eh(this.value_):e+=this.value_,this.lazyHash_=Ju(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Se.VALUE_TYPE_ORDER.indexOf(n),r=Se.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih,Sh;function Vy(t){Ih=t}function zy(t){Sh=t}class qy extends Ui{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?an(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(rn,new Se("[PRIORITY-POST]",Sh))}makePost(e,n){const s=Ih(e);return new G(n,new Se("[PRIORITY-POST]",s))}toString(){return".priority"}}const ve=new qy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=Math.log(2);class Gy{constructor(e){const n=r=>parseInt(Math.log(r)/Ky,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hi=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new Te(f,h.node,Te.BLACK,null,null);{const _=parseInt(u/2,10)+c,m=i(c,_),C=i(_+1,a);return h=t[_],f=n?n(h):h,new Te(f,h.node,Te.BLACK,m,C)}},r=function(c){let a=null,u=null,h=t.length;const f=function(m,C){const N=h-m,A=h;h-=m;const O=i(N+1,A),j=t[N],D=n?n(j):j;_(new Te(D,j.node,C,null,O))},_=function(m){a?(a.left=m,a=m):(u=m,a=m)};for(let m=0;m<c.count;++m){const C=c.nextBitIsOne(),N=Math.pow(2,c.count-(m+1));C?f(N,Te.BLACK):(f(N,Te.BLACK),f(N,Te.RED))}return u},o=new Gy(t.length),l=r(o);return new We(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;const gn={};class mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(gn&&ve,"ChildrenNode.ts has not been loaded"),fr=fr||new mt({".priority":gn},{".priority":ve}),fr}get(e){const n=kn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return dt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Rn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=hi(s,e.getCompare()):l=gn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new mt(u,a)}addToIndexes(e,n){const s=oi(this.indexes_,(i,r)=>{const o=kn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===gn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(G.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),hi(l,o.getCompare())}else return gn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new G(e.name,l))),c.insert(e,e.node)}});return new mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=oi(this.indexes_,i=>{if(i===gn)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new mt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn;class ${constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&wh(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xn||(Xn=new $(new We($o),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xn}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xn:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Xn:this.priorityNode_;return new $(i,o,r)}}updateChild(e,n){const s=Y(e);if(s===null)return n;{I(Y(e)!==".priority"||Ut(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ve,(o,l)=>{n[o]=l.val(e),s++,r&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bh(this.getPriority().val())+":"),this.forEachChild(ve,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ju(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ls?-1:0}withIndex(e){if(e===Rn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Rn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ve),i=n.getIterator(ve);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Rn?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Yy extends ${constructor(){super(new We($o),$.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Ls=new Yy;Object.defineProperties(G,{MIN:{value:new G(Dn,$.EMPTY_NODE)},MAX:{value:new G(rn,Ls)}});Ch.__EMPTY_NODE=$.EMPTY_NODE;Se.__childrenNodeConstructor=$;jy(Ls);zy(Ls);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=!0;function Pe(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,Pe(e))}if(!(t instanceof Array)&&Qy){const n=[];let s=!1;if(Oe(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=Pe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new G(o,c)))}}),n.length===0)return $.EMPTY_NODE;const r=hi(n,$y,o=>o.name,$o);if(s){const o=hi(n,ve.getCompare());return new $(r,Pe(e),new mt({".priority":o},{".priority":ve}))}else return new $(r,Pe(e),mt.Default)}else{let n=$.EMPTY_NODE;return Oe(t,(s,i)=>{if(dt(t,s)&&s.substring(0,1)!=="."){const r=Pe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Pe(e))}}Vy(Pe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy extends Ui{constructor(e){super(),this.indexPath_=e,I(!Q(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?an(e.name,n.name):r}makePost(e,n){const s=Pe(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Ls);return new G(rn,e)}toString(){return Ss(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy extends Ui{compare(e,n){const s=e.node.compareTo(n.node);return s===0?an(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=Pe(e);return new G(n,s)}toString(){return".value"}}const Zy=new Jy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t){return{type:"value",snapshotNode:t}}function Mn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ev(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ts(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Mn(n,s)):o.trackChildChange(Rs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ts(i,r))}),n.isLeafNode()||n.forEachChild(ve,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Rs(i,r,o))}else s.trackChildChange(Mn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.indexedFilter_=new jo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xs.getStartPost_(e),this.endPost_=xs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const r=this;return n.forEachChild(ve,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new xs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=$.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const c=new G(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Rs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ts(n,h));const C=l.updateImmediateChild(n,$.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Mn(f.name,f.node)),C.updateImmediateChild(f.name,f.node)):C}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(Ts(a.name,a.node)),r.trackChildChange(Mn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,$.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new Vo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function nv(t){return t.loadsAllData()?new jo(t.getIndex()):t.hasLimit()?new tv(t):new xs(t)}function Gc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===Zy?n="$value":t.index_===Rn?n="$key":(I(t.index_ instanceof Xy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Re(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Re(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Re(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Re(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Re(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends mh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ms("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fi.getListenId_(e,s),l={};this.listens_[o]=l;const c=Gc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),kn(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=fi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Gc(e._queryParams),s=e._path.toString(),i=new Fi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Pg(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Cs(l.responseText)}catch{$e("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&$e("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return{value:null,children:new Map}}function Rh(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Y(e);t.children.has(s)||t.children.set(s,di());const i=t.children.get(s);e=_e(e),Rh(i,e,n)}}function Kr(t,e,n){t.value!==null?n(e,t.value):iv(t,(s,i)=>{const r=new ue(e.toString()+"/"+s);Kr(i,r,n)})}function iv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Oe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=10*1e3,ov=30*1e3,lv=5*60*1e3;class cv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new rv(e);const s=Qc+(ov-Qc)*Math.random();as(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Oe(e,(i,r)=>{r>0&&dt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),as(this.reportStats_.bind(this),Math.floor(Math.random()*2*lv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nt||(nt={}));function zo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function qo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ko(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=nt.ACK_USER_WRITE,this.source=zo()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new pi(ie(),n,this.revert)}}else return I(Y(this.path)===e,"operationForChild called for unrelated child."),new pi(_e(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.source=e,this.path=n,this.type=nt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Ns(this.source,ie()):new Ns(this.source,_e(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=nt.OVERWRITE}operationForChild(e){return Q(this.path)?new on(this.source,ie(),this.snap.getImmediateChild(e)):new on(this.source,_e(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=nt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new on(this.source,ie(),n.value):new Ln(this.source,ie(),n)}else return I(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ln(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function uv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ev(o.childName,o.snapshotNode))}),Jn(t,i,"child_removed",e,s,n),Jn(t,i,"child_added",e,s,n),Jn(t,i,"child_moved",r,s,n),Jn(t,i,"child_changed",e,s,n),Jn(t,i,"value",e,s,n),i}function Jn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>fv(t,l,c)),o.forEach(l=>{const c=hv(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function hv(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function fv(t,e,n){if(e.childName==null||n.childName==null)throw Wn("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t,e){return{eventCache:t,serverCache:e}}function us(t,e,n,s){return Wi(new ln(e,n,s),t.serverCache)}function xh(t,e,n,s){return Wi(t.eventCache,new ln(e,n,s))}function Gr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;const dv=()=>(dr||(dr=new We(Xm)),dr);class de{constructor(e,n=dv()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return Oe(e,(s,i)=>{n=n.set(new ue(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(Q(e))return null;{const s=Y(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(_e(e),n);return r!=null?{path:ye(new ue(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=Y(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new de(null)}}set(e,n){if(Q(e))return new de(n,this.children);{const s=Y(e),r=(this.children.get(s)||new de(null)).set(_e(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=Y(e),s=this.children.get(n);if(s){const i=s.remove(_e(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(Q(e))return this.value;{const n=Y(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(Q(e))return n;{const s=Y(e),r=(this.children.get(s)||new de(null)).setTree(_e(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Q(e))return null;{const r=Y(e),o=this.children.get(r);return o?o.findOnPath_(_e(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,s){if(Q(e))return this;{this.value&&s(n,this.value);const i=Y(e),r=this.children.get(i);return r?r.foreachOnPath_(_e(e),ye(n,i),s):new de(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.writeTree_=e}static empty(){return new it(new de(null))}}function hs(t,e,n){if(Q(e))return new it(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ue(i,e);return r=r.updateChild(o,n),new it(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new it(r)}}}function Yr(t,e,n){let s=t;return Oe(n,(i,r)=>{s=hs(s,ye(e,i),r)}),s}function Xc(t,e){if(Q(e))return it.empty();{const n=t.writeTree_.setTree(e,new de(null));return new it(n)}}function Qr(t,e){return un(t,e)!=null}function un(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function Jc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function Ft(t,e){if(Q(e))return t;{const n=un(t,e);return n!=null?new it(new de(n)):new it(t.writeTree_.subtree(e))}}function Xr(t){return t.writeTree_.isEmpty()}function Fn(t,e){return Nh(ie(),t.writeTree_,e)}function Nh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Nh(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(t,e){return kh(e,t)}function pv(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=hs(t.visibleWrites,e,n)),t.lastWriteId=s}function _v(t,e,n,s){I(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Yr(t.visibleWrites,e,n),t.lastWriteId=s}function gv(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function mv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&yv(l,s.path)?i=!1:Ye(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return vv(t),!0;if(s.snap)t.visibleWrites=Xc(t.visibleWrites,s.path);else{const l=s.children;Oe(l,c=>{t.visibleWrites=Xc(t.visibleWrites,ye(s.path,c))})}return!0}else return!1}function yv(t,e){if(t.snap)return Ye(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ye(ye(t.path,n),e))return!0;return!1}function vv(t){t.visibleWrites=Ah(t.allWrites,Ev,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ev(t){return t.visible}function Ah(t,e,n){let s=it.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ye(n,o)?(l=Ue(n,o),s=hs(s,l,r.snap)):Ye(o,n)&&(l=Ue(o,n),s=hs(s,ie(),r.snap.getChild(l)));else if(r.children){if(Ye(n,o))l=Ue(n,o),s=Yr(s,l,r.children);else if(Ye(o,n))if(l=Ue(o,n),Q(l))s=Yr(s,ie(),r.children);else{const c=kn(r.children,Y(l));if(c){const a=c.getChild(_e(l));s=hs(s,ie(),a)}}}else throw Wn("WriteRecord should have .snap or .children")}}return s}function Ph(t,e,n,s,i){if(!s&&!i){const r=un(t.visibleWrites,e);if(r!=null)return r;{const o=Ft(t.visibleWrites,e);if(Xr(o))return n;if(n==null&&!Qr(o,ie()))return null;{const l=n||$.EMPTY_NODE;return Fn(o,l)}}}else{const r=Ft(t.visibleWrites,e);if(!i&&Xr(r))return n;if(!i&&n==null&&!Qr(r,ie()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Ye(a.path,e)||Ye(e,a.path))},l=Ah(t.allWrites,o,e),c=n||$.EMPTY_NODE;return Fn(l,c)}}}function Cv(t,e,n){let s=$.EMPTY_NODE;const i=un(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ft(t.visibleWrites,e);return n.forEachChild(ve,(o,l)=>{const c=Fn(Ft(r,new ue(o)),l);s=s.updateImmediateChild(o,c)}),Jc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(t.visibleWrites,e);return Jc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function bv(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(Qr(t.visibleWrites,r))return null;{const o=Ft(t.visibleWrites,r);return Xr(o)?i.getChild(n):Fn(o,i.getChild(n))}}function wv(t,e,n,s){const i=ye(e,n),r=un(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ft(t.visibleWrites,i);return Fn(o,s.getNode().getImmediateChild(n))}else return null}function Iv(t,e){return un(t.visibleWrites,e)}function Sv(t,e,n,s,i,r,o){let l;const c=Ft(t.visibleWrites,e),a=un(c,ie());if(a!=null)l=a;else if(n!=null)l=Fn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Tv(){return{visibleWrites:it.empty(),allWrites:[],lastWriteId:-1}}function _i(t,e,n,s){return Ph(t.writeTree,t.treePath,e,n,s)}function Yo(t,e){return Cv(t.writeTree,t.treePath,e)}function Zc(t,e,n,s){return bv(t.writeTree,t.treePath,e,n,s)}function gi(t,e){return Iv(t.writeTree,ye(t.treePath,e))}function Rv(t,e,n,s,i,r){return Sv(t.writeTree,t.treePath,e,n,s,i,r)}function Qo(t,e,n){return wv(t.writeTree,t.treePath,e,n)}function Oh(t,e){return kh(ye(t.treePath,e),t.writeTree)}function kh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Rs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ts(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Mn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Rs(s,e.snapshotNode,i.oldSnap));else throw Wn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Dh=new Nv;class Xo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ln(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:cn(this.viewCache_),r=Rv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){return{filter:t}}function Pv(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ov(t,e,n,s,i){const r=new xv;let o,l;if(n.type===nt.OVERWRITE){const a=n;a.source.fromUser?o=Jr(t,e,a.path,a.snap,s,i,r):(I(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!Q(a.path),o=mi(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===nt.MERGE){const a=n;a.source.fromUser?o=Dv(t,e,a.path,a.children,s,i,r):(I(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Zr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===nt.ACK_USER_WRITE){const a=n;a.revert?o=Fv(t,e,a.path,s,i,r):o=Mv(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===nt.LISTEN_COMPLETE)o=Lv(t,e,n.path,s,r);else throw Wn("Unknown operation type: "+n.type);const c=r.getChanges();return kv(e,o,c),{viewCache:o,changes:c}}function kv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Gr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Th(Gr(e)))}}function Mh(t,e,n,s,i,r){const o=e.eventCache;if(gi(s,n)!=null)return e;{let l,c;if(Q(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=cn(e),u=a instanceof $?a:$.EMPTY_NODE,h=Yo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=_i(s,cn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=Y(n);if(a===".priority"){I(Ut(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Zc(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=_e(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=Zc(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=Qo(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return us(e,l,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function mi(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(Q(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=Y(n);if(!c.isCompleteForPath(n)&&Ut(n)>1)return e;const m=_e(n),N=c.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?a=u.updatePriority(c.getNode(),N):a=u.updateChild(c.getNode(),_,N,m,Dh,null)}const h=xh(e,a,c.isFullyInitialized()||Q(n),u.filtersNodes()),f=new Xo(i,h,r);return Mh(t,h,n,i,f,l)}function Jr(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new Xo(i,e,r);if(Q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=us(e,a,!0,t.filter.filtersNodes());else{const h=Y(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=us(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=_e(n),_=l.getNode().getImmediateChild(h);let m;if(Q(f))m=s;else{const C=u.getCompleteChild(h);C!=null?Ho(f)===".priority"&&C.getChild(vh(f)).isEmpty()?m=C:m=C.updateChild(f,s):m=$.EMPTY_NODE}if(_.equals(m))c=e;else{const C=t.filter.updateChild(l.getNode(),h,m,f,u,o);c=us(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ea(t,e){return t.eventCache.isCompleteForChild(e)}function Dv(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=ye(n,c);ea(e,Y(u))&&(l=Jr(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=ye(n,c);ea(e,Y(u))||(l=Jr(t,l,u,a,i,r,o))}),l}function ta(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Zr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;Q(n)?a=s:a=new de(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=ta(t,_,f);c=mi(t,c,new ue(h),m,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),C=ta(t,m,f);c=mi(t,c,new ue(h),C,i,r,o,l)}}),c}function Mv(t,e,n,s,i,r,o){if(gi(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return mi(t,e,n,c.getNode().getChild(n),i,r,l,o);if(Q(n)){let a=new de(null);return c.getNode().forEachChild(Rn,(u,h)=>{a=a.set(new ue(u),h)}),Zr(t,e,n,a,i,r,l,o)}else return e}else{let a=new de(null);return s.foreach((u,h)=>{const f=ye(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),Zr(t,e,n,a,i,r,l,o)}}function Lv(t,e,n,s,i){const r=e.serverCache,o=xh(e,r.getNode(),r.isFullyInitialized()||Q(n),r.isFiltered());return Mh(t,o,n,s,Dh,i)}function Fv(t,e,n,s,i,r){let o;if(gi(s,n)!=null)return e;{const l=new Xo(s,e,i),c=e.eventCache.getNode();let a;if(Q(n)||Y(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=_i(s,cn(e));else{const h=e.serverCache.getNode();I(h instanceof $,"serverChildren would be complete if leaf node"),u=Yo(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=Y(n);let h=Qo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,_e(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,$.EMPTY_NODE,_e(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=_i(s,cn(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||gi(s,ie())!=null,us(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new jo(s.getIndex()),r=nv(s);this.processor_=Av(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode($.EMPTY_NODE,l.getNode(),null),u=new ln(c,o.isFullyInitialized(),i.filtersNodes()),h=new ln(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Wi(h,u),this.eventGenerator_=new av(this.query_)}get query(){return this.query_}}function Hv(t){return t.viewCache_.serverCache.getNode()}function Uv(t,e){const n=cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function na(t){return t.eventRegistrations_.length===0}function Wv(t,e){t.eventRegistrations_.push(e)}function sa(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ia(t,e,n,s){e.type===nt.MERGE&&e.source.queryId!==null&&(I(cn(t.viewCache_),"We should always have a full cache before handling merges"),I(Gr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Ov(t.processor_,i,e,n,s);return Pv(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Lh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function $v(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(r,o)=>{s.push(Mn(r,o))}),n.isFullyInitialized()&&s.push(Th(n.getNode())),Lh(t,s,n.getNode(),e)}function Lh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return uv(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;class jv{constructor(){this.views=new Map}}function Vv(t){I(!yi,"__referenceConstructor has already been defined"),yi=t}function zv(){return I(yi,"Reference.ts has not been loaded"),yi}function qv(t){return t.views.size===0}function Jo(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),ia(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ia(o,e,n,s));return r}}function Kv(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=_i(n,i?s:null),c=!1;l?c=!0:s instanceof $?(l=Yo(n,s),c=!1):(l=$.EMPTY_NODE,c=!1);const a=Wi(new ln(l,c,!1),new ln(s,i,!1));return new Bv(e,a)}return o}function Gv(t,e,n,s,i,r){const o=Kv(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Wv(o,n),$v(o,n)}function Yv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Wt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(sa(a,n,s)),na(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(sa(c,n,s)),na(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Wt(t)&&r.push(new(zv())(e._repo,e._path)),{removed:r,events:o}}function Fh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function xn(t,e){let n=null;for(const s of t.views.values())n=n||Uv(s,e);return n}function Bh(t,e){if(e._queryParams.loadsAllData())return $i(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Hh(t,e){return Bh(t,e)!=null}function Wt(t){return $i(t)!=null}function $i(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi;function Qv(t){I(!vi,"__referenceConstructor has already been defined"),vi=t}function Xv(){return I(vi,"Reference.ts has not been loaded"),vi}let Jv=1;class ra{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=Tv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zv(t,e,n,s,i){return pv(t.pendingWriteTree_,e,n,s,i),i?jn(t,new on(zo(),e,n)):[]}function eE(t,e,n,s){_v(t.pendingWriteTree_,e,n,s);const i=de.fromObject(n);return jn(t,new Ln(zo(),e,i))}function Zt(t,e,n=!1){const s=gv(t.pendingWriteTree_,e);if(mv(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(ie(),!0):Oe(s.children,o=>{r=r.set(new ue(o),!0)}),jn(t,new pi(s.path,r,n))}else return[]}function ji(t,e,n){return jn(t,new on(qo(),e,n))}function tE(t,e,n){const s=de.fromObject(n);return jn(t,new Ln(qo(),e,s))}function nE(t,e){return jn(t,new Ns(qo(),e))}function sE(t,e,n){const s=Zo(t,n);if(s){const i=el(s),r=i.path,o=i.queryId,l=Ue(r,e),c=new Ns(Ko(o),l);return tl(t,r,c)}else return[]}function eo(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Hh(o,e))){const c=Yv(o,e,n,s);qv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>Wt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=oE(f);for(let m=0;m<_.length;++m){const C=_[m],N=C.query,A=jh(t,C);t.listenProvider_.startListening(fs(N),Ei(t,N),A.hashFn,A.onComplete)}}}!h&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(fs(e),null):a.forEach(f=>{const _=t.queryToTagMap.get(Vi(f));t.listenProvider_.stopListening(fs(f),_)}))}lE(t,a)}return l}function iE(t,e,n,s){const i=Zo(t,s);if(i!=null){const r=el(i),o=r.path,l=r.queryId,c=Ue(o,e),a=new on(Ko(l),c,n);return tl(t,o,a)}else return[]}function rE(t,e,n,s){const i=Zo(t,s);if(i){const r=el(i),o=r.path,l=r.queryId,c=Ue(o,e),a=de.fromObject(n),u=new Ln(Ko(l),c,a);return tl(t,o,u)}else return[]}function oa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const m=Ue(f,i);r=r||xn(_,m),o=o||Wt(_)});let l=t.syncPointTree_.get(i);l?(o=o||Wt(l),r=r||xn(l,ie())):(l=new jv,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const C=xn(m,ie());C&&(r=r.updateImmediateChild(_,C))}));const a=Hh(l,e);if(!a&&!e._queryParams.loadsAllData()){const f=Vi(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=cE();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Go(t.pendingWriteTree_,i);let h=Gv(l,e,n,u,r,c);if(!a&&!o&&!s){const f=Bh(l,e);h=h.concat(aE(t,e,f))}return h}function Uh(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Ue(o,e),a=xn(l,c);if(a)return a});return Ph(i,e,r,n,!0)}function jn(t,e){return Wh(e,t.syncPointTree_,null,Go(t.pendingWriteTree_,ie()))}function Wh(t,e,n,s){if(Q(t.path))return $h(t,e,n,s);{const i=e.get(ie());n==null&&i!=null&&(n=xn(i,ie()));let r=[];const o=Y(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Oh(s,o);r=r.concat(Wh(l,c,a,u))}return i&&(r=r.concat(Jo(i,t,s,n))),r}}function $h(t,e,n,s){const i=e.get(ie());n==null&&i!=null&&(n=xn(i,ie()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Oh(s,o),u=t.operationForChild(o);u&&(r=r.concat($h(u,l,c,a)))}),i&&(r=r.concat(Jo(i,t,s,n))),r}function jh(t,e){const n=e.query,s=Ei(t,n);return{hashFn:()=>(Hv(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?sE(t,n._path,s):nE(t,n._path);{const r=ey(i,n);return eo(t,n,null,r)}}}}function Ei(t,e){const n=Vi(e);return t.queryToTagMap.get(n)}function Vi(t){return t._path.toString()+"$"+t._queryIdentifier}function Zo(t,e){return t.tagToQueryMap.get(e)}function el(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function tl(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=Go(t.pendingWriteTree_,e);return Jo(s,n,i,null)}function oE(t){return t.fold((e,n,s)=>{if(n&&Wt(n))return[$i(n)];{let i=[];return n&&(i=Fh(n)),Oe(s,(r,o)=>{i=i.concat(o)}),i}})}function fs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Xv())(t._repo,t._path):t}function lE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Vi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function cE(){return Jv++}function aE(t,e,n){const s=e._path,i=Ei(t,e),r=jh(t,n),o=t.listenProvider_.startListening(fs(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)I(!Wt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!Q(a)&&u&&Wt(u))return[$i(u).query];{let f=[];return u&&(f=f.concat(Fh(u).map(_=>_.query))),Oe(h,(_,m)=>{f=f.concat(m)}),f}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(fs(u),Ei(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nl(n)}node(){return this.node_}}class sl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new sl(this.syncTree_,n)}node(){return Uh(this.syncTree_,this.path_)}}const uE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},la=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fE(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},fE=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Vh=function(t,e,n,s){return il(e,new sl(n,t),s)},dE=function(t,e,n){return il(t,new nl(e),n)};function il(t,e,n){const s=t.getPriority().val(),i=la(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=la(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Se(l,Pe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Se(i))),o.forEachChild(ve,(l,c)=>{const a=il(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ol(t,e){let n=e instanceof ue?e:new ue(e),s=t,i=Y(n);for(;i!==null;){const r=kn(s.node.children,i)||{children:{},childCount:0};s=new rl(i,s,r),n=_e(n),i=Y(n)}return s}function Vn(t){return t.node.value}function zh(t,e){t.node.value=e,to(t)}function qh(t){return t.node.childCount>0}function pE(t){return Vn(t)===void 0&&!qh(t)}function zi(t,e){Oe(t.node.children,(n,s)=>{e(new rl(n,t,s))})}function Kh(t,e,n,s){n&&!s&&e(t),zi(t,i=>{Kh(i,e,!0,s)}),n&&s&&e(t)}function _E(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fs(t){return new ue(t.parent===null?t.name:Fs(t.parent)+"/"+t.name)}function to(t){t.parent!==null&&gE(t.parent,t.name,t)}function gE(t,e,n){const s=pE(n),i=dt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,to(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,to(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=/[\[\].#$\/\u0000-\u001F\u007F]/,yE=/[\[\].#$\u0000-\u001F\u007F]/,pr=10*1024*1024,ll=function(t){return typeof t=="string"&&t.length!==0&&!mE.test(t)},Gh=function(t){return typeof t=="string"&&t.length!==0&&!yE.test(t)},vE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Gh(t)},EE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Do(t)||t&&typeof t=="object"&&dt(t,".sv")},cl=function(t,e,n){const s=n instanceof ue?new Dy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kt(s)+" with contents = "+e.toString());if(Do(e))throw new Error(t+"contains "+e.toString()+" "+Kt(s));if(typeof e=="string"&&e.length>pr/3&&Bi(e)>pr)throw new Error(t+"contains a string greater than "+pr+" utf8 bytes "+Kt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Oe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ll(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);My(s,o),cl(t,l,s),Ly(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kt(s)+" in addition to actual children.")}},CE=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Ss(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ll(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ky);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Ye(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},bE=function(t,e,n,s){if(s&&e===void 0)return;const i=Oo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Oe(e,(o,l)=>{const c=new ue(o);if(cl(i,l,ye(n,c)),Ho(c)===".priority"&&!EE(l))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),CE(i,r)},Yh=function(t,e,n,s){if(!(s&&n===void 0)&&!Gh(n))throw new Error(Oo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},wE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yh(t,e,n,s)},IE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ll(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vE(n))throw new Error(Oo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function al(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Uo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Qh(t,e,n){al(t,n),Xh(t,s=>Uo(s,e))}function Ct(t,e,n){al(t,n),Xh(t,s=>Ye(s,e)||Ye(e,s))}function Xh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(TE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function TE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();nn&&Ae("event: "+n.toString()),$n(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE="repo_interrupt",xE=25;class NE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new SE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=di(),this.transactionQueueTree_=new rl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function AE(t,e,n){if(t.stats_=Fo(t.repoInfo_),t.forceRestClient_||iy())t.server_=new fi(t.repoInfo_,(s,i,r,o)=>{ca(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>aa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new yt(t.repoInfo_,e,(s,i,r,o)=>{ca(t,s,i,r,o)},s=>{aa(t,s)},s=>{OE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ay(t.repoInfo_,()=>new cv(t.stats_,t.server_)),t.infoData_=new sv,t.infoSyncTree_=new ra({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=ji(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),hl(t,"connected",!1),t.serverSyncTree_=new ra({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);Ct(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function PE(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ul(t){return uE({timestamp:PE(t)})}function ca(t,e,n,s,i){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=oi(n,a=>Pe(a));o=rE(t.serverSyncTree_,r,c,i)}else{const c=Pe(n);o=iE(t.serverSyncTree_,r,c,i)}else if(s){const c=oi(n,a=>Pe(a));o=tE(t.serverSyncTree_,r,c)}else{const c=Pe(n);o=ji(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=As(t,r)),Ct(t.eventQueue_,l,o)}function aa(t,e){hl(t,"connected",e),e===!1&&DE(t)}function OE(t,e){Oe(e,(n,s)=>{hl(t,n,s)})}function hl(t,e,n){const s=new ue("/.info/"+e),i=Pe(n);t.infoData_.updateSnapshot(s,i);const r=ji(t.infoSyncTree_,s,i);Ct(t.eventQueue_,s,r)}function Jh(t){return t.nextWriteId_++}function kE(t,e,n,s){fl(t,"update",{path:e.toString(),value:n});let i=!0;const r=ul(t),o={};if(Oe(n,(l,c)=>{i=!1,o[l]=Vh(ye(e,l),Pe(c),t.serverSyncTree_,r)}),i)Ae("update() called with empty data.  Don't do anything."),ha(t,s,"ok",void 0);else{const l=Jh(t),c=eE(t.serverSyncTree_,e,o,l);al(t.eventQueue_,c),t.server_.merge(e.toString(),n,(a,u)=>{const h=a==="ok";h||$e("update at "+e+" failed: "+a);const f=Zt(t.serverSyncTree_,l,!h),_=f.length>0?As(t,e):e;Ct(t.eventQueue_,_,f),ha(t,s,a,u)}),Oe(n,a=>{const u=sf(t,ye(e,a));As(t,u)}),Ct(t.eventQueue_,e,[])}}function DE(t){fl(t,"onDisconnectEvents");const e=ul(t),n=di();Kr(t.onDisconnect_,ie(),(i,r)=>{const o=Vh(i,r,t.serverSyncTree_,e);Rh(n,i,o)});let s=[];Kr(n,ie(),(i,r)=>{s=s.concat(ji(t.serverSyncTree_,i,r));const o=sf(t,i);As(t,o)}),t.onDisconnect_=di(),Ct(t.eventQueue_,ie(),s)}function ME(t,e,n){let s;Y(e._path)===".info"?s=oa(t.infoSyncTree_,e,n):s=oa(t.serverSyncTree_,e,n),Qh(t.eventQueue_,e._path,s)}function ua(t,e,n){let s;Y(e._path)===".info"?s=eo(t.infoSyncTree_,e,n):s=eo(t.serverSyncTree_,e,n),Qh(t.eventQueue_,e._path,s)}function LE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RE)}function fl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function ha(t,e,n,s){e&&$n(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Zh(t,e,n){return Uh(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function dl(t,e=t.transactionQueueTree_){if(e||qi(t,e),Vn(e)){const n=tf(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&FE(t,Fs(e),n)}else qh(e)&&zi(e,n=>{dl(t,n)})}function FE(t,e,n){const s=n.map(a=>a.currentWriteId),i=Zh(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ue(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{fl(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Zt(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();qi(t,ol(t.transactionQueueTree_,e)),dl(t,t.transactionQueueTree_),Ct(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)$n(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{$e("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}As(t,e)}},o)}function As(t,e){const n=ef(t,e),s=Fs(n),i=tf(t,n);return BE(t,i,s),s}function BE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Ue(n,c.path);let u=!1,h;if(I(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Zt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=xE)u=!0,h="maxretry",i=i.concat(Zt(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Zh(t,c.path,o);c.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){cl("transaction failed: Data returned ",_,c.path);let m=Pe(_);typeof _=="object"&&_!=null&&dt(_,".priority")||(m=m.updatePriority(f.getPriority()));const N=c.currentWriteId,A=ul(t),O=dE(m,f,A);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=O,c.currentWriteId=Jh(t),o.splice(o.indexOf(N),1),i=i.concat(Zv(t.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),i=i.concat(Zt(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(Zt(t.serverSyncTree_,c.currentWriteId,!0))}Ct(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}qi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)$n(s[l]);dl(t,t.transactionQueueTree_)}function ef(t,e){let n,s=t.transactionQueueTree_;for(n=Y(e);n!==null&&Vn(s)===void 0;)s=ol(s,n),e=_e(e),n=Y(e);return s}function tf(t,e){const n=[];return nf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function nf(t,e,n){const s=Vn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);zi(e,i=>{nf(t,i,n)})}function qi(t,e){const n=Vn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,zh(e,n.length>0?n:void 0)}zi(e,s=>{qi(t,s)})}function sf(t,e){const n=Fs(ef(t,e)),s=ol(t.transactionQueueTree_,e);return _E(s,i=>{_r(t,i)}),_r(t,s),Kh(s,i=>{_r(t,i)}),n}function _r(t,e){const n=Vn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?zh(e,void 0):n.length=r+1,Ct(t.eventQueue_,Fs(e),i);for(let o=0;o<s.length;o++)$n(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function UE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):$e(`Invalid query segment '${n}' in query '${t}'`)}return e}const fa=function(t,e){const n=WE(t),s=n.namespace;n.domain==="firebase.com"&&Et(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Et("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ym();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new uh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ue(n.pathString)}},WE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=HE(t.substring(u,h)));const f=UE(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class of{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Q(this._path)?null:Ho(this._path)}get ref(){return new wt(this._repo,this._path)}get _queryIdentifier(){const e=Yc(this._queryParams),n=Mo(e);return n==="{}"?"default":n}get _queryObject(){return Yc(this._queryParams)}isEqual(e){if(e=Hi(e),!(e instanceof pl))return!1;const n=this._repo===e._repo,s=Uo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Oy(this._path)}}class wt extends pl{constructor(e,n){super(e,n,new Vo,!1)}get parent(){const e=vh(this._path);return e===null?null:new wt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ps{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),s=Ci(this.ref,e);return new Ps(this._node.getChild(n),s,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ps(i,Ci(this.ref,s),ve)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dC(t,e){return t=Hi(t),t._checkNotDeleted("ref"),e!==void 0?Ci(t._root,e):t._root}function Ci(t,e){return t=Hi(t),Y(t._path)===null?wE("child","path",e,!1):Yh("child","path",e,!1),new wt(t._repo,ye(t._path,e))}function pC(t,e){bE("update",e,t._path,!1);const n=new Fi;return kE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class _l{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new rf("value",this,new Ps(e.snapshotNode,new wt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new of(this,e,n):null}matches(e){return e instanceof _l?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class gl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new of(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const s=Ci(new wt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new rf(e.type,this,new Ps(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof gl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function jE(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,h)=>{ua(t._repo,t,l),c(u,h)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new $E(n,r||void 0),l=e==="value"?new _l(o):new gl(e,o);return ME(t._repo,t,l),()=>ua(t._repo,t,l)}function _C(t,e,n,s){return jE(t,"value",e,n,s)}Vv(wt);Qv(wt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE="FIREBASE_DATABASE_EMULATOR_HOST",no={};let zE=!1;function qE(t,e,n,s){t.repoInfo_=new uh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function KE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Et("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fa(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[VE]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=fa(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Tn(Tn.OWNER):new oy(t.name,t.options,e);IE("Invalid Firebase Database URL",o),Q(o.path)||Et("Database URL must point to the root of a Firebase Database (not including a child path).");const h=YE(l,t,u,new ry(t.name,n));return new QE(h,t)}function GE(t,e){const n=no[e];(!n||n[t.key]!==t)&&Et(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LE(t),delete n[t.key]}function YE(t,e,n,s){let i=no[e.name];i||(i={},no[e.name]=i);let r=i[t.toURLString()];return r&&Et("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new NE(t,zE,n,s),i[t.toURLString()]=r,r}class QE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(AE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new wt(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(GE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Et("Cannot call "+e+" on a deleted database.")}}function XE(t=Om(),e){const n=xm(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Eg("database");s&&JE(n,...s)}return n}function JE(t,e,n,s={}){t=Hi(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Et("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Et('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Tn(Tn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Cg(s.mockUserToken,t.app.options.projectId);r=new Tn(o)}qE(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t){Vm(Pm),ci(new bs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return KE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),In(Oc,kc,t),In(Oc,kc,"esm2017")}yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ZE();const eC={apiKey:"AIzaSyChlDtKx-SfIE42CoKHtOG9Dt9QNSzvNSU",authDomain:"design-primo.firebaseapp.com",databaseURL:"https://design-primo-default-rtdb.firebaseio.com",projectId:"design-primo",storageBucket:"design-primo.appspot.com",messagingSenderId:"554464328513",appId:"1:554464328513:web:9a184cbe0ad8ee05aeffc0"},tC=Ku(eC),nC=XE(tC),sC=Qp(),Ki=$p(Gp);Ki.use(nC);Ki.use(sC);Ki.use(ug);Ki.mount("#app");export{uC as A,bn as B,oC as C,Ke as F,mu as T,yo as a,So as b,Ci as c,fC as d,ep as e,pu as f,XE as g,Ja as h,eu as i,Ge as j,fu as k,Fe as l,ad as m,ao as n,_C as o,rC as p,lC as q,dC as r,aC as s,cC as t,pC as u,hC as v,ts as w,co as x,iC as y,sp as z};
