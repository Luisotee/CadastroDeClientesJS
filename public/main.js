!function(e){var t={};function r(u){if(t[u])return t[u].exports;var n=t[u]={i:u,l:!1,exports:{}};return e[u].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,u){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:u})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var u=Object.create(null);if(r.r(u),Object.defineProperty(u,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(u,n,function(t){return e[t]}.bind(null,n));return u},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([,function(e,t,r){"use strict";r.r(t),document.getElementById("send").addEventListener("click",(function(){if(console.log(u),function(){var e=document.querySelector(".name").value,t=document.getElementById("celular").value,r=document.querySelector(".email").value,u=document.getElementById("cep").value,n=document.querySelector(".street").value,o=document.querySelector(".number").value,l=document.querySelector(".address").value,c=document.querySelector(".city").value,a=document.getElementById("uf").value;return""!=e&&(""!=t&&(""!=r&&(""!=u&&(""!=n&&(""!=o&&(""!=l&&(""!=c&&""!=a)))))))}()){var e={registro:u.length+1,nome:document.querySelector(".name").value,celular:document.getElementById("celular").value,email:document.querySelector(".email").value,endereco:{cep:document.getElementById("cep").value,logradouro:document.querySelector(".street").value,numero:document.querySelector(".number").value,bairro:document.querySelector(".address").value,cidade:document.querySelector(".city").value,estado:document.getElementById("uf").value}};u.push(e),console.log(u),localStorage.setItem("users",JSON.stringify(u))}}));var u=JSON.parse(localStorage.getItem("users"))||[]}]);