(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function lo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ge={},Cn=[],st=()=>{},hf=()=>!1,ff=/^on[^a-z]/,Ti=t=>ff.test(t),co=t=>t.startsWith("onUpdate:"),we=Object.assign,ao=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},df=Object.prototype.hasOwnProperty,ee=(t,e)=>df.call(t,e),W=Array.isArray,bn=t=>Ri(t)==="[object Map]",da=t=>Ri(t)==="[object Set]",q=t=>typeof t=="function",Ce=t=>typeof t=="string",uo=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",pa=t=>me(t)&&q(t.then)&&q(t.catch),_a=Object.prototype.toString,Ri=t=>_a.call(t),pf=t=>Ri(t).slice(8,-1),ga=t=>Ri(t)==="[object Object]",ho=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xs=lo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_f=/-(\w)/g,ft=xi(t=>t.replace(_f,(e,n)=>n?n.toUpperCase():"")),gf=/\B([A-Z])/g,Hn=xi(t=>t.replace(gf,"-$1").toLowerCase()),Ni=xi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zi=xi(t=>t?`on${Ni(t)}`:""),ps=(t,e)=>!Object.is(t,e),Js=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ti=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Cr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},mf=t=>{const e=Ce(t)?Number(t):NaN;return isNaN(e)?t:e};let Cl;const br=()=>Cl||(Cl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fo(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Ce(s)?Cf(s):fo(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Ce(t))return t;if(me(t))return t}}const yf=/;(?![^(]*\))/g,vf=/:([^]+)/,Ef=/\/\*[^]*?\*\//g;function Cf(t){const e={};return t.replace(Ef,"").split(yf).forEach(n=>{if(n){const s=n.split(vf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function po(t){let e="";if(Ce(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=po(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wf=lo(bf);function ma(t){return!!t||t===""}const lC=t=>Ce(t)?t:t==null?"":W(t)||me(t)&&(t.toString===_a||!q(t.toString))?JSON.stringify(t,ya,2):String(t),ya=(t,e)=>e&&e.__v_isRef?ya(t,e.value):bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:da(e)?{[`Set(${e.size})`]:[...e.values()]}:me(e)&&!W(e)&&!ga(e)?String(e):e;let ze;class va{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ze,!e&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ze;try{return ze=this,e()}finally{ze=n}}}on(){ze=this}off(){ze=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ea(t){return new va(t)}function If(t,e=ze){e&&e.active&&e.effects.push(t)}function Ca(){return ze}function Sf(t){ze&&ze.cleanups.push(t)}const _o=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ba=t=>(t.w&Ht)>0,wa=t=>(t.n&Ht)>0,Tf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ht},Rf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ba(i)&&!wa(i)?i.delete(t):e[n++]=i,i.w&=~Ht,i.n&=~Ht}e.length=n}},ni=new WeakMap;let es=0,Ht=1;const wr=30;let Ze;const nn=Symbol(""),Ir=Symbol("");class go{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,If(this,s)}run(){if(!this.active)return this.fn();let e=Ze,n=Ot;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ze,Ze=this,Ot=!0,Ht=1<<++es,es<=wr?Tf(this):bl(this),this.fn()}finally{es<=wr&&Rf(this),Ht=1<<--es,Ze=this.parent,Ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ze===this?this.deferStop=!0:this.active&&(bl(this),this.onStop&&this.onStop(),this.active=!1)}}function bl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ot=!0;const Ia=[];function Un(){Ia.push(Ot),Ot=!1}function Wn(){const t=Ia.pop();Ot=t===void 0?!0:t}function je(t,e,n){if(Ot&&Ze){let s=ni.get(t);s||ni.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=_o()),Sa(i)}}function Sa(t,e){let n=!1;es<=wr?wa(t)||(t.n|=Ht,n=!ba(t)):n=!t.has(Ze),n&&(t.add(Ze),Ze.deps.push(t))}function Ct(t,e,n,s,i,r){const o=ni.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&W(t)){const c=Number(s);o.forEach((a,u)=>{(u==="length"||u>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":W(t)?ho(n)&&l.push(o.get("length")):(l.push(o.get(nn)),bn(t)&&l.push(o.get(Ir)));break;case"delete":W(t)||(l.push(o.get(nn)),bn(t)&&l.push(o.get(Ir)));break;case"set":bn(t)&&l.push(o.get(nn));break}if(l.length===1)l[0]&&Sr(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);Sr(_o(c))}}function Sr(t,e){const n=W(t)?t:[...t];for(const s of n)s.computed&&wl(s);for(const s of n)s.computed||wl(s)}function wl(t,e){(t!==Ze||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function xf(t,e){var n;return(n=ni.get(t))==null?void 0:n.get(e)}const Nf=lo("__proto__,__v_isRef,__isVue"),Ta=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(uo)),Af=mo(),Pf=mo(!1,!0),Of=mo(!0),Il=kf();function kf(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let r=0,o=this.length;r<o;r++)je(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Z)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Un();const s=Z(this)[e].apply(this,n);return Wn(),s}}),t}function Df(t){const e=Z(this);return je(e,"has",t),e.hasOwnProperty(t)}function mo(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Qf:Pa:e?Aa:Na).get(s))return s;const o=W(s);if(!t){if(o&&ee(Il,i))return Reflect.get(Il,i,r);if(i==="hasOwnProperty")return Df}const l=Reflect.get(s,i,r);return(uo(i)?Ta.has(i):Nf(i))||(t||je(s,"get",i),e)?l:Ee(l)?o&&ho(i)?l:l.value:me(l)?t?ka(l):ks(l):l}}const Mf=Ra(),Lf=Ra(!0);function Ra(t=!1){return function(n,s,i,r){let o=n[s];if(Nn(o)&&Ee(o)&&!Ee(i))return!1;if(!t&&(!si(i)&&!Nn(i)&&(o=Z(o),i=Z(i)),!W(n)&&Ee(o)&&!Ee(i)))return o.value=i,!0;const l=W(n)&&ho(s)?Number(s)<n.length:ee(n,s),c=Reflect.set(n,s,i,r);return n===Z(r)&&(l?ps(i,o)&&Ct(n,"set",s,i):Ct(n,"add",s,i)),c}}function Ff(t,e){const n=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ct(t,"delete",e,void 0),s}function Bf(t,e){const n=Reflect.has(t,e);return(!uo(e)||!Ta.has(e))&&je(t,"has",e),n}function Hf(t){return je(t,"iterate",W(t)?"length":nn),Reflect.ownKeys(t)}const xa={get:Af,set:Mf,deleteProperty:Ff,has:Bf,ownKeys:Hf},Uf={get:Of,set(t,e){return!0},deleteProperty(t,e){return!0}},Wf=we({},xa,{get:Pf,set:Lf}),yo=t=>t,Ai=t=>Reflect.getPrototypeOf(t);function $s(t,e,n=!1,s=!1){t=t.__v_raw;const i=Z(t),r=Z(e);n||(e!==r&&je(i,"get",e),je(i,"get",r));const{has:o}=Ai(i),l=s?yo:n?Co:_s;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function js(t,e=!1){const n=this.__v_raw,s=Z(n),i=Z(t);return e||(t!==i&&je(s,"has",t),je(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Vs(t,e=!1){return t=t.__v_raw,!e&&je(Z(t),"iterate",nn),Reflect.get(t,"size",t)}function Sl(t){t=Z(t);const e=Z(this);return Ai(e).has.call(e,t)||(e.add(t),Ct(e,"add",t,t)),this}function Tl(t,e){e=Z(e);const n=Z(this),{has:s,get:i}=Ai(n);let r=s.call(n,t);r||(t=Z(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ps(e,o)&&Ct(n,"set",t,e):Ct(n,"add",t,e),this}function Rl(t){const e=Z(this),{has:n,get:s}=Ai(e);let i=n.call(e,t);i||(t=Z(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Ct(e,"delete",t,void 0),r}function xl(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&Ct(t,"clear",void 0,void 0),n}function zs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=Z(o),c=e?yo:t?Co:_s;return!t&&je(l,"iterate",nn),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Ks(t,e,n){return function(...s){const i=this.__v_raw,r=Z(i),o=bn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?yo:e?Co:_s;return!e&&je(r,"iterate",c?Ir:nn),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function St(t){return function(...e){return t==="delete"?!1:this}}function $f(){const t={get(r){return $s(this,r)},get size(){return Vs(this)},has:js,add:Sl,set:Tl,delete:Rl,clear:xl,forEach:zs(!1,!1)},e={get(r){return $s(this,r,!1,!0)},get size(){return Vs(this)},has:js,add:Sl,set:Tl,delete:Rl,clear:xl,forEach:zs(!1,!0)},n={get(r){return $s(this,r,!0)},get size(){return Vs(this,!0)},has(r){return js.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:zs(!0,!1)},s={get(r){return $s(this,r,!0,!0)},get size(){return Vs(this,!0)},has(r){return js.call(this,r,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:zs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ks(r,!1,!1),n[r]=Ks(r,!0,!1),e[r]=Ks(r,!1,!0),s[r]=Ks(r,!0,!0)}),[t,n,e,s]}const[jf,Vf,zf,Kf]=$f();function vo(t,e){const n=e?t?Kf:zf:t?Vf:jf;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ee(n,i)&&i in s?n:s,i,r)}const qf={get:vo(!1,!1)},Gf={get:vo(!1,!0)},Yf={get:vo(!0,!1)},Na=new WeakMap,Aa=new WeakMap,Pa=new WeakMap,Qf=new WeakMap;function Xf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jf(t){return t.__v_skip||!Object.isExtensible(t)?0:Xf(pf(t))}function ks(t){return Nn(t)?t:Eo(t,!1,xa,qf,Na)}function Oa(t){return Eo(t,!1,Wf,Gf,Aa)}function ka(t){return Eo(t,!0,Uf,Yf,Pa)}function Eo(t,e,n,s,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Jf(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function kt(t){return Nn(t)?kt(t.__v_raw):!!(t&&t.__v_isReactive)}function Nn(t){return!!(t&&t.__v_isReadonly)}function si(t){return!!(t&&t.__v_isShallow)}function Da(t){return kt(t)||Nn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function Pi(t){return ti(t,"__v_skip",!0),t}const _s=t=>me(t)?ks(t):t,Co=t=>me(t)?ka(t):t;function Ma(t){Ot&&Ze&&(t=Z(t),Sa(t.dep||(t.dep=_o())))}function La(t,e){t=Z(t);const n=t.dep;n&&Sr(n)}function Ee(t){return!!(t&&t.__v_isRef===!0)}function bo(t){return Fa(t,!1)}function Zf(t){return Fa(t,!0)}function Fa(t,e){return Ee(t)?t:new ed(t,e)}class ed{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:_s(e)}get value(){return Ma(this),this._value}set value(e){const n=this.__v_isShallow||si(e)||Nn(e);e=n?e:Z(e),ps(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:_s(e),La(this))}}function wn(t){return Ee(t)?t.value:t}const td={get:(t,e,n)=>wn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ee(i)&&!Ee(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ba(t){return kt(t)?t:new Proxy(t,td)}function nd(t){const e=W(t)?new Array(t.length):{};for(const n in t)e[n]=id(t,n);return e}class sd{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return xf(Z(this._object),this._key)}}function id(t,e,n){const s=t[e];return Ee(s)?s:new sd(t,e,n)}class rd{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new go(e,()=>{this._dirty||(this._dirty=!0,La(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Z(this);return Ma(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function od(t,e,n=!1){let s,i;const r=q(t);return r?(s=t,i=st):(s=t.get,i=t.set),new rd(s,i,r||!i,n)}function Dt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Oi(r,e,n)}return i}function Qe(t,e,n,s){if(q(t)){const r=Dt(t,e,n,s);return r&&pa(r)&&r.catch(o=>{Oi(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Qe(t[r],e,n,s));return i}function Oi(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Dt(c,null,10,[t,o,l]);return}}ld(t,n,i,s)}function ld(t,e,n,s=!0){console.error(t)}let gs=!1,Tr=!1;const De=[];let ut=0;const In=[];let yt=null,Qt=0;const Ha=Promise.resolve();let wo=null;function Io(t){const e=wo||Ha;return t?e.then(this?t.bind(this):t):e}function cd(t){let e=ut+1,n=De.length;for(;e<n;){const s=e+n>>>1;ms(De[s])<t?e=s+1:n=s}return e}function So(t){(!De.length||!De.includes(t,gs&&t.allowRecurse?ut+1:ut))&&(t.id==null?De.push(t):De.splice(cd(t.id),0,t),Ua())}function Ua(){!gs&&!Tr&&(Tr=!0,wo=Ha.then($a))}function ad(t){const e=De.indexOf(t);e>ut&&De.splice(e,1)}function ud(t){W(t)?In.push(...t):(!yt||!yt.includes(t,t.allowRecurse?Qt+1:Qt))&&In.push(t),Ua()}function Nl(t,e=gs?ut+1:0){for(;e<De.length;e++){const n=De[e];n&&n.pre&&(De.splice(e,1),e--,n())}}function Wa(t){if(In.length){const e=[...new Set(In)];if(In.length=0,yt){yt.push(...e);return}for(yt=e,yt.sort((n,s)=>ms(n)-ms(s)),Qt=0;Qt<yt.length;Qt++)yt[Qt]();yt=null,Qt=0}}const ms=t=>t.id==null?1/0:t.id,hd=(t,e)=>{const n=ms(t)-ms(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $a(t){Tr=!1,gs=!0,De.sort(hd);const e=st;try{for(ut=0;ut<De.length;ut++){const n=De[ut];n&&n.active!==!1&&Dt(n,null,14)}}finally{ut=0,De.length=0,Wa(),gs=!1,wo=null,(De.length||In.length)&&$a()}}function fd(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ge;f&&(i=n.map(_=>Ce(_)?_.trim():_)),h&&(i=n.map(Cr))}let l,c=s[l=Zi(e)]||s[l=Zi(ft(e))];!c&&r&&(c=s[l=Zi(Hn(e))]),c&&Qe(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Qe(a,t,6,i)}}function ja(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!q(t)){const c=a=>{const u=ja(a,e,!0);u&&(l=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(me(t)&&s.set(t,null),null):(W(r)?r.forEach(c=>o[c]=null):we(o,r),me(t)&&s.set(t,o),o)}function ki(t,e){return!t||!Ti(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,Hn(e))||ee(t,e))}let Ne=null,Va=null;function ii(t){const e=Ne;return Ne=t,Va=t&&t.type.__scopeId||null,e}function dd(t,e=Ne,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&$l(-1);const r=ii(e);let o;try{o=t(...i)}finally{ii(r),s._d&&$l(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function er(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:f,setupState:_,ctx:m,inheritAttrs:C}=t;let N,A;const O=ii(t);try{if(n.shapeFlag&4){const D=i||s;N=at(u.call(D,D,h,r,_,f,m)),A=c}else{const D=e;N=at(D.length>1?D(r,{attrs:c,slots:l,emit:a}):D(r,null)),A=e.props?c:pd(c)}}catch(D){os.length=0,Oi(D,t,1),N=Fe(Xe)}let j=N;if(A&&C!==!1){const D=Object.keys(A),{shapeFlag:K}=j;D.length&&K&7&&(o&&D.some(co)&&(A=_d(A,o)),j=Ut(j,A))}return n.dirs&&(j=Ut(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),N=j,ii(O),N}const pd=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ti(n))&&((e||(e={}))[n]=t[n]);return e},_d=(t,e)=>{const n={};for(const s in t)(!co(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function gd(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Al(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!ki(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Al(s,o,a):!0:!!o;return!1}function Al(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ki(n,r))return!0}return!1}function md({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yd=t=>t.__isSuspense;function vd(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):ud(t)}const qs={};function ns(t,e,n){return za(t,e,n)}function za(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ge){var l;const c=Ca()===((l=Ie)==null?void 0:l.scope)?Ie:null;let a,u=!1,h=!1;if(Ee(t)?(a=()=>t.value,u=si(t)):kt(t)?(a=()=>t,s=!0):W(t)?(h=!0,u=t.some(D=>kt(D)||si(D)),a=()=>t.map(D=>{if(Ee(D))return D.value;if(kt(D))return Zt(D);if(q(D))return Dt(D,c,2)})):q(t)?e?a=()=>Dt(t,c,2):a=()=>{if(!(c&&c.isUnmounted))return f&&f(),Qe(t,c,3,[_])}:a=st,e&&s){const D=a;a=()=>Zt(D())}let f,_=D=>{f=O.onStop=()=>{Dt(D,c,4)}},m;if(Es)if(_=st,e?n&&Qe(e,c,3,[a(),h?[]:void 0,_]):a(),i==="sync"){const D=Ep();m=D.__watcherHandles||(D.__watcherHandles=[])}else return st;let C=h?new Array(t.length).fill(qs):qs;const N=()=>{if(O.active)if(e){const D=O.run();(s||u||(h?D.some((K,le)=>ps(K,C[le])):ps(D,C)))&&(f&&f(),Qe(e,c,3,[D,C===qs?void 0:h&&C[0]===qs?[]:C,_]),C=D)}else O.run()};N.allowRecurse=!!e;let A;i==="sync"?A=N:i==="post"?A=()=>Ue(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),A=()=>So(N));const O=new go(a,A);e?n?N():C=O.run():i==="post"?Ue(O.run.bind(O),c&&c.suspense):O.run();const j=()=>{O.stop(),c&&c.scope&&ao(c.scope.effects,O)};return m&&m.push(j),j}function Ed(t,e,n){const s=this.proxy,i=Ce(t)?t.includes(".")?Ka(s,t):()=>s[t]:t.bind(s,s);let r;q(e)?r=e:(r=e.handler,n=e);const o=Ie;An(this);const l=za(i,r.bind(s),n);return o?An(o):sn(),l}function Ka(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Zt(t,e){if(!me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ee(t))Zt(t.value,e);else if(W(t))for(let n=0;n<t.length;n++)Zt(t[n],e);else if(da(t)||bn(t))t.forEach(n=>{Zt(n,e)});else if(ga(t))for(const n in t)Zt(t[n],e);return t}function cC(t,e){const n=Ne;if(n===null)return t;const s=Bi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=ge]=e[r];o&&(q(o)&&(o={mounted:o,updated:o}),o.deep&&Zt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a}))}return t}function Vt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(Un(),Qe(c,n,8,[t.el,l,t,e]),Wn())}}function Cd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ja(()=>{t.isMounted=!0}),Za(()=>{t.isUnmounting=!0}),t}const Ke=[Function,Array],qa={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ke,onEnter:Ke,onAfterEnter:Ke,onEnterCancelled:Ke,onBeforeLeave:Ke,onLeave:Ke,onAfterLeave:Ke,onLeaveCancelled:Ke,onBeforeAppear:Ke,onAppear:Ke,onAfterAppear:Ke,onAppearCancelled:Ke},bd={name:"BaseTransition",props:qa,setup(t,{slots:e}){const n=fp(),s=Cd();let i;return()=>{const r=e.default&&Ya(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const C of r)if(C.type!==Xe){o=C;break}}const l=Z(t),{mode:c}=l;if(s.isLeaving)return tr(o);const a=Pl(o);if(!a)return tr(o);const u=Rr(a,l,s,n);xr(a,u);const h=n.subTree,f=h&&Pl(h);let _=!1;const{getTransitionKey:m}=a.type;if(m){const C=m();i===void 0?i=C:C!==i&&(i=C,_=!0)}if(f&&f.type!==Xe&&(!Xt(a,f)||_)){const C=Rr(f,l,s,n);if(xr(f,C),c==="out-in")return s.isLeaving=!0,C.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},tr(o);c==="in-out"&&a.type!==Xe&&(C.delayLeave=(N,A,O)=>{const j=Ga(s,f);j[String(f.key)]=f,N._leaveCb=()=>{A(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=O})}return o}}},wd=bd;function Ga(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rr(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:C,onAppear:N,onAfterAppear:A,onAppearCancelled:O}=e,j=String(t.key),D=Ga(n,t),K=(x,F)=>{x&&Qe(x,s,9,F)},le=(x,F)=>{const z=F[1];K(x,F),W(x)?x.every(te=>te.length<=1)&&z():x.length<=1&&z()},se={mode:r,persisted:o,beforeEnter(x){let F=l;if(!n.isMounted)if(i)F=C||l;else return;x._leaveCb&&x._leaveCb(!0);const z=D[j];z&&Xt(t,z)&&z.el._leaveCb&&z.el._leaveCb(),K(F,[x])},enter(x){let F=c,z=a,te=u;if(!n.isMounted)if(i)F=N||c,z=A||a,te=O||u;else return;let M=!1;const ie=x._enterCb=Ae=>{M||(M=!0,Ae?K(te,[x]):K(z,[x]),se.delayedLeave&&se.delayedLeave(),x._enterCb=void 0)};F?le(F,[x,ie]):ie()},leave(x,F){const z=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return F();K(h,[x]);let te=!1;const M=x._leaveCb=ie=>{te||(te=!0,F(),ie?K(m,[x]):K(_,[x]),x._leaveCb=void 0,D[z]===t&&delete D[z])};D[z]=t,f?le(f,[x,M]):M()},clone(x){return Rr(x,e,n,s)}};return se}function tr(t){if(Di(t))return t=Ut(t),t.children=null,t}function Pl(t){return Di(t)?t.children?t.children[0]:void 0:t}function xr(t,e){t.shapeFlag&6&&t.component?xr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ya(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===qe?(o.patchFlag&128&&i++,s=s.concat(Ya(o.children,e,l))):(e||o.type!==Xe)&&s.push(l!=null?Ut(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function Qa(t,e){return q(t)?(()=>we({name:t.name},e,{setup:t}))():t}const ss=t=>!!t.type.__asyncLoader,Di=t=>t.type.__isKeepAlive;function Id(t,e){Xa(t,"a",e)}function Sd(t,e){Xa(t,"da",e)}function Xa(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Mi(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Di(i.parent.vnode)&&Td(s,e,n,i),i=i.parent}}function Td(t,e,n,s){const i=Mi(e,t,s,!0);eu(()=>{ao(s[e],i)},n)}function Mi(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Un(),An(n);const l=Qe(e,n,t,o);return sn(),Wn(),l});return s?i.unshift(r):i.push(r),r}}const wt=t=>(e,n=Ie)=>(!Es||t==="sp")&&Mi(t,(...s)=>e(...s),n),Rd=wt("bm"),Ja=wt("m"),xd=wt("bu"),Nd=wt("u"),Za=wt("bum"),eu=wt("um"),Ad=wt("sp"),Pd=wt("rtg"),Od=wt("rtc");function kd(t,e=Ie){Mi("ec",t,e)}const tu="components";function Dd(t,e){return Ld(tu,t,!0,e)||t}const Md=Symbol.for("v-ndc");function Ld(t,e,n=!0,s=!1){const i=Ne||Ie;if(i){const r=i.type;if(t===tu){const l=mp(r,!1);if(l&&(l===e||l===ft(e)||l===Ni(ft(e))))return r}const o=Ol(i[t]||r[t],e)||Ol(i.appContext[t],e);return!o&&s?r:o}}function Ol(t,e){return t&&(t[e]||t[ft(e)]||t[Ni(ft(e))])}function aC(t,e,n,s){let i;const r=n&&n[s];if(W(t)||Ce(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}function uC(t,e,n={},s,i){if(Ne.isCE||Ne.parent&&ss(Ne.parent)&&Ne.parent.isCE)return e!=="default"&&(n.name=e),Fe("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),No();const o=r&&nu(r(n)),l=fu(qe,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function nu(t){return t.some(e=>oi(e)?!(e.type===Xe||e.type===qe&&!nu(e.children)):!0)?t:null}const Nr=t=>t?_u(t)?Bi(t)||t.proxy:Nr(t.parent):null,is=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nr(t.parent),$root:t=>Nr(t.root),$emit:t=>t.emit,$options:t=>To(t),$forceUpdate:t=>t.f||(t.f=()=>So(t.update)),$nextTick:t=>t.n||(t.n=Io.bind(t.proxy)),$watch:t=>Ed.bind(t)}),nr=(t,e)=>t!==ge&&!t.__isScriptSetup&&ee(t,e),Fd={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(nr(s,e))return o[e]=1,s[e];if(i!==ge&&ee(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&ee(a,e))return o[e]=3,r[e];if(n!==ge&&ee(n,e))return o[e]=4,n[e];Ar&&(o[e]=0)}}const u=is[e];let h,f;if(u)return e==="$attrs"&&je(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==ge&&ee(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ee(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return nr(i,e)?(i[e]=n,!0):s!==ge&&ee(s,e)?(s[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==ge&&ee(t,o)||nr(e,o)||(l=r[0])&&ee(l,o)||ee(s,o)||ee(is,o)||ee(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kl(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ar=!0;function Bd(t){const e=To(t),n=t.proxy,s=t.ctx;Ar=!1,e.beforeCreate&&Dl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:_,updated:m,activated:C,deactivated:N,beforeDestroy:A,beforeUnmount:O,destroyed:j,unmounted:D,render:K,renderTracked:le,renderTriggered:se,errorCaptured:x,serverPrefetch:F,expose:z,inheritAttrs:te,components:M,directives:ie,filters:Ae}=e;if(a&&Hd(a,s,null),o)for(const he in o){const re=o[he];q(re)&&(s[he]=re.bind(n))}if(i){const he=i.call(n,n);me(he)&&(t.data=ks(he))}if(Ar=!0,r)for(const he in r){const re=r[he],gt=q(re)?re.bind(n,n):q(re.get)?re.get.bind(n,n):st,It=!q(re)&&q(re.set)?re.set.bind(n):st,ot=Ge({get:gt,set:It});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>ot.value,set:He=>ot.value=He})}if(l)for(const he in l)su(l[he],s,n,he);if(c){const he=q(c)?c.call(n):c;Reflect.ownKeys(he).forEach(re=>{Zs(re,he[re])})}u&&Dl(u,t,"c");function J(he,re){W(re)?re.forEach(gt=>he(gt.bind(n))):re&&he(re.bind(n))}if(J(Rd,h),J(Ja,f),J(xd,_),J(Nd,m),J(Id,C),J(Sd,N),J(kd,x),J(Od,le),J(Pd,se),J(Za,O),J(eu,D),J(Ad,F),W(z))if(z.length){const he=t.exposed||(t.exposed={});z.forEach(re=>{Object.defineProperty(he,re,{get:()=>n[re],set:gt=>n[re]=gt})})}else t.exposed||(t.exposed={});K&&t.render===st&&(t.render=K),te!=null&&(t.inheritAttrs=te),M&&(t.components=M),ie&&(t.directives=ie)}function Hd(t,e,n=st){W(t)&&(t=Pr(t));for(const s in t){const i=t[s];let r;me(i)?"default"in i?r=ht(i.from||s,i.default,!0):r=ht(i.from||s):r=ht(i),Ee(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Dl(t,e,n){Qe(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function su(t,e,n,s){const i=s.includes(".")?Ka(n,s):()=>n[s];if(Ce(t)){const r=e[t];q(r)&&ns(i,r)}else if(q(t))ns(i,t.bind(n));else if(me(t))if(W(t))t.forEach(r=>su(r,e,n,s));else{const r=q(t.handler)?t.handler.bind(n):e[t.handler];q(r)&&ns(i,r,t)}}function To(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>ri(c,a,o,!0)),ri(c,e,o)),me(e)&&r.set(e,c),c}function ri(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ri(t,r,n,!0),i&&i.forEach(o=>ri(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Ud[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ud={data:Ml,props:Ll,emits:Ll,methods:ts,computed:ts,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:ts,directives:ts,watch:$d,provide:Ml,inject:Wd};function Ml(t,e){return e?t?function(){return we(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Wd(t,e){return ts(Pr(t),Pr(e))}function Pr(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function ts(t,e){return t?we(Object.create(null),t,e):e}function Ll(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:we(Object.create(null),kl(t),kl(e??{})):e}function $d(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const s in e)n[s]=Le(t[s],e[s]);return n}function iu(){return{app:null,config:{isNativeTag:hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jd=0;function Vd(t,e){return function(s,i=null){q(s)||(s=we({},s)),i!=null&&!me(i)&&(i=null);const r=iu(),o=new Set;let l=!1;const c=r.app={_uid:jd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Cp,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&q(a.install)?(o.add(a),a.install(c,...u)):q(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const f=Fe(s,i);return f.appContext=r,u&&e?e(f,a):t(f,a,h),l=!0,c._container=a,a.__vue_app__=c,Bi(f.component)||f.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c},runWithContext(a){ys=c;try{return a()}finally{ys=null}}};return c}}let ys=null;function Zs(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function ht(t,e,n=!1){const s=Ie||Ne;if(s||ys){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ys._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&q(e)?e.call(s&&s.proxy):e}}function zd(){return!!(Ie||Ne||ys)}function Kd(t,e,n,s=!1){const i={},r={};ti(r,Fi,1),t.propsDefaults=Object.create(null),ru(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Oa(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function qd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=Z(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ki(t.emitsOptions,f))continue;const _=e[f];if(c)if(ee(r,f))_!==r[f]&&(r[f]=_,a=!0);else{const m=ft(f);i[m]=Or(c,l,m,_,t,!1)}else _!==r[f]&&(r[f]=_,a=!0)}}}else{ru(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!ee(e,h)&&((u=Hn(h))===h||!ee(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Or(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!ee(e,h))&&(delete r[h],a=!0)}a&&Ct(t,"set","$attrs")}function ru(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Xs(c))continue;const a=e[c];let u;i&&ee(i,u=ft(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:ki(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=Z(n),a=l||ge;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Or(i,c,h,a[h],t,!ee(a,h))}}return o}function Or(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=ee(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&q(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(An(i),s=a[n]=c.call(null,e),sn())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Hn(n))&&(s=!0))}return s}function ou(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!q(t)){const u=h=>{c=!0;const[f,_]=ou(h,e,!0);we(o,f),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return me(t)&&s.set(t,Cn),Cn;if(W(r))for(let u=0;u<r.length;u++){const h=ft(r[u]);Fl(h)&&(o[h]=ge)}else if(r)for(const u in r){const h=ft(u);if(Fl(h)){const f=r[u],_=o[h]=W(f)||q(f)?{type:f}:we({},f);if(_){const m=Ul(Boolean,_.type),C=Ul(String,_.type);_[0]=m>-1,_[1]=C<0||m<C,(m>-1||ee(_,"default"))&&l.push(h)}}}const a=[o,l];return me(t)&&s.set(t,a),a}function Fl(t){return t[0]!=="$"}function Bl(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Hl(t,e){return Bl(t)===Bl(e)}function Ul(t,e){return W(e)?e.findIndex(n=>Hl(n,t)):q(e)&&Hl(e,t)?0:-1}const lu=t=>t[0]==="_"||t==="$stable",Ro=t=>W(t)?t.map(at):[at(t)],Gd=(t,e,n)=>{if(e._n)return e;const s=dd((...i)=>Ro(e(...i)),n);return s._c=!1,s},cu=(t,e,n)=>{const s=t._ctx;for(const i in t){if(lu(i))continue;const r=t[i];if(q(r))e[i]=Gd(i,r,s);else if(r!=null){const o=Ro(r);e[i]=()=>o}}},au=(t,e)=>{const n=Ro(e);t.slots.default=()=>n},Yd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),ti(e,"_",n)):cu(e,t.slots={})}else t.slots={},e&&au(t,e);ti(t.slots,Fi,1)},Qd=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ge;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(we(i,e),!n&&l===1&&delete i._):(r=!e.$stable,cu(e,i)),o=e}else e&&(au(t,e),o={default:1});if(r)for(const l in i)!lu(l)&&!(l in o)&&delete i[l]};function kr(t,e,n,s,i=!1){if(W(t)){t.forEach((f,_)=>kr(f,e&&(W(e)?e[_]:e),n,s,i));return}if(ss(s)&&!i)return;const r=s.shapeFlag&4?Bi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===ge?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(Ce(a)?(u[a]=null,ee(h,a)&&(h[a]=null)):Ee(a)&&(a.value=null)),q(c))Dt(c,l,12,[o,u]);else{const f=Ce(c),_=Ee(c);if(f||_){const m=()=>{if(t.f){const C=f?ee(h,c)?h[c]:u[c]:c.value;i?W(C)&&ao(C,r):W(C)?C.includes(r)||C.push(r):f?(u[c]=[r],ee(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ee(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ue(m,n)):m()}}}const Ue=vd;function Xd(t){return Jd(t)}function Jd(t,e){const n=br();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:_=st,insertStaticContent:m}=t,C=(d,p,g,y=null,E=null,b=null,P=!1,S=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Xt(d,p)&&(y=v(d),He(d,E,b,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:w,ref:H,shapeFlag:L}=p;switch(w){case Li:N(d,p,g,y);break;case Xe:A(d,p,g,y);break;case sr:d==null&&O(p,g,y,P);break;case qe:M(d,p,g,y,E,b,P,S,T);break;default:L&1?K(d,p,g,y,E,b,P,S,T):L&6?ie(d,p,g,y,E,b,P,S,T):(L&64||L&128)&&w.process(d,p,g,y,E,b,P,S,T,R)}H!=null&&E&&kr(H,d&&d.ref,b,p||d,!p)},N=(d,p,g,y)=>{if(d==null)s(p.el=l(p.children),g,y);else{const E=p.el=d.el;p.children!==d.children&&a(E,p.children)}},A=(d,p,g,y)=>{d==null?s(p.el=c(p.children||""),g,y):p.el=d.el},O=(d,p,g,y)=>{[d.el,d.anchor]=m(d.children,p,g,y,d.el,d.anchor)},j=({el:d,anchor:p},g,y)=>{let E;for(;d&&d!==p;)E=f(d),s(d,g,y),d=E;s(p,g,y)},D=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=f(d),i(d),d=g;i(p)},K=(d,p,g,y,E,b,P,S,T)=>{P=P||p.type==="svg",d==null?le(p,g,y,E,b,P,S,T):F(d,p,E,b,P,S,T)},le=(d,p,g,y,E,b,P,S)=>{let T,w;const{type:H,props:L,shapeFlag:U,transition:V,dirs:X}=d;if(T=d.el=o(d.type,b,L&&L.is,L),U&8?u(T,d.children):U&16&&x(d.children,T,null,y,E,b&&H!=="foreignObject",P,S),X&&Vt(d,null,y,"created"),se(T,d,d.scopeId,P,y),L){for(const ae in L)ae!=="value"&&!Xs(ae)&&r(T,ae,null,L[ae],b,d.children,y,E,ke);"value"in L&&r(T,"value",null,L.value),(w=L.onVnodeBeforeMount)&&ct(w,y,d)}X&&Vt(d,null,y,"beforeMount");const fe=(!E||E&&!E.pendingBranch)&&V&&!V.persisted;fe&&V.beforeEnter(T),s(T,p,g),((w=L&&L.onVnodeMounted)||fe||X)&&Ue(()=>{w&&ct(w,y,d),fe&&V.enter(T),X&&Vt(d,null,y,"mounted")},E)},se=(d,p,g,y,E)=>{if(g&&_(d,g),y)for(let b=0;b<y.length;b++)_(d,y[b]);if(E){let b=E.subTree;if(p===b){const P=E.vnode;se(d,P,P.scopeId,P.slotScopeIds,E.parent)}}},x=(d,p,g,y,E,b,P,S,T=0)=>{for(let w=T;w<d.length;w++){const H=d[w]=S?At(d[w]):at(d[w]);C(null,H,p,g,y,E,b,P,S)}},F=(d,p,g,y,E,b,P)=>{const S=p.el=d.el;let{patchFlag:T,dynamicChildren:w,dirs:H}=p;T|=d.patchFlag&16;const L=d.props||ge,U=p.props||ge;let V;g&&zt(g,!1),(V=U.onVnodeBeforeUpdate)&&ct(V,g,p,d),H&&Vt(p,d,g,"beforeUpdate"),g&&zt(g,!0);const X=E&&p.type!=="foreignObject";if(w?z(d.dynamicChildren,w,S,g,y,X,b):P||re(d,p,S,null,g,y,X,b,!1),T>0){if(T&16)te(S,p,L,U,g,y,E);else if(T&2&&L.class!==U.class&&r(S,"class",null,U.class,E),T&4&&r(S,"style",L.style,U.style,E),T&8){const fe=p.dynamicProps;for(let ae=0;ae<fe.length;ae++){const be=fe[ae],Je=L[be],pn=U[be];(pn!==Je||be==="value")&&r(S,be,Je,pn,E,d.children,g,y,ke)}}T&1&&d.children!==p.children&&u(S,p.children)}else!P&&w==null&&te(S,p,L,U,g,y,E);((V=U.onVnodeUpdated)||H)&&Ue(()=>{V&&ct(V,g,p,d),H&&Vt(p,d,g,"updated")},y)},z=(d,p,g,y,E,b,P)=>{for(let S=0;S<p.length;S++){const T=d[S],w=p[S],H=T.el&&(T.type===qe||!Xt(T,w)||T.shapeFlag&70)?h(T.el):g;C(T,w,H,null,y,E,b,P,!0)}},te=(d,p,g,y,E,b,P)=>{if(g!==y){if(g!==ge)for(const S in g)!Xs(S)&&!(S in y)&&r(d,S,g[S],null,P,p.children,E,b,ke);for(const S in y){if(Xs(S))continue;const T=y[S],w=g[S];T!==w&&S!=="value"&&r(d,S,w,T,P,p.children,E,b,ke)}"value"in y&&r(d,"value",g.value,y.value)}},M=(d,p,g,y,E,b,P,S,T)=>{const w=p.el=d?d.el:l(""),H=p.anchor=d?d.anchor:l("");let{patchFlag:L,dynamicChildren:U,slotScopeIds:V}=p;V&&(S=S?S.concat(V):V),d==null?(s(w,g,y),s(H,g,y),x(p.children,g,H,E,b,P,S,T)):L>0&&L&64&&U&&d.dynamicChildren?(z(d.dynamicChildren,U,g,E,b,P,S),(p.key!=null||E&&p===E.subTree)&&xo(d,p,!0)):re(d,p,g,H,E,b,P,S,T)},ie=(d,p,g,y,E,b,P,S,T)=>{p.slotScopeIds=S,d==null?p.shapeFlag&512?E.ctx.activate(p,g,y,P,T):Ae(p,g,y,E,b,P,T):Me(d,p,T)},Ae=(d,p,g,y,E,b,P)=>{const S=d.component=hp(d,y,E);if(Di(d)&&(S.ctx.renderer=R),dp(S),S.asyncDep){if(E&&E.registerDep(S,J),!d.el){const T=S.subTree=Fe(Xe);A(null,T,p,g)}return}J(S,d,p,g,E,b,P)},Me=(d,p,g)=>{const y=p.component=d.component;if(gd(d,p,g))if(y.asyncDep&&!y.asyncResolved){he(y,p,g);return}else y.next=p,ad(y.update),y.update();else p.el=d.el,y.vnode=p},J=(d,p,g,y,E,b,P)=>{const S=()=>{if(d.isMounted){let{next:H,bu:L,u:U,parent:V,vnode:X}=d,fe=H,ae;zt(d,!1),H?(H.el=X.el,he(d,H,P)):H=X,L&&Js(L),(ae=H.props&&H.props.onVnodeBeforeUpdate)&&ct(ae,V,H,X),zt(d,!0);const be=er(d),Je=d.subTree;d.subTree=be,C(Je,be,h(Je.el),v(Je),d,E,b),H.el=be.el,fe===null&&md(d,be.el),U&&Ue(U,E),(ae=H.props&&H.props.onVnodeUpdated)&&Ue(()=>ct(ae,V,H,X),E)}else{let H;const{el:L,props:U}=p,{bm:V,m:X,parent:fe}=d,ae=ss(p);if(zt(d,!1),V&&Js(V),!ae&&(H=U&&U.onVnodeBeforeMount)&&ct(H,fe,p),zt(d,!0),L&&oe){const be=()=>{d.subTree=er(d),oe(L,d.subTree,d,E,null)};ae?p.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=er(d);C(null,be,g,y,d,E,b),p.el=be.el}if(X&&Ue(X,E),!ae&&(H=U&&U.onVnodeMounted)){const be=p;Ue(()=>ct(H,fe,be),E)}(p.shapeFlag&256||fe&&ss(fe.vnode)&&fe.vnode.shapeFlag&256)&&d.a&&Ue(d.a,E),d.isMounted=!0,p=g=y=null}},T=d.effect=new go(S,()=>So(w),d.scope),w=d.update=()=>T.run();w.id=d.uid,zt(d,!0),w()},he=(d,p,g)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,qd(d,p.props,y,g),Qd(d,p.children,g),Un(),Nl(),Wn()},re=(d,p,g,y,E,b,P,S,T=!1)=>{const w=d&&d.children,H=d?d.shapeFlag:0,L=p.children,{patchFlag:U,shapeFlag:V}=p;if(U>0){if(U&128){It(w,L,g,y,E,b,P,S,T);return}else if(U&256){gt(w,L,g,y,E,b,P,S,T);return}}V&8?(H&16&&ke(w,E,b),L!==w&&u(g,L)):H&16?V&16?It(w,L,g,y,E,b,P,S,T):ke(w,E,b,!0):(H&8&&u(g,""),V&16&&x(L,g,y,E,b,P,S,T))},gt=(d,p,g,y,E,b,P,S,T)=>{d=d||Cn,p=p||Cn;const w=d.length,H=p.length,L=Math.min(w,H);let U;for(U=0;U<L;U++){const V=p[U]=T?At(p[U]):at(p[U]);C(d[U],V,g,null,E,b,P,S,T)}w>H?ke(d,E,b,!0,!1,L):x(p,g,y,E,b,P,S,T,L)},It=(d,p,g,y,E,b,P,S,T)=>{let w=0;const H=p.length;let L=d.length-1,U=H-1;for(;w<=L&&w<=U;){const V=d[w],X=p[w]=T?At(p[w]):at(p[w]);if(Xt(V,X))C(V,X,g,null,E,b,P,S,T);else break;w++}for(;w<=L&&w<=U;){const V=d[L],X=p[U]=T?At(p[U]):at(p[U]);if(Xt(V,X))C(V,X,g,null,E,b,P,S,T);else break;L--,U--}if(w>L){if(w<=U){const V=U+1,X=V<H?p[V].el:y;for(;w<=U;)C(null,p[w]=T?At(p[w]):at(p[w]),g,X,E,b,P,S,T),w++}}else if(w>U)for(;w<=L;)He(d[w],E,b,!0),w++;else{const V=w,X=w,fe=new Map;for(w=X;w<=U;w++){const Ve=p[w]=T?At(p[w]):at(p[w]);Ve.key!=null&&fe.set(Ve.key,w)}let ae,be=0;const Je=U-X+1;let pn=!1,yl=0;const Kn=new Array(Je);for(w=0;w<Je;w++)Kn[w]=0;for(w=V;w<=L;w++){const Ve=d[w];if(be>=Je){He(Ve,E,b,!0);continue}let lt;if(Ve.key!=null)lt=fe.get(Ve.key);else for(ae=X;ae<=U;ae++)if(Kn[ae-X]===0&&Xt(Ve,p[ae])){lt=ae;break}lt===void 0?He(Ve,E,b,!0):(Kn[lt-X]=w+1,lt>=yl?yl=lt:pn=!0,C(Ve,p[lt],g,null,E,b,P,S,T),be++)}const vl=pn?Zd(Kn):Cn;for(ae=vl.length-1,w=Je-1;w>=0;w--){const Ve=X+w,lt=p[Ve],El=Ve+1<H?p[Ve+1].el:y;Kn[w]===0?C(null,lt,g,El,E,b,P,S,T):pn&&(ae<0||w!==vl[ae]?ot(lt,g,El,2):ae--)}}},ot=(d,p,g,y,E=null)=>{const{el:b,type:P,transition:S,children:T,shapeFlag:w}=d;if(w&6){ot(d.component.subTree,p,g,y);return}if(w&128){d.suspense.move(p,g,y);return}if(w&64){P.move(d,p,g,R);return}if(P===qe){s(b,p,g);for(let L=0;L<T.length;L++)ot(T[L],p,g,y);s(d.anchor,p,g);return}if(P===sr){j(d,p,g);return}if(y!==2&&w&1&&S)if(y===0)S.beforeEnter(b),s(b,p,g),Ue(()=>S.enter(b),E);else{const{leave:L,delayLeave:U,afterLeave:V}=S,X=()=>s(b,p,g),fe=()=>{L(b,()=>{X(),V&&V()})};U?U(b,X,fe):fe()}else s(b,p,g)},He=(d,p,g,y=!1,E=!1)=>{const{type:b,props:P,ref:S,children:T,dynamicChildren:w,shapeFlag:H,patchFlag:L,dirs:U}=d;if(S!=null&&kr(S,null,g,d,!0),H&256){p.ctx.deactivate(d);return}const V=H&1&&U,X=!ss(d);let fe;if(X&&(fe=P&&P.onVnodeBeforeUnmount)&&ct(fe,p,d),H&6)Ws(d.component,g,y);else{if(H&128){d.suspense.unmount(g,y);return}V&&Vt(d,null,p,"beforeUnmount"),H&64?d.type.remove(d,p,g,E,R,y):w&&(b!==qe||L>0&&L&64)?ke(w,p,g,!1,!0):(b===qe&&L&384||!E&&H&16)&&ke(T,p,g),y&&fn(d)}(X&&(fe=P&&P.onVnodeUnmounted)||V)&&Ue(()=>{fe&&ct(fe,p,d),V&&Vt(d,null,p,"unmounted")},g)},fn=d=>{const{type:p,el:g,anchor:y,transition:E}=d;if(p===qe){dn(g,y);return}if(p===sr){D(d);return}const b=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:S}=E,T=()=>P(g,b);S?S(d.el,b,T):T()}else b()},dn=(d,p)=>{let g;for(;d!==p;)g=f(d),i(d),d=g;i(p)},Ws=(d,p,g)=>{const{bum:y,scope:E,update:b,subTree:P,um:S}=d;y&&Js(y),E.stop(),b&&(b.active=!1,He(P,d,p,g)),S&&Ue(S,p),Ue(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ke=(d,p,g,y=!1,E=!1,b=0)=>{for(let P=b;P<d.length;P++)He(d[P],p,g,y,E)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),k=(d,p,g)=>{d==null?p._vnode&&He(p._vnode,null,null,!0):C(p._vnode||null,d,p,null,null,null,g),Nl(),Wa(),p._vnode=d},R={p:C,um:He,m:ot,r:fn,mt:Ae,mc:x,pc:re,pbc:z,n:v,o:t};let B,oe;return e&&([B,oe]=e(R)),{render:k,hydrate:B,createApp:Vd(k,B)}}function zt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xo(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=At(i[r]),l.el=o.el),n||xo(o,l)),l.type===Li&&(l.el=o.el)}}function Zd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const ep=t=>t.__isTeleport,rs=t=>t&&(t.disabled||t.disabled===""),Wl=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Dr=(t,e)=>{const n=t&&t.to;return Ce(n)?e?e(n):null:n},tp={__isTeleport:!0,process(t,e,n,s,i,r,o,l,c,a){const{mc:u,pc:h,pbc:f,o:{insert:_,querySelector:m,createText:C,createComment:N}}=a,A=rs(e.props);let{shapeFlag:O,children:j,dynamicChildren:D}=e;if(t==null){const K=e.el=C(""),le=e.anchor=C("");_(K,n,s),_(le,n,s);const se=e.target=Dr(e.props,m),x=e.targetAnchor=C("");se&&(_(x,se),o=o||Wl(se));const F=(z,te)=>{O&16&&u(j,z,te,i,r,o,l,c)};A?F(n,le):se&&F(se,x)}else{e.el=t.el;const K=e.anchor=t.anchor,le=e.target=t.target,se=e.targetAnchor=t.targetAnchor,x=rs(t.props),F=x?n:le,z=x?K:se;if(o=o||Wl(le),D?(f(t.dynamicChildren,D,F,i,r,o,l),xo(t,e,!0)):c||h(t,e,F,z,i,r,o,l,!1),A)x||Gs(e,n,K,a,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const te=e.target=Dr(e.props,m);te&&Gs(e,te,null,a,0)}else x&&Gs(e,le,se,a,1)}uu(e)},remove(t,e,n,s,{um:i,o:{remove:r}},o){const{shapeFlag:l,children:c,anchor:a,targetAnchor:u,target:h,props:f}=t;if(h&&r(u),(o||!rs(f))&&(r(a),l&16))for(let _=0;_<c.length;_++){const m=c[_];i(m,e,n,!0,!!m.dynamicChildren)}},move:Gs,hydrate:np};function Gs(t,e,n,{o:{insert:s},m:i},r=2){r===0&&s(t.targetAnchor,e,n);const{el:o,anchor:l,shapeFlag:c,children:a,props:u}=t,h=r===2;if(h&&s(o,e,n),(!h||rs(u))&&c&16)for(let f=0;f<a.length;f++)i(a[f],e,n,2);h&&s(l,e,n)}function np(t,e,n,s,i,r,{o:{nextSibling:o,parentNode:l,querySelector:c}},a){const u=e.target=Dr(e.props,c);if(u){const h=u._lpa||u.firstChild;if(e.shapeFlag&16)if(rs(e.props))e.anchor=a(o(t),e,l(t),n,s,i,r),e.targetAnchor=h;else{e.anchor=o(t);let f=h;for(;f;)if(f=o(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&o(e.targetAnchor);break}a(h,e,u,n,s,i,r)}uu(e)}return e.anchor&&o(e.anchor)}const hC=tp;function uu(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const qe=Symbol.for("v-fgt"),Li=Symbol.for("v-txt"),Xe=Symbol.for("v-cmt"),sr=Symbol.for("v-stc"),os=[];let tt=null;function No(t=!1){os.push(tt=t?null:[])}function sp(){os.pop(),tt=os[os.length-1]||null}let vs=1;function $l(t){vs+=t}function hu(t){return t.dynamicChildren=vs>0?tt||Cn:null,sp(),vs>0&&tt&&tt.push(t),t}function ip(t,e,n,s,i,r){return hu(pu(t,e,n,s,i,r,!0))}function fu(t,e,n,s,i){return hu(Fe(t,e,n,s,i,!0))}function oi(t){return t?t.__v_isVNode===!0:!1}function Xt(t,e){return t.type===e.type&&t.key===e.key}const Fi="__vInternal",du=({key:t})=>t??null,ei=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||Ee(t)||q(t)?{i:Ne,r:t,k:e,f:!!n}:t:null);function pu(t,e=null,n=null,s=0,i=null,r=t===qe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&du(e),ref:e&&ei(e),scopeId:Va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ne};return l?(Ao(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=Ce(n)?8:16),vs>0&&!o&&tt&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&tt.push(c),c}const Fe=rp;function rp(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Md)&&(t=Xe),oi(t)){const l=Ut(t,e,!0);return n&&Ao(l,n),vs>0&&!r&&tt&&(l.shapeFlag&6?tt[tt.indexOf(t)]=l:tt.push(l)),l.patchFlag|=-2,l}if(yp(t)&&(t=t.__vccOpts),e){e=op(e);let{class:l,style:c}=e;l&&!Ce(l)&&(e.class=po(l)),me(c)&&(Da(c)&&!W(c)&&(c=we({},c)),e.style=fo(c))}const o=Ce(t)?1:yd(t)?128:ep(t)?64:me(t)?4:q(t)?2:0;return pu(t,e,n,s,i,o,r,!0)}function op(t){return t?Da(t)||Fi in t?we({},t):t:null}function Ut(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?cp(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&du(l),ref:e&&e.ref?n&&i?W(i)?i.concat(ei(e)):[i,ei(e)]:ei(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ut(t.ssContent),ssFallback:t.ssFallback&&Ut(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function lp(t=" ",e=0){return Fe(Li,null,t,e)}function fC(t="",e=!1){return e?(No(),fu(Xe,null,t)):Fe(Xe,null,t)}function at(t){return t==null||typeof t=="boolean"?Fe(Xe):W(t)?Fe(qe,null,t.slice()):typeof t=="object"?At(t):Fe(Li,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ut(t)}function Ao(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ao(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Fi in e)?e._ctx=Ne:i===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),s&64?(n=16,e=[lp(e)]):n=8);t.children=e,t.shapeFlag|=n}function cp(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=po([e.class,s.class]));else if(i==="style")e.style=fo([e.style,s.style]);else if(Ti(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ct(t,e,n,s=null){Qe(t,e,7,[n,s])}const ap=iu();let up=0;function hp(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ap,r={uid:up++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new va(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ou(s,i),emitsOptions:ja(s,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=fd.bind(null,r),t.ce&&t.ce(r),r}let Ie=null;const fp=()=>Ie||Ne;let Po,_n,jl="__VUE_INSTANCE_SETTERS__";(_n=br()[jl])||(_n=br()[jl]=[]),_n.push(t=>Ie=t),Po=t=>{_n.length>1?_n.forEach(e=>e(t)):_n[0](t)};const An=t=>{Po(t),t.scope.on()},sn=()=>{Ie&&Ie.scope.off(),Po(null)};function _u(t){return t.vnode.shapeFlag&4}let Es=!1;function dp(t,e=!1){Es=e;const{props:n,children:s}=t.vnode,i=_u(t);Kd(t,n,i,e),Yd(t,s);const r=i?pp(t,e):void 0;return Es=!1,r}function pp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Pi(new Proxy(t.ctx,Fd));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?gp(t):null;An(t),Un();const r=Dt(s,t,0,[t.props,i]);if(Wn(),sn(),pa(r)){if(r.then(sn,sn),e)return r.then(o=>{Vl(t,o,e)}).catch(o=>{Oi(o,t,0)});t.asyncDep=r}else Vl(t,r,e)}else gu(t,e)}function Vl(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=Ba(e)),gu(t,n)}let zl;function gu(t,e,n){const s=t.type;if(!t.render){if(!e&&zl&&!s.render){const i=s.template||To(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=we(we({isCustomElement:r,delimiters:l},o),c);s.render=zl(i,a)}}t.render=s.render||st}An(t),Un(),Bd(t),Wn(),sn()}function _p(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return je(t,"get","$attrs"),e[n]}}))}function gp(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return _p(t)},slots:t.slots,emit:t.emit,expose:e}}function Bi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ba(Pi(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in is)return is[n](t)},has(e,n){return n in e||n in is}}))}function mp(t,e=!0){return q(t)?t.displayName||t.name:t.name||e&&t.__name}function yp(t){return q(t)&&"__vccOpts"in t}const Ge=(t,e)=>od(t,e,Es);function Oo(t,e,n){const s=arguments.length;return s===2?me(e)&&!W(e)?oi(e)?Fe(t,null,[e]):Fe(t,e):Fe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&oi(n)&&(n=[n]),Fe(t,e,n))}const vp=Symbol.for("v-scx"),Ep=()=>ht(vp),Cp="3.3.4",bp="http://www.w3.org/2000/svg",Jt=typeof document<"u"?document:null,Kl=Jt&&Jt.createElement("template"),wp={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Jt.createElementNS(bp,t):Jt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Jt.createTextNode(t),createComment:t=>Jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Kl.innerHTML=s?`<svg>${t}</svg>`:t;const l=Kl.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ip(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Sp(t,e,n){const s=t.style,i=Ce(n);if(n&&!i){if(e&&!Ce(e))for(const r in e)n[r]==null&&Mr(s,r,"");for(const r in n)Mr(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ql=/\s*!important$/;function Mr(t,e,n){if(W(n))n.forEach(s=>Mr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Tp(t,e);ql.test(n)?t.setProperty(Hn(s),n.replace(ql,""),"important"):t[s]=n}}const Gl=["Webkit","Moz","ms"],ir={};function Tp(t,e){const n=ir[e];if(n)return n;let s=ft(e);if(s!=="filter"&&s in t)return ir[e]=s;s=Ni(s);for(let i=0;i<Gl.length;i++){const r=Gl[i]+s;if(r in t)return ir[e]=r}return e}const Yl="http://www.w3.org/1999/xlink";function Rp(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Yl,e.slice(6,e.length)):t.setAttributeNS(Yl,e,n);else{const r=wf(e);n==null||r&&!ma(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function xp(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){t._value=n;const a=l==="OPTION"?t.getAttribute("value"):t.value,u=n??"";a!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ma(n):n==null&&a==="string"?(n="",c=!0):a==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function yn(t,e,n,s){t.addEventListener(e,n,s)}function Np(t,e,n,s){t.removeEventListener(e,n,s)}function Ap(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=Pp(e);if(s){const a=r[e]=Dp(s,i);yn(t,l,a,c)}else o&&(Np(t,l,o,c),r[e]=void 0)}}const Ql=/(?:Once|Passive|Capture)$/;function Pp(t){let e;if(Ql.test(t)){e={};let s;for(;s=t.match(Ql);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hn(t.slice(2)),e]}let rr=0;const Op=Promise.resolve(),kp=()=>rr||(Op.then(()=>rr=0),rr=Date.now());function Dp(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Qe(Mp(s,n.value),e,5,[s])};return n.value=t,n.attached=kp(),n}function Mp(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Xl=/^on[a-z]/,Lp=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?Ip(t,s,i):e==="style"?Sp(t,n,s):Ti(e)?co(e)||Ap(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fp(t,e,s,i))?xp(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rp(t,e,s,i))};function Fp(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Xl.test(e)&&q(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xl.test(e)&&Ce(n)?!1:e in t}const Tt="transition",qn="animation",mu=(t,{slots:e})=>Oo(wd,Bp(t),e);mu.displayName="Transition";const yu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};mu.props=we({},qa,yu);const Kt=(t,e=[])=>{W(t)?t.forEach(n=>n(...e)):t&&t(...e)},Jl=t=>t?W(t)?t.some(e=>e.length>1):t.length>1:!1;function Bp(t){const e={};for(const M in t)M in yu||(e[M]=t[M]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=r,appearActiveClass:a=o,appearToClass:u=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,m=Hp(i),C=m&&m[0],N=m&&m[1],{onBeforeEnter:A,onEnter:O,onEnterCancelled:j,onLeave:D,onLeaveCancelled:K,onBeforeAppear:le=A,onAppear:se=O,onAppearCancelled:x=j}=e,F=(M,ie,Ae)=>{qt(M,ie?u:l),qt(M,ie?a:o),Ae&&Ae()},z=(M,ie)=>{M._isLeaving=!1,qt(M,h),qt(M,_),qt(M,f),ie&&ie()},te=M=>(ie,Ae)=>{const Me=M?se:O,J=()=>F(ie,M,Ae);Kt(Me,[ie,J]),Zl(()=>{qt(ie,M?c:r),Rt(ie,M?u:l),Jl(Me)||ec(ie,s,C,J)})};return we(e,{onBeforeEnter(M){Kt(A,[M]),Rt(M,r),Rt(M,o)},onBeforeAppear(M){Kt(le,[M]),Rt(M,c),Rt(M,a)},onEnter:te(!1),onAppear:te(!0),onLeave(M,ie){M._isLeaving=!0;const Ae=()=>z(M,ie);Rt(M,h),$p(),Rt(M,f),Zl(()=>{M._isLeaving&&(qt(M,h),Rt(M,_),Jl(D)||ec(M,s,N,Ae))}),Kt(D,[M,Ae])},onEnterCancelled(M){F(M,!1),Kt(j,[M])},onAppearCancelled(M){F(M,!0),Kt(x,[M])},onLeaveCancelled(M){z(M),Kt(K,[M])}})}function Hp(t){if(t==null)return null;if(me(t))return[or(t.enter),or(t.leave)];{const e=or(t);return[e,e]}}function or(t){return mf(t)}function Rt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function qt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Zl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Up=0;function ec(t,e,n,s){const i=t._endId=++Up,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:c}=Wp(t,e);if(!o)return s();const a=o+"end";let u=0;const h=()=>{t.removeEventListener(a,f),r()},f=_=>{_.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},l+1),t.addEventListener(a,f)}function Wp(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${Tt}Delay`),r=s(`${Tt}Duration`),o=tc(i,r),l=s(`${qn}Delay`),c=s(`${qn}Duration`),a=tc(l,c);let u=null,h=0,f=0;e===Tt?o>0&&(u=Tt,h=o,f=r.length):e===qn?a>0&&(u=qn,h=a,f=c.length):(h=Math.max(o,a),u=h>0?o>a?Tt:qn:null,f=u?u===Tt?r.length:c.length:0);const _=u===Tt&&/\b(transform|all)(,|$)/.test(s(`${Tt}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:_}}function tc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>nc(n)+nc(t[s])))}function nc(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function $p(){return document.body.offsetHeight}const sc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Js(e,n):e};function jp(t){t.target.composing=!0}function ic(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const dC={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=sc(i);const r=s||i.props&&i.props.type==="number";yn(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=Cr(l)),t._assign(l)}),n&&yn(t,"change",()=>{t.value=t.value.trim()}),e||(yn(t,"compositionstart",jp),yn(t,"compositionend",ic),yn(t,"change",ic))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=sc(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Cr(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},pC={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Gn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Gn(t,!0),s.enter(t)):s.leave(t,()=>{Gn(t,!1)}):Gn(t,e))},beforeUnmount(t,{value:e}){Gn(t,e)}};function Gn(t,e){t.style.display=e?t._vod:"none"}const Vp=we({patchProp:Lp},wp);let rc;function zp(){return rc||(rc=Xd(Vp))}const Kp=(...t)=>{const e=zp().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=qp(s);if(!i)return;const r=e._component;!q(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function qp(t){return Ce(t)?document.querySelector(t):t}const Gp=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Yp={},Qp={id:"app"};function Xp(t,e){const n=Dd("router-view");return No(),ip("div",Qp,[Fe(n)])}const Jp=Gp(Yp,[["render",Xp]]);var Zp=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let vu;const Hi=t=>vu=t,Eu=Symbol();function Lr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ls;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ls||(ls={}));function e_(){const t=Ea(!0),e=t.run(()=>bo({}));let n=[],s=[];const i=Pi({install(r){Hi(i),i._a=r,r.provide(Eu,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Zp?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Cu=()=>{};function oc(t,e,n,s=Cu){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Ca()&&Sf(i),i}function gn(t,...e){t.slice().forEach(n=>{n(...e)})}const t_=t=>t();function Fr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Lr(i)&&Lr(s)&&t.hasOwnProperty(n)&&!Ee(s)&&!kt(s)?t[n]=Fr(i,s):t[n]=s}return t}const n_=Symbol();function s_(t){return!Lr(t)||!t.hasOwnProperty(n_)}const{assign:Nt}=Object;function i_(t){return!!(Ee(t)&&t.effect)}function r_(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=nd(n.state.value[t]);return Nt(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=Pi(Ge(()=>{Hi(n);const _=n._s.get(t);return o[f].call(_,_)})),h),{}))}return c=bu(t,a,e,n,s,!0),c}function bu(t,e,n={},s,i,r){let o;const l=Nt({actions:{}},n),c={deep:!0};let a,u,h=[],f=[],_;const m=s.state.value[t];!r&&!m&&(s.state.value[t]={}),bo({});let C;function N(x){let F;a=u=!1,typeof x=="function"?(x(s.state.value[t]),F={type:ls.patchFunction,storeId:t,events:_}):(Fr(s.state.value[t],x),F={type:ls.patchObject,payload:x,storeId:t,events:_});const z=C=Symbol();Io().then(()=>{C===z&&(a=!0)}),u=!0,gn(h,F,s.state.value[t])}const A=r?function(){const{state:F}=n,z=F?F():{};this.$patch(te=>{Nt(te,z)})}:Cu;function O(){o.stop(),h=[],f=[],s._s.delete(t)}function j(x,F){return function(){Hi(s);const z=Array.from(arguments),te=[],M=[];function ie(J){te.push(J)}function Ae(J){M.push(J)}gn(f,{args:z,name:x,store:K,after:ie,onError:Ae});let Me;try{Me=F.apply(this&&this.$id===t?this:K,z)}catch(J){throw gn(M,J),J}return Me instanceof Promise?Me.then(J=>(gn(te,J),J)).catch(J=>(gn(M,J),Promise.reject(J))):(gn(te,Me),Me)}}const D={_p:s,$id:t,$onAction:oc.bind(null,f),$patch:N,$reset:A,$subscribe(x,F={}){const z=oc(h,x,F.detached,()=>te()),te=o.run(()=>ns(()=>s.state.value[t],M=>{(F.flush==="sync"?u:a)&&x({storeId:t,type:ls.direct,events:_},M)},Nt({},c,F)));return z},$dispose:O},K=ks(D);s._s.set(t,K);const le=s._a&&s._a.runWithContext||t_,se=s._e.run(()=>(o=Ea(),le(()=>o.run(e))));for(const x in se){const F=se[x];if(Ee(F)&&!i_(F)||kt(F))r||(m&&s_(F)&&(Ee(F)?F.value=m[x]:Fr(F,m[x])),s.state.value[t][x]=F);else if(typeof F=="function"){const z=j(x,F);se[x]=z,l.actions[x]=F}}return Nt(K,se),Nt(Z(K),se),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:x=>{N(F=>{Nt(F,x)})}}),s._p.forEach(x=>{Nt(K,o.run(()=>x({store:K,app:s._a,pinia:s,options:l})))}),m&&r&&n.hydrate&&n.hydrate(K.$state,m),a=!0,u=!0,K}function _C(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,c){const a=zd();return l=l||(a?ht(Eu,null):null),l&&Hi(l),l=vu,l._s.has(s)||(r?bu(s,e,i,l):r_(s,i,l)),l._s.get(s)}return o.$id=s,o}const o_="modulepreload",l_=function(t){return"/user/"+t},lc={},c_=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=l_(r),r in lc)return;lc[r]=!0;const o=r.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${l}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":o_,o||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),o)return new Promise((u,h)=>{a.addEventListener("load",u),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vn=typeof window<"u";function a_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ce=Object.assign;function lr(t,e){const n={};for(const s in e){const i=e[s];n[s]=rt(i)?i.map(t):t(i)}return n}const cs=()=>{},rt=Array.isArray,u_=/\/$/,h_=t=>t.replace(u_,"");function cr(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),r=e.slice(c+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=__(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function f_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function d_(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Pn(e.matched[s],n.matched[i])&&wu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function wu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!p_(t[n],e[n]))return!1;return!0}function p_(t,e){return rt(t)?ac(t,e):rt(e)?ac(e,t):t===e}function ac(t,e){return rt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function __(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Cs;(function(t){t.pop="pop",t.push="push"})(Cs||(Cs={}));var as;(function(t){t.back="back",t.forward="forward",t.unknown=""})(as||(as={}));function g_(t){if(!t)if(vn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),h_(t)}const m_=/^[^#]+#/;function y_(t,e){return t.replace(m_,"#")+e}function v_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ui=()=>({left:window.pageXOffset,top:window.pageYOffset});function E_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=v_(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function uc(t,e){return(history.state?history.state.position-e:-1)+t}const Br=new Map;function C_(t,e){Br.set(t,e)}function b_(t){const e=Br.get(t);return Br.delete(t),e}let w_=()=>location.protocol+"//"+location.host;function Iu(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),cc(c,"")}return cc(n,t)+s+i}function I_(t,e,n,s){let i=[],r=[],o=null;const l=({state:f})=>{const _=Iu(t,location),m=n.value,C=e.value;let N=0;if(f){if(n.value=_,e.value=f,o&&o===m){o=null;return}N=C?f.position-C.position:0}else s(_);i.forEach(A=>{A(n.value,m,{delta:N,type:Cs.pop,direction:N?N>0?as.forward:as.back:as.unknown})})};function c(){o=n.value}function a(f){i.push(f);const _=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:f}=window;f.state&&f.replaceState(ce({},f.state,{scroll:Ui()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:a,destroy:h}}function hc(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ui():null}}function S_(t){const{history:e,location:n}=window,s={value:Iu(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(c,a,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:w_()+t+c;try{e[u?"replaceState":"pushState"](a,"",f),i.value=a}catch(_){console.error(_),n[u?"replace":"assign"](f)}}function o(c,a){const u=ce({},e.state,hc(i.value.back,c,i.value.forward,!0),a,{position:i.value.position});r(c,u,!0),s.value=c}function l(c,a){const u=ce({},i.value,e.state,{forward:c,scroll:Ui()});r(u.current,u,!0);const h=ce({},hc(s.value,c,null),{position:u.position+1},a);r(c,h,!1),s.value=c}return{location:s,state:i,push:l,replace:o}}function T_(t){t=g_(t);const e=S_(t),n=I_(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ce({location:"",base:t,go:s,createHref:y_.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function R_(t){return typeof t=="string"||t&&typeof t=="object"}function Su(t){return typeof t=="string"||typeof t=="symbol"}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Tu=Symbol("");var fc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(fc||(fc={}));function On(t,e){return ce(new Error,{type:t,[Tu]:!0},e)}function mt(t,e){return t instanceof Error&&Tu in t&&(e==null||!!(t.type&e))}const dc="[^/]+?",x_={sensitive:!1,strict:!1,start:!0,end:!0},N_=/[.+*?^${}()[\]/\\]/g;function A_(t,e){const n=ce({},x_,e),s=[];let i=n.start?"^":"";const r=[];for(const a of t){const u=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let h=0;h<a.length;h++){const f=a[h];let _=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(N_,"\\$&"),_+=40;else if(f.type===1){const{value:m,repeatable:C,optional:N,regexp:A}=f;r.push({name:m,repeatable:C,optional:N});const O=A||dc;if(O!==dc){_+=10;try{new RegExp(`(${O})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${m}" (${O}): `+D.message)}}let j=C?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(j=N&&a.length<2?`(?:/${j})`:"/"+j),N&&(j+="?"),i+=j,_+=20,N&&(_+=-8),C&&(_+=-20),O===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const a=s.length-1;s[a][s[a].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(a){const u=a.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const _=u[f]||"",m=r[f-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function c(a){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of f)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:C,optional:N}=_,A=m in a?a[m]:"";if(rt(A)&&!C)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const O=rt(A)?A.join("/"):A;if(!O)if(N)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:c}}function P_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function O_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=P_(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(pc(s))return 1;if(pc(i))return-1}return i.length-s.length}function pc(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const k_={type:0,value:""},D_=/[a-zA-Z0-9_]/;function M_(t){if(!t)return[[]];if(t==="/")return[[k_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${a}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,c,a="",u="";function h(){a&&(n===0?r.push({type:0,value:a}):n===1||n===2||n===3?(r.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:a,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),a="")}function f(){a+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(a&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:D_.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${a}"`),h(),o(),i}function L_(t,e,n){const s=A_(M_(t.path),n),i=ce(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function F_(t,e){const n=[],s=new Map;e=mc({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const _=!f,m=B_(u);m.aliasOf=f&&f.record;const C=mc(e,u),N=[m];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of j)N.push(ce({},m,{components:f?f.record.components:m.components,path:D,aliasOf:f?f.record:m}))}let A,O;for(const j of N){const{path:D}=j;if(h&&D[0]!=="/"){const K=h.record.path,le=K[K.length-1]==="/"?"":"/";j.path=h.record.path+(D&&le+D)}if(A=L_(j,h,C),f?f.alias.push(A):(O=O||A,O!==A&&O.alias.push(A),_&&u.name&&!gc(A)&&o(u.name)),m.children){const K=m.children;for(let le=0;le<K.length;le++)r(K[le],A,f&&f.children[le])}f=f||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return O?()=>{o(O)}:cs}function o(u){if(Su(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function c(u){let h=0;for(;h<n.length&&O_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ru(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!gc(u)&&s.set(u.record.name,u)}function a(u,h){let f,_={},m,C;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw On(1,{location:u});C=f.record.name,_=ce(_c(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&_c(u.params,f.keys.map(O=>O.name))),m=f.stringify(_)}else if("path"in u)m=u.path,f=n.find(O=>O.re.test(m)),f&&(_=f.parse(m),C=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw On(1,{location:u,currentLocation:h});C=f.record.name,_=ce({},h.params,u.params),m=f.stringify(_)}const N=[];let A=f;for(;A;)N.unshift(A.record),A=A.parent;return{name:C,path:m,params:_,matched:N,meta:U_(N)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:a,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function _c(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function B_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:H_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function H_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function gc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function U_(t){return t.reduce((e,n)=>ce(e,n.meta),{})}function mc(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Ru(t,e){return e.children.some(n=>n===t||Ru(t,n))}const xu=/#/g,W_=/&/g,$_=/\//g,j_=/=/g,V_=/\?/g,Nu=/\+/g,z_=/%5B/g,K_=/%5D/g,Au=/%5E/g,q_=/%60/g,Pu=/%7B/g,G_=/%7C/g,Ou=/%7D/g,Y_=/%20/g;function ko(t){return encodeURI(""+t).replace(G_,"|").replace(z_,"[").replace(K_,"]")}function Q_(t){return ko(t).replace(Pu,"{").replace(Ou,"}").replace(Au,"^")}function Hr(t){return ko(t).replace(Nu,"%2B").replace(Y_,"+").replace(xu,"%23").replace(W_,"%26").replace(q_,"`").replace(Pu,"{").replace(Ou,"}").replace(Au,"^")}function X_(t){return Hr(t).replace(j_,"%3D")}function J_(t){return ko(t).replace(xu,"%23").replace(V_,"%3F")}function Z_(t){return t==null?"":J_(t).replace($_,"%2F")}function li(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function eg(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Nu," "),o=r.indexOf("="),l=li(o<0?r:r.slice(0,o)),c=o<0?null:li(r.slice(o+1));if(l in e){let a=e[l];rt(a)||(a=e[l]=[a]),a.push(c)}else e[l]=c}return e}function yc(t){let e="";for(let n in t){const s=t[n];if(n=X_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(rt(s)?s.map(r=>r&&Hr(r)):[s&&Hr(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function tg(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=rt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const ng=Symbol(""),vc=Symbol(""),Do=Symbol(""),ku=Symbol(""),Ur=Symbol("");function Yn(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Pt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(On(4,{from:n,to:e})):h instanceof Error?l(h):R_(h)?l(On(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},a=t.call(s&&s.instances[i],e,n,c);let u=Promise.resolve(a);t.length<3&&(u=u.then(c)),u.catch(h=>l(h))})}function ar(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(sg(l)){const a=(l.__vccOpts||l)[e];a&&i.push(Pt(a,n,s,r,o))}else{let c=l();i.push(()=>c.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=a_(a)?a.default:a;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Pt(f,n,s,r,o)()}))}}return i}function sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ec(t){const e=ht(Do),n=ht(ku),s=Ge(()=>e.resolve(wn(t.to))),i=Ge(()=>{const{matched:c}=s.value,{length:a}=c,u=c[a-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Pn.bind(null,u));if(f>-1)return f;const _=Cc(c[a-2]);return a>1&&Cc(u)===_&&h[h.length-1].path!==_?h.findIndex(Pn.bind(null,c[a-2])):f}),r=Ge(()=>i.value>-1&&lg(n.params,s.value.params)),o=Ge(()=>i.value>-1&&i.value===n.matched.length-1&&wu(n.params,s.value.params));function l(c={}){return og(c)?e[wn(t.replace)?"replace":"push"](wn(t.to)).catch(cs):Promise.resolve()}return{route:s,href:Ge(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const ig=Qa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ec,setup(t,{slots:e}){const n=ks(Ec(t)),{options:s}=ht(Do),i=Ge(()=>({[bc(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[bc(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Oo("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),rg=ig;function og(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lg(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!rt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Cc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const bc=(t,e,n)=>t??e??n,cg=Qa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ht(Ur),i=Ge(()=>t.route||s.value),r=ht(vc,0),o=Ge(()=>{let a=wn(r);const{matched:u}=i.value;let h;for(;(h=u[a])&&!h.components;)a++;return a}),l=Ge(()=>i.value.matched[o.value]);Zs(vc,Ge(()=>o.value+1)),Zs(ng,l),Zs(Ur,i);const c=bo();return ns(()=>[c.value,l.value,t.name],([a,u,h],[f,_,m])=>{u&&(u.instances[h]=a,_&&_!==u&&a&&a===f&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),a&&u&&(!_||!Pn(u,_)||!f)&&(u.enterCallbacks[h]||[]).forEach(C=>C(a))},{flush:"post"}),()=>{const a=i.value,u=t.name,h=l.value,f=h&&h.components[u];if(!f)return wc(n.default,{Component:f,route:a});const _=h.props[u],m=_?_===!0?a.params:typeof _=="function"?_(a):_:null,N=Oo(f,ce({},m,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return wc(n.default,{Component:N,route:a})||N}}});function wc(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ag=cg;function ug(t){const e=F_(t.routes,t),n=t.parseQuery||eg,s=t.stringifyQuery||yc,i=t.history,r=Yn(),o=Yn(),l=Yn(),c=Zf(xt);let a=xt;vn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=lr.bind(null,v=>""+v),h=lr.bind(null,Z_),f=lr.bind(null,li);function _(v,k){let R,B;return Su(v)?(R=e.getRecordMatcher(v),B=k):B=v,e.addRoute(B,R)}function m(v){const k=e.getRecordMatcher(v);k&&e.removeRoute(k)}function C(){return e.getRoutes().map(v=>v.record)}function N(v){return!!e.getRecordMatcher(v)}function A(v,k){if(k=ce({},k||c.value),typeof v=="string"){const g=cr(n,v,k.path),y=e.resolve({path:g.path},k),E=i.createHref(g.fullPath);return ce(g,y,{params:f(y.params),hash:li(g.hash),redirectedFrom:void 0,href:E})}let R;if("path"in v)R=ce({},v,{path:cr(n,v.path,k.path).path});else{const g=ce({},v.params);for(const y in g)g[y]==null&&delete g[y];R=ce({},v,{params:h(g)}),k.params=h(k.params)}const B=e.resolve(R,k),oe=v.hash||"";B.params=u(f(B.params));const d=f_(s,ce({},v,{hash:Q_(oe),path:B.path})),p=i.createHref(d);return ce({fullPath:d,hash:oe,query:s===yc?tg(v.query):v.query||{}},B,{redirectedFrom:void 0,href:p})}function O(v){return typeof v=="string"?cr(n,v,c.value.path):ce({},v)}function j(v,k){if(a!==v)return On(8,{from:k,to:v})}function D(v){return se(v)}function K(v){return D(ce(O(v),{replace:!0}))}function le(v){const k=v.matched[v.matched.length-1];if(k&&k.redirect){const{redirect:R}=k;let B=typeof R=="function"?R(v):R;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=O(B):{path:B},B.params={}),ce({query:v.query,hash:v.hash,params:"path"in B?{}:v.params},B)}}function se(v,k){const R=a=A(v),B=c.value,oe=v.state,d=v.force,p=v.replace===!0,g=le(R);if(g)return se(ce(O(g),{state:typeof g=="object"?ce({},oe,g.state):oe,force:d,replace:p}),k||R);const y=R;y.redirectedFrom=k;let E;return!d&&d_(s,B,R)&&(E=On(16,{to:y,from:B}),ot(B,B,!0,!1)),(E?Promise.resolve(E):z(y,B)).catch(b=>mt(b)?mt(b,2)?b:It(b):re(b,y,B)).then(b=>{if(b){if(mt(b,2))return se(ce({replace:p},O(b.to),{state:typeof b.to=="object"?ce({},oe,b.to.state):oe,force:d}),k||y)}else b=M(y,B,!0,p,oe);return te(y,B,b),b})}function x(v,k){const R=j(v,k);return R?Promise.reject(R):Promise.resolve()}function F(v){const k=dn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(v):v()}function z(v,k){let R;const[B,oe,d]=hg(v,k);R=ar(B.reverse(),"beforeRouteLeave",v,k);for(const g of B)g.leaveGuards.forEach(y=>{R.push(Pt(y,v,k))});const p=x.bind(null,v,k);return R.push(p),ke(R).then(()=>{R=[];for(const g of r.list())R.push(Pt(g,v,k));return R.push(p),ke(R)}).then(()=>{R=ar(oe,"beforeRouteUpdate",v,k);for(const g of oe)g.updateGuards.forEach(y=>{R.push(Pt(y,v,k))});return R.push(p),ke(R)}).then(()=>{R=[];for(const g of d)if(g.beforeEnter)if(rt(g.beforeEnter))for(const y of g.beforeEnter)R.push(Pt(y,v,k));else R.push(Pt(g.beforeEnter,v,k));return R.push(p),ke(R)}).then(()=>(v.matched.forEach(g=>g.enterCallbacks={}),R=ar(d,"beforeRouteEnter",v,k),R.push(p),ke(R))).then(()=>{R=[];for(const g of o.list())R.push(Pt(g,v,k));return R.push(p),ke(R)}).catch(g=>mt(g,8)?g:Promise.reject(g))}function te(v,k,R){l.list().forEach(B=>F(()=>B(v,k,R)))}function M(v,k,R,B,oe){const d=j(v,k);if(d)return d;const p=k===xt,g=vn?history.state:{};R&&(B||p?i.replace(v.fullPath,ce({scroll:p&&g&&g.scroll},oe)):i.push(v.fullPath,oe)),c.value=v,ot(v,k,R,p),It()}let ie;function Ae(){ie||(ie=i.listen((v,k,R)=>{if(!Ws.listening)return;const B=A(v),oe=le(B);if(oe){se(ce(oe,{replace:!0}),B).catch(cs);return}a=B;const d=c.value;vn&&C_(uc(d.fullPath,R.delta),Ui()),z(B,d).catch(p=>mt(p,12)?p:mt(p,2)?(se(p.to,B).then(g=>{mt(g,20)&&!R.delta&&R.type===Cs.pop&&i.go(-1,!1)}).catch(cs),Promise.reject()):(R.delta&&i.go(-R.delta,!1),re(p,B,d))).then(p=>{p=p||M(B,d,!1),p&&(R.delta&&!mt(p,8)?i.go(-R.delta,!1):R.type===Cs.pop&&mt(p,20)&&i.go(-1,!1)),te(B,d,p)}).catch(cs)}))}let Me=Yn(),J=Yn(),he;function re(v,k,R){It(v);const B=J.list();return B.length?B.forEach(oe=>oe(v,k,R)):console.error(v),Promise.reject(v)}function gt(){return he&&c.value!==xt?Promise.resolve():new Promise((v,k)=>{Me.add([v,k])})}function It(v){return he||(he=!v,Ae(),Me.list().forEach(([k,R])=>v?R(v):k()),Me.reset()),v}function ot(v,k,R,B){const{scrollBehavior:oe}=t;if(!vn||!oe)return Promise.resolve();const d=!R&&b_(uc(v.fullPath,0))||(B||!R)&&history.state&&history.state.scroll||null;return Io().then(()=>oe(v,k,d)).then(p=>p&&E_(p)).catch(p=>re(p,v,k))}const He=v=>i.go(v);let fn;const dn=new Set,Ws={currentRoute:c,listening:!0,addRoute:_,removeRoute:m,hasRoute:N,getRoutes:C,resolve:A,options:t,push:D,replace:K,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:J.add,isReady:gt,install(v){const k=this;v.component("RouterLink",rg),v.component("RouterView",ag),v.config.globalProperties.$router=k,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>wn(c)}),vn&&!fn&&c.value===xt&&(fn=!0,D(i.location).catch(oe=>{}));const R={};for(const oe in xt)Object.defineProperty(R,oe,{get:()=>c.value[oe],enumerable:!0});v.provide(Do,k),v.provide(ku,Oa(R)),v.provide(Ur,c);const B=v.unmount;dn.add(v),v.unmount=function(){dn.delete(v),dn.size<1&&(a=xt,ie&&ie(),ie=null,c.value=xt,fn=!1,he=!1),B()}}};function ke(v){return v.reduce((k,R)=>k.then(()=>F(R)),Promise.resolve())}return Ws}function hg(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(a=>Pn(a,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(a=>Pn(a,c))||i.push(c))}return[n,s,i]}const fg="/user/",dg=[{path:fg+":pathMatch(.*)",name:"error",component:()=>c_(()=>import("./index-791251cd.js"),[])}],pg=ug({history:T_(),routes:dg});/**
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
 */const I=function(t,e){if(!t)throw $n(e)},$n=function(t){return new Error("Firebase Database ("+Du.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Mu=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_g=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,_=a&63;c||(_=64,o||(f=64)),s.push(n[u],n[h],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Mu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_g(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw new gg;const f=r<<2|l>>4;if(s.push(f),a!==64){const _=l<<4&240|a>>2;if(s.push(_),h!==64){const m=a<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lu=function(t){const e=Mu(t);return Mo.encodeByteArray(e,!0)},ci=function(t){return Lu(t).replace(/\./g,"")},Wr=function(t){try{return Mo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mg(t){return Fu(void 0,t)}function Fu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yg(n)||(t[n]=Fu(t[n],e[n]));return t}function yg(t){return t!=="__proto__"}/**
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
 */function vg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Eg=()=>vg().__FIREBASE_DEFAULTS__,Cg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Wr(t[1]);return e&&JSON.parse(e)},Bu=()=>{try{return Eg()||Cg()||bg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wg=t=>{var e,n;return(n=(e=Bu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ig=t=>{const e=wg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Hu=()=>{var t;return(t=Bu())===null||t===void 0?void 0:t.config};/**
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
 */class Wi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Sg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ci(JSON.stringify(n)),ci(JSON.stringify(o)),l].join(".")}/**
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
 */function Tg(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tg())}function Rg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wu(){return Du.NODE_ADMIN===!0}function xg(){try{return typeof indexedDB=="object"}catch{return!1}}function Ng(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Ag="FirebaseError";class Ds extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ag,Object.setPrototypeOf(this,Ds.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$u.prototype.create)}}class $u{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Pg(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ds(i,l,s)}}function Pg(t,e){return t.replace(Og,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Og=/\{\$([^}]+)}/g;/**
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
 */function bs(t){return JSON.parse(t)}function Se(t){return JSON.stringify(t)}/**
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
 */const ju=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=bs(Wr(r[0])||""),n=bs(Wr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},kg=function(t){const e=ju(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Dg=function(t){const e=ju(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function pt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ic(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ai(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function $r(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Sc(r)&&Sc(o)){if(!$r(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Sc(t){return t!==null&&typeof t=="object"}/**
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
 */function Mg(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Lg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Lo(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Fg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$i=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ms(t){return t&&t._delegate?t._delegate:t}class ws{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Bg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Wi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ug(e))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Gt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gt){return this.instances.has(e)}getOptions(e=Gt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Hg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gt){return this.component?this.component.multipleInstances?e:Gt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hg(t){return t===Gt?void 0:t}function Ug(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const $g={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},jg=pe.INFO,Vg={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},zg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Vg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=jg,this._logHandler=zg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$g[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const Kg=(t,e)=>e.some(n=>t instanceof n);let Tc,Rc;function qg(){return Tc||(Tc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gg(){return Rc||(Rc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zu=new WeakMap,jr=new WeakMap,Ku=new WeakMap,ur=new WeakMap,Fo=new WeakMap;function Yg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Mt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zu.set(n,t)}).catch(()=>{}),Fo.set(e,t),e}function Qg(t){if(jr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ku.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xg(t){Vr=t(Vr)}function Jg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(hr(this),e,...n);return Ku.set(s,e.sort?e.sort():[e]),Mt(s)}:Gg().includes(t)?function(...e){return t.apply(hr(this),e),Mt(zu.get(this))}:function(...e){return Mt(t.apply(hr(this),e))}}function Zg(t){return typeof t=="function"?Jg(t):(t instanceof IDBTransaction&&Qg(t),Kg(t,qg())?new Proxy(t,Vr):t)}function Mt(t){if(t instanceof IDBRequest)return Yg(t);if(ur.has(t))return ur.get(t);const e=Zg(t);return e!==t&&(ur.set(t,e),Fo.set(e,t)),e}const hr=t=>Fo.get(t);function em(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Mt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",a=>i(a.oldVersion,a.newVersion,a))}).catch(()=>{}),l}const tm=["get","getKey","getAll","getAllKeys","count"],nm=["put","add","delete","clear"],fr=new Map;function xc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fr.get(e))return fr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=nm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||tm.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return fr.set(e,r),r}Xg(t=>({...t,get:(e,n,s)=>xc(e,n)||t.get(e,n,s),has:(e,n)=>!!xc(e,n)||t.has(e,n)}));/**
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
 */class sm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(im(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function im(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zr="@firebase/app",Nc="0.9.19";/**
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
 */const on=new Vu("@firebase/app"),rm="@firebase/app-compat",om="@firebase/analytics-compat",lm="@firebase/analytics",cm="@firebase/app-check-compat",am="@firebase/app-check",um="@firebase/auth",hm="@firebase/auth-compat",fm="@firebase/database",dm="@firebase/database-compat",pm="@firebase/functions",_m="@firebase/functions-compat",gm="@firebase/installations",mm="@firebase/installations-compat",ym="@firebase/messaging",vm="@firebase/messaging-compat",Em="@firebase/performance",Cm="@firebase/performance-compat",bm="@firebase/remote-config",wm="@firebase/remote-config-compat",Im="@firebase/storage",Sm="@firebase/storage-compat",Tm="@firebase/firestore",Rm="@firebase/firestore-compat",xm="firebase",Nm="10.4.0";/**
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
 */const Kr="[DEFAULT]",Am={[zr]:"fire-core",[rm]:"fire-core-compat",[lm]:"fire-analytics",[om]:"fire-analytics-compat",[am]:"fire-app-check",[cm]:"fire-app-check-compat",[um]:"fire-auth",[hm]:"fire-auth-compat",[fm]:"fire-rtdb",[dm]:"fire-rtdb-compat",[pm]:"fire-fn",[_m]:"fire-fn-compat",[gm]:"fire-iid",[mm]:"fire-iid-compat",[ym]:"fire-fcm",[vm]:"fire-fcm-compat",[Em]:"fire-perf",[Cm]:"fire-perf-compat",[bm]:"fire-rc",[wm]:"fire-rc-compat",[Im]:"fire-gcs",[Sm]:"fire-gcs-compat",[Tm]:"fire-fst",[Rm]:"fire-fst-compat","fire-js":"fire-js",[xm]:"fire-js-all"};/**
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
 */const ui=new Map,qr=new Map;function Pm(t,e){try{t.container.addComponent(e)}catch(n){on.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hi(t){const e=t.name;if(qr.has(e))return on.debug(`There were multiple attempts to register component ${e}.`),!1;qr.set(e,t);for(const n of ui.values())Pm(n,t);return!0}function Om(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const km={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new $u("app","Firebase",km);/**
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
 */class Dm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ws("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Mm=Nm;function qu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Kr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=Hu()),!n)throw Lt.create("no-options");const r=ui.get(i);if(r){if($r(n,r.options)&&$r(s,r.config))return r;throw Lt.create("duplicate-app",{appName:i})}const o=new Wg(i);for(const c of qr.values())o.addComponent(c);const l=new Dm(n,s,o);return ui.set(i,l),l}function Lm(t=Kr){const e=ui.get(t);if(!e&&t===Kr&&Hu())return qu();if(!e)throw Lt.create("no-app",{appName:t});return e}function Sn(t,e,n){var s;let i=(s=Am[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),on.warn(l.join(" "));return}hi(new ws(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Fm="firebase-heartbeat-database",Bm=1,Is="firebase-heartbeat-store";let dr=null;function Gu(){return dr||(dr=em(Fm,Bm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Is)}}}).catch(t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})})),dr}async function Hm(t){try{return await(await Gu()).transaction(Is).objectStore(Is).get(Yu(t))}catch(e){if(e instanceof Ds)on.warn(e.message);else{const n=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});on.warn(n.message)}}}async function Ac(t,e){try{const s=(await Gu()).transaction(Is,"readwrite");await s.objectStore(Is).put(e,Yu(t)),await s.done}catch(n){if(n instanceof Ds)on.warn(n.message);else{const s=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(s.message)}}}function Yu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Um=1024,Wm=30*24*60*60*1e3;class $m{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Vm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Pc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Wm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Pc(),{heartbeatsToSend:n,unsentEntries:s}=jm(this._heartbeatsCache.heartbeats),i=ci(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pc(){return new Date().toISOString().substring(0,10)}function jm(t,e=Um){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Oc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Oc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Vm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xg()?Ng().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ac(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ac(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Oc(t){return ci(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function zm(t){hi(new ws("platform-logger",e=>new sm(e),"PRIVATE")),hi(new ws("heartbeat",e=>new $m(e),"PRIVATE")),Sn(zr,Nc,t),Sn(zr,Nc,"esm2017"),Sn("fire-js","")}zm("");var Km="firebase",qm="10.4.0";/**
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
 */Sn(Km,qm,"app");const kc="@firebase/database",Dc="1.0.1";/**
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
 */let Qu="";function Gm(t){Qu=t}/**
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
 */class Ym{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Se(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:bs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Qm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Xu=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ym(e)}}catch{}return new Qm},en=Xu("localStorage"),Gr=Xu("sessionStorage");/**
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
 */const Tn=new Vu("@firebase/database"),Xm=function(){let t=1;return function(){return t++}}(),Ju=function(t){const e=Fg(t),n=new Lg;n.update(e);const s=n.digest();return Mo.encodeByteArray(s)},Ls=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ls.apply(null,s):typeof s=="object"?e+=Se(s):e+=s,e+=" "}return e};let rn=null,Mc=!0;const Jm=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Tn.logLevel=pe.VERBOSE,rn=Tn.log.bind(Tn),e&&Gr.set("logging_enabled",!0)):typeof t=="function"?rn=t:(rn=null,Gr.remove("logging_enabled"))},Pe=function(...t){if(Mc===!0&&(Mc=!1,rn===null&&Gr.get("logging_enabled")===!0&&Jm(!0)),rn){const e=Ls.apply(null,t);rn(e)}},Fs=function(t){return function(...e){Pe(t,...e)}},Yr=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ls(...t);Tn.error(e)},bt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ls(...t)}`;throw Tn.error(e),new Error(e)},$e=function(...t){const e="FIREBASE WARNING: "+Ls(...t);Tn.warn(e)},Zm=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ey=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Dn="[MIN_NAME]",ln="[MAX_NAME]",un=function(t,e){if(t===e)return 0;if(t===Dn||e===ln)return-1;if(e===Dn||t===ln)return 1;{const n=Lc(t),s=Lc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ty=function(t,e){return t===e?0:t<e?-1:1},Qn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Se(e))},Ho=function(t){if(typeof t!="object"||t===null)return Se(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Se(e[s]),n+=":",n+=Ho(t[e[s]]);return n+="}",n},Zu=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Oe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const eh=function(t){I(!Bo(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},ny=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function iy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const ry=new RegExp("^-?(0*)\\d{1,10}$"),oy=-2147483648,ly=2147483647,Lc=function(t){if(ry.test(t)){const e=Number(t);if(e>=oy&&e<=ly)return e}return null},jn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $e("Exception was thrown by user callback.",n),e},Math.floor(0))}},cy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},us=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ay{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){$e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class uy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$e(e)}}class Rn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rn.OWNER="owner";/**
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
 */const Uo="5",th="v",nh="s",sh="r",ih="f",rh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oh="ls",lh="p",Qr="ac",ch="websocket",ah="long_polling";/**
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
 */class uh{constructor(e,n,s,i,r=!1,o="",l=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=en.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&en.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function hy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function hh(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===ch)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ah)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hy(t)&&(n.ns=t.namespace);const i=[];return Oe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class fy{constructor(){this.counters_={}}incrementCounter(e,n=1){pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mg(this.counters_)}}/**
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
 */const pr={},_r={};function Wo(t){const e=t.toString();return pr[e]||(pr[e]=new fy),pr[e]}function dy(t,e){const n=t.toString();return _r[n]||(_r[n]=e()),_r[n]}/**
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
 */class py{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&jn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Fc="start",_y="close",gy="pLPCommand",my="pRTLPCB",fh="id",dh="pw",ph="ser",yy="cb",vy="seg",Ey="ts",Cy="d",by="dframe",_h=1870,gh=30,wy=_h-gh,Iy=25e3,Sy=3e4;class En{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(e),this.stats_=Wo(n),this.urlFn=c=>(this.appCheckToken&&(c[Qr]=this.appCheckToken),hh(n,ah,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new py(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Sy)),ey(()=>{if(this.isClosed_)return;this.scriptTagHolder=new $o((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fc)this.id=l,this.password=c;else if(o===_y)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Fc]="t",s[ph]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[th]=Uo,this.transportSessionId&&(s[nh]=this.transportSessionId),this.lastSessionId&&(s[oh]=this.lastSessionId),this.applicationId&&(s[lh]=this.applicationId),this.appCheckToken&&(s[Qr]=this.appCheckToken),typeof location<"u"&&location.hostname&&rh.test(location.hostname)&&(s[sh]=ih);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){En.forceAllow_=!0}static forceDisallow(){En.forceDisallow_=!0}static isAvailable(){return En.forceAllow_?!0:!En.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ny()&&!sy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Lu(n),i=Zu(s,wy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[by]="t",s[fh]=e,s[dh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Se(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class $o{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Xm(),window[gy+this.uniqueCallbackIdentifier]=e,window[my+this.uniqueCallbackIdentifier]=n,this.myIFrame=$o.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Pe("frame writing exception"),l.stack&&Pe(l.stack),Pe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fh]=this.myID,e[dh]=this.myPW,e[ph]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gh+s.length<=_h;){const o=this.pendingSegs.shift();s=s+"&"+vy+i+"="+o.seg+"&"+Ey+i+"="+o.ts+"&"+Cy+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Iy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Pe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Ty=16384,Ry=45e3;let fi=null;typeof MozWebSocket<"u"?fi=MozWebSocket:typeof WebSocket<"u"&&(fi=WebSocket);class et{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=Wo(n),this.connURL=et.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[th]=Uo,typeof location<"u"&&location.hostname&&rh.test(location.hostname)&&(o[sh]=ih),n&&(o[nh]=n),s&&(o[oh]=s),i&&(o[Qr]=i),r&&(o[lh]=r),hh(e,ch,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,en.set("previous_websocket_failure",!0);try{let s;Wu(),this.mySock=new fi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&fi!==null&&!et.forceDisallow_}static previouslyFailed(){return en.isInMemoryStorage||en.get("previous_websocket_failure")===!0}markConnectionHealthy(){en.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=bs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Se(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zu(n,Ty);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ry))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}et.responsesRequiredToBeHealthy=2;et.healthyTimeout=3e4;/**
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
 */class Ss{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[En,et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=et&&et.isAvailable();let s=n&&!et.previouslyFailed();if(e.webSocketOnly&&(n||$e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[et];else{const i=this.transports_=[];for(const r of Ss.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ss.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ss.globalTransportInitialized_=!1;/**
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
 */const xy=6e4,Ny=5e3,Ay=10*1024,Py=100*1024,gr="t",Bc="d",Oy="s",Hc="r",ky="e",Uc="o",Wc="a",$c="n",jc="p",Dy="h";class My{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new Ss(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=us(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Py?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ay?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gr in e){const n=e[gr];n===Wc?this.upgradeIfSecondaryHealthy_():n===Hc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Uc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qn("t",e),s=Qn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$c,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qn("t",e),s=Qn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qn(gr,e);if(Bc in e){const s=e[Bc];if(n===Dy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===$c){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Oy?this.onConnectionShutdown_(s):n===Hc?this.onReset_(s):n===ky?Yr("Server Error: "+s):n===Uc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Yr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Uo!==s&&$e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),us(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):us(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ny))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(en.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class di extends yh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Uu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new di}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Vc=32,zc=768;class ue{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new ue("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wt(t){return t.pieces_.length-t.pieceNum_}function _e(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ue(t.pieces_,e)}function jo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ly(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ts(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ue(e,0)}function ye(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ue)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ue(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function Be(t,e){const n=Y(t),s=Y(e);if(n===null)return e;if(n===s)return Be(_e(t),_e(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fy(t,e){const n=Ts(t,0),s=Ts(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=un(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Vo(t,e){if(Wt(t)!==Wt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ye(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Wt(t)>Wt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class By{constructor(e,n){this.errorPrefix_=n,this.parts_=Ts(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=$i(this.parts_[s]);Eh(this)}}function Hy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$i(e),Eh(t)}function Uy(t){const e=t.parts_.pop();t.byteLength_-=$i(e),t.parts_.length>0&&(t.byteLength_-=1)}function Eh(t){if(t.byteLength_>zc)throw new Error(t.errorPrefix_+"has a key path longer than "+zc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vc+") or object contains a cycle "+Yt(t))}function Yt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class zo extends yh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new zo}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Xn=1e3,Wy=60*5*1e3,Kc=30*1e3,$y=1.3,jy=3e4,Vy="server_kill",qc=3;class Et extends mh{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=Et.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xn,this.maxReconnectDelay_=Wy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Wu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&di.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Se(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Wi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;Et.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pt(e,"w")){const s=kn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();$e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Dg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Se(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Yr("Unrecognized action received from server: "+Se(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jy&&(this.reconnectDelay_=Xn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$y)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Et.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Pe("getToken() completed but was canceled"):(Pe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new My(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{$e(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Vy)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&$e(h),c())}}}interrupt(e){Pe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ic(this.interruptReasons_)&&(this.reconnectDelay_=Xn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ho(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ue(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Pe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qc&&(this.reconnectDelay_=Kc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Qu.replace(/\./g,"-")]=1,Uu()?e["framework.cordova"]=1:Rg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=di.getInstance().currentlyOnline();return Ic(this.interruptReasons_)&&e}}Et.nextPersistentConnectionId_=0;Et.nextConnectionId_=0;/**
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
 */class ji{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new G(Dn,e),i=new G(Dn,n);return this.compare(s,i)!==0}minPost(){return G.MIN}}/**
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
 */let Ys;class Ch extends ji{static get __EMPTY_NODE(){return Ys}static set __EMPTY_NODE(e){Ys=e}compare(e,n){return un(e.name,n.name)}isDefinedOn(e){throw $n("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return G.MIN}maxPost(){return new G(ln,Ys)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new G(e,Ys)}toString(){return".key"}}const xn=new Ch;/**
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
 */class Qs{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Re{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Re.RED,this.left=i??We.EMPTY_NODE,this.right=r??We.EMPTY_NODE}copy(e,n,s,i,r){return new Re(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class zy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Re(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qs(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new zy;/**
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
 */function Ky(t,e){return un(t.name,e.name)}function Ko(t,e){return un(t,e)}/**
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
 */let Xr;function qy(t){Xr=t}const bh=function(t){return typeof t=="number"?"number:"+eh(t):"string:"+t},wh=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pt(e,".sv"),"Priority must be a string or number.")}else I(t===Xr||t.isEmpty(),"priority of unexpected type.");I(t===Xr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gc;class Te{constructor(e,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),wh(this.priorityNode_)}static set __childrenNodeConstructor(e){Gc=e}static get __childrenNodeConstructor(){return Gc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Te(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:Y(e)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Y(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||Wt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(_e(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=eh(this.value_):e+=this.value_,this.lazyHash_=Ju(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Te.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Te.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(n),r=Te.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ih,Sh;function Gy(t){Ih=t}function Yy(t){Sh=t}class Qy extends ji{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?un(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(ln,new Te("[PRIORITY-POST]",Sh))}makePost(e,n){const s=Ih(e);return new G(n,new Te("[PRIORITY-POST]",s))}toString(){return".priority"}}const ve=new Qy;/**
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
 */const Xy=Math.log(2);class Jy{constructor(e){const n=r=>parseInt(Math.log(r)/Xy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pi=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new Re(f,h.node,Re.BLACK,null,null);{const _=parseInt(u/2,10)+c,m=i(c,_),C=i(_+1,a);return h=t[_],f=n?n(h):h,new Re(f,h.node,Re.BLACK,m,C)}},r=function(c){let a=null,u=null,h=t.length;const f=function(m,C){const N=h-m,A=h;h-=m;const O=i(N+1,A),j=t[N],D=n?n(j):j;_(new Re(D,j.node,C,null,O))},_=function(m){a?(a.left=m,a=m):(u=m,a=m)};for(let m=0;m<c.count;++m){const C=c.nextBitIsOne(),N=Math.pow(2,c.count-(m+1));C?f(N,Re.BLACK):(f(N,Re.BLACK),f(N,Re.RED))}return u},o=new Jy(t.length),l=r(o);return new We(s||e,l)};/**
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
 */let mr;const mn={};class vt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(mn&&ve,"ChildrenNode.ts has not been loaded"),mr=mr||new vt({".priority":mn},{".priority":ve}),mr}get(e){const n=kn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return pt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==xn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(G.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=pi(s,e.getCompare()):l=mn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new vt(u,a)}addToIndexes(e,n){const s=ai(this.indexes_,(i,r)=>{const o=kn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===mn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(G.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),pi(l,o.getCompare())}else return mn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new G(e.name,l))),c.insert(e,e.node)}});return new vt(s,this.indexSet_)}removeFromIndexes(e,n){const s=ai(this.indexes_,i=>{if(i===mn)return i;{const r=n.get(e.name);return r?i.remove(new G(e.name,r)):i}});return new vt(s,this.indexSet_)}}/**
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
 */let Jn;class ${constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&wh(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jn||(Jn=new $(new We(Ko),null,vt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jn}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jn:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(_e(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new G(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Jn:this.priorityNode_;return new $(i,o,r)}}updateChild(e,n){const s=Y(e);if(s===null)return n;{I(Y(e)!==".priority"||Wt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(_e(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ve,(o,l)=>{n[o]=l.val(e),s++,r&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bh(this.getPriority().val())+":"),this.forEachChild(ve,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ju(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new G(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new G(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new G(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,G.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bs?-1:0}withIndex(e){if(e===xn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ve),i=n.getIterator(ve);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xn?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zy extends ${constructor(){super(new We(Ko),$.EMPTY_NODE,vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const Bs=new Zy;Object.defineProperties(G,{MIN:{value:new G(Dn,$.EMPTY_NODE)},MAX:{value:new G(ln,Bs)}});Ch.__EMPTY_NODE=$.EMPTY_NODE;Te.__childrenNodeConstructor=$;qy(Bs);Yy(Bs);/**
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
 */const ev=!0;function xe(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Te(n,xe(e))}if(!(t instanceof Array)&&ev){const n=[];let s=!1;if(Oe(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=xe(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new G(o,c)))}}),n.length===0)return $.EMPTY_NODE;const r=pi(n,Ky,o=>o.name,Ko);if(s){const o=pi(n,ve.getCompare());return new $(r,xe(e),new vt({".priority":o},{".priority":ve}))}else return new $(r,xe(e),vt.Default)}else{let n=$.EMPTY_NODE;return Oe(t,(s,i)=>{if(pt(t,s)&&s.substring(0,1)!=="."){const r=xe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(xe(e))}}Gy(xe);/**
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
 */class tv extends ji{constructor(e){super(),this.indexPath_=e,I(!Q(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?un(e.name,n.name):r}makePost(e,n){const s=xe(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,s);return new G(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,Bs);return new G(ln,e)}toString(){return Ts(this.indexPath_,0).join("/")}}/**
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
 */class nv extends ji{compare(e,n){const s=e.node.compareTo(n.node);return s===0?un(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(e,n){const s=xe(e);return new G(n,s)}toString(){return".value"}}const sv=new nv;/**
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
 */function Th(t){return{type:"value",snapshotNode:t}}function Mn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Rs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function xs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class qo{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Rs(n,l)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Mn(n,s)):o.trackChildChange(xs(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ve,(i,r)=>{n.hasChild(i)||s.trackChildChange(Rs(i,r))}),n.isLeafNode()||n.forEachChild(ve,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(xs(i,r,o))}else s.trackChildChange(Mn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ns{constructor(e){this.indexedFilter_=new qo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ns.getStartPost_(e),this.endPost_=Ns.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new G(n,s))||(s=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const r=this;return n.forEachChild(ve,(o,l)=>{r.matches(new G(o,l))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class rv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ns(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new G(n,s))||(s=$.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,_)=>h(_,f)}else o=this.index_.getCompare();const l=e;I(l.numChildren()===this.limit_,"");const c=new G(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,c);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(xs(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Rs(n,h));const C=l.updateImmediateChild(n,$.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Mn(f.name,f.node)),C.updateImmediateChild(f.name,f.node)):C}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(Rs(a.name,a.node)),r.trackChildChange(Mn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,$.EMPTY_NODE)):e}}/**
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
 */class Go{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ve}copy(){const e=new Go;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ov(t){return t.loadsAllData()?new qo(t.getIndex()):t.hasLimit()?new rv(t):new Ns(t)}function Yc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ve?n="$priority":t.index_===sv?n="$value":t.index_===xn?n="$key":(I(t.index_ instanceof tv,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Se(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Se(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Se(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Se(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Se(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Qc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ve&&(e.i=t.index_.toString()),e}/**
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
 */class _i extends mh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Fs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=_i.getListenId_(e,s),l={};this.listens_[o]=l;const c=Yc(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),kn(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=_i.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Yc(e._queryParams),s=e._path.toString(),i=new Wi;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mg(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=bs(l.responseText)}catch{$e("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&$e("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class lv{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function gi(){return{value:null,children:new Map}}function Rh(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Y(e);t.children.has(s)||t.children.set(s,gi());const i=t.children.get(s);e=_e(e),Rh(i,e,n)}}function Jr(t,e,n){t.value!==null?n(e,t.value):cv(t,(s,i)=>{const r=new ue(e.toString()+"/"+s);Jr(i,r,n)})}function cv(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class av{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Oe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Xc=10*1e3,uv=30*1e3,hv=5*60*1e3;class fv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new av(e);const s=Xc+(uv-Xc)*Math.random();us(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Oe(e,(i,r)=>{r>0&&pt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),us(this.reportStats_.bind(this),Math.floor(Math.random()*2*hv))}}/**
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
 */var nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nt||(nt={}));function Yo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xo(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class mi{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=nt.ACK_USER_WRITE,this.source=Yo()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ue(e));return new mi(ne(),n,this.revert)}}else return I(Y(this.path)===e,"operationForChild called for unrelated child."),new mi(_e(this.path),this.affectedTree,this.revert)}}/**
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
 */class As{constructor(e,n){this.source=e,this.path=n,this.type=nt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new As(this.source,ne()):new As(this.source,_e(this.path))}}/**
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
 */class cn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=nt.OVERWRITE}operationForChild(e){return Q(this.path)?new cn(this.source,ne(),this.snap.getImmediateChild(e)):new cn(this.source,_e(this.path),this.snap)}}/**
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
 */class Ln{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=nt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new ue(e));return n.isEmpty()?null:n.value?new cn(this.source,ne(),n.value):new Ln(this.source,ne(),n)}else return I(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ln(this.source,_e(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $t{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class dv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pv(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(iv(o.childName,o.snapshotNode))}),Zn(t,i,"child_removed",e,s,n),Zn(t,i,"child_added",e,s,n),Zn(t,i,"child_moved",r,s,n),Zn(t,i,"child_changed",e,s,n),Zn(t,i,"value",e,s,n),i}function Zn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>gv(t,l,c)),o.forEach(l=>{const c=_v(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function _v(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gv(t,e,n){if(e.childName==null||n.childName==null)throw $n("Should only compare child_ events.");const s=new G(e.childName,e.snapshotNode),i=new G(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Vi(t,e){return{eventCache:t,serverCache:e}}function hs(t,e,n,s){return Vi(new $t(e,n,s),t.serverCache)}function xh(t,e,n,s){return Vi(t.eventCache,new $t(e,n,s))}function yi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function an(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let yr;const mv=()=>(yr||(yr=new We(ty)),yr);class de{constructor(e,n=mv()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return Oe(e,(s,i)=>{n=n.set(new ue(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(Q(e))return null;{const s=Y(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(_e(e),n);return r!=null?{path:ye(new ue(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=Y(e),s=this.children.get(n);return s!==null?s.subtree(_e(e)):new de(null)}}set(e,n){if(Q(e))return new de(n,this.children);{const s=Y(e),r=(this.children.get(s)||new de(null)).set(_e(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=Y(e),s=this.children.get(n);if(s){const i=s.remove(_e(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(Q(e))return this.value;{const n=Y(e),s=this.children.get(n);return s?s.get(_e(e)):null}}setTree(e,n){if(Q(e))return n;{const s=Y(e),r=(this.children.get(s)||new de(null)).setTree(_e(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ye(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Q(e))return null;{const r=Y(e),o=this.children.get(r);return o?o.findOnPath_(_e(e),ye(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,s){if(Q(e))return this;{this.value&&s(n,this.value);const i=Y(e),r=this.children.get(i);return r?r.foreachOnPath_(_e(e),ye(n,i),s):new de(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ye(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class it{constructor(e){this.writeTree_=e}static empty(){return new it(new de(null))}}function fs(t,e,n){if(Q(e))return new it(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Be(i,e);return r=r.updateChild(o,n),new it(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new it(r)}}}function Zr(t,e,n){let s=t;return Oe(n,(i,r)=>{s=fs(s,ye(e,i),r)}),s}function Jc(t,e){if(Q(e))return it.empty();{const n=t.writeTree_.setTree(e,new de(null));return new it(n)}}function eo(t,e){return hn(t,e)!=null}function hn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Be(n.path,e)):null}function Zc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ve,(s,i)=>{e.push(new G(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new G(s,i.value))}),e}function Ft(t,e){if(Q(e))return t;{const n=hn(t,e);return n!=null?new it(new de(n)):new it(t.writeTree_.subtree(e))}}function to(t){return t.writeTree_.isEmpty()}function Fn(t,e){return Nh(ne(),t.writeTree_,e)}function Nh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Nh(ye(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ye(t,".priority"),s)),n}}/**
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
 */function zi(t,e){return kh(e,t)}function yv(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=fs(t.visibleWrites,e,n)),t.lastWriteId=s}function vv(t,e,n,s){I(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Zr(t.visibleWrites,e,n),t.lastWriteId=s}function Ev(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Cv(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&bv(l,s.path)?i=!1:Ye(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return wv(t),!0;if(s.snap)t.visibleWrites=Jc(t.visibleWrites,s.path);else{const l=s.children;Oe(l,c=>{t.visibleWrites=Jc(t.visibleWrites,ye(s.path,c))})}return!0}else return!1}function bv(t,e){if(t.snap)return Ye(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ye(ye(t.path,n),e))return!0;return!1}function wv(t){t.visibleWrites=Ah(t.allWrites,Iv,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Iv(t){return t.visible}function Ah(t,e,n){let s=it.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ye(n,o)?(l=Be(n,o),s=fs(s,l,r.snap)):Ye(o,n)&&(l=Be(o,n),s=fs(s,ne(),r.snap.getChild(l)));else if(r.children){if(Ye(n,o))l=Be(n,o),s=Zr(s,l,r.children);else if(Ye(o,n))if(l=Be(o,n),Q(l))s=Zr(s,ne(),r.children);else{const c=kn(r.children,Y(l));if(c){const a=c.getChild(_e(l));s=fs(s,ne(),a)}}}else throw $n("WriteRecord should have .snap or .children")}}return s}function Ph(t,e,n,s,i){if(!s&&!i){const r=hn(t.visibleWrites,e);if(r!=null)return r;{const o=Ft(t.visibleWrites,e);if(to(o))return n;if(n==null&&!eo(o,ne()))return null;{const l=n||$.EMPTY_NODE;return Fn(o,l)}}}else{const r=Ft(t.visibleWrites,e);if(!i&&to(r))return n;if(!i&&n==null&&!eo(r,ne()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Ye(a.path,e)||Ye(e,a.path))},l=Ah(t.allWrites,o,e),c=n||$.EMPTY_NODE;return Fn(l,c)}}}function Sv(t,e,n){let s=$.EMPTY_NODE;const i=hn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ve,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Ft(t.visibleWrites,e);return n.forEachChild(ve,(o,l)=>{const c=Fn(Ft(r,new ue(o)),l);s=s.updateImmediateChild(o,c)}),Zc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ft(t.visibleWrites,e);return Zc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Tv(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ye(e,n);if(eo(t.visibleWrites,r))return null;{const o=Ft(t.visibleWrites,r);return to(o)?i.getChild(n):Fn(o,i.getChild(n))}}function Rv(t,e,n,s){const i=ye(e,n),r=hn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Ft(t.visibleWrites,i);return Fn(o,s.getNode().getImmediateChild(n))}else return null}function xv(t,e){return hn(t.visibleWrites,e)}function Nv(t,e,n,s,i,r,o){let l;const c=Ft(t.visibleWrites,e),a=hn(c,ne());if(a!=null)l=a;else if(n!=null)l=Fn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Av(){return{visibleWrites:it.empty(),allWrites:[],lastWriteId:-1}}function vi(t,e,n,s){return Ph(t.writeTree,t.treePath,e,n,s)}function Jo(t,e){return Sv(t.writeTree,t.treePath,e)}function ea(t,e,n,s){return Tv(t.writeTree,t.treePath,e,n,s)}function Ei(t,e){return xv(t.writeTree,ye(t.treePath,e))}function Pv(t,e,n,s,i,r){return Nv(t.writeTree,t.treePath,e,n,s,i,r)}function Zo(t,e,n){return Rv(t.writeTree,t.treePath,e,n)}function Oh(t,e){return kh(ye(t.treePath,e),t.writeTree)}function kh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Ov{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,xs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Rs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Mn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,xs(s,e.snapshotNode,i.oldSnap));else throw $n("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class kv{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Dh=new kv;class el{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zo(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:an(this.viewCache_),r=Pv(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function Dv(t){return{filter:t}}function Mv(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Lv(t,e,n,s,i){const r=new Ov;let o,l;if(n.type===nt.OVERWRITE){const a=n;a.source.fromUser?o=no(t,e,a.path,a.snap,s,i,r):(I(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!Q(a.path),o=Ci(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===nt.MERGE){const a=n;a.source.fromUser?o=Bv(t,e,a.path,a.children,s,i,r):(I(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=so(t,e,a.path,a.children,s,i,l,r))}else if(n.type===nt.ACK_USER_WRITE){const a=n;a.revert?o=Wv(t,e,a.path,s,i,r):o=Hv(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===nt.LISTEN_COMPLETE)o=Uv(t,e,n.path,s,r);else throw $n("Unknown operation type: "+n.type);const c=r.getChanges();return Fv(e,o,c),{viewCache:o,changes:c}}function Fv(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=yi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Th(yi(e)))}}function Mh(t,e,n,s,i,r){const o=e.eventCache;if(Ei(s,n)!=null)return e;{let l,c;if(Q(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=an(e),u=a instanceof $?a:$.EMPTY_NODE,h=Jo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=vi(s,an(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=Y(n);if(a===".priority"){I(Wt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=ea(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=_e(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=ea(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=Zo(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return hs(e,l,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Ci(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(Q(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),_,null)}else{const _=Y(n);if(!c.isCompleteForPath(n)&&Wt(n)>1)return e;const m=_e(n),N=c.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?a=u.updatePriority(c.getNode(),N):a=u.updateChild(c.getNode(),_,N,m,Dh,null)}const h=xh(e,a,c.isFullyInitialized()||Q(n),u.filtersNodes()),f=new el(i,h,r);return Mh(t,h,n,i,f,l)}function no(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new el(i,e,r);if(Q(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=hs(e,a,!0,t.filter.filtersNodes());else{const h=Y(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=hs(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=_e(n),_=l.getNode().getImmediateChild(h);let m;if(Q(f))m=s;else{const C=u.getCompleteChild(h);C!=null?jo(f)===".priority"&&C.getChild(vh(f)).isEmpty()?m=C:m=C.updateChild(f,s):m=$.EMPTY_NODE}if(_.equals(m))c=e;else{const C=t.filter.updateChild(l.getNode(),h,m,f,u,o);c=hs(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function ta(t,e){return t.eventCache.isCompleteForChild(e)}function Bv(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=ye(n,c);ta(e,Y(u))&&(l=no(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=ye(n,c);ta(e,Y(u))||(l=no(t,l,u,a,i,r,o))}),l}function na(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function so(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;Q(n)?a=s:a=new de(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=na(t,_,f);c=Ci(t,c,new ue(h),m,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const _=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),C=na(t,m,f);c=Ci(t,c,new ue(h),C,i,r,o,l)}}),c}function Hv(t,e,n,s,i,r,o){if(Ei(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Q(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ci(t,e,n,c.getNode().getChild(n),i,r,l,o);if(Q(n)){let a=new de(null);return c.getNode().forEachChild(xn,(u,h)=>{a=a.set(new ue(u),h)}),so(t,e,n,a,i,r,l,o)}else return e}else{let a=new de(null);return s.foreach((u,h)=>{const f=ye(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),so(t,e,n,a,i,r,l,o)}}function Uv(t,e,n,s,i){const r=e.serverCache,o=xh(e,r.getNode(),r.isFullyInitialized()||Q(n),r.isFiltered());return Mh(t,o,n,s,Dh,i)}function Wv(t,e,n,s,i,r){let o;if(Ei(s,n)!=null)return e;{const l=new el(s,e,i),c=e.eventCache.getNode();let a;if(Q(n)||Y(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=vi(s,an(e));else{const h=e.serverCache.getNode();I(h instanceof $,"serverChildren would be complete if leaf node"),u=Jo(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=Y(n);let h=Zo(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,_e(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,$.EMPTY_NODE,_e(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=vi(s,an(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||Ei(s,ne())!=null,hs(e,a,o,t.filter.filtersNodes())}}/**
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
 */class $v{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new qo(s.getIndex()),r=ov(s);this.processor_=Dv(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode($.EMPTY_NODE,l.getNode(),null),u=new $t(c,o.isFullyInitialized(),i.filtersNodes()),h=new $t(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Vi(h,u),this.eventGenerator_=new dv(this.query_)}get query(){return this.query_}}function jv(t){return t.viewCache_.serverCache.getNode()}function Vv(t){return yi(t.viewCache_)}function zv(t,e){const n=an(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function sa(t){return t.eventRegistrations_.length===0}function Kv(t,e){t.eventRegistrations_.push(e)}function ia(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function ra(t,e,n,s){e.type===nt.MERGE&&e.source.queryId!==null&&(I(an(t.viewCache_),"We should always have a full cache before handling merges"),I(yi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Lv(t.processor_,i,e,n,s);return Mv(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Lh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function qv(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ve,(r,o)=>{s.push(Mn(r,o))}),n.isFullyInitialized()&&s.push(Th(n.getNode())),Lh(t,s,n.getNode(),e)}function Lh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return pv(t.eventGenerator_,e,n,i)}/**
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
 */let bi;class Fh{constructor(){this.views=new Map}}function Gv(t){I(!bi,"__referenceConstructor has already been defined"),bi=t}function Yv(){return I(bi,"Reference.ts has not been loaded"),bi}function Qv(t){return t.views.size===0}function tl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),ra(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(ra(o,e,n,s));return r}}function Bh(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=vi(n,i?s:null),c=!1;l?c=!0:s instanceof $?(l=Jo(n,s),c=!1):(l=$.EMPTY_NODE,c=!1);const a=Vi(new $t(l,c,!1),new $t(s,i,!1));return new $v(e,a)}return o}function Xv(t,e,n,s,i,r){const o=Bh(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Kv(o,n),qv(o,n)}function Jv(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=jt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(ia(a,n,s)),sa(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(ia(c,n,s)),sa(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!jt(t)&&r.push(new(Yv())(e._repo,e._path)),{removed:r,events:o}}function Hh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Bt(t,e){let n=null;for(const s of t.views.values())n=n||zv(s,e);return n}function Uh(t,e){if(e._queryParams.loadsAllData())return Ki(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Wh(t,e){return Uh(t,e)!=null}function jt(t){return Ki(t)!=null}function Ki(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let wi;function Zv(t){I(!wi,"__referenceConstructor has already been defined"),wi=t}function eE(){return I(wi,"Reference.ts has not been loaded"),wi}let tE=1;class oa{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=Av(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function nE(t,e,n,s,i){return yv(t.pendingWriteTree_,e,n,s,i),i?Vn(t,new cn(Yo(),e,n)):[]}function sE(t,e,n,s){vv(t.pendingWriteTree_,e,n,s);const i=de.fromObject(n);return Vn(t,new Ln(Yo(),e,i))}function tn(t,e,n=!1){const s=Ev(t.pendingWriteTree_,e);if(Cv(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(ne(),!0):Oe(s.children,o=>{r=r.set(new ue(o),!0)}),Vn(t,new mi(s.path,r,n))}else return[]}function Hs(t,e,n){return Vn(t,new cn(Qo(),e,n))}function iE(t,e,n){const s=de.fromObject(n);return Vn(t,new Ln(Qo(),e,s))}function rE(t,e){return Vn(t,new As(Qo(),e))}function oE(t,e,n){const s=nl(t,n);if(s){const i=sl(s),r=i.path,o=i.queryId,l=Be(r,e),c=new As(Xo(o),l);return il(t,r,c)}else return[]}function Ii(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Wh(o,e))){const c=Jv(o,e,n,s);Qv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,_)=>jt(_));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=aE(f);for(let m=0;m<_.length;++m){const C=_[m],N=C.query,A=Kh(t,C);t.listenProvider_.startListening(ds(N),Ps(t,N),A.hashFn,A.onComplete)}}}!h&&a.length>0&&!s&&(u?t.listenProvider_.stopListening(ds(e),null):a.forEach(f=>{const _=t.queryToTagMap.get(qi(f));t.listenProvider_.stopListening(ds(f),_)}))}uE(t,a)}return l}function $h(t,e,n,s){const i=nl(t,s);if(i!=null){const r=sl(i),o=r.path,l=r.queryId,c=Be(o,e),a=new cn(Xo(l),c,n);return il(t,o,a)}else return[]}function lE(t,e,n,s){const i=nl(t,s);if(i){const r=sl(i),o=r.path,l=r.queryId,c=Be(o,e),a=de.fromObject(n),u=new Ln(Xo(l),c,a);return il(t,o,u)}else return[]}function io(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const m=Be(f,i);r=r||Bt(_,m),o=o||jt(_)});let l=t.syncPointTree_.get(i);l?(o=o||jt(l),r=r||Bt(l,ne())):(l=new Fh,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const C=Bt(m,ne());C&&(r=r.updateImmediateChild(_,C))}));const a=Wh(l,e);if(!a&&!e._queryParams.loadsAllData()){const f=qi(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=hE();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=zi(t.pendingWriteTree_,i);let h=Xv(l,e,n,u,r,c);if(!a&&!o&&!s){const f=Uh(l,e);h=h.concat(fE(t,e,f))}return h}function jh(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Be(o,e),a=Bt(l,c);if(a)return a});return Ph(i,e,r,n,!0)}function cE(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(a,u)=>{const h=Be(a,n);s=s||Bt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Bt(i,ne()):(i=new Fh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new $t(s,!0,!1):null,l=zi(t.pendingWriteTree_,e._path),c=Bh(i,e,l,r?o.getNode():$.EMPTY_NODE,r);return Vv(c)}function Vn(t,e){return Vh(e,t.syncPointTree_,null,zi(t.pendingWriteTree_,ne()))}function Vh(t,e,n,s){if(Q(t.path))return zh(t,e,n,s);{const i=e.get(ne());n==null&&i!=null&&(n=Bt(i,ne()));let r=[];const o=Y(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=Oh(s,o);r=r.concat(Vh(l,c,a,u))}return i&&(r=r.concat(tl(i,t,s,n))),r}}function zh(t,e,n,s){const i=e.get(ne());n==null&&i!=null&&(n=Bt(i,ne()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=Oh(s,o),u=t.operationForChild(o);u&&(r=r.concat(zh(u,l,c,a)))}),i&&(r=r.concat(tl(i,t,s,n))),r}function Kh(t,e){const n=e.query,s=Ps(t,n);return{hashFn:()=>(jv(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?oE(t,n._path,s):rE(t,n._path);{const r=iy(i,n);return Ii(t,n,null,r)}}}}function Ps(t,e){const n=qi(e);return t.queryToTagMap.get(n)}function qi(t){return t._path.toString()+"$"+t._queryIdentifier}function nl(t,e){return t.tagToQueryMap.get(e)}function sl(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ue(t.substr(0,e))}}function il(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=zi(t.pendingWriteTree_,e);return tl(s,n,i,null)}function aE(t){return t.fold((e,n,s)=>{if(n&&jt(n))return[Ki(n)];{let i=[];return n&&(i=Hh(n)),Oe(s,(r,o)=>{i=i.concat(o)}),i}})}function ds(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(eE())(t._repo,t._path):t}function uE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=qi(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function hE(){return tE++}function fE(t,e,n){const s=e._path,i=Ps(t,e),r=Kh(t,n),o=t.listenProvider_.startListening(ds(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)I(!jt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!Q(a)&&u&&jt(u))return[Ki(u).query];{let f=[];return u&&(f=f.concat(Hh(u).map(_=>_.query))),Oe(h,(_,m)=>{f=f.concat(m)}),f}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening(ds(u),Ps(t,u))}}return o}/**
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
 */class rl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rl(n)}node(){return this.node_}}class ol{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new ol(this.syncTree_,n)}node(){return jh(this.syncTree_,this.path_)}}const dE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},la=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return _E(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},_E=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},qh=function(t,e,n,s){return ll(e,new ol(n,t),s)},gE=function(t,e,n){return ll(t,new rl(e),n)};function ll(t,e,n){const s=t.getPriority().val(),i=la(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=la(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Te(l,xe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Te(i))),o.forEachChild(ve,(l,c)=>{const a=ll(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
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
 */class cl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function al(t,e){let n=e instanceof ue?e:new ue(e),s=t,i=Y(n);for(;i!==null;){const r=kn(s.node.children,i)||{children:{},childCount:0};s=new cl(i,s,r),n=_e(n),i=Y(n)}return s}function zn(t){return t.node.value}function Gh(t,e){t.node.value=e,ro(t)}function Yh(t){return t.node.childCount>0}function mE(t){return zn(t)===void 0&&!Yh(t)}function Gi(t,e){Oe(t.node.children,(n,s)=>{e(new cl(n,t,s))})}function Qh(t,e,n,s){n&&!s&&e(t),Gi(t,i=>{Qh(i,e,!0,s)}),n&&s&&e(t)}function yE(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Us(t){return new ue(t.parent===null?t.name:Us(t.parent)+"/"+t.name)}function ro(t){t.parent!==null&&vE(t.parent,t.name,t)}function vE(t,e,n){const s=mE(n),i=pt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ro(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ro(t))}/**
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
 */const EE=/[\[\].#$\/\u0000-\u001F\u007F]/,CE=/[\[\].#$\u0000-\u001F\u007F]/,vr=10*1024*1024,ul=function(t){return typeof t=="string"&&t.length!==0&&!EE.test(t)},Xh=function(t){return typeof t=="string"&&t.length!==0&&!CE.test(t)},bE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xh(t)},wE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Bo(t)||t&&typeof t=="object"&&pt(t,".sv")},hl=function(t,e,n){const s=n instanceof ue?new By(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Yt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Yt(s)+" with contents = "+e.toString());if(Bo(e))throw new Error(t+"contains "+e.toString()+" "+Yt(s));if(typeof e=="string"&&e.length>vr/3&&$i(e)>vr)throw new Error(t+"contains a string greater than "+vr+" utf8 bytes "+Yt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Oe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ul(o)))throw new Error(t+" contains an invalid key ("+o+") "+Yt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Hy(s,o),hl(t,l,s),Uy(s)}),i&&r)throw new Error(t+' contains ".value" child '+Yt(s)+" in addition to actual children.")}},IE=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Ts(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ul(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Fy);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Ye(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},SE=function(t,e,n,s){if(s&&e===void 0)return;const i=Lo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Oe(e,(o,l)=>{const c=new ue(o);if(hl(i,l,ye(n,c)),jo(c)===".priority"&&!wE(l))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),IE(i,r)},Jh=function(t,e,n,s){if(!(s&&n===void 0)&&!Xh(n))throw new Error(Lo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jh(t,e,n,s)},RE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ul(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!bE(n))throw new Error(Lo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class xE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Vo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Zh(t,e,n){fl(t,n),ef(t,s=>Vo(s,e))}function dt(t,e,n){fl(t,n),ef(t,s=>Ye(s,e)||Ye(e,s))}function ef(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(NE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function NE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();rn&&Pe("event: "+n.toString()),jn(s)}}}/**
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
 */const AE="repo_interrupt",PE=25;class OE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gi(),this.transactionQueueTree_=new cl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function kE(t,e,n){if(t.stats_=Wo(t.repoInfo_),t.forceRestClient_||cy())t.server_=new _i(t.repoInfo_,(s,i,r,o)=>{ca(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>aa(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Et(t.repoInfo_,e,(s,i,r,o)=>{ca(t,s,i,r,o)},s=>{aa(t,s)},s=>{ME(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=dy(t.repoInfo_,()=>new fv(t.stats_,t.server_)),t.infoData_=new lv,t.infoSyncTree_=new oa({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Hs(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),pl(t,"connected",!1),t.serverSyncTree_=new oa({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);dt(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function DE(t){const n=t.infoData_.getNode(new ue(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dl(t){return dE({timestamp:DE(t)})}function ca(t,e,n,s,i){t.dataUpdateCount++;const r=new ue(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=ai(n,a=>xe(a));o=lE(t.serverSyncTree_,r,c,i)}else{const c=xe(n);o=$h(t.serverSyncTree_,r,c,i)}else if(s){const c=ai(n,a=>xe(a));o=iE(t.serverSyncTree_,r,c)}else{const c=xe(n);o=Hs(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Os(t,r)),dt(t.eventQueue_,l,o)}function aa(t,e){pl(t,"connected",e),e===!1&&BE(t)}function ME(t,e){Oe(e,(n,s)=>{pl(t,n,s)})}function pl(t,e,n){const s=new ue("/.info/"+e),i=xe(n);t.infoData_.updateSnapshot(s,i);const r=Hs(t.infoSyncTree_,s,i);dt(t.eventQueue_,s,r)}function tf(t){return t.nextWriteId_++}function LE(t,e,n){const s=cE(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=xe(i).withIndex(e._queryParams.getIndex());io(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Hs(t.serverSyncTree_,e._path,r);else{const l=Ps(t.serverSyncTree_,e);o=$h(t.serverSyncTree_,e._path,r,l)}return dt(t.eventQueue_,e._path,o),Ii(t.serverSyncTree_,e,n,null,!0),r},i=>(Yi(t,"get for query "+Se(e)+" failed: "+i),Promise.reject(new Error(i))))}function FE(t,e,n,s){Yi(t,"update",{path:e.toString(),value:n});let i=!0;const r=dl(t),o={};if(Oe(n,(l,c)=>{i=!1,o[l]=qh(ye(e,l),xe(c),t.serverSyncTree_,r)}),i)Pe("update() called with empty data.  Don't do anything."),ha(t,s,"ok",void 0);else{const l=tf(t),c=sE(t.serverSyncTree_,e,o,l);fl(t.eventQueue_,c),t.server_.merge(e.toString(),n,(a,u)=>{const h=a==="ok";h||$e("update at "+e+" failed: "+a);const f=tn(t.serverSyncTree_,l,!h),_=f.length>0?Os(t,e):e;dt(t.eventQueue_,_,f),ha(t,s,a,u)}),Oe(n,a=>{const u=lf(t,ye(e,a));Os(t,u)}),dt(t.eventQueue_,e,[])}}function BE(t){Yi(t,"onDisconnectEvents");const e=dl(t),n=gi();Jr(t.onDisconnect_,ne(),(i,r)=>{const o=qh(i,r,t.serverSyncTree_,e);Rh(n,i,o)});let s=[];Jr(n,ne(),(i,r)=>{s=s.concat(Hs(t.serverSyncTree_,i,r));const o=lf(t,i);Os(t,o)}),t.onDisconnect_=gi(),dt(t.eventQueue_,ne(),s)}function HE(t,e,n){let s;Y(e._path)===".info"?s=io(t.infoSyncTree_,e,n):s=io(t.serverSyncTree_,e,n),Zh(t.eventQueue_,e._path,s)}function ua(t,e,n){let s;Y(e._path)===".info"?s=Ii(t.infoSyncTree_,e,n):s=Ii(t.serverSyncTree_,e,n),Zh(t.eventQueue_,e._path,s)}function UE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AE)}function Yi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pe(n,...e)}function ha(t,e,n,s){e&&jn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function nf(t,e,n){return jh(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function _l(t,e=t.transactionQueueTree_){if(e||Qi(t,e),zn(e)){const n=rf(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WE(t,Us(e),n)}else Yh(e)&&Gi(e,n=>{_l(t,n)})}function WE(t,e,n){const s=n.map(a=>a.currentWriteId),i=nf(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Be(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{Yi(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(tn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Qi(t,al(t.transactionQueueTree_,e)),_l(t,t.transactionQueueTree_),dt(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)jn(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{$e("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}Os(t,e)}},o)}function Os(t,e){const n=sf(t,e),s=Us(n),i=rf(t,n);return $E(t,i,s),s}function $E(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Be(n,c.path);let u=!1,h;if(I(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(tn(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=PE)u=!0,h="maxretry",i=i.concat(tn(t.serverSyncTree_,c.currentWriteId,!0));else{const f=nf(t,c.path,o);c.currentInputSnapshot=f;const _=e[l].update(f.val());if(_!==void 0){hl("transaction failed: Data returned ",_,c.path);let m=xe(_);typeof _=="object"&&_!=null&&pt(_,".priority")||(m=m.updatePriority(f.getPriority()));const N=c.currentWriteId,A=dl(t),O=gE(m,f,A);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=O,c.currentWriteId=tf(t),o.splice(o.indexOf(N),1),i=i.concat(nE(t.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),i=i.concat(tn(t.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(tn(t.serverSyncTree_,c.currentWriteId,!0))}dt(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Qi(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)jn(s[l]);_l(t,t.transactionQueueTree_)}function sf(t,e){let n,s=t.transactionQueueTree_;for(n=Y(e);n!==null&&zn(s)===void 0;)s=al(s,n),e=_e(e),n=Y(e);return s}function rf(t,e){const n=[];return of(t,e,n),n.sort((s,i)=>s.order-i.order),n}function of(t,e,n){const s=zn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Gi(e,i=>{of(t,i,n)})}function Qi(t,e){const n=zn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Gh(e,n.length>0?n:void 0)}Gi(e,s=>{Qi(t,s)})}function lf(t,e){const n=Us(sf(t,e)),s=al(t.transactionQueueTree_,e);return yE(s,i=>{Er(t,i)}),Er(t,s),Qh(s,i=>{Er(t,i)}),n}function Er(t,e){const n=zn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(tn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Gh(e,void 0):n.length=r+1,dt(t.eventQueue_,Us(e),i);for(let o=0;o<s.length;o++)jn(s[o])}}/**
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
 */function jE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function VE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):$e(`Invalid query segment '${n}' in query '${t}'`)}return e}const fa=function(t,e){const n=zE(t),s=n.namespace;n.domain==="firebase.com"&&bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Zm();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new uh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ue(n.pathString)}},zE=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=jE(t.substring(u,h)));const f=VE(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const _=e.slice(0,a);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class cf{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class af{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class uf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Q(this._path)?null:jo(this._path)}get ref(){return new _t(this._repo,this._path)}get _queryIdentifier(){const e=Qc(this._queryParams),n=Ho(e);return n==="{}"?"default":n}get _queryObject(){return Qc(this._queryParams)}isEqual(e){if(e=Ms(e),!(e instanceof gl))return!1;const n=this._repo===e._repo,s=Vo(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ly(this._path)}}class _t extends gl{constructor(e,n){super(e,n,new Go,!1)}get parent(){const e=vh(this._path);return e===null?null:new _t(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Bn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ue(e),s=Si(this.ref,e);return new Bn(this._node.getChild(n),s,ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Bn(i,Si(this.ref,s),ve)))}hasChild(e){const n=new ue(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gC(t,e){return t=Ms(t),t._checkNotDeleted("ref"),e!==void 0?Si(t._root,e):t._root}function Si(t,e){return t=Ms(t),Y(t._path)===null?TE("child","path",e,!1):Jh("child","path",e,!1),new _t(t._repo,ye(t._path,e))}function mC(t,e){SE("update",e,t._path,!1);const n=new Wi;return FE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function yC(t){t=Ms(t);const e=new uf(()=>{}),n=new Xi(e);return LE(t._repo,t,n).then(s=>new Bn(s,new _t(t._repo,t._path),t._queryParams.getIndex()))}class Xi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new cf("value",this,new Bn(e.snapshotNode,new _t(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new af(this,e,n):null}matches(e){return e instanceof Xi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ml{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new af(this,e,n):null}createEvent(e,n){I(e.childName!=null,"Child events should have a childName.");const s=Si(new _t(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new cf(e.type,this,new Bn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ml?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function KE(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,h)=>{ua(t._repo,t,l),c(u,h)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new uf(n,r||void 0),l=e==="value"?new Xi(o):new ml(e,o);return HE(t._repo,t,l),()=>ua(t._repo,t,l)}function vC(t,e,n,s){return KE(t,"value",e,n,s)}Gv(_t);Zv(_t);/**
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
 */const qE="FIREBASE_DATABASE_EMULATOR_HOST",oo={};let GE=!1;function YE(t,e,n,s){t.repoInfo_=new uh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function QE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fa(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[qE]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=fa(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new Rn(Rn.OWNER):new uy(t.name,t.options,e);RE("Invalid Firebase Database URL",o),Q(o.path)||bt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=JE(l,t,u,new ay(t.name,n));return new ZE(h,t)}function XE(t,e){const n=oo[e];(!n||n[t.key]!==t)&&bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),UE(t),delete n[t.key]}function JE(t,e,n,s){let i=oo[e.name];i||(i={},oo[e.name]=i);let r=i[t.toURLString()];return r&&bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new OE(t,GE,n,s),i[t.toURLString()]=r,r}class ZE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(kE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new _t(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&bt("Cannot call "+e+" on a deleted database.")}}function eC(t=Lm(),e){const n=Om(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Ig("database");s&&tC(n,...s)}return n}function tC(t,e,n,s={}){t=Ms(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&bt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Rn(Rn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Sg(s.mockUserToken,t.app.options.projectId);r=new Rn(o)}YE(i,e,n,r)}/**
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
 */function nC(t){Gm(Mm),hi(new ws("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return QE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Sn(kc,Dc,t),Sn(kc,Dc,"esm2017")}Et.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Et.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nC();const sC={apiKey:"AIzaSyChlDtKx-SfIE42CoKHtOG9Dt9QNSzvNSU",authDomain:"design-primo.firebaseapp.com",databaseURL:"https://design-primo-default-rtdb.firebaseio.com",projectId:"design-primo",storageBucket:"design-primo.appspot.com",messagingSenderId:"554464328513",appId:"1:554464328513:web:9a184cbe0ad8ee05aeffc0"},iC=qu(sC),rC=eC(iC),oC=e_(),Ji=Kp(Jp);Ji.use(rC);Ji.use(oC);Ji.use(pg);Ji.mount("#app");export{lp as A,dC as B,wn as C,aC as D,qe as F,mu as T,bo as a,yC as b,Si as c,_C as d,No as e,ip as f,eC as g,pu as h,Ja as i,eu as j,Ge as k,fu as l,Fe as m,po as n,vC as o,dd as p,cC as q,gC as r,uC as s,fC as t,mC as u,pC as v,ns as w,hC as x,fo as y,lC as z};
