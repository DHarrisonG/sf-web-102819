!function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(r,u,function(n){return e[n]}.bind(null,u));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="build/",t(t.s=0)}([function(e,n,t){"use strict";var r=o(t(1)),u=o(t(2));function o(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("tbody"),n=document.querySelector("form");(new u.default).getAnimals().then((function(n){n.forEach((function(n){var t=new r.default(n);e.innerHTML+=t.render()}))})),n.addEventListener("submit",(function(n){n.preventDefault(),(new u.default).createAnimal({name:document.querySelector("#name").value,gender:document.querySelector("#gender").value,species:document.querySelector("#species").value}).then((function(n){var t=new r.default(n);e.innerHTML+=t.render(),document.querySelector("#name").value="",document.querySelector("#gender").value="",document.querySelector("#species").value=""}))}))}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var u=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.id=n.id,this.name=n.name,this.gender=n.gender,this.species=n.species_name}return r(e,[{key:"render",value:function(){return"\n    <tr>\n      <td>"+this.name+"</td>\n      <td>"+this.gender+"</td>\n      <td>cat</td>\n    </tr>\n    "}}]),e}();n.default=u},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseURL="http://localhost:3000/animals"}return r(e,[{key:"getAnimals",value:function(){return fetch(this.baseURL).then((function(e){return e.json()}))}},{key:"createAnimal",value:function(e){return fetch(this.baseURL,{body:JSON.stringify({animal:e}),headers:{"Content-Type":"application/json"},method:"POST"}).then((function(e){return e.json()}))}}]),e}();n.default=u}]);