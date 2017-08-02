/*! 
* DevExtreme (dx.vectormaputils.js)
* Version: 16.1.13
* Build date: Fri Jul 28 2017
*
* Copyright (c) 2012 - 2017 Developer Express Inc. ALL RIGHTS RESERVED
* EULA: https://www.devexpress.com/Support/EULAs/DevExtreme.xml
*/
"use strict";!function(n){function e(){}function t(n){return n}function r(n){return"function"==typeof n}function o(n){var e,t=H(n),r=0;return e={pos:function(){return r},skip:function(n){return r+=n,e},ui8arr:function(n){var t=0,r=[];for(r.length=n;t<n;++t)r[t]=e.ui8();return r},ui8:function(){var n=O(t,r);return r+=1,n},ui16le:function(){var n=X(t,r);return r+=2,n},ui32le:function(){var n=j(t,r);return r+=4,n},ui32be:function(){var n=G(t,r);return r+=4,n},f64le:function(){var n=K(t,r);return r+=8,n}}}function i(n,e,t){var r=n[0]?f(o(n[0]),t):{},i=n[1]?N(o(n[1]),t):{},s=u(r.shapes||[],i.records||[],e);return s.length?{type:"FeatureCollection",bbox:r.bbox,features:s}:null}function u(n,e,t){var r,o,i=[],u=i.length=u=Math.max(n.length,e.length);for(r=0;r<u;++r)o=n[r]||{},i[r]={type:"Feature",geometry:{type:o.gj_type||null,coordinates:o.coordinates?t(o.coordinates):[]},properties:e[r]||null};return i}function s(n){function e(n){return Math.round(n*r)/r}function t(n){return n.map(n[0].length?t:e)}var r=Number("1E"+n);return t}function l(n){return n=n||{},["shp","dbf"].map(function(e){return function(t){n.substr?(e="."+e,V(n+(n.substr(-e.length).toLowerCase()===e?"":e),function(n,e){t(n,e)})):t(null,n[e]||null)}})}function a(n,o,u){var a;return c(l(n),function(n,l){u=r(o)&&o||r(u)&&u||e,o=!r(o)&&o||{};var c=[];n.forEach(function(n){n&&c.push(n)}),a=i(l,o.precision>=0?s(o.precision):t,c),u(a,c.length?c:null)}),a}function c(n,e){function t(){--i,0!==i||u||e(r,o)}var r=[],o=[],i=1,u=!0;n.forEach(function(n,e){++i,n(function(n,i){r[e]=n,o[e]=i,t()})}),u=!1,t()}function f(n,e){var t,r,o,i,u=[];try{t=new Date,o=M(n)}catch(n){return void e.push("shp: header parsing error: "+n.message+" / "+n.description)}9994!==o.fileCode&&e.push("shp: file code: "+o.fileCode+" / expected: 9994"),1e3!==o.version&&e.push("shp: file version: "+o.version+" / expected: 1000");try{for(;n.pos()<o.fileLength&&(i=E(n,o.type,e));)u.push(i);n.pos()!==o.fileLength&&e.push("shp: file length: "+o.fileLength+" / actual: "+n.pos()),r=new Date}catch(n){e.push("shp: records parsing error: "+n.message+" / "+n.description)}finally{return{bbox:o.bbox_xy,type:o.shapeType,shapes:u,errors:e,time:r-t}}}function p(n,e){e.coordinates=Z(n,1)[0]}function h(n,e){var t,r=k(n),o=L(n),i=L(n),u=w(n,o),s=Z(n,i),l=[];for(l.length=o,t=0;t<o;++t)l[t]=s.slice(u[t],u[t+1]||i);e.bbox=r,e.coordinates=l}function g(n,e){e.bbox=k(n),e.coordinates=Z(n,L(n))}function b(n,e){e.coordinates=Z(n,1)[0],e.coordinates.push(D(n,1)[0])}function d(n,e){var t=k(n),r=L(n),o=Z(n,r),i=C(n),u=D(n,r);e.bbox=t,e.mbox=i,e.coordinates=_(o,u,r)}function y(n,e){var t,r,o,i=k(n),u=L(n),s=L(n),l=w(n,u),a=Z(n,s),c=C(n),f=D(n,s),p=[];for(p.length=u,t=0;t<u;++t)r=l[t],o=l[t+1]||s,p[t]=_(a.slice(r,o),f.slice(r,o),o-r);e.bbox=i,e.mbox=c,e.coordinates=p}function v(n,e){e.coordinates=Z(n,1)[0],e.push(D(n,1)[0],D(n,1)[0])}function P(n,e){var t=k(n),r=L(n),o=Z(n,r),i=C(n),u=D(n,r),s=C(n),l=D(n,r);e.bbox=t,e.zbox=i,e.mbox=s,e.coordinates=z(o,u,l,r)}function m(n,e){var t,r,o,i=k(n),u=L(n),s=L(n),l=w(n,u),a=Z(n,s),c=C(n),f=D(n,s),p=C(n),h=D(n,s),g=[];for(g.length=u,t=0;t<u;++t)r=l[t],o=l[t+1]||s,g[t]=z(a.slice(r,o),f.slice(r,o),h.slice(r,o),o-r);e.bbox=i,e.zbox=c,e.mbox=p,e.coordinates=g}function x(n,e){var t,r,o,i=k(n),u=L(n),s=L(n),l=w(n,u),a=w(n,u),c=Z(n,s),f=C(n),p=D(n,s),h=C(n),g=D(n,s),b=[];for(b.length=u,t=0;t<u;++t)r=l[t],o=l[t+1]||s,b[t]=z(c.slice(r,o),p.slice(r,o),g.slice(r,o),o-r);e.bbox=i,e.zbox=f,e.mbox=h,e.types=a,e.coordinates=b}function M(n){var e={};return e.fileCode=n.ui32be(),n.skip(20),e.fileLength=n.ui32be()<<1,e.version=n.ui32le(),e.type_number=n.ui32le(),e.type=$[e.type_number],e.bbox_xy=k(n),e.bbox_zm=Z(n,2),e}function L(n){return n.ui32le()}function w(n,e){var t,r=[];for(r.length=e,t=0;t<e;++t)r[t]=L(n);return r}function D(n,e){var t,r=[];for(r.length=e,t=0;t<e;++t)r[t]=n.f64le();return r}function k(n){return D(n,4)}function C(n){return[n.f64le(),n.f64le()]}function Z(n,e){var t,r=[];for(r.length=e,t=0;t<e;++t)r[t]=C(n);return r}function _(n,e,t){var r,o=[];for(o.length=t,r=0;r<t;++r)o[r]=[n[r][0],n[r][1],e[r]];return o}function z(n,e,t,r){var o,i=[];for(i.length=r,o=0;o<r;++o)i[o]=[n[o][0],n[o][1],e[o],t[o]];return i}function E(n,e,t){var r={number:n.ui32be()},o=n.ui32be()<<1,i=n.pos(),u=n.ui32le();return r.type_number=u,r.type=$[u],r.gj_type=B[r.type],r.type?(r.type!==e&&t.push("shp: shape #"+r.number+" type: "+r.type+" / expected: "+e),A[u](n,r),i=n.pos()-i,i!==o&&t.push("shp: shape #"+r.number+" length: "+o+" / actual: "+i)):(t.push("shp: shape #"+r.number+" type: "+u+" / unknown"),r=null),r}function N(n,e){var t,r,o,i,u;try{t=new Date,o=R(n,e),i=q(o,e),u=F(n,o.numberOfRecords,o.recordLength,i,e),r=new Date}catch(n){e.push("dbf: parsing error: "+n.message+" / "+n.description)}finally{return{records:u,errors:e,time:r-t}}}function R(n,e){var t,r,o={versionNumber:n.ui8(),lastUpdate:new Date(1900+n.ui8(),n.ui8()-1,n.ui8()),numberOfRecords:n.ui32le(),headerLength:n.ui16le(),recordLength:n.ui16le(),fields:[]};for(n.skip(20),t=(o.headerLength-n.pos()-1)/32;t>0;--t)o.fields.push(T(n));return r=n.ui8(),13!==r&&e.push("dbf: header terminator: "+r+" / expected: 13"),o}function S(n,e){return I.apply(null,n.ui8arr(e))}function T(n){var e={name:S(n,11).replace(/\0*$/gi,""),type:I(n.ui8()),length:n.skip(4).ui8(),count:n.ui8()};return n.skip(14),e}function U(n,e){return n.skip(e),null}function q(n,e){var t,r,o=[],i=0,u=n.fields.length,s=0;for(i=0;i<u;++i)r=n.fields[i],t={name:r.name,parser:J[r.type],length:r.length},t.parser||(t.parser=U,e.push("dbf: field "+r.name+" type: "+r.type+" / unknown")),s+=r.length,o.push(t);return s+1!==n.recordLength&&e.push("dbf: record length: "+n.recordLength+" / actual: "+(s+1)),o}function F(n,e,t,r,o){var i,u,s,l,a,c=r.length,f=[];for(i=0;i<e;++i){for(l={},s=n.pos(),n.skip(1),u=0;u<c;++u)a=r[u],l[a.name]=a.parser(n,a.length);s=n.pos()-s,s!==t&&o.push("dbf: record #"+(i+1)+" length: "+t+" / actual: "+s),f.push(l)}return f}function H(n){return new DataView(n)}function O(n,e){return n.getUint8(e)}function X(n,e){return n.getUint16(e,!0)}function j(n,e){return n.getUint32(e,!0)}function G(n,e){return n.getUint32(e,!1)}function K(n,e){return n.getFloat64(e,!0)}function V(n,e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&("OK"===this.statusText?e(null,this.response):e(this.statusText,null))},t.open("GET",n),t.responseType="arraybuffer",t.setRequestHeader("X-Requested-With","XMLHttpRequest"),t.send(null)}var W=n.DevExpress=n.DevExpress||{};W=W.viz=W.viz||{},W=W.vectormaputils={},W.parse=a;var $={0:"Null",1:"Point",3:"PolyLine",5:"Polygon",8:"MultiPoint",11:"PointZ",13:"PolyLineZ",15:"PolygonZ",18:"MultiPointZ",21:"PointM",23:"PolyLineM",25:"PolygonM",28:"MultiPointM",31:"MultiPatch"},A={0:e,1:p,3:h,5:h,8:g,11:v,13:m,15:m,18:P,21:b,23:y,25:y,28:d,31:x},B={Null:"Null",Point:"Point",PolyLine:"MultiLineString",Polygon:"Polygon",MultiPoint:"MultiPoint",PointZ:"Point",PolyLineZ:"MultiLineString",PolygonZ:"Polygon",MultiPointZ:"MultiPoint",PointM:"Point",PolyLineM:"MultiLineString",PolygonM:"Polygon",MultiPointM:"MultiPoint",MultiPatch:"MultiPatch"},I=String.fromCharCode,J={C:function(n,e){var t=S(n,e);return t.trim()},N:function(n,e){var t=S(n,e);return parseFloat(t,10)},D:function(n,e){var t=S(n,e);return new Date(t.substring(0,4),t.substring(4,6)-1,t.substring(6,8))}}}(window);
