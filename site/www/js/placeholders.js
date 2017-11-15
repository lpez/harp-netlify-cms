!function(t){"use strict";function e(t,e,r){return t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent?t.attachEvent("on"+e,r):void 0}function r(t,e){var r,n;for(r=0,n=t.length;n>r;r++)if(t[r]===e)return!0;return!1}function n(t,e){var r;t.createTextRange?(r=t.createTextRange(),r.move("character",e),r.select()):t.selectionStart&&(t.focus(),t.setSelectionRange(e,e))}function a(t,e){try{return t.type=e,!0}catch(r){return!1}}t.Placeholders={Utils:{addEventListener:e,inArray:r,moveCaret:n,changeType:a}}}(this),function(t){"use strict";function e(){}function r(){try{return document.activeElement}catch(t){}}function n(t,e){var r,n,a=!!e&&t.value!==e,u=t.value===t.getAttribute(P);return(a||u)&&"true"===t.getAttribute(V)?(t.removeAttribute(V),t.value=t.value.replace(t.getAttribute(P),""),t.className=t.className.replace(q,""),n=t.getAttribute(z),n&&(t.setAttribute("maxLength",n),t.removeAttribute(z)),r=t.getAttribute(j),r&&(t.type=r),!0):!1}function a(t){var e,r,n=t.getAttribute(P);return""===t.value&&n?(t.setAttribute(V,"true"),t.value=n,t.className+=" "+R,r=t.getAttribute(z),r||(t.setAttribute(z,t.maxLength),t.removeAttribute("maxLength")),e=t.getAttribute(j),e?t.type="text":"password"===t.type&&K.changeType(t,"text")&&t.setAttribute(j,"password"),!0):!1}function u(t,e){var r,n,a,u,i;if(t&&t.getAttribute(P))e(t);else for(r=t?t.getElementsByTagName("input"):h,n=t?t.getElementsByTagName("textarea"):f,i=0,u=r.length+n.length;u>i;i++)a=i<r.length?r[i]:n[i-r.length],e(a)}function i(t){u(t,n)}function l(t){u(t,a)}function o(t){return function(){b&&t.value===t.getAttribute(P)&&"true"===t.getAttribute(V)?K.moveCaret(t,0):n(t)}}function c(t){return function(){a(t)}}function s(t){return function(e){return A=t.value,"true"===t.getAttribute(V)&&A===t.getAttribute(P)&&K.inArray(B,e.keyCode)?(e.preventDefault&&e.preventDefault(),!1):void 0}}function d(t){return function(){n(t,A),""===t.value&&(t.blur(),K.moveCaret(t,0))}}function v(t){return function(){t===r()&&t.value===t.getAttribute(P)&&"true"===t.getAttribute(V)&&K.moveCaret(t,0)}}function p(t){return function(){i(t)}}function g(t){t.form&&(T=t.form,T.getAttribute(D)||(K.addEventListener(T,"submit",p(T)),T.setAttribute(D,"true"))),K.addEventListener(t,"focus",o(t)),K.addEventListener(t,"blur",c(t)),b&&(K.addEventListener(t,"keydown",s(t)),K.addEventListener(t,"keyup",d(t)),K.addEventListener(t,"click",v(t))),t.setAttribute(I,"true"),t.setAttribute(P,x),(b||t!==r())&&a(t)}var h,f,b,m,A,y,E,x,L,T,S,N,w,C=["text","search","url","tel","email","password","number","textarea"],B=[27,33,34,35,36,37,38,39,40,8,46],k="#ccc",R="placeholdersjs",q=new RegExp("(?:^|\\s)"+R+"(?!\\S)"),P="data-placeholder-value",V="data-placeholder-active",j="data-placeholder-type",D="data-placeholder-submit",I="data-placeholder-bound",U="data-placeholder-focus",Q="data-placeholder-live",z="data-placeholder-maxlength",F=document.createElement("input"),G=document.getElementsByTagName("head")[0],H=document.documentElement,J=t.Placeholders,K=J.Utils;if(J.nativeSupport=void 0!==F.placeholder,!J.nativeSupport){for(h=document.getElementsByTagName("input"),f=document.getElementsByTagName("textarea"),b="false"===H.getAttribute(U),m="false"!==H.getAttribute(Q),y=document.createElement("style"),y.type="text/css",E=document.createTextNode("."+R+" { color:"+k+"; }"),y.styleSheet?y.styleSheet.cssText=E.nodeValue:y.appendChild(E),G.insertBefore(y,G.firstChild),w=0,N=h.length+f.length;N>w;w++)S=w<h.length?h[w]:f[w-h.length],x=S.attributes.placeholder,x&&(x=x.nodeValue,x&&K.inArray(C,S.type)&&g(S));L=setInterval(function(){for(w=0,N=h.length+f.length;N>w;w++)S=w<h.length?h[w]:f[w-h.length],x=S.attributes.placeholder,x?(x=x.nodeValue,x&&K.inArray(C,S.type)&&(S.getAttribute(I)||g(S),(x!==S.getAttribute(P)||"password"===S.type&&!S.getAttribute(j))&&("password"===S.type&&!S.getAttribute(j)&&K.changeType(S,"text")&&S.setAttribute(j,"password"),S.value===S.getAttribute(P)&&(S.value=x),S.setAttribute(P,x)))):S.getAttribute(V)&&(n(S),S.removeAttribute(P));m||clearInterval(L)},100)}K.addEventListener(t,"beforeunload",function(){i()}),J.disable=J.nativeSupport?e:i,J.enable=J.nativeSupport?e:l}(this),function(t){"use strict";var e=t.fn.val,r=t.fn.prop;Placeholders.nativeSupport||(t.fn.val=function(t){var r=e.apply(this,arguments),n=this.eq(0).data("placeholder-value");return void 0===t&&this.eq(0).data("placeholder-active")&&r===n?"":r},t.fn.prop=function(t,e){return void 0===e&&this.eq(0).data("placeholder-active")&&"value"===t?"":r.apply(this,arguments)})}(jQuery);