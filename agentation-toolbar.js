var iy=Object.create;var{getPrototypeOf:sy,defineProperty:Qs,getOwnPropertyNames:fy}=Object;var cy=Object.prototype.hasOwnProperty;function ay(e){return this[e]}var dy,py,Un=(e,n,t)=>{var r=e!=null&&typeof e==="object";if(r){var l=n?dy??=new WeakMap:py??=new WeakMap,u=l.get(e);if(u)return u}t=e!=null?iy(sy(e)):{};let i=n||!e||!e.__esModule?Qs(t,"default",{value:e,enumerable:!0}):t;for(let s of fy(e))if(!cy.call(i,s))Qs(i,s,{get:ay.bind(e,s),enumerable:!0});if(r)l.set(e,i);return i};var Qo=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var hy=(e)=>e;function yy(e,n){this[e]=hy.bind(null,n)}var vy=(e,n)=>{for(var t in n)Qs(e,t,{get:n[t],enumerable:!0,configurable:!0,set:yy.bind(n,t)})};var my=(e,n)=>()=>(e&&(n=e(e=0)),n);var wt=Qo((Oy)=>{var Cu=Symbol.for("react.element"),gy=Symbol.for("react.portal"),ky=Symbol.for("react.fragment"),wy=Symbol.for("react.strict_mode"),Sy=Symbol.for("react.profiler"),_y=Symbol.for("react.provider"),Cy=Symbol.for("react.context"),Ey=Symbol.for("react.forward_ref"),Ny=Symbol.for("react.suspense"),zy=Symbol.for("react.memo"),xy=Symbol.for("react.lazy"),ud=Symbol.iterator;function Py(e){if(e===null||typeof e!=="object")return null;return e=ud&&e[ud]||e["@@iterator"],typeof e==="function"?e:null}var sd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fd=Object.assign,cd={};function Ll(e,n,t){this.props=e,this.context=n,this.refs=cd,this.updater=t||sd}Ll.prototype.isReactComponent={};Ll.prototype.setState=function(e,n){if(typeof e!=="object"&&typeof e!=="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ll.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ad(){}ad.prototype=Ll.prototype;function Us(e,n,t){this.props=e,this.context=n,this.refs=cd,this.updater=t||sd}var Ws=Us.prototype=new ad;Ws.constructor=Us;fd(Ws,Ll.prototype);Ws.isPureReactComponent=!0;var od=Array.isArray,dd=Object.prototype.hasOwnProperty,Hs={current:null},pd={key:!0,ref:!0,__self:!0,__source:!0};function hd(e,n,t){var r,l={},u=null,i=null;if(n!=null)for(r in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(u=""+n.key),n)dd.call(n,r)&&!pd.hasOwnProperty(r)&&(l[r]=n[r]);var s=arguments.length-2;if(s===1)l.children=t;else if(1<s){for(var f=Array(s),v=0;v<s;v++)f[v]=arguments[v+2];l.children=f}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Cu,type:e,key:u,ref:i,props:l,_owner:Hs.current}}function Ly(e,n){return{$$typeof:Cu,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ks(e){return typeof e==="object"&&e!==null&&e.$$typeof===Cu}function Ty(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var id=/\/+/g;function Bs(e,n){return typeof e==="object"&&e!==null&&e.key!=null?Ty(""+e.key):n.toString(36)}function Uo(e,n,t,r,l){var u=typeof e;if(u==="undefined"||u==="boolean")e=null;var i=!1;if(e===null)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Cu:case gy:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Bs(i,0):r,od(l)?(t="",e!=null&&(t=e.replace(id,"$&/")+"/"),Uo(l,n,t,"",function(v){return v})):l!=null&&(Ks(l)&&(l=Ly(l,t+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(id,"$&/")+"/")+e)),n.push(l)),1;if(i=0,r=r===""?".":r+":",od(e))for(var s=0;s<e.length;s++){u=e[s];var f=r+Bs(u,s);i+=Uo(u,n,t,f,l)}else if(f=Py(e),typeof f==="function")for(e=f.call(e),s=0;!(u=e.next()).done;)u=u.value,f=r+Bs(u,s++),i+=Uo(u,n,t,f,l);else if(u==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Bo(e,n,t){if(e==null)return e;var r=[],l=0;return Uo(e,r,"","",function(u){return n.call(t,u,l++)}),r}function Fy(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){if(e._status===0||e._status===-1)e._status=1,e._result=t},function(t){if(e._status===0||e._status===-1)e._status=2,e._result=t}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Yn={current:null},Wo={transition:null},jy={ReactCurrentDispatcher:Yn,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Hs};function yd(){throw Error("act(...) is not supported in production builds of React.")}Oy.Children={map:Bo,forEach:function(e,n,t){Bo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Bo(e,function(){n++}),n},toArray:function(e){return Bo(e,function(n){return n})||[]},only:function(e){if(!Ks(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Oy.Component=Ll;Oy.Fragment=ky;Oy.Profiler=Sy;Oy.PureComponent=Us;Oy.StrictMode=wy;Oy.Suspense=Ny;Oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jy;Oy.act=yd;Oy.cloneElement=function(e,n,t){if(e===null||e===void 0)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fd({},e.props),l=e.key,u=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(u=n.ref,i=Hs.current),n.key!==void 0&&(l=""+n.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in n)dd.call(n,f)&&!pd.hasOwnProperty(f)&&(r[f]=n[f]===void 0&&s!==void 0?s[f]:n[f])}var f=arguments.length-2;if(f===1)r.children=t;else if(1<f){s=Array(f);for(var v=0;v<f;v++)s[v]=arguments[v+2];r.children=s}return{$$typeof:Cu,type:e.type,key:l,ref:u,props:r,_owner:i}};Oy.createContext=function(e){return e={$$typeof:Cy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_y,_context:e},e.Consumer=e};Oy.createElement=hd;Oy.createFactory=function(e){var n=hd.bind(null,e);return n.type=e,n};Oy.createRef=function(){return{current:null}};Oy.forwardRef=function(e){return{$$typeof:Ey,render:e}};Oy.isValidElement=Ks;Oy.lazy=function(e){return{$$typeof:xy,_payload:{_status:-1,_result:e},_init:Fy}};Oy.memo=function(e,n){return{$$typeof:zy,type:e,compare:n===void 0?null:n}};Oy.startTransition=function(e){var n=Wo.transition;Wo.transition={};try{e()}finally{Wo.transition=n}};Oy.unstable_act=yd;Oy.useCallback=function(e,n){return Yn.current.useCallback(e,n)};Oy.useContext=function(e){return Yn.current.useContext(e)};Oy.useDebugValue=function(){};Oy.useDeferredValue=function(e){return Yn.current.useDeferredValue(e)};Oy.useEffect=function(e,n){return Yn.current.useEffect(e,n)};Oy.useId=function(){return Yn.current.useId()};Oy.useImperativeHandle=function(e,n,t){return Yn.current.useImperativeHandle(e,n,t)};Oy.useInsertionEffect=function(e,n){return Yn.current.useInsertionEffect(e,n)};Oy.useLayoutEffect=function(e,n){return Yn.current.useLayoutEffect(e,n)};Oy.useMemo=function(e,n){return Yn.current.useMemo(e,n)};Oy.useReducer=function(e,n,t){return Yn.current.useReducer(e,n,t)};Oy.useRef=function(e){return Yn.current.useRef(e)};Oy.useState=function(e){return Yn.current.useState(e)};Oy.useSyncExternalStore=function(e,n,t){return Yn.current.useSyncExternalStore(e,n,t)};Oy.useTransition=function(){return Yn.current.useTransition()};Oy.version="18.3.1"});var _d=Qo((mv)=>{function Zs(e,n){var t=e.length;e.push(n);e:for(;0<t;){var r=t-1>>>1,l=e[r];if(0<Ho(l,n))e[r]=n,e[t]=l,t=r;else break e}}function Dt(e){return e.length===0?null:e[0]}function Ao(e){if(e.length===0)return null;var n=e[0],t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,l=e.length,u=l>>>1;r<u;){var i=2*(r+1)-1,s=e[i],f=i+1,v=e[f];if(0>Ho(s,t))f<l&&0>Ho(v,s)?(e[r]=v,e[f]=t,r=f):(e[r]=s,e[i]=t,r=i);else if(f<l&&0>Ho(v,t))e[r]=v,e[f]=t,r=f;else break e}}return n}function Ho(e,n){var t=e.sortIndex-n.sortIndex;return t!==0?t:e.id-n.id}if(typeof performance==="object"&&typeof performance.now==="function")As=performance,mv.unstable_now=function(){return As.now()};else Ko=Date,Js=Ko.now(),mv.unstable_now=function(){return Ko.now()-Js};var As,Ko,Js,Xt=[],Er=[],vv=1,St=null,Wn=3,Jo=!1,el=!1,Nu=!1,md=typeof setTimeout==="function"?setTimeout:null,gd=typeof clearTimeout==="function"?clearTimeout:null,vd=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ys(e){for(var n=Dt(Er);n!==null;){if(n.callback===null)Ao(Er);else if(n.startTime<=e)Ao(Er),n.sortIndex=n.expirationTime,Zs(Xt,n);else break;n=Dt(Er)}}function qs(e){if(Nu=!1,Ys(e),!el)if(Dt(Xt)!==null)el=!0,ef(bs);else{var n=Dt(Er);n!==null&&nf(qs,n.startTime-e)}}function bs(e,n){el=!1,Nu&&(Nu=!1,gd(zu),zu=-1),Jo=!0;var t=Wn;try{Ys(n);for(St=Dt(Xt);St!==null&&(!(St.expirationTime>n)||e&&!Sd());){var r=St.callback;if(typeof r==="function"){St.callback=null,Wn=St.priorityLevel;var l=r(St.expirationTime<=n);n=mv.unstable_now(),typeof l==="function"?St.callback=l:St===Dt(Xt)&&Ao(Xt),Ys(n)}else Ao(Xt);St=Dt(Xt)}if(St!==null)var u=!0;else{var i=Dt(Er);i!==null&&nf(qs,i.startTime-n),u=!1}return u}finally{St=null,Wn=t,Jo=!1}}var Yo=!1,Go=null,zu=-1,kd=5,wd=-1;function Sd(){return mv.unstable_now()-wd<kd?!1:!0}function Gs(){if(Go!==null){var e=mv.unstable_now();wd=e;var n=!0;try{n=Go(!0,e)}finally{n?Eu():(Yo=!1,Go=null)}}else Yo=!1}var Eu;if(typeof vd==="function")Eu=function(){vd(Gs)};else if(typeof MessageChannel<"u")Zo=new MessageChannel,Xs=Zo.port2,Zo.port1.onmessage=Gs,Eu=function(){Xs.postMessage(null)};else Eu=function(){md(Gs,0)};var Zo,Xs;function ef(e){Go=e,Yo||(Yo=!0,Eu())}function nf(e,n){zu=md(function(){e(mv.unstable_now())},n)}mv.unstable_IdlePriority=5;mv.unstable_ImmediatePriority=1;mv.unstable_LowPriority=4;mv.unstable_NormalPriority=3;mv.unstable_Profiling=null;mv.unstable_UserBlockingPriority=2;mv.unstable_cancelCallback=function(e){e.callback=null};mv.unstable_continueExecution=function(){el||Jo||(el=!0,ef(bs))};mv.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):kd=0<e?Math.floor(1000/e):5};mv.unstable_getCurrentPriorityLevel=function(){return Wn};mv.unstable_getFirstCallbackNode=function(){return Dt(Xt)};mv.unstable_next=function(e){switch(Wn){case 1:case 2:case 3:var n=3;break;default:n=Wn}var t=Wn;Wn=n;try{return e()}finally{Wn=t}};mv.unstable_pauseExecution=function(){};mv.unstable_requestPaint=function(){};mv.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=Wn;Wn=e;try{return n()}finally{Wn=t}};mv.unstable_scheduleCallback=function(e,n,t){var r=mv.unstable_now();switch(typeof t==="object"&&t!==null?(t=t.delay,t=typeof t==="number"&&0<t?r+t:r):t=r,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5000}return l=t+l,e={id:vv++,callback:n,priorityLevel:e,startTime:t,expirationTime:l,sortIndex:-1},t>r?(e.sortIndex=t,Zs(Er,e),Dt(Xt)===null&&e===Dt(Er)&&(Nu?(gd(zu),zu=-1):Nu=!0,nf(qs,t-r))):(e.sortIndex=l,Zs(Xt,e),el||Jo||(el=!0,ef(bs))),e};mv.unstable_shouldYield=Sd;mv.unstable_wrapCallback=function(e){var n=Wn;return function(){var t=Wn;Wn=n;try{return e.apply(this,arguments)}finally{Wn=t}}}});var sa={};vy(sa,{version:()=>V1,unstable_renderSubtreeIntoContainer:()=>D1,unstable_batchedUpdates:()=>R1,unmountComponentAtNode:()=>O1,render:()=>j1,hydrateRoot:()=>F1,hydrate:()=>T1,flushSync:()=>L1,findDOMNode:()=>P1,createRoot:()=>x1,createPortal:()=>z1,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:()=>N1});function B(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function hl(e,n){Xl(e,n),Xl(e+"Capture",n)}function Xl(e,n){Xu[e]=n;for(e=0;e<n.length;e++)Pp.add(n[e])}function Mv(e){if(Ef.call(Ed,e))return!0;if(Ef.call(Cd,e))return!1;if(Vv.test(e))return Ed[e]=!0;return Cd[e]=!0,!1}function $v(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(t!==null)return!t.acceptsBooleans;return e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-";default:return!1}}function Iv(e,n,t,r){if(n===null||typeof n>"u"||$v(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function bn(e,n,t,r,l,u,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=u,this.removeEmptyString=i}function kc(e){return e[1].toUpperCase()}function wc(e,n,t,r){var l=Qn.hasOwnProperty(n)?Qn[n]:null;if(l!==null?l.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")Iv(n,t,l,r)&&(t=null),r||l===null?Mv(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):l.mustUseProperty?e[l.propertyName]=t===null?l.type===3?!1:"":t:(n=l.attributeName,r=l.attributeNamespace,t===null?e.removeAttribute(n):(l=l.type,t=l===3||l===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t)))}function xu(e){if(e===null||typeof e!=="object")return null;return e=Nd&&e[Nd]||e["@@iterator"],typeof e==="function"?e:null}function Ru(e){if(tf===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);tf=n&&n[1]||""}return`
`+tf+e}function lf(e,n){if(!e||rf)return"";rf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(v){var r=v}Reflect.construct(e,[],n)}else{try{n.call()}catch(v){r=v}e.call(n.prototype)}else{try{throw Error()}catch(v){r=v}e()}}catch(v){if(v&&r&&typeof v.stack==="string"){for(var l=v.stack.split(`
`),u=r.stack.split(`
`),i=l.length-1,s=u.length-1;1<=i&&0<=s&&l[i]!==u[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==u[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==u[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{rf=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ru(e):""}function Qv(e){switch(e.tag){case 5:return Ru(e.type);case 16:return Ru("Lazy");case 13:return Ru("Suspense");case 19:return Ru("SuspenseList");case 0:case 2:case 15:return e=lf(e.type,!1),e;case 11:return e=lf(e.type.render,!1),e;case 1:return e=lf(e.type,!0),e;default:return""}}function Pf(e){if(e==null)return null;if(typeof e==="function")return e.displayName||e.name||null;if(typeof e==="string")return e;switch(e){case Rl:return"Fragment";case Ol:return"Portal";case Nf:return"Profiler";case Sc:return"StrictMode";case zf:return"Suspense";case xf:return"SuspenseList"}if(typeof e==="object")switch(e.$$typeof){case Tp:return(e.displayName||"Context")+".Consumer";case Lp:return(e._context.displayName||"Context")+".Provider";case _c:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cc:return n=e.displayName||null,n!==null?n:Pf(e.type)||"Memo";case zr:n=e._payload,e=e._init;try{return Pf(e(n))}catch(t){}}return null}function Bv(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pf(n);case 8:return n===Sc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n==="function")return n.displayName||n.name||null;if(typeof n==="string")return n}return null}function Qr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jp(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uv(e){var n=jp(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get==="function"&&typeof t.set==="function"){var{get:l,set:u}=t;return Object.defineProperty(e,n,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,u.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qo(e){e._valueTracker||(e._valueTracker=Uv(e))}function Op(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=jp(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch(n){return e.body}}function Lf(e,n){var t=n.checked;return vn({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function zd(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=Qr(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Rp(e,n){n=n.checked,n!=null&&wc(e,"checked",n,!1)}function Tf(e,n){Rp(e,n);var t=Qr(n.value),r=n.type;if(t!=null)if(r==="number"){if(t===0&&e.value===""||e.value!=t)e.value=""+t}else e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ff(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ff(e,n.type,Qr(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xd(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ff(e,n,t){if(n!=="number"||Ci(e.ownerDocument)!==e)t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t)}function Kl(e,n,t,r){if(e=e.options,n){n={};for(var l=0;l<t.length;l++)n["$"+t[l]]=!0;for(t=0;t<e.length;t++)l=n.hasOwnProperty("$"+e[t].value),e[t].selected!==l&&(e[t].selected=l),l&&r&&(e[t].defaultSelected=!0)}else{t=""+Qr(t),n=null;for(l=0;l<e.length;l++){if(e[l].value===t){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}n!==null||e[l].disabled||(n=e[l])}n!==null&&(n.selected=!0)}}function jf(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(B(91));return vn({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pd(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(B(92));if(Du(t)){if(1<t.length)throw Error(B(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:Qr(t)}}function Dp(e,n){var t=Qr(n.value),r=Qr(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function Ld(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Vp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Vp(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}function qu(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}function $p(e,n,t){return n==null||typeof n==="boolean"||n===""?"":t||typeof n!=="number"||n===0||Uu.hasOwnProperty(e)&&Uu[e]?(""+n).trim():n+"px"}function Ip(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,l=$p(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,l):e[t]=l}}function Rf(e,n){if(n){if(Hv[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(B(60));if(typeof n.dangerouslySetInnerHTML!=="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(B(61))}if(n.style!=null&&typeof n.style!=="object")throw Error(B(62))}}function Df(e,n){if(e.indexOf("-")===-1)return typeof n.is==="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function Td(e){if(e=mo(e)){if(typeof Mf!=="function")throw Error(B(280));var n=e.stateNode;n&&(n=Xi(n),Mf(e.stateNode,e.type,n))}}function Qp(e){Gl?Zl?Zl.push(e):Zl=[e]:Gl=e}function Bp(){if(Gl){var e=Gl,n=Zl;if(Zl=Gl=null,Td(e),n)for(e=0;e<n.length;e++)Td(n[e])}}function Up(e,n){return e(n)}function Wp(){}function Hp(e,n,t){if(uf)return e(n,t);uf=!0;try{return Up(e,n,t)}finally{if(uf=!1,Gl!==null||Zl!==null)Wp(),Bp()}}function bu(e,n){var t=e.stateNode;if(t===null)return null;var r=Xi(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!=="function")throw Error(B(231,n,typeof t));return t}function Kv(e,n,t,r,l,u,i,s,f){var v=Array.prototype.slice.call(arguments,3);try{n.apply(t,v)}catch(y){this.onError(y)}}function Zv(e,n,t,r,l,u,i,s,f){Wu=!1,Ei=null,Kv.apply(Gv,arguments)}function Av(e,n,t,r,l,u,i,s,f){if(Zv.apply(this,arguments),Wu){if(Wu){var v=Ei;Wu=!1,Ei=null}else throw Error(B(198));Ni||(Ni=!0,If=v)}}function yl(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Kp(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Fd(e){if(yl(e)!==e)throw Error(B(188))}function Jv(e){var n=e.alternate;if(!n){if(n=yl(e),n===null)throw Error(B(188));return n!==e?null:e}for(var t=e,r=n;;){var l=t.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){t=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===t)return Fd(l),e;if(u===r)return Fd(l),n;u=u.sibling}throw Error(B(188))}if(t.return!==r.return)t=l,r=u;else{for(var i=!1,s=l.child;s;){if(s===t){i=!0,t=l,r=u;break}if(s===r){i=!0,r=l,t=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===t){i=!0,t=u,r=l;break}if(s===r){i=!0,r=u,t=l;break}s=s.sibling}if(!i)throw Error(B(189))}}if(t.alternate!==r)throw Error(B(190))}if(t.tag!==3)throw Error(B(188));return t.stateNode.current===t?e:n}function Gp(e){return e=Jv(e),e!==null?Zp(e):null}function Zp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Zp(e);if(n!==null)return n;e=e.sibling}return null}function em(e){if(nr&&typeof nr.onCommitFiberRoot==="function")try{nr.onCommitFiberRoot(Zi,e,void 0,(e.current.flags&128)===128)}catch(n){}}function rm(e){return e>>>=0,e===0?32:31-(nm(e)/tm|0)|0}function Vu(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xi(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,l=e.suspendedLanes,u=e.pingedLanes,i=t&268435455;if(i!==0){var s=i&~l;s!==0?r=Vu(s):(u&=i,u!==0&&(r=Vu(u)))}else i=t&~l,i!==0?r=Vu(i):u!==0&&(r=Vu(u));if(r===0)return 0;if(n!==0&&n!==r&&(n&l)===0&&(l=r&-r,u=n&-n,l>=u||l===16&&(u&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-Qt(n),l=1<<t,r|=e[t],n&=~l;return r}function lm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5000;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function um(e,n){for(var{suspendedLanes:t,pingedLanes:r,expirationTimes:l,pendingLanes:u}=e;0<u;){var i=31-Qt(u),s=1<<i,f=l[i];if(f===-1){if((s&t)===0||(s&r)!==0)l[i]=lm(s,n)}else f<=n&&(e.expiredLanes|=s);u&=~s}}function Qf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xp(){var e=ei;return ei<<=1,(ei&4194240)===0&&(ei=64),e}function of(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function yo(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Qt(n),e[n]=t}function om(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var l=31-Qt(t),u=1<<l;n[l]=0,r[l]=-1,e[l]=-1,t&=~u}}function zc(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-Qt(t),l=1<<r;l&n|e[r]&n&&(e[r]|=n),t&=~l}}function qp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}function Od(e,n){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(n.pointerId)}}function Pu(e,n,t,r,l,u){if(e===null||e.nativeEvent!==u)return e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},n!==null&&(n=mo(n),n!==null&&xc(n)),e;return e.eventSystemFlags|=r,n=e.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),e}function sm(e,n,t,r,l){switch(n){case"focusin":return jr=Pu(jr,e,n,t,r,l),!0;case"dragenter":return Or=Pu(Or,e,n,t,r,l),!0;case"mouseover":return Rr=Pu(Rr,e,n,t,r,l),!0;case"pointerover":var u=l.pointerId;return eo.set(u,Pu(eo.get(u)||null,e,n,t,r,l)),!0;case"gotpointercapture":return u=l.pointerId,no.set(u,Pu(no.get(u)||null,e,n,t,r,l)),!0}return!1}function r0(e){var n=ll(e.target);if(n!==null){var t=yl(n);if(t!==null){if(n=t.tag,n===13){if(n=Kp(t),n!==null){e.blockedOn=n,t0(e.priority,function(){e0(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function di(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Uf(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Vf=r,t.target.dispatchEvent(r),Vf=null}else return n=mo(t),n!==null&&xc(n),e.blockedOn=t,!1;n.shift()}return!0}function Rd(e,n,t){di(e)&&t.delete(n)}function fm(){Bf=!1,jr!==null&&di(jr)&&(jr=null),Or!==null&&di(Or)&&(Or=null),Rr!==null&&di(Rr)&&(Rr=null),eo.forEach(Rd),no.forEach(Rd)}function Lu(e,n){e.blockedOn===n&&(e.blockedOn=null,Bf||(Bf=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,fm)))}function to(e){function n(l){return Lu(l,e)}if(0<ti.length){Lu(ti[0],e);for(var t=1;t<ti.length;t++){var r=ti[t];r.blockedOn===e&&(r.blockedOn=null)}}jr!==null&&Lu(jr,e),Or!==null&&Lu(Or,e),Rr!==null&&Lu(Rr,e),eo.forEach(n),no.forEach(n);for(t=0;t<Pr.length;t++)r=Pr[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pr.length&&(t=Pr[0],t.blockedOn===null);)r0(t),t.blockedOn===null&&Pr.shift()}function cm(e,n,t,r){var l=be,u=Al.transition;Al.transition=null;try{be=1,Pc(e,n,t,r)}finally{be=l,Al.transition=u}}function am(e,n,t,r){var l=be,u=Al.transition;Al.transition=null;try{be=4,Pc(e,n,t,r)}finally{be=l,Al.transition=u}}function Pc(e,n,t,r){if(Pi){var l=Uf(e,n,t,r);if(l===null)pf(e,n,r,Li,t),Od(e,r);else if(sm(l,e,n,t,r))r.stopPropagation();else if(Od(e,r),n&4&&-1<im.indexOf(e)){for(;l!==null;){var u=mo(l);if(u!==null&&bp(u),u=Uf(e,n,t,r),u===null&&pf(e,n,r,Li,t),u===l)break;l=u}l!==null&&r.stopPropagation()}else pf(e,n,r,null,t)}}function Uf(e,n,t,r){if(Li=null,e=Ec(r),e=ll(e),e!==null)if(n=yl(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Kp(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Li=e,null}function l0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qv()){case Nc:return 1;case Jp:return 4;case zi:case bv:return 16;case Yp:return 536870912;default:return 16}default:return 16}}function u0(){if(pi)return pi;var e,n=Lc,t=n.length,r,l="value"in Tr?Tr.value:Tr.textContent,u=l.length;for(e=0;e<t&&n[e]===l[e];e++);var i=t-e;for(r=1;r<=i&&n[t-r]===l[u-r];r++);return pi=l.slice(e,1<r?1-r:void 0)}function hi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ri(){return!0}function Dd(){return!1}function ht(e){function n(t,r,l,u,i){this._reactName=t,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ri:Dd,this.isPropagationStopped=Dd,this}return vn(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!=="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ri)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!=="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ri)},persist:function(){},isPersistent:ri}),n}function Em(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cm[e])?!!n[e]:!1}function Fc(){return Em}function i0(e,n){switch(e){case"keyup":return Rm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function s0(e){return e=e.detail,typeof e==="object"&&"data"in e?e.data:null}function Vm(e,n){switch(e){case"compositionend":return s0(n);case"keypress":if(n.which!==32)return null;return Qd=!0,Id;case"textInput":return e=n.data,e===Id&&Qd?null:e;default:return null}}function Mm(e,n){if(Dl)return e==="compositionend"||!jc&&i0(e,n)?(e=u0(),pi=Lc=Tr=null,Dl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return o0&&n.locale!=="ko"?null:n.data;default:return null}}function Bd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$m[e.type]:n==="textarea"?!0:!1}function f0(e,n,t,r){Qp(r),n=Ti(n,"onChange"),0<n.length&&(t=new Tc("onChange","change",null,t,r),e.push({event:t,listeners:n}))}function Im(e){w0(e,0)}function Ji(e){var n=$l(e);if(Op(n))return e}function Qm(e,n){if(e==="change")return n}function Ud(){Ku&&(Ku.detachEvent("onpropertychange",a0),ro=Ku=null)}function a0(e){if(e.propertyName==="value"&&Ji(ro)){var n=[];f0(n,ro,e,Ec(e)),Hp(Im,n)}}function Bm(e,n,t){e==="focusin"?(Ud(),Ku=n,ro=t,Ku.attachEvent("onpropertychange",a0)):e==="focusout"&&Ud()}function Um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ji(ro)}function Wm(e,n){if(e==="click")return Ji(n)}function Hm(e,n){if(e==="input"||e==="change")return Ji(n)}function Km(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}function lo(e,n){if(Ut(e,n))return!0;if(typeof e!=="object"||e===null||typeof n!=="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var l=t[r];if(!Ef.call(n,l)||!Ut(e[l],n[l]))return!1}return!0}function Wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hd(e,n){var t=Wd(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Wd(t)}}function d0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?d0(e,n.parentNode):("contains"in e)?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function p0(){for(var e=window,n=Ci();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href==="string"}catch(r){t=!1}if(t)e=n.contentWindow;else break;n=Ci(e.document)}return n}function Oc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Gm(e){var n=p0(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&d0(t.ownerDocument.documentElement,t)){if(r!==null&&Oc(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var l=t.textContent.length,u=Math.min(r.start,l);r=r.end===void 0?u:Math.min(r.end,l),!e.extend&&u>r&&(l=r,r=u,u=l),l=Hd(t,u);var i=Hd(t,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(l.node,l.offset),e.removeAllRanges(),u>r?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}n=[];for(e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});typeof t.focus==="function"&&t.focus();for(t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}function Kd(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Hf||Vl==null||Vl!==Ci(r)||(r=Vl,("selectionStart"in r)&&Oc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gu&&lo(Gu,r)||(Gu=r,r=Ti(Wf,"onSelect"),0<r.length&&(n=new Tc("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Vl)))}function li(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}function Yi(e){if(af[e])return af[e];if(!Ml[e])return e;var n=Ml[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in h0)return af[e]=n[t];return e}function Ur(e,n){k0.set(e,n),hl(n,[e])}function Zd(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Av(r,n,void 0,e),e.currentTarget=null}function w0(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],l=r.event;r=r.listeners;e:{var u=void 0;if(n)for(var i=r.length-1;0<=i;i--){var s=r[i],f=s.instance,v=s.currentTarget;if(s=s.listener,f!==u&&l.isPropagationStopped())break e;Zd(l,s,v),u=f}else for(i=0;i<r.length;i++){if(s=r[i],f=s.instance,v=s.currentTarget,s=s.listener,f!==u&&l.isPropagationStopped())break e;Zd(l,s,v),u=f}}}if(Ni)throw e=If,Ni=!1,If=null,e}function sn(e,n){var t=n[Xf];t===void 0&&(t=n[Xf]=new Set);var r=e+"__bubble";t.has(r)||(S0(n,e,2,!1),t.add(r))}function df(e,n,t){var r=0;n&&(r|=4),S0(t,e,r,n)}function uo(e){if(!e[ui]){e[ui]=!0,Pp.forEach(function(t){t!=="selectionchange"&&(Am.has(t)||df(t,!1,e),df(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ui]||(n[ui]=!0,df("selectionchange",!1,n))}}function S0(e,n,t,r){switch(l0(n)){case 1:var l=cm;break;case 4:l=am;break;default:l=Pc}t=l.bind(null,n,t,e),l=void 0,!$f||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(n,t,{capture:!0,passive:l}):e.addEventListener(n,t,!0):l!==void 0?e.addEventListener(n,t,{passive:l}):e.addEventListener(n,t,!1)}function pf(e,n,t,r,l){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var f=i.tag;if(f===3||f===4){if(f=i.stateNode.containerInfo,f===l||f.nodeType===8&&f.parentNode===l)return}i=i.return}for(;s!==null;){if(i=ll(s),i===null)return;if(f=i.tag,f===5||f===6){r=u=i;continue e}s=s.parentNode}}r=r.return}Hp(function(){var v=u,y=Ec(t),_=[];e:{var g=k0.get(e);if(g!==void 0){var F=Tc,E=e;switch(e){case"keypress":if(hi(t)===0)break e;case"keydown":case"keyup":F=zm;break;case"focusin":E="focus",F=cf;break;case"focusout":E="blur",F=cf;break;case"beforeblur":case"afterblur":F=cf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=hm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=Lm;break;case y0:case v0:case m0:F=mm;break;case g0:F=Fm;break;case"scroll":F=dm;break;case"wheel":F=Om;break;case"copy":case"cut":case"paste":F=km;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=$d}var L=(n&4)!==0,x=!L&&e==="scroll",p=L?g!==null?g+"Capture":null:g;L=[];for(var m=v,S;m!==null;){S=m;var T=S.stateNode;if(S.tag===5&&T!==null&&(S=T,p!==null&&(T=bu(m,p),T!=null&&L.push(oo(m,T,S)))),x)break;m=m.return}0<L.length&&(g=new F(g,E,null,t,y),_.push({event:g,listeners:L}))}}if((n&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",g&&t!==Vf&&(E=t.relatedTarget||t.fromElement)&&(ll(E)||E[yr]))break e;if(F||g){if(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,F){if(E=t.relatedTarget||t.toElement,F=v,E=E?ll(E):null,E!==null&&(x=yl(E),E!==x||E.tag!==5&&E.tag!==6))E=null}else F=null,E=v;if(F!==E){if(L=Vd,T="onMouseLeave",p="onMouseEnter",m="mouse",e==="pointerout"||e==="pointerover")L=$d,T="onPointerLeave",p="onPointerEnter",m="pointer";if(x=F==null?g:$l(F),S=E==null?g:$l(E),g=new L(T,m+"leave",F,t,y),g.target=x,g.relatedTarget=S,T=null,ll(y)===v&&(L=new L(p,m+"enter",E,t,y),L.target=S,L.relatedTarget=x,T=L),x=T,F&&E)n:{L=F,p=E,m=0;for(S=L;S;S=Fl(S))m++;S=0;for(T=p;T;T=Fl(T))S++;for(;0<m-S;)L=Fl(L),m--;for(;0<S-m;)p=Fl(p),S--;for(;m--;){if(L===p||p!==null&&L===p.alternate)break n;L=Fl(L),p=Fl(p)}L=null}else L=null;F!==null&&Ad(_,g,F,L,!1),E!==null&&x!==null&&Ad(_,x,E,L,!0)}}}e:{if(g=v?$l(v):window,F=g.nodeName&&g.nodeName.toLowerCase(),F==="select"||F==="input"&&g.type==="file")var U=Qm;else if(Bd(g))if(c0)U=Hm;else{U=Um;var G=Bm}else(F=g.nodeName)&&F.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=Wm);if(U&&(U=U(e,v))){f0(_,U,t,y);break e}G&&G(e,g,v),e==="focusout"&&(G=g._wrapperState)&&G.controlled&&g.type==="number"&&Ff(g,"number",g.value)}switch(G=v?$l(v):window,e){case"focusin":if(Bd(G)||G.contentEditable==="true")Vl=G,Wf=v,Gu=null;break;case"focusout":Gu=Wf=Vl=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,Kd(_,t,y);break;case"selectionchange":if(Zm)break;case"keydown":case"keyup":Kd(_,t,y)}var D;if(jc)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Dl?i0(e,t)&&(A="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(A="onCompositionStart");if(A&&(o0&&t.locale!=="ko"&&(Dl||A!=="onCompositionStart"?A==="onCompositionEnd"&&Dl&&(D=u0()):(Tr=y,Lc=("value"in Tr)?Tr.value:Tr.textContent,Dl=!0)),G=Ti(v,A),0<G.length&&(A=new Md(A,e,null,t,y),_.push({event:A,listeners:G}),D?A.data=D:(D=s0(t),D!==null&&(A.data=D)))),D=Dm?Vm(e,t):Mm(e,t))v=Ti(v,"onBeforeInput"),0<v.length&&(y=new Md("onBeforeInput","beforeinput",null,t,y),_.push({event:y,listeners:v}),y.data=D)}w0(_,n)})}function oo(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ti(e,n){for(var t=n+"Capture",r=[];e!==null;){var l=e,u=l.stateNode;l.tag===5&&u!==null&&(l=u,u=bu(e,t),u!=null&&r.unshift(oo(e,u,l)),u=bu(e,n),u!=null&&r.push(oo(e,u,l))),e=e.return}return r}function Fl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e?e:null}function Ad(e,n,t,r,l){for(var u=n._reactName,i=[];t!==null&&t!==r;){var s=t,f=s.alternate,v=s.stateNode;if(f!==null&&f===r)break;s.tag===5&&v!==null&&(s=v,l?(f=bu(t,u),f!=null&&i.unshift(oo(t,f,s))):l||(f=bu(t,u),f!=null&&i.push(oo(t,f,s)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}function Jd(e){return(typeof e==="string"?e:""+e).replace(Jm,`
`).replace(Ym,"")}function oi(e,n,t){if(n=Jd(n),Jd(e)!==n&&t)throw Error(B(425))}function Fi(){}function Jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children==="string"||typeof n.children==="number"||typeof n.dangerouslySetInnerHTML==="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}function bm(e){setTimeout(function(){throw e})}function hf(e,n){var t=n,r=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(r===0){e.removeChild(l),to(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=l}while(t);to(n)}function Dr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Xd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function ll(e){var n=e[er];if(n)return n;for(var t=e.parentNode;t;){if(n=t[yr]||t[er]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Xd(e);e!==null;){if(t=e[er])return t;e=Xd(e)}return n}e=t,t=e.parentNode}return null}function mo(e){return e=e[er]||e[yr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $l(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function Xi(e){return e[io]||null}function Wr(e){return{current:e}}function fn(e){0>Il||(e.current=qf[Il],qf[Il]=null,Il--)}function on(e,n){Il++,qf[Il]=e.current,e.current=n}function ql(e,n){var t=e.type.contextTypes;if(!t)return Br;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var l={},u;for(u in t)l[u]=n[u];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=l),l}function st(e){return e=e.childContextTypes,e!==null&&e!==void 0}function ji(){fn(it),fn(Zn)}function qd(e,n,t){if(Zn.current!==Br)throw Error(B(168));on(Zn,n),on(it,t)}function _0(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!=="function")return t;r=r.getChildContext();for(var l in r)if(!(l in n))throw Error(B(108,Bv(e)||"Unknown",l));return vn({},t,r)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Br,fl=Zn.current,on(Zn,e),on(it,it.current),!0}function bd(e,n,t){var r=e.stateNode;if(!r)throw Error(B(169));t?(e=_0(e,n,fl),r.__reactInternalMemoizedMergedChildContext=e,fn(it),fn(Zn),on(Zn,e)):fn(it),on(it,t)}function C0(e){cr===null?cr=[e]:cr.push(e)}function tg(e){qi=!0,C0(e)}function Hr(){if(!yf&&cr!==null){yf=!0;var e=0,n=be;try{var t=cr;for(be=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}cr=null,qi=!1}catch(l){throw cr!==null&&(cr=cr.slice(e+1)),Ap(Nc,Hr),l}finally{be=n,yf=!1}}return null}function tl(e,n){Ql[Bl++]=Di,Ql[Bl++]=Ri,Ri=e,Di=n}function E0(e,n,t){_t[Ct++]=ar,_t[Ct++]=dr,_t[Ct++]=cl,cl=e;var r=ar;e=dr;var l=32-Qt(r)-1;r&=~(1<<l),t+=1;var u=32-Qt(n)+l;if(30<u){var i=l-l%5;u=(r&(1<<i)-1).toString(32),r>>=i,l-=i,ar=1<<32-Qt(n)+l|t<<l|r,dr=u+e}else ar=1<<u|t<<l|r,dr=e}function Rc(e){e.return!==null&&(tl(e,1),E0(e,1,0))}function Dc(e){for(;e===Ri;)Ri=Ql[--Bl],Ql[Bl]=null,Di=Ql[--Bl],Ql[Bl]=null;for(;e===cl;)cl=_t[--Ct],_t[Ct]=null,dr=_t[--Ct],_t[Ct]=null,ar=_t[--Ct],_t[Ct]=null}function N0(e,n){var t=Et(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ep(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,pt=e,dt=Dr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,pt=e,dt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=cl!==null?{id:ar,overflow:dr}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Et(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,pt=e,dt=null,!0):!1;default:return!1}}function bf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ec(e){if(cn){var n=dt;if(n){var t=n;if(!ep(e,n)){if(bf(e))throw Error(B(418));n=Dr(t.nextSibling);var r=pt;n&&ep(e,n)?N0(r,t):(e.flags=e.flags&-4097|2,cn=!1,pt=e)}}else{if(bf(e))throw Error(B(418));e.flags=e.flags&-4097|2,cn=!1,pt=e}}}function np(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function ii(e){if(e!==pt)return!1;if(!cn)return np(e),cn=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Jf(e.type,e.memoizedProps)),n&&(n=dt)){if(bf(e))throw z0(),Error(B(418));for(;n;)N0(e,n),n=Dr(n.nextSibling)}if(np(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{e=e.nextSibling;for(n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){dt=Dr(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}dt=null}}else dt=pt?Dr(e.stateNode.nextSibling):null;return!0}function z0(){for(var e=dt;e;)e=Dr(e.nextSibling)}function bl(){dt=pt=null,cn=!1}function Vc(e){It===null?It=[e]:It.push(e)}function Fu(e,n,t){if(e=t.ref,e!==null&&typeof e!=="function"&&typeof e!=="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(B(309));var r=t.stateNode}if(!r)throw Error(B(147,e));var l=r,u=""+e;if(n!==null&&n.ref!==null&&typeof n.ref==="function"&&n.ref._stringRef===u)return n.ref;return n=function(i){var s=l.refs;i===null?delete s[u]:s[u]=i},n._stringRef=u,n}if(typeof e!=="string")throw Error(B(284));if(!t._owner)throw Error(B(290,e))}return e}function si(e,n){throw e=Object.prototype.toString.call(n),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function tp(e){var n=e._init;return n(e._payload)}function x0(e){function n(p,m){if(e){var S=p.deletions;S===null?(p.deletions=[m],p.flags|=16):S.push(m)}}function t(p,m){if(!e)return null;for(;m!==null;)n(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function l(p,m){return p=Ir(p,m),p.index=0,p.sibling=null,p}function u(p,m,S){if(p.index=S,!e)return p.flags|=1048576,m;if(S=p.alternate,S!==null)return S=S.index,S<m?(p.flags|=2,m):S;return p.flags|=2,m}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,m,S,T){if(m===null||m.tag!==6)return m=_f(S,p.mode,T),m.return=p,m;return m=l(m,S),m.return=p,m}function f(p,m,S,T){var U=S.type;if(U===Rl)return y(p,m,S.props.children,T,S.key);if(m!==null&&(m.elementType===U||typeof U==="object"&&U!==null&&U.$$typeof===zr&&tp(U)===m.type))return T=l(m,S.props),T.ref=Fu(p,m,S),T.return=p,T;return T=_i(S.type,S.key,S.props,null,p.mode,T),T.ref=Fu(p,m,S),T.return=p,T}function v(p,m,S,T){if(m===null||m.tag!==4||m.stateNode.containerInfo!==S.containerInfo||m.stateNode.implementation!==S.implementation)return m=Cf(S,p.mode,T),m.return=p,m;return m=l(m,S.children||[]),m.return=p,m}function y(p,m,S,T,U){if(m===null||m.tag!==7)return m=sl(S,p.mode,T,U),m.return=p,m;return m=l(m,S),m.return=p,m}function _(p,m,S){if(typeof m==="string"&&m!==""||typeof m==="number")return m=_f(""+m,p.mode,S),m.return=p,m;if(typeof m==="object"&&m!==null){switch(m.$$typeof){case Xo:return S=_i(m.type,m.key,m.props,null,p.mode,S),S.ref=Fu(p,null,m),S.return=p,S;case Ol:return m=Cf(m,p.mode,S),m.return=p,m;case zr:var T=m._init;return _(p,T(m._payload),S)}if(Du(m)||xu(m))return m=sl(m,p.mode,S,null),m.return=p,m;si(p,m)}return null}function g(p,m,S,T){var U=m!==null?m.key:null;if(typeof S==="string"&&S!==""||typeof S==="number")return U!==null?null:s(p,m,""+S,T);if(typeof S==="object"&&S!==null){switch(S.$$typeof){case Xo:return S.key===U?f(p,m,S,T):null;case Ol:return S.key===U?v(p,m,S,T):null;case zr:return U=S._init,g(p,m,U(S._payload),T)}if(Du(S)||xu(S))return U!==null?null:y(p,m,S,T,null);si(p,S)}return null}function F(p,m,S,T,U){if(typeof T==="string"&&T!==""||typeof T==="number")return p=p.get(S)||null,s(m,p,""+T,U);if(typeof T==="object"&&T!==null){switch(T.$$typeof){case Xo:return p=p.get(T.key===null?S:T.key)||null,f(m,p,T,U);case Ol:return p=p.get(T.key===null?S:T.key)||null,v(m,p,T,U);case zr:var G=T._init;return F(p,m,S,G(T._payload),U)}if(Du(T)||xu(T))return p=p.get(S)||null,y(m,p,T,U,null);si(m,T)}return null}function E(p,m,S,T){for(var U=null,G=null,D=m,A=m=0,ye=null;D!==null&&A<S.length;A++){D.index>A?(ye=D,D=null):ye=D.sibling;var J=g(p,D,S[A],T);if(J===null){D===null&&(D=ye);break}e&&D&&J.alternate===null&&n(p,D),m=u(J,m,A),G===null?U=J:G.sibling=J,G=J,D=ye}if(A===S.length)return t(p,D),cn&&tl(p,A),U;if(D===null){for(;A<S.length;A++)D=_(p,S[A],T),D!==null&&(m=u(D,m,A),G===null?U=D:G.sibling=D,G=D);return cn&&tl(p,A),U}for(D=r(p,D);A<S.length;A++)ye=F(D,p,A,S[A],T),ye!==null&&(e&&ye.alternate!==null&&D.delete(ye.key===null?A:ye.key),m=u(ye,m,A),G===null?U=ye:G.sibling=ye,G=ye);return e&&D.forEach(function(ae){return n(p,ae)}),cn&&tl(p,A),U}function L(p,m,S,T){var U=xu(S);if(typeof U!=="function")throw Error(B(150));if(S=U.call(S),S==null)throw Error(B(151));for(var G=U=null,D=m,A=m=0,ye=null,J=S.next();D!==null&&!J.done;A++,J=S.next()){D.index>A?(ye=D,D=null):ye=D.sibling;var ae=g(p,D,J.value,T);if(ae===null){D===null&&(D=ye);break}e&&D&&ae.alternate===null&&n(p,D),m=u(ae,m,A),G===null?U=ae:G.sibling=ae,G=ae,D=ye}if(J.done)return t(p,D),cn&&tl(p,A),U;if(D===null){for(;!J.done;A++,J=S.next())J=_(p,J.value,T),J!==null&&(m=u(J,m,A),G===null?U=J:G.sibling=J,G=J);return cn&&tl(p,A),U}for(D=r(p,D);!J.done;A++,J=S.next())J=F(D,p,A,J.value,T),J!==null&&(e&&J.alternate!==null&&D.delete(J.key===null?A:J.key),m=u(J,m,A),G===null?U=J:G.sibling=J,G=J);return e&&D.forEach(function(Ke){return n(p,Ke)}),cn&&tl(p,A),U}function x(p,m,S,T){if(typeof S==="object"&&S!==null&&S.type===Rl&&S.key===null&&(S=S.props.children),typeof S==="object"&&S!==null){switch(S.$$typeof){case Xo:e:{for(var U=S.key,G=m;G!==null;){if(G.key===U){if(U=S.type,U===Rl){if(G.tag===7){t(p,G.sibling),m=l(G,S.props.children),m.return=p,p=m;break e}}else if(G.elementType===U||typeof U==="object"&&U!==null&&U.$$typeof===zr&&tp(U)===G.type){t(p,G.sibling),m=l(G,S.props),m.ref=Fu(p,G,S),m.return=p,p=m;break e}t(p,G);break}else n(p,G);G=G.sibling}S.type===Rl?(m=sl(S.props.children,p.mode,T,S.key),m.return=p,p=m):(T=_i(S.type,S.key,S.props,null,p.mode,T),T.ref=Fu(p,m,S),T.return=p,p=T)}return i(p);case Ol:e:{for(G=S.key;m!==null;){if(m.key===G)if(m.tag===4&&m.stateNode.containerInfo===S.containerInfo&&m.stateNode.implementation===S.implementation){t(p,m.sibling),m=l(m,S.children||[]),m.return=p,p=m;break e}else{t(p,m);break}else n(p,m);m=m.sibling}m=Cf(S,p.mode,T),m.return=p,p=m}return i(p);case zr:return G=S._init,x(p,m,G(S._payload),T)}if(Du(S))return E(p,m,S,T);if(xu(S))return L(p,m,S,T);si(p,S)}return typeof S==="string"&&S!==""||typeof S==="number"?(S=""+S,m!==null&&m.tag===6?(t(p,m.sibling),m=l(m,S),m.return=p,p=m):(t(p,m),m=_f(S,p.mode,T),m.return=p,p=m),i(p)):t(p,m)}return x}function $c(){Mc=Ul=Mi=null}function Ic(e){var n=Vi.current;fn(Vi),e._currentValue=n}function nc(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Jl(e,n){Mi=e,Mc=Ul=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(ot=!0),e.firstContext=null)}function zt(e){var n=e._currentValue;if(Mc!==e)if(e={context:e,memoizedValue:n,next:null},Ul===null){if(Mi===null)throw Error(B(308));Ul=e,Mi.dependencies={lanes:0,firstContext:e}}else Ul=Ul.next=e;return n}function Qc(e){ul===null?ul=[e]:ul.push(e)}function L0(e,n,t,r){var l=n.interleaved;return l===null?(t.next=t,Qc(n)):(t.next=l.next,l.next=t),n.interleaved=t,vr(e,r)}function vr(e,n){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),t=e;for(e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}function Bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function T0(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pr(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Vr(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,vr(e,t)}return l=r.interleaved,l===null?(n.next=n,Qc(r)):(n.next=l.next,l.next=n),r.interleaved=n,vr(e,t)}function vi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zc(e,t)}}function rp(e,n){var{updateQueue:t,alternate:r}=e;if(r!==null&&(r=r.updateQueue,t===r)){var l=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};u===null?l=u=i:u=u.next=i,t=t.next}while(t!==null);u===null?l=u=n:u=u.next=n}else l=u=n;t={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function $i(e,n,t,r){var l=e.updateQueue;xr=!1;var{firstBaseUpdate:u,lastBaseUpdate:i}=l,s=l.shared.pending;if(s!==null){l.shared.pending=null;var f=s,v=f.next;f.next=null,i===null?u=v:i.next=v,i=f;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==i&&(s===null?y.firstBaseUpdate=v:s.next=v,y.lastBaseUpdate=f))}if(u!==null){var _=l.baseState;i=0,y=v=f=null,s=u;do{var{lane:g,eventTime:F}=s;if((r&g)===g){y!==null&&(y=y.next={eventTime:F,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var E=e,L=s;switch(g=n,F=t,L.tag){case 1:if(E=L.payload,typeof E==="function"){_=E.call(F,_,g);break e}_=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=L.payload,g=typeof E==="function"?E.call(F,_,g):E,g===null||g===void 0)break e;_=vn({},_,g);break e;case 2:xr=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[s]:g.push(s))}else F={eventTime:F,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(v=y=F,f=_):y=y.next=F,i|=g;if(s=s.next,s===null)if(s=l.shared.pending,s===null)break;else g=s,s=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}while(1);if(y===null&&(f=_),l.baseState=f,l.firstBaseUpdate=v,l.lastBaseUpdate=y,n=l.shared.interleaved,n!==null){l=n;do i|=l.lane,l=l.next;while(l!==n)}else u===null&&(l.shared.lanes=0);dl|=i,e.lanes=i,e.memoizedState=_}}function lp(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],l=r.callback;if(l!==null){if(r.callback=null,r=t,typeof l!=="function")throw Error(B(191,l));l.call(r)}}}function ol(e){if(e===go)throw Error(B(174));return e}function Uc(e,n){switch(on(fo,n),on(so,e),on(tr,go),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Of(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Of(n,e)}fn(tr),on(tr,n)}function nu(){fn(tr),fn(so),fn(fo)}function F0(e){ol(fo.current);var n=ol(tr.current),t=Of(n,e.type);n!==t&&(on(so,e),on(tr,t))}function Wc(e){so.current===e&&(fn(tr),fn(so))}function Ii(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Hc(){for(var e=0;e<vf.length;e++)vf[e]._workInProgressVersionPrimary=null;vf.length=0}function Hn(){throw Error(B(321))}function Kc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Ut(e[t],n[t]))return!1;return!0}function Gc(e,n,t,r,l,u){if(al=u,yn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,mi.current=e===null||e.memoizedState===null?sg:fg,e=t(r,l),Zu){u=0;do{if(Zu=!1,co=0,25<=u)throw Error(B(301));u+=1,Dn=jn=null,n.updateQueue=null,mi.current=cg,e=t(r,l)}while(Zu)}if(mi.current=Bi,n=jn!==null&&jn.next!==null,al=0,Dn=jn=yn=null,Qi=!1,n)throw Error(B(300));return e}function Zc(){var e=co!==0;return co=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?yn.memoizedState=Dn=e:Dn=Dn.next=e,Dn}function xt(){if(jn===null){var e=yn.alternate;e=e!==null?e.memoizedState:null}else e=jn.next;var n=Dn===null?yn.memoizedState:Dn.next;if(n!==null)Dn=n,jn=e;else{if(e===null)throw Error(B(310));jn=e,e={memoizedState:jn.memoizedState,baseState:jn.baseState,baseQueue:jn.baseQueue,queue:jn.queue,next:null},Dn===null?yn.memoizedState=Dn=e:Dn=Dn.next=e}return Dn}function ao(e,n){return typeof n==="function"?n(e):n}function gf(e){var n=xt(),t=n.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=e;var r=jn,l=r.baseQueue,u=t.pending;if(u!==null){if(l!==null){var i=l.next;l.next=u.next,u.next=i}r.baseQueue=l=u,t.pending=null}if(l!==null){u=l.next,r=r.baseState;var s=i=null,f=null,v=u;do{var y=v.lane;if((al&y)===y)f!==null&&(f=f.next={lane:0,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),r=v.hasEagerState?v.eagerState:e(r,v.action);else{var _={lane:y,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null};f===null?(s=f=_,i=r):f=f.next=_,yn.lanes|=y,dl|=y}v=v.next}while(v!==null&&v!==u);f===null?i=r:f.next=s,Ut(r,n.memoizedState)||(ot=!0),n.memoizedState=r,n.baseState=i,n.baseQueue=f,t.lastRenderedState=r}if(e=t.interleaved,e!==null){l=e;do u=l.lane,yn.lanes|=u,dl|=u,l=l.next;while(l!==e)}else l===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function kf(e){var n=xt(),t=n.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=e;var{dispatch:r,pending:l}=t,u=n.memoizedState;if(l!==null){t.pending=null;var i=l=l.next;do u=e(u,i.action),i=i.next;while(i!==l);Ut(u,n.memoizedState)||(ot=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),t.lastRenderedState=u}return[u,r]}function j0(){}function O0(e,n){var t=yn,r=xt(),l=n(),u=!Ut(r.memoizedState,l);if(u&&(r.memoizedState=l,ot=!0),r=r.queue,Ac(V0.bind(null,t,r,e),[e]),r.getSnapshot!==n||u||Dn!==null&&Dn.memoizedState.tag&1){if(t.flags|=2048,po(9,D0.bind(null,t,r,l,n),void 0,null),Vn===null)throw Error(B(349));(al&30)!==0||R0(t,n,l)}return l}function R0(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=yn.updateQueue,n===null?(n={lastEffect:null,stores:null},yn.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function D0(e,n,t,r){n.value=t,n.getSnapshot=r,M0(n)&&$0(e)}function V0(e,n,t){return t(function(){M0(n)&&$0(e)})}function M0(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Ut(e,t)}catch(r){return!0}}function $0(e){var n=vr(e,1);n!==null&&Bt(n,e,1,-1)}function up(e){var n=bt();return typeof e==="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:e},n.queue=e,e=e.dispatch=ig.bind(null,yn,e),[n.memoizedState,e]}function po(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=yn.updateQueue,n===null?(n={lastEffect:null,stores:null},yn.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function I0(){return xt().memoizedState}function gi(e,n,t,r){var l=bt();yn.flags|=e,l.memoizedState=po(1|n,t,void 0,r===void 0?null:r)}function bi(e,n,t,r){var l=xt();r=r===void 0?null:r;var u=void 0;if(jn!==null){var i=jn.memoizedState;if(u=i.destroy,r!==null&&Kc(r,i.deps)){l.memoizedState=po(n,t,u,r);return}}yn.flags|=e,l.memoizedState=po(1|n,t,u,r)}function op(e,n){return gi(8390656,8,e,n)}function Ac(e,n){return bi(2048,8,e,n)}function Q0(e,n){return bi(4,2,e,n)}function B0(e,n){return bi(4,4,e,n)}function U0(e,n){if(typeof n==="function")return e=e(),n(e),function(){n(null)};if(n!==null&&n!==void 0)return e=e(),n.current=e,function(){n.current=null}}function W0(e,n,t){return t=t!==null&&t!==void 0?t.concat([e]):null,bi(4,4,U0.bind(null,n,e),t)}function Jc(){}function H0(e,n){var t=xt();n=n===void 0?null:n;var r=t.memoizedState;if(r!==null&&n!==null&&Kc(n,r[1]))return r[0];return t.memoizedState=[e,n],e}function K0(e,n){var t=xt();n=n===void 0?null:n;var r=t.memoizedState;if(r!==null&&n!==null&&Kc(n,r[1]))return r[0];return e=e(),t.memoizedState=[e,n],e}function G0(e,n,t){if((al&21)===0)return e.baseState&&(e.baseState=!1,ot=!0),e.memoizedState=t;return Ut(t,n)||(t=Xp(),yn.lanes|=t,dl|=t,e.baseState=!0),n}function ug(e,n){var t=be;be=t!==0&&4>t?t:4,e(!0);var r=mf.transition;mf.transition={};try{e(!1),n()}finally{be=t,mf.transition=r}}function Z0(){return xt().memoizedState}function og(e,n,t){var r=$r(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},A0(e))J0(n,t);else if(t=L0(e,n,t,r),t!==null){var l=qn();Bt(t,e,r,l),Y0(t,n,r)}}function ig(e,n,t){var r=$r(e),l={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(A0(e))J0(n,l);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var i=n.lastRenderedState,s=u(i,t);if(l.hasEagerState=!0,l.eagerState=s,Ut(s,i)){var f=n.interleaved;f===null?(l.next=l,Qc(n)):(l.next=f.next,f.next=l),n.interleaved=l;return}}catch(v){}finally{}t=L0(e,n,l,r),t!==null&&(l=qn(),Bt(t,e,r,l),Y0(t,n,r))}}function A0(e){var n=e.alternate;return e===yn||n!==null&&n===yn}function J0(e,n){Zu=Qi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Y0(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zc(e,t)}}function Mt(e,n){if(e&&e.defaultProps){n=vn({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function tc(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t===null||t===void 0?n:vn({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}function ip(e,n,t,r,l,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate==="function"?e.shouldComponentUpdate(r,u,i):n.prototype&&n.prototype.isPureReactComponent?!lo(t,r)||!lo(l,u):!0}function X0(e,n,t){var r=!1,l=Br,u=n.contextType;return typeof u==="object"&&u!==null?u=zt(u):(l=st(n)?fl:Zn.current,r=n.contextTypes,u=(r=r!==null&&r!==void 0)?ql(e,l):Br),n=new n(t,u),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=es,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=u),n}function sp(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps==="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps==="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&es.enqueueReplaceState(n,n.state,null)}function rc(e,n,t,r){var l=e.stateNode;l.props=t,l.state=e.memoizedState,l.refs={},Bc(e);var u=n.contextType;typeof u==="object"&&u!==null?l.context=zt(u):(u=st(n)?fl:Zn.current,l.context=ql(e,u)),l.state=e.memoizedState,u=n.getDerivedStateFromProps,typeof u==="function"&&(tc(e,n,u,t),l.state=e.memoizedState),typeof n.getDerivedStateFromProps==="function"||typeof l.getSnapshotBeforeUpdate==="function"||typeof l.UNSAFE_componentWillMount!=="function"&&typeof l.componentWillMount!=="function"||(n=l.state,typeof l.componentWillMount==="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount==="function"&&l.UNSAFE_componentWillMount(),n!==l.state&&es.enqueueReplaceState(l,l.state,null),$i(e,t,l,r),l.state=e.memoizedState),typeof l.componentDidMount==="function"&&(e.flags|=4194308)}function tu(e,n){try{var t="",r=n;do t+=Qv(r),r=r.return;while(r);var l=t}catch(u){l=`
Error generating stack: `+u.message+`
`+u.stack}return{value:e,source:n,stack:l,digest:null}}function wf(e,n,t){return{value:e,source:null,stack:t!=null?t:null,digest:n!=null?n:null}}function lc(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}function q0(e,n,t){t=pr(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Wi||(Wi=!0,hc=r),lc(e,n)},t}function b0(e,n,t){t=pr(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==="function"){var l=n.value;t.payload=function(){return r(l)},t.callback=function(){lc(e,n)}}var u=e.stateNode;return u!==null&&typeof u.componentDidCatch==="function"&&(t.callback=function(){lc(e,n),typeof r!=="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function fp(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new ag;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(t)||(l.add(t),e=Ng.bind(null,e,n,t),n.then(e,e))}function cp(e){do{var n;if(n=e.tag===13)n=e.memoizedState,n=n!==null?n.dehydrated!==null?!0:!1:!0;if(n)return e;e=e.return}while(e!==null);return null}function ap(e,n,t,r,l){if((e.mode&1)===0)return e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=pr(-1,1),n.tag=2,Vr(t,n,1))),t.lanes|=1),e;return e.flags|=65536,e.lanes=l,e}function Xn(e,n,t,r){n.child=e===null?P0(n,null,t,r):eu(n,e.child,t,r)}function dp(e,n,t,r,l){t=t.render;var u=n.ref;if(Jl(n,l),r=Gc(e,n,t,r,u,l),t=Zc(),e!==null&&!ot)return n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,mr(e,n,l);return cn&&t&&Rc(n),n.flags|=1,Xn(e,n,r,l),n.child}function pp(e,n,t,r,l){if(e===null){var u=t.type;if(typeof u==="function"&&!ra(u)&&u.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0)return n.tag=15,n.type=u,e1(e,n,u,r,l);return e=_i(t.type,null,r,n,n.mode,l),e.ref=n.ref,e.return=n,n.child=e}if(u=e.child,(e.lanes&l)===0){var i=u.memoizedProps;if(t=t.compare,t=t!==null?t:lo,t(i,r)&&e.ref===n.ref)return mr(e,n,l)}return n.flags|=1,e=Ir(u,r),e.ref=n.ref,e.return=n,n.child=e}function e1(e,n,t,r,l){if(e!==null){var u=e.memoizedProps;if(lo(u,r)&&e.ref===n.ref)if(ot=!1,n.pendingProps=r=u,(e.lanes&l)!==0)(e.flags&131072)!==0&&(ot=!0);else return n.lanes=e.lanes,mr(e,n,l)}return uc(e,n,t,r,l)}function n1(e,n,t){var r=n.pendingProps,l=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},on(Hl,at),at|=t;else{if((t&1073741824)===0)return e=u!==null?u.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,on(Hl,at),at|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=u!==null?u.baseLanes:t,on(Hl,at),at|=r}else u!==null?(r=u.baseLanes|t,n.memoizedState=null):r=t,on(Hl,at),at|=r;return Xn(e,n,l,t),n.child}function t1(e,n){var t=n.ref;if(e===null&&t!==null||e!==null&&e.ref!==t)n.flags|=512,n.flags|=2097152}function uc(e,n,t,r,l){var u=st(t)?fl:Zn.current;if(u=ql(n,u),Jl(n,l),t=Gc(e,n,t,r,u,l),r=Zc(),e!==null&&!ot)return n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l,mr(e,n,l);return cn&&r&&Rc(n),n.flags|=1,Xn(e,n,t,l),n.child}function hp(e,n,t,r,l){if(st(t)){var u=!0;Oi(n)}else u=!1;if(Jl(n,l),n.stateNode===null)ki(e,n),X0(n,t,r),rc(n,t,r,l),r=!0;else if(e===null){var{stateNode:i,memoizedProps:s}=n;i.props=s;var f=i.context,v=t.contextType;typeof v==="object"&&v!==null?v=zt(v):(v=st(t)?fl:Zn.current,v=ql(n,v));var y=t.getDerivedStateFromProps,_=typeof y==="function"||typeof i.getSnapshotBeforeUpdate==="function";_||typeof i.UNSAFE_componentWillReceiveProps!=="function"&&typeof i.componentWillReceiveProps!=="function"||(s!==r||f!==v)&&sp(n,i,r,v),xr=!1;var g=n.memoizedState;i.state=g,$i(n,r,i,l),f=n.memoizedState,s!==r||g!==f||it.current||xr?(typeof y==="function"&&(tc(n,t,y,r),f=n.memoizedState),(s=xr||ip(n,t,s,r,g,f,v))?(_||typeof i.UNSAFE_componentWillMount!=="function"&&typeof i.componentWillMount!=="function"||(typeof i.componentWillMount==="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount==="function"&&(n.flags|=4194308)):(typeof i.componentDidMount==="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=f),i.props=r,i.state=f,i.context=v,r=s):(typeof i.componentDidMount==="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,T0(e,n),s=n.memoizedProps,v=n.type===n.elementType?s:Mt(n.type,s),i.props=v,_=n.pendingProps,g=i.context,f=t.contextType,typeof f==="object"&&f!==null?f=zt(f):(f=st(t)?fl:Zn.current,f=ql(n,f));var F=t.getDerivedStateFromProps;(y=typeof F==="function"||typeof i.getSnapshotBeforeUpdate==="function")||typeof i.UNSAFE_componentWillReceiveProps!=="function"&&typeof i.componentWillReceiveProps!=="function"||(s!==_||g!==f)&&sp(n,i,r,f),xr=!1,g=n.memoizedState,i.state=g,$i(n,r,i,l);var E=n.memoizedState;s!==_||g!==E||it.current||xr?(typeof F==="function"&&(tc(n,t,F,r),E=n.memoizedState),(v=xr||ip(n,t,v,r,g,E,f)||!1)?(y||typeof i.UNSAFE_componentWillUpdate!=="function"&&typeof i.componentWillUpdate!=="function"||(typeof i.componentWillUpdate==="function"&&i.componentWillUpdate(r,E,f),typeof i.UNSAFE_componentWillUpdate==="function"&&i.UNSAFE_componentWillUpdate(r,E,f)),typeof i.componentDidUpdate==="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate==="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!=="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!=="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=E),i.props=r,i.state=E,i.context=f,r=v):(typeof i.componentDidUpdate!=="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!=="function"||s===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return oc(e,n,t,r,u,l)}function oc(e,n,t,r,l,u){t1(e,n);var i=(n.flags&128)!==0;if(!r&&!i)return l&&bd(n,t,!1),mr(e,n,u);r=n.stateNode,dg.current=n;var s=i&&typeof t.getDerivedStateFromError!=="function"?null:r.render();return n.flags|=1,e!==null&&i?(n.child=eu(n,e.child,null,u),n.child=eu(n,null,s,u)):Xn(e,n,s,u),n.memoizedState=r.state,l&&bd(n,t,!0),n.child}function r1(e){var n=e.stateNode;n.pendingContext?qd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&qd(e,n.context,!1),Uc(e,n.containerInfo)}function yp(e,n,t,r,l){return bl(),Vc(l),n.flags|=256,Xn(e,n,t,r),n.child}function sc(e){return{baseLanes:e,cachePool:null,transitions:null}}function l1(e,n,t){var r=n.pendingProps,l=hn.current,u=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s)u=!0,n.flags&=-129;else if(e===null||e.memoizedState!==null)l|=1;if(on(hn,l&1),e===null){if(ec(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null))return(n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null;return i=r.children,e=r.fallback,u?(r=n.mode,u=n.child,i={mode:"hidden",children:i},(r&1)===0&&u!==null?(u.childLanes=0,u.pendingProps=i):u=rs(i,r,0,null),e=sl(e,r,t,null),u.return=n,e.return=n,u.sibling=e,n.child=u,n.child.memoizedState=sc(t),n.memoizedState=ic,e):Yc(n,i)}if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return pg(e,n,i,r,s,l,t);if(u){u=r.fallback,i=n.mode,l=e.child,s=l.sibling;var f={mode:"hidden",children:r.children};return(i&1)===0&&n.child!==l?(r=n.child,r.childLanes=0,r.pendingProps=f,n.deletions=null):(r=Ir(l,f),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?u=Ir(s,u):(u=sl(u,i,t,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,r=u,u=n.child,i=e.child.memoizedState,i=i===null?sc(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},u.memoizedState=i,u.childLanes=e.childLanes&~t,n.memoizedState=ic,r}return u=e.child,e=u.sibling,r=Ir(u,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Yc(e,n){return n=rs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function fi(e,n,t,r){return r!==null&&Vc(r),eu(n,e.child,null,t),e=Yc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pg(e,n,t,r,l,u,i){if(t){if(n.flags&256)return n.flags&=-257,r=wf(Error(B(422))),fi(e,n,i,r);if(n.memoizedState!==null)return n.child=e.child,n.flags|=128,null;return u=r.fallback,l=n.mode,r=rs({mode:"visible",children:r.children},l,0,null),u=sl(u,l,i,null),u.flags|=2,r.return=n,u.return=n,r.sibling=u,n.child=r,(n.mode&1)!==0&&eu(n,e.child,null,i),n.child.memoizedState=sc(i),n.memoizedState=ic,u}if((n.mode&1)===0)return fi(e,n,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,u=Error(B(419)),r=wf(u,r,void 0),fi(e,n,i,r)}if(s=(i&e.childLanes)!==0,ot||s){if(r=Vn,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|i))!==0?0:l,l!==0&&l!==u.retryLane&&(u.retryLane=l,vr(e,l),Bt(r,e,l,-1))}return ta(),r=wf(Error(B(421))),fi(e,n,i,r)}if(l.data==="$?")return n.flags|=128,n.child=e.child,n=zg.bind(null,e),l._reactRetry=n,null;return e=u.treeContext,dt=Dr(l.nextSibling),pt=n,cn=!0,It=null,e!==null&&(_t[Ct++]=ar,_t[Ct++]=dr,_t[Ct++]=cl,ar=e.id,dr=e.overflow,cl=n),n=Yc(n,r.children),n.flags|=4096,n}function vp(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),nc(e.return,n,t)}function Sf(e,n,t,r,l){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:l}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=t,u.tailMode=l)}function u1(e,n,t){var r=n.pendingProps,l=r.revealOrder,u=r.tail;if(Xn(e,n,r.children,t),r=hn.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vp(e,t,n);else if(e.tag===19)vp(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(on(hn,r),(n.mode&1)===0)n.memoizedState=null;else switch(l){case"forwards":t=n.child;for(l=null;t!==null;)e=t.alternate,e!==null&&Ii(e)===null&&(l=t),t=t.sibling;t=l,t===null?(l=n.child,n.child=null):(l=t.sibling,t.sibling=null),Sf(n,!1,l,t,u);break;case"backwards":t=null,l=n.child;for(n.child=null;l!==null;){if(e=l.alternate,e!==null&&Ii(e)===null){n.child=l;break}e=l.sibling,l.sibling=t,t=l,l=e}Sf(n,!0,t,null,u);break;case"together":Sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mr(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),dl|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(B(153));if(n.child!==null){e=n.child,t=Ir(e,e.pendingProps),n.child=t;for(t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ir(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function hg(e,n,t){switch(n.tag){case 3:r1(n),bl();break;case 5:F0(n);break;case 1:st(n.type)&&Oi(n);break;case 4:Uc(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,l=n.memoizedProps.value;on(Vi,r._currentValue),r._currentValue=l;break;case 13:if(r=n.memoizedState,r!==null){if(r.dehydrated!==null)return on(hn,hn.current&1),n.flags|=128,null;if((t&n.child.childLanes)!==0)return l1(e,n,t);return on(hn,hn.current&1),e=mr(e,n,t),e!==null?e.sibling:null}on(hn,hn.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return u1(e,n,t);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),on(hn,hn.current),r)break;else return null;case 22:case 23:return n.lanes=0,n1(e,n,t)}return mr(e,n,t)}function ju(e,n){if(!cn)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kn(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)t|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function yg(e,n,t){var r=n.pendingProps;switch(Dc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kn(n),null;case 1:return st(n.type)&&ji(),Kn(n),null;case 3:if(r=n.stateNode,nu(),fn(it),fn(Zn),Hc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),e===null||e.child===null)ii(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,It!==null&&(mc(It),It=null));return fc(e,n),Kn(n),null;case 5:Wc(n);var l=ol(fo.current);if(t=n.type,e!==null&&n.stateNode!=null)i1(e,n,t,r,l),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(B(166));return Kn(n),null}if(e=ol(tr.current),ii(n)){r=n.stateNode,t=n.type;var u=n.memoizedProps;switch(r[er]=n,r[io]=u,e=(n.mode&1)!==0,t){case"dialog":sn("cancel",r),sn("close",r);break;case"iframe":case"object":case"embed":sn("load",r);break;case"video":case"audio":for(l=0;l<Bu.length;l++)sn(Bu[l],r);break;case"source":sn("error",r);break;case"img":case"image":case"link":sn("error",r),sn("load",r);break;case"details":sn("toggle",r);break;case"input":zd(r,u),sn("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},sn("invalid",r);break;case"textarea":Pd(r,u),sn("invalid",r)}Rf(t,u),l=null;for(var i in u)if(u.hasOwnProperty(i)){var s=u[i];i==="children"?typeof s==="string"?r.textContent!==s&&(u.suppressHydrationWarning!==!0&&oi(r.textContent,s,e),l=["children",s]):typeof s==="number"&&r.textContent!==""+s&&(u.suppressHydrationWarning!==!0&&oi(r.textContent,s,e),l=["children",""+s]):Xu.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&sn("scroll",r)}switch(t){case"input":qo(r),xd(r,u,!0);break;case"textarea":qo(r),Ld(r);break;case"select":case"option":break;default:typeof u.onClick==="function"&&(r.onclick=Fi)}r=l,n.updateQueue=r,r!==null&&(n.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vp(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script></script>",e=e.removeChild(e.firstChild)):typeof r.is==="string"?e=i.createElement(t,{is:r.is}):(e=i.createElement(t),t==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,t),e[er]=n,e[io]=r,o1(e,n,!1,!1),n.stateNode=e;e:{switch(i=Df(t,r),t){case"dialog":sn("cancel",e),sn("close",e),l=r;break;case"iframe":case"object":case"embed":sn("load",e),l=r;break;case"video":case"audio":for(l=0;l<Bu.length;l++)sn(Bu[l],e);l=r;break;case"source":sn("error",e),l=r;break;case"img":case"image":case"link":sn("error",e),sn("load",e),l=r;break;case"details":sn("toggle",e),l=r;break;case"input":zd(e,r),l=Lf(e,r),sn("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=vn({},r,{value:void 0}),sn("invalid",e);break;case"textarea":Pd(e,r),l=jf(e,r),sn("invalid",e);break;default:l=r}Rf(t,l),s=l;for(u in s)if(s.hasOwnProperty(u)){var f=s[u];u==="style"?Ip(e,f):u==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Mp(e,f)):u==="children"?typeof f==="string"?(t!=="textarea"||f!=="")&&qu(e,f):typeof f==="number"&&qu(e,""+f):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xu.hasOwnProperty(u)?f!=null&&u==="onScroll"&&sn("scroll",e):f!=null&&wc(e,u,f,i))}switch(t){case"input":qo(e),xd(e,r,!1);break;case"textarea":qo(e),Ld(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Qr(r.value));break;case"select":e.multiple=!!r.multiple,u=r.value,u!=null?Kl(e,!!r.multiple,u,!1):r.defaultValue!=null&&Kl(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick==="function"&&(e.onclick=Fi)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Kn(n),null;case 6:if(e&&n.stateNode!=null)s1(e,n,e.memoizedProps,r);else{if(typeof r!=="string"&&n.stateNode===null)throw Error(B(166));if(t=ol(fo.current),ol(tr.current),ii(n)){if(r=n.stateNode,t=n.memoizedProps,r[er]=n,u=r.nodeValue!==t){if(e=pt,e!==null)switch(e.tag){case 3:oi(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&oi(r.nodeValue,t,(e.mode&1)!==0)}}u&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[er]=n,n.stateNode=r}return Kn(n),null;case 13:if(fn(hn),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(cn&&dt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)z0(),bl(),n.flags|=98560,u=!1;else if(u=ii(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(B(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(B(317));u[er]=n}else bl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kn(n),u=!1}else It!==null&&(mc(It),It=null),u=!0;if(!u)return n.flags&65536?n:null}if((n.flags&128)!==0)return n.lanes=t,n;return r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(hn.current&1)!==0?On===0&&(On=3):ta())),n.updateQueue!==null&&(n.flags|=4),Kn(n),null;case 4:return nu(),fc(e,n),e===null&&uo(n.stateNode.containerInfo),Kn(n),null;case 10:return Ic(n.type._context),Kn(n),null;case 17:return st(n.type)&&ji(),Kn(n),null;case 19:if(fn(hn),u=n.memoizedState,u===null)return Kn(n),null;if(r=(n.flags&128)!==0,i=u.rendering,i===null)if(r)ju(u,!1);else{if(On!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=Ii(e),i!==null){n.flags|=128,ju(u,!1),r=i.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t;for(t=n.child;t!==null;)u=t,e=r,u.flags&=14680066,i=u.alternate,i===null?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=i.childLanes,u.lanes=i.lanes,u.child=i.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=i.memoizedProps,u.memoizedState=i.memoizedState,u.updateQueue=i.updateQueue,u.type=i.type,e=i.dependencies,u.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return on(hn,hn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Nn()>ru&&(n.flags|=128,r=!0,ju(u,!1),n.lanes=4194304)}else{if(!r)if(e=Ii(i),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),ju(u,!0),u.tail===null&&u.tailMode==="hidden"&&!i.alternate&&!cn)return Kn(n),null}else 2*Nn()-u.renderingStartTime>ru&&t!==1073741824&&(n.flags|=128,r=!0,ju(u,!1),n.lanes=4194304);u.isBackwards?(i.sibling=n.child,n.child=i):(t=u.last,t!==null?t.sibling=i:n.child=i,u.last=i)}if(u.tail!==null)return n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Nn(),n.sibling=null,t=hn.current,on(hn,r?t&1|2:t&1),n;return Kn(n),null;case 22:case 23:return na(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(at&1073741824)!==0&&(Kn(n),n.subtreeFlags&6&&(n.flags|=8192)):Kn(n),null;case 24:return null;case 25:return null}throw Error(B(156,n.tag))}function vg(e,n){switch(Dc(n),n.tag){case 1:return st(n.type)&&ji(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return nu(),fn(it),fn(Zn),Hc(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return Wc(n),null;case 13:if(fn(hn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(B(340));bl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return fn(hn),null;case 4:return nu(),null;case 10:return Ic(n.type._context),null;case 22:case 23:return na(),null;case 24:return null;default:return null}}function Wl(e,n){var t=e.ref;if(t!==null)if(typeof t==="function")try{t(null)}catch(r){Sn(e,n,r)}else t.current=null}function cc(e,n,t){try{t()}catch(r){Sn(e,n,r)}}function gg(e,n){if(Zf=Pi,e=p0(),Oc(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var{anchorOffset:l,focusNode:u}=r;r=r.focusOffset;try{t.nodeType,u.nodeType}catch(T){t=null;break e}var i=0,s=-1,f=-1,v=0,y=0,_=e,g=null;n:for(;;){for(var F;;){if(_!==t||l!==0&&_.nodeType!==3||(s=i+l),_!==u||r!==0&&_.nodeType!==3||(f=i+r),_.nodeType===3&&(i+=_.nodeValue.length),(F=_.firstChild)===null)break;g=_,_=F}for(;;){if(_===e)break n;if(g===t&&++v===l&&(s=i),g===u&&++y===r&&(f=i),(F=_.nextSibling)!==null)break;_=g,g=_.parentNode}_=F}t=s===-1||f===-1?null:{start:s,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;Af={focusedElem:e,selectionRange:t},Pi=!1;for(b=n;b!==null;)if(n=b,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,b=e;else for(;b!==null;){n=b;try{var E=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var{memoizedProps:L,memoizedState:x}=E,p=n.stateNode,m=p.getSnapshotBeforeUpdate(n.elementType===n.type?L:Mt(n.type,L),x);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var S=n.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(T){Sn(n,n.return,T)}if(e=n.sibling,e!==null){e.return=n.return,b=e;break}b=n.return}return E=mp,mp=!1,E}function Au(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var u=l.destroy;l.destroy=void 0,u!==void 0&&cc(n,t,u)}l=l.next}while(l!==r)}}function ns(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function ac(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n==="function"?n(e):n.current=e}}function f1(e){var n=e.alternate;n!==null&&(e.alternate=null,f1(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[er],delete n[io],delete n[Xf],delete n[eg],delete n[ng])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function c1(e){return e.tag===5||e.tag===3||e.tag===4}function gp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||c1(e.return))return null;e=e.return}e.sibling.return=e.return;for(e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2)continue e;if(e.child===null||e.tag===4)continue e;else e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dc(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!==null&&t!==void 0||n.onclick!==null||(n.onclick=Fi));else if(r!==4&&(e=e.child,e!==null))for(dc(e,n,t),e=e.sibling;e!==null;)dc(e,n,t),e=e.sibling}function pc(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(pc(e,n,t),e=e.sibling;e!==null;)pc(e,n,t),e=e.sibling}function Nr(e,n,t){for(t=t.child;t!==null;)a1(e,n,t),t=t.sibling}function a1(e,n,t){if(nr&&typeof nr.onCommitFiberUnmount==="function")try{nr.onCommitFiberUnmount(Zi,t)}catch(s){}switch(t.tag){case 5:Gn||Wl(t,n);case 6:var r=$n,l=$t;$n=null,Nr(e,n,t),$n=r,$t=l,$n!==null&&($t?(e=$n,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$n.removeChild(t.stateNode));break;case 18:$n!==null&&($t?(e=$n,t=t.stateNode,e.nodeType===8?hf(e.parentNode,t):e.nodeType===1&&hf(e,t),to(e)):hf($n,t.stateNode));break;case 4:r=$n,l=$t,$n=t.stateNode.containerInfo,$t=!0,Nr(e,n,t),$n=r,$t=l;break;case 0:case 11:case 14:case 15:if(!Gn&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var u=l,i=u.destroy;u=u.tag,i!==void 0&&((u&2)!==0?cc(t,n,i):(u&4)!==0&&cc(t,n,i)),l=l.next}while(l!==r)}Nr(e,n,t);break;case 1:if(!Gn&&(Wl(t,n),r=t.stateNode,typeof r.componentWillUnmount==="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(s){Sn(t,n,s)}Nr(e,n,t);break;case 21:Nr(e,n,t);break;case 22:t.mode&1?(Gn=(r=Gn)||t.memoizedState!==null,Nr(e,n,t),Gn=r):Nr(e,n,t);break;default:Nr(e,n,t)}}function kp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new mg),n.forEach(function(r){var l=xg.bind(null,e,r);t.has(r)||(t.add(r),r.then(l,l))})}}function Vt(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];try{var u=e,i=n,s=i;e:for(;s!==null;){switch(s.tag){case 5:$n=s.stateNode,$t=!1;break e;case 3:$n=s.stateNode.containerInfo,$t=!0;break e;case 4:$n=s.stateNode.containerInfo,$t=!0;break e}s=s.return}if($n===null)throw Error(B(160));a1(u,i,l),$n=null,$t=!1;var f=l.alternate;f!==null&&(f.return=null),l.return=null}catch(v){Sn(l,n,v)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)d1(n,e),n=n.sibling}function d1(e,n){var{alternate:t,flags:r}=e;switch(e.tag){case 0:case 11:case 14:case 15:if(Vt(n,e),qt(e),r&4){try{Au(3,e,e.return),ns(3,e)}catch(L){Sn(e,e.return,L)}try{Au(5,e,e.return)}catch(L){Sn(e,e.return,L)}}break;case 1:Vt(n,e),qt(e),r&512&&t!==null&&Wl(t,t.return);break;case 5:if(Vt(n,e),qt(e),r&512&&t!==null&&Wl(t,t.return),e.flags&32){var l=e.stateNode;try{qu(l,"")}catch(L){Sn(e,e.return,L)}}if(r&4&&(l=e.stateNode,l!=null)){var u=e.memoizedProps,i=t!==null?t.memoizedProps:u,s=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{s==="input"&&u.type==="radio"&&u.name!=null&&Rp(l,u),Df(s,i);var v=Df(s,u);for(i=0;i<f.length;i+=2){var y=f[i],_=f[i+1];y==="style"?Ip(l,_):y==="dangerouslySetInnerHTML"?Mp(l,_):y==="children"?qu(l,_):wc(l,y,_,v)}switch(s){case"input":Tf(l,u);break;case"textarea":Dp(l,u);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!u.multiple;var F=u.value;F!=null?Kl(l,!!u.multiple,F,!1):g!==!!u.multiple&&(u.defaultValue!=null?Kl(l,!!u.multiple,u.defaultValue,!0):Kl(l,!!u.multiple,u.multiple?[]:"",!1))}l[io]=u}catch(L){Sn(e,e.return,L)}}break;case 6:if(Vt(n,e),qt(e),r&4){if(e.stateNode===null)throw Error(B(162));l=e.stateNode,u=e.memoizedProps;try{l.nodeValue=u}catch(L){Sn(e,e.return,L)}}break;case 3:if(Vt(n,e),qt(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{to(n.containerInfo)}catch(L){Sn(e,e.return,L)}break;case 4:Vt(n,e),qt(e);break;case 13:Vt(n,e),qt(e),l=e.child,l.flags&8192&&(u=l.memoizedState!==null,l.stateNode.isHidden=u,!u||l.alternate!==null&&l.alternate.memoizedState!==null||(bc=Nn())),r&4&&kp(e);break;case 22:if(y=t!==null&&t.memoizedState!==null,e.mode&1?(Gn=(v=Gn)||y,Vt(n,e),Gn=v):Vt(n,e),qt(e),r&8192){if(v=e.memoizedState!==null,(e.stateNode.isHidden=v)&&!y&&(e.mode&1)!==0)for(b=e,y=e.child;y!==null;){for(_=b=y;b!==null;){switch(g=b,F=g.child,g.tag){case 0:case 11:case 14:case 15:Au(4,g,g.return);break;case 1:Wl(g,g.return);var E=g.stateNode;if(typeof E.componentWillUnmount==="function"){r=g,t=g.return;try{n=r,E.props=n.memoizedProps,E.state=n.memoizedState,E.componentWillUnmount()}catch(L){Sn(r,t,L)}}break;case 5:Wl(g,g.return);break;case 22:if(g.memoizedState!==null){Sp(_);continue}}F!==null?(F.return=g,b=F):Sp(_)}y=y.sibling}e:for(y=null,_=e;;){if(_.tag===5){if(y===null){y=_;try{l=_.stateNode,v?(u=l.style,typeof u.setProperty==="function"?u.setProperty("display","none","important"):u.display="none"):(s=_.stateNode,f=_.memoizedProps.style,i=f!==void 0&&f!==null&&f.hasOwnProperty("display")?f.display:null,s.style.display=$p("display",i))}catch(L){Sn(e,e.return,L)}}}else if(_.tag===6){if(y===null)try{_.stateNode.nodeValue=v?"":_.memoizedProps}catch(L){Sn(e,e.return,L)}}else if((_.tag!==22&&_.tag!==23||_.memoizedState===null||_===e)&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===e)break e;for(;_.sibling===null;){if(_.return===null||_.return===e)break e;y===_&&(y=null),_=_.return}y===_&&(y=null),_.sibling.return=_.return,_=_.sibling}}break;case 19:Vt(n,e),qt(e),r&4&&kp(e);break;case 21:break;default:Vt(n,e),qt(e)}}function qt(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(c1(t)){var r=t;break e}t=t.return}throw Error(B(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(qu(l,""),r.flags&=-33);var u=gp(e);pc(e,u,l);break;case 3:case 4:var i=r.stateNode.containerInfo,s=gp(e);dc(e,s,i);break;default:throw Error(B(161))}}catch(f){Sn(e,e.return,f)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function kg(e,n,t){b=e,p1(e,n,t)}function p1(e,n,t){for(var r=(e.mode&1)!==0;b!==null;){var l=b,u=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||ci;if(!i){var s=l.alternate,f=s!==null&&s.memoizedState!==null||Gn;s=ci;var v=Gn;if(ci=i,(Gn=f)&&!v)for(b=l;b!==null;)i=b,f=i.child,i.tag===22&&i.memoizedState!==null?_p(l):f!==null?(f.return=i,b=f):_p(l);for(;u!==null;)b=u,p1(u,n,t),u=u.sibling;b=l,ci=s,Gn=v}wp(e,n,t)}else(l.subtreeFlags&8772)!==0&&u!==null?(u.return=l,b=u):wp(e,n,t)}}function wp(e){for(;b!==null;){var n=b;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Gn||ns(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Gn)if(t===null)r.componentDidMount();else{var l=n.elementType===n.type?t.memoizedProps:Mt(n.type,t.memoizedProps);r.componentDidUpdate(l,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var u=n.updateQueue;u!==null&&lp(n,u,r);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}lp(n,i,t)}break;case 5:var s=n.stateNode;if(t===null&&n.flags&4){t=s;var f=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var v=n.alternate;if(v!==null){var y=v.memoizedState;if(y!==null){var _=y.dehydrated;_!==null&&to(_)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Gn||n.flags&512&&ac(n)}catch(g){Sn(n,n.return,g)}}if(n===e){b=null;break}if(t=n.sibling,t!==null){t.return=n.return,b=t;break}b=n.return}}function Sp(e){for(;b!==null;){var n=b;if(n===e){b=null;break}var t=n.sibling;if(t!==null){t.return=n.return,b=t;break}b=n.return}}function _p(e){for(;b!==null;){var n=b;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ns(4,n)}catch(f){Sn(n,t,f)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount==="function"){var l=n.return;try{r.componentDidMount()}catch(f){Sn(n,l,f)}}var u=n.return;try{ac(n)}catch(f){Sn(n,u,f)}break;case 5:var i=n.return;try{ac(n)}catch(f){Sn(n,i,f)}}}catch(f){Sn(n,n.return,f)}if(n===e){b=null;break}var s=n.sibling;if(s!==null){s.return=n.return,b=s;break}b=n.return}}function qn(){return(Ue&6)!==0?Nn():wi!==-1?wi:wi=Nn()}function $r(e){if((e.mode&1)===0)return 1;if((Ue&2)!==0&&In!==0)return In&-In;if(rg.transition!==null)return Si===0&&(Si=Xp()),Si;if(e=be,e!==0)return e;return e=window.event,e=e===void 0?16:l0(e.type),e}function Bt(e,n,t,r){if(50<Yu)throw Yu=0,yc=null,Error(B(185));if(yo(e,t,r),(Ue&2)===0||e!==Vn)e===Vn&&((Ue&2)===0&&(ts|=t),On===4&&Lr(e,In)),ft(e,r),t===1&&Ue===0&&(n.mode&1)===0&&(ru=Nn()+500,qi&&Hr())}function ft(e,n){var t=e.callbackNode;um(e,n);var r=xi(e,e===Vn?In:0);if(r===0)t!==null&&jd(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&jd(t),n===1)e.tag===0?tg(Cp.bind(null,e)):C0(Cp.bind(null,e)),qm(function(){(Ue&6)===0&&Hr()}),t=null;else{switch(qp(r)){case 1:t=Nc;break;case 4:t=Jp;break;case 16:t=zi;break;case 536870912:t=Yp;break;default:t=zi}t=S1(t,h1.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function h1(e,n){if(wi=-1,Si=0,(Ue&6)!==0)throw Error(B(327));var t=e.callbackNode;if(Yl()&&e.callbackNode!==t)return null;var r=xi(e,e===Vn?In:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Ki(e,r);else{n=r;var l=Ue;Ue|=2;var u=v1();if(Vn!==e||In!==n)fr=null,ru=Nn()+500,il(e,n);do try{Cg();break}catch(s){y1(e,s)}while(1);$c(),Ui.current=u,Ue=l,Ln!==null?n=0:(Vn=null,In=0,n=On)}if(n!==0){if(n===2&&(l=Qf(e),l!==0&&(r=l,n=vc(e,l))),n===1)throw t=ho,il(e,0),Lr(e,r),ft(e,Nn()),t;if(n===6)Lr(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Sg(l)&&(n=Ki(e,r),n===2&&(u=Qf(e),u!==0&&(r=u,n=vc(e,u))),n===1))throw t=ho,il(e,0),Lr(e,r),ft(e,Nn()),t;switch(e.finishedWork=l,e.finishedLanes=r,n){case 0:case 1:throw Error(B(345));case 2:rl(e,ut,fr);break;case 3:if(Lr(e,r),(r&130023424)===r&&(n=bc+500-Nn(),10<n)){if(xi(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){qn(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Yf(rl.bind(null,e,ut,fr),n);break}rl(e,ut,fr);break;case 4:if(Lr(e,r),(r&4194240)===r)break;n=e.eventTimes;for(l=-1;0<r;){var i=31-Qt(r);u=1<<i,i=n[i],i>l&&(l=i),r&=~u}if(r=l,r=Nn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3000>r?3000:4320>r?4320:1960*wg(r/1960))-r,10<r){e.timeoutHandle=Yf(rl.bind(null,e,ut,fr),r);break}rl(e,ut,fr);break;case 5:rl(e,ut,fr);break;default:throw Error(B(329))}}}return ft(e,Nn()),e.callbackNode===t?h1.bind(null,e):null}function vc(e,n){var t=Ju;return e.current.memoizedState.isDehydrated&&(il(e,n).flags|=256),e=Ki(e,n),e!==2&&(n=ut,ut=t,n!==null&&mc(n)),e}function mc(e){ut===null?ut=e:ut.push.apply(ut,e)}function Sg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var l=t[r],u=l.getSnapshot;l=l.value;try{if(!Ut(u(),l))return!1}catch(i){return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Lr(e,n){n&=~qc,n&=~ts,e.suspendedLanes|=n,e.pingedLanes&=~n;for(e=e.expirationTimes;0<n;){var t=31-Qt(n),r=1<<t;e[t]=-1,n&=~r}}function Cp(e){if((Ue&6)!==0)throw Error(B(327));Yl();var n=xi(e,0);if((n&1)===0)return ft(e,Nn()),null;var t=Ki(e,n);if(e.tag!==0&&t===2){var r=Qf(e);r!==0&&(n=r,t=vc(e,r))}if(t===1)throw t=ho,il(e,0),Lr(e,n),ft(e,Nn()),t;if(t===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,rl(e,ut,fr),ft(e,Nn()),null}function ea(e,n){var t=Ue;Ue|=1;try{return e(n)}finally{Ue=t,Ue===0&&(ru=Nn()+500,qi&&Hr())}}function pl(e){Fr!==null&&Fr.tag===0&&(Ue&6)===0&&Yl();var n=Ue;Ue|=1;var t=Nt.transition,r=be;try{if(Nt.transition=null,be=1,e)return e()}finally{be=r,Nt.transition=t,Ue=n,(Ue&6)===0&&Hr()}}function na(){at=Hl.current,fn(Hl)}function il(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Xm(t)),Ln!==null)for(t=Ln.return;t!==null;){var r=t;switch(Dc(r),r.tag){case 1:r=r.type.childContextTypes,r!==null&&r!==void 0&&ji();break;case 3:nu(),fn(it),fn(Zn),Hc();break;case 5:Wc(r);break;case 4:nu();break;case 13:fn(hn);break;case 19:fn(hn);break;case 10:Ic(r.type._context);break;case 22:case 23:na()}t=t.return}if(Vn=e,Ln=e=Ir(e.current,null),In=at=n,On=0,ho=null,qc=ts=dl=0,ut=Ju=null,ul!==null){for(n=0;n<ul.length;n++)if(t=ul[n],r=t.interleaved,r!==null){t.interleaved=null;var l=r.next,u=t.pending;if(u!==null){var i=u.next;u.next=l,r.next=i}t.pending=r}ul=null}return e}function y1(e,n){do{var t=Ln;try{if($c(),mi.current=Bi,Qi){for(var r=yn.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Qi=!1}if(al=0,Dn=jn=yn=null,Zu=!1,co=0,Xc.current=null,t===null||t.return===null){On=1,ho=n,Ln=null;break}e:{var u=e,i=t.return,s=t,f=n;if(n=In,s.flags|=32768,f!==null&&typeof f==="object"&&typeof f.then==="function"){var v=f,y=s,_=y.tag;if((y.mode&1)===0&&(_===0||_===11||_===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var F=cp(i);if(F!==null){F.flags&=-257,ap(F,i,s,u,n),F.mode&1&&fp(u,v,n),n=F,f=v;var E=n.updateQueue;if(E===null){var L=new Set;L.add(f),n.updateQueue=L}else E.add(f);break e}else{if((n&1)===0){fp(u,v,n),ta();break e}f=Error(B(426))}}else if(cn&&s.mode&1){var x=cp(i);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),ap(x,i,s,u,n),Vc(tu(f,s));break e}}u=f=tu(f,s),On!==4&&(On=2),Ju===null?Ju=[u]:Ju.push(u),u=i;do{switch(u.tag){case 3:u.flags|=65536,n&=-n,u.lanes|=n;var p=q0(u,f,n);rp(u,p);break e;case 1:s=f;var{type:m,stateNode:S}=u;if((u.flags&128)===0&&(typeof m.getDerivedStateFromError==="function"||S!==null&&typeof S.componentDidCatch==="function"&&(Mr===null||!Mr.has(S)))){u.flags|=65536,n&=-n,u.lanes|=n;var T=b0(u,s,n);rp(u,T);break e}}u=u.return}while(u!==null)}g1(t)}catch(U){n=U,Ln===t&&t!==null&&(Ln=t=t.return);continue}break}while(1)}function v1(){var e=Ui.current;return Ui.current=Bi,e===null?Bi:e}function ta(){if(On===0||On===3||On===2)On=4;Vn===null||(dl&268435455)===0&&(ts&268435455)===0||Lr(Vn,In)}function Ki(e,n){var t=Ue;Ue|=2;var r=v1();if(Vn!==e||In!==n)fr=null,il(e,n);do try{_g();break}catch(l){y1(e,l)}while(1);if($c(),Ue=t,Ui.current=r,Ln!==null)throw Error(B(261));return Vn=null,In=0,On}function _g(){for(;Ln!==null;)m1(Ln)}function Cg(){for(;Ln!==null&&!Yv();)m1(Ln)}function m1(e){var n=w1(e.alternate,e,at);e.memoizedProps=e.pendingProps,n===null?g1(e):Ln=n,Xc.current=null}function g1(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=yg(t,n,at),t!==null){Ln=t;return}}else{if(t=vg(t,n),t!==null){t.flags&=32767,Ln=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{On=6,Ln=null;return}}if(n=n.sibling,n!==null){Ln=n;return}Ln=n=e}while(n!==null);On===0&&(On=5)}function rl(e,n,t){var r=be,l=Nt.transition;try{Nt.transition=null,be=1,Eg(e,n,t,r)}finally{Nt.transition=l,be=r}return null}function Eg(e,n,t,r){do Yl();while(Fr!==null);if((Ue&6)!==0)throw Error(B(327));t=e.finishedWork;var l=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var u=t.lanes|t.childLanes;if(om(e,u),e===Vn&&(Ln=Vn=null,In=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ai||(ai=!0,S1(zi,function(){return Yl(),null})),u=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||u){u=Nt.transition,Nt.transition=null;var i=be;be=1;var s=Ue;Ue|=4,Xc.current=null,gg(e,t),d1(t,e),Gm(Af),Pi=!!Zf,Af=Zf=null,e.current=t,kg(t,e,l),Xv(),Ue=s,be=i,Nt.transition=u}else e.current=t;if(ai&&(ai=!1,Fr=e,Hi=l),u=e.pendingLanes,u===0&&(Mr=null),em(t.stateNode,r),ft(e,Nn()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)l=n[t],r(l.value,{componentStack:l.stack,digest:l.digest});if(Wi)throw Wi=!1,e=hc,hc=null,e;return(Hi&1)!==0&&e.tag!==0&&Yl(),u=e.pendingLanes,(u&1)!==0?e===yc?Yu++:(Yu=0,yc=e):Yu=0,Hr(),null}function Yl(){if(Fr!==null){var e=qp(Hi),n=Nt.transition,t=be;try{if(Nt.transition=null,be=16>e?16:e,Fr===null)var r=!1;else{if(e=Fr,Fr=null,Hi=0,(Ue&6)!==0)throw Error(B(331));var l=Ue;Ue|=4;for(b=e.current;b!==null;){var u=b,i=u.child;if((b.flags&16)!==0){var s=u.deletions;if(s!==null){for(var f=0;f<s.length;f++){var v=s[f];for(b=v;b!==null;){var y=b;switch(y.tag){case 0:case 11:case 15:Au(8,y,u)}var _=y.child;if(_!==null)_.return=y,b=_;else for(;b!==null;){y=b;var{sibling:g,return:F}=y;if(f1(y),y===v){b=null;break}if(g!==null){g.return=F,b=g;break}b=F}}}var E=u.alternate;if(E!==null){var L=E.child;if(L!==null){E.child=null;do{var x=L.sibling;L.sibling=null,L=x}while(L!==null)}}b=u}}if((u.subtreeFlags&2064)!==0&&i!==null)i.return=u,b=i;else e:for(;b!==null;){if(u=b,(u.flags&2048)!==0)switch(u.tag){case 0:case 11:case 15:Au(9,u,u.return)}var p=u.sibling;if(p!==null){p.return=u.return,b=p;break e}b=u.return}}var m=e.current;for(b=m;b!==null;){i=b;var S=i.child;if((i.subtreeFlags&2064)!==0&&S!==null)S.return=i,b=S;else e:for(i=m;b!==null;){if(s=b,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ns(9,s)}}catch(U){Sn(s,s.return,U)}if(s===i){b=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,b=T;break e}b=s.return}}if(Ue=l,Hr(),nr&&typeof nr.onPostCommitFiberRoot==="function")try{nr.onPostCommitFiberRoot(Zi,e)}catch(U){}r=!0}return r}finally{be=t,Nt.transition=n}}return!1}function Ep(e,n,t){n=tu(t,n),n=q0(e,n,1),e=Vr(e,n,1),n=qn(),e!==null&&(yo(e,1,n),ft(e,n))}function Sn(e,n,t){if(e.tag===3)Ep(e,e,t);else for(;n!==null;){if(n.tag===3){Ep(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError==="function"||typeof r.componentDidCatch==="function"&&(Mr===null||!Mr.has(r))){e=tu(t,e),e=b0(n,e,1),n=Vr(n,e,1),e=qn(),n!==null&&(yo(n,1,e),ft(n,e));break}}n=n.return}}function Ng(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=qn(),e.pingedLanes|=e.suspendedLanes&t,Vn===e&&(In&t)===t&&(On===4||On===3&&(In&130023424)===In&&500>Nn()-bc?il(e,0):qc|=t),ft(e,n)}function k1(e,n){n===0&&((e.mode&1)===0?n=1:(n=ni,ni<<=1,(ni&130023424)===0&&(ni=4194304)));var t=qn();e=vr(e,n),e!==null&&(yo(e,n,t),ft(e,t))}function zg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),k1(e,t)}function xg(e,n){var t=0;switch(e.tag){case 13:var{stateNode:r,memoizedState:l}=e;l!==null&&(t=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(n),k1(e,t)}function S1(e,n){return Ap(e,n)}function Pg(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,n,t,r){return new Pg(e,n,t,r)}function ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lg(e){if(typeof e==="function")return ra(e)?1:0;if(e!==void 0&&e!==null){if(e=e.$$typeof,e===_c)return 11;if(e===Cc)return 14}return 2}function Ir(e,n){var t=e.alternate;return t===null?(t=Et(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _i(e,n,t,r,l,u){var i=2;if(r=e,typeof e==="function")ra(e)&&(i=1);else if(typeof e==="string")i=5;else e:switch(e){case Rl:return sl(t.children,l,u,n);case Sc:i=8,l|=8;break;case Nf:return e=Et(12,t,n,l|2),e.elementType=Nf,e.lanes=u,e;case zf:return e=Et(13,t,n,l),e.elementType=zf,e.lanes=u,e;case xf:return e=Et(19,t,n,l),e.elementType=xf,e.lanes=u,e;case Fp:return rs(t,l,u,n);default:if(typeof e==="object"&&e!==null)switch(e.$$typeof){case Lp:i=10;break e;case Tp:i=9;break e;case _c:i=11;break e;case Cc:i=14;break e;case zr:i=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return n=Et(i,t,n,l),n.elementType=e,n.type=r,n.lanes=u,n}function sl(e,n,t,r){return e=Et(7,e,r,n),e.lanes=t,e}function rs(e,n,t,r){return e=Et(22,e,r,n),e.elementType=Fp,e.lanes=t,e.stateNode={isHidden:!1},e}function _f(e,n,t){return e=Et(6,e,null,n),e.lanes=t,e}function Cf(e,n,t){return n=Et(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Tg(e,n,t,r,l){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=of(0),this.expirationTimes=of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=of(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function la(e,n,t,r,l,u,i,s,f){return e=new Tg(e,n,t,s,f),n===1?(n=1,u===!0&&(n|=8)):n=0,u=Et(3,null,null,n),e.current=u,u.stateNode=e,u.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(u),e}function Fg(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ol,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function _1(e){if(!e)return Br;e=e._reactInternals;e:{if(yl(e)!==e||e.tag!==1)throw Error(B(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(st(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(B(171))}if(e.tag===1){var t=e.type;if(st(t))return _0(e,t,n)}return n}function C1(e,n,t,r,l,u,i,s,f){return e=la(t,r,!0,e,l,u,i,s,f),e.context=_1(null),t=e.current,r=qn(),l=$r(t),u=pr(r,l),u.callback=n!==void 0&&n!==null?n:null,Vr(t,u,l),e.current.lanes=l,yo(e,l,r),ft(e,r),e}function ls(e,n,t,r){var l=n.current,u=qn(),i=$r(l);return t=_1(t),n.context===null?n.context=t:n.pendingContext=t,n=pr(u,i),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Vr(l,n,i),e!==null&&(Bt(e,l,i,u),vi(e,l,i)),i}function Gi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Np(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ua(e,n){Np(e,n),(e=e.alternate)&&Np(e,n)}function jg(){return null}function oa(e){this._internalRoot=e}function us(e){this._internalRoot=e}function ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Og(e,n,t,r,l){if(l){if(typeof r==="function"){var u=r;r=function(){var v=Gi(i);u.call(v)}}var i=C1(n,r,e,0,null,!1,!1,"",zp);return e._reactRootContainer=i,e[yr]=i.current,uo(e.nodeType===8?e.parentNode:e),pl(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r==="function"){var s=r;r=function(){var v=Gi(f);s.call(v)}}var f=la(e,0,!1,null,null,!1,!1,"",zp);return e._reactRootContainer=f,e[yr]=f.current,uo(e.nodeType===8?e.parentNode:e),pl(function(){ls(n,f,t,r)}),f}function is(e,n,t,r,l){var u=t._reactRootContainer;if(u){var i=u;if(typeof l==="function"){var s=l;l=function(){var f=Gi(i);s.call(f)}}ls(n,i,e,l)}else i=Og(t,n,e,l,r);return Gi(i)}var xp,an,Pp,Xu,hr,Ef,Vv,Cd,Ed,Qn,gc,gr,Xo,Ol,Rl,Sc,Nf,Lp,Tp,_c,zf,xf,Cc,zr,Fp,Nd,vn,tf,rf=!1,Du,bo,Mp,Uu,Wv,Hv,Vf=null,Mf=null,Gl=null,Zl=null,uf=!1,$f=!1,nl,Wu=!1,Ei=null,Ni=!1,If=null,Gv,Ap,jd,Yv,Xv,Nn,qv,Nc,Jp,zi,bv,Yp,Zi=null,nr=null,Qt,nm,tm,ei=64,ni=4194304,be=0,bp,xc,e0,n0,t0,Bf=!1,ti,jr=null,Or=null,Rr=null,eo,no,Pr,im,Al,Pi=!0,Li=null,Tr=null,Lc=null,pi=null,lu,Tc,vo,dm,sf,ff,Tu,Ai,Vd,pm,hm,ym,cf,vm,mm,gm,km,wm,Md,Sm,_m,Cm,Nm,zm,xm,$d,Pm,Lm,Tm,Fm,jm,Om,Rm,jc,Hu=null,Dm,o0,Id,Qd=!1,Dl=!1,$m,Ku=null,ro=null,c0=!1,Mu,$u,yi,Ut,Zm,Vl=null,Wf=null,Gu=null,Hf=!1,Ml,af,h0,y0,v0,m0,g0,k0,Gd,Qu,Kf,Gf,Iu,Bu,Am,ui,Jm,Ym,Zf=null,Af=null,Yf,Xm,Yd,qm,uu,er,io,yr,Xf,eg,ng,qf,Il=-1,Br,Zn,it,fl,cr=null,qi=!1,yf=!1,Ql,Bl=0,Ri=null,Di=0,_t,Ct=0,cl=null,ar=1,dr="",pt=null,dt=null,cn=!1,It=null,rg,eu,P0,Vi,Mi=null,Ul=null,Mc=null,ul=null,xr=!1,go,tr,so,fo,hn,vf,mi,mf,al=0,yn=null,jn=null,Dn=null,Qi=!1,Zu=!1,co=0,lg=0,Bi,sg,fg,cg,es,ag,dg,ot=!1,ic,o1,fc,i1,s1,ci=!1,Gn=!1,mg,b=null,mp=!1,$n=null,$t=!1,wg,Ui,Xc,Nt,Ue=0,Vn=null,Ln=null,In=0,at=0,Hl,On=0,ho=null,dl=0,ts=0,qc=0,Ju=null,ut=null,bc=0,ru=1/0,fr=null,Wi=!1,hc=null,Mr=null,ai=!1,Fr=null,Hi=0,Yu=0,yc=null,wi=-1,Si=0,w1,E1,Rg,Ou,Dg,jl,N1,z1=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ia(n))throw Error(B(200));return Fg(e,n,null,t)},x1=function(e,n){if(!ia(e))throw Error(B(299));var t=!1,r="",l=E1;return n!==null&&n!==void 0&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=la(e,1,!1,null,null,t,!1,r,l),e[yr]=n.current,uo(e.nodeType===8?e.parentNode:e),new oa(n)},P1=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0){if(typeof e.render==="function")throw Error(B(188));throw e=Object.keys(e).join(","),Error(B(268,e))}return e=Gp(n),e=e===null?null:e.stateNode,e},L1=function(e){return pl(e)},T1=function(e,n,t){if(!os(n))throw Error(B(200));return is(null,e,n,!0,t)},F1=function(e,n,t){if(!ia(e))throw Error(B(405));var r=t!=null&&t.hydratedSources||null,l=!1,u="",i=E1;if(t!==null&&t!==void 0&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=C1(n,null,e,1,t!=null?t:null,l,!1,u,i),e[yr]=n.current,uo(e),r)for(e=0;e<r.length;e++)t=r[e],l=t._getVersion,l=l(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,l]:n.mutableSourceEagerHydrationData.push(t,l);return new us(n)},j1=function(e,n,t){if(!os(n))throw Error(B(200));return is(null,e,n,!1,t)},O1=function(e){if(!os(e))throw Error(B(40));return e._reactRootContainer?(pl(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[yr]=null})}),!0):!1},R1,D1=function(e,n,t,r){if(!os(t))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return is(e,n,t,!1,r)},V1="18.3.1-next-f1338f8080-20240426";var M1=my(()=>{xp=Un(wt(),1),an=Un(_d(),1);Pp=new Set,Xu={};hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ef=Object.prototype.hasOwnProperty,Vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cd={},Ed={};Qn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Qn[e]=new bn(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Qn[n]=new bn(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Qn[e]=new bn(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Qn[e]=new bn(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Qn[e]=new bn(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Qn[e]=new bn(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Qn[e]=new bn(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Qn[e]=new bn(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Qn[e]=new bn(e,5,!1,e.toLowerCase(),null,!1,!1)});gc=/[\-:]([a-z])/g;"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(gc,kc);Qn[n]=new bn(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(gc,kc);Qn[n]=new bn(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(gc,kc);Qn[n]=new bn(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Qn[e]=new bn(e,1,!1,e.toLowerCase(),null,!1,!1)});Qn.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Qn[e]=new bn(e,1,!1,e.toLowerCase(),null,!0,!0)});gr=xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xo=Symbol.for("react.element"),Ol=Symbol.for("react.portal"),Rl=Symbol.for("react.fragment"),Sc=Symbol.for("react.strict_mode"),Nf=Symbol.for("react.profiler"),Lp=Symbol.for("react.provider"),Tp=Symbol.for("react.context"),_c=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),xf=Symbol.for("react.suspense_list"),Cc=Symbol.for("react.memo"),zr=Symbol.for("react.lazy"),Fp=Symbol.for("react.offscreen"),Nd=Symbol.iterator;vn=Object.assign;Du=Array.isArray;Mp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,l){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,l)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>";for(n=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});Uu={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(Uu).forEach(function(e){Wv.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Uu[n]=Uu[e]})});Hv=vn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});if(hr)try{nl={},Object.defineProperty(nl,"passive",{get:function(){$f=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch(e){$f=!1}Gv={onError:function(e){Wu=!0,Ei=e}};Ap=an.unstable_scheduleCallback,jd=an.unstable_cancelCallback,Yv=an.unstable_shouldYield,Xv=an.unstable_requestPaint,Nn=an.unstable_now,qv=an.unstable_getCurrentPriorityLevel,Nc=an.unstable_ImmediatePriority,Jp=an.unstable_UserBlockingPriority,zi=an.unstable_NormalPriority,bv=an.unstable_LowPriority,Yp=an.unstable_IdlePriority;Qt=Math.clz32?Math.clz32:rm,nm=Math.log,tm=Math.LN2;ti=[],eo=new Map,no=new Map,Pr=[],im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");Al=gr.ReactCurrentBatchConfig;lu={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=ht(lu),vo=vn({},lu,{view:0,detail:0}),dm=ht(vo),Ai=vn({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){if("movementX"in e)return e.movementX;return e!==Tu&&(Tu&&e.type==="mousemove"?(sf=e.screenX-Tu.screenX,ff=e.screenY-Tu.screenY):ff=sf=0,Tu=e),sf},movementY:function(e){return"movementY"in e?e.movementY:ff}}),Vd=ht(Ai),pm=vn({},Ai,{dataTransfer:0}),hm=ht(pm),ym=vn({},vo,{relatedTarget:0}),cf=ht(ym),vm=vn({},lu,{animationName:0,elapsedTime:0,pseudoElement:0}),mm=ht(vm),gm=vn({},lu,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),km=ht(gm),wm=vn({},lu,{data:0}),Md=ht(wm),Sm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_m={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};Nm=vn({},vo,{key:function(e){if(e.key){var n=Sm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_m[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zm=ht(Nm),xm=vn({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=ht(xm),Pm=vn({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),Lm=ht(Pm),Tm=vn({},lu,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=ht(Tm),jm=vn({},Ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:("wheelDeltaX"in e)?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:("wheelDeltaY"in e)?-e.wheelDeltaY:("wheelDelta"in e)?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=ht(jm),Rm=[9,13,27,32],jc=hr&&"CompositionEvent"in window;hr&&"documentMode"in document&&(Hu=document.documentMode);Dm=hr&&"TextEvent"in window&&!Hu,o0=hr&&(!jc||Hu&&8<Hu&&11>=Hu),Id=String.fromCharCode(32);$m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};if(hr){if(hr){if($u="oninput"in document,!$u)yi=document.createElement("div"),yi.setAttribute("oninput","return;"),$u=typeof yi.oninput==="function";Mu=$u}else Mu=!1;c0=Mu&&(!document.documentMode||9<document.documentMode)}Ut=typeof Object.is==="function"?Object.is:Km;Zm=hr&&"documentMode"in document&&11>=document.documentMode;Ml={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionend:li("Transition","TransitionEnd")},af={},h0={};hr&&(h0=document.createElement("div").style,("AnimationEvent"in window)||(delete Ml.animationend.animation,delete Ml.animationiteration.animation,delete Ml.animationstart.animation),("TransitionEvent"in window)||delete Ml.transitionend.transition);y0=Yi("animationend"),v0=Yi("animationiteration"),m0=Yi("animationstart"),g0=Yi("transitionend"),k0=new Map,Gd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");for(Iu=0;Iu<Gd.length;Iu++)Qu=Gd[Iu],Kf=Qu.toLowerCase(),Gf=Qu[0].toUpperCase()+Qu.slice(1),Ur(Kf,"on"+Gf);Ur(y0,"onAnimationEnd");Ur(v0,"onAnimationIteration");Ur(m0,"onAnimationStart");Ur("dblclick","onDoubleClick");Ur("focusin","onFocus");Ur("focusout","onBlur");Ur(g0,"onTransitionEnd");Xl("onMouseEnter",["mouseout","mouseover"]);Xl("onMouseLeave",["mouseout","mouseover"]);Xl("onPointerEnter",["pointerout","pointerover"]);Xl("onPointerLeave",["pointerout","pointerover"]);hl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hl("onBeforeInput",["compositionend","keypress","textInput","paste"]);hl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));Bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Am=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bu));ui="_reactListening"+Math.random().toString(36).slice(2);Jm=/\r\n?/g,Ym=/\u0000|\uFFFD/g;Yf=typeof setTimeout==="function"?setTimeout:void 0,Xm=typeof clearTimeout==="function"?clearTimeout:void 0,Yd=typeof Promise==="function"?Promise:void 0,qm=typeof queueMicrotask==="function"?queueMicrotask:typeof Yd<"u"?function(e){return Yd.resolve(null).then(e).catch(bm)}:Yf;uu=Math.random().toString(36).slice(2),er="__reactFiber$"+uu,io="__reactProps$"+uu,yr="__reactContainer$"+uu,Xf="__reactEvents$"+uu,eg="__reactListeners$"+uu,ng="__reactHandles$"+uu;qf=[];Br={},Zn=Wr(Br),it=Wr(!1),fl=Br;Ql=[],_t=[];rg=gr.ReactCurrentBatchConfig;eu=x0(!0),P0=x0(!1),Vi=Wr(null);go={},tr=Wr(go),so=Wr(go),fo=Wr(go);hn=Wr(0);vf=[];mi=gr.ReactCurrentDispatcher,mf=gr.ReactCurrentBatchConfig;Bi={readContext:zt,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useInsertionEffect:Hn,useLayoutEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useMutableSource:Hn,useSyncExternalStore:Hn,useId:Hn,unstable_isNewReconciler:!1},sg={readContext:zt,useCallback:function(e,n){return bt().memoizedState=[e,n===void 0?null:n],e},useContext:zt,useEffect:op,useImperativeHandle:function(e,n,t){return t=t!==null&&t!==void 0?t.concat([e]):null,gi(4194308,4,U0.bind(null,n,e),t)},useLayoutEffect:function(e,n){return gi(4194308,4,e,n)},useInsertionEffect:function(e,n){return gi(4,2,e,n)},useMemo:function(e,n){var t=bt();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=bt();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=og.bind(null,yn,e),[r.memoizedState,e]},useRef:function(e){var n=bt();return e={current:e},n.memoizedState=e},useState:up,useDebugValue:Jc,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=up(!1),n=e[0];return e=ug.bind(null,e[1]),bt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=yn,l=bt();if(cn){if(t===void 0)throw Error(B(407));t=t()}else{if(t=n(),Vn===null)throw Error(B(349));(al&30)!==0||R0(r,n,t)}l.memoizedState=t;var u={value:t,getSnapshot:n};return l.queue=u,op(V0.bind(null,r,u,e),[e]),r.flags|=2048,po(9,D0.bind(null,r,u,t,n),void 0,null),t},useId:function(){var e=bt(),n=Vn.identifierPrefix;if(cn){var t=dr,r=ar;t=(r&~(1<<32-Qt(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=co++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=lg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},fg={readContext:zt,useCallback:H0,useContext:zt,useEffect:Ac,useImperativeHandle:W0,useInsertionEffect:Q0,useLayoutEffect:B0,useMemo:K0,useReducer:gf,useRef:I0,useState:function(){return gf(ao)},useDebugValue:Jc,useDeferredValue:function(e){var n=xt();return G0(n,jn.memoizedState,e)},useTransition:function(){var e=gf(ao)[0],n=xt().memoizedState;return[e,n]},useMutableSource:j0,useSyncExternalStore:O0,useId:Z0,unstable_isNewReconciler:!1},cg={readContext:zt,useCallback:H0,useContext:zt,useEffect:Ac,useImperativeHandle:W0,useInsertionEffect:Q0,useLayoutEffect:B0,useMemo:K0,useReducer:kf,useRef:I0,useState:function(){return kf(ao)},useDebugValue:Jc,useDeferredValue:function(e){var n=xt();return jn===null?n.memoizedState=e:G0(n,jn.memoizedState,e)},useTransition:function(){var e=kf(ao)[0],n=xt().memoizedState;return[e,n]},useMutableSource:j0,useSyncExternalStore:O0,useId:Z0,unstable_isNewReconciler:!1};es={isMounted:function(e){return(e=e._reactInternals)?yl(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=qn(),l=$r(e),u=pr(r,l);u.payload=n,t!==void 0&&t!==null&&(u.callback=t),n=Vr(e,u,l),n!==null&&(Bt(n,e,l,r),vi(n,e,l))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=qn(),l=$r(e),u=pr(r,l);u.tag=1,u.payload=n,t!==void 0&&t!==null&&(u.callback=t),n=Vr(e,u,l),n!==null&&(Bt(n,e,l,r),vi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=qn(),r=$r(e),l=pr(t,r);l.tag=2,n!==void 0&&n!==null&&(l.callback=n),n=Vr(e,l,r),n!==null&&(Bt(n,e,r,t),vi(n,e,r))}};ag=typeof WeakMap==="function"?WeakMap:Map;dg=gr.ReactCurrentOwner;ic={dehydrated:null,treeContext:null,retryLane:0};o1=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fc=function(){};i1=function(e,n,t,r){var l=e.memoizedProps;if(l!==r){e=n.stateNode,ol(tr.current);var u=null;switch(t){case"input":l=Lf(e,l),r=Lf(e,r),u=[];break;case"select":l=vn({},l,{value:void 0}),r=vn({},r,{value:void 0}),u=[];break;case"textarea":l=jf(e,l),r=jf(e,r),u=[];break;default:typeof l.onClick!=="function"&&typeof r.onClick==="function"&&(e.onclick=Fi)}Rf(t,r);var i;t=null;for(v in l)if(!r.hasOwnProperty(v)&&l.hasOwnProperty(v)&&l[v]!=null)if(v==="style"){var s=l[v];for(i in s)s.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else v!=="dangerouslySetInnerHTML"&&v!=="children"&&v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(Xu.hasOwnProperty(v)?u||(u=[]):(u=u||[]).push(v,null));for(v in r){var f=r[v];if(s=l!=null?l[v]:void 0,r.hasOwnProperty(v)&&f!==s&&(f!=null||s!=null))if(v==="style")if(s){for(i in s)!s.hasOwnProperty(i)||f&&f.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in f)f.hasOwnProperty(i)&&s[i]!==f[i]&&(t||(t={}),t[i]=f[i])}else t||(u||(u=[]),u.push(v,t)),t=f;else v==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,s=s?s.__html:void 0,f!=null&&s!==f&&(u=u||[]).push(v,f)):v==="children"?typeof f!=="string"&&typeof f!=="number"||(u=u||[]).push(v,""+f):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&(Xu.hasOwnProperty(v)?(f!=null&&v==="onScroll"&&sn("scroll",e),u||s===f||(u=[])):(u=u||[]).push(v,f))}t&&(u=u||[]).push("style",t);var v=u;if(n.updateQueue=v)n.flags|=4}};s1=function(e,n,t,r){t!==r&&(n.flags|=4)};mg=typeof WeakSet==="function"?WeakSet:Set;wg=Math.ceil,Ui=gr.ReactCurrentDispatcher,Xc=gr.ReactCurrentOwner,Nt=gr.ReactCurrentBatchConfig,Hl=Wr(0);w1=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||it.current)ot=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return ot=!1,hg(e,n,t);ot=(e.flags&131072)!==0?!0:!1}else ot=!1,cn&&(n.flags&1048576)!==0&&E0(n,Di,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ki(e,n),e=n.pendingProps;var l=ql(n,Zn.current);Jl(n,t),l=Gc(null,n,r,e,l,t);var u=Zc();return n.flags|=1,typeof l==="object"&&l!==null&&typeof l.render==="function"&&l.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,st(r)?(u=!0,Oi(n)):u=!1,n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Bc(n),l.updater=es,n.stateNode=l,l._reactInternals=n,rc(n,r,e,t),n=oc(null,n,r,!0,u,t)):(n.tag=0,cn&&u&&Rc(n),Xn(null,n,l,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ki(e,n),e=n.pendingProps,l=r._init,r=l(r._payload),n.type=r,l=n.tag=Lg(r),e=Mt(r,e),l){case 0:n=uc(null,n,r,e,t);break e;case 1:n=hp(null,n,r,e,t);break e;case 11:n=dp(null,n,r,e,t);break e;case 14:n=pp(null,n,r,Mt(r.type,e),t);break e}throw Error(B(306,r,""))}return n;case 0:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Mt(r,l),uc(e,n,r,l,t);case 1:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Mt(r,l),hp(e,n,r,l,t);case 3:e:{if(r1(n),e===null)throw Error(B(387));r=n.pendingProps,u=n.memoizedState,l=u.element,T0(e,n),$i(n,r,null,t);var i=n.memoizedState;if(r=i.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){l=tu(Error(B(423)),n),n=yp(e,n,r,t,l);break e}else if(r!==l){l=tu(Error(B(424)),n),n=yp(e,n,r,t,l);break e}else for(dt=Dr(n.stateNode.containerInfo.firstChild),pt=n,cn=!0,It=null,t=P0(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(bl(),r===l){n=mr(e,n,t);break e}Xn(e,n,r,t)}n=n.child}return n;case 5:return F0(n),e===null&&ec(n),r=n.type,l=n.pendingProps,u=e!==null?e.memoizedProps:null,i=l.children,Jf(r,l)?i=null:u!==null&&Jf(r,u)&&(n.flags|=32),t1(e,n),Xn(e,n,i,t),n.child;case 6:return e===null&&ec(n),null;case 13:return l1(e,n,t);case 4:return Uc(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=eu(n,null,r,t):Xn(e,n,r,t),n.child;case 11:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Mt(r,l),dp(e,n,r,l,t);case 7:return Xn(e,n,n.pendingProps,t),n.child;case 8:return Xn(e,n,n.pendingProps.children,t),n.child;case 12:return Xn(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,l=n.pendingProps,u=n.memoizedProps,i=l.value,on(Vi,r._currentValue),r._currentValue=i,u!==null)if(Ut(u.value,i)){if(u.children===l.children&&!it.current){n=mr(e,n,t);break e}}else for(u=n.child,u!==null&&(u.return=n);u!==null;){var s=u.dependencies;if(s!==null){i=u.child;for(var f=s.firstContext;f!==null;){if(f.context===r){if(u.tag===1){f=pr(-1,t&-t),f.tag=2;var v=u.updateQueue;if(v!==null){v=v.shared;var y=v.pending;y===null?f.next=f:(f.next=y.next,y.next=f),v.pending=f}}u.lanes|=t,f=u.alternate,f!==null&&(f.lanes|=t),nc(u.return,t,n),s.lanes|=t;break}f=f.next}}else if(u.tag===10)i=u.type===n.type?null:u.child;else if(u.tag===18){if(i=u.return,i===null)throw Error(B(341));i.lanes|=t,s=i.alternate,s!==null&&(s.lanes|=t),nc(i,t,n),i=u.sibling}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===n){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}Xn(e,n,l.children,t),n=n.child}return n;case 9:return l=n.type,r=n.pendingProps.children,Jl(n,t),l=zt(l),r=r(l),n.flags|=1,Xn(e,n,r,t),n.child;case 14:return r=n.type,l=Mt(r,n.pendingProps),l=Mt(r.type,l),pp(e,n,r,l,t);case 15:return e1(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,l=n.pendingProps,l=n.elementType===r?l:Mt(r,l),ki(e,n),n.tag=1,st(r)?(e=!0,Oi(n)):e=!1,Jl(n,t),X0(n,r,l),rc(n,r,l,t),oc(null,n,r,!0,e,t);case 19:return u1(e,n,t);case 22:return n1(e,n,t)}throw Error(B(156,n.tag))};E1=typeof reportError==="function"?reportError:function(e){console.error(e)};us.prototype.render=oa.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(B(409));ls(e,n,null,null)};us.prototype.unmount=oa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pl(function(){ls(null,e,null,null)}),n[yr]=null}};us.prototype.unstable_scheduleHydration=function(e){if(e){var n=n0();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Pr.length&&n!==0&&n<Pr[t].priority;t++);Pr.splice(t,0,e),t===0&&r0(e)}};bp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Vu(n.pendingLanes);t!==0&&(zc(n,t|1),ft(n,Nn()),(Ue&6)===0&&(ru=Nn()+500,Hr()))}break;case 13:pl(function(){var r=vr(e,1);if(r!==null){var l=qn();Bt(r,e,1,l)}}),ua(e,1)}};xc=function(e){if(e.tag===13){var n=vr(e,134217728);if(n!==null){var t=qn();Bt(n,e,134217728,t)}ua(e,134217728)}};e0=function(e){if(e.tag===13){var n=$r(e),t=vr(e,n);if(t!==null){var r=qn();Bt(t,e,n,r)}ua(e,n)}};n0=function(){return be};t0=function(e,n){var t=be;try{return be=e,n()}finally{be=t}};Mf=function(e,n,t){switch(n){case"input":if(Tf(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]');for(n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var l=Xi(r);if(!l)throw Error(B(90));Op(r),Tf(r,l)}}}break;case"textarea":Dp(e,t);break;case"select":n=t.value,n!=null&&Kl(e,!!t.multiple,n,!1)}};Up=ea;Wp=pl;Rg={usingClientEntryPoint:!1,Events:[mo,$l,Xi,Qp,Bp,ea]},Ou={findFiberByHostInstance:ll,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dg={bundleType:Ou.bundleType,version:Ou.version,rendererPackageName:Ou.rendererPackageName,rendererConfig:Ou.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ou.findFiberByHostInstance||jg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){if(jl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!jl.isDisabled&&jl.supportsFiber)try{Zi=jl.inject(Dg),nr=jl}catch(e){}}N1=Rg,R1=ea});var ss=Qo((vS,I1)=>{M1();function $1(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=="function")return;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($1)}catch(e){console.error(e)}}$1(),I1.exports=sa});var Q1=Qo((Mg)=>{var ko=Un(ss());Mg.createRoot=ko.createRoot,Mg.hydrateRoot=ko.hydrateRoot;var Vg});var Rh=Un(wt(),1),Dh=Un(Q1(),1);var z=Un(wt(),1),hh=Un(ss(),1),mn=Un(wt(),1);var B1=Un(wt(),1),$g=Symbol.for("react.element"),Ig=Symbol.for("react.fragment"),Qg=Object.prototype.hasOwnProperty,Bg=B1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ug={key:!0,ref:!0,__self:!0,__source:!0};function U1(e,n,t){var r,l={},u=null,i=null;t!==void 0&&(u=""+t),n.key!==void 0&&(u=""+n.key),n.ref!==void 0&&(i=n.ref);for(r in n)Qg.call(n,r)&&!Ug.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:$g,type:e,key:u,ref:i,props:l,_owner:Bg.current}}var An=Ig,o=U1,a=U1;var lr=Un(wt(),1),mh=Un(ss(),1);var We=Un(wt(),1);var gn=Un(wt(),1);var we=Un(wt(),1);var Fh=Un(wt(),1);var jh=Un(wt(),1);var Wg=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,Hg={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(e);e.textContent=Wg}var ln=Hg,Kg=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Gg={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-components-icon-transitions");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(e);e.textContent=Kg}var rn=Gg;var Zg=({size:e=16})=>o("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:o("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var Ag=({size:e=24,style:n={}})=>a("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n,children:[a("g",{clipPath:"url(#clip0_list_sparkle)",children:[o("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),o("defs",{children:o("clipPath",{id:"clip0_list_sparkle",children:o("rect",{width:"24",height:"24",fill:"white"})})})]}),Jg=({size:e=20,...n})=>a("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[o("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),o("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var Yg=({size:e=24,copied:n=!1,tint:t})=>a("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:t?{color:t,transition:"color 0.3s ease"}:void 0,children:[a("g",{className:`${rn.iconState} ${n?rn.hiddenScaled:rn.visibleScaled}`,children:[o("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),o("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),a("g",{className:`${rn.iconState} ${n?rn.visibleScaled:rn.hiddenScaled}`,children:[o("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Xg=({size:e=24,state:n="idle"})=>{let t=n==="idle",r=n==="sent",l=n==="failed",u=n==="sending";return a("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[o("g",{className:`${rn.iconStateFast} ${t?rn.visibleScaled:u?rn.sending:rn.hiddenScaled}`,children:o("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),a("g",{className:`${rn.iconStateFast} ${r?rn.visibleScaled:rn.hiddenScaled}`,children:[o("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),a("g",{className:`${rn.iconStateFast} ${l?rn.visibleScaled:rn.hiddenScaled}`,children:[o("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),o("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var qg=({size:e=24,isOpen:n=!0})=>a("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[a("g",{className:`${rn.iconFade} ${n?rn.visible:rn.hidden}`,children:[o("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),a("g",{className:`${rn.iconFade} ${n?rn.hidden:rn.visible}`,children:[o("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),o("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),bg=({size:e=24,isPaused:n=!1})=>a("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[a("g",{className:`${rn.iconFadeFast} ${n?rn.hidden:rn.visible}`,children:[o("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),o("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),o("path",{className:`${rn.iconFadeFast} ${n?rn.visible:rn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var ek=({size:e=16})=>a("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[o("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var nk=({size:e=16})=>o("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:o("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var yh=({size:e=16})=>a("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[a("g",{clipPath:"url(#clip0_2_53)",children:[o("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),o("defs",{children:o("clipPath",{id:"clip0_2_53",children:o("rect",{width:"24",height:"24",fill:"white"})})})]}),tk=({size:e=24})=>o("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:o("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),rk=({size:e=16})=>a("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[o("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),lk=({size:e=16})=>o("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:o("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),uk=({size:e=16})=>o("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),ok=({size:e=24})=>o("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),ik=({size:e=16})=>o("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var sk=({size:e=24})=>a("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[o("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),o("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),o("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),vh=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],fa=vh.flatMap((e)=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),Sa="feedback-freeze-styles",ca="__agentation_freeze";function fk(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:(n)=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let e=window;if(!e[ca])e[ca]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};return e[ca]}var Oe=fk();if(typeof window<"u"&&!Oe.installed)Oe.origSetTimeout=window.setTimeout.bind(window),Oe.origSetInterval=window.setInterval.bind(window),Oe.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(e,n,...t)=>{if(typeof e==="string")return Oe.origSetTimeout(e,n);return Oe.origSetTimeout((...r)=>{if(Oe.frozen)Oe.frozenTimeoutQueue.push(()=>e(...r));else e(...r)},n,...t)},window.setInterval=(e,n,...t)=>{if(typeof e==="string")return Oe.origSetInterval(e,n);return Oe.origSetInterval((...r)=>{if(!Oe.frozen)e(...r)},n,...t)},window.requestAnimationFrame=(e)=>{return Oe.origRAF((n)=>{if(Oe.frozen)Oe.frozenRAFQueue.push(e);else e(n)})},Oe.installed=!0;var{origSetTimeout:ce,origSetInterval:ck,origRAF:fu}=Oe;function ak(e){if(!e)return!1;return vh.some((n)=>!!e.closest?.(`[${n}]`))}function dk(){if(typeof document>"u")return;if(Oe.frozen)return;Oe.frozen=!0,Oe.frozenTimeoutQueue=[],Oe.frozenRAFQueue=[];let e=document.getElementById(Sa);if(!e)e=document.createElement("style"),e.id=Sa;e.textContent=`
    *${fa},
    *${fa}::before,
    *${fa}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Oe.pausedAnimations=[];try{document.getAnimations().forEach((n)=>{if(n.playState!=="running")return;let t=n.effect?.target;if(!ak(t))n.pause(),Oe.pausedAnimations.push(n)})}catch{}document.querySelectorAll("video").forEach((n)=>{if(!n.paused)n.dataset.wasPaused="false",n.pause()})}function W1(){if(typeof document>"u")return;if(!Oe.frozen)return;Oe.frozen=!1;let e=Oe.frozenTimeoutQueue;Oe.frozenTimeoutQueue=[];for(let t of e)Oe.origSetTimeout(()=>{if(Oe.frozen){Oe.frozenTimeoutQueue.push(t);return}try{t()}catch(r){console.warn("[agentation] Error replaying queued timeout:",r)}},0);let n=Oe.frozenRAFQueue;Oe.frozenRAFQueue=[];for(let t of n)Oe.origRAF((r)=>{if(Oe.frozen){Oe.frozenRAFQueue.push(t);return}t(r)});for(let t of Oe.pausedAnimations)try{t.play()}catch(r){console.warn("[agentation] Error resuming animation:",r)}Oe.pausedAnimations=[],document.getElementById(Sa)?.remove(),document.querySelectorAll("video").forEach((t)=>{if(t.dataset.wasPaused==="false")t.play().catch(()=>{}),delete t.dataset.wasPaused})}function aa(e){if(!e)return;let n=(t)=>t.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{e.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var Ss=mn.forwardRef(function({element:n,timestamp:t,selectedText:r,placeholder:l="What should change?",initialValue:u="",submitLabel:i="Add",onSubmit:s,onCancel:f,onDelete:v,style:y,accentColor:_="#3c82f7",isExiting:g=!1,lightMode:F=!1,computedStyles:E},L){let[x,p]=mn.useState(u),[m,S]=mn.useState(!1),[T,U]=mn.useState("initial"),[G,D]=mn.useState(!1),[A,ye]=mn.useState(!1),J=mn.useRef(null),ae=mn.useRef(null),Ke=mn.useRef(null),nn=mn.useRef(null);mn.useEffect(()=>{if(g&&T!=="exit")U("exit")},[g,T]),mn.useEffect(()=>{ce(()=>{U("enter")},0);let pe=ce(()=>{U("entered")},200),Ie=ce(()=>{let kn=J.current;if(kn)aa(kn),kn.selectionStart=kn.selectionEnd=kn.value.length,kn.scrollTop=kn.scrollHeight},50);return()=>{if(clearTimeout(pe),clearTimeout(Ie),Ke.current)clearTimeout(Ke.current);if(nn.current)clearTimeout(nn.current)}},[]);let Le=mn.useCallback(()=>{if(nn.current)clearTimeout(nn.current);S(!0),nn.current=ce(()=>{S(!1),aa(J.current)},250)},[]);mn.useImperativeHandle(L,()=>({shake:Le}),[Le]);let Ve=mn.useCallback(()=>{U("exit"),Ke.current=ce(()=>{f()},150)},[f]),Ee=mn.useCallback(()=>{if(!x.trim())return;s(x.trim())},[x,s]),He=mn.useCallback((pe)=>{if(pe.stopPropagation(),pe.nativeEvent.isComposing)return;if(pe.key==="Enter"&&!pe.shiftKey)pe.preventDefault(),Ee();if(pe.key==="Escape")Ve()},[Ee,Ve]),K=[ln.popup,F?ln.light:"",T==="enter"?ln.enter:"",T==="entered"?ln.entered:"",T==="exit"?ln.exit:"",m?ln.shake:""].filter(Boolean).join(" ");return a("div",{ref:ae,className:K,"data-annotation-popup":!0,style:y,onClick:(pe)=>pe.stopPropagation(),children:[a("div",{className:ln.header,children:[E&&Object.keys(E).length>0?a("button",{className:ln.headerToggle,onClick:()=>{let pe=A;if(ye(!A),pe)ce(()=>aa(J.current),0)},type:"button",children:[o("svg",{className:`${ln.chevron} ${A?ln.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),o("span",{className:ln.element,children:n})]}):o("span",{className:ln.element,children:n}),t&&o("span",{className:ln.timestamp,children:t})]}),E&&Object.keys(E).length>0&&o("div",{className:`${ln.stylesWrapper} ${A?ln.expanded:""}`,children:o("div",{className:ln.stylesInner,children:o("div",{className:ln.stylesBlock,children:Object.entries(E).map(([pe,Ie])=>a("div",{className:ln.styleLine,children:[o("span",{className:ln.styleProperty,children:pe.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",o("span",{className:ln.styleValue,children:Ie}),";"]},pe))})})}),r&&a("div",{className:ln.quote,children:["“",r.slice(0,80),r.length>80?"...":"","”"]}),o("textarea",{ref:J,className:ln.textarea,style:{borderColor:G?_:void 0},placeholder:l,value:x,onChange:(pe)=>p(pe.target.value),onFocus:()=>D(!0),onBlur:()=>D(!1),rows:2,onKeyDown:He}),a("div",{className:ln.actions,children:[v&&o("div",{className:ln.deleteWrapper,children:o("button",{className:ln.deleteButton,onClick:v,type:"button",children:o(ok,{size:22})})}),o("button",{className:ln.cancel,onClick:Ve,children:"Cancel"}),o("button",{className:ln.submit,style:{backgroundColor:_,opacity:x.trim()?1:0.4},onClick:Ee,disabled:!x.trim(),children:i})]})]})}),pk=({content:e,children:n,...t})=>{let[r,l]=lr.useState(!1),[u,i]=lr.useState(!1),[s,f]=lr.useState({top:0,right:0}),v=lr.useRef(null),y=lr.useRef(null),_=lr.useRef(null),g=()=>{if(v.current){let L=v.current.getBoundingClientRect();f({top:L.top+L.height/2,right:window.innerWidth-L.left+8})}},F=()=>{if(i(!0),_.current)clearTimeout(_.current),_.current=null;g(),y.current=ce(()=>{l(!0)},500)},E=()=>{if(y.current)clearTimeout(y.current),y.current=null;l(!1),_.current=ce(()=>{i(!1)},150)};return lr.useEffect(()=>{return()=>{if(y.current)clearTimeout(y.current);if(_.current)clearTimeout(_.current)}},[]),a(An,{children:[o("span",{ref:v,onMouseEnter:F,onMouseLeave:E,...t,children:n}),u&&mh.createPortal(o("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:s.top,right:s.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:r?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},hk=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,yk={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-help-tooltip-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(e);e.textContent=hk}var H1=yk,kl=({content:e})=>{return o(pk,{className:H1.tooltip,content:e,children:o(Jg,{className:H1.tooltipIcon})})},X={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},gh=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...X.navigation},{type:"header",label:"Header",...X.header},{type:"hero",label:"Hero",...X.hero},{type:"section",label:"Section",...X.section},{type:"sidebar",label:"Sidebar",...X.sidebar},{type:"footer",label:"Footer",...X.footer},{type:"modal",label:"Modal",...X.modal},{type:"banner",label:"Banner",...X.banner},{type:"drawer",label:"Drawer",...X.drawer},{type:"popover",label:"Popover",...X.popover},{type:"divider",label:"Divider",...X.divider}]},{section:"Content",items:[{type:"card",label:"Card",...X.card},{type:"text",label:"Text",...X.text},{type:"image",label:"Image",...X.image},{type:"video",label:"Video",...X.video},{type:"table",label:"Table",...X.table},{type:"grid",label:"Grid",...X.grid},{type:"list",label:"List",...X.list},{type:"chart",label:"Chart",...X.chart},{type:"codeBlock",label:"Code Block",...X.codeBlock},{type:"map",label:"Map",...X.map},{type:"timeline",label:"Timeline",...X.timeline},{type:"calendar",label:"Calendar",...X.calendar},{type:"accordion",label:"Accordion",...X.accordion},{type:"carousel",label:"Carousel",...X.carousel},{type:"logo",label:"Logo",...X.logo},{type:"faq",label:"FAQ",...X.faq},{type:"gallery",label:"Gallery",...X.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...X.button},{type:"input",label:"Input",...X.input},{type:"search",label:"Search",...X.search},{type:"form",label:"Form",...X.form},{type:"tabs",label:"Tabs",...X.tabs},{type:"dropdown",label:"Dropdown",...X.dropdown},{type:"toggle",label:"Toggle",...X.toggle},{type:"stepper",label:"Stepper",...X.stepper},{type:"rating",label:"Rating",...X.rating},{type:"fileUpload",label:"File Upload",...X.fileUpload},{type:"checkbox",label:"Checkbox",...X.checkbox},{type:"radio",label:"Radio",...X.radio},{type:"slider",label:"Slider",...X.slider},{type:"datePicker",label:"Date Picker",...X.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...X.avatar},{type:"badge",label:"Badge",...X.badge},{type:"tag",label:"Tag",...X.tag},{type:"breadcrumb",label:"Breadcrumb",...X.breadcrumb},{type:"pagination",label:"Pagination",...X.pagination},{type:"progress",label:"Progress",...X.progress},{type:"alert",label:"Alert",...X.alert},{type:"toast",label:"Toast",...X.toast},{type:"notification",label:"Notification",...X.notification},{type:"tooltip",label:"Tooltip",...X.tooltip},{type:"stat",label:"Stat",...X.stat},{type:"skeleton",label:"Skeleton",...X.skeleton},{type:"chip",label:"Chip",...X.chip},{type:"icon",label:"Icon",...X.icon},{type:"spinner",label:"Spinner",...X.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...X.pricing},{type:"testimonial",label:"Testimonial",...X.testimonial},{type:"cta",label:"CTA",...X.cta},{type:"productCard",label:"Product Card",...X.productCard},{type:"profile",label:"Profile",...X.profile},{type:"feature",label:"Feature",...X.feature},{type:"team",label:"Team",...X.team},{type:"login",label:"Login",...X.login},{type:"contact",label:"Contact",...X.contact}]}],Wt={};for(let e of gh)for(let n of e.items)Wt[n.type]=n;function M({w:e,h:n=3,strong:t}){return o("div",{style:{width:typeof e==="number"?`${e}px`:e,height:n,borderRadius:2,background:t?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function en({w:e,h:n,radius:t=3,style:r}){return o("div",{style:{width:typeof e==="number"?`${e}px`:e,height:typeof n==="number"?`${n}px`:n,borderRadius:t,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...r}})}function nt({size:e}){return o("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function vk({width:e,height:n}){let t=Math.max(8,n*0.2);return a("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${t}px`,gap:e*0.02},children:[o(en,{w:Math.max(20,n*0.5),h:Math.max(12,n*0.4),radius:2}),a("div",{style:{flex:1,display:"flex",gap:e*0.03,marginLeft:e*0.04},children:[o(M,{w:e*0.06}),o(M,{w:e*0.07}),o(M,{w:e*0.05}),o(M,{w:e*0.06})]}),o(en,{w:e*0.1,h:Math.min(28,n*0.5),radius:4})]})}function mk({width:e,height:n,text:t}){return a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*0.05},children:[t?o("span",{style:{fontSize:Math.min(20,n*0.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:t}):o(M,{w:e*0.5,h:Math.max(6,n*0.04),strong:!0}),o(M,{w:e*0.6}),o(M,{w:e*0.4}),o(en,{w:Math.min(140,e*0.2),h:Math.min(36,n*0.12),radius:6,style:{marginTop:n*0.06}})]})}function gk({width:e,height:n}){let t=Math.max(3,Math.floor(n/36));return a("div",{style:{padding:e*0.08,display:"flex",flexDirection:"column",gap:n*0.03},children:[o(M,{w:e*0.6,h:4,strong:!0}),Array.from({length:t},(r,l)=>a("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o(en,{w:10,h:10,radius:2}),o(M,{w:e*(0.4+l*17%30/100)})]},l))]})}function kk({width:e,height:n}){let t=Math.max(2,Math.min(4,Math.floor(e/160)));return o("div",{style:{display:"flex",padding:`${n*0.12}px ${e*0.03}px`,gap:e*0.05},children:Array.from({length:t},(r,l)=>a("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o(M,{w:"60%",h:3,strong:!0}),o(M,{w:"80%",h:2}),o(M,{w:"70%",h:2}),o(M,{w:"60%",h:2})]},l))})}function wk({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[a("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o(M,{w:e*0.3,h:4,strong:!0}),o("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),a("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[o(M,{w:"90%"}),o(M,{w:"70%"}),o(M,{w:"80%"})]}),a("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[o(en,{w:70,h:26,radius:4}),o(en,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function Sk({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),a("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[o(M,{w:"70%",h:4,strong:!0}),o(M,{w:"95%",h:2}),o(M,{w:"85%",h:2}),o(M,{w:"50%",h:2})]})]})}function _k({width:e,height:n,text:t}){if(t)return o("div",{style:{padding:4,fontSize:Math.min(14,n*0.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:t});let r=Math.max(2,Math.floor(n/18));return a("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[o(M,{w:e*0.6,h:5,strong:!0}),Array.from({length:r},(l,u)=>o(M,{w:`${70+u*13%25}%`,h:2},u))]})}function Ck({width:e,height:n}){return o("div",{style:{height:"100%",position:"relative"},children:a("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,preserveAspectRatio:"none",fill:"none",children:[o("line",{x1:"0",y1:"0",x2:e,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),o("line",{x1:e,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),o("circle",{cx:e*0.3,cy:n*0.3,r:Math.min(e,n)*0.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function Ek({width:e,height:n}){let t=Math.max(2,Math.min(5,Math.floor(e/100))),r=Math.max(2,Math.min(6,Math.floor(n/32)));return a("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:t},(l,u)=>o("div",{style:{flex:1,padding:"0 8px"},children:o(M,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:r},(l,u)=>o("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:t},(i,s)=>o("div",{style:{flex:1,padding:"0 8px"},children:o(M,{w:`${50+(u*7+s*13)%40}%`,h:2})},s))},u))]})}function Nk({width:e,height:n}){let t=Math.max(2,Math.floor(n/28));return o("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:t},(r,l)=>a("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o(nt,{size:8}),o(M,{w:`${55+l*17%35}%`,h:2})]},l))})}function zk({width:e,height:n,text:t}){return o("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:t?o("span",{style:{fontSize:Math.min(13,n*0.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:t}):o(M,{w:Math.max(20,e*0.5),h:3,strong:!0})})}function xk({width:e,height:n}){return a("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[o(M,{w:Math.min(80,e*0.3),h:2}),o("div",{style:{height:Math.min(36,n*0.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:o(M,{w:"40%",h:2})})]})}function Pk({width:e,height:n}){let t=Math.max(2,Math.min(5,Math.floor(n/56)));return a("div",{style:{display:"flex",flexDirection:"column",gap:n*0.04,padding:8},children:[Array.from({length:t},(r,l)=>a("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[o(M,{w:60+l*17%30,h:2}),o(en,{w:"100%",h:28,radius:4})]},l)),o(en,{w:Math.min(120,e*0.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Lk({width:e,height:n}){let t=Math.max(2,Math.min(4,Math.floor(e/120)));return a("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:t},(r,l)=>o("div",{style:{padding:"8px 12px",borderBottom:l===0?"2px solid var(--agd-bar-strong)":"none"},children:o(M,{w:60,h:3,strong:l===0})},l))}),a("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[o(M,{w:"80%",h:2}),o(M,{w:"65%",h:2}),o(M,{w:"75%",h:2})]})]})}function Tk({width:e,height:n}){let t=Math.min(e,n)/2;return a("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[o("circle",{cx:e/2,cy:n/2,r:t-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),o("circle",{cx:e/2,cy:n*0.38,r:t*0.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),o("path",{d:`M${e/2-t*0.55} ${n*0.78} C${e/2-t*0.55} ${n*0.55} ${e/2+t*0.55} ${n*0.55} ${e/2+t*0.55} ${n*0.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Fk({width:e,height:n}){return o("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o(M,{w:Math.max(16,e*0.5),h:2,strong:!0})})}function jk({width:e,height:n}){return a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*0.08},children:[o(M,{w:e*0.5,h:Math.max(5,n*0.06),strong:!0}),o(M,{w:e*0.35})]})}function Ok({width:e,height:n}){return a("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*0.04,padding:e*0.04},children:[o(M,{w:e*0.3,h:4,strong:!0}),o(M,{w:e*0.7}),o(M,{w:e*0.5}),a("div",{style:{flex:1,display:"flex",gap:e*0.03,marginTop:n*0.06},children:[o(en,{w:"33%",h:"100%",radius:4}),o(en,{w:"33%",h:"100%",radius:4}),o(en,{w:"33%",h:"100%",radius:4})]})]})}function Rk({width:e,height:n}){let t=Math.max(2,Math.min(4,Math.floor(e/140))),r=Math.max(1,Math.min(3,Math.floor(n/120)));return o("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:t*r},(l,u)=>o(en,{w:"100%",h:"100%",radius:4},u))})}function Dk({width:e,height:n}){let t=Math.max(2,Math.floor((n-32)/28));return a("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:o(M,{w:e*0.5,h:3,strong:!0})}),o("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:t},(r,l)=>o("div",{style:{padding:"4px 6px",borderRadius:3,background:l===0?"var(--agd-fill)":"transparent"},children:o(M,{w:`${50+l*17%35}%`,h:2,strong:l===0})},l))})]})}function Vk({width:e,height:n}){let t=Math.min(e,n)/2;return a("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[o("rect",{x:"1",y:"1",width:e-2,height:n-2,rx:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),o("circle",{cx:e-t,cy:n/2,r:t*0.7,fill:"var(--agd-bar)"})]})}function Mk({width:e,height:n}){let t=Math.min(n/2,20);return a("div",{style:{height:"100%",borderRadius:t,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*0.6}px`,gap:6},children:[o(nt,{size:Math.min(14,n*0.4)}),o(M,{w:"50%",h:2})]})}function $k({width:e,height:n}){return a("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[o(nt,{size:Math.min(20,n*0.5)}),a("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o(M,{w:"60%",h:3,strong:!0}),o(M,{w:"80%",h:2})]}),o("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Ik({width:e,height:n}){return a("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[o("rect",{x:"0",y:"0",width:e,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),o("rect",{x:"1",y:"1",width:e*0.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function Qk({width:e,height:n}){let t=Math.max(3,Math.min(7,Math.floor(e/50))),r=e/(t*2);return o("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:t},(l,u)=>{let i=30+(u*37+17)%55;return o(en,{w:r,h:`${i}%`,radius:2},u)})})}function Bk({width:e,height:n}){let t=Math.min(e,n)*0.12;return a("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[o(en,{w:"100%",h:"100%",radius:4}),o("div",{style:{position:"absolute",width:t*2,height:t*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o("div",{style:{width:0,height:0,borderLeft:`${t*0.6}px solid var(--agd-bar-strong)`,borderTop:`${t*0.4}px solid transparent`,borderBottom:`${t*0.4}px solid transparent`,marginLeft:t*0.15}})})]})}function Uk({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[o("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o(M,{w:"60%",h:2})}),o("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Wk({width:e,height:n}){let t=Math.max(2,Math.min(4,Math.floor(e/80)));return o("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:t},(r,l)=>a("div",{style:{display:"flex",alignItems:"center",gap:4},children:[l>0&&o("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),o(M,{w:40+l*13%20,h:2,strong:l===t-1})]},l))})}function Hk({width:e,height:n}){let t=Math.max(3,Math.min(5,Math.floor(e/40))),r=Math.min(28,n*0.8);return o("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:t},(l,u)=>o(en,{w:r,h:r,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Kk({width:e}){return o("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:o("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function Gk({width:e,height:n}){let t=Math.max(2,Math.min(4,Math.floor(n/40)));return o("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:t},(r,l)=>a("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:l===0?2:1},children:[o(M,{w:`${40+l*17%25}%`,h:3,strong:!0}),o("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:l===0?"▼":"▶"})]},l))})}function Zk({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[a("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[o("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),o(en,{w:"100%",h:"100%",radius:4}),o("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),a("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[o(nt,{size:5}),o(nt,{size:5}),o(nt,{size:5})]})]})}function Ak({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*0.04},children:[o(M,{w:e*0.4,h:3,strong:!0}),o(M,{w:e*0.3,h:6,strong:!0}),o("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(t,r)=>a("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o(nt,{size:5}),o(M,{w:`${50+r*17%35}%`,h:2})]},r))}),o(en,{w:e*0.7,h:Math.min(32,n*0.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Jk({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[o("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),a("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o(M,{w:"90%",h:2}),o(M,{w:"75%",h:2}),o(M,{w:"60%",h:2})]}),a("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o(nt,{size:20}),a("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[o(M,{w:60,h:3,strong:!0}),o(M,{w:40,h:2})]})]})]})}function Yk({width:e,height:n}){return a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*0.08},children:[o(M,{w:e*0.5,h:Math.max(4,n*0.05),strong:!0}),o(M,{w:e*0.35}),o(en,{w:Math.min(140,e*0.25),h:Math.min(32,n*0.15),radius:6,style:{marginTop:n*0.04,background:"var(--agd-bar)"}})]})}function Xk({width:e,height:n}){return a("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[o("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:o("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),a("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o(M,{w:"40%",h:3,strong:!0}),o(M,{w:"70%",h:2})]})]})}function qk({width:e,height:n}){return a("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[o(M,{w:e*0.4,h:3,strong:!0}),o(en,{w:60,h:Math.min(24,n*0.6),radius:4})]})}function bk({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*0.06},children:[o(M,{w:e*0.5,h:2}),o(M,{w:e*0.4,h:Math.max(8,n*0.18),strong:!0}),o(M,{w:e*0.3,h:2})]})}function e2({width:e,height:n}){let t=Math.max(3,Math.min(5,Math.floor(e/100))),r=Math.min(12,n*0.35);return o("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:t},(l,u)=>a("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[o("div",{style:{width:r,height:r,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<t-1&&o("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function n2({width:e,height:n}){return a("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[o(M,{w:Math.max(16,e*0.5),h:2,strong:!0}),o("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function t2({width:e,height:n}){let r=Math.min(n*0.7,e/7.5);return o("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:r*0.2},children:Array.from({length:5},(l,u)=>o("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",children:o("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function r2({width:e,height:n}){return a("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[a("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[o("line",{x1:0,y1:n*0.3,x2:e,y2:n*0.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),o("line",{x1:0,y1:n*0.6,x2:e,y2:n*0.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),o("line",{x1:e*0.4,y1:0,x2:e*0.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),o("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:a("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[o("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),o("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function l2({width:e,height:n}){let t=Math.max(3,Math.min(5,Math.floor(n/60)));return a("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[o("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:t},(r,l)=>a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[o(nt,{size:8}),l<t-1&&o("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},l))}),o("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:t},(r,l)=>a("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o(M,{w:`${35+l*13%25}%`,h:3,strong:!0}),o(M,{w:`${50+l*17%30}%`,h:2})]},l))})]})}function u2({width:e,height:n}){return a("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*0.06},children:[a("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[o("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),o("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),o(M,{w:e*0.4,h:2}),o(M,{w:e*0.25,h:2})]})}function o2({width:e,height:n}){let t=Math.max(3,Math.min(8,Math.floor(n/20)));return a("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[a("div",{style:{display:"flex",gap:3,marginBottom:4},children:[o(nt,{size:6}),o(nt,{size:6}),o(nt,{size:6})]}),Array.from({length:t},(r,l)=>o("div",{style:{display:"flex",gap:6,paddingLeft:l>0&&l<t-1?12:0},children:o(M,{w:`${25+l*23%50}%`,h:2,strong:l===0})},l))]})}function i2({width:e,height:n}){let l=Math.min((e-16)/7,(n-40)/6);return a("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[a("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[o("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),o(M,{w:e*0.3,h:3,strong:!0}),o("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),a("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,i)=>o("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:l*0.6},children:o(M,{w:l*0.5,h:2})},`h${i}`)),Array.from({length:35},(u,i)=>o("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:l},children:o("div",{style:{width:l*0.6,height:l*0.6,borderRadius:"50%",background:i===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:o("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:i===12?1:0.3}})})},i))]})]})}function s2({width:e,height:n}){return a("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[o(nt,{size:Math.min(32,n*0.55)}),a("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o(M,{w:"50%",h:3,strong:!0}),o(M,{w:"75%",h:2})]}),o(M,{w:30,h:2})]})}function f2({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),a("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[o(M,{w:"65%",h:4,strong:!0}),o(M,{w:"40%",h:3}),o("div",{style:{flex:1}}),a("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o(M,{w:"30%",h:5,strong:!0}),o(en,{w:Math.min(70,e*0.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function c2({width:e,height:n}){let t=Math.min(48,n*0.3);return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*0.06},children:[o(nt,{size:t}),o(M,{w:e*0.45,h:4,strong:!0}),o(M,{w:e*0.3,h:2}),a("div",{style:{display:"flex",gap:e*0.08,marginTop:n*0.04},children:[a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o(M,{w:20,h:3,strong:!0}),o(M,{w:28,h:2})]}),a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o(M,{w:20,h:3,strong:!0}),o(M,{w:28,h:2})]}),a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o(M,{w:20,h:3,strong:!0}),o(M,{w:28,h:2})]})]})]})}function a2({width:e,height:n}){let t=Math.max(e*0.6,80),r=Math.max(3,Math.floor(n/40));return a("div",{style:{height:"100%",display:"flex"},children:[o("div",{style:{width:e-t,background:"var(--agd-fill)",opacity:0.3}}),a("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*0.04},children:[a("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*0.06},children:[o(M,{w:t*0.4,h:4,strong:!0}),o("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:r},(l,u)=>o("div",{style:{padding:"6px 0"},children:o(M,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function d2({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[a("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[o(M,{w:"70%",h:3,strong:!0}),o(M,{w:"90%",h:2}),o(M,{w:"60%",h:2})]}),o("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function p2({width:e,height:n}){let t=Math.min(n*0.7,e*0.3);return a("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*0.08},children:[o(en,{w:t,h:t,radius:t*0.25}),o(M,{w:e*0.45,h:Math.max(4,n*0.2),strong:!0})]})}function h2({width:e,height:n}){let t=Math.max(2,Math.min(5,Math.floor(n/56)));return o("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:t},(r,l)=>a("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:l===0?2:1},children:[a("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),o(M,{w:e*(0.3+l*13%25/100),h:3,strong:!0})]}),o("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:l===0?"▼":"▶"})]},l))})}function y2({width:e,height:n}){let t=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.max(1,Math.min(3,Math.floor(n/120)));return o("div",{style:{display:"grid",gridTemplateColumns:`repeat(${t}, 1fr)`,gridTemplateRows:`repeat(${r}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:t*r},(l,u)=>o("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:a("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[o("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),o("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function v2({width:e,height:n}){let t=Math.min(e,n);return a("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[o("rect",{x:"1",y:(n-t+2)/2,width:t-2,height:t-2,rx:t*0.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),o("path",{d:`M${t*0.25} ${n/2}l${t*0.2} ${t*0.2} ${t*0.3}-${t*0.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function m2({width:e,height:n}){let t=Math.min(e,n)/2-1;return a("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[o("circle",{cx:e/2,cy:n/2,r:t,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),o("circle",{cx:e/2,cy:n/2,r:t*0.45,fill:"var(--agd-bar)"})]})}function g2({width:e,height:n}){let t=Math.max(2,n*0.12),r=Math.min(n*0.35,10),l=e*0.55;return a("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[o("div",{style:{width:"100%",height:t,borderRadius:t/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:o("div",{style:{width:l,height:"100%",borderRadius:t/2,background:"var(--agd-bar)"}})}),o("div",{style:{position:"absolute",left:l-r,width:r*2,height:r*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function k2({width:e,height:n}){let t=Math.min(36,n*0.15),r=7,l=4,u=Math.min((e-16)/7,(n-t-40)/5);return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[a("div",{style:{height:t,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[o(M,{w:"40%",h:2}),a("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[o("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),o("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),a("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[a("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[o("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),o(M,{w:e*0.25,h:2,strong:!0}),o("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),o("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:1,padding:"0 4px",flex:1},children:Array.from({length:28},(i,s)=>o("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:o("div",{style:{width:u*0.5,height:u*0.5,borderRadius:"50%",background:s===10?"var(--agd-bar)":"transparent"},children:o("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:o("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:s===10?1:0.25}})})})},s))})]})]})}function w2({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*0.08,padding:4},children:[o("div",{style:{width:"100%",height:n*0.2,borderRadius:4,background:"var(--agd-fill)"}}),o("div",{style:{width:"70%",height:Math.max(6,n*0.1),borderRadius:3,background:"var(--agd-fill)"}}),o("div",{style:{width:"90%",height:Math.max(4,n*0.06),borderRadius:3,background:"var(--agd-fill)"}}),o("div",{style:{width:"50%",height:Math.max(4,n*0.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function S2({width:e,height:n}){return o("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:a("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*0.3}px`,gap:4},children:[o(M,{w:"60%",h:2,strong:!0}),o("div",{style:{width:Math.max(6,n*0.3),height:Math.max(6,n*0.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function _2({width:e,height:n}){let t=Math.min(e,n);return o("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:o("path",{d:`M${e/2} ${(n-t)/2+t*0.1}l${t*0.12} ${t*0.25} ${t*0.28} ${t*0.04}-${t*0.2} ${t*0.2} ${t*0.05} ${t*0.28}-${t*0.25}-${t*0.12}-${t*0.25} ${t*0.12} ${t*0.05}-${t*0.28}-${t*0.2}-${t*0.2} ${t*0.28}-${t*0.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function C2({width:e,height:n}){let t=Math.min(e,n)/2-2;return a("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${n}`,fill:"none",children:[o("circle",{cx:e/2,cy:n/2,r:t,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),o("path",{d:`M${e/2} ${n/2-t}a${t} ${t} 0 0 1 ${t} ${t}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function E2({width:e,height:n}){let t=Math.min(36,n*0.25,e*0.12),r=Math.max(1,Math.min(3,Math.floor(n/80)));return o("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:r},(l,u)=>a("div",{style:{display:"flex",gap:e*0.04,alignItems:"flex-start"},children:[o(en,{w:t,h:t,radius:t*0.25}),a("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o(M,{w:`${40+u*13%20}%`,h:3,strong:!0}),o(M,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function N2({width:e,height:n}){let t=Math.max(2,Math.min(4,Math.floor(e/120))),r=Math.min(36,n*0.25);return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*0.06,padding:n*0.06},children:[o(M,{w:e*0.3,h:4,strong:!0}),o("div",{style:{display:"flex",gap:e*0.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:t},(l,u)=>a("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[o(nt,{size:r}),o(M,{w:e*0.12,h:3,strong:!0}),o(M,{w:e*0.08,h:2})]},u))})]})}function z2({width:e,height:n}){let t=Math.max(2,Math.min(3,Math.floor(n/80)));return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*0.06,gap:n*0.04},children:[o(M,{w:e*0.5,h:Math.max(5,n*0.04),strong:!0}),o(M,{w:e*0.35,h:2}),o("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*0.03,marginTop:n*0.04},children:Array.from({length:t},(r,l)=>a("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o(M,{w:Math.min(60,e*0.2),h:2}),o(en,{w:"100%",h:Math.min(32,n*0.1),radius:4})]},l))}),o(en,{w:"100%",h:Math.min(36,n*0.12),radius:6,style:{marginTop:n*0.03,background:"var(--agd-bar)"}}),o(M,{w:e*0.4,h:2})]})}function x2({width:e,height:n}){return a("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*0.04,gap:n*0.03},children:[o(M,{w:e*0.4,h:4,strong:!0}),o(M,{w:e*0.6,h:2}),a("div",{style:{display:"flex",gap:6,marginTop:n*0.03},children:[a("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o(M,{w:50,h:2}),o(en,{w:"100%",h:Math.min(28,n*0.1),radius:4})]}),a("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o(M,{w:40,h:2}),o(en,{w:"100%",h:Math.min(28,n*0.1),radius:4})]})]}),a("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o(M,{w:50,h:2}),o(en,{w:"100%",h:Math.min(28,n*0.1),radius:4})]}),a("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[o(M,{w:60,h:2}),o(en,{w:"100%",h:"100%",radius:4})]}),o(en,{w:Math.min(120,e*0.3),h:Math.min(30,n*0.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var P2={navigation:vk,hero:mk,sidebar:gk,footer:kk,modal:wk,card:Sk,text:_k,image:Ck,table:Ek,list:Nk,button:zk,input:xk,form:Pk,tabs:Lk,avatar:Tk,badge:Fk,header:jk,section:Ok,grid:Rk,dropdown:Dk,toggle:Vk,search:Mk,toast:$k,progress:Ik,chart:Qk,video:Bk,tooltip:Uk,breadcrumb:Wk,pagination:Hk,divider:Kk,accordion:Gk,carousel:Zk,pricing:Ak,testimonial:Jk,cta:Yk,alert:Xk,banner:qk,stat:bk,stepper:e2,tag:n2,rating:t2,map:r2,timeline:l2,fileUpload:u2,codeBlock:o2,calendar:i2,notification:s2,productCard:f2,profile:c2,drawer:a2,popover:d2,logo:p2,faq:h2,gallery:y2,checkbox:v2,radio:m2,slider:g2,datePicker:k2,skeleton:w2,chip:S2,icon:_2,spinner:C2,feature:E2,team:N2,login:z2,contact:x2};function L2({type:e,width:n,height:t,text:r}){let l=P2[e];if(!l)return o("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:o("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:0.5},children:e})});return o("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:o(l,{width:n,height:t,text:r})})}var T2=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,F2={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-design-mode-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(e);e.textContent=T2}var O=F2,ou=24,fs=5;function K1(e,n,t,r,l){let u=1/0,i=1/0,s=e.x,f=e.x+e.width,v=e.x+e.width/2,y=e.y,_=e.y+e.height,g=e.y+e.height/2,F=!r,E=F?[s,f,v]:[...r.left?[s]:[],...r.right?[f]:[]],L=F?[y,_,g]:[...r.top?[y]:[],...r.bottom?[_]:[]],x=[];for(let ae of n)if(!t.has(ae.id))x.push(ae);if(l)x.push(...l);for(let ae of x){let Ke=ae.x,nn=ae.x+ae.width,Le=ae.x+ae.width/2,Ve=ae.y,Ee=ae.y+ae.height,He=ae.y+ae.height/2;for(let K of E)for(let pe of[Ke,nn,Le]){let Ie=pe-K;if(Math.abs(Ie)<fs&&Math.abs(Ie)<Math.abs(u))u=Ie}for(let K of L)for(let pe of[Ve,Ee,He]){let Ie=pe-K;if(Math.abs(Ie)<fs&&Math.abs(Ie)<Math.abs(i))i=Ie}}let p=Math.abs(u)<fs?u:0,m=Math.abs(i)<fs?i:0,S=[],T=new Set,U=s+p,G=f+p,D=v+p,A=y+m,ye=_+m,J=g+m;for(let ae of x){let Ke=ae.x,nn=ae.x+ae.width,Le=ae.x+ae.width/2,Ve=ae.y,Ee=ae.y+ae.height,He=ae.y+ae.height/2;for(let K of[Ke,Le,nn])for(let pe of[U,D,G])if(Math.abs(pe-K)<0.5){let Ie=`x:${Math.round(K)}`;if(!T.has(Ie))T.add(Ie),S.push({axis:"x",pos:K})}for(let K of[Ve,He,Ee])for(let pe of[A,J,ye])if(Math.abs(pe-K)<0.5){let Ie=`y:${Math.round(K)}`;if(!T.has(Ie))T.add(Ie),S.push({axis:"y",pos:K})}}return{dx:p,dy:m,guides:S}}function G1(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function j2({placements:e,onChange:n,activeComponent:t,onActiveComponentChange:r,isDarkMode:l,exiting:u,onInteractionChange:i,className:s,passthrough:f,extraSnapRects:v,onSelectionChange:y,deselectSignal:_,onDragMove:g,onDragEnd:F,clearSignal:E,wireframe:L}){let[x,p]=We.useState(new Set),[m,S]=We.useState(null),[T,U]=We.useState(null),[G,D]=We.useState(null),[A,ye]=We.useState([]),[J,ae]=We.useState(null),[Ke,nn]=We.useState(!1),Le=We.useRef(!1),[Ve,Ee]=We.useState(new Set),He=We.useRef(new Map),K=We.useRef(null),pe=We.useRef(null),Ie=We.useRef(e);Ie.current=e;let kn=We.useRef(y);kn.current=y;let tt=We.useRef(g);tt.current=g;let Jn=We.useRef(F);Jn.current=F;let kr=We.useRef(_);We.useEffect(()=>{if(_!==kr.current)kr.current=_,p(new Set)},[_]);let yt=We.useRef(E);We.useEffect(()=>{if(E!==void 0&&E!==yt.current){yt.current=E;let W=new Set(Ie.current.map((se)=>se.id));if(W.size>0)Ee(W),p(new Set),pe.current=null,ce(()=>{n([]),Ee(new Set)},180)}},[E,n]),We.useEffect(()=>{let W=(se)=>{let ve=se.target;if(ve.tagName==="INPUT"||ve.tagName==="TEXTAREA"||ve.isContentEditable)return;if((se.key==="Backspace"||se.key==="Delete")&&x.size>0){se.preventDefault();let me=new Set(x);Ee(me),p(new Set),ce(()=>{n(Ie.current.filter((Ge)=>!me.has(Ge.id))),Ee(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(se.key)&&x.size>0){se.preventDefault();let me=se.shiftKey?20:1,Ge=se.key==="ArrowLeft"?-me:se.key==="ArrowRight"?me:0,Je=se.key==="ArrowUp"?-me:se.key==="ArrowDown"?me:0;n(e.map((Qe)=>x.has(Qe.id)?{...Qe,x:Math.max(0,Qe.x+Ge),y:Math.max(0,Qe.y+Je)}:Qe));return}if(se.key==="Escape"){if(t)r(null);else if(x.size>0)p(new Set);return}};return document.addEventListener("keydown",W),()=>document.removeEventListener("keydown",W)},[x,t,e,n,r]);let wr=We.useCallback((W)=>{if(W.button!==0)return;if(f)return;if(W.target.closest(`.${O.placement}`))return;W.preventDefault(),W.stopPropagation();let ve=window.scrollY,Pe=W.clientX,me=W.clientY;if(t){pe.current="place",i?.(!0);let Ge=!1,Je=Pe,Qe=me,Re=(N)=>{Je=N.clientX,Qe=N.clientY;let P=Math.abs(Je-Pe),V=Math.abs(Qe-me);if(P>5||V>5)Ge=!0;if(Ge){let $=Math.min(Pe,Je),Y=Math.min(me,Qe),te=Math.abs(Je-Pe),Q=Math.abs(Qe-me);S({x:$,y:Y,w:te,h:Q}),D({x:N.clientX+12,y:N.clientY+12,text:`${Math.round(te)} × ${Math.round(Q)}`})}},de=(N)=>{window.removeEventListener("mousemove",Re),window.removeEventListener("mouseup",de),S(null),D(null),pe.current=null,i?.(!1);let P=X[t],V,$,Y,te;if(Ge)V=Math.min(Pe,Je),$=Math.min(me,Qe)+ve,Y=Math.max(ou,Math.abs(Je-Pe)),te=Math.max(ou,Math.abs(Qe-me));else Y=P.width,te=P.height,V=Pe-Y/2,$=me+ve-te/2;V=Math.max(0,V),$=Math.max(0,$);let Q={id:G1(),type:t,x:V,y:$,width:Y,height:te,scrollY:ve,timestamp:Date.now()},le=[...e,Q];n(le),p(new Set([Q.id])),r(null)};window.addEventListener("mousemove",Re),window.addEventListener("mouseup",de)}else{if(!W.shiftKey)p(new Set);pe.current="select";let Ge=!1,Je=(Re)=>{let de=Math.abs(Re.clientX-Pe),N=Math.abs(Re.clientY-me);if(de>4||N>4)Ge=!0;if(Ge){let P=Math.min(Pe,Re.clientX),V=Math.min(me,Re.clientY);U({x:P,y:V,w:Math.abs(Re.clientX-Pe),h:Math.abs(Re.clientY-me)})}},Qe=(Re)=>{if(window.removeEventListener("mousemove",Je),window.removeEventListener("mouseup",Qe),pe.current=null,Ge){let de=Math.min(Pe,Re.clientX),N=Math.min(me,Re.clientY)+ve,P=Math.abs(Re.clientX-Pe),V=Math.abs(Re.clientY-me),$=new Set(W.shiftKey?x:new Set);for(let Y of e){let te=Y.y-ve;if(Y.x+Y.width>de&&Y.x<de+P&&Y.y+Y.height>N&&Y.y<N+V)$.add(Y.id)}p($)}U(null)};window.addEventListener("mousemove",Je),window.addEventListener("mouseup",Qe)}},[t,f,e,n,x]),Pt=We.useCallback((W,se)=>{if(W.button!==0)return;let ve=W.target;if(ve.closest(`.${O.handle}`)||ve.closest(`.${O.deleteButton}`))return;W.preventDefault(),W.stopPropagation();let Pe;if(W.shiftKey)if(Pe=new Set(x),Pe.has(se))Pe.delete(se);else Pe.add(se);else if(!x.has(se))Pe=new Set([se]);else Pe=new Set(x);if(p(Pe),Pe.size!==x.size||[...Pe].some((le)=>!x.has(le)))kn.current?.(Pe,W.shiftKey);let Ge=window.scrollY,Je=W.clientX,Qe=W.clientY,Re=new Map;for(let le of e)if(Pe.has(le.id))Re.set(le.id,{x:le.x,y:le.y});pe.current="move",i?.(!0);let de=!1,N=!1,P=e,V=0,$=0,Y=new Map;for(let le of e)if(Re.has(le.id))Y.set(le.id,{w:le.width,h:le.height});let te=(le)=>{let _e=le.clientX-Je,Me=le.clientY-Qe;if(Math.abs(_e)>2||Math.abs(Me)>2)de=!0;if(!de)return;if(le.altKey&&!N){N=!0;let ge=[];for(let un of e)if(Re.has(un.id))ge.push({...un,id:G1(),timestamp:Date.now()});P=[...e,...ge]}let Ze=1/0,ue=1/0,Ye=-1/0,Fe=-1/0;for(let[ge,un]of Re){let Rn=Y.get(ge);if(!Rn)continue;Ze=Math.min(Ze,un.x+_e),ue=Math.min(ue,un.y+Me),Ye=Math.max(Ye,un.x+_e+Rn.w),Fe=Math.max(Fe,un.y+Me+Rn.h)}let Ne={x:Ze,y:ue,width:Ye-Ze,height:Fe-ue},{dx:oe,dy:Xe,guides:$e}=K1(Ne,P,new Set(Re.keys()),void 0,v);ye($e);let ze=_e+oe,Be=Me+Xe;V=ze,$=Be,n(P.map((ge)=>{let un=Re.get(ge.id);if(!un)return ge;return{...ge,x:Math.max(0,un.x+ze),y:Math.max(0,un.y+Be)}})),tt.current?.(ze,Be)},Q=()=>{window.removeEventListener("mousemove",te),window.removeEventListener("mouseup",Q),pe.current=null,i?.(!1),ye([]),Jn.current?.(V,$,de)};window.addEventListener("mousemove",te),window.addEventListener("mouseup",Q)},[x,e,n,i]),ur=We.useCallback((W,se,ve)=>{W.preventDefault(),W.stopPropagation();let Pe=e.find(($)=>$.id===se);if(!Pe)return;p(new Set([se])),pe.current="resize",i?.(!0);let{clientX:me,clientY:Ge}=W,Je=Pe.width,Qe=Pe.height,Re=Pe.x,de=Pe.y,N={left:ve.includes("w"),right:ve.includes("e"),top:ve.includes("n"),bottom:ve.includes("s")},P=($)=>{let Y=$.clientX-me,te=$.clientY-Ge,Q=Je,le=Qe,_e=Re,Me=de;if(ve.includes("e"))Q=Math.max(ou,Je+Y);if(ve.includes("w"))Q=Math.max(ou,Je-Y),_e=Re+Je-Q;if(ve.includes("s"))le=Math.max(ou,Qe+te);if(ve.includes("n"))le=Math.max(ou,Qe-te),Me=de+Qe-le;let Ze={x:_e,y:Me,width:Q,height:le},{dx:ue,dy:Ye,guides:Fe}=K1(Ze,Ie.current,new Set([se]),N,v);if(ye(Fe),ue!==0){if(N.right)Q+=ue;else if(N.left)_e+=ue,Q-=ue}if(Ye!==0){if(N.bottom)le+=Ye;else if(N.top)Me+=Ye,le-=Ye}n(Ie.current.map((Ne)=>Ne.id===se?{...Ne,x:_e,y:Me,width:Q,height:le}:Ne)),D({x:$.clientX+12,y:$.clientY+12,text:`${Math.round(Q)} × ${Math.round(le)}`})},V=()=>{window.removeEventListener("mousemove",P),window.removeEventListener("mouseup",V),D(null),pe.current=null,i?.(!1),ye([])};window.addEventListener("mousemove",P),window.addEventListener("mouseup",V)},[e,n,i]),Sr=We.useCallback((W)=>{pe.current=null,Ee((se)=>{let ve=new Set(se);return ve.add(W),ve}),p((se)=>{let ve=new Set(se);return ve.delete(W),ve}),ce(()=>{n(Ie.current.filter((se)=>se.id!==W)),Ee((se)=>{let ve=new Set(se);return ve.delete(W),ve})},180)},[n]),Gr=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),ct={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Lt=We.useCallback((W)=>{let se=e.find((ve)=>ve.id===W);if(!se)return;Le.current=!!se.text,ae(W),nn(!1)},[e]),rt=We.useCallback(()=>{if(!J)return;nn(!0),ce(()=>{ae(null),nn(!1)},150)},[J]);We.useEffect(()=>{if(u&&J)rt()},[u]);let Ht=We.useCallback((W)=>{if(!J)return;n(e.map((se)=>se.id===J?{...se,text:W.trim()||void 0}:se)),rt()},[J,e,n,rt]),Kt=typeof window<"u"?window.scrollY:0,Sl=["nw","ne","se","sw"],Tt=L?"#f97316":"#3c82f7",Te=[{dir:"n",cls:O.edgeN,arrow:o("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:o("path",{d:"M4 0.5L1 4.5h6z",fill:Tt})})},{dir:"e",cls:O.edgeE,arrow:o("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:o("path",{d:"M5.5 4L1.5 1v6z",fill:Tt})})},{dir:"s",cls:O.edgeS,arrow:o("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:o("path",{d:"M4 5.5L1 1.5h6z",fill:Tt})})},{dir:"w",cls:O.edgeW,arrow:o("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:o("path",{d:"M0.5 4L4.5 1v6z",fill:Tt})})}];return a(An,{children:[o("div",{ref:K,className:`${O.overlay} ${!l?O.light:""} ${t?O.placing:""} ${f?O.passthrough:""} ${u?O.overlayExiting:""} ${L?O.wireframe:""}${s?` ${s}`:""}`,"data-feedback-toolbar":!0,onMouseDown:wr,children:e.map((W)=>{let se=x.has(W.id),ve=Wt[W.type]?.label||W.type,Pe=W.y-Kt;return a("div",{"data-design-placement":W.id,className:`${O.placement} ${se?O.selected:""} ${Ve.has(W.id)?O.exiting:""}`,style:{left:W.x,top:Pe,width:W.width,height:W.height,position:"fixed"},onMouseDown:(me)=>Pt(me,W.id),onDoubleClick:()=>Lt(W.id),children:[o("span",{className:O.placementLabel,children:ve}),o("span",{className:`${O.placementAnnotation} ${W.text?O.annotationVisible:""}`,children:(()=>{if(W.text)He.current.set(W.id,W.text);return W.text||He.current.get(W.id)||""})()}),o("div",{className:O.placementContent,children:o(L2,{type:W.type,width:W.width,height:W.height,text:W.text})}),o("div",{className:O.deleteButton,onMouseDown:(me)=>me.stopPropagation(),onClick:()=>Sr(W.id),children:"✕"}),Sl.map((me)=>o("div",{className:`${O.handle} ${O[`handle${me.charAt(0).toUpperCase()}${me.slice(1)}`]}`,onMouseDown:(Ge)=>ur(Ge,W.id,me)},me)),Te.map(({dir:me,cls:Ge,arrow:Je})=>o("div",{className:`${O.edgeHandle} ${Ge}`,onMouseDown:(Qe)=>ur(Qe,W.id,me),children:Je},me))]},W.id)})}),J&&(()=>{let W=e.find((de)=>de.id===J);if(!W)return null;let se=W.y-Kt,ve=W.x+W.width/2,Pe=se-8,me=se+W.height+8,Ge=Pe>200,Je=me<window.innerHeight-100,Qe=Math.max(160,Math.min(window.innerWidth-160,ve)),Re;if(Ge)Re={left:Qe,bottom:window.innerHeight-Pe};else if(Je)Re={left:Qe,top:me};else Re={left:Qe,top:Math.max(80,window.innerHeight/2-80)};return o(Ss,{element:Wt[W.type]?.label||W.type,placeholder:ct[W.type]||"Label or content text",initialValue:W.text??"",submitLabel:Le.current?"Save":"Set",onSubmit:Ht,onCancel:rt,onDelete:Le.current?()=>{Ht("")}:void 0,isExiting:Ke,lightMode:!l,style:Re})})(),m&&o("div",{className:O.drawBox,style:{left:m.x,top:m.y,width:m.w,height:m.h},"data-feedback-toolbar":!0}),T&&o("div",{className:O.selectBox,style:{left:T.x,top:T.y,width:T.w,height:T.h},"data-feedback-toolbar":!0}),G&&o("div",{className:O.sizeIndicator,style:{left:G.x,top:G.y},"data-feedback-toolbar":!0,children:G.text}),A.map((W,se)=>o("div",{className:O.guideLine,style:W.axis==="x"?{position:"fixed",left:W.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:W.pos-Kt,right:0,height:1},"data-feedback-toolbar":!0},`${W.axis}-${W.pos}-${se}`))]})}function O2(e){if(!e)return"";let n=e.scrollTop>2,t=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${n?O.fadeTop:""} ${t?O.fadeBottom:""}`}var d="currentColor",j="0.5";function R2({type:e}){switch(e){case"navigation":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:d,opacity:".4"}),o("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:d,opacity:".25"})]});case"header":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:d,opacity:".35"}),o("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:d,opacity:".15"})]});case"hero":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:d,opacity:".35"}),o("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:d,strokeWidth:j})]});case"section":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:d,opacity:".3"}),o("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:d,opacity:".15"})]});case"sidebar":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:d,opacity:".3"}),o("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:d,opacity:".15"})]});case"footer":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:d,opacity:".2"})]});case"modal":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:d,opacity:".3"}),o("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:d,strokeWidth:j})]});case"divider":return o("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:o("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:d,strokeWidth:"0.5",opacity:".3"})});case"card":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:d,opacity:".04"}),o("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:d,opacity:".12"})]});case"text":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:d,opacity:".3"}),o("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:d,opacity:".12"})]});case"image":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:d,strokeWidth:j}),o("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:d,strokeWidth:".3",opacity:".25"}),o("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:d,strokeWidth:".3",opacity:".25"})]});case"video":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:d,strokeWidth:j}),o("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:d,strokeWidth:j,fill:d,opacity:".15"})]});case"table":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:d,strokeWidth:j}),o("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:d,strokeWidth:".3",opacity:".25"}),o("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:d,strokeWidth:".3",opacity:".25"}),o("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:d,strokeWidth:".3",opacity:".25"}),o("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:d,strokeWidth:".3",opacity:".25"})]});case"grid":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:d,strokeWidth:j})]});case"list":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:d,strokeWidth:j}),o("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:d,opacity:".2"}),o("circle",{cx:"3.5",cy:"8",r:"1",stroke:d,strokeWidth:j}),o("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:d,opacity:".2"}),o("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:d,strokeWidth:j}),o("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:d,opacity:".2"})]});case"chart":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:d,opacity:".2"}),o("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:d,opacity:".3"}),o("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:d,opacity:".2"})]});case"accordion":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:d,strokeWidth:j})]});case"carousel":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:d,strokeWidth:j}),o("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:d,strokeWidth:j,opacity:".35"}),o("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:d,strokeWidth:j,opacity:".35"}),o("circle",{cx:"8.5",cy:"14",r:".6",fill:d,opacity:".35"}),o("circle",{cx:"10",cy:"14",r:".6",fill:d,opacity:".15"}),o("circle",{cx:"11.5",cy:"14",r:".6",fill:d,opacity:".15"})]});case"button":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:d,strokeWidth:j}),o("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:d,opacity:".25"})]});case"input":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:d,opacity:".12"})]});case"search":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:d,strokeWidth:j}),o("circle",{cx:"6",cy:"8",r:"2",stroke:d,strokeWidth:j,opacity:".3"}),o("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:d,strokeWidth:j,opacity:".3"}),o("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:d,opacity:".12"})]});case"form":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:d,strokeWidth:j})]});case"tabs":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:d,strokeWidth:j})]});case"dropdown":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:d,opacity:".2"}),o("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:d,strokeWidth:j,opacity:".3"}),o("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:d,strokeWidth:j,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:d,strokeWidth:j}),o("circle",{cx:"13",cy:"8",r:"2",fill:d,opacity:".3"})]});case"avatar":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("circle",{cx:"10",cy:"8",r:"6",stroke:d,strokeWidth:j}),o("circle",{cx:"10",cy:"6.5",r:"2",stroke:d,strokeWidth:j}),o("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:d,strokeWidth:j})]});case"badge":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:d,strokeWidth:j}),o("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:d,opacity:".25"})]});case"breadcrumb":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:d,opacity:".3"}),o("path",{d:"M6.5 7l1 1-1 1",stroke:d,strokeWidth:j,opacity:".2"}),o("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:d,opacity:".2"}),o("path",{d:"M14 7l1 1-1 1",stroke:d,strokeWidth:j,opacity:".2"}),o("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:d,opacity:".15"})]});case"pagination":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:d,opacity:".15",stroke:d,strokeWidth:j}),o("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:d,strokeWidth:j})]});case"progress":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:d,opacity:".2"})]});case"toast":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:d,strokeWidth:j}),o("circle",{cx:"5",cy:"8",r:"1.5",stroke:d,strokeWidth:j,opacity:".3"}),o("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:d,opacity:".12"})]});case"tooltip":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:d,opacity:".25"}),o("path",{d:"M9 10l1 2.5 1-2.5",stroke:d,strokeWidth:j})]});case"pricing":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:d,opacity:".1"}),o("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:d,opacity:".1"}),o("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:d,opacity:".2"})]});case"testimonial":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:d,strokeWidth:j}),o("text",{x:"4",y:"5.5",fontSize:"4",fill:d,opacity:".2",fontFamily:"serif",children:"“"}),o("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:d,opacity:".12"}),o("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:d,strokeWidth:j,opacity:".25"}),o("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:d,opacity:".15"})]});case"cta":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:d,opacity:".3"}),o("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:d,strokeWidth:j})]});case"alert":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:d,strokeWidth:j}),o("circle",{cx:"6",cy:"8",r:"2",stroke:d,strokeWidth:j,opacity:".3"}),o("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:d,strokeWidth:"0.6",opacity:".5"}),o("circle",{cx:"6",cy:"9.3",r:".3",fill:d,opacity:".5"}),o("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:d,opacity:".2"})]});case"banner":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:d,strokeWidth:j})]});case"stat":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:d,opacity:".3"}),o("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:d,opacity:".12"})]});case"stepper":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("circle",{cx:"4",cy:"8",r:"2",fill:d,opacity:".2",stroke:d,strokeWidth:j}),o("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:d,strokeWidth:".4",opacity:".3"}),o("circle",{cx:"10",cy:"8",r:"2",stroke:d,strokeWidth:j}),o("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:d,strokeWidth:".4",opacity:".3"}),o("circle",{cx:"16",cy:"8",r:"2",stroke:d,strokeWidth:j})]});case"tag":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:d,opacity:".25"}),o("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:d,strokeWidth:j,opacity:".2"}),o("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:d,strokeWidth:j,opacity:".2"})]});case"rating":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:d,opacity:".25"}),o("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:d,opacity:".25"}),o("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:d,strokeWidth:j,opacity:".25"})]});case"map":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:d,strokeWidth:j}),o("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:d,strokeWidth:".3",opacity:".15"}),o("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:d,strokeWidth:".3",opacity:".15"}),o("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:d,opacity:".15",stroke:d,strokeWidth:j})]});case"timeline":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:d,strokeWidth:".4",opacity:".25"}),o("circle",{cx:"5",cy:"4",r:"1.5",fill:d,opacity:".2",stroke:d,strokeWidth:j}),o("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:d,opacity:".25"}),o("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:d,opacity:".15"}),o("circle",{cx:"5",cy:"13",r:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:d,opacity:".15"})]});case"fileUpload":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:d,strokeWidth:j,strokeDasharray:"2 1"}),o("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:d,strokeWidth:j,opacity:".3"}),o("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:d,opacity:".15"})]});case"codeBlock":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:d,strokeWidth:j}),o("circle",{cx:"4",cy:"4",r:".6",fill:d,opacity:".3"}),o("circle",{cx:"5.5",cy:"4",r:".6",fill:d,opacity:".3"}),o("circle",{cx:"7",cy:"4",r:".6",fill:d,opacity:".3"}),o("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:d,opacity:".2"}),o("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:d,opacity:".12"})]});case"calendar":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:d,strokeWidth:j}),o("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:d,strokeWidth:".4",opacity:".25"}),o("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:d,opacity:".2"}),o("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:d,opacity:".2"}),o("circle",{cx:"7",cy:"9",r:".6",fill:d,opacity:".2"}),o("circle",{cx:"10",cy:"9",r:".6",fill:d,opacity:".2"}),o("circle",{cx:"13",cy:"9",r:".6",fill:d,opacity:".3"}),o("circle",{cx:"7",cy:"12",r:".6",fill:d,opacity:".2"}),o("circle",{cx:"10",cy:"12",r:".6",fill:d,opacity:".2"})]});case"notification":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:d,strokeWidth:j}),o("circle",{cx:"5.5",cy:"8",r:"2",stroke:d,strokeWidth:j,opacity:".25"}),o("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:d,opacity:".12"}),o("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:d,opacity:".25"})]});case"productCard":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:d,opacity:".04"}),o("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:d,strokeWidth:j})]});case"profile":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("circle",{cx:"10",cy:"5",r:"3",stroke:d,strokeWidth:j}),o("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:d,opacity:".12"})]});case"drawer":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:d,strokeWidth:j,opacity:".15"})]});case"popover":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:d,opacity:".15"}),o("path",{d:"M9 11l1 2.5 1-2.5",stroke:d,strokeWidth:j})]});case"logo":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:d,strokeWidth:j}),o("path",{d:"M5 9.5l2-4 2 4",stroke:d,strokeWidth:j,opacity:".3"}),o("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:d,opacity:".2"}),o("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:d,opacity:".12"})]});case"faq":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("text",{x:"2.5",y:"5.5",fontSize:"4",fill:d,opacity:".3",fontWeight:"bold",children:"?"}),o("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:d,opacity:".12"}),o("text",{x:"2.5",y:"11.5",fontSize:"4",fill:d,opacity:".3",fontWeight:"bold",children:"?"}),o("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:d,opacity:".12"})]});case"gallery":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:d,strokeWidth:j})]});case"checkbox":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:d,strokeWidth:j}),o("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:d,strokeWidth:j,opacity:".35"})]});case"radio":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("circle",{cx:"10",cy:"8",r:"4",stroke:d,strokeWidth:j}),o("circle",{cx:"10",cy:"8",r:"2",fill:d,opacity:".3"})]});case"slider":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:d,opacity:".25"}),o("circle",{cx:"12",cy:"8",r:"2.5",stroke:d,strokeWidth:j})]});case"datePicker":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:d,strokeWidth:j}),o("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:d,opacity:".2"}),o("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:d,opacity:".12"}),o("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:d,strokeWidth:j,strokeDasharray:"2 1",opacity:".3"}),o("circle",{cx:"6",cy:"10",r:".6",fill:d,opacity:".2"}),o("circle",{cx:"10",cy:"10",r:".6",fill:d,opacity:".3"}),o("circle",{cx:"14",cy:"10",r:".6",fill:d,opacity:".2"}),o("circle",{cx:"6",cy:"13",r:".6",fill:d,opacity:".2"}),o("circle",{cx:"10",cy:"13",r:".6",fill:d,opacity:".2"})]});case"skeleton":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:d,opacity:".08"}),o("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:d,opacity:".08"}),o("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:d,opacity:".08"})]});case"chip":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:d,opacity:".08",stroke:d,strokeWidth:j}),o("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:d,opacity:".25"}),o("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:d,strokeWidth:j,opacity:".2"}),o("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:d,strokeWidth:j,opacity:".2"}),o("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:d,strokeWidth:j,opacity:".25"})]});case"icon":return o("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:o("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:d,strokeWidth:j,opacity:".3"})});case"spinner":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("circle",{cx:"10",cy:"8",r:"5",stroke:d,strokeWidth:j,opacity:".12"}),o("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:d,strokeWidth:j,opacity:".35",strokeLinecap:"round"})]});case"feature":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:d,strokeWidth:j}),o("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:d,strokeWidth:j,opacity:".25"}),o("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:d,opacity:".12"}),o("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:d,opacity:".12"})]});case"team":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("circle",{cx:"5",cy:"5",r:"2.5",stroke:d,strokeWidth:j}),o("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:d,opacity:".2"}),o("circle",{cx:"15",cy:"5",r:"2.5",stroke:d,strokeWidth:j}),o("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:d,opacity:".2"}),o("circle",{cx:"10",cy:"5",r:"2.5",stroke:d,strokeWidth:j,opacity:".5"}),o("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:d,opacity:".15"}),o("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:d,opacity:".1"})]});case"login":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:d,opacity:".25"}),o("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:d,opacity:".2"})]});case"contact":return a("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:d,strokeWidth:j}),o("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:d,opacity:".2"}),o("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:d,strokeWidth:j}),o("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:d,opacity:".2"})]});default:return null}}function D2({activeType:e,onSelect:n,onDragStart:t,scrollRef:r,fadeClass:l,blankCanvas:u}){return o("div",{ref:r,className:`${O.placeScroll} ${l||""}`,children:gh.map((i)=>a("div",{className:O.paletteSection,children:[o("div",{className:O.paletteSectionTitle,children:i.section}),i.items.map((s)=>a("div",{className:`${O.paletteItem} ${e===s.type?O.active:""} ${u?O.wireframe:""}`,onClick:()=>n(s.type),onMouseDown:(f)=>{if(f.button===0)t(s.type,f)},children:[o("div",{className:O.paletteItemIcon,children:o(R2,{type:s.type})}),o("span",{className:O.paletteItemLabel,children:s.label})]},s.type))]},i.section))})}function V2({value:e,suffix:n}){let[t,r]=gn.useState(null),[l,u]=gn.useState(n),[i,s]=gn.useState("up"),f=gn.useRef(e),v=gn.useRef(n),y=gn.useRef(),_=t!==null&&l!==n;if(gn.useEffect(()=>{if(e!==f.current){if(e===0){f.current=e,v.current=n,r(null);return}s(e>f.current?"up":"down"),r(f.current),u(v.current),f.current=e,v.current=n,clearTimeout(y.current),y.current=ce(()=>r(null),250)}else v.current=n},[e,n]),t===null)return a(An,{children:[e,n?` ${n}`:""]});if(_)return a("span",{className:O.rollingWrap,children:[a("span",{style:{visibility:"hidden"},children:[e," ",n]}),a("span",{className:`${O.rollingNum} ${i==="up"?O.exitUp:O.exitDown}`,children:[t," ",l]},`o${t}-${e}`),a("span",{className:`${O.rollingNum} ${i==="up"?O.enterUp:O.enterDown}`,children:[e," ",n]},`n${e}`)]});return a(An,{children:[a("span",{className:O.rollingWrap,children:[o("span",{style:{visibility:"hidden"},children:e}),o("span",{className:`${O.rollingNum} ${i==="up"?O.exitUp:O.exitDown}`,children:t},`o${t}-${e}`),o("span",{className:`${O.rollingNum} ${i==="up"?O.enterUp:O.enterDown}`,children:e},`n${e}`)]}),n?` ${n}`:""]})}function M2({activeType:e,onSelect:n,isDarkMode:t,sectionCount:r,onDetectSections:l,visible:u,onExited:i,placementCount:s,onClearPlacements:f,onDragStart:v,blankCanvas:y,onBlankCanvasChange:_,wireframePurpose:g,onWireframePurposeChange:F,Tooltip:E}){let[L,x]=gn.useState(!1),[p,m]=gn.useState("exit"),[S,T]=gn.useState(!1),[U,G]=gn.useState(!0),D=gn.useRef(0),A=gn.useRef(""),ye=gn.useRef(0),J=gn.useRef(),ae=gn.useRef(null),[Ke,nn]=gn.useState("");gn.useEffect(()=>{if(u)x(!0),clearTimeout(J.current),cancelAnimationFrame(ye.current),ye.current=fu(()=>{ye.current=fu(()=>{m("enter")})});else cancelAnimationFrame(ye.current),m("exit"),clearTimeout(J.current),J.current=ce(()=>{x(!1),i?.()},200);return()=>cancelAnimationFrame(ye.current)},[u]);let Le=s>0||r>0,Ve=s+r;if(Ve>0)D.current=Ve,A.current=y?Ve===1?"Component":"Components":Ve===1?"Change":"Changes";if(gn.useEffect(()=>{if(Le)if(!S)G(!0),T(!0),fu(()=>{fu(()=>{G(!1)})});else G(!1);else{G(!0);let He=ce(()=>T(!1),300);return()=>clearTimeout(He)}},[Le]),gn.useEffect(()=>{if(!L)return;let He=ae.current;if(!He)return;let K=()=>nn(O2(He));K(),He.addEventListener("scroll",K,{passive:!0});let pe=new ResizeObserver(K);return pe.observe(He),()=>{He.removeEventListener("scroll",K),pe.disconnect()}},[L]),!L)return null;let Ee=[];if(s>0)Ee.push("placed");if(r>0)Ee.push("captured");return a("div",{className:`${O.palette} ${O[p]} ${!t?O.light:""}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:(He)=>He.stopPropagation(),onMouseDown:(He)=>He.stopPropagation(),onTransitionEnd:(He)=>{if(He.target!==He.currentTarget)return;if(!u)clearTimeout(J.current),x(!1),m("exit"),i?.()},children:[a("div",{className:O.paletteHeader,children:[o("div",{className:O.paletteHeaderTitle,children:"Layout Mode"}),a("div",{className:O.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",o("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),a("div",{className:`${O.canvasToggle} ${y?O.active:""}`,onClick:()=>_(!y),children:[o("span",{className:O.canvasToggleIcon,children:a("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[o("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),o("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),o("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),o("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),o("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),o("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),o("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),o("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),o("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),o("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),o("span",{className:O.canvasToggleLabel,children:"Wireframe New Page"})]}),o("div",{className:`${O.wireframePurposeWrap} ${!y?O.collapsed:""}`,children:o("div",{className:O.wireframePurposeInner,children:o("textarea",{className:O.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:g,onChange:(He)=>F(He.target.value),rows:2})})}),o(D2,{activeType:e,onSelect:n,onDragStart:v,scrollRef:ae,fadeClass:Ke,blankCanvas:y}),S&&o("div",{className:`${O.paletteFooterWrap} ${U?O.footerHidden:""}`,children:o("div",{className:O.paletteFooterInner,children:o("div",{className:O.paletteFooterInnerContent,children:a("div",{className:O.paletteFooter,children:[o("span",{className:O.paletteFooterCount,children:o(V2,{value:D.current,suffix:A.current})}),o("button",{className:O.paletteFooterClear,onClick:f,children:"Clear"})]})})})})]})}function au(e){if(e.parentElement)return e.parentElement;let n=e.getRootNode();if(n instanceof ShadowRoot)return n.host;return null}function et(e,n){let t=e;while(t){if(t.matches(n))return t;t=au(t)}return null}function $2(e,n=4){let t=[],r=e,l=0;while(r&&l<n){let u=r.tagName.toLowerCase();if(u==="html"||u==="body")break;let i=u;if(r.id)i=`#${r.id}`;else if(r.className&&typeof r.className==="string"){let f=r.className.split(/\s+/).find((v)=>v.length>2&&!v.match(/^[a-z]{1,2}$/)&&!v.match(/[A-Z0-9]{5,}/));if(f)i=`.${f.split("_")[0]}`}let s=au(r);if(!r.parentElement&&s)i=`⟨shadow⟩ ${i}`;t.unshift(i),r=s,l++}return t.join(" > ")}function cu(e){let n=$2(e);if(e.dataset.element)return{name:e.dataset.element,path:n};let t=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(t)){let r=et(e,"svg");if(r){let l=au(r);if(l instanceof HTMLElement)return{name:`graphic in ${cu(l).name}`,path:n}}return{name:"graphic element",path:n}}if(t==="svg"){let r=au(e);if(r?.tagName.toLowerCase()==="button"){let l=r.textContent?.trim();return{name:l?`icon in "${l}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(t==="button"){let r=e.textContent?.trim(),l=e.getAttribute("aria-label");if(l)return{name:`button [${l}]`,path:n};return{name:r?`button "${r.slice(0,25)}"`:"button",path:n}}if(t==="a"){let r=e.textContent?.trim(),l=e.getAttribute("href");if(r)return{name:`link "${r.slice(0,25)}"`,path:n};if(l)return{name:`link to ${l.slice(0,30)}`,path:n};return{name:"link",path:n}}if(t==="input"){let r=e.getAttribute("type")||"text",l=e.getAttribute("placeholder"),u=e.getAttribute("name");if(l)return{name:`input "${l}"`,path:n};if(u)return{name:`input [${u}]`,path:n};return{name:`${r} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(t)){let r=e.textContent?.trim();return{name:r?`${t} "${r.slice(0,35)}"`:t,path:n}}if(t==="p"){let r=e.textContent?.trim();if(r)return{name:`paragraph: "${r.slice(0,40)}${r.length>40?"...":""}"`,path:n};return{name:"paragraph",path:n}}if(t==="span"||t==="label"){let r=e.textContent?.trim();if(r&&r.length<40)return{name:`"${r}"`,path:n};return{name:t,path:n}}if(t==="li"){let r=e.textContent?.trim();if(r&&r.length<40)return{name:`list item: "${r.slice(0,35)}"`,path:n};return{name:"list item",path:n}}if(t==="blockquote")return{name:"blockquote",path:n};if(t==="code"){let r=e.textContent?.trim();if(r&&r.length<30)return{name:`code: \`${r}\``,path:n};return{name:"code",path:n}}if(t==="pre")return{name:"code block",path:n};if(t==="img"){let r=e.getAttribute("alt");return{name:r?`image "${r.slice(0,30)}"`:"image",path:n}}if(t==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(t)){let r=e.className,l=e.getAttribute("role"),u=e.getAttribute("aria-label");if(u)return{name:`${t} [${u}]`,path:n};if(l)return{name:`${l}`,path:n};if(typeof r==="string"&&r){let i=r.split(/[\s_-]+/).map((s)=>s.replace(/[A-Z0-9]{5,}.*$/,"")).filter((s)=>s.length>2&&!/^[a-z]{1,2}$/.test(s)).slice(0,2);if(i.length>0)return{name:i.join(" "),path:n}}return{name:t==="div"?"container":t,path:n}}return{name:t,path:n}}function wo(e){let n=[],t=e.textContent?.trim();if(t&&t.length<100)n.push(t);let r=e.previousElementSibling;if(r){let u=r.textContent?.trim();if(u&&u.length<50)n.unshift(`[before: "${u.slice(0,40)}"]`)}let l=e.nextElementSibling;if(l){let u=l.textContent?.trim();if(u&&u.length<50)n.push(`[after: "${u.slice(0,40)}"]`)}return n.join(" ")}function cs(e){let n=au(e);if(!n)return"";let l=(e.getRootNode()instanceof ShadowRoot&&e.parentElement?Array.from(e.parentElement.children):Array.from(n.children)).filter((y)=>y!==e&&y instanceof HTMLElement);if(l.length===0)return"";let u=l.slice(0,4).map((y)=>{let _=y.tagName.toLowerCase(),g=y.className,F="";if(typeof g==="string"&&g){let E=g.split(/\s+/).map((L)=>L.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((L)=>L.length>2&&!/^[a-z]{1,2}$/.test(L));if(E)F=`.${E}`}if(_==="button"||_==="a"){let E=y.textContent?.trim().slice(0,15);if(E)return`${_}${F} "${E}"`}return`${_}${F}`}),s=n.tagName.toLowerCase();if(typeof n.className==="string"&&n.className){let y=n.className.split(/\s+/).map((_)=>_.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((_)=>_.length>2&&!/^[a-z]{1,2}$/.test(_));if(y)s=`.${y}`}let f=n.children.length,v=f>u.length+1?` (${f} total in ${s})`:"";return u.join(", ")+v}function So(e){let n=e.className;if(typeof n!=="string"||!n)return"";return n.split(/\s+/).filter((r)=>r.length>0).map((r)=>{let l=r.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return l?l[1]:r}).filter((r,l,u)=>u.indexOf(r)===l).join(", ")}var kh=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),I2=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Q2=new Set(["input","textarea","select"]),B2=new Set(["img","video","canvas","svg"]),U2=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function as(e){if(typeof window>"u")return{};let n=window.getComputedStyle(e),t={},r=e.tagName.toLowerCase(),l;if(I2.has(r))l=["color","fontSize","fontWeight","fontFamily","lineHeight"];else if(r==="button"||r==="a"&&e.getAttribute("role")==="button")l=["backgroundColor","color","padding","borderRadius","fontSize"];else if(Q2.has(r))l=["backgroundColor","color","padding","borderRadius","fontSize"];else if(B2.has(r))l=["width","height","objectFit","borderRadius"];else if(U2.has(r))l=["display","padding","margin","gap","backgroundColor"];else l=["color","fontSize","margin","padding","backgroundColor"];for(let u of l){let i=u.replace(/([A-Z])/g,"-$1").toLowerCase(),s=n.getPropertyValue(i);if(s&&!kh.has(s))t[u]=s}return t}var W2=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function ds(e){if(typeof window>"u")return"";let n=window.getComputedStyle(e),t=[];for(let r of W2){let l=r.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(l);if(u&&!kh.has(u))t.push(`${l}: ${u}`)}return t.join("; ")}function H2(e){if(!e)return;let n={},t=e.split(";").map((r)=>r.trim()).filter(Boolean);for(let r of t){let l=r.indexOf(":");if(l>0){let u=r.slice(0,l).trim(),i=r.slice(l+1).trim();if(u&&i)n[u]=i}}return Object.keys(n).length>0?n:void 0}function ps(e){let n=[],t=e.getAttribute("role"),r=e.getAttribute("aria-label"),l=e.getAttribute("aria-describedby"),u=e.getAttribute("tabindex"),i=e.getAttribute("aria-hidden");if(t)n.push(`role="${t}"`);if(r)n.push(`aria-label="${r}"`);if(l)n.push(`aria-describedby="${l}"`);if(u)n.push(`tabindex=${u}`);if(i==="true")n.push("aria-hidden");if(e.matches("a, button, input, select, textarea, [tabindex]"))n.push("focusable");return n.join(", ")}function hs(e){let n=[],t=e;while(t&&t.tagName.toLowerCase()!=="html"){let r=t.tagName.toLowerCase(),l=r;if(t.id)l=`${r}#${t.id}`;else if(t.className&&typeof t.className==="string"){let i=t.className.split(/\s+/).map((s)=>s.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((s)=>s.length>2);if(i)l=`${r}.${i}`}let u=au(t);if(!t.parentElement&&u)l=`⟨shadow⟩ ${l}`;n.unshift(l),t=u}return n.join(" > ")}var K2=new Set(["nav","header","main","section","article","footer","aside"]),_a={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},Z1={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},G2=new Set(["script","style","noscript","link","meta"]),Z2=40;function wh(e){let n=e;while(n&&n!==document.body&&n!==document.documentElement){let t=window.getComputedStyle(n).position;if(t==="fixed"||t==="sticky")return!0;n=n.parentElement}return!1}function wl(e){let n=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)){if(document.querySelectorAll(n).length===1)return n}if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className==="string"){let l=e.className.split(/\s+/).filter((u)=>u.length>0).find((u)=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(l){let u=`${n}.${CSS.escape(l)}`;if(document.querySelectorAll(u).length===1)return u}}let t=e.parentElement;if(t){let l=Array.from(t.children).indexOf(e)+1;return`${t===document.body?"body":wl(t)} > ${n}:nth-child(${l})`}return n}function _s(e){let n=e.tagName.toLowerCase(),t=e.getAttribute("aria-label");if(t)return t;let r=e.getAttribute("role");if(r&&_a[r])return _a[r];if(Z1[n])return Z1[n];let l=e.querySelector("h1, h2, h3, h4, h5, h6");if(l){let i=l.textContent?.trim();if(i&&i.length<=50)return i;if(i)return i.slice(0,47)+"..."}let{name:u}=cu(e);return u.charAt(0).toUpperCase()+u.slice(1)}function Sh(e){let n=e.className;if(typeof n!=="string"||!n)return null;return n.split(/\s+/).map((r)=>r.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find((r)=>r.length>2&&!/^[a-z]{1,2}$/.test(r))||null}function _h(e){let n=e.textContent?.trim();if(!n)return null;let t=n.replace(/\s+/g," ");if(t.length<=30)return t;return t.slice(0,30)+"…"}function A2(){let e=document.querySelector("main")||document.body,n=Array.from(e.children),t=n;if(e!==document.body&&n.length<3)t=Array.from(document.body.children);let r=[];return t.forEach((l,u)=>{if(!(l instanceof HTMLElement))return;let i=l.tagName.toLowerCase();if(G2.has(i))return;if(l.hasAttribute("data-feedback-toolbar"))return;if(l.closest("[data-feedback-toolbar]"))return;let s=window.getComputedStyle(l);if(s.display==="none"||s.visibility==="hidden")return;let f=l.getBoundingClientRect();if(f.height<Z2)return;let v=K2.has(i),y=l.getAttribute("role")&&_a[l.getAttribute("role")],_=i==="div"&&f.height>=60;if(!v&&!y&&!_)return;let g=window.scrollY,F=wh(l),E={x:f.x,y:F?f.y:f.y+g,width:f.width,height:f.height};r.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_s(l),tagName:i,selector:wl(l),role:l.getAttribute("role"),className:Sh(l),textSnippet:_h(l),originalRect:E,currentRect:{...E},originalIndex:u,isFixed:F})}),r}function J2(e){let n=window.scrollY,t=e.getBoundingClientRect(),r=wh(e),l={x:t.x,y:r?t.y:t.y+n,width:t.width,height:t.height},u=e.parentElement,i=0;if(u)i=Array.from(u.children).indexOf(e);return{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_s(e),tagName:e.tagName.toLowerCase(),selector:wl(e),role:e.getAttribute("role"),className:Sh(e),textSnippet:_h(e),originalRect:l,currentRect:{...l},originalIndex:i,isFixed:r}}var A1={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},J1=["nw","n","ne","e","se","s","sw","w"],ys=24,Y1=16,vs=5;function X1(e,n,t,r){let l=1/0,u=1/0,i=e.x,s=e.x+e.width,f=e.x+e.width/2,v=e.y,y=e.y+e.height,_=e.y+e.height/2,g=[];for(let D of n)if(!t.has(D.id))g.push(D.currentRect);if(r)g.push(...r);for(let D of g){let A=D.x,ye=D.x+D.width,J=D.x+D.width/2,ae=D.y,Ke=D.y+D.height,nn=D.y+D.height/2;for(let Le of[i,s,f])for(let Ve of[A,ye,J]){let Ee=Ve-Le;if(Math.abs(Ee)<vs&&Math.abs(Ee)<Math.abs(l))l=Ee}for(let Le of[v,y,_])for(let Ve of[ae,Ke,nn]){let Ee=Ve-Le;if(Math.abs(Ee)<vs&&Math.abs(Ee)<Math.abs(u))u=Ee}}let F=Math.abs(l)<vs?l:0,E=Math.abs(u)<vs?u:0,L=[],x=new Set,p=i+F,m=s+F,S=f+F,T=v+E,U=y+E,G=_+E;for(let D of g){let A=D.x,ye=D.x+D.width,J=D.x+D.width/2,ae=D.y,Ke=D.y+D.height,nn=D.y+D.height/2;for(let Le of[A,J,ye])for(let Ve of[p,S,m])if(Math.abs(Ve-Le)<0.5){let Ee=`x:${Math.round(Le)}`;if(!x.has(Ee))x.add(Ee),L.push({axis:"x",pos:Le})}for(let Le of[ae,nn,Ke])for(let Ve of[T,G,U])if(Math.abs(Ve-Le)<0.5){let Ee=`y:${Math.round(Le)}`;if(!x.has(Ee))x.add(Ee),L.push({axis:"y",pos:Le})}}return{dx:F,dy:E,guides:L}}var Y2=new Set(["script","style","noscript","link","meta","br","hr"]);function q1(e){let n=e;while(n&&n!==document.body&&n!==document.documentElement){if(n.closest("[data-feedback-toolbar]"))return null;if(Y2.has(n.tagName.toLowerCase())){n=n.parentElement;continue}let t=n.getBoundingClientRect();if(t.width>=Y1&&t.height>=Y1)return n;n=n.parentElement}return null}function X2({rearrangeState:e,onChange:n,isDarkMode:t,exiting:r,className:l,blankCanvas:u,extraSnapRects:i,onSelectionChange:s,deselectSignal:f,onDragMove:v,onDragEnd:y,clearSignal:_}){let{sections:g}=e,F=we.useRef(e);F.current=e;let[E,L]=we.useState(new Set),[x,p]=we.useState(!1),m=we.useRef(_);we.useEffect(()=>{if(_!==void 0&&_!==m.current){if(m.current=_,g.length>0)p(!0)}},[_,g.length]);let S=we.useRef(f);we.useEffect(()=>{if(f!==S.current)S.current=f,L(new Set)},[f]);let[T,U]=we.useState(null),[G,D]=we.useState(!1),A=we.useRef(!1),ye=we.useCallback((N)=>{let P=g.find((V)=>V.id===N);if(!P)return;A.current=!!P.note,U(N),D(!1)},[g]),J=we.useCallback(()=>{if(!T)return;D(!0),ce(()=>{U(null),D(!1)},150)},[T]),ae=we.useCallback((N)=>{if(!T)return;n({...e,sections:g.map((P)=>P.id===T?{...P,note:N.trim()||void 0}:P)}),J()},[T,g,e,n,J]);we.useEffect(()=>{if(r&&T)J()},[r]);let[Ke,nn]=we.useState(new Set),Le=we.useRef(new Map),[Ve,Ee]=we.useState(null),[He,K]=we.useState(null),[pe,Ie]=we.useState([]),[kn,tt]=we.useState(0),Jn=we.useRef(null),kr=we.useRef(new Set),yt=we.useRef(new Map),[wr,Pt]=we.useState(new Map),[ur,Sr]=we.useState(new Map),Gr=we.useRef(new Set),ct=we.useRef(new Map),Lt=we.useRef(s);Lt.current=s;let rt=we.useRef(v);rt.current=v;let Ht=we.useRef(y);Ht.current=y,we.useEffect(()=>{if(u)L(new Set)},[u]);let[Kt,Sl]=we.useState(()=>!e.sections.some((N)=>{let{originalRect:P,currentRect:V}=N;return Math.abs(P.x-V.x)>1||Math.abs(P.y-V.y)>1||Math.abs(P.width-V.width)>1||Math.abs(P.height-V.height)>1}));we.useEffect(()=>{if(!Kt){let N=ce(()=>Sl(!0),380);return()=>clearTimeout(N)}},[]);let Tt=we.useRef(new Set);we.useEffect(()=>{Tt.current=new Set(g.map((N)=>N.selector))},[g]),we.useEffect(()=>{let N=()=>tt(window.scrollY);return N(),window.addEventListener("scroll",N,{passive:!0}),window.addEventListener("resize",N,{passive:!0}),()=>{window.removeEventListener("scroll",N),window.removeEventListener("resize",N)}},[]),we.useEffect(()=>{let N=(P)=>{if(Jn.current){Ee(null);return}let V=document.elementFromPoint(P.clientX,P.clientY);if(!V){Ee(null);return}if(V.closest("[data-feedback-toolbar]")){Ee(null);return}if(V.closest("[data-design-placement]")){Ee(null);return}if(V.closest("[data-annotation-popup]")){Ee(null);return}let $=q1(V);if(!$){Ee(null);return}for(let te of Tt.current)try{let Q=document.querySelector(te);if(Q&&(Q===$||$.contains(Q))){Ee(null);return}}catch{}let Y=$.getBoundingClientRect();Ee({x:Y.x,y:Y.y,w:Y.width,h:Y.height})};return document.addEventListener("mousemove",N,{passive:!0}),()=>document.removeEventListener("mousemove",N)},[g]),we.useEffect(()=>{let N=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=N}},[]),we.useEffect(()=>{let N=(P)=>{if(Jn.current)return;if(P.button!==0)return;let V=P.target;if(!V||V.closest("[data-feedback-toolbar]"))return;if(V.closest("[data-design-placement]"))return;if(V.closest("[data-annotation-popup]"))return;let $=q1(V),Y=!1;if($)for(let Q of Tt.current)try{let le=document.querySelector(Q);if(le&&(le===$||$.contains(le))){Y=!0;break}}catch{}let te=!!(P.shiftKey||P.metaKey||P.ctrlKey);if($&&!Y){P.preventDefault(),P.stopPropagation();let Q=J2($),le=[...g,Q],_e=[...e.originalOrder,Q.id];n({...e,sections:le,originalOrder:_e});let Me=new Set([Q.id]);L(Me),Lt.current?.(Me,te),Ee(null);let{clientX:Ze,clientY:ue}=P,Ye={x:Q.currentRect.x,y:Q.currentRect.y},Fe=Q.originalRect,Ne=!1,oe=0,Xe=0;Jn.current="move";let $e=(Be)=>{let ge=Be.clientX-Ze,un=Be.clientY-ue;if(!Ne&&(Math.abs(ge)>2||Math.abs(un)>2))Ne=!0;if(!Ne)return;let Rn={x:Ye.x+ge,y:Ye.y+un,width:Q.currentRect.width,height:Q.currentRect.height},vt=X1(Rn,le,new Set([Q.id]),i);Ie(vt.guides);let Gt=ge+vt.dx,lt=un+vt.dy;oe=Gt,Xe=lt;let or=document.querySelector(`[data-rearrange-section="${Q.id}"]`);if(or)or.style.transform=`translate(${Gt}px, ${lt}px)`;Pt(new Map([[Q.id,{x:Ye.x+Gt,y:Ye.y+lt,width:Q.currentRect.width,height:Q.currentRect.height}]])),rt.current?.(Gt,lt)},ze=()=>{window.removeEventListener("mousemove",$e),window.removeEventListener("mouseup",ze),Jn.current=null,Ie([]),Pt(new Map);let Be=document.querySelector(`[data-rearrange-section="${Q.id}"]`);if(Be)Be.style.transform="";if(Ne)n({...e,sections:le.map((ge)=>ge.id===Q.id?{...ge,currentRect:{...ge.currentRect,x:Math.max(0,Ye.x+oe),y:Math.max(0,Ye.y+Xe)}}:ge),originalOrder:_e});Ht.current?.(oe,Xe,Ne)};window.addEventListener("mousemove",$e),window.addEventListener("mouseup",ze)}else if(Y&&$){P.preventDefault();for(let Q of g)try{let le=document.querySelector(Q.selector);if(le&&le===$){let _e=new Set([Q.id]);L(_e),Lt.current?.(_e,te);return}}catch{}if(!te)L(new Set),Lt.current?.(new Set,!1)}else if(!te)L(new Set),Lt.current?.(new Set,!1)};return document.addEventListener("mousedown",N,!0),()=>document.removeEventListener("mousedown",N,!0)},[g,e,n]),we.useEffect(()=>{let N=(P)=>{let V=P.target;if(V.tagName==="INPUT"||V.tagName==="TEXTAREA"||V.isContentEditable)return;if((P.key==="Backspace"||P.key==="Delete")&&E.size>0){P.preventDefault();let $=new Set(E);nn((Y)=>{let te=new Set(Y);for(let Q of $)te.add(Q);return te}),L(new Set),ce(()=>{let Y=F.current;n({...Y,sections:Y.sections.filter((te)=>!$.has(te.id)),originalOrder:Y.originalOrder.filter((te)=>!$.has(te))}),nn((te)=>{let Q=new Set(te);for(let le of $)Q.delete(le);return Q})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(P.key)&&E.size>0){P.preventDefault();let $=P.shiftKey?20:1,Y=P.key==="ArrowLeft"?-$:P.key==="ArrowRight"?$:0,te=P.key==="ArrowUp"?-$:P.key==="ArrowDown"?$:0;n({...e,sections:g.map((Q)=>E.has(Q.id)?{...Q,currentRect:{...Q.currentRect,x:Math.max(0,Q.currentRect.x+Y),y:Math.max(0,Q.currentRect.y+te)}}:Q)});return}if(P.key==="Escape"&&E.size>0)L(new Set)};return document.addEventListener("keydown",N),()=>document.removeEventListener("keydown",N)},[E,g,e,n]);let Te=we.useCallback((N,P)=>{if(N.button!==0)return;let V=N.target;if(V.closest(`.${O.handle}`)||V.closest(`.${O.deleteButton}`))return;N.preventDefault(),N.stopPropagation();let $;if(N.shiftKey||N.metaKey||N.ctrlKey)if($=new Set(E),$.has(P))$.delete(P);else $.add(P);else if(!E.has(P))$=new Set([P]);else $=new Set(E);if(L($),$.size!==E.size||[...$].some((Ne)=>!E.has(Ne)))Lt.current?.($,!!(N.shiftKey||N.metaKey||N.ctrlKey));let{clientX:te,clientY:Q}=N,le=new Map;for(let Ne of g)if($.has(Ne.id))le.set(Ne.id,{x:Ne.currentRect.x,y:Ne.currentRect.y});Jn.current="move";let _e=!1,Me=0,Ze=0,ue=new Map;for(let Ne of g)if($.has(Ne.id)){let oe=document.querySelector(`[data-rearrange-section="${Ne.id}"]`);ue.set(Ne.id,{outlineEl:oe,curW:Ne.currentRect.width,curH:Ne.currentRect.height})}let Ye=(Ne)=>{let oe=Ne.clientX-te,Xe=Ne.clientY-Q;if(oe===0&&Xe===0)return;_e=!0;let $e=1/0,ze=1/0,Be=-1/0,ge=-1/0;for(let[lt,{curW:or,curH:Po}]of ue){let _n=le.get(lt);if(!_n)continue;let ir=_n.x+oe,Lo=_n.y+Xe;$e=Math.min($e,ir),ze=Math.min(ze,Lo),Be=Math.max(Be,ir+or),ge=Math.max(ge,Lo+Po)}let un=X1({x:$e,y:ze,width:Be-$e,height:ge-ze},g,$,i),Rn=oe+un.dx,vt=Xe+un.dy;Me=Rn,Ze=vt,Ie(un.guides);for(let[,{outlineEl:lt}]of ue)if(lt)lt.style.transform=`translate(${Rn}px, ${vt}px)`;let Gt=new Map;for(let[lt,{curW:or,curH:Po}]of ue){let _n=le.get(lt);if(_n){let ir={x:Math.max(0,_n.x+Rn),y:Math.max(0,_n.y+vt),width:or,height:Po};Gt.set(lt,ir)}}Pt(Gt),rt.current?.(Rn,vt)},Fe=(Ne)=>{window.removeEventListener("mousemove",Ye),window.removeEventListener("mouseup",Fe),Jn.current=null,Ie([]),Pt(new Map);for(let[,{outlineEl:oe}]of ue)if(oe)oe.style.transform="";if(_e){let oe=Ne.clientX-te,Xe=Ne.clientY-Q;if(Math.abs(oe)<5&&Math.abs(Xe)<5)n({...e,sections:g.map(($e)=>{let ze=le.get($e.id);if(!ze)return $e;return{...$e,currentRect:{...$e.currentRect,x:ze.x,y:ze.y}}})});else{n({...e,sections:g.map(($e)=>{let ze=le.get($e.id);if(!ze)return $e;return{...$e,currentRect:{...$e.currentRect,x:Math.max(0,ze.x+Me),y:Math.max(0,ze.y+Ze)}}})}),Ht.current?.(Me,Ze,!0);return}}Ht.current?.(0,0,!1)};window.addEventListener("mousemove",Ye),window.addEventListener("mouseup",Fe)},[E,g,e,n]),W=we.useCallback((N,P,V)=>{N.preventDefault(),N.stopPropagation();let $=g.find((Fe)=>Fe.id===P);if(!$)return;L(new Set([P])),Jn.current="resize";let{clientX:Y,clientY:te}=N,Q={...$.currentRect},le=$.originalRect,_e=Q.width/Q.height,Me={...Q},Ze=document.querySelector(`[data-rearrange-section="${P}"]`),ue=(Fe)=>{let Ne=Fe.clientX-Y,oe=Fe.clientY-te,Xe=Q.x,$e=Q.y,ze=Q.width,Be=Q.height;if(V.includes("e"))ze=Math.max(ys,Q.width+Ne);if(V.includes("w"))ze=Math.max(ys,Q.width-Ne),Xe=Q.x+Q.width-ze;if(V.includes("s"))Be=Math.max(ys,Q.height+oe);if(V.includes("n"))Be=Math.max(ys,Q.height-oe),$e=Q.y+Q.height-Be;if(Fe.shiftKey)if(V.length===2){let un=Math.abs(ze-Q.width),Rn=Math.abs(Be-Q.height);if(un>Rn)Be=ze/_e;else ze=Be*_e;if(V.includes("w"))Xe=Q.x+Q.width-ze;if(V.includes("n"))$e=Q.y+Q.height-Be}else{if(V==="e"||V==="w")Be=ze/_e;else ze=Be*_e;if(V==="w")Xe=Q.x+Q.width-ze;if(V==="n")$e=Q.y+Q.height-Be}if(Me={x:Xe,y:$e,width:ze,height:Be},Ze)Ze.style.left=`${Xe}px`,Ze.style.top=`${$e-kn}px`,Ze.style.width=`${ze}px`,Ze.style.height=`${Be}px`;K({x:Fe.clientX+12,y:Fe.clientY+12,text:`${Math.round(ze)} × ${Math.round(Be)}`}),Pt(new Map([[P,Me]]))},Ye=()=>{window.removeEventListener("mousemove",ue),window.removeEventListener("mouseup",Ye),K(null),Jn.current=null,Pt(new Map),n({...e,sections:g.map((Fe)=>Fe.id===P?{...Fe,currentRect:Me}:Fe)})};window.addEventListener("mousemove",ue),window.addEventListener("mouseup",Ye)},[g,e,n,kn]),se=we.useCallback((N)=>{nn((P)=>{let V=new Set(P);return V.add(N),V}),L((P)=>{let V=new Set(P);return V.delete(N),V}),ce(()=>{let P=F.current;n({...P,sections:P.sections.filter((V)=>V.id!==N),originalOrder:P.originalOrder.filter((V)=>V!==N)}),nn((V)=>{let $=new Set(V);return $.delete(N),$})},180)},[n]),ve=(N)=>{let{originalRect:P,currentRect:V}=N;return Math.abs(P.x-V.x)>1||Math.abs(P.y-V.y)>1||Math.abs(P.width-V.width)>1||Math.abs(P.height-V.height)>1},Pe=(N)=>{let{originalRect:P,currentRect:V}=N;return Math.abs(P.x-V.x)>1||Math.abs(P.y-V.y)>1},me=(N)=>{let{originalRect:P,currentRect:V}=N;return Math.abs(P.width-V.width)>1||Math.abs(P.height-V.height)>1};for(let N of g)if(!yt.current.has(N.id)){if(Pe(N))yt.current.set(N.id,"move");else if(me(N))yt.current.set(N.id,"resize")}for(let N of yt.current.keys())if(!g.some((P)=>P.id===N))yt.current.delete(N);let Ge=g.filter((N)=>{try{if(Ke.has(N.id))return!0;if(E.has(N.id))return!0;let P=document.querySelector(N.selector);if(!P)return!1;let V=P.getBoundingClientRect(),$=N.originalRect;return Math.abs(V.width-$.width)+Math.abs(V.height-$.height)<200}catch{return!1}}),Je=Ge.filter((N)=>ve(N)),Qe=Ge.filter((N)=>!ve(N)),Re=new Set(Je.map((N)=>N.id));for(let N of kr.current)if(!Re.has(N))kr.current.delete(N);let de=[...Re].sort().join(",");for(let N of Je)ct.current.set(N.id,{currentRect:N.currentRect,originalRect:N.originalRect,isFixed:N.isFixed});return we.useEffect(()=>{let N=Gr.current;Gr.current=Re;let P=new Map;for(let V of N)if(!Re.has(V)){if(!g.some((Y)=>Y.id===V))continue;let $=ct.current.get(V);if($)P.set(V,{orig:$.originalRect,target:$.currentRect,isFixed:$.isFixed}),ct.current.delete(V)}if(P.size>0){Sr(($)=>{let Y=new Map($);for(let[te,Q]of P)Y.set(te,Q);return Y});let V=ce(()=>{Sr(($)=>{let Y=new Map($);for(let te of P.keys())Y.delete(te);return Y})},250);return()=>clearTimeout(V)}},[de,g]),a(An,{children:[a("div",{className:`${O.rearrangeOverlay} ${!t?O.light:""} ${r?O.overlayExiting:""}${l?` ${l}`:""}`,"data-feedback-toolbar":!0,children:[Ve&&o("div",{className:O.hoverHighlight,style:{left:Ve.x,top:Ve.y,width:Ve.w,height:Ve.h}}),Qe.map((N)=>{let P=N.currentRect,V=N.isFixed?P.y:P.y-kn,$=A1,Y=E.has(N.id);return a("div",{"data-rearrange-section":N.id,className:`${O.sectionOutline} ${Y?O.selected:""} ${x||r||Ke.has(N.id)?O.exiting:""}`,style:{left:P.x,top:V,width:P.width,height:P.height,borderColor:$.border,backgroundColor:$.bg,...Kt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:(te)=>Te(te,N.id),onDoubleClick:()=>ye(N.id),children:[o("span",{className:O.sectionLabel,style:{backgroundColor:$.pill},children:N.label}),o("span",{className:`${O.sectionAnnotation} ${N.note?O.annotationVisible:""}`,children:(()=>{if(N.note)Le.current.set(N.id,N.note);return N.note||Le.current.get(N.id)||""})()}),a("span",{className:O.sectionDimensions,children:[Math.round(P.width)," × ",Math.round(P.height)]}),o("div",{className:O.deleteButton,onMouseDown:(te)=>te.stopPropagation(),onClick:()=>se(N.id),children:"✕"}),J1.map((te)=>o("div",{className:`${O.handle} ${O[`handle${te.charAt(0).toUpperCase()}${te.slice(1)}`]}`,onMouseDown:(Q)=>W(Q,N.id,te)},te))]},N.id)}),Je.map((N)=>{let P=N.currentRect,V=N.isFixed?P.y:P.y-kn,$=E.has(N.id),Y=Pe(N),te=me(N);if(u&&!$)return null;let le=!kr.current.has(N.id);if(le)kr.current.add(N.id);return a("div",{"data-rearrange-section":N.id,className:`${O.ghostOutline} ${$?O.selected:""} ${x||r||Ke.has(N.id)?O.exiting:""}`,style:{left:P.x,top:V,width:P.width,height:P.height,...Kt?{}:{opacity:0,animation:"none",transition:"none"},...!le?{animation:"none"}:{}},onMouseDown:(_e)=>Te(_e,N.id),onDoubleClick:()=>ye(N.id),children:[o("span",{className:O.sectionLabel,style:{backgroundColor:A1.pill},children:N.label}),o("span",{className:`${O.sectionAnnotation} ${N.note?O.annotationVisible:""}`,children:(()=>{if(N.note)Le.current.set(N.id,N.note);return N.note||Le.current.get(N.id)||""})()}),a("span",{className:O.sectionDimensions,children:[Math.round(P.width)," × ",Math.round(P.height)]}),o("div",{className:O.deleteButton,onMouseDown:(_e)=>_e.stopPropagation(),onClick:()=>se(N.id),children:"✕"}),J1.map((_e)=>o("div",{className:`${O.handle} ${O[`handle${_e.charAt(0).toUpperCase()}${_e.slice(1)}`]}`,onMouseDown:(Me)=>W(Me,N.id,_e)},_e)),o("span",{className:O.ghostBadge,children:(()=>{let _e=yt.current.get(N.id);if(Y&&te){let[Me,Ze]=_e==="resize"?["Resize","Move"]:["Move","Resize"];return a(An,{children:["Suggested ",Me," ",a("span",{className:O.ghostBadgeExtra,children:["& ",Ze]})]})}return`Suggested ${te?"Resize":"Move"}`})()})]},N.id)})]}),!u&&(()=>{let N=[];for(let P of Je){let V=wr.get(P.id);N.push({id:P.id,orig:P.originalRect,target:V||P.currentRect,isFixed:P.isFixed,isSelected:E.has(P.id),isExiting:Ke.has(P.id)})}for(let[P,V]of wr)if(!N.some(($)=>$.id===P)){let $=g.find((Y)=>Y.id===P);if($)N.push({id:P,orig:$.originalRect,target:V,isFixed:$.isFixed,isSelected:E.has(P)})}for(let[P,V]of ur)if(!N.some(($)=>$.id===P))N.push({id:P,orig:V.orig,target:V.target,isFixed:V.isFixed,isSelected:!1,isExiting:!0});if(N.length===0)return null;return a("svg",{className:`${O.connectorSvg} ${x||r?O.connectorExiting:""}`,children:[N.map(({id:P,orig:V,target:$,isFixed:Y,isSelected:te,isExiting:Q})=>{let le=V.x+V.width/2,_e=(Y?V.y:V.y-kn)+V.height/2,Me=$.x+$.width/2,Ze=(Y?$.y:$.y-kn)+$.height/2,ue=Me-le,Ye=Ze-_e,Fe=Math.sqrt(ue*ue+Ye*Ye);if(Fe<2)return null;let Ne=Math.min(1,Fe/40),oe=Math.min(Fe*0.3,60),Xe=Fe>0?-Ye/Fe:0,$e=Fe>0?ue/Fe:0,ze=(le+Me)/2+Xe*oe,Be=(_e+Ze)/2+$e*oe,ge=wr.has(P),un=ge||te?1:0.4,Rn=ge||te?1:0.5;return a("g",{className:Q?O.connectorExiting:"",children:[o("path",{className:O.connectorLine,d:`M ${le} ${_e} Q ${ze} ${Be} ${Me} ${Ze}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:un*Ne}),o("circle",{className:O.connectorDot,cx:le,cy:_e,r:4*Ne,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Rn*Ne,filter:"url(#connDotShadow)"}),o("circle",{className:O.connectorDot,cx:Me,cy:Ze,r:4*Ne,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Rn*Ne,filter:"url(#connDotShadow)"})]},`conn-${P}`)}),o("defs",{children:o("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:o("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),T&&(()=>{let N=g.find((Ze)=>Ze.id===T);if(!N)return null;let P=N.currentRect,V=N.isFixed?P.y:P.y-kn,$=P.x+P.width/2,Y=V-8,te=V+P.height+8,Q=Y>200,le=te<window.innerHeight-100,_e=Math.max(160,Math.min(window.innerWidth-160,$)),Me;if(Q)Me={left:_e,bottom:window.innerHeight-Y};else if(le)Me={left:_e,top:te};else Me={left:_e,top:Math.max(80,window.innerHeight/2-80)};return o(Ss,{element:N.label,placeholder:"Add a note about this section",initialValue:N.note??"",submitLabel:A.current?"Save":"Set",onSubmit:ae,onCancel:J,onDelete:A.current?()=>{ae("")}:void 0,isExiting:G,lightMode:!t,style:Me})})(),He&&o("div",{className:O.sizeIndicator,style:{left:He.x,top:He.y},"data-feedback-toolbar":!0,children:He.text}),pe.map((N,P)=>o("div",{className:O.guideLine,style:N.axis==="x"?{position:"fixed",left:N.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:N.pos-kn,width:"100vw",height:1}},`${N.axis}-${N.pos}-${P}`))]})}var Ca=new Set(["script","style","noscript","link","meta","br","hr"]);function q2(){let e=document.querySelector("main")||document.body,n=[],t=Array.from(e.children),r=e!==document.body&&t.length<3?Array.from(document.body.children):t;for(let l of r){if(!(l instanceof HTMLElement))continue;if(Ca.has(l.tagName.toLowerCase()))continue;if(l.hasAttribute("data-feedback-toolbar"))continue;let u=window.getComputedStyle(l);if(u.display==="none"||u.visibility==="hidden")continue;let i=l.getBoundingClientRect();if(i.height<10||i.width<10)continue;n.push({label:_s(l),selector:wl(l),top:i.top,bottom:i.bottom,left:i.left,right:i.right,area:i.width*i.height});for(let s of Array.from(l.children)){if(!(s instanceof HTMLElement))continue;if(Ca.has(s.tagName.toLowerCase()))continue;if(s.hasAttribute("data-feedback-toolbar"))continue;let f=window.getComputedStyle(s);if(f.display==="none"||f.visibility==="hidden")continue;let v=s.getBoundingClientRect();if(v.height<10||v.width<10)continue;n.push({label:_s(s),selector:wl(s),top:v.top,bottom:v.bottom,left:v.left,right:v.right,area:v.width*v.height})}}return n}function b2(e){let n=window.scrollY;return e.map(({label:t,selector:r,rect:l})=>{let u=l.y-n;return{label:t,selector:r,top:u,bottom:u+l.height,left:l.x,right:l.x+l.width,area:l.width*l.height}})}function ew(e){let n=window.scrollY,t=e.y-n,r=e.x;return{top:t,bottom:t+e.height,left:r,right:r+e.width,area:e.width*e.height}}function Ea(e,n){let t=n?b2(n):q2(),r=ew(e),l=null,u=null,i=null,s=null,f=null;for(let E of t){if(Math.abs(E.left-r.left)<2&&Math.abs(E.top-r.top)<2&&Math.abs(E.right-E.left-e.width)<2&&Math.abs(E.bottom-E.top-e.height)<2)continue;if(E.left<=r.left+2&&E.right>=r.right-2&&E.top<=r.top+2&&E.bottom>=r.bottom-2&&E.area>r.area*1.5){if(!f||E.area<f._area)f={label:E.label,selector:E.selector,_area:E.area}}let L=r.right>E.left+5&&r.left<E.right-5,x=r.bottom>E.top+5&&r.top<E.bottom-5;if(L&&E.bottom<=r.top+5){let p=Math.round(r.top-E.bottom);if(!l||p<l._dist)l={label:E.label,selector:E.selector,gap:Math.max(0,p),_dist:p}}if(L&&E.top>=r.bottom-5){let p=Math.round(E.top-r.bottom);if(!u||p<u._dist)u={label:E.label,selector:E.selector,gap:Math.max(0,p),_dist:p}}if(x&&E.right<=r.left+5){let p=Math.round(r.left-E.right);if(!i||p<i._dist)i={label:E.label,selector:E.selector,gap:Math.max(0,p),_dist:p}}if(x&&E.left>=r.right-5){let p=Math.round(E.left-r.right);if(!s||p<s._dist)s={label:E.label,selector:E.selector,gap:Math.max(0,p),_dist:p}}}let{innerWidth:v,innerHeight:y}=window,_=tw(e,v),g=(E)=>{if(!E)return null;return{label:E.label,selector:E.selector,gap:E.gap}},F=nw(r,e,v,y,f?{label:f.label,selector:f.selector,_area:f._area}:null,t);return{above:g(l),below:g(u),left:g(i),right:g(s),alignment:_,containedIn:f?{label:f.label,selector:f.selector}:null,outOfBounds:F}}function nw(e,n,t,r,l,u){let i={},s=!1,f=[];if(e.left<-2)f.push("left");if(e.right>t+2)f.push("right");if(e.top<-2)f.push("top");if(e.bottom>r+2)f.push("bottom");if(f.length>0)i.viewport=f,s=!0;if(l){let v=u.find((y)=>y.label===l.label&&y.selector===l.selector&&Math.abs(y.area-l._area)<10);if(v){let y=[];if(e.left<v.left-2)y.push("left");if(e.right>v.right+2)y.push("right");if(e.top<v.top-2)y.push("top");if(e.bottom>v.bottom+2)y.push("bottom");if(y.length>0)i.container={label:l.label,edges:y},s=!0}}return s?i:null}function tw(e,n){if(e.width/n>0.85)return"full-width";let r=e.x+e.width/2,l=n/2,u=r-l,i=n*0.08;if(Math.abs(u)<i)return"center";if(u<0)return"left";return"right"}function Ch(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Eh(e,n={}){let t=[];if(e.above)t.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`);if(e.below)t.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`);if(n.includeLeftRight){if(e.left)t.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`);if(e.right)t.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`)}let r=Ch(e.alignment);if(e.containedIn)t.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in \`${e.containedIn.label}\``);else t.push(`${r.charAt(0).toUpperCase()+r.slice(1)} in page`);if(n.includePixelRef&&n.pixelRef)t.push(`Pixel ref: \`${n.pixelRef}\``);if(e.outOfBounds){if(e.outOfBounds.viewport)t.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`);if(e.outOfBounds.container)t.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)}return t}function rw(e,n,t){let r=[];if(e.above)r.push(`below \`${e.above.label}\``);if(e.below)r.push(`above \`${e.below.label}\``);if(e.left)r.push(`right of \`${e.left.label}\``);if(e.right)r.push(`left of \`${e.right.label}\``);if(e.containedIn)r.push(`inside \`${e.containedIn.label}\``);if(r.push(Ch(e.alignment)),e.outOfBounds?.viewport)r.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`);if(e.outOfBounds?.container)r.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);let l=t?`, ${Math.round(t.width)}×${Math.round(t.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${l}: ${r.join(", ")}`}var b1=15;function eh(e){if(e.length<2)return[];let n=[],t=new Set;for(let r=0;r<e.length;r++){if(t.has(r))continue;let l=[r];for(let u=r+1;u<e.length;u++){if(t.has(u))continue;if(Math.abs(e[r].rect.y-e[u].rect.y)<b1)l.push(u)}if(l.length>=2){let u=l.map((f)=>e[f]);u.sort((f,v)=>f.rect.x-v.rect.x);let i=[];for(let f=0;f<u.length-1;f++)i.push(Math.round(u[f+1].rect.x-(u[f].rect.x+u[f].rect.width)));let s=Math.round(u.reduce((f,v)=>f+v.rect.y,0)/u.length);n.push({labels:u.map((f)=>f.label),type:"row",sharedEdge:s,gaps:i,avgGap:i.length?Math.round(i.reduce((f,v)=>f+v,0)/i.length):0}),l.forEach((f)=>t.add(f))}}for(let r=0;r<e.length;r++){if(t.has(r))continue;let l=[r];for(let u=r+1;u<e.length;u++){if(t.has(u))continue;if(Math.abs(e[r].rect.x-e[u].rect.x)<b1)l.push(u)}if(l.length>=2){let u=l.map((f)=>e[f]);u.sort((f,v)=>f.rect.y-v.rect.y);let i=[];for(let f=0;f<u.length-1;f++)i.push(Math.round(u[f+1].rect.y-(u[f].rect.y+u[f].rect.height)));let s=Math.round(u.reduce((f,v)=>f+v.rect.x,0)/u.length);n.push({labels:u.map((f)=>f.label),type:"column",sharedEdge:s,gaps:i,avgGap:i.length?Math.round(i.reduce((f,v)=>f+v,0)/i.length):0}),l.forEach((f)=>t.add(f))}}return n}function lw(e){if(e.length<2)return[];let n=eh(e.map((i)=>({label:i.label,rect:i.originalRect}))),t=eh(e.map((i)=>({label:i.label,rect:i.currentRect}))),r=[],l=new Set;for(let i of n){let s=new Set(i.labels),f=null,v=0;for(let y of t){let _=y.labels.filter((g)=>s.has(g)).length;if(_>=2&&_>v)f=y,v=_}if(f){let y=f.labels.filter((g)=>s.has(g)),_=y.join(", ");if(f.type!==i.type){let g=i.type==="row"?"y":"x",F=f.type==="row"?"y":"x";r.push(`**${_}**: ${i.type} (${g}≈${i.sharedEdge}, ${i.avgGap}px gaps) → ${f.type} (${F}≈${f.sharedEdge}, ${f.avgGap}px gaps)`)}else if(Math.abs(i.sharedEdge-f.sharedEdge)>20||Math.abs(i.avgGap-f.avgGap)>5){let g=i.type==="row"?"y":"x",F=Math.abs(i.sharedEdge-f.sharedEdge)>20?` ${g}: ${i.sharedEdge} → ${f.sharedEdge}`:"",E=Math.abs(i.avgGap-f.avgGap)>5?` gaps: ${i.avgGap}px → ${f.avgGap}px`:"";r.push(`**${_}**: ${i.type} shifted —${F}${E}`)}y.forEach((g)=>l.add(g))}else{let y=i.labels.join(", "),_=i.type==="row"?"y":"x";r.push(`**${y}**: ${i.type} (${_}≈${i.sharedEdge}) dissolved`),i.labels.forEach((g)=>l.add(g))}}for(let i of t){if(i.labels.every((v)=>l.has(v)))continue;if(i.labels.filter((v)=>!l.has(v)).length<2)continue;if(!n.some((v)=>{return v.labels.filter((_)=>i.labels.includes(_)).length>=2})){let v=i.type==="row"?"y":"x";r.push(`**${i.labels.join(", ")}**: new ${i.type} (${v}≈${i.sharedEdge}, ${i.avgGap}px gaps)`),i.labels.forEach((y)=>l.add(y))}}let u=e.filter((i)=>!l.has(i.label));if(u.length>=2){let i={};for(let s of u){let f=Math.round(s.currentRect.x/5)*5;(i[f]??(i[f]=[])).push(s.label)}for(let[s,f]of Object.entries(i))if(f.length>=2)r.push(`**${f.join(", ")}**: shared left edge at x≈${s}`)}return r}function Nh(e){if(typeof document>"u")return{viewport:e,contentArea:null};let n=[],t=new Set,r=(s)=>{if(t.has(s))return;if(!(s instanceof HTMLElement))return;if(s.hasAttribute("data-feedback-toolbar"))return;if(Ca.has(s.tagName.toLowerCase()))return;t.add(s),n.push(s)},l=document.querySelector("main");if(l)r(l);let u=document.querySelector("[role='main']");if(u)r(u);for(let s of Array.from(document.body.children))if(r(s),s.children){for(let f of Array.from(s.children))if(r(f),f.children)for(let v of Array.from(f.children))r(v)}let i=null;for(let s of n){let f=s.getBoundingClientRect();if(f.height<50)continue;let v=getComputedStyle(s);if(v.maxWidth&&v.maxWidth!=="none"&&v.maxWidth!=="0px"){if(!i||f.width<i.rect.width)i={el:s,rect:f};continue}if(!i&&f.width<e.width-20&&f.width>100)i={el:s,rect:f}}if(i){let{el:s,rect:f}=i;return{viewport:e,contentArea:{width:Math.round(f.width),left:Math.round(f.left),right:Math.round(f.right),centerX:Math.round(f.left+f.width/2),selector:wl(s)}}}return{viewport:e,contentArea:null}}function uw(e){if(typeof document>"u")return null;let n=document.querySelector(e);if(!n?.parentElement)return null;let t=getComputedStyle(n.parentElement),r={parentDisplay:t.display,parentSelector:wl(n.parentElement)};if(t.display.includes("flex"))r.flexDirection=t.flexDirection;if(t.display.includes("grid")&&t.gridTemplateColumns!=="none")r.gridCols=t.gridTemplateColumns;if(t.gap&&t.gap!=="normal"&&t.gap!=="0px")r.gap=t.gap;return r}function zh(e,n){let t=n.contentArea,r=t?t.width:n.viewport.width,l=t?t.left:0,u=t?t.centerX:Math.round(n.viewport.width/2),i=Math.round(e.x-l),s=Math.round(l+r-(e.x+e.width)),f=(e.width/r*100).toFixed(1),v=e.x+e.width/2,y=Math.abs(v-u)<20,_=e.width/r>0.95,g=[];if(_)g.push("`width: 100%` of container");else g.push(`left \`${i}px\` in container, right \`${s}px\`, width \`${f}%\` (\`${Math.round(e.width)}px\`)`);if(y&&!_)g.push("centered — `margin-inline: auto`");return g.join(" — ")}function xh(e){let{viewport:n,contentArea:t}=e,r=`### Reference Frame
`;if(r+=`- Viewport: \`${n.width}×${n.height}px\`
`,t){let l=t;r+=`- Content area: \`${l.width}px\` wide, left edge at \`x=${l.left}\`, right at \`x=${l.right}\` (\`${l.selector}\`)
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Horizontal position in container**: \`element.x - ${l.left}\` → use as \`margin-left\` or \`left\`
`,r+=`  - **Width as % of container**: \`element.width / ${l.width} × 100\` → use as \`width: X%\`
`,r+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",r+=`  - **Centered**: if \`|element.centerX - ${l.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else r+=`- No distinct content container — elements positioned relative to full viewport
`,r+=`- Pixel → CSS translation:
`,r+=`  - **Width as % of viewport**: \`element.width / ${n.width} × 100\` → use as \`width: X%\`
`,r+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(n.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return r+=`
`,r}function ow(e){let n=uw(e);if(!n)return null;let t=`\`${n.parentDisplay}\``;if(n.flexDirection)t+=`, flex-direction: \`${n.flexDirection}\``;if(n.gridCols)t+=`, grid-template-columns: \`${n.gridCols}\``;if(n.gap)t+=`, gap: \`${n.gap}\``;return`Parent: ${t} (\`${n.parentSelector}\`)`}function nh(e,n,t,r="standard"){if(e.length===0)return"";let l=[...e].sort((x,p)=>{if(Math.abs(x.y-p.y)<20)return x.x-p.x;return x.y-p.y}),u="";if(t?.blankCanvas){if(u+=`## Wireframe: New Page

`,t.wireframePurpose)u+=`> **Purpose:** ${t.wireframePurpose}
>
`;u+=`> ${e.length} component${e.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`}else u+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`;if(r==="compact")return u+=`### Components
`,l.forEach((x,p)=>{let m=Wt[x.type]?.label||x.type;u+=`${p+1}. **${m}** — \`${Math.round(x.width)}×${Math.round(x.height)}px\` at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`
`}),u;let i=Nh(n);u+=xh(i),u+=`### Components
`,l.forEach((x,p)=>{let m=Wt[x.type]?.label||x.type,S={x:x.x,y:x.y,width:x.width,height:x.height};u+=`${p+1}. **${m}** — \`${Math.round(x.width)}×${Math.round(x.height)}px\` at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`
`;let T=Ea(S),G=Eh(T,{includeLeftRight:r==="detailed"||r==="forensic"});for(let A of G)u+=`   - ${A}
`;let D=zh(S,i);if(D)u+=`   - CSS: ${D}
`}),u+=`
### Layout Analysis
`;let s=[];for(let x of l){let p=s.find((m)=>Math.abs(m.y-x.y)<30);if(p)p.items.push(x);else s.push({y:x.y,items:[x]})}if(s.sort((x,p)=>x.y-p.y),s.forEach((x,p)=>{x.items.sort((S,T)=>S.x-T.x);let m=x.items.map((S)=>Wt[S.type]?.label||S.type);if(x.items.length===1){let T=x.items[0].width>n.width*0.8;u+=`- Row ${p+1} (y≈${Math.round(x.y)}): ${m[0]}${T?" — full width":""}
`}else u+=`- Row ${p+1} (y≈${Math.round(x.y)}): ${m.join(" | ")} — ${x.items.length} items side by side
`}),r==="detailed"||r==="forensic"){u+=`
### Spacing & Gaps
`;for(let x=0;x<l.length-1;x++){let p=l[x],m=l[x+1],S=Wt[p.type]?.label||p.type,T=Wt[m.type]?.label||m.type,U=Math.round(m.y-(p.y+p.height)),G=Math.round(m.x-(p.x+p.width));if(Math.abs(p.y-m.y)<30)u+=`- ${S} → ${T}: \`${G}px\` horizontal gap
`;else u+=`- ${S} → ${T}: \`${U}px\` vertical gap
`}if(r==="forensic"&&l.length>2){u+=`
### All Pairwise Gaps
`;for(let x=0;x<l.length;x++)for(let p=x+1;p<l.length;p++){let m=l[x],S=l[p],T=Wt[m.type]?.label||m.type,U=Wt[S.type]?.label||S.type,G=Math.round(S.y-(m.y+m.height)),D=Math.round(S.x-(m.x+m.width));u+=`- ${T} ↔ ${U}: h=\`${D}px\` v=\`${G}px\`
`}}if(r==="forensic")u+=`
### Z-Order (placement order)
`,e.forEach((x,p)=>{let m=Wt[x.type]?.label||x.type;u+=`${p}. ${m} at \`(${Math.round(x.x)}, ${Math.round(x.y)})\`
`})}u+=`
### Suggested Implementation
`;let f=l.some((x)=>x.type==="navigation"),v=l.some((x)=>x.type==="hero"),y=l.some((x)=>x.type==="sidebar"),_=l.some((x)=>x.type==="footer"),g=l.filter((x)=>x.type==="card"),F=l.filter((x)=>x.type==="form"),E=l.filter((x)=>x.type==="table"),L=l.filter((x)=>x.type==="modal");if(f)u+=`- Top navigation bar with logo + nav links + CTA
`;if(v)u+=`- Hero section with heading, subtext, and call-to-action
`;if(y)u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`;if(g.length>1)u+=`- ${g.length}-column card grid — use CSS Grid or Flexbox
`;else if(g.length===1)u+=`- Card component with image + content area
`;if(F.length>0)u+=`- ${F.length} form${F.length>1?"s":""} — add proper labels, validation, and submit handling
`;if(E.length>0)u+=`- Data table — consider sortable columns and pagination
`;if(L.length>0)u+=`- Modal dialog — add overlay backdrop and focus trapping
`;if(_)u+=`- Multi-column footer with links
`;if(r==="detailed"||r==="forensic"){if(u+=`
### CSS Suggestions
`,y){let x=l.find((p)=>p.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(x.width)}px 1fr;\`
`}if(g.length>1){let x=Math.round(g[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${g.length}, ${x}px); gap: 16px;\`
`}if(f)u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n"}return u}function th(e,n="standard",t){let{sections:r}=e,l=[];for(let y of r){let{originalRect:_,currentRect:g}=y,F=Math.abs(_.x-g.x)>1||Math.abs(_.y-g.y)>1,E=Math.abs(_.width-g.width)>1||Math.abs(_.height-g.height)>1;if(!F&&!E){if(n==="forensic")l.push({section:y,posMoved:!1,sizeChanged:!1});continue}l.push({section:y,posMoved:F,sizeChanged:E})}if(l.length===0)return"";if(n!=="forensic"&&l.every((y)=>!y.posMoved&&!y.sizeChanged))return"";let u=`## Suggested Layout Changes

`,i=t?t.width:typeof window<"u"?window.innerWidth:0,s=t?t.height:typeof window<"u"?window.innerHeight:0,f=Nh({width:i,height:s});if(n!=="compact")u+=xh(f);if(n==="forensic")u+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${r.length}

`;let v=(y)=>r.map((_)=>({label:_.label,selector:_.selector,rect:y==="original"?_.originalRect:_.currentRect}));u+=`**Changes:**
`;for(let{section:y,posMoved:_,sizeChanged:g}of l){let{originalRect:F,currentRect:E}=y;if(!_&&!g){u+=`- ${y.label} — unchanged at (${Math.round(E.x)}, ${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)}px
`;continue}if(n==="compact"){if(_&&g)u+=`- Suggested: move **${y.label}** to (${Math.round(E.x)}, ${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)}px
`;else if(_)u+=`- Suggested: move **${y.label}** to (${Math.round(E.x)}, ${Math.round(E.y)})
`;else u+=`- Suggested: resize **${y.label}** to ${Math.round(E.width)}×${Math.round(E.height)}px
`;continue}if(_&&g)u+=`- Suggested: move and resize **${y.label}**
`;else if(_)u+=`- Suggested: move **${y.label}**
`;else u+=`- Suggested: resize **${y.label}** from ${Math.round(F.width)}×${Math.round(F.height)}px to ${Math.round(E.width)}×${Math.round(E.height)}px
`;if(_){let x=Ea(F,v("original")),p=Ea(E,v("current")),m=g?{width:F.width,height:F.height}:void 0;u+=`  - Currently ${rw(x,{x:F.x,y:F.y},m)}
`;let S=g?{width:E.width,height:E.height}:void 0,T=`at (${Math.round(E.x)}, ${Math.round(E.y)})`,U=S?`, ${Math.round(S.width)}×${Math.round(S.height)}px`:"",D=Eh(p,{includeLeftRight:n==="detailed"||n==="forensic"});if(D.length>0){u+=`  - Suggested position ${T}${U}: ${D[0]}
`;for(let ye=1;ye<D.length;ye++)u+=`    ${D[ye]}
`}else u+=`  - Suggested position ${T}${U}
`;let A=zh(E,f);if(A)u+=`  - CSS: ${A}
`}let L=ow(y.selector);if(L)u+=`  - ${L}
`;if(u+=`  - Selector: \`${y.selector}\`
`,n==="detailed"||n==="forensic"){let x=y.className?`${y.tagName}.${y.className.split(" ")[0]}`:y.tagName;if(x!==y.selector)u+=`  - Element: \`${x}\`
`;if(y.role)u+=`  - Role: \`${y.role}\`
`;if(n==="forensic"&&y.textSnippet)u+=`  - Text: "${y.textSnippet}"
`}if(n==="forensic")u+=`  - Original rect: \`{ x: ${Math.round(F.x)}, y: ${Math.round(F.y)}, w: ${Math.round(F.width)}, h: ${Math.round(F.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(E.x)}, y: ${Math.round(E.y)}, w: ${Math.round(E.width)}, h: ${Math.round(E.height)} }\`
`}if(n!=="compact"){let y=l.filter((g)=>g.posMoved).map((g)=>({label:g.section.label,originalRect:g.section.originalRect,currentRect:g.section.currentRect})),_=lw(y);if(_.length>0){u+=`
### Layout Summary
`;for(let g of _)u+=`- ${g}
`}}if(n!=="compact"&&r.length>1){u+=`
### All Sections (current positions)
`;let y=[...r].sort((_,g)=>{if(Math.abs(_.currentRect.y-g.currentRect.y)<20)return _.currentRect.x-g.currentRect.x;return _.currentRect.y-g.currentRect.y});for(let _ of y){let g=_.currentRect,F=Math.abs(g.x-_.originalRect.x)>1||Math.abs(g.y-_.originalRect.y)>1||Math.abs(g.width-_.originalRect.width)>1||Math.abs(g.height-_.originalRect.height)>1;u+=`- ${_.label}: \`${Math.round(g.width)}×${Math.round(g.height)}px\` at \`(${Math.round(g.x)}, ${Math.round(g.y)})\`${F?" ← suggested":""}
`}}return u}var Na="feedback-annotations-",Ph=7;function Cs(e){return`${Na}${e}`}function da(e){if(typeof window>"u")return[];try{let n=localStorage.getItem(Cs(e));if(!n)return[];let t=JSON.parse(n),r=Date.now()-Ph*24*60*60*1000;return t.filter((l)=>!l.timestamp||l.timestamp>r)}catch{return[]}}function Lh(e,n){if(typeof window>"u")return;try{localStorage.setItem(Cs(e),JSON.stringify(n))}catch{}}function iw(){let e=new Map;if(typeof window>"u")return e;try{let n=Date.now()-Ph*24*60*60*1000;for(let t=0;t<localStorage.length;t++){let r=localStorage.key(t);if(r?.startsWith(Na)){let l=r.slice(Na.length),u=localStorage.getItem(r);if(u){let s=JSON.parse(u).filter((f)=>!f.timestamp||f.timestamp>n);if(s.length>0)e.set(l,s)}}}}catch{}return e}function _o(e,n,t){let r=n.map((l)=>({...l,_syncedTo:t}));Lh(e,r)}var Pa="agentation-design-";function sw(e){if(typeof window>"u")return[];try{let n=localStorage.getItem(`${Pa}${e}`);if(!n)return[];return JSON.parse(n)}catch{return[]}}function fw(e,n){if(typeof window>"u")return;try{localStorage.setItem(`${Pa}${e}`,JSON.stringify(n))}catch{}}function cw(e){if(typeof window>"u")return;try{localStorage.removeItem(`${Pa}${e}`)}catch{}}var La="agentation-rearrange-";function aw(e){if(typeof window>"u")return null;try{let n=localStorage.getItem(`${La}${e}`);if(!n)return null;return JSON.parse(n)}catch{return null}}function dw(e,n){if(typeof window>"u")return;try{localStorage.setItem(`${La}${e}`,JSON.stringify(n))}catch{}}function pw(e){if(typeof window>"u")return;try{localStorage.removeItem(`${La}${e}`)}catch{}}var Ta="agentation-wireframe-";function hw(e){if(typeof window>"u")return null;try{let n=localStorage.getItem(`${Ta}${e}`);if(!n)return null;return JSON.parse(n)}catch{return null}}function rh(e,n){if(typeof window>"u")return;try{localStorage.setItem(`${Ta}${e}`,JSON.stringify(n))}catch{}}function ms(e){if(typeof window>"u")return;try{localStorage.removeItem(`${Ta}${e}`)}catch{}}var Th="agentation-session-";function Fa(e){return`${Th}${e}`}function yw(e){if(typeof window>"u")return null;try{return localStorage.getItem(Fa(e))}catch{return null}}function pa(e,n){if(typeof window>"u")return;try{localStorage.setItem(Fa(e),n)}catch{}}function vw(e){if(typeof window>"u")return;try{localStorage.removeItem(Fa(e))}catch{}}var za=`${Th}toolbar-hidden`;function mw(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(za)==="1"}catch{return!1}}function gw(e){if(typeof window>"u")return;try{if(e)sessionStorage.setItem(za,"1");else sessionStorage.removeItem(za)}catch{}}async function ha(e,n){let t=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!t.ok)throw Error(`Failed to create session: ${t.status}`);return t.json()}async function lh(e,n){let t=await fetch(`${e}/sessions/${n}`);if(!t.ok)throw Error(`Failed to get session: ${t.status}`);return t.json()}async function iu(e,n,t){let r=await fetch(`${e}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error(`Failed to sync annotation: ${r.status}`);return r.json()}async function uh(e,n,t){let r=await fetch(`${e}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!r.ok)throw Error(`Failed to update annotation: ${r.status}`);return r.json()}async function Kr(e,n){let t=await fetch(`${e}/annotations/${n}`,{method:"DELETE"});if(!t.ok)throw Error(`Failed to delete annotation: ${t.status}`)}var Ae={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},oh=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),ih=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],kw=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function ww(e){let n=e?.mode??"filtered",t=oh;if(e?.skipExact){let r=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);t=new Set([...oh,...r])}return{maxComponents:e?.maxComponents??6,maxDepth:e?.maxDepth??30,mode:n,skipExact:t,skipPatterns:e?.skipPatterns?[...ih,...e.skipPatterns]:ih,userPatterns:e?.userPatterns??kw,filter:e?.filter}}function Sw(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function _w(e,n=10){let t=new Set,r=e,l=0;while(r&&l<n){if(r.className&&typeof r.className==="string")r.className.split(/\s+/).forEach((u)=>{if(u.length>1){let i=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();if(i.length>1)t.add(i)}});r=r.parentElement,l++}return t}function Cw(e,n){let t=Sw(e);for(let r of n){if(r===t)return!0;let l=t.split("-").filter((i)=>i.length>2),u=r.split("-").filter((i)=>i.length>2);for(let i of l)for(let s of u)if(i===s||i.includes(s)||s.includes(i))return!0}return!1}function Ew(e,n,t,r){if(t.filter)return t.filter(e,n);switch(t.mode){case"all":return!0;case"filtered":if(t.skipExact.has(e))return!1;if(t.skipPatterns.some((l)=>l.test(e)))return!1;return!0;case"smart":if(t.skipExact.has(e))return!1;if(t.skipPatterns.some((l)=>l.test(e)))return!1;if(r&&Cw(e,r))return!0;if(t.userPatterns.some((l)=>l.test(e)))return!0;return!1;default:return!0}}var su=null,Nw=new WeakMap;function ya(e){return Object.keys(e).some((n)=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function zw(){if(su!==null)return su;if(typeof document>"u")return!1;if(document.body&&ya(document.body))return su=!0,!0;let e=["#root","#app","#__next","[data-reactroot]"];for(let n of e){let t=document.querySelector(n);if(t&&ya(t))return su=!0,!0}if(document.body){for(let n of document.body.children)if(ya(n))return su=!0,!0}return su=!1,!1}var Co={map:Nw};function xw(e){return Object.keys(e).find((t)=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$"))||null}function Pw(e){let n=xw(e);if(!n)return null;return e[n]}function vl(e){if(!e)return null;if(e.displayName)return e.displayName;if(e.name)return e.name;return null}function Lw(e){let{tag:n,type:t,elementType:r}=e;if(n===Ae.HostComponent||n===Ae.HostText||n===Ae.HostHoistable||n===Ae.HostSingleton)return null;if(n===Ae.Fragment||n===Ae.Mode||n===Ae.Profiler||n===Ae.DehydratedFragment)return null;if(n===Ae.HostRoot||n===Ae.HostPortal||n===Ae.ScopeComponent||n===Ae.OffscreenComponent||n===Ae.LegacyHiddenComponent||n===Ae.CacheComponent||n===Ae.TracingMarkerComponent||n===Ae.Throw||n===Ae.ViewTransitionComponent||n===Ae.ActivityComponent)return null;if(n===Ae.ForwardRef){let l=r;if(l?.render){let u=vl(l.render);if(u)return u}if(l?.displayName)return l.displayName;return vl(t)}if(n===Ae.MemoComponent||n===Ae.SimpleMemoComponent){let l=r;if(l?.type){let u=vl(l.type);if(u)return u}if(l?.displayName)return l.displayName;return vl(t)}if(n===Ae.ContextProvider){let l=t;if(l?._context?.displayName)return`${l._context.displayName}.Provider`;return null}if(n===Ae.ContextConsumer){let l=t;if(l?.displayName)return`${l.displayName}.Consumer`;return null}if(n===Ae.LazyComponent){let l=r;if(l?._status===1&&l._result)return vl(l._result);return null}if(n===Ae.SuspenseComponent||n===Ae.SuspenseListComponent)return null;if(n===Ae.IncompleteClassComponent||n===Ae.IncompleteFunctionComponent)return vl(t);if(n===Ae.FunctionComponent||n===Ae.ClassComponent||n===Ae.IndeterminateComponent)return vl(t);return null}function Tw(e){if(e.length<=2)return!0;if(e.length<=3&&e===e.toLowerCase())return!0;return!1}function Fw(e,n){let t=ww(n),r=t.mode==="all";if(r){let f=Co.map.get(e);if(f!==void 0)return f}if(!zw()){let f={path:null,components:[]};if(r)Co.map.set(e,f);return f}let l=t.mode==="smart"?_w(e):void 0,u=[];try{let f=Pw(e),v=0;while(f&&v<t.maxDepth&&u.length<t.maxComponents){let y=Lw(f);if(y&&!Tw(y)&&Ew(y,v,t,l))u.push(y);f=f.return,v++}}catch{let f={path:null,components:[]};if(r)Co.map.set(e,f);return f}if(u.length===0){let f={path:null,components:[]};if(r)Co.map.set(e,f);return f}let s={path:u.slice().reverse().map((f)=>`<${f}>`).join(" "),components:u};if(r)Co.map.set(e,s);return s}var Eo={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function jw(e){if(!e||typeof e!=="object")return null;let n=Object.keys(e),t=n.find((u)=>u.startsWith("__reactFiber$"));if(t)return e[t]||null;let r=n.find((u)=>u.startsWith("__reactInternalInstance$"));if(r)return e[r]||null;let l=n.find((u)=>{if(!u.startsWith("__react"))return!1;let i=e[u];return i&&typeof i==="object"&&"_debugSource"in i});if(l)return e[l]||null;return null}function xo(e){if(!e.type)return null;if(typeof e.type==="string")return null;if(typeof e.type==="object"||typeof e.type==="function"){let n=e.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Ow(e,n=50){let t=e,r=0;while(t&&r<n){if(t._debugSource)return{source:t._debugSource,componentName:xo(t)};if(t._debugOwner?._debugSource)return{source:t._debugOwner._debugSource,componentName:xo(t._debugOwner)};t=t.return,r++}return null}function Rw(e){let n=e,t=0,r=50;while(n&&t<r){let l=n,u=["_debugSource","__source","_source","debugSource"];for(let i of u){let s=l[i];if(s&&typeof s==="object"&&"fileName"in s)return{source:s,componentName:xo(n)}}if(n.memoizedProps){let i=n.memoizedProps;if(i.__source&&typeof i.__source==="object"){let s=i.__source;if(s.fileName&&s.lineNumber)return{source:{fileName:s.fileName,lineNumber:s.lineNumber,columnNumber:s.columnNumber},componentName:xo(n)}}}n=n.return,t++}return null}var gs=new Map;function Dw(e){let{tag:n,type:t,elementType:r}=e;if(typeof t==="string"||t==null)return null;if(typeof t==="function"&&t.prototype?.isReactComponent)return null;if((n===Eo.FunctionComponent||n===Eo.IndeterminateComponent)&&typeof t==="function")return t;if(n===Eo.ForwardRef&&r){let l=r.render;if(typeof l==="function")return l}if((n===Eo.MemoComponent||n===Eo.SimpleMemoComponent)&&r){let l=r.type;if(typeof l==="function")return l}if(typeof t==="function")return t;return null}function Vw(){let e=Fh.default,n=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:(r)=>{n.H=r}};let t=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(t){let r=t.ReactCurrentDispatcher;if(r&&"current"in r)return{get:()=>r.current,set:(l)=>{r.current=l}}}return null}function Mw(e){let n=e.split(`
`),t=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],r=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,l=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let u of n){let i=u.trim();if(!i)continue;if(t.some((f)=>f.test(i)))continue;let s=r.exec(i)||l.exec(i);if(s)return{fileName:s[1],line:parseInt(s[2],10),column:parseInt(s[3],10)}}return null}function $w(e){let n=e;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Iw(e){let n=Dw(e);if(!n)return null;if(gs.has(n))return gs.get(n);let t=Vw();if(!t)return gs.set(n,null),null;let r=t.get(),l=null;try{let u=new Proxy({},{get(){throw Error("probe")}});t.set(u);try{n({})}catch(i){if(i instanceof Error&&i.message==="probe"&&i.stack){let s=Mw(i.stack);if(s)l={fileName:$w(s.fileName),lineNumber:s.line,columnNumber:s.column,componentName:xo(e)||void 0}}}}finally{t.set(r)}return gs.set(n,l),l}function Qw(e,n=15){let t=e,r=0;while(t&&r<n){let l=Iw(t);if(l)return l;t=t.return,r++}return null}function xa(e){let n=jw(e);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let t=Ow(n);if(!t)t=Rw(n);if(t?.source)return{found:!0,source:{fileName:t.source.fileName,lineNumber:t.source.lineNumber,columnNumber:t.source.columnNumber,componentName:t.componentName||void 0},isReactApp:!0,isProduction:!1};let r=Qw(n);if(r)return{found:!0,source:r,isReactApp:!0,isProduction:!1};return{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Bw(e,n="path"){let{fileName:t,lineNumber:r,columnNumber:l}=e,u=`${t}:${r}`;if(l!==void 0)u+=`:${l}`;if(n==="vscode")return`vscode://file${t.startsWith("/")?"":"/"}${u}`;return u}function Uw(e,n=10){let t=e,r=0;while(t&&r<n){let l=xa(t);if(l.found)return l;t=t.parentElement,r++}return xa(e)}var Ww=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Hw={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(e);e.textContent=Ww}var I=Hw,No=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function sh(e,n,t="standard"){if(e.length===0)return"";let r=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown",l=`## Page Feedback: ${n}
`;if(t==="forensic"){if(l+=`
**Environment:**
`,l+=`- Viewport: ${r}
`,typeof window<"u")l+=`- URL: ${window.location.href}
`,l+=`- User Agent: ${navigator.userAgent}
`,l+=`- Timestamp: ${new Date().toISOString()}
`,l+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`;l+=`
---
`}else if(t!=="compact")l+=`**Viewport:** ${r}
`;return l+=`
`,e.forEach((u,i)=>{if(t==="compact"){if(l+=`${i+1}. **${u.element}**${u.sourceFile?` (${u.sourceFile})`:""}: ${u.comment}`,u.selectedText)l+=` (re: "${u.selectedText.slice(0,30)}${u.selectedText.length>30?"...":""}")`;l+=`
`}else if(t==="forensic"){if(l+=`### ${i+1}. ${u.element}
`,u.isMultiSelect&&u.fullPath)l+=`*Forensic data shown for first element of selection*
`;if(u.fullPath)l+=`**Full DOM Path:** ${u.fullPath}
`;if(u.cssClasses)l+=`**CSS Classes:** ${u.cssClasses}
`;if(u.boundingBox)l+=`**Position:** x:${Math.round(u.boundingBox.x)}, y:${Math.round(u.boundingBox.y)} (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`;if(l+=`**Annotation at:** ${u.x.toFixed(1)}% from left, ${Math.round(u.y)}px from top
`,u.selectedText)l+=`**Selected text:** "${u.selectedText}"
`;if(u.nearbyText&&!u.selectedText)l+=`**Context:** ${u.nearbyText.slice(0,100)}
`;if(u.computedStyles)l+=`**Computed Styles:** ${u.computedStyles}
`;if(u.accessibility)l+=`**Accessibility:** ${u.accessibility}
`;if(u.nearbyElements)l+=`**Nearby Elements:** ${u.nearbyElements}
`;if(u.sourceFile)l+=`**Source:** ${u.sourceFile}
`;if(u.reactComponents)l+=`**React:** ${u.reactComponents}
`;l+=`**Feedback:** ${u.comment}

`}else{if(l+=`### ${i+1}. ${u.element}
`,l+=`**Location:** ${u.elementPath}
`,u.sourceFile)l+=`**Source:** ${u.sourceFile}
`;if(u.reactComponents)l+=`**React:** ${u.reactComponents}
`;if(t==="detailed"){if(u.cssClasses)l+=`**Classes:** ${u.cssClasses}
`;if(u.boundingBox)l+=`**Position:** ${Math.round(u.boundingBox.x)}px, ${Math.round(u.boundingBox.y)}px (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`}if(u.selectedText)l+=`**Selected text:** "${u.selectedText}"
`;if(t==="detailed"&&u.nearbyText&&!u.selectedText)l+=`**Context:** ${u.nearbyText.slice(0,100)}
`;l+=`**Feedback:** ${u.comment}

`}}),l.trim()}var Kw=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,Gw={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",markerIn:"styles-module__markerIn___x4G8D",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",markerTooltip:"styles-module__markerTooltip___-VUm-",tooltipIn:"styles-module__tooltipIn___aJslQ",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-annotation-marker-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(e);e.textContent=Kw}var zn=Gw;function fh({annotation:e,globalIndex:n,layerIndex:t,layerSize:r,isExiting:l,isClearing:u,isAnimated:i,isHovered:s,isDeleting:f,isEditingAny:v,renumberFrom:y,markerClickBehavior:_,tooltipStyle:g,onHoverEnter:F,onHoverLeave:E,onClick:L,onContextMenu:x}){let p=(s||f)&&!v,m=p&&_==="delete",S=e.isMultiSelect,T=S?"var(--agentation-color-green)":"var(--agentation-color-accent)",U=l?zn.exit:u?zn.clearing:!i?zn.enter:"",G=l?`${(r-1-t)*20}ms`:`${t*20}ms`;return a("div",{className:`${zn.marker} ${S?zn.multiSelect:""} ${U} ${m?zn.hovered:""}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y,backgroundColor:m?void 0:T,animationDelay:G},onMouseEnter:()=>F(e),onMouseLeave:E,onClick:(D)=>{if(D.stopPropagation(),!l)L(e)},onContextMenu:x?(D)=>{if(_==="delete"){if(D.preventDefault(),D.stopPropagation(),!l)x(e)}}:void 0,children:[p?m?o(yh,{size:S?18:16}):o(uk,{size:16}):o("span",{className:y!==null&&n>=y?zn.renumber:void 0,children:n+1}),s&&!v&&a("div",{className:`${zn.markerTooltip} ${zn.enter}`,style:g,children:[a("span",{className:zn.markerQuote,children:[e.element,e.selectedText&&` "${e.selectedText.slice(0,30)}${e.selectedText.length>30?"...":""}"`]}),o("span",{className:zn.markerNote,children:e.comment})]})]})}function Zw({x:e,y:n,isMultiSelect:t,isExiting:r}){return o("div",{className:`${zn.marker} ${zn.pending} ${t?zn.multiSelect:""} ${r?zn.exit:zn.enter}`,style:{left:`${e}%`,top:n,backgroundColor:t?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:o(Zg,{size:12})})}function ch({annotation:e,fixed:n}){let t=e.isMultiSelect;return o("div",{className:`${zn.marker} ${n?zn.fixed:""} ${zn.hovered} ${t?zn.multiSelect:""} ${zn.exit}`,"data-annotation-marker":!0,style:{left:`${e.x}%`,top:e.y},children:o(yh,{size:t?12:10})})}var Aw=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Jw={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-switch-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-switch-styles",document.head.appendChild(e);e.textContent=Aw}var va=Jw,ma=({className:e="",...n})=>{return a("div",{className:`${va.switchContainer} ${e}`,children:[o("input",{className:va.switchInput,type:"checkbox",...n}),o("div",{className:va.switchThumb})]})},Yw=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Xw={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(e);e.textContent=Yw}var ks=Xw,qw=({className:e="",...n})=>{return a("div",{className:`${ks.checkboxContainer} ${e}`,children:[o("input",{className:ks.checkboxInput,type:"checkbox",...n}),o("svg",{className:ks.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:o("path",{className:ks.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},bw=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,eS={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-checkbox-field-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(e);e.textContent=bw}var ah=eS,dh=({className:e="",label:n,tooltip:t,checked:r,onChange:l,...u})=>{let i=jh.useId();return a("div",{className:`${ah.container} ${e}`,...u,children:[o(qw,{id:i,onChange:l,checked:r}),o("label",{className:ah.label,htmlFor:i,children:n}),t&&o(kl,{content:t})]})},nS=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,tS={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let e=document.getElementById("feedback-tool-styles-settings-panel-styles");if(!e)e=document.createElement("style"),e.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(e);e.textContent=nS}var ee=tS;function rS({settings:e,onSettingsChange:n,isDarkMode:t,onToggleTheme:r,isDevMode:l,connectionStatus:u,endpoint:i,isVisible:s,toolbarNearBottom:f,settingsPage:v,onSettingsPageChange:y,onHideToolbar:_}){return o("div",{className:`${ee.settingsPanel} ${s?ee.enter:ee.exit}`,style:f?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:a("div",{className:ee.settingsPanelContainer,children:[a("div",{className:`${ee.settingsPage} ${v==="automations"?ee.slideLeft:""}`,children:[a("div",{className:ee.settingsHeader,children:[o("a",{className:ee.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:o("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),a("p",{className:ee.settingsVersion,children:["v","3.0.2"]}),o("button",{className:ee.themeToggle,onClick:r,title:t?"Switch to light mode":"Switch to dark mode",children:o("span",{className:ee.themeIconWrapper,children:o("span",{className:ee.themeIcon,children:t?o(rk,{size:20}):o(lk,{size:20})},t?"sun":"moon")})})]}),o("div",{className:ee.divider}),a("div",{className:ee.settingsSection,children:[a("div",{className:ee.settingsRow,children:[a("div",{className:ee.settingsLabel,children:["Output Detail",o(kl,{content:"Controls how much detail is included in the copied output"})]}),a("button",{className:ee.cycleButton,onClick:()=>{let F=(No.findIndex((E)=>E.value===e.outputDetail)+1)%No.length;n({outputDetail:No[F].value})},children:[o("span",{className:ee.cycleButtonText,children:No.find((g)=>g.value===e.outputDetail)?.label},e.outputDetail),o("span",{className:ee.cycleDots,children:No.map((g)=>o("span",{className:`${ee.cycleDot} ${e.outputDetail===g.value?ee.active:""}`},g.value))})]})]}),a("div",{className:`${ee.settingsRow} ${ee.settingsRowMarginTop} ${!l?ee.settingsRowDisabled:""}`,children:[a("div",{className:ee.settingsLabel,children:["React Components",o(kl,{content:!l?"Disabled — production builds minify component names, making detection unreliable. Use in development mode.":"Include React component names in annotations"})]}),o(ma,{checked:l&&e.reactEnabled,onChange:(g)=>n({reactEnabled:g.target.checked}),disabled:!l})]}),a("div",{className:`${ee.settingsRow} ${ee.settingsRowMarginTop}`,children:[a("div",{className:ee.settingsLabel,children:["Hide Until Restart",o(kl,{content:"Hides the toolbar until you open a new tab"})]}),o(ma,{checked:!1,onChange:(g)=>{if(g.target.checked)_()}})]})]}),o("div",{className:ee.divider}),a("div",{className:ee.settingsSection,children:[o("div",{className:`${ee.settingsLabel} ${ee.settingsLabelMarker}`,children:"Marker Color"}),o("div",{className:ee.colorOptions,children:zo.map((g)=>o("button",{className:`${ee.colorOption} ${e.annotationColorId===g.id?ee.selected:""}`,style:{"--swatch":g.srgb,"--swatch-p3":g.p3},onClick:()=>n({annotationColorId:g.id}),title:g.label,type:"button"},g.id))})]}),o("div",{className:ee.divider}),a("div",{className:ee.settingsSection,children:[o(dh,{className:"checkbox-field",label:"Clear on copy/send",checked:e.autoClearAfterCopy,onChange:(g)=>n({autoClearAfterCopy:g.target.checked}),tooltip:"Automatically clear annotations after copying"}),o(dh,{className:ee.checkboxField,label:"Block page interactions",checked:e.blockInteractions,onChange:(g)=>n({blockInteractions:g.target.checked})})]}),o("div",{className:ee.divider}),a("button",{className:ee.settingsNavLink,onClick:()=>y("automations"),children:[o("span",{children:"Manage MCP & Webhooks"}),a("span",{className:ee.settingsNavLinkRight,children:[i&&u!=="disconnected"&&o("span",{className:`${ee.mcpNavIndicator} ${ee[u]}`}),o("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),a("div",{className:`${ee.settingsPage} ${ee.automationsPage} ${v==="automations"?ee.slideIn:""}`,children:[a("button",{className:ee.settingsBackButton,onClick:()=>y("main"),children:[o(ik,{size:16}),o("span",{children:"Manage MCP & Webhooks"})]}),o("div",{className:ee.divider}),a("div",{className:ee.settingsSection,children:[a("div",{className:ee.settingsRow,children:[a("span",{className:ee.automationHeader,children:["MCP Connection",o(kl,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),i&&o("div",{className:`${ee.mcpStatusDot} ${ee[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),a("p",{className:ee.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",o("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:ee.learnMoreLink,children:"Learn more"})]})]}),o("div",{className:ee.divider}),a("div",{className:`${ee.settingsSection} ${ee.settingsSectionGrow}`,children:[a("div",{className:ee.settingsRow,children:[a("span",{className:ee.automationHeader,children:["Webhooks",o(kl,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),a("div",{className:ee.autoSendContainer,children:[o("label",{htmlFor:"agentation-auto-send",className:`${ee.autoSendLabel} ${e.webhooksEnabled?ee.active:""} ${!e.webhookUrl?ee.disabled:""}`,children:"Auto-Send"}),o(ma,{id:"agentation-auto-send",checked:e.webhooksEnabled,onChange:(g)=>n({webhooksEnabled:g.target.checked}),disabled:!e.webhookUrl})]})]}),o("p",{className:ee.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),o("textarea",{className:ee.webhookUrlInput,placeholder:"Webhook URL",value:e.webhookUrl,onKeyDown:(g)=>g.stopPropagation(),onChange:(g)=>n({webhookUrl:g.target.value})})]})]})]})})}function ga(e,n="filtered"){let{name:t,path:r}=cu(e);if(n==="off")return{name:t,elementName:t,path:r,reactComponents:null};let l=Fw(e,{mode:n});return{name:l.path?`${l.path} ${t}`:t,elementName:t,path:r,reactComponents:l.path}}var ph=!1,ka={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},rr=(e)=>{if(!e||!e.trim())return!1;try{let n=new URL(e.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},lS={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},zo=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],uS=()=>{if(typeof document>"u")return;if(document.getElementById("agentation-color-tokens"))return;let e=document.createElement("style");e.id="agentation-color-tokens",e.textContent=[...zo.map((n)=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${zo.map((n)=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${zo.map((n)=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(e)};uS();function ml(e,n){let t=document.elementFromPoint(e,n);if(!t)return null;while(t?.shadowRoot){let r=t.shadowRoot.elementFromPoint(e,n);if(!r||r===t)break;t=r}return t}function wa(e){let n=e;while(n&&n!==document.body){let r=window.getComputedStyle(n).position;if(r==="fixed"||r==="sticky")return!0;n=n.parentElement}return!1}function gl(e){return e.status!=="resolved"&&e.status!=="dismissed"}function ws(e){let n=xa(e),t=n.found?n:Uw(e);if(t.found&&t.source)return Bw(t.source,"path");return}function Oh({demoAnnotations:e,demoDelay:n=1000,enableDemoMode:t=!1,onAnnotationAdd:r,onAnnotationDelete:l,onAnnotationUpdate:u,onAnnotationsClear:i,onCopy:s,onSubmit:f,copyToClipboard:v=!0,endpoint:y,sessionId:_,onSessionCreated:g,webhookUrl:F,className:E}={}){let[L,x]=z.useState(!1),[p,m]=z.useState([]),[S,T]=z.useState(!0),[U,G]=z.useState(()=>mw()),[D,A]=z.useState(!1),ye=z.useRef(null);z.useEffect(()=>{let c=(k)=>{let w=ye.current;if(w&&w.contains(k.target))k.stopPropagation()},h=["mousedown","click","pointerdown"];return h.forEach((k)=>document.body.addEventListener(k,c)),()=>{h.forEach((k)=>document.body.removeEventListener(k,c))}},[]);let[J,ae]=z.useState(!1),[Ke,nn]=z.useState(!1),[Le,Ve]=z.useState(null),[Ee,He]=z.useState({x:0,y:0}),[K,pe]=z.useState(null),[Ie,kn]=z.useState(!1),[tt,Jn]=z.useState("idle"),[kr,yt]=z.useState(!1),[wr,Pt]=z.useState(!1),[ur,Sr]=z.useState(null),[Gr,ct]=z.useState(null),[Lt,rt]=z.useState([]),[Ht,Kt]=z.useState(null),[Sl,Tt]=z.useState(null),[Te,W]=z.useState(null),[se,ve]=z.useState(null),[Pe,me]=z.useState([]),[Ge,Je]=z.useState(0),[Qe,Re]=z.useState(!1),[de,N]=z.useState(!1),[P,V]=z.useState(!1),[$,Y]=z.useState(!1),[te,Q]=z.useState(!1),[le,_e]=z.useState("main"),[Me,Ze]=z.useState(!1),[ue,Ye]=z.useState(!1),[Fe,Ne]=z.useState(!1),[oe,Xe]=z.useState([]),[$e,ze]=z.useState(null),Be=z.useRef(!1),[ge,un]=z.useState(!1),[Rn,vt]=z.useState(!1),[Gt,lt]=z.useState(1),[or,Po]=z.useState("new-page"),[_n,ir]=z.useState(""),[Lo,Vh]=z.useState(!1),[Se,mt]=z.useState(null),Es=z.useRef(!1),Ns=z.useRef({rearrange:null,placements:[]}),Zr=z.useRef({rearrange:null,placements:[]}),[Mh,Oa]=z.useState(0),[$h,Ih]=z.useState(0),[Qh,zs]=z.useState(0),[Bh,Ra]=z.useState(0),du=z.useRef(new Set),To=z.useRef(new Set),Ft=z.useRef(null),Fo=z.useRef(),Da=ue&&L&&!Fe&&ge;z.useEffect(()=>{if(Da){vt(!1);let c=fu(()=>{vt(!0)});return()=>cancelAnimationFrame(c)}else vt(!1)},[Da]);let pu=z.useRef(new Map),hu=z.useRef(new Map),yu=z.useRef(),[jt,xs]=z.useState(!1),[gt,Uh]=z.useState([]),Wh=z.useRef(gt);Wh.current=gt;let[Va,oS]=z.useState(null),Ps=z.useRef(null),iS=z.useRef(!1),sS=z.useRef([]),fS=z.useRef(0),cS=z.useRef(null),aS=z.useRef(null),dS=z.useRef(1),[Ma,$a]=z.useState(!1),_l=z.useRef(null),[xn,Cl]=z.useState([]),Zt=z.useRef({cmd:!1,shift:!1}),Bn=()=>{Ze(!0)},Hh=()=>{Ze(!1)},Kh=()=>{if(!Ma)_l.current=ce(()=>$a(!0),850)},Gh=()=>{if(_l.current)clearTimeout(_l.current),_l.current=null;$a(!1),Hh()};z.useEffect(()=>{return()=>{if(_l.current)clearTimeout(_l.current)}},[]);let[je,Zh]=z.useState(()=>{try{let c=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...ka,...c,annotationColorId:zo.find((h)=>h.id===c.annotationColorId)?c.annotationColorId:ka.annotationColorId}}catch{return ka}}),[At,Ia]=z.useState(!0),[Qa,Ba]=z.useState(!1),Ah=()=>{ye.current?.classList.add(I.disableTransitions),Ia((c)=>!c),fu(()=>{ye.current?.classList.remove(I.disableTransitions)})},Ua=!1,Ar=Ua&&je.reactEnabled?lS[je.outputDetail]:"off",[Tn,Ls]=z.useState(_??null),Wa=z.useRef(!1),[Ot,Jr]=z.useState(y?"connecting":"disconnected"),[dn,Ts]=z.useState(null),[Yr,Ha]=z.useState(!1),[El,Ka]=z.useState(null),Fs=z.useRef(!1),[Ga,vu]=z.useState(new Set),[Za,jo]=z.useState(new Set),[mu,Oo]=z.useState(!1),[Jh,Nl]=z.useState(!1),[sr,Aa]=z.useState(!1),zl=z.useRef(null),Jt=z.useRef(null),gu=z.useRef(null),ku=z.useRef(null),Ro=z.useRef(!1),Ja=z.useRef(0),Do=z.useRef(null),Ya=z.useRef(null),js=8,Yh=50,Xa=z.useRef(null),qa=z.useRef(null),wu=z.useRef(null),he=typeof window<"u"?window.location.pathname:"/";z.useEffect(()=>{if($)Q(!0);else{Ze(!1),_e("main");let c=ce(()=>Q(!1),0);return()=>clearTimeout(c)}},[$]);let Os=L&&S&&!ue;z.useEffect(()=>{if(Os){nn(!1),ae(!0),vu(new Set);let c=ce(()=>{vu((h)=>{let k=new Set(h);return p.forEach((w)=>k.add(w.id)),k})},350);return()=>clearTimeout(c)}else if(J){nn(!0);let c=ce(()=>{ae(!1),nn(!1)},250);return()=>clearTimeout(c)}},[Os]),z.useEffect(()=>{N(!0),Je(window.scrollY);let c=da(he);if(m(c.filter(gl)),!ph)Ba(!0),ph=!0,ce(()=>Ba(!1),750);try{let h=localStorage.getItem("feedback-toolbar-theme");if(h!==null)Ia(h==="dark")}catch(h){}try{let h=localStorage.getItem("feedback-toolbar-position");if(h){let k=JSON.parse(h);if(typeof k.x==="number"&&typeof k.y==="number")Ts(k)}}catch(h){}},[he]),z.useEffect(()=>{if(de)localStorage.setItem("feedback-toolbar-settings",JSON.stringify(je))},[je,de]),z.useEffect(()=>{if(de)localStorage.setItem("feedback-toolbar-theme",At?"dark":"light")},[At,de]);let ba=z.useRef(!1);z.useEffect(()=>{let c=ba.current;if(ba.current=Yr,c&&!Yr&&dn&&de)localStorage.setItem("feedback-toolbar-position",JSON.stringify(dn))},[Yr,dn,de]),z.useEffect(()=>{if(!y||!de||Wa.current)return;Wa.current=!0,Jr("connecting"),(async()=>{try{let h=yw(he),k=_||h,w=!1;if(k)try{let C=await lh(y,k);Ls(C.id),Jr("connected"),pa(he,C.id),w=!0;let R=da(he),H=new Set(C.annotations.map((ne)=>ne.id)),Z=R.filter((ne)=>{if(H.has(ne.id))return!1;return!0});if(Z.length>0){let re=`${typeof window<"u"?window.location.origin:""}${he}`,Ce=(await Promise.allSettled(Z.map((fe)=>iu(y,C.id,{...fe,sessionId:C.id,url:re})))).map((fe,q)=>{if(fe.status==="fulfilled")return fe.value;return console.warn("[Agentation] Failed to sync annotation:",fe.reason),Z[q]}),De=[...C.annotations,...Ce];m(De.filter(gl)),_o(he,De.filter(gl),C.id)}else m(C.annotations.filter(gl)),_o(he,C.annotations.filter(gl),C.id)}catch(C){console.warn("[Agentation] Could not join session, creating new:",C),vw(he)}if(!w){let C=typeof window<"u"?window.location.href:"/",R=await ha(y,C);Ls(R.id),Jr("connected"),pa(he,R.id),g?.(R.id);let H=iw(),Z=typeof window<"u"?window.location.origin:"",ne=[];for(let[re,ie]of H){let Ce=ie.filter((q)=>!q._syncedTo);if(Ce.length===0)continue;let De=`${Z}${re}`,fe=re===he;ne.push((async()=>{try{let q=fe?R:await ha(y,De),Fn=(await Promise.allSettled(Ce.map((qe)=>iu(y,q.id,{...qe,sessionId:q.id,url:De})))).map((qe,En)=>{if(qe.status==="fulfilled")return qe.value;return console.warn("[Agentation] Failed to sync annotation:",qe.reason),Ce[En]}).filter(gl);if(_o(re,Fn,q.id),fe){let qe=new Set(Ce.map((En)=>En.id));m((En)=>{let ke=En.filter((xe)=>!qe.has(xe.id));return[...Fn,...ke]})}}catch(q){console.warn(`[Agentation] Failed to sync annotations for ${re}:`,q)}})())}await Promise.allSettled(ne)}}catch(h){Jr("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",h)}})()},[y,_,de,g,he]),z.useEffect(()=>{if(!y||!de)return;let c=async()=>{try{if((await fetch(`${y}/health`)).ok)Jr("connected");else Jr("disconnected")}catch{Jr("disconnected")}};c();let h=ck(c,1e4);return()=>clearInterval(h)},[y,de]),z.useEffect(()=>{if(!y||!de||!Tn)return;let c=new EventSource(`${y}/sessions/${Tn}/events`),h=["resolved","dismissed"],k=(w)=>{try{let C=JSON.parse(w.data);if(h.includes(C.payload?.status)){let R=C.payload.id,H=C.payload.kind;if(H==="placement"){for(let[Z,ne]of pu.current)if(ne===R){pu.current.delete(Z),Xe((re)=>re.filter((ie)=>ie.id!==Z));break}}else if(H==="rearrange"){for(let[Z,ne]of hu.current)if(ne===R){hu.current.delete(Z),mt((re)=>{if(!re)return null;let ie=re.sections.filter((Ce)=>Ce.id!==Z);if(ie.length===0)return null;return{...re,sections:ie}});break}}else jo((Z)=>new Set(Z).add(R)),ce(()=>{m((Z)=>Z.filter((ne)=>ne.id!==R)),jo((Z)=>{let ne=new Set(Z);return ne.delete(R),ne})},150)}}catch{}};return c.addEventListener("annotation.updated",k),()=>{c.removeEventListener("annotation.updated",k),c.close()}},[y,de,Tn]),z.useEffect(()=>{if(!y||!de)return;let c=Ya.current==="disconnected",h=Ot==="connected";if(Ya.current=Ot,c&&h)(async()=>{try{let w=da(he);if(w.length===0)return;let R=`${typeof window<"u"?window.location.origin:""}${he}`,H=Tn,Z=[];if(H)try{Z=(await lh(y,H)).annotations}catch{H=null}if(!H)H=(await ha(y,R)).id,Ls(H),pa(he,H);let ne=new Set(Z.map((ie)=>ie.id)),re=w.filter((ie)=>!ne.has(ie.id));if(re.length>0){let Ce=(await Promise.allSettled(re.map((q)=>iu(y,H,{...q,sessionId:H,url:R})))).map((q,Cn)=>{if(q.status==="fulfilled")return q.value;return console.warn("[Agentation] Failed to sync annotation on reconnect:",q.reason),re[Cn]}),fe=[...Z,...Ce].filter(gl);m(fe),_o(he,fe,H)}}catch(w){console.warn("[Agentation] Failed to sync on reconnect:",w)}})()},[Ot,y,de,Tn,he]);let Xh=z.useCallback(()=>{if(D)return;A(!0),Y(!1),x(!1),ce(()=>{gw(!0),G(!0),A(!1)},400)},[D]);z.useEffect(()=>{if(!t)return;if(!de||!e||e.length===0)return;if(p.length>0)return;let c=[];return c.push(ce(()=>{x(!0)},n-200)),e.forEach((h,k)=>{let w=n+k*300;c.push(ce(()=>{let C=document.querySelector(h.selector);if(!C)return;let R=C.getBoundingClientRect(),{name:H,path:Z}=cu(C),ne={id:`demo-${Date.now()}-${k}`,x:(R.left+R.width/2)/window.innerWidth*100,y:R.top+R.height/2+window.scrollY,comment:h.comment,element:H,elementPath:Z,timestamp:Date.now(),selectedText:h.selectedText,boundingBox:{x:R.left,y:R.top+window.scrollY,width:R.width,height:R.height},nearbyText:wo(C),cssClasses:So(C)};m((re)=>[...re,ne])},w))}),()=>{c.forEach(clearTimeout)}},[t,de,e,n]),z.useEffect(()=>{let c=()=>{if(Je(window.scrollY),Re(!0),wu.current)clearTimeout(wu.current);wu.current=ce(()=>{Re(!1)},150)};return window.addEventListener("scroll",c,{passive:!0}),()=>{if(window.removeEventListener("scroll",c),wu.current)clearTimeout(wu.current)}},[]),z.useEffect(()=>{if(de&&p.length>0)if(Tn)_o(he,p,Tn);else Lh(he,p);else if(de&&p.length===0)localStorage.removeItem(Cs(he))},[p,he,de,Tn]),z.useEffect(()=>{if(de&&!Be.current){Be.current=!0;let c=sw(he);if(c.length>0)Xe(c)}},[de,he]),z.useEffect(()=>{if(de&&Be.current&&!ge)if(oe.length>0)fw(he,oe);else cw(he)},[oe,he,de,ge]),z.useEffect(()=>{if(de&&!Es.current){Es.current=!0;let c=aw(he);if(c){let h={...c,sections:c.sections.map((k)=>({...k,currentRect:k.currentRect??{...k.originalRect}}))};mt(h)}}},[de,he]),z.useEffect(()=>{if(de&&Es.current&&!ge)if(Se)dw(he,Se);else pw(he)},[Se,he,de,ge]);let Rs=z.useRef(!1);z.useEffect(()=>{if(de&&!Rs.current){Rs.current=!0;let c=hw(he);if(c){if(Zr.current={rearrange:c.rearrange,placements:c.placements||[]},c.purpose)ir(c.purpose)}}},[de,he]),z.useEffect(()=>{if(!de||!Rs.current)return;let c=Zr.current;if(ge)if((Se?.sections?.length??0)>0||oe.length>0||_n)rh(he,{rearrange:Se,placements:oe,purpose:_n});else ms(he);else if((c.rearrange?.sections?.length??0)>0||c.placements.length>0||_n)rh(he,{rearrange:c.rearrange,placements:c.placements,purpose:_n});else ms(he)},[Se,oe,_n,ge,he,de]),z.useEffect(()=>{if(ue&&!Se)mt({sections:[],originalOrder:[],detectedAt:Date.now()})},[ue,Se]),z.useEffect(()=>{if(!y||!Tn)return;let c=pu.current,h=new Set(oe.map((k)=>k.id));for(let k of oe){if(c.has(k.id))continue;c.set(k.id,"");let w=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:he;iu(y,Tn,{id:k.id,x:k.x/window.innerWidth*100,y:k.y,comment:`Place ${k.type} at (${Math.round(k.x)}, ${Math.round(k.y)}), ${k.width}×${k.height}px${k.text?` — "${k.text}"`:""}`,element:`[design:${k.type}]`,elementPath:"[placement]",timestamp:k.timestamp,url:w,intent:"change",severity:"important",kind:"placement",placement:{componentType:k.type,width:k.width,height:k.height,scrollY:k.scrollY,text:k.text}}).then((C)=>{if(c.has(k.id))c.set(k.id,C.id)}).catch((C)=>{console.warn("[Agentation] Failed to sync placement annotation:",C),c.delete(k.id)})}for(let[k,w]of c)if(!h.has(k)){if(c.delete(k),w)Kr(y,w).catch(()=>{})}},[oe,y,Tn,he]),z.useEffect(()=>{if(!y||!Tn)return;if(yu.current)clearTimeout(yu.current);return yu.current=ce(()=>{let c=hu.current;if(!Se||Se.sections.length===0){for(let[,w]of c)if(w)Kr(y,w).catch(()=>{});c.clear();return}let h=new Set(Se.sections.map((w)=>w.id)),k=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:he;for(let w of Se.sections){let{originalRect:C,currentRect:R}=w;if(!(Math.abs(C.x-R.x)>1||Math.abs(C.y-R.y)>1||Math.abs(C.width-R.width)>1||Math.abs(C.height-R.height)>1)){let ne=c.get(w.id);if(ne)c.delete(w.id),Kr(y,ne).catch(()=>{});continue}let Z=c.get(w.id);if(Z)uh(y,Z,{comment:`Move ${w.label} section (${w.tagName}) — from (${Math.round(C.x)},${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)} to (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}×${Math.round(R.height)}`}).catch((ne)=>{console.warn("[Agentation] Failed to update rearrange annotation:",ne)});else c.set(w.id,""),iu(y,Tn,{id:w.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Move ${w.label} section (${w.tagName}) — from (${Math.round(C.x)},${Math.round(C.y)}) ${Math.round(C.width)}×${Math.round(C.height)} to (${Math.round(R.x)},${Math.round(R.y)}) ${Math.round(R.width)}×${Math.round(R.height)}`,element:w.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:k,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:w.selector,label:w.label,tagName:w.tagName,originalRect:C,currentRect:R}}).then((ne)=>{if(c.has(w.id))c.set(w.id,ne.id)}).catch((ne)=>{console.warn("[Agentation] Failed to sync rearrange annotation:",ne),c.delete(w.id)})}for(let[w,C]of c)if(!h.has(w)){if(c.delete(w),C)Kr(y,C).catch(()=>{})}},300),()=>{if(yu.current)clearTimeout(yu.current)}},[Se,y,Tn,he]);let xl=z.useRef(new Map);z.useLayoutEffect(()=>{let c=Se?.sections??[],h=new Set;if((ue||Fe)&&L)for(let k of c){h.add(k.id);try{let w=document.querySelector(k.selector);if(!w)continue;if(!xl.current.has(k.id)){let C={transform:w.style.transform,transformOrigin:w.style.transformOrigin,opacity:w.style.opacity,position:w.style.position,zIndex:w.style.zIndex,display:w.style.display},R=[],H=w.parentElement;while(H&&H!==document.body){let ne=getComputedStyle(H);if(ne.overflow!=="visible"||ne.overflowX!=="visible"||ne.overflowY!=="visible")R.push({el:H,overflow:H.style.overflow}),H.style.overflow="visible";H=H.parentElement}if(getComputedStyle(w).display==="inline")w.style.display="inline-block";xl.current.set(k.id,{el:w,origStyles:C,ancestors:R}),w.style.transformOrigin="top left",w.style.zIndex="9999"}}catch{}}for(let[k,w]of xl.current)if(!h.has(k)){let{el:C,origStyles:R,ancestors:H}=w;C.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",C.style.transform=R.transform,C.style.transformOrigin=R.transformOrigin,C.style.opacity=R.opacity,C.style.position=R.position,C.style.zIndex=R.zIndex,xl.current.delete(k),ce(()=>{C.style.transition="",C.style.display=R.display;for(let Z of H)Z.el.style.overflow=Z.overflow},450)}},[Se,ue,Fe,L]),z.useEffect(()=>{return()=>{for(let[,c]of xl.current){let{el:h,origStyles:k,ancestors:w}=c;h.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",h.style.transform=k.transform,h.style.transformOrigin=k.transformOrigin,h.style.opacity=k.opacity,h.style.position=k.position,h.style.zIndex=k.zIndex,ce(()=>{h.style.transition="",h.style.display=k.display;for(let C of w)C.el.style.overflow=C.overflow},450)}xl.current.clear()}},[]);let Vo=z.useCallback(()=>{Ne(!0),Ye(!1),ze(null),clearTimeout(Fo.current),Fo.current=ce(()=>{Ne(!1)},300)},[]),ed=z.useCallback(()=>{if(ue)Ne(!0),Ye(!1),ze(null),clearTimeout(Fo.current),Fo.current=ce(()=>{Ne(!1)},300);x(!1)},[ue]),nd=z.useCallback(()=>{if(P)return;dk(),V(!0)},[P]),Mo=z.useCallback(()=>{if(!P)return;W1(),V(!1)},[P]),Ds=z.useCallback(()=>{if(P)Mo();else nd()},[P,nd,Mo]),td=z.useCallback(()=>{if(xn.length===0)return;let c=xn[0],h=c.element,k=xn.length>1,w=xn.map((C)=>C.element.getBoundingClientRect());if(!k){let C=w[0],R=wa(h);pe({x:C.left/window.innerWidth*100,y:R?C.top:C.top+window.scrollY,clientY:C.top,element:c.name,elementPath:c.path,boundingBox:{x:C.left,y:R?C.top:C.top+window.scrollY,width:C.width,height:C.height},isFixed:R,fullPath:hs(h),accessibility:ps(h),computedStyles:ds(h),computedStylesObj:as(h),nearbyElements:cs(h),cssClasses:So(h),nearbyText:wo(h),reactComponents:c.reactComponents,sourceFile:ws(h)})}else{let C={left:Math.min(...w.map((q)=>q.left)),top:Math.min(...w.map((q)=>q.top)),right:Math.max(...w.map((q)=>q.right)),bottom:Math.max(...w.map((q)=>q.bottom))},R=xn.slice(0,5).map((q)=>q.name).join(", "),H=xn.length>5?` +${xn.length-5} more`:"",Z=w.map((q)=>({x:q.left,y:q.top+window.scrollY,width:q.width,height:q.height})),re=xn[xn.length-1].element,ie=w[w.length-1],Ce=ie.left+ie.width/2,De=ie.top+ie.height/2,fe=wa(re);pe({x:Ce/window.innerWidth*100,y:fe?De:De+window.scrollY,clientY:De,element:`${xn.length} elements: ${R}${H}`,elementPath:"multi-select",boundingBox:{x:C.left,y:C.top+window.scrollY,width:C.right-C.left,height:C.bottom-C.top},isMultiSelect:!0,isFixed:fe,elementBoundingBoxes:Z,multiSelectElements:xn.map((q)=>q.element),targetElement:re,fullPath:hs(h),accessibility:ps(h),computedStyles:ds(h),computedStylesObj:as(h),nearbyElements:cs(h),cssClasses:So(h),nearbyText:wo(h),sourceFile:ws(h)})}Cl([]),Ve(null)},[xn]);z.useEffect(()=>{if(!L){if(pe(null),W(null),ve(null),me([]),Ve(null),Y(!1),Cl([]),Zt.current={cmd:!1,shift:!1},P)Mo()}},[L,P,Mo]),z.useEffect(()=>{return()=>{W1()}},[]),z.useEffect(()=>{if(!L)return;let c=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),h=":not([data-agentation-root]):not([data-agentation-root] *)",k=document.createElement("style");return k.id="feedback-cursor-styles",k.textContent=`
      body ${h} {
        cursor: crosshair !important;
      }

      body :is(${c})${h} {
        cursor: text !important;
      }
    `,document.head.appendChild(k),()=>{let w=document.getElementById("feedback-cursor-styles");if(w)w.remove()}},[L]),z.useEffect(()=>{if(Va!==null&&L)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Va,L]),z.useEffect(()=>{if(!L||K||jt||ue)return;let c=(h)=>{let k=h.composedPath()[0]||h.target;if(et(k,"[data-feedback-toolbar]")){Ve(null);return}let w=ml(h.clientX,h.clientY);if(!w||et(w,"[data-feedback-toolbar]")){Ve(null);return}let{name:C,elementName:R,path:H,reactComponents:Z}=ga(w,Ar),ne=w.getBoundingClientRect();Ve({element:C,elementName:R,elementPath:H,rect:ne,reactComponents:Z}),He({x:h.clientX,y:h.clientY})};return document.addEventListener("mousemove",c),()=>document.removeEventListener("mousemove",c)},[L,K,jt,ue,Ar,gt]);let $o=z.useCallback((c)=>{if(W(c),Sr(null),ct(null),rt([]),c.elementBoundingBoxes?.length){let h=[];for(let k of c.elementBoundingBoxes){let w=k.x+k.width/2,C=k.y+k.height/2-window.scrollY,R=ml(w,C);if(R)h.push(R)}me(h),ve(null)}else if(c.boundingBox){let h=c.boundingBox,k=h.x+h.width/2,w=c.isFixed?h.y+h.height/2:h.y+h.height/2-window.scrollY,C=ml(k,w);if(C){let R=C.getBoundingClientRect(),H=R.width/h.width,Z=R.height/h.height;if(H<0.5||Z<0.5)ve(null);else ve(C)}else ve(null);me([])}else ve(null),me([])},[]);z.useEffect(()=>{if(!L||jt||ue)return;let c=(h)=>{if(Ro.current){Ro.current=!1;return}let k=h.composedPath()[0]||h.target;if(et(k,"[data-feedback-toolbar]"))return;if(et(k,"[data-annotation-popup]"))return;if(et(k,"[data-annotation-marker]"))return;if(h.metaKey&&h.shiftKey&&!K&&!Te){h.preventDefault(),h.stopPropagation();let tn=ml(h.clientX,h.clientY);if(!tn)return;let Fn=tn.getBoundingClientRect(),{name:qe,path:En,reactComponents:ke}=ga(tn,Ar),xe=xn.findIndex((pn)=>pn.element===tn);if(xe>=0)Cl((pn)=>pn.filter((wn,Rt)=>Rt!==xe));else Cl((pn)=>[...pn,{element:tn,rect:Fn,name:qe,path:En,reactComponents:ke??void 0}]);return}let w=et(k,"button, a, input, select, textarea, [role='button'], [onclick]");if(je.blockInteractions&&w)h.preventDefault(),h.stopPropagation();if(K){if(w&&!je.blockInteractions)return;h.preventDefault(),Xa.current?.shake();return}if(Te){if(w&&!je.blockInteractions)return;h.preventDefault(),qa.current?.shake();return}h.preventDefault();let C=ml(h.clientX,h.clientY);if(!C)return;let{name:R,path:H,reactComponents:Z}=ga(C,Ar),ne=C.getBoundingClientRect(),re=h.clientX/window.innerWidth*100,ie=wa(C),Ce=ie?h.clientY:h.clientY+window.scrollY,De=window.getSelection(),fe;if(De&&De.toString().trim().length>0)fe=De.toString().trim().slice(0,500);let q=as(C),Cn=ds(C);pe({x:re,y:Ce,clientY:h.clientY,element:R,elementPath:H,selectedText:fe,boundingBox:{x:ne.left,y:ie?ne.top:ne.top+window.scrollY,width:ne.width,height:ne.height},nearbyText:wo(C),cssClasses:So(C),isFixed:ie,fullPath:hs(C),accessibility:ps(C),computedStyles:Cn,computedStylesObj:q,nearbyElements:cs(C),reactComponents:Z??void 0,sourceFile:ws(C),targetElement:C}),Ve(null)};return document.addEventListener("click",c,!0),()=>document.removeEventListener("click",c,!0)},[L,jt,ue,K,Te,je.blockInteractions,Ar,xn]),z.useEffect(()=>{if(!L)return;let c=(w)=>{if(w.key==="Meta")Zt.current.cmd=!0;if(w.key==="Shift")Zt.current.shift=!0},h=(w)=>{let C=Zt.current.cmd&&Zt.current.shift;if(w.key==="Meta")Zt.current.cmd=!1;if(w.key==="Shift")Zt.current.shift=!1;let R=Zt.current.cmd&&Zt.current.shift;if(C&&!R&&xn.length>0)td()},k=()=>{Zt.current={cmd:!1,shift:!1},Cl([])};return document.addEventListener("keydown",c),document.addEventListener("keyup",h),window.addEventListener("blur",k),()=>{document.removeEventListener("keydown",c),document.removeEventListener("keyup",h),window.removeEventListener("blur",k)}},[L,xn,td]),z.useEffect(()=>{if(!L||K||jt||ue)return;let c=(h)=>{let k=h.composedPath()[0]||h.target;if(et(k,"[data-feedback-toolbar]"))return;if(et(k,"[data-annotation-marker]"))return;if(et(k,"[data-annotation-popup]"))return;if(new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(k.tagName)||k.isContentEditable)return;h.preventDefault(),zl.current={x:h.clientX,y:h.clientY}};return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[L,K,jt,ue]),z.useEffect(()=>{if(!L||K)return;let c=(h)=>{if(!zl.current)return;let k=h.clientX-zl.current.x,w=h.clientY-zl.current.y,C=k*k+w*w,R=js*js;if(!sr&&C>=R)Jt.current=zl.current,Aa(!0),h.preventDefault();if((sr||C>=R)&&Jt.current){if(gu.current){let ke=Math.min(Jt.current.x,h.clientX),xe=Math.min(Jt.current.y,h.clientY),pn=Math.abs(h.clientX-Jt.current.x),wn=Math.abs(h.clientY-Jt.current.y);gu.current.style.transform=`translate(${ke}px, ${xe}px)`,gu.current.style.width=`${pn}px`,gu.current.style.height=`${wn}px`}let H=Date.now();if(H-Ja.current<Yh)return;Ja.current=H;let Z=Jt.current.x,ne=Jt.current.y,re=Math.min(Z,h.clientX),ie=Math.min(ne,h.clientY),Ce=Math.max(Z,h.clientX),De=Math.max(ne,h.clientY),fe=(re+Ce)/2,q=(ie+De)/2,Cn=new Set,tn=[[re,ie],[Ce,ie],[re,De],[Ce,De],[fe,q],[fe,ie],[fe,De],[re,q],[Ce,q]];for(let[ke,xe]of tn){let pn=document.elementsFromPoint(ke,xe);for(let wn of pn)if(wn instanceof HTMLElement)Cn.add(wn)}let Fn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let ke of Fn)if(ke instanceof HTMLElement){let xe=ke.getBoundingClientRect(),pn=xe.left+xe.width/2,wn=xe.top+xe.height/2,Rt=pn>=re&&pn<=Ce&&wn>=ie&&wn<=De,kt=Math.min(xe.right,Ce)-Math.max(xe.left,re),Mn=Math.min(xe.bottom,De)-Math.max(xe.top,ie),_u=kt>0&&Mn>0?kt*Mn:0,qr=xe.width*xe.height,_r=qr>0?_u/qr:0;if(Rt||_r>0.5)Cn.add(ke)}let qe=[],En=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let ke of Cn){if(et(ke,"[data-feedback-toolbar]")||et(ke,"[data-annotation-marker]"))continue;let xe=ke.getBoundingClientRect();if(xe.width>window.innerWidth*0.8&&xe.height>window.innerHeight*0.5)continue;if(xe.width<10||xe.height<10)continue;if(xe.left<Ce&&xe.right>re&&xe.top<De&&xe.bottom>ie){let pn=ke.tagName,wn=En.has(pn);if(!wn&&(pn==="DIV"||pn==="SPAN")){let Rt=ke.textContent&&ke.textContent.trim().length>0,kt=ke.onclick!==null||ke.getAttribute("role")==="button"||ke.getAttribute("role")==="link"||ke.classList.contains("clickable")||ke.hasAttribute("data-clickable");if((Rt||kt)&&!ke.querySelector("p, h1, h2, h3, h4, h5, h6, button, a"))wn=!0}if(wn){let Rt=!1;for(let kt of qe)if(kt.left<=xe.left&&kt.right>=xe.right&&kt.top<=xe.top&&kt.bottom>=xe.bottom){Rt=!0;break}if(!Rt)qe.push(xe)}}}if(ku.current){let ke=ku.current;while(ke.children.length>qe.length)ke.removeChild(ke.lastChild);qe.forEach((xe,pn)=>{let wn=ke.children[pn];if(!wn)wn=document.createElement("div"),wn.className=I.selectedElementHighlight,ke.appendChild(wn);wn.style.transform=`translate(${xe.left}px, ${xe.top}px)`,wn.style.width=`${xe.width}px`,wn.style.height=`${xe.height}px`})}}};return document.addEventListener("mousemove",c,{passive:!0}),()=>document.removeEventListener("mousemove",c)},[L,K,sr,js]),z.useEffect(()=>{if(!L)return;let c=(h)=>{let k=sr,w=Jt.current;if(sr&&w){Ro.current=!0;let C=Math.min(w.x,h.clientX),R=Math.min(w.y,h.clientY),H=Math.max(w.x,h.clientX),Z=Math.max(w.y,h.clientY),ne=[],re="button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th";document.querySelectorAll(re).forEach((fe)=>{if(!(fe instanceof HTMLElement))return;if(et(fe,"[data-feedback-toolbar]")||et(fe,"[data-annotation-marker]"))return;let q=fe.getBoundingClientRect();if(q.width>window.innerWidth*0.8&&q.height>window.innerHeight*0.5)return;if(q.width<10||q.height<10)return;if(q.left<H&&q.right>C&&q.top<Z&&q.bottom>R)ne.push({element:fe,rect:q})});let ie=ne.filter(({element:fe})=>!ne.some(({element:q})=>q!==fe&&fe.contains(q))),Ce=h.clientX/window.innerWidth*100,De=h.clientY+window.scrollY;if(ie.length>0){let fe=ie.reduce((En,{rect:ke})=>({left:Math.min(En.left,ke.left),top:Math.min(En.top,ke.top),right:Math.max(En.right,ke.right),bottom:Math.max(En.bottom,ke.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),q=ie.slice(0,5).map(({element:En})=>cu(En).name).join(", "),Cn=ie.length>5?` +${ie.length-5} more`:"",tn=ie[0].element,Fn=as(tn),qe=ds(tn);pe({x:Ce,y:De,clientY:h.clientY,element:`${ie.length} elements: ${q}${Cn}`,elementPath:"multi-select",boundingBox:{x:fe.left,y:fe.top+window.scrollY,width:fe.right-fe.left,height:fe.bottom-fe.top},isMultiSelect:!0,fullPath:hs(tn),accessibility:ps(tn),computedStyles:qe,computedStylesObj:Fn,nearbyElements:cs(tn),cssClasses:So(tn),nearbyText:wo(tn),sourceFile:ws(tn)})}else{let fe=Math.abs(H-C),q=Math.abs(Z-R);if(fe>20&&q>20)pe({x:Ce,y:De,clientY:h.clientY,element:"Area selection",elementPath:`region at (${Math.round(C)}, ${Math.round(R)})`,boundingBox:{x:C,y:R+window.scrollY,width:fe,height:q},isMultiSelect:!0})}Ve(null)}else if(k)Ro.current=!0;if(zl.current=null,Jt.current=null,Aa(!1),ku.current)ku.current.innerHTML=""};return document.addEventListener("mouseup",c),()=>document.removeEventListener("mouseup",c)},[L,sr]);let Yt=z.useCallback(async(c,h,k)=>{let w=je.webhookUrl||F;if(!w||!je.webhooksEnabled&&!k)return!1;try{return(await fetch(w,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:c,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...h})})).ok}catch(C){return console.warn("[Agentation] Webhook failed:",C),!1}},[F,je.webhookUrl,je.webhooksEnabled]),qh=z.useCallback((c)=>{if(!K)return;let h={id:Date.now().toString(),x:K.x,y:K.y,comment:c,element:K.element,elementPath:K.elementPath,timestamp:Date.now(),selectedText:K.selectedText,boundingBox:K.boundingBox,nearbyText:K.nearbyText,cssClasses:K.cssClasses,isMultiSelect:K.isMultiSelect,isFixed:K.isFixed,fullPath:K.fullPath,accessibility:K.accessibility,computedStyles:K.computedStyles,nearbyElements:K.nearbyElements,reactComponents:K.reactComponents,sourceFile:K.sourceFile,elementBoundingBoxes:K.elementBoundingBoxes,...y&&Tn?{sessionId:Tn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};if(m((k)=>[...k,h]),Do.current=h.id,ce(()=>{Do.current=null},300),ce(()=>{vu((k)=>new Set(k).add(h.id))},250),r?.(h),Yt("annotation.add",{annotation:h}),Oo(!0),ce(()=>{pe(null),Oo(!1)},150),window.getSelection()?.removeAllRanges(),y&&Tn)iu(y,Tn,h).then((k)=>{if(k.id!==h.id)m((w)=>w.map((C)=>C.id===h.id?{...C,id:k.id}:C)),vu((w)=>{let C=new Set(w);return C.delete(h.id),C.add(k.id),C})}).catch((k)=>{console.warn("[Agentation] Failed to sync annotation:",k)})},[K,r,Yt,y,Tn]),Vs=z.useCallback(()=>{Oo(!0),ce(()=>{pe(null),Oo(!1)},150)},[]),Ms=z.useCallback((c)=>{let h=p.findIndex((w)=>w.id===c),k=p[h];if(Te?.id===c)Nl(!0),ce(()=>{W(null),ve(null),me([]),Nl(!1)},150);if(Kt(c),jo((w)=>new Set(w).add(c)),k)l?.(k),Yt("annotation.delete",{annotation:k});if(y)Kr(y,c).catch((w)=>{console.warn("[Agentation] Failed to delete annotation from server:",w)});ce(()=>{if(m((w)=>w.filter((C)=>C.id!==c)),jo((w)=>{let C=new Set(w);return C.delete(c),C}),Kt(null),h<p.length-1)Tt(h),ce(()=>Tt(null),200)},150)},[p,Te,l,Yt,y]),Io=z.useCallback((c)=>{if(!c){Sr(null),ct(null),rt([]);return}if(Sr(c.id),c.elementBoundingBoxes?.length){let h=[];for(let k of c.elementBoundingBoxes){let w=k.x+k.width/2,C=k.y+k.height/2-window.scrollY,H=document.elementsFromPoint(w,C).find((Z)=>!Z.closest("[data-annotation-marker]")&&!Z.closest("[data-agentation-root]"));if(H)h.push(H)}rt(h),ct(null)}else if(c.boundingBox){let h=c.boundingBox,k=h.x+h.width/2,w=c.isFixed?h.y+h.height/2:h.y+h.height/2-window.scrollY,C=ml(k,w);if(C){let R=C.getBoundingClientRect(),H=R.width/h.width,Z=R.height/h.height;if(H<0.5||Z<0.5)ct(null);else ct(C)}else ct(null);rt([])}else ct(null),rt([])},[]),bh=z.useCallback((c)=>{if(!Te)return;let h={...Te,comment:c};if(m((k)=>k.map((w)=>w.id===Te.id?h:w)),u?.(h),Yt("annotation.update",{annotation:h}),y)uh(y,Te.id,{comment:c}).catch((k)=>{console.warn("[Agentation] Failed to update annotation on server:",k)});Nl(!0),ce(()=>{W(null),ve(null),me([]),Nl(!1)},150)},[Te,u,Yt,y]),ey=z.useCallback(()=>{Nl(!0),ce(()=>{W(null),ve(null),me([]),Nl(!1)},150)},[]),Xr=z.useCallback(()=>{let c=p.length,h=oe.length>0||!!Se;if(c===0&&gt.length===0&&!h)return;if(i?.(p),Yt("annotations.clear",{annotations:p}),y){Promise.all(p.map((C)=>Kr(y,C.id).catch((R)=>{console.warn("[Agentation] Failed to delete annotation from server:",R)})));for(let[,C]of pu.current)if(C)Kr(y,C).catch(()=>{});pu.current.clear();for(let[,C]of hu.current)if(C)Kr(y,C).catch(()=>{});hu.current.clear()}Pt(!0),yt(!0),Uh([]);let k=Ps.current;if(k){let C=k.getContext("2d");if(C)C.clearRect(0,0,k.width,k.height)}if(oe.length>0||Se)zs((C)=>C+1),Ra((C)=>C+1),ce(()=>{Xe([]),mt(null)},200);if(ge)un(!1);if(_n)ir("");Zr.current={rearrange:null,placements:[]},ms(he);let w=c*30+200;ce(()=>{m([]),vu(new Set),localStorage.removeItem(Cs(he)),Pt(!1)},w),ce(()=>yt(!1),1500)},[he,p,gt,oe,Se,ge,_n,i,Yt,y]),$s=z.useCallback(async()=>{let c=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:he,h=ue&&ge,k;if(h){if(oe.length===0&&!Se&&!_n)return;k=""}else{if(k=sh(p,c,je.outputDetail),!k&&gt.length===0&&oe.length===0&&!Se)return;if(!k)k=`## Page Feedback: ${c}
`}if(!h&&gt.length>0){let w=new Set;for(let Z of p)if(Z.drawingIndex!=null)w.add(Z.drawingIndex);let C=Ps.current;if(C)C.style.visibility="hidden";let R=[],H=window.scrollY;for(let Z=0;Z<gt.length;Z++){if(w.has(Z))continue;let ne=gt[Z];if(ne.points.length<2)continue;let re=ne.fixed?ne.points:ne.points.map((Pn)=>({x:Pn.x,y:Pn.y-H})),ie=1/0,Ce=1/0,De=-1/0,fe=-1/0;for(let Pn of re)ie=Math.min(ie,Pn.x),Ce=Math.min(Ce,Pn.y),De=Math.max(De,Pn.x),fe=Math.max(fe,Pn.y);let q=De-ie,Cn=fe-Ce,tn=Math.hypot(q,Cn),Fn=re[0],qe=re[re.length-1],En=Math.hypot(qe.x-Fn.x,qe.y-Fn.y),ke,xe=En<tn*0.35,pn=q/Math.max(Cn,1);if(xe&&tn>20){let Pn=Math.max(q,Cn)*0.15,Cr=0;for(let br of re){let ry=br.x-ie<Pn,ly=De-br.x<Pn,uy=br.y-Ce<Pn,oy=fe-br.y<Pn;if((ry||ly)&&(uy||oy))Cr++}ke=Cr>re.length*0.15?"box":"circle"}else if(pn>3&&Cn<40)ke="underline";else if(En>tn*0.5)ke="arrow";else ke="drawing";let wn=Math.min(10,re.length),Rt=Math.max(1,Math.floor(re.length/wn)),kt=new Set,Mn=[],_u=[Fn];for(let Pn=Rt;Pn<re.length-1;Pn+=Rt)_u.push(re[Pn]);_u.push(qe);for(let Pn of _u){let Cr=ml(Pn.x,Pn.y);if(!Cr||kt.has(Cr))continue;if(et(Cr,"[data-feedback-toolbar]"))continue;kt.add(Cr);let{name:br}=cu(Cr);if(!Mn.includes(br))Mn.push(br)}let qr=`${Math.round(ie)},${Math.round(Ce)} → ${Math.round(De)},${Math.round(fe)}`,_r;if((ke==="circle"||ke==="box")&&Mn.length>0)_r=`${ke==="box"?"Boxed":"Circled"} **${Mn[0]}**${Mn.length>1?` (and ${Mn.slice(1).join(", ")})`:""} (region: ${qr})`;else if(ke==="underline"&&Mn.length>0)_r=`Underlined **${Mn[0]}** (${qr})`;else if(ke==="arrow"&&Mn.length>=2)_r=`Arrow from **${Mn[0]}** to **${Mn[Mn.length-1]}** (${Math.round(Fn.x)},${Math.round(Fn.y)} → ${Math.round(qe.x)},${Math.round(qe.y)})`;else if(Mn.length>0)_r=`${ke==="arrow"?"Arrow":"Drawing"} near **${Mn.join("**, **")}** (region: ${qr})`;else _r=`Drawing at ${qr}`;R.push(_r)}if(C)C.style.visibility="";if(R.length>0)k+=`
**Drawings:**
`,R.forEach((Z,ne)=>{k+=`${ne+1}. ${Z}
`})}if(oe.length>0||h&&_n)k+=`
`+nh(oe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ge,wireframePurpose:_n||void 0},je.outputDetail);if(Se){let w=th(Se,je.outputDetail,{width:window.innerWidth,height:window.innerHeight});if(w)k+=`
`+w}if(v)try{await navigator.clipboard.writeText(k)}catch{}if(s?.(k),kn(!0),ce(()=>kn(!1),2000),je.autoClearAfterCopy)ce(()=>Xr(),500)},[p,gt,oe,Se,ge,ue,or,_n,he,je.outputDetail,Ar,je.autoClearAfterCopy,Xr,v,s]),Is=z.useCallback(async()=>{let c=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:he,h=sh(p,c,je.outputDetail);if(!h&&oe.length===0&&!Se)return;if(!h)h=`## Page Feedback: ${c}
`;if(oe.length>0)h+=`
`+nh(oe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:ge,wireframePurpose:_n||void 0},je.outputDetail);if(Se){let w=th(Se,je.outputDetail,{width:window.innerWidth,height:window.innerHeight});if(w)h+=`
`+w}if(f)f(h,p);Jn("sending"),await new Promise((w)=>ce(w,150));let k=await Yt("submit",{output:h,annotations:p},!0);if(Jn(k?"sent":"failed"),ce(()=>Jn("idle"),2500),k&&je.autoClearAfterCopy)ce(()=>Xr(),500)},[f,Yt,p,oe,Se,ge,or,he,je.outputDetail,Ar,je.autoClearAfterCopy,Xr]);z.useEffect(()=>{if(!El)return;let c=10,h=(w)=>{let C=w.clientX-El.x,R=w.clientY-El.y,H=Math.sqrt(C*C+R*R);if(!Yr&&H>c)Ha(!0);if(Yr||H>c){let Z=El.toolbarX+C,ne=El.toolbarY+R,re=20,ie=337,Ce=44,fe=ie-(L?Ot==="connected"?297:257:44),q=re-fe,Cn=window.innerWidth-re-ie;Z=Math.max(q,Math.min(Cn,Z)),ne=Math.max(re,Math.min(window.innerHeight-Ce-re,ne)),Ts({x:Z,y:ne})}},k=()=>{if(Yr)Fs.current=!0;Ha(!1),Ka(null)};return document.addEventListener("mousemove",h),document.addEventListener("mouseup",k),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",k)}},[El,Yr,L,Ot]);let ny=z.useCallback((c)=>{if(c.target.closest("button")||c.target.closest("[data-agentation-settings-panel]"))return;let h=c.currentTarget.parentElement;if(!h)return;let k=h.getBoundingClientRect(),w=dn?.x??k.left,C=dn?.y??k.top;Ka({x:c.clientX,y:c.clientY,toolbarX:w,toolbarY:C})},[dn]);if(z.useEffect(()=>{if(!dn)return;let c=()=>{let{x:C,y:R}=dn,ne=20-(337-(L?Ot==="connected"?297:257:44)),re=window.innerWidth-20-337;if(C=Math.max(ne,Math.min(re,C)),R=Math.max(20,Math.min(window.innerHeight-44-20,R)),C!==dn.x||R!==dn.y)Ts({x:C,y:R})};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[dn,L,Ot]),z.useEffect(()=>{let c=(h)=>{let k=h.target,w=k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable;if(h.key==="Escape"){if(ue){if($e)ze(null);else Vo();return}if(jt){xs(!1);return}if(xn.length>0){Cl([]);return}if(K);else if(L)Bn(),x(!1)}if((h.metaKey||h.ctrlKey)&&h.shiftKey&&(h.key==="f"||h.key==="F")){if(h.preventDefault(),Bn(),L)ed();else x(!0);return}if(w||h.metaKey||h.ctrlKey)return;if(h.key==="p"||h.key==="P")h.preventDefault(),Bn(),Ds();if(h.key==="l"||h.key==="L"){if(h.preventDefault(),Bn(),jt)xs(!1);if($)Y(!1);if(K)Vs();if(ue)Vo();else Ye(!0)}if(h.key==="h"||h.key==="H"){if(p.length>0)h.preventDefault(),Bn(),T((C)=>!C)}if(h.key==="c"||h.key==="C"){if(p.length>0||oe.length>0||Se)h.preventDefault(),Bn(),$s()}if(h.key==="x"||h.key==="X"){if(p.length>0||oe.length>0||Se){if(h.preventDefault(),Bn(),Xr(),oe.length>0)Xe([]);if(Se)mt(null)}}if(h.key==="s"||h.key==="S"){let C=rr(je.webhookUrl)||rr(F||"");if(p.length>0&&C&&tt==="idle")h.preventDefault(),Bn(),Is()}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[L,jt,ue,$e,oe,Se,K,p.length,je.webhookUrl,F,tt,Is,Ds,$s,Xr,xn]),!de)return null;if(U)return null;let Su=p.length>0,Pl=p.filter((c)=>!Za.has(c.id)&&c.kind!=="placement"&&c.kind!=="rearrange"),ty=Pl.length>0,rd=p.filter((c)=>Za.has(c.id)),ld=(c)=>{let R=c.x/100*window.innerWidth,H=typeof c.y==="string"?parseFloat(c.y):c.y,Z={};if(window.innerHeight-H-22-10<80)Z.top="auto",Z.bottom="calc(100% + 10px)";let re=R-100,ie=10;if(re<ie){let Ce=ie-re;Z.left=`calc(50% + ${Ce}px)`}else if(re+200>window.innerWidth-ie){let Ce=re+200-(window.innerWidth-ie);Z.left=`calc(50% - ${Ce}px)`}return Z};return hh.createPortal(a("div",{ref:ye,style:{display:"contents"},"data-agentation-theme":At?"dark":"light","data-agentation-accent":je.annotationColorId,"data-agentation-root":"",children:[o("div",{className:`${I.toolbar}${E?` ${E}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:dn?{left:dn.x,top:dn.y,right:"auto",bottom:"auto"}:void 0,children:a("div",{className:`${I.toolbarContainer} ${L?I.expanded:I.collapsed} ${Qa?I.entrance:""} ${D?I.hiding:""} ${!je.webhooksEnabled&&(rr(je.webhookUrl)||rr(F||""))?I.serverConnected:""}`,onClick:!L?(c)=>{if(Fs.current){Fs.current=!1,c.preventDefault();return}x(!0)}:void 0,onMouseDown:ny,role:!L?"button":void 0,tabIndex:!L?0:-1,title:!L?"Start feedback mode":void 0,children:[a("div",{className:`${I.toggleContent} ${!L?I.visible:I.hidden}`,children:[o(Ag,{size:24}),ty&&o("span",{className:`${I.badge} ${L?I.fadeOut:""} ${Qa?I.entrance:""}`,children:Pl.length})]}),a("div",{className:`${I.controlsContent} ${L?I.visible:I.hidden} ${dn&&dn.y<100?I.tooltipBelow:""} ${Me||$?I.tooltipsHidden:""} ${Ma?I.tooltipsInSession:""}`,onMouseEnter:Kh,onMouseLeave:Gh,children:[a("div",{className:`${I.buttonWrapper} ${dn&&dn.x<120?I.buttonWrapperAlignLeft:""}`,children:[o("button",{className:I.controlButton,onClick:(c)=>{c.stopPropagation(),Bn(),Ds()},"data-active":P,children:o(bg,{size:24,isPaused:P})}),a("span",{className:I.buttonTooltip,children:[P?"Resume animations":"Pause animations",o("span",{className:I.shortcut,children:"P"})]})]}),a("div",{className:I.buttonWrapper,children:[o("button",{className:`${I.controlButton} ${!At?I.light:""}`,onClick:(c)=>{if(c.stopPropagation(),Bn(),jt)xs(!1);if($)Y(!1);if(K)Vs();if(ue)Vo();else Ye(!0)},"data-active":ue,style:ue&&ge?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:o(sk,{size:21})}),a("span",{className:I.buttonTooltip,children:[ue?"Exit layout mode":"Layout mode",o("span",{className:I.shortcut,children:"L"})]})]}),a("div",{className:I.buttonWrapper,children:[o("button",{className:I.controlButton,onClick:(c)=>{c.stopPropagation(),Bn(),T(!S)},disabled:!Su||ue,children:o(qg,{size:24,isOpen:S})}),a("span",{className:I.buttonTooltip,children:[S?"Hide markers":"Show markers",o("span",{className:I.shortcut,children:"H"})]})]}),a("div",{className:I.buttonWrapper,children:[o("button",{className:`${I.controlButton} ${Ie?I.statusShowing:""}`,onClick:(c)=>{c.stopPropagation(),Bn(),$s()},disabled:ue&&ge?oe.length===0&&!Se?.sections?.length:!Su&&gt.length===0&&oe.length===0&&!Se?.sections?.length,"data-active":Ie,children:o(Yg,{size:24,copied:Ie,tint:ue&&ge&&(oe.length>0||!!Se?.sections?.length)?"#f97316":void 0})}),a("span",{className:I.buttonTooltip,children:[ue&&ge?"Copy layout":"Copy feedback",o("span",{className:I.shortcut,children:"C"})]})]}),a("div",{className:`${I.buttonWrapper} ${I.sendButtonWrapper} ${L&&!je.webhooksEnabled&&(rr(je.webhookUrl)||rr(F||""))?I.sendButtonVisible:""}`,children:[a("button",{className:`${I.controlButton} ${tt==="sent"||tt==="failed"?I.statusShowing:""}`,onClick:(c)=>{c.stopPropagation(),Bn(),Is()},disabled:!Su||!rr(je.webhookUrl)&&!rr(F||"")||tt==="sending","data-no-hover":tt==="sent"||tt==="failed",tabIndex:rr(je.webhookUrl)||rr(F||"")?0:-1,children:[o(Xg,{size:24,state:tt}),Su&&tt==="idle"&&o("span",{className:I.buttonBadge,children:p.length})]}),a("span",{className:I.buttonTooltip,children:["Send Annotations",o("span",{className:I.shortcut,children:"S"})]})]}),a("div",{className:I.buttonWrapper,children:[o("button",{className:I.controlButton,onClick:(c)=>{c.stopPropagation(),Bn(),Xr()},disabled:!Su&&gt.length===0&&oe.length===0&&!Se?.sections?.length,"data-danger":!0,children:o(nk,{size:24})}),a("span",{className:I.buttonTooltip,children:["Clear all",o("span",{className:I.shortcut,children:"X"})]})]}),a("div",{className:I.buttonWrapper,children:[o("button",{className:I.controlButton,onClick:(c)=>{if(c.stopPropagation(),Bn(),ue)Vo();Y(!$)},children:o(ek,{size:24})}),y&&Ot!=="disconnected"&&o("span",{className:`${I.mcpIndicator} ${I[Ot]} ${$?I.hidden:""}`,title:Ot==="connected"?"MCP Connected":"MCP Connecting..."}),o("span",{className:I.buttonTooltip,children:"Settings"})]}),o("div",{className:I.divider}),a("div",{className:`${I.buttonWrapper} ${dn&&typeof window<"u"&&dn.x>window.innerWidth-120?I.buttonWrapperAlignRight:""}`,children:[o("button",{className:I.controlButton,onClick:(c)=>{c.stopPropagation(),Bn(),ed()},children:o(tk,{size:24})}),a("span",{className:I.buttonTooltip,children:["Exit",o("span",{className:I.shortcut,children:"Esc"})]})]})]}),o(M2,{visible:ue&&L,activeType:$e,onSelect:(c)=>{ze($e===c?null:c)},isDarkMode:At,sectionCount:Se?.sections.length??0,onDetectSections:()=>{let c=A2(),h=Se?.sections??[],k=new Set(h.map((H)=>H.selector)),w=c.filter((H)=>!k.has(H.selector)),C=[...h,...w],R=[...Se?.originalOrder??[],...w.map((H)=>H.id)];mt({sections:C,originalOrder:R,detectedAt:Date.now()})},placementCount:oe.length,onClearPlacements:()=>{zs((c)=>c+1),Ra((c)=>c+1),ce(()=>{mt({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:ge,onBlankCanvasChange:(c)=>{let h={sections:[],originalOrder:[],detectedAt:Date.now()};if(c)Ns.current={rearrange:Se,placements:oe},mt(Zr.current.rearrange||h),Xe(Zr.current.placements),ze(null);else Zr.current={rearrange:Se,placements:oe},mt(Ns.current.rearrange||h),Xe(Ns.current.placements);un(c)},wireframePurpose:_n,onWireframePurposeChange:ir,Tooltip:kl,onDragStart:(c,h)=>{h.preventDefault();let k=X[c],w=null,C=!1,R=h.clientX,H=h.clientY,ne=h.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,re=(Ce)=>{let De=Ce.clientX-R,fe=Ce.clientY-H;if(!C&&(Math.abs(De)>4||Math.abs(fe)>4))C=!0,w=document.createElement("div"),w.className=`${O.dragPreview}${ge?` ${O.dragPreviewWireframe}`:""}`,document.body.appendChild(w);if(!w)return;let q=Math.max(0,ne-Ce.clientY),Cn=Math.min(1,q/180),tn=1-Math.pow(1-Cn,2),Fn=28,qe=20,En=Math.min(140,k.width*0.18),ke=Math.min(90,k.height*0.18),xe=Fn+(En-Fn)*tn,pn=qe+(ke-qe)*tn;w.style.width=`${xe}px`,w.style.height=`${pn}px`,w.style.left=`${Ce.clientX-xe/2}px`,w.style.top=`${Ce.clientY-pn/2}px`,w.style.opacity=`${0.5+0.5*tn}`,w.textContent=tn>0.25?c:""},ie=(Ce)=>{if(window.removeEventListener("mousemove",re),window.removeEventListener("mouseup",ie),w)document.body.removeChild(w);if(C){let{width:De,height:fe}=k,q=window.scrollY,Cn=Math.max(0,Ce.clientX-De/2),tn=Math.max(0,Ce.clientY+q-fe/2),Fn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:c,x:Cn,y:tn,width:De,height:fe,scrollY:q,timestamp:Date.now()};Xe((qe)=>[...qe,Fn]),ze(null),du.current=new Set,Oa((qe)=>qe+1)}};window.addEventListener("mousemove",re),window.addEventListener("mouseup",ie)}}),o(rS,{settings:je,onSettingsChange:(c)=>Zh((h)=>({...h,...c})),isDarkMode:At,onToggleTheme:Ah,isDevMode:Ua,connectionStatus:Ot,endpoint:y,isVisible:te,toolbarNearBottom:!!dn&&dn.y<230,settingsPage:le,onSettingsPageChange:_e,onHideToolbar:Xh})]})}),(ue||Fe)&&o("div",{className:`${O.blankCanvas} ${Rn?O.visible:""} ${Lo?O.gridActive:""}`,style:{"--canvas-opacity":Gt},"data-feedback-toolbar":!0}),ue&&ge&&Rn&&a("div",{className:O.wireframeNotice,"data-feedback-toolbar":!0,children:[a("div",{className:O.wireframeOpacityRow,children:[o("span",{className:O.wireframeOpacityLabel,children:"Toggle Opacity"}),o("input",{type:"range",className:O.wireframeOpacitySlider,min:0,max:1,step:0.01,value:Gt,onChange:(c)=>lt(Number(c.target.value))})]}),a("div",{className:O.wireframeNoticeTitleRow,children:[o("span",{className:O.wireframeNoticeTitle,children:"Wireframe Mode"}),o("span",{className:O.wireframeNoticeDivider}),o("button",{className:O.wireframeStartOver,onClick:()=>{zs((c)=>c+1),mt({sections:[],originalOrder:[],detectedAt:Date.now()}),Zr.current={rearrange:null,placements:[]},ir(""),ms(he)},children:"Start Over"})]}),"Drag components onto the canvas.",o("br",{}),"Copied output will only include the wireframed layout."]}),(ue||Fe)&&o(j2,{placements:oe,onChange:Xe,activeComponent:Fe?null:$e,onActiveComponentChange:ze,isDarkMode:At,exiting:Fe,onInteractionChange:Vh,passthrough:!$e,extraSnapRects:Se?.sections.map((c)=>c.currentRect),deselectSignal:Mh,clearSignal:Qh,wireframe:ge,onSelectionChange:(c,h)=>{if(du.current=c,!h)To.current=new Set,Ih((k)=>k+1)},onDragMove:(c,h)=>{let k=To.current;if(!k.size||!Se)return;if(!Ft.current){Ft.current=new Map;for(let w of Se.sections)if(k.has(w.id))Ft.current.set(w.id,{x:w.currentRect.x,y:w.currentRect.y})}for(let w of Se.sections){if(!k.has(w.id))continue;if(!Ft.current.get(w.id))continue;let R=document.querySelector(`[data-rearrange-section="${w.id}"]`);if(R)R.style.transform=`translate(${c}px, ${h}px)`}},onDragEnd:(c,h,k)=>{let w=To.current,C=Ft.current;if(Ft.current=null,!w.size||!Se||!C)return;for(let R of w){let H=document.querySelector(`[data-rearrange-section="${R}"]`);if(H)H.style.transform=""}if(k)mt((R)=>{if(!R)return R;return{...R,sections:R.sections.map((H)=>{let Z=C.get(H.id);if(!Z)return H;return{...H,currentRect:{...H.currentRect,x:Math.max(0,Z.x+c),y:Math.max(0,Z.y+h)}}})}})}}),(ue||Fe)&&Se&&o(X2,{rearrangeState:Se,onChange:mt,isDarkMode:At,exiting:Fe,blankCanvas:ge,extraSnapRects:oe.map((c)=>({x:c.x,y:c.y,width:c.width,height:c.height})),clearSignal:Bh,deselectSignal:$h,onSelectionChange:(c,h)=>{if(To.current=c,!h)du.current=new Set,Oa((k)=>k+1)},onDragMove:(c,h)=>{let k=du.current;if(!k.size)return;if(!Ft.current){Ft.current=new Map;for(let w of oe)if(k.has(w.id))Ft.current.set(w.id,{x:w.x,y:w.y})}for(let w of k){let C=document.querySelector(`[data-design-placement="${w}"]`);if(C)C.style.transform=`translate(${c}px, ${h}px)`}},onDragEnd:(c,h,k)=>{let w=du.current,C=Ft.current;if(Ft.current=null,!w.size||!C)return;for(let R of w){let H=document.querySelector(`[data-design-placement="${R}"]`);if(H)H.style.transform=""}if(k)Xe((R)=>R.map((H)=>{let Z=C.get(H.id);if(!Z)return H;return{...H,x:Math.max(0,Z.x+c),y:Math.max(0,Z.y+h)}}))}}),o("canvas",{ref:Ps,className:`${I.drawCanvas} ${jt?I.active:""}`,style:{opacity:Os?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),a("div",{className:I.markersLayer,"data-feedback-toolbar":!0,children:[J&&Pl.filter((c)=>!c.isFixed).map((c,h,k)=>o(fh,{annotation:c,globalIndex:Pl.findIndex((w)=>w.id===c.id),layerIndex:h,layerSize:k.length,isExiting:Ke,isClearing:wr,isAnimated:Ga.has(c.id),isHovered:!Ke&&ur===c.id,isDeleting:Ht===c.id,isEditingAny:!!Te,renumberFrom:Sl,markerClickBehavior:je.markerClickBehavior,tooltipStyle:ld(c),onHoverEnter:(w)=>!Ke&&w.id!==Do.current&&Io(w),onHoverLeave:()=>Io(null),onClick:(w)=>je.markerClickBehavior==="delete"?Ms(w.id):$o(w),onContextMenu:$o},c.id)),J&&!Ke&&rd.filter((c)=>!c.isFixed).map((c)=>o(ch,{annotation:c},c.id))]}),a("div",{className:I.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[J&&Pl.filter((c)=>c.isFixed).map((c,h,k)=>o(fh,{annotation:c,globalIndex:Pl.findIndex((w)=>w.id===c.id),layerIndex:h,layerSize:k.length,isExiting:Ke,isClearing:wr,isAnimated:Ga.has(c.id),isHovered:!Ke&&ur===c.id,isDeleting:Ht===c.id,isEditingAny:!!Te,renumberFrom:Sl,markerClickBehavior:je.markerClickBehavior,tooltipStyle:ld(c),onHoverEnter:(w)=>!Ke&&w.id!==Do.current&&Io(w),onHoverLeave:()=>Io(null),onClick:(w)=>je.markerClickBehavior==="delete"?Ms(w.id):$o(w),onContextMenu:$o},c.id)),J&&!Ke&&rd.filter((c)=>c.isFixed).map((c)=>o(ch,{annotation:c,fixed:!0},c.id))]}),L&&a("div",{className:I.overlay,"data-feedback-toolbar":!0,style:K||Te?{zIndex:99999}:void 0,children:[Le?.rect&&!K&&!Qe&&!sr&&o("div",{className:`${I.hoverHighlight} ${I.enter}`,style:{left:Le.rect.left,top:Le.rect.top,width:Le.rect.width,height:Le.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),xn.filter((c)=>document.contains(c.element)).map((c,h)=>{let k=c.element.getBoundingClientRect(),w=xn.length>1;return o("div",{className:w?I.multiSelectOutline:I.singleSelectOutline,style:{position:"fixed",left:k.left,top:k.top,width:k.width,height:k.height,...w?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},h)}),ur&&!K&&(()=>{let c=p.find((C)=>C.id===ur);if(!c?.boundingBox)return null;if(c.elementBoundingBoxes?.length){if(Lt.length>0)return Lt.filter((C)=>document.contains(C)).map((C,R)=>{let H=C.getBoundingClientRect();return o("div",{className:`${I.multiSelectOutline} ${I.enter}`,style:{left:H.left,top:H.top,width:H.width,height:H.height}},`hover-outline-live-${R}`)});return c.elementBoundingBoxes.map((C,R)=>o("div",{className:`${I.multiSelectOutline} ${I.enter}`,style:{left:C.x,top:C.y-Ge,width:C.width,height:C.height}},`hover-outline-${R}`))}let h=Gr&&document.contains(Gr)?Gr.getBoundingClientRect():null,k=h?{x:h.left,y:h.top,width:h.width,height:h.height}:{x:c.boundingBox.x,y:c.isFixed?c.boundingBox.y:c.boundingBox.y-Ge,width:c.boundingBox.width,height:c.boundingBox.height},w=c.isMultiSelect;return o("div",{className:`${w?I.multiSelectOutline:I.singleSelectOutline} ${I.enter}`,style:{left:k.x,top:k.y,width:k.width,height:k.height,...w?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),Le&&!K&&!Qe&&!sr&&a("div",{className:`${I.hoverTooltip} ${I.enter}`,style:{left:Math.max(8,Math.min(Ee.x,window.innerWidth-100)),top:Math.max(Ee.y-(Le.reactComponents?48:32),8)},children:[Le.reactComponents&&o("div",{className:I.hoverReactPath,children:Le.reactComponents}),o("div",{className:I.hoverElementName,children:Le.elementName})]}),K&&a(An,{children:[K.multiSelectElements?.length?K.multiSelectElements.filter((c)=>document.contains(c)).map((c,h)=>{let k=c.getBoundingClientRect();return o("div",{className:`${I.multiSelectOutline} ${mu?I.exit:I.enter}`,style:{left:k.left,top:k.top,width:k.width,height:k.height}},`pending-multi-${h}`)}):K.targetElement&&document.contains(K.targetElement)?(()=>{let c=K.targetElement.getBoundingClientRect();return o("div",{className:`${I.singleSelectOutline} ${mu?I.exit:I.enter}`,style:{left:c.left,top:c.top,width:c.width,height:c.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():K.boundingBox&&o("div",{className:`${K.isMultiSelect?I.multiSelectOutline:I.singleSelectOutline} ${mu?I.exit:I.enter}`,style:{left:K.boundingBox.x,top:K.boundingBox.y-Ge,width:K.boundingBox.width,height:K.boundingBox.height,...K.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let c=K.x,h=K.isFixed?K.y:K.y-Ge;return a(An,{children:[o(Zw,{x:c,y:h,isMultiSelect:K.isMultiSelect,isExiting:mu}),o(Ss,{ref:Xa,element:K.element,selectedText:K.selectedText,computedStyles:K.computedStylesObj,placeholder:K.element==="Area selection"?"What should change in this area?":K.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:qh,onCancel:Vs,isExiting:mu,lightMode:!At,accentColor:K.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,c/100*window.innerWidth)),...h>window.innerHeight-290?{bottom:window.innerHeight-h+20}:{top:h+20}}})]})})()]}),Te&&a(An,{children:[Te.elementBoundingBoxes?.length?(()=>{if(Pe.length>0)return Pe.filter((c)=>document.contains(c)).map((c,h)=>{let k=c.getBoundingClientRect();return o("div",{className:`${I.multiSelectOutline} ${I.enter}`,style:{left:k.left,top:k.top,width:k.width,height:k.height}},`edit-multi-live-${h}`)});return Te.elementBoundingBoxes.map((c,h)=>o("div",{className:`${I.multiSelectOutline} ${I.enter}`,style:{left:c.x,top:c.y-Ge,width:c.width,height:c.height}},`edit-multi-${h}`))})():(()=>{let c=se&&document.contains(se)?se.getBoundingClientRect():null,h=c?{x:c.left,y:c.top,width:c.width,height:c.height}:Te.boundingBox?{x:Te.boundingBox.x,y:Te.isFixed?Te.boundingBox.y:Te.boundingBox.y-Ge,width:Te.boundingBox.width,height:Te.boundingBox.height}:null;if(!h)return null;return o("div",{className:`${Te.isMultiSelect?I.multiSelectOutline:I.singleSelectOutline} ${I.enter}`,style:{left:h.x,top:h.y,width:h.width,height:h.height,...Te.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),o(Ss,{ref:qa,element:Te.element,selectedText:Te.selectedText,computedStyles:H2(Te.computedStyles),placeholder:"Edit your feedback...",initialValue:Te.comment,submitLabel:"Save",onSubmit:bh,onCancel:ey,onDelete:()=>Ms(Te.id),isExiting:Jh,lightMode:!At,accentColor:Te.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{let c=Te.isFixed?Te.y:Te.y-Ge;return{left:Math.max(160,Math.min(window.innerWidth-160,Te.x/100*window.innerWidth)),...c>window.innerHeight-290?{bottom:window.innerHeight-c+20}:{top:c+20}}})()})]}),sr&&a(An,{children:[o("div",{ref:gu,className:I.dragSelection}),o("div",{ref:ku,className:I.highlightsContainer})]})]})]}),document.body)}var ja=document.createElement("div");ja.id="agentation-root";document.body.appendChild(ja);Dh.createRoot(ja).render(Rh.default.createElement(Oh));
