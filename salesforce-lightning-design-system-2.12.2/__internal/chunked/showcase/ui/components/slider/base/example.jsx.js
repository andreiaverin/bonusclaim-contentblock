var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/slider/base/example.jsx.js"]=function(e){function a(a){for(var l,i,s=a[0],m=a[1],c=a[2],d=0,o=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&o.push(n[i][0]),n[i]=0;for(l in m)Object.prototype.hasOwnProperty.call(m,l)&&(e[l]=m[l]);for(u&&u(a);o.length;)o.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],l=!0,s=1;s<t.length;s++){var m=t[s];0!==n[m]&&(l=!1)}l&&(r.splice(a--,1),e=i(i.s=t[0]))}return e}var l={},n={139:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},r=[];function i(a){if(l[a])return l[a].exports;var t=l[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=l,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var l in e)i.d(t,l,function(a){return e[a]}.bind(null,l));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],m=s.push.bind(s);s.push=a,s=s.slice();for(var c=0;c<s.length;c++)a(s[c]);var u=m;return r.push([138,0]),t()}({0:function(e,a){e.exports=React},138:function(e,a,t){"use strict";t.r(a),t.d(a,"Slider",(function(){return u})),t.d(a,"states",(function(){return d})),t.d(a,"examples",(function(){return o}));var l=t(0),n=t.n(l),r=t(2),i=t.n(r),s=t(5),m="slider-id-01",c=function(e){return n.a.createElement("span",{className:"slds-slider-label"},n.a.createElement("span",{className:"slds-slider-label__label"},"Slider Label"),n.a.createElement("span",{className:"slds-slider-label__range"},e.min||"0"," - ",e.max||"100"))},u=function(e){return n.a.createElement("div",{className:i()("slds-slider",e.className)},n.a.createElement("input",{"aria-describedby":e["aria-describedby"],id:e.id||m,className:"slds-slider__range",type:"range",defaultValue:e.value,min:e.min,max:e.max,step:e.step,disabled:e.disabled}),n.a.createElement("span",{className:"slds-slider__value","aria-hidden":"true"},e.value))};a.default=n.a.createElement(s.b,{labelContent:n.a.createElement(c,null),inputId:m},n.a.createElement(u,{value:"50"}));var d=[{id:"disabled",label:"Disabled",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,null),inputId:m},n.a.createElement(u,{value:"50",disabled:!0}))},{id:"value-0",label:"Value: 0",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,{min:"0",max:"100"}),inputId:m},n.a.createElement(u,{value:"0"}))},{id:"value-25",label:"Value: 25",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,{min:"0",max:"100"}),inputId:m},n.a.createElement(u,{value:"25"}))},{id:"value-50",label:"Value: 50",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,{min:"0",max:"100"}),inputId:m},n.a.createElement(u,{value:"50"}))},{id:"value-75",label:"Value: 75",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,{min:"0",max:"100"}),inputId:m},n.a.createElement(u,{value:"75"}))},{id:"value-100",label:"Value: 100",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,{min:"0",max:"100"}),inputId:m},n.a.createElement(u,{value:"100"}))}],o=[{id:"min-max",label:"Min/Max Range",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,{min:"0",max:"400"}),inputId:m},n.a.createElement(u,{value:"200",min:"0",max:"400"}))},{id:"steps",label:"Min/Max Range with Steps",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,{min:"0",max:"400"}),inputId:m},n.a.createElement(u,{value:"200",min:"0",max:"400",step:"100"}))},{id:"width-x-small",label:"Width: x-small",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,null),inputId:m},n.a.createElement(u,{className:"slds-size_x-small",value:"50"}))},{id:"width-small",label:"Width: small",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,null),inputId:m},n.a.createElement(u,{className:"slds-size_small",value:"50"}))},{id:"width-medium",label:"Width: medium",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,null),inputId:m},n.a.createElement(u,{className:"slds-size_medium",value:"50"}))},{id:"width-large",label:"Width: large",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,null),inputId:m},n.a.createElement(u,{className:"slds-size_large",value:"50"}))},{id:"error",label:"Error",element:n.a.createElement(s.b,{hasError:!0,labelContent:n.a.createElement(c,null),inputId:m},n.a.createElement(u,{"aria-describedby":"error-message",className:"slds-size_large",value:"50"}),n.a.createElement("div",{id:"error-message",className:"slds-form-element__help"},"There is a problem with this field"))},{id:"vertical",label:"Vertical",element:n.a.createElement(s.b,{labelContent:n.a.createElement(c,null),inputId:m},n.a.createElement(u,{value:"50",className:"slds-slider_vertical"}))}]},16:function(e,a){e.exports=ReactDOM}});