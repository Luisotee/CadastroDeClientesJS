!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){function r(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d,u=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,d=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw d}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o=document.querySelector("#list ul"),a=JSON.parse(localStorage.getItem("users"))||[];function d(){var e,t=r(a);try{for(t.s();!(e=t.n()).done;){user=e.value;var n=document.createElement("li"),d=document.createElement("button");d.setAttribute("class","excludeButton");var c=a.indexOf(user),l=document.createTextNode("Registro: "+user.registro);n.appendChild(l),n.appendChild(document.createElement("br"));var i=document.createTextNode("Nome: "+user.nome);n.appendChild(i),n.appendChild(document.createElement("br"));var p=document.createTextNode("Celular: "+user.celular);n.appendChild(p),n.appendChild(document.createElement("br"));var m=document.createTextNode("Email: "+user.email);n.appendChild(m),n.appendChild(document.createElement("br"));var f=document.createTextNode("CEP: "+user.endereco.cep);n.appendChild(f),n.appendChild(document.createElement("br"));var s=document.createTextNode("Logradouro: "+user.endereco.logradouro);n.appendChild(s),n.appendChild(document.createElement("br"));var b=document.createTextNode("Numero: "+user.endereco.numero);n.appendChild(b),n.appendChild(document.createElement("br"));var y=document.createTextNode("Bairro: "+user.endereco.bairro);n.appendChild(y),n.appendChild(document.createElement("br"));var h=document.createTextNode("Cidade: "+user.endereco.cidade);n.appendChild(h),n.appendChild(document.createElement("br"));var v=document.createTextNode("Estado: "+user.endereco.estado);n.appendChild(v),o.appendChild(n);var C=document.createTextNode("Excluir");d.appendChild(C),document.querySelector(".excludeButton").addEventListener("click",u(c)),o.appendChild(d)}}catch(e){t.e(e)}finally{t.f()}}function u(e){a.splice(e,1),d(),localStorage.setItem("users",JSON.stringify(a))}d()}]);