/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.5
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.5'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.5
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.5'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.5
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.5'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.5
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.5'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.5
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.5'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.5
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.5'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);

!function(e){e(["jquery"],function(e){return function(){function t(e,t,n){return f({type:O.error,iconClass:g().iconClasses.error,message:e,optionsOverride:n,title:t})}function n(t,n){return t||(t=g()),v=e("#"+t.containerId),v.length?v:(n&&(v=c(t)),v)}function i(e,t,n){return f({type:O.info,iconClass:g().iconClasses.info,message:e,optionsOverride:n,title:t})}function o(e){w=e}function s(e,t,n){return f({type:O.success,iconClass:g().iconClasses.success,message:e,optionsOverride:n,title:t})}function a(e,t,n){return f({type:O.warning,iconClass:g().iconClasses.warning,message:e,optionsOverride:n,title:t})}function r(e){var t=g();v||n(t),l(e,t)||u(t)}function d(t){var i=g();return v||n(i),t&&0===e(":focus",t).length?void h(t):void(v.children().length&&v.remove())}function u(t){for(var n=v.children(),i=n.length-1;i>=0;i--)l(e(n[i]),t)}function l(t,n){return t&&0===e(":focus",t).length?(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){h(t)}}),!0):!1}function c(t){return v=e("<div/>").attr("id",t.containerId).addClass(t.positionClass).attr("aria-live","polite").attr("role","alert"),v.appendTo(e(t.target)),v}function p(){return{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",target:"body",closeHtml:'<button type="button">&times;</button>',newestOnTop:!0,preventDuplicates:!1,progressBar:!1}}function m(e){w&&w(e)}function f(t){function i(t){return!e(":focus",l).length||t?(clearTimeout(O.intervalId),l[r.hideMethod]({duration:r.hideDuration,easing:r.hideEasing,complete:function(){h(l),r.onHidden&&"hidden"!==b.state&&r.onHidden(),b.state="hidden",b.endTime=new Date,m(b)}})):void 0}function o(){(r.timeOut>0||r.extendedTimeOut>0)&&(u=setTimeout(i,r.extendedTimeOut),O.maxHideTime=parseFloat(r.extendedTimeOut),O.hideEta=(new Date).getTime()+O.maxHideTime)}function s(){clearTimeout(u),O.hideEta=0,l.stop(!0,!0)[r.showMethod]({duration:r.showDuration,easing:r.showEasing})}function a(){var e=(O.hideEta-(new Date).getTime())/O.maxHideTime*100;f.width(e+"%")}var r=g(),d=t.iconClass||r.iconClass;if("undefined"!=typeof t.optionsOverride&&(r=e.extend(r,t.optionsOverride),d=t.optionsOverride.iconClass||d),r.preventDuplicates){if(t.message===C)return;C=t.message}T++,v=n(r,!0);var u=null,l=e("<div/>"),c=e("<div/>"),p=e("<div/>"),f=e("<div/>"),w=e(r.closeHtml),O={intervalId:null,hideEta:null,maxHideTime:null},b={toastId:T,state:"visible",startTime:new Date,options:r,map:t};return t.iconClass&&l.addClass(r.toastClass).addClass(d),t.title&&(c.append(t.title).addClass(r.titleClass),l.append(c)),t.message&&(p.append(t.message).addClass(r.messageClass),l.append(p)),r.closeButton&&(w.addClass("toast-close-button").attr("role","button"),l.prepend(w)),r.progressBar&&(f.addClass("toast-progress"),l.prepend(f)),l.hide(),r.newestOnTop?v.prepend(l):v.append(l),l[r.showMethod]({duration:r.showDuration,easing:r.showEasing,complete:r.onShown}),r.timeOut>0&&(u=setTimeout(i,r.timeOut),O.maxHideTime=parseFloat(r.timeOut),O.hideEta=(new Date).getTime()+O.maxHideTime,r.progressBar&&(O.intervalId=setInterval(a,10))),l.hover(s,o),!r.onclick&&r.tapToDismiss&&l.click(i),r.closeButton&&w&&w.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&e.cancelBubble!==!0&&(e.cancelBubble=!0),i(!0)}),r.onclick&&l.click(function(){r.onclick(),i()}),m(b),r.debug&&console&&console.log(b),l}function g(){return e.extend({},p(),b.options)}function h(e){v||(v=n()),e.is(":visible")||(e.remove(),e=null,0===v.children().length&&(v.remove(),C=void 0))}var v,w,C,T=0,O={error:"error",info:"info",success:"success",warning:"warning"},b={clear:r,remove:d,error:t,getContainer:n,info:i,options:{},subscribe:o,success:s,version:"2.1.0",warning:a};return b}()})}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});
//# sourceMappingURL=toastr.js.map

var _0xc9a8=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x62\x69\x6E\x64","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x61\x70\x70\x6C\x79","\x72\x65\x64\x61\x63\x74\x6F\x72","\x66\x6E","\x63\x61\x6C\x6C","\x73\x6C\x69\x63\x65","\x73\x74\x72\x69\x6E\x67","\x64\x61\x74\x61","\x73\x65\x61\x72\x63\x68","\x2D\x31","\x2E","\x73\x70\x6C\x69\x74","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x69\x73\x46\x75\x6E\x63\x74\x69\x6F\x6E","\x70\x75\x73\x68","\x4E\x6F\x20\x73\x75\x63\x68\x20\x6D\x65\x74\x68\x6F\x64\x20\x22","\x22\x20\x66\x6F\x72\x20\x52\x65\x64\x61\x63\x74\x6F\x72","\x65\x72\x72\x6F\x72","\x65\x61\x63\x68","\x6C\x65\x6E\x67\x74\x68","\x69\x6E\x69\x74","\x52\x65\x64\x61\x63\x74\x6F\x72","\x56\x45\x52\x53\x49\x4F\x4E","\x31\x30\x2E\x32\x2E\x32","\x6D\x6F\x64\x75\x6C\x65\x73","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74","\x61\x75\x74\x6F\x73\x61\x76\x65","\x62\x6C\x6F\x63\x6B","\x62\x75\x66\x66\x65\x72","\x62\x75\x69\x6C\x64","\x62\x75\x74\x74\x6F\x6E","\x63\x61\x72\x65\x74","\x63\x6C\x65\x61\x6E","\x63\x6F\x64\x65","\x63\x6F\x72\x65","\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x66\x69\x6C\x65","\x66\x6F\x63\x75\x73","\x69\x6D\x61\x67\x65","\x69\x6E\x64\x65\x6E\x74","\x69\x6E\x6C\x69\x6E\x65","\x69\x6E\x73\x65\x72\x74","\x6B\x65\x79\x64\x6F\x77\x6E","\x6B\x65\x79\x75\x70","\x6C\x61\x6E\x67","\x6C\x69\x6E\x65","\x6C\x69\x6E\x6B","\x6C\x69\x6E\x6B\x69\x66\x79","\x6C\x69\x73\x74","\x6D\x6F\x64\x61\x6C","\x6F\x62\x73\x65\x72\x76\x65","\x70\x61\x72\x61\x67\x72\x61\x70\x68\x69\x7A\x65","\x70\x61\x73\x74\x65","\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x70\x72\x6F\x67\x72\x65\x73\x73","\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x73\x68\x6F\x72\x74\x63\x75\x74\x73","\x74\x61\x62\x69\x66\x69\x65\x72","\x74\x69\x64\x79","\x74\x6F\x6F\x6C\x62\x61\x72","\x75\x70\x6C\x6F\x61\x64","\x75\x74\x69\x6C\x73","\x6F\x70\x74\x73","\x65\x6E","\x6C\x74\x72","\x68\x74\x74\x70","\x31\x30\x70\x78","\x68\x74\x6D\x6C","\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x62\x6F\x6C\x64","\x69\x74\x61\x6C\x69\x63","\x64\x65\x6C\x65\x74\x65\x64","\x75\x6E\x6F\x72\x64\x65\x72\x65\x64\x6C\x69\x73\x74","\x6F\x72\x64\x65\x72\x65\x64\x6C\x69\x73\x74","\x6F\x75\x74\x64\x65\x6E\x74","\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x72\x75\x6C\x65","\x70","\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x70\x72\x65","\x68\x31","\x68\x32","\x68\x33","\x68\x34","\x68\x35","\x68\x36","\x73\x63\x72\x69\x70\x74","\x73\x74\x79\x6C\x65","\x74\x61\x62\x6C\x65","\x64\x69\x76","\x66\x6F\x72\x6D","\x75\x6C","\x6F\x6C","\x64\x6C","\x66\x69\x67\x63\x61\x70\x74\x69\x6F\x6E","\x61\x64\x64\x72\x65\x73\x73","\x73\x65\x63\x74\x69\x6F\x6E","\x68\x65\x61\x64\x65\x72","\x66\x6F\x6F\x74\x65\x72","\x61\x73\x69\x64\x65","\x61\x72\x74\x69\x63\x6C\x65","\x6F\x62\x6A\x65\x63\x74","\x69\x66\x72\x61\x6D\x65","\x73\x65\x6C\x65\x63\x74","\x69\x6E\x70\x75\x74","\x74\x65\x78\x74\x61\x72\x65\x61","\x6F\x70\x74\x69\x6F\x6E","\x6D\x61\x70","\x61\x72\x65\x61","\x6D\x61\x74\x68","\x68\x72","\x66\x69\x65\x6C\x64\x73\x65\x74","\x6C\x65\x67\x65\x6E\x64","\x68\x67\x72\x6F\x75\x70","\x6E\x61\x76","\x66\x69\x67\x75\x72\x65","\x64\x65\x74\x61\x69\x6C\x73","\x6D\x65\x6E\x75","\x73\x75\x6D\x6D\x61\x72\x79","\x73\x74\x72\x69\x6B\x65","\x64\x65\x6C","\x62","\x73\x74\x72\x6F\x6E\x67","\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x5C\x73\x3F\x62\x6F\x6C\x64","\x66\x6F\x6E\x74\x2D\x73\x74\x79\x6C\x65\x3A\x5C\x73\x3F\x69\x74\x61\x6C\x69\x63","\x65\x6D","\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x5C\x73\x3F\x75\x6E\x64\x65\x72\x6C\x69\x6E\x65","\x75","\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x5C\x73\x3F\x6C\x69\x6E\x65\x2D\x74\x68\x72\x6F\x75\x67\x68","\x73\x70\x61\x6E","\x75\x6E\x64\x65\x72\x6C\x69\x6E\x65","\x61\x6C\x69\x67\x6E\x6C\x65\x66\x74","\x61\x6C\x69\x67\x6E\x63\x65\x6E\x74\x65\x72","\x61\x6C\x69\x67\x6E\x72\x69\x67\x68\x74","\x6A\x75\x73\x74\x69\x66\x79","\x69\x6E\x6C\x69\x6E\x65\x2E\x72\x65\x6D\x6F\x76\x65\x46\x6F\x72\x6D\x61\x74","\x69\x6E\x6C\x69\x6E\x65\x2E\x66\x6F\x72\x6D\x61\x74","\x73\x75\x70\x65\x72\x73\x63\x72\x69\x70\x74","\x73\x75\x62\x73\x63\x72\x69\x70\x74","\x6C\x69\x6E\x6B\x2E\x73\x68\x6F\x77","\x6C\x69\x73\x74\x2E\x74\x6F\x67\x67\x6C\x65","\x3C\x70\x3E\x26\x23\x78\x32\x30\x30\x62\x3B\x3C\x2F\x70\x3E","\x26\x23\x78\x32\x30\x30\x62\x3B","\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67","\x69\x6D\x61\x67\x65\x2F\x6A\x70\x65\x67","\x69\x6D\x61\x67\x65\x2F\x67\x69\x66","\x61","\x69\x6D\x67","\x73\x75\x62","\x73\x75\x70","\x69","\x73\x6D\x61\x6C\x6C","\x63\x69\x74\x65","\x6C\x69","\x69\x6E\x73","\x73\x61\x6D\x70","\x6B\x62\x64","\x6D\x61\x72\x6B","\x76\x61\x72","\x50","\x48\x31","\x48\x32","\x48\x33","\x48\x34","\x48\x35","\x48\x36","\x44\x4C","\x44\x54","\x44\x44","\x44\x49\x56","\x54\x44","\x42\x4C\x4F\x43\x4B\x51\x55\x4F\x54\x45","\x4F\x55\x54\x50\x55\x54","\x46\x49\x47\x43\x41\x50\x54\x49\x4F\x4E","\x41\x44\x44\x52\x45\x53\x53","\x53\x45\x43\x54\x49\x4F\x4E","\x48\x45\x41\x44\x45\x52","\x46\x4F\x4F\x54\x45\x52","\x41\x53\x49\x44\x45","\x41\x52\x54\x49\x43\x4C\x45","\x50\x52\x45","\x55\x4C","\x4F\x4C","\x4C\x49","\x48\x54\x4D\x4C","\x49\x6E\x73\x65\x72\x74\x20\x56\x69\x64\x65\x6F","\x49\x6E\x73\x65\x72\x74\x20\x49\x6D\x61\x67\x65","\x54\x61\x62\x6C\x65","\x4C\x69\x6E\x6B","\x49\x6E\x73\x65\x72\x74\x20\x6C\x69\x6E\x6B","\x45\x64\x69\x74\x20\x6C\x69\x6E\x6B","\x55\x6E\x6C\x69\x6E\x6B","\x46\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x4E\x6F\x72\x6D\x61\x6C\x20\x74\x65\x78\x74","\x51\x75\x6F\x74\x65","\x43\x6F\x64\x65","\x48\x65\x61\x64\x65\x72\x20\x31","\x48\x65\x61\x64\x65\x72\x20\x32","\x48\x65\x61\x64\x65\x72\x20\x33","\x48\x65\x61\x64\x65\x72\x20\x34","\x48\x65\x61\x64\x65\x72\x20\x35","\x42\x6F\x6C\x64","\x49\x74\x61\x6C\x69\x63","\x46\x6F\x6E\x74\x20\x43\x6F\x6C\x6F\x72","\x42\x61\x63\x6B\x20\x43\x6F\x6C\x6F\x72","\x55\x6E\x6F\x72\x64\x65\x72\x65\x64\x20\x4C\x69\x73\x74","\x4F\x72\x64\x65\x72\x65\x64\x20\x4C\x69\x73\x74","\x4F\x75\x74\x64\x65\x6E\x74","\x49\x6E\x64\x65\x6E\x74","\x43\x61\x6E\x63\x65\x6C","\x49\x6E\x73\x65\x72\x74","\x53\x61\x76\x65","\x44\x65\x6C\x65\x74\x65","\x49\x6E\x73\x65\x72\x74\x20\x54\x61\x62\x6C\x65","\x41\x64\x64\x20\x52\x6F\x77\x20\x41\x62\x6F\x76\x65","\x41\x64\x64\x20\x52\x6F\x77\x20\x42\x65\x6C\x6F\x77","\x41\x64\x64\x20\x43\x6F\x6C\x75\x6D\x6E\x20\x4C\x65\x66\x74","\x41\x64\x64\x20\x43\x6F\x6C\x75\x6D\x6E\x20\x52\x69\x67\x68\x74","\x44\x65\x6C\x65\x74\x65\x20\x43\x6F\x6C\x75\x6D\x6E","\x44\x65\x6C\x65\x74\x65\x20\x52\x6F\x77","\x44\x65\x6C\x65\x74\x65\x20\x54\x61\x62\x6C\x65","\x52\x6F\x77\x73","\x43\x6F\x6C\x75\x6D\x6E\x73","\x41\x64\x64\x20\x48\x65\x61\x64","\x44\x65\x6C\x65\x74\x65\x20\x48\x65\x61\x64","\x54\x69\x74\x6C\x65","\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x4E\x6F\x6E\x65","\x4C\x65\x66\x74","\x52\x69\x67\x68\x74","\x43\x65\x6E\x74\x65\x72","\x49\x6D\x61\x67\x65\x20\x57\x65\x62\x20\x4C\x69\x6E\x6B","\x54\x65\x78\x74","\x45\x6D\x61\x69\x6C","\x55\x52\x4C","\x56\x69\x64\x65\x6F\x20\x45\x6D\x62\x65\x64\x20\x43\x6F\x64\x65\x20\x6F\x72\x20\x59\x6F\x75\x74\x75\x62\x65\x2F\x56\x69\x6D\x65\x6F\x20\x4C\x69\x6E\x6B","\x49\x6E\x73\x65\x72\x74\x20\x46\x69\x6C\x65","\x55\x70\x6C\x6F\x61\x64","\x44\x6F\x77\x6E\x6C\x6F\x61\x64","\x43\x68\x6F\x6F\x73\x65","\x4F\x72\x20\x63\x68\x6F\x6F\x73\x65","\x44\x72\x6F\x70\x20\x66\x69\x6C\x65\x20\x68\x65\x72\x65","\x41\x6C\x69\x67\x6E\x20\x74\x65\x78\x74\x20\x74\x6F\x20\x74\x68\x65\x20\x6C\x65\x66\x74","\x43\x65\x6E\x74\x65\x72\x20\x74\x65\x78\x74","\x41\x6C\x69\x67\x6E\x20\x74\x65\x78\x74\x20\x74\x6F\x20\x74\x68\x65\x20\x72\x69\x67\x68\x74","\x4A\x75\x73\x74\x69\x66\x79\x20\x74\x65\x78\x74","\x49\x6E\x73\x65\x72\x74\x20\x48\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x20\x52\x75\x6C\x65","\x44\x65\x6C\x65\x74\x65\x64","\x41\x6E\x63\x68\x6F\x72","\x4F\x70\x65\x6E\x20\x6C\x69\x6E\x6B\x20\x69\x6E\x20\x6E\x65\x77\x20\x74\x61\x62","\x55\x6E\x64\x65\x72\x6C\x69\x6E\x65","\x41\x6C\x69\x67\x6E\x6D\x65\x6E\x74","\x4E\x61\x6D\x65\x20\x28\x6F\x70\x74\x69\x6F\x6E\x61\x6C\x29","\x45\x64\x69\x74","\x44\x72\x6F\x70\x20\x66\x69\x6C\x65\x20\x68\x65\x72\x65\x20\x6F\x72\x20","\x24\x65\x6C\x65\x6D\x65\x6E\x74","\x75\x75\x69\x64","\x72\x74\x65\x50\x61\x73\x74\x65","\x24\x70\x61\x73\x74\x65\x42\x6F\x78","\x6C\x6F\x61\x64\x4F\x70\x74\x69\x6F\x6E\x73","\x6C\x6F\x61\x64\x4D\x6F\x64\x75\x6C\x65\x73","\x62\x6C\x6F\x63\x6B\x4C\x65\x76\x65\x6C\x45\x6C\x65\x6D\x65\x6E\x74\x73","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x54\x61\x67\x73","\x6D\x65\x72\x67\x65","\x72\x65\x49\x73\x42\x6C\x6F\x63\x6B","\x5E\x28","\x7C","\x6A\x6F\x69\x6E","\x29\x24","\x73\x65\x74\x75\x70\x41\x6C\x6C\x6F\x77\x65\x64","\x64\x65\x6E\x69\x65\x64\x54\x61\x67\x73","\x68\x65\x61\x64","\x62\x6F\x64\x79","\x6D\x65\x74\x61","\x61\x70\x70\x6C\x65\x74","\x6C\x6F\x61\x64","\x73\x68\x6F\x72\x74\x63\x75\x74\x73\x41\x64\x64","\x65\x78\x74\x65\x6E\x64","\x73\x74\x61\x72\x74","\x73\x65\x74\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x72\x75\x6E","\x66\x75\x6E\x63\x74\x69\x6F\x6E","\x66\x69\x6C\x74\x65\x72","\x67\x65\x74\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79\x4E\x61\x6D\x65\x73","\x62\x69\x6E\x64\x4D\x6F\x64\x75\x6C\x65\x4D\x65\x74\x68\x6F\x64\x73","\x67\x65\x74\x4D\x6F\x64\x75\x6C\x65\x4D\x65\x74\x68\x6F\x64\x73","","\x73\x65\x74","\x72\x69\x67\x68\x74","\x63\x65\x6E\x74\x65\x72","\x6D\x73\x69\x65","\x62\x72\x6F\x77\x73\x65\x72","\x24\x65\x64\x69\x74\x6F\x72","\x73\x61\x76\x65","\x62\x6C\x6F\x63\x6B\x73","\x67\x65\x74\x42\x6C\x6F\x63\x6B\x73","\x74\x79\x70\x65","\x69\x73\x4C\x69\x6E\x65\x62\x72\x65\x61\x6B\x73\x4F\x72\x4E\x6F\x42\x6C\x6F\x63\x6B\x73","\x73\x65\x74\x54\x65\x78\x74","\x73\x65\x74\x42\x6C\x6F\x63\x6B\x73","\x72\x65\x73\x74\x6F\x72\x65","\x73\x79\x6E\x63","\x77\x72\x61\x70","\x74\x65\x78\x74\x2D\x61\x6C\x69\x67\x6E","\x63\x73\x73","\x64\x61\x74\x61\x2D\x74\x61\x67\x62\x6C\x6F\x63\x6B","\x61\x74\x74\x72","\x67\x65\x74\x41\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x73\x4E\x65\x65\x64\x52\x65\x70\x6C\x61\x63\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x72\x65\x70\x6C\x61\x63\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x61\x6C\x69\x67\x6E\x45\x6C\x65\x6D\x65\x6E\x74","\x70\x72\x6F\x78\x79","\x6C\x69\x6E\x65\x62\x72\x65\x61\x6B\x73","\x74\x61\x67\x62\x6C\x6F\x63\x6B","\x72\x65\x70\x6C\x61\x63\x65\x57\x69\x74\x68","\x72\x65\x6D\x6F\x76\x65\x45\x6D\x70\x74\x79\x41\x74\x74\x72","\x6E\x61\x6D\x65","\x61\x75\x74\x6F\x73\x61\x76\x65\x4E\x61\x6D\x65","\x24\x74\x65\x78\x74\x61\x72\x65\x61","\x61\x75\x74\x6F\x73\x61\x76\x65\x4F\x6E\x43\x68\x61\x6E\x67\x65","\x61\x75\x74\x6F\x73\x61\x76\x65\x49\x6E\x74\x65\x72\x76\x61\x6C","\x73\x6F\x75\x72\x63\x65","\x67\x65\x74","\x67\x65\x74\x48\x69\x64\x64\x65\x6E\x46\x69\x65\x6C\x64\x73","\x70\x6F\x73\x74","\x61\x6A\x61\x78","\x73\x75\x63\x63\x65\x73\x73","\x64\x6F\x6E\x65","\x61\x75\x74\x6F\x73\x61\x76\x65\x46\x69\x65\x6C\x64\x73","\x23","\x69\x6E\x64\x65\x78\x4F\x66","\x76\x61\x6C","\x70\x61\x72\x73\x65\x4A\x53\x4F\x4E","\x61\x75\x74\x6F\x73\x61\x76\x65\x45\x72\x72\x6F\x72","\x63\x6C\x65\x61\x72\x53\x74\x79\x6C\x65","\x63\x6C\x61\x73\x73","\x63\x6C\x65\x61\x72","\x74\x61\x67","\x66\x6F\x72\x6D\x61\x74","\x71\x75\x6F\x74\x65","\x69\x6E\x41\x72\x72\x61\x79","\x69\x73\x52\x65\x6D\x6F\x76\x65\x49\x6E\x6C\x69\x6E\x65","\x74\x72\x69\x6D","\x69\x73\x45\x6D\x70\x74\x79","\x6D\x6F\x7A\x69\x6C\x6C\x61","\x69\x73\x46\x6F\x63\x75\x73\x65\x64","\x66\x69\x72\x73\x74","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x73\x65\x74\x45\x6E\x64","\x62\x6C\x6F\x63\x6B\x73\x53\x69\x7A\x65","\x76\x61\x6C\x75\x65","\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72\x54\x61\x67","\x74\x61\x67\x4E\x61\x6D\x65","\x63\x6F\x6D\x6D\x6F\x6E\x41\x6E\x63\x65\x73\x74\x6F\x72\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x72\x61\x6E\x67\x65","\x63\x6F\x6C\x6C\x61\x70\x73\x65\x64","\x73\x65\x74\x43\x6F\x6C\x6C\x61\x70\x73\x65\x64","\x73\x65\x74\x4D\x75\x6C\x74\x69\x70\x6C\x65","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x66\x6F\x72\x6D\x61\x74\x4C\x69\x73\x74\x54\x6F\x42\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x54\x48","\x66\x6F\x72\x6D\x61\x74\x62\x6C\x6F\x63\x6B","\x3C","\x3E","\x65\x78\x65\x63\x43\x6F\x6D\x6D\x61\x6E\x64","\x67\x65\x74\x42\x6C\x6F\x63\x6B","\x74\x6F\x67\x67\x6C\x65","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x3C\x62\x72\x3E","\x61\x70\x70\x65\x6E\x64","\x72\x65\x70\x6C\x61\x63\x65\x57\x69\x74\x68\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x72\x65\x70\x6C\x61\x63\x65\x54\x6F\x54\x61\x67","\x72\x65\x6D\x6F\x76\x65","\x66\x69\x6E\x64","\x72\x65\x6D\x6F\x76\x65\x49\x6E\x6C\x69\x6E\x65\x54\x61\x67\x73","\x68\x65\x61\x64\x54\x61\x67","\x75\x6E\x77\x72\x61\x70","\x63\x6F\x6E\x74\x65\x6E\x74\x73","\x66\x6F\x72\x6D\x61\x74\x54\x61\x62\x6C\x65\x57\x72\x61\x70\x70\x69\x6E\x67","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72","\x66\x6F\x72\x6D\x61\x74\x42\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x66\x6F\x72\x6D\x61\x74\x57\x72\x61\x70","\x70\x72\x65\x70\x65\x6E\x64","\x74\x64","\x74\x68","\x64\x74","\x64\x64","\x73\x65\x74\x46\x6F\x72\x63\x65","\x61\x64\x64\x43\x6C\x61\x73\x73","\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73","\x73\x74\x79\x6C\x65\x20\x63\x6C\x61\x73\x73","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x75\x6C\x2C\x20\x6F\x6C","\x63\x6C\x6F\x73\x65\x73\x74","\x63\x6C\x65\x61\x72\x55\x6E\x76\x65\x72\x69\x66\x69\x65\x64","\x70\x3A\x65\x6D\x70\x74\x79","\x72\x65\x6D\x6F\x76\x65\x45\x6D\x70\x74\x79","\x75\x6C\x2C\x20\x6F\x6C\x2C\x20\x74\x72\x2C\x20\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x2C\x20\x70","\x2C","\x2C\x20\x74\x64\x2C\x20\x74\x61\x62\x6C\x65\x2C\x20\x74\x68\x65\x61\x64\x2C\x20\x74\x62\x6F\x64\x79\x2C\x20\x74\x66\x6F\x6F\x74\x2C\x20\x74\x68\x2C\x20\x74\x72","\x67\x65\x74\x4D\x61\x72\x6B\x65\x72","\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3A\x65\x6D\x70\x74\x79","\x6E\x65\x78\x74","\x73\x69\x7A\x65","\x42\x52","\x74\x72","\x3C\x74\x72\x3E","\x3C\x74\x64\x3E","\x64\x61\x74\x61\x2D","\x75\x6E\x64\x6F","\x73\x65\x74\x55\x6E\x64\x6F","\x73\x65\x74\x52\x65\x64\x6F","\x72\x65\x62\x75\x66\x66\x65\x72","\x70\x6F\x70","\x72\x65\x64\x6F","\x67\x65\x74\x55\x6E\x64\x6F","\x67\x65\x74\x52\x65\x64\x6F","\x63\x72\x65\x61\x74\x65\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72\x42\x6F\x78","\x6C\x6F\x61\x64\x43\x6F\x6E\x74\x65\x6E\x74","\x6C\x6F\x61\x64\x45\x64\x69\x74\x6F\x72","\x65\x6E\x61\x62\x6C\x65\x45\x64\x69\x74\x6F\x72","\x73\x65\x74\x43\x6F\x64\x65\x41\x6E\x64\x43\x61\x6C\x6C","\x54\x45\x58\x54\x41\x52\x45\x41","\x24\x62\x6F\x78","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x62\x6F\x78\x22\x20\x72\x6F\x6C\x65\x3D\x22\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x22\x20\x2F\x3E","\x67\x65\x74\x54\x65\x78\x74\x61\x72\x65\x61\x4E\x61\x6D\x65","\x3C\x74\x65\x78\x74\x61\x72\x65\x61\x20\x2F\x3E","\x63\x6F\x6E\x74\x65\x6E\x74\x2D","\x69\x64","\x69\x73\x54\x65\x78\x74\x61\x72\x65\x61","\x63\x6F\x6E\x74\x65\x6E\x74","\x64\x69\x72\x65\x63\x74\x69\x6F\x6E","\x66\x72\x6F\x6D\x54\x65\x78\x74\x61\x72\x65\x61","\x66\x72\x6F\x6D\x45\x6C\x65\x6D\x65\x6E\x74","\x3C\x64\x69\x76\x20\x2F\x3E","\x69\x6E\x73\x65\x72\x74\x41\x66\x74\x65\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x65\x64\x69\x74\x6F\x72","\x68\x69\x64\x65","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x61\x72\x65\x61","\x73\x65\x74\x4F\x70\x74\x69\x6F\x6E\x73","\x63\x61\x6C\x6C\x45\x64\x69\x74\x6F\x72","\x76\x69\x73\x75\x61\x6C","\x73\x68\x6F\x77\x43\x6F\x64\x65","\x64\x69\x73\x61\x62\x6C\x65\x4D\x6F\x7A\x69\x6C\x6C\x61\x45\x64\x69\x74\x69\x6E\x67","\x64\x69\x73\x61\x62\x6C\x65\x49\x65\x4C\x69\x6E\x6B\x73","\x73\x65\x74\x45\x76\x65\x6E\x74\x73","\x73\x65\x74\x48\x65\x6C\x70\x65\x72\x73","\x6C\x6F\x61\x64\x54\x65\x6D\x70\x6C\x61\x74\x65\x73","\x70\x6C\x75\x67\x69\x6E\x73","\x64\x69\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x65\x62\x72\x65\x61\x6B\x73","\x74\x61\x62\x69\x6E\x64\x65\x78","\x6D\x69\x6E\x48\x65\x69\x67\x68\x74","\x6D\x61\x78\x48\x65\x69\x67\x68\x74","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x64\x72\x61\x67\x49\x6D\x61\x67\x65\x55\x70\x6C\x6F\x61\x64","\x64\x72\x61\x67\x46\x69\x6C\x65\x55\x70\x6C\x6F\x61\x64","\x66\x69\x6C\x65\x73","\x64\x61\x74\x61\x54\x72\x61\x6E\x73\x66\x65\x72","\x64\x69\x72\x65\x63\x74\x55\x70\x6C\x6F\x61\x64","\x64\x72\x6F\x70","\x64\x72\x6F\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x6F\x72\x69\x67\x69\x6E\x61\x6C\x45\x76\x65\x6E\x74","\x46\x6F\x72\x6D\x44\x61\x74\x61","\x73\x65\x74\x45\x76\x65\x6E\x74\x44\x72\x6F\x70","\x73\x65\x74\x45\x76\x65\x6E\x74\x44\x72\x6F\x70\x55\x70\x6C\x6F\x61\x64","\x6F\x6E","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x67\x65\x74\x45\x76\x65\x6E\x74","\x63\x6C\x69\x63\x6B","\x61\x72\x72\x6F\x77","\x61\x64\x64\x45\x76\x65\x6E\x74","\x64\x69\x73\x61\x62\x6C\x65\x53\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x70\x61\x73\x74\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x63\x75\x74\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x6B\x65\x79\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x63\x6F\x64\x65\x4B\x65\x79\x64\x6F\x77\x6E\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x6B\x65\x79\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x65\x78\x74\x61\x72\x65\x61","\x63\x6F\x64\x65\x4B\x65\x79\x75\x70\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x65\x78\x74\x61\x72\x65\x61","\x66\x6F\x63\x75\x73\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x66\x6F\x63\x75\x73\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E","\x62\x6C\x75\x72\x43\x6C\x69\x63\x6B\x65\x64\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x61\x72\x67\x65\x74","\x62\x6C\x75\x72\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x69\x73\x42\x6C\x75\x72\x65\x64","\x62\x6C\x75\x72\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x62\x6C\x75\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2C\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x68\x61\x73\x43\x6C\x61\x73\x73","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x69\x73","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2C\x20\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2C\x20\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x70\x61\x72\x65\x6E\x74\x73","\x69\x73\x45\x6E\x61\x62\x6C\x65\x64","\x65\x6E\x61\x62\x6C\x65","\x73\x65\x74\x53\x74\x61\x72\x74","\x66\x6F\x63\x75\x73\x45\x6E\x64","\x65\x6E\x61\x62\x6C\x65\x4F\x62\x6A\x65\x63\x74\x52\x65\x73\x69\x7A\x69\x6E\x67","\x65\x6E\x61\x62\x6C\x65\x49\x6E\x6C\x69\x6E\x65\x54\x61\x62\x6C\x65\x45\x64\x69\x74\x69\x6E\x67","\x41\x75\x74\x6F\x55\x72\x6C\x44\x65\x74\x65\x63\x74","\x74\x69\x74\x6C\x65","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x2D\x69\x63\x6F\x6E\x20\x72\x65\x2D","\x22\x20\x72\x65\x6C\x3D\x22","\x22\x20\x2F\x3E","\x66\x75\x6E\x63","\x63\x6F\x6D\x6D\x61\x6E\x64","\x73\x65\x74\x45\x76\x65\x6E\x74","\x61\x72\x69\x61\x2D\x68\x61\x73\x70\x6F\x70\x75\x70","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x6C\x69\x6E\x6B\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D","\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x62\x6F\x78\x2D","\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x22\x3E","\x69\x73\x44\x65\x73\x6B\x74\x6F\x70","\x63\x72\x65\x61\x74\x65\x54\x6F\x6F\x6C\x74\x69\x70","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x20\x63\x6C\x69\x63\x6B","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x64\x69\x73\x61\x62\x6C\x65\x64","\x6F\x6E\x43\x6C\x69\x63\x6B","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x2D","\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x2D","\x3C\x73\x70\x61\x6E\x3E","\x61\x70\x70\x65\x6E\x64\x54\x6F","\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72","\x6F\x66\x66\x73\x65\x74","\x73\x68\x6F\x77","\x74\x6F\x70","\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74","\x70\x78","\x6C\x65\x66\x74","\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68","\x6D\x6F\x75\x73\x65\x6F\x75\x74","\x63\x61\x72\x65\x74\x4F\x66\x66\x73\x65\x74","\x67\x65\x74\x4F\x66\x66\x73\x65\x74","\x72\x65\x74\x75\x72\x6E\x56\x61\x6C\x75\x65","\x6F\x6E\x43\x6C\x69\x63\x6B\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x62\x75\x74\x74\x6F\x6E\x73","\x61\x2E\x72\x65\x2D","\x24\x74\x6F\x6F\x6C\x62\x61\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x61\x63\x74","\x61\x2E\x72\x65\x2D\x69\x63\x6F\x6E","\x2E\x72\x65\x2D","\x6E\x6F\x74","\x61\x2E\x72\x65\x2D\x68\x74\x6D\x6C\x2C\x20\x61\x2E\x72\x65\x2D\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E","\x72\x65\x2D","\x66\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x62\x74\x6E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x62\x74\x6E\x2D\x69\x6D\x61\x67\x65","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20","\x22\x3E\x3C\x2F\x69\x3E","\x72\x65\x6C","\x61\x64\x64\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x69\x73\x4D\x6F\x62\x69\x6C\x65\x55\x6E\x64\x6F\x52\x65\x64\x6F","\x3C\x6C\x69\x3E","\x61\x66\x74\x65\x72","\x70\x61\x72\x65\x6E\x74","\x62\x65\x66\x6F\x72\x65","\x69\x73\x42\x6C\x6F\x63\x6B","\x63\x72\x65\x61\x74\x65\x53\x70\x61\x63\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x6E\x6F\x64\x65\x54\x79\x70\x65","\x6C\x61\x73\x74\x43\x68\x69\x6C\x64","\x73\x65\x74\x41\x66\x74\x65\x72","\x69\x73\x42\x6C\x6F\x63\x6B\x54\x61\x67","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x69\x6E\x76\x69\x73\x69\x62\x6C\x65\x53\x70\x61\x63\x65","\x65\x6D\x70\x74\x79\x48\x74\x6D\x6C","\x61\x64\x64\x52\x61\x6E\x67\x65","\x73\x65\x74\x41\x66\x74\x65\x72\x4F\x72\x42\x65\x66\x6F\x72\x65","\x70\x72\x65\x76","\x73\x65\x74\x53\x74\x61\x72\x74\x41\x66\x74\x65\x72","\x73\x65\x74\x45\x6E\x64\x41\x66\x74\x65\x72","\x73\x65\x74\x53\x74\x61\x72\x74\x42\x65\x66\x6F\x72\x65","\x73\x65\x74\x45\x6E\x64\x42\x65\x66\x6F\x72\x65","\x63\x6F\x6C\x6C\x61\x70\x73\x65","\x63\x6C\x6F\x6E\x65\x52\x61\x6E\x67\x65","\x73\x65\x6C\x65\x63\x74\x4E\x6F\x64\x65\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x65\x6E\x64\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x65\x6E\x64\x4F\x66\x66\x73\x65\x74","\x67\x65\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x72\x61\x6E\x67\x65\x43\x6F\x75\x6E\x74","\x67\x65\x74\x52\x61\x6E\x67\x65\x41\x74","\x63\x72\x65\x61\x74\x65\x54\x72\x65\x65\x57\x61\x6C\x6B\x65\x72","\x6E\x6F\x64\x65\x56\x61\x6C\x75\x65","\x6E\x65\x78\x74\x4E\x6F\x64\x65","\x73\x65\x74\x4F\x66\x66\x73\x65\x74","\x3C\x70\x72\x65\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x63\x72\x69\x70\x74\x2D\x74\x61\x67\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x20\x6E\x6F\x6E\x65\x3B\x22\x20\x24\x31\x3E\x24\x32\x3C\x2F\x70\x72\x65\x3E","\x72\x65\x70\x6C\x61\x63\x65","\x26\x23\x33\x36\x3B","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x24\x31\x26\x72\x65\x67\x24\x32\x22\x3E","\x72\x65\x70\x6C\x61\x63\x65\x44\x69\x76\x73","\x72\x65\x70\x6C\x61\x63\x65\x50\x61\x72\x61\x67\x72\x61\x70\x68\x73\x54\x6F\x42\x72","\x73\x61\x76\x65\x46\x6F\x72\x6D\x54\x61\x67\x73","\x3C\x64\x69\x76\x3E","\x66\x6F\x6E\x74\x5B\x73\x74\x79\x6C\x65\x5D","\x73\x65\x74\x56\x65\x72\x69\x66\x69\x65\x64","\x63\x6F\x6E\x76\x65\x72\x74\x49\x6E\x6C\x69\x6E\x65","\x26","\x63\x6C\x65\x61\x6E\x53\x70\x61\x63\x65\x73","\x20","\x3C\x73\x63\x72\x69\x70\x74\x24\x31\x3E\x24\x32\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E","\x72\x65\x73\x74\x6F\x72\x65\x46\x6F\x72\x6D\x54\x61\x67\x73","\x26\x74\x72\x61\x64\x65\x3B","\x26\x63\x6F\x70\x79\x3B","\x26\x68\x65\x6C\x6C\x69\x70\x3B","\x26\x6D\x64\x61\x73\x68\x3B","\x26\x64\x61\x73\x68\x3B","\x67","\x3C\x62\x72\x5C\x73\x3F\x2F\x3F\x3E\x3C\x2F\x6C\x69\x3E","\x67\x69","\x3C\x2F\x6C\x69\x3E","\x3C\x2F\x6C\x69\x3E\x3C\x62\x72\x5C\x73\x3F\x2F\x3F\x3E","\x3C\x24\x31\x24\x32\x22\x3E","\x22\x3E","\x3C\x64\x69\x76\x24\x31\x24\x32\x3E","\x3C\x24\x31\x24\x32\x3E","\x70\x61\x72\x73\x65\x48\x54\x4D\x4C","\x3C\x64\x69\x76\x2F\x3E","\x70\x72\x65\x20\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x76\x69\x73\x69\x62\x6C\x65\x2D\x73\x70\x61\x63\x65","\x3C\x69\x6D\x67\x24\x31\x24\x33\x3E","\x24\x31","\x24\x33\x3C\x69\x6D\x67\x24\x34\x3E","\x6C\x69\x6E\x6B\x4E\x6F\x66\x6F\x6C\x6C\x6F\x77","\x3C\x61\x24\x31\x24\x32\x3E","\x3C\x61\x24\x31\x20\x72\x65\x6C\x3D\x22\x6E\x6F\x66\x6F\x6C\x6C\x6F\x77\x22\x3E","\x3C\x28\x2E\x2A\x3F\x29\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x28\x2E\x2A\x3F\x29\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x3C\x24\x31\x3E","\x09","\x70\x61\x73\x74\x65\x50\x6C\x61\x69\x6E\x54\x65\x78\x74","\x67\x65\x74\x50\x6C\x61\x69\x6E\x54\x65\x78\x74","\x69\x73\x53\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x41","\x69\x73\x43\x75\x72\x72\x65\x6E\x74\x4F\x72\x50\x61\x72\x65\x6E\x74","\x22","\x27","\x67\x65\x74\x50\x72\x65\x43\x6F\x64\x65","\x67\x65\x74\x4F\x6E\x6C\x79\x49\x6D\x61\x67\x65\x73","\x3C\x70\x3E\x3C\x69\x6D\x67\x24\x31\x3E\x3C\x2F\x70\x3E","\x6F\x6E\x50\x61\x73\x74\x65\x54\x69\x64\x79","\x72\x65\x70\x6C\x61\x63\x65\x44\x69\x76\x73\x54\x6F\x42\x72","\x69\x73\x53\x69\x6E\x67\x6C\x65\x4C\x69\x6E\x65","\x73\x69\x6E\x67\x6C\x65\x4C\x69\x6E\x65","\x6F\x6E\x50\x61\x73\x74\x65\x57\x6F\x72\x64","\x6F\x6E\x50\x61\x73\x74\x65\x45\x78\x74\x72\x61","\x61\x6C\x6C","\x72\x65\x6D\x6F\x76\x65\x44\x69\x72\x74\x79\x53\x74\x79\x6C\x65\x73","\x6F\x6E\x50\x61\x73\x74\x65\x52\x65\x6D\x6F\x76\x65\x53\x70\x61\x6E\x73","\x6F\x6E\x50\x61\x73\x74\x65\x52\x65\x6D\x6F\x76\x65\x45\x6D\x70\x74\x79","\x6D\x61\x74\x63\x68","\x3C\x24\x31\x73\x74\x72\x69\x6B\x65\x3E","\xA0","\x66\x6C\x6F\x6F\x72","\x6F\x6E\x50\x61\x73\x74\x65\x49\x65\x46\x69\x78\x4C\x69\x6E\x6B\x73","\x73\x72\x63\x3D\x22\x22","\x3C\x6C\x69\x2F\x3E","\x73\x70\x61\x6E\x3A\x66\x69\x72\x73\x74","\x2F\x3E","\x5B\x64\x61\x74\x61\x2D\x6C\x65\x76\x65\x6C\x3D\x22","\x22\x5D\x5B\x64\x61\x74\x61\x2D\x6C\x69\x73\x74\x3D\x22","\x22\x5D","\x6C\x61\x73\x74","\x70\x5B\x73\x74\x79\x6C\x65\x5D","\x64\x61\x74\x61\x2D\x6C\x65\x76\x65\x6C\x20\x64\x61\x74\x61\x2D\x6C\x69\x73\x74","\x5B\x64\x61\x74\x61\x2D\x6C\x65\x76\x65\x6C\x5D\x5B\x64\x61\x74\x61\x2D\x6C\x69\x73\x74\x5D","\x3C\x70","\x24\x32","\x24\x33","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x22\x3E\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x73\x74\x79\x6C\x65\x3A\x20\x69\x74\x61\x6C\x69\x63\x3B\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x73\x74\x79\x6C\x65\x3A\x20\x69\x74\x61\x6C\x69\x63\x3B\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x20\x62\x6F\x6C\x64\x3B\x22\x3E","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E\x3A\x20\x75\x6E\x64\x65\x72\x6C\x69\x6E\x65\x3B\x22\x3E","\x0A","\x3C\x70\x3E","\x3C\x2F\x70\x3E","\x3C\x2F\x70\x3E\x3C\x70","\x3C\x6C\x69\x3E\x24\x31\x3C\x2F\x6C\x69\x3E","\x64\x66\x6E","\x62\x72","\x76\x69\x64\x65\x6F","\x61\x75\x64\x69\x6F","\x65\x6D\x62\x65\x64","\x70\x61\x72\x61\x6D","\x74\x62\x6F\x64\x79","\x74\x66\x6F\x6F\x74","\x74\x68\x65\x61\x64","\x2A","\x73\x72\x63","\x61\x6C\x74","\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64","\x63\x6F\x6C\x73\x70\x61\x6E","\x72\x6F\x77\x73\x70\x61\x6E","\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x65\x64\x2D\x69\x6D\x61\x67\x65","\x61\x6C\x6C\x6F\x77\x65\x64\x54\x61\x67\x73","\x61\x6C\x6C\x6F\x77\x65\x64\x41\x74\x74\x72","\x44\x49\x56\x7C","\x50\x7C","\x3C\x2F\x28","\x29\x3E","\x73\x61\x76\x65\x50\x72\x65\x46\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x73\x61\x76\x65\x43\x6F\x64\x65\x46\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x72\x65\x73\x74\x6F\x72\x65\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E\x4D\x61\x72\x6B\x65\x72","\x70\x72\x65\x53\x70\x61\x63\x65\x73","\x65\x6E\x63\x6F\x64\x65\x45\x6E\x74\x69\x74\x69\x65\x73","\x3C\x70\x72\x65","\x3C\x2F\x70\x72\x65\x3E","\x3C\x63\x6F\x64\x65","\x3C\x2F\x63\x6F\x64\x65\x3E","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x24\x31\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x22\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E\u200B\x3C\x2F\x73\x70\x61\x6E\x3E","\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x69\x6E\x6E\x65\x72\x54\x65\x78\x74","\x67\x65\x74\x54\x65\x78\x74\x46\x72\x6F\x6D\x48\x74\x6D\x6C","\x3C\x62\x72\x20\x2F\x3E","\x26\x6C\x74\x3B\x69\x6D\x67\x24\x31\x26\x67\x74\x3B","\x5B\x69\x6D\x67\x24\x31\x5D","\x3C\x69\x6D\x67\x24\x31\x3E","\x5B\x61\x20\x68\x72\x65\x66\x3D\x22\x24\x32\x22\x5D\x24\x34\x5B\x2F\x61\x5D","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x24\x31\x22\x3E\x24\x32\x3C\x2F\x61\x3E","\x26\x71\x75\x6F\x74\x3B","\x26\x67\x74\x3B","\x26\x6C\x74\x3B","\x26\x61\x6D\x70\x3B","\x63\x6C\x65\x61\x72\x55\x6E\x76\x65\x72\x69\x66\x69\x65\x64\x52\x65\x6D\x6F\x76\x65","\x68\x31\x2C\x20\x68\x32\x2C\x20\x68\x33\x2C\x20\x68\x34\x2C\x20\x68\x35\x2C\x20\x68\x36","\x2C\x20","\x76\x65\x72\x69\x66\x69\x65\x64\x54\x61\x67\x73","\x5B\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x5D","\x73\x70\x61\x6E\x5B\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x5D\x2C\x20\x69\x6D\x67\x5B\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x5D","\x3C\x69\x6D\x67\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x69\x6D\x67\x24\x31\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x3C\x73\x70\x61\x6E\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x73\x70\x61\x6E\x24\x31\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x3C\x28\x73\x70\x61\x6E\x7C\x69\x6D\x67\x29\x28\x2E\x2A\x3F\x29\x73\x74\x79\x6C\x65\x3D\x22\x28\x2E\x2A\x3F\x29\x22\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x73\x74\x79\x6C\x65\x3D\x22\x24\x31\x22\x20\x72\x65\x6C\x3D\x22\x24\x31\x22","\x69\x6E\x6C\x69\x6E\x65\x54\x61\x67\x73","\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x61\x67","\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x74\x79\x6C\x65","\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x63\x6C\x61\x73\x73","\x3E\x20\x3C","\x24\x32\x3C\x62\x72\x20\x2F\x3E","\x3C\x70\x24\x31\x3E\x24\x32\x3C\x2F\x70\x3E","\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E","\x24\x31\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E","\x3C\x2F\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x24\x31\x20\x72\x65\x6C\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x6F\x72\x6D\x2D\x74\x61\x67\x22\x3E\x24\x32\x3C\x2F\x73\x65\x63\x74\x69\x6F\x6E\x3E","\x3C\x66\x6F\x72\x6D\x24\x31\x24\x32\x3E\x24\x33\x3C\x2F\x66\x6F\x72\x6D\x3E","\x6F\x6E\x53\x65\x74","\x61\x64\x64","\x73\x74\x61\x72\x74\x53\x79\x6E\x63","\x73\x79\x6E\x63\x43\x6F\x64\x65","\x73\x79\x6E\x63\x42\x65\x66\x6F\x72\x65","\x6F\x6E\x53\x79\x6E\x63","\x63\x68\x61\x6E\x67\x65","\x63\x6F\x64\x65\x6D\x69\x72\x72\x6F\x72","\x73\x65\x74\x56\x61\x6C\x75\x65","\x43\x6F\x64\x65\x4D\x69\x72\x72\x6F\x72","\x2E\x43\x6F\x64\x65\x4D\x69\x72\x72\x6F\x72","\x6F\x6E\x43\x68\x61\x6E\x67\x65","\x73\x68\x6F\x77\x56\x69\x73\x75\x61\x6C","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x6D\x6F\x64\x69\x66\x69\x65\x64","\x72\x65\x6D\x6F\x76\x65\x53\x70\x61\x63\x65\x73","\x73\x70\x61\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72","\x6F\x75\x74\x65\x72\x48\x54\x4D\x4C","\x70\x72\x6F\x70","\x23\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x31","\x73\x74\x72\x70\x6F\x73","\x23\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x32","\x72\x65\x6D\x6F\x76\x65\x4D\x61\x72\x6B\x65\x72\x73","\x31\x30\x30\x25","\x73\x65\x74\x53\x69\x7A\x65","\x72\x65\x66\x72\x65\x73\x68","\x70\x6F\x73\x46\x72\x6F\x6D\x49\x6E\x64\x65\x78","\x63\x68","\x73\x65\x74\x43\x75\x72\x73\x6F\x72","\x73\x65\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x68\x65\x69\x67\x68\x74","\x6B\x65\x79\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x65\x78\x74\x61\x72\x65\x61\x2D\x69\x6E\x64\x65\x6E\x74\x69\x6E\x67","\x74\x65\x78\x74\x61\x72\x65\x61\x49\x6E\x64\x65\x6E\x74\x69\x6E\x67","\x73\x65\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E\x52\x61\x6E\x67\x65","\x73\x65\x74\x49\x6E\x61\x63\x74\x69\x76\x65\x49\x6E\x43\x6F\x64\x65","\x73\x65\x74\x41\x63\x74\x69\x76\x65","\x6C\x69\x73\x74\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E\x73","\x61\x6E\x63\x68\x6F\x72","\x69\x6E\x64\x65\x78\x46\x72\x6F\x6D\x50\x6F\x73","\x67\x65\x74\x56\x61\x6C\x75\x65","\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x53\x74\x61\x72\x74","\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x45\x6E\x64","\x65\x6E\x6C\x61\x72\x67\x65\x4F\x66\x66\x73\x65\x74","\x73\x75\x62\x73\x74\x72","\x67\x65\x74\x4D\x61\x72\x6B\x65\x72\x41\x73\x48\x74\x6D\x6C","\x6F\x66\x66","\x73\x65\x74\x41\x63\x74\x69\x76\x65\x49\x6E\x56\x69\x73\x75\x61\x6C","\x73\x65\x74\x49\x6E\x61\x63\x74\x69\x76\x65","\x6B\x65\x79\x43\x6F\x64\x65","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x65\x76\x65\x6E\x74","\x43\x61\x6C\x6C\x62\x61\x63\x6B","\x65\x76\x65\x6E\x74\x73","\x6E\x61\x6D\x65\x73\x70\x61\x63\x65","\x68\x61\x6E\x64\x6C\x65\x72","\x64\x65\x73\x74\x72\x6F\x79\x65\x64","\x64\x65\x73\x74\x72\x6F\x79","\x72\x65\x6D\x6F\x76\x65\x44\x61\x74\x61","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x64\x65\x6C\x65\x74\x65\x2E","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x2D\x68\x69\x64\x65\x2E","\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E","\x20\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E","\x73\x63\x72\x6F\x6C\x6C\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E","\x74\x6F\x6F\x6C\x62\x61\x72\x46\x69\x78\x65\x64\x54\x61\x72\x67\x65\x74","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x65\x64\x69\x74\x6F\x72\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x65\x62\x72\x65\x61\x6B\x73\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65","\x24\x6D\x6F\x64\x61\x6C\x42\x6F\x78","\x24\x6D\x6F\x64\x61\x6C\x4F\x76\x65\x72\x6C\x61\x79","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x2D","\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67\x41\x64\x64","\x2D","\x69\x6E\x6C\x69\x6E\x65\x2E\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x62\x6C\x6F\x63\x6B\x2E\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D","\x22\x20\x72\x6F\x6C\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x3E","\x3C\x2F\x61\x3E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67\x2D","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x6C\x69\x6E\x6B\x2D\x69\x6E\x61\x63\x74\x69\x76\x65","\x68\x69\x64\x65\x41\x6C\x6C","\x61\x64\x64\x44\x72\x6F\x70\x64\x6F\x77\x6E","\x68\x69\x67\x68\x43\x6F\x6E\x74\x72\x61\x73\x74","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x63\x6F\x6E\x74\x72\x61\x73\x74","\x64\x72\x6F\x70\x61\x63\x74","\x64\x72\x6F\x70\x64\x6F\x77\x6E\x73","\x64\x72\x6F\x70\x64\x6F\x77\x6E\x53\x68\x6F\x77","\x77\x69\x64\x74\x68","\x6D\x61\x78","\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x66\x69\x78\x65\x64\x2D\x62\x6F\x78","\x74\x6F\x6F\x6C\x62\x61\x72\x46\x69\x78\x65\x64\x54\x6F\x70\x4F\x66\x66\x73\x65\x74","\x66\x69\x78\x65\x64","\x61\x62\x73\x6F\x6C\x75\x74\x65","\x64\x72\x6F\x70\x64\x6F\x77\x6E\x53\x68\x6F\x77\x6E","\x24\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x6F\x6E\x65","\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x63\x6C\x6F\x73\x65\x48\x61\x6E\x64\x6C\x65\x72","\x6D\x6F\x75\x73\x65\x6F\x75\x74\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x65\x6E\x61\x62\x6C\x65\x42\x6F\x64\x79\x53\x63\x72\x6F\x6C\x6C","\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x64\x69\x73\x61\x62\x6C\x65\x42\x6F\x64\x79\x53\x63\x72\x6F\x6C\x6C","\x73\x74\x6F\x70\x50\x72\x6F\x70\x61\x67\x61\x74\x69\x6F\x6E","\x77\x68\x69\x63\x68","\x45\x53\x43","\x61\x2E\x64\x72\x6F\x70\x61\x63\x74","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x6C\x69\x6E\x6B\x2D\x73\x65\x6C\x65\x63\x74\x65\x64","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x6C\x69\x6E\x6B\x2D\x73\x65\x6C\x65\x63\x74\x65\x64","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x64\x6F\x77\x6E","\x64\x72\x6F\x70\x64\x6F\x77\x6E\x48\x69\x64\x65","\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72\x20\x6D\x6F\x75\x73\x65\x6F\x75\x74","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x66\x69\x6C\x65\x2D\x75\x70\x6C\x6F\x61\x64","\x66\x69\x6C\x65\x55\x70\x6C\x6F\x61\x64","\x73\x65\x6C","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x69\x6C\x65\x6E\x61\x6D\x65","\x63\x6C\x6F\x73\x65","\x66\x69\x6C\x65\x55\x70\x6C\x6F\x61\x64\x45\x72\x72\x6F\x72","\x66\x69\x6C\x65\x6E\x61\x6D\x65","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x66\x69\x6C\x65\x6C\x69\x6E\x6B","\x22\x20\x69\x64\x3D\x22\x66\x69\x6C\x65\x6C\x69\x6E\x6B\x2D\x6D\x61\x72\x6B\x65\x72\x22\x3E","\x6E\x6F\x64\x65\x54\x6F\x43\x61\x72\x65\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E\x46\x72\x6F\x6D\x50\x6F\x69\x6E\x74","\x68\x74\x6D\x6C\x57\x69\x74\x68\x6F\x75\x74\x43\x6C\x65\x61\x6E","\x61\x23\x66\x69\x6C\x65\x6C\x69\x6E\x6B\x2D\x6D\x61\x72\x6B\x65\x72","\x74\x65\x78\x74","\x66\x6F\x63\x75\x73\x4E\x6F\x64\x65","\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65","\x69\x73\x52\x65\x64\x61\x63\x74\x6F\x72\x50\x61\x72\x65\x6E\x74","\x3A\x66\x6F\x63\x75\x73","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x69\x6D\x61\x67\x65\x2D\x64\x72\x6F\x70\x61\x72\x65\x61","\x69\x6D\x61\x67\x65\x55\x70\x6C\x6F\x61\x64","\x69\x6D\x61\x67\x65\x45\x64\x69\x74","\x65\x64\x69\x74","\x63\x72\x65\x61\x74\x65\x43\x61\x6E\x63\x65\x6C\x42\x75\x74\x74\x6F\x6E","\x62\x75\x74\x74\x6F\x6E\x44\x65\x6C\x65\x74\x65","\x5F\x64\x65\x6C\x65\x74\x65","\x63\x72\x65\x61\x74\x65\x44\x65\x6C\x65\x74\x65\x42\x75\x74\x74\x6F\x6E","\x62\x75\x74\x74\x6F\x6E\x53\x61\x76\x65","\x63\x72\x65\x61\x74\x65\x41\x63\x74\x69\x6F\x6E\x42\x75\x74\x74\x6F\x6E","\x75\x70\x64\x61\x74\x65","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x74\x6F\x6F\x6C\x74\x69\x70","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x74\x69\x74\x6C\x65","\x69\x6D\x61\x67\x65\x4C\x69\x6E\x6B","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x6F\x70\x74\x69\x6F\x6E","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B","\x68\x72\x65\x66","\x5F\x62\x6C\x61\x6E\x6B","\x63\x68\x65\x63\x6B\x65\x64","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x62\x6C\x61\x6E\x6B","\x69\x6D\x61\x67\x65\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x70\x6F\x73\x69\x74\x69\x6F\x6E\x2D\x6F\x70\x74\x69\x6F\x6E","\x64\x69\x73\x70\x6C\x61\x79","\x66\x6C\x6F\x61\x74","\x6E\x6F\x6E\x65","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x61\x6C\x69\x67\x6E","\x30\x20","\x69\x6D\x61\x67\x65\x46\x6C\x6F\x61\x74\x4D\x61\x72\x67\x69\x6E","\x20\x30","\x30\x20\x30\x20","\x61\x75\x74\x6F","\x68\x69\x64\x65\x52\x65\x73\x69\x7A\x65","\x73\x65\x74\x46\x6C\x6F\x61\x74\x69\x6E\x67","\x28\x28\x78\x6E\x2D\x2D\x29\x3F\x5B\x61\x2D\x7A\x30\x2D\x39\x5D\x2B\x28\x2D\x5B\x61\x2D\x7A\x30\x2D\x39\x5D\x2B\x29\x2A\x5C\x2E\x29\x2B\x5B\x61\x2D\x7A\x5D\x7B\x32\x2C\x7D","\x5E\x28\x68\x74\x74\x70\x7C\x66\x74\x70\x7C\x68\x74\x74\x70\x73\x29\x3A\x2F\x2F","\x5E","\x6C\x69\x6E\x6B\x50\x72\x6F\x74\x6F\x63\x6F\x6C","\x3A\x2F\x2F","\x67\x65\x74\x4F\x75\x74\x65\x72\x48\x74\x6D\x6C","\x69\x6D\x61\x67\x65\x73","\x69\x6D\x61\x67\x65\x45\x64\x69\x74\x61\x62\x6C\x65","\x64\x72\x61\x67\x73\x74\x61\x72\x74","\x6F\x6E\x44\x72\x61\x67","\x72\x65\x73\x69\x7A\x65\x72","\x6C\x6F\x61\x64\x45\x64\x69\x74\x61\x62\x6C\x65\x43\x6F\x6E\x74\x72\x6F\x6C\x73","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x2D\x68\x69\x64\x65\x2E","\x69\x6D\x61\x67\x65\x52\x65\x73\x69\x7A\x61\x62\x6C\x65","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x20\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x73\x65\x74\x52\x65\x73\x69\x7A\x61\x62\x6C\x65","\x6D\x6F\x75\x73\x65\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x20\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x72\x65\x73\x69\x7A\x65\x48\x61\x6E\x64\x6C\x65","\x70\x61\x67\x65\x58","\x70\x61\x67\x65\x59","\x74\x61\x72\x67\x65\x74\x54\x6F\x75\x63\x68\x65\x73","\x78","\x79","\x73\x74\x61\x72\x74\x52\x65\x73\x69\x7A\x65","\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x20\x74\x6F\x75\x63\x68\x6D\x6F\x76\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65","\x6D\x6F\x76\x65\x52\x65\x73\x69\x7A\x65","\x6D\x6F\x75\x73\x65\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x20\x74\x6F\x75\x63\x68\x65\x6E\x64\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65","\x73\x74\x6F\x70\x52\x65\x73\x69\x7A\x65","\x68","\x72\x61\x74\x69\x6F","\x72\x6F\x75\x6E\x64","\x65\x6C","\x68\x61\x6E\x64\x6C\x65","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x62\x6F\x78","\x64\x72\x6F\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x69\x6E\x73\x69\x64\x65\x2D\x64\x72\x6F\x70","\x6F\x6E\x44\x72\x6F\x70","\x66\x69\x78\x49\x6D\x61\x67\x65\x53\x6F\x75\x72\x63\x65\x41\x66\x74\x65\x72\x44\x72\x6F\x70","\x64\x61\x74\x61\x2D\x73\x61\x76\x65\x2D\x75\x72\x6C","\x69\x6D\x67\x5B\x64\x61\x74\x61\x2D\x73\x61\x76\x65\x2D\x75\x72\x6C\x5D","\x49\x4D\x47","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x65\x64\x69\x74\x74\x65\x72","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x72","\x6D\x61\x72\x67\x69\x6E\x54\x6F\x70","\x6D\x61\x72\x67\x69\x6E\x42\x6F\x74\x74\x6F\x6D","\x6D\x61\x72\x67\x69\x6E\x4C\x65\x66\x74","\x6D\x61\x72\x67\x69\x6E\x52\x69\x67\x68\x74","\x6D\x61\x72\x67\x69\x6E","\x6F\x70\x61\x63\x69\x74\x79","\x69\x73\x4D\x6F\x62\x69\x6C\x65","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x72\x65\x73\x69\x7A\x65\x72\x22\x20\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x3D\x22\x76\x65\x72\x69\x66\x69\x65\x64\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x31\x35\x70\x78","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x62\x6F\x78\x22\x20\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x3D\x22\x76\x65\x72\x69\x66\x69\x65\x64\x22\x3E","\x2E\x35","\x65\x64\x69\x74\x74\x65\x72","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x65\x64\x69\x74\x74\x65\x72\x22\x20\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x3D\x22\x76\x65\x72\x69\x66\x69\x65\x64\x22\x3E","\x3C\x2F\x73\x70\x61\x6E\x3E","\x73\x68\x6F\x77\x45\x64\x69\x74","\x6D\x61\x72\x67\x69\x6E\x2D\x6C\x65\x66\x74","\x6C\x6F\x61\x64\x52\x65\x73\x69\x7A\x61\x62\x6C\x65\x43\x6F\x6E\x74\x72\x6F\x6C\x73","\x69\x6D\x61\x67\x65\x44\x65\x6C\x65\x74\x65","\x69\x6D\x61\x67\x65\x55\x70\x6C\x6F\x61\x64\x45\x72\x72\x6F\x72","\x74\x72\x75\x65","\x3C\x69\x6D\x67\x3E","\x3C\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x20\x2F\x3E","\x69\x6D\x67\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x65\x64\x2D\x69\x6D\x61\x67\x65\x3D\x74\x72\x75\x65\x5D","\x3C\x70\x20\x2F\x3E","\x69\x6E\x63\x72\x65\x61\x73\x65\x4C\x69\x73\x74\x73","\x69\x6E\x63\x72\x65\x61\x73\x65\x54\x65\x78\x74","\x69\x6E\x63\x72\x65\x61\x73\x65\x42\x6C\x6F\x63\x6B\x73","\x66\x69\x78\x45\x6D\x70\x74\x79\x49\x6E\x64\x65\x6E\x74","\x6E\x6F\x72\x6D\x61\x6C\x69\x7A\x65\x4C\x69\x73\x74\x73","\x6E\x6F\x72\x6D\x61\x6C\x69\x7A\x65","\x69\x6E\x64\x65\x6E\x74\x56\x61\x6C\x75\x65","\x64\x65\x63\x72\x65\x61\x73\x65\x4C\x69\x73\x74\x73","\x64\x65\x63\x72\x65\x61\x73\x65\x42\x6C\x6F\x63\x6B\x73","\x67\x65\x74\x43\x75\x72\x72\x65\x6E\x74","\x75\x6C\x2C\x20\x6F\x6C\x2C\x20\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x2C\x20\x70","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72","\x54\x52","\x69\x73\x43\x75\x72\x72\x65\x6E\x74\x4F\x72\x50\x61\x72\x65\x6E\x74\x48\x65\x61\x64\x65\x72","\x73\x74\x72\x69\x6B\x65\x74\x68\x72\x6F\x75\x67\x68","\x66\x6F\x72\x6D\x61\x74\x43\x6F\x6C\x6C\x61\x70\x73\x65\x64","\x66\x6F\x72\x6D\x61\x74\x4D\x75\x6C\x74\x69\x70\x6C\x65","\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x61\x67\x3D","\x5D","\x53\x50\x41\x4E","\x69\x73\x45\x6E\x64\x4F\x66\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x65\x74\x46\x6F\x72\x6D\x61\x74","\x6E\x6F\x64\x65","\x66\x6F\x72\x6D\x61\x74\x43\x6F\x6E\x76\x65\x72\x74","\x66\x6F\x72\x6D\x61\x74\x52\x65\x6D\x6F\x76\x65\x53\x61\x6D\x65\x43\x68\x69\x6C\x64\x72\x65\x6E","\x55","\x3B","\x3A","\x61\x74\x74\x72\x69\x62\x75\x74\x65\x73","\x74\x65\x78\x74\x2D\x64\x65\x63\x6F\x72\x61\x74\x69\x6F\x6E","\x6C\x69\x6E\x65\x2D\x74\x68\x72\x6F\x75\x67\x68","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72","\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x63\x6C\x61\x73\x73\x3D","\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x74\x79\x6C\x65\x3D\x22","\x3C\x73\x74\x72\x69\x6B\x65\x20\x2F\x3E","\x5B\x64\x61\x74\x61\x2D\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x61\x67\x3D\x22","\x63\x73\x73\x54\x65\x78\x74","\x67\x65\x74\x49\x6E\x6C\x69\x6E\x65\x73","\x67\x65\x74\x50\x61\x72\x65\x6E\x74","\x72\x65\x6D\x6F\x76\x65\x46\x6F\x72\x6D\x61\x74","\x67\x65\x74\x4E\x6F\x64\x65\x73","\x6F\x6E\x50\x61\x73\x74\x65","\x68\x74\x6D\x6C\x49\x65","\x64\x65\x6C\x65\x74\x65\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x63\x72\x65\x61\x74\x65\x44\x6F\x63\x75\x6D\x65\x6E\x74\x46\x72\x61\x67\x6D\x65\x6E\x74","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x66\x69\x72\x73\x74\x43\x68\x69\x6C\x64","\x69\x6E\x73\x65\x72\x74\x4E\x6F\x64\x65","\x72\x65\x6D\x6F\x76\x65\x41\x6C\x6C\x52\x61\x6E\x67\x65\x73","\x65\x78\x65\x63\x48\x74\x6D\x6C","\x69\x6E\x73\x65\x72\x74\x48\x54\x4D\x4C","\x68\x74\x6D\x6C\x46\x69\x78\x4D\x6F\x7A\x69\x6C\x6C\x61","\x69\x73\x49\x65\x31\x31","\x70\x2C\x20\x3A\x68\x65\x61\x64\x65\x72\x2C\x20\x64\x6C\x2C\x20\x75\x6C\x2C\x20\x6F\x6C\x2C\x20\x64\x69\x76\x2C\x20\x74\x61\x62\x6C\x65\x2C\x20\x74\x64\x2C\x20\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x2C\x20\x70\x72\x65\x2C\x20\x61\x64\x64\x72\x65\x73\x73\x2C\x20\x73\x65\x63\x74\x69\x6F\x6E\x2C\x20\x68\x65\x61\x64\x65\x72\x2C\x20\x66\x6F\x6F\x74\x65\x72\x2C\x20\x61\x73\x69\x64\x65\x2C\x20\x61\x72\x74\x69\x63\x6C\x65","\x69\x65\x31\x31\x46\x69\x78\x49\x6E\x73\x65\x72\x74\x69\x6E\x67","\x69\x65\x31\x31\x50\x61\x73\x74\x65\x46\x72\x61\x67","\x70\x61\x73\x74\x65\x48\x54\x4D\x4C","\x63\x72\x65\x61\x74\x65\x52\x61\x6E\x67\x65","\x63\x61\x72\x65\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E\x46\x72\x6F\x6D\x50\x6F\x69\x6E\x74","\x6F\x66\x66\x73\x65\x74\x4E\x6F\x64\x65","\x63\x61\x72\x65\x74\x52\x61\x6E\x67\x65\x46\x72\x6F\x6D\x50\x6F\x69\x6E\x74","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x52\x61\x6E\x67\x65","\x6D\x6F\x76\x65\x54\x6F\x50\x6F\x69\x6E\x74","\x64\x75\x70\x6C\x69\x63\x61\x74\x65","\x45\x6E\x64\x54\x6F\x45\x6E\x64","\x73\x65\x74\x45\x6E\x64\x50\x6F\x69\x6E\x74","\x63\x6C\x69\x65\x6E\x74\x58","\x63\x6C\x69\x65\x6E\x74\x59","\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x65\x2D\x70\x61\x73\x74\x65","\x63\x74\x72\x6C","\x63\x74\x72\x6C\x4B\x65\x79","\x6D\x65\x74\x61\x4B\x65\x79","\x63\x75\x72\x72\x65\x6E\x74","\x69\x73\x54\x61\x67","\x63\x68\x65\x63\x6B\x45\x76\x65\x6E\x74\x73","\x73\x65\x74\x75\x70\x42\x75\x66\x66\x65\x72","\x61\x64\x64\x41\x72\x72\x6F\x77\x73\x45\x76\x65\x6E\x74","\x73\x65\x74\x75\x70\x53\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x65\x6E\x74\x65\x72\x4B\x65\x79","\x44\x4F\x57\x4E","\x52\x49\x47\x48\x54","\x6F\x6E\x41\x72\x72\x6F\x77\x44\x6F\x77\x6E","\x45\x4E\x54\x45\x52","\x73\x68\x69\x66\x74\x4B\x65\x79","\x65\x6E\x74\x65\x72","\x65\x78\x69\x74\x46\x72\x6F\x6D\x42\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x69\x6E\x73\x65\x72\x74\x4E\x65\x77\x4C\x69\x6E\x65","\x69\x6E\x73\x65\x72\x74\x42\x72\x65\x61\x6B\x4C\x69\x6E\x65","\x69\x6E\x73\x65\x72\x74\x44\x62\x6C\x42\x72\x65\x61\x6B\x4C\x69\x6E\x65","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x76\x69\x73\x69\x62\x6C\x65\x2D\x73\x70\x61\x63\x65","\x69\x73\x45\x6E\x64\x4F\x66\x45\x64\x69\x74\x6F\x72","\x63\x6F\x6E\x74\x65\x78\x74","\x72\x65\x70\x6C\x61\x63\x65\x44\x69\x76\x54\x6F\x42\x72\x65\x61\x6B\x4C\x69\x6E\x65","\x72\x65\x70\x6C\x61\x63\x65\x44\x69\x76\x54\x6F\x50\x61\x72\x61\x67\x72\x61\x70\x68","\x75\x6C\x2C\x6F\x6C","\x69\x6E\x73\x65\x72\x74\x50\x61\x72\x61\x67\x72\x61\x70\x68","\x6F\x6E\x53\x68\x69\x66\x74\x45\x6E\x74\x65\x72","\x54\x41\x42","\x6F\x6E\x54\x61\x62","\x42\x41\x43\x4B\x53\x50\x41\x43\x45","\x44\x45\x4C\x45\x54\x45","\x30\x70\x78","\x69\x73\x53\x74\x61\x72\x74\x4F\x66\x45\x6C\x65\x6D\x65\x6E\x74","\x64\x65\x63\x72\x65\x61\x73\x65","\x67\x65\x74\x50\x72\x65\x76","\x48\x52","\x72\x65\x6D\x6F\x76\x65\x49\x6E\x76\x69\x73\x69\x62\x6C\x65\x53\x70\x61\x63\x65","\x72\x65\x6D\x6F\x76\x65\x45\x6D\x70\x74\x79\x4C\x69\x73\x74\x49\x6E\x54\x61\x62\x6C\x65","\x63\x68\x65\x63\x6B\x4B\x65\x79\x45\x76\x65\x6E\x74\x73","\x53\x50\x41\x43\x45","\x43\x54\x52\x4C","\x4D\x45\x54\x41","\x41\x4C\x54","\x53\x48\x49\x46\x54","\x61\x6C\x74\x4B\x65\x79","\x65\x6E\x61\x62\x6C\x65\x53\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x4C\x45\x46\x54\x5F\x57\x49\x4E","\x69\x6E\x73\x65\x72\x74\x41\x66\x74\x65\x72\x4C\x61\x73\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x74\x61\x62\x4B\x65\x79","\x74\x61\x62\x41\x73\x53\x70\x61\x63\x65\x73","\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65","\x69\x6E\x63\x72\x65\x61\x73\x65","\x73\x65\x74\x42\x65\x66\x6F\x72\x65","\x63\x6C\x65\x61\x6E\x53\x74\x79\x6C\x65\x4F\x6E\x45\x6E\x74\x65\x72","\x69\x6E\x73\x65\x72\x74\x42\x72\x65\x61\x6B\x4C\x69\x6E\x65\x50\x72\x6F\x63\x65\x73\x73\x69\x6E\x67","\x42\x4F\x44\x59","\x72\x65\x70\x6C\x61\x63\x65\x54\x6F\x50\x61\x72\x61\x67\x72\x61\x70\x68","\x69\x73\x4B\x65\x79","\x66\x6F\x72\x6D\x61\x74\x45\x6D\x70\x74\x79","\x63\x6C\x6F\x6E\x65","\x63\x75\x72\x4C\x61\x6E\x67","\x6C\x61\x6E\x67\x73","\x69\x73\x45\x78\x63\x65\x70\x74\x4C\x61\x73\x74\x4F\x72\x46\x69\x72\x73\x74","\x69\x6E\x73\x65\x72\x74\x49\x6E\x49\x65","\x69\x6E\x73\x65\x72\x74\x49\x6E\x4F\x74\x68\x65\x72\x73\x42\x72\x6F\x77\x73\x65\x72\x73","\x67\x65\x74\x4C\x61\x73\x74\x42\x6C\x6F\x63\x6B","\x73\x61\x76\x65\x53\x63\x72\x6F\x6C\x6C","\x72\x65\x73\x74\x6F\x72\x65\x53\x63\x72\x6F\x6C\x6C","\x3C\x70\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x2D\x6C\x69\x6E\x65\x22\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x2F\x70\x3E","\x3C\x62\x72\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x2D\x6C\x69\x6E\x65\x22\x3E","\x69\x6E\x73\x65\x72\x74\x48\x74\x6D\x6C","\x3C\x68\x72\x3E","\x73\x65\x74\x46\x6F\x63\x75\x73","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x73\x65\x72\x74\x2D\x6C\x69\x6E\x65","\u200B","\x69\x73\x43\x75\x72\x72\x65\x6E\x74","\x6C\x69\x6E\x6B\x5F\x69\x6E\x73\x65\x72\x74","\x6C\x69\x6E\x6B\x5F\x65\x64\x69\x74","\x62\x75\x74\x74\x6F\x6E\x49\x6E\x73\x65\x72\x74","\x67\x65\x74\x44\x61\x74\x61","\x63\x6C\x65\x61\x6E\x55\x72\x6C","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x62\x6C\x61\x6E\x6B","\x24\x69\x6E\x70\x75\x74\x55\x72\x6C","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x75\x72\x6C","\x24\x69\x6E\x70\x75\x74\x54\x65\x78\x74","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x75\x72\x6C\x2D\x74\x65\x78\x74","\x75\x72\x6C","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x6D\x61\x69\x6C\x74\x6F\x3A","\x68\x6F\x73\x74","\x24\x6E\x6F\x64\x65","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x70\x75\x74\x2D\x65\x72\x72\x6F\x72","\x40","\x74\x65\x73\x74","\x2E\x28\x68\x74\x6D\x6C\x7C\x70\x68\x70\x29\x24","\x65\x6E\x64","\x73\x65\x6C\x65\x63\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x3C\x61\x20\x2F\x3E","\x67\x65\x74\x54\x65\x78\x74","\x63\x72\x65\x61\x74\x65\x4C\x69\x6E\x6B","\x61\x5B\x5F\x6D\x6F\x7A\x5F\x64\x69\x72\x74\x79\x3D\x22\x22\x5D","\x5F\x6D\x6F\x7A\x5F\x64\x69\x72\x74\x79","\x69\x6E\x73\x65\x72\x74\x65\x64\x4C\x69\x6E\x6B","\x6C\x69\x6E\x6B\x73","\x64\x65\x6C\x65\x74\x65\x64\x4C\x69\x6E\x6B","\x73\x65\x74\x43\x6C\x61\x73\x73","\x67\x65\x74\x49\x6E\x6C\x69\x6E\x65\x73\x54\x61\x67\x73","\x63\x6F\x6E\x76\x65\x72\x74\x4C\x69\x6E\x6B\x73","\x63\x6F\x6E\x76\x65\x72\x74\x55\x72\x6C\x4C\x69\x6E\x6B\x73","\x63\x6F\x6E\x76\x65\x72\x74\x49\x6D\x61\x67\x65\x4C\x69\x6E\x6B\x73","\x63\x6F\x6E\x76\x65\x72\x74\x56\x69\x64\x65\x6F\x4C\x69\x6E\x6B\x73","\x79\x6F\x75\x74\x75\x62\x65","\x72\x65\x67\x65\x78\x70\x73","\x76\x69\x6D\x65\x6F","\x63\x6F\x6E\x76\x65\x72\x74\x49\x6D\x61\x67\x65\x73","\x61\x64\x64\x42\x61\x63\x6B","\x3A\x6E\x6F\x74\x28\x69\x66\x72\x61\x6D\x65\x2C\x69\x6D\x67\x2C\x61\x2C\x70\x72\x65\x29","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x69\x66\x79\x2D\x6F\x62\x6A\x65\x63\x74","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x69\x66\x79\x2D\x6F\x62\x6A\x65\x63\x74","\x3C\x69\x66\x72\x61\x6D\x65\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x69\x66\x79\x2D\x6F\x62\x6A\x65\x63\x74\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x35\x30\x30\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x32\x38\x31\x22\x20\x73\x72\x63\x3D\x22","\x22\x20\x66\x72\x61\x6D\x65\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x2F\x2F\x77\x77\x77\x2E\x79\x6F\x75\x74\x75\x62\x65\x2E\x63\x6F\x6D\x2F\x65\x6D\x62\x65\x64\x2F\x24\x31","\x2F\x2F\x70\x6C\x61\x79\x65\x72\x2E\x76\x69\x6D\x65\x6F\x2E\x63\x6F\x6D\x2F\x76\x69\x64\x65\x6F\x2F\x24\x32","\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x69\x66\x79\x2D\x6F\x62\x6A\x65\x63\x74\x22\x20\x2F\x3E","\x67\x72\x65\x70","\x6C\x69\x6E\x6B\x53\x69\x7A\x65","\x2E\x2E\x2E","\x5C\x62","\x2F","\x3D","\x28","\x5C\x24\x26","\x29","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x69\x66\x79\x2D\x6F\x62\x6A\x65\x63\x74\x22\x3E","\x6F\x6C\x2C\x20\x75\x6C","\x74\x64\x2C\x20\x74\x68","\x65\x71","\x3C\x6F\x6C\x3E","\x3C\x75\x6C\x3E","\x6C\x69\x2C\x20\x74\x68\x2C\x20\x74\x64","\x75\x6C\x2C\x20\x6F\x6C\x2C\x20\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x69\x6D\x61\x67\x65\x2D\x65\x64\x69\x74\x22\x3E","\x3C\x6C\x61\x62\x65\x6C\x3E","\x3C\x2F\x6C\x61\x62\x65\x6C\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x74\x69\x74\x6C\x65\x22\x20\x2F\x3E","\x3C\x6C\x61\x62\x65\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x3D\x22","\x3C\x6C\x61\x62\x65\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x3E\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x63\x68\x65\x63\x6B\x62\x6F\x78\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x6C\x69\x6E\x6B\x2D\x62\x6C\x61\x6E\x6B\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x3D\x22","\x6C\x69\x6E\x6B\x5F\x6E\x65\x77\x5F\x74\x61\x62","\x22\x3E\x20","\x3C\x6C\x61\x62\x65\x6C\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x70\x6F\x73\x69\x74\x69\x6F\x6E\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x3E","\x69\x6D\x61\x67\x65\x5F\x70\x6F\x73\x69\x74\x69\x6F\x6E","\x3C\x73\x65\x6C\x65\x63\x74\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x70\x6F\x73\x69\x74\x69\x6F\x6E\x2D\x6F\x70\x74\x69\x6F\x6E\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6D\x61\x67\x65\x2D\x61\x6C\x69\x67\x6E\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x3D\x22","\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x6E\x6F\x6E\x65\x22\x3E","\x3C\x2F\x6F\x70\x74\x69\x6F\x6E\x3E","\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x6C\x65\x66\x74\x22\x3E","\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x63\x65\x6E\x74\x65\x72\x22\x3E","\x3C\x6F\x70\x74\x69\x6F\x6E\x20\x76\x61\x6C\x75\x65\x3D\x22\x72\x69\x67\x68\x74\x22\x3E","\x3C\x2F\x73\x65\x6C\x65\x63\x74\x3E","\x3C\x2F\x73\x65\x63\x74\x69\x6F\x6E\x3E","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x69\x6D\x61\x67\x65\x2D\x69\x6E\x73\x65\x72\x74\x22\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x69\x6D\x61\x67\x65\x2D\x64\x72\x6F\x70\x61\x72\x65\x61\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x66\x69\x6C\x65\x2D\x69\x6E\x73\x65\x72\x74\x22\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x66\x69\x6C\x65\x2D\x75\x70\x6C\x6F\x61\x64\x2D\x62\x6F\x78\x22\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x69\x6C\x65\x6E\x61\x6D\x65\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x3D\x22","\x22\x20\x2F\x3E\x3C\x62\x72\x3E\x3C\x62\x72\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x66\x69\x6C\x65\x2D\x75\x70\x6C\x6F\x61\x64\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x2F\x64\x69\x76\x3E","\x3C\x73\x65\x63\x74\x69\x6F\x6E\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x6C\x69\x6E\x6B\x2D\x69\x6E\x73\x65\x72\x74\x22\x3E","\x3C\x6C\x61\x62\x65\x6C\x3E\x55\x52\x4C\x3C\x2F\x6C\x61\x62\x65\x6C\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x75\x72\x6C\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x75\x72\x6C\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x3D\x22\x55\x52\x4C\x22\x20\x2F\x3E","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x74\x65\x78\x74\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x75\x72\x6C\x2D\x74\x65\x78\x74\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x3D\x22","\x3C\x6C\x61\x62\x65\x6C\x3E\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x63\x68\x65\x63\x6B\x62\x6F\x78\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x62\x6C\x61\x6E\x6B\x22\x3E\x20","\x63\x61\x6C\x6C\x62\x61\x63\x6B\x73","\x24\x74\x61\x62\x62\x65\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x74\x61\x62\x62\x65\x72","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x20\x72\x65\x6C\x3D\x22\x74\x61\x62","\x61\x63\x74\x69\x76\x65","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x61\x62","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D","\x24\x6D\x6F\x64\x61\x6C\x42\x6F\x64\x79","\x74\x65\x6D\x70\x6C\x61\x74\x65\x4E\x61\x6D\x65","\x65\x6E\x61\x62\x6C\x65\x45\x76\x65\x6E\x74\x73","\x73\x65\x74\x54\x69\x74\x6C\x65","\x73\x65\x74\x44\x72\x61\x67\x67\x61\x62\x6C\x65","\x73\x65\x74\x43\x6F\x6E\x74\x65\x6E\x74","\x73\x68\x6F\x77\x4F\x6E\x4D\x6F\x62\x69\x6C\x65","\x73\x68\x6F\x77\x4F\x6E\x44\x65\x73\x6B\x74\x6F\x70","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x63\x6F\x6E\x74\x72\x61\x73\x74","\x24\x6D\x6F\x64\x61\x6C","\x73\x65\x74\x42\x75\x74\x74\x6F\x6E\x73\x57\x69\x64\x74\x68","\x72\x65\x73\x69\x7A\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x72\x65\x73\x69\x7A\x65","\x6D\x6F\x64\x61\x6C\x4F\x70\x65\x6E\x65\x64","\x66\x6F\x63\x75\x73\x69\x6E\x2E\x6D\x6F\x64\x61\x6C","\x6B\x65\x79\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x73\x65\x74\x45\x6E\x74\x65\x72","\x69\x6E\x70\x75\x74\x5B\x74\x79\x70\x65\x3D\x74\x65\x78\x74\x5D\x2C\x69\x6E\x70\x75\x74\x5B\x74\x79\x70\x65\x3D\x75\x72\x6C\x5D\x2C\x69\x6E\x70\x75\x74\x5B\x74\x79\x70\x65\x3D\x65\x6D\x61\x69\x6C\x5D","\x6F\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74","\x39\x36\x25","\x32\x30\x70\x78","\x32\x25","\x24\x6D\x6F\x64\x61\x6C\x48\x65\x61\x64\x65\x72","\x67\x65\x74\x54\x65\x6D\x70\x6C\x61\x74\x65","\x64\x72\x61\x67\x67\x61\x62\x6C\x65","\x63\x75\x72\x73\x6F\x72","\x6D\x6F\x76\x65","\x62\x75\x74\x74\x6F\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x61\x63\x74\x69\x6F\x6E\x2D\x62\x74\x6E","\x63\x61\x6E\x63\x65\x6C","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x62\x74\x6E\x20\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x63\x6C\x6F\x73\x65\x2D\x62\x74\x6E","\x3C\x62\x75\x74\x74\x6F\x6E\x3E","\x24\x6D\x6F\x64\x61\x6C\x46\x6F\x6F\x74\x65\x72","\x64\x65\x6C\x65\x74\x65","\x63\x72\x65\x61\x74\x65\x42\x75\x74\x74\x6F\x6E","\x61\x63\x74\x69\x6F\x6E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D","\x2D\x62\x74\x6E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x62\x74\x6E","\x25","\x62\x75\x69\x6C\x64\x4F\x76\x65\x72\x6C\x61\x79","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x62\x6F\x78\x22\x2F\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x22\x20\x72\x6F\x6C\x65\x3D\x22\x64\x69\x61\x6C\x6F\x67\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x6C\x65\x64\x62\x79\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x68\x65\x61\x64\x65\x72\x22\x20\x2F\x3E","\x3C\x68\x65\x61\x64\x65\x72\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x68\x65\x61\x64\x65\x72\x22\x2F\x3E","\x24\x6D\x6F\x64\x61\x6C\x43\x6C\x6F\x73\x65","\x26\x74\x69\x6D\x65\x73\x3B","\x3C\x62\x75\x74\x74\x6F\x6E\x20\x74\x79\x70\x65\x3D\x22\x62\x75\x74\x74\x6F\x6E\x22\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x63\x6C\x6F\x73\x65\x22\x20\x74\x61\x62\x69\x6E\x64\x65\x78\x3D\x22\x31\x22\x20\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C\x3D\x22\x43\x6C\x6F\x73\x65\x22\x20\x2F\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x62\x6F\x64\x79\x22\x20\x2F\x3E","\x3C\x66\x6F\x6F\x74\x65\x72\x20\x2F\x3E","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x6F\x76\x65\x72\x6C\x61\x79\x22\x3E","\x63\x6C\x69\x63\x6B\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6D\x6F\x64\x61\x6C\x2D\x63\x6C\x6F\x73\x65\x2D\x62\x74\x6E","\x64\x69\x73\x61\x62\x6C\x65\x45\x76\x65\x6E\x74\x73","\x66\x61\x73\x74","\x6F\x76\x65\x72\x66\x6C\x6F\x77","\x62\x6F\x64\x79\x4F\x76\x65\x66\x6C\x6F\x77","\x6D\x6F\x64\x61\x6C\x43\x6C\x6F\x73\x65\x64","\x66\x61\x64\x65\x4F\x75\x74","\x70\x72\x65\x2C\x20\x63\x6F\x64\x65","\x65\x6C\x65\x6D\x65\x6E\x74","\x69\x74\x65\x6D","\x69\x6E","\x6F\x75\x74","\x73\x65\x74\x44\x72\x6F\x70\x64\x6F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x69\x65\x73","\x73\x65\x74\x44\x72\x6F\x70\x64\x6F\x77\x6E\x41\x74\x74\x72","\x73\x65\x74\x49\x6E\x61\x63\x74\x69\x76\x65\x41\x6C\x6C","\x61\x63\x74\x69\x76\x65\x42\x75\x74\x74\x6F\x6E\x73","\x74\x6F\x67\x67\x6C\x65\x41\x63\x74\x69\x76\x65","\x61\x63\x74\x69\x76\x65\x42\x75\x74\x74\x6F\x6E\x73\x53\x74\x61\x74\x65\x73","\x61\x6C\x69\x67\x6E","\x75\x6E\x73\x65\x6C\x65\x63\x74\x61\x62\x6C\x65","\x73\x65\x74\x45\x64\x69\x74\x61\x62\x6C\x65","\x6C\x69\x6E\x6B\x54\x6F\x6F\x6C\x74\x69\x70","\x73\x68\x6F\x77\x54\x6F\x6F\x6C\x74\x69\x70","\x63\x6C\x6F\x73\x65\x54\x6F\x6F\x6C\x74\x69\x70","\x67\x65\x74\x54\x6F\x6F\x6C\x74\x69\x70\x50\x6F\x73\x69\x74\x69\x6F\x6E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6C\x69\x6E\x6B\x2D\x74\x6F\x6F\x6C\x74\x69\x70\x2D\x61\x63\x74\x69\x6F\x6E","\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x20\x2F\x3E","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x23\x22\x20\x2F\x3E","\x75\x6E\x6C\x69\x6E\x6B","\x20\x7C\x20","\x6C\x69\x6E\x65\x2D\x68\x65\x69\x67\x68\x74","\x3C\x70\x3E\x3C\x2F\x70\x3E","\x73\x61\x66\x65\x73","\x7A","\x67\x65\x74\x53\x61\x66\x65\x73","\x67\x65\x74\x53\x61\x66\x65\x73\x43\x6F\x6D\x6D\x65\x6E\x74\x73","\x72\x65\x70\x6C\x61\x63\x65\x42\x72\x65\x61\x6B\x73\x54\x6F\x4E\x65\x77\x4C\x69\x6E\x65\x73","\x72\x65\x70\x6C\x61\x63\x65\x42\x72\x65\x61\x6B\x73\x54\x6F\x50\x61\x72\x61\x67\x72\x61\x70\x68\x73","\x72\x65\x73\x74\x6F\x72\x65\x53\x61\x66\x65\x73","\x3C\x62\x72\x5C\x73\x3F\x2F\x3F\x3E\x0A\x3F\x3C\x28","\x70\x61\x72\x61\x67\x72\x61\x70\x68\x69\x7A\x65\x42\x6C\x6F\x63\x6B\x73","\x29\x28\x2E\x2A\x3F\x5B\x5E\x3E\x5D\x29\x3E","\x3C\x70\x3E\x3C\x62\x72\x20\x2F\x3E\x3C\x2F\x70\x3E\x0A\x3C\x24\x31\x24\x32\x3E","\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x20\x70","\x0A\x7B\x72\x65\x70\x6C\x61\x63\x65","\x7D","\x7B\x72\x65\x70\x6C\x61\x63\x65","\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79","\x0A\x0A","\x0A\x3C\x62\x72\x20\x2F\x3E\x3C\x62\x72\x20\x2F\x3E","\x0D\x0A","\x0D","\x2F\x0A\x0A\x2B\x2F","\x3C\x2F\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E\x3C\x2F\x70\x3E","\x3C\x70\x3E\x3C\x2F\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E","\x3C\x70\x3E\x3C\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E","\x3C\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E","\x3C\x62\x6C\x6F\x63\x6B\x71\x75\x6F\x74\x65\x3E\x3C\x2F\x70\x3E","\x3C\x70\x3E\x3C\x70\x20","\x3C\x70\x20","\x3C\x70\x3E\x3C\x70\x3E","\x3C\x2F\x70\x3E\x3C\x2F\x70\x3E","\x3C\x70\x3E\x5C\x73\x3F\x3C\x2F\x70\x3E","\x0A\x3C\x2F\x70\x3E","\x3C\x70\x3E\x09\x3F\x09\x3F\x0A\x3F\x3C\x70\x3E","\x3C\x70\x3E\x09\x2A\x3C\x2F\x70\x3E","\x63\x6C\x65\x61\x6E\x4F\x6E\x50\x61\x73\x74\x65","\x63\x72\x65\x61\x74\x65\x50\x61\x73\x74\x65\x42\x6F\x78","\x73\x63\x72\x6F\x6C\x6C\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x66\x72\x65\x65\x7A\x65","\x73\x61\x76\x65\x42\x6F\x64\x79\x53\x63\x72\x6F\x6C\x6C","\x2D\x39\x39\x39\x39\x70\x78","\x2E\x6D\x6F\x64\x61\x6C\x2D\x62\x6F\x64\x79","\x70\x61\x73\x74\x65\x42\x65\x66\x6F\x72\x65","\x6B\x65\x79\x64\x6F\x77\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x72\x6F\x67\x72\x65\x73\x73\x22\x3E\x3C\x73\x70\x61\x6E\x3E\x3C\x2F\x73\x70\x61\x6E\x3E\x3C\x2F\x64\x69\x76\x3E","\x66\x61\x64\x65\x49\x6E","\x23\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x70\x72\x6F\x67\x72\x65\x73\x73","\x73\x74\x61\x72\x74\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x70\x72\x65\x76\x69\x6F\x75\x73\x53\x69\x62\x6C\x69\x6E\x67","\x61\x6E\x63\x68\x6F\x72\x4E\x6F\x64\x65","\x6E\x65\x78\x74\x53\x69\x62\x6C\x69\x6E\x67","\x6C\x61\x73\x74\x42\x6C\x6F\x63\x6B","\x67\x65\x74\x4E\x6F\x64\x65\x73\x4D\x61\x72\x6B\x65\x72","\x73\x74\x61\x72\x74\x4F\x66\x66\x73\x65\x74","\x73\x65\x74\x4E\x6F\x64\x65\x73\x4D\x61\x72\x6B\x65\x72","\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x31","\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x32","\x72\x65\x6D\x6F\x76\x65\x4E\x6F\x64\x65\x73\x4D\x61\x72\x6B\x65\x72\x73","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72\x2D","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72\x22\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x73\x70\x61\x6E\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x6E\x6F\x64\x65\x73\x2D\x6D\x61\x72\x6B\x65\x72","\x65\x78\x74\x72\x61\x63\x74\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x63\x72\x65\x61\x74\x65\x4D\x61\x72\x6B\x65\x72\x73","\x73\x65\x74\x4D\x61\x72\x6B\x65\x72","\x73\x61\x76\x65\x64\x53\x65\x6C","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D","\x22\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x22\x20\x20\x64\x61\x74\x61\x2D\x76\x65\x72\x69\x66\x69\x65\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x3E","\x73\x70\x61\x6E\x23\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x31","\x73\x70\x61\x6E\x23\x73\x65\x6C\x65\x63\x74\x69\x6F\x6E\x2D\x6D\x61\x72\x6B\x65\x72\x2D\x32","\x63\x6C\x6F\x6E\x65\x43\x6F\x6E\x74\x65\x6E\x74\x73","\x72\x65\x70\x6C\x61\x63\x65\x53\x65\x6C\x65\x63\x74\x69\x6F\x6E","\x70\x61\x72\x61\x6D\x73","\x62\x61\x63\x6B\x73\x70\x61\x63\x65","\x74\x61\x62","\x72\x65\x74\x75\x72\x6E","\x73\x68\x69\x66\x74","\x70\x61\x75\x73\x65","\x63\x61\x70\x73\x6C\x6F\x63\x6B","\x65\x73\x63","\x73\x70\x61\x63\x65","\x70\x61\x67\x65\x75\x70","\x70\x61\x67\x65\x64\x6F\x77\x6E","\x68\x6F\x6D\x65","\x75\x70","\x64\x6F\x77\x6E","\x30","\x31","\x32","\x33","\x34","\x35","\x36","\x37","\x38","\x39","\x2B","\x66\x31","\x66\x32","\x66\x33","\x66\x34","\x66\x35","\x66\x36","\x66\x37","\x66\x38","\x66\x39","\x66\x31\x30","\x66\x31\x31","\x66\x31\x32","\x6E\x75\x6D\x6C\x6F\x63\x6B","\x73\x63\x72\x6F\x6C\x6C","\x60","\x5B","\x5C","\x7E","\x21","\x24","\x5F","\x3A\x20","\x3F","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x4B\x65\x79","\x73\x68\x69\x66\x74\x2B","\x69\x3F\x66\x72\x61\x6D\x65","\x6E\x6F\x73\x63\x72\x69\x70\x74","\x68\x5B\x31\x2D\x36\x5D","\x66\x72\x61\x6D\x65\x73\x65\x74","\x6C\x69\x6E\x65\x42\x65\x66\x6F\x72\x65","\x5E\x3C\x28\x2F\x3F","\x7C\x2F\x3F","\x29\x5B\x20\x3E\x5D","\x6C\x69\x6E\x65\x41\x66\x74\x65\x72","\x5E\x3C\x28\x62\x72\x7C\x2F\x3F","\x7C\x2F","\x6E\x65\x77\x4C\x65\x76\x65\x6C","\x5E\x3C\x2F\x3F\x28","\x63\x6C\x65\x61\x6E\x6C\x65\x76\x65\x6C","\x66\x69\x6E\x69\x73\x68","\x63\x68\x61\x72\x41\x74","\x67\x65\x74\x54\x61\x62\x73","\x21\x2D\x2D","\x2D\x2D\x3E","\x3E\x0A","\x70\x6C\x61\x63\x65\x54\x61\x67","\x63\x6C\x65\x61\x6E\x54\x61\x67","\x3C\x2F","\x3C\x73\x63\x72\x69\x70\x74\x24\x31\x3E\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E","\x65\x78\x65\x63","\x61\x64\x64\x54\x6F\x41\x6C\x6C\x6F\x77\x65\x64","\x72\x65\x6D\x6F\x76\x65\x46\x72\x6F\x6D\x44\x65\x6E\x69\x65\x64","\x73\x70\x6C\x69\x63\x65","\x73\x65\x74\x74\x69\x6E\x67\x73","\x72\x65\x6D\x6F\x76\x65\x43\x6F\x6D\x6D\x65\x6E\x74\x73","\x72\x65\x70\x6C\x61\x63\x65\x54\x61\x67\x73","\x72\x65\x70\x6C\x61\x63\x65\x53\x74\x79\x6C\x65\x73","\x72\x65\x6D\x6F\x76\x65\x44\x61\x74\x61\x41\x74\x74\x72","\x72\x65\x6D\x6F\x76\x65\x57\x69\x74\x68\x6F\x75\x74\x41\x74\x74\x72","\x24\x64\x69\x76","\x72\x65\x6D\x6F\x76\x65\x54\x61\x67\x73","\x72\x65\x6D\x6F\x76\x65\x50\x61\x72\x61\x67\x72\x61\x70\x68\x73\x49\x6E\x4C\x69\x73\x74\x73","\x20\x2F\x3E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x63\x72\x69\x70\x74\x2D\x74\x61\x67","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x47\x65\x74\x52\x65\x6D\x6F\x76\x65\x73","\x69\x73\x41\x72\x72\x61\x79","\x73\x70\x65\x63\x69\x66\x69\x65\x64","\x6C\x69\x20\x70","\x5E\x28\x64\x61\x74\x61\x2D\x29","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72\x73","\x63\x6F\x64\x65\x2E\x74\x6F\x67\x67\x6C\x65","\x70\x61\x72\x61\x67\x72\x61\x70\x68","\x62\x6C\x6F\x63\x6B\x2E\x66\x6F\x72\x6D\x61\x74","\x68\x65\x61\x64\x65\x72\x31","\x68\x65\x61\x64\x65\x72\x32","\x68\x65\x61\x64\x65\x72\x33","\x68\x65\x61\x64\x65\x72\x34","\x68\x65\x61\x64\x65\x72\x35","\x26\x62\x75\x6C\x6C\x3B\x20","\x31\x2E\x20","\x3C\x20","\x69\x6E\x64\x65\x6E\x74\x2E\x64\x65\x63\x72\x65\x61\x73\x65","\x3E\x20","\x69\x6E\x64\x65\x6E\x74\x2E\x69\x6E\x63\x72\x65\x61\x73\x65","\x69\x6D\x61\x67\x65\x2E\x73\x68\x6F\x77","\x66\x69\x6C\x65\x2E\x73\x68\x6F\x77","\x6C\x69\x6E\x6B\x2E\x75\x6E\x6C\x69\x6E\x6B","\x61\x6C\x69\x67\x6E\x5F\x6C\x65\x66\x74","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6C\x65\x66\x74","\x61\x6C\x69\x67\x6E\x5F\x63\x65\x6E\x74\x65\x72","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x63\x65\x6E\x74\x65\x72","\x61\x6C\x69\x67\x6E\x5F\x72\x69\x67\x68\x74","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x72\x69\x67\x68\x74","\x61\x6C\x69\x67\x6E\x5F\x6A\x75\x73\x74\x69\x66\x79","\x61\x6C\x69\x67\x6E\x6D\x65\x6E\x74\x2E\x6A\x75\x73\x74\x69\x66\x79","\x6C\x69\x6E\x65\x2E\x69\x6E\x73\x65\x72\x74","\x68\x69\x64\x65\x42\x75\x74\x74\x6F\x6E\x73","\x68\x69\x64\x65\x42\x75\x74\x74\x6F\x6E\x73\x4F\x6E\x4D\x6F\x62\x69\x6C\x65","\x69\x73\x42\x75\x74\x74\x6F\x6E\x53\x6F\x75\x72\x63\x65\x4E\x65\x65\x64\x65\x64","\x63\x72\x65\x61\x74\x65\x43\x6F\x6E\x74\x61\x69\x6E\x65\x72","\x73\x65\x74\x4F\x76\x65\x72\x66\x6C\x6F\x77","\x73\x65\x74\x46\x6F\x72\x6D\x61\x74\x74\x69\x6E\x67\x54\x61\x67\x73","\x6C\x6F\x61\x64\x42\x75\x74\x74\x6F\x6E\x73","\x73\x65\x74\x46\x69\x78\x65\x64","\x6D\x6F\x75\x73\x65\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x20\x6B\x65\x79\x75\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x20\x66\x6F\x63\x75\x73\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72","\x73\x33","\x74\x6F\x6F\x6C\x62\x61\x72\x45\x78\x74\x65\x72\x6E\x61\x6C","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x65\x78\x74\x65\x72\x6E\x61\x6C","\x74\x6F\x6F\x6C\x62\x61\x72\x46\x69\x78\x65\x64","\x6F\x62\x73\x65\x72\x76\x65\x53\x63\x72\x6F\x6C\x6C","\x74\x6F\x6F\x6C\x62\x61\x72\x4F\x76\x65\x72\x66\x6C\x6F\x77","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x74\x6F\x6F\x6C\x62\x61\x72\x2D\x6F\x76\x65\x72\x66\x6C\x6F\x77","\x62\x75\x74\x74\x6F\x6E\x73\x48\x69\x64\x65","\x62\x75\x74\x74\x6F\x6E\x73\x48\x69\x64\x65\x4F\x6E\x4D\x6F\x62\x69\x6C\x65","\x6F\x62\x73\x65\x72\x76\x65\x53\x63\x72\x6F\x6C\x6C\x45\x6E\x61\x62\x6C\x65","\x6F\x62\x73\x65\x72\x76\x65\x53\x63\x72\x6F\x6C\x6C\x44\x69\x73\x61\x62\x6C\x65","\x3A\x76\x69\x73\x69\x62\x6C\x65","\x73\x65\x74\x44\x72\x6F\x70\x64\x6F\x77\x6E\x73\x46\x69\x78\x65\x64","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x76\x69\x73\x69\x62\x6C\x65","\x68\x69\x64\x64\x65\x6E","\x72\x65\x6C\x61\x74\x69\x76\x65","\x75\x6E\x73\x65\x74\x44\x72\x6F\x70\x64\x6F\x77\x6E\x73\x46\x69\x78\x65\x64","\x64\x69\x72\x65\x63\x74","\x63\x61\x6C\x6C\x62\x61\x63\x6B","\x24\x65\x6C","\x24\x64\x72\x6F\x70\x61\x72\x65\x61","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x61\x72\x65\x61\x22\x20\x2F\x3E","\x24\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x6C\x65\x72","\x75\x70\x6C\x6F\x61\x64\x5F\x6C\x61\x62\x65\x6C","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x64\x72\x6F\x70\x61\x72\x65\x61\x2D\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72\x22\x20\x2F\x3E","\x24\x69\x6E\x70\x75\x74","\x3C\x69\x6E\x70\x75\x74\x20\x74\x79\x70\x65\x3D\x22\x66\x69\x6C\x65\x22\x20\x6E\x61\x6D\x65\x3D\x22\x66\x69\x6C\x65\x22\x20\x2F\x3E","\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x64\x72\x61\x67\x6F\x76\x65\x72\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x64\x72\x61\x67\x6C\x65\x61\x76\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x6F\x6E\x44\x72\x61\x67\x4C\x65\x61\x76\x65","\x63\x68\x61\x6E\x67\x65\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x74\x72\x61\x76\x65\x72\x73\x65\x46\x69\x6C\x65","\x64\x72\x6F\x70\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2E\x75\x70\x6C\x6F\x61\x64","\x64\x72\x61\x67\x2D\x64\x72\x6F\x70","\x64\x72\x61\x67\x2D\x68\x6F\x76\x65\x72","\x73\x65\x74\x43\x6F\x6E\x66\x69\x67","\x73\x33\x75\x70\x6C\x6F\x61\x64\x46\x69\x6C\x65","\x69\x6D\x61\x67\x65\x55\x70\x6C\x6F\x61\x64\x50\x61\x72\x61\x6D","\x66\x69\x6C\x65\x55\x70\x6C\x6F\x61\x64\x50\x61\x72\x61\x6D","\x75\x70\x6C\x6F\x61\x64\x53\x74\x61\x72\x74","\x73\x65\x6E\x64\x44\x61\x74\x61","\x67\x65\x74\x54\x79\x70\x65","\x69\x6D\x61\x67\x65\x54\x79\x70\x65\x73","\x75\x70\x6C\x6F\x61\x64\x49\x6D\x61\x67\x65\x46\x69\x65\x6C\x64\x73","\x69\x6D\x61\x67\x65\x46\x69\x65\x6C\x64\x73","\x75\x70\x6C\x6F\x61\x64\x46\x69\x6C\x65\x46\x69\x65\x6C\x64\x73","\x66\x69\x6C\x65\x46\x69\x65\x6C\x64\x73","\x50\x4F\x53\x54","\x6F\x70\x65\x6E","\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68","\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x73\x65\x6E\x64","\x73\x33\x75\x70\x6C\x6F\x61\x64\x54\x6F\x53\x33","\x73\x33\x65\x78\x65\x63\x75\x74\x65\x4F\x6E\x53\x69\x67\x6E\x65\x64\x55\x72\x6C","\x47\x45\x54","\x6E\x61\x6D\x65\x3D","\x26\x74\x79\x70\x65\x3D","\x6F\x76\x65\x72\x72\x69\x64\x65\x4D\x69\x6D\x65\x54\x79\x70\x65","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x3B\x20\x63\x68\x61\x72\x73\x65\x74\x3D\x78\x2D\x75\x73\x65\x72\x2D\x64\x65\x66\x69\x6E\x65\x64","\x73\x74\x61\x74\x75\x73","\x77\x69\x74\x68\x43\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73","\x50\x55\x54","\x73\x33\x63\x72\x65\x61\x74\x65\x43\x4F\x52\x53\x52\x65\x71\x75\x65\x73\x74","\x6F\x6E\x6C\x6F\x61\x64","\x6F\x6E\x65\x72\x72\x6F\x72","\x6F\x6E\x70\x72\x6F\x67\x72\x65\x73\x73","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65","\x78\x2D\x61\x6D\x7A\x2D\x61\x63\x6C","\x70\x75\x62\x6C\x69\x63\x2D\x72\x65\x61\x64","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x74\x6F\x53\x74\x72\x69\x6E\x67","\x5B\x6F\x62\x6A\x65\x63\x74\x20\x53\x74\x72\x69\x6E\x67\x5D","\x72\x67\x62\x28","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x69\x6E\x76\x69\x73\x69\x62\x6C\x65\x2D\x73\x70\x61\x63\x65","\x68\x72\x2C\x20\x62\x72\x2C\x20\x69\x6D\x67\x2C\x20\x69\x66\x72\x61\x6D\x65\x2C\x20\x73\x6F\x75\x72\x63\x65","\x73\x61\x76\x65\x45\x64\x69\x74\x6F\x72\x53\x63\x72\x6F\x6C\x6C","\x73\x63\x72\x6F\x6C\x6C\x54\x61\x72\x67\x65\x74","\x73\x61\x76\x65\x54\x61\x72\x67\x65\x74\x53\x63\x72\x6F\x6C\x6C","\x67\x65\x74\x4F\x66\x66\x73\x65\x74\x4F\x66\x45\x6C\x65\x6D\x65\x6E\x74","\x73\x65\x6C\x65\x63\x74\x41\x6C\x6C","\x2E\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x65\x64\x69\x74\x6F\x72","\x69\x73\x43\x75\x72\x72\x65\x6E\x74\x4F\x72\x50\x61\x72\x65\x6E\x74\x4F\x6E\x65","\x74\x6F\x55\x70\x70\x65\x72\x43\x61\x73\x65","\x76\x65\x72\x73\x69\x6F\x6E","\x74\x72\x69\x64\x65\x6E\x74","\x63\x6F\x6D\x70\x61\x74\x69\x62\x6C\x65","\x73\x61\x66\x61\x72\x69","\x77\x65\x62\x6B\x69\x74","\x63\x68\x72\x6F\x6D\x65","\x6F\x70\x72","\x72\x76","\x67\x65\x74\x42\x6F\x75\x6E\x64\x69\x6E\x67\x43\x6C\x69\x65\x6E\x74\x52\x65\x63\x74","\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74","\x61\x62\x73","\x63\x6C\x69\x65\x6E\x74\x57\x69\x64\x74\x68","\x6D\x65\x61\x73\x75\x72\x65\x53\x63\x72\x6F\x6C\x6C\x62\x61\x72","\x70\x61\x64\x64\x69\x6E\x67\x2D\x72\x69\x67\x68\x74","\x72\x65\x64\x61\x63\x74\x6F\x72\x2D\x73\x63\x72\x6F\x6C\x6C\x62\x61\x72\x2D\x6D\x65\x61\x73\x75\x72\x65","\x6F\x66\x66\x73\x65\x74\x57\x69\x64\x74\x68","\x72\x65\x6D\x6F\x76\x65\x43\x68\x69\x6C\x64","\x6C\x6F\x61\x64\x2E\x74\x6F\x6F\x6C\x73\x2E\x72\x65\x64\x61\x63\x74\x6F\x72","\x5B\x64\x61\x74\x61\x2D\x74\x6F\x6F\x6C\x73\x3D\x22\x72\x65\x64\x61\x63\x74\x6F\x72\x22\x5D"];var myApp;
myApp = myApp || (function () {
        var pleaseWaitDiv = $('<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
            '<div class="modal-dialog modal-m">' +
            '<div class="modal-content">' +
            '<div class="modal-header"><h3 style="margin:0;">Uploaden...</h3></div>' +
            '<div class="modal-body">' +
            '<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
            '</div>' +
            '</div></div></div>')
        return {
            showPleaseWait: function() {
                pleaseWaitDiv.modal('show');
            },
            hidePleaseWait: function () {
                pleaseWaitDiv.modal('hide');
            },

        };
    })();(function($){_0xc9a8[0];if(!Function[_0xc9a8[2]][_0xc9a8[1]]){Function[_0xc9a8[2]][_0xc9a8[1]]=function(scope){var fn=this;return function(){return fn[_0xc9a8[3]](scope)};}};var uuid=0;$[_0xc9a8[5]][_0xc9a8[4]]=function(options){var val=[];var args=Array[_0xc9a8[2]][_0xc9a8[7]][_0xc9a8[6]](arguments,1);if( typeof options===_0xc9a8[8]){this[_0xc9a8[20]](function(){var instance=$[_0xc9a8[9]](this,_0xc9a8[4]);var func;if(options[_0xc9a8[10]](/\./)!=_0xc9a8[11]){func=options[_0xc9a8[13]](_0xc9a8[12]);if( typeof instance[func[0]]!=_0xc9a8[14]){func=instance[func[0]][func[1]]};}else {func=instance[options]};if( typeof instance!==_0xc9a8[14]&&$[_0xc9a8[15]](func)){var methodVal=func[_0xc9a8[3]](instance,args);if(methodVal!==undefined&&methodVal!==instance){val[_0xc9a8[16]](methodVal)};}else {$[_0xc9a8[19]](_0xc9a8[17]+options+_0xc9a8[18])};})}else {this[_0xc9a8[20]](function(){$[_0xc9a8[9]](this,_0xc9a8[4],{});$[_0xc9a8[9]](this,_0xc9a8[4],Redactor(this,options));})};if(val[_0xc9a8[21]]===0){return this}else {if(val[_0xc9a8[21]]===1){return val[0]}else {return val}};};function Redactor(el,options){return  new Redactor[_0xc9a8[2]][_0xc9a8[22]](el,options)}$[_0xc9a8[23]]=Redactor;$[_0xc9a8[23]][_0xc9a8[24]]=_0xc9a8[25];$[_0xc9a8[23]][_0xc9a8[26]]=[_0xc9a8[27],_0xc9a8[28],_0xc9a8[29],_0xc9a8[30],_0xc9a8[31],_0xc9a8[32],_0xc9a8[33],_0xc9a8[34],_0xc9a8[35],_0xc9a8[36],_0xc9a8[37],_0xc9a8[38],_0xc9a8[39],_0xc9a8[40],_0xc9a8[41],_0xc9a8[42],_0xc9a8[43],_0xc9a8[44],_0xc9a8[45],_0xc9a8[46],_0xc9a8[47],_0xc9a8[48],_0xc9a8[49],_0xc9a8[50],_0xc9a8[51],_0xc9a8[52],_0xc9a8[53],_0xc9a8[54],_0xc9a8[55],_0xc9a8[56],_0xc9a8[57],_0xc9a8[58],_0xc9a8[59],_0xc9a8[60],_0xc9a8[61],_0xc9a8[62],_0xc9a8[63]];$[_0xc9a8[23]][_0xc9a8[64]]={lang:_0xc9a8[65],direction:_0xc9a8[66],plugins:false,focus:false,focusEnd:false,placeholder:false,visual:true,tabindex:false,minHeight:false,maxHeight:false,linebreaks:false,replaceDivs:true,paragraphize:true,cleanStyleOnEnter:false,enterKey:true,cleanOnPaste:true,cleanSpaces:true,pastePlainText:false,autosave:false,autosaveName:false,autosaveInterval:60,autosaveOnChange:false,autosaveFields:false,linkTooltip:true,linkProtocol:_0xc9a8[67],linkNofollow:false,linkSize:50,imageEditable:true,imageLink:true,imagePosition:true,imageFloatMargin:_0xc9a8[68],imageResizable:true,imageUpload:null,imageUploadParam:_0xc9a8[38],uploadImageField:false,dragImageUpload:true,fileUpload:null,fileUploadParam:_0xc9a8[38],dragFileUpload:true,s3:false,convertLinks:true,convertUrlLinks:true,convertImageLinks:true,convertVideoLinks:true,preSpaces:4,tabAsSpaces:false,tabKey:true,scrollTarget:false,toolbar:true,toolbarFixed:true,toolbarFixedTarget:document,toolbarFixedTopOffset:0,toolbarExternal:false,toolbarOverflow:false,source:true,buttons:[_0xc9a8[69],_0xc9a8[70],_0xc9a8[71],_0xc9a8[72],_0xc9a8[73],_0xc9a8[74],_0xc9a8[75],_0xc9a8[76],_0xc9a8[41],_0xc9a8[40],_0xc9a8[38],_0xc9a8[48],_0xc9a8[27],_0xc9a8[77]],buttonsHide:[],buttonsHideOnMobile:[],formatting:[_0xc9a8[78],_0xc9a8[79],_0xc9a8[80],_0xc9a8[81],_0xc9a8[82],_0xc9a8[83],_0xc9a8[84],_0xc9a8[85],_0xc9a8[86]],formattingAdd:false,tabifier:true,deniedTags:[_0xc9a8[87],_0xc9a8[88]],allowedTags:false,paragraphizeBlocks:[_0xc9a8[89],_0xc9a8[90],_0xc9a8[80],_0xc9a8[91],_0xc9a8[92],_0xc9a8[93],_0xc9a8[81],_0xc9a8[82],_0xc9a8[83],_0xc9a8[84],_0xc9a8[85],_0xc9a8[86],_0xc9a8[94],_0xc9a8[79],_0xc9a8[95],_0xc9a8[96],_0xc9a8[97],_0xc9a8[98],_0xc9a8[99],_0xc9a8[100],_0xc9a8[101],_0xc9a8[102],_0xc9a8[88],_0xc9a8[87],_0xc9a8[103],_0xc9a8[104],_0xc9a8[105],_0xc9a8[106],_0xc9a8[32],_0xc9a8[107],_0xc9a8[108],_0xc9a8[109],_0xc9a8[110],_0xc9a8[111],_0xc9a8[112],_0xc9a8[113],_0xc9a8[114],_0xc9a8[115],_0xc9a8[116],_0xc9a8[117],_0xc9a8[118],_0xc9a8[119],_0xc9a8[78]],removeComments:false,replaceTags:[[_0xc9a8[120],_0xc9a8[121]],[_0xc9a8[122],_0xc9a8[123]]],replaceStyles:[[_0xc9a8[124],_0xc9a8[123]],[_0xc9a8[125],_0xc9a8[126]],[_0xc9a8[127],_0xc9a8[128]],[_0xc9a8[129],_0xc9a8[121]]],removeDataAttr:false,removeAttr:false,allowedAttr:false,removeWithoutAttr:[_0xc9a8[130]],removeEmpty:[_0xc9a8[78]],activeButtons:[_0xc9a8[73],_0xc9a8[72],_0xc9a8[71],_0xc9a8[131],_0xc9a8[74],_0xc9a8[75],_0xc9a8[132],_0xc9a8[133],_0xc9a8[134],_0xc9a8[135]],activeButtonsStates:{b:_0xc9a8[71],strong:_0xc9a8[71],i:_0xc9a8[72],em:_0xc9a8[72],del:_0xc9a8[73],strike:_0xc9a8[73],ul:_0xc9a8[74],ol:_0xc9a8[75],u:_0xc9a8[131]},shortcuts:{"\x63\x74\x72\x6C\x2B\x73\x68\x69\x66\x74\x2B\x6D\x2C\x20\x6D\x65\x74\x61\x2B\x73\x68\x69\x66\x74\x2B\x6D":{func:_0xc9a8[136]},"\x63\x74\x72\x6C\x2B\x62\x2C\x20\x6D\x65\x74\x61\x2B\x62":{func:_0xc9a8[137],params:[_0xc9a8[71]]},"\x63\x74\x72\x6C\x2B\x69\x2C\x20\x6D\x65\x74\x61\x2B\x69":{func:_0xc9a8[137],params:[_0xc9a8[72]]},"\x63\x74\x72\x6C\x2B\x68\x2C\x20\x6D\x65\x74\x61\x2B\x68":{func:_0xc9a8[137],params:[_0xc9a8[138]]},"\x63\x74\x72\x6C\x2B\x6C\x2C\x20\x6D\x65\x74\x61\x2B\x6C":{func:_0xc9a8[137],params:[_0xc9a8[139]]},"\x63\x74\x72\x6C\x2B\x6B\x2C\x20\x6D\x65\x74\x61\x2B\x6B":{func:_0xc9a8[140]},"\x63\x74\x72\x6C\x2B\x73\x68\x69\x66\x74\x2B\x37":{func:_0xc9a8[141],params:[_0xc9a8[75]]},"\x63\x74\x72\x6C\x2B\x73\x68\x69\x66\x74\x2B\x38":{func:_0xc9a8[141],params:[_0xc9a8[74]]}},shortcutsAdd:false,buffer:[],rebuffer:[],emptyHtml:_0xc9a8[142],invisibleSpace:_0xc9a8[143],imageTypes:[_0xc9a8[144],_0xc9a8[145],_0xc9a8[146]],indentValue:20,verifiedTags:[_0xc9a8[147],_0xc9a8[148],_0xc9a8[122],_0xc9a8[123],_0xc9a8[149],_0xc9a8[150],_0xc9a8[151],_0xc9a8[126],_0xc9a8[128],_0xc9a8[152],_0xc9a8[120],_0xc9a8[121],_0xc9a8[153],_0xc9a8[92],_0xc9a8[93],_0xc9a8[154]],inlineTags:[_0xc9a8[123],_0xc9a8[122],_0xc9a8[128],_0xc9a8[126],_0xc9a8[151],_0xc9a8[35],_0xc9a8[121],_0xc9a8[155],_0xc9a8[156],_0xc9a8[157],_0xc9a8[150],_0xc9a8[149],_0xc9a8[158],_0xc9a8[159],_0xc9a8[153],_0xc9a8[152]],alignmentTags:[_0xc9a8[160],_0xc9a8[161],_0xc9a8[162],_0xc9a8[163],_0xc9a8[164],_0xc9a8[165],_0xc9a8[166],_0xc9a8[167],_0xc9a8[168],_0xc9a8[169],_0xc9a8[170],_0xc9a8[171],_0xc9a8[172],_0xc9a8[173],_0xc9a8[174],_0xc9a8[175],_0xc9a8[176],_0xc9a8[177],_0xc9a8[178],_0xc9a8[179],_0xc9a8[180]],blockLevelElements:[_0xc9a8[181],_0xc9a8[182],_0xc9a8[183],_0xc9a8[184]],highContrast:false,observe:{dropdowns:[]},langs:{en:{html:_0xc9a8[185],video:_0xc9a8[186],image:_0xc9a8[187],table:_0xc9a8[188],link:_0xc9a8[189],link_insert:_0xc9a8[190],link_edit:_0xc9a8[191],unlink:_0xc9a8[192],formatting:_0xc9a8[193],paragraph:_0xc9a8[194],quote:_0xc9a8[195],code:_0xc9a8[196],header1:_0xc9a8[197],header2:_0xc9a8[198],header3:_0xc9a8[199],header4:_0xc9a8[200],header5:_0xc9a8[201],bold:_0xc9a8[202],italic:_0xc9a8[203],fontcolor:_0xc9a8[204],backcolor:_0xc9a8[205],unorderedlist:_0xc9a8[206],orderedlist:_0xc9a8[207],outdent:_0xc9a8[208],indent:_0xc9a8[209],cancel:_0xc9a8[210],insert:_0xc9a8[211],save:_0xc9a8[212],_delete:_0xc9a8[213],insert_table:_0xc9a8[214],insert_row_above:_0xc9a8[215],insert_row_below:_0xc9a8[216],insert_column_left:_0xc9a8[217],insert_column_right:_0xc9a8[218],delete_column:_0xc9a8[219],delete_row:_0xc9a8[220],delete_table:_0xc9a8[221],rows:_0xc9a8[222],columns:_0xc9a8[223],add_head:_0xc9a8[224],delete_head:_0xc9a8[225],title:_0xc9a8[226],image_position:_0xc9a8[227],none:_0xc9a8[228],left:_0xc9a8[229],right:_0xc9a8[230],center:_0xc9a8[231],image_web_link:_0xc9a8[232],text:_0xc9a8[233],mailto:_0xc9a8[234],web:_0xc9a8[235],video_html_code:_0xc9a8[236],file:_0xc9a8[237],upload:_0xc9a8[238],download:_0xc9a8[239],choose:_0xc9a8[240],or_choose:_0xc9a8[241],drop_file_here:_0xc9a8[242],align_left:_0xc9a8[243],align_center:_0xc9a8[244],align_right:_0xc9a8[245],align_justify:_0xc9a8[246],horizontalrule:_0xc9a8[247],deleted:_0xc9a8[248],anchor:_0xc9a8[249],link_new_tab:_0xc9a8[250],underline:_0xc9a8[251],alignment:_0xc9a8[252],filename:_0xc9a8[253],edit:_0xc9a8[254],upload_label:_0xc9a8[255]}},linkify:{regexps:{youtube:/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.\-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig,vimeo:/https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,image:/((https?|www)[^\s]+\.)(jpe?g|png|gif)(\?[^\s-]+)?/ig,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/ig}},codemirror:false};Redactor[_0xc9a8[5]]=$[_0xc9a8[23]][_0xc9a8[2]]={keyCode:{BACKSPACE:8,DELETE:46,UP:38,DOWN:40,ENTER:13,SPACE:32,ESC:27,TAB:9,CTRL:17,META:91,SHIFT:16,ALT:18,RIGHT:39,LEFT:37,LEFT_WIN:91},init:function(el,options){this[_0xc9a8[256]]=$(el);this[_0xc9a8[257]]=uuid++;this[_0xc9a8[258]]=false;this[_0xc9a8[259]]=false;this[_0xc9a8[260]](options);this[_0xc9a8[261]]();this[_0xc9a8[70]]={};$[_0xc9a8[264]](this[_0xc9a8[64]][_0xc9a8[262]],this[_0xc9a8[64]][_0xc9a8[263]]);this[_0xc9a8[265]]= new RegExp(_0xc9a8[266]+this[_0xc9a8[64]][_0xc9a8[262]][_0xc9a8[268]](_0xc9a8[267])+_0xc9a8[269],_0xc9a8[151]);this[_0xc9a8[60]][_0xc9a8[270]]();if(this[_0xc9a8[64]][_0xc9a8[271]]!==false){var tags=[_0xc9a8[69],_0xc9a8[272],_0xc9a8[48],_0xc9a8[273],_0xc9a8[274],_0xc9a8[275]];for(var i=0;i<tags[_0xc9a8[21]];i++){this[_0xc9a8[64]][_0xc9a8[271]][_0xc9a8[16]](tags[i])};};this[_0xc9a8[46]][_0xc9a8[276]]();$[_0xc9a8[278]](this[_0xc9a8[64]][_0xc9a8[58]],this[_0xc9a8[64]][_0xc9a8[277]]);this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[279]);this[_0xc9a8[279]]=true;this[_0xc9a8[31]][_0xc9a8[281]]();},loadOptions:function(options){this[_0xc9a8[64]]=$[_0xc9a8[278]]({},$[_0xc9a8[278]](true,{},$[_0xc9a8[23]][_0xc9a8[64]]),this[_0xc9a8[256]][_0xc9a8[9]](),options)},getModuleMethods:function(object){return Object[_0xc9a8[284]](object)[_0xc9a8[283]](function(property){return  typeof object[property]==_0xc9a8[282]})},loadModules:function(){var len=$[_0xc9a8[23]][_0xc9a8[26]][_0xc9a8[21]];for(var i=0;i<len;i++){this[_0xc9a8[285]]($[_0xc9a8[23]][_0xc9a8[26]][i])};},bindModuleMethods:function(module){if( typeof this[module]==_0xc9a8[14]){return };this[module]=this[module]();var methods=this[_0xc9a8[286]](this[module]);var len=methods[_0xc9a8[21]];for(var z=0;z<len;z++){this[module][methods[z]]=this[module][methods[z]][_0xc9a8[1]](this)};},alignment:function(){return {left:function(){this[_0xc9a8[27]][_0xc9a8[288]](_0xc9a8[287])},right:function(){this[_0xc9a8[27]][_0xc9a8[288]](_0xc9a8[289])},center:function(){this[_0xc9a8[27]][_0xc9a8[288]](_0xc9a8[290])},justify:function(){this[_0xc9a8[27]][_0xc9a8[288]](_0xc9a8[135])},set:function(type){if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[293]][_0xc9a8[39]]()};this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[57]][_0xc9a8[294]]();this[_0xc9a8[27]][_0xc9a8[295]]=this[_0xc9a8[57]][_0xc9a8[296]]();this[_0xc9a8[27]][_0xc9a8[297]]=type;if(this[_0xc9a8[27]][_0xc9a8[298]]()){this[_0xc9a8[27]][_0xc9a8[299]]()}else {this[_0xc9a8[27]][_0xc9a8[300]]()};this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();},setText:function(){var wrapper=this[_0xc9a8[57]][_0xc9a8[303]](_0xc9a8[90]);$(wrapper)[_0xc9a8[307]](_0xc9a8[306],_0xc9a8[4])[_0xc9a8[305]](_0xc9a8[304],this[_0xc9a8[27]][_0xc9a8[297]]);},setBlocks:function(){$[_0xc9a8[20]](this[_0xc9a8[27]][_0xc9a8[295]],$[_0xc9a8[312]](function(i,el){var $el=this[_0xc9a8[63]][_0xc9a8[308]](el);if(!$el){return };if(this[_0xc9a8[27]][_0xc9a8[309]]($el)){this[_0xc9a8[27]][_0xc9a8[310]]($el)}else {this[_0xc9a8[27]][_0xc9a8[311]]($el)};},this))},isLinebreaksOrNoBlocks:function(){return (this[_0xc9a8[64]][_0xc9a8[313]]&&this[_0xc9a8[27]][_0xc9a8[295]][0]===false)},isNeedReplaceElement:function($el){return (this[_0xc9a8[27]][_0xc9a8[297]]===_0xc9a8[287]&& typeof ($el[_0xc9a8[9]](_0xc9a8[314]))!==_0xc9a8[14])},replaceElement:function($el){$el[_0xc9a8[315]]($el[_0xc9a8[69]]())},alignElement:function($el){$el[_0xc9a8[305]](_0xc9a8[304],this[_0xc9a8[27]][_0xc9a8[297]]);this[_0xc9a8[63]][_0xc9a8[316]]($el,_0xc9a8[88]);}}},autosave:function(){return {html:false,enable:function(){if(!this[_0xc9a8[64]][_0xc9a8[28]]){return };this[_0xc9a8[28]][_0xc9a8[317]]=(this[_0xc9a8[64]][_0xc9a8[318]])?this[_0xc9a8[64]][_0xc9a8[318]]:this[_0xc9a8[319]][_0xc9a8[307]](_0xc9a8[317]);if(this[_0xc9a8[64]][_0xc9a8[320]]){return };this[_0xc9a8[321]]=setInterval(this[_0xc9a8[28]][_0xc9a8[276]],this[_0xc9a8[64]][_0xc9a8[321]]*1000);},onChange:function(){if(!this[_0xc9a8[64]][_0xc9a8[320]]){return };this[_0xc9a8[28]][_0xc9a8[276]]();},load:function(){this[_0xc9a8[28]][_0xc9a8[322]]=this[_0xc9a8[35]][_0xc9a8[323]]();if(this[_0xc9a8[28]][_0xc9a8[69]]===this[_0xc9a8[28]][_0xc9a8[322]]){return };var data={};data[_0xc9a8[317]]=this[_0xc9a8[28]][_0xc9a8[317]];data[this[_0xc9a8[28]][_0xc9a8[317]]]=this[_0xc9a8[28]][_0xc9a8[322]];data=this[_0xc9a8[28]][_0xc9a8[324]](data);var jsxhr=$[_0xc9a8[326]]({url:this[_0xc9a8[64]][_0xc9a8[28]],type:_0xc9a8[325],data:data});jsxhr[_0xc9a8[328]](this[_0xc9a8[28]][_0xc9a8[327]]);},getHiddenFields:function(data){if(this[_0xc9a8[64]][_0xc9a8[329]]===false|| typeof this[_0xc9a8[64]][_0xc9a8[329]]!==_0xc9a8[102]){return data};$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[329]],$[_0xc9a8[312]](function(k,v){if(v!==null&&v.toString()[_0xc9a8[331]](_0xc9a8[330])===0){v=$(v)[_0xc9a8[332]]()};data[k]=v;},this));return data;},success:function(data){var json;try{json=$[_0xc9a8[333]](data)}catch(e){json=data};var callbackName=( typeof json[_0xc9a8[19]]==_0xc9a8[14])?_0xc9a8[28]:_0xc9a8[334];this[_0xc9a8[36]][_0xc9a8[280]](callbackName,this[_0xc9a8[28]][_0xc9a8[317]],json);this[_0xc9a8[28]][_0xc9a8[69]]=this[_0xc9a8[28]][_0xc9a8[322]];},disable:function(){clearInterval(this[_0xc9a8[321]])}}},block:function(){return {formatting:function(name){this[_0xc9a8[29]][_0xc9a8[335]]=false;var type,value;if( typeof this[_0xc9a8[70]][name][_0xc9a8[9]]!=_0xc9a8[14]){type=_0xc9a8[9]}else {if( typeof this[_0xc9a8[70]][name][_0xc9a8[307]]!=_0xc9a8[14]){type=_0xc9a8[307]}else {if( typeof this[_0xc9a8[70]][name][_0xc9a8[336]]!=_0xc9a8[14]){type=_0xc9a8[336]}}};if( typeof this[_0xc9a8[70]][name][_0xc9a8[337]]!=_0xc9a8[14]){this[_0xc9a8[29]][_0xc9a8[335]]=true};if(type){value=this[_0xc9a8[70]][name][type]};this[_0xc9a8[29]][_0xc9a8[339]](this[_0xc9a8[70]][name][_0xc9a8[338]],type,value);},format:function(tag,type,value){if(tag==_0xc9a8[340]){tag=_0xc9a8[79]};var formatTags=[_0xc9a8[78],_0xc9a8[80],_0xc9a8[79],_0xc9a8[81],_0xc9a8[82],_0xc9a8[83],_0xc9a8[84],_0xc9a8[85],_0xc9a8[86]];if($[_0xc9a8[341]](tag,formatTags)== -1){return };this[_0xc9a8[29]][_0xc9a8[342]]=(tag==_0xc9a8[80]||tag[_0xc9a8[10]](/h[1-6]/i)!= -1);if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[293]][_0xc9a8[39]]()};var html=$[_0xc9a8[343]](this[_0xc9a8[293]][_0xc9a8[69]]());this[_0xc9a8[29]][_0xc9a8[344]]=this[_0xc9a8[63]][_0xc9a8[344]](html);if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])&&!this[_0xc9a8[39]][_0xc9a8[346]]()){if(this[_0xc9a8[29]][_0xc9a8[344]]){var $first;if(!this[_0xc9a8[64]][_0xc9a8[313]]){$first=this[_0xc9a8[293]][_0xc9a8[348]]()[_0xc9a8[347]]();this[_0xc9a8[33]][_0xc9a8[349]]($first);};}};this[_0xc9a8[29]][_0xc9a8[295]]=this[_0xc9a8[57]][_0xc9a8[296]]();this[_0xc9a8[29]][_0xc9a8[350]]=this[_0xc9a8[29]][_0xc9a8[295]][_0xc9a8[21]];this[_0xc9a8[29]][_0xc9a8[297]]=type;this[_0xc9a8[29]][_0xc9a8[351]]=value;this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[57]][_0xc9a8[294]]();this[_0xc9a8[29]][_0xc9a8[288]](tag);this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();this[_0xc9a8[52]][_0xc9a8[276]]();},set:function(tag){this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[29]][_0xc9a8[352]]=this[_0xc9a8[355]][_0xc9a8[354]][_0xc9a8[353]];if(this[_0xc9a8[355]][_0xc9a8[356]]){this[_0xc9a8[29]][_0xc9a8[357]](tag)}else {this[_0xc9a8[29]][_0xc9a8[358]](tag)};},setCollapsed:function(tag){if(this[_0xc9a8[64]][_0xc9a8[313]]&&this[_0xc9a8[29]][_0xc9a8[344]]&&tag!=_0xc9a8[78]){var node=document[_0xc9a8[359]](tag);this[_0xc9a8[293]][_0xc9a8[69]](node);this[_0xc9a8[33]][_0xc9a8[349]](node);return ;};var block=this[_0xc9a8[29]][_0xc9a8[295]][0];if(block===false){return };if(block[_0xc9a8[353]]==_0xc9a8[184]){if(tag!=_0xc9a8[79]){return };this[_0xc9a8[29]][_0xc9a8[360]]();return ;};var isContainerTable=(this[_0xc9a8[29]][_0xc9a8[352]]==_0xc9a8[171]||this[_0xc9a8[29]][_0xc9a8[352]]==_0xc9a8[361]);if(isContainerTable&&!this[_0xc9a8[64]][_0xc9a8[313]]){document[_0xc9a8[365]](_0xc9a8[362],false,_0xc9a8[363]+tag+_0xc9a8[364]);block=this[_0xc9a8[57]][_0xc9a8[366]]();this[_0xc9a8[29]][_0xc9a8[367]]($(block));}else {if(block[_0xc9a8[353]][_0xc9a8[368]]()!=tag){if(this[_0xc9a8[64]][_0xc9a8[313]]&&tag==_0xc9a8[78]){$(block)[_0xc9a8[370]](_0xc9a8[369]);this[_0xc9a8[63]][_0xc9a8[371]](block);}else {var $formatted=this[_0xc9a8[63]][_0xc9a8[372]](block,tag);this[_0xc9a8[29]][_0xc9a8[367]]($formatted);if(tag!=_0xc9a8[78]&&tag!=_0xc9a8[79]){$formatted[_0xc9a8[374]](_0xc9a8[148])[_0xc9a8[373]]()};if(this[_0xc9a8[29]][_0xc9a8[342]]){this[_0xc9a8[63]][_0xc9a8[375]]($formatted)};if(tag==_0xc9a8[78]||this[_0xc9a8[29]][_0xc9a8[376]]){$formatted[_0xc9a8[374]](_0xc9a8[78])[_0xc9a8[378]]()[_0xc9a8[377]]()};this[_0xc9a8[29]][_0xc9a8[379]]($formatted);}}else {if(tag==_0xc9a8[79]&&block[_0xc9a8[353]][_0xc9a8[368]]()==tag){if(this[_0xc9a8[64]][_0xc9a8[313]]){$(block)[_0xc9a8[370]](_0xc9a8[369]);this[_0xc9a8[63]][_0xc9a8[371]](block);}else {var $el=this[_0xc9a8[63]][_0xc9a8[372]](block,_0xc9a8[78]);this[_0xc9a8[29]][_0xc9a8[367]]($el);}}else {if(block[_0xc9a8[353]][_0xc9a8[368]]()==tag){this[_0xc9a8[29]][_0xc9a8[367]]($(block))}}}};if( typeof this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[14]&& typeof this[_0xc9a8[29]][_0xc9a8[351]]==_0xc9a8[14]){$(block)[_0xc9a8[380]](_0xc9a8[336])[_0xc9a8[380]](_0xc9a8[88])};},setMultiple:function(tag){var block=this[_0xc9a8[29]][_0xc9a8[295]][0];var isContainerTable=(this[_0xc9a8[29]][_0xc9a8[352]]==_0xc9a8[171]||this[_0xc9a8[29]][_0xc9a8[352]]==_0xc9a8[361]);if(block!==false&&this[_0xc9a8[29]][_0xc9a8[350]]===1){if(block[_0xc9a8[353]][_0xc9a8[368]]()==tag&&tag==_0xc9a8[79]){if(this[_0xc9a8[64]][_0xc9a8[313]]){$(block)[_0xc9a8[370]](_0xc9a8[369]);this[_0xc9a8[63]][_0xc9a8[371]](block);}else {var $el=this[_0xc9a8[63]][_0xc9a8[372]](block,_0xc9a8[78]);this[_0xc9a8[29]][_0xc9a8[367]]($el);}}else {if(block[_0xc9a8[353]]==_0xc9a8[184]){if(tag!=_0xc9a8[79]){return };this[_0xc9a8[29]][_0xc9a8[360]]();}else {if(this[_0xc9a8[29]][_0xc9a8[352]]==_0xc9a8[172]){this[_0xc9a8[29]][_0xc9a8[381]](tag)}else {if(this[_0xc9a8[64]][_0xc9a8[313]]&&((isContainerTable)||(this[_0xc9a8[355]][_0xc9a8[354]]!=block))){this[_0xc9a8[29]][_0xc9a8[382]](tag)}else {if(this[_0xc9a8[64]][_0xc9a8[313]]&&tag==_0xc9a8[78]){$(block)[_0xc9a8[383]](_0xc9a8[369])[_0xc9a8[370]](_0xc9a8[369]);this[_0xc9a8[63]][_0xc9a8[371]](block);}else {if(block[_0xc9a8[353]]===_0xc9a8[171]){this[_0xc9a8[29]][_0xc9a8[382]](tag)}else {var $formatted=this[_0xc9a8[63]][_0xc9a8[372]](block,tag);this[_0xc9a8[29]][_0xc9a8[367]]($formatted);if(this[_0xc9a8[29]][_0xc9a8[342]]){this[_0xc9a8[63]][_0xc9a8[375]]($formatted)};if(tag==_0xc9a8[78]||this[_0xc9a8[29]][_0xc9a8[376]]){$formatted[_0xc9a8[374]](_0xc9a8[78])[_0xc9a8[378]]()[_0xc9a8[377]]()};}}}}}}}else {if(this[_0xc9a8[64]][_0xc9a8[313]]||tag!=_0xc9a8[78]){if(tag==_0xc9a8[79]){var count=0;for(var i=0;i<this[_0xc9a8[29]][_0xc9a8[350]];i++){if(this[_0xc9a8[29]][_0xc9a8[295]][i][_0xc9a8[353]]==_0xc9a8[172]){count++}};if(count==this[_0xc9a8[29]][_0xc9a8[350]]){$[_0xc9a8[20]](this[_0xc9a8[29]][_0xc9a8[295]],$[_0xc9a8[312]](function(i,s){var $formatted=false;if(this[_0xc9a8[64]][_0xc9a8[313]]){$(s)[_0xc9a8[383]](_0xc9a8[369])[_0xc9a8[370]](_0xc9a8[369]);$formatted=this[_0xc9a8[63]][_0xc9a8[371]](s);}else {$formatted=this[_0xc9a8[63]][_0xc9a8[372]](s,_0xc9a8[78])};if($formatted&& typeof this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[14]&& typeof this[_0xc9a8[29]][_0xc9a8[351]]==_0xc9a8[14]){$formatted[_0xc9a8[380]](_0xc9a8[336])[_0xc9a8[380]](_0xc9a8[88])};},this));return ;};};this[_0xc9a8[29]][_0xc9a8[382]](tag);}else {var classSize=0;var toggleType=false;if(this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[336]){toggleType=_0xc9a8[367];classSize=$(this[_0xc9a8[29]][_0xc9a8[295]])[_0xc9a8[283]](_0xc9a8[12]+this[_0xc9a8[29]][_0xc9a8[351]])[_0xc9a8[21]];if(this[_0xc9a8[29]][_0xc9a8[350]]==classSize){toggleType=_0xc9a8[367]}else {if(this[_0xc9a8[29]][_0xc9a8[350]]>classSize){toggleType=_0xc9a8[288]}else {if(classSize===0){toggleType=_0xc9a8[288]}}};};var exceptTags=[_0xc9a8[92],_0xc9a8[93],_0xc9a8[154],_0xc9a8[384],_0xc9a8[385],_0xc9a8[94],_0xc9a8[386],_0xc9a8[387]];$[_0xc9a8[20]](this[_0xc9a8[29]][_0xc9a8[295]],$[_0xc9a8[312]](function(i,s){if($[_0xc9a8[341]](s[_0xc9a8[353]][_0xc9a8[368]](),exceptTags)!= -1){return };var $formatted=this[_0xc9a8[63]][_0xc9a8[372]](s,tag);if(toggleType){if(toggleType==_0xc9a8[367]){this[_0xc9a8[29]][_0xc9a8[367]]($formatted)}else {if(toggleType==_0xc9a8[373]){this[_0xc9a8[29]][_0xc9a8[373]]($formatted)}else {if(toggleType==_0xc9a8[288]){this[_0xc9a8[29]][_0xc9a8[388]]($formatted)}}}}else {this[_0xc9a8[29]][_0xc9a8[367]]($formatted)};if(tag!=_0xc9a8[78]&&tag!=_0xc9a8[79]){$formatted[_0xc9a8[374]](_0xc9a8[148])[_0xc9a8[373]]()};if(this[_0xc9a8[29]][_0xc9a8[342]]){this[_0xc9a8[63]][_0xc9a8[375]]($formatted)};if(tag==_0xc9a8[78]||this[_0xc9a8[29]][_0xc9a8[376]]){$formatted[_0xc9a8[374]](_0xc9a8[78])[_0xc9a8[378]]()[_0xc9a8[377]]()};if( typeof this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[14]&& typeof this[_0xc9a8[29]][_0xc9a8[351]]==_0xc9a8[14]){$formatted[_0xc9a8[380]](_0xc9a8[336])[_0xc9a8[380]](_0xc9a8[88])};},this));}};},setForce:function($el){if(this[_0xc9a8[29]][_0xc9a8[335]]){$el[_0xc9a8[380]](_0xc9a8[336])[_0xc9a8[380]](_0xc9a8[88])};if(this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[336]){$el[_0xc9a8[389]](this[_0xc9a8[29]][_0xc9a8[351]]);return ;}else {if(this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[307]||this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[9]){$el[_0xc9a8[307]](this[_0xc9a8[29]][_0xc9a8[351]][_0xc9a8[317]],this[_0xc9a8[29]][_0xc9a8[351]][_0xc9a8[351]]);return ;}};},toggle:function($el){if(this[_0xc9a8[29]][_0xc9a8[335]]){$el[_0xc9a8[380]](_0xc9a8[336])[_0xc9a8[380]](_0xc9a8[88])};if(this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[336]){$el[_0xc9a8[390]](this[_0xc9a8[29]][_0xc9a8[351]]);return ;}else {if(this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[307]||this[_0xc9a8[29]][_0xc9a8[297]]==_0xc9a8[9]){if($el[_0xc9a8[307]](this[_0xc9a8[29]][_0xc9a8[351]][_0xc9a8[317]])==this[_0xc9a8[29]][_0xc9a8[351]][_0xc9a8[351]]){$el[_0xc9a8[380]](this[_0xc9a8[29]][_0xc9a8[351]][_0xc9a8[317]])}else {$el[_0xc9a8[307]](this[_0xc9a8[29]][_0xc9a8[351]][_0xc9a8[317]],this[_0xc9a8[29]][_0xc9a8[351]][_0xc9a8[351]])};return ;}else {$el[_0xc9a8[380]](_0xc9a8[391]);return ;}};},remove:function($el){$el[_0xc9a8[392]](this[_0xc9a8[29]][_0xc9a8[351]])},formatListToBlockquote:function(){var block=$(this[_0xc9a8[29]][_0xc9a8[295]][0])[_0xc9a8[394]](_0xc9a8[393],this[_0xc9a8[293]][0]);$(block)[_0xc9a8[374]](_0xc9a8[393])[_0xc9a8[378]]()[_0xc9a8[377]]();$(block)[_0xc9a8[374]](_0xc9a8[154])[_0xc9a8[370]]($(_0xc9a8[369]))[_0xc9a8[378]]()[_0xc9a8[377]]();var $el=this[_0xc9a8[63]][_0xc9a8[372]](block,_0xc9a8[79]);this[_0xc9a8[29]][_0xc9a8[367]]($el);},formatBlockquote:function(tag){document[_0xc9a8[365]](_0xc9a8[76]);document[_0xc9a8[365]](_0xc9a8[362],false,tag);this[_0xc9a8[34]][_0xc9a8[395]]();this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[396])[_0xc9a8[373]]();var formatted=this[_0xc9a8[57]][_0xc9a8[366]]();if(tag!=_0xc9a8[78]){$(formatted)[_0xc9a8[374]](_0xc9a8[148])[_0xc9a8[373]]()};if(!this[_0xc9a8[64]][_0xc9a8[313]]){this[_0xc9a8[29]][_0xc9a8[367]]($(formatted))};this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[398])[_0xc9a8[20]]($[_0xc9a8[312]](this[_0xc9a8[63]][_0xc9a8[397]],this));if(this[_0xc9a8[64]][_0xc9a8[313]]&&tag==_0xc9a8[78]){this[_0xc9a8[63]][_0xc9a8[371]](formatted)};},formatWrap:function(tag){if(this[_0xc9a8[29]][_0xc9a8[352]]==_0xc9a8[182]||this[_0xc9a8[29]][_0xc9a8[352]]==_0xc9a8[183]){if(tag==_0xc9a8[79]){this[_0xc9a8[29]][_0xc9a8[360]]()}else {return }};var formatted=this[_0xc9a8[57]][_0xc9a8[303]](tag);if(formatted===false){return };var $formatted=$(formatted);this[_0xc9a8[29]][_0xc9a8[379]]($formatted);var $elements=$formatted[_0xc9a8[374]](this[_0xc9a8[64]][_0xc9a8[262]][_0xc9a8[268]](_0xc9a8[399])+_0xc9a8[400]);$elements[_0xc9a8[378]]()[_0xc9a8[377]]();if(tag!=_0xc9a8[78]&&tag!=_0xc9a8[79]){$formatted[_0xc9a8[374]](_0xc9a8[148])[_0xc9a8[373]]()};$[_0xc9a8[20]](this[_0xc9a8[29]][_0xc9a8[295]],$[_0xc9a8[312]](this[_0xc9a8[63]][_0xc9a8[397]],this));$formatted[_0xc9a8[370]](this[_0xc9a8[57]][_0xc9a8[401]](2));if(!this[_0xc9a8[64]][_0xc9a8[313]]){this[_0xc9a8[29]][_0xc9a8[367]]($formatted)};this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[398])[_0xc9a8[20]]($[_0xc9a8[312]](this[_0xc9a8[63]][_0xc9a8[397]],this));$formatted[_0xc9a8[374]](_0xc9a8[402])[_0xc9a8[373]]();if(this[_0xc9a8[29]][_0xc9a8[342]]){this[_0xc9a8[63]][_0xc9a8[375]]($formatted)};if(this[_0xc9a8[64]][_0xc9a8[313]]&&tag==_0xc9a8[78]){this[_0xc9a8[63]][_0xc9a8[371]]($formatted)};if(this[_0xc9a8[64]][_0xc9a8[313]]){var $next=$formatted[_0xc9a8[403]]()[_0xc9a8[403]]();if($next[_0xc9a8[404]]()!=0&&$next[0][_0xc9a8[353]]===_0xc9a8[405]){$next[_0xc9a8[373]]()};};},formatTableWrapping:function($formatted){if($formatted[_0xc9a8[394]](_0xc9a8[89],this[_0xc9a8[293]][0])[_0xc9a8[21]]===0){return };if($formatted[_0xc9a8[394]](_0xc9a8[406],this[_0xc9a8[293]][0])[_0xc9a8[21]]===0){$formatted[_0xc9a8[303]](_0xc9a8[407])};if($formatted[_0xc9a8[394]](_0xc9a8[384],this[_0xc9a8[293]][0])[_0xc9a8[21]]===0&&$formatted[_0xc9a8[394]](_0xc9a8[385])[_0xc9a8[21]]===0){$formatted[_0xc9a8[303]](_0xc9a8[408])};},removeData:function(name,value){var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();$(blocks)[_0xc9a8[380]](_0xc9a8[409]+name);this[_0xc9a8[35]][_0xc9a8[302]]();},setData:function(name,value){var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();$(blocks)[_0xc9a8[307]](_0xc9a8[409]+name,value);this[_0xc9a8[35]][_0xc9a8[302]]();},toggleData:function(name,value){var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();$[_0xc9a8[20]](blocks,function(){if($(this)[_0xc9a8[307]](_0xc9a8[409]+name)){$(this)[_0xc9a8[380]](_0xc9a8[409]+name)}else {$(this)[_0xc9a8[307]](_0xc9a8[409]+name,value)}});},removeAttr:function(attr,value){var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();$(blocks)[_0xc9a8[380]](attr);this[_0xc9a8[35]][_0xc9a8[302]]();},setAttr:function(attr,value){var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();$(blocks)[_0xc9a8[307]](attr,value);this[_0xc9a8[35]][_0xc9a8[302]]();},toggleAttr:function(attr,value){var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();$[_0xc9a8[20]](blocks,function(){if($(this)[_0xc9a8[307]](name)){$(this)[_0xc9a8[380]](name)}else {$(this)[_0xc9a8[307]](name,value)}});},removeClass:function(className){var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();$(blocks)[_0xc9a8[392]](className);this[_0xc9a8[63]][_0xc9a8[316]](blocks,_0xc9a8[336]);this[_0xc9a8[35]][_0xc9a8[302]]();},setClass:function(className){var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();$(blocks)[_0xc9a8[389]](className);this[_0xc9a8[35]][_0xc9a8[302]]();},toggleClass:function(className){var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();$(blocks)[_0xc9a8[390]](className);this[_0xc9a8[35]][_0xc9a8[302]]();}}},buffer:function(){return {set:function(type){if( typeof type==_0xc9a8[14]||type==_0xc9a8[410]){this[_0xc9a8[30]][_0xc9a8[411]]()}else {this[_0xc9a8[30]][_0xc9a8[412]]()}},setUndo:function(){this[_0xc9a8[57]][_0xc9a8[294]]();this[_0xc9a8[64]][_0xc9a8[30]][_0xc9a8[16]](this[_0xc9a8[293]][_0xc9a8[69]]());this[_0xc9a8[57]][_0xc9a8[301]]();},setRedo:function(){this[_0xc9a8[57]][_0xc9a8[294]]();this[_0xc9a8[64]][_0xc9a8[413]][_0xc9a8[16]](this[_0xc9a8[293]][_0xc9a8[69]]());this[_0xc9a8[57]][_0xc9a8[301]]();},getUndo:function(){this[_0xc9a8[293]][_0xc9a8[69]](this[_0xc9a8[64]][_0xc9a8[30]][_0xc9a8[414]]())},getRedo:function(){this[_0xc9a8[293]][_0xc9a8[69]](this[_0xc9a8[64]][_0xc9a8[413]][_0xc9a8[414]]())},add:function(){this[_0xc9a8[64]][_0xc9a8[30]][_0xc9a8[16]](this[_0xc9a8[293]][_0xc9a8[69]]())},undo:function(){if(this[_0xc9a8[64]][_0xc9a8[30]][_0xc9a8[21]]===0){return };this[_0xc9a8[30]][_0xc9a8[288]](_0xc9a8[415]);this[_0xc9a8[30]][_0xc9a8[416]]();this[_0xc9a8[57]][_0xc9a8[301]]();setTimeout($[_0xc9a8[312]](this[_0xc9a8[52]][_0xc9a8[276]],this),50);},redo:function(){if(this[_0xc9a8[64]][_0xc9a8[413]][_0xc9a8[21]]===0){return };this[_0xc9a8[30]][_0xc9a8[288]](_0xc9a8[410]);this[_0xc9a8[30]][_0xc9a8[417]]();this[_0xc9a8[57]][_0xc9a8[301]]();setTimeout($[_0xc9a8[312]](this[_0xc9a8[52]][_0xc9a8[276]],this),50);}}},build:function(){return {run:function(){this[_0xc9a8[31]][_0xc9a8[418]]();this[_0xc9a8[31]][_0xc9a8[419]]();this[_0xc9a8[31]][_0xc9a8[420]]();this[_0xc9a8[31]][_0xc9a8[421]]();this[_0xc9a8[31]][_0xc9a8[422]]();},isTextarea:function(){return (this[_0xc9a8[256]][0][_0xc9a8[353]]===_0xc9a8[423])},createContainerBox:function(){this[_0xc9a8[424]]=$(_0xc9a8[425])},createTextarea:function(){this[_0xc9a8[319]]=$(_0xc9a8[427])[_0xc9a8[307]](_0xc9a8[317],this[_0xc9a8[31]][_0xc9a8[426]]())},getTextareaName:function(){return (( typeof (name)==_0xc9a8[14]))?_0xc9a8[428]+this[_0xc9a8[257]]:this[_0xc9a8[256]][_0xc9a8[307]](_0xc9a8[429])},loadContent:function(){var func=(this[_0xc9a8[31]][_0xc9a8[430]]())?_0xc9a8[332]:_0xc9a8[69];this[_0xc9a8[431]]=$[_0xc9a8[343]](this[_0xc9a8[256]][func]());},enableEditor:function(){this[_0xc9a8[293]][_0xc9a8[307]]({"\x63\x6F\x6E\x74\x65\x6E\x74\x65\x64\x69\x74\x61\x62\x6C\x65":true,"\x64\x69\x72":this[_0xc9a8[64]][_0xc9a8[432]]})},loadEditor:function(){var func=(this[_0xc9a8[31]][_0xc9a8[430]]())?_0xc9a8[433]:_0xc9a8[434];this[_0xc9a8[31]][func]();},fromTextarea:function(){this[_0xc9a8[293]]=$(_0xc9a8[435]);this[_0xc9a8[319]]=this[_0xc9a8[256]];this[_0xc9a8[424]][_0xc9a8[436]](this.$element)[_0xc9a8[370]](this.$editor)[_0xc9a8[370]](this.$element);this[_0xc9a8[293]][_0xc9a8[389]](_0xc9a8[437]);this[_0xc9a8[256]][_0xc9a8[438]]();},fromElement:function(){this[_0xc9a8[293]]=this[_0xc9a8[256]];this[_0xc9a8[31]][_0xc9a8[439]]();this[_0xc9a8[424]][_0xc9a8[436]](this.$editor)[_0xc9a8[370]](this.$editor)[_0xc9a8[370]](this.$textarea);this[_0xc9a8[293]][_0xc9a8[389]](_0xc9a8[437]);this[_0xc9a8[319]][_0xc9a8[438]]();},setCodeAndCall:function(){this[_0xc9a8[35]][_0xc9a8[288]](this[_0xc9a8[431]]);this[_0xc9a8[31]][_0xc9a8[440]]();this[_0xc9a8[31]][_0xc9a8[441]]();if(this[_0xc9a8[64]][_0xc9a8[442]]){return };setTimeout($[_0xc9a8[312]](this[_0xc9a8[35]][_0xc9a8[443]],this),200);},callEditor:function(){this[_0xc9a8[31]][_0xc9a8[444]]();this[_0xc9a8[31]][_0xc9a8[445]]();this[_0xc9a8[31]][_0xc9a8[446]]();this[_0xc9a8[31]][_0xc9a8[447]]();if(this[_0xc9a8[64]][_0xc9a8[61]]){this[_0xc9a8[64]][_0xc9a8[61]]=this[_0xc9a8[61]][_0xc9a8[22]]();this[_0xc9a8[61]][_0xc9a8[31]]();};this[_0xc9a8[51]][_0xc9a8[448]]();this[_0xc9a8[31]][_0xc9a8[449]]();setTimeout($[_0xc9a8[312]](this[_0xc9a8[52]][_0xc9a8[276]],this),4);this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[22]);},setOptions:function(){$(this.$textarea)[_0xc9a8[307]](_0xc9a8[450],this[_0xc9a8[64]][_0xc9a8[432]]);if(this[_0xc9a8[64]][_0xc9a8[313]]){this[_0xc9a8[293]][_0xc9a8[389]](_0xc9a8[451])};if(this[_0xc9a8[64]][_0xc9a8[452]]){this[_0xc9a8[293]][_0xc9a8[307]](_0xc9a8[452],this[_0xc9a8[64]][_0xc9a8[452]])};if(this[_0xc9a8[64]][_0xc9a8[453]]){this[_0xc9a8[293]][_0xc9a8[305]](_0xc9a8[453],this[_0xc9a8[64]][_0xc9a8[453]])};if(this[_0xc9a8[64]][_0xc9a8[454]]){this[_0xc9a8[293]][_0xc9a8[305]](_0xc9a8[454],this[_0xc9a8[64]][_0xc9a8[454]])};},setEventDropUpload:function(e){e[_0xc9a8[455]]();if(!this[_0xc9a8[64]][_0xc9a8[456]]||!this[_0xc9a8[64]][_0xc9a8[457]]){return };var files=e[_0xc9a8[459]][_0xc9a8[458]];this[_0xc9a8[62]][_0xc9a8[460]](files[0],e);},setEventDrop:function(e){this[_0xc9a8[35]][_0xc9a8[302]]();setTimeout(this[_0xc9a8[34]][_0xc9a8[395]],1);this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[461],e);},setEvents:function(){this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[462],$[_0xc9a8[312]](function(e){e=e[_0xc9a8[463]]||e;if(window[_0xc9a8[464]]===undefined||!e[_0xc9a8[459]]){return true};if(e[_0xc9a8[459]][_0xc9a8[458]][_0xc9a8[21]]===0){return this[_0xc9a8[31]][_0xc9a8[465]](e)}else {this[_0xc9a8[31]][_0xc9a8[466]](e)};setTimeout(this[_0xc9a8[34]][_0xc9a8[395]],1);this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[461],e);},this));this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[468],$[_0xc9a8[312]](function(e){var event=this[_0xc9a8[36]][_0xc9a8[469]]();var type=(event==_0xc9a8[470]||event==_0xc9a8[471])?false:_0xc9a8[470];this[_0xc9a8[36]][_0xc9a8[472]](type);this[_0xc9a8[63]][_0xc9a8[473]]();this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[470],e);},this));this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[474],$[_0xc9a8[312]](this[_0xc9a8[54]][_0xc9a8[22]],this));this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[475],$[_0xc9a8[312]](this[_0xc9a8[35]][_0xc9a8[302]],this));this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[476],$[_0xc9a8[312]](this[_0xc9a8[44]][_0xc9a8[22]],this));this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[477],$[_0xc9a8[312]](this[_0xc9a8[45]][_0xc9a8[22]],this));if($[_0xc9a8[15]](this[_0xc9a8[64]][_0xc9a8[478]])){this[_0xc9a8[319]][_0xc9a8[467]](_0xc9a8[479],$[_0xc9a8[312]](this[_0xc9a8[64]][_0xc9a8[478]],this))};if($[_0xc9a8[15]](this[_0xc9a8[64]][_0xc9a8[480]])){this[_0xc9a8[319]][_0xc9a8[467]](_0xc9a8[481],$[_0xc9a8[312]](this[_0xc9a8[64]][_0xc9a8[480]],this))};if($[_0xc9a8[15]](this[_0xc9a8[64]][_0xc9a8[482]])){this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[483],$[_0xc9a8[312]](this[_0xc9a8[64]][_0xc9a8[482]],this))};$(document)[_0xc9a8[467]](_0xc9a8[484]+this[_0xc9a8[257]],$[_0xc9a8[312]](function(e){this[_0xc9a8[485]]=e[_0xc9a8[486]]},this));this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[487],$[_0xc9a8[312]](function(e){if(this[_0xc9a8[279]]){return };if(this[_0xc9a8[258]]){return };if(!this[_0xc9a8[31]][_0xc9a8[488]]()){return };this[_0xc9a8[63]][_0xc9a8[473]]();if($[_0xc9a8[15]](this[_0xc9a8[64]][_0xc9a8[489]])){this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[490],e)};},this));},isBlured:function(){if(this[_0xc9a8[485]]===true){return true};var $el=$(this[_0xc9a8[485]]);return (!$el[_0xc9a8[492]](_0xc9a8[491])&&!$el[_0xc9a8[494]](_0xc9a8[493])&&$el[_0xc9a8[496]](_0xc9a8[495])[_0xc9a8[21]]===0);},setHelpers:function(){if(this[_0xc9a8[49]][_0xc9a8[497]]()){this[_0xc9a8[49]][_0xc9a8[339]]()};this[_0xc9a8[55]][_0xc9a8[498]]();if(this[_0xc9a8[64]][_0xc9a8[39]]){setTimeout(this[_0xc9a8[39]][_0xc9a8[499]],100)};if(this[_0xc9a8[64]][_0xc9a8[500]]){setTimeout(this[_0xc9a8[39]][_0xc9a8[349]],100)};},plugins:function(){if(!this[_0xc9a8[64]][_0xc9a8[449]]){return };$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[449]],$[_0xc9a8[312]](function(i,s){var func=( typeof RedactorPlugins!==_0xc9a8[14]&& typeof RedactorPlugins[s]!==_0xc9a8[14])?RedactorPlugins:Redactor[_0xc9a8[5]];if(!$[_0xc9a8[15]](func[s])){return };this[s]=func[s]();var methods=this[_0xc9a8[286]](this[s]);var len=methods[_0xc9a8[21]];for(var z=0;z<len;z++){this[s][methods[z]]=this[s][methods[z]][_0xc9a8[1]](this)};if($[_0xc9a8[15]](this[s][_0xc9a8[22]])){this[s][_0xc9a8[22]]()};},this));},disableMozillaEditing:function(){if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){return };try{document[_0xc9a8[365]](_0xc9a8[501],false,false);document[_0xc9a8[365]](_0xc9a8[502],false,false);}catch(e){};},disableIeLinks:function(){if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){return };document[_0xc9a8[365]](_0xc9a8[503],false,false);}}},button:function(){return {build:function(btnName,btnObject){var $button=$(_0xc9a8[505]+btnName+_0xc9a8[506]+btnName+_0xc9a8[507])[_0xc9a8[307]]({"\x72\x6F\x6C\x65":_0xc9a8[32],"\x61\x72\x69\x61\x2D\x6C\x61\x62\x65\x6C":btnObject[_0xc9a8[504]],"\x74\x61\x62\x69\x6E\x64\x65\x78":_0xc9a8[11]});if(btnObject[_0xc9a8[508]]||btnObject[_0xc9a8[509]]||btnObject[_0xc9a8[37]]){this[_0xc9a8[32]][_0xc9a8[510]]($button,btnName,btnObject)};if(btnObject[_0xc9a8[37]]){$button[_0xc9a8[389]](_0xc9a8[512])[_0xc9a8[307]](_0xc9a8[511],true);var $dropdown=$(_0xc9a8[513]+this[_0xc9a8[257]]+_0xc9a8[514]+btnName+_0xc9a8[515]);$button[_0xc9a8[9]](_0xc9a8[37],$dropdown);this[_0xc9a8[37]][_0xc9a8[31]](btnName,$dropdown,btnObject[_0xc9a8[37]]);};if(this[_0xc9a8[63]][_0xc9a8[516]]()){this[_0xc9a8[32]][_0xc9a8[517]]($button,btnName,btnObject[_0xc9a8[504]])};return $button;},setEvent:function($button,btnName,btnObject){$button[_0xc9a8[467]](_0xc9a8[518],$[_0xc9a8[312]](function(e){if($button[_0xc9a8[492]](_0xc9a8[519])){return false};var type=_0xc9a8[508];var callback=btnObject[_0xc9a8[508]];if(btnObject[_0xc9a8[509]]){type=_0xc9a8[509];callback=btnObject[_0xc9a8[509]];}else {if(btnObject[_0xc9a8[37]]){type=_0xc9a8[37];callback=false;}};this[_0xc9a8[32]][_0xc9a8[520]](e,btnName,type,callback);},this))},createTooltip:function($button,name,title){var $tooltip=$(_0xc9a8[523])[_0xc9a8[389]](_0xc9a8[521]+this[_0xc9a8[257]]+_0xc9a8[522]+name)[_0xc9a8[438]]()[_0xc9a8[69]](title);$tooltip[_0xc9a8[524]](_0xc9a8[273]);$button[_0xc9a8[467]](_0xc9a8[525],function(){if($(this)[_0xc9a8[492]](_0xc9a8[519])){return };var pos=$button[_0xc9a8[526]]();$tooltip[_0xc9a8[527]]();$tooltip[_0xc9a8[305]]({top:(pos[_0xc9a8[528]]+$button[_0xc9a8[529]]())+_0xc9a8[530],left:(pos[_0xc9a8[531]]+$button[_0xc9a8[532]]()/2-$tooltip[_0xc9a8[532]]()/2)+_0xc9a8[530]});});$button[_0xc9a8[467]](_0xc9a8[533],function(){$tooltip[_0xc9a8[438]]()});},onClick:function(e,btnName,type,callback){this[_0xc9a8[32]][_0xc9a8[534]]=this[_0xc9a8[33]][_0xc9a8[535]]();e[_0xc9a8[455]]();if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){e[_0xc9a8[536]]=false};if(type==_0xc9a8[509]){this[_0xc9a8[42]][_0xc9a8[339]](callback)}else {if(type==_0xc9a8[37]){this[_0xc9a8[37]][_0xc9a8[527]](e,btnName)}else {this[_0xc9a8[32]][_0xc9a8[537]](e,callback,btnName)}};},onClickCallback:function(e,callback,btnName){var func;this[_0xc9a8[485]]=true;if($[_0xc9a8[15]](callback)){callback[_0xc9a8[6]](this,btnName)}else {if(callback[_0xc9a8[10]](/\./)!=_0xc9a8[11]){func=callback[_0xc9a8[13]](_0xc9a8[12]);if( typeof this[func[0]]==_0xc9a8[14]){return };this[func[0]][func[1]](btnName);}else {this[callback](btnName)}};this[_0xc9a8[52]][_0xc9a8[538]](e,btnName);},get:function(key){return this[_0xc9a8[540]][_0xc9a8[374]](_0xc9a8[539]+key)},setActive:function(key){this[_0xc9a8[32]][_0xc9a8[323]](key)[_0xc9a8[389]](_0xc9a8[541])},setInactive:function(key){this[_0xc9a8[32]][_0xc9a8[323]](key)[_0xc9a8[392]](_0xc9a8[541])},setInactiveAll:function(key){if( typeof key===_0xc9a8[14]){this[_0xc9a8[540]][_0xc9a8[374]](_0xc9a8[542])[_0xc9a8[392]](_0xc9a8[541])}else {this[_0xc9a8[540]][_0xc9a8[374]](_0xc9a8[542])[_0xc9a8[544]](_0xc9a8[543]+key)[_0xc9a8[392]](_0xc9a8[541])}},setActiveInVisual:function(){this[_0xc9a8[540]][_0xc9a8[374]](_0xc9a8[542])[_0xc9a8[544]](_0xc9a8[545])[_0xc9a8[392]](_0xc9a8[519])},setInactiveInCode:function(){this[_0xc9a8[540]][_0xc9a8[374]](_0xc9a8[542])[_0xc9a8[544]](_0xc9a8[545])[_0xc9a8[389]](_0xc9a8[519])},changeIcon:function(key,classname){this[_0xc9a8[32]][_0xc9a8[323]](key)[_0xc9a8[389]](_0xc9a8[546]+classname)},removeIcon:function(key,classname){this[_0xc9a8[32]][_0xc9a8[323]](key)[_0xc9a8[392]](_0xc9a8[546]+classname)},setAwesome:function(key,name){var $button=this[_0xc9a8[32]][_0xc9a8[323]](key);$button[_0xc9a8[392]](_0xc9a8[548])[_0xc9a8[389]](_0xc9a8[547]);$button[_0xc9a8[69]](_0xc9a8[549]+name+_0xc9a8[550]);},addCallback:function($btn,callback){if($btn==_0xc9a8[30]){return };var type=(callback==_0xc9a8[37])?_0xc9a8[37]:_0xc9a8[508];var key=$btn[_0xc9a8[307]](_0xc9a8[551]);$btn[_0xc9a8[467]](_0xc9a8[518],$[_0xc9a8[312]](function(e){if($btn[_0xc9a8[492]](_0xc9a8[519])){return false};this[_0xc9a8[32]][_0xc9a8[520]](e,key,type,callback);},this));},addDropdown:function($btn,dropdown){$btn[_0xc9a8[389]](_0xc9a8[512])[_0xc9a8[307]](_0xc9a8[511],true);var key=$btn[_0xc9a8[307]](_0xc9a8[551]);this[_0xc9a8[32]][_0xc9a8[552]]($btn,_0xc9a8[37]);var $dropdown=$(_0xc9a8[513]+this[_0xc9a8[257]]+_0xc9a8[514]+key+_0xc9a8[515]);$btn[_0xc9a8[9]](_0xc9a8[37],$dropdown);if(dropdown){this[_0xc9a8[37]][_0xc9a8[31]](key,$dropdown,dropdown)};return $dropdown;},add:function(key,title){if(!this[_0xc9a8[64]][_0xc9a8[61]]){return };if(this[_0xc9a8[32]][_0xc9a8[553]](key)){return _0xc9a8[30]};var btn=this[_0xc9a8[32]][_0xc9a8[31]](key,{title:title});btn[_0xc9a8[389]](_0xc9a8[548]);this[_0xc9a8[540]][_0xc9a8[370]]($(_0xc9a8[554])[_0xc9a8[370]](btn));return btn;},addFirst:function(key,title){if(!this[_0xc9a8[64]][_0xc9a8[61]]){return };if(this[_0xc9a8[32]][_0xc9a8[553]](key)){return _0xc9a8[30]};var btn=this[_0xc9a8[32]][_0xc9a8[31]](key,{title:title});btn[_0xc9a8[389]](_0xc9a8[548]);this[_0xc9a8[540]][_0xc9a8[383]]($(_0xc9a8[554])[_0xc9a8[370]](btn));return btn;},addAfter:function(afterkey,key,title){if(!this[_0xc9a8[64]][_0xc9a8[61]]){return };if(this[_0xc9a8[32]][_0xc9a8[553]](key)){return _0xc9a8[30]};var btn=this[_0xc9a8[32]][_0xc9a8[31]](key,{title:title});btn[_0xc9a8[389]](_0xc9a8[548]);var $btn=this[_0xc9a8[32]][_0xc9a8[323]](afterkey);if($btn[_0xc9a8[21]]!==0){$btn[_0xc9a8[556]]()[_0xc9a8[555]]($(_0xc9a8[554])[_0xc9a8[370]](btn))}else {this[_0xc9a8[540]][_0xc9a8[370]]($(_0xc9a8[554])[_0xc9a8[370]](btn))};return btn;},addBefore:function(beforekey,key,title){if(!this[_0xc9a8[64]][_0xc9a8[61]]){return };if(this[_0xc9a8[32]][_0xc9a8[553]](key)){return _0xc9a8[30]};var btn=this[_0xc9a8[32]][_0xc9a8[31]](key,{title:title});btn[_0xc9a8[389]](_0xc9a8[548]);var $btn=this[_0xc9a8[32]][_0xc9a8[323]](beforekey);if($btn[_0xc9a8[21]]!==0){$btn[_0xc9a8[556]]()[_0xc9a8[557]]($(_0xc9a8[554])[_0xc9a8[370]](btn))}else {this[_0xc9a8[540]][_0xc9a8[370]]($(_0xc9a8[554])[_0xc9a8[370]](btn))};return btn;},remove:function(key){this[_0xc9a8[32]][_0xc9a8[323]](key)[_0xc9a8[373]]()},isMobileUndoRedo:function(key){return (key==_0xc9a8[410]||key==_0xc9a8[415])&&!this[_0xc9a8[63]][_0xc9a8[516]]()}}},caret:function(){return {setStart:function(node){if(!this[_0xc9a8[63]][_0xc9a8[558]](node)){var space=this[_0xc9a8[63]][_0xc9a8[559]]();$(node)[_0xc9a8[383]](space);this[_0xc9a8[33]][_0xc9a8[349]](space);}else {this[_0xc9a8[33]][_0xc9a8[288]](node,0,node,0)}},setEnd:function(node){node=node[0]||node;if(node[_0xc9a8[561]][_0xc9a8[560]]==1){return this[_0xc9a8[33]][_0xc9a8[562]](node[_0xc9a8[561]])};this[_0xc9a8[33]][_0xc9a8[288]](node,1,node,1);},set:function(orgn,orgo,focn,foco){orgn=orgn[0]||orgn;focn=focn[0]||focn;if(this[_0xc9a8[63]][_0xc9a8[563]](orgn[_0xc9a8[353]])&&orgn[_0xc9a8[564]]===_0xc9a8[287]){orgn[_0xc9a8[564]]=this[_0xc9a8[64]][_0xc9a8[565]]};if(orgn[_0xc9a8[353]]==_0xc9a8[405]&&this[_0xc9a8[64]][_0xc9a8[313]]===false){var parent=$(this[_0xc9a8[64]][_0xc9a8[566]])[0];$(orgn)[_0xc9a8[315]](parent);orgn=parent;focn=orgn;};this[_0xc9a8[57]][_0xc9a8[323]]();try{this[_0xc9a8[355]][_0xc9a8[499]](orgn,orgo);this[_0xc9a8[355]][_0xc9a8[349]](focn,foco);}catch(e){};this[_0xc9a8[57]][_0xc9a8[567]]();},setAfter:function(node){try{var tag=$(node)[0][_0xc9a8[353]];if(tag!=_0xc9a8[405]&&!this[_0xc9a8[63]][_0xc9a8[558]](node)){var space=this[_0xc9a8[63]][_0xc9a8[559]]();$(node)[_0xc9a8[555]](space);this[_0xc9a8[33]][_0xc9a8[349]](space);}else {if(tag!=_0xc9a8[405]&&this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[33]][_0xc9a8[499]]($(node)[_0xc9a8[403]]())}else {this[_0xc9a8[33]][_0xc9a8[568]](node,_0xc9a8[555])}};}catch(e){var space=this[_0xc9a8[63]][_0xc9a8[559]]();$(node)[_0xc9a8[555]](space);this[_0xc9a8[33]][_0xc9a8[349]](space);}},setBefore:function(node){if(this[_0xc9a8[63]][_0xc9a8[558]](node)){this[_0xc9a8[33]][_0xc9a8[349]]($(node)[_0xc9a8[569]]())}else {this[_0xc9a8[33]][_0xc9a8[568]](node,_0xc9a8[557])}},setAfterOrBefore:function(node,type){if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[293]][_0xc9a8[39]]()};node=node[0]||node;this[_0xc9a8[57]][_0xc9a8[323]]();if(type==_0xc9a8[555]){try{this[_0xc9a8[355]][_0xc9a8[570]](node);this[_0xc9a8[355]][_0xc9a8[571]](node);}catch(e){}}else {try{this[_0xc9a8[355]][_0xc9a8[572]](node);this[_0xc9a8[355]][_0xc9a8[573]](node);}catch(e){}};this[_0xc9a8[355]][_0xc9a8[574]](false);this[_0xc9a8[57]][_0xc9a8[567]]();},getOffsetOfElement:function(node){node=node[0]||node;this[_0xc9a8[57]][_0xc9a8[323]]();var cloned=this[_0xc9a8[355]][_0xc9a8[575]]();cloned[_0xc9a8[576]](node);cloned[_0xc9a8[349]](this[_0xc9a8[355]][_0xc9a8[577]],this[_0xc9a8[355]][_0xc9a8[578]]);return $[_0xc9a8[343]](cloned.toString())[_0xc9a8[21]];},getOffset:function(){var offset=0;var sel=window[_0xc9a8[579]]();if(sel[_0xc9a8[580]]>0){var range=window[_0xc9a8[579]]()[_0xc9a8[581]](0);var caretRange=range[_0xc9a8[575]]();caretRange[_0xc9a8[576]](this[_0xc9a8[293]][0]);caretRange[_0xc9a8[349]](range[_0xc9a8[577]],range[_0xc9a8[578]]);offset=caretRange.toString()[_0xc9a8[21]];};return offset;},setOffset:function(start,end){if( typeof end==_0xc9a8[14]){end=start};if(!this[_0xc9a8[39]][_0xc9a8[346]]()){this[_0xc9a8[39]][_0xc9a8[499]]()};var sel=this[_0xc9a8[57]][_0xc9a8[323]]();var node,offset=0;var walker=document[_0xc9a8[582]](this[_0xc9a8[293]][0],NodeFilter.SHOW_TEXT,null,null);while(node==walker[_0xc9a8[584]]()){offset+=node[_0xc9a8[583]][_0xc9a8[21]];if(offset>start){this[_0xc9a8[355]][_0xc9a8[499]](node,node[_0xc9a8[583]][_0xc9a8[21]]+start-offset);start=Infinity;};if(offset>=end){this[_0xc9a8[355]][_0xc9a8[349]](node,node[_0xc9a8[583]][_0xc9a8[21]]+end-offset);break ;};};this[_0xc9a8[355]][_0xc9a8[574]](false);this[_0xc9a8[57]][_0xc9a8[567]]();},setToPoint:function(start,end){this[_0xc9a8[33]][_0xc9a8[585]](start,end)},getCoords:function(){return this[_0xc9a8[33]][_0xc9a8[535]]()}}},clean:function(){return {onSet:function(html){html=html[_0xc9a8[587]](/<script(.*?[^>]?)>([\w\W]*?)<\/script>/gi,_0xc9a8[586]);html=html[_0xc9a8[587]](/\$/g,_0xc9a8[588]);html=html[_0xc9a8[587]](/<a href="(.*?[^>]?)®(.*?[^>]?)">/gi,_0xc9a8[589]);if(this[_0xc9a8[64]][_0xc9a8[590]]){html=this[_0xc9a8[34]][_0xc9a8[590]](html)};if(this[_0xc9a8[64]][_0xc9a8[313]]){html=this[_0xc9a8[34]][_0xc9a8[591]](html)};html=this[_0xc9a8[34]][_0xc9a8[592]](html);var $div=$(_0xc9a8[593]);$div[_0xc9a8[69]](html);var fonts=$div[_0xc9a8[374]](_0xc9a8[594]);if(fonts[_0xc9a8[21]]!==0){fonts[_0xc9a8[315]](function(){var $el=$(this);var $span=$(_0xc9a8[523])[_0xc9a8[307]](_0xc9a8[88],$el[_0xc9a8[307]](_0xc9a8[88]));return $span[_0xc9a8[370]]($el[_0xc9a8[378]]());});html=$div[_0xc9a8[69]]();};$div[_0xc9a8[373]]();html=html[_0xc9a8[587]](/<font(.*?[^<])>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<\/font>/gi,_0xc9a8[287]);html=this[_0xc9a8[60]][_0xc9a8[276]](html);if(this[_0xc9a8[64]][_0xc9a8[53]]){html=this[_0xc9a8[53]][_0xc9a8[276]](html)};html=this[_0xc9a8[34]][_0xc9a8[595]](html);html=this[_0xc9a8[34]][_0xc9a8[596]](html);html=html[_0xc9a8[587]](/&amp;/g,_0xc9a8[597]);return html;},onSync:function(html){html=html[_0xc9a8[587]](/\u200B/g,_0xc9a8[287]);html=html[_0xc9a8[587]](/&#x200b;/gi,_0xc9a8[287]);if(this[_0xc9a8[64]][_0xc9a8[598]]){html=html[_0xc9a8[587]](/&nbsp;/gi,_0xc9a8[599])};if(html[_0xc9a8[10]](/^<p>(||\s||<br\s?\/?>||&nbsp;)<\/p>$/i)!= -1){return _0xc9a8[287]};html=html[_0xc9a8[587]](/<pre class="redactor-script-tag" style="display: none;"(.*?[^>]?)>([\w\W]*?)<\/pre>/gi,_0xc9a8[600]);html=this[_0xc9a8[34]][_0xc9a8[601]](html);var chars={"\u2122":_0xc9a8[602],"\xA9":_0xc9a8[603],"\u2026":_0xc9a8[604],"\u2014":_0xc9a8[605],"\u2010":_0xc9a8[606]};$[_0xc9a8[20]](chars,function(i,s){html=html[_0xc9a8[587]]( new RegExp(i,_0xc9a8[607]),s)});if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){html=html[_0xc9a8[587]](/<br\s?\/?>$/gi,_0xc9a8[287])};html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[608],_0xc9a8[609]),_0xc9a8[610]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[611],_0xc9a8[609]),_0xc9a8[610]);html=html[_0xc9a8[587]](/<(.*?)rel="\s*?"(.*?[^>]?)>/gi,_0xc9a8[612]);html=html[_0xc9a8[587]](/<(.*?)style="\s*?"(.*?[^>]?)>/gi,_0xc9a8[612]);html=html[_0xc9a8[587]](/="">/gi,_0xc9a8[364]);html=html[_0xc9a8[587]](/""">/gi,_0xc9a8[613]);html=html[_0xc9a8[587]](/"">/gi,_0xc9a8[613]);html=html[_0xc9a8[587]](/<div(.*?[^>]) data-tagblock="redactor"(.*?[^>])>/gi,_0xc9a8[614]);html=html[_0xc9a8[587]](/<(.*?) data-verified="redactor"(.*?[^>])>/gi,_0xc9a8[615]);var $div=$(_0xc9a8[617])[_0xc9a8[69]]($[_0xc9a8[616]](html,document,true));$div[_0xc9a8[374]](_0xc9a8[130])[_0xc9a8[380]](_0xc9a8[551]);$div[_0xc9a8[374]](_0xc9a8[618])[_0xc9a8[20]](function(){$(this)[_0xc9a8[378]]()[_0xc9a8[377]]()});html=$div[_0xc9a8[69]]();html=html[_0xc9a8[587]](/<img(.*?[^>])rel="(.*?[^>])"(.*?[^>])>/gi,_0xc9a8[619]);html=html[_0xc9a8[587]](/<span class="redactor-invisible-space">(.*?)<\/span>/gi,_0xc9a8[620]);html=html[_0xc9a8[587]](/ data-save-url="(.*?[^>])"/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<span(.*?)id="redactor-image-box"(.*?[^>])>([\w\W]*?)<img(.*?)><\/span>/gi,_0xc9a8[621]);html=html[_0xc9a8[587]](/<span(.*?)id="redactor-image-resizer"(.*?[^>])>(.*?)<\/span>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<span(.*?)id="redactor-image-editter"(.*?[^>])>(.*?)<\/span>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<font(.*?[^<])>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<\/font>/gi,_0xc9a8[287]);html=this[_0xc9a8[60]][_0xc9a8[276]](html);if(this[_0xc9a8[64]][_0xc9a8[622]]){html=html[_0xc9a8[587]](/<a(.*?)rel="nofollow"(.*?[^>])>/gi,_0xc9a8[623]);html=html[_0xc9a8[587]](/<a(.*?[^>])>/gi,_0xc9a8[624]);};html=html[_0xc9a8[587]](/\sdata-redactor-(tag|class|style)="(.*?[^>])"/gi,_0xc9a8[287]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[625],_0xc9a8[609]),_0xc9a8[615]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[626],_0xc9a8[609]),_0xc9a8[627]);html=html[_0xc9a8[587]](/&amp;/g,_0xc9a8[597]);return html;},onPaste:function(html,setMode){html=$[_0xc9a8[343]](html);html=html[_0xc9a8[587]](/\$/g,_0xc9a8[588]);html=html[_0xc9a8[587]](/<span class="s[0-9]">/gi,_0xc9a8[523]);html=html[_0xc9a8[587]](/<span class="Apple-converted-space">&nbsp;<\/span>/gi,_0xc9a8[599]);html=html[_0xc9a8[587]](/<span class="Apple-tab-span"[^>]*>\t<\/span>/gi,_0xc9a8[628]);html=html[_0xc9a8[587]](/<span[^>]*>(\s|&nbsp;)<\/span>/gi,_0xc9a8[599]);if(this[_0xc9a8[64]][_0xc9a8[629]]){return this[_0xc9a8[34]][_0xc9a8[630]](html)};if(!this[_0xc9a8[63]][_0xc9a8[631]]()&& typeof setMode==_0xc9a8[14]){if(this[_0xc9a8[63]][_0xc9a8[633]]([_0xc9a8[174],_0xc9a8[632]])){return this[_0xc9a8[34]][_0xc9a8[630]](html,false)};if(this[_0xc9a8[63]][_0xc9a8[633]](_0xc9a8[181])){html=html[_0xc9a8[587]](/”/g,_0xc9a8[634]);html=html[_0xc9a8[587]](/“/g,_0xc9a8[634]);html=html[_0xc9a8[587]](/‘/g,_0xc9a8[635]);html=html[_0xc9a8[587]](/’/g,_0xc9a8[635]);return this[_0xc9a8[34]][_0xc9a8[636]](html);};if(this[_0xc9a8[63]][_0xc9a8[633]]([_0xc9a8[172],_0xc9a8[161],_0xc9a8[162],_0xc9a8[163],_0xc9a8[164],_0xc9a8[165],_0xc9a8[166]])){html=this[_0xc9a8[34]][_0xc9a8[637]](html);if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){var block=this[_0xc9a8[57]][_0xc9a8[366]]();if(block&&block[_0xc9a8[353]]==_0xc9a8[160]){html=html[_0xc9a8[587]](/<img(.*?)>/gi,_0xc9a8[638])};};return html;};if(this[_0xc9a8[63]][_0xc9a8[633]]([_0xc9a8[171]])){html=this[_0xc9a8[34]][_0xc9a8[639]](html,_0xc9a8[384]);if(this[_0xc9a8[64]][_0xc9a8[313]]){html=this[_0xc9a8[34]][_0xc9a8[591]](html)};html=this[_0xc9a8[34]][_0xc9a8[640]](html);return html;};if(this[_0xc9a8[63]][_0xc9a8[633]]([_0xc9a8[184]])){return this[_0xc9a8[34]][_0xc9a8[639]](html,_0xc9a8[154])};};html=this[_0xc9a8[34]][_0xc9a8[641]](html,setMode);if(!this[_0xc9a8[34]][_0xc9a8[642]]){if(this[_0xc9a8[64]][_0xc9a8[313]]){html=this[_0xc9a8[34]][_0xc9a8[591]](html)};if(this[_0xc9a8[64]][_0xc9a8[590]]){html=this[_0xc9a8[34]][_0xc9a8[590]](html)};html=this[_0xc9a8[34]][_0xc9a8[592]](html);};html=this[_0xc9a8[34]][_0xc9a8[643]](html);html=this[_0xc9a8[34]][_0xc9a8[644]](html);html=this[_0xc9a8[34]][_0xc9a8[639]](html,_0xc9a8[645]);if(!this[_0xc9a8[34]][_0xc9a8[642]]&&this[_0xc9a8[64]][_0xc9a8[53]]){html=this[_0xc9a8[53]][_0xc9a8[276]](html)};html=this[_0xc9a8[34]][_0xc9a8[646]](html);html=this[_0xc9a8[34]][_0xc9a8[647]](html);html=this[_0xc9a8[34]][_0xc9a8[648]](html);html=this[_0xc9a8[34]][_0xc9a8[596]](html);return html;},onPasteWord:function(html){html=html[_0xc9a8[587]](/<!--[\s\S]*?-->/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<style[^>]*>[\s\S]*?<\/style>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<o\:p[^>]*>[\s\S]*?<\/o\:p>/gi,_0xc9a8[287]);if(html[_0xc9a8[649]](/class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i)){html=html[_0xc9a8[587]](/<!--[\s\S]+?-->/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<(\/?)s>/gi,_0xc9a8[650]);html=html[_0xc9a8[587]](/ /gi,_0xc9a8[599]);html=html[_0xc9a8[587]](/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(str,spaces){return (spaces[_0xc9a8[21]]>0)?spaces[_0xc9a8[587]](/./,_0xc9a8[599])[_0xc9a8[7]](Math[_0xc9a8[652]](spaces[_0xc9a8[21]]/2))[_0xc9a8[13]](_0xc9a8[287])[_0xc9a8[268]](_0xc9a8[651]):_0xc9a8[287]});html=this[_0xc9a8[34]][_0xc9a8[653]](html);html=html[_0xc9a8[587]](/<img(.*?)v:shapes=(.*?)>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/src="file\:\/\/(.*?)"/,_0xc9a8[654]);var $div=$(_0xc9a8[617])[_0xc9a8[69]](html);var lastList=false;var lastLevel=1;var listsIds=[];$div[_0xc9a8[374]](_0xc9a8[662])[_0xc9a8[20]](function(){var matches=$(this)[_0xc9a8[307]](_0xc9a8[88])[_0xc9a8[649]](/mso\-list\:l([0-9]+)\slevel([0-9]+)/);if(matches){var currentList=parseInt(matches[1]);var currentLevel=parseInt(matches[2]);var listType=$(this)[_0xc9a8[69]]()[_0xc9a8[649]](/^[\w]+\./)?_0xc9a8[93]:_0xc9a8[92];var $li=$(_0xc9a8[655])[_0xc9a8[69]]($(this)[_0xc9a8[69]]());$li[_0xc9a8[69]]($li[_0xc9a8[69]]()[_0xc9a8[587]](/^([\w\.]+)</,_0xc9a8[363]));$li[_0xc9a8[374]](_0xc9a8[656])[_0xc9a8[373]]();if(currentLevel==1&&$[_0xc9a8[341]](currentList,listsIds)== -1){var $list=$(_0xc9a8[363]+listType+_0xc9a8[657])[_0xc9a8[307]]({"\x64\x61\x74\x61\x2D\x6C\x65\x76\x65\x6C":currentLevel,"\x64\x61\x74\x61\x2D\x6C\x69\x73\x74":currentList})[_0xc9a8[69]]($li);$(this)[_0xc9a8[315]]($list);lastList=currentList;listsIds[_0xc9a8[16]](currentList);}else {if(currentLevel>lastLevel){var $prevList=$div[_0xc9a8[374]](_0xc9a8[658]+lastLevel+_0xc9a8[659]+lastList+_0xc9a8[660]);var $lastList=$prevList;for(var i=lastLevel;i<currentLevel;i++){$list=$(_0xc9a8[363]+listType+_0xc9a8[657]);$list[_0xc9a8[524]]($lastList[_0xc9a8[374]](_0xc9a8[154])[_0xc9a8[661]]());$lastList=$list;};$lastList[_0xc9a8[307]]({"\x64\x61\x74\x61\x2D\x6C\x65\x76\x65\x6C":currentLevel,"\x64\x61\x74\x61\x2D\x6C\x69\x73\x74":currentList})[_0xc9a8[69]]($li);}else {var $prevList=$div[_0xc9a8[374]](_0xc9a8[658]+currentLevel+_0xc9a8[659]+currentList+_0xc9a8[660])[_0xc9a8[661]]();$prevList[_0xc9a8[370]]($li);};lastLevel=currentLevel;lastList=currentList;$(this)[_0xc9a8[373]]();};};});$div[_0xc9a8[374]](_0xc9a8[664])[_0xc9a8[380]](_0xc9a8[663]);html=$div[_0xc9a8[69]]();html=html[_0xc9a8[587]](/·/g,_0xc9a8[287]);html=html[_0xc9a8[587]](/<p class="Mso(.*?)"/gi,_0xc9a8[665]);html=html[_0xc9a8[587]](/ class=\"(mso[^\"]*)\"/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/ class=(mso\w+)/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<o:p(.*?)>([\w\W]*?)<\/o:p>/gi,_0xc9a8[666]);html=html[_0xc9a8[587]](/\n/g,_0xc9a8[599]);html=html[_0xc9a8[587]](/<p>\n?<li>/gi,_0xc9a8[554]);};return html;},onPasteExtra:function(html){html=html[_0xc9a8[587]](/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi,_0xc9a8[666]);html=html[_0xc9a8[587]](/<b(.*?)id="docs-internal-guid(.*?)">([\w\W]*?)<\/b>/gi,_0xc9a8[667]);html=html[_0xc9a8[587]](/<span[^>]*(font-style: italic; font-weight: bold|font-weight: bold; font-style: italic)[^>]*>/gi,_0xc9a8[668]);html=html[_0xc9a8[587]](/<span[^>]*font-style: italic[^>]*>/gi,_0xc9a8[669]);html=html[_0xc9a8[587]](/<span[^>]*font-weight: bold[^>]*>/gi,_0xc9a8[670]);html=html[_0xc9a8[587]](/<span[^>]*text-decoration: underline[^>]*>/gi,_0xc9a8[671]);html=html[_0xc9a8[587]](/<img>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/\n{3,}/gi,_0xc9a8[672]);html=html[_0xc9a8[587]](/<font(.*?)>([\w\W]*?)<\/font>/gi,_0xc9a8[666]);html=html[_0xc9a8[587]](/<p><p>/gi,_0xc9a8[673]);html=html[_0xc9a8[587]](/<\/p><\/p>/gi,_0xc9a8[674]);html=html[_0xc9a8[587]](/<li>(\s*|\t*|\n*)<p>/gi,_0xc9a8[554]);html=html[_0xc9a8[587]](/<\/p>(\s*|\t*|\n*)<\/li>/gi,_0xc9a8[610]);html=html[_0xc9a8[587]](/<\/p>\s<p/gi,_0xc9a8[675]);html=html[_0xc9a8[587]](/<img src="webkit-fake-url\:\/\/(.*?)"(.*?)>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<p>•([\w\W]*?)<\/p>/gi,_0xc9a8[676]);if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){html=html[_0xc9a8[587]](/<br\s?\/?>$/gi,_0xc9a8[287])};return html;},onPasteTidy:function(html,type){var tags=[_0xc9a8[130],_0xc9a8[147],_0xc9a8[80],_0xc9a8[79],_0xc9a8[152],_0xc9a8[126],_0xc9a8[123],_0xc9a8[35],_0xc9a8[157],_0xc9a8[158],_0xc9a8[96],_0xc9a8[153],_0xc9a8[159],_0xc9a8[156],_0xc9a8[677],_0xc9a8[150],_0xc9a8[149],_0xc9a8[122],_0xc9a8[151],_0xc9a8[128],_0xc9a8[121],_0xc9a8[93],_0xc9a8[92],_0xc9a8[154],_0xc9a8[94],_0xc9a8[386],_0xc9a8[387],_0xc9a8[78],_0xc9a8[678],_0xc9a8[679],_0xc9a8[680],_0xc9a8[103],_0xc9a8[681],_0xc9a8[682],_0xc9a8[102],_0xc9a8[148],_0xc9a8[89],_0xc9a8[384],_0xc9a8[385],_0xc9a8[406],_0xc9a8[683],_0xc9a8[684],_0xc9a8[685],_0xc9a8[81],_0xc9a8[82],_0xc9a8[83],_0xc9a8[84],_0xc9a8[85],_0xc9a8[86]];var tagsEmpty=false;var attrAllowed=[[_0xc9a8[147],_0xc9a8[686]],[_0xc9a8[148],[_0xc9a8[687],_0xc9a8[688]]],[_0xc9a8[130],[_0xc9a8[336],_0xc9a8[551],_0xc9a8[689]]],[_0xc9a8[103],_0xc9a8[686]],[_0xc9a8[679],_0xc9a8[686]],[_0xc9a8[680],_0xc9a8[686]],[_0xc9a8[681],_0xc9a8[686]],[_0xc9a8[102],_0xc9a8[686]],[_0xc9a8[682],_0xc9a8[686]],[_0xc9a8[322],_0xc9a8[686]]];if(type==_0xc9a8[645]){tagsEmpty=[_0xc9a8[78],_0xc9a8[130],_0xc9a8[81],_0xc9a8[82],_0xc9a8[83],_0xc9a8[84],_0xc9a8[85],_0xc9a8[86]];attrAllowed=[[_0xc9a8[89],_0xc9a8[336]],[_0xc9a8[384],[_0xc9a8[690],_0xc9a8[691]]],[_0xc9a8[147],_0xc9a8[686]],[_0xc9a8[148],[_0xc9a8[687],_0xc9a8[688],_0xc9a8[692]]],[_0xc9a8[130],[_0xc9a8[336],_0xc9a8[551],_0xc9a8[689]]],[_0xc9a8[103],_0xc9a8[686]],[_0xc9a8[679],_0xc9a8[686]],[_0xc9a8[680],_0xc9a8[686]],[_0xc9a8[681],_0xc9a8[686]],[_0xc9a8[102],_0xc9a8[686]],[_0xc9a8[682],_0xc9a8[686]],[_0xc9a8[322],_0xc9a8[686]]];}else {if(type==_0xc9a8[384]){tags=[_0xc9a8[92],_0xc9a8[93],_0xc9a8[154],_0xc9a8[130],_0xc9a8[147],_0xc9a8[152],_0xc9a8[126],_0xc9a8[123],_0xc9a8[35],_0xc9a8[157],_0xc9a8[158],_0xc9a8[153],_0xc9a8[159],_0xc9a8[156],_0xc9a8[677],_0xc9a8[150],_0xc9a8[149],_0xc9a8[122],_0xc9a8[151],_0xc9a8[128],_0xc9a8[121],_0xc9a8[93],_0xc9a8[92],_0xc9a8[154],_0xc9a8[94],_0xc9a8[386],_0xc9a8[387],_0xc9a8[678],_0xc9a8[103],_0xc9a8[679],_0xc9a8[680],_0xc9a8[681],_0xc9a8[682],_0xc9a8[102],_0xc9a8[148],_0xc9a8[81],_0xc9a8[82],_0xc9a8[83],_0xc9a8[84],_0xc9a8[85],_0xc9a8[86]]}else {if(type==_0xc9a8[154]){tags=[_0xc9a8[92],_0xc9a8[93],_0xc9a8[154],_0xc9a8[130],_0xc9a8[147],_0xc9a8[152],_0xc9a8[126],_0xc9a8[123],_0xc9a8[35],_0xc9a8[157],_0xc9a8[158],_0xc9a8[153],_0xc9a8[159],_0xc9a8[156],_0xc9a8[677],_0xc9a8[150],_0xc9a8[149],_0xc9a8[122],_0xc9a8[151],_0xc9a8[128],_0xc9a8[121],_0xc9a8[678],_0xc9a8[103],_0xc9a8[679],_0xc9a8[680],_0xc9a8[681],_0xc9a8[682],_0xc9a8[102],_0xc9a8[148]]}}};var options={deniedTags:(this[_0xc9a8[64]][_0xc9a8[271]])?this[_0xc9a8[64]][_0xc9a8[271]]:false,allowedTags:(this[_0xc9a8[64]][_0xc9a8[693]])?this[_0xc9a8[64]][_0xc9a8[693]]:tags,removeComments:true,removePhp:true,removeAttr:(this[_0xc9a8[64]][_0xc9a8[380]])?this[_0xc9a8[64]][_0xc9a8[380]]:false,allowedAttr:(this[_0xc9a8[64]][_0xc9a8[694]])?this[_0xc9a8[64]][_0xc9a8[694]]:attrAllowed,removeEmpty:tagsEmpty};return this[_0xc9a8[60]][_0xc9a8[276]](html,options);},onPasteRemoveEmpty:function(html){html=html[_0xc9a8[587]](/<(p|h[1-6])>(|\s|\n|\t|<br\s?\/?>)<\/(p|h[1-6])>/gi,_0xc9a8[287]);if(!this[_0xc9a8[64]][_0xc9a8[313]]){html=html[_0xc9a8[587]](/<br>$/i,_0xc9a8[287])};return html;},onPasteRemoveSpans:function(html){html=html[_0xc9a8[587]](/<span>(.*?)<\/span>/gi,_0xc9a8[620]);html=html[_0xc9a8[587]](/<span[^>]*>\s|&nbsp;<\/span>/gi,_0xc9a8[599]);return html;},onPasteIeFixLinks:function(html){if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){return html};var tmp=$[_0xc9a8[343]](html);if(tmp[_0xc9a8[10]](/^<a(.*?)>(.*?)<\/a>$/i)===0){html=html[_0xc9a8[587]](/^<a(.*?)>(.*?)<\/a>$/i,_0xc9a8[666])};return html;},isSingleLine:function(html,setMode){this[_0xc9a8[34]][_0xc9a8[642]]=false;if(!this[_0xc9a8[63]][_0xc9a8[631]]()&& typeof setMode==_0xc9a8[14]){var blocks=this[_0xc9a8[64]][_0xc9a8[262]][_0xc9a8[268]](_0xc9a8[267])[_0xc9a8[587]](_0xc9a8[696],_0xc9a8[287])[_0xc9a8[587]](_0xc9a8[695],_0xc9a8[287]);var matchBlocks=html[_0xc9a8[649]]( new RegExp(_0xc9a8[697]+blocks+_0xc9a8[698],_0xc9a8[609]));var matchContainers=html[_0xc9a8[649]](/<\/(p|div)>/gi);if(!matchBlocks&&(matchContainers===null||(matchContainers&&matchContainers[_0xc9a8[21]]<=1))){var matchBR=html[_0xc9a8[649]](/<br\s?\/?>/gi);if(!matchBR){this[_0xc9a8[34]][_0xc9a8[642]]=true;html=html[_0xc9a8[587]](/<\/?(p|div)(.*?)>/gi,_0xc9a8[287]);};};};return html;},stripTags:function(input,allowed){allowed=(((allowed||_0xc9a8[287])+_0xc9a8[287])[_0xc9a8[368]]()[_0xc9a8[649]](/<[a-z][a-z0-9]*>/g)||[])[_0xc9a8[268]](_0xc9a8[287]);var tags=/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;return input[_0xc9a8[587]](tags,function($0,$1){return allowed[_0xc9a8[331]](_0xc9a8[363]+$1[_0xc9a8[368]]()+_0xc9a8[364])>-1?$0:_0xc9a8[287]});},savePreCode:function(html){html=this[_0xc9a8[34]][_0xc9a8[699]](html);html=this[_0xc9a8[34]][_0xc9a8[700]](html);html=this[_0xc9a8[34]][_0xc9a8[701]](html);return html;},savePreFormatting:function(html){var pre=html[_0xc9a8[649]](/<pre(.*?)>([\w\W]*?)<\/pre>/gi);if(pre!==null){$[_0xc9a8[20]](pre,$[_0xc9a8[312]](function(i,s){var arr=s[_0xc9a8[649]](/<pre(.*?)>([\w\W]*?)<\/pre>/i);arr[2]=arr[2][_0xc9a8[587]](/<br\s?\/?>/g,_0xc9a8[672]);arr[2]=arr[2][_0xc9a8[587]](/&nbsp;/g,_0xc9a8[599]);if(this[_0xc9a8[64]][_0xc9a8[702]]){arr[2]=arr[2][_0xc9a8[587]](/\t/g,Array(this[_0xc9a8[64]][_0xc9a8[702]]+1)[_0xc9a8[268]](_0xc9a8[599]))};arr[2]=this[_0xc9a8[34]][_0xc9a8[703]](arr[2]);arr[2]=arr[2][_0xc9a8[587]](/\$/g,_0xc9a8[588]);html=html[_0xc9a8[587]](s,_0xc9a8[704]+arr[1]+_0xc9a8[364]+arr[2]+_0xc9a8[705]);},this))};return html;},saveCodeFormatting:function(html){var code=html[_0xc9a8[649]](/<code(.*?)>([\w\W]*?)<\/code>/gi);if(code!==null){$[_0xc9a8[20]](code,$[_0xc9a8[312]](function(i,s){var arr=s[_0xc9a8[649]](/<code(.*?)>([\w\W]*?)<\/code>/i);arr[2]=arr[2][_0xc9a8[587]](/&nbsp;/g,_0xc9a8[599]);arr[2]=this[_0xc9a8[34]][_0xc9a8[703]](arr[2]);arr[2]=arr[2][_0xc9a8[587]](/\$/g,_0xc9a8[588]);html=html[_0xc9a8[587]](s,_0xc9a8[706]+arr[1]+_0xc9a8[364]+arr[2]+_0xc9a8[707]);},this))};return html;},restoreSelectionMarker:function(html){html=html[_0xc9a8[587]](/&lt;span id=&quot;selection-marker-([0-9])&quot; class=&quot;redactor-selection-marker&quot; data-verified=&quot;redactor&quot;&gt;​&lt;\/span&gt;/g,_0xc9a8[708]);return html;},getTextFromHtml:function(html){html=html[_0xc9a8[587]](/<br\s?\/?>|<\/H[1-6]>|<\/p>|<\/div>|<\/li>|<\/td>/gi,_0xc9a8[672]);var tmp=document[_0xc9a8[359]](_0xc9a8[90]);tmp[_0xc9a8[564]]=html;html=tmp[_0xc9a8[709]]||tmp[_0xc9a8[710]];return $[_0xc9a8[343]](html);},getPlainText:function(html,paragraphize){html=this[_0xc9a8[34]][_0xc9a8[711]](html);html=html[_0xc9a8[587]](/\n/g,_0xc9a8[712]);if(this[_0xc9a8[64]][_0xc9a8[53]]&& typeof paragraphize==_0xc9a8[14]&&!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){html=this[_0xc9a8[53]][_0xc9a8[276]](html)};return html;},getPreCode:function(html){html=html[_0xc9a8[587]](/<img(.*?) style="(.*?)"(.*?[^>])>/gi,_0xc9a8[619]);html=html[_0xc9a8[587]](/<img(.*?)>/gi,_0xc9a8[713]);html=this[_0xc9a8[34]][_0xc9a8[711]](html);if(this[_0xc9a8[64]][_0xc9a8[702]]){html=html[_0xc9a8[587]](/\t/g,Array(this[_0xc9a8[64]][_0xc9a8[702]]+1)[_0xc9a8[268]](_0xc9a8[599]))};html=this[_0xc9a8[34]][_0xc9a8[703]](html);return html;},getOnlyImages:function(html){html=html[_0xc9a8[587]](/<img(.*?)>/gi,_0xc9a8[714]);html=html[_0xc9a8[587]](/<([Ss]*?)>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/\[img(.*?)\]/gi,_0xc9a8[715]);return html;},getOnlyLinksAndImages:function(html){html=html[_0xc9a8[587]](/<a(.*?)href="(.*?)"(.*?)>([\w\W]*?)<\/a>/gi,_0xc9a8[716]);html=html[_0xc9a8[587]](/<img(.*?)>/gi,_0xc9a8[714]);html=html[_0xc9a8[587]](/<(.*?)>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/\[a href="(.*?)"\]([\w\W]*?)\[\/a\]/gi,_0xc9a8[717]);html=html[_0xc9a8[587]](/\[img(.*?)\]/gi,_0xc9a8[715]);return html;},encodeEntities:function(str){str=String(str)[_0xc9a8[587]](/&amp;/g,_0xc9a8[597])[_0xc9a8[587]](/&lt;/g,_0xc9a8[363])[_0xc9a8[587]](/&gt;/g,_0xc9a8[364])[_0xc9a8[587]](/&quot;/g,_0xc9a8[634]);return str[_0xc9a8[587]](/&/g,_0xc9a8[721])[_0xc9a8[587]](/</g,_0xc9a8[720])[_0xc9a8[587]](/>/g,_0xc9a8[719])[_0xc9a8[587]](/"/g,_0xc9a8[718]);},removeDirtyStyles:function(html){if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){return html};var div=document[_0xc9a8[359]](_0xc9a8[90]);div[_0xc9a8[564]]=html;this[_0xc9a8[34]][_0xc9a8[722]]($(div));html=div[_0xc9a8[564]];$(div)[_0xc9a8[373]]();return html;},clearUnverified:function(){if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){return };this[_0xc9a8[34]][_0xc9a8[722]](this.$editor);var headers=this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[723]);headers[_0xc9a8[374]](_0xc9a8[130])[_0xc9a8[380]](_0xc9a8[88]);headers[_0xc9a8[374]](this[_0xc9a8[64]][_0xc9a8[725]][_0xc9a8[268]](_0xc9a8[724]))[_0xc9a8[380]](_0xc9a8[88]);this[_0xc9a8[35]][_0xc9a8[302]]();},clearUnverifiedRemove:function($editor){$editor[_0xc9a8[374]](this[_0xc9a8[64]][_0xc9a8[725]][_0xc9a8[268]](_0xc9a8[724]))[_0xc9a8[380]](_0xc9a8[88]);$editor[_0xc9a8[374]](_0xc9a8[130])[_0xc9a8[544]](_0xc9a8[726])[_0xc9a8[380]](_0xc9a8[88]);$editor[_0xc9a8[374]](_0xc9a8[727])[_0xc9a8[20]](function(i,s){var $s=$(s);$s[_0xc9a8[307]](_0xc9a8[88],$s[_0xc9a8[307]](_0xc9a8[551]));});},cleanEmptyParagraph:function(){},setVerified:function(html){if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){return html};html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[728],_0xc9a8[609]),_0xc9a8[729]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[730],_0xc9a8[609]),_0xc9a8[731]);var matches=html[_0xc9a8[649]]( new RegExp(_0xc9a8[732],_0xc9a8[609]));if(matches){var len=matches[_0xc9a8[21]];for(var i=0;i<len;i++){try{var newTag=matches[i][_0xc9a8[587]](/style="(.*?)"/i,_0xc9a8[733]);html=html[_0xc9a8[587]](matches[i],newTag);}catch(e){}};};return html;},convertInline:function(html){var $div=$(_0xc9a8[435])[_0xc9a8[69]](html);var tags=this[_0xc9a8[64]][_0xc9a8[734]];tags[_0xc9a8[16]](_0xc9a8[130]);$div[_0xc9a8[374]](tags[_0xc9a8[268]](_0xc9a8[399]))[_0xc9a8[20]](function(){var $el=$(this);var tag=this[_0xc9a8[353]][_0xc9a8[368]]();$el[_0xc9a8[307]](_0xc9a8[735],tag);if(tag==_0xc9a8[130]){if($el[_0xc9a8[307]](_0xc9a8[88])){$el[_0xc9a8[307]](_0xc9a8[736],$el[_0xc9a8[307]](_0xc9a8[88]))}else {if($el[_0xc9a8[307]](_0xc9a8[336])){$el[_0xc9a8[307]](_0xc9a8[737],$el[_0xc9a8[307]](_0xc9a8[336]))}}};});html=$div[_0xc9a8[69]]();$div[_0xc9a8[373]]();return html;},normalizeLists:function(){this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[154])[_0xc9a8[20]](function(i,s){var $next=$(s)[_0xc9a8[403]]();if($next[_0xc9a8[21]]!==0&&($next[0][_0xc9a8[353]]==_0xc9a8[182]||$next[0][_0xc9a8[353]]==_0xc9a8[183])){$(s)[_0xc9a8[370]]($next)};})},removeSpaces:function(html){html=html[_0xc9a8[587]](/\n/g,_0xc9a8[287]);html=html[_0xc9a8[587]](/[\t]*/g,_0xc9a8[287]);html=html[_0xc9a8[587]](/\n\s*\n/g,_0xc9a8[672]);html=html[_0xc9a8[587]](/^[\s\n]*/g,_0xc9a8[599]);html=html[_0xc9a8[587]](/[\s\n]*$/g,_0xc9a8[599]);html=html[_0xc9a8[587]](/>\s{2,}</g,_0xc9a8[738]);html=html[_0xc9a8[587]](/\n\n/g,_0xc9a8[672]);html=html[_0xc9a8[587]](/\u200B/g,_0xc9a8[287]);return html;},replaceDivs:function(html){if(this[_0xc9a8[64]][_0xc9a8[313]]){html=html[_0xc9a8[587]](/<div><br\s?\/?><\/div>/gi,_0xc9a8[712]);html=html[_0xc9a8[587]](/<div(.*?)>([\w\W]*?)<\/div>/gi,_0xc9a8[739]);}else {html=html[_0xc9a8[587]](/<div(.*?)>([\w\W]*?)<\/div>/gi,_0xc9a8[740])};html=html[_0xc9a8[587]](/<div(.*?[^>])>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<\/div>/gi,_0xc9a8[287]);return html;},replaceDivsToBr:function(html){html=html[_0xc9a8[587]](/<div\s(.*?)>/gi,_0xc9a8[673]);html=html[_0xc9a8[587]](/<div><br\s?\/?><\/div>/gi,_0xc9a8[741]);html=html[_0xc9a8[587]](/<div>([\w\W]*?)<\/div>/gi,_0xc9a8[742]);return html;},replaceParagraphsToBr:function(html){html=html[_0xc9a8[587]](/<p\s(.*?)>/gi,_0xc9a8[673]);html=html[_0xc9a8[587]](/<p><br\s?\/?><\/p>/gi,_0xc9a8[712]);html=html[_0xc9a8[587]](/<p>([\w\W]*?)<\/p>/gi,_0xc9a8[742]);html=html[_0xc9a8[587]](/(<br\s?\/?>){1,}\n?<\/blockquote>/gi,_0xc9a8[743]);return html;},saveFormTags:function(html){return html[_0xc9a8[587]](/<form(.*?)>([\w\W]*?)<\/form>/gi,_0xc9a8[744])},restoreFormTags:function(html){return html[_0xc9a8[587]](/<section(.*?) rel="redactor-form-tag"(.*?)>([\w\W]*?)<\/section>/gi,_0xc9a8[745])}}},code:function(){return {set:function(html){html=$[_0xc9a8[343]](html.toString());html=this[_0xc9a8[34]][_0xc9a8[746]](html);if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){html=html[_0xc9a8[587]](/<span(.*?)id="selection-marker-(1|2)"(.*?)><\/span>;/gi,_0xc9a8[287])};this[_0xc9a8[293]][_0xc9a8[69]](html);this[_0xc9a8[35]][_0xc9a8[302]]();if(html!==_0xc9a8[287]){this[_0xc9a8[55]][_0xc9a8[373]]()};setTimeout($[_0xc9a8[312]](this[_0xc9a8[30]][_0xc9a8[747]],this),15);if(this[_0xc9a8[279]]===false){this[_0xc9a8[52]][_0xc9a8[276]]()};},get:function(){var code=this[_0xc9a8[319]][_0xc9a8[332]]();if(this[_0xc9a8[64]][_0xc9a8[590]]){code=this[_0xc9a8[34]][_0xc9a8[590]](code)};if(this[_0xc9a8[64]][_0xc9a8[313]]){code=this[_0xc9a8[34]][_0xc9a8[591]](code)};code=this[_0xc9a8[59]][_0xc9a8[323]](code);return code;},sync:function(){setTimeout($[_0xc9a8[312]](this[_0xc9a8[35]][_0xc9a8[748]],this),10)},startSync:function(){var html=this[_0xc9a8[293]][_0xc9a8[69]]();if(this[_0xc9a8[35]][_0xc9a8[749]]&&this[_0xc9a8[35]][_0xc9a8[749]]==html){return };this[_0xc9a8[35]][_0xc9a8[749]]=html;html=this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[750],html);html=this[_0xc9a8[34]][_0xc9a8[751]](html);this[_0xc9a8[319]][_0xc9a8[332]](html);this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[302],html);if(this[_0xc9a8[279]]===false){this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[752],html)};this[_0xc9a8[279]]=false;if(this[_0xc9a8[28]][_0xc9a8[69]]==false){this[_0xc9a8[28]][_0xc9a8[69]]=this[_0xc9a8[35]][_0xc9a8[323]]()};if(this[_0xc9a8[64]][_0xc9a8[753]]){this[_0xc9a8[319]][_0xc9a8[403]](_0xc9a8[756])[_0xc9a8[20]](function(i,el){el[_0xc9a8[755]][_0xc9a8[754]](html)})};this[_0xc9a8[28]][_0xc9a8[757]]();this[_0xc9a8[28]][_0xc9a8[498]]();},toggle:function(){if(this[_0xc9a8[64]][_0xc9a8[442]]){this[_0xc9a8[35]][_0xc9a8[443]]()}else {this[_0xc9a8[35]][_0xc9a8[758]]()}},showCode:function(){this[_0xc9a8[57]][_0xc9a8[294]]();this[_0xc9a8[35]][_0xc9a8[526]]=this[_0xc9a8[33]][_0xc9a8[535]]();var scroll=$(window)[_0xc9a8[759]]();var width=this[_0xc9a8[293]][_0xc9a8[532]](),height=this[_0xc9a8[293]][_0xc9a8[529]]();this[_0xc9a8[293]][_0xc9a8[438]]();var html=this[_0xc9a8[319]][_0xc9a8[332]]();this[_0xc9a8[760]]=this[_0xc9a8[34]][_0xc9a8[761]](html);html=this[_0xc9a8[59]][_0xc9a8[323]](html);var start=0,end=0;var $editorDiv=$(_0xc9a8[617])[_0xc9a8[370]]($[_0xc9a8[616]](this[_0xc9a8[34]][_0xc9a8[751]](this[_0xc9a8[293]][_0xc9a8[69]]()),document,true));var $selectionMarkers=$editorDiv[_0xc9a8[374]](_0xc9a8[762]);if($selectionMarkers[_0xc9a8[21]]>0){var editorHtml=this[_0xc9a8[59]][_0xc9a8[323]]($editorDiv[_0xc9a8[69]]())[_0xc9a8[587]](/&amp;/g,_0xc9a8[597]);if($selectionMarkers[_0xc9a8[21]]==1){start=this[_0xc9a8[63]][_0xc9a8[766]](editorHtml,$editorDiv[_0xc9a8[374]](_0xc9a8[765])[_0xc9a8[764]](_0xc9a8[763]));end=start;}else {if($selectionMarkers[_0xc9a8[21]]==2){start=this[_0xc9a8[63]][_0xc9a8[766]](editorHtml,$editorDiv[_0xc9a8[374]](_0xc9a8[765])[_0xc9a8[764]](_0xc9a8[763]));end=this[_0xc9a8[63]][_0xc9a8[766]](editorHtml,$editorDiv[_0xc9a8[374]](_0xc9a8[767])[_0xc9a8[764]](_0xc9a8[763]))-$editorDiv[_0xc9a8[374]](_0xc9a8[765])[_0xc9a8[764]](_0xc9a8[763]).toString()[_0xc9a8[21]];}};};this[_0xc9a8[57]][_0xc9a8[768]]();this[_0xc9a8[319]][_0xc9a8[332]](html);if(this[_0xc9a8[64]][_0xc9a8[753]]){this[_0xc9a8[319]][_0xc9a8[403]](_0xc9a8[756])[_0xc9a8[20]](function(i,el){$(el)[_0xc9a8[527]]();el[_0xc9a8[755]][_0xc9a8[754]](html);el[_0xc9a8[755]][_0xc9a8[770]](_0xc9a8[769],height);el[_0xc9a8[755]][_0xc9a8[771]]();if(start==end){el[_0xc9a8[755]][_0xc9a8[774]](el[_0xc9a8[755]][_0xc9a8[772]](start)[_0xc9a8[47]],el[_0xc9a8[755]][_0xc9a8[772]](end)[_0xc9a8[773]])}else {el[_0xc9a8[755]][_0xc9a8[775]]({line:el[_0xc9a8[755]][_0xc9a8[772]](start)[_0xc9a8[47]],ch:el[_0xc9a8[755]][_0xc9a8[772]](start)[_0xc9a8[773]]},{line:el[_0xc9a8[755]][_0xc9a8[772]](end)[_0xc9a8[47]],ch:el[_0xc9a8[755]][_0xc9a8[772]](end)[_0xc9a8[773]]})};el[_0xc9a8[755]][_0xc9a8[39]]();})}else {this[_0xc9a8[319]][_0xc9a8[776]](height)[_0xc9a8[527]]()[_0xc9a8[39]]();this[_0xc9a8[319]][_0xc9a8[467]](_0xc9a8[777],this[_0xc9a8[35]][_0xc9a8[778]]);$(window)[_0xc9a8[759]](scroll);if(this[_0xc9a8[319]][0][_0xc9a8[779]]){this[_0xc9a8[319]][0][_0xc9a8[779]](start,end)};this[_0xc9a8[319]][0][_0xc9a8[759]]=0;};this[_0xc9a8[64]][_0xc9a8[442]]=false;this[_0xc9a8[32]][_0xc9a8[780]]();this[_0xc9a8[32]][_0xc9a8[781]](_0xc9a8[69]);this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[322],html);},showVisual:function(){var html;if(this[_0xc9a8[64]][_0xc9a8[442]]){return };var start=0,end=0;if(this[_0xc9a8[64]][_0xc9a8[753]]){var selection;this[_0xc9a8[319]][_0xc9a8[403]](_0xc9a8[756])[_0xc9a8[20]](function(i,el){selection=el[_0xc9a8[755]][_0xc9a8[782]]();start=el[_0xc9a8[755]][_0xc9a8[784]](selection[0][_0xc9a8[783]]);end=el[_0xc9a8[755]][_0xc9a8[784]](selection[0][_0xc9a8[272]]);html=el[_0xc9a8[755]][_0xc9a8[785]]();});}else {start=this[_0xc9a8[319]][_0xc9a8[323]](0)[_0xc9a8[786]];end=this[_0xc9a8[319]][_0xc9a8[323]](0)[_0xc9a8[787]];html=this[_0xc9a8[319]][_0xc9a8[438]]()[_0xc9a8[332]]();};if(start>end&&end>0){var tempStart=end;var tempEnd=start;start=tempStart;end=tempEnd;};start=this[_0xc9a8[35]][_0xc9a8[788]](html,start);end=this[_0xc9a8[35]][_0xc9a8[788]](html,end);html=html[_0xc9a8[789]](0,start)+this[_0xc9a8[57]][_0xc9a8[790]](1)+html[_0xc9a8[789]](start);if(end>start){var markerLength=this[_0xc9a8[57]][_0xc9a8[790]](1).toString()[_0xc9a8[21]];html=html[_0xc9a8[789]](0,end+markerLength)+this[_0xc9a8[57]][_0xc9a8[790]](2)+html[_0xc9a8[789]](end+markerLength);};if(this[_0xc9a8[760]]!==this[_0xc9a8[34]][_0xc9a8[761]](html)){this[_0xc9a8[35]][_0xc9a8[288]](html)};if(this[_0xc9a8[64]][_0xc9a8[753]]){this[_0xc9a8[319]][_0xc9a8[403]](_0xc9a8[756])[_0xc9a8[438]]()};this[_0xc9a8[293]][_0xc9a8[527]]();if(!this[_0xc9a8[63]][_0xc9a8[344]](html)){this[_0xc9a8[55]][_0xc9a8[373]]()};this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[319]][_0xc9a8[791]](_0xc9a8[777]);this[_0xc9a8[32]][_0xc9a8[792]]();this[_0xc9a8[32]][_0xc9a8[793]](_0xc9a8[69]);this[_0xc9a8[52]][_0xc9a8[276]]();this[_0xc9a8[64]][_0xc9a8[442]]=true;this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[442],html);},textareaIndenting:function(e){if(e[_0xc9a8[794]]!==9){return true};var $el=this[_0xc9a8[319]];var start=$el[_0xc9a8[323]](0)[_0xc9a8[786]];$el[_0xc9a8[332]]($el[_0xc9a8[332]]()[_0xc9a8[795]](0,start)+_0xc9a8[628]+$el[_0xc9a8[332]]()[_0xc9a8[795]]($el[_0xc9a8[323]](0)[_0xc9a8[787]]));$el[_0xc9a8[323]](0)[_0xc9a8[786]]=$el[_0xc9a8[323]](0)[_0xc9a8[787]]=start+1;return false;},enlargeOffset:function(html,offset){var htmlLength=html[_0xc9a8[21]];var c=0;if(html[offset]==_0xc9a8[364]){c++}else {for(var i=offset;i<=htmlLength;i++){c++;if(html[i]==_0xc9a8[364]){break }else {if(html[i]==_0xc9a8[363]||i==htmlLength){c=0;break ;}};}};return offset+c;}}},core:function(){return {getObject:function(){return $[_0xc9a8[278]]({},this)},getEditor:function(){return this[_0xc9a8[293]]},getBox:function(){return this[_0xc9a8[424]]},getElement:function(){return this[_0xc9a8[256]]},getTextarea:function(){return this[_0xc9a8[319]]},getToolbar:function(){return (this[_0xc9a8[540]])?this[_0xc9a8[540]]:false},addEvent:function(name){this[_0xc9a8[36]][_0xc9a8[796]]=name},getEvent:function(){return this[_0xc9a8[36]][_0xc9a8[796]]},setCallback:function(type,e,data){var eventName=type+_0xc9a8[797];var eventNamespace=_0xc9a8[4];var callback=this[_0xc9a8[64]][eventName];if(this[_0xc9a8[319]]){var returnValue=false;var events=$._data(this[_0xc9a8[319]][0],_0xc9a8[798]);if( typeof events!=_0xc9a8[14]&& typeof events[eventName]!=_0xc9a8[14]){$[_0xc9a8[20]](events[eventName],$[_0xc9a8[312]](function(key,value){if(value[_0xc9a8[799]]==eventNamespace){var data=( typeof data==_0xc9a8[14])?[e]:[e,data];returnValue=( typeof data==_0xc9a8[14])?value[_0xc9a8[800]][_0xc9a8[6]](this,e):value[_0xc9a8[800]][_0xc9a8[6]](this,e,data);}},this))};if(returnValue){return returnValue};};if($[_0xc9a8[15]](callback)){return ( typeof data==_0xc9a8[14])?callback[_0xc9a8[6]](this,e):callback[_0xc9a8[6]](this,e,data)}else {return ( typeof data==_0xc9a8[14])?e:data};},destroy:function(){this[_0xc9a8[64]][_0xc9a8[801]]=true;this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[802]);this[_0xc9a8[256]][_0xc9a8[791]](_0xc9a8[804])[_0xc9a8[803]](_0xc9a8[4]);this[_0xc9a8[293]][_0xc9a8[791]](_0xc9a8[804]);$(document)[_0xc9a8[791]](_0xc9a8[484]+this[_0xc9a8[257]]);$(document)[_0xc9a8[791]](_0xc9a8[805]+this[_0xc9a8[257]]);$(document)[_0xc9a8[791]](_0xc9a8[806]+this[_0xc9a8[257]]);$(document)[_0xc9a8[791]](_0xc9a8[807]+this[_0xc9a8[257]]+_0xc9a8[808]+this[_0xc9a8[257]]);$(_0xc9a8[273])[_0xc9a8[791]](_0xc9a8[809]+this[_0xc9a8[257]]);$(this[_0xc9a8[64]][_0xc9a8[810]])[_0xc9a8[791]](_0xc9a8[809]+this[_0xc9a8[257]]);this[_0xc9a8[293]][_0xc9a8[392]](_0xc9a8[811]);this[_0xc9a8[293]][_0xc9a8[380]](_0xc9a8[812]);var html=this[_0xc9a8[35]][_0xc9a8[323]]();if(this[_0xc9a8[64]][_0xc9a8[61]]){this[_0xc9a8[540]][_0xc9a8[374]](_0xc9a8[147])[_0xc9a8[20]](function(){var $el=$(this);if($el[_0xc9a8[9]](_0xc9a8[37])){$el[_0xc9a8[9]](_0xc9a8[37])[_0xc9a8[373]]();$el[_0xc9a8[9]](_0xc9a8[37],{});};})};if(this[_0xc9a8[31]][_0xc9a8[430]]()){this[_0xc9a8[424]][_0xc9a8[555]](this.$element);this[_0xc9a8[424]][_0xc9a8[373]]();this[_0xc9a8[256]][_0xc9a8[332]](html)[_0xc9a8[527]]();}else {this[_0xc9a8[424]][_0xc9a8[555]](this.$editor);this[_0xc9a8[424]][_0xc9a8[373]]();this[_0xc9a8[256]][_0xc9a8[69]](html)[_0xc9a8[527]]();};if(this[_0xc9a8[259]]){this[_0xc9a8[259]][_0xc9a8[373]]()};if(this[_0xc9a8[813]]){this[_0xc9a8[813]][_0xc9a8[373]]()};if(this[_0xc9a8[814]]){this[_0xc9a8[814]][_0xc9a8[373]]()};$(_0xc9a8[815]+this[_0xc9a8[257]])[_0xc9a8[373]]();clearInterval(this[_0xc9a8[321]]);}}},dropdown:function(){return {build:function(name,$dropdown,dropdownObject){if(name==_0xc9a8[70]&&this[_0xc9a8[64]][_0xc9a8[816]]){$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[816]],$[_0xc9a8[312]](function(i,s){var name=s[_0xc9a8[338]],func;if( typeof s[_0xc9a8[336]]!=_0xc9a8[14]){name=name+_0xc9a8[817]+s[_0xc9a8[336]]};s[_0xc9a8[297]]=(this[_0xc9a8[63]][_0xc9a8[563]](s[_0xc9a8[338]]))?_0xc9a8[29]:_0xc9a8[42];if( typeof s[_0xc9a8[508]]!==_0xc9a8[14]){func=s[_0xc9a8[508]]}else {func=(s[_0xc9a8[297]]==_0xc9a8[42])?_0xc9a8[818]:_0xc9a8[819]};if(this[_0xc9a8[64]][_0xc9a8[313]]&&s[_0xc9a8[297]]==_0xc9a8[29]&&s[_0xc9a8[338]]==_0xc9a8[78]){return };this[_0xc9a8[70]][name]={tag:s[_0xc9a8[338]],style:s[_0xc9a8[88]],"\x63\x6C\x61\x73\x73":s[_0xc9a8[336]],attr:s[_0xc9a8[307]],data:s[_0xc9a8[9]],clear:s[_0xc9a8[337]]};dropdownObject[name]={func:func,title:s[_0xc9a8[504]]};},this))};$[_0xc9a8[20]](dropdownObject,$[_0xc9a8[312]](function(btnName,btnObject){var $item=$(_0xc9a8[820]+btnName+_0xc9a8[821]+btnObject[_0xc9a8[504]]+_0xc9a8[822]);if(name==_0xc9a8[70]){$item[_0xc9a8[389]](_0xc9a8[823]+btnName)};$item[_0xc9a8[467]](_0xc9a8[470],$[_0xc9a8[312]](function(e){e[_0xc9a8[455]]();var type=_0xc9a8[508];var callback=btnObject[_0xc9a8[508]];if(btnObject[_0xc9a8[509]]){type=_0xc9a8[509];callback=btnObject[_0xc9a8[509]];}else {if(btnObject[_0xc9a8[37]]){type=_0xc9a8[37];callback=btnObject[_0xc9a8[37]];}};if($(e[_0xc9a8[486]])[_0xc9a8[492]](_0xc9a8[824])){return };this[_0xc9a8[32]][_0xc9a8[520]](e,btnName,type,callback);this[_0xc9a8[37]][_0xc9a8[825]]();},this));this[_0xc9a8[52]][_0xc9a8[826]]($item,btnName,btnObject);$dropdown[_0xc9a8[370]]($item);},this));},show:function(e,key){if(!this[_0xc9a8[64]][_0xc9a8[442]]){e[_0xc9a8[455]]();return false;};var $button=this[_0xc9a8[32]][_0xc9a8[323]](key);var $dropdown=$button[_0xc9a8[9]](_0xc9a8[37])[_0xc9a8[524]](document[_0xc9a8[273]]);if(this[_0xc9a8[64]][_0xc9a8[827]]){$dropdown[_0xc9a8[389]](_0xc9a8[828])};if($button[_0xc9a8[492]](_0xc9a8[829])){this[_0xc9a8[37]][_0xc9a8[825]]()}else {this[_0xc9a8[37]][_0xc9a8[825]]();this[_0xc9a8[52]][_0xc9a8[830]]();this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[831],{dropdown:$dropdown,key:key,button:$button});this[_0xc9a8[32]][_0xc9a8[781]](key);$button[_0xc9a8[389]](_0xc9a8[829]);var keyPosition=$button[_0xc9a8[526]]();var dropdownWidth=$dropdown[_0xc9a8[832]]();if((keyPosition[_0xc9a8[531]]+dropdownWidth)>$(document)[_0xc9a8[832]]()){keyPosition[_0xc9a8[531]]=Math[_0xc9a8[833]](0,keyPosition[_0xc9a8[531]]-dropdownWidth)};var left=keyPosition[_0xc9a8[531]]+_0xc9a8[530];if(this[_0xc9a8[540]][_0xc9a8[492]](_0xc9a8[834])){var top=this[_0xc9a8[540]][_0xc9a8[529]]()+this[_0xc9a8[64]][_0xc9a8[835]];var position=_0xc9a8[836];if(this[_0xc9a8[64]][_0xc9a8[810]]!==document){top=(this[_0xc9a8[540]][_0xc9a8[529]]()+this[_0xc9a8[540]][_0xc9a8[526]]()[_0xc9a8[528]])+this[_0xc9a8[64]][_0xc9a8[835]];position=_0xc9a8[837];};$dropdown[_0xc9a8[305]]({position:position,left:left,top:top+_0xc9a8[530]})[_0xc9a8[527]]();}else {var top=($button[_0xc9a8[529]]()+keyPosition[_0xc9a8[528]])+_0xc9a8[530];$dropdown[_0xc9a8[305]]({position:_0xc9a8[837],left:left,top:top})[_0xc9a8[527]]();};this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[838],{dropdown:$dropdown,key:key,button:$button});this[_0xc9a8[839]]=$dropdown;};$(document)[_0xc9a8[841]](_0xc9a8[840],$[_0xc9a8[312]](this[_0xc9a8[37]][_0xc9a8[438]],this));this[_0xc9a8[293]][_0xc9a8[841]](_0xc9a8[840],$[_0xc9a8[312]](this[_0xc9a8[37]][_0xc9a8[438]],this));$(document)[_0xc9a8[841]](_0xc9a8[842],$[_0xc9a8[312]](this[_0xc9a8[37]][_0xc9a8[843]],this));$dropdown[_0xc9a8[467]](_0xc9a8[846],$[_0xc9a8[312]](this[_0xc9a8[63]][_0xc9a8[847]],this))[_0xc9a8[467]](_0xc9a8[844],$[_0xc9a8[312]](this[_0xc9a8[63]][_0xc9a8[845]],this));e[_0xc9a8[848]]();},closeHandler:function(e){if(e[_0xc9a8[849]]!=this[_0xc9a8[794]][_0xc9a8[850]]){return };this[_0xc9a8[37]][_0xc9a8[825]]();this[_0xc9a8[293]][_0xc9a8[39]]();},hideAll:function(){this[_0xc9a8[540]][_0xc9a8[374]](_0xc9a8[851])[_0xc9a8[392]](_0xc9a8[541])[_0xc9a8[392]](_0xc9a8[829]);this[_0xc9a8[63]][_0xc9a8[845]]();$(_0xc9a8[852]+this[_0xc9a8[257]])[_0xc9a8[438]]();$(_0xc9a8[854])[_0xc9a8[392]](_0xc9a8[853]);if(this[_0xc9a8[839]]){this[_0xc9a8[839]][_0xc9a8[791]](_0xc9a8[855]);this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[856],this.$dropdown);this[_0xc9a8[839]]=false;};},hide:function(e){var $dropdown=$(e[_0xc9a8[486]]);if(!$dropdown[_0xc9a8[492]](_0xc9a8[829])&&!$dropdown[_0xc9a8[492]](_0xc9a8[824])){$dropdown[_0xc9a8[392]](_0xc9a8[829]);$dropdown[_0xc9a8[791]](_0xc9a8[857]);this[_0xc9a8[37]][_0xc9a8[825]]();};}}},file:function(){return {show:function(){this[_0xc9a8[51]][_0xc9a8[276]](_0xc9a8[38],this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[38]),700);this[_0xc9a8[62]][_0xc9a8[22]](_0xc9a8[858],this[_0xc9a8[64]][_0xc9a8[859]],this[_0xc9a8[38]][_0xc9a8[43]]);this[_0xc9a8[57]][_0xc9a8[294]]();this[_0xc9a8[57]][_0xc9a8[323]]();var text=this[_0xc9a8[860]].toString();$(_0xc9a8[861])[_0xc9a8[332]](text);this[_0xc9a8[51]][_0xc9a8[527]]();},insert:function(json,direct,e){if( typeof json[_0xc9a8[19]]!=_0xc9a8[14]){this[_0xc9a8[51]][_0xc9a8[862]]();this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[863],json);return ;};var link;if( typeof json==_0xc9a8[8]){link=json}else {var text=$(_0xc9a8[861])[_0xc9a8[332]]();if( typeof text==_0xc9a8[14]||text===_0xc9a8[287]){text=json[_0xc9a8[864]]};link=_0xc9a8[865]+json[_0xc9a8[866]]+_0xc9a8[867]+text+_0xc9a8[822];};if(direct){this[_0xc9a8[57]][_0xc9a8[768]]();var marker=this[_0xc9a8[57]][_0xc9a8[401]]();this[_0xc9a8[43]][_0xc9a8[868]](e,marker);}else {this[_0xc9a8[51]][_0xc9a8[862]]()};this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[43]][_0xc9a8[869]](link);if( typeof json==_0xc9a8[8]){return };var linkmarker=$(this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[870]));if(linkmarker[_0xc9a8[21]]!==0){linkmarker[_0xc9a8[380]](_0xc9a8[429])[_0xc9a8[380]](_0xc9a8[88])}else {linkmarker=false};this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[859],linkmarker,json);}}},focus:function(){return {setStart:function(){this[_0xc9a8[293]][_0xc9a8[39]]();var first=this[_0xc9a8[293]][_0xc9a8[348]]()[_0xc9a8[347]]();if(first[_0xc9a8[21]]===0){return };if(first[0][_0xc9a8[21]]===0||first[0][_0xc9a8[353]]==_0xc9a8[405]||first[0][_0xc9a8[560]]==3){return };if(first[0][_0xc9a8[353]]==_0xc9a8[182]||first[0][_0xc9a8[353]]==_0xc9a8[183]){var child=first[_0xc9a8[374]](_0xc9a8[154])[_0xc9a8[347]]();if(!this[_0xc9a8[63]][_0xc9a8[558]](child)&&child[_0xc9a8[871]]()===_0xc9a8[287]){this[_0xc9a8[33]][_0xc9a8[499]](child);return ;};};if(this[_0xc9a8[64]][_0xc9a8[313]]&&!this[_0xc9a8[63]][_0xc9a8[563]](first[0][_0xc9a8[353]])){this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[499]](this[_0xc9a8[293]][0],0);this[_0xc9a8[355]][_0xc9a8[349]](this[_0xc9a8[293]][0],0);this[_0xc9a8[57]][_0xc9a8[567]]();return ;};this[_0xc9a8[33]][_0xc9a8[499]](first);},setEnd:function(){var last=this[_0xc9a8[293]][_0xc9a8[348]]()[_0xc9a8[661]]();this[_0xc9a8[293]][_0xc9a8[39]]();if(last[_0xc9a8[404]]()===0){return };if(this[_0xc9a8[63]][_0xc9a8[344]](this[_0xc9a8[293]][_0xc9a8[69]]())){this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[574]](true);this[_0xc9a8[355]][_0xc9a8[570]](last[0]);this[_0xc9a8[355]][_0xc9a8[349]](last[0],0);this[_0xc9a8[57]][_0xc9a8[567]]();}else {this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[576]](last[0]);this[_0xc9a8[355]][_0xc9a8[574]](false);this[_0xc9a8[57]][_0xc9a8[567]]();};},isFocused:function(){var focusNode=document[_0xc9a8[579]]()[_0xc9a8[872]];if(focusNode===null){return false};if(this[_0xc9a8[64]][_0xc9a8[313]]&&$(focusNode[_0xc9a8[873]])[_0xc9a8[492]](_0xc9a8[451])){return true}else {if(!this[_0xc9a8[63]][_0xc9a8[874]](focusNode[_0xc9a8[873]])){return false}};return this[_0xc9a8[293]][_0xc9a8[494]](_0xc9a8[875]);}}},image:function(){return {show:function(){this[_0xc9a8[51]][_0xc9a8[276]](_0xc9a8[40],this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[40]),700);this[_0xc9a8[62]][_0xc9a8[22]](_0xc9a8[876],this[_0xc9a8[64]][_0xc9a8[877]],this[_0xc9a8[40]][_0xc9a8[43]]);this[_0xc9a8[57]][_0xc9a8[294]]();this[_0xc9a8[51]][_0xc9a8[527]]();},showEdit:function($image){var $link=$image[_0xc9a8[394]](_0xc9a8[147],this[_0xc9a8[293]][0]);this[_0xc9a8[51]][_0xc9a8[276]](_0xc9a8[878],this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[879]),705);this[_0xc9a8[51]][_0xc9a8[880]]();this[_0xc9a8[40]][_0xc9a8[881]]=this[_0xc9a8[51]][_0xc9a8[883]](this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[882]));this[_0xc9a8[40]][_0xc9a8[884]]=this[_0xc9a8[51]][_0xc9a8[885]](this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[294]));this[_0xc9a8[40]][_0xc9a8[881]][_0xc9a8[467]](_0xc9a8[470],$[_0xc9a8[312]](function(){this[_0xc9a8[40]][_0xc9a8[373]]($image)},this));this[_0xc9a8[40]][_0xc9a8[884]][_0xc9a8[467]](_0xc9a8[470],$[_0xc9a8[312]](function(){this[_0xc9a8[40]][_0xc9a8[886]]($image)},this));$(_0xc9a8[887])[_0xc9a8[373]]();$(_0xc9a8[888])[_0xc9a8[332]]($image[_0xc9a8[307]](_0xc9a8[688]));if(!this[_0xc9a8[64]][_0xc9a8[889]]){$(_0xc9a8[890])[_0xc9a8[438]]()}else {var $redactorImageLink=$(_0xc9a8[891]);$redactorImageLink[_0xc9a8[307]](_0xc9a8[892],$image[_0xc9a8[307]](_0xc9a8[687]));if($link[_0xc9a8[21]]!==0){$redactorImageLink[_0xc9a8[332]]($link[_0xc9a8[307]](_0xc9a8[892]));if($link[_0xc9a8[307]](_0xc9a8[486])==_0xc9a8[893]){$(_0xc9a8[895])[_0xc9a8[764]](_0xc9a8[894],true)};};};if(!this[_0xc9a8[64]][_0xc9a8[896]]){$(_0xc9a8[897])[_0xc9a8[438]]()}else {var floatValue=($image[_0xc9a8[305]](_0xc9a8[898])==_0xc9a8[29]&&$image[_0xc9a8[305]](_0xc9a8[899])==_0xc9a8[900])?_0xc9a8[290]:$image[_0xc9a8[305]](_0xc9a8[899]);$(_0xc9a8[901])[_0xc9a8[332]](floatValue);};this[_0xc9a8[51]][_0xc9a8[527]]();$(_0xc9a8[888])[_0xc9a8[39]]();},setFloating:function($image){var floating=$(_0xc9a8[901])[_0xc9a8[332]]();var imageFloat=_0xc9a8[287];var imageDisplay=_0xc9a8[287];var imageMargin=_0xc9a8[287];switch(floating){case _0xc9a8[531]:imageFloat=_0xc9a8[531];imageMargin=_0xc9a8[902]+this[_0xc9a8[64]][_0xc9a8[903]]+_0xc9a8[599]+this[_0xc9a8[64]][_0xc9a8[903]]+_0xc9a8[904];break ;;case _0xc9a8[289]:imageFloat=_0xc9a8[289];imageMargin=_0xc9a8[905]+this[_0xc9a8[64]][_0xc9a8[903]]+_0xc9a8[599]+this[_0xc9a8[64]][_0xc9a8[903]];break ;;case _0xc9a8[290]:imageDisplay=_0xc9a8[29];imageMargin=_0xc9a8[906];break ;;};$image[_0xc9a8[305]]({"\x66\x6C\x6F\x61\x74":imageFloat,display:imageDisplay,margin:imageMargin});$image[_0xc9a8[307]](_0xc9a8[551],$image[_0xc9a8[307]](_0xc9a8[88]));},update:function($image){this[_0xc9a8[40]][_0xc9a8[907]]();this[_0xc9a8[30]][_0xc9a8[288]]();var $link=$image[_0xc9a8[394]](_0xc9a8[147],this[_0xc9a8[293]][0]);var title=$(_0xc9a8[888])[_0xc9a8[332]]()[_0xc9a8[587]](/(<([^>]+)>)/ig,_0xc9a8[287]);$image[_0xc9a8[307]](_0xc9a8[688],title);this[_0xc9a8[40]][_0xc9a8[908]]($image);var link=$[_0xc9a8[343]]($(_0xc9a8[891])[_0xc9a8[332]]());var link=link[_0xc9a8[587]](/(<([^>]+)>)/ig,_0xc9a8[287]);if(link!==_0xc9a8[287]){var pattern=_0xc9a8[909];var re= new RegExp(_0xc9a8[910]+pattern,_0xc9a8[151]);var re2= new RegExp(_0xc9a8[911]+pattern,_0xc9a8[151]);if(link[_0xc9a8[10]](re)==-1&&link[_0xc9a8[10]](re2)===0&&this[_0xc9a8[64]][_0xc9a8[912]]){link=this[_0xc9a8[64]][_0xc9a8[912]]+_0xc9a8[913]+link};var target=($(_0xc9a8[895])[_0xc9a8[764]](_0xc9a8[894]))?true:false;if($link[_0xc9a8[21]]===0){var a=$(_0xc9a8[865]+link+_0xc9a8[613]+this[_0xc9a8[63]][_0xc9a8[914]]($image)+_0xc9a8[822]);if(target){a[_0xc9a8[307]](_0xc9a8[486],_0xc9a8[893])};$image[_0xc9a8[315]](a);}else {$link[_0xc9a8[307]](_0xc9a8[892],link);if(target){$link[_0xc9a8[307]](_0xc9a8[486],_0xc9a8[893])}else {$link[_0xc9a8[380]](_0xc9a8[486])};};}else {if($link[_0xc9a8[21]]!==0){$link[_0xc9a8[315]](this[_0xc9a8[63]][_0xc9a8[914]]($image))}};this[_0xc9a8[51]][_0xc9a8[862]]();this[_0xc9a8[52]][_0xc9a8[915]]();this[_0xc9a8[35]][_0xc9a8[302]]();},setEditable:function($image){if(this[_0xc9a8[64]][_0xc9a8[916]]){$image[_0xc9a8[467]](_0xc9a8[917],$[_0xc9a8[312]](this[_0xc9a8[40]][_0xc9a8[918]],this))};var handler=$[_0xc9a8[312]](function(e){this[_0xc9a8[52]][_0xc9a8[40]]=$image;this[_0xc9a8[40]][_0xc9a8[919]]=this[_0xc9a8[40]][_0xc9a8[920]]($image);$(document)[_0xc9a8[467]](_0xc9a8[921]+this[_0xc9a8[257]],$[_0xc9a8[312]](this[_0xc9a8[40]][_0xc9a8[907]],this));if(!this[_0xc9a8[64]][_0xc9a8[922]]){return };this[_0xc9a8[40]][_0xc9a8[919]][_0xc9a8[467]](_0xc9a8[923],$[_0xc9a8[312]](function(e){this[_0xc9a8[40]][_0xc9a8[924]](e,$image)},this));},this);$image[_0xc9a8[791]](_0xc9a8[925])[_0xc9a8[467]](_0xc9a8[925],$[_0xc9a8[312]](this[_0xc9a8[40]][_0xc9a8[907]],this));$image[_0xc9a8[791]](_0xc9a8[926])[_0xc9a8[467]](_0xc9a8[926],handler);},setResizable:function(e,$image){e[_0xc9a8[455]]();this[_0xc9a8[40]][_0xc9a8[927]]={x:e[_0xc9a8[928]],y:e[_0xc9a8[929]],el:$image,ratio:$image[_0xc9a8[832]]()/$image[_0xc9a8[776]](),h:$image[_0xc9a8[776]]()};e=e[_0xc9a8[463]]||e;if(e[_0xc9a8[930]]){this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[931]]=e[_0xc9a8[930]][0][_0xc9a8[928]];this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[932]]=e[_0xc9a8[930]][0][_0xc9a8[929]];};this[_0xc9a8[40]][_0xc9a8[933]]();},startResize:function(){$(document)[_0xc9a8[467]](_0xc9a8[934],$[_0xc9a8[312]](this[_0xc9a8[40]][_0xc9a8[935]],this));$(document)[_0xc9a8[467]](_0xc9a8[936],$[_0xc9a8[312]](this[_0xc9a8[40]][_0xc9a8[937]],this));},moveResize:function(e){e[_0xc9a8[455]]();e=e[_0xc9a8[463]]||e;var height=this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[938]];if(e[_0xc9a8[930]]){height+=(e[_0xc9a8[930]][0][_0xc9a8[929]]-this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[932]])}else {height+=(e[_0xc9a8[929]]-this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[932]])};var width=Math[_0xc9a8[940]](height*this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[939]]);if(height<50||width<100){return };var height=Math[_0xc9a8[940]](this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[941]][_0xc9a8[832]]()/this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[939]]);this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[941]][_0xc9a8[307]]({width:width,height:height});this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[941]][_0xc9a8[832]](width);this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[941]][_0xc9a8[776]](height);this[_0xc9a8[35]][_0xc9a8[302]]();},stopResize:function(){this[_0xc9a8[942]]=false;$(document)[_0xc9a8[791]](_0xc9a8[943]);this[_0xc9a8[40]][_0xc9a8[907]]();},onDrag:function(e){if(this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[944])[_0xc9a8[21]]!==0){e[_0xc9a8[455]]();return false;};this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[945],$[_0xc9a8[312]](function(){setTimeout($[_0xc9a8[312]](this[_0xc9a8[40]][_0xc9a8[946]],this),1)},this));},onDrop:function(){this[_0xc9a8[40]][_0xc9a8[947]]();this[_0xc9a8[52]][_0xc9a8[915]]();this[_0xc9a8[293]][_0xc9a8[791]](_0xc9a8[945]);this[_0xc9a8[34]][_0xc9a8[395]]();this[_0xc9a8[35]][_0xc9a8[302]]();},fixImageSourceAfterDrop:function(){this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[949])[_0xc9a8[20]](function(){var $el=$(this);$el[_0xc9a8[307]](_0xc9a8[687],$el[_0xc9a8[307]](_0xc9a8[948]));$el[_0xc9a8[380]](_0xc9a8[948]);})},hideResize:function(e){if(e&&$(e[_0xc9a8[486]])[_0xc9a8[394]](_0xc9a8[944],this[_0xc9a8[293]][0])[_0xc9a8[21]]!==0){return };if(e&&e[_0xc9a8[486]][_0xc9a8[353]]==_0xc9a8[950]){var $image=$(e[_0xc9a8[486]]);$image[_0xc9a8[307]](_0xc9a8[948],$image[_0xc9a8[307]](_0xc9a8[687]));};var imageBox=this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[944]);if(imageBox[_0xc9a8[21]]===0){return };$(_0xc9a8[951])[_0xc9a8[373]]();$(_0xc9a8[952])[_0xc9a8[373]]();imageBox[_0xc9a8[374]](_0xc9a8[148])[_0xc9a8[305]]({marginTop:imageBox[0][_0xc9a8[88]][_0xc9a8[953]],marginBottom:imageBox[0][_0xc9a8[88]][_0xc9a8[954]],marginLeft:imageBox[0][_0xc9a8[88]][_0xc9a8[955]],marginRight:imageBox[0][_0xc9a8[88]][_0xc9a8[956]]});imageBox[_0xc9a8[305]](_0xc9a8[957],_0xc9a8[287]);imageBox[_0xc9a8[374]](_0xc9a8[148])[_0xc9a8[305]](_0xc9a8[958],_0xc9a8[287]);imageBox[_0xc9a8[315]](function(){return $(this)[_0xc9a8[378]]()});$(document)[_0xc9a8[791]](_0xc9a8[921]+this[_0xc9a8[257]]);if( typeof this[_0xc9a8[40]][_0xc9a8[927]]!==_0xc9a8[14]){this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[941]][_0xc9a8[307]](_0xc9a8[551],this[_0xc9a8[40]][_0xc9a8[927]][_0xc9a8[941]][_0xc9a8[307]](_0xc9a8[88]))};this[_0xc9a8[35]][_0xc9a8[302]]();},loadResizableControls:function($image,imageBox){if(this[_0xc9a8[64]][_0xc9a8[922]]&&!this[_0xc9a8[63]][_0xc9a8[959]]()){var imageResizer=$(_0xc9a8[960]);if(!this[_0xc9a8[63]][_0xc9a8[516]]()){imageResizer[_0xc9a8[305]]({width:_0xc9a8[961],height:_0xc9a8[961]})};imageResizer[_0xc9a8[307]](_0xc9a8[812],false);imageBox[_0xc9a8[370]](imageResizer);imageBox[_0xc9a8[370]]($image);return imageResizer;}else {imageBox[_0xc9a8[370]]($image);return false;}},loadEditableControls:function($image){var imageBox=$(_0xc9a8[962]);imageBox[_0xc9a8[305]](_0xc9a8[899],$image[_0xc9a8[305]](_0xc9a8[899]))[_0xc9a8[307]](_0xc9a8[812],false);if($image[0][_0xc9a8[88]][_0xc9a8[957]]!=_0xc9a8[906]){imageBox[_0xc9a8[305]]({marginTop:$image[0][_0xc9a8[88]][_0xc9a8[953]],marginBottom:$image[0][_0xc9a8[88]][_0xc9a8[954]],marginLeft:$image[0][_0xc9a8[88]][_0xc9a8[955]],marginRight:$image[0][_0xc9a8[88]][_0xc9a8[956]]});$image[_0xc9a8[305]](_0xc9a8[957],_0xc9a8[287]);}else {imageBox[_0xc9a8[305]]({"\x64\x69\x73\x70\x6C\x61\x79":_0xc9a8[29],"\x6D\x61\x72\x67\x69\x6E":_0xc9a8[906]})};$image[_0xc9a8[305]](_0xc9a8[958],_0xc9a8[963])[_0xc9a8[555]](imageBox);if(this[_0xc9a8[64]][_0xc9a8[916]]){this[_0xc9a8[40]][_0xc9a8[964]]=$(_0xc9a8[965]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[879])+_0xc9a8[966]);this[_0xc9a8[40]][_0xc9a8[964]][_0xc9a8[307]](_0xc9a8[812],false);this[_0xc9a8[40]][_0xc9a8[964]][_0xc9a8[467]](_0xc9a8[470],$[_0xc9a8[312]](function(){this[_0xc9a8[40]][_0xc9a8[967]]($image)},this));imageBox[_0xc9a8[370]](this[_0xc9a8[40]][_0xc9a8[964]]);var editerWidth=this[_0xc9a8[40]][_0xc9a8[964]][_0xc9a8[532]]();this[_0xc9a8[40]][_0xc9a8[964]][_0xc9a8[305]](_0xc9a8[968],_0xc9a8[817]+editerWidth/2+_0xc9a8[530]);};return this[_0xc9a8[40]][_0xc9a8[969]]($image,imageBox);},remove:function(image){var $image=$(image);var $link=$image[_0xc9a8[394]](_0xc9a8[147],this[_0xc9a8[293]][0]);var $figure=$image[_0xc9a8[394]](_0xc9a8[116],this[_0xc9a8[293]][0]);var $parent=$image[_0xc9a8[556]]();if($(_0xc9a8[944])[_0xc9a8[21]]!==0){$parent=$(_0xc9a8[944])[_0xc9a8[556]]()};var $next;if($figure[_0xc9a8[21]]!==0){$next=$figure[_0xc9a8[403]]();$figure[_0xc9a8[373]]();}else {if($link[_0xc9a8[21]]!==0){$parent=$link[_0xc9a8[556]]();$link[_0xc9a8[373]]();}else {$image[_0xc9a8[373]]()}};$(_0xc9a8[944])[_0xc9a8[373]]();if($figure[_0xc9a8[21]]!==0){this[_0xc9a8[33]][_0xc9a8[499]]($next)}else {this[_0xc9a8[33]][_0xc9a8[499]]($parent)};this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[970],$image[0][_0xc9a8[687]],$image);this[_0xc9a8[51]][_0xc9a8[862]]();this[_0xc9a8[35]][_0xc9a8[302]]();},insert:function(json,direct,e){if( typeof json[_0xc9a8[19]]!=_0xc9a8[14]){this[_0xc9a8[51]][_0xc9a8[862]]();this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[971],json);return ;};var $img;if( typeof json==_0xc9a8[8]){$img=$(json)[_0xc9a8[307]](_0xc9a8[692],_0xc9a8[972])}else {$img=$(_0xc9a8[973]);$img[_0xc9a8[307]](_0xc9a8[687],json[_0xc9a8[866]])[_0xc9a8[307]](_0xc9a8[692],_0xc9a8[972]);};var node=$img;var isP=this[_0xc9a8[63]][_0xc9a8[633]](_0xc9a8[160]);if(isP){node=$(_0xc9a8[974])[_0xc9a8[370]]($img)};if(direct){this[_0xc9a8[57]][_0xc9a8[768]]();var marker=this[_0xc9a8[57]][_0xc9a8[401]]();this[_0xc9a8[43]][_0xc9a8[868]](e,marker);}else {this[_0xc9a8[51]][_0xc9a8[862]]()};this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[43]][_0xc9a8[69]](this[_0xc9a8[63]][_0xc9a8[914]](node),false);var $image=this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[975])[_0xc9a8[380]](_0xc9a8[692]);if(isP){$image[_0xc9a8[556]]()[_0xc9a8[378]]()[_0xc9a8[377]]()[_0xc9a8[303]](_0xc9a8[976])}else {if(this[_0xc9a8[64]][_0xc9a8[313]]){if(!this[_0xc9a8[63]][_0xc9a8[344]](this[_0xc9a8[35]][_0xc9a8[323]]())){$image[_0xc9a8[557]](_0xc9a8[369])};$image[_0xc9a8[555]](_0xc9a8[369]);}};if( typeof json==_0xc9a8[8]){return };this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[877],$image,json);}}},indent:function(){return {increase:function(){if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[293]][_0xc9a8[39]]()};this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[57]][_0xc9a8[294]]();var block=this[_0xc9a8[57]][_0xc9a8[366]]();if(block&&block[_0xc9a8[353]]==_0xc9a8[184]){this[_0xc9a8[41]][_0xc9a8[977]]()}else {if(block===false&&this[_0xc9a8[64]][_0xc9a8[313]]){this[_0xc9a8[41]][_0xc9a8[978]]()}else {this[_0xc9a8[41]][_0xc9a8[979]]()}};this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();},increaseLists:function(){document[_0xc9a8[365]](_0xc9a8[41]);this[_0xc9a8[41]][_0xc9a8[980]]();this[_0xc9a8[34]][_0xc9a8[981]]();this[_0xc9a8[34]][_0xc9a8[395]]();},increaseBlocks:function(){$[_0xc9a8[20]](this[_0xc9a8[57]][_0xc9a8[296]](),$[_0xc9a8[312]](function(i,elem){if(elem[_0xc9a8[353]]===_0xc9a8[171]||elem[_0xc9a8[353]]===_0xc9a8[361]){return };var $el=this[_0xc9a8[63]][_0xc9a8[308]](elem);var left=this[_0xc9a8[63]][_0xc9a8[982]]($el[_0xc9a8[305]](_0xc9a8[968]))+this[_0xc9a8[64]][_0xc9a8[983]];$el[_0xc9a8[305]](_0xc9a8[968],left+_0xc9a8[530]);},this))},increaseText:function(){var wrapper=this[_0xc9a8[57]][_0xc9a8[303]](_0xc9a8[90]);$(wrapper)[_0xc9a8[307]](_0xc9a8[306],_0xc9a8[4]);$(wrapper)[_0xc9a8[305]](_0xc9a8[968],this[_0xc9a8[64]][_0xc9a8[983]]+_0xc9a8[530]);},decrease:function(){this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[57]][_0xc9a8[294]]();var block=this[_0xc9a8[57]][_0xc9a8[366]]();if(block&&block[_0xc9a8[353]]==_0xc9a8[184]){this[_0xc9a8[41]][_0xc9a8[984]]()}else {this[_0xc9a8[41]][_0xc9a8[985]]()};this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();},decreaseLists:function(){document[_0xc9a8[365]](_0xc9a8[76]);var current=this[_0xc9a8[57]][_0xc9a8[986]]();var $item=$(current)[_0xc9a8[394]](_0xc9a8[154],this[_0xc9a8[293]][0]);this[_0xc9a8[41]][_0xc9a8[980]]();if(!this[_0xc9a8[64]][_0xc9a8[313]]&&$item[_0xc9a8[21]]===0){document[_0xc9a8[365]](_0xc9a8[362],false,_0xc9a8[78]);this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[987])[_0xc9a8[20]]($[_0xc9a8[312]](this[_0xc9a8[63]][_0xc9a8[397]],this));};this[_0xc9a8[34]][_0xc9a8[395]]();},decreaseBlocks:function(){$[_0xc9a8[20]](this[_0xc9a8[57]][_0xc9a8[296]](),$[_0xc9a8[312]](function(i,elem){var $el=this[_0xc9a8[63]][_0xc9a8[308]](elem);var left=this[_0xc9a8[63]][_0xc9a8[982]]($el[_0xc9a8[305]](_0xc9a8[968]))-this[_0xc9a8[64]][_0xc9a8[983]];if(left<=0){if(this[_0xc9a8[64]][_0xc9a8[313]]&& typeof ($el[_0xc9a8[9]](_0xc9a8[314]))!==_0xc9a8[14]){$el[_0xc9a8[315]]($el[_0xc9a8[69]]()+_0xc9a8[712])}else {$el[_0xc9a8[305]](_0xc9a8[968],_0xc9a8[287]);this[_0xc9a8[63]][_0xc9a8[316]]($el,_0xc9a8[88]);}}else {$el[_0xc9a8[305]](_0xc9a8[968],left+_0xc9a8[530])};},this))},fixEmptyIndent:function(){var block=this[_0xc9a8[57]][_0xc9a8[366]]();if(this[_0xc9a8[355]][_0xc9a8[356]]&&block&&block[_0xc9a8[353]]==_0xc9a8[184]&&this[_0xc9a8[63]][_0xc9a8[344]]($(block)[_0xc9a8[871]]())){var $block=$(block);$block[_0xc9a8[374]](_0xc9a8[130])[_0xc9a8[544]](_0xc9a8[988])[_0xc9a8[378]]()[_0xc9a8[377]]();$block[_0xc9a8[370]](_0xc9a8[369]);};}}},inline:function(){return {formatting:function(name){var type,value;if( typeof this[_0xc9a8[70]][name][_0xc9a8[88]]!=_0xc9a8[14]){type=_0xc9a8[88]}else {if( typeof this[_0xc9a8[70]][name][_0xc9a8[336]]!=_0xc9a8[14]){type=_0xc9a8[336]}};if(type){value=this[_0xc9a8[70]][name][type]};this[_0xc9a8[42]][_0xc9a8[339]](this[_0xc9a8[70]][name][_0xc9a8[338]],type,value);},format:function(tag,type,value){var current=this[_0xc9a8[57]][_0xc9a8[986]]();if(current&&current[_0xc9a8[353]]===_0xc9a8[989]){return };this[_0xc9a8[485]]=true;if(this[_0xc9a8[63]][_0xc9a8[633]](_0xc9a8[181])||this[_0xc9a8[63]][_0xc9a8[990]]()){return };var tags=[_0xc9a8[122],_0xc9a8[71],_0xc9a8[151],_0xc9a8[72],_0xc9a8[131],_0xc9a8[991],_0xc9a8[73],_0xc9a8[138],_0xc9a8[139]];var replaced=[_0xc9a8[123],_0xc9a8[123],_0xc9a8[126],_0xc9a8[126],_0xc9a8[128],_0xc9a8[121],_0xc9a8[121],_0xc9a8[150],_0xc9a8[149]];for(var i=0;i<tags[_0xc9a8[21]];i++){if(tag==tags[i]){tag=replaced[i]}};if(this[_0xc9a8[64]][_0xc9a8[693]]){if($[_0xc9a8[341]](tag,this[_0xc9a8[64]][_0xc9a8[693]])== -1){return }}else {if($[_0xc9a8[341]](tag,this[_0xc9a8[64]][_0xc9a8[271]])!== -1){return }};this[_0xc9a8[42]][_0xc9a8[297]]=type||false;this[_0xc9a8[42]][_0xc9a8[351]]=value||false;this[_0xc9a8[30]][_0xc9a8[288]]();if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[293]][_0xc9a8[39]]()};this[_0xc9a8[57]][_0xc9a8[323]]();if(this[_0xc9a8[355]][_0xc9a8[356]]){this[_0xc9a8[42]][_0xc9a8[992]](tag)}else {this[_0xc9a8[42]][_0xc9a8[993]](tag)};},formatCollapsed:function(tag){var current=this[_0xc9a8[57]][_0xc9a8[986]]();var $parent=$(current)[_0xc9a8[394]](tag+_0xc9a8[994]+tag+_0xc9a8[995],this[_0xc9a8[293]][0]);if($parent[_0xc9a8[21]]!==0&&(this[_0xc9a8[42]][_0xc9a8[297]]!=_0xc9a8[88]&&$parent[0][_0xc9a8[353]]!=_0xc9a8[996])){if(this[_0xc9a8[63]][_0xc9a8[344]]($parent[_0xc9a8[871]]())){this[_0xc9a8[33]][_0xc9a8[562]]($parent[0]);$parent[_0xc9a8[373]]();this[_0xc9a8[35]][_0xc9a8[302]]();}else {if(this[_0xc9a8[63]][_0xc9a8[997]]($parent)){this[_0xc9a8[33]][_0xc9a8[562]]($parent[0])}};return ;};var node=$(_0xc9a8[363]+tag+_0xc9a8[364])[_0xc9a8[307]](_0xc9a8[689],_0xc9a8[4])[_0xc9a8[307]](_0xc9a8[735],tag);node[_0xc9a8[69]](this[_0xc9a8[64]][_0xc9a8[565]]);node=this[_0xc9a8[42]][_0xc9a8[998]](node);var node=this[_0xc9a8[43]][_0xc9a8[999]](node);this[_0xc9a8[33]][_0xc9a8[349]](node);this[_0xc9a8[35]][_0xc9a8[302]]();},formatMultiple:function(tag){this[_0xc9a8[42]][_0xc9a8[1000]](tag);this[_0xc9a8[57]][_0xc9a8[294]]();document[_0xc9a8[365]](_0xc9a8[991]);this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[120])[_0xc9a8[20]]($[_0xc9a8[312]](function(i,s){var $el=$(s);this[_0xc9a8[42]][_0xc9a8[1001]]($el,tag);var $span;if(this[_0xc9a8[42]][_0xc9a8[297]]){$span=$(_0xc9a8[523])[_0xc9a8[307]](_0xc9a8[735],tag)[_0xc9a8[307]](_0xc9a8[689],_0xc9a8[4]);$span=this[_0xc9a8[42]][_0xc9a8[998]]($span);}else {$span=$(_0xc9a8[363]+tag+_0xc9a8[364])[_0xc9a8[307]](_0xc9a8[735],tag)[_0xc9a8[307]](_0xc9a8[689],_0xc9a8[4])};$el[_0xc9a8[315]]($span[_0xc9a8[69]]($el[_0xc9a8[378]]()));var $parent=$span[_0xc9a8[556]]();if($parent&&$parent[0][_0xc9a8[353]]===_0xc9a8[1002]){$span[_0xc9a8[556]]()[_0xc9a8[315]]($span)};if(tag==_0xc9a8[130]){if($parent&&$parent[0][_0xc9a8[353]]===_0xc9a8[996]&&this[_0xc9a8[42]][_0xc9a8[297]]===_0xc9a8[88]){var arr=this[_0xc9a8[42]][_0xc9a8[351]][_0xc9a8[13]](_0xc9a8[1003]);for(var z=0;z<arr[_0xc9a8[21]];z++){if(arr[z]===_0xc9a8[287]){return };var style=arr[z][_0xc9a8[13]](_0xc9a8[1004]);$parent[_0xc9a8[305]](style[0],_0xc9a8[287]);if(this[_0xc9a8[63]][_0xc9a8[316]]($parent,_0xc9a8[88])){$parent[_0xc9a8[315]]($parent[_0xc9a8[378]]())};};}};},this));if(tag!=_0xc9a8[130]){this[_0xc9a8[293]][_0xc9a8[374]](this[_0xc9a8[64]][_0xc9a8[734]][_0xc9a8[268]](_0xc9a8[724]))[_0xc9a8[20]]($[_0xc9a8[312]](function(i,s){var $el=$(s);if(s[_0xc9a8[353]]===_0xc9a8[1002]&&s[_0xc9a8[1005]][_0xc9a8[21]]===0){$el[_0xc9a8[315]]($el[_0xc9a8[378]]());return ;};var property=$el[_0xc9a8[305]](_0xc9a8[1006]);if(property===_0xc9a8[1007]){$el[_0xc9a8[305]](_0xc9a8[1006],_0xc9a8[287]);this[_0xc9a8[63]][_0xc9a8[316]]($el,_0xc9a8[88]);};},this))};if(tag!=_0xc9a8[121]){var _this=this;this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[42])[_0xc9a8[20]](function(i,s){_this[_0xc9a8[63]][_0xc9a8[372]](s,_0xc9a8[121])});};this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();},formatRemoveSameChildren:function($el,tag){var self=this;$el[_0xc9a8[348]](tag)[_0xc9a8[20]](function(){var $child=$(this);if(!$child[_0xc9a8[492]](_0xc9a8[1008])){if(self[_0xc9a8[42]][_0xc9a8[297]]==_0xc9a8[88]){var arr=self[_0xc9a8[42]][_0xc9a8[351]][_0xc9a8[13]](_0xc9a8[1003]);for(var z=0;z<arr[_0xc9a8[21]];z++){if(arr[z]===_0xc9a8[287]){return };var style=arr[z][_0xc9a8[13]](_0xc9a8[1004]);$child[_0xc9a8[305]](style[0],_0xc9a8[287]);if(self[_0xc9a8[63]][_0xc9a8[316]]($child,_0xc9a8[88])){$child[_0xc9a8[315]]($child[_0xc9a8[378]]())};};}else {$child[_0xc9a8[378]]()[_0xc9a8[377]]()}};});},formatConvert:function(tag){this[_0xc9a8[57]][_0xc9a8[294]]();var find=_0xc9a8[287];if(this[_0xc9a8[42]][_0xc9a8[297]]==_0xc9a8[336]){find=_0xc9a8[1009]+this[_0xc9a8[42]][_0xc9a8[351]]+_0xc9a8[995]}else {if(this[_0xc9a8[42]][_0xc9a8[297]]==_0xc9a8[88]){find=_0xc9a8[1010]+this[_0xc9a8[42]][_0xc9a8[351]]+_0xc9a8[660]}};var self=this;if(tag!=_0xc9a8[121]){this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[121])[_0xc9a8[20]](function(i,s){self[_0xc9a8[63]][_0xc9a8[372]](s,_0xc9a8[42])})};if(tag!=_0xc9a8[130]){this[_0xc9a8[293]][_0xc9a8[374]](tag)[_0xc9a8[20]](function(){var $el=$(this);$el[_0xc9a8[315]]($(_0xc9a8[1011])[_0xc9a8[69]]($el[_0xc9a8[378]]()));})};this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[1012]+tag+_0xc9a8[660]+find)[_0xc9a8[20]](function(){if(find===_0xc9a8[287]&&tag==_0xc9a8[130]&&this[_0xc9a8[353]][_0xc9a8[368]]()==tag){return };var $el=$(this);$el[_0xc9a8[315]]($(_0xc9a8[1011])[_0xc9a8[69]]($el[_0xc9a8[378]]()));});this[_0xc9a8[57]][_0xc9a8[301]]();},setFormat:function(node){switch(this[_0xc9a8[42]][_0xc9a8[297]]){case _0xc9a8[336]:if(node[_0xc9a8[492]](this[_0xc9a8[42]][_0xc9a8[351]])){node[_0xc9a8[392]](this[_0xc9a8[42]][_0xc9a8[351]]);node[_0xc9a8[380]](_0xc9a8[737]);}else {node[_0xc9a8[389]](this[_0xc9a8[42]][_0xc9a8[351]]);node[_0xc9a8[307]](_0xc9a8[737],this[_0xc9a8[42]][_0xc9a8[351]]);};break ;;case _0xc9a8[88]:node[0][_0xc9a8[88]][_0xc9a8[1013]]=this[_0xc9a8[42]][_0xc9a8[351]];node[_0xc9a8[307]](_0xc9a8[736],this[_0xc9a8[42]][_0xc9a8[351]]);break ;;};return node;},removeStyle:function(){this[_0xc9a8[30]][_0xc9a8[288]]();var current=this[_0xc9a8[57]][_0xc9a8[986]]();var nodes=this[_0xc9a8[57]][_0xc9a8[1014]]();this[_0xc9a8[57]][_0xc9a8[294]]();if(current&&current[_0xc9a8[353]]===_0xc9a8[996]){var $s=$(current);$s[_0xc9a8[380]](_0xc9a8[88]);if($s[0][_0xc9a8[1005]][_0xc9a8[21]]===0){$s[_0xc9a8[315]]($s[_0xc9a8[378]]())};};$[_0xc9a8[20]](nodes,$[_0xc9a8[312]](function(i,s){var $s=$(s);if($[_0xc9a8[341]](s[_0xc9a8[353]][_0xc9a8[368]](),this[_0xc9a8[64]][_0xc9a8[734]])!=-1&&!$s[_0xc9a8[492]](_0xc9a8[1008])){$s[_0xc9a8[380]](_0xc9a8[88]);if($s[0][_0xc9a8[1005]][_0xc9a8[21]]===0){$s[_0xc9a8[315]]($s[_0xc9a8[378]]())};};},this));this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();},removeStyleRule:function(name){this[_0xc9a8[30]][_0xc9a8[288]]();var parent=this[_0xc9a8[57]][_0xc9a8[1015]]();var nodes=this[_0xc9a8[57]][_0xc9a8[1014]]();this[_0xc9a8[57]][_0xc9a8[294]]();if(parent&&parent[_0xc9a8[353]]===_0xc9a8[996]){var $s=$(parent);$s[_0xc9a8[305]](name,_0xc9a8[287]);this[_0xc9a8[63]][_0xc9a8[316]]($s,_0xc9a8[88]);if($s[0][_0xc9a8[1005]][_0xc9a8[21]]===0){$s[_0xc9a8[315]]($s[_0xc9a8[378]]())};};$[_0xc9a8[20]](nodes,$[_0xc9a8[312]](function(i,s){var $s=$(s);if($[_0xc9a8[341]](s[_0xc9a8[353]][_0xc9a8[368]](),this[_0xc9a8[64]][_0xc9a8[734]])!=-1&&!$s[_0xc9a8[492]](_0xc9a8[1008])){$s[_0xc9a8[305]](name,_0xc9a8[287]);this[_0xc9a8[63]][_0xc9a8[316]]($s,_0xc9a8[88]);if($s[0][_0xc9a8[1005]][_0xc9a8[21]]===0){$s[_0xc9a8[315]]($s[_0xc9a8[378]]())};};},this));this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();},removeFormat:function(){this[_0xc9a8[30]][_0xc9a8[288]]();var current=this[_0xc9a8[57]][_0xc9a8[986]]();this[_0xc9a8[57]][_0xc9a8[294]]();document[_0xc9a8[365]](_0xc9a8[1016]);if(current&&current[_0xc9a8[353]]===_0xc9a8[996]){$(current)[_0xc9a8[315]]($(current)[_0xc9a8[378]]())};$[_0xc9a8[20]](this[_0xc9a8[57]][_0xc9a8[1017]](),$[_0xc9a8[312]](function(i,s){var $s=$(s);if($[_0xc9a8[341]](s[_0xc9a8[353]][_0xc9a8[368]](),this[_0xc9a8[64]][_0xc9a8[734]])!=-1&&!$s[_0xc9a8[492]](_0xc9a8[1008])){$s[_0xc9a8[315]]($s[_0xc9a8[378]]())};},this));this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();},toggleClass:function(className){this[_0xc9a8[42]][_0xc9a8[339]](_0xc9a8[130],_0xc9a8[336],className)},toggleStyle:function(value){this[_0xc9a8[42]][_0xc9a8[339]](_0xc9a8[130],_0xc9a8[88],value)}}},insert:function(){return {set:function(html,clean){this[_0xc9a8[55]][_0xc9a8[373]]();html=this[_0xc9a8[34]][_0xc9a8[595]](html);if( typeof clean==_0xc9a8[14]){html=this[_0xc9a8[34]][_0xc9a8[1018]](html,false)};this[_0xc9a8[293]][_0xc9a8[69]](html);this[_0xc9a8[57]][_0xc9a8[373]]();this[_0xc9a8[39]][_0xc9a8[349]]();this[_0xc9a8[34]][_0xc9a8[981]]();this[_0xc9a8[35]][_0xc9a8[302]]();this[_0xc9a8[52]][_0xc9a8[276]]();if( typeof clean==_0xc9a8[14]){setTimeout($[_0xc9a8[312]](this[_0xc9a8[34]][_0xc9a8[395]],this),10)};},text:function(text){this[_0xc9a8[55]][_0xc9a8[373]]();text=text.toString();text=$[_0xc9a8[343]](text);text=this[_0xc9a8[34]][_0xc9a8[630]](text,false);this[_0xc9a8[293]][_0xc9a8[39]]();if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[43]][_0xc9a8[1019]](text)}else {this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[1020]]();var el=document[_0xc9a8[359]](_0xc9a8[90]);el[_0xc9a8[564]]=text;var frag=document[_0xc9a8[1021]](),node,lastNode;while((node=el[_0xc9a8[1023]])){lastNode=frag[_0xc9a8[1022]](node)};this[_0xc9a8[355]][_0xc9a8[1024]](frag);if(lastNode){var range=this[_0xc9a8[355]][_0xc9a8[575]]();range[_0xc9a8[570]](lastNode);range[_0xc9a8[574]](true);this[_0xc9a8[860]][_0xc9a8[1025]]();this[_0xc9a8[860]][_0xc9a8[567]](range);};};this[_0xc9a8[35]][_0xc9a8[302]]();this[_0xc9a8[34]][_0xc9a8[395]]();},htmlWithoutClean:function(html){this[_0xc9a8[43]][_0xc9a8[69]](html,false)},html:function(html,clean){this[_0xc9a8[55]][_0xc9a8[373]]();if( typeof clean==_0xc9a8[14]){clean=true};this[_0xc9a8[293]][_0xc9a8[39]]();html=this[_0xc9a8[34]][_0xc9a8[595]](html);if(clean){html=this[_0xc9a8[34]][_0xc9a8[1018]](html)};if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[43]][_0xc9a8[1019]](html)}else {if(this[_0xc9a8[34]][_0xc9a8[642]]){this[_0xc9a8[43]][_0xc9a8[1026]](html)}else {document[_0xc9a8[365]](_0xc9a8[1027],false,html)};this[_0xc9a8[43]][_0xc9a8[1028]]();};this[_0xc9a8[34]][_0xc9a8[981]]();if(!this[_0xc9a8[64]][_0xc9a8[313]]){this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[78])[_0xc9a8[20]]($[_0xc9a8[312]](this[_0xc9a8[63]][_0xc9a8[397]],this))};this[_0xc9a8[35]][_0xc9a8[302]]();this[_0xc9a8[52]][_0xc9a8[276]]();if(clean){this[_0xc9a8[34]][_0xc9a8[395]]()};},htmlFixMozilla:function(){if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){return };var $next=$(this[_0xc9a8[57]][_0xc9a8[366]]())[_0xc9a8[403]]();if($next[_0xc9a8[21]]>0&&$next[0][_0xc9a8[353]]==_0xc9a8[160]&&$next[_0xc9a8[69]]()===_0xc9a8[287]){$next[_0xc9a8[373]]()};},htmlIe:function(html){if(this[_0xc9a8[63]][_0xc9a8[1029]]()){var parent=this[_0xc9a8[63]][_0xc9a8[633]](_0xc9a8[160]);var $html=$(_0xc9a8[593])[_0xc9a8[370]](html);var blocksMatch=$html[_0xc9a8[378]]()[_0xc9a8[494]](_0xc9a8[1030]);if(parent&&blocksMatch){this[_0xc9a8[43]][_0xc9a8[1031]](parent,html)}else {this[_0xc9a8[43]][_0xc9a8[1032]](html)};return ;};document[_0xc9a8[57]][_0xc9a8[1034]]()[_0xc9a8[1033]](html);},execHtml:function(html){html=this[_0xc9a8[34]][_0xc9a8[595]](html);this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[1020]]();var el=document[_0xc9a8[359]](_0xc9a8[90]);el[_0xc9a8[564]]=html;var frag=document[_0xc9a8[1021]](),node,lastNode;while((node=el[_0xc9a8[1023]])){lastNode=frag[_0xc9a8[1022]](node)};this[_0xc9a8[355]][_0xc9a8[1024]](frag);this[_0xc9a8[355]][_0xc9a8[574]](true);this[_0xc9a8[33]][_0xc9a8[562]](lastNode);},node:function(node,deleteContents){node=node[0]||node;var html=this[_0xc9a8[63]][_0xc9a8[914]](node);html=this[_0xc9a8[34]][_0xc9a8[595]](html);if(html[_0xc9a8[649]](/</g)!==null){node=$(html)[0]};this[_0xc9a8[57]][_0xc9a8[323]]();if(deleteContents!==false){this[_0xc9a8[355]][_0xc9a8[1020]]()};this[_0xc9a8[355]][_0xc9a8[1024]](node);this[_0xc9a8[355]][_0xc9a8[574]](false);this[_0xc9a8[57]][_0xc9a8[567]]();return node;},nodeToPoint:function(node,x,y){node=node[0]||node;this[_0xc9a8[57]][_0xc9a8[323]]();var range;if(document[_0xc9a8[1035]]){var pos=document[_0xc9a8[1035]](x,y);this[_0xc9a8[355]][_0xc9a8[499]](pos[_0xc9a8[1036]],pos[_0xc9a8[526]]);this[_0xc9a8[355]][_0xc9a8[574]](true);this[_0xc9a8[355]][_0xc9a8[1024]](node);}else {if(document[_0xc9a8[1037]]){range=document[_0xc9a8[1037]](x,y);range[_0xc9a8[1024]](node);}else {if( typeof document[_0xc9a8[273]][_0xc9a8[1038]]!=_0xc9a8[14]){range=document[_0xc9a8[273]][_0xc9a8[1038]]();range[_0xc9a8[1039]](x,y);var endRange=range[_0xc9a8[1040]]();endRange[_0xc9a8[1039]](x,y);range[_0xc9a8[1042]](_0xc9a8[1041],endRange);range[_0xc9a8[104]]();}}};},nodeToCaretPositionFromPoint:function(e,node){node=node[0]||node;var range;var x=e[_0xc9a8[1043]],y=e[_0xc9a8[1044]];if(document[_0xc9a8[1035]]){var pos=document[_0xc9a8[1035]](x,y);var sel=document[_0xc9a8[579]]();range=sel[_0xc9a8[581]](0);range[_0xc9a8[499]](pos[_0xc9a8[1036]],pos[_0xc9a8[526]]);range[_0xc9a8[574]](true);range[_0xc9a8[1024]](node);}else {if(document[_0xc9a8[1037]]){range=document[_0xc9a8[1037]](x,y);range[_0xc9a8[1024]](node);}else {if( typeof document[_0xc9a8[273]][_0xc9a8[1038]]!=_0xc9a8[14]){range=document[_0xc9a8[273]][_0xc9a8[1038]]();range[_0xc9a8[1039]](x,y);var endRange=range[_0xc9a8[1040]]();endRange[_0xc9a8[1039]](x,y);range[_0xc9a8[1042]](_0xc9a8[1041],endRange);range[_0xc9a8[104]]();}}};},ie11FixInserting:function(parent,html){var node=document[_0xc9a8[359]](_0xc9a8[130]);node[_0xc9a8[1045]]=_0xc9a8[1046];this[_0xc9a8[43]][_0xc9a8[999]](node);var parHtml=$(parent)[_0xc9a8[69]]();parHtml=_0xc9a8[673]+parHtml[_0xc9a8[587]](/<span class="redactor-ie-paste"><\/span>/gi,_0xc9a8[674]+html+_0xc9a8[673])+_0xc9a8[674];parHtml=parHtml[_0xc9a8[587]](/<p><\/p>/gi,_0xc9a8[287]);$(parent)[_0xc9a8[315]](parHtml);},ie11PasteFrag:function(html){this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[1020]]();var el=document[_0xc9a8[359]](_0xc9a8[90]);el[_0xc9a8[564]]=html;var frag=document[_0xc9a8[1021]](),node,lastNode;while((node=el[_0xc9a8[1023]])){lastNode=frag[_0xc9a8[1022]](node)};this[_0xc9a8[355]][_0xc9a8[1024]](frag);this[_0xc9a8[355]][_0xc9a8[574]](false);this[_0xc9a8[57]][_0xc9a8[567]]();}}},keydown:function(){return {init:function(e){if(this[_0xc9a8[258]]){return };var key=e[_0xc9a8[849]];var arrow=(key>=37&&key<=40);this[_0xc9a8[44]][_0xc9a8[1047]]=e[_0xc9a8[1048]]||e[_0xc9a8[1049]];this[_0xc9a8[44]][_0xc9a8[1050]]=this[_0xc9a8[57]][_0xc9a8[986]]();this[_0xc9a8[44]][_0xc9a8[556]]=this[_0xc9a8[57]][_0xc9a8[1015]]();this[_0xc9a8[44]][_0xc9a8[29]]=this[_0xc9a8[57]][_0xc9a8[366]]();this[_0xc9a8[44]][_0xc9a8[80]]=this[_0xc9a8[63]][_0xc9a8[1051]](this[_0xc9a8[44]][_0xc9a8[1050]],_0xc9a8[80]);this[_0xc9a8[44]][_0xc9a8[79]]=this[_0xc9a8[63]][_0xc9a8[1051]](this[_0xc9a8[44]][_0xc9a8[1050]],_0xc9a8[79]);this[_0xc9a8[44]][_0xc9a8[95]]=this[_0xc9a8[63]][_0xc9a8[1051]](this[_0xc9a8[44]][_0xc9a8[1050]],_0xc9a8[95]);this[_0xc9a8[58]][_0xc9a8[22]](e,key);if(this[_0xc9a8[63]][_0xc9a8[516]]()){this[_0xc9a8[44]][_0xc9a8[1052]](arrow,key);this[_0xc9a8[44]][_0xc9a8[1053]](e,key);};this[_0xc9a8[44]][_0xc9a8[1054]](arrow);this[_0xc9a8[44]][_0xc9a8[1055]](e,key);var keydownStop=this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[44],e);if(keydownStop===false){e[_0xc9a8[455]]();return false;};if(this[_0xc9a8[64]][_0xc9a8[1056]]&&(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])||this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345]))&&(key===this[_0xc9a8[794]][_0xc9a8[1057]]||key===this[_0xc9a8[794]][_0xc9a8[1058]])){var isEndOfTable=false;var $table=false;if(this[_0xc9a8[44]][_0xc9a8[29]]&&this[_0xc9a8[44]][_0xc9a8[29]][_0xc9a8[353]]===_0xc9a8[171]){$table=$(this[_0xc9a8[44]][_0xc9a8[29]])[_0xc9a8[394]](_0xc9a8[89],this[_0xc9a8[293]][0])};if($table&&$table[_0xc9a8[374]](_0xc9a8[384])[_0xc9a8[661]]()[0]===this[_0xc9a8[44]][_0xc9a8[29]]){isEndOfTable=true};if(this[_0xc9a8[63]][_0xc9a8[997]]()&&isEndOfTable){var node=$(this[_0xc9a8[64]][_0xc9a8[566]]);$table[_0xc9a8[555]](node);this[_0xc9a8[33]][_0xc9a8[499]](node);};};if(this[_0xc9a8[64]][_0xc9a8[1056]]&&key===this[_0xc9a8[794]][_0xc9a8[1057]]){this[_0xc9a8[44]][_0xc9a8[1059]]()};if(!this[_0xc9a8[64]][_0xc9a8[1056]]&&key===this[_0xc9a8[794]][_0xc9a8[1060]]){e[_0xc9a8[455]]();if(!this[_0xc9a8[355]][_0xc9a8[356]]){this[_0xc9a8[355]][_0xc9a8[1020]]()};return ;};if(key==this[_0xc9a8[794]][_0xc9a8[1060]]&&!e[_0xc9a8[1061]]&&!e[_0xc9a8[1048]]&&!e[_0xc9a8[1049]]){var stop=this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[1062],e);if(stop===false){e[_0xc9a8[455]]();return false;};if(this[_0xc9a8[44]][_0xc9a8[79]]&&this[_0xc9a8[44]][_0xc9a8[1063]](e)===true){return false};var current,$next;if(this[_0xc9a8[44]][_0xc9a8[80]]){return this[_0xc9a8[44]][_0xc9a8[1064]](e)}else {if(this[_0xc9a8[44]][_0xc9a8[79]]||this[_0xc9a8[44]][_0xc9a8[95]]){current=this[_0xc9a8[57]][_0xc9a8[986]]();$next=$(current)[_0xc9a8[403]]();if($next[_0xc9a8[21]]!==0&&$next[0][_0xc9a8[353]]==_0xc9a8[405]){return this[_0xc9a8[44]][_0xc9a8[1065]](e)}else {if(this[_0xc9a8[63]][_0xc9a8[997]]()&&(current&&current!=_0xc9a8[996])){return this[_0xc9a8[44]][_0xc9a8[1066]](e)}else {return this[_0xc9a8[44]][_0xc9a8[1065]](e)}};}else {if(this[_0xc9a8[64]][_0xc9a8[313]]&&!this[_0xc9a8[44]][_0xc9a8[29]]){current=this[_0xc9a8[57]][_0xc9a8[986]]();$next=$(this[_0xc9a8[44]][_0xc9a8[1050]])[_0xc9a8[403]]();if($next[_0xc9a8[21]]!==0&&$next[0][_0xc9a8[353]]==_0xc9a8[405]){return this[_0xc9a8[44]][_0xc9a8[1065]](e)}else {if(current!==false&&$(current)[_0xc9a8[492]](_0xc9a8[1067])){this[_0xc9a8[33]][_0xc9a8[562]](current);$(current)[_0xc9a8[378]]()[_0xc9a8[377]]();return this[_0xc9a8[44]][_0xc9a8[1066]](e);}else {if(this[_0xc9a8[63]][_0xc9a8[1068]]()){return this[_0xc9a8[44]][_0xc9a8[1066]](e)}else {if($next[_0xc9a8[21]]===0&&current===false&& typeof $next[_0xc9a8[1069]]!=_0xc9a8[14]){return this[_0xc9a8[44]][_0xc9a8[1065]](e)}};return this[_0xc9a8[44]][_0xc9a8[1065]](e);}};}else {if(this[_0xc9a8[64]][_0xc9a8[313]]&&this[_0xc9a8[44]][_0xc9a8[29]]){setTimeout($[_0xc9a8[312]](this[_0xc9a8[44]][_0xc9a8[1070]],this),1)}else {if(!this[_0xc9a8[64]][_0xc9a8[313]]&&this[_0xc9a8[44]][_0xc9a8[29]]){setTimeout($[_0xc9a8[312]](this[_0xc9a8[44]][_0xc9a8[1071]],this),1);if(this[_0xc9a8[44]][_0xc9a8[29]][_0xc9a8[353]]===_0xc9a8[184]){current=this[_0xc9a8[57]][_0xc9a8[986]]();var $parent=$(current)[_0xc9a8[394]](_0xc9a8[154],this[_0xc9a8[293]][0]);var $list=$parent[_0xc9a8[394]](_0xc9a8[1072],this[_0xc9a8[293]][0]);if($parent[_0xc9a8[21]]!==0&&this[_0xc9a8[63]][_0xc9a8[344]]($parent[_0xc9a8[69]]())&&$list[_0xc9a8[403]]()[_0xc9a8[21]]===0&&this[_0xc9a8[63]][_0xc9a8[344]]($list[_0xc9a8[374]](_0xc9a8[154])[_0xc9a8[661]]()[_0xc9a8[69]]())){$list[_0xc9a8[374]](_0xc9a8[154])[_0xc9a8[661]]()[_0xc9a8[373]]();var node=$(this[_0xc9a8[64]][_0xc9a8[566]]);$list[_0xc9a8[555]](node);this[_0xc9a8[33]][_0xc9a8[499]](node);return false;};};}else {if(!this[_0xc9a8[64]][_0xc9a8[313]]&&!this[_0xc9a8[44]][_0xc9a8[29]]){return this[_0xc9a8[44]][_0xc9a8[1073]](e)}}}}}};};if(key===this[_0xc9a8[794]][_0xc9a8[1060]]&&(e[_0xc9a8[1048]]||e[_0xc9a8[1061]])){return this[_0xc9a8[44]][_0xc9a8[1074]](e)};if(key===this[_0xc9a8[794]][_0xc9a8[1075]]||e[_0xc9a8[1049]]&&key===221||e[_0xc9a8[1049]]&&key===219){return this[_0xc9a8[44]][_0xc9a8[1076]](e,key)};if(key===this[_0xc9a8[794]][_0xc9a8[1077]]||key===this[_0xc9a8[794]][_0xc9a8[1078]]){var nodes=this[_0xc9a8[57]][_0xc9a8[1017]]();if(nodes){var len=nodes[_0xc9a8[21]];var last;for(var i=0;i<len;i++){var children=$(nodes[i])[_0xc9a8[348]](_0xc9a8[148]);if(children[_0xc9a8[21]]!==0){var self=this;$[_0xc9a8[20]](children,function(z,s){var $s=$(s);if($s[_0xc9a8[305]](_0xc9a8[899])!=_0xc9a8[900]){return };self[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[970],s[_0xc9a8[687]],$s);last=s;});}else {if(nodes[i][_0xc9a8[353]]==_0xc9a8[950]){if(last!=nodes[i]){this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[970],nodes[i][_0xc9a8[687]],$(nodes[i]));last=nodes[i];}}};};};};if(key===this[_0xc9a8[794]][_0xc9a8[1077]]){var block=this[_0xc9a8[57]][_0xc9a8[366]]();var indented=($(block)[_0xc9a8[305]](_0xc9a8[968])!==_0xc9a8[1079]);if(block&&indented&&this[_0xc9a8[355]][_0xc9a8[356]]&&this[_0xc9a8[63]][_0xc9a8[1080]]()){this[_0xc9a8[41]][_0xc9a8[1081]]();e[_0xc9a8[455]]();return ;};if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){var prev=this[_0xc9a8[57]][_0xc9a8[1082]]();var prev2=$(prev)[_0xc9a8[569]]()[0];if(prev&&prev[_0xc9a8[353]]===_0xc9a8[1083]){$(prev)[_0xc9a8[373]]()};if(prev2&&prev2[_0xc9a8[353]]===_0xc9a8[1083]){$(prev2)[_0xc9a8[373]]()};};this[_0xc9a8[44]][_0xc9a8[1084]]();this[_0xc9a8[44]][_0xc9a8[1085]](e);};this[_0xc9a8[35]][_0xc9a8[302]]();},checkEvents:function(arrow,key){if(!arrow&&(this[_0xc9a8[36]][_0xc9a8[469]]()==_0xc9a8[470]||this[_0xc9a8[36]][_0xc9a8[469]]()==_0xc9a8[471])){this[_0xc9a8[36]][_0xc9a8[472]](false);if(this[_0xc9a8[44]][_0xc9a8[1086]](key)){this[_0xc9a8[30]][_0xc9a8[288]]()};}},checkKeyEvents:function(key){var k=this[_0xc9a8[794]];var keys=[k[_0xc9a8[1077]],k[_0xc9a8[1078]],k[_0xc9a8[1060]],k[_0xc9a8[1087]],k[_0xc9a8[850]],k[_0xc9a8[1075]],k[_0xc9a8[1088]],k[_0xc9a8[1089]],k[_0xc9a8[1090]],k[_0xc9a8[1091]]];return ($[_0xc9a8[341]](key,keys)== -1)?true:false;},addArrowsEvent:function(arrow){if(!arrow){return };if((this[_0xc9a8[36]][_0xc9a8[469]]()==_0xc9a8[470]||this[_0xc9a8[36]][_0xc9a8[469]]()==_0xc9a8[471])){this[_0xc9a8[36]][_0xc9a8[472]](false);return ;};this[_0xc9a8[36]][_0xc9a8[472]](_0xc9a8[471]);},setupBuffer:function(e,key){if(this[_0xc9a8[44]][_0xc9a8[1047]]&&key===90&&!e[_0xc9a8[1061]]&&!e[_0xc9a8[1092]]&&this[_0xc9a8[64]][_0xc9a8[30]][_0xc9a8[21]]){e[_0xc9a8[455]]();this[_0xc9a8[30]][_0xc9a8[410]]();return ;}else {if(this[_0xc9a8[44]][_0xc9a8[1047]]&&key===90&&e[_0xc9a8[1061]]&&!e[_0xc9a8[1092]]&&this[_0xc9a8[64]][_0xc9a8[413]][_0xc9a8[21]]!==0){e[_0xc9a8[455]]();this[_0xc9a8[30]][_0xc9a8[415]]();return ;}else {if(!this[_0xc9a8[44]][_0xc9a8[1047]]){if(key==this[_0xc9a8[794]][_0xc9a8[1077]]||key==this[_0xc9a8[794]][_0xc9a8[1078]]||(key==this[_0xc9a8[794]][_0xc9a8[1060]]&&!e[_0xc9a8[1048]]&&!e[_0xc9a8[1061]])||key==this[_0xc9a8[794]][_0xc9a8[1087]]){this[_0xc9a8[30]][_0xc9a8[288]]()}}}}},setupSelectAll:function(e,key){if(this[_0xc9a8[44]][_0xc9a8[1047]]&&key===65){this[_0xc9a8[63]][_0xc9a8[1093]]()}else {if(key!=this[_0xc9a8[794]][_0xc9a8[1094]]&&!this[_0xc9a8[44]][_0xc9a8[1047]]){this[_0xc9a8[63]][_0xc9a8[473]]()}}},onArrowDown:function(){var tags=[this[_0xc9a8[44]][_0xc9a8[79]],this[_0xc9a8[44]][_0xc9a8[80]],this[_0xc9a8[44]][_0xc9a8[95]]];for(var i=0;i<tags[_0xc9a8[21]];i++){if(tags[i]){this[_0xc9a8[44]][_0xc9a8[1095]](tags[i]);return false;}};},onShiftEnter:function(e){this[_0xc9a8[30]][_0xc9a8[288]]();if(this[_0xc9a8[63]][_0xc9a8[997]]()){return this[_0xc9a8[44]][_0xc9a8[1066]](e)};return this[_0xc9a8[44]][_0xc9a8[1065]](e);},onTab:function(e,key){if(!this[_0xc9a8[64]][_0xc9a8[1096]]){return true};if(this[_0xc9a8[63]][_0xc9a8[344]](this[_0xc9a8[35]][_0xc9a8[323]]())&&this[_0xc9a8[64]][_0xc9a8[1097]]===false){return true};e[_0xc9a8[455]]();var node;if(this[_0xc9a8[44]][_0xc9a8[80]]&&!e[_0xc9a8[1061]]){node=(this[_0xc9a8[64]][_0xc9a8[702]])?document[_0xc9a8[1098]](Array(this[_0xc9a8[64]][_0xc9a8[702]]+1)[_0xc9a8[268]](_0xc9a8[651])):document[_0xc9a8[1098]](_0xc9a8[628]);this[_0xc9a8[43]][_0xc9a8[999]](node);this[_0xc9a8[35]][_0xc9a8[302]]();}else {if(this[_0xc9a8[64]][_0xc9a8[1097]]!==false){node=document[_0xc9a8[1098]](Array(this[_0xc9a8[64]][_0xc9a8[1097]]+1)[_0xc9a8[268]](_0xc9a8[651]));this[_0xc9a8[43]][_0xc9a8[999]](node);this[_0xc9a8[35]][_0xc9a8[302]]();}else {if(e[_0xc9a8[1049]]&&key===219){this[_0xc9a8[41]][_0xc9a8[1081]]()}else {if(e[_0xc9a8[1049]]&&key===221){this[_0xc9a8[41]][_0xc9a8[1099]]()}else {if(!e[_0xc9a8[1061]]){this[_0xc9a8[41]][_0xc9a8[1099]]()}else {this[_0xc9a8[41]][_0xc9a8[1081]]()}}}}};return false;},replaceDivToBreakLine:function(){var blockElem=this[_0xc9a8[57]][_0xc9a8[366]]();var blockHtml=blockElem[_0xc9a8[564]][_0xc9a8[587]](/<br\s?\/?>/gi,_0xc9a8[287]);if((blockElem[_0xc9a8[353]]===_0xc9a8[170]||blockElem[_0xc9a8[353]]===_0xc9a8[160])&&blockHtml===_0xc9a8[287]&&!$(blockElem)[_0xc9a8[492]](_0xc9a8[437])){var br=document[_0xc9a8[359]](_0xc9a8[678]);$(blockElem)[_0xc9a8[315]](br);this[_0xc9a8[33]][_0xc9a8[1100]](br);this[_0xc9a8[35]][_0xc9a8[302]]();return false;};},replaceDivToParagraph:function(){var blockElem=this[_0xc9a8[57]][_0xc9a8[366]]();var blockHtml=blockElem[_0xc9a8[564]][_0xc9a8[587]](/<br\s?\/?>/gi,_0xc9a8[287]);if(blockElem[_0xc9a8[353]]===_0xc9a8[170]&&this[_0xc9a8[63]][_0xc9a8[344]](blockHtml)&&!$(blockElem)[_0xc9a8[492]](_0xc9a8[437])){var p=document[_0xc9a8[359]](_0xc9a8[78]);p[_0xc9a8[564]]=this[_0xc9a8[64]][_0xc9a8[565]];$(blockElem)[_0xc9a8[315]](p);this[_0xc9a8[33]][_0xc9a8[499]](p);this[_0xc9a8[35]][_0xc9a8[302]]();return false;}else {if(this[_0xc9a8[64]][_0xc9a8[1101]]&&blockElem[_0xc9a8[353]]==_0xc9a8[160]){$(blockElem)[_0xc9a8[380]](_0xc9a8[336])[_0xc9a8[380]](_0xc9a8[88])}};},insertParagraph:function(e){e[_0xc9a8[455]]();this[_0xc9a8[57]][_0xc9a8[323]]();var p=document[_0xc9a8[359]](_0xc9a8[78]);p[_0xc9a8[564]]=this[_0xc9a8[64]][_0xc9a8[565]];this[_0xc9a8[355]][_0xc9a8[1020]]();this[_0xc9a8[355]][_0xc9a8[1024]](p);this[_0xc9a8[33]][_0xc9a8[499]](p);this[_0xc9a8[35]][_0xc9a8[302]]();return false;},exitFromBlockquote:function(e){if(!this[_0xc9a8[63]][_0xc9a8[997]]()){return };var tmp=$[_0xc9a8[343]]($(this[_0xc9a8[44]][_0xc9a8[29]])[_0xc9a8[69]]());if(tmp[_0xc9a8[10]](/(<br\s?\/?>){2}$/i)!= -1){e[_0xc9a8[455]]();if(this[_0xc9a8[64]][_0xc9a8[313]]){var br=document[_0xc9a8[359]](_0xc9a8[678]);$(this[_0xc9a8[44]][_0xc9a8[79]])[_0xc9a8[555]](br);this[_0xc9a8[33]][_0xc9a8[1100]](br);$(this[_0xc9a8[44]][_0xc9a8[29]])[_0xc9a8[69]](tmp[_0xc9a8[587]](/<br\s?\/?>$/i,_0xc9a8[287]));}else {var node=$(this[_0xc9a8[64]][_0xc9a8[566]]);$(this[_0xc9a8[44]][_0xc9a8[79]])[_0xc9a8[555]](node);this[_0xc9a8[33]][_0xc9a8[499]](node);};return true;};return ;},insertAfterLastElement:function(element){if(!this[_0xc9a8[63]][_0xc9a8[997]]()){return };this[_0xc9a8[30]][_0xc9a8[288]]();if(this[_0xc9a8[64]][_0xc9a8[313]]){var contents=$(_0xc9a8[593])[_0xc9a8[370]]($[_0xc9a8[343]](this[_0xc9a8[293]][_0xc9a8[69]]()))[_0xc9a8[378]]();var last=contents[_0xc9a8[661]]()[0];if(last[_0xc9a8[353]]==_0xc9a8[996]&&last[_0xc9a8[564]]===_0xc9a8[287]){last=contents[_0xc9a8[569]]()[0]};if(this[_0xc9a8[63]][_0xc9a8[914]](last)!=this[_0xc9a8[63]][_0xc9a8[914]](element)){return };var br=document[_0xc9a8[359]](_0xc9a8[678]);$(element)[_0xc9a8[555]](br);this[_0xc9a8[33]][_0xc9a8[562]](br);}else {if(this[_0xc9a8[293]][_0xc9a8[378]]()[_0xc9a8[661]]()[0]!==element){return };var node=$(this[_0xc9a8[64]][_0xc9a8[566]]);$(element)[_0xc9a8[555]](node);this[_0xc9a8[33]][_0xc9a8[499]](node);};},insertNewLine:function(e){e[_0xc9a8[455]]();var node=document[_0xc9a8[1098]](_0xc9a8[672]);this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[1020]]();this[_0xc9a8[355]][_0xc9a8[1024]](node);this[_0xc9a8[33]][_0xc9a8[562]](node);this[_0xc9a8[35]][_0xc9a8[302]]();return false;},insertBreakLine:function(e){return this[_0xc9a8[44]][_0xc9a8[1102]](e)},insertDblBreakLine:function(e){return this[_0xc9a8[44]][_0xc9a8[1102]](e,true)},insertBreakLineProcessing:function(e,dbl){e[_0xc9a8[848]]();this[_0xc9a8[57]][_0xc9a8[323]]();var br1=document[_0xc9a8[359]](_0xc9a8[678]);if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[355]][_0xc9a8[574]](false);this[_0xc9a8[355]][_0xc9a8[349]](this[_0xc9a8[355]][_0xc9a8[577]],this[_0xc9a8[355]][_0xc9a8[578]]);}else {this[_0xc9a8[355]][_0xc9a8[1020]]()};this[_0xc9a8[355]][_0xc9a8[1024]](br1);var $parentA=$(br1)[_0xc9a8[556]](_0xc9a8[147]);if($parentA[_0xc9a8[21]]>0){$parentA[_0xc9a8[374]](br1)[_0xc9a8[373]]();$parentA[_0xc9a8[555]](br1);};if(dbl===true){var $next=$(br1)[_0xc9a8[403]]();if($next[_0xc9a8[21]]!==0&&$next[0][_0xc9a8[353]]===_0xc9a8[405]&&this[_0xc9a8[63]][_0xc9a8[1068]]()){this[_0xc9a8[33]][_0xc9a8[562]](br1);this[_0xc9a8[35]][_0xc9a8[302]]();return false;};var br2=document[_0xc9a8[359]](_0xc9a8[678]);this[_0xc9a8[355]][_0xc9a8[1024]](br2);this[_0xc9a8[33]][_0xc9a8[562]](br2);}else {if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){var space=document[_0xc9a8[359]](_0xc9a8[130]);space[_0xc9a8[564]]=_0xc9a8[143];$(br1)[_0xc9a8[555]](space);this[_0xc9a8[33]][_0xc9a8[562]](space);$(space)[_0xc9a8[373]]();}else {var range=document[_0xc9a8[1034]]();range[_0xc9a8[570]](br1);range[_0xc9a8[574]](true);var selection=window[_0xc9a8[579]]();selection[_0xc9a8[1025]]();selection[_0xc9a8[567]](range);}};this[_0xc9a8[35]][_0xc9a8[302]]();return false;},removeInvisibleSpace:function(){var $current=$(this[_0xc9a8[44]][_0xc9a8[1050]]);if($current[_0xc9a8[871]]()[_0xc9a8[10]](/^\u200B$/g)===0){$current[_0xc9a8[373]]()};},removeEmptyListInTable:function(e){var $current=$(this[_0xc9a8[44]][_0xc9a8[1050]]);var $parent=$(this[_0xc9a8[44]][_0xc9a8[556]]);var td=$current[_0xc9a8[394]](_0xc9a8[384],this[_0xc9a8[293]][0]);if(td[_0xc9a8[21]]!==0&&$current[_0xc9a8[394]](_0xc9a8[154],this[_0xc9a8[293]][0])&&$parent[_0xc9a8[348]](_0xc9a8[154])[_0xc9a8[21]]===1){if(!this[_0xc9a8[63]][_0xc9a8[344]]($current[_0xc9a8[871]]())){return };e[_0xc9a8[455]]();$current[_0xc9a8[373]]();$parent[_0xc9a8[373]]();this[_0xc9a8[33]][_0xc9a8[499]](td);};}}},keyup:function(){return {init:function(e){if(this[_0xc9a8[258]]){return };var key=e[_0xc9a8[849]];this[_0xc9a8[45]][_0xc9a8[1050]]=this[_0xc9a8[57]][_0xc9a8[986]]();this[_0xc9a8[45]][_0xc9a8[556]]=this[_0xc9a8[57]][_0xc9a8[1015]]();var $parent=this[_0xc9a8[63]][_0xc9a8[874]]($(this[_0xc9a8[45]][_0xc9a8[556]])[_0xc9a8[556]]());var keyupStop=this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[45],e);if(keyupStop===false){e[_0xc9a8[455]]();return false;};if(!this[_0xc9a8[64]][_0xc9a8[313]]&&this[_0xc9a8[45]][_0xc9a8[1050]][_0xc9a8[560]]==3&&this[_0xc9a8[45]][_0xc9a8[1050]][_0xc9a8[21]]<=1&&(this[_0xc9a8[45]][_0xc9a8[556]]===false||this[_0xc9a8[45]][_0xc9a8[556]][_0xc9a8[353]]==_0xc9a8[1103])){this[_0xc9a8[45]][_0xc9a8[1104]]()};if(!this[_0xc9a8[64]][_0xc9a8[313]]&&this[_0xc9a8[63]][_0xc9a8[874]](this[_0xc9a8[45]][_0xc9a8[1050]])&&this[_0xc9a8[45]][_0xc9a8[1050]][_0xc9a8[353]]===_0xc9a8[170]){this[_0xc9a8[45]][_0xc9a8[1104]](false)};if(!this[_0xc9a8[64]][_0xc9a8[313]]&&$(this[_0xc9a8[45]][_0xc9a8[556]])[_0xc9a8[492]](_0xc9a8[1067])&&($parent===false||$parent[0][_0xc9a8[353]]==_0xc9a8[1103])){$(this[_0xc9a8[45]][_0xc9a8[556]])[_0xc9a8[378]]()[_0xc9a8[377]]();this[_0xc9a8[45]][_0xc9a8[1104]]();};if(this[_0xc9a8[49]][_0xc9a8[497]]()&&this[_0xc9a8[49]][_0xc9a8[1105]](key)){this[_0xc9a8[49]][_0xc9a8[339]]()};if(key===this[_0xc9a8[794]][_0xc9a8[1078]]||key===this[_0xc9a8[794]][_0xc9a8[1077]]){if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){var td=$(this[_0xc9a8[44]][_0xc9a8[1050]])[_0xc9a8[394]](_0xc9a8[384],this[_0xc9a8[293]][0]);if(td[_0xc9a8[404]]()!==0&&td[_0xc9a8[871]]()!==_0xc9a8[287]){e[_0xc9a8[455]]();return false;};};this[_0xc9a8[34]][_0xc9a8[395]]();if(this[_0xc9a8[52]][_0xc9a8[40]]){e[_0xc9a8[455]]();this[_0xc9a8[40]][_0xc9a8[907]]();this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[40]][_0xc9a8[373]](this[_0xc9a8[52]][_0xc9a8[40]]);this[_0xc9a8[52]][_0xc9a8[40]]=false;return false;};this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[78])[_0xc9a8[20]]($[_0xc9a8[312]](function(i,s){this[_0xc9a8[63]][_0xc9a8[397]](i,$(s)[_0xc9a8[69]]())},this));if(this[_0xc9a8[64]][_0xc9a8[313]]&&this[_0xc9a8[45]][_0xc9a8[1050]]&&this[_0xc9a8[45]][_0xc9a8[1050]][_0xc9a8[353]]==_0xc9a8[170]&&this[_0xc9a8[63]][_0xc9a8[344]](this[_0xc9a8[45]][_0xc9a8[1050]][_0xc9a8[564]])){$(this[_0xc9a8[45]][_0xc9a8[1050]])[_0xc9a8[555]](this[_0xc9a8[57]][_0xc9a8[790]]());this[_0xc9a8[57]][_0xc9a8[301]]();$(this[_0xc9a8[45]][_0xc9a8[1050]])[_0xc9a8[373]]();};return this[_0xc9a8[45]][_0xc9a8[1106]](e);};},replaceToParagraph:function(clone){var $current=$(this[_0xc9a8[45]][_0xc9a8[1050]]);var node;if(clone===false){node=$(_0xc9a8[673])[_0xc9a8[370]]($current[_0xc9a8[69]]())}else {node=$(_0xc9a8[673])[_0xc9a8[370]]($current[_0xc9a8[1107]]())};$current[_0xc9a8[315]](node);var next=$(node)[_0xc9a8[403]]();if( typeof (next[0])!==_0xc9a8[14]&&next[0][_0xc9a8[353]]==_0xc9a8[405]){next[_0xc9a8[373]]()};this[_0xc9a8[33]][_0xc9a8[349]](node);},formatEmpty:function(e){var html=$[_0xc9a8[343]](this[_0xc9a8[293]][_0xc9a8[69]]());if(!this[_0xc9a8[63]][_0xc9a8[344]](html)){return };e[_0xc9a8[455]]();if(this[_0xc9a8[64]][_0xc9a8[313]]){this[_0xc9a8[293]][_0xc9a8[69]](this[_0xc9a8[57]][_0xc9a8[790]]());this[_0xc9a8[57]][_0xc9a8[301]]();}else {this[_0xc9a8[293]][_0xc9a8[69]](this[_0xc9a8[64]][_0xc9a8[566]]);this[_0xc9a8[39]][_0xc9a8[499]]();};this[_0xc9a8[35]][_0xc9a8[302]]();return false;}}},lang:function(){return {load:function(){this[_0xc9a8[64]][_0xc9a8[1108]]=this[_0xc9a8[64]][_0xc9a8[1109]][this[_0xc9a8[64]][_0xc9a8[46]]]},get:function(name){return ( typeof this[_0xc9a8[64]][_0xc9a8[1108]][name]!=_0xc9a8[14])?this[_0xc9a8[64]][_0xc9a8[1108]][name]:_0xc9a8[287]}}},line:function(){return {insert:function(){this[_0xc9a8[30]][_0xc9a8[288]]();var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();if(blocks[0]!==false&&this[_0xc9a8[47]][_0xc9a8[1110]](blocks)){if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[293]][_0xc9a8[39]]()};return ;};if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[47]][_0xc9a8[1111]]()}else {this[_0xc9a8[47]][_0xc9a8[1112]]()};},isExceptLastOrFirst:function(blocks){var exceptTags=[_0xc9a8[154],_0xc9a8[384],_0xc9a8[385],_0xc9a8[79],_0xc9a8[95],_0xc9a8[80],_0xc9a8[94],_0xc9a8[386],_0xc9a8[387]];var first=blocks[0][_0xc9a8[353]][_0xc9a8[368]]();var last=this[_0xc9a8[57]][_0xc9a8[1113]]();last=( typeof last==_0xc9a8[14])?first:last[_0xc9a8[353]][_0xc9a8[368]]();var firstFound=$[_0xc9a8[341]](first,exceptTags)!= -1;var lastFound=$[_0xc9a8[341]](last,exceptTags)!= -1;if((firstFound&&lastFound)||firstFound){return true};},insertInIe:function(){this[_0xc9a8[63]][_0xc9a8[1114]]();this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[43]][_0xc9a8[999]](document[_0xc9a8[359]](_0xc9a8[111]));this[_0xc9a8[63]][_0xc9a8[1115]]();this[_0xc9a8[35]][_0xc9a8[302]]();},insertInOthersBrowsers:function(){this[_0xc9a8[30]][_0xc9a8[288]]();var extra=_0xc9a8[1116];if(this[_0xc9a8[64]][_0xc9a8[313]]){extra=_0xc9a8[1117]};document[_0xc9a8[365]](_0xc9a8[1118],false,_0xc9a8[1119]+extra);this[_0xc9a8[47]][_0xc9a8[1120]]();this[_0xc9a8[35]][_0xc9a8[302]]();},setFocus:function(){var node=this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[1121]);var next=$(node)[_0xc9a8[403]]()[0];var target=next;if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])&&next&&next[_0xc9a8[564]]===_0xc9a8[287]){target=$(next)[_0xc9a8[403]]()[0];$(next)[_0xc9a8[373]]();};if(target){node[_0xc9a8[373]]();if(!this[_0xc9a8[64]][_0xc9a8[313]]){this[_0xc9a8[293]][_0xc9a8[39]]();this[_0xc9a8[47]][_0xc9a8[499]](target);};}else {node[_0xc9a8[380]](_0xc9a8[429]);this[_0xc9a8[47]][_0xc9a8[499]](node[0]);};},setStart:function(node){if( typeof node===_0xc9a8[14]){return };var textNode=document[_0xc9a8[1098]](_0xc9a8[1122]);this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[499]](node,0);this[_0xc9a8[355]][_0xc9a8[1024]](textNode);this[_0xc9a8[355]][_0xc9a8[574]](true);this[_0xc9a8[57]][_0xc9a8[567]]();}}},link:function(){return {show:function(e){if( typeof e!=_0xc9a8[14]&&e[_0xc9a8[455]]){e[_0xc9a8[455]]()};if(!this[_0xc9a8[52]][_0xc9a8[1123]](_0xc9a8[147])){this[_0xc9a8[51]][_0xc9a8[276]](_0xc9a8[48],this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1124]),600)}else {this[_0xc9a8[51]][_0xc9a8[276]](_0xc9a8[48],this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1125]),600)};this[_0xc9a8[51]][_0xc9a8[880]]();var buttonText=!this[_0xc9a8[52]][_0xc9a8[1123]](_0xc9a8[147])?this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[43]):this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[879]);this[_0xc9a8[48]][_0xc9a8[1126]]=this[_0xc9a8[51]][_0xc9a8[885]](buttonText);this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[48]][_0xc9a8[1127]]();this[_0xc9a8[48]][_0xc9a8[1128]]();if(this[_0xc9a8[48]][_0xc9a8[486]]==_0xc9a8[893]){$(_0xc9a8[1129])[_0xc9a8[764]](_0xc9a8[894],true)};this[_0xc9a8[48]][_0xc9a8[1130]]=$(_0xc9a8[1131]);this[_0xc9a8[48]][_0xc9a8[1132]]=$(_0xc9a8[1133]);this[_0xc9a8[48]][_0xc9a8[1132]][_0xc9a8[332]](this[_0xc9a8[48]][_0xc9a8[871]]);this[_0xc9a8[48]][_0xc9a8[1130]][_0xc9a8[332]](this[_0xc9a8[48]][_0xc9a8[1134]]);this[_0xc9a8[48]][_0xc9a8[1126]][_0xc9a8[467]](_0xc9a8[470],$[_0xc9a8[312]](this[_0xc9a8[48]][_0xc9a8[43]],this));$(_0xc9a8[887])[_0xc9a8[373]]();this[_0xc9a8[57]][_0xc9a8[294]]();this[_0xc9a8[51]][_0xc9a8[527]]();this[_0xc9a8[48]][_0xc9a8[1130]][_0xc9a8[39]]();},cleanUrl:function(){var thref=self[_0xc9a8[1135]][_0xc9a8[892]][_0xc9a8[587]](/\/$/i,_0xc9a8[287]);if( typeof this[_0xc9a8[48]][_0xc9a8[1134]]!==_0xc9a8[14]){this[_0xc9a8[48]][_0xc9a8[1134]]=this[_0xc9a8[48]][_0xc9a8[1134]][_0xc9a8[587]](thref,_0xc9a8[287]);this[_0xc9a8[48]][_0xc9a8[1134]]=this[_0xc9a8[48]][_0xc9a8[1134]][_0xc9a8[587]](/^\/#/,_0xc9a8[330]);this[_0xc9a8[48]][_0xc9a8[1134]]=this[_0xc9a8[48]][_0xc9a8[1134]][_0xc9a8[587]](_0xc9a8[1136],_0xc9a8[287]);if(!this[_0xc9a8[64]][_0xc9a8[912]]){var re= new RegExp(_0xc9a8[910]+self[_0xc9a8[1135]][_0xc9a8[1137]],_0xc9a8[151]);this[_0xc9a8[48]][_0xc9a8[1134]]=this[_0xc9a8[48]][_0xc9a8[1134]][_0xc9a8[587]](re,_0xc9a8[287]);};};},getData:function(){this[_0xc9a8[48]][_0xc9a8[1138]]=false;var $el=$(this[_0xc9a8[57]][_0xc9a8[986]]())[_0xc9a8[394]](_0xc9a8[147],this[_0xc9a8[293]][0]);if($el[_0xc9a8[21]]!==0&&$el[0][_0xc9a8[353]]===_0xc9a8[632]){this[_0xc9a8[48]][_0xc9a8[1138]]=$el;this[_0xc9a8[48]][_0xc9a8[1134]]=$el[_0xc9a8[307]](_0xc9a8[892]);this[_0xc9a8[48]][_0xc9a8[871]]=$el[_0xc9a8[871]]();this[_0xc9a8[48]][_0xc9a8[486]]=$el[_0xc9a8[307]](_0xc9a8[486]);}else {this[_0xc9a8[48]][_0xc9a8[871]]=this[_0xc9a8[860]].toString();this[_0xc9a8[48]][_0xc9a8[1134]]=_0xc9a8[287];this[_0xc9a8[48]][_0xc9a8[486]]=_0xc9a8[287];};},insert:function(){this[_0xc9a8[55]][_0xc9a8[373]]();var target=_0xc9a8[287];var link=this[_0xc9a8[48]][_0xc9a8[1130]][_0xc9a8[332]]();var text=this[_0xc9a8[48]][_0xc9a8[1132]][_0xc9a8[332]]()[_0xc9a8[587]](/(<([^>]+)>)/ig,_0xc9a8[287]);if($[_0xc9a8[343]](link)===_0xc9a8[287]){this[_0xc9a8[48]][_0xc9a8[1130]][_0xc9a8[389]](_0xc9a8[1139])[_0xc9a8[467]](_0xc9a8[45],function(){$(this)[_0xc9a8[392]](_0xc9a8[1139]);$(this)[_0xc9a8[791]](_0xc9a8[45]);});return ;};if(link[_0xc9a8[10]](_0xc9a8[1140])!=-1&&/(http|ftp|https):\/\//i[_0xc9a8[1141]](link)===false){link=_0xc9a8[1136]+link}else {if(link[_0xc9a8[10]](_0xc9a8[330])!==0){if($(_0xc9a8[1129])[_0xc9a8[764]](_0xc9a8[894])){target=_0xc9a8[893]};var pattern=_0xc9a8[909];var re= new RegExp(_0xc9a8[910]+pattern,_0xc9a8[151]);var re2= new RegExp(_0xc9a8[911]+pattern,_0xc9a8[151]);var re3= new RegExp(_0xc9a8[1142],_0xc9a8[151]);if(link[_0xc9a8[10]](re)==-1&&link[_0xc9a8[10]](re3)==-1&&link[_0xc9a8[10]](re2)===0&&this[_0xc9a8[64]][_0xc9a8[912]]){link=this[_0xc9a8[64]][_0xc9a8[912]]+_0xc9a8[913]+link};}};this[_0xc9a8[48]][_0xc9a8[288]](text,link,target);this[_0xc9a8[51]][_0xc9a8[862]]();},set:function(text,link,target){text=$[_0xc9a8[343]](text[_0xc9a8[587]](/<|>/g,_0xc9a8[287]));this[_0xc9a8[57]][_0xc9a8[301]]();var blocks=this[_0xc9a8[57]][_0xc9a8[296]]();if(text===_0xc9a8[287]&&link===_0xc9a8[287]){return };if(text===_0xc9a8[287]&&link!==_0xc9a8[287]){text=link};if(this[_0xc9a8[48]][_0xc9a8[1138]]){this[_0xc9a8[30]][_0xc9a8[288]]();var $link=this[_0xc9a8[48]][_0xc9a8[1138]],$el=$link[_0xc9a8[348]]();if($el[_0xc9a8[21]]>0){while($el[_0xc9a8[21]]){$el=$el[_0xc9a8[348]]()};$el=$el[_0xc9a8[1143]]();}else {$el=$link};$link[_0xc9a8[307]](_0xc9a8[892],link);$el[_0xc9a8[871]](text);if(target!==_0xc9a8[287]){$link[_0xc9a8[307]](_0xc9a8[486],target)}else {$link[_0xc9a8[380]](_0xc9a8[486])};this[_0xc9a8[57]][_0xc9a8[1144]]($link);this[_0xc9a8[35]][_0xc9a8[302]]();}else {if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])&&this[_0xc9a8[48]][_0xc9a8[871]]===_0xc9a8[287]){var $a=$(_0xc9a8[1145])[_0xc9a8[307]](_0xc9a8[892],link)[_0xc9a8[871]](text);if(target!==_0xc9a8[287]){$a[_0xc9a8[307]](_0xc9a8[486],target)};this[_0xc9a8[43]][_0xc9a8[999]]($a);this[_0xc9a8[57]][_0xc9a8[1144]]($a);}else {var $a;if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){$a=$(_0xc9a8[865]+link+_0xc9a8[613])[_0xc9a8[871]](text);if(target!==_0xc9a8[287]){$a[_0xc9a8[307]](_0xc9a8[486],target)};$a=$(this[_0xc9a8[43]][_0xc9a8[999]]($a));if(this[_0xc9a8[57]][_0xc9a8[1146]]()[_0xc9a8[649]](/\s$/)){$a[_0xc9a8[555]](_0xc9a8[599])};this[_0xc9a8[57]][_0xc9a8[1144]]($a);}else {document[_0xc9a8[365]](_0xc9a8[1147],false,link);$a=$(this[_0xc9a8[57]][_0xc9a8[986]]())[_0xc9a8[394]](_0xc9a8[147],this[_0xc9a8[293]][0]);if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){$a=$(_0xc9a8[1148])};if(target!==_0xc9a8[287]){$a[_0xc9a8[307]](_0xc9a8[486],target)};$a[_0xc9a8[380]](_0xc9a8[88])[_0xc9a8[380]](_0xc9a8[1149]);if(this[_0xc9a8[57]][_0xc9a8[1146]]()[_0xc9a8[649]](/\s$/)){$a[_0xc9a8[555]](_0xc9a8[599])};if(this[_0xc9a8[48]][_0xc9a8[871]]!==_0xc9a8[287]||this[_0xc9a8[48]][_0xc9a8[871]]!=text){if(!this[_0xc9a8[64]][_0xc9a8[313]]&&blocks&&blocks[_0xc9a8[21]]<=1){$a[_0xc9a8[871]](text)};this[_0xc9a8[57]][_0xc9a8[1144]]($a);};};};this[_0xc9a8[35]][_0xc9a8[302]]();this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[1150],$a);};setTimeout($[_0xc9a8[312]](function(){this[_0xc9a8[52]][_0xc9a8[1151]]()},this),5);},unlink:function(e){if( typeof e!=_0xc9a8[14]&&e[_0xc9a8[455]]){e[_0xc9a8[455]]()};var nodes=this[_0xc9a8[57]][_0xc9a8[1017]]();if(!nodes){return };this[_0xc9a8[30]][_0xc9a8[288]]();var len=nodes[_0xc9a8[21]];var links=[];for(var i=0;i<len;i++){if(nodes[i][_0xc9a8[353]]===_0xc9a8[632]){links[_0xc9a8[16]](nodes[i])};var $node=$(nodes[i])[_0xc9a8[394]](_0xc9a8[147],this[_0xc9a8[293]][0]);$node[_0xc9a8[315]]($node[_0xc9a8[378]]());};this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[1152],links);$(_0xc9a8[887])[_0xc9a8[373]]();this[_0xc9a8[35]][_0xc9a8[302]]();},toggleClass:function(className){this[_0xc9a8[48]][_0xc9a8[1153]](className,_0xc9a8[390])},addClass:function(className){this[_0xc9a8[48]][_0xc9a8[1153]](className,_0xc9a8[389])},removeClass:function(className){this[_0xc9a8[48]][_0xc9a8[1153]](className,_0xc9a8[392])},setClass:function(className,func){var links=this[_0xc9a8[57]][_0xc9a8[1154]]([_0xc9a8[147]]);if(links===false){return };$[_0xc9a8[20]](links,function(){$(this)[func](className)});}}},linkify:function(){return {isKey:function(key){return key==this[_0xc9a8[794]][_0xc9a8[1060]]||key==this[_0xc9a8[794]][_0xc9a8[1087]]},isEnabled:function(){return this[_0xc9a8[64]][_0xc9a8[1155]]&&(this[_0xc9a8[64]][_0xc9a8[1156]]||this[_0xc9a8[64]][_0xc9a8[1157]]||this[_0xc9a8[64]][_0xc9a8[1158]])&&!this[_0xc9a8[63]][_0xc9a8[633]](_0xc9a8[181])},format:function(){var linkify=this[_0xc9a8[49]],opts=this[_0xc9a8[64]];this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[1164])[_0xc9a8[1163]]()[_0xc9a8[378]]()[_0xc9a8[283]](function(){return this[_0xc9a8[560]]===3&&$[_0xc9a8[343]](this[_0xc9a8[583]])!=_0xc9a8[287]&&!$(this)[_0xc9a8[556]]()[_0xc9a8[494]](_0xc9a8[80])&&(this[_0xc9a8[583]][_0xc9a8[649]](opts[_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1159]])||this[_0xc9a8[583]][_0xc9a8[649]](opts[_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1161]])||this[_0xc9a8[583]][_0xc9a8[649]](opts[_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[40]])||this[_0xc9a8[583]][_0xc9a8[649]](opts[_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1134]]))})[_0xc9a8[20]](function(){var text=$(this)[_0xc9a8[871]](),html=text;if(opts[_0xc9a8[1158]]&&(html[_0xc9a8[649]](opts[_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1159]])||html[_0xc9a8[649]](opts[_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1161]]))){html=linkify[_0xc9a8[1158]](html)}else {if(opts[_0xc9a8[1157]]&&html[_0xc9a8[649]](opts[_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[40]])){html=linkify[_0xc9a8[1162]](html)}else {if(opts[_0xc9a8[1156]]){html=linkify[_0xc9a8[1155]](html)}}};$(this)[_0xc9a8[557]](text[_0xc9a8[587]](text,html))[_0xc9a8[373]]();});var objects=this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[1166])[_0xc9a8[20]](function(){var $el=$(this);$el[_0xc9a8[392]](_0xc9a8[1165]);if($el[_0xc9a8[307]](_0xc9a8[336])===_0xc9a8[287]){$el[_0xc9a8[380]](_0xc9a8[336])};return $el[0];});this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[49],objects);this[_0xc9a8[35]][_0xc9a8[302]]();},convertVideoLinks:function(html){var iframeStart=_0xc9a8[1167],iframeEnd=_0xc9a8[1168];if(html[_0xc9a8[649]](this[_0xc9a8[64]][_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1159]])){html=html[_0xc9a8[587]](this[_0xc9a8[64]][_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1159]],iframeStart+_0xc9a8[1169]+iframeEnd)};if(html[_0xc9a8[649]](this[_0xc9a8[64]][_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1161]])){html=html[_0xc9a8[587]](this[_0xc9a8[64]][_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1161]],iframeStart+_0xc9a8[1170]+iframeEnd)};return html;},convertImages:function(html){var matches=html[_0xc9a8[649]](this[_0xc9a8[64]][_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[40]]);if(matches){html=html[_0xc9a8[587]](html,_0xc9a8[1171]+matches+_0xc9a8[1172]);if(this[_0xc9a8[64]][_0xc9a8[313]]){if(!this[_0xc9a8[63]][_0xc9a8[344]](this[_0xc9a8[35]][_0xc9a8[323]]())){html=_0xc9a8[369]+html}};html+=_0xc9a8[369];};return html;},convertLinks:function(html){var matches=html[_0xc9a8[649]](this[_0xc9a8[64]][_0xc9a8[49]][_0xc9a8[1160]][_0xc9a8[1134]]);if(matches){matches=$[_0xc9a8[1173]](matches,function(v,k){return $[_0xc9a8[341]](v,matches)===k});var length=matches[_0xc9a8[21]];for(var i=0;i<length;i++){var href=matches[i],text=href,linkProtocol=this[_0xc9a8[64]][_0xc9a8[912]]+_0xc9a8[913];if(href[_0xc9a8[649]](/(https?|ftp):\/\//i)!==null){linkProtocol=_0xc9a8[287]};if(text[_0xc9a8[21]]>this[_0xc9a8[64]][_0xc9a8[1174]]){text=text[_0xc9a8[795]](0,this[_0xc9a8[64]][_0xc9a8[1174]])+_0xc9a8[1175]};text=decodeURIComponent(text);var regexB=_0xc9a8[1176];if($[_0xc9a8[341]](href[_0xc9a8[7]](-1),[_0xc9a8[1177],_0xc9a8[597],_0xc9a8[1178]])!= -1){regexB=_0xc9a8[287]};var regexp= new RegExp(_0xc9a8[1179]+href[_0xc9a8[587]](/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,_0xc9a8[1180])+regexB+_0xc9a8[1181],_0xc9a8[607]);html=html[_0xc9a8[587]](regexp,_0xc9a8[865]+linkProtocol+$[_0xc9a8[343]](href)+_0xc9a8[1182]+$[_0xc9a8[343]](text)+_0xc9a8[822]);};};return html;}}},list:function(){return {toggle:function(cmd){this[_0xc9a8[55]][_0xc9a8[373]]();if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[293]][_0xc9a8[39]]()};this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[57]][_0xc9a8[294]]();var parent=this[_0xc9a8[57]][_0xc9a8[1015]]();var $list=$(parent)[_0xc9a8[394]](_0xc9a8[1183],this[_0xc9a8[293]][0]);if(!this[_0xc9a8[63]][_0xc9a8[874]]($list)&&$list[_0xc9a8[21]]!==0){$list=false};var isUnorderedCmdOrdered,isOrderedCmdUnordered;var remove=false;if($list&&$list[_0xc9a8[21]]){remove=true;var listTag=$list[0][_0xc9a8[353]];isUnorderedCmdOrdered=(cmd===_0xc9a8[75]&&listTag===_0xc9a8[182]);isOrderedCmdUnordered=(cmd===_0xc9a8[74]&&listTag===_0xc9a8[183]);};if(isUnorderedCmdOrdered){this[_0xc9a8[63]][_0xc9a8[372]]($list,_0xc9a8[93])}else {if(isOrderedCmdUnordered){this[_0xc9a8[63]][_0xc9a8[372]]($list,_0xc9a8[92])}else {if(remove){this[_0xc9a8[50]][_0xc9a8[373]](cmd,$list)}else {this[_0xc9a8[50]][_0xc9a8[43]](cmd)}}};this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();},insert:function(cmd){var current=this[_0xc9a8[57]][_0xc9a8[986]]();var $td=$(current)[_0xc9a8[394]](_0xc9a8[1184],this[_0xc9a8[293]][0]);if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])&&this[_0xc9a8[64]][_0xc9a8[313]]){this[_0xc9a8[50]][_0xc9a8[1111]](cmd)}else {document[_0xc9a8[365]](_0xc9a8[43]+cmd)};var parent=this[_0xc9a8[57]][_0xc9a8[1015]]();var $list=$(parent)[_0xc9a8[394]](_0xc9a8[1183],this[_0xc9a8[293]][0]);if($td[_0xc9a8[21]]!==0){var newTd=$td[_0xc9a8[1107]]();$td[_0xc9a8[555]](newTd)[_0xc9a8[373]](_0xc9a8[287]);};if(this[_0xc9a8[63]][_0xc9a8[344]]($list[_0xc9a8[374]](_0xc9a8[154])[_0xc9a8[871]]())){var $children=$list[_0xc9a8[348]](_0xc9a8[154]);$children[_0xc9a8[374]](_0xc9a8[678])[_0xc9a8[373]]();$children[_0xc9a8[370]](this[_0xc9a8[57]][_0xc9a8[790]]());if(this[_0xc9a8[64]][_0xc9a8[313]]&&this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])&&$children[_0xc9a8[404]]()==2&&this[_0xc9a8[63]][_0xc9a8[344]]($children[_0xc9a8[1185]](1)[_0xc9a8[871]]())){$children[_0xc9a8[1185]](1)[_0xc9a8[373]]()};};if($list[_0xc9a8[21]]){var $listParent=$list[_0xc9a8[556]]();if(this[_0xc9a8[63]][_0xc9a8[874]]($listParent)&&$listParent[0][_0xc9a8[353]]!=_0xc9a8[184]&&this[_0xc9a8[63]][_0xc9a8[558]]($listParent[0])){$listParent[_0xc9a8[315]]($listParent[_0xc9a8[378]]())};};if(!this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[293]][_0xc9a8[39]]()};this[_0xc9a8[34]][_0xc9a8[395]]();},insertInIe:function(cmd){var wrapper=this[_0xc9a8[57]][_0xc9a8[303]](_0xc9a8[90]);var wrapperHtml=$(wrapper)[_0xc9a8[69]]();var tmpList=(cmd==_0xc9a8[75])?$(_0xc9a8[1186]):$(_0xc9a8[1187]);var tmpLi=$(_0xc9a8[554]);if($[_0xc9a8[343]](wrapperHtml)===_0xc9a8[287]){tmpLi[_0xc9a8[370]](this[_0xc9a8[57]][_0xc9a8[790]]());tmpList[_0xc9a8[370]](tmpLi);this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[765])[_0xc9a8[315]](tmpList);}else {var items=wrapperHtml[_0xc9a8[13]](/<br\s?\/?>/gi);if(items){for(var i=0;i<items[_0xc9a8[21]];i++){if($[_0xc9a8[343]](items[i])!==_0xc9a8[287]){tmpList[_0xc9a8[370]]($(_0xc9a8[554])[_0xc9a8[69]](items[i]))}}}else {tmpLi[_0xc9a8[370]](wrapperHtml);tmpList[_0xc9a8[370]](tmpLi);};$(wrapper)[_0xc9a8[315]](tmpList);};},remove:function(cmd,$list){if($[_0xc9a8[341]](_0xc9a8[92],this[_0xc9a8[57]][_0xc9a8[296]]())){cmd=_0xc9a8[74]};document[_0xc9a8[365]](_0xc9a8[43]+cmd);var $current=$(this[_0xc9a8[57]][_0xc9a8[986]]());this[_0xc9a8[41]][_0xc9a8[980]]();if(!this[_0xc9a8[64]][_0xc9a8[313]]&&$current[_0xc9a8[394]](_0xc9a8[1188],this[_0xc9a8[293]][0])[_0xc9a8[21]]===0){document[_0xc9a8[365]](_0xc9a8[362],false,_0xc9a8[78]);this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[1189])[_0xc9a8[20]]($[_0xc9a8[312]](this[_0xc9a8[63]][_0xc9a8[397]],this));};var $table=$(this[_0xc9a8[57]][_0xc9a8[986]]())[_0xc9a8[394]](_0xc9a8[89],this[_0xc9a8[293]][0]);var $prev=$table[_0xc9a8[569]]();if(!this[_0xc9a8[64]][_0xc9a8[313]]&&$table[_0xc9a8[21]]!==0&&$prev[_0xc9a8[21]]!==0&&$prev[0][_0xc9a8[353]]==_0xc9a8[405]){$prev[_0xc9a8[373]]()};this[_0xc9a8[34]][_0xc9a8[395]]();}}},modal:function(){return {callbacks:{},loadTemplates:function(){this[_0xc9a8[64]][_0xc9a8[51]]={imageEdit:String()+_0xc9a8[1190]+_0xc9a8[1191]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[504])+_0xc9a8[1192]+_0xc9a8[1193]+_0xc9a8[1194]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[48])+_0xc9a8[1192]+_0xc9a8[1195]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[48])+_0xc9a8[507]+_0xc9a8[1196]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1197])+_0xc9a8[1198]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1197])+_0xc9a8[1192]+_0xc9a8[1199]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1200])+_0xc9a8[1192]+_0xc9a8[1201]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1200])+_0xc9a8[613]+_0xc9a8[1202]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[900])+_0xc9a8[1203]+_0xc9a8[1204]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[531])+_0xc9a8[1203]+_0xc9a8[1205]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[290])+_0xc9a8[1203]+_0xc9a8[1206]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[289])+_0xc9a8[1203]+_0xc9a8[1207]+_0xc9a8[1208],image:String()+_0xc9a8[1209]+_0xc9a8[1210]+_0xc9a8[1208],file:String()+_0xc9a8[1211]+_0xc9a8[1212]+_0xc9a8[1191]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[864])+_0xc9a8[1192]+_0xc9a8[1213]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[864])+_0xc9a8[1214]+_0xc9a8[1215]+_0xc9a8[1216]+_0xc9a8[1208],link:String()+_0xc9a8[1217]+_0xc9a8[1218]+_0xc9a8[1219]+_0xc9a8[1191]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[871])+_0xc9a8[1192]+_0xc9a8[1220]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[871])+_0xc9a8[507]+_0xc9a8[1221]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1197])+_0xc9a8[1192]+_0xc9a8[1208]};$[_0xc9a8[278]](this[_0xc9a8[64]],this[_0xc9a8[64]][_0xc9a8[51]]);},addCallback:function(name,callback){this[_0xc9a8[51]][_0xc9a8[1222]][name]=callback},createTabber:function($modal){this[_0xc9a8[51]][_0xc9a8[1223]]=$(_0xc9a8[593])[_0xc9a8[307]](_0xc9a8[429],_0xc9a8[1224]);$modal[_0xc9a8[383]](this[_0xc9a8[51]].$tabber);},addTab:function(id,name,active){var $tab=$(_0xc9a8[1225]+id+_0xc9a8[613])[_0xc9a8[871]](name);if(active){$tab[_0xc9a8[389]](_0xc9a8[1226])};var self=this;$tab[_0xc9a8[467]](_0xc9a8[470],function(e){e[_0xc9a8[455]]();$(_0xc9a8[1227])[_0xc9a8[438]]();$(_0xc9a8[1228]+$(this)[_0xc9a8[307]](_0xc9a8[551]))[_0xc9a8[527]]();self[_0xc9a8[51]][_0xc9a8[1223]][_0xc9a8[374]](_0xc9a8[147])[_0xc9a8[392]](_0xc9a8[1226]);$(this)[_0xc9a8[389]](_0xc9a8[1226]);});this[_0xc9a8[51]][_0xc9a8[1223]][_0xc9a8[370]]($tab);},addTemplate:function(name,template){this[_0xc9a8[64]][_0xc9a8[51]][name]=template},getTemplate:function(name){return this[_0xc9a8[64]][_0xc9a8[51]][name]},getModal:function(){return this[_0xc9a8[1229]][_0xc9a8[374]](_0xc9a8[97])},load:function(templateName,title,width){this[_0xc9a8[51]][_0xc9a8[1230]]=templateName;this[_0xc9a8[51]][_0xc9a8[832]]=width;this[_0xc9a8[51]][_0xc9a8[31]]();this[_0xc9a8[51]][_0xc9a8[1231]]();this[_0xc9a8[51]][_0xc9a8[1232]](title);this[_0xc9a8[51]][_0xc9a8[1233]]();this[_0xc9a8[51]][_0xc9a8[1234]]();if( typeof this[_0xc9a8[51]][_0xc9a8[1222]][templateName]!=_0xc9a8[14]){this[_0xc9a8[51]][_0xc9a8[1222]][templateName][_0xc9a8[6]](this)};},show:function(){this[_0xc9a8[63]][_0xc9a8[847]]();if(this[_0xc9a8[63]][_0xc9a8[959]]()){this[_0xc9a8[51]][_0xc9a8[1235]]()}else {this[_0xc9a8[51]][_0xc9a8[1236]]()};if(this[_0xc9a8[64]][_0xc9a8[827]]){this[_0xc9a8[813]][_0xc9a8[389]](_0xc9a8[1237])};this[_0xc9a8[814]][_0xc9a8[527]]();this[_0xc9a8[813]][_0xc9a8[527]]();this[_0xc9a8[1238]][_0xc9a8[307]](_0xc9a8[452],_0xc9a8[11]);this[_0xc9a8[1238]][_0xc9a8[39]]();this[_0xc9a8[51]][_0xc9a8[1239]]();this[_0xc9a8[63]][_0xc9a8[1114]]();if(!this[_0xc9a8[63]][_0xc9a8[959]]()){setTimeout($[_0xc9a8[312]](this[_0xc9a8[51]][_0xc9a8[1236]],this),0);$(window)[_0xc9a8[467]](_0xc9a8[1240],$[_0xc9a8[312]](this[_0xc9a8[51]][_0xc9a8[1241]],this));};this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[1242],this[_0xc9a8[51]][_0xc9a8[1230]],this.$modal);$(document)[_0xc9a8[791]](_0xc9a8[1243]);this[_0xc9a8[1238]][_0xc9a8[374]](_0xc9a8[1246])[_0xc9a8[467]](_0xc9a8[1244],$[_0xc9a8[312]](this[_0xc9a8[51]][_0xc9a8[1245]],this));},showOnDesktop:function(){var height=this[_0xc9a8[1238]][_0xc9a8[1247]]();var windowHeight=$(window)[_0xc9a8[776]]();var windowWidth=$(window)[_0xc9a8[832]]();if(this[_0xc9a8[51]][_0xc9a8[832]]>windowWidth){this[_0xc9a8[1238]][_0xc9a8[305]]({width:_0xc9a8[1248],marginTop:(windowHeight/2-height/2)+_0xc9a8[530]});return ;};if(height>windowHeight){this[_0xc9a8[1238]][_0xc9a8[305]]({width:this[_0xc9a8[51]][_0xc9a8[832]]+_0xc9a8[530],marginTop:_0xc9a8[1249]})}else {this[_0xc9a8[1238]][_0xc9a8[305]]({width:this[_0xc9a8[51]][_0xc9a8[832]]+_0xc9a8[530],marginTop:(windowHeight/2-height/2)+_0xc9a8[530]})};},showOnMobile:function(){this[_0xc9a8[1238]][_0xc9a8[305]]({width:_0xc9a8[1248],marginTop:_0xc9a8[1250]})},resize:function(){if(this[_0xc9a8[63]][_0xc9a8[959]]()){this[_0xc9a8[51]][_0xc9a8[1235]]()}else {this[_0xc9a8[51]][_0xc9a8[1236]]()}},setTitle:function(title){this[_0xc9a8[1251]][_0xc9a8[69]](title)},setContent:function(){this[_0xc9a8[1229]][_0xc9a8[69]](this[_0xc9a8[51]][_0xc9a8[1252]](this[_0xc9a8[51]][_0xc9a8[1230]]))},setDraggable:function(){if( typeof $[_0xc9a8[5]][_0xc9a8[1253]]===_0xc9a8[14]){return };this[_0xc9a8[1238]][_0xc9a8[1253]]({handle:this[_0xc9a8[1251]]});this[_0xc9a8[1251]][_0xc9a8[305]](_0xc9a8[1254],_0xc9a8[1255]);},setEnter:function(e){if(e[_0xc9a8[849]]!=13){return };e[_0xc9a8[455]]();this[_0xc9a8[1238]][_0xc9a8[374]](_0xc9a8[1256])[_0xc9a8[470]]();},createCancelButton:function(){var button=$(_0xc9a8[1259])[_0xc9a8[389]](_0xc9a8[1258])[_0xc9a8[69]](this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1257]));button[_0xc9a8[467]](_0xc9a8[470],$[_0xc9a8[312]](this[_0xc9a8[51]][_0xc9a8[862]],this));this[_0xc9a8[1260]][_0xc9a8[370]](button);},createDeleteButton:function(label){return this[_0xc9a8[51]][_0xc9a8[1262]](label,_0xc9a8[1261])},createActionButton:function(label){return this[_0xc9a8[51]][_0xc9a8[1262]](label,_0xc9a8[1263])},createButton:function(label,className){var button=$(_0xc9a8[1259])[_0xc9a8[389]](_0xc9a8[1266])[_0xc9a8[389]](_0xc9a8[1264]+className+_0xc9a8[1265])[_0xc9a8[69]](label);this[_0xc9a8[1260]][_0xc9a8[370]](button);return button;},setButtonsWidth:function(){var buttons=this[_0xc9a8[1260]][_0xc9a8[374]](_0xc9a8[32]);var buttonsSize=buttons[_0xc9a8[21]];if(buttonsSize===0){return };buttons[_0xc9a8[305]](_0xc9a8[832],(100/buttonsSize)+_0xc9a8[1267]);},build:function(){this[_0xc9a8[51]][_0xc9a8[1268]]();this[_0xc9a8[813]]=$(_0xc9a8[1269])[_0xc9a8[438]]();this[_0xc9a8[1238]]=$(_0xc9a8[1270]);this[_0xc9a8[1251]]=$(_0xc9a8[1271]);this[_0xc9a8[1272]]=$(_0xc9a8[1274])[_0xc9a8[69]](_0xc9a8[1273]);this[_0xc9a8[1229]]=$(_0xc9a8[1275]);this[_0xc9a8[1260]]=$(_0xc9a8[1276]);this[_0xc9a8[1238]][_0xc9a8[370]](this.$modalHeader);this[_0xc9a8[1238]][_0xc9a8[370]](this.$modalClose);this[_0xc9a8[1238]][_0xc9a8[370]](this.$modalBody);this[_0xc9a8[1238]][_0xc9a8[370]](this.$modalFooter);this[_0xc9a8[813]][_0xc9a8[370]](this.$modal);this[_0xc9a8[813]][_0xc9a8[524]](document[_0xc9a8[273]]);},buildOverlay:function(){this[_0xc9a8[814]]=$(_0xc9a8[1277])[_0xc9a8[438]]();$(_0xc9a8[273])[_0xc9a8[383]](this.$modalOverlay);},enableEvents:function(){this[_0xc9a8[1272]][_0xc9a8[467]](_0xc9a8[1278],$[_0xc9a8[312]](this[_0xc9a8[51]][_0xc9a8[862]],this));$(document)[_0xc9a8[467]](_0xc9a8[1279],$[_0xc9a8[312]](this[_0xc9a8[51]][_0xc9a8[843]],this));this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[1279],$[_0xc9a8[312]](this[_0xc9a8[51]][_0xc9a8[843]],this));this[_0xc9a8[813]][_0xc9a8[467]](_0xc9a8[1278],$[_0xc9a8[312]](this[_0xc9a8[51]][_0xc9a8[862]],this));},disableEvents:function(){this[_0xc9a8[1272]][_0xc9a8[791]](_0xc9a8[1278]);$(document)[_0xc9a8[791]](_0xc9a8[1279]);this[_0xc9a8[293]][_0xc9a8[791]](_0xc9a8[1279]);this[_0xc9a8[813]][_0xc9a8[791]](_0xc9a8[1278]);$(window)[_0xc9a8[791]](_0xc9a8[1240]);},closeHandler:function(e){if(e[_0xc9a8[849]]!=this[_0xc9a8[794]][_0xc9a8[850]]){return };this[_0xc9a8[51]][_0xc9a8[862]](false);},close:function(e){if(e){if(!$(e[_0xc9a8[486]])[_0xc9a8[492]](_0xc9a8[1280])&&e[_0xc9a8[486]]!=this[_0xc9a8[1272]][0]&&e[_0xc9a8[486]]!=this[_0xc9a8[813]][0]){return };e[_0xc9a8[455]]();};if(!this[_0xc9a8[813]]){return };this[_0xc9a8[51]][_0xc9a8[1281]]();this[_0xc9a8[63]][_0xc9a8[845]]();this[_0xc9a8[814]][_0xc9a8[373]]();this[_0xc9a8[813]][_0xc9a8[1286]](_0xc9a8[1282],$[_0xc9a8[312]](function(){this[_0xc9a8[813]][_0xc9a8[373]]();setTimeout($[_0xc9a8[312]](this[_0xc9a8[63]][_0xc9a8[1115]],this),0);if(e!==undefined){this[_0xc9a8[57]][_0xc9a8[301]]()};$(document[_0xc9a8[273]])[_0xc9a8[305]](_0xc9a8[1283],this[_0xc9a8[51]][_0xc9a8[1284]]);this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[1285],this[_0xc9a8[51]][_0xc9a8[1230]]);},this));}}},observe:function(){return {load:function(){if( typeof this[_0xc9a8[64]][_0xc9a8[801]]!=_0xc9a8[14]){return };if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){var self=this;this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[1287])[_0xc9a8[467]](_0xc9a8[525],function(){self[_0xc9a8[293]][_0xc9a8[307]](_0xc9a8[812],false);$(this)[_0xc9a8[307]](_0xc9a8[812],true);})[_0xc9a8[467]](_0xc9a8[533],function(){self[_0xc9a8[293]][_0xc9a8[307]](_0xc9a8[812],true);$(this)[_0xc9a8[380]](_0xc9a8[812]);});};this[_0xc9a8[52]][_0xc9a8[915]]();this[_0xc9a8[52]][_0xc9a8[1151]]();},toolbar:function(e,btnName){this[_0xc9a8[52]][_0xc9a8[538]](e,btnName);this[_0xc9a8[52]][_0xc9a8[830]]();},isCurrent:function($el,$current){if( typeof $current==_0xc9a8[14]){var $current=$(this[_0xc9a8[57]][_0xc9a8[986]]())};return $current[_0xc9a8[494]]($el)||$current[_0xc9a8[496]]($el)[_0xc9a8[21]]>0;},dropdowns:function(){var $current=$(this[_0xc9a8[57]][_0xc9a8[986]]());$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[52]][_0xc9a8[830]],$[_0xc9a8[312]](function(key,value){var observe=value[_0xc9a8[52]],element=observe[_0xc9a8[1288]],$item=value[_0xc9a8[1289]],inValues= typeof observe[_0xc9a8[1290]]!=_0xc9a8[14]?observe[_0xc9a8[1290]]:false,outValues= typeof observe[_0xc9a8[1291]]!=_0xc9a8[14]?observe[_0xc9a8[1291]]:false;if($current[_0xc9a8[394]](element)[_0xc9a8[404]]()>0){this[_0xc9a8[52]][_0xc9a8[1292]]($item,inValues,outValues)}else {this[_0xc9a8[52]][_0xc9a8[1292]]($item,outValues,inValues)};},this));},setDropdownProperties:function($item,addProperties,deleteProperties){if(deleteProperties&& typeof deleteProperties[_0xc9a8[307]]!=_0xc9a8[14]){this[_0xc9a8[52]][_0xc9a8[1293]]($item,deleteProperties[_0xc9a8[307]],true)};if( typeof addProperties[_0xc9a8[307]]!=_0xc9a8[14]){this[_0xc9a8[52]][_0xc9a8[1293]]($item,addProperties[_0xc9a8[307]])};if( typeof addProperties[_0xc9a8[504]]!=_0xc9a8[14]){$item[_0xc9a8[871]](addProperties[_0xc9a8[504]])};},setDropdownAttr:function($item,properties,isDelete){$[_0xc9a8[20]](properties,function(key,value){if(key==_0xc9a8[336]){if(!isDelete){$item[_0xc9a8[389]](value)}else {$item[_0xc9a8[392]](value)}}else {if(!isDelete){$item[_0xc9a8[307]](key,value)}else {$item[_0xc9a8[380]](key)}}})},addDropdown:function($item,btnName,btnObject){if( typeof btnObject[_0xc9a8[52]]==_0xc9a8[14]){return };btnObject[_0xc9a8[1289]]=$item;this[_0xc9a8[64]][_0xc9a8[52]][_0xc9a8[830]][_0xc9a8[16]](btnObject);},buttons:function(e,btnName){var current=this[_0xc9a8[57]][_0xc9a8[986]]();var parent=this[_0xc9a8[57]][_0xc9a8[1015]]();if(e!==false){this[_0xc9a8[32]][_0xc9a8[1294]]()}else {this[_0xc9a8[32]][_0xc9a8[1294]](btnName)};if(e===false&&btnName!==_0xc9a8[69]){if($[_0xc9a8[341]](btnName,this[_0xc9a8[64]][_0xc9a8[1295]])!= -1){this[_0xc9a8[32]][_0xc9a8[1296]](btnName)};return ;};$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[1297]],$[_0xc9a8[312]](function(key,value){var parentEl=$(parent)[_0xc9a8[394]](key,this[_0xc9a8[293]][0]);var currentEl=$(current)[_0xc9a8[394]](key,this[_0xc9a8[293]][0]);if(parentEl[_0xc9a8[21]]!==0&&!this[_0xc9a8[63]][_0xc9a8[874]](parentEl)){return };if(!this[_0xc9a8[63]][_0xc9a8[874]](currentEl)){return };if(parentEl[_0xc9a8[21]]!==0||currentEl[_0xc9a8[394]](key,this[_0xc9a8[293]][0])[_0xc9a8[21]]!==0){this[_0xc9a8[32]][_0xc9a8[781]](value)};},this));var $parent=$(parent)[_0xc9a8[394]](this[_0xc9a8[64]][_0xc9a8[263]].toString()[_0xc9a8[368]](),this[_0xc9a8[293]][0]);if(this[_0xc9a8[63]][_0xc9a8[874]](parent)&&$parent[_0xc9a8[21]]){var align=($parent[_0xc9a8[305]](_0xc9a8[304])===_0xc9a8[287])?_0xc9a8[531]:$parent[_0xc9a8[305]](_0xc9a8[304]);this[_0xc9a8[32]][_0xc9a8[781]](_0xc9a8[1298]+align);};},addButton:function(tag,btnName){this[_0xc9a8[64]][_0xc9a8[1295]][_0xc9a8[16]](btnName);this[_0xc9a8[64]][_0xc9a8[1297]][tag]=btnName;},images:function(){this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[148])[_0xc9a8[20]]($[_0xc9a8[312]](function(i,img){var $img=$(img);$img[_0xc9a8[394]](_0xc9a8[147],this[_0xc9a8[293]][0])[_0xc9a8[467]](_0xc9a8[470],function(e){e[_0xc9a8[455]]()});if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){$img[_0xc9a8[307]](_0xc9a8[1299],_0xc9a8[467])};this[_0xc9a8[40]][_0xc9a8[1300]]($img);},this));$(document)[_0xc9a8[467]](_0xc9a8[805]+this[_0xc9a8[257]],$[_0xc9a8[312]](function(e){this[_0xc9a8[52]][_0xc9a8[40]]=false;if(e[_0xc9a8[486]][_0xc9a8[353]]==_0xc9a8[950]&&this[_0xc9a8[63]][_0xc9a8[874]](e[_0xc9a8[486]])){this[_0xc9a8[52]][_0xc9a8[40]]=(this[_0xc9a8[52]][_0xc9a8[40]]&&this[_0xc9a8[52]][_0xc9a8[40]]==e[_0xc9a8[486]])?false:e[_0xc9a8[486]]};},this));},links:function(){if(!this[_0xc9a8[64]][_0xc9a8[1301]]){return };this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[147])[_0xc9a8[467]](_0xc9a8[807]+this[_0xc9a8[257]]+_0xc9a8[808]+this[_0xc9a8[257]],$[_0xc9a8[312]](this[_0xc9a8[52]][_0xc9a8[1302]],this));this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[807]+this[_0xc9a8[257]]+_0xc9a8[808]+this[_0xc9a8[257]],$[_0xc9a8[312]](this[_0xc9a8[52]][_0xc9a8[1303]],this));$(document)[_0xc9a8[467]](_0xc9a8[807]+this[_0xc9a8[257]]+_0xc9a8[808]+this[_0xc9a8[257]],$[_0xc9a8[312]](this[_0xc9a8[52]][_0xc9a8[1303]],this));},getTooltipPosition:function($link){return $link[_0xc9a8[526]]()},showTooltip:function(e){var $el=$(e[_0xc9a8[486]]);if($el[0][_0xc9a8[353]]==_0xc9a8[950]){return };if($el[0][_0xc9a8[353]]!==_0xc9a8[632]){$el=$el[_0xc9a8[394]](_0xc9a8[147],this[_0xc9a8[293]][0])};if($el[0][_0xc9a8[353]]!==_0xc9a8[632]){return };var $link=$el;var pos=this[_0xc9a8[52]][_0xc9a8[1304]]($link);var tooltip=$(_0xc9a8[1305]);var href=$link[_0xc9a8[307]](_0xc9a8[892]);if(href===undefined){href=_0xc9a8[287]};if(href[_0xc9a8[21]]>24){href=href[_0xc9a8[795]](0,24)+_0xc9a8[1175]};var aLink=$(_0xc9a8[865]+$link[_0xc9a8[307]](_0xc9a8[892])+_0xc9a8[1307])[_0xc9a8[69]](href)[_0xc9a8[389]](_0xc9a8[1306]);var aEdit=$(_0xc9a8[1308])[_0xc9a8[69]](this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[879]))[_0xc9a8[467]](_0xc9a8[470],$[_0xc9a8[312]](this[_0xc9a8[48]][_0xc9a8[527]],this))[_0xc9a8[389]](_0xc9a8[1306]);var aUnlink=$(_0xc9a8[1308])[_0xc9a8[69]](this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1309]))[_0xc9a8[467]](_0xc9a8[470],$[_0xc9a8[312]](this[_0xc9a8[48]][_0xc9a8[1309]],this))[_0xc9a8[389]](_0xc9a8[1306]);tooltip[_0xc9a8[370]](aLink)[_0xc9a8[370]](_0xc9a8[1310])[_0xc9a8[370]](aEdit)[_0xc9a8[370]](_0xc9a8[1310])[_0xc9a8[370]](aUnlink);tooltip[_0xc9a8[305]]({top:(pos[_0xc9a8[528]]+parseInt($link[_0xc9a8[305]](_0xc9a8[1311]),10))+_0xc9a8[530],left:pos[_0xc9a8[531]]+_0xc9a8[530]});$(_0xc9a8[887])[_0xc9a8[373]]();$(_0xc9a8[273])[_0xc9a8[370]](tooltip);},closeTooltip:function(e){e=e[_0xc9a8[463]]||e;var target=e[_0xc9a8[486]];var $parent=$(target)[_0xc9a8[394]](_0xc9a8[147],this[_0xc9a8[293]][0]);if($parent[_0xc9a8[21]]!==0&&$parent[0][_0xc9a8[353]]===_0xc9a8[632]&&target[_0xc9a8[353]]!==_0xc9a8[632]){return }else {if((target[_0xc9a8[353]]===_0xc9a8[632]&&this[_0xc9a8[63]][_0xc9a8[874]](target))||$(target)[_0xc9a8[492]](_0xc9a8[1306])){return }};$(_0xc9a8[887])[_0xc9a8[373]]();}}},paragraphize:function(){return {load:function(html){if(this[_0xc9a8[64]][_0xc9a8[313]]){return html};if(html===_0xc9a8[287]||html===_0xc9a8[1312]){return this[_0xc9a8[64]][_0xc9a8[566]]};html=html+_0xc9a8[672];this[_0xc9a8[53]][_0xc9a8[1313]]=[];this[_0xc9a8[53]][_0xc9a8[1314]]=0;html=html[_0xc9a8[587]](/(<br\s?\/?>){1,}\n?<\/blockquote>/gi,_0xc9a8[743]);html=this[_0xc9a8[53]][_0xc9a8[1315]](html);html=this[_0xc9a8[53]][_0xc9a8[1316]](html);html=this[_0xc9a8[53]][_0xc9a8[1317]](html);html=this[_0xc9a8[53]][_0xc9a8[1318]](html);html=this[_0xc9a8[53]][_0xc9a8[337]](html);html=this[_0xc9a8[53]][_0xc9a8[1319]](html);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1320]+this[_0xc9a8[64]][_0xc9a8[1321]][_0xc9a8[268]](_0xc9a8[267])+_0xc9a8[1322],_0xc9a8[609]),_0xc9a8[1323]);return $[_0xc9a8[343]](html);},getSafes:function(html){var $div=$(_0xc9a8[435])[_0xc9a8[370]](html);$div[_0xc9a8[374]](_0xc9a8[1324])[_0xc9a8[315]](function(){return $(this)[_0xc9a8[370]](_0xc9a8[712])[_0xc9a8[378]]()});html=$div[_0xc9a8[69]]();$div[_0xc9a8[374]](this[_0xc9a8[64]][_0xc9a8[1321]][_0xc9a8[268]](_0xc9a8[724]))[_0xc9a8[20]]($[_0xc9a8[312]](function(i,s){this[_0xc9a8[53]][_0xc9a8[1314]]++;this[_0xc9a8[53]][_0xc9a8[1313]][this[_0xc9a8[53]][_0xc9a8[1314]]]=s[_0xc9a8[763]];html=html[_0xc9a8[587]](s[_0xc9a8[763]],_0xc9a8[1325]+this[_0xc9a8[53]][_0xc9a8[1314]]+_0xc9a8[1326]);},this));return html;},getSafesComments:function(html){var commentsMatches=html[_0xc9a8[649]](/<!--([\w\W]*?)-->/gi);if(!commentsMatches){return html};$[_0xc9a8[20]](commentsMatches,$[_0xc9a8[312]](function(i,s){this[_0xc9a8[53]][_0xc9a8[1314]]++;this[_0xc9a8[53]][_0xc9a8[1313]][this[_0xc9a8[53]][_0xc9a8[1314]]]=s;html=html[_0xc9a8[587]](s,_0xc9a8[1325]+this[_0xc9a8[53]][_0xc9a8[1314]]+_0xc9a8[1326]);},this));return html;},restoreSafes:function(html){$[_0xc9a8[20]](this[_0xc9a8[53]][_0xc9a8[1313]],function(i,s){s=( typeof s!==_0xc9a8[14])?s[_0xc9a8[587]](/\$/g,_0xc9a8[588]):s;html=html[_0xc9a8[587]](_0xc9a8[1327]+i+_0xc9a8[1326],s);});return html;},replaceBreaksToParagraphs:function(html){var htmls=html[_0xc9a8[13]]( new RegExp(_0xc9a8[672],_0xc9a8[607]),-1);html=_0xc9a8[287];if(htmls){var len=htmls[_0xc9a8[21]];for(var i=0;i<len;i++){if(!htmls[_0xc9a8[1328]](i)){return };if(htmls[i][_0xc9a8[10]](_0xc9a8[1327])== -1){htmls[i]=htmls[i][_0xc9a8[587]](/<p>\n\t?<\/p>/gi,_0xc9a8[287]);htmls[i]=htmls[i][_0xc9a8[587]](/<p><\/p>/gi,_0xc9a8[287]);if(htmls[i]!==_0xc9a8[287]){html+=_0xc9a8[673]+htmls[i][_0xc9a8[587]](/^\n+|\n+$/g,_0xc9a8[287])+_0xc9a8[674]};}else {html+=htmls[i]};};};return html;},replaceBreaksToNewLines:function(html){html=html[_0xc9a8[587]](/<br \/>\s*<br \/>/gi,_0xc9a8[1329]);html=html[_0xc9a8[587]](/<br\s?\/?>\n?<br\s?\/?>/gi,_0xc9a8[1330]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1331],_0xc9a8[607]),_0xc9a8[672]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1332],_0xc9a8[607]),_0xc9a8[672]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1333]),_0xc9a8[607],_0xc9a8[1329]);return html;},clear:function(html){html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1334],_0xc9a8[609]),_0xc9a8[743]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1335],_0xc9a8[609]),_0xc9a8[743]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1336],_0xc9a8[609]),_0xc9a8[1337]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1338],_0xc9a8[609]),_0xc9a8[1337]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1339],_0xc9a8[609]),_0xc9a8[1340]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1341],_0xc9a8[609]),_0xc9a8[673]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1342],_0xc9a8[609]),_0xc9a8[674]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1343],_0xc9a8[609]),_0xc9a8[287]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1344],_0xc9a8[609]),_0xc9a8[674]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1345],_0xc9a8[609]),_0xc9a8[673]);html=html[_0xc9a8[587]]( new RegExp(_0xc9a8[1346],_0xc9a8[609]),_0xc9a8[287]);return html;}}},paste:function(){return {init:function(e){if(!this[_0xc9a8[64]][_0xc9a8[1347]]){setTimeout($[_0xc9a8[312]](this[_0xc9a8[35]][_0xc9a8[302]],this),1);return ;};this[_0xc9a8[258]]=true;this[_0xc9a8[30]][_0xc9a8[288]]();this[_0xc9a8[57]][_0xc9a8[294]]();this[_0xc9a8[63]][_0xc9a8[1114]]();this[_0xc9a8[54]][_0xc9a8[1348]]();$(window)[_0xc9a8[467]](_0xc9a8[1349],$[_0xc9a8[312]](function(){$(window)[_0xc9a8[759]](this[_0xc9a8[1350]])},this));setTimeout($[_0xc9a8[312]](function(){var html=this[_0xc9a8[259]][_0xc9a8[69]]();this[_0xc9a8[259]][_0xc9a8[373]]();this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[63]][_0xc9a8[1115]]();this[_0xc9a8[54]][_0xc9a8[43]](html);$(window)[_0xc9a8[791]](_0xc9a8[1349]);if(this[_0xc9a8[49]][_0xc9a8[497]]()){this[_0xc9a8[49]][_0xc9a8[339]]()};},this),1);},createPasteBox:function(){this[_0xc9a8[259]]=$(_0xc9a8[593])[_0xc9a8[69]](_0xc9a8[287])[_0xc9a8[307]](_0xc9a8[812],_0xc9a8[972])[_0xc9a8[305]]({position:_0xc9a8[836],width:0,top:0,left:_0xc9a8[1351]});if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])){this[_0xc9a8[424]][_0xc9a8[370]](this.$pasteBox)}else {if($(_0xc9a8[1352])[_0xc9a8[21]]>0){$(_0xc9a8[1352])[_0xc9a8[370]](this.$pasteBox)}else {$(_0xc9a8[273])[_0xc9a8[370]](this.$pasteBox)}};this[_0xc9a8[259]][_0xc9a8[39]]();},insert:function(html){html=this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[1353],html);html=(this[_0xc9a8[63]][_0xc9a8[631]]())?this[_0xc9a8[34]][_0xc9a8[1018]](html,false):this[_0xc9a8[34]][_0xc9a8[1018]](html);html=this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[54],html);if(this[_0xc9a8[63]][_0xc9a8[631]]()){this[_0xc9a8[43]][_0xc9a8[288]](html,false)}else {this[_0xc9a8[43]][_0xc9a8[69]](html,false)};this[_0xc9a8[63]][_0xc9a8[473]]();this[_0xc9a8[258]]=false;setTimeout($[_0xc9a8[312]](this[_0xc9a8[34]][_0xc9a8[395]],this),10);setTimeout($[_0xc9a8[312]](function(){var spans=this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[130]);$[_0xc9a8[20]](spans,function(i,s){var html=s[_0xc9a8[564]][_0xc9a8[587]](/\u200B/,_0xc9a8[287]);if(html===_0xc9a8[287]&&s[_0xc9a8[1005]][_0xc9a8[21]]===0){$(s)[_0xc9a8[373]]()};});},this),10);}}},placeholder:function(){return {enable:function(){if(!this[_0xc9a8[55]][_0xc9a8[494]]()){return };this[_0xc9a8[293]][_0xc9a8[307]](_0xc9a8[55],this[_0xc9a8[256]][_0xc9a8[307]](_0xc9a8[55]));this[_0xc9a8[55]][_0xc9a8[367]]();this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[1354],$[_0xc9a8[312]](this[_0xc9a8[55]][_0xc9a8[367]],this));},toggle:function(){setTimeout($[_0xc9a8[312]](function(){var func=this[_0xc9a8[63]][_0xc9a8[344]](this[_0xc9a8[293]][_0xc9a8[69]](),false)?_0xc9a8[389]:_0xc9a8[392];this[_0xc9a8[293]][func](_0xc9a8[1355]);},this),5)},remove:function(){this[_0xc9a8[293]][_0xc9a8[392]](_0xc9a8[1355])},is:function(){if(this[_0xc9a8[64]][_0xc9a8[55]]){return this[_0xc9a8[256]][_0xc9a8[307]](_0xc9a8[55],this[_0xc9a8[64]][_0xc9a8[55]])}else {return !( typeof this[_0xc9a8[256]][_0xc9a8[307]](_0xc9a8[55])==_0xc9a8[14]||this[_0xc9a8[256]][_0xc9a8[307]](_0xc9a8[55])===_0xc9a8[287])}}}},progress:function(){return {show:function(){document.getElementById("redactor-modal-close").click();myApp.showPleaseWait();},hide:function(){myApp.hidePleaseWait();}}},selection:function(){return {get:function(){this[_0xc9a8[860]]=document[_0xc9a8[579]]();if(document[_0xc9a8[579]]&&this[_0xc9a8[860]][_0xc9a8[581]]&&this[_0xc9a8[860]][_0xc9a8[580]]){this[_0xc9a8[355]]=this[_0xc9a8[860]][_0xc9a8[581]](0)}else {this[_0xc9a8[355]]=document[_0xc9a8[1034]]()};},addRange:function(){try{this[_0xc9a8[860]][_0xc9a8[1025]]()}catch(e){};this[_0xc9a8[860]][_0xc9a8[567]](this[_0xc9a8[355]]);},getCurrent:function(){var el=false;this[_0xc9a8[57]][_0xc9a8[323]]();if(this[_0xc9a8[860]]&&this[_0xc9a8[860]][_0xc9a8[580]]>0){el=this[_0xc9a8[860]][_0xc9a8[581]](0)[_0xc9a8[1359]]};return this[_0xc9a8[63]][_0xc9a8[874]](el);},getParent:function(elem){elem=elem||this[_0xc9a8[57]][_0xc9a8[986]]();if(elem){return this[_0xc9a8[63]][_0xc9a8[874]]($(elem)[_0xc9a8[556]]()[0])};return false;},getPrev:function(){return window[_0xc9a8[579]]()[_0xc9a8[1361]][_0xc9a8[1360]]},getNext:function(){return window[_0xc9a8[579]]()[_0xc9a8[1361]][_0xc9a8[1362]]},getBlock:function(node){node=node||this[_0xc9a8[57]][_0xc9a8[986]]();while(node){if(this[_0xc9a8[63]][_0xc9a8[563]](node[_0xc9a8[353]])){return ($(node)[_0xc9a8[492]](_0xc9a8[437]))?false:node};node=node[_0xc9a8[873]];};return false;},getInlines:function(nodes,tags){this[_0xc9a8[57]][_0xc9a8[323]]();if(this[_0xc9a8[355]]&&this[_0xc9a8[355]][_0xc9a8[356]]){return false};var inlines=[];nodes=( typeof nodes==_0xc9a8[14]||nodes===false)?this[_0xc9a8[57]][_0xc9a8[1017]]():nodes;var inlineTags=this[_0xc9a8[64]][_0xc9a8[734]];inlineTags[_0xc9a8[16]](_0xc9a8[130]);if( typeof tags!==_0xc9a8[14]){for(var i=0;i<tags[_0xc9a8[21]];i++){inlineTags[_0xc9a8[16]](tags[i])}};$[_0xc9a8[20]](nodes,$[_0xc9a8[312]](function(i,node){if($[_0xc9a8[341]](node[_0xc9a8[353]][_0xc9a8[368]](),inlineTags)!= -1){inlines[_0xc9a8[16]](node)}},this));return (inlines[_0xc9a8[21]]===0)?false:inlines;},getInlinesTags:function(tags){this[_0xc9a8[57]][_0xc9a8[323]]();if(this[_0xc9a8[355]]&&this[_0xc9a8[355]][_0xc9a8[356]]){return false};var inlines=[];var nodes=this[_0xc9a8[57]][_0xc9a8[1017]]();$[_0xc9a8[20]](nodes,$[_0xc9a8[312]](function(i,node){if($[_0xc9a8[341]](node[_0xc9a8[353]][_0xc9a8[368]](),tags)!= -1){inlines[_0xc9a8[16]](node)}},this));return (inlines[_0xc9a8[21]]===0)?false:inlines;},getBlocks:function(nodes){this[_0xc9a8[57]][_0xc9a8[323]]();if(this[_0xc9a8[355]]&&this[_0xc9a8[355]][_0xc9a8[356]]){return [this[_0xc9a8[57]][_0xc9a8[366]]()]};var blocks=[];nodes=( typeof nodes==_0xc9a8[14])?this[_0xc9a8[57]][_0xc9a8[1017]]():nodes;$[_0xc9a8[20]](nodes,$[_0xc9a8[312]](function(i,node){if(this[_0xc9a8[63]][_0xc9a8[558]](node)){this[_0xc9a8[57]][_0xc9a8[1363]]=node;blocks[_0xc9a8[16]](node);}},this));return (blocks[_0xc9a8[21]]===0)?[this[_0xc9a8[57]][_0xc9a8[366]]()]:blocks;},getLastBlock:function(){return this[_0xc9a8[57]][_0xc9a8[1363]]},getNodes:function(){this[_0xc9a8[57]][_0xc9a8[323]]();var startNode=this[_0xc9a8[57]][_0xc9a8[1364]](1);var endNode=this[_0xc9a8[57]][_0xc9a8[1364]](2);if(this[_0xc9a8[355]][_0xc9a8[356]]===false){if(window[_0xc9a8[579]]){var sel=window[_0xc9a8[579]]();if(sel[_0xc9a8[580]]>0){var range=sel[_0xc9a8[581]](0);var startPointNode=range[_0xc9a8[1359]],startOffset=range[_0xc9a8[1365]];var boundaryRange=range[_0xc9a8[575]]();boundaryRange[_0xc9a8[574]](false);boundaryRange[_0xc9a8[1024]](endNode);boundaryRange[_0xc9a8[499]](startPointNode,startOffset);boundaryRange[_0xc9a8[574]](true);boundaryRange[_0xc9a8[1024]](startNode);range[_0xc9a8[570]](startNode);range[_0xc9a8[573]](endNode);sel[_0xc9a8[1025]]();sel[_0xc9a8[567]](range);};}}else {this[_0xc9a8[57]][_0xc9a8[1366]](this[_0xc9a8[355]],startNode,true);endNode=startNode;};var nodes=[];var counter=0;var self=this;this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[686])[_0xc9a8[20]](function(){if(this==startNode){var parent=$(this)[_0xc9a8[556]]();if(parent[_0xc9a8[21]]!==0&&parent[0][_0xc9a8[353]]!=_0xc9a8[1103]&&self[_0xc9a8[63]][_0xc9a8[874]](parent[0])){nodes[_0xc9a8[16]](parent[0])};nodes[_0xc9a8[16]](this);counter=1;}else {if(counter>0){nodes[_0xc9a8[16]](this);counter=counter+1;}};if(this==endNode){return false};});var finalNodes=[];var len=nodes[_0xc9a8[21]];for(var i=0;i<len;i++){if(nodes[i][_0xc9a8[429]]!=_0xc9a8[1367]&&nodes[i][_0xc9a8[429]]!=_0xc9a8[1368]){finalNodes[_0xc9a8[16]](nodes[i])}};this[_0xc9a8[57]][_0xc9a8[1369]]();return finalNodes;},getNodesMarker:function(num){return $(_0xc9a8[1370]+num+_0xc9a8[1371]+this[_0xc9a8[64]][_0xc9a8[565]]+_0xc9a8[966])[0]},setNodesMarker:function(range,node,type){var range=range[_0xc9a8[575]]();try{range[_0xc9a8[574]](type);range[_0xc9a8[1024]](node);}catch(e){};},removeNodesMarkers:function(){$(document)[_0xc9a8[374]](_0xc9a8[1372])[_0xc9a8[373]]();this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[1372])[_0xc9a8[373]]();},fromPoint:function(start,end){this[_0xc9a8[33]][_0xc9a8[585]](start,end)},wrap:function(tag){this[_0xc9a8[57]][_0xc9a8[323]]();if(this[_0xc9a8[355]][_0xc9a8[356]]){return false};var wrapper=document[_0xc9a8[359]](tag);wrapper[_0xc9a8[1022]](this[_0xc9a8[355]][_0xc9a8[1373]]());this[_0xc9a8[355]][_0xc9a8[1024]](wrapper);return wrapper;},selectElement:function(node){if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){node=node[0]||node;var range=document[_0xc9a8[1034]]();range[_0xc9a8[576]](node);}else {this[_0xc9a8[33]][_0xc9a8[288]](node,0,node,1)}},selectAll:function(){this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[576]](this[_0xc9a8[293]][0]);this[_0xc9a8[57]][_0xc9a8[567]]();},remove:function(){this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[860]][_0xc9a8[1025]]();},save:function(){this[_0xc9a8[57]][_0xc9a8[1374]]()},createMarkers:function(){this[_0xc9a8[57]][_0xc9a8[323]]();var node1=this[_0xc9a8[57]][_0xc9a8[401]](1);this[_0xc9a8[57]][_0xc9a8[1375]](this[_0xc9a8[355]],node1,true);if(this[_0xc9a8[355]][_0xc9a8[356]]===false){var node2=this[_0xc9a8[57]][_0xc9a8[401]](2);this[_0xc9a8[57]][_0xc9a8[1375]](this[_0xc9a8[355]],node2,false);};this[_0xc9a8[1376]]=this[_0xc9a8[293]][_0xc9a8[69]]();},getMarker:function(num){if( typeof num==_0xc9a8[14]){num=1};return $(_0xc9a8[1377]+num+_0xc9a8[1378]+this[_0xc9a8[64]][_0xc9a8[565]]+_0xc9a8[966])[0];},getMarkerAsHtml:function(num){return this[_0xc9a8[63]][_0xc9a8[914]](this[_0xc9a8[57]][_0xc9a8[401]](num))},setMarker:function(range,node,type){range=range[_0xc9a8[575]]();try{range[_0xc9a8[574]](type);range[_0xc9a8[1024]](node);}catch(e){this[_0xc9a8[39]][_0xc9a8[499]]()};},restore:function(){var node1=this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[1379]);var node2=this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[1380]);if(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[345])){this[_0xc9a8[293]][_0xc9a8[39]]()};if(node1[_0xc9a8[21]]!==0&&node2[_0xc9a8[21]]!==0){this[_0xc9a8[33]][_0xc9a8[288]](node1,0,node2,0)}else {if(node1[_0xc9a8[21]]!==0){this[_0xc9a8[33]][_0xc9a8[288]](node1,0,node1,0)}else {this[_0xc9a8[293]][_0xc9a8[39]]()}};this[_0xc9a8[57]][_0xc9a8[768]]();this[_0xc9a8[1376]]=false;},removeMarkers:function(){this[_0xc9a8[293]][_0xc9a8[374]](_0xc9a8[762])[_0xc9a8[20]](function(i,s){var text=$(s)[_0xc9a8[871]]()[_0xc9a8[587]](/\u200B/g,_0xc9a8[287]);if(text===_0xc9a8[287]){$(s)[_0xc9a8[373]]()}else {$(s)[_0xc9a8[315]](function(){return $(this)[_0xc9a8[378]]()})};})},getText:function(){this[_0xc9a8[57]][_0xc9a8[323]]();return this[_0xc9a8[860]].toString();},getHtml:function(){var html=_0xc9a8[287];this[_0xc9a8[57]][_0xc9a8[323]]();if(this[_0xc9a8[860]][_0xc9a8[580]]){var container=document[_0xc9a8[359]](_0xc9a8[90]);var len=this[_0xc9a8[860]][_0xc9a8[580]];for(var i=0;i<len;++i){container[_0xc9a8[1022]](this[_0xc9a8[860]][_0xc9a8[581]](i)[_0xc9a8[1381]]())};html=container[_0xc9a8[564]];};return this[_0xc9a8[34]][_0xc9a8[751]](html);},replaceSelection:function(html){this[_0xc9a8[57]][_0xc9a8[323]]();this[_0xc9a8[355]][_0xc9a8[1020]]();var div=document[_0xc9a8[359]](_0xc9a8[90]);div[_0xc9a8[564]]=html;var frag=document[_0xc9a8[1021]](),child;while((child=div[_0xc9a8[1023]])){frag[_0xc9a8[1022]](child)};this[_0xc9a8[355]][_0xc9a8[1024]](frag);},replaceWithHtml:function(html){html=this[_0xc9a8[57]][_0xc9a8[790]](1)+html+this[_0xc9a8[57]][_0xc9a8[790]](2);this[_0xc9a8[57]][_0xc9a8[323]]();if(window[_0xc9a8[579]]&&window[_0xc9a8[579]]()[_0xc9a8[581]]){this[_0xc9a8[57]][_0xc9a8[1382]](html)}else {if(document[_0xc9a8[57]]&&document[_0xc9a8[57]][_0xc9a8[1034]]){this[_0xc9a8[355]][_0xc9a8[1033]](html)}};this[_0xc9a8[57]][_0xc9a8[301]]();this[_0xc9a8[35]][_0xc9a8[302]]();}}},shortcuts:function(){return {init:function(e,key){if(!this[_0xc9a8[64]][_0xc9a8[58]]){if((e[_0xc9a8[1048]]||e[_0xc9a8[1049]])&&(key===66||key===73)){e[_0xc9a8[455]]()};return false;};$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[58]],$[_0xc9a8[312]](function(str,command){var keys=str[_0xc9a8[13]](_0xc9a8[399]);var len=keys[_0xc9a8[21]];for(var i=0;i<len;i++){if( typeof keys[i]===_0xc9a8[8]){this[_0xc9a8[58]][_0xc9a8[800]](e,$[_0xc9a8[343]](keys[i]),$[_0xc9a8[312]](function(){var func;if(command[_0xc9a8[508]][_0xc9a8[10]](/\./)!=_0xc9a8[11]){func=command[_0xc9a8[508]][_0xc9a8[13]](_0xc9a8[12]);if( typeof this[func[0]]!=_0xc9a8[14]){this[func[0]][func[1]][_0xc9a8[3]](this,command[_0xc9a8[1383]])};}else {this[command[_0xc9a8[508]]][_0xc9a8[3]](this,command[_0xc9a8[1383]])};},this))}};},this));},handler:function(e,keys,origHandler){var hotkeysSpecialKeys={8:_0xc9a8[1384],9:_0xc9a8[1385],10:_0xc9a8[1386],13:_0xc9a8[1386],16:_0xc9a8[1387],17:_0xc9a8[1047],18:_0xc9a8[688],19:_0xc9a8[1388],20:_0xc9a8[1389],27:_0xc9a8[1390],32:_0xc9a8[1391],33:_0xc9a8[1392],34:_0xc9a8[1393],35:_0xc9a8[1143],36:_0xc9a8[1394],37:_0xc9a8[531],38:_0xc9a8[1395],39:_0xc9a8[289],40:_0xc9a8[1396],45:_0xc9a8[43],46:_0xc9a8[121],59:_0xc9a8[1003],61:_0xc9a8[1178],96:_0xc9a8[1397],97:_0xc9a8[1398],98:_0xc9a8[1399],99:_0xc9a8[1400],100:_0xc9a8[1401],101:_0xc9a8[1402],102:_0xc9a8[1403],103:_0xc9a8[1404],104:_0xc9a8[1405],105:_0xc9a8[1406],106:_0xc9a8[686],107:_0xc9a8[1407],109:_0xc9a8[817],110:_0xc9a8[12],111:_0xc9a8[1177],112:_0xc9a8[1408],113:_0xc9a8[1409],114:_0xc9a8[1410],115:_0xc9a8[1411],116:_0xc9a8[1412],117:_0xc9a8[1413],118:_0xc9a8[1414],119:_0xc9a8[1415],120:_0xc9a8[1416],121:_0xc9a8[1417],122:_0xc9a8[1418],123:_0xc9a8[1419],144:_0xc9a8[1420],145:_0xc9a8[1421],173:_0xc9a8[817],186:_0xc9a8[1003],187:_0xc9a8[1178],188:_0xc9a8[399],189:_0xc9a8[817],190:_0xc9a8[12],191:_0xc9a8[1177],192:_0xc9a8[1422],219:_0xc9a8[1423],220:_0xc9a8[1424],221:_0xc9a8[995],222:_0xc9a8[635]};var hotkeysShiftNums={"\x60":_0xc9a8[1425],"\x31":_0xc9a8[1426],"\x32":_0xc9a8[1140],"\x33":_0xc9a8[330],"\x34":_0xc9a8[1427],"\x35":_0xc9a8[1267],"\x36":_0xc9a8[911],"\x37":_0xc9a8[597],"\x38":_0xc9a8[686],"\x39":_0xc9a8[1179],"\x30":_0xc9a8[1181],"\x2D":_0xc9a8[1428],"\x3D":_0xc9a8[1407],"\x3B":_0xc9a8[1429],"\x27":_0xc9a8[634],"\x2C":_0xc9a8[363],"\x2E":_0xc9a8[364],"\x2F":_0xc9a8[1430],"\x5C":_0xc9a8[267]};keys=keys[_0xc9a8[368]]()[_0xc9a8[13]](_0xc9a8[599]);var special=hotkeysSpecialKeys[e[_0xc9a8[794]]],character=String[_0xc9a8[1431]](e[_0xc9a8[849]])[_0xc9a8[368]](),modif=_0xc9a8[287],possible={};$[_0xc9a8[20]]([_0xc9a8[688],_0xc9a8[1047],_0xc9a8[274],_0xc9a8[1387]],function(index,specialKey){if(e[specialKey+_0xc9a8[1432]]&&special!==specialKey){modif+=specialKey+_0xc9a8[1407]}});if(special){possible[modif+special]=true};if(character){possible[modif+character]=true;possible[modif+hotkeysShiftNums[character]]=true;if(modif===_0xc9a8[1433]){possible[hotkeysShiftNums[character]]=true};};for(var i=0,len=keys[_0xc9a8[21]];i<len;i++){if(possible[keys[i]]){e[_0xc9a8[455]]();return origHandler[_0xc9a8[3]](this,arguments);}};}}},tabifier:function(){return {get:function(code){if(!this[_0xc9a8[64]][_0xc9a8[59]]){return code};var ownLine=[_0xc9a8[109],_0xc9a8[273],_0xc9a8[272],_0xc9a8[111],_0xc9a8[1434],_0xc9a8[48],_0xc9a8[274],_0xc9a8[1435],_0xc9a8[88],_0xc9a8[87],_0xc9a8[89],_0xc9a8[683],_0xc9a8[685],_0xc9a8[684]];var contOwnLine=[_0xc9a8[154],_0xc9a8[386],_0xc9a8[386],_0xc9a8[1436],_0xc9a8[107],_0xc9a8[87]];var newLevel=[_0xc9a8[78],_0xc9a8[79],_0xc9a8[90],_0xc9a8[94],_0xc9a8[112],_0xc9a8[91],_0xc9a8[1437],_0xc9a8[108],_0xc9a8[93],_0xc9a8[80],_0xc9a8[104],_0xc9a8[384],_0xc9a8[385],_0xc9a8[406],_0xc9a8[92]];this[_0xc9a8[59]][_0xc9a8[1438]]= new RegExp(_0xc9a8[1439]+ownLine[_0xc9a8[268]](_0xc9a8[1440])+_0xc9a8[267]+contOwnLine[_0xc9a8[268]](_0xc9a8[267])+_0xc9a8[1441]);this[_0xc9a8[59]][_0xc9a8[1442]]= new RegExp(_0xc9a8[1443]+ownLine[_0xc9a8[268]](_0xc9a8[1440])+_0xc9a8[1444]+contOwnLine[_0xc9a8[268]](_0xc9a8[1444])+_0xc9a8[1441]);this[_0xc9a8[59]][_0xc9a8[1445]]= new RegExp(_0xc9a8[1446]+newLevel[_0xc9a8[268]](_0xc9a8[267])+_0xc9a8[1441]);var i=0,codeLength=code[_0xc9a8[21]],point=0,start=null,end=null,tag=_0xc9a8[287],out=_0xc9a8[287],cont=_0xc9a8[287];this[_0xc9a8[59]][_0xc9a8[1447]]=0;for(;i<codeLength;i++){point=i;if(-1==code[_0xc9a8[789]](i)[_0xc9a8[331]](_0xc9a8[363])){out+=code[_0xc9a8[789]](i);return this[_0xc9a8[59]][_0xc9a8[1448]](out);};while(point<codeLength&&code[_0xc9a8[1449]](point)!=_0xc9a8[363]){point++};if(i!=point){cont=code[_0xc9a8[789]](i,point-i);if(!cont[_0xc9a8[649]](/^\s{2,}$/g)){if(_0xc9a8[672]==out[_0xc9a8[1449]](out[_0xc9a8[21]]-1)){out+=this[_0xc9a8[59]][_0xc9a8[1450]]()}else {if(_0xc9a8[672]==cont[_0xc9a8[1449]](0)){out+=_0xc9a8[672]+this[_0xc9a8[59]][_0xc9a8[1450]]();cont=cont[_0xc9a8[587]](/^\s+/,_0xc9a8[287]);}};out+=cont;};if(cont[_0xc9a8[649]](/\n/)){out+=_0xc9a8[672]+this[_0xc9a8[59]][_0xc9a8[1450]]()};};start=point;while(point<codeLength&&_0xc9a8[364]!=code[_0xc9a8[1449]](point)){point++};tag=code[_0xc9a8[789]](start,point-start);i=point;var t;if(_0xc9a8[1451]==tag[_0xc9a8[789]](1,3)){if(!tag[_0xc9a8[649]](/--$/)){while(_0xc9a8[1452]!=code[_0xc9a8[789]](point,3)){point++};point+=2;tag=code[_0xc9a8[789]](start,point-start);i=point;};if(_0xc9a8[672]!=out[_0xc9a8[1449]](out[_0xc9a8[21]]-1)){out+=_0xc9a8[672]};out+=this[_0xc9a8[59]][_0xc9a8[1450]]();out+=tag+_0xc9a8[1453];}else {if(_0xc9a8[1426]==tag[1]){out=this[_0xc9a8[59]][_0xc9a8[1454]](tag+_0xc9a8[364],out)}else {if(_0xc9a8[1430]==tag[1]){out+=tag+_0xc9a8[1453]}else {if(t=tag[_0xc9a8[649]](/^<(script|style|pre)/i)){t[1]=t[1][_0xc9a8[368]]();tag=this[_0xc9a8[59]][_0xc9a8[1455]](tag);out=this[_0xc9a8[59]][_0xc9a8[1454]](tag,out);end=String(code[_0xc9a8[789]](i+1))[_0xc9a8[368]]()[_0xc9a8[331]](_0xc9a8[1456]+t[1]);if(end){cont=code[_0xc9a8[789]](i+1,end);i+=end;out+=cont;};}else {tag=this[_0xc9a8[59]][_0xc9a8[1455]](tag);out=this[_0xc9a8[59]][_0xc9a8[1454]](tag,out);}}}};};return this[_0xc9a8[59]][_0xc9a8[1448]](out);},getTabs:function(){var s=_0xc9a8[287];for(var j=0;j<this[_0xc9a8[59]][_0xc9a8[1447]];j++){s+=_0xc9a8[628]};return s;},finish:function(code){code=code[_0xc9a8[587]](/\n\s*\n/g,_0xc9a8[672]);code=code[_0xc9a8[587]](/^[\s\n]*/,_0xc9a8[287]);code=code[_0xc9a8[587]](/[\s\n]*$/,_0xc9a8[287]);code=code[_0xc9a8[587]](/<script(.*?)>\n<\/script>/gi,_0xc9a8[1457]);this[_0xc9a8[59]][_0xc9a8[1447]]=0;return code;},cleanTag:function(tag){var tagout=_0xc9a8[287];tag=tag[_0xc9a8[587]](/\n/g,_0xc9a8[599]);tag=tag[_0xc9a8[587]](/\s{2,}/g,_0xc9a8[599]);tag=tag[_0xc9a8[587]](/^\s+|\s+$/g,_0xc9a8[599]);var suffix=_0xc9a8[287];if(tag[_0xc9a8[649]](/\/$/)){suffix=_0xc9a8[1177];tag=tag[_0xc9a8[587]](/\/+$/,_0xc9a8[287]);};var m;while(m=/\s*([^= ]+)(?:=((['"']).*?\3|[^ ]+))?/[_0xc9a8[1458]](tag)){if(m[2]){tagout+=m[1][_0xc9a8[368]]()+_0xc9a8[1178]+m[2]}else {if(m[1]){tagout+=m[1][_0xc9a8[368]]()}};tagout+=_0xc9a8[599];tag=tag[_0xc9a8[789]](m[0][_0xc9a8[21]]);};return tagout[_0xc9a8[587]](/\s*$/,_0xc9a8[287])+suffix+_0xc9a8[364];},placeTag:function(tag,out){var nl=tag[_0xc9a8[649]](this[_0xc9a8[59]][_0xc9a8[1445]]);if(tag[_0xc9a8[649]](this[_0xc9a8[59]][_0xc9a8[1438]])||nl){out=out[_0xc9a8[587]](/\s*$/,_0xc9a8[287]);out+=_0xc9a8[672];};if(nl&&_0xc9a8[1177]==tag[_0xc9a8[1449]](1)){this[_0xc9a8[59]][_0xc9a8[1447]]--};if(_0xc9a8[672]==out[_0xc9a8[1449]](out[_0xc9a8[21]]-1)){out+=this[_0xc9a8[59]][_0xc9a8[1450]]()};if(nl&&_0xc9a8[1177]!=tag[_0xc9a8[1449]](1)){this[_0xc9a8[59]][_0xc9a8[1447]]++};out+=tag;if(tag[_0xc9a8[649]](this[_0xc9a8[59]][_0xc9a8[1442]])||tag[_0xc9a8[649]](this[_0xc9a8[59]][_0xc9a8[1445]])){out=out[_0xc9a8[587]](/ *$/,_0xc9a8[287])};return out;}}},tidy:function(){return {setupAllowed:function(){if(this[_0xc9a8[64]][_0xc9a8[693]]){this[_0xc9a8[64]][_0xc9a8[271]]=false};if(this[_0xc9a8[64]][_0xc9a8[694]]){this[_0xc9a8[64]][_0xc9a8[380]]=false};if(this[_0xc9a8[64]][_0xc9a8[313]]){return };var tags=[_0xc9a8[78],_0xc9a8[97]];if(this[_0xc9a8[64]][_0xc9a8[693]]){this[_0xc9a8[60]][_0xc9a8[1459]](tags)};if(this[_0xc9a8[64]][_0xc9a8[271]]){this[_0xc9a8[60]][_0xc9a8[1460]](tags)};},addToAllowed:function(tags){var len=tags[_0xc9a8[21]];for(var i=0;i<len;i++){if($[_0xc9a8[341]](tags[i],this[_0xc9a8[64]][_0xc9a8[693]])== -1){this[_0xc9a8[64]][_0xc9a8[693]][_0xc9a8[16]](tags[i])}};},removeFromDenied:function(tags){var len=tags[_0xc9a8[21]];for(var i=0;i<len;i++){var pos=$[_0xc9a8[341]](tags[i],this[_0xc9a8[64]][_0xc9a8[271]]);if(pos!= -1){this[_0xc9a8[64]][_0xc9a8[271]][_0xc9a8[1461]](pos,1)};};},load:function(html,options){this[_0xc9a8[60]][_0xc9a8[1462]]={deniedTags:this[_0xc9a8[64]][_0xc9a8[271]],allowedTags:this[_0xc9a8[64]][_0xc9a8[693]],removeComments:this[_0xc9a8[64]][_0xc9a8[1463]],replaceTags:this[_0xc9a8[64]][_0xc9a8[1464]],replaceStyles:this[_0xc9a8[64]][_0xc9a8[1465]],removeDataAttr:this[_0xc9a8[64]][_0xc9a8[1466]],removeAttr:this[_0xc9a8[64]][_0xc9a8[380]],allowedAttr:this[_0xc9a8[64]][_0xc9a8[694]],removeWithoutAttr:this[_0xc9a8[64]][_0xc9a8[1467]],removeEmpty:this[_0xc9a8[64]][_0xc9a8[397]]};$[_0xc9a8[278]](this[_0xc9a8[60]][_0xc9a8[1462]],options);html=this[_0xc9a8[60]][_0xc9a8[1463]](html);this[_0xc9a8[60]][_0xc9a8[1468]]=$(_0xc9a8[435])[_0xc9a8[370]](html);this[_0xc9a8[60]][_0xc9a8[1464]]();this[_0xc9a8[60]][_0xc9a8[1465]]();this[_0xc9a8[60]][_0xc9a8[1469]]();this[_0xc9a8[60]][_0xc9a8[380]]();this[_0xc9a8[60]][_0xc9a8[397]]();this[_0xc9a8[60]][_0xc9a8[1470]]();this[_0xc9a8[60]][_0xc9a8[1466]]();this[_0xc9a8[60]][_0xc9a8[1467]]();html=this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[69]]();this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[373]]();return html;},removeComments:function(html){if(!this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1463]]){return html};return html[_0xc9a8[587]](/<!--[\s\S]*?-->/gi,_0xc9a8[287]);},replaceTags:function(html){if(!this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1464]]){return html};var len=this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1464]][_0xc9a8[21]];var replacement=[],rTags=[];for(var i=0;i<len;i++){rTags[_0xc9a8[16]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1464]][i][1]);replacement[_0xc9a8[16]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1464]][i][0]);};$[_0xc9a8[20]](replacement,$[_0xc9a8[312]](function(key,value){this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](value)[_0xc9a8[315]](function(){return $(_0xc9a8[363]+rTags[key]+_0xc9a8[1471],{html:$(this)[_0xc9a8[69]]()})})},this));},replaceStyles:function(){if(!this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1465]]){return };var len=this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1465]][_0xc9a8[21]];this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](_0xc9a8[130])[_0xc9a8[20]]($[_0xc9a8[312]](function(n,s){var $el=$(s);var style=$el[_0xc9a8[307]](_0xc9a8[88]);for(var i=0;i<len;i++){if(style&&style[_0xc9a8[649]]( new RegExp(_0xc9a8[911]+this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1465]][i][0],_0xc9a8[151]))){var tagName=this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1465]][i][1];$el[_0xc9a8[315]](function(){var tag=document[_0xc9a8[359]](tagName);return $(tag)[_0xc9a8[370]]($(this)[_0xc9a8[378]]());});}};},this));},removeTags:function(){if(!this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[271]]&&this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[693]]){this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](_0xc9a8[686])[_0xc9a8[544]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[693]][_0xc9a8[268]](_0xc9a8[399]))[_0xc9a8[20]](function(i,s){if(s[_0xc9a8[564]]===_0xc9a8[287]){$(s)[_0xc9a8[373]]()}else {$(s)[_0xc9a8[378]]()[_0xc9a8[377]]()}})};if(this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[271]]){this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[271]][_0xc9a8[268]](_0xc9a8[399]))[_0xc9a8[20]](function(i,s){if($(s)[_0xc9a8[492]](_0xc9a8[1472])||$(s)[_0xc9a8[492]](_0xc9a8[1008])){return };if(s[_0xc9a8[564]]===_0xc9a8[287]){$(s)[_0xc9a8[373]]()}else {$(s)[_0xc9a8[378]]()[_0xc9a8[377]]()};})};},removeAttr:function(){var len;if(!this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[380]]&&this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[694]]){var allowedAttrTags=[],allowedAttrData=[];len=this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[694]][_0xc9a8[21]];for(var i=0;i<len;i++){allowedAttrTags[_0xc9a8[16]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[694]][i][0]);allowedAttrData[_0xc9a8[16]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[694]][i][1]);};this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](_0xc9a8[686])[_0xc9a8[20]]($[_0xc9a8[312]](function(n,s){var $el=$(s);var pos=$[_0xc9a8[341]]($el[0][_0xc9a8[353]][_0xc9a8[368]](),allowedAttrTags);var attributesRemove=this[_0xc9a8[60]][_0xc9a8[1473]](pos,allowedAttrData,$el);if(attributesRemove){$[_0xc9a8[20]](attributesRemove,function(z,f){$el[_0xc9a8[380]](f)})};},this));};if(this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[380]]){len=this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[380]][_0xc9a8[21]];for(var i=0;i<len;i++){var attrs=this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[380]][i][1];if($[_0xc9a8[1474]](attrs)){attrs=attrs[_0xc9a8[268]](_0xc9a8[599])};this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[380]][i][0])[_0xc9a8[380]](attrs);};};},removeAttrGetRemoves:function(pos,allowed,$el){var attributesRemove=[];if(pos== -1){$[_0xc9a8[20]]($el[0][_0xc9a8[1005]],function(i,item){attributesRemove[_0xc9a8[16]](item[_0xc9a8[317]])})}else {if(allowed[pos]==_0xc9a8[686]){attributesRemove=[]}else {$[_0xc9a8[20]]($el[0][_0xc9a8[1005]],function(i,item){if($[_0xc9a8[1474]](allowed[pos])){if($[_0xc9a8[341]](item[_0xc9a8[317]],allowed[pos])== -1){attributesRemove[_0xc9a8[16]](item[_0xc9a8[317]])}}else {if(allowed[pos]!=item[_0xc9a8[317]]){attributesRemove[_0xc9a8[16]](item[_0xc9a8[317]])}}})}};return attributesRemove;},removeAttrs:function(el,regex){regex= new RegExp(regex,_0xc9a8[607]);return el[_0xc9a8[20]](function(){var self=$(this);var len=this[_0xc9a8[1005]][_0xc9a8[21]]-1;for(var i=len;i>=0;i--){var item=this[_0xc9a8[1005]][i];if(item&&item[_0xc9a8[1475]]&&item[_0xc9a8[317]][_0xc9a8[10]](regex)>=0){self[_0xc9a8[380]](item[_0xc9a8[317]])};};});},removeEmpty:function(){if(!this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[397]]){return };this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[397]][_0xc9a8[268]](_0xc9a8[399]))[_0xc9a8[20]](function(){var $el=$(this);var text=$el[_0xc9a8[871]]();text=text[_0xc9a8[587]](/\u200B/g,_0xc9a8[287]);text=text[_0xc9a8[587]](/&nbsp;/gi,_0xc9a8[287]);text=text[_0xc9a8[587]](/\s/g,_0xc9a8[287]);if(text===_0xc9a8[287]&&$el[_0xc9a8[348]]()[_0xc9a8[21]]===0){$el[_0xc9a8[373]]()};});},removeParagraphsInLists:function(){this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](_0xc9a8[1476])[_0xc9a8[378]]()[_0xc9a8[377]]()},removeDataAttr:function(){if(!this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1466]]){return };var tags=this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1466]];if($[_0xc9a8[1474]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1466]])){tags=this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1466]][_0xc9a8[268]](_0xc9a8[399])};this[_0xc9a8[60]][_0xc9a8[1478]](this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](tags),_0xc9a8[1477]);},removeWithoutAttr:function(){if(!this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1467]]){return };this[_0xc9a8[60]][_0xc9a8[1468]][_0xc9a8[374]](this[_0xc9a8[60]][_0xc9a8[1462]][_0xc9a8[1467]][_0xc9a8[268]](_0xc9a8[399]))[_0xc9a8[20]](function(){if(this[_0xc9a8[1005]][_0xc9a8[21]]===0){$(this)[_0xc9a8[378]]()[_0xc9a8[377]]()}});}}},toolbar:function(){return {init:function(){return {html:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[69]),func:_0xc9a8[1479]},formatting:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[70]),dropdown:{p:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1480]),func:_0xc9a8[1481]},blockquote:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[340]),func:_0xc9a8[1481]},pre:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[35]),func:_0xc9a8[1481]},h1:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1482]),func:_0xc9a8[1481]},h2:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1483]),func:_0xc9a8[1481]},h3:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1484]),func:_0xc9a8[1481]},h4:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1485]),func:_0xc9a8[1481]},h5:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1486]),func:_0xc9a8[1481]}}},bold:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[71]),func:_0xc9a8[137]},italic:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[72]),func:_0xc9a8[137]},deleted:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[73]),func:_0xc9a8[137]},underline:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[131]),func:_0xc9a8[137]},unorderedlist:{title:_0xc9a8[1487]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[74]),func:_0xc9a8[141]},orderedlist:{title:_0xc9a8[1488]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[75]),func:_0xc9a8[141]},outdent:{title:_0xc9a8[1489]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[76]),func:_0xc9a8[1490]},indent:{title:_0xc9a8[1491]+this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[41]),func:_0xc9a8[1492]},image:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[40]),func:_0xc9a8[1493]},file:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[38]),func:_0xc9a8[1494]},link:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[48]),dropdown:{link:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1124]),func:_0xc9a8[140],observe:{element:_0xc9a8[147],in:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1125])},out:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1124])}}},unlink:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1309]),func:_0xc9a8[1495],observe:{element:_0xc9a8[147],out:{attr:{"\x63\x6C\x61\x73\x73":_0xc9a8[824],"\x61\x72\x69\x61\x2D\x64\x69\x73\x61\x62\x6C\x65\x64":true}}}}}},alignment:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[27]),dropdown:{left:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1496]),func:_0xc9a8[1497]},center:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1498]),func:_0xc9a8[1499]},right:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1500]),func:_0xc9a8[1501]},justify:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1502]),func:_0xc9a8[1503]}}},horizontalrule:{title:this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[77]),func:_0xc9a8[1504]}}},build:function(){this[_0xc9a8[61]][_0xc9a8[1505]]();this[_0xc9a8[61]][_0xc9a8[1506]]();this[_0xc9a8[61]][_0xc9a8[1507]]();if(this[_0xc9a8[64]][_0xc9a8[538]][_0xc9a8[21]]===0){return };this[_0xc9a8[540]]=this[_0xc9a8[61]][_0xc9a8[1508]]();this[_0xc9a8[61]][_0xc9a8[1509]]();this[_0xc9a8[61]][_0xc9a8[370]]();this[_0xc9a8[61]][_0xc9a8[1510]]();this[_0xc9a8[61]][_0xc9a8[1511]]();this[_0xc9a8[61]][_0xc9a8[1512]]();if(this[_0xc9a8[64]][_0xc9a8[1295]]){this[_0xc9a8[293]][_0xc9a8[467]](_0xc9a8[1513],$[_0xc9a8[312]](this[_0xc9a8[52]][_0xc9a8[61]],this))};},createContainer:function(){return $(_0xc9a8[1187])[_0xc9a8[389]](_0xc9a8[1515])[_0xc9a8[307]]({"\x69\x64":_0xc9a8[1514]+this[_0xc9a8[257]],"\x72\x6F\x6C\x65":_0xc9a8[61]})},setFormattingTags:function(){$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[61]][_0xc9a8[70]][_0xc9a8[37]],$[_0xc9a8[312]](function(i,s){if($[_0xc9a8[341]](i,this[_0xc9a8[64]][_0xc9a8[70]])== -1){delete this[_0xc9a8[64]][_0xc9a8[61]][_0xc9a8[70]][_0xc9a8[37]][i]}},this))},loadButtons:function(){$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[538]],$[_0xc9a8[312]](function(i,btnName){if(!this[_0xc9a8[64]][_0xc9a8[61]][btnName]){return };if(btnName===_0xc9a8[38]){if(this[_0xc9a8[64]][_0xc9a8[859]]===false){return }else {if(!this[_0xc9a8[64]][_0xc9a8[859]]&&this[_0xc9a8[64]][_0xc9a8[1516]]===false){return }}};if(btnName===_0xc9a8[40]){if(this[_0xc9a8[64]][_0xc9a8[877]]===false){return }else {if(!this[_0xc9a8[64]][_0xc9a8[877]]&&this[_0xc9a8[64]][_0xc9a8[1516]]===false){return }}};var btnObject=this[_0xc9a8[64]][_0xc9a8[61]][btnName];this[_0xc9a8[540]][_0xc9a8[370]]($(_0xc9a8[554])[_0xc9a8[370]](this[_0xc9a8[32]][_0xc9a8[31]](btnName,btnObject)));},this))},append:function(){if(this[_0xc9a8[64]][_0xc9a8[1517]]){this[_0xc9a8[540]][_0xc9a8[389]](_0xc9a8[1518]);$(this[_0xc9a8[64]][_0xc9a8[1517]])[_0xc9a8[69]](this.$toolbar);}else {this[_0xc9a8[424]][_0xc9a8[383]](this.$toolbar)}},setFixed:function(){if(!this[_0xc9a8[63]][_0xc9a8[516]]()){return };if(this[_0xc9a8[64]][_0xc9a8[1517]]){return };if(!this[_0xc9a8[64]][_0xc9a8[1519]]){return };this[_0xc9a8[61]][_0xc9a8[1520]]();$(this[_0xc9a8[64]][_0xc9a8[810]])[_0xc9a8[467]](_0xc9a8[809]+this[_0xc9a8[257]],$[_0xc9a8[312]](this[_0xc9a8[61]][_0xc9a8[1520]],this));},setOverflow:function(){if(this[_0xc9a8[63]][_0xc9a8[959]]()&&this[_0xc9a8[64]][_0xc9a8[1521]]){this[_0xc9a8[540]][_0xc9a8[389]](_0xc9a8[1522])}},isButtonSourceNeeded:function(){if(this[_0xc9a8[64]][_0xc9a8[322]]){return };var index=this[_0xc9a8[64]][_0xc9a8[538]][_0xc9a8[331]](_0xc9a8[69]);if(index!== -1){this[_0xc9a8[64]][_0xc9a8[538]][_0xc9a8[1461]](index,1)};},hideButtons:function(){if(this[_0xc9a8[64]][_0xc9a8[1523]][_0xc9a8[21]]===0){return };$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[1523]],$[_0xc9a8[312]](function(i,s){var index=this[_0xc9a8[64]][_0xc9a8[538]][_0xc9a8[331]](s);this[_0xc9a8[64]][_0xc9a8[538]][_0xc9a8[1461]](index,1);},this));},hideButtonsOnMobile:function(){if(!this[_0xc9a8[63]][_0xc9a8[959]]()||this[_0xc9a8[64]][_0xc9a8[1524]][_0xc9a8[21]]===0){return };$[_0xc9a8[20]](this[_0xc9a8[64]][_0xc9a8[1524]],$[_0xc9a8[312]](function(i,s){var index=this[_0xc9a8[64]][_0xc9a8[538]][_0xc9a8[331]](s);this[_0xc9a8[64]][_0xc9a8[538]][_0xc9a8[1461]](index,1);},this));},observeScroll:function(){var scrollTop=$(this[_0xc9a8[64]][_0xc9a8[810]])[_0xc9a8[759]]();var boxTop=1;if(this[_0xc9a8[64]][_0xc9a8[810]]===document){boxTop=this[_0xc9a8[424]][_0xc9a8[526]]()[_0xc9a8[528]]};if((scrollTop+this[_0xc9a8[64]][_0xc9a8[835]])>boxTop){this[_0xc9a8[61]][_0xc9a8[1525]](scrollTop,boxTop)}else {this[_0xc9a8[61]][_0xc9a8[1526]]()};},observeScrollEnable:function(scrollTop,boxTop){var top=this[_0xc9a8[64]][_0xc9a8[835]]+scrollTop-boxTop;var left=0;var end=boxTop+this[_0xc9a8[424]][_0xc9a8[776]]()-32;var width=this[_0xc9a8[424]][_0xc9a8[532]]();this[_0xc9a8[540]][_0xc9a8[389]](_0xc9a8[834]);this[_0xc9a8[540]][_0xc9a8[305]]({position:_0xc9a8[837],width:width,top:top+_0xc9a8[530],left:left});if(scrollTop>end){$(_0xc9a8[852]+this[_0xc9a8[257]]+_0xc9a8[1527])[_0xc9a8[438]]()};this[_0xc9a8[61]][_0xc9a8[1528]]();this[_0xc9a8[540]][_0xc9a8[305]](_0xc9a8[1529],(scrollTop<end)?_0xc9a8[1530]:_0xc9a8[1531]);},observeScrollDisable:function(){this[_0xc9a8[540]][_0xc9a8[305]]({position:_0xc9a8[1532],width:_0xc9a8[906],top:0,left:0,visibility:_0xc9a8[1530]});this[_0xc9a8[61]][_0xc9a8[1533]]();this[_0xc9a8[540]][_0xc9a8[392]](_0xc9a8[834]);},setDropdownsFixed:function(){var top=this[_0xc9a8[540]][_0xc9a8[529]]()+this[_0xc9a8[64]][_0xc9a8[835]];var position=_0xc9a8[836];if(this[_0xc9a8[64]][_0xc9a8[810]]!==document){top=(this[_0xc9a8[540]][_0xc9a8[529]]()+this[_0xc9a8[540]][_0xc9a8[526]]()[_0xc9a8[528]])+this[_0xc9a8[64]][_0xc9a8[835]];position=_0xc9a8[837];};$(_0xc9a8[852]+this[_0xc9a8[257]])[_0xc9a8[20]](function(){$(this)[_0xc9a8[305]]({position:position,top:top+_0xc9a8[530]})});},unsetDropdownsFixed:function(){var top=(this[_0xc9a8[540]][_0xc9a8[529]]()+this[_0xc9a8[540]][_0xc9a8[526]]()[_0xc9a8[528]]);$(_0xc9a8[852]+this[_0xc9a8[257]])[_0xc9a8[20]](function(){$(this)[_0xc9a8[305]]({position:_0xc9a8[837],top:top+_0xc9a8[530]})});}}},upload:function(){return {init:function(id,url,callback){this[_0xc9a8[62]][_0xc9a8[1534]]=false;this[_0xc9a8[62]][_0xc9a8[1535]]=callback;this[_0xc9a8[62]][_0xc9a8[1134]]=url;this[_0xc9a8[62]][_0xc9a8[1536]]=$(id);this[_0xc9a8[62]][_0xc9a8[1537]]=$(_0xc9a8[1538]);this[_0xc9a8[62]][_0xc9a8[1539]]=$(_0xc9a8[1541])[_0xc9a8[871]](this[_0xc9a8[46]][_0xc9a8[323]](_0xc9a8[1540]));this[_0xc9a8[62]][_0xc9a8[1542]]=$(_0xc9a8[1543]);this[_0xc9a8[62]][_0xc9a8[1539]][_0xc9a8[370]](this[_0xc9a8[62]].$input);this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[370]](this[_0xc9a8[62]].$placeholdler);this[_0xc9a8[62]][_0xc9a8[1536]][_0xc9a8[370]](this[_0xc9a8[62]].$droparea);this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[791]](_0xc9a8[1544]);this[_0xc9a8[62]][_0xc9a8[1542]][_0xc9a8[791]](_0xc9a8[1544]);this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[467]](_0xc9a8[1545],$[_0xc9a8[312]](this[_0xc9a8[62]][_0xc9a8[918]],this));this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[467]](_0xc9a8[1546],$[_0xc9a8[312]](this[_0xc9a8[62]][_0xc9a8[1547]],this));this[_0xc9a8[62]][_0xc9a8[1542]][_0xc9a8[467]](_0xc9a8[1548],$[_0xc9a8[312]](function(e){e=e[_0xc9a8[463]]||e;this[_0xc9a8[62]][_0xc9a8[1549]](this[_0xc9a8[62]][_0xc9a8[1542]][0][_0xc9a8[458]][0],e);},this));this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[467]](_0xc9a8[1550],$[_0xc9a8[312]](function(e){e[_0xc9a8[455]]();this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[392]](_0xc9a8[1552])[_0xc9a8[389]](_0xc9a8[1551]);this[_0xc9a8[62]][_0xc9a8[946]](e);},this));},directUpload:function(file,e){this[_0xc9a8[62]][_0xc9a8[1534]]=true;this[_0xc9a8[62]][_0xc9a8[1549]](file,e);},onDrop:function(e){e=e[_0xc9a8[463]]||e;var files=e[_0xc9a8[459]][_0xc9a8[458]];this[_0xc9a8[62]][_0xc9a8[1549]](files[0],e);},traverseFile:function(file,e){if(this[_0xc9a8[64]][_0xc9a8[1516]]){this[_0xc9a8[62]][_0xc9a8[1553]](file);this[_0xc9a8[62]][_0xc9a8[1554]](file);return ;};var formData=!!window[_0xc9a8[464]]? new FormData():null;if(window[_0xc9a8[464]]){this[_0xc9a8[62]][_0xc9a8[1553]](file);var name=(this[_0xc9a8[62]][_0xc9a8[297]]==_0xc9a8[40])?this[_0xc9a8[64]][_0xc9a8[1555]]:this[_0xc9a8[64]][_0xc9a8[1556]];formData[_0xc9a8[370]](name,file);};this[_0xc9a8[56]][_0xc9a8[527]]();this[_0xc9a8[36]][_0xc9a8[280]](_0xc9a8[1557],e,formData);this[_0xc9a8[62]][_0xc9a8[1558]](formData,e);},setConfig:function(file){this[_0xc9a8[62]][_0xc9a8[1559]](file);if(this[_0xc9a8[62]][_0xc9a8[1534]]){this[_0xc9a8[62]][_0xc9a8[1134]]=(this[_0xc9a8[62]][_0xc9a8[297]]==_0xc9a8[40])?this[_0xc9a8[64]][_0xc9a8[877]]:this[_0xc9a8[64]][_0xc9a8[859]];this[_0xc9a8[62]][_0xc9a8[1535]]=(this[_0xc9a8[62]][_0xc9a8[297]]==_0xc9a8[40])?this[_0xc9a8[40]][_0xc9a8[43]]:this[_0xc9a8[38]][_0xc9a8[43]];};},getType:function(file){this[_0xc9a8[62]][_0xc9a8[297]]=_0xc9a8[40];if(this[_0xc9a8[64]][_0xc9a8[1560]][_0xc9a8[331]](file[_0xc9a8[297]])== -1){this[_0xc9a8[62]][_0xc9a8[297]]=_0xc9a8[38]};},getHiddenFields:function(obj,fd){if(obj===false|| typeof obj!==_0xc9a8[102]){return fd};$[_0xc9a8[20]](obj,$[_0xc9a8[312]](function(k,v){if(v!==null&&v.toString()[_0xc9a8[331]](_0xc9a8[330])===0){v=$(v)[_0xc9a8[332]]()};fd[_0xc9a8[370]](k,v);},this));return fd;},sendData:function(formData,e){if(this[_0xc9a8[62]][_0xc9a8[297]]==_0xc9a8[40]){formData=this[_0xc9a8[62]][_0xc9a8[324]](this[_0xc9a8[64]][_0xc9a8[1561]],formData);formData=this[_0xc9a8[62]][_0xc9a8[324]](this[_0xc9a8[62]][_0xc9a8[1562]],formData);}else {formData=this[_0xc9a8[62]][_0xc9a8[324]](this[_0xc9a8[64]][_0xc9a8[1563]],formData);formData=this[_0xc9a8[62]][_0xc9a8[324]](this[_0xc9a8[62]][_0xc9a8[1564]],formData);};var xhr= new XMLHttpRequest();xhr[_0xc9a8[1566]](_0xc9a8[1565],this[_0xc9a8[62]][_0xc9a8[1134]]);xhr[_0xc9a8[1569]](_0xc9a8[1567],_0xc9a8[1568]);xhr[_0xc9a8[1570]]=$[_0xc9a8[312]](function(){if(xhr[_0xc9a8[1571]]==4){var data=xhr[_0xc9a8[1572]];data=data[_0xc9a8[587]](/^\[/,_0xc9a8[287]);data=data[_0xc9a8[587]](/\]$/,_0xc9a8[287]);var json;try{json=( typeof data===_0xc9a8[8]?$[_0xc9a8[333]](data):data)}catch(err){json={error:true}};this[_0xc9a8[56]][_0xc9a8[438]]();if(!this[_0xc9a8[62]][_0xc9a8[1534]]){this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[392]](_0xc9a8[1551])};this[_0xc9a8[62]][_0xc9a8[1535]](json,this[_0xc9a8[62]][_0xc9a8[1534]],e);}},this);xhr[_0xc9a8[1573]](formData);},onDrag:function(e){e[_0xc9a8[455]]();this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[389]](_0xc9a8[1552]);},onDragLeave:function(e){e[_0xc9a8[455]]();this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[392]](_0xc9a8[1552]);},clearImageFields:function(){this[_0xc9a8[62]][_0xc9a8[1562]]={}},addImageFields:function(name,value){this[_0xc9a8[62]][_0xc9a8[1562]][name]=value},removeImageFields:function(name){delete this[_0xc9a8[62]][_0xc9a8[1562]][name]},clearFileFields:function(){this[_0xc9a8[62]][_0xc9a8[1564]]={}},addFileFields:function(name,value){this[_0xc9a8[62]][_0xc9a8[1564]][name]=value},removeFileFields:function(name){delete this[_0xc9a8[62]][_0xc9a8[1564]][name]},s3uploadFile:function(file){this[_0xc9a8[62]][_0xc9a8[1575]](file,$[_0xc9a8[312]](function(signedURL){this[_0xc9a8[62]][_0xc9a8[1574]](file,signedURL)},this))},s3executeOnSignedUrl:function(file,callback){var xhr= new XMLHttpRequest();var mark=_0xc9a8[1430];if(this[_0xc9a8[64]][_0xc9a8[1516]][_0xc9a8[10]](/\?/)!=_0xc9a8[11]){mark=_0xc9a8[597]};xhr[_0xc9a8[1566]](_0xc9a8[1576],this[_0xc9a8[64]][_0xc9a8[1516]]+mark+_0xc9a8[1577]+file[_0xc9a8[317]]+_0xc9a8[1578]+file[_0xc9a8[297]],true);if(xhr[_0xc9a8[1579]]){xhr[_0xc9a8[1579]](_0xc9a8[1580])};var that=this;xhr[_0xc9a8[1570]]=function(e){if(this[_0xc9a8[1571]]==4&&this[_0xc9a8[1581]]==200){that[_0xc9a8[56]][_0xc9a8[527]]();callback(decodeURIComponent(this[_0xc9a8[1572]]));}else {if(this[_0xc9a8[1571]]==4&&this[_0xc9a8[1581]]!=200){}}};xhr[_0xc9a8[1573]]();},s3createCORSRequest:function(method,url){var xhr= new XMLHttpRequest();if(_0xc9a8[1582] in xhr){xhr[_0xc9a8[1566]](method,url,true)}else {if( typeof XDomainRequest!=_0xc9a8[14]){xhr= new XDomainRequest();xhr[_0xc9a8[1566]](method,url);}else {xhr=null}};return xhr;},s3uploadToS3:function(file,url){var xhr=this[_0xc9a8[62]][_0xc9a8[1584]](_0xc9a8[1583],url);if(!xhr){}else {xhr[_0xc9a8[1585]]=$[_0xc9a8[312]](function(){if(xhr[_0xc9a8[1581]]==200){this[_0xc9a8[56]][_0xc9a8[438]]();var s3file=url[_0xc9a8[13]](_0xc9a8[1430]);if(!s3file[0]){return false};if(!this[_0xc9a8[62]][_0xc9a8[1534]]){this[_0xc9a8[62]][_0xc9a8[1537]][_0xc9a8[392]](_0xc9a8[1551])};var json={filelink:s3file[0]};if(this[_0xc9a8[62]][_0xc9a8[297]]==_0xc9a8[38]){var arr=s3file[0][_0xc9a8[13]](_0xc9a8[1177]);json[_0xc9a8[864]]=arr[arr[_0xc9a8[21]]-1];};this[_0xc9a8[62]][_0xc9a8[1535]](json,this[_0xc9a8[62]][_0xc9a8[1534]],false);}else {}},this);xhr[_0xc9a8[1586]]=function(){};xhr[_0xc9a8[62]][_0xc9a8[1587]]=function(e){};xhr[_0xc9a8[1569]](_0xc9a8[1588],file[_0xc9a8[297]]);xhr[_0xc9a8[1569]](_0xc9a8[1589],_0xc9a8[1590]);xhr[_0xc9a8[1573]](file);};}}},utils:function(){return {isMobile:function(){return /(iPhone|iPod|BlackBerry|Android)/[_0xc9a8[1141]](navigator[_0xc9a8[1591]])},isDesktop:function(){return !/(iPhone|iPod|iPad|BlackBerry|Android)/[_0xc9a8[1141]](navigator[_0xc9a8[1591]])},isString:function(obj){return Object[_0xc9a8[2]][_0xc9a8[1592]][_0xc9a8[6]](obj)==_0xc9a8[1593]},isEmpty:function(html,removeEmptyTags){html=html[_0xc9a8[587]](/[\u200B-\u200D\uFEFF]/g,_0xc9a8[287]);html=html[_0xc9a8[587]](/&nbsp;/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<\/?br\s?\/?>/g,_0xc9a8[287]);html=html[_0xc9a8[587]](/\s/g,_0xc9a8[287]);html=html[_0xc9a8[587]](/^<p>[^\W\w\D\d]*?<\/p>$/i,_0xc9a8[287]);html=html[_0xc9a8[587]](/<iframe(.*?[^>])>$/i,_0xc9a8[103]);html=html[_0xc9a8[587]](/<source(.*?[^>])>$/i,_0xc9a8[322]);if(removeEmptyTags!==false){html=html[_0xc9a8[587]](/<[^\/>][^>]*><\/[^>]+>/gi,_0xc9a8[287]);html=html[_0xc9a8[587]](/<[^\/>][^>]*><\/[^>]+>/gi,_0xc9a8[287]);};html=$[_0xc9a8[343]](html);return html===_0xc9a8[287];},normalize:function(str){if( typeof (str)===_0xc9a8[14]){return 0};return parseInt(str[_0xc9a8[587]](_0xc9a8[530],_0xc9a8[287]),10);},hexToRgb:function(hex){if( typeof hex==_0xc9a8[14]){return };if(hex[_0xc9a8[10]](/^#/)== -1){return hex};var shorthandRegex=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex=hex[_0xc9a8[587]](shorthandRegex,function(m,r,g,b){return r+r+g+g+b+b});var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i[_0xc9a8[1458]](hex);return _0xc9a8[1594]+parseInt(result[1],16)+_0xc9a8[724]+parseInt(result[2],16)+_0xc9a8[724]+parseInt(result[3],16)+_0xc9a8[1181];},getOuterHtml:function(el){return $(_0xc9a8[593])[_0xc9a8[370]]($(el)[_0xc9a8[1185]](0)[_0xc9a8[1107]]())[_0xc9a8[69]]()},getAlignmentElement:function(el){if($[_0xc9a8[341]](el[_0xc9a8[353]],this[_0xc9a8[64]][_0xc9a8[263]])!== -1){return $(el)}else {return $(el)[_0xc9a8[394]](this[_0xc9a8[64]][_0xc9a8[263]].toString()[_0xc9a8[368]](),this[_0xc9a8[293]][0])}},removeEmptyAttr:function(el,attr){var $el=$(el);if( typeof $el[_0xc9a8[307]](attr)==_0xc9a8[14]){return true};if($el[_0xc9a8[307]](attr)===_0xc9a8[287]){$el[_0xc9a8[380]](attr);return true;};return false;},removeEmpty:function(i,s){var $s=$($[_0xc9a8[616]](s));$s[_0xc9a8[374]](_0xc9a8[1595])[_0xc9a8[380]](_0xc9a8[88])[_0xc9a8[380]](_0xc9a8[336]);if($s[_0xc9a8[374]](_0xc9a8[1596])[_0xc9a8[21]]!==0){return };var text=$[_0xc9a8[343]]($s[_0xc9a8[871]]());if(this[_0xc9a8[63]][_0xc9a8[344]](text,false)){$s[_0xc9a8[373]]()};},saveScroll:function(){this[_0xc9a8[1597]]=this[_0xc9a8[293]][_0xc9a8[759]]();this[_0xc9a8[1350]]=$(window)[_0xc9a8[759]]();if(this[_0xc9a8[64]][_0xc9a8[1598]]){this[_0xc9a8[1599]]=$(this[_0xc9a8[64]][_0xc9a8[1598]])[_0xc9a8[759]]()};},restoreScroll:function(){if( typeof this[_0xc9a8[1114]]===_0xc9a8[14]&& typeof this[_0xc9a8[1350]]===_0xc9a8[14]){return };$(window)[_0xc9a8[759]](this[_0xc9a8[1350]]);this[_0xc9a8[293]][_0xc9a8[759]](this[_0xc9a8[1597]]);if(this[_0xc9a8[64]][_0xc9a8[1598]]){$(this[_0xc9a8[64]][_0xc9a8[1598]])[_0xc9a8[759]](this[_0xc9a8[1599]])};},createSpaceElement:function(){var space=document[_0xc9a8[359]](_0xc9a8[130]);space[_0xc9a8[1045]]=_0xc9a8[1067];space[_0xc9a8[564]]=this[_0xc9a8[64]][_0xc9a8[565]];return space;},removeInlineTags:function(node){var tags=this[_0xc9a8[64]][_0xc9a8[734]];tags[_0xc9a8[16]](_0xc9a8[130]);if(node[_0xc9a8[353]]==_0xc9a8[181]){tags[_0xc9a8[16]](_0xc9a8[147])};$(node)[_0xc9a8[374]](tags[_0xc9a8[268]](_0xc9a8[399]))[_0xc9a8[544]](_0xc9a8[762])[_0xc9a8[378]]()[_0xc9a8[377]]();},replaceWithContents:function(node,removeInlineTags){var self=this;$(node)[_0xc9a8[315]](function(){if(removeInlineTags===true){self[_0xc9a8[63]][_0xc9a8[375]](this)};return $(this)[_0xc9a8[378]]();});return $(node);},replaceToTag:function(node,tag,removeInlineTags){var replacement;var self=this;$(node)[_0xc9a8[315]](function(){replacement=$(_0xc9a8[363]+tag+_0xc9a8[1471])[_0xc9a8[370]]($(this)[_0xc9a8[378]]());for(var i=0;i<this[_0xc9a8[1005]][_0xc9a8[21]];i++){replacement[_0xc9a8[307]](this[_0xc9a8[1005]][i][_0xc9a8[317]],this[_0xc9a8[1005]][i][_0xc9a8[351]])};if(removeInlineTags===true){self[_0xc9a8[63]][_0xc9a8[375]](replacement)};return replacement;});return replacement;},isStartOfElement:function(){var block=this[_0xc9a8[57]][_0xc9a8[366]]();if(!block){return false};var offset=this[_0xc9a8[33]][_0xc9a8[1600]](block);return (offset===0)?true:false;},isEndOfElement:function(element){if( typeof element==_0xc9a8[14]){var element=this[_0xc9a8[57]][_0xc9a8[366]]();if(!element){return false};};var offset=this[_0xc9a8[33]][_0xc9a8[1600]](element);var text=$[_0xc9a8[343]]($(element)[_0xc9a8[871]]())[_0xc9a8[587]](/\n\r\n/g,_0xc9a8[287]);return (offset==text[_0xc9a8[21]])?true:false;},isEndOfEditor:function(){var block=this[_0xc9a8[293]][0];var offset=this[_0xc9a8[33]][_0xc9a8[1600]](block);var text=$[_0xc9a8[343]]($(block)[_0xc9a8[69]]()[_0xc9a8[587]](/(<([^>]+)>)/gi,_0xc9a8[287]));return (offset==text[_0xc9a8[21]])?true:false;},isBlock:function(block){block=block[0]||block;return block&&this[_0xc9a8[63]][_0xc9a8[563]](block[_0xc9a8[353]]);},isBlockTag:function(tag){if( typeof tag==_0xc9a8[14]){return false};return this[_0xc9a8[265]][_0xc9a8[1141]](tag);},isTag:function(current,tag){var element=$(current)[_0xc9a8[394]](tag,this[_0xc9a8[293]][0]);if(element[_0xc9a8[21]]==1){return element[0]};return false;},isSelectAll:function(){return this[_0xc9a8[1601]]},enableSelectAll:function(){this[_0xc9a8[1601]]=true},disableSelectAll:function(){this[_0xc9a8[1601]]=false},isRedactorParent:function(el){if(!el){return false};if($(el)[_0xc9a8[496]](_0xc9a8[1602])[_0xc9a8[21]]===0||$(el)[_0xc9a8[492]](_0xc9a8[437])){return false};return el;},isCurrentOrParentHeader:function(){return this[_0xc9a8[63]][_0xc9a8[633]]([_0xc9a8[161],_0xc9a8[162],_0xc9a8[163],_0xc9a8[164],_0xc9a8[165],_0xc9a8[166]])},isCurrentOrParent:function(tagName){var parent=this[_0xc9a8[57]][_0xc9a8[1015]]();var current=this[_0xc9a8[57]][_0xc9a8[986]]();if($[_0xc9a8[1474]](tagName)){var matched=0;$[_0xc9a8[20]](tagName,$[_0xc9a8[312]](function(i,s){if(this[_0xc9a8[63]][_0xc9a8[1603]](current,parent,s)){matched++}},this));return (matched===0)?false:true;}else {return this[_0xc9a8[63]][_0xc9a8[1603]](current,parent,tagName)};},isCurrentOrParentOne:function(current,parent,tagName){tagName=tagName[_0xc9a8[1604]]();return parent&&parent[_0xc9a8[353]]===tagName?parent:current&&current[_0xc9a8[353]]===tagName?current:false;},isOldIe:function(){return (this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])&&parseInt(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[1605]),10)<9)?true:false},isLessIe10:function(){return (this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[291])&&parseInt(this[_0xc9a8[63]][_0xc9a8[292]](_0xc9a8[1605]),10)<10)?true:false},isIe11:function(){return !!navigator[_0xc9a8[1591]][_0xc9a8[649]](/Trident\/7\./)},browser:function(browser){var ua=navigator[_0xc9a8[1591]][_0xc9a8[368]]();var match=/(opr)[\/]([\w.]+)/[_0xc9a8[1458]](ua)||/(chrome)[ \/]([\w.]+)/[_0xc9a8[1458]](ua)||/(webkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/[_0xc9a8[1458]](ua)||/(webkit)[ \/]([\w.]+)/[_0xc9a8[1458]](ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/[_0xc9a8[1458]](ua)||/(msie) ([\w.]+)/[_0xc9a8[1458]](ua)||ua[_0xc9a8[331]](_0xc9a8[1606])>=0&&/(rv)(?::| )([\w.]+)/[_0xc9a8[1458]](ua)||ua[_0xc9a8[331]](_0xc9a8[1607])<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/[_0xc9a8[1458]](ua)||[];if(browser==_0xc9a8[1608]){return ( typeof match[3]!=_0xc9a8[14])?match[3]==_0xc9a8[1608]:false};if(browser==_0xc9a8[1605]){return match[2]};if(browser==_0xc9a8[1609]){return (match[1]==_0xc9a8[1610]||match[1]==_0xc9a8[1611]||match[1]==_0xc9a8[1609])};if(match[1]==_0xc9a8[1612]){return browser==_0xc9a8[291]};if(match[1]==_0xc9a8[1611]){return browser==_0xc9a8[1609]};return browser==match[1];},strpos:function(haystack,needle,offset){var i=haystack[_0xc9a8[331]](needle,offset);return i>=0?i:false;},disableBodyScroll:function(){var $body=$(_0xc9a8[69]);var windowWidth=window[_0xc9a8[532]];if(!windowWidth){var documentElementRect=document[_0xc9a8[1614]][_0xc9a8[1613]]();windowWidth=documentElementRect[_0xc9a8[289]]-Math[_0xc9a8[1615]](documentElementRect[_0xc9a8[531]]);};var isOverflowing=document[_0xc9a8[273]][_0xc9a8[1616]]<windowWidth;var scrollbarWidth=this[_0xc9a8[63]][_0xc9a8[1617]]();$body[_0xc9a8[305]](_0xc9a8[1283],_0xc9a8[1531]);if(isOverflowing){$body[_0xc9a8[305]](_0xc9a8[1618],scrollbarWidth)};},measureScrollbar:function(){var $body=$(_0xc9a8[273]);var scrollDiv=document[_0xc9a8[359]](_0xc9a8[90]);scrollDiv[_0xc9a8[1045]]=_0xc9a8[1619];$body[_0xc9a8[370]](scrollDiv);var scrollbarWidth=scrollDiv[_0xc9a8[1620]]-scrollDiv[_0xc9a8[1616]];$body[0][_0xc9a8[1621]](scrollDiv);return scrollbarWidth;},enableBodyScroll:function(){$(_0xc9a8[69])[_0xc9a8[305]]({"\x6F\x76\x65\x72\x66\x6C\x6F\x77":_0xc9a8[287],"\x70\x61\x64\x64\x69\x6E\x67\x2D\x72\x69\x67\x68\x74":_0xc9a8[287]});$(_0xc9a8[273])[_0xc9a8[373]](_0xc9a8[1619]);}}}};$(window)[_0xc9a8[467]](_0xc9a8[1622],function(){$(_0xc9a8[1623])[_0xc9a8[4]]()});Redactor[_0xc9a8[2]][_0xc9a8[22]][_0xc9a8[2]]=Redactor[_0xc9a8[2]];})(jQuery);
(function($)
{
	$.Redactor.prototype.table = function()
	{
		return {
			getTemplate: function()
			{
				return String()
				+ '<section id="redactor-modal-table-insert">'
					+ '<label>' + this.lang.get('rows') + '</label>'
					+ '<input type="text" size="5" value="2" id="redactor-table-rows" />'
					+ '<label>' + this.lang.get('columns') + '</label>'
					+ '<input type="text" size="5" value="3" id="redactor-table-columns" />'
				+ '</section>';
			},
			init: function()
			{
				var dropdown = {};

				dropdown.insert_table = {
									title: this.lang.get('insert_table'),
									func: this.table.show,
									observe: {
										element: 'table',
										in: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.insert_row_above = {
									title: this.lang.get('insert_row_above'),
									func: this.table.addRowAbove,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.insert_row_below = {
									title: this.lang.get('insert_row_below'),
									func: this.table.addRowBelow,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.insert_row_below = {
									title: this.lang.get('insert_row_below'),
									func: this.table.addRowBelow,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.insert_column_left = {
									title: this.lang.get('insert_column_left'),
									func: this.table.addColumnLeft,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.insert_column_right = {
									title: this.lang.get('insert_column_right'),
									func: this.table.addColumnRight,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.add_head = {
									title: this.lang.get('add_head'),
									func: this.table.addHead,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.delete_head = {
									title: this.lang.get('delete_head'),
									func: this.table.deleteHead,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.delete_column = {
									title: this.lang.get('delete_column'),
									func: this.table.deleteColumn,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.delete_row = {
									title: this.lang.get('delete_row'),
									func: this.table.deleteRow,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				dropdown.delete_row = {
									title: this.lang.get('delete_table'),
									func: this.table.deleteTable,
									observe: {
										element: 'table',
										out: {
											attr: {
												'class': 'redactor-dropdown-link-inactive',
												'aria-disabled': true,
											}
										}
									}
								};

				this.observe.addButton('td', 'table');
				this.observe.addButton('th', 'table');

				var button = this.button.addBefore('link', 'table', this.lang.get('table'));
				this.button.addDropdown(button, dropdown);
			},
			show: function()
			{
				this.modal.addTemplate('table', this.table.getTemplate());

				this.modal.load('table', this.lang.get('insert_table'), 300);
				this.modal.createCancelButton();

				var button = this.modal.createActionButton(this.lang.get('insert'));
				button.on('click', this.table.insert);

				this.selection.save();
				this.modal.show();

				$('#redactor-table-rows').focus();

			},
			insert: function()
			{
				this.placeholder.remove();

				var rows = $('#redactor-table-rows').val(),
					columns = $('#redactor-table-columns').val(),
					$tableBox = $('<div>'),
					tableId = Math.floor(Math.random() * 99999),
					$table = $('<table id="table' + tableId + '"><tbody></tbody></table>'),
					i, $row, z, $column;

				for (i = 0; i < rows; i++)
				{
					$row = $('<tr>');

					for (z = 0; z < columns; z++)
					{
						$column = $('<td>' + this.opts.invisibleSpace + '</td>');

						// set the focus to the first td
						if (i === 0 && z === 0)
						{
							$column.append(this.selection.getMarker());
						}

						$($row).append($column);
					}

					$table.append($row);
				}

				$tableBox.append($table);
				var html = $tableBox.html();

				this.modal.close();
				this.selection.restore();

				if (this.table.getTable()) return;

				this.buffer.set();

				var current = this.selection.getBlock() || this.selection.getCurrent();
				if (current && current.tagName != 'BODY')
				{
					if (current.tagName == 'LI') current = $(current).closest('ul, ol');
					$(current).after(html);
				}
				else
				{
					this.insert.html(html, false);
				}

				this.selection.restore();

				var table = this.$editor.find('#table' + tableId);

				var p = table.prev("p");

				if (p.length > 0 && this.utils.isEmpty(p.html()))
				{
					p.remove();
				}

				if (!this.opts.linebreaks && (this.utils.browser('mozilla') || this.utils.browser('msie')))
				{
					var $next = table.next();
					if ($next.length === 0)
					{
						 table.after(this.opts.emptyHtml);
					}
				}

				this.observe.buttons();

				table.find('span.redactor-selection-marker').remove();
				table.removeAttr('id');

				this.code.sync();
				this.core.setCallback('insertedTable', table);
			},
			getTable: function()
			{
				var $table = $(this.selection.getParent()).closest('table');

				if (!this.utils.isRedactorParent($table)) return false;
				if ($table.size() === 0) return false;

				return $table;
			},
			restoreAfterDelete: function($table)
			{
				this.selection.restore();
				$table.find('span.redactor-selection-marker').remove();
				this.code.sync();
			},
			deleteTable: function()
			{
				var $table = this.table.getTable();
				if (!$table) return;

				this.buffer.set();


				var $next = $table.next();
				if (!this.opts.linebreaks && $next.length !== 0)
				{
					this.caret.setStart($next);
				}
				else
				{
					this.caret.setAfter($table);
				}


				$table.remove();

				this.code.sync();
			},
			deleteRow: function()
			{
			var $table = this.table.getTable();
			if (!$table) return;

			var $current = $(this.selection.getCurrent());

			this.buffer.set();

			var $current_tr = $current.closest('tr');
			var $focus_tr = $current_tr.prev().length ? $current_tr.prev() : $current_tr.next();
			if ($focus_tr.length)
			{
				var $focus_td = $focus_tr.children('td, th').first();
				if ($focus_td.length) $focus_td.prepend(this.selection.getMarker());
			}

			$current_tr.remove();
			this.table.restoreAfterDelete($table);
		},
			deleteColumn: function()
			{
			var $table = this.table.getTable();
			if (!$table) return;

			this.buffer.set();

			var $current = $(this.selection.getCurrent());
			var $current_td = $current.closest('td, th');
			var index = $current_td[0].cellIndex;

			$table.find('tr').each($.proxy(function(i, elem)
			{
				var $elem = $(elem);
				var focusIndex = index - 1 < 0 ? index + 1 : index - 1;
				if (i === 0) $elem.find('td, th').eq(focusIndex).prepend(this.selection.getMarker());

				$elem.find('td, th').eq(index).remove();

			}, this));

			this.table.restoreAfterDelete($table);
		},
			addHead: function()
			{
				var $table = this.table.getTable();
				if (!$table) return;

				this.buffer.set();

				if ($table.find('thead').size() !== 0)
				{
					this.table.deleteHead();
					return;
				}

				var tr = $table.find('tr').first().clone();
				tr.find('td').replaceWith($.proxy(function()
				{
					return $('<th>').html(this.opts.invisibleSpace);
				}, this));

				$thead = $('<thead></thead>').append(tr);
				$table.prepend($thead);

				this.code.sync();

			},
			deleteHead: function()
			{
				var $table = this.table.getTable();
				if (!$table) return;

				var $thead = $table.find('thead');
				if ($thead.size() === 0) return;

				this.buffer.set();

				$thead.remove();
				this.code.sync();
			},
			addRowAbove: function()
			{
				this.table.addRow('before');
			},
			addRowBelow: function()
			{
				this.table.addRow('after');
			},
			addColumnLeft: function()
			{
				this.table.addColumn('before');
			},
			addColumnRight: function()
			{
				this.table.addColumn('after');
			},
			addRow: function(type)
			{
				var $table = this.table.getTable();
				if (!$table) return;

				this.buffer.set();

				var $current = $(this.selection.getCurrent());
				var $current_tr = $current.closest('tr');
				var new_tr = $current_tr.clone();

				new_tr.find('th').replaceWith(function()
				{
					var $td = $('<td>');
					$td[0].attributes = this.attributes;

					return $td.append($(this).contents());
				});

				new_tr.find('td').html(this.opts.invisibleSpace);

				if (type == 'after')
				{
					$current_tr.after(new_tr);
				}
				else
				{
					$current_tr.before(new_tr);
				}

				this.code.sync();
			},
			addColumn: function (type)
			{
				var $table = this.table.getTable();
				if (!$table) return;

				var index = 0;
				var current = $(this.selection.getCurrent());

				this.buffer.set();

				var $current_tr = current.closest('tr');
				var $current_td = current.closest('td, th');

				$current_tr.find('td, th').each($.proxy(function(i, elem)
				{
					if ($(elem)[0] === $current_td[0]) index = i;

				}, this));

				$table.find('tr').each($.proxy(function(i, elem)
				{
					var $current = $(elem).find('td, th').eq(index);

					var td = $current.clone();
					td.html(this.opts.invisibleSpace);

					if (type == 'after')
					{
						$current.after(td);
					}
					else
					{
						$current.before(td);
					}

				}, this));

				this.code.sync();
			}
		};
	};
})(jQuery);
(function($)
{
	$.Redactor.prototype.video = function()
	{
		return {
			reUrlYoutube: /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube\.com\S*[^\w\-\s])([\w\-]{11})(?=[^\w\-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig,
			reUrlVimeo: /https?:\/\/(www\.)?vimeo.com\/(\d+)($|\/)/,
			getTemplate: function()
			{
				return String()
				+ '<section id="redactor-modal-video-insert">'
					+ '<label>' + this.lang.get('video_html_code') + '</label>'
					+ '<textarea id="redactor-insert-video-area" style="height: 160px;"></textarea>'
				+ '</section>';
			},
			init: function()
			{
				var button = this.button.addAfter('image', 'video', this.lang.get('video'));
				this.button.addCallback(button, this.video.show);
			},
			show: function()
			{
				this.modal.addTemplate('video', this.video.getTemplate());

				this.modal.load('video', this.lang.get('video'), 700);
				this.modal.createCancelButton();

				var button = this.modal.createActionButton(this.lang.get('insert'));
				button.on('click', this.video.insert);

				this.selection.save();
				this.modal.show();

				$('#redactor-insert-video-area').focus();

			},
			insert: function()
			{
				var data = $('#redactor-insert-video-area').val();

				if (!data.match(/<iframe|<video/gi))
				{
					data = this.clean.stripTags(data);

					// parse if it is link on youtube & vimeo
					var iframeStart = '<iframe style="width: 500px; height: 281px;" src="',
						iframeEnd = '" frameborder="0" allowfullscreen></iframe>';

					if (data.match(this.video.reUrlYoutube))
					{
						data = data.replace(this.video.reUrlYoutube, iframeStart + '//www.youtube.com/embed/$1' + iframeEnd);
					}
					else if (data.match(this.video.reUrlVimeo))
					{
						data = data.replace(this.video.reUrlVimeo, iframeStart + '//player.vimeo.com/video/$2' + iframeEnd);
					}
				}

				this.selection.restore();
				this.modal.close();

				var current = this.selection.getBlock() || this.selection.getCurrent();

				if (current) $(current).after(data);
				else
				{
					this.insert.html(data);
				}

				this.code.sync();
			}

		};
	};
})(jQuery);
/**
 * speakingurl
 * @version v5.0.1
 * @link http://pid.github.io/speakingurl/
 * @license BSD
 * @author Sascha Droste
 */!function(e,a){"use strict";var n=function(e,a){var n,t,u,l,s,r,c,m,g,d,h,k,y,f,p,A="-",b=[";","?",":","@","&","=","+","$",",","/"],E=[";","?",":","@","&","=","+","$",","],z=[".","!","~","*","'","(",")"],S="",j="",O=!0,w={},v={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"Ae","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"Oe","Ő":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"Ue","Ű":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"ae","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"oe","ő":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"ue","ű":"u","ý":"y","þ":"th","ÿ":"y","ẞ":"SS","ا":"a","أ":"a","إ":"i","آ":"aa","ؤ":"u","ئ":"e","ء":"a","ب":"b","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ي":"y","ى":"a","ة":"h","ﻻ":"la","ﻷ":"laa","ﻹ":"lai","ﻵ":"laa","َ":"a","ً":"an","ِ":"e","ٍ":"en","ُ":"u","ٌ":"on","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","က":"k","ခ":"kh","ဂ":"g","ဃ":"ga","င":"ng","စ":"s","ဆ":"sa","ဇ":"z","စျ":"za","ည":"ny","ဋ":"t","ဌ":"ta","ဍ":"d","ဎ":"da","ဏ":"na","တ":"t","ထ":"ta","ဒ":"d","ဓ":"da","န":"n","ပ":"p","ဖ":"pa","ဗ":"b","ဘ":"ba","မ":"m","ယ":"y","ရ":"ya","လ":"l","ဝ":"w","သ":"th","ဟ":"h","ဠ":"la","အ":"a","ြ":"y","ျ":"ya","ွ":"w","ြွ":"yw","ျွ":"ywa","ှ":"h","ဧ":"e","၏":"-e","ဣ":"i","ဤ":"-i","ဉ":"u","ဦ":"-u","ဩ":"aw","သြော":"aw","ဪ":"aw","၀":"0","၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","္":"","့":"","း":"","č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z","α":"a","β":"v","γ":"g","δ":"d","ε":"e","ζ":"z","η":"i","θ":"th","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"ks","ο":"o","π":"p","ρ":"r","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"o","ά":"a","έ":"e","ί":"i","ό":"o","ύ":"y","ή":"i","ώ":"o","ς":"s","ϊ":"i","ΰ":"y","ϋ":"y","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"I","Θ":"TH","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"KS","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ά":"A","Έ":"E","Ί":"I","Ό":"O","Ύ":"Y","Ή":"I","Ώ":"O","Ϊ":"I","Ϋ":"Y","ā":"a","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","ū":"u","Ā":"A","Ē":"E","Ģ":"G","Ī":"I","Ķ":"k","Ļ":"L","Ņ":"N","Ū":"U","Ќ":"Kj","ќ":"kj","Љ":"Lj","љ":"lj","Њ":"Nj","њ":"nj","Тс":"Ts","тс":"ts","ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ś":"s","ź":"z","ż":"z","Ą":"A","Ć":"C","Ę":"E","Ł":"L","Ń":"N","Ś":"S","Ź":"Z","Ż":"Z","Є":"Ye","І":"I","Ї":"Yi","Ґ":"G","є":"ye","і":"i","ї":"yi","ґ":"g","ă":"a","Ă":"A","ș":"s","Ș":"S","ț":"t","Ț":"T","ţ":"t","Ţ":"T","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ё":"yo","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ё":"Yo","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","ђ":"dj","ј":"j","ћ":"c","џ":"dz","Ђ":"Dj","Ј":"j","Ћ":"C","Џ":"Dz","ľ":"l","ĺ":"l","ŕ":"r","Ľ":"L","Ĺ":"L","Ŕ":"R","ş":"s","Ş":"S","ı":"i","İ":"I","ğ":"g","Ğ":"G","ả":"a","Ả":"A","ẳ":"a","Ẳ":"A","ẩ":"a","Ẩ":"A","đ":"d","Đ":"D","ẹ":"e","Ẹ":"E","ẽ":"e","Ẽ":"E","ẻ":"e","Ẻ":"E","ế":"e","Ế":"E","ề":"e","Ề":"E","ệ":"e","Ệ":"E","ễ":"e","Ễ":"E","ể":"e","Ể":"E","ọ":"o","Ọ":"o","ố":"o","Ố":"O","ồ":"o","Ồ":"O","ổ":"o","Ổ":"O","ộ":"o","Ộ":"O","ỗ":"o","Ỗ":"O","ơ":"o","Ơ":"O","ớ":"o","Ớ":"O","ờ":"o","Ờ":"O","ợ":"o","Ợ":"O","ỡ":"o","Ỡ":"O","Ở":"o","ở":"o","ị":"i","Ị":"I","ĩ":"i","Ĩ":"I","ỉ":"i","Ỉ":"i","ủ":"u","Ủ":"U","ụ":"u","Ụ":"U","ũ":"u","Ũ":"U","ư":"u","Ư":"U","ứ":"u","Ứ":"U","ừ":"u","Ừ":"U","ự":"u","Ự":"U","ữ":"u","Ữ":"U","ử":"u","Ử":"ư","ỷ":"y","Ỷ":"y","ỳ":"y","Ỳ":"Y","ỵ":"y","Ỵ":"Y","ỹ":"y","Ỹ":"Y","ạ":"a","Ạ":"A","ấ":"a","Ấ":"A","ầ":"a","Ầ":"A","ậ":"a","Ậ":"A","ẫ":"a","Ẫ":"A","ắ":"a","Ắ":"A","ằ":"a","Ằ":"A","ặ":"a","Ặ":"A","ẵ":"a","Ẵ":"A","“":'"',"”":'"',"‘":"'","’":"'","∂":"d","ƒ":"f","™":"(TM)","©":"(C)","œ":"oe","Œ":"OE","®":"(R)","†":"+","℠":"(SM)","…":"...","˚":"o","º":"o","ª":"a","•":"*","၊":",","။":".",$:"USD","€":"EUR","₢":"BRN","₣":"FRF","£":"GBP","₤":"ITL","₦":"NGN","₧":"ESP","₩":"KRW","₪":"ILS","₫":"VND","₭":"LAK","₮":"MNT","₯":"GRD","₱":"ARS","₲":"PYG","₳":"ARA","₴":"UAH","₵":"GHS","¢":"cent","¥":"CNY","元":"CNY","円":"YEN","﷼":"IRR","₠":"EWE","฿":"THB","₨":"INR","₹":"INR","₰":"PF"},U=["်"],C={"ာ":"a","ါ":"a","ေ":"e","ဲ":"e","ိ":"i","ီ":"i","ို":"o","ု":"u","ူ":"u","ေါင်":"aung","ော":"aw","ော်":"aw","ေါ":"aw","ေါ်":"aw","်":"်","က်":"et","ိုက်":"aik","ောက်":"auk","င်":"in","ိုင်":"aing","ောင်":"aung","စ်":"it","ည်":"i","တ်":"at","ိတ်":"eik","ုတ်":"ok","ွတ်":"ut","ေတ်":"it","ဒ်":"d","ိုဒ်":"ok","ုဒ်":"ait","န်":"an","ာန်":"an","ိန်":"ein","ုန်":"on","ွန်":"un","ပ်":"at","ိပ်":"eik","ုပ်":"ok","ွပ်":"ut","န်ုပ်":"nub","မ်":"an","ိမ်":"ein","ုမ်":"on","ွမ်":"un","ယ်":"e","ိုလ်":"ol","ဉ်":"in","ံ":"an","ိံ":"ein","ုံ":"on"},I={en:{},az:{"ç":"c","ə":"e","ğ":"g","ı":"i","ö":"o","ş":"s","ü":"u","Ç":"C","Ə":"E","Ğ":"G","İ":"I","Ö":"O","Ş":"S","Ü":"U"},cs:{"č":"c","ď":"d","ě":"e","ň":"n","ř":"r","š":"s","ť":"t","ů":"u","ž":"z","Č":"C","Ď":"D","Ě":"E","Ň":"N","Ř":"R","Š":"S","Ť":"T","Ů":"U","Ž":"Z"},hu:{"ä":"a","Ä":"A","ö":"o","Ö":"O","ü":"u","Ü":"U","ű":"u","Ű":"U"},lt:{"ą":"a","č":"c","ę":"e","ė":"e","į":"i","š":"s","ų":"u","ū":"u","ž":"z","Ą":"A","Č":"C","Ę":"E","Ė":"E","Į":"I","Š":"S","Ų":"U","Ū":"U"},lv:{"ā":"a","č":"c","ē":"e","ģ":"g","ī":"i","ķ":"k","ļ":"l","ņ":"n","š":"s","ū":"u","ž":"z","Ā":"A","Č":"C","Ē":"E","Ģ":"G","Ī":"i","Ķ":"k","Ļ":"L","Ņ":"N","Š":"S","Ū":"u","Ž":"Z"},pl:{"ą":"a","ć":"c","ę":"e","ł":"l","ń":"n","ó":"o","ś":"s","ź":"z","ż":"z","Ą":"A","Ć":"C","Ę":"e","Ł":"L","Ń":"N","Ó":"O","Ś":"S","Ź":"Z","Ż":"Z"},sk:{"ä":"a","Ä":"A"},sr:{"љ":"lj","њ":"nj","Љ":"Lj","Њ":"Nj","đ":"dj","Đ":"Dj"},tr:{"Ü":"U","Ö":"O","ü":"u","ö":"o"}},N={ar:{"∆":"delta","∞":"la-nihaya","♥":"hob","&":"wa","|":"aw","<":"aqal-men",">":"akbar-men","∑":"majmou","¤":"omla"},az:{},cz:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"nebo","<":"mene jako",">":"vice jako","∑":"soucet","¤":"mena"},de:{"∆":"delta","∞":"unendlich","♥":"Liebe","&":"und","|":"oder","<":"kleiner als",">":"groesser als","∑":"Summe von","¤":"Waehrung"},en:{"∆":"delta","∞":"infinity","♥":"love","&":"and","|":"or","<":"less than",">":"greater than","∑":"sum","¤":"currency"},es:{"∆":"delta","∞":"infinito","♥":"amor","&":"y","|":"u","<":"menos que",">":"mas que","∑":"suma de los","¤":"moneda"},fr:{"∆":"delta","∞":"infiniment","♥":"Amour","&":"et","|":"ou","<":"moins que",">":"superieure a","∑":"somme des","¤":"monnaie"},gr:{},hu:{"∆":"delta","∞":"vegtelen","♥":"szerelem","&":"es","|":"vagy","<":"kisebb mint",">":"nagyobb mint","∑":"szumma","¤":"penznem"},it:{"∆":"delta","∞":"infinito","♥":"amore","&":"e","|":"o","<":"minore di",">":"maggiore di","∑":"somma","¤":"moneta"},lt:{},lv:{"∆":"delta","∞":"bezgaliba","♥":"milestiba","&":"un","|":"vai","<":"mazak neka",">":"lielaks neka","∑":"summa","¤":"valuta"},my:{"∆":"kwahkhyaet","∞":"asaonasme","♥":"akhyait","&":"nhin","|":"tho","<":"ngethaw",">":"kyithaw","∑":"paungld","¤":"ngwekye"},mk:{},nl:{"∆":"delta","∞":"oneindig","♥":"liefde","&":"en","|":"of","<":"kleiner dan",">":"groter dan","∑":"som","¤":"valuta"},pl:{"∆":"delta","∞":"nieskonczonosc","♥":"milosc","&":"i","|":"lub","<":"mniejsze niz",">":"wieksze niz","∑":"suma","¤":"waluta"},pt:{"∆":"delta","∞":"infinito","♥":"amor","&":"e","|":"ou","<":"menor que",">":"maior que","∑":"soma","¤":"moeda"},ro:{"∆":"delta","∞":"infinit","♥":"dragoste","&":"si","|":"sau","<":"mai mic ca",">":"mai mare ca","∑":"suma","¤":"valuta"},ru:{"∆":"delta","∞":"beskonechno","♥":"lubov","&":"i","|":"ili","<":"menshe",">":"bolshe","∑":"summa","¤":"valjuta"},sk:{"∆":"delta","∞":"nekonecno","♥":"laska","&":"a","|":"alebo","<":"menej ako",">":"viac ako","∑":"sucet","¤":"mena"},sr:{},tr:{"∆":"delta","∞":"sonsuzluk","♥":"ask","&":"ve","|":"veya","<":"kucuktur",">":"buyuktur","∑":"toplam","¤":"para birimi"},uk:{"∆":"delta","∞":"bezkinechnist","♥":"lubov","&":"i","|":"abo","<":"menshe",">":"bilshe","∑":"suma","¤":"valjuta"},vn:{"∆":"delta","∞":"vo cuc","♥":"yeu","&":"va","|":"hoac","<":"nho hon",">":"lon hon","∑":"tong","¤":"tien te"}};if("string"!=typeof e)return"";if("string"==typeof a&&(A=a),c=N.en,m=I.en,"object"==typeof a){n=a.maintainCase||!1,w=a.custom&&"object"==typeof a.custom?a.custom:w,u=+a.truncate>1&&a.truncate||!1,l=a.uric||!1,s=a.uricNoSlash||!1,r=a.mark||!1,O=a.symbols===!1||a.lang===!1?!1:!0,A=a.separator||A,l&&(p+=b.join("")),s&&(p+=E.join("")),r&&(p+=z.join("")),c=a.lang&&N[a.lang]&&O?N[a.lang]:O?N.en:{},m=a.lang&&I[a.lang]?I[a.lang]:a.lang===!1||a.lang===!0?{}:I.en,a.titleCase&&"number"==typeof a.titleCase.length&&Array.prototype.toString.call(a.titleCase)?(a.titleCase.forEach(function(e){w[e+""]=e+""}),t=!0):t=!!a.titleCase,a.custom&&"number"==typeof a.custom.length&&Array.prototype.toString.call(a.custom)&&a.custom.forEach(function(e){w[e+""]=e+""}),Object.keys(w).forEach(function(a){var n;n=a.length>1?new RegExp("\\b"+o(a)+"\\b","gi"):new RegExp(o(a),"gi"),e=e.replace(n,w[a])});for(h in w)p+=h}for(p+=A,t&&(e=e.replace(/(\w)(\S*)/g,function(e,a,n){var t=a.toUpperCase()+(null!==n?n:"");return Object.keys(w).indexOf(t.toLowerCase())<0?t:t.toLowerCase()})),p=o(p),e=e.replace(/(^\s+|\s+$)/g,""),y=!1,f=!1,d=0,k=e.length;k>d;d++)h=e[d],i(h,w)?y=!1:m[h]?(h=y&&m[h].match(/[A-Za-z0-9]/)?" "+m[h]:m[h],y=!1):h in v?(k>d+1&&U.indexOf(e[d+1])>=0?(j+=h,h=""):f===!0?(h=C[j]+v[h],j=""):h=y&&v[h].match(/[A-Za-z0-9]/)?" "+v[h]:v[h],y=!1,f=!1):h in C?(j+=h,h="",d===k-1&&(h=C[j]),f=!0):!c[h]||l&&-1!==b.join("").indexOf(h)||s&&-1!==E.join("").indexOf(h)?(f===!0?(h=C[j]+h,j="",f=!1):y&&(/[A-Za-z0-9]/.test(h)||S.substr(-1).match(/A-Za-z0-9]/))&&(h=" "+h),y=!1):(h=y||S.substr(-1).match(/[A-Za-z0-9]/)?A+c[h]:c[h],h+=void 0!==e[d+1]&&e[d+1].match(/[A-Za-z0-9]/)?A:"",y=!0),S+=h.replace(new RegExp("[^\\w\\s"+p+"_-]","g"),A);return S=S.replace(/\s+/g,A).replace(new RegExp("\\"+A+"+","g"),A).replace(new RegExp("(^\\"+A+"+|\\"+A+"+$)","g"),""),u&&S.length>u&&(g=S.charAt(u)===A,S=S.slice(0,u),g||(S=S.slice(0,S.lastIndexOf(A)))),n||t||(S=S.toLowerCase()),S},t=function(e){return function(a){return n(a,e)}},o=function(e){return e.replace(/[-\\^$*+?.()|[\]{}\/]/g,"\\$&")},i=function(e,a){for(var n in a)if(a[n]===e)return!0};if("undefined"!=typeof module&&module.exports)module.exports=n,module.exports.createSlug=t;else if("undefined"!=typeof define&&define.amd)define([],function(){return n});else try{if(e.getSlug||e.createSlug)throw"speakingurl: globals exists /(getSlug|createSlug)/";e.getSlug=n,e.createSlug=t}catch(u){}}(this);
/*! jquery-slugify - v1.1.0 - 2015-04-19
* Copyright (c) 2015 madflow; Licensed MIT */
(function(n){n.fn.slugify=function(u,t){return this.each(function(){var l=n(this),o=n(u);l.on("keyup change",function(){""!==l.val()&&void 0!==l.val()?l.data("locked",!0):l.data("locked",!1)}),o.on("keyup change",function(){!0!==l.data("locked")&&(l.is("input")||l.is("textarea")?l.val(n.slugify(o.val(),t)):l.text(n.slugify(o.val(),t)))})})},n.slugify=function(u,t){return t=n.extend({},n.slugify.options,t),t.lang=t.lang||n("html").prop("lang"),"function"==typeof t.preSlug&&(u=t.preSlug(u)),u=t.slugFunc(u,t),"function"==typeof t.postSlug&&(u=t.postSlug(u)),u},n.slugify.options={preSlug:null,postSlug:null,slugFunc:function(n,u){return window.getSlug(n,u)}}})(jQuery);
/*! jQuery UI - v1.11.4+CommonJS - 2015-08-28
* http://jqueryui.com
* Includes: widget.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );

	} else if ( typeof exports === "object" ) {

		// Node/CommonJS
		factory( require( "jquery" ) );

	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */


var widget_uuid = 0,
	widget_slice = Array.prototype.slice;

$.cleanData = (function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; (elem = elems[i]) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
})( $.cleanData );

$.widget = function( name, base, prototype ) {
	var fullName, existingConstructor, constructor, basePrototype,
		// proxiedPrototype allows the provided prototype to remain unmodified
		// so that it can be used as a mixin for multiple widgets (#8876)
		proxiedPrototype = {},
		namespace = name.split( "." )[ 0 ];

	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};
	// extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,
		// copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),
		// track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	});

	basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = (function() {
			var _super = function() {
					return base.prototype[ prop ].apply( this, arguments );
				},
				_superApply = function( args ) {
					return base.prototype[ prop ].apply( this, args );
				};
			return function() {
				var __super = this._super,
					__superApply = this._superApply,
					returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		})();
	});
	constructor.prototype = $.widget.extend( basePrototype, {
		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	});

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto );
		});
		// remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widget_slice.call( arguments, 1 ),
		inputIndex = 0,
		inputLength = input.length,
		key,
		value;
	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {
				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :
						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );
				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = widget_slice.call( arguments, 1 ),
			returnValue = this;

		if ( isMethodCall ) {
			this.each(function() {
				var methodValue,
					instance = $.data( this, fullName );
				if ( options === "instance" ) {
					returnValue = instance;
					return false;
				}
				if ( !instance ) {
					return $.error( "cannot call methods on " + name + " prior to initialization; " +
						"attempted to call method '" + options + "'" );
				}
				if ( !$.isFunction( instance[options] ) || options.charAt( 0 ) === "_" ) {
					return $.error( "no such method '" + options + "' for " + name + " widget instance" );
				}
				methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue && methodValue.jquery ?
						returnValue.pushStack( methodValue.get() ) :
						methodValue;
					return false;
				}
			});
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat(args) );
			}

			this.each(function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",
	options: {
		disabled: false,

		// callbacks
		create: null
	},
	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widget_uuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			});
			this.document = $( element.style ?
				// element within the document
				element.ownerDocument :
				// element is window or document
				element.document || element );
			this.window = $( this.document[0].defaultView || this.document[0].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();
		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},
	_getCreateOptions: $.noop,
	_getCreateEventData: $.noop,
	_create: $.noop,
	_init: $.noop,

	destroy: function() {
		this._destroy();
		// we can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.unbind( this.eventNamespace )
			.removeData( this.widgetFullName )
			// support: jquery <1.6.3
			// http://bugs.jquery.com/ticket/9413
			.removeData( $.camelCase( this.widgetFullName ) );
		this.widget()
			.unbind( this.eventNamespace )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetFullName + "-disabled " +
				"ui-state-disabled" );

		// clean up events and states
		this.bindings.unbind( this.eventNamespace );
		this.hoverable.removeClass( "ui-state-hover" );
		this.focusable.removeClass( "ui-state-focus" );
	},
	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key,
			parts,
			curOption,
			i;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {
			// handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				.toggleClass( this.widgetFullName + "-disabled", !!value );

			// If the widget is becoming disabled, then nothing is interactive
			if ( value ) {
				this.hoverable.removeClass( "ui-state-hover" );
				this.focusable.removeClass( "ui-state-focus" );
			}
		}

		return this;
	},

	enable: function() {
		return this._setOptions({ disabled: false });
	},
	disable: function() {
		return this._setOptions({ disabled: true });
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement,
			instance = this;

		// no suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// no element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {
				// allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
							$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ ),
				eventName = match[1] + instance.eventNamespace,
				selector = match[2];
			if ( selector ) {
				delegateElement.delegate( selector, eventName, handlerProxy );
			} else {
				element.bind( eventName, handlerProxy );
			}
		});
	},

	_off: function( element, eventName ) {
		eventName = (eventName || "").split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.unbind( eventName ).undelegate( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-hover" );
			},
			mouseleave: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-hover" );
			}
		});
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				$( event.currentTarget ).addClass( "ui-state-focus" );
			},
			focusout: function( event ) {
				$( event.currentTarget ).removeClass( "ui-state-focus" );
			}
		});
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[0], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}
		var hasOptions,
			effectName = !options ?
				method :
				options === true || typeof options === "number" ?
					defaultEffect :
					options.effect || defaultEffect;
		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}
		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;
		if ( options.delay ) {
			element.delay( options.delay );
		}
		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue(function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			});
		}
	};
});

var widget = $.widget;



}));

/*
 * jQuery Iframe Transport Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global define, require, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(require('jquery'));
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));

/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file">').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).pipe(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).pipe(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + mcs,
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    this._sequence = this._sequence.pipe(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // If the fileInput had focus before it was detached,
            // restore focus to the inputClone.
            if (restoreFocus) {
                inputClone.focus();
            }
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                },
                dirReader, entries = [];
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empy list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).pipe(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

/*------------------------------------------------------------------
Project:    Highland
Author:     Simpleqode
URL:        http://simpleqode.com/
            https://twitter.com/YevSim
            https://www.facebook.com/simpleqode
Version:    1.5.1
Created:        11/03/2014
Last change:    06/07/2015
-------------------------------------------------------------------*/


// Sign in & sing out nav bar demo. To be removed on an operational website
// ========================================================================

$('#sign-in').on('click', function() {
  $("#sign-up").toggleClass('show hidden');
  $("#sign-in").toggleClass('show hidden');
  $("#cogs-menu").toggleClass('show hidden animated fadeIn');
  $("#profile-menu").toggleClass('show hidden animated fadeIn');
  return false;
});
$('#sign-out').on('click', function() {
  $("#sign-up").toggleClass('show hidden');
  $("#sign-in").toggleClass('show hidden');
  $("#cogs-menu").toggleClass('show hidden animated fadeIn');
  $("#profile-menu").toggleClass('show hidden animated fadeIn');
  return false;
});


// Search box toggle
// =================

$('#search-btn').on('click', function() {
  $("#search-icon").toggleClass('fa-search fa-times margin-2');
  $("#search-box").toggleClass('show hidden animated fadeInUp');
  return false;
});


// Smooth scrolling for UI elements page
// =====================================

$(document).ready(function(){
   $('a[href*=#buttons],a[href*=#panels], a[href*=#info-boards], a[href*=#navs], a[href*=#alerts], a[href*=#thumbnails], a[href*=#social], a[href*=#section-header],a[href*=#page-tip], a[href*=#block-header], a[href*=#tags]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
     scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    e.preventDefault();
   });
   return false;
});


// 404 error page smile
// ====================

$('#search-404').on('focus', function() {
  $("#smile").removeClass("fa-meh-o flipInX");
  $("#smile").addClass("fa-smile-o flipInY");
});

$('#search-404').on('blur', function() {
  $("#smile").removeClass("fa-smile-o flipInY");
  $("#smile").addClass("fa-meh-o flipInX");
});


// Sign up popovers
// ================

$(function(){
  $('#exampleInputName1').popover();
});

$(function(){
  $('#exampleInputUsername1').popover();
});

$(function(){
  $('#exampleInputEmail1').popover();
});

$(function(){
  $('#exampleInputPassword1').popover();
});

$(function(){
  $('#exampleInputPassword2').popover();
});


// Profile - Status Update 
// =======================

$('#update-status').on('click', function() {
  $(".user-status > p").toggleClass("show hidden");
  $(".user-status > form").toggleClass("hidden show");
  return false;
});

$('.user-status > form > button').on('click', function() {
  $(".user-status > p").toggleClass("show hidden");
  $(".user-status > form").toggleClass("hidden show");
  return false;
});

var uploading = (function () {
        var pleaseWaitDiv = $('<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
            '<div class="modal-dialog modal-m">' +
            '<div class="modal-content">' +
            '<div class="modal-header"><h3 style="margin:0;">Uploaden...</h3></div>' +
            '<div class="modal-body">' +
            '<div class="progress progress-striped active" style="margin-bottom:0;">' +
            '<div class="progress-bar" id="progress-bar2" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:100%"></div></div>' +
            '</div>' +
            '</div></div></div>');
        return {
            show: function () {
                pleaseWaitDiv.modal('show');
            },
            hide: function () {
                pleaseWaitDiv.modal('hide');
            }

        };
    })();