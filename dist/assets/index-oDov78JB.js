(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="170",Vg=0,mf=1,Gg=2,wp=1,Ap=2,ji=3,hr=0,Hn=1,Li=2,Lr=0,$s=1,gf=2,_f=3,vf=4,Wg=5,is=100,Xg=101,Yg=102,qg=103,Kg=104,Zg=200,$g=201,jg=202,Jg=203,au=204,lu=205,Qg=206,e_=207,t_=208,n_=209,i_=210,r_=211,s_=212,o_=213,a_=214,cu=0,uu=1,hu=2,ao=3,fu=4,du=5,pu=6,mu=7,Rp=0,l_=1,c_=2,Ir=0,u_=1,h_=2,f_=3,Cp=4,d_=5,p_=6,m_=7,xf="attached",g_="detached",Pp=300,lo=301,co=302,gu=303,_u=304,Jl=306,uo=1e3,Di=1001,Fl=1002,Un=1003,Lp=1004,Vo=1005,hn=1006,Sl=1007,Ni=1008,fr=1009,Ip=1010,Dp=1011,ma=1012,Th=1013,_s=1014,zn=1015,rr=1016,bh=1017,wh=1018,ho=1020,Np=35902,Up=1021,Op=1022,ni=1023,Fp=1024,Bp=1025,js=1026,fo=1027,Ql=1028,Ah=1029,kp=1030,Rh=1031,Ch=1033,Ml=33776,El=33777,Tl=33778,bl=33779,vu=35840,xu=35841,yu=35842,Su=35843,Mu=36196,Eu=37492,Tu=37496,bu=37808,wu=37809,Au=37810,Ru=37811,Cu=37812,Pu=37813,Lu=37814,Iu=37815,Du=37816,Nu=37817,Uu=37818,Ou=37819,Fu=37820,Bu=37821,wl=36492,ku=36494,zu=36495,zp=36283,Hu=36284,Vu=36285,Gu=36286,ga=2300,_a=2301,cc=2302,yf=2400,Sf=2401,Mf=2402,__=2500,v_=0,Hp=1,Wu=2,x_=3200,y_=3201,Vp=0,S_=1,tr="",un="srgb",_n="srgb-linear",ec="linear",Nt="srgb",Ts=7680,Ef=519,M_=512,E_=513,T_=514,Gp=515,b_=516,w_=517,A_=518,R_=519,Xu=35044,Tf="300 es",sr=2e3,Bl=2001;class wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bf=1234567;const Qo=Math.PI/180,po=180/Math.PI;function Ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function pn(r,e,t){return Math.max(e,Math.min(t,r))}function Ph(r,e){return(r%e+e)%e}function C_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function P_(r,e,t){return r!==e?(t-r)/(e-r):0}function ea(r,e,t){return(1-t)*r+t*e}function L_(r,e,t,n){return ea(r,e,1-Math.exp(-t*n))}function I_(r,e=1){return e-Math.abs(Ph(r,e*2)-e)}function D_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function N_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function U_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function O_(r,e){return r+Math.random()*(e-r)}function F_(r){return r*(.5-Math.random())}function B_(r){r!==void 0&&(bf=r);let e=bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function k_(r){return r*Qo}function z_(r){return r*po}function H_(r){return(r&r-1)===0&&r!==0}function V_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function G_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function W_(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),p=s((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*_,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*_,a*c);break;case"ZYZ":r.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const rs={DEG2RAD:Qo,RAD2DEG:po,generateUUID:Ai,clamp:pn,euclideanModulo:Ph,mapLinear:C_,inverseLerp:P_,lerp:ea,damp:L_,pingpong:I_,smoothstep:D_,smootherstep:N_,randInt:U_,randFloat:O_,randFloatSpread:F_,seededRandom:B_,degToRad:k_,radToDeg:z_,isPowerOfTwo:H_,ceilPowerOfTwo:V_,floorPowerOfTwo:G_,setQuaternionFromProperEuler:W_,normalize:Lt,denormalize:bi};class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,t,n,i,s,o,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],_=n[8],v=i[0],g=i[3],m=i[6],E=i[1],T=i[4],y=i[7],I=i[2],L=i[5],A=i[8];return s[0]=o*v+a*E+l*I,s[3]=o*g+a*T+l*L,s[6]=o*m+a*y+l*A,s[1]=c*v+u*E+h*I,s[4]=c*g+u*T+h*L,s[7]=c*m+u*y+h*A,s[2]=f*v+p*E+_*I,s[5]=f*g+p*T+_*L,s[8]=f*m+p*y+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,_=t*h+n*f+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uc=new it;function Wp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function va(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function X_(){const r=va("canvas");return r.style.display="block",r}const wf={};function Go(r){r in wf||(wf[r]=!0,console.warn(r))}function Y_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function q_(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function K_(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:_n,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Nt&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Nt&&(r.r=Js(r.r),r.g=Js(r.g),r.b=Js(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?ec:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function lr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Af=[.64,.33,.3,.6,.15,.06],Rf=[.2126,.7152,.0722],Cf=[.3127,.329],Pf=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[_n]:{primaries:Af,whitePoint:Cf,transfer:ec,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:Rf,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:Af,whitePoint:Cf,transfer:Nt,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:Rf,outputColorSpaceConfig:{drawingBufferColorSpace:un}}});let bs;class Z_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=va("canvas")),bs.width=e.width,bs.height=e.height;const n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=lr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(lr(t[n]/255)*255):t[n]=lr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $_=0;class Xp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(hc(i[o].image)):s.push(hc(i[o]))}else s=hc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function hc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Z_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let j_=0;class fn extends wo{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=Di,i=Di,s=hn,o=Ni,a=ni,l=fr,c=fn.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Ai(),this.name="",this.source=new Xp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Pp;fn.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],_=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,y=(p+1)/2,I=(m+1)/2,L=(u+f)/4,A=(h+v)/4,D=(_+g)/4;return T>y&&T>I?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=L/n,s=A/n):y>I?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=L/i,s=D/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=A/s,i=D/s),this.set(n,i,s,t),this}let E=Math.sqrt((g-_)*(g-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(g-_)/E,this.y=(h-v)/E,this.z=(f-u)/E,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J_ extends wo{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends J_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yp extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q_ extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==_){let g=1-a;const m=l*f+c*p+u*_+h*v,E=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const I=Math.sqrt(T),L=Math.atan2(I,m*E);g=Math.sin(g*L)/I,a=Math.sin(a*L)/I}const y=a*E;if(l=l*g+f*y,c=c*g+p*y,u=u*g+_*y,h=h*g+v*y,g===1-a){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*h+l*p-c*f,e[t+1]=l*_+u*f+c*h-a*p,e[t+2]=c*_+u*p+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),p=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"YXZ":this._x=f*u*h+c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"ZXY":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h-f*p*_;break;case"ZYX":this._x=f*u*h-c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h+f*p*_;break;case"YZX":this._x=f*u*h+c*p*_,this._y=c*p*h+f*u*_,this._z=c*u*_-f*p*h,this._w=c*u*h-f*p*_;break;case"XZY":this._x=f*u*h-c*p*_,this._y=c*p*h-f*u*_,this._z=c*u*_+f*p*h,this._w=c*u*h+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(If.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(If.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fc=new H,If=new Hr;class Hi{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(s,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Ua.subVectors(this.max,Po),ws.subVectors(e.a,Po),As.subVectors(e.b,Po),Rs.subVectors(e.c,Po),mr.subVectors(As,ws),gr.subVectors(Rs,As),Gr.subVectors(ws,Rs);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Gr.z,Gr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Gr.z,0,-Gr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Gr.y,Gr.x,0];return!dc(t,ws,As,Rs,Ua)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,ws,As,Rs,Ua))?!1:(Oa.crossVectors(mr,gr),t=[Oa.x,Oa.y,Oa.z],dc(t,ws,As,Rs,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new H,new H,new H,new H,new H,new H,new H,new H],xi=new H,Na=new Hi,ws=new H,As=new H,Rs=new H,mr=new H,gr=new H,Gr=new H,Po=new H,Ua=new H,Oa=new H,Wr=new H;function dc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Wr.fromArray(r,s);const a=i.x*Math.abs(Wr.x)+i.y*Math.abs(Wr.y)+i.z*Math.abs(Wr.z),l=e.dot(Wr),c=t.dot(Wr),u=n.dot(Wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const e0=new Hi,Lo=new H,pc=new H;class Vi{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):e0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const t=Lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(pc)),this.expandByPoint(Lo.copy(e.center).sub(pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new H,mc=new H,Fa=new H,_r=new H,gc=new H,Ba=new H,_c=new H;class tc{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mc.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(mc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Fa),a=_r.dot(this.direction),l=-_r.dot(Fa),c=_r.lengthSq(),u=Math.abs(1-o*o);let h,f,p,_;if(u>0)if(h=o*l-a,f=o*a-l,_=s*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(mc).addScaledVector(Fa,f),p}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);const n=Yi.dot(this.direction),i=Yi.dot(Yi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,i,s){gc.subVectors(t,e),Ba.subVectors(n,e),_c.crossVectors(gc,Ba);let o=this.direction.dot(_c),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,e);const l=a*this.direction.dot(Ba.crossVectors(_r,Ba));if(l<0)return null;const c=a*this.direction.dot(gc.cross(_r));if(c<0||l+c>o)return null;const u=-a*_r.dot(_c);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,s,o,a,l,c,u,h,f,p,_,v,g){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,p,_,v,g)}set(e,t,n,i,s,o,a,l,c,u,h,f,p,_,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=f,m[3]=p,m[7]=_,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,_=c*u,v=c*h;t[0]=f+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,_=c*u,v=c*h;t[0]=f-v*a,t[4]=-o*h,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,_=a*u,v=a*h;t[0]=l*u,t[4]=_*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-f*h,t[8]=_*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+_,t[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=o*u,t[9]=p*h-_,t[2]=_*h-p,t[6]=a*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,t,n){const i=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),vr.crossVectors(n,Kn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),vr.crossVectors(n,Kn)),vr.normalize(),ka.crossVectors(Kn,vr),i[0]=vr.x,i[4]=ka.x,i[8]=Kn.x,i[1]=vr.y,i[5]=ka.y,i[9]=Kn.y,i[2]=vr.z,i[6]=ka.z,i[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],_=n[2],v=n[6],g=n[10],m=n[14],E=n[3],T=n[7],y=n[11],I=n[15],L=i[0],A=i[4],D=i[8],b=i[12],S=i[1],N=i[5],k=i[9],G=i[13],$=i[2],ne=i[6],Z=i[10],K=i[14],X=i[3],le=i[7],O=i[11],ye=i[15];return s[0]=o*L+a*S+l*$+c*X,s[4]=o*A+a*N+l*ne+c*le,s[8]=o*D+a*k+l*Z+c*O,s[12]=o*b+a*G+l*K+c*ye,s[1]=u*L+h*S+f*$+p*X,s[5]=u*A+h*N+f*ne+p*le,s[9]=u*D+h*k+f*Z+p*O,s[13]=u*b+h*G+f*K+p*ye,s[2]=_*L+v*S+g*$+m*X,s[6]=_*A+v*N+g*ne+m*le,s[10]=_*D+v*k+g*Z+m*O,s[14]=_*b+v*G+g*K+m*ye,s[3]=E*L+T*S+y*$+I*X,s[7]=E*A+T*N+y*ne+I*le,s[11]=E*D+T*k+y*Z+I*O,s[15]=E*b+T*G+y*K+I*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],_=e[3],v=e[7],g=e[11],m=e[15];return _*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*p-n*l*p)+v*(+t*l*p-t*c*f+s*o*f-i*o*p+i*c*u-s*l*u)+g*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+m*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],_=e[12],v=e[13],g=e[14],m=e[15],E=h*g*c-v*f*c+v*l*p-a*g*p-h*l*m+a*f*m,T=_*f*c-u*g*c-_*l*p+o*g*p+u*l*m-o*f*m,y=u*v*c-_*h*c+_*a*p-o*v*p-u*a*m+o*h*m,I=_*h*l-u*v*l-_*a*f+o*v*f+u*a*g-o*h*g,L=t*E+n*T+i*y+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/L;return e[0]=E*A,e[1]=(v*f*s-h*g*s-v*i*p+n*g*p+h*i*m-n*f*m)*A,e[2]=(a*g*s-v*l*s+v*i*c-n*g*c-a*i*m+n*l*m)*A,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*p-n*l*p)*A,e[4]=T*A,e[5]=(u*g*s-_*f*s+_*i*p-t*g*p-u*i*m+t*f*m)*A,e[6]=(_*l*s-o*g*s-_*i*c+t*g*c+o*i*m-t*l*m)*A,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*p+t*l*p)*A,e[8]=y*A,e[9]=(_*h*s-u*v*s-_*n*p+t*v*p+u*n*m-t*h*m)*A,e[10]=(o*v*s-_*a*s+_*n*c-t*v*c-o*n*m+t*a*m)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*A,e[12]=I*A,e[13]=(u*v*i-_*h*i+_*n*f-t*v*f-u*n*g+t*h*g)*A,e[14]=(_*a*i-o*v*i-_*n*l+t*v*l+o*n*g-t*a*g)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,_=s*h,v=o*u,g=o*h,m=a*h,E=l*c,T=l*u,y=l*h,I=n.x,L=n.y,A=n.z;return i[0]=(1-(v+m))*I,i[1]=(p+y)*I,i[2]=(_-T)*I,i[3]=0,i[4]=(p-y)*L,i[5]=(1-(f+m))*L,i[6]=(g+E)*L,i[7]=0,i[8]=(_+T)*A,i[9]=(g-E)*A,i[10]=(1-(f+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Cs.set(i[0],i[1],i[2]).length();const o=Cs.set(i[4],i[5],i[6]).length(),a=Cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],yi.copy(this);const c=1/s,u=1/o,h=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=h,yi.elements[9]*=h,yi.elements[10]*=h,t.setFromRotationMatrix(yi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=sr){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,_;if(a===sr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Bl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=sr){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-s),f=(t+e)*c,p=(n+i)*u;let _,v;if(a===sr)_=(o+s)*h,v=-2*h;else if(a===Bl)_=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cs=new H,yi=new rt,t0=new H(0,0,0),n0=new H(1,1,1),vr=new H,ka=new H,Kn=new H,Df=new rt,Nf=new Hr;class ki{constructor(e=0,t=0,n=0,i=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Df,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class qp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i0=0;const Uf=new H,Ps=new Hr,qi=new rt,za=new H,Io=new H,r0=new H,s0=new Hr,Of=new H(1,0,0),Ff=new H(0,1,0),Bf=new H(0,0,1),kf={type:"added"},o0={type:"removed"},Ls={type:"childadded",child:null},vc={type:"childremoved",child:null};class Yt extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new H,t=new ki,n=new Hr,i=new H(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new it}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Of,e)}rotateY(e){return this.rotateOnAxis(Ff,e)}rotateZ(e){return this.rotateOnAxis(Bf,e)}translateOnAxis(e,t){return Uf.copy(e).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Of,e)}translateY(e){return this.translateOnAxis(Ff,e)}translateZ(e){return this.translateOnAxis(Bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?za.copy(e):za.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Io,za,this.up):qi.lookAt(za,Io,this.up),this.quaternion.setFromRotationMatrix(qi),i&&(qi.extractRotation(i.matrixWorld),Ps.setFromRotationMatrix(qi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kf),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o0),vc.child=e,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kf),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,e,r0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Io,s0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Yt.DEFAULT_UP=new H(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new H,Ki=new H,xc=new H,Zi=new H,Is=new H,Ds=new H,zf=new H,yc=new H,Sc=new H,Mc=new H,Ec=new Tt,Tc=new Tt,bc=new Tt;class wi{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Si.subVectors(e,t),i.cross(Si);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Si.subVectors(i,t),Ki.subVectors(n,t),xc.subVectors(e,t);const o=Si.dot(Si),a=Si.dot(Ki),l=Si.dot(xc),c=Ki.dot(Ki),u=Ki.dot(xc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zi.x),l.addScaledVector(o,Zi.y),l.addScaledVector(a,Zi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Ec.setScalar(0),Tc.setScalar(0),bc.setScalar(0),Ec.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,n),bc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ec,s.x),o.addScaledVector(Tc,s.y),o.addScaledVector(bc,s.z),o}static isFrontFacing(e,t,n,i){return Si.subVectors(n,t),Ki.subVectors(e,t),Si.cross(Ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),Si.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return wi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Is.subVectors(i,n),Ds.subVectors(s,n),yc.subVectors(e,n);const l=Is.dot(yc),c=Ds.dot(yc);if(l<=0&&c<=0)return t.copy(n);Sc.subVectors(e,i);const u=Is.dot(Sc),h=Ds.dot(Sc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Is,o);Mc.subVectors(e,s);const p=Is.dot(Mc),_=Ds.dot(Mc);if(_>=0&&p<=_)return t.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ds,a);const g=u*_-p*h;if(g<=0&&h-u>=0&&p-_>=0)return zf.subVectors(s,i),a=(h-u)/(h-u+(p-_)),t.copy(i).addScaledVector(zf,a);const m=1/(g+v+f);return o=v*m,a=f*m,t.copy(n).addScaledVector(Is,o).addScaledVector(Ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xr={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function wc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=Ph(e,1),t=pn(t,0,1),n=pn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=wc(o,s,e+1/3),this.g=wc(o,s,e),this.b=wc(o,s,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=Kp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return _t.fromWorkingColorSpace(xn.copy(this),e),Math.round(pn(xn.r*255,0,255))*65536+Math.round(pn(xn.g*255,0,255))*256+Math.round(pn(xn.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,i=xn.g,s=xn.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=un){_t.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,i=xn.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(xr),this.setHSL(xr.h+e,xr.s+t,xr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xr),e.getHSL(Ha);const n=ea(xr.h,Ha.h,t),i=ea(xr.s,Ha.s,t),s=ea(xr.l,Ha.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new nt;nt.NAMES=Kp;let a0=0;class Fi extends wo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Ai(),this.name="",this.blending=$s,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=au,this.blendDst=lu,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==au&&(n.blendSrc=this.blendSrc),this.blendDst!==lu&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ef&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class os extends Fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=Rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nr=l0();function l0(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function c0(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=pn(r,-65504,65504),nr.floatView[0]=r;const e=nr.uint32View[0],t=e>>23&511;return nr.baseTable[t]+((e&8388607)>>nr.shiftTable[t])}function u0(r){const e=r>>10;return nr.uint32View[0]=nr.mantissaTable[nr.offsetTable[e]+(r&1023)]+nr.exponentTable[e],nr.floatView[0]}const Hf={toHalfFloat:c0,fromHalfFloat:u0},Jt=new H,Va=new yt;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),e}}class Zp extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $p extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class cr extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}let h0=0;const ci=new rt,Ac=new Yt,Ns=new H,Zn=new Hi,Do=new Hi,an=new H;class Gi extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wp(e)?$p:Zp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,n){return ci.makeTranslation(e,t,n),this.applyMatrix4(ci),this}scale(e,t,n){return ci.makeScale(e,t,n),this.applyMatrix4(ci),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new cr(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Zn.min,Do.min),Zn.expandByPoint(an),an.addVectors(Zn.max,Do.max),Zn.expandByPoint(an)):(Zn.expandByPoint(Do.min),Zn.expandByPoint(Do.max))}Zn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(e,c),an.add(Ns)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new H,l[D]=new H;const c=new H,u=new H,h=new H,f=new yt,p=new yt,_=new yt,v=new H,g=new H;function m(D,b,S){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(f),_.sub(f);const N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(N),g.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(N),a[D].add(v),a[b].add(v),a[S].add(v),l[D].add(g),l[b].add(g),l[S].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,b=E.length;D<b;++D){const S=E[D],N=S.start,k=S.count;for(let G=N,$=N+k;G<$;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const T=new H,y=new H,I=new H,L=new H;function A(D){I.fromBufferAttribute(i,D),L.copy(I);const b=a[D];T.copy(b),T.sub(I.multiplyScalar(I.dot(b))).normalize(),y.crossVectors(L,b);const N=y.dot(l[D])<0?-1:1;o.setXYZW(D,T.x,T.y,T.z,N)}for(let D=0,b=E.length;D<b;++D){const S=E[D],N=S.start,k=S.count;for(let G=N,$=N+k;G<$;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new H,s=new H,o=new H,a=new H,l=new H,c=new H,u=new H,h=new H;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let m=0;m<u;m++)f[_++]=c[p++]}return new On(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gi,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vf=new rt,Xr=new tc,Ga=new Vi,Gf=new H,Wa=new H,Xa=new H,Ya=new H,Rc=new H,qa=new H,Wf=new H,Ka=new H;class ii extends Yt{constructor(e=new Gi,t=new os){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Rc.fromBufferAttribute(h,e),o?qa.addScaledVector(Rc,u):qa.addScaledVector(Rc.sub(t),u))}t.add(qa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Xr.copy(e.ray).recast(e.near),!(Ga.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Ga,Gf)===null||Xr.origin.distanceToSquared(Gf)>(e.far-e.near)**2))&&(Vf.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(Vf),!(n.boundingBox!==null&&Xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],E=Math.max(g.start,p.start),T=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=E,I=T;y<I;y+=3){const L=a.getX(y),A=a.getX(y+1),D=a.getX(y+2);i=Za(this,m,e,n,c,u,h,L,A,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const E=a.getX(g),T=a.getX(g+1),y=a.getX(g+2);i=Za(this,o,e,n,c,u,h,E,T,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const g=f[_],m=o[g.materialIndex],E=Math.max(g.start,p.start),T=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=E,I=T;y<I;y+=3){const L=y,A=y+1,D=y+2;i=Za(this,m,e,n,c,u,h,L,A,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=_,m=v;g<m;g+=3){const E=g,T=g+1,y=g+2;i=Za(this,o,e,n,c,u,h,E,T,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function f0(r,e,t,n,i,s,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===hr,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:r}}function Za(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Wa),r.getVertexPosition(l,Xa),r.getVertexPosition(c,Ya);const u=f0(r,e,t,n,Wa,Xa,Ya,Wf);if(u){const h=new H;wi.getBarycoord(Wf,Wa,Xa,Ya,h),i&&(u.uv=wi.getInterpolatedAttribute(i,a,l,c,h,new yt)),s&&(u.uv1=wi.getInterpolatedAttribute(s,a,l,c,h,new yt)),o&&(u.normal=wi.getInterpolatedAttribute(o,a,l,c,h,new H),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};wi.getNormal(Wa,Xa,Ya,f.normal),u.face=f,u.barycoord=h}return u}class Ca extends Gi{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new cr(c,3)),this.setAttribute("normal",new cr(u,3)),this.setAttribute("uv",new cr(h,2));function _(v,g,m,E,T,y,I,L,A,D,b){const S=y/A,N=I/D,k=y/2,G=I/2,$=L/2,ne=A+1,Z=D+1;let K=0,X=0;const le=new H;for(let O=0;O<Z;O++){const ye=O*N-G;for(let Ie=0;Ie<ne;Ie++){const Xe=Ie*S-k;le[v]=Xe*E,le[g]=ye*T,le[m]=$,c.push(le.x,le.y,le.z),le[v]=0,le[g]=0,le[m]=L>0?1:-1,u.push(le.x,le.y,le.z),h.push(Ie/A),h.push(1-O/D),K+=1}}for(let O=0;O<D;O++)for(let ye=0;ye<A;ye++){const Ie=f+ye+ne*O,Xe=f+ye+ne*(O+1),te=f+(ye+1)+ne*(O+1),ce=f+(ye+1)+ne*O;l.push(Ie,Xe,ce),l.push(Xe,te,ce),X+=6}a.addGroup(p,X,b),p+=X,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mo(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=mo(r[t]);for(const i in n)e[i]=n[i]}return e}function d0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jp(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const p0={clone:mo,merge:Cn};var m0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends Fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m0,this.fragmentShader=g0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jp extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=sr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new H,Xf=new yt,Yf=new yt;class Dn extends Jp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=po*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return po*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,Xf,Yf),t.subVectors(Yf,Xf)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Us=-90,Os=1;class _0 extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dn(Us,Os,e,t);i.layers=this.layers,this.add(i);const s=new Dn(Us,Os,e,t);s.layers=this.layers,this.add(s);const o=new Dn(Us,Os,e,t);o.layers=this.layers,this.add(o);const a=new Dn(Us,Os,e,t);a.layers=this.layers,this.add(a);const l=new Dn(Us,Os,e,t);l.layers=this.layers,this.add(l);const c=new Dn(Us,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===sr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Qp extends fn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:lo,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v0 extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ca(5,5,5),s=new Or({name:"CubemapFromEquirect",uniforms:mo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Lr});s.uniforms.tEquirect.value=t;const o=new ii(i,s),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=hn),new _0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Cc=new H,x0=new H,y0=new it;class Jr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cc.subVectors(n,t).cross(x0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Cc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||y0.getNormalMatrix(e),i=this.coplanarPoint(Cc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Vi,$a=new H;class Lh{constructor(e=new Jr,t=new Jr,n=new Jr,i=new Jr,s=new Jr,o=new Jr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sr){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],p=i[8],_=i[9],v=i[10],g=i[11],m=i[12],E=i[13],T=i[14],y=i[15];if(n[0].setComponents(l-s,f-c,g-p,y-m).normalize(),n[1].setComponents(l+s,f+c,g+p,y+m).normalize(),n[2].setComponents(l+o,f+u,g+_,y+E).normalize(),n[3].setComponents(l-o,f-u,g-_,y-E).normalize(),n[4].setComponents(l-a,f-h,g-v,y-T).normalize(),t===sr)n[5].setComponents(l+a,f+h,g+v,y+T).normalize();else if(t===Bl)n[5].setComponents(a,h,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if($a.x=i.normal.x>0?e.max.x:e.min.x,$a.y=i.normal.y>0?e.max.y:e.min.y,$a.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function em(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function S0(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=r.SHORT;else if(c instanceof Uint32Array)p=r.UNSIGNED_INT;else if(c instanceof Int32Array)p=r.INT;else if(c instanceof Int8Array)p=r.BYTE;else if(c instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<h.length;p++){const _=h[f],v=h[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,_=h.length;p<_;p++){const v=h[p];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class nc extends Gi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,p=[],_=[],v=[],g=[];for(let m=0;m<u;m++){const E=m*f-o;for(let T=0;T<c;T++){const y=T*h-s;_.push(y,-E,0),v.push(0,0,1),g.push(T/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<a;E++){const T=E+c*m,y=E+c*(m+1),I=E+1+c*(m+1),L=E+1+c*m;p.push(T,y,L),p.push(y,I,L)}this.setIndex(p),this.setAttribute("position",new cr(_,3)),this.setAttribute("normal",new cr(v,3)),this.setAttribute("uv",new cr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.widthSegments,e.heightSegments)}}var M0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,av=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Px=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ux=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:M0,alphahash_pars_fragment:E0,alphamap_fragment:T0,alphamap_pars_fragment:b0,alphatest_fragment:w0,alphatest_pars_fragment:A0,aomap_fragment:R0,aomap_pars_fragment:C0,batching_pars_vertex:P0,batching_vertex:L0,begin_vertex:I0,beginnormal_vertex:D0,bsdfs:N0,iridescence_fragment:U0,bumpmap_pars_fragment:O0,clipping_planes_fragment:F0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:k0,clipping_planes_vertex:z0,color_fragment:H0,color_pars_fragment:V0,color_pars_vertex:G0,color_vertex:W0,common:X0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:q0,displacementmap_pars_vertex:K0,displacementmap_vertex:Z0,emissivemap_fragment:$0,emissivemap_pars_fragment:j0,colorspace_fragment:J0,colorspace_pars_fragment:Q0,envmap_fragment:ev,envmap_common_pars_fragment:tv,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:rv,fog_vertex:sv,fog_pars_vertex:ov,fog_fragment:av,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:uv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:fv,lights_pars_begin:dv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:_v,lights_phong_pars_fragment:vv,lights_physical_fragment:xv,lights_physical_pars_fragment:yv,lights_fragment_begin:Sv,lights_fragment_maps:Mv,lights_fragment_end:Ev,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:bv,logdepthbuf_pars_vertex:wv,logdepthbuf_vertex:Av,map_fragment:Rv,map_pars_fragment:Cv,map_particle_fragment:Pv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Iv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Nv,morphcolor_vertex:Uv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Fv,morphtarget_vertex:Bv,normal_fragment_begin:kv,normal_fragment_maps:zv,normal_pars_fragment:Hv,normal_pars_vertex:Vv,normal_vertex:Gv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:Yv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Kv,opaque_fragment:Zv,packing:$v,premultiplied_alpha_fragment:jv,project_vertex:Jv,dithering_fragment:Qv,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:rx,shadowmap_vertex:sx,shadowmask_pars_fragment:ox,skinbase_vertex:ax,skinning_pars_vertex:lx,skinning_vertex:cx,skinnormal_vertex:ux,specularmap_fragment:hx,specularmap_pars_fragment:fx,tonemapping_fragment:dx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:xx,worldpos_vertex:yx,background_vert:Sx,background_frag:Mx,backgroundCube_vert:Ex,backgroundCube_frag:Tx,cube_vert:bx,cube_frag:wx,depth_vert:Ax,depth_frag:Rx,distanceRGBA_vert:Cx,distanceRGBA_frag:Px,equirect_vert:Lx,equirect_frag:Ix,linedashed_vert:Dx,linedashed_frag:Nx,meshbasic_vert:Ux,meshbasic_frag:Ox,meshlambert_vert:Fx,meshlambert_frag:Bx,meshmatcap_vert:kx,meshmatcap_frag:zx,meshnormal_vert:Hx,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:Yx,meshtoon_vert:qx,meshtoon_frag:Kx,points_vert:Zx,points_frag:$x,shadow_vert:jx,shadow_frag:Jx,sprite_vert:Qx,sprite_frag:ey},Ae={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Pi={basic:{uniforms:Cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Cn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Cn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new nt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Cn([Ae.points,Ae.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Cn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Cn([Ae.common,Ae.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Cn([Ae.sprite,Ae.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Cn([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Cn([Ae.lights,Ae.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Pi.physical={uniforms:Cn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const ja={r:0,b:0,g:0},qr=new ki,ty=new rt;function ny(r,e,t,n,i,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function _(E){let T=E.isScene===!0?E.background:null;return T&&T.isTexture&&(T=(E.backgroundBlurriness>0?t:e).get(T)),T}function v(E){let T=!1;const y=_(E);y===null?m(a,l):y&&y.isColor&&(m(y,1),T=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(E,T){const y=_(T);y&&(y.isCubeTexture||y.mapping===Jl)?(u===void 0&&(u=new ii(new Ca(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:mo(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,L,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),qr.copy(T.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ty.makeRotationFromEuler(qr)),u.material.toneMapped=_t.getTransfer(y.colorSpace)!==Nt,(h!==y||f!==y.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,p=r.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ii(new nc(2,2),new Or({name:"BackgroundMaterial",uniforms:mo(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=_t.getTransfer(y.colorSpace)!==Nt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,p=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,T){E.getRGB(ja,jp(r)),n.buffers.color.setClear(ja.r,ja.g,ja.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(E,T=1){a.set(E),l=T,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:v,addToRenderList:g}}function iy(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(S,N,k,G,$){let ne=!1;const Z=h(G,k,N);s!==Z&&(s=Z,c(s.object)),ne=p(S,G,k,$),ne&&_(S,G,k,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,y(S,N,k,G),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function h(S,N,k){const G=k.wireframe===!0;let $=n[S.id];$===void 0&&($={},n[S.id]=$);let ne=$[N.id];ne===void 0&&(ne={},$[N.id]=ne);let Z=ne[G];return Z===void 0&&(Z=f(l()),ne[G]=Z),Z}function f(S){const N=[],k=[],G=[];for(let $=0;$<t;$++)N[$]=0,k[$]=0,G[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:G,object:S,attributes:{},index:null}}function p(S,N,k,G){const $=s.attributes,ne=N.attributes;let Z=0;const K=k.getAttributes();for(const X in K)if(K[X].location>=0){const O=$[X];let ye=ne[X];if(ye===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),O===void 0||O.attribute!==ye||ye&&O.data!==ye.data)return!0;Z++}return s.attributesNum!==Z||s.index!==G}function _(S,N,k,G){const $={},ne=N.attributes;let Z=0;const K=k.getAttributes();for(const X in K)if(K[X].location>=0){let O=ne[X];O===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(O=S.instanceColor));const ye={};ye.attribute=O,O&&O.data&&(ye.data=O.data),$[X]=ye,Z++}s.attributes=$,s.attributesNum=Z,s.index=G}function v(){const S=s.newAttributes;for(let N=0,k=S.length;N<k;N++)S[N]=0}function g(S){m(S,0)}function m(S,N){const k=s.newAttributes,G=s.enabledAttributes,$=s.attributeDivisors;k[S]=1,G[S]===0&&(r.enableVertexAttribArray(S),G[S]=1),$[S]!==N&&(r.vertexAttribDivisor(S,N),$[S]=N)}function E(){const S=s.newAttributes,N=s.enabledAttributes;for(let k=0,G=N.length;k<G;k++)N[k]!==S[k]&&(r.disableVertexAttribArray(k),N[k]=0)}function T(S,N,k,G,$,ne,Z){Z===!0?r.vertexAttribIPointer(S,N,k,$,ne):r.vertexAttribPointer(S,N,k,G,$,ne)}function y(S,N,k,G){v();const $=G.attributes,ne=k.getAttributes(),Z=N.defaultAttributeValues;for(const K in ne){const X=ne[K];if(X.location>=0){let le=$[K];if(le===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const O=le.normalized,ye=le.itemSize,Ie=e.get(le);if(Ie===void 0)continue;const Xe=Ie.buffer,te=Ie.type,ce=Ie.bytesPerElement,he=te===r.INT||te===r.UNSIGNED_INT||le.gpuType===Th;if(le.isInterleavedBufferAttribute){const fe=le.data,Ce=fe.stride,Oe=le.offset;if(fe.isInstancedInterleavedBuffer){for(let Ye=0;Ye<X.locationSize;Ye++)m(X.location+Ye,fe.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ye=0;Ye<X.locationSize;Ye++)g(X.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let Ye=0;Ye<X.locationSize;Ye++)T(X.location+Ye,ye/X.locationSize,te,O,Ce*ce,(Oe+ye/X.locationSize*Ye)*ce,he)}else{if(le.isInstancedBufferAttribute){for(let fe=0;fe<X.locationSize;fe++)m(X.location+fe,le.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let fe=0;fe<X.locationSize;fe++)g(X.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let fe=0;fe<X.locationSize;fe++)T(X.location+fe,ye/X.locationSize,te,O,ye*ce,ye/X.locationSize*fe*ce,he)}}else if(Z!==void 0){const O=Z[K];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(X.location,O);break;case 3:r.vertexAttrib3fv(X.location,O);break;case 4:r.vertexAttrib4fv(X.location,O);break;default:r.vertexAttrib1fv(X.location,O)}}}}E()}function I(){D();for(const S in n){const N=n[S];for(const k in N){const G=N[k];for(const $ in G)u(G[$].object),delete G[$];delete N[k]}delete n[S]}}function L(S){if(n[S.id]===void 0)return;const N=n[S.id];for(const k in N){const G=N[k];for(const $ in G)u(G[$].object),delete G[$];delete N[k]}delete n[S.id]}function A(S){for(const N in n){const k=n[N];if(k[S.id]===void 0)continue;const G=k[S.id];for(const $ in G)u(G[$].object),delete G[$];delete k[S.id]}}function D(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function ry(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let v=0;v<h;v++)_+=u[v]*f[v];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==ni&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==fr&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!D)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:I,maxSamples:L}}function oy(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Jr,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const _=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||_===null||_.length===0||s&&!g)s?u(null):c();else{const E=s?0:n,T=E*4;let y=m.clippingState||null;l.value=y,y=u(_,f,T,p);for(let I=0;I!==T;++I)y[I]=t[I];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,_){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,_!==!0||g===null){const m=p+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let T=0,y=p;T!==v;++T,y+=4)o.copy(h[T]).applyMatrix4(E,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function ay(r){let e=new WeakMap;function t(o,a){return a===gu?o.mapping=lo:a===_u&&(o.mapping=co),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===gu||a===_u)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new v0(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ih extends Jp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=4,qf=[.125,.215,.35,.446,.526,.582],ss=20,Pc=new Ih,Kf=new nt;let Lc=null,Ic=0,Dc=0,Nc=!1;const Qr=(1+Math.sqrt(5))/2,Fs=1/Qr,Zf=[new H(-Qr,Fs,0),new H(Qr,Fs,0),new H(-Fs,0,Qr),new H(Fs,0,Qr),new H(0,Qr,-Fs),new H(0,Qr,Fs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Yu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Ic,Dc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:rr,format:ni,colorSpace:_n,depthBuffer:!1},i=$f(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(s)),this._blurMaterial=cy(s,e,t)}return i}_compileMaterial(e){const t=new ii(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,i){const a=new Dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Kf),u.toneMapping=Ir,u.autoClear=!1;const p=new os({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),_=new ii(new Ca,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Kf),v=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):E===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const T=this._cubeSize;Ja(i,E*T,m>2?T:0,T,T),u.setRenderTarget(i),v&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===lo||e.mapping===co;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ii(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Pc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zf[(i-s-1)%Zf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ii(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),v=s/_,g=isFinite(s)?1+Math.floor(u*v):ss;g>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);const m=[];let E=0;for(let A=0;A<ss;++A){const D=A/v,b=Math.exp(-D*D/2);m.push(b),A===0?E+=b:A<g&&(E+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/E;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:T}=this;f.dTheta.value=_,f.mipInt.value=T-n;const y=this._sizeLods[i],I=3*y*(i>T-Xs?i-T+Xs:0),L=4*(this._cubeSize-y);Ja(t,I,L,3*y,2*y),l.setRenderTarget(t),l.render(h,Pc)}}function ly(r){const e=[],t=[],n=[];let i=r;const s=r-Xs+1+qf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Xs?l=qf[o-r+Xs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,v=3,g=2,m=1,E=new Float32Array(v*_*p),T=new Float32Array(g*_*p),y=new Float32Array(m*_*p);for(let L=0;L<p;L++){const A=L%3*2/3-1,D=L>2?0:-1,b=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];E.set(b,v*_*L),T.set(f,g*_*L);const S=[L,L,L,L,L,L];y.set(S,m*_*L)}const I=new Gi;I.setAttribute("position",new On(E,v)),I.setAttribute("uv",new On(T,g)),I.setAttribute("faceIndex",new On(y,m)),e.push(I),i>Xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $f(r,e,t){const n=new vs(r,e,t);return n.texture.mapping=Jl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cy(r,e,t){const n=new Float32Array(ss),i=new H(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function jf(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Jf(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uy(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===gu||l===_u,u=l===lo||l===co;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Yu(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Yu(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function hy(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Go("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fy(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}f.removeEventListener("dispose",o),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],r.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const v=p[_];for(let g=0,m=v.length;g<m;g++)e.update(v[g],r.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,_=h.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let T=0,y=E.length;T<y;T+=3){const I=E[T+0],L=E[T+1],A=E[T+2];f.push(I,L,L,A,A,I)}}else if(_!==void 0){const E=_.array;v=_.version;for(let T=0,y=E.length/3-1;T<y;T+=3){const I=T+0,L=T+1,A=T+2;f.push(I,L,L,A,A,I)}}else return;const g=new(Wp(f)?$p:Zp)(f,1);g.version=v;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function dy(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){r.drawElements(n,p,s,f*o),t.update(p,n,1)}function c(f,p,_){_!==0&&(r.drawElementsInstanced(n,p,s,f*o,_),t.update(p,n,_))}function u(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];t.update(g,n,1)}function h(f,p,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,v,0,_);let m=0;for(let E=0;E<_;E++)m+=p[E]*v[E];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function py(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function my(r,e,t){const n=new WeakMap,i=new Tt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let S=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let I=a.attributes.position.count*y,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const A=new Float32Array(I*L*4*h),D=new Yp(A,I,L,h);D.type=zn,D.needsUpdate=!0;const b=y*4;for(let N=0;N<h;N++){const k=m[N],G=E[N],$=T[N],ne=I*L*4*N;for(let Z=0;Z<k.count;Z++){const K=Z*b;_===!0&&(i.fromBufferAttribute(k,Z),A[ne+K+0]=i.x,A[ne+K+1]=i.y,A[ne+K+2]=i.z,A[ne+K+3]=0),v===!0&&(i.fromBufferAttribute(G,Z),A[ne+K+4]=i.x,A[ne+K+5]=i.y,A[ne+K+6]=i.z,A[ne+K+7]=0),g===!0&&(i.fromBufferAttribute($,Z),A[ne+K+8]=i.x,A[ne+K+9]=i.y,A[ne+K+10]=i.z,A[ne+K+11]=$.itemSize===4?i.w:1)}}f={count:h,texture:D,size:new yt(I,L)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function gy(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class tm extends fn{constructor(e,t,n,i,s,o,a,l,c,u=js){if(u!==js&&u!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===js&&(n=_s),n===void 0&&u===fo&&(n=ho),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const nm=new fn,Qf=new tm(1,1),im=new Yp,rm=new Q_,sm=new Qp,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),rd=new Float32Array(4);function Ao(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=ed[i];if(s===void 0&&(s=new Float32Array(i),ed[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ic(r,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _y(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function vy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function yy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function Sy(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;rd.set(n),r.uniformMatrix2fv(this.addr,!1,rd),sn(t,n)}}function My(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;id.set(n),r.uniformMatrix3fv(this.addr,!1,id),sn(t,n)}}function Ey(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;nd.set(n),r.uniformMatrix4fv(this.addr,!1,nd),sn(t,n)}}function Ty(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function by(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function wy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function Ay(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function Ry(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Cy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function Py(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function Ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function Iy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Qf.compareFunction=Gp,s=Qf):s=nm,t.setTexture2D(e||s,i)}function Dy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||rm,i)}function Ny(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||sm,i)}function Uy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||im,i)}function Oy(r){switch(r){case 5126:return _y;case 35664:return vy;case 35665:return xy;case 35666:return yy;case 35674:return Sy;case 35675:return My;case 35676:return Ey;case 5124:case 35670:return Ty;case 35667:case 35671:return by;case 35668:case 35672:return wy;case 35669:case 35673:return Ay;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Uy}}function Fy(r,e){r.uniform1fv(this.addr,e)}function By(r,e){const t=Ao(e,this.size,2);r.uniform2fv(this.addr,t)}function ky(r,e){const t=Ao(e,this.size,3);r.uniform3fv(this.addr,t)}function zy(r,e){const t=Ao(e,this.size,4);r.uniform4fv(this.addr,t)}function Hy(r,e){const t=Ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Vy(r,e){const t=Ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Gy(r,e){const t=Ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Wy(r,e){r.uniform1iv(this.addr,e)}function Xy(r,e){r.uniform2iv(this.addr,e)}function Yy(r,e){r.uniform3iv(this.addr,e)}function qy(r,e){r.uniform4iv(this.addr,e)}function Ky(r,e){r.uniform1uiv(this.addr,e)}function Zy(r,e){r.uniform2uiv(this.addr,e)}function $y(r,e){r.uniform3uiv(this.addr,e)}function jy(r,e){r.uniform4uiv(this.addr,e)}function Jy(r,e,t){const n=this.cache,i=e.length,s=ic(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||nm,s[o])}function Qy(r,e,t){const n=this.cache,i=e.length,s=ic(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||rm,s[o])}function eS(r,e,t){const n=this.cache,i=e.length,s=ic(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||sm,s[o])}function tS(r,e,t){const n=this.cache,i=e.length,s=ic(t,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||im,s[o])}function nS(r){switch(r){case 5126:return Fy;case 35664:return By;case 35665:return ky;case 35666:return zy;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return Yy;case 35669:case 35673:return qy;case 5125:return Ky;case 36294:return Zy;case 36295:return $y;case 36296:return jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Jy;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}class iS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Oy(t.type)}}class rS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nS(t.type)}}class sS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Uc=/(\w+)(\])?(\[|\.)?/g;function sd(r,e){r.seq.push(e),r.map[e.id]=e}function oS(r,e,t){const n=r.name,i=n.length;for(Uc.lastIndex=0;;){const s=Uc.exec(n),o=Uc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){sd(t,c===void 0?new iS(a,r,e):new rS(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new sS(a),sd(t,h)),t=h}}}class Al{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);oS(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function od(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const aS=37297;let lS=0;function cS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ad=new it;function uS(r){_t._getMatrix(ad,_t.workingColorSpace,r);const e=`mat3( ${ad.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(r)){case ec:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ld(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+cS(r.getShaderSource(e),o)}else return i}function hS(r,e){const t=uS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fS(r,e){let t;switch(e){case u_:t="Linear";break;case h_:t="Reinhard";break;case f_:t="Cineon";break;case Cp:t="ACESFilmic";break;case p_:t="AgX";break;case m_:t="Neutral";break;case d_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qa=new H;function dS(){_t.getLuminanceCoefficients(Qa);const r=Qa.x.toFixed(4),e=Qa.y.toFixed(4),t=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function mS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Wo(r){return r!==""}function cd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _S=/^[ \t]*#include +<([\w\d./]+)>/gm;function qu(r){return r.replace(_S,xS)}const vS=new Map;function xS(r,e){let t=ot[e];if(t===void 0){const n=vS.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qu(t)}const yS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(r){return r.replace(yS,SS)}function SS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function fd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MS(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===wp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ap?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function ES(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function TS(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function bS(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rp:e="ENVMAP_BLENDING_MULTIPLY";break;case l_:e="ENVMAP_BLENDING_MIX";break;case c_:e="ENVMAP_BLENDING_ADD";break}return e}function wS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function AS(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=MS(t),c=ES(t),u=TS(t),h=bS(t),f=wS(t),p=pS(t),_=mS(s),v=i.createProgram();let g,m,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wo).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wo).join(`
`),m.length>0&&(m+=`
`)):(g=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),m=[fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?ot.tonemapping_pars_fragment:"",t.toneMapping!==Ir?fS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,hS("linearToOutputTexel",t.outputColorSpace),dS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=qu(o),o=cd(o,t),o=ud(o,t),a=qu(a),a=cd(a,t),a=ud(a,t),o=hd(o),a=hd(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Tf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=E+g+o,y=E+m+a,I=od(i,i.VERTEX_SHADER,T),L=od(i,i.FRAGMENT_SHADER,y);i.attachShader(v,I),i.attachShader(v,L),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(N){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(v).trim(),G=i.getShaderInfoLog(I).trim(),$=i.getShaderInfoLog(L).trim();let ne=!0,Z=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(ne=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,I,L);else{const K=ld(i,I,"vertex"),X=ld(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+K+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(G===""||$==="")&&(Z=!1);Z&&(N.diagnostics={runnable:ne,programLog:k,vertexShader:{log:G,prefix:g},fragmentShader:{log:$,prefix:m}})}i.deleteShader(I),i.deleteShader(L),D=new Al(i,v),b=gS(i,v)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,aS)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lS++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=L,this}let RS=0;class CS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new PS(e),t.set(e,n)),n}}class PS{constructor(e){this.id=RS++,this.code=e,this.usedTimes=0}}function LS(r,e,t,n,i,s,o){const a=new qp,l=new CS,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,S,N,k,G){const $=k.fog,ne=G.geometry,Z=b.isMeshStandardMaterial?k.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),X=K&&K.mapping===Jl?K.image.height:null,le=_[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const O=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ye=O!==void 0?O.length:0;let Ie=0;ne.morphAttributes.position!==void 0&&(Ie=1),ne.morphAttributes.normal!==void 0&&(Ie=2),ne.morphAttributes.color!==void 0&&(Ie=3);let Xe,te,ce,he;if(le){const Re=Pi[le];Xe=Re.vertexShader,te=Re.fragmentShader}else Xe=b.vertexShader,te=b.fragmentShader,l.update(b),ce=l.getVertexShaderID(b),he=l.getFragmentShaderID(b);const fe=r.getRenderTarget(),Ce=r.state.buffers.depth.getReversed(),Oe=G.isInstancedMesh===!0,Ye=G.isBatchedMesh===!0,Qe=!!b.map,Ve=!!b.matcap,ze=!!K,B=!!b.aoMap,bt=!!b.lightMap,qe=!!b.bumpMap,W=!!b.normalMap,Ne=!!b.displacementMap,pt=!!b.emissiveMap,He=!!b.metalnessMap,P=!!b.roughnessMap,w=b.anisotropy>0,Y=b.clearcoat>0,ae=b.dispersion>0,se=b.iridescence>0,re=b.sheen>0,Te=b.transmission>0,ve=w&&!!b.anisotropyMap,Ee=Y&&!!b.clearcoatMap,et=Y&&!!b.clearcoatNormalMap,me=Y&&!!b.clearcoatRoughnessMap,xe=se&&!!b.iridescenceMap,De=se&&!!b.iridescenceThicknessMap,Le=re&&!!b.sheenColorMap,Pe=re&&!!b.sheenRoughnessMap,Ke=!!b.specularMap,Fe=!!b.specularColorMap,We=!!b.specularIntensityMap,F=Te&&!!b.transmissionMap,Q=Te&&!!b.thicknessMap,ee=!!b.gradientMap,oe=!!b.alphaMap,Me=b.alphaTest>0,be=!!b.alphaHash,Ze=!!b.extensions;let xt=Ir;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(xt=r.toneMapping);const zt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Xe,fragmentShader:te,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:he,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ye,batchingColor:Ye&&G._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&G.instanceColor!==null,instancingMorph:Oe&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?r.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:_n,alphaToCoverage:!!b.alphaToCoverage,map:Qe,matcap:Ve,envMap:ze,envMapMode:ze&&K.mapping,envMapCubeUVHeight:X,aoMap:B,lightMap:bt,bumpMap:qe,normalMap:W,displacementMap:f&&Ne,emissiveMap:pt,normalMapObjectSpace:W&&b.normalMapType===S_,normalMapTangentSpace:W&&b.normalMapType===Vp,metalnessMap:He,roughnessMap:P,anisotropy:w,anisotropyMap:ve,clearcoat:Y,clearcoatMap:Ee,clearcoatNormalMap:et,clearcoatRoughnessMap:me,dispersion:ae,iridescence:se,iridescenceMap:xe,iridescenceThicknessMap:De,sheen:re,sheenColorMap:Le,sheenRoughnessMap:Pe,specularMap:Ke,specularColorMap:Fe,specularIntensityMap:We,transmission:Te,transmissionMap:F,thicknessMap:Q,gradientMap:ee,opaque:b.transparent===!1&&b.blending===$s&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:Me,alphaHash:be,combine:b.combine,mapUv:Qe&&v(b.map.channel),aoMapUv:B&&v(b.aoMap.channel),lightMapUv:bt&&v(b.lightMap.channel),bumpMapUv:qe&&v(b.bumpMap.channel),normalMapUv:W&&v(b.normalMap.channel),displacementMapUv:Ne&&v(b.displacementMap.channel),emissiveMapUv:pt&&v(b.emissiveMap.channel),metalnessMapUv:He&&v(b.metalnessMap.channel),roughnessMapUv:P&&v(b.roughnessMap.channel),anisotropyMapUv:ve&&v(b.anisotropyMap.channel),clearcoatMapUv:Ee&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:et&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(b.sheenRoughnessMap.channel),specularMapUv:Ke&&v(b.specularMap.channel),specularColorMapUv:Fe&&v(b.specularColorMap.channel),specularIntensityMapUv:We&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:Q&&v(b.thicknessMap.channel),alphaMapUv:oe&&v(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(W||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ne.attributes.uv&&(Qe||oe),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:G.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:xt,decodeVideoTexture:Qe&&b.map.isVideoTexture===!0&&_t.getTransfer(b.map.colorSpace)===Nt,decodeVideoTextureEmissive:pt&&b.emissiveMap.isVideoTexture===!0&&_t.getTransfer(b.emissiveMap.colorSpace)===Nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Li,flipSided:b.side===Hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ze&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&b.extensions.multiDraw===!0||Ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function m(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)S.push(N),S.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(E(S,b),T(S,b),S.push(r.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function E(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function T(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const S=_[b.type];let N;if(S){const k=Pi[S];N=p0.clone(k.uniforms)}else N=b.uniforms;return N}function I(b,S){let N;for(let k=0,G=u.length;k<G;k++){const $=u[k];if($.cacheKey===S){N=$,++N.usedTimes;break}}return N===void 0&&(N=new AS(r,S,b,s),u.push(N)),N}function L(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:I,releaseProgram:L,releaseShaderCache:A,programs:u,dispose:D}}function IS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function DS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function pd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,p,_,v,g){let m=r[e];return m===void 0?(m={id:h.id,object:h,geometry:f,material:p,groupOrder:_,renderOrder:h.renderOrder,z:v,group:g},r[e]=m):(m.id=h.id,m.object=h,m.geometry=f,m.material=p,m.groupOrder=_,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function a(h,f,p,_,v,g){const m=o(h,f,p,_,v,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):t.push(m)}function l(h,f,p,_,v,g){const m=o(h,f,p,_,v,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):t.unshift(m)}function c(h,f){t.length>1&&t.sort(h||DS),n.length>1&&n.sort(f||dd),i.length>1&&i.sort(f||dd)}function u(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function NS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new pd,r.set(n,[o])):i>=s.length?(o=new pd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function US(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new nt};break;case"SpotLight":t={position:new H,direction:new H,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new H,halfWidth:new H,halfHeight:new H};break}return r[e.id]=t,t}}}function OS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let FS=0;function BS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function kS(r){const e=new US,t=OS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const i=new H,s=new rt,o=new rt;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,v=0,g=0,m=0,E=0,T=0,y=0,I=0,L=0,A=0;c.sort(BS);for(let b=0,S=c.length;b<S;b++){const N=c[b],k=N.color,G=N.intensity,$=N.distance,ne=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=k.r*G,h+=k.g*G,f+=k.b*G;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],G);A++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const K=N.shadow,X=t.get(N);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=N.shadow.matrix,E++}n.directional[p]=Z,p++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(k).multiplyScalar(G),Z.distance=$,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[v]=Z;const K=N.shadow;if(N.map&&(n.spotLightMap[I]=N.map,I++,K.updateMatrices(N),N.castShadow&&L++),n.spotLightMatrix[v]=K.matrix,N.castShadow){const X=t.get(N);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[v]=X,n.spotShadowMap[v]=ne,y++}v++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(k).multiplyScalar(G),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[g]=Z,g++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const K=N.shadow,X=t.get(N);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=ne,n.pointShadowMatrix[_]=N.shadow.matrix,T++}n.point[_]=Z,_++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(G),Z.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[m]=Z,m++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==E||D.numPointShadows!==T||D.numSpotShadows!==y||D.numSpotMaps!==I||D.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+I-L,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=A,D.directionalLength=p,D.pointLength=_,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=E,D.numPointShadows=T,D.numSpotShadows=y,D.numSpotMaps=I,D.numLightProbes=A,n.version=FS++)}function l(c,u){let h=0,f=0,p=0,_=0,v=0;const g=u.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const T=c[m];if(T.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(T.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),p++}else if(T.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(T.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:n}}function md(r){const e=new kS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zS(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new md(r),e.set(i,[a])):s>=o.length?(a=new md(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class HS extends Fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=x_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VS extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XS(r,e,t){let n=new Lh;const i=new yt,s=new yt,o=new Tt,a=new HS({depthPacking:y_}),l=new VS,c={},u=t.maxTextureSize,h={[hr]:Hn,[Hn]:hr,[Li]:Li},f=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:GS,fragmentShader:WS}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Gi;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ii(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wp;let m=this.type;this.render=function(L,A,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const b=r.getRenderTarget(),S=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Lr),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const G=m!==ji&&this.type===ji,$=m===ji&&this.type!==ji;for(let ne=0,Z=L.length;ne<Z;ne++){const K=L[ne],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const le=X.getFrameExtents();if(i.multiply(le),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/le.x),i.x=s.x*le.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/le.y),i.y=s.y*le.y,X.mapSize.y=s.y)),X.map===null||G===!0||$===!0){const ye=this.type!==ji?{minFilter:Un,magFilter:Un}:{};X.map!==null&&X.map.dispose(),X.map=new vs(i.x,i.y,ye),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const O=X.getViewportCount();for(let ye=0;ye<O;ye++){const Ie=X.getViewport(ye);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),k.viewport(o),X.updateMatrices(K,ye),n=X.getFrustum(),y(A,D,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===ji&&E(X,D),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,r.setRenderTarget(b,S,N)};function E(L,A){const D=e.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new vs(i.x,i.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(A,null,D,f,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(A,null,D,p,v,null)}function T(L,A,D,b){let S=null;const N=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)S=N;else if(S=D.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=S.uuid,G=A.uuid;let $=c[k];$===void 0&&($={},c[k]=$);let ne=$[G];ne===void 0&&(ne=S.clone(),$[G]=ne,A.addEventListener("dispose",I)),S=ne}if(S.visible=A.visible,S.wireframe=A.wireframe,b===ji?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const k=r.properties.get(S);k.light=D}return S}function y(L,A,D,b,S){if(L.visible===!1)return;if(L.layers.test(A.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===ji)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const G=e.update(L),$=L.material;if(Array.isArray($)){const ne=G.groups;for(let Z=0,K=ne.length;Z<K;Z++){const X=ne[Z],le=$[X.materialIndex];if(le&&le.visible){const O=T(L,le,b,S);L.onBeforeShadow(r,L,A,D,G,O,X),r.renderBufferDirect(D,null,G,O,L,X),L.onAfterShadow(r,L,A,D,G,O,X)}}}else if($.visible){const ne=T(L,$,b,S);L.onBeforeShadow(r,L,A,D,G,ne,null),r.renderBufferDirect(D,null,G,ne,L,null),L.onAfterShadow(r,L,A,D,G,ne,null)}}const k=L.children;for(let G=0,$=k.length;G<$;G++)y(k[G],A,D,b,S)}function I(L){L.target.removeEventListener("dispose",I);for(const D in c){const b=c[D],S=L.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const YS={[cu]:uu,[hu]:pu,[fu]:mu,[ao]:du,[uu]:cu,[pu]:hu,[mu]:fu,[du]:ao};function qS(r,e){function t(){let F=!1;const Q=new Tt;let ee=null;const oe=new Tt(0,0,0,0);return{setMask:function(Me){ee!==Me&&!F&&(r.colorMask(Me,Me,Me,Me),ee=Me)},setLocked:function(Me){F=Me},setClear:function(Me,be,Ze,xt,zt){zt===!0&&(Me*=xt,be*=xt,Ze*=xt),Q.set(Me,be,Ze,xt),oe.equals(Q)===!1&&(r.clearColor(Me,be,Ze,xt),oe.copy(Q))},reset:function(){F=!1,ee=null,oe.set(-1,0,0,0)}}}function n(){let F=!1,Q=!1,ee=null,oe=null,Me=null;return{setReversed:function(be){if(Q!==be){const Ze=e.get("EXT_clip_control");Q?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const xt=Me;Me=null,this.setClear(xt)}Q=be},getReversed:function(){return Q},setTest:function(be){be?fe(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(be){ee!==be&&!F&&(r.depthMask(be),ee=be)},setFunc:function(be){if(Q&&(be=YS[be]),oe!==be){switch(be){case cu:r.depthFunc(r.NEVER);break;case uu:r.depthFunc(r.ALWAYS);break;case hu:r.depthFunc(r.LESS);break;case ao:r.depthFunc(r.LEQUAL);break;case fu:r.depthFunc(r.EQUAL);break;case du:r.depthFunc(r.GEQUAL);break;case pu:r.depthFunc(r.GREATER);break;case mu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}oe=be}},setLocked:function(be){F=be},setClear:function(be){Me!==be&&(Q&&(be=1-be),r.clearDepth(be),Me=be)},reset:function(){F=!1,ee=null,oe=null,Me=null,Q=!1}}}function i(){let F=!1,Q=null,ee=null,oe=null,Me=null,be=null,Ze=null,xt=null,zt=null;return{setTest:function(Re){F||(Re?fe(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(Re){Q!==Re&&!F&&(r.stencilMask(Re),Q=Re)},setFunc:function(Re,Be,tt){(ee!==Re||oe!==Be||Me!==tt)&&(r.stencilFunc(Re,Be,tt),ee=Re,oe=Be,Me=tt)},setOp:function(Re,Be,tt){(be!==Re||Ze!==Be||xt!==tt)&&(r.stencilOp(Re,Be,tt),be=Re,Ze=Be,xt=tt)},setLocked:function(Re){F=Re},setClear:function(Re){zt!==Re&&(r.clearStencil(Re),zt=Re)},reset:function(){F=!1,Q=null,ee=null,oe=null,Me=null,be=null,Ze=null,xt=null,zt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,E=null,T=null,y=null,I=null,L=null,A=new nt(0,0,0),D=0,b=!1,S=null,N=null,k=null,G=null,$=null;const ne=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,K=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=K>=2);let le=null,O={};const ye=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),Xe=new Tt().fromArray(ye),te=new Tt().fromArray(Ie);function ce(F,Q,ee,oe){const Me=new Uint8Array(4),be=r.createTexture();r.bindTexture(F,be),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ze=0;Ze<ee;Ze++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(Q,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Q+Ze,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return be}const he={};he[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),he[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),he[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(r.DEPTH_TEST),o.setFunc(ao),qe(!1),W(mf),fe(r.CULL_FACE),B(Lr);function fe(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function Ce(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function Oe(F,Q){return h[F]!==Q?(r.bindFramebuffer(F,Q),h[F]=Q,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Q),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Q),!0):!1}function Ye(F,Q){let ee=p,oe=!1;if(F){ee=f.get(Q),ee===void 0&&(ee=[],f.set(Q,ee));const Me=F.textures;if(ee.length!==Me.length||ee[0]!==r.COLOR_ATTACHMENT0){for(let be=0,Ze=Me.length;be<Ze;be++)ee[be]=r.COLOR_ATTACHMENT0+be;ee.length=Me.length,oe=!0}}else ee[0]!==r.BACK&&(ee[0]=r.BACK,oe=!0);oe&&r.drawBuffers(ee)}function Qe(F){return _!==F?(r.useProgram(F),_=F,!0):!1}const Ve={[is]:r.FUNC_ADD,[Xg]:r.FUNC_SUBTRACT,[Yg]:r.FUNC_REVERSE_SUBTRACT};Ve[qg]=r.MIN,Ve[Kg]=r.MAX;const ze={[Zg]:r.ZERO,[$g]:r.ONE,[jg]:r.SRC_COLOR,[au]:r.SRC_ALPHA,[i_]:r.SRC_ALPHA_SATURATE,[t_]:r.DST_COLOR,[Qg]:r.DST_ALPHA,[Jg]:r.ONE_MINUS_SRC_COLOR,[lu]:r.ONE_MINUS_SRC_ALPHA,[n_]:r.ONE_MINUS_DST_COLOR,[e_]:r.ONE_MINUS_DST_ALPHA,[r_]:r.CONSTANT_COLOR,[s_]:r.ONE_MINUS_CONSTANT_COLOR,[o_]:r.CONSTANT_ALPHA,[a_]:r.ONE_MINUS_CONSTANT_ALPHA};function B(F,Q,ee,oe,Me,be,Ze,xt,zt,Re){if(F===Lr){v===!0&&(Ce(r.BLEND),v=!1);return}if(v===!1&&(fe(r.BLEND),v=!0),F!==Wg){if(F!==g||Re!==b){if((m!==is||y!==is)&&(r.blendEquation(r.FUNC_ADD),m=is,y=is),Re)switch(F){case $s:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gf:r.blendFunc(r.ONE,r.ONE);break;case _f:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vf:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $s:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gf:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _f:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vf:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,T=null,I=null,L=null,A.set(0,0,0),D=0,g=F,b=Re}return}Me=Me||Q,be=be||ee,Ze=Ze||oe,(Q!==m||Me!==y)&&(r.blendEquationSeparate(Ve[Q],Ve[Me]),m=Q,y=Me),(ee!==E||oe!==T||be!==I||Ze!==L)&&(r.blendFuncSeparate(ze[ee],ze[oe],ze[be],ze[Ze]),E=ee,T=oe,I=be,L=Ze),(xt.equals(A)===!1||zt!==D)&&(r.blendColor(xt.r,xt.g,xt.b,zt),A.copy(xt),D=zt),g=F,b=!1}function bt(F,Q){F.side===Li?Ce(r.CULL_FACE):fe(r.CULL_FACE);let ee=F.side===Hn;Q&&(ee=!ee),qe(ee),F.blending===$s&&F.transparent===!1?B(Lr):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const oe=F.stencilWrite;a.setTest(oe),oe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),pt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function qe(F){S!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),S=F)}function W(F){F!==Vg?(fe(r.CULL_FACE),F!==N&&(F===mf?r.cullFace(r.BACK):F===Gg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),N=F}function Ne(F){F!==k&&(Z&&r.lineWidth(F),k=F)}function pt(F,Q,ee){F?(fe(r.POLYGON_OFFSET_FILL),(G!==Q||$!==ee)&&(r.polygonOffset(Q,ee),G=Q,$=ee)):Ce(r.POLYGON_OFFSET_FILL)}function He(F){F?fe(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function P(F){F===void 0&&(F=r.TEXTURE0+ne-1),le!==F&&(r.activeTexture(F),le=F)}function w(F,Q,ee){ee===void 0&&(le===null?ee=r.TEXTURE0+ne-1:ee=le);let oe=O[ee];oe===void 0&&(oe={type:void 0,texture:void 0},O[ee]=oe),(oe.type!==F||oe.texture!==Q)&&(le!==ee&&(r.activeTexture(ee),le=ee),r.bindTexture(F,Q||he[F]),oe.type=F,oe.texture=Q)}function Y(){const F=O[le];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(F){Xe.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function Pe(F){te.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),te.copy(F))}function Ke(F,Q){let ee=c.get(Q);ee===void 0&&(ee=new WeakMap,c.set(Q,ee));let oe=ee.get(F);oe===void 0&&(oe=r.getUniformBlockIndex(Q,F.name),ee.set(F,oe))}function Fe(F,Q){const oe=c.get(Q).get(F);l.get(Q)!==oe&&(r.uniformBlockBinding(Q,oe,F.__bindingPointIndex),l.set(Q,oe))}function We(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},le=null,O={},h={},f=new WeakMap,p=[],_=null,v=!1,g=null,m=null,E=null,T=null,y=null,I=null,L=null,A=new nt(0,0,0),D=0,b=!1,S=null,N=null,k=null,G=null,$=null,Xe.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:fe,disable:Ce,bindFramebuffer:Oe,drawBuffers:Ye,useProgram:Qe,setBlending:B,setMaterial:bt,setFlipSided:qe,setCullFace:W,setLineWidth:Ne,setPolygonOffset:pt,setScissorTest:He,activeTexture:P,bindTexture:w,unbindTexture:Y,compressedTexImage2D:ae,compressedTexImage3D:se,texImage2D:xe,texImage3D:De,updateUBOMapping:Ke,uniformBlockBinding:Fe,texStorage2D:et,texStorage3D:me,texSubImage2D:re,texSubImage3D:Te,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ee,scissor:Le,viewport:Pe,reset:We}}function gd(r,e,t,n){const i=KS(n);switch(t){case Up:return r*e;case Fp:return r*e;case Bp:return r*e*2;case Ql:return r*e/i.components*i.byteLength;case Ah:return r*e/i.components*i.byteLength;case kp:return r*e*2/i.components*i.byteLength;case Rh:return r*e*2/i.components*i.byteLength;case Op:return r*e*3/i.components*i.byteLength;case ni:return r*e*4/i.components*i.byteLength;case Ch:return r*e*4/i.components*i.byteLength;case Ml:case El:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tl:case bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xu:case Su:return Math.max(r,16)*Math.max(e,8)/4;case vu:case yu:return Math.max(r,8)*Math.max(e,8)/2;case Mu:case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Au:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Cu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Pu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Du:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Bu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wl:case ku:case zu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case zp:case Hu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vu:case Gu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KS(r){switch(r){case fr:case Ip:return{byteLength:1,components:1};case ma:case Dp:case rr:return{byteLength:2,components:1};case bh:case wh:return{byteLength:2,components:4};case _s:case Th:case zn:return{byteLength:4,components:1};case Np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ZS(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new yt,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,w){return p?new OffscreenCanvas(P,w):va("canvas")}function v(P,w,Y){let ae=1;const se=He(P);if((se.width>Y||se.height>Y)&&(ae=Y/Math.max(se.width,se.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const re=Math.floor(ae*se.width),Te=Math.floor(ae*se.height);h===void 0&&(h=_(re,Te));const ve=w?_(re,Te):h;return ve.width=re,ve.height=Te,ve.getContext("2d").drawImage(P,0,0,re,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+re+"x"+Te+")."),ve}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function g(P){return P.generateMipmaps}function m(P){r.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(P,w,Y,ae,se=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let re=w;if(w===r.RED&&(Y===r.FLOAT&&(re=r.R32F),Y===r.HALF_FLOAT&&(re=r.R16F),Y===r.UNSIGNED_BYTE&&(re=r.R8)),w===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.R8UI),Y===r.UNSIGNED_SHORT&&(re=r.R16UI),Y===r.UNSIGNED_INT&&(re=r.R32UI),Y===r.BYTE&&(re=r.R8I),Y===r.SHORT&&(re=r.R16I),Y===r.INT&&(re=r.R32I)),w===r.RG&&(Y===r.FLOAT&&(re=r.RG32F),Y===r.HALF_FLOAT&&(re=r.RG16F),Y===r.UNSIGNED_BYTE&&(re=r.RG8)),w===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.RG8UI),Y===r.UNSIGNED_SHORT&&(re=r.RG16UI),Y===r.UNSIGNED_INT&&(re=r.RG32UI),Y===r.BYTE&&(re=r.RG8I),Y===r.SHORT&&(re=r.RG16I),Y===r.INT&&(re=r.RG32I)),w===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(re=r.RGB16UI),Y===r.UNSIGNED_INT&&(re=r.RGB32UI),Y===r.BYTE&&(re=r.RGB8I),Y===r.SHORT&&(re=r.RGB16I),Y===r.INT&&(re=r.RGB32I)),w===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(re=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(re=r.RGBA16UI),Y===r.UNSIGNED_INT&&(re=r.RGBA32UI),Y===r.BYTE&&(re=r.RGBA8I),Y===r.SHORT&&(re=r.RGBA16I),Y===r.INT&&(re=r.RGBA32I)),w===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(re=r.RGB9_E5),w===r.RGBA){const Te=se?ec:_t.getTransfer(ae);Y===r.FLOAT&&(re=r.RGBA32F),Y===r.HALF_FLOAT&&(re=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(re=Te===Nt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(re=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(re=r.RGB5_A1)}return(re===r.R16F||re===r.R32F||re===r.RG16F||re===r.RG32F||re===r.RGBA16F||re===r.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function y(P,w){let Y;return P?w===null||w===_s||w===ho?Y=r.DEPTH24_STENCIL8:w===zn?Y=r.DEPTH32F_STENCIL8:w===ma&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===_s||w===ho?Y=r.DEPTH_COMPONENT24:w===zn?Y=r.DEPTH_COMPONENT32F:w===ma&&(Y=r.DEPTH_COMPONENT16),Y}function I(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Un&&P.minFilter!==hn?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function L(P){const w=P.target;w.removeEventListener("dispose",L),D(w),w.isVideoTexture&&u.delete(w)}function A(P){const w=P.target;w.removeEventListener("dispose",A),S(w)}function D(P){const w=n.get(P);if(w.__webglInit===void 0)return;const Y=P.source,ae=f.get(Y);if(ae){const se=ae[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(P),Object.keys(ae).length===0&&f.delete(Y)}n.remove(P)}function b(P){const w=n.get(P);r.deleteTexture(w.__webglTexture);const Y=P.source,ae=f.get(Y);delete ae[w.__cacheKey],o.memory.textures--}function S(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let se=0;se<w.__webglFramebuffer[ae].length;se++)r.deleteFramebuffer(w.__webglFramebuffer[ae][se]);else r.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)r.deleteFramebuffer(w.__webglFramebuffer[ae]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=P.textures;for(let ae=0,se=Y.length;ae<se;ae++){const re=n.get(Y[ae]);re.__webglTexture&&(r.deleteTexture(re.__webglTexture),o.memory.textures--),n.remove(Y[ae])}n.remove(P)}let N=0;function k(){N=0}function G(){const P=N;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function $(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function ne(P,w){const Y=n.get(P);if(P.isVideoTexture&&Ne(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(Y,P,w);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+w)}function Z(P,w){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+w)}function K(P,w){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){te(Y,P,w);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+w)}function X(P,w){const Y=n.get(P);if(P.version>0&&Y.__version!==P.version){ce(Y,P,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+w)}const le={[uo]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[Fl]:r.MIRRORED_REPEAT},O={[Un]:r.NEAREST,[Lp]:r.NEAREST_MIPMAP_NEAREST,[Vo]:r.NEAREST_MIPMAP_LINEAR,[hn]:r.LINEAR,[Sl]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},ye={[M_]:r.NEVER,[R_]:r.ALWAYS,[E_]:r.LESS,[Gp]:r.LEQUAL,[T_]:r.EQUAL,[A_]:r.GEQUAL,[b_]:r.GREATER,[w_]:r.NOTEQUAL};function Ie(P,w){if(w.type===zn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===hn||w.magFilter===Sl||w.magFilter===Vo||w.magFilter===Ni||w.minFilter===hn||w.minFilter===Sl||w.minFilter===Vo||w.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,le[w.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,le[w.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,le[w.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,O[w.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,O[w.minFilter]),w.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ye[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Un||w.minFilter!==Vo&&w.minFilter!==Ni||w.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Xe(P,w){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",L));const ae=w.source;let se=f.get(ae);se===void 0&&(se={},f.set(ae,se));const re=$(w);if(re!==P.__cacheKey){se[re]===void 0&&(se[re]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[re].usedTimes++;const Te=se[P.__cacheKey];Te!==void 0&&(se[P.__cacheKey].usedTimes--,Te.usedTimes===0&&b(w)),P.__cacheKey=re,P.__webglTexture=se[re].texture}return Y}function te(P,w,Y){let ae=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=r.TEXTURE_3D);const se=Xe(P,w),re=w.source;t.bindTexture(ae,P.__webglTexture,r.TEXTURE0+Y);const Te=n.get(re);if(re.version!==Te.__version||se===!0){t.activeTexture(r.TEXTURE0+Y);const ve=_t.getPrimaries(_t.workingColorSpace),Ee=w.colorSpace===tr?null:_t.getPrimaries(w.colorSpace),et=w.colorSpace===tr||ve===Ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let me=v(w.image,!1,i.maxTextureSize);me=pt(w,me);const xe=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let Le=T(w.internalFormat,xe,De,w.colorSpace,w.isVideoTexture);Ie(ae,w);let Pe;const Ke=w.mipmaps,Fe=w.isVideoTexture!==!0,We=Te.__version===void 0||se===!0,F=re.dataReady,Q=I(w,me);if(w.isDepthTexture)Le=y(w.format===fo,w.type),We&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,Le,me.width,me.height):t.texImage2D(r.TEXTURE_2D,0,Le,me.width,me.height,0,xe,De,null));else if(w.isDataTexture)if(Ke.length>0){Fe&&We&&t.texStorage2D(r.TEXTURE_2D,Q,Le,Ke[0].width,Ke[0].height);for(let ee=0,oe=Ke.length;ee<oe;ee++)Pe=Ke[ee],Fe?F&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,xe,De,Pe.data):t.texImage2D(r.TEXTURE_2D,ee,Le,Pe.width,Pe.height,0,xe,De,Pe.data);w.generateMipmaps=!1}else Fe?(We&&t.texStorage2D(r.TEXTURE_2D,Q,Le,me.width,me.height),F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me.width,me.height,xe,De,me.data)):t.texImage2D(r.TEXTURE_2D,0,Le,me.width,me.height,0,xe,De,me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Fe&&We&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,Le,Ke[0].width,Ke[0].height,me.depth);for(let ee=0,oe=Ke.length;ee<oe;ee++)if(Pe=Ke[ee],w.format!==ni)if(xe!==null)if(Fe){if(F)if(w.layerUpdates.size>0){const Me=gd(Pe.width,Pe.height,w.format,w.type);for(const be of w.layerUpdates){const Ze=Pe.data.subarray(be*Me/Pe.data.BYTES_PER_ELEMENT,(be+1)*Me/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,be,Pe.width,Pe.height,1,xe,Ze)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,me.depth,xe,Pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Le,Pe.width,Pe.height,me.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,Pe.width,Pe.height,me.depth,xe,De,Pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Le,Pe.width,Pe.height,me.depth,0,xe,De,Pe.data)}else{Fe&&We&&t.texStorage2D(r.TEXTURE_2D,Q,Le,Ke[0].width,Ke[0].height);for(let ee=0,oe=Ke.length;ee<oe;ee++)Pe=Ke[ee],w.format!==ni?xe!==null?Fe?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,xe,Pe.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Le,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?F&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,Pe.width,Pe.height,xe,De,Pe.data):t.texImage2D(r.TEXTURE_2D,ee,Le,Pe.width,Pe.height,0,xe,De,Pe.data)}else if(w.isDataArrayTexture)if(Fe){if(We&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Q,Le,me.width,me.height,me.depth),F)if(w.layerUpdates.size>0){const ee=gd(me.width,me.height,w.format,w.type);for(const oe of w.layerUpdates){const Me=me.data.subarray(oe*ee/me.data.BYTES_PER_ELEMENT,(oe+1)*ee/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,oe,me.width,me.height,1,xe,De,Me)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,xe,De,me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Le,me.width,me.height,me.depth,0,xe,De,me.data);else if(w.isData3DTexture)Fe?(We&&t.texStorage3D(r.TEXTURE_3D,Q,Le,me.width,me.height,me.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,xe,De,me.data)):t.texImage3D(r.TEXTURE_3D,0,Le,me.width,me.height,me.depth,0,xe,De,me.data);else if(w.isFramebufferTexture){if(We)if(Fe)t.texStorage2D(r.TEXTURE_2D,Q,Le,me.width,me.height);else{let ee=me.width,oe=me.height;for(let Me=0;Me<Q;Me++)t.texImage2D(r.TEXTURE_2D,Me,Le,ee,oe,0,xe,De,null),ee>>=1,oe>>=1}}else if(Ke.length>0){if(Fe&&We){const ee=He(Ke[0]);t.texStorage2D(r.TEXTURE_2D,Q,Le,ee.width,ee.height)}for(let ee=0,oe=Ke.length;ee<oe;ee++)Pe=Ke[ee],Fe?F&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,xe,De,Pe):t.texImage2D(r.TEXTURE_2D,ee,Le,xe,De,Pe);w.generateMipmaps=!1}else if(Fe){if(We){const ee=He(me);t.texStorage2D(r.TEXTURE_2D,Q,Le,ee.width,ee.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,xe,De,me)}else t.texImage2D(r.TEXTURE_2D,0,Le,xe,De,me);g(w)&&m(ae),Te.__version=re.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ce(P,w,Y){if(w.image.length!==6)return;const ae=Xe(P,w),se=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const re=n.get(se);if(se.version!==re.__version||ae===!0){t.activeTexture(r.TEXTURE0+Y);const Te=_t.getPrimaries(_t.workingColorSpace),ve=w.colorSpace===tr?null:_t.getPrimaries(w.colorSpace),Ee=w.colorSpace===tr||Te===ve?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const et=w.isCompressedTexture||w.image[0].isCompressedTexture,me=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!et&&!me?xe[oe]=v(w.image[oe],!0,i.maxCubemapSize):xe[oe]=me?w.image[oe].image:w.image[oe],xe[oe]=pt(w,xe[oe]);const De=xe[0],Le=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type),Ke=T(w.internalFormat,Le,Pe,w.colorSpace),Fe=w.isVideoTexture!==!0,We=re.__version===void 0||ae===!0,F=se.dataReady;let Q=I(w,De);Ie(r.TEXTURE_CUBE_MAP,w);let ee;if(et){Fe&&We&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Q,Ke,De.width,De.height);for(let oe=0;oe<6;oe++){ee=xe[oe].mipmaps;for(let Me=0;Me<ee.length;Me++){const be=ee[Me];w.format!==ni?Le!==null?Fe?F&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,be.width,be.height,Le,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,Ke,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,be.width,be.height,Le,Pe,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,Ke,be.width,be.height,0,Le,Pe,be.data)}}}else{if(ee=w.mipmaps,Fe&&We){ee.length>0&&Q++;const oe=He(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Q,Ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Le,Pe,xe[oe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ke,xe[oe].width,xe[oe].height,0,Le,Pe,xe[oe].data);for(let Me=0;Me<ee.length;Me++){const Ze=ee[Me].image[oe].image;Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Ze.width,Ze.height,Le,Pe,Ze.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,Ke,Ze.width,Ze.height,0,Le,Pe,Ze.data)}}else{Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Le,Pe,xe[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ke,Le,Pe,xe[oe]);for(let Me=0;Me<ee.length;Me++){const be=ee[Me];Fe?F&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Le,Pe,be.image[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,Ke,Le,Pe,be.image[oe])}}}g(w)&&m(r.TEXTURE_CUBE_MAP),re.__version=se.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function he(P,w,Y,ae,se,re){const Te=s.convert(Y.format,Y.colorSpace),ve=s.convert(Y.type),Ee=T(Y.internalFormat,Te,ve,Y.colorSpace),et=n.get(w),me=n.get(Y);if(me.__renderTarget=w,!et.__hasExternalTextures){const xe=Math.max(1,w.width>>re),De=Math.max(1,w.height>>re);se===r.TEXTURE_3D||se===r.TEXTURE_2D_ARRAY?t.texImage3D(se,re,Ee,xe,De,w.depth,0,Te,ve,null):t.texImage2D(se,re,Ee,xe,De,0,Te,ve,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),W(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,se,me.__webglTexture,0,qe(w)):(se===r.TEXTURE_2D||se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,se,me.__webglTexture,re),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(P,w,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),w.depthBuffer){const ae=w.depthTexture,se=ae&&ae.isDepthTexture?ae.type:null,re=y(w.stencilBuffer,se),Te=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=qe(w);W(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ve,re,w.width,w.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,re,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,re,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,P)}else{const ae=w.textures;for(let se=0;se<ae.length;se++){const re=ae[se],Te=s.convert(re.format,re.colorSpace),ve=s.convert(re.type),Ee=T(re.internalFormat,Te,ve,re.colorSpace),et=qe(w);Y&&W(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,Ee,w.width,w.height):W(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,Ee,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(w.depthTexture);ae.__renderTarget=w,(!ae.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ne(w.depthTexture,0);const se=ae.__webglTexture,re=qe(w);if(w.depthTexture.format===js)W(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(w.depthTexture.format===fo)W(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const w=n.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",se)};ae.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=ae}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ce(w.__webglFramebuffer,P)}else if(Y){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=r.createRenderbuffer(),fe(w.__webglDepthbuffer[ae],P,!1);else{const se=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,re),r.framebufferRenderbuffer(r.FRAMEBUFFER,se,r.RENDERBUFFER,re)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),fe(w.__webglDepthbuffer,P,!1);else{const ae=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,se)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(P,w,Y){const ae=n.get(P);w!==void 0&&he(ae.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Oe(P)}function Qe(P){const w=P.texture,Y=n.get(P),ae=n.get(w);P.addEventListener("dispose",A);const se=P.textures,re=P.isWebGLCubeRenderTarget===!0,Te=se.length>1;if(Te||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=w.version,o.memory.textures++),re){Y.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[ve]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)Y.__webglFramebuffer[ve][Ee]=r.createFramebuffer()}else Y.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let ve=0;ve<w.mipmaps.length;ve++)Y.__webglFramebuffer[ve]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Te)for(let ve=0,Ee=se.length;ve<Ee;ve++){const et=n.get(se[ve]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&W(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let ve=0;ve<se.length;ve++){const Ee=se[ve];Y.__webglColorRenderbuffer[ve]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[ve]);const et=s.convert(Ee.format,Ee.colorSpace),me=s.convert(Ee.type),xe=T(Ee.internalFormat,et,me,Ee.colorSpace,P.isXRRenderTarget===!0),De=qe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,xe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,Y.__webglColorRenderbuffer[ve])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(re){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,w);for(let ve=0;ve<6;ve++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)he(Y.__webglFramebuffer[ve][Ee],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ee);else he(Y.__webglFramebuffer[ve],P,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);g(w)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ve=0,Ee=se.length;ve<Ee;ve++){const et=se[ve],me=n.get(et);t.bindTexture(r.TEXTURE_2D,me.__webglTexture),Ie(r.TEXTURE_2D,et),he(Y.__webglFramebuffer,P,et,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,0),g(et)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ve=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,ae.__webglTexture),Ie(ve,w),w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)he(Y.__webglFramebuffer[Ee],P,w,r.COLOR_ATTACHMENT0,ve,Ee);else he(Y.__webglFramebuffer,P,w,r.COLOR_ATTACHMENT0,ve,0);g(w)&&m(ve),t.unbindTexture()}P.depthBuffer&&Oe(P)}function Ve(P){const w=P.textures;for(let Y=0,ae=w.length;Y<ae;Y++){const se=w[Y];if(g(se)){const re=E(P),Te=n.get(se).__webglTexture;t.bindTexture(re,Te),m(re),t.unbindTexture()}}}const ze=[],B=[];function bt(P){if(P.samples>0){if(W(P)===!1){const w=P.textures,Y=P.width,ae=P.height;let se=r.COLOR_BUFFER_BIT;const re=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Te=n.get(P),ve=w.length>1;if(ve)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=r.STENCIL_BUFFER_BIT)),ve){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const et=n.get(w[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,Y,ae,0,0,Y,ae,se,r.NEAREST),l===!0&&(ze.length=0,B.length=0,ze.push(r.COLOR_ATTACHMENT0+Ee),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ze.push(re),B.push(re),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,B)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ve)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,Te.__webglColorRenderbuffer[Ee]);const et=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,et,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function qe(P){return Math.min(i.maxSamples,P.samples)}function W(P){const w=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(P){const w=o.render.frame;u.get(P)!==w&&(u.set(P,w),P.update())}function pt(P,w){const Y=P.colorSpace,ae=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==_n&&Y!==tr&&(_t.getTransfer(Y)===Nt?(ae!==ni||se!==fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function He(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=ne,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=Ye,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=W}function $S(r,e){function t(n,i=tr){let s;const o=_t.getTransfer(i);if(n===fr)return r.UNSIGNED_BYTE;if(n===bh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===wh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Np)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ip)return r.BYTE;if(n===Dp)return r.SHORT;if(n===ma)return r.UNSIGNED_SHORT;if(n===Th)return r.INT;if(n===_s)return r.UNSIGNED_INT;if(n===zn)return r.FLOAT;if(n===rr)return r.HALF_FLOAT;if(n===Up)return r.ALPHA;if(n===Op)return r.RGB;if(n===ni)return r.RGBA;if(n===Fp)return r.LUMINANCE;if(n===Bp)return r.LUMINANCE_ALPHA;if(n===js)return r.DEPTH_COMPONENT;if(n===fo)return r.DEPTH_STENCIL;if(n===Ql)return r.RED;if(n===Ah)return r.RED_INTEGER;if(n===kp)return r.RG;if(n===Rh)return r.RG_INTEGER;if(n===Ch)return r.RGBA_INTEGER;if(n===Ml||n===El||n===Tl||n===bl)if(o===Nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vu||n===xu||n===yu||n===Su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mu||n===Eu||n===Tu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mu||n===Eu)return o===Nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bu||n===wu||n===Au||n===Ru||n===Cu||n===Pu||n===Lu||n===Iu||n===Du||n===Nu||n===Uu||n===Ou||n===Fu||n===Bu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Au)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ru)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Iu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Du)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ou)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bu)return o===Nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wl||n===ku||n===zu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wl)return o===Nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zp||n===Hu||n===Vu||n===Gu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ho?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class jS extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class or extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JS={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const QS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new fn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Or({vertexShader:QS,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ii(new nc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends wo{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,_=null;const v=new tM,g=t.getContextAttributes();let m=null,E=null;const T=[],y=[],I=new yt;let L=null;const A=new Dn;A.viewport=new Tt;const D=new Dn;D.viewport=new Tt;const b=[A,D],S=new jS;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=T[te];return ce===void 0&&(ce=new Oc,T[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=T[te];return ce===void 0&&(ce=new Oc,T[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=T[te];return ce===void 0&&(ce=new Oc,T[te]=ce),ce.getHandSpace()};function G(te){const ce=y.indexOf(te.inputSource);if(ce===-1)return;const he=T[ce];he!==void 0&&(he.update(te.inputSource,te.frame,c||o),he.dispatchEvent({type:te.type,data:te.inputSource}))}function $(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",$),i.removeEventListener("inputsourceschange",ne);for(let te=0;te<T.length;te++){const ce=y[te];ce!==null&&(y[te]=null,T[te].disconnect(ce))}N=null,k=null,v.reset(),e.setRenderTarget(m),p=null,f=null,h=null,i=null,E=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",$),i.addEventListener("inputsourceschange",ne),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new vs(p.framebufferWidth,p.framebufferHeight,{format:ni,type:fr,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,he=null,fe=null;g.depth&&(fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?fo:js,he=g.stencil?ho:_s);const Ce={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new vs(f.textureWidth,f.textureHeight,{format:ni,type:fr,depthTexture:new tm(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(te){for(let ce=0;ce<te.removed.length;ce++){const he=te.removed[ce],fe=y.indexOf(he);fe>=0&&(y[fe]=null,T[fe].disconnect(he))}for(let ce=0;ce<te.added.length;ce++){const he=te.added[ce];let fe=y.indexOf(he);if(fe===-1){for(let Oe=0;Oe<T.length;Oe++)if(Oe>=y.length){y.push(he),fe=Oe;break}else if(y[Oe]===null){y[Oe]=he,fe=Oe;break}if(fe===-1)break}const Ce=T[fe];Ce&&Ce.connect(he)}}const Z=new H,K=new H;function X(te,ce,he){Z.setFromMatrixPosition(ce.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);const fe=Z.distanceTo(K),Ce=ce.projectionMatrix.elements,Oe=he.projectionMatrix.elements,Ye=Ce[14]/(Ce[10]-1),Qe=Ce[14]/(Ce[10]+1),Ve=(Ce[9]+1)/Ce[5],ze=(Ce[9]-1)/Ce[5],B=(Ce[8]-1)/Ce[0],bt=(Oe[8]+1)/Oe[0],qe=Ye*B,W=Ye*bt,Ne=fe/(-B+bt),pt=Ne*-B;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(pt),te.translateZ(Ne),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ce[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const He=Ye+Ne,P=Qe+Ne,w=qe-pt,Y=W+(fe-pt),ae=Ve*Qe/P*He,se=ze*Qe/P*He;te.projectionMatrix.makePerspective(w,Y,ae,se,He,P),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function le(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let ce=te.near,he=te.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(he=v.depthFar)),S.near=D.near=A.near=ce,S.far=D.far=A.far=he,(N!==S.near||k!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,k=S.far),A.layers.mask=te.layers.mask|2,D.layers.mask=te.layers.mask|4,S.layers.mask=A.layers.mask|D.layers.mask;const fe=te.parent,Ce=S.cameras;le(S,fe);for(let Oe=0;Oe<Ce.length;Oe++)le(Ce[Oe],fe);Ce.length===2?X(S,A,D):S.projectionMatrix.copy(A.projectionMatrix),O(te,S,fe)};function O(te,ce,he){he===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(he.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=po*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ye=null;function Ie(te,ce){if(u=ce.getViewerPose(c||o),_=ce,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let fe=!1;he.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Oe=0;Oe<he.length;Oe++){const Ye=he[Oe];let Qe=null;if(p!==null)Qe=p.getViewport(Ye);else{const ze=h.getViewSubImage(f,Ye);Qe=ze.viewport,Oe===0&&(e.setRenderTargetTextures(E,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(E))}let Ve=b[Oe];Ve===void 0&&(Ve=new Dn,Ve.layers.enable(Oe),Ve.viewport=new Tt,b[Oe]=Ve),Ve.matrix.fromArray(Ye.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ye.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Oe===0&&(S.matrix.copy(Ve.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(Ve)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Oe=h.getDepthInformation(he[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,i.renderState)}}for(let he=0;he<T.length;he++){const fe=y[he],Ce=T[he];fe!==null&&Ce!==void 0&&Ce.update(fe,ce,c||o)}ye&&ye(te,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),_=null}const Xe=new em;Xe.setAnimationLoop(Ie),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const Kr=new ki,iM=new rt;function rM(r,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,jp(r)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,E,T,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),_(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,E,T):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const E=e.get(m),T=E.envMap,y=E.envMapRotation;T&&(g.envMap.value=T,Kr.copy(y),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),g.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Kr)),g.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,E,T){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=T*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sM(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const y=T.program;n.uniformBlockBinding(E,y)}function c(E,T){let y=i[E.id];y===void 0&&(_(E),y=u(E),i[E.id]=y,E.addEventListener("dispose",g));const I=T.program;n.updateUBOMapping(E,I);const L=e.render.frame;s[E.id]!==L&&(f(E),s[E.id]=L)}function u(E){const T=h();E.__bindingPointIndex=T;const y=r.createBuffer(),I=E.__size,L=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,I,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,y),y}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const T=i[E.id],y=E.uniforms,I=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let L=0,A=y.length;L<A;L++){const D=Array.isArray(y[L])?y[L]:[y[L]];for(let b=0,S=D.length;b<S;b++){const N=D[b];if(p(N,L,b,I)===!0){const k=N.__offset,G=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let ne=0;ne<G.length;ne++){const Z=G[ne],K=v(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,k+$,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,$),$+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(E,T,y,I){const L=E.value,A=T+"_"+y;if(I[A]===void 0)return typeof L=="number"||typeof L=="boolean"?I[A]=L:I[A]=L.clone(),!0;{const D=I[A];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return I[A]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function _(E){const T=E.uniforms;let y=0;const I=16;for(let A=0,D=T.length;A<D;A++){const b=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,N=b.length;S<N;S++){const k=b[S],G=Array.isArray(k.value)?k.value:[k.value];for(let $=0,ne=G.length;$<ne;$++){const Z=G[$],K=v(Z),X=y%I,le=X%K.boundary,O=X+le;y+=le,O!==0&&I-O<K.storage&&(y+=I-O),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=K.storage}}}const L=y%I;return L>0&&(y+=I-L),E.__size=y,E.__cache={},this}function v(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function g(E){const T=E.target;T.removeEventListener("dispose",g);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function m(){for(const E in i)r.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class oM{constructor(e={}){const{canvas:t=X_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=Ir,this.toneMappingExposure=1;const y=this;let I=!1,L=0,A=0,D=null,b=-1,S=null;const N=new Tt,k=new Tt;let G=null;const $=new nt(0);let ne=0,Z=t.width,K=t.height,X=1,le=null,O=null;const ye=new Tt(0,0,Z,K),Ie=new Tt(0,0,Z,K);let Xe=!1;const te=new Lh;let ce=!1,he=!1;const fe=new rt,Ce=new rt,Oe=new H,Ye=new Tt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ze(){return D===null?X:1}let B=n;function bt(d,x){return t.getContext(d,x)}try{const d={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eh}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",be,!1),B===null){const x="webgl2";if(B=bt(x,d),B===null)throw bt(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(d){throw console.error("THREE.WebGLRenderer: "+d.message),d}let qe,W,Ne,pt,He,P,w,Y,ae,se,re,Te,ve,Ee,et,me,xe,De,Le,Pe,Ke,Fe,We,F;function Q(){qe=new hy(B),qe.init(),Fe=new $S(B,qe),W=new sy(B,qe,e,Fe),Ne=new qS(B,qe),W.reverseDepthBuffer&&f&&Ne.buffers.depth.setReversed(!0),pt=new py(B),He=new IS,P=new ZS(B,qe,Ne,He,W,Fe,pt),w=new ay(y),Y=new uy(y),ae=new S0(B),We=new iy(B,ae),se=new fy(B,ae,pt,We),re=new gy(B,se,ae,pt),Le=new my(B,W,P),me=new oy(He),Te=new LS(y,w,Y,qe,W,We,me),ve=new rM(y,He),Ee=new NS,et=new zS(qe),De=new ny(y,w,Y,Ne,re,p,l),xe=new XS(y,re,W),F=new sM(B,pt,W,Ne),Pe=new ry(B,qe,pt),Ke=new dy(B,qe,pt),pt.programs=Te.programs,y.capabilities=W,y.extensions=qe,y.properties=He,y.renderLists=Ee,y.shadowMap=xe,y.state=Ne,y.info=pt}Q();const ee=new nM(y,B);this.xr=ee,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const d=qe.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=qe.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(d){d!==void 0&&(X=d,this.setSize(Z,K,!1))},this.getSize=function(d){return d.set(Z,K)},this.setSize=function(d,x,M=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=d,K=x,t.width=Math.floor(d*X),t.height=Math.floor(x*X),M===!0&&(t.style.width=d+"px",t.style.height=x+"px"),this.setViewport(0,0,d,x)},this.getDrawingBufferSize=function(d){return d.set(Z*X,K*X).floor()},this.setDrawingBufferSize=function(d,x,M){Z=d,K=x,X=M,t.width=Math.floor(d*M),t.height=Math.floor(x*M),this.setViewport(0,0,d,x)},this.getCurrentViewport=function(d){return d.copy(N)},this.getViewport=function(d){return d.copy(ye)},this.setViewport=function(d,x,M,R){d.isVector4?ye.set(d.x,d.y,d.z,d.w):ye.set(d,x,M,R),Ne.viewport(N.copy(ye).multiplyScalar(X).round())},this.getScissor=function(d){return d.copy(Ie)},this.setScissor=function(d,x,M,R){d.isVector4?Ie.set(d.x,d.y,d.z,d.w):Ie.set(d,x,M,R),Ne.scissor(k.copy(Ie).multiplyScalar(X).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(d){Ne.setScissorTest(Xe=d)},this.setOpaqueSort=function(d){le=d},this.setTransparentSort=function(d){O=d},this.getClearColor=function(d){return d.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(d=!0,x=!0,M=!0){let R=0;if(d){let C=!1;if(D!==null){const U=D.texture.format;C=U===Ch||U===Rh||U===Ah}if(C){const U=D.texture.type,z=U===fr||U===_s||U===ma||U===ho||U===bh||U===wh,q=De.getClearColor(),V=De.getClearAlpha(),j=q.r,J=q.g,ie=q.b;z?(_[0]=j,_[1]=J,_[2]=ie,_[3]=V,B.clearBufferuiv(B.COLOR,0,_)):(v[0]=j,v[1]=J,v[2]=ie,v[3]=V,B.clearBufferiv(B.COLOR,0,v))}else R|=B.COLOR_BUFFER_BIT}x&&(R|=B.DEPTH_BUFFER_BIT),M&&(R|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ee.dispose(),et.dispose(),He.dispose(),w.dispose(),Y.dispose(),re.dispose(),We.dispose(),F.dispose(),Te.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",we),ee.removeEventListener("sessionend",je),ke.stop()};function oe(d){d.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const d=pt.autoReset,x=xe.enabled,M=xe.autoUpdate,R=xe.needsUpdate,C=xe.type;Q(),pt.autoReset=d,xe.enabled=x,xe.autoUpdate=M,xe.needsUpdate=R,xe.type=C}function be(d){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function Ze(d){const x=d.target;x.removeEventListener("dispose",Ze),xt(x)}function xt(d){zt(d),He.remove(d)}function zt(d){const x=He.get(d).programs;x!==void 0&&(x.forEach(function(M){Te.releaseProgram(M)}),d.isShaderMaterial&&Te.releaseShaderCache(d))}this.renderBufferDirect=function(d,x,M,R,C,U){x===null&&(x=Qe);const z=C.isMesh&&C.matrixWorld.determinant()<0,q=bn(d,x,M,R,C);Ne.setMaterial(R,z);let V=M.index,j=1;if(R.wireframe===!0){if(V=se.getWireframeAttribute(M),V===void 0)return;j=2}const J=M.drawRange,ie=M.attributes.position;let ue=J.start*j,de=(J.start+J.count)*j;U!==null&&(ue=Math.max(ue,U.start*j),de=Math.min(de,(U.start+U.count)*j)),V!==null?(ue=Math.max(ue,0),de=Math.min(de,V.count)):ie!=null&&(ue=Math.max(ue,0),de=Math.min(de,ie.count));const Se=de-ue;if(Se<0||Se===1/0)return;We.setup(C,R,q,M,V);let ge,_e=Pe;if(V!==null&&(ge=ae.get(V),_e=Ke,_e.setIndex(ge)),C.isMesh)R.wireframe===!0?(Ne.setLineWidth(R.wireframeLinewidth*ze()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(C.isLine){let pe=R.linewidth;pe===void 0&&(pe=1),Ne.setLineWidth(pe*ze()),C.isLineSegments?_e.setMode(B.LINES):C.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else C.isPoints?_e.setMode(B.POINTS):C.isSprite&&_e.setMode(B.TRIANGLES);if(C.isBatchedMesh)if(C._multiDrawInstances!==null)_e.renderMultiDrawInstances(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount,C._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))_e.renderMultiDraw(C._multiDrawStarts,C._multiDrawCounts,C._multiDrawCount);else{const pe=C._multiDrawStarts,ut=C._multiDrawCounts,Ge=C._multiDrawCount,Ft=V?ae.get(V).bytesPerElement:1,Et=He.get(R).currentProgram.getUniforms();for(let Je=0;Je<Ge;Je++)Et.setValue(B,"_gl_DrawID",Je),_e.render(pe[Je]/Ft,ut[Je])}else if(C.isInstancedMesh)_e.renderInstances(ue,Se,C.count);else if(M.isInstancedBufferGeometry){const pe=M._maxInstanceCount!==void 0?M._maxInstanceCount:1/0,ut=Math.min(M.instanceCount,pe);_e.renderInstances(ue,Se,ut)}else _e.render(ue,Se)};function Re(d,x,M){d.transparent===!0&&d.side===Li&&d.forceSinglePass===!1?(d.side=Hn,d.needsUpdate=!0,Rt(d,x,M),d.side=hr,d.needsUpdate=!0,Rt(d,x,M),d.side=Li):Rt(d,x,M)}this.compile=function(d,x,M=null){M===null&&(M=d),m=et.get(M),m.init(x),T.push(m),M.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),d!==M&&d.traverseVisible(function(C){C.isLight&&C.layers.test(x.layers)&&(m.pushLight(C),C.castShadow&&m.pushShadow(C))}),m.setupLights();const R=new Set;return d.traverse(function(C){if(!(C.isMesh||C.isPoints||C.isLine||C.isSprite))return;const U=C.material;if(U)if(Array.isArray(U))for(let z=0;z<U.length;z++){const q=U[z];Re(q,M,C),R.add(q)}else Re(U,M,C),R.add(U)}),T.pop(),m=null,R},this.compileAsync=function(d,x,M=null){const R=this.compile(d,x,M);return new Promise(C=>{function U(){if(R.forEach(function(z){He.get(z).currentProgram.isReady()&&R.delete(z)}),R.size===0){C(d);return}setTimeout(U,10)}qe.get("KHR_parallel_shader_compile")!==null?U():setTimeout(U,10)})};let Be=null;function tt(d){Be&&Be(d)}function we(){ke.stop()}function je(){ke.start()}const ke=new em;ke.setAnimationLoop(tt),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(d){Be=d,ee.setAnimationLoop(d),d===null?ke.stop():ke.start()},ee.addEventListener("sessionstart",we),ee.addEventListener("sessionend",je),this.render=function(d,x){if(x!==void 0&&x.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(x),x=ee.getCamera()),d.isScene===!0&&d.onBeforeRender(y,d,x,D),m=et.get(d,T.length),m.init(x),T.push(m),Ce.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),te.setFromProjectionMatrix(Ce),he=this.localClippingEnabled,ce=me.init(this.clippingPlanes,he),g=Ee.get(d,E.length),g.init(),E.push(g),ee.enabled===!0&&ee.isPresenting===!0){const U=y.xr.getDepthSensingMesh();U!==null&&$e(U,x,-1/0,y.sortObjects)}$e(d,x,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(le,O),Ve=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ve&&De.addToRenderList(g,d),this.info.render.frame++,ce===!0&&me.beginShadows();const M=m.state.shadowsArray;xe.render(M,d,x),ce===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const R=g.opaque,C=g.transmissive;if(m.setupLights(),x.isArrayCamera){const U=x.cameras;if(C.length>0)for(let z=0,q=U.length;z<q;z++){const V=U[z];st(R,C,d,V)}Ve&&De.render(d);for(let z=0,q=U.length;z<q;z++){const V=U[z];Ht(g,d,V,V.viewport)}}else C.length>0&&st(R,C,d,x),Ve&&De.render(d),Ht(g,d,x);D!==null&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),d.isScene===!0&&d.onAfterRender(y,d,x),We.resetDefaultState(),b=-1,S=null,T.pop(),T.length>0?(m=T[T.length-1],ce===!0&&me.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,E.pop(),E.length>0?g=E[E.length-1]:g=null};function $e(d,x,M,R){if(d.visible===!1)return;if(d.layers.test(x.layers)){if(d.isGroup)M=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(x);else if(d.isLight)m.pushLight(d),d.castShadow&&m.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||te.intersectsSprite(d)){R&&Ye.setFromMatrixPosition(d.matrixWorld).applyMatrix4(Ce);const z=re.update(d),q=d.material;q.visible&&g.push(d,z,q,M,Ye.z,null)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||te.intersectsObject(d))){const z=re.update(d),q=d.material;if(R&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),Ye.copy(d.boundingSphere.center)):(z.boundingSphere===null&&z.computeBoundingSphere(),Ye.copy(z.boundingSphere.center)),Ye.applyMatrix4(d.matrixWorld).applyMatrix4(Ce)),Array.isArray(q)){const V=z.groups;for(let j=0,J=V.length;j<J;j++){const ie=V[j],ue=q[ie.materialIndex];ue&&ue.visible&&g.push(d,z,ue,M,Ye.z,ie)}}else q.visible&&g.push(d,z,q,M,Ye.z,null)}}const U=d.children;for(let z=0,q=U.length;z<q;z++)$e(U[z],x,M,R)}function Ht(d,x,M,R){const C=d.opaque,U=d.transmissive,z=d.transparent;m.setupLightsView(M),ce===!0&&me.setGlobalState(y.clippingPlanes,M),R&&Ne.viewport(N.copy(R)),C.length>0&&Dt(C,x,M),U.length>0&&Dt(U,x,M),z.length>0&&Dt(z,x,M),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function st(d,x,M,R){if((M.isScene===!0?M.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[R.id]===void 0&&(m.state.transmissionRenderTarget[R.id]=new vs(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?rr:fr,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const U=m.state.transmissionRenderTarget[R.id],z=R.viewport||N;U.setSize(z.z,z.w);const q=y.getRenderTarget();y.setRenderTarget(U),y.getClearColor($),ne=y.getClearAlpha(),ne<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&De.render(M);const V=y.toneMapping;y.toneMapping=Ir;const j=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),m.setupLightsView(R),ce===!0&&me.setGlobalState(y.clippingPlanes,R),Dt(d,M,R),P.updateMultisampleRenderTarget(U),P.updateRenderTargetMipmap(U),qe.has("WEBGL_multisampled_render_to_texture")===!1){let J=!1;for(let ie=0,ue=x.length;ie<ue;ie++){const de=x[ie],Se=de.object,ge=de.geometry,_e=de.material,pe=de.group;if(_e.side===Li&&Se.layers.test(R.layers)){const ut=_e.side;_e.side=Hn,_e.needsUpdate=!0,Zt(Se,M,R,ge,_e,pe),_e.side=ut,_e.needsUpdate=!0,J=!0}}J===!0&&(P.updateMultisampleRenderTarget(U),P.updateRenderTargetMipmap(U))}y.setRenderTarget(q),y.setClearColor($,ne),j!==void 0&&(R.viewport=j),y.toneMapping=V}function Dt(d,x,M){const R=x.isScene===!0?x.overrideMaterial:null;for(let C=0,U=d.length;C<U;C++){const z=d[C],q=z.object,V=z.geometry,j=R===null?z.material:R,J=z.group;q.layers.test(M.layers)&&Zt(q,x,M,V,j,J)}}function Zt(d,x,M,R,C,U){d.onBeforeRender(y,x,M,R,C,U),d.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),C.onBeforeRender(y,x,M,R,d,U),C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Hn,C.needsUpdate=!0,y.renderBufferDirect(M,x,R,C,d,U),C.side=hr,C.needsUpdate=!0,y.renderBufferDirect(M,x,R,C,d,U),C.side=Li):y.renderBufferDirect(M,x,R,C,d,U),d.onAfterRender(y,x,M,R,C,U)}function Rt(d,x,M){x.isScene!==!0&&(x=Qe);const R=He.get(d),C=m.state.lights,U=m.state.shadowsArray,z=C.state.version,q=Te.getParameters(d,C.state,U,x,M),V=Te.getProgramCacheKey(q);let j=R.programs;R.environment=d.isMeshStandardMaterial?x.environment:null,R.fog=x.fog,R.envMap=(d.isMeshStandardMaterial?Y:w).get(d.envMap||R.environment),R.envMapRotation=R.environment!==null&&d.envMap===null?x.environmentRotation:d.envMapRotation,j===void 0&&(d.addEventListener("dispose",Ze),j=new Map,R.programs=j);let J=j.get(V);if(J!==void 0){if(R.currentProgram===J&&R.lightsStateVersion===z)return St(d,q),J}else q.uniforms=Te.getUniforms(d),d.onBeforeCompile(q,y),J=Te.acquireProgram(q,V),j.set(V,J),R.uniforms=q.uniforms;const ie=R.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(ie.clippingPlanes=me.uniform),St(d,q),R.needsLights=qt(d),R.lightsStateVersion=z,R.needsLights&&(ie.ambientLightColor.value=C.state.ambient,ie.lightProbe.value=C.state.probe,ie.directionalLights.value=C.state.directional,ie.directionalLightShadows.value=C.state.directionalShadow,ie.spotLights.value=C.state.spot,ie.spotLightShadows.value=C.state.spotShadow,ie.rectAreaLights.value=C.state.rectArea,ie.ltc_1.value=C.state.rectAreaLTC1,ie.ltc_2.value=C.state.rectAreaLTC2,ie.pointLights.value=C.state.point,ie.pointLightShadows.value=C.state.pointShadow,ie.hemisphereLights.value=C.state.hemi,ie.directionalShadowMap.value=C.state.directionalShadowMap,ie.directionalShadowMatrix.value=C.state.directionalShadowMatrix,ie.spotShadowMap.value=C.state.spotShadowMap,ie.spotLightMatrix.value=C.state.spotLightMatrix,ie.spotLightMap.value=C.state.spotLightMap,ie.pointShadowMap.value=C.state.pointShadowMap,ie.pointShadowMatrix.value=C.state.pointShadowMatrix),R.currentProgram=J,R.uniformsList=null,J}function wt(d){if(d.uniformsList===null){const x=d.currentProgram.getUniforms();d.uniformsList=Al.seqWithValue(x.seq,d.uniforms)}return d.uniformsList}function St(d,x){const M=He.get(d);M.outputColorSpace=x.outputColorSpace,M.batching=x.batching,M.batchingColor=x.batchingColor,M.instancing=x.instancing,M.instancingColor=x.instancingColor,M.instancingMorph=x.instancingMorph,M.skinning=x.skinning,M.morphTargets=x.morphTargets,M.morphNormals=x.morphNormals,M.morphColors=x.morphColors,M.morphTargetsCount=x.morphTargetsCount,M.numClippingPlanes=x.numClippingPlanes,M.numIntersection=x.numClipIntersection,M.vertexAlphas=x.vertexAlphas,M.vertexTangents=x.vertexTangents,M.toneMapping=x.toneMapping}function bn(d,x,M,R,C){x.isScene!==!0&&(x=Qe),P.resetTextureUnits();const U=x.fog,z=R.isMeshStandardMaterial?x.environment:null,q=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:_n,V=(R.isMeshStandardMaterial?Y:w).get(R.envMap||z),j=R.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,J=!!M.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),ie=!!M.morphAttributes.position,ue=!!M.morphAttributes.normal,de=!!M.morphAttributes.color;let Se=Ir;R.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Se=y.toneMapping);const ge=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,_e=ge!==void 0?ge.length:0,pe=He.get(R),ut=m.state.lights;if(ce===!0&&(he===!0||d!==S)){const lt=d===S&&R.id===b;me.setState(R,d,lt)}let Ge=!1;R.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==ut.state.version||pe.outputColorSpace!==q||C.isBatchedMesh&&pe.batching===!1||!C.isBatchedMesh&&pe.batching===!0||C.isBatchedMesh&&pe.batchingColor===!0&&C.colorTexture===null||C.isBatchedMesh&&pe.batchingColor===!1&&C.colorTexture!==null||C.isInstancedMesh&&pe.instancing===!1||!C.isInstancedMesh&&pe.instancing===!0||C.isSkinnedMesh&&pe.skinning===!1||!C.isSkinnedMesh&&pe.skinning===!0||C.isInstancedMesh&&pe.instancingColor===!0&&C.instanceColor===null||C.isInstancedMesh&&pe.instancingColor===!1&&C.instanceColor!==null||C.isInstancedMesh&&pe.instancingMorph===!0&&C.morphTexture===null||C.isInstancedMesh&&pe.instancingMorph===!1&&C.morphTexture!==null||pe.envMap!==V||R.fog===!0&&pe.fog!==U||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==me.numPlanes||pe.numIntersection!==me.numIntersection)||pe.vertexAlphas!==j||pe.vertexTangents!==J||pe.morphTargets!==ie||pe.morphNormals!==ue||pe.morphColors!==de||pe.toneMapping!==Se||pe.morphTargetsCount!==_e)&&(Ge=!0):(Ge=!0,pe.__version=R.version);let Ft=pe.currentProgram;Ge===!0&&(Ft=Rt(R,x,C));let Et=!1,Je=!1,Bt=!1;const ht=Ft.getUniforms(),Ct=pe.uniforms;if(Ne.useProgram(Ft.program)&&(Et=!0,Je=!0,Bt=!0),R.id!==b&&(b=R.id,Je=!0),Et||S!==d){Ne.buffers.depth.getReversed()?(fe.copy(d.projectionMatrix),q_(fe),K_(fe),ht.setValue(B,"projectionMatrix",fe)):ht.setValue(B,"projectionMatrix",d.projectionMatrix),ht.setValue(B,"viewMatrix",d.matrixWorldInverse);const on=ht.map.cameraPosition;on!==void 0&&on.setValue(B,Oe.setFromMatrixPosition(d.matrixWorld)),W.logarithmicDepthBuffer&&ht.setValue(B,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&ht.setValue(B,"isOrthographic",d.isOrthographicCamera===!0),S!==d&&(S=d,Je=!0,Bt=!0)}if(C.isSkinnedMesh){ht.setOptional(B,C,"bindMatrix"),ht.setOptional(B,C,"bindMatrixInverse");const lt=C.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ht.setValue(B,"boneTexture",lt.boneTexture,P))}C.isBatchedMesh&&(ht.setOptional(B,C,"batchingTexture"),ht.setValue(B,"batchingTexture",C._matricesTexture,P),ht.setOptional(B,C,"batchingIdTexture"),ht.setValue(B,"batchingIdTexture",C._indirectTexture,P),ht.setOptional(B,C,"batchingColorTexture"),C._colorsTexture!==null&&ht.setValue(B,"batchingColorTexture",C._colorsTexture,P));const gt=M.morphAttributes;if((gt.position!==void 0||gt.normal!==void 0||gt.color!==void 0)&&Le.update(C,M,Ft),(Je||pe.receiveShadow!==C.receiveShadow)&&(pe.receiveShadow=C.receiveShadow,ht.setValue(B,"receiveShadow",C.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(Ct.envMap.value=V,Ct.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&x.environment!==null&&(Ct.envMapIntensity.value=x.environmentIntensity),Je&&(ht.setValue(B,"toneMappingExposure",y.toneMappingExposure),pe.needsLights&&Mt(Ct,Bt),U&&R.fog===!0&&ve.refreshFogUniforms(Ct,U),ve.refreshMaterialUniforms(Ct,R,X,K,m.state.transmissionRenderTarget[d.id]),Al.upload(B,wt(pe),Ct,P)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Al.upload(B,wt(pe),Ct,P),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&ht.setValue(B,"center",C.center),ht.setValue(B,"modelViewMatrix",C.modelViewMatrix),ht.setValue(B,"normalMatrix",C.normalMatrix),ht.setValue(B,"modelMatrix",C.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const lt=R.uniformsGroups;for(let on=0,Fn=lt.length;on<Fn;on++){const qn=lt[on];F.update(qn,Ft),F.bind(qn,Ft)}}return Ft}function Mt(d,x){d.ambientLightColor.needsUpdate=x,d.lightProbe.needsUpdate=x,d.directionalLights.needsUpdate=x,d.directionalLightShadows.needsUpdate=x,d.pointLights.needsUpdate=x,d.pointLightShadows.needsUpdate=x,d.spotLights.needsUpdate=x,d.spotLightShadows.needsUpdate=x,d.rectAreaLights.needsUpdate=x,d.hemisphereLights.needsUpdate=x}function qt(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(d,x,M){He.get(d.texture).__webglTexture=x,He.get(d.depthTexture).__webglTexture=M;const R=He.get(d);R.__hasExternalTextures=!0,R.__autoAllocateDepthBuffer=M===void 0,R.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(d,x){const M=He.get(d);M.__webglFramebuffer=x,M.__useDefaultFramebuffer=x===void 0},this.setRenderTarget=function(d,x=0,M=0){D=d,L=x,A=M;let R=!0,C=null,U=!1,z=!1;if(d){const V=He.get(d);if(V.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(B.FRAMEBUFFER,null),R=!1;else if(V.__webglFramebuffer===void 0)P.setupRenderTarget(d);else if(V.__hasExternalTextures)P.rebindTextures(d,He.get(d.texture).__webglTexture,He.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){const ie=d.depthTexture;if(V.__boundDepthTexture!==ie){if(ie!==null&&He.has(ie)&&(d.width!==ie.image.width||d.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(d)}}const j=d.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(z=!0);const J=He.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(J[x])?C=J[x][M]:C=J[x],U=!0):d.samples>0&&P.useMultisampledRTT(d)===!1?C=He.get(d).__webglMultisampledFramebuffer:Array.isArray(J)?C=J[M]:C=J,N.copy(d.viewport),k.copy(d.scissor),G=d.scissorTest}else N.copy(ye).multiplyScalar(X).floor(),k.copy(Ie).multiplyScalar(X).floor(),G=Xe;if(Ne.bindFramebuffer(B.FRAMEBUFFER,C)&&R&&Ne.drawBuffers(d,C),Ne.viewport(N),Ne.scissor(k),Ne.setScissorTest(G),U){const V=He.get(d.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+x,V.__webglTexture,M)}else if(z){const V=He.get(d.texture),j=x||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,V.__webglTexture,M||0,j)}b=-1},this.readRenderTargetPixels=function(d,x,M,R,C,U,z){if(!(d&&d.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=He.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&z!==void 0&&(q=q[z]),q){Ne.bindFramebuffer(B.FRAMEBUFFER,q);try{const V=d.texture,j=V.format,J=V.type;if(!W.textureFormatReadable(j)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=d.width-R&&M>=0&&M<=d.height-C&&B.readPixels(x,M,R,C,Fe.convert(j),Fe.convert(J),U)}finally{const V=D!==null?He.get(D).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,V)}}},this.readRenderTargetPixelsAsync=async function(d,x,M,R,C,U,z){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=He.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&z!==void 0&&(q=q[z]),q){const V=d.texture,j=V.format,J=V.type;if(!W.textureFormatReadable(j))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(x>=0&&x<=d.width-R&&M>=0&&M<=d.height-C){Ne.bindFramebuffer(B.FRAMEBUFFER,q);const ie=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ie),B.bufferData(B.PIXEL_PACK_BUFFER,U.byteLength,B.STREAM_READ),B.readPixels(x,M,R,C,Fe.convert(j),Fe.convert(J),0);const ue=D!==null?He.get(D).__webglFramebuffer:null;Ne.bindFramebuffer(B.FRAMEBUFFER,ue);const de=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Y_(B,de,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ie),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,U),B.deleteBuffer(ie),B.deleteSync(de),U}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(d,x=null,M=0){d.isTexture!==!0&&(Go("WebGLRenderer: copyFramebufferToTexture function signature has changed."),x=arguments[0]||null,d=arguments[1]);const R=Math.pow(2,-M),C=Math.floor(d.image.width*R),U=Math.floor(d.image.height*R),z=x!==null?x.x:0,q=x!==null?x.y:0;P.setTexture2D(d,0),B.copyTexSubImage2D(B.TEXTURE_2D,M,0,0,z,q,C,U),Ne.unbindTexture()},this.copyTextureToTexture=function(d,x,M=null,R=null,C=0){d.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture function signature has changed."),R=arguments[0]||null,d=arguments[1],x=arguments[2],C=arguments[3]||0,M=null);let U,z,q,V,j,J,ie,ue,de;const Se=d.isCompressedTexture?d.mipmaps[C]:d.image;M!==null?(U=M.max.x-M.min.x,z=M.max.y-M.min.y,q=M.isBox3?M.max.z-M.min.z:1,V=M.min.x,j=M.min.y,J=M.isBox3?M.min.z:0):(U=Se.width,z=Se.height,q=Se.depth||1,V=0,j=0,J=0),R!==null?(ie=R.x,ue=R.y,de=R.z):(ie=0,ue=0,de=0);const ge=Fe.convert(x.format),_e=Fe.convert(x.type);let pe;x.isData3DTexture?(P.setTexture3D(x,0),pe=B.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(P.setTexture2DArray(x,0),pe=B.TEXTURE_2D_ARRAY):(P.setTexture2D(x,0),pe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,x.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,x.unpackAlignment);const ut=B.getParameter(B.UNPACK_ROW_LENGTH),Ge=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ft=B.getParameter(B.UNPACK_SKIP_PIXELS),Et=B.getParameter(B.UNPACK_SKIP_ROWS),Je=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Se.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Se.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,V),B.pixelStorei(B.UNPACK_SKIP_ROWS,j),B.pixelStorei(B.UNPACK_SKIP_IMAGES,J);const Bt=d.isDataArrayTexture||d.isData3DTexture,ht=x.isDataArrayTexture||x.isData3DTexture;if(d.isRenderTargetTexture||d.isDepthTexture){const Ct=He.get(d),gt=He.get(x),lt=He.get(Ct.__renderTarget),on=He.get(gt.__renderTarget);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,lt.__webglFramebuffer),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,on.__webglFramebuffer);for(let Fn=0;Fn<q;Fn++)Bt&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.get(d).__webglTexture,C,J+Fn),d.isDepthTexture?(ht&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,He.get(x).__webglTexture,C,de+Fn),B.blitFramebuffer(V,j,U,z,ie,ue,U,z,B.DEPTH_BUFFER_BIT,B.NEAREST)):ht?B.copyTexSubImage3D(pe,C,ie,ue,de+Fn,V,j,U,z):B.copyTexSubImage2D(pe,C,ie,ue,de+Fn,V,j,U,z);Ne.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ht?d.isDataTexture||d.isData3DTexture?B.texSubImage3D(pe,C,ie,ue,de,U,z,q,ge,_e,Se.data):x.isCompressedArrayTexture?B.compressedTexSubImage3D(pe,C,ie,ue,de,U,z,q,ge,Se.data):B.texSubImage3D(pe,C,ie,ue,de,U,z,q,ge,_e,Se):d.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,C,ie,ue,U,z,ge,_e,Se.data):d.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,C,ie,ue,Se.width,Se.height,ge,Se.data):B.texSubImage2D(B.TEXTURE_2D,C,ie,ue,U,z,ge,_e,Se);B.pixelStorei(B.UNPACK_ROW_LENGTH,ut),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ge),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ft),B.pixelStorei(B.UNPACK_SKIP_ROWS,Et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Je),C===0&&x.generateMipmaps&&B.generateMipmap(pe),Ne.unbindTexture()},this.copyTextureToTexture3D=function(d,x,M=null,R=null,C=0){return d.isTexture!==!0&&(Go("WebGLRenderer: copyTextureToTexture3D function signature has changed."),M=arguments[0]||null,R=arguments[1]||null,d=arguments[2],x=arguments[3],C=arguments[4]||0),Go('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(d,x,M,R,C)},this.initRenderTarget=function(d){He.get(d).__webglFramebuffer===void 0&&P.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?P.setTextureCube(d,0):d.isData3DTexture?P.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?P.setTexture2DArray(d,0):P.setTexture2D(d,0),Ne.unbindTexture()},this.resetState=function(){L=0,A=0,D=null,Ne.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}class aM extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class lM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xu,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new H;class Nh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _d=new H,vd=new Tt,xd=new Tt,cM=new H,yd=new rt,el=new H,Fc=new Vi,Sd=new rt,Bc=new tc;class uM extends ii{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xf,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,el),this.boundingBox.expandByPoint(el)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,el),this.boundingSphere.expandByPoint(el)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fc.copy(this.boundingSphere),Fc.applyMatrix4(i),e.ray.intersectsSphere(Fc)!==!1&&(Sd.copy(i).invert(),Bc.copy(e.ray).applyMatrix4(Sd),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===g_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;vd.fromBufferAttribute(i.attributes.skinIndex,e),xd.fromBufferAttribute(i.attributes.skinWeight,e),_d.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=xd.getComponent(s);if(o!==0){const a=vd.getComponent(s);yd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cM.copy(_d).applyMatrix4(yd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class om extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Uh extends fn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Un,u=Un,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Md=new rt,hM=new rt;class Oh{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:hM;Md.multiplyMatrices(a,t[s]),Md.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Oh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Uh(t,e,e,ni,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new om),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ku extends On{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new rt,Ed=new rt,tl=[],Td=new Hi,fM=new rt,No=new ii,Uo=new Vi;class dM extends ii{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ku(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,fM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Td.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Td)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Bs),Uo.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(n),e.ray.intersectsSphere(Uo)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Bs),Ed.multiplyMatrices(n,Bs),No.matrixWorld=Ed,No.raycast(e,tl);for(let o=0,a=tl.length;o<a;o++){const l=tl[o];l.instanceId=s,l.object=this,t.push(l)}tl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ku(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uh(new Float32Array(i*this.count),i,this.count,Ql,zn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class am extends Fi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new H,zl=new H,bd=new rt,Oo=new tc,nl=new Vi,kc=new H,wd=new H;class Fh extends Yt{constructor(e=new Gi,t=new am){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)kl.fromBufferAttribute(t,i-1),zl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=kl.distanceTo(zl);e.setAttribute("lineDistance",new cr(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(i),nl.radius+=s,e.ray.intersectsSphere(nl)===!1)return;bd.copy(i).invert(),Oo.copy(e.ray).applyMatrix4(bd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=c){const m=u.getX(v),E=u.getX(v+1),T=il(this,e,Oo,l,m,E);T&&t.push(T)}if(this.isLineLoop){const v=u.getX(_-1),g=u.getX(p),m=il(this,e,Oo,l,v,g);m&&t.push(m)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=p,g=_-1;v<g;v+=c){const m=il(this,e,Oo,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=il(this,e,Oo,l,_-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function il(r,e,t,n,i,s){const o=r.geometry.attributes.position;if(kl.fromBufferAttribute(o,i),zl.fromBufferAttribute(o,s),t.distanceSqToSegment(kl,zl,kc,wd)>n)return;kc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(kc);if(!(l<e.near||l>e.far))return{distance:l,point:wd.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const Ad=new H,Rd=new H;class pM extends Fh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ad.fromBufferAttribute(t,i),Rd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ad.distanceTo(Rd);e.setAttribute("lineDistance",new cr(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mM extends Fh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lm extends Fi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cd=new rt,Zu=new tc,rl=new Vi,sl=new H;class gM extends Yt{constructor(e=new Gi,t=new lm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(i),rl.radius+=s,e.ray.intersectsSphere(rl)===!1)return;Cd.copy(i).invert(),Zu.copy(e.ray).applyMatrix4(Cd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=f,v=p;_<v;_++){const g=c.getX(_);sl.fromBufferAttribute(h,g),Pd(sl,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,v=p;_<v;_++)sl.fromBufferAttribute(h,_),Pd(sl,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Pd(r,e,t,n,i,s,o){const a=Zu.distanceSqToPoint(r);if(a<t){const l=new H;Zu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class as extends Fi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vi extends as{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ol(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function _M(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function vM(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ld(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function cm(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Pa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class xM extends Pa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yf,endingEnd:yf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sf:s=e,a=2*t-n;break;case Mf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sf:o=e,l=2*n-t;break;case Mf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(n-t)/(i-t),v=_*_,g=v*_,m=-f*g+2*f*v-f*_,E=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*_+1,T=(-1-p)*g+(1.5+p)*v+.5*_,y=p*g-p*v;for(let I=0;I!==a;++I)s[I]=m*o[u+I]+E*o[c+I]+T*o[l+I]+y*o[h+I];return s}}class yM extends Pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class SM extends Pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ol(t,this.TimeBufferType),this.values=ol(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ol(e.times,Array),values:ol(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new SM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ga:t=this.InterpolantFactoryMethodDiscrete;break;case _a:t=this.InterpolantFactoryMethodLinear;break;case cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return _a;case this.InterpolantFactoryMethodSmooth:return cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&_M(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cc,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,p=h+n;for(let _=0;_!==n;++_){const v=t[h+_];if(v!==t[f+_]||v!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wi.prototype.TimeBufferType=Float32Array;Wi.prototype.ValueBufferType=Float32Array;Wi.prototype.DefaultInterpolation=_a;class Ro extends Wi{constructor(e,t,n){super(e,t,n)}}Ro.prototype.ValueTypeName="bool";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=ga;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class um extends Wi{}um.prototype.ValueTypeName="color";class go extends Wi{}go.prototype.ValueTypeName="number";class MM extends Pa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Hr.slerpFlat(s,0,o,c-a,o,c,l);return s}}class _o extends Wi{InterpolantFactoryMethodLinear(e){return new MM(this.times,this.values,this.getValueSize(),e)}}_o.prototype.ValueTypeName="quaternion";_o.prototype.InterpolantFactoryMethodSmooth=void 0;class Co extends Wi{constructor(e,t,n){super(e,t,n)}}Co.prototype.ValueTypeName="string";Co.prototype.ValueBufferType=Array;Co.prototype.DefaultInterpolation=ga;Co.prototype.InterpolantFactoryMethodLinear=void 0;Co.prototype.InterpolantFactoryMethodSmooth=void 0;class vo extends Wi{}vo.prototype.ValueTypeName="vector";class EM{constructor(e="",t=-1,n=[],i=__){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bM(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Wi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=vM(l);l=Ld(l,1,u),c=Ld(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new go(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,_,v){if(p.length!==0){const g=[],m=[];cm(p,g,m,_),g.length!==0&&v.push(new h(f,g,m))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let v=0;v<f[_].morphTargets.length;v++)p[f[_].morphTargets[v]]=-1;for(const v in p){const g=[],m=[];for(let E=0;E!==f[_].morphTargets.length;++E){const T=f[_];g.push(T.time),m.push(T.morphTarget===v?1:0)}i.push(new go(".morphTargetInfluence["+v+"]",g,m))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(vo,p+".position",f,"pos",i),n(_o,p+".quaternion",f,"rot",i),n(vo,p+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function TM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return go;case"vector":case"vector2":case"vector3":case"vector4":return vo;case"color":return um;case"quaternion":return _o;case"bool":case"boolean":return Ro;case"string":return Co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function bM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=TM(r.type);if(r.times===void 0){const t=[],n=[];cm(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const br={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class wM{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const AM=new wM;class Ms{constructor(e){this.manager=e!==void 0?e:AM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class RM extends Error{constructor(e,t){super(e),this.response=t}}class Bh extends Ms{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=br.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:n,onError:i});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=$i[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,_=p!==0;let v=0;const g=new ReadableStream({start(m){E();function E(){h.read().then(({done:T,value:y})=>{if(T)m.close();else{v+=y.byteLength;const I=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:p});for(let L=0,A=u.length;L<A;L++){const D=u[L];D.onProgress&&D.onProgress(I)}m.enqueue(y),E()}},T=>{m.error(T)})}}});return new Response(g)}else throw new RM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{br.add(e,c);const u=$i[e];delete $i[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=$i[e];if(u===void 0)throw this.manager.itemError(e),c;delete $i[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class CM extends Ms{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=br.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=va("img");function l(){u(),br.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class PM extends Ms{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new Uh,a=new Bh(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Di,o.wrapT=c.wrapT!==void 0?c.wrapT:Di,o.magFilter=c.magFilter!==void 0?c.magFilter:hn,o.minFilter=c.minFilter!==void 0?c.minFilter:hn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ni),c.mipmapCount===1&&(o.minFilter=hn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class LM extends Ms{constructor(e){super(e)}load(e,t,n,i){const s=new fn,o=new CM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class rc extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zc=new rt,Id=new H,Dd=new H;class kh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Id.setFromMatrixPosition(e.matrixWorld),t.position.copy(Id),Dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dd),t.updateMatrixWorld(),zc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class IM extends kh{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=po*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class DM extends rc{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new IM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nd=new rt,Fo=new H,Hc=new H;class NM extends kh{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fo),Hc.copy(n.position),Hc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hc),n.updateMatrixWorld(),i.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd)}}class UM extends rc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new NM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class OM extends kh{constructor(){super(new Ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xo extends rc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new OM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class FM extends rc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ta{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class BM extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=br.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return br.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),br.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});br.add(e,l),s.manager.itemStart(e)}}class kM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ud(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ud();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ud(){return performance.now()}const zh="\\[\\]\\.:\\/",zM=new RegExp("["+zh+"]","g"),Hh="[^"+zh+"]",HM="[^"+zh.replace("\\.","")+"]",VM=/((?:WC+[\/:])*)/.source.replace("WC",Hh),GM=/(WCOD+)?/.source.replace("WCOD",HM),WM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hh),XM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hh),YM=new RegExp("^"+VM+GM+WM+XM+"$"),qM=["material","materials","bones","map"];class KM{constructor(e,t,n){const i=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class It{constructor(e,t,n){this.path=t,this.parsedPath=n||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,n):new It(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zM,"")}static parseTrackName(e){const t=YM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);qM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=KM;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var pi=Uint8Array,Ys=Uint16Array,ZM=Int32Array,hm=new pi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fm=new pi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$M=new pi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dm=function(r,e){for(var t=new Ys(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new ZM(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},pm=dm(hm,2),mm=pm.b,jM=pm.r;mm[28]=258,jM[258]=28;var JM=dm(fm,0),QM=JM.b,$u=new Ys(32768);for(var kt=0;kt<32768;++kt){var Sr=(kt&43690)>>1|(kt&21845)<<1;Sr=(Sr&52428)>>2|(Sr&13107)<<2,Sr=(Sr&61680)>>4|(Sr&3855)<<4,$u[kt]=((Sr&65280)>>8|(Sr&255)<<8)>>1}var na=(function(r,e,t){for(var n=r.length,i=0,s=new Ys(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new Ys(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new Ys(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],u=e-r[i],h=o[r[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[$u[h]>>l]=c}else for(a=new Ys(n),i=0;i<n;++i)r[i]&&(a[i]=$u[o[r[i]-1]++]>>15-r[i]);return a}),La=new pi(288);for(var kt=0;kt<144;++kt)La[kt]=8;for(var kt=144;kt<256;++kt)La[kt]=9;for(var kt=256;kt<280;++kt)La[kt]=7;for(var kt=280;kt<288;++kt)La[kt]=8;var gm=new pi(32);for(var kt=0;kt<32;++kt)gm[kt]=5;var eE=na(La,9,1),tE=na(gm,5,1),Vc=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Mi=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},Gc=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},nE=function(r){return(r+7)/8|0},iE=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new pi(r.subarray(e,t))},rE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ti=function(r,e,t){var n=new Error(e||rE[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,Ti),!t)throw n;return n},sE=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new pi(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new pi(i*3));var c=function(Qe){var Ve=t.length;if(Qe>Ve){var ze=new pi(Math.max(Ve*2,Qe));ze.set(t),t=ze}},u=e.f||0,h=e.p||0,f=e.b||0,p=e.l,_=e.d,v=e.m,g=e.n,m=i*8;do{if(!p){u=Mi(r,h,1);var E=Mi(r,h+1,3);if(h+=3,E)if(E==1)p=eE,_=tE,v=9,g=5;else if(E==2){var L=Mi(r,h,31)+257,A=Mi(r,h+10,15)+4,D=L+Mi(r,h+5,31)+1;h+=14;for(var b=new pi(D),S=new pi(19),N=0;N<A;++N)S[$M[N]]=Mi(r,h+N*3,7);h+=A*3;for(var k=Vc(S),G=(1<<k)-1,$=na(S,k,1),N=0;N<D;){var ne=$[Mi(r,h,G)];h+=ne&15;var T=ne>>4;if(T<16)b[N++]=T;else{var Z=0,K=0;for(T==16?(K=3+Mi(r,h,3),h+=2,Z=b[N-1]):T==17?(K=3+Mi(r,h,7),h+=3):T==18&&(K=11+Mi(r,h,127),h+=7);K--;)b[N++]=Z}}var X=b.subarray(0,L),le=b.subarray(L);v=Vc(X),g=Vc(le),p=na(X,v,1),_=na(le,g,1)}else Ti(1);else{var T=nE(h)+4,y=r[T-4]|r[T-3]<<8,I=T+y;if(I>i){l&&Ti(0);break}a&&c(f+y),t.set(r.subarray(T,I),f),e.b=f+=y,e.p=h=I*8,e.f=u;continue}if(h>m){l&&Ti(0);break}}a&&c(f+131072);for(var O=(1<<v)-1,ye=(1<<g)-1,Ie=h;;Ie=h){var Z=p[Gc(r,h)&O],Xe=Z>>4;if(h+=Z&15,h>m){l&&Ti(0);break}if(Z||Ti(2),Xe<256)t[f++]=Xe;else if(Xe==256){Ie=h,p=null;break}else{var te=Xe-254;if(Xe>264){var N=Xe-257,ce=hm[N];te=Mi(r,h,(1<<ce)-1)+mm[N],h+=ce}var he=_[Gc(r,h)&ye],fe=he>>4;he||Ti(3),h+=he&15;var le=QM[fe];if(fe>3){var ce=fm[fe];le+=Gc(r,h)&(1<<ce)-1,h+=ce}if(h>m){l&&Ti(0);break}a&&c(f+131072);var Ce=f+te;if(f<le){var Oe=s-le,Ye=Math.min(le,Ce);for(Oe+f<0&&Ti(3);f<Ye;++f)t[f]=n[Oe+f]}for(;f<Ce;++f)t[f]=t[f-le]}}e.l=p,e.p=Ie,e.b=f,e.f=u,p&&(u=1,e.m=v,e.d=_,e.n=g)}while(!u);return f!=t.length&&o?iE(t,0,f):t.subarray(0,f)},oE=new pi(0),aE=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Ti(6,"invalid zlib data"),(r[1]>>5&1)==1&&Ti(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function al(r,e){return sE(r.subarray(aE(r),-4),{i:2},e,e)}var lE=typeof TextDecoder<"u"&&new TextDecoder,cE=0;try{lE.decode(oE,{stream:!0}),cE=1}catch{}class uE extends PM{constructor(e){super(e),this.type=rr}parse(e){const b=Math.pow(2.7182818,2.2);function S(d,x){let M=0;for(let C=0;C<65536;++C)(C==0||d[C>>3]&1<<(C&7))&&(x[M++]=C);const R=M-1;for(;M<65536;)x[M++]=0;return R}function N(d){for(let x=0;x<16384;x++)d[x]={},d[x].len=0,d[x].lit=0,d[x].p=null}const k={l:0,c:0,lc:0};function G(d,x,M,R,C){for(;M<d;)x=x<<8|Pe(R,C),M+=8;M-=d,k.l=x>>M&(1<<d)-1,k.c=x,k.lc=M}const $=new Array(59);function ne(d){for(let M=0;M<=58;++M)$[M]=0;for(let M=0;M<65537;++M)$[d[M]]+=1;let x=0;for(let M=58;M>0;--M){const R=x+$[M]>>1;$[M]=x,x=R}for(let M=0;M<65537;++M){const R=d[M];R>0&&(d[M]=R|$[R]++<<6)}}function Z(d,x,M,R,C,U){const z=x;let q=0,V=0;for(;R<=C;R++){if(z.value-x.value>M)return!1;G(6,q,V,d,z);const j=k.l;if(q=k.c,V=k.lc,U[R]=j,j==63){if(z.value-x.value>M)throw new Error("Something wrong with hufUnpackEncTable");G(8,q,V,d,z);let J=k.l+6;if(q=k.c,V=k.lc,R+J>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)U[R++]=0;R--}else if(j>=59){let J=j-59+2;if(R+J>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;J--;)U[R++]=0;R--}}ne(U)}function K(d){return d&63}function X(d){return d>>6}function le(d,x,M,R){for(;x<=M;x++){const C=X(d[x]),U=K(d[x]);if(C>>U)throw new Error("Invalid table entry");if(U>14){const z=R[C>>U-14];if(z.len)throw new Error("Invalid table entry");if(z.lit++,z.p){const q=z.p;z.p=new Array(z.lit);for(let V=0;V<z.lit-1;++V)z.p[V]=q[V]}else z.p=new Array(1);z.p[z.lit-1]=x}else if(U){let z=0;for(let q=1<<14-U;q>0;q--){const V=R[(C<<14-U)+z];if(V.len||V.p)throw new Error("Invalid table entry");V.len=U,V.lit=x,z++}}}return!0}const O={c:0,lc:0};function ye(d,x,M,R){d=d<<8|Pe(M,R),x+=8,O.c=d,O.lc=x}const Ie={c:0,lc:0};function Xe(d,x,M,R,C,U,z,q,V){if(d==x){R<8&&(ye(M,R,C,U),M=O.c,R=O.lc),R-=8;let j=M>>R;if(j=new Uint8Array([j])[0],q.value+j>V)return!1;const J=z[q.value-1];for(;j-- >0;)z[q.value++]=J}else if(q.value<V)z[q.value++]=d;else return!1;Ie.c=M,Ie.lc=R}function te(d){return d&65535}function ce(d){const x=te(d);return x>32767?x-65536:x}const he={a:0,b:0};function fe(d,x){const M=ce(d),C=ce(x),U=M+(C&1)+(C>>1),z=U,q=U-C;he.a=z,he.b=q}function Ce(d,x){const M=te(d),R=te(x),C=M-(R>>1)&65535,U=R+C-32768&65535;he.a=U,he.b=C}function Oe(d,x,M,R,C,U,z){const q=z<16384,V=M>C?C:M;let j=1,J,ie;for(;j<=V;)j<<=1;for(j>>=1,J=j,j>>=1;j>=1;){ie=0;const ue=ie+U*(C-J),de=U*j,Se=U*J,ge=R*j,_e=R*J;let pe,ut,Ge,Ft;for(;ie<=ue;ie+=Se){let Et=ie;const Je=ie+R*(M-J);for(;Et<=Je;Et+=_e){const Bt=Et+ge,ht=Et+de,Ct=ht+ge;q?(fe(d[Et+x],d[ht+x]),pe=he.a,Ge=he.b,fe(d[Bt+x],d[Ct+x]),ut=he.a,Ft=he.b,fe(pe,ut),d[Et+x]=he.a,d[Bt+x]=he.b,fe(Ge,Ft),d[ht+x]=he.a,d[Ct+x]=he.b):(Ce(d[Et+x],d[ht+x]),pe=he.a,Ge=he.b,Ce(d[Bt+x],d[Ct+x]),ut=he.a,Ft=he.b,Ce(pe,ut),d[Et+x]=he.a,d[Bt+x]=he.b,Ce(Ge,Ft),d[ht+x]=he.a,d[Ct+x]=he.b)}if(M&j){const Bt=Et+de;q?fe(d[Et+x],d[Bt+x]):Ce(d[Et+x],d[Bt+x]),pe=he.a,d[Bt+x]=he.b,d[Et+x]=pe}}if(C&j){let Et=ie;const Je=ie+R*(M-J);for(;Et<=Je;Et+=_e){const Bt=Et+ge;q?fe(d[Et+x],d[Bt+x]):Ce(d[Et+x],d[Bt+x]),pe=he.a,d[Bt+x]=he.b,d[Et+x]=pe}}J=j,j>>=1}return ie}function Ye(d,x,M,R,C,U,z,q,V){let j=0,J=0;const ie=z,ue=Math.trunc(R.value+(C+7)/8);for(;R.value<ue;)for(ye(j,J,M,R),j=O.c,J=O.lc;J>=14;){const Se=j>>J-14&16383,ge=x[Se];if(ge.len)J-=ge.len,Xe(ge.lit,U,j,J,M,R,q,V,ie),j=Ie.c,J=Ie.lc;else{if(!ge.p)throw new Error("hufDecode issues");let _e;for(_e=0;_e<ge.lit;_e++){const pe=K(d[ge.p[_e]]);for(;J<pe&&R.value<ue;)ye(j,J,M,R),j=O.c,J=O.lc;if(J>=pe&&X(d[ge.p[_e]])==(j>>J-pe&(1<<pe)-1)){J-=pe,Xe(ge.p[_e],U,j,J,M,R,q,V,ie),j=Ie.c,J=Ie.lc;break}}if(_e==ge.lit)throw new Error("hufDecode issues")}}const de=8-C&7;for(j>>=de,J-=de;J>0;){const Se=x[j<<14-J&16383];if(Se.len)J-=Se.len,Xe(Se.lit,U,j,J,M,R,q,V,ie),j=Ie.c,J=Ie.lc;else throw new Error("hufDecode issues")}return!0}function Qe(d,x,M,R,C,U){const z={value:0},q=M.value,V=Le(x,M),j=Le(x,M);M.value+=4;const J=Le(x,M);if(M.value+=4,V<0||V>=65537||j<0||j>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ie=new Array(65537),ue=new Array(16384);N(ue);const de=R-(M.value-q);if(Z(d,M,de,V,j,ie),J>8*(R-(M.value-q)))throw new Error("Something wrong with hufUncompress");le(ie,V,j,ue),Ye(ie,ue,d,M,J,j,U,C,z)}function Ve(d,x,M){for(let R=0;R<M;++R)x[R]=d[x[R]]}function ze(d){for(let x=1;x<d.length;x++){const M=d[x-1]+d[x]-128;d[x]=M}}function B(d,x){let M=0,R=Math.floor((d.length+1)/2),C=0;const U=d.length-1;for(;!(C>U||(x[C++]=d[M++],C>U));)x[C++]=d[R++]}function bt(d){let x=d.byteLength;const M=new Array;let R=0;const C=new DataView(d);for(;x>0;){const U=C.getInt8(R++);if(U<0){const z=-U;x-=z+1;for(let q=0;q<z;q++)M.push(C.getUint8(R++))}else{const z=U;x-=2;const q=C.getUint8(R++);for(let V=0;V<z+1;V++)M.push(q)}}return M}function qe(d,x,M,R,C,U){let z=new DataView(U.buffer);const q=M[d.idx[0]].width,V=M[d.idx[0]].height,j=3,J=Math.floor(q/8),ie=Math.ceil(q/8),ue=Math.ceil(V/8),de=q-(ie-1)*8,Se=V-(ue-1)*8,ge={value:0},_e=new Array(j),pe=new Array(j),ut=new Array(j),Ge=new Array(j),Ft=new Array(j);for(let Je=0;Je<j;++Je)Ft[Je]=x[d.idx[Je]],_e[Je]=Je<1?0:_e[Je-1]+ie*ue,pe[Je]=new Float32Array(64),ut[Je]=new Uint16Array(64),Ge[Je]=new Uint16Array(ie*64);for(let Je=0;Je<ue;++Je){let Bt=8;Je==ue-1&&(Bt=Se);let ht=8;for(let gt=0;gt<ie;++gt){gt==ie-1&&(ht=de);for(let lt=0;lt<j;++lt)ut[lt].fill(0),ut[lt][0]=C[_e[lt]++],W(ge,R,ut[lt]),Ne(ut[lt],pe[lt]),pt(pe[lt]);He(pe);for(let lt=0;lt<j;++lt)P(pe[lt],Ge[lt],gt*64)}let Ct=0;for(let gt=0;gt<j;++gt){const lt=M[d.idx[gt]].type;for(let on=8*Je;on<8*Je+Bt;++on){Ct=Ft[gt][on];for(let Fn=0;Fn<J;++Fn){const qn=Fn*64+(on&7)*8;z.setUint16(Ct+0*lt,Ge[gt][qn+0],!0),z.setUint16(Ct+2*lt,Ge[gt][qn+1],!0),z.setUint16(Ct+4*lt,Ge[gt][qn+2],!0),z.setUint16(Ct+6*lt,Ge[gt][qn+3],!0),z.setUint16(Ct+8*lt,Ge[gt][qn+4],!0),z.setUint16(Ct+10*lt,Ge[gt][qn+5],!0),z.setUint16(Ct+12*lt,Ge[gt][qn+6],!0),z.setUint16(Ct+14*lt,Ge[gt][qn+7],!0),Ct+=16*lt}}if(J!=ie)for(let on=8*Je;on<8*Je+Bt;++on){const Fn=Ft[gt][on]+8*J*2*lt,qn=J*64+(on&7)*8;for(let Da=0;Da<ht;++Da)z.setUint16(Fn+Da*2*lt,Ge[gt][qn+Da],!0)}}}const Et=new Uint16Array(q);z=new DataView(U.buffer);for(let Je=0;Je<j;++Je){M[d.idx[Je]].decoded=!0;const Bt=M[d.idx[Je]].type;if(M[Je].type==2)for(let ht=0;ht<V;++ht){const Ct=Ft[Je][ht];for(let gt=0;gt<q;++gt)Et[gt]=z.getUint16(Ct+gt*2*Bt,!0);for(let gt=0;gt<q;++gt)z.setFloat32(Ct+gt*2*Bt,Q(Et[gt]),!0)}}}function W(d,x,M){let R,C=1;for(;C<64;)R=x[d.value],R==65280?C=64:R>>8==255?C+=R&255:(M[C]=R,C++),d.value++}function Ne(d,x){x[0]=Q(d[0]),x[1]=Q(d[1]),x[2]=Q(d[5]),x[3]=Q(d[6]),x[4]=Q(d[14]),x[5]=Q(d[15]),x[6]=Q(d[27]),x[7]=Q(d[28]),x[8]=Q(d[2]),x[9]=Q(d[4]),x[10]=Q(d[7]),x[11]=Q(d[13]),x[12]=Q(d[16]),x[13]=Q(d[26]),x[14]=Q(d[29]),x[15]=Q(d[42]),x[16]=Q(d[3]),x[17]=Q(d[8]),x[18]=Q(d[12]),x[19]=Q(d[17]),x[20]=Q(d[25]),x[21]=Q(d[30]),x[22]=Q(d[41]),x[23]=Q(d[43]),x[24]=Q(d[9]),x[25]=Q(d[11]),x[26]=Q(d[18]),x[27]=Q(d[24]),x[28]=Q(d[31]),x[29]=Q(d[40]),x[30]=Q(d[44]),x[31]=Q(d[53]),x[32]=Q(d[10]),x[33]=Q(d[19]),x[34]=Q(d[23]),x[35]=Q(d[32]),x[36]=Q(d[39]),x[37]=Q(d[45]),x[38]=Q(d[52]),x[39]=Q(d[54]),x[40]=Q(d[20]),x[41]=Q(d[22]),x[42]=Q(d[33]),x[43]=Q(d[38]),x[44]=Q(d[46]),x[45]=Q(d[51]),x[46]=Q(d[55]),x[47]=Q(d[60]),x[48]=Q(d[21]),x[49]=Q(d[34]),x[50]=Q(d[37]),x[51]=Q(d[47]),x[52]=Q(d[50]),x[53]=Q(d[56]),x[54]=Q(d[59]),x[55]=Q(d[61]),x[56]=Q(d[35]),x[57]=Q(d[36]),x[58]=Q(d[48]),x[59]=Q(d[49]),x[60]=Q(d[57]),x[61]=Q(d[58]),x[62]=Q(d[62]),x[63]=Q(d[63])}function pt(d){const x=.5*Math.cos(.7853975),M=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),U=.5*Math.cos(5*3.14159/16),z=.5*Math.cos(3*3.14159/8),q=.5*Math.cos(7*3.14159/16),V=new Array(4),j=new Array(4),J=new Array(4),ie=new Array(4);for(let ue=0;ue<8;++ue){const de=ue*8;V[0]=R*d[de+2],V[1]=z*d[de+2],V[2]=R*d[de+6],V[3]=z*d[de+6],j[0]=M*d[de+1]+C*d[de+3]+U*d[de+5]+q*d[de+7],j[1]=C*d[de+1]-q*d[de+3]-M*d[de+5]-U*d[de+7],j[2]=U*d[de+1]-M*d[de+3]+q*d[de+5]+C*d[de+7],j[3]=q*d[de+1]-U*d[de+3]+C*d[de+5]-M*d[de+7],J[0]=x*(d[de+0]+d[de+4]),J[3]=x*(d[de+0]-d[de+4]),J[1]=V[0]+V[3],J[2]=V[1]-V[2],ie[0]=J[0]+J[1],ie[1]=J[3]+J[2],ie[2]=J[3]-J[2],ie[3]=J[0]-J[1],d[de+0]=ie[0]+j[0],d[de+1]=ie[1]+j[1],d[de+2]=ie[2]+j[2],d[de+3]=ie[3]+j[3],d[de+4]=ie[3]-j[3],d[de+5]=ie[2]-j[2],d[de+6]=ie[1]-j[1],d[de+7]=ie[0]-j[0]}for(let ue=0;ue<8;++ue)V[0]=R*d[16+ue],V[1]=z*d[16+ue],V[2]=R*d[48+ue],V[3]=z*d[48+ue],j[0]=M*d[8+ue]+C*d[24+ue]+U*d[40+ue]+q*d[56+ue],j[1]=C*d[8+ue]-q*d[24+ue]-M*d[40+ue]-U*d[56+ue],j[2]=U*d[8+ue]-M*d[24+ue]+q*d[40+ue]+C*d[56+ue],j[3]=q*d[8+ue]-U*d[24+ue]+C*d[40+ue]-M*d[56+ue],J[0]=x*(d[ue]+d[32+ue]),J[3]=x*(d[ue]-d[32+ue]),J[1]=V[0]+V[3],J[2]=V[1]-V[2],ie[0]=J[0]+J[1],ie[1]=J[3]+J[2],ie[2]=J[3]-J[2],ie[3]=J[0]-J[1],d[0+ue]=ie[0]+j[0],d[8+ue]=ie[1]+j[1],d[16+ue]=ie[2]+j[2],d[24+ue]=ie[3]+j[3],d[32+ue]=ie[3]-j[3],d[40+ue]=ie[2]-j[2],d[48+ue]=ie[1]-j[1],d[56+ue]=ie[0]-j[0]}function He(d){for(let x=0;x<64;++x){const M=d[0][x],R=d[1][x],C=d[2][x];d[0][x]=M+1.5747*C,d[1][x]=M-.1873*R-.4682*C,d[2][x]=M+1.8556*R}}function P(d,x,M){for(let R=0;R<64;++R)x[M+R]=Hf.toHalfFloat(w(d[R]))}function w(d){return d<=1?Math.sign(d)*Math.pow(Math.abs(d),2.2):Math.sign(d)*Math.pow(b,Math.abs(d)-1)}function Y(d){return new DataView(d.array.buffer,d.offset.value,d.size)}function ae(d){const x=d.viewer.buffer.slice(d.offset.value,d.offset.value+d.size),M=new Uint8Array(bt(x)),R=new Uint8Array(M.length);return ze(M),B(M,R),new DataView(R.buffer)}function se(d){const x=d.array.slice(d.offset.value,d.offset.value+d.size),M=al(x),R=new Uint8Array(M.length);return ze(M),B(M,R),new DataView(R.buffer)}function re(d){const x=d.viewer,M={value:d.offset.value},R=new Uint16Array(d.columns*d.lines*(d.inputChannels.length*d.type)),C=new Uint8Array(8192);let U=0;const z=new Array(d.inputChannels.length);for(let Se=0,ge=d.inputChannels.length;Se<ge;Se++)z[Se]={},z[Se].start=U,z[Se].end=z[Se].start,z[Se].nx=d.columns,z[Se].ny=d.lines,z[Se].size=d.type,U+=z[Se].nx*z[Se].ny*z[Se].size;const q=ee(x,M),V=ee(x,M);if(V>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(q<=V)for(let Se=0;Se<V-q+1;Se++)C[Se+q]=Ke(x,M);const j=new Uint16Array(65536),J=S(C,j),ie=Le(x,M);Qe(d.array,x,M,ie,R,U);for(let Se=0;Se<d.inputChannels.length;++Se){const ge=z[Se];for(let _e=0;_e<z[Se].size;++_e)Oe(R,ge.start+_e,ge.nx,ge.size,ge.ny,ge.nx*ge.size,J)}Ve(j,R,U);let ue=0;const de=new Uint8Array(R.buffer.byteLength);for(let Se=0;Se<d.lines;Se++)for(let ge=0;ge<d.inputChannels.length;ge++){const _e=z[ge],pe=_e.nx*_e.size,ut=new Uint8Array(R.buffer,_e.end*2,pe*2);de.set(ut,ue),ue+=pe*2,_e.end+=pe}return new DataView(de.buffer)}function Te(d){const x=d.array.slice(d.offset.value,d.offset.value+d.size),M=al(x),R=d.inputChannels.length*d.lines*d.columns*d.totalBytes,C=new ArrayBuffer(R),U=new DataView(C);let z=0,q=0;const V=new Array(4);for(let j=0;j<d.lines;j++)for(let J=0;J<d.inputChannels.length;J++){let ie=0;switch(d.inputChannels[J].pixelType){case 1:V[0]=z,V[1]=V[0]+d.columns,z=V[1]+d.columns;for(let de=0;de<d.columns;++de){const Se=M[V[0]++]<<8|M[V[1]++];ie+=Se,U.setUint16(q,ie,!0),q+=2}break;case 2:V[0]=z,V[1]=V[0]+d.columns,V[2]=V[1]+d.columns,z=V[2]+d.columns;for(let de=0;de<d.columns;++de){const Se=M[V[0]++]<<24|M[V[1]++]<<16|M[V[2]++]<<8;ie+=Se,U.setUint32(q,ie,!0),q+=4}break}}return U}function ve(d){const x=d.viewer,M={value:d.offset.value},R=new Uint8Array(d.columns*d.lines*(d.inputChannels.length*d.type*2)),C={version:Fe(x,M),unknownUncompressedSize:Fe(x,M),unknownCompressedSize:Fe(x,M),acCompressedSize:Fe(x,M),dcCompressedSize:Fe(x,M),rleCompressedSize:Fe(x,M),rleUncompressedSize:Fe(x,M),rleRawSize:Fe(x,M),totalAcUncompressedCount:Fe(x,M),totalDcUncompressedCount:Fe(x,M),acCompression:Fe(x,M)};if(C.version<2)throw new Error("EXRLoader.parse: "+Mt.compression+" version "+C.version+" is unsupported");const U=new Array;let z=ee(x,M)-2;for(;z>0;){const ge=Ee(x.buffer,M),_e=Ke(x,M),pe=_e>>2&3,ut=(_e>>4)-1,Ge=new Int8Array([ut])[0],Ft=Ke(x,M);U.push({name:ge,index:Ge,type:Ft,compression:pe}),z-=ge.length+3}const q=Mt.channels,V=new Array(d.inputChannels.length);for(let ge=0;ge<d.inputChannels.length;++ge){const _e=V[ge]={},pe=q[ge];_e.name=pe.name,_e.compression=0,_e.decoded=!1,_e.type=pe.pixelType,_e.pLinear=pe.pLinear,_e.width=d.columns,_e.height=d.lines}const j={idx:new Array(3)};for(let ge=0;ge<d.inputChannels.length;++ge){const _e=V[ge];for(let pe=0;pe<U.length;++pe){const ut=U[pe];_e.name==ut.name&&(_e.compression=ut.compression,ut.index>=0&&(j.idx[ut.index]=ge),_e.offset=ge)}}let J,ie,ue;if(C.acCompressedSize>0)switch(C.acCompression){case 0:J=new Uint16Array(C.totalAcUncompressedCount),Qe(d.array,x,M,C.acCompressedSize,J,C.totalAcUncompressedCount);break;case 1:const ge=d.array.slice(M.value,M.value+C.totalAcUncompressedCount),_e=al(ge);J=new Uint16Array(_e.buffer),M.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const ge={array:d.array,offset:M,size:C.dcCompressedSize};ie=new Uint16Array(se(ge).buffer),M.value+=C.dcCompressedSize}if(C.rleRawSize>0){const ge=d.array.slice(M.value,M.value+C.rleCompressedSize),_e=al(ge);ue=bt(_e.buffer),M.value+=C.rleCompressedSize}let de=0;const Se=new Array(V.length);for(let ge=0;ge<Se.length;++ge)Se[ge]=new Array;for(let ge=0;ge<d.lines;++ge)for(let _e=0;_e<V.length;++_e)Se[_e].push(de),de+=V[_e].width*d.type*2;qe(j,Se,V,J,ie,R);for(let ge=0;ge<V.length;++ge){const _e=V[ge];if(!_e.decoded)switch(_e.compression){case 2:let pe=0,ut=0;for(let Ge=0;Ge<d.lines;++Ge){let Ft=Se[ge][pe];for(let Et=0;Et<_e.width;++Et){for(let Je=0;Je<2*_e.type;++Je)R[Ft++]=ue[ut+Je*_e.width*_e.height];ut++}pe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function Ee(d,x){const M=new Uint8Array(d);let R=0;for(;M[x.value+R]!=0;)R+=1;const C=new TextDecoder().decode(M.slice(x.value,x.value+R));return x.value=x.value+R+1,C}function et(d,x,M){const R=new TextDecoder().decode(new Uint8Array(d).slice(x.value,x.value+M));return x.value=x.value+M,R}function me(d,x){const M=De(d,x),R=Le(d,x);return[M,R]}function xe(d,x){const M=Le(d,x),R=Le(d,x);return[M,R]}function De(d,x){const M=d.getInt32(x.value,!0);return x.value=x.value+4,M}function Le(d,x){const M=d.getUint32(x.value,!0);return x.value=x.value+4,M}function Pe(d,x){const M=d[x.value];return x.value=x.value+1,M}function Ke(d,x){const M=d.getUint8(x.value);return x.value=x.value+1,M}const Fe=function(d,x){let M;return"getBigInt64"in DataView.prototype?M=Number(d.getBigInt64(x.value,!0)):M=d.getUint32(x.value+4,!0)+Number(d.getUint32(x.value,!0)<<32),x.value+=8,M};function We(d,x){const M=d.getFloat32(x.value,!0);return x.value+=4,M}function F(d,x){return Hf.toHalfFloat(We(d,x))}function Q(d){const x=(d&31744)>>10,M=d&1023;return(d>>15?-1:1)*(x?x===31?M?NaN:1/0:Math.pow(2,x-15)*(1+M/1024):6103515625e-14*(M/1024))}function ee(d,x){const M=d.getUint16(x.value,!0);return x.value+=2,M}function oe(d,x){return Q(ee(d,x))}function Me(d,x,M,R){const C=M.value,U=[];for(;M.value<C+R-1;){const z=Ee(x,M),q=De(d,M),V=Ke(d,M);M.value+=3;const j=De(d,M),J=De(d,M);U.push({name:z,pixelType:q,pLinear:V,xSampling:j,ySampling:J})}return M.value+=1,U}function be(d,x){const M=We(d,x),R=We(d,x),C=We(d,x),U=We(d,x),z=We(d,x),q=We(d,x),V=We(d,x),j=We(d,x);return{redX:M,redY:R,greenX:C,greenY:U,blueX:z,blueY:q,whiteX:V,whiteY:j}}function Ze(d,x){const M=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=Ke(d,x);return M[R]}function xt(d,x){const M=De(d,x),R=De(d,x),C=De(d,x),U=De(d,x);return{xMin:M,yMin:R,xMax:C,yMax:U}}function zt(d,x){const M=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=Ke(d,x);return M[R]}function Re(d,x){const M=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=Ke(d,x);return M[R]}function Be(d,x){const M=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],C=Le(d,x),U=Le(d,x),z=Ke(d,x);return{xSize:C,ySize:U,levelMode:M[z&15],roundingMode:R[z>>4]}}function tt(d,x){const M=We(d,x),R=We(d,x);return[M,R]}function we(d,x){const M=We(d,x),R=We(d,x),C=We(d,x);return[M,R,C]}function je(d,x,M,R,C){if(R==="string"||R==="stringvector"||R==="iccProfile")return et(x,M,C);if(R==="chlist")return Me(d,x,M,C);if(R==="chromaticities")return be(d,M);if(R==="compression")return Ze(d,M);if(R==="box2i")return xt(d,M);if(R==="envmap")return Re(d,M);if(R==="tiledesc")return Be(d,M);if(R==="lineOrder")return zt(d,M);if(R==="float")return We(d,M);if(R==="v2f")return tt(d,M);if(R==="v3f")return we(d,M);if(R==="int")return De(d,M);if(R==="rational")return me(d,M);if(R==="timecode")return xe(d,M);if(R==="preview")return M.value+=C,"skipped";M.value+=C}function ke(d,x){const M=Math.log2(d);return x=="ROUND_DOWN"?Math.floor(M):Math.ceil(M)}function $e(d,x,M){let R=0;switch(d.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=ke(Math.max(x,M),d.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function Ht(d,x,M,R){const C=new Array(d);for(let U=0;U<d;U++){const z=1<<U;let q=x/z|0;R=="ROUND_UP"&&q*z<x&&(q+=1);const V=Math.max(q,1);C[U]=(V+M-1)/M|0}return C}function st(){const d=this,x=d.offset,M={value:0};for(let R=0;R<d.tileCount;R++){const C=De(d.viewer,x),U=De(d.viewer,x);x.value+=8,d.size=Le(d.viewer,x);const z=C*d.blockWidth,q=U*d.blockHeight;d.columns=z+d.blockWidth>d.width?d.width-z:d.blockWidth,d.lines=q+d.blockHeight>d.height?d.height-q:d.blockHeight;const V=d.columns*d.totalBytes,J=d.size<d.lines*V?d.uncompress(d):Y(d);x.value+=d.size;for(let ie=0;ie<d.lines;ie++){const ue=ie*d.columns*d.totalBytes;for(let de=0;de<d.inputChannels.length;de++){const Se=Mt.channels[de].name,ge=d.channelByteOffsets[Se]*d.columns,_e=d.decodeChannels[Se];if(_e===void 0)continue;M.value=ue+ge;const pe=(d.height-(1+q+ie))*d.outLineWidth;for(let ut=0;ut<d.columns;ut++){const Ge=pe+(ut+z)*d.outputChannels+_e;d.byteArray[Ge]=d.getter(J,M)}}}}}function Dt(){const d=this,x=d.offset,M={value:0};for(let R=0;R<d.height/d.blockHeight;R++){const C=De(d.viewer,x)-Mt.dataWindow.yMin;d.size=Le(d.viewer,x),d.lines=C+d.blockHeight>d.height?d.height-C:d.blockHeight;const U=d.columns*d.totalBytes,q=d.size<d.lines*U?d.uncompress(d):Y(d);x.value+=d.size;for(let V=0;V<d.blockHeight;V++){const j=R*d.blockHeight,J=V+d.scanOrder(j);if(J>=d.height)continue;const ie=V*U,ue=(d.height-1-J)*d.outLineWidth;for(let de=0;de<d.inputChannels.length;de++){const Se=Mt.channels[de].name,ge=d.channelByteOffsets[Se]*d.columns,_e=d.decodeChannels[Se];if(_e!==void 0){M.value=ie+ge;for(let pe=0;pe<d.columns;pe++){const ut=ue+pe*d.outputChannels+_e;d.byteArray[ut]=d.getter(q,M)}}}}}}function Zt(d,x,M){const R={};if(d.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");R.version=d.getUint8(4);const C=d.getUint8(5);R.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},M.value=8;let U=!0;for(;U;){const z=Ee(x,M);if(z==0)U=!1;else{const q=Ee(x,M),V=Le(d,M),j=je(d,x,M,q,V);j===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${q}'.`):R[z]=j}}if((C&-7)!=0)throw console.error("THREE.EXRHeader:",R),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return R}function Rt(d,x,M,R,C){const U={size:0,viewer:x,array:M,offset:R,width:d.dataWindow.xMax-d.dataWindow.xMin+1,height:d.dataWindow.yMax-d.dataWindow.yMin+1,inputChannels:d.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:_n};switch(d.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=Y;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=ae;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=se;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=se;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=re;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=Te;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=ve;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=ve;break;default:throw new Error("EXRLoader.parse: "+d.compression+" is unsupported")}const z={};for(const J of d.channels)switch(J.name){case"Y":case"R":case"G":case"B":case"A":z[J.name]=!0,U.type=J.pixelType}let q=!1;if(z.R&&z.G&&z.B)q=!z.A,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3};else if(z.Y)U.outputChannels=1,U.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(U.type==1)switch(C){case zn:U.getter=oe;break;case rr:U.getter=ee;break}else if(U.type==2)switch(C){case zn:U.getter=We;break;case rr:U.getter=F}else throw new Error("EXRLoader.parse: unsupported pixelType "+U.type+" for "+d.compression+".");U.columns=U.width;const V=U.width*U.height*U.outputChannels;switch(C){case zn:U.byteArray=new Float32Array(V),q&&U.byteArray.fill(1,0,V);break;case rr:U.byteArray=new Uint16Array(V),q&&U.byteArray.fill(15360,0,V);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let j=0;for(const J of d.channels)U.decodeChannels[J.name]!==void 0&&(U.channelByteOffsets[J.name]=j),j+=J.pixelType*2;if(U.totalBytes=j,U.outLineWidth=U.width*U.outputChannels,d.lineOrder==="INCREASING_Y"?U.scanOrder=J=>J:U.scanOrder=J=>U.height-1-J,U.outputChannels==4?(U.format=ni,U.colorSpace=_n):(U.format=Ql,U.colorSpace=tr),d.spec.singleTile){U.blockHeight=d.tiles.ySize,U.blockWidth=d.tiles.xSize;const J=$e(d.tiles,U.width,U.height),ie=Ht(J,U.width,d.tiles.xSize,d.tiles.roundingMode),ue=Ht(J,U.height,d.tiles.ySize,d.tiles.roundingMode);U.tileCount=ie[0]*ue[0];for(let de=0;de<J;de++)for(let Se=0;Se<ue[de];Se++)for(let ge=0;ge<ie[de];ge++)Fe(x,R);U.decode=st.bind(U)}else{U.blockWidth=U.width;const J=Math.ceil(U.height/U.blockHeight);for(let ie=0;ie<J;ie++)Fe(x,R);U.decode=Dt.bind(U)}return U}const wt={value:0},St=new DataView(e),bn=new Uint8Array(e),Mt=Zt(St,e,wt),qt=Rt(Mt,St,bn,wt,this.type);return qt.decode(),{header:Mt,width:qt.width,height:qt.height,data:qt.byteArray,format:qt.format,colorSpace:qt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=hn,o.magFilter=hn,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,n,i)}}class hE{constructor(e){this.canvas=e,this.width=window.innerWidth,this.height=window.innerHeight,this.scene=new aM,this.initRenderer(),this.initLighting(),this.loadEnvironment(),window.addEventListener("resize",this.onResize.bind(this))}initRenderer(){this.renderer=new oM({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=un,this.renderer.toneMapping=Cp,this.renderer.toneMappingExposure=1.35,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ap}initLighting(){this.ambientLight=new FM(16777215,1.2),this.scene.add(this.ambientLight),this.keyLight=new Xo(16777215,3.5),this.keyLight.position.set(5,8,7),this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.width=2048,this.keyLight.shadow.mapSize.height=2048,this.keyLight.shadow.bias=-1e-4,this.scene.add(this.keyLight),this.rimLight=new Xo(16777215,4),this.rimLight.position.set(-6,6,-5),this.scene.add(this.rimLight),this.fillLight=new Xo(15791352,2),this.fillLight.position.set(-5,-4,6),this.scene.add(this.fillLight),this.topLight=new Xo(16777215,2.5),this.topLight.position.set(0,10,0),this.scene.add(this.topLight)}loadEnvironment(){const e=new Yu(this.renderer);e.compileEquirectangularShader(),new uE().load("/assets/envmap-kW4EmG7W.exr",n=>{const i=e.fromEquirectangular(n);this.scene.environment=i.texture,e.dispose(),n.dispose()},void 0,n=>{console.warn("EXR environment fallback:",n)})}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}render(e){this.renderer.render(this.scene,e)}}class fE{constructor(){this.fov=window.innerWidth<768?50:38,this.camera=new Dn(this.fov,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,0,8.2),this.targetPosition=new H(0,0,8.2),this.lookAtTarget=new H(0,0,0),window.addEventListener("resize",this.onResize.bind(this))}onResize(){this.fov=window.innerWidth<768?50:38,this.camera.fov=this.fov,this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}update(e){this.camera.lookAt(this.lookAtTarget)}}function Od(r,e){if(e===v_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Wu||e===Hp){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Wu)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class dE extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vE(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new mE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new IE(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ta.extractUrlBase(e);o=ta.resolveURL(c,this.path)}else o=ta.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Bh(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_m){try{o[mt.KHR_BINARY_GLTF]=new DE(e)}catch(h){i&&i(h);return}s=JSON.parse(o[mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new YE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case mt.KHR_MATERIALS_UNLIT:o[h]=new gE;break;case mt.KHR_DRACO_MESH_COMPRESSION:o[h]=new NE(s,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:o[h]=new UE;break;case mt.KHR_MESH_QUANTIZATION:o[h]=new OE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function pE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class mE{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new nt(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],_n);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Xo(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new UM(u),c.distance=h;break;case"spot":c=new DM(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class gE{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return os}extendParams(e,t,n){const i=[];e.color=new nt(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],_n),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,un))}return Promise.all(i)}}class _E{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class vE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new yt(a,a)}return Promise.all(s)}}class xE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class yE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class SE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new nt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],_n)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,un)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class ME{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class EE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new nt().setRGB(a[0],a[1],a[2],_n),Promise.all(s)}}class TE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class bE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new nt().setRGB(a[0],a[1],a[2],_n),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,un)),Promise.all(s)}}class wE{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class AE{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class RE{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class CE{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PE{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class LE{constructor(e){this.name=mt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,f,i.mode,i.filter),p})})}else return null}}class IE{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==hi.TRIANGLES&&c.mode!==hi.TRIANGLE_STRIP&&c.mode!==hi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const _ of h){const v=new rt,g=new H,m=new Hr,E=new H(1,1,1),T=new dM(_.geometry,_.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&E.fromBufferAttribute(l.SCALE,y),T.setMatrixAt(y,v.compose(g,m,E));for(const y in l)if(y==="_COLOR_0"){const I=l[y];T.instanceColor=new Ku(I.array,I.itemSize,I.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);Yt.prototype.copy.call(T,_),this.parser.assignFinalMaterial(T),p.push(T)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const _m="glTF",Bo=12,Fd={JSON:1313821514,BIN:5130562};class DE{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_m)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Bo,s=new DataView(e,Bo);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Fd.JSON){const c=new Uint8Array(e,Bo+o,a);this.content=n.decode(c)}else if(l===Fd.BIN){const c=Bo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class NE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=ju[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ju[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],p=Qs[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(p){for(const _ in p.attributes){const v=p.attributes[_],g=l[_];g!==void 0&&(v.normalized=g)}h(p)},a,c,_n,f)})})}}class UE{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class OE{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class vm extends Pa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,p=f*h,_=e*c,v=_-c,g=-2*p+3*f,m=p-f,E=1-g,T=m-f+h;for(let y=0;y!==a;y++){const I=o[v+y+a],L=o[v+y+l]*u,A=o[_+y+a],D=o[_+y]*u;s[y]=E*I+T*L+g*A+m*D}return s}}const FE=new Hr;class BE extends vm{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return FE.fromArray(s).normalize().toArray(s),s}}const hi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bd={9728:Un,9729:hn,9984:Lp,9985:Sl,9986:Vo,9987:Ni},kd={33071:Di,33648:Fl,10497:uo},Wc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ju={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kE={CUBICSPLINE:void 0,LINEAR:_a,STEP:ga},Xc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new as({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hr})),r.DefaultMaterial}function Zr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function HE(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function VE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function GE(r){let e;const t=r.extensions&&r.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yc(t.attributes):e=r.indices+":"+Yc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Yc(r.targets[n]);return e}function Yc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ju(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const XE=new rt;class YE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new pE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new LM(this.options.manager):this.textureLoader=new BM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Zr(s,a,i),Ji(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(ta.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Wc[i.type],a=Qs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new On(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Wc[i.type],c=Qs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let v,g;if(p&&p!==h){const m=Math.floor(f/p),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let T=t.cache.get(E);T||(v=new c(a,m*p,i.count*p/u),T=new lM(v,p/u),t.cache.add(E,T)),g=new Nh(T,l,f%p/u,_)}else a===null?v=new c(i.count*l):v=new c(a,f,i.count*l),g=new On(v,l,_);if(i.sparse!==void 0){const m=Wc.SCALAR,E=Qs[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,I=new E(o[1],T,i.sparse.count*m),L=new c(o[2],y,i.sparse.count*l);a!==null&&(g=new On(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,D=I.length;A<D;A++){const b=I[A];if(g.setX(b,L[A*l]),l>=2&&g.setY(b,L[A*l+1]),l>=3&&g.setZ(b,L[A*l+2]),l>=4&&g.setW(b,L[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Bd[f.magFilter]||hn,u.minFilter=Bd[f.minFilter]||Ni,u.wrapS=kd[f.wrapS]||uo,u.wrapT=kd[f.wrapT]||uo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Un&&u.minFilter!==hn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(v){const g=new fn(v);g.needsUpdate=!0,f(g)}),t.load(ta.resolveURL(h,s.path),_,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Ji(h,o),h.userData.mimeType=o.mimeType||WE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[mt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new lm,Fi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new am,Fi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return as}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){const h=i[mt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new nt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],_n),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,un)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Li);const u=s.alphaMode||Xc.OPAQUE;if(u===Xc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Xc.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==os&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new yt(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==os&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==os){const h=s.emissiveFactor;a.emissive=new nt().setRGB(h[0],h[1],h[2],_n)}return s.emissiveTexture!==void 0&&o!==os&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,un)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Ji(h,s),t.associations.set(h,{materials:e}),s.extensions&&Zr(i,h,s),h})}createUniqueName(e){const t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return zd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=GE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=zd(new Gi,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?zE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,_=u.length;p<_;p++){const v=u[p],g=o[p];let m;const E=c[p];if(g.mode===hi.TRIANGLES||g.mode===hi.TRIANGLE_STRIP||g.mode===hi.TRIANGLE_FAN||g.mode===void 0)m=s.isSkinnedMesh===!0?new uM(v,E):new ii(v,E),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===hi.TRIANGLE_STRIP?m.geometry=Od(m.geometry,Hp):g.mode===hi.TRIANGLE_FAN&&(m.geometry=Od(m.geometry,Wu));else if(g.mode===hi.LINES)m=new pM(v,E);else if(g.mode===hi.LINE_STRIP)m=new Fh(v,E);else if(g.mode===hi.LINE_LOOP)m=new mM(v,E);else if(g.mode===hi.POINTS)m=new gM(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&VE(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Ji(m,s),g.extensions&&Zr(i,m,g),t.assignFinalMaterial(m),h.push(m)}for(let p=0,_=h.length;p<_;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&Zr(i,h[0],s),h[0];const f=new or;s.extensions&&Zr(i,f,s),t.associations.set(f,{meshes:e});for(let p=0,_=h.length;p<_;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dn(rs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ih(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new rt;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Oh(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const p=i.channels[h],_=i.samplers[p.sampler],v=p.target,g=v.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,E=i.parameters!==void 0?i.parameters[_.output]:_.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",E)),c.push(_),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],_=h[2],v=h[3],g=h[4],m=[];for(let E=0,T=f.length;E<T;E++){const y=f[E],I=p[E],L=_[E],A=v[E],D=g[E];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const b=n._createAnimationTracks(y,I,L,A,D);if(b)for(let S=0;S<b.length;S++)m.push(b[S])}return new EM(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,XE)});for(let p=0,_=h.length;p<_;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new om:c.length>1?u=new or:c.length===1?u=c[0]:u=new Yt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Ji(u,s),s.extensions&&Zr(n,u,s),s.matrix!==void 0){const h=new rt;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new or;n.name&&(s.name=i.createUniqueName(n.name)),Ji(s,n),n.extensions&&Zr(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of i.associations)(f instanceof Fi||f instanceof fn)&&h.set(f,p);return u.traverse(f=>{const p=i.associations.get(f);p!=null&&h.set(f,p)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];Mr[s.path]===Mr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Mr[s.path]){case Mr.weights:c=go;break;case Mr.rotation:c=_o;break;case Mr.position:case Mr.scale:c=vo;break;default:switch(n.itemSize){case 1:c=go;break;case 2:case 3:default:c=vo;break}break}const u=i.interpolation!==void 0?kE[i.interpolation]:_a,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const _=new c(l[f]+"."+Mr[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ju(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof _o?BE:vm;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qE(r,e,t){const n=e.attributes,i=new Hi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const u=Ju(Qs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new H,l=new H;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,_=f.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),f.normalized){const v=Ju(Qs[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Vi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function zd(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=ju[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return _t.workingColorSpace!==_n&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Ji(r,e),qE(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?HE(r,e.targets,t):r})}class KE{constructor(){this.group=new or,this.group.name="WatchModelRoot",this.isLoaded=!1,this.modelRoot=null,this.explodedProgress=0,this.sharedMaterials={stainlessSteelBrushed:new as({color:14541544,metalness:.96,roughness:.2,envMapIntensity:2.5,name:"shared_steel_brushed"}),stainlessSteelPolished:new as({color:16777215,metalness:.98,roughness:.05,envMapIntensity:3.2,name:"shared_steel_polished"}),goldTourbillon:new as({color:15447096,metalness:.96,roughness:.18,envMapIntensity:2.2,name:"shared_gold"}),rubyJewel:new vi({color:14222377,transmission:.8,transparent:!0,opacity:.95,roughness:.05,ior:1.76,name:"shared_ruby"}),sapphireGlass:new vi({color:16777215,transmission:.96,transparent:!0,opacity:.22,roughness:.01,ior:1.77,depthWrite:!1,name:"shared_glass"}),blackDialBase:new as({color:658190,metalness:.85,roughness:.28,envMapIntensity:1.8,name:"shared_black_dial"})},this.parts={crystalFront:[],crystalBack:[],screws:[],dialParts:[],handHours:[],handMinutes:[],handSeconds:[],tourbillon:[],mainplate:[],backplate:[],barrel:[],rotorWeight:[],bracelet:[],allMeshes:[]},this.initialPositions=new Map,this.loadGLBModel()}loadGLBModel(){new dE().load("/assets/watch-DXFPNOEl.glb",t=>{this.modelRoot=t.scene,this.modelRoot.name="60fps_Watch_Scene";const n=["single-link","single-central-link","dial-background-gray","glowdial","hand-hours-shadow","hand-hours-shadow.001","hand-minutes-shadow"];this.modelRoot.traverse(l=>{const c=l.name;if(n.includes(c)||c.startsWith("single-")&&!c.includes("metal")){l.visible=!1;return}if(l.visible=!0,l.isMesh){l.castShadow=!0,l.receiveShadow=!0,this.parts.allMeshes.push(l);const h=l.material?l.material.name:"";h.includes("glass")||c.includes("crystal")?l.material=this.sharedMaterials.sapphireGlass:c.includes("bracelet")||c.includes("dial-toBracelet")||c.includes("dial-front")||c.includes("xplodedSide")||h.includes("metal-brushed")?(l.material=this.sharedMaterials.stainlessSteelBrushed.clone(),this.parts.bracelet.push(l)):c.startsWith("screw")||c.includes("clasp")||c.includes("dial-outline")||h.includes("metal-glossy")?l.material=this.sharedMaterials.stainlessSteelPolished.clone():c==="dial-background"||h==="dial"?l.material=this.sharedMaterials.blackDialBase.clone():c.includes("ruby")||h.includes("ruby")?l.material=this.sharedMaterials.rubyJewel:c.includes("tourbillon")||c.includes("barrel")||c.includes("Gear")?l.material=this.sharedMaterials.goldTourbillon.clone():l.material&&(l.material.envMapIntensity=2,l.material.needsUpdate=!0)}this.initialPositions.set(l,l.position.clone());const u=c.toLowerCase();u.includes("crystal-front")?this.parts.crystalFront.push(l):u.includes("crystal-back")?this.parts.crystalBack.push(l):u.startsWith("screw")?this.parts.screws.push(l):u.includes("hand-hours")?this.parts.handHours.push(l):u.includes("hand-minutes")?this.parts.handMinutes.push(l):u.includes("seconds")?this.parts.handSeconds.push(l):u.includes("tourbillon")?this.parts.tourbillon.push(l):u.includes("mainplate")?this.parts.mainplate.push(l):u.includes("backplate")?this.parts.backplate.push(l):u.includes("barrel")?this.parts.barrel.push(l):u.includes("weight")?this.parts.rotorWeight.push(l):(u.includes("dial")||u.includes("moon")||u.includes("number"))&&this.parts.dialParts.push(l)});const s=new Hi().setFromObject(this.modelRoot).getCenter(new H);this.modelRoot.position.x=-s.x,this.modelRoot.position.y=-s.y+.002,this.modelRoot.position.z=-s.z;const o=48,a=new or;a.name="Watch_Centered_Wrapper",a.add(this.modelRoot),a.scale.set(o,o,o),this.group.add(a),this.isLoaded=!0},void 0,t=>{console.error("Error loading watch GLB:",t)})}setExplodedProgress(e){if(!this.isLoaded)return;this.explodedProgress=rs.clamp(e,0,1);const t=this.explodedProgress,n=Math.sin(t*Math.PI/2),i=(s,o,a=0,l=0)=>{s.forEach(c=>{const u=this.initialPositions.get(c);u&&(c.position.z=u.z+o*n,c.position.x=u.x+a*n,c.position.y=u.y+l*n)})};i(this.parts.crystalFront,.055),i(this.parts.screws,.045),i(this.parts.handSeconds,.038),i(this.parts.handMinutes,.032),i(this.parts.handHours,.026),i(this.parts.dialParts,.02),i(this.parts.tourbillon,.008),i(this.parts.mainplate,-.008),i(this.parts.barrel,-.016),i(this.parts.backplate,-.026),i(this.parts.rotorWeight,-.038),i(this.parts.crystalBack,-.048)}updateCaseMaterial(e){if(!this.isLoaded)return;const t={silver:{color:14541544,metalness:.96,roughness:.2},rosegold:{color:15248792,metalness:.95,roughness:.18},obsidian:{color:1579293,metalness:.88,roughness:.28},stealth:{color:4014926,metalness:.92,roughness:.22}},n=t[e]||t.silver;this.parts.allMeshes.forEach(s=>{s.material&&s.material.name&&(s.material.name.includes("steel")||s.material.name.includes("metal")||s.name.includes("bracelet")||s.name.includes("dial-toBracelet")||s.name.includes("dial-front")||s.name.includes("xplodedSide")||s.name.includes("clasp"))&&(s.material.color.setHex(n.color),s.material.metalness=n.metalness,s.material.roughness=n.roughness,s.material.needsUpdate=!0)});const i=document.getElementById("hud-color-text");i&&(i.textContent=e==="silver"?"Silver Steel":e==="rosegold"?"18K Rose Gold":e==="obsidian"?"Obsidian DLC":e==="stealth"?"Gunmetal Steel":"Silver Steel")}updateDialColor(e){if(!this.isLoaded)return;const n={classic:658190,midnight:661807,emerald:467992,skeleton:2237482}[e]||658190;this.parts.dialParts.forEach(i=>{i.name==="dial-background"&&i.material&&i.material.color.setHex(n)})}updateStrapMaterial(e){this.updateCaseMaterial("silver")}update(e,t){this.isLoaded&&(this.parts.handSeconds.forEach(n=>{n.rotation.z=-t*(Math.PI/30)}),this.parts.handMinutes.forEach(n=>{n.rotation.z=-(t/60)*(Math.PI/30)}),this.parts.handHours.forEach(n=>{n.rotation.z=-(t/3600)*(Math.PI/6)}),this.parts.tourbillon.forEach(n=>{n.name.includes("tourbillon-xploded-1")||n.name.includes("tourbillon-xploded-2")?n.rotation.z+=e*2.5:n.rotation.z=Math.sin(t*25)*.35}),this.parts.rotorWeight.forEach(n=>{n.rotation.z=Math.sin(t*.8)*.8+Math.sin(t*1.6)*.4}))}}var Hd="1.3.26";function xm(r,e,t){return Math.max(r,Math.min(e,t))}function ZE(r,e,t){return(1-t)*r+t*e}function $E(r,e,t,n){return ZE(r,e,1-Math.exp(-t*n))}function jE(r,e){return(r%e+e)%e}var JE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=xm(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=$E(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function QE(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var eT=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=QE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ym=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const tT=100/6,Er={passive:!1};function Vd(r,e){return r===1?tT:r===2?e:1}var nT=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new ym;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Er),this.element.addEventListener("touchstart",this.onTouchStart,Er),this.element.addEventListener("touchmove",this.onTouchMove,Er),this.element.addEventListener("touchend",this.onTouchEnd,Er)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Er),this.element.removeEventListener("touchstart",this.onTouchStart,Er),this.element.removeEventListener("touchmove",this.onTouchMove,Er),this.element.removeEventListener("touchend",this.onTouchEnd,Er)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Vd(n,this.window.width),s=Vd(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Gd=r=>Math.min(1,1.001-2**(-10*r));var iT=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;_isDraggingSelection=!1;reducedMotionMediaQuery=window.matchMedia("(prefers-reduced-motion: reduce)");isTouching;isIos;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new JE;emitter=new ym;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:_=1,autoResize:v=!0,prevent:g,virtualScroll:m,overscroll:E=!0,autoRaf:T=!1,anchors:y=!1,autoToggle:I=!1,allowNestedScroll:L=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:D=A,stopInertiaOnNavigate:b=!1,respectReducedMotion:S=!0}={}){window.lenisVersion=Hd,window.lenis||(window.lenis={}),window.lenis.version=Hd,h==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Gd:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:p,wheelMultiplier:_,autoResize:v,prevent:g,virtualScroll:m,overscroll:E,autoRaf:T,anchors:y,autoToggle:I,allowNestedScroll:L,naiveDimensions:D,stopInertiaOnNavigate:b,respectReducedMotion:S},this.dimensions=new eT(r,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new nT(t,{touchMultiplier:p,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=o,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=o;return a||l}onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(_=>_ instanceof HTMLElement&&(typeof c=="function"&&c?.(_)||_.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&_.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&_.hasAttribute?.("data-lenis-prevent-horizontal")||i&&_.hasAttribute?.("data-lenis-prevent-touch")||s&&_.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,p=i&&n.type==="touchend";p&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,p=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let _=null;if(typeof f=="string"?(_=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),_||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&f?.nodeType&&(_=f),_){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?y.left:y.top}const v=_.getBoundingClientRect(),g=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),E=getComputedStyle(this.rootElement),T=this.isHorizontal?Number.parseFloat(E.scrollPaddingLeft):Number.parseFloat(E.scrollPaddingTop);f=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(T)?0:T)}}if(typeof f=="number"){if(f+=p,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=f-this.animatedScroll;_>this.limit/2?f-=this.limit:_<-this.limit/2&&(f+=this.limit)}}else f=xm(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Gd:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(_,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),v||this.emit(),v&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,h,f,p,_;if(n-(i.time??0)>2e3){i.time=Date.now();const L=window.getComputedStyle(r);if(i.computedStyle=L,s=["auto","overlay","scroll"].includes(L.overflowX),o=["auto","overlay","scroll"].includes(L.overflowY),c=["auto"].includes(L.overscrollBehaviorX),u=["auto"].includes(L.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,f=r.scrollHeight,p=r.clientWidth,_=r.clientHeight,a=h>p,l=f>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=h,i.scrollHeight=f,i.clientWidth=p,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,h=i.scrollWidth,f=i.scrollHeight,p=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let g,m,E,T,y,I;if(v==="horizontal")g=Math.round(r.scrollLeft),m=h-p,E=e,T=s,y=a,I=c;else if(v==="vertical")g=Math.round(r.scrollTop),m=f-_,E=t,T=o,y=l,I=u;else return!1;return!I&&(g>=m||g<=0)?!0:(E>0?g<m:g>0)&&T&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?jE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Sm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xa={duration:.5,overwrite:!1,delay:0},Vh,gn,Vt,mi=1e8,Ot=1/mi,Qu=Math.PI*2,rT=Qu/4,sT=0,Mm=Math.sqrt,oT=Math.cos,aT=Math.sin,dn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},dr=function(e){return typeof e=="number"},Gh=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},Vn=function(e){return e!==!1},Wh=function(){return typeof window<"u"},ll=function(e){return Kt(e)||dn(e)},Em=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,lT=/random\([^)]+\)/g,cT=/,\s*/g,Wd=/(?:-?\.?\d|\.)+/gi,Tm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bm=/[+-]=-?[.\d]+/,uT=/[^,'"\[\]\s]+/gi,hT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Wt,Ri,eh,Xh,ai={},Hl={},wm,Am=function(e){return(Hl=xo(e,ai))&&Yn},Yh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ya=function(e,t){return!t&&console.warn(e)},Rm=function(e,t){return e&&(ai[e]=t)&&Hl&&(Hl[e]=t)||ai},Sa=function(){return 0},fT={suppressEvents:!0,isStart:!0,kill:!1},Rl={suppressEvents:!0,kill:!1},dT={suppressEvents:!0},qh={},Dr=[],th={},Cm,Jn={},Kc={},Xd=30,Cl=[],Kh="",Zh=function(e){var t=e[0],n,i;if(zi(t)||Kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Cl.length;i--&&!Cl[i].targetTest(t););n=Cl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new jm(e[i],n)))||e.splice(i,1);return e},us=function(e){return e._gsap||Zh(gi(e))[0]._gsap},Pm=function(e,t,n){return(n=e[t])&&Kt(n)?e[t]():Gh(n)&&e.getAttribute&&e.getAttribute(t)||n},Gn=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},eo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},pT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Vl=function(){var e=Dr.length,t=Dr.slice(0),n,i;for(th={},Dr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$h=function(e){return!!(e._initted||e._startAt||e.add)},Lm=function(e,t,n,i){Dr.length&&!gn&&Vl(),e.render(t,n,!!(gn&&t<0&&$h(e))),Dr.length&&!gn&&Vl()},Im=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(uT).length<2?t:dn(e)?e.trim():e},Dm=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},mT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},xo=function(e,t){for(var n in t)e[n]=t[n];return e},Yd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Gl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ia=function(e){var t=e.parent||Wt,n=e.keyframes?mT(Tn(e.keyframes)):li;if(Vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},gT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Nm=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},sc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Fr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},_T=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nh=function(e,t,n,i){return e._startAt&&(gn?e._startAt.revert(Rl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},vT=function r(e){return!e||e._ts&&r(e.parent)},qd=function(e){return e._repeat?yo(e._tTime,e=e.duration()+e._rDelay)*e:0},yo=function(e,t){var n=Math.floor(e=Gt(e/t));return e&&n===e?n-1:n},Wl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},oc=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},ac=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),oc(e),n._dirty||hs(n,e)),e},Um=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Wl(e.rawTime(),t),(!t._dur||Ia(0,t.totalDuration(),n)-t._tTime>Ot)&&t.render(n,!0)),hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ot}},Ii=function(e,t,n,i){return t.parent&&Fr(t),t._start=Gt((dr(n)?n:n||e!==Wt?ui(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Nm(e,t,"_first","_last",e._sort?"_start":0),ih(t)||(e._recent=t),i||Um(e,t),e._ts<0&&ac(e,e._tTime),e},Om=function(e,t){return(ai.ScrollTrigger||Yh("scrollTrigger",t))&&ai.ScrollTrigger.create(t,e)},Fm=function(e,t,n,i,s){if(Jh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!gn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Cm!==ei.frame)return Dr.push(e),e._lazy=[s,i],1},xT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ih=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},yT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&xT(e)&&!(!e._initted&&ih(e))||(e._ts<0||e._dp._ts<0)&&!ih(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ia(0,e._tDur,t),u=yo(l,a),e._yoyo&&u&1&&(o=1-o),u!==yo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||gn||i||e._zTime===Ot||!t&&e._zTime){if(!e._initted&&Fm(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Ot:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&nh(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Fr(e,1),!n&&!gn&&(ri(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ST=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},So=function(e,t,n,i){var s=e._repeat,o=Gt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Gt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&ac(e,e._tTime=e._tDur*a),e.parent&&oc(e),n||hs(e.parent,e),e},Kd=function(e){return e instanceof kn?hs(e):So(e,e._dur)},MT={_start:0,endTime:Sa,totalDuration:Sa},ui=function r(e,t,n){var i=e.labels,s=e._recent||MT,o=e.duration()>=mi?s.endTime(!1):e._dur,a,l,c;return dn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ra=function(e,t,n){var i=dr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;o.immediateRender=Vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new en(t[0],o,t[s+1])},Vr=function(e,t){return e||e===0?t(e):t},Ia=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!dn(e)||!(t=hT.exec(e))?"":t[1]},ET=function(e,t,n){return Vr(n,function(i){return Ia(e,t,i)})},rh=[].slice,Bm=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==Ri},TT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return dn(i)&&!t||Bm(i,1)?(s=n).push.apply(s,gi(i)):n.push(i)})||n},gi=function(e,t,n){return Vt&&!t&&Vt.selector?Vt.selector(e):dn(e)&&!n&&(eh||!Mo())?rh.call((t||Xh).querySelectorAll(e),0):Tn(e)?TT(e,n):Bm(e)?rh.call(e,0):e?[e]:[]},sh=function(e){return e=gi(e)[0]||ya("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gi(t,n.querySelectorAll?n:n===e?ya("Invalid scope")||Xh.createElement("div"):e)}},km=function(e){return e.sort(function(){return .5-Math.random()})},zm=function(e){if(Kt(e))return e;var t=zi(e)?e:{each:e},n=fs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return dn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,p,_){var v=(_||t).length,g=o[v],m,E,T,y,I,L,A,D,b;if(!g){if(b=t.grid==="auto"?0:(t.grid||[1,mi])[1],!b){for(A=-mi;A<(A=_[b++].getBoundingClientRect().left)&&b<v;);b<v&&b--}for(g=o[v]=[],m=l?Math.min(b,v)*u-.5:i%b,E=b===mi?0:l?v*h/b-.5:i/b|0,A=0,D=mi,L=0;L<v;L++)T=L%b-m,y=E-(L/b|0),g[L]=I=c?Math.abs(c==="y"?y:T):Mm(T*T+y*y),I>A&&(A=I),I<D&&(D=I);i==="random"&&km(g),g.max=A-D,g.min=D,g.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(b>v?v-1:c?c==="y"?v/b:b:Math.max(b,v/b))||0)*(i==="edges"?-1:1),g.b=v<0?s-v:s,g.u=Mn(t.amount||t.each)||0,n=n&&v<0?FT(n):n}return v=(g[f]-g.min)/g.max||0,Gt(g.b+(n?n(v):v)*g.v)+g.u}},oh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Gt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(dr(n)?0:Mn(n))}},Hm=function(e,t){var n=Tn(e),i,s;return!n&&zi(e)&&(i=n=e.radius||mi,e.values?(e=gi(e.values),(s=!dr(e[0]))&&(i*=i)):e=oh(e.increment)),Vr(t,n?Kt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mi,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||dr(o)?u:u+Mn(o)}:oh(e))},Vm=function(e,t,n,i){return Vr(Tn(e)?!t:n===!0?!!(n=0):!i,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},bT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},wT=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},AT=function(e,t,n){return Wm(e,t,0,1,n)},Gm=function(e,t,n){return Vr(n,function(i){return e[~~t(i)]})},RT=function r(e,t,n){var i=t-e;return Tn(e)?Gm(e,r(0,e.length),t):Vr(n,function(s){return(i+(s-e)%i)%i+e})},CT=function r(e,t,n){var i=t-e,s=i*2;return Tn(e)?Gm(e,r(0,e.length-1),t):Vr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ma=function(e){return e.replace(lT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(cT);return Vm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Wm=function(e,t,n,i,s){var o=t-e,a=i-n;return Vr(s,function(l){return n+((l-e)/o*a||0)})},PT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=dn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(_){_*=h;var v=Math.min(f,~~_);return u[v](_-v)},n=t}else i||(e=xo(Tn(e)?[]:{},e));if(!u){for(l in t)jh.call(a,e,l,"get",t[l]);s=function(_){return tf(_,a)||(o?e.p:e)}}}return Vr(n,s)},Zd=function(e,t,n){var i=e.labels,s=mi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ri=function(e,t,n){var i=e.vars,s=i[t],o=Vt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Dr.length&&Vl(),a&&(Vt=a),u=l?s.apply(c,l):s.call(c),Vt=o,u},Yo=function(e){return Fr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!gn),e.progress()<1&&ri(e,"onInterrupt"),e},Ks,Xm=[],Ym=function(e){if(e)if(e=!e.name&&e.default||e,Wh()||e.headless){var t=e.name,n=Kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Sa,render:tf,add:jh,kill:qT,modifier:YT,rawVars:0},o={targetTest:0,get:0,getSetter:ef,aliases:{},register:0};if(Mo(),e!==i){if(Jn[t])return;li(i,li(Gl(e,s),o)),xo(i.prototype,xo(s,Gl(e,o))),Jn[i.prop=t]=i,e.targetTest&&(Cl.push(i),qh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Rm(t,i),e.register&&e.register(Yn,i,Wn)}else Xm.push(e)},Ut=255,qo={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},Zc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ut+.5|0},qm=function(e,t,n){var i=e?dr(e)?[e>>16,e>>8&Ut,e&Ut]:0:qo.black,s,o,a,l,c,u,h,f,p,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),qo[e])i=qo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ut,i&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Wd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Zc(l+1/3,s,o),i[1]=Zc(l,s,o),i[2]=Zc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Tm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wd)||qo.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Ut,o=i[1]/Ut,a=i[2]/Ut,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Km=function(e){var t=[],n=[],i=-1;return e.split(Nr).forEach(function(s){var o=s.match(qs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},$d=function(e,t,n){var i="",s=(e+i).match(Nr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=qm(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Km(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Nr,"1").split(qs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Nr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Nr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in qo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),LT=/hsl[a]?\(/,Zm=function(e){var t=e.join(" "),n;if(Nr.lastIndex=0,Nr.test(t))return n=LT.test(t),e[1]=$d(e[1],n),e[0]=$d(e[0],n,Km(e[1])),!0},Ea,ei=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,_=function v(g){var m=r()-i,E=g===!0,T,y,I,L;if((m>e||m<0)&&(n+=m-t),i+=m,I=i-n,T=I-o,(T>0||E)&&(L=++h.frame,f=I-h.time*1e3,h.time=I=I/1e3,o+=T+(T>=s?4:s-T),y=1),E||(l=c(v)),y)for(p=0;p<a.length;p++)a[p](I,f,L,g)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){wm&&(!eh&&Wh()&&(Ri=eh=window,Xh=Ri.document||{},ai.gsap=Yn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Yn.version),Am(Hl||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),Xm.forEach(Ym)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},Ea=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ea=0,c=Sa},lagSmoothing:function(g,m){e=g||1/0,t=Math.min(m||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,m,E){var T=m?function(y,I,L,A){g(y,I,L,A),h.remove(T)}:g;return h.remove(g),a[E?"unshift":"push"](T),Mo(),T},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},h})(),Mo=function(){return!Ea&&ei.wake()},vt={},IT=/^[\d.\-M][\d.\-,\s]/,DT=/["']/g,NT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(DT,"").trim():+c,i=l.substr(a+1).trim();return t},UT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},OT=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[NT(t[1])]:UT(e).split(",").map(Im)):vt._CE&&IT.test(e)?vt._CE("",e):n},FT=function(e){return function(t){return 1-e(1-t)}},fs=function(e,t){return e&&(Kt(e)?e:vt[e]||OT(e))||t},Es=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Gn(e,function(a){vt[a]=ai[a]=s,vt[o=a.toLowerCase()]=n;for(var l in s)vt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=s[l]}),s},$m=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},$c=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Qu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*aT((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:$m(a);return s=Qu/s,l.config=function(c,u){return r(e,c,u)},l},jc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:$m(n);return i.config=function(s){return r(e,s)},i};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Es(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;Es("Elastic",$c("in"),$c("out"),$c());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Es("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Es("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Es("Circ",function(r){return-(Mm(1-r*r)-1)});Es("Sine",function(r){return r===1?1:-oT(r*rT)+1});Es("Back",jc("in"),jc("out"),jc());vt.SteppedEase=vt.steps=ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Ot;return function(a){return((i*Ia(0,o,a)|0)+s)*n}}};xa.ease=vt["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Kh+=r+","+r+"Params,"});var jm=function(e,t){this.id=sT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Pm,this.set=t?t.getSetter:ef},Ta=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,So(this,+t.duration,1,1),this.data=t.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),Ea||ei.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,So(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Mo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ac(this,n),!s._dp||s.parent||Um(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ot||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+qd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+qd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?yo(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ot?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ot?0:this._rts,this.totalTime(Ia(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),oc(this),_T(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Mo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Gt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ii(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=dT);var i=gn;return gn=n,$h(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),gn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Kd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Kd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ui(this,n),Vn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vn(i)),this._dur||(this._zTime=-Ot),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ot,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ot)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Kt(n)?n:Dm,l=function(){var u=i.then;i.then=null,s&&s(),Kt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Yo(this)},r})();li(Ta.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ot,_prom:0,_ps:!1,_rts:1});var kn=(function(r){Sm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Vn(n.sortChildren),Wt&&Ii(n.parent||Wt,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Om(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return ra(0,arguments,this),this},t.from=function(i,s,o){return ra(1,arguments,this),this},t.fromTo=function(i,s,o,a){return ra(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,ia(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(i,s,ui(this,o),1),this},t.call=function(i,s,o){return Ii(this,en.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new en(i,o,ui(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ia(o).immediateRender=Vn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ia(a).immediateRender=Vn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Gt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,_,v,g,m,E,T,y,I,L,A;if(this!==Wt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,y=this._start,T=this._ts,m=!T,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(L=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=Gt(u%g),u===l?(v=this._repeat,f=c):(I=Gt(u/g),v=~~I,v&&v===I&&(f=c,v--),f>c&&(f=c)),I=yo(this._tTime,g),!a&&this._tTime&&I!==v&&this._tTime-I*g-this._dur<=0&&(I=v),L&&v&1&&(f=c-f,A=1),v!==I&&!this._lock){var D=L&&I&1,b=D===(L&&v&1);if(v<I&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(A?0:Gt(v*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,I=v),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=ST(this,Gt(a),Gt(f)),E&&(u-=f-(f=E._start))),this._tTime=u,this._time=f,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!I&&(ri(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&E!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!m){E=0,_&&(u+=this._zTime=-Ot);break}}p=_}else{p=this._last;for(var S=i<0?i:f;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&E!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||gn&&$h(p)),f!==this._time||!this._ts&&!m){E=0,_&&(u+=this._zTime=S?-Ot:Ot);break}}p=_}}if(E&&!s&&(this.pause(),E.render(f>=a?0:-Ot)._zTime=f>=a?1:-1,this._ts))return this._start=y,oc(this),this.render(i,s,o);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Fr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(ri(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(dr(s)||(s=ui(this,s,i)),!(i instanceof Ta)){if(Tn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(dn(i))return this.addLabel(i,s);if(Kt(i))i=en.delayedCall(0,i);else return this}return this!==i?Ii(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof en?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return dn(i)?this.removeLabel(i):Kt(i)?this.killTweensOf(i):(i.parent===this&&sc(this,i),i===this._recent&&(this._recent=this._last),hs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ui(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=en.delayedCall(0,s||Sa,o);return a.data="isPause",this._hasPause=1,Ii(this,a,ui(this,i))},t.removePause=function(i){var s=this._first;for(i=ui(this,i);s;)s._start===i&&s.data==="isPause"&&Fr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)wr!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=gi(i),l=this._first,c=dr(s),u;l;)l instanceof en?pT(l._targets,a)&&(c?(!wr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=ui(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,_=en.to(o,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ot,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==g&&So(_,g,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,h||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,li({startAt:{time:ui(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Zd(this,ui(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Zd(this,ui(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ot)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Gt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return hs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),hs(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=mi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ii(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Gt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;So(o,o===Wt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Wt._ts&&(Lm(Wt,Wl(i,Wt)),Cm=ei.frame),ei.frame>=Xd){Xd+=oi.autoSleep||120;var s=Wt._first;if((!s||!s._ts)&&oi.autoSleep&&ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ei.sleep()}}},e})(Ta);li(kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var BT=function(e,t,n,i,s,o,a){var l=new Wn(this._pt,e,t,0,1,ig,null,s),c=0,u=0,h,f,p,_,v,g,m,E;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ma(i)),o&&(E=[n,i],o(E,e,t),n=E[0],i=E[1]),f=n.match(qc)||[];h=qc.exec(i);)_=h[0],v=i.substring(c,h.index),p?p=(p+1)%5:v.substr(-5)==="rgba("&&(p=1),_!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:g,c:_.charAt(1)==="="?eo(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},c=qc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(bm.test(i)||m)&&(l.e=0),this._pt=l,l},jh=function(e,t,n,i,s,o,a,l,c,u){Kt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Kt(h)?c?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=Kt(h)?c?GT:tg:Qh,_;if(dn(i)&&(~i.indexOf("random(")&&(i=Ma(i)),i.charAt(1)==="="&&(_=eo(f,i)+(Mn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||ah)return!isNaN(f*i)&&i!==""?(_=new Wn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?XT:ng,0,p),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&Yh(t,i),BT.call(this,e,t,f,i,p,l||oi.stringFilter,c))},kT=function(e,t,n,i,s){if(Kt(e)&&(e=sa(e,s,t,n,i)),!zi(e)||e.style&&e.nodeType||Tn(e)||Em(e))return dn(e)?sa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=sa(e[a],s,t,n,i);return o},Jm=function(e,t,n,i,s,o){var a,l,c,u;if(Jn[e]&&(a=new Jn[e]).init(s,a.rawVars?t[e]:kT(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Wn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ks))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},wr,ah,Jh=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,p=i.autoRevert,_=e._dur,v=e._startAt,g=e._targets,m=e.parent,E=m&&m.data==="nested"?m.vars.targets:g,T=e._overwrite==="auto"&&!Vh,y=e.timeline,I=i.easeReverse||h,L,A,D,b,S,N,k,G,$,ne,Z,K,X;if(y&&(!f||!s)&&(s="none"),e._ease=fs(s,xa.ease),e._rEase=I&&(fs(I)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||f&&!i.stagger){if(G=g[0]?us(g[0]).harness:0,K=G&&i[G.prop],L=Gl(i,qh),v&&(v._zTime<0&&v.progress(1),t<0&&u&&a&&!p?v.render(-1,!0):v.revert(u&&_?Rl:fT),v._lazy=0),o){if(Fr(e._startAt=en.set(g,li({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn||!a&&!p)&&e._startAt.revert(Rl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!v){if(t&&(a=!1),D=li({overwrite:!1,data:"isFromStart",lazy:a&&!v&&Vn(l),immediateRender:a,stagger:0,parent:m},L),K&&(D[G.prop]=K),Fr(e._startAt=en.set(g,D)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(gn?e._startAt.revert(Rl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Ot,Ot);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Vn(l)||l&&!_,A=0;A<g.length;A++){if(S=g[A],k=S._gsap||Zh(g)[A]._gsap,e._ptLookup[A]=ne={},th[k.id]&&Dr.length&&Vl(),Z=E===g?A:E.indexOf(S),G&&($=new G).init(S,K||L,e,Z,E)!==!1&&(e._pt=b=new Wn(e._pt,S,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(le){ne[le]=b}),$.priority&&(N=1)),!G||K)for(D in L)Jn[D]&&($=Jm(D,L,e,Z,S,E))?$.priority&&(N=1):ne[D]=b=jh.call(e,S,D,"get",L[D],Z,E,0,i.stringFilter);e._op&&e._op[A]&&e.kill(S,e._op[A]),T&&e._pt&&(wr=e,Wt.killTweensOf(S,ne,e.globalTime(t)),X=!e.parent,wr=0),e._pt&&l&&(th[k.id]=1)}N&&rg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&y.render(mi,!0,!0)},zT=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,p;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(u=f[p][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return ah=1,e.vars[t]="+=0",Jh(e,a),ah=0,l?ya(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=$t(n)+Mn(h.e)),h.b&&(h.b=u.s+Mn(h.b))},HT=function(e,t){var n=e[0]?us(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=xo({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},VT=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Tn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},sa=function(e,t,n,i,s){return Kt(e)?e.call(t,n,i,s):dn(e)&&~e.indexOf("random(")?Ma(e):e},Qm=Kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",eg={};Gn(Qm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return eg[r]=1});var en=(function(r){Sm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ia(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,v=l.defaults,g=l.scrollTrigger,m=i.parent||Wt,E=(Tn(n)||Em(n)?dr(n[0]):"length"in i)?[n]:gi(n),T,y,I,L,A,D,b,S;if(a._targets=E.length?Zh(E):ya("GSAP target "+n+" not found. https://gsap.com",!oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||ll(c)||ll(u)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(T=a.timeline=new kn({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:E}),T.kill(),T.parent=T._dp=Qi(a),T._start=0,f||ll(c)||ll(u)){if(L=E.length,b=f&&zm(f),zi(f))for(A in f)~Qm.indexOf(A)&&(S||(S={}),S[A]=f[A]);for(y=0;y<L;y++)I=Gl(i,eg),I.stagger=0,N&&(I.easeReverse=N),S&&xo(I,S),D=E[y],I.duration=+sa(c,Qi(a),y,D,E),I.delay=(+sa(u,Qi(a),y,D,E)||0)-a._delay,!f&&L===1&&I.delay&&(a._delay=u=I.delay,a._start+=u,I.delay=0),T.to(D,I,b?b(y,D,E):0),T._ease=vt.none;T.duration()?c=u=0:a.timeline=0}else if(_){ia(li(T.vars.defaults,{ease:"none"})),T._ease=fs(_.ease||i.ease||"none");var k=0,G,$,ne;if(Tn(_))_.forEach(function(Z){return T.to(E,Z,">")}),T.duration();else{I={};for(A in _)A==="ease"||A==="easeEach"||VT(A,_[A],I,_.easeEach);for(A in I)for(G=I[A].sort(function(Z,K){return Z.t-K.t}),k=0,y=0;y<G.length;y++)$=G[y],ne={ease:$.e,duration:($.t-(y?G[y-1].t:0))/100*c},ne[A]=$.v,T.to(E,ne,k),k+=ne.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||a.duration(c=T.duration())}else a.timeline=0;return p===!0&&!Vh&&(wr=Qi(a),Wt.killTweensOf(E),wr=0),Ii(m,Qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Gt(m._time)&&Vn(h)&&vT(Qi(a))&&m.data!=="nested")&&(a._tTime=-Ot,a.render(Math.max(0,-u)||0)),g&&Om(Qi(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ot&&!u?l:i<Ot?0:i,f,p,_,v,g,m,E,T;if(!c)yT(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,T=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+i,s,o);if(f=Gt(h%v),h===l?(_=this._repeat,f=c):(g=Gt(h/v),_=~~g,_&&_===g?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),g=yo(this._tTime,v),f===a&&!o&&this._initted&&_===g)return this._tTime=h,this;_!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==v&&this._initted&&(this._lock=o=1,this.render(Gt(v*_),!0).invalidate()._lock=0)}if(!this._initted){if(Fm(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var I=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=I?(y?-1:1)/I:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=E=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=E=this._ease(f/c);if(this._from&&(this.ratio=E=1-E),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!g&&(ri(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(E,p.d),p=p._next;T&&T.render(i<0?i:T._dur*T._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&nh(this,i,s,o),ri(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&nh(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Fr(this,1),!s&&!(u&&!a)&&(h||a||m)&&(ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Ea||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Jh(this,c),u=this._ease(c/this._dur),zT(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(ac(this,0),this.parent||Nm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Yo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!gn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,wr&&wr.vars.overwrite!==!0)._first||Yo(this),this.parent&&o!==this.timeline.totalDuration()&&So(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,u=this._pt,h,f,p,_,v,g,m;if((!s||s==="all")&&gT(a,l))return s==="all"&&(this._pt=0),Yo(this);for(h=this._op=this._op||[],s!=="all"&&(dn(s)&&(v={},Gn(s,function(E){return v[E]=1}),s=v),s=HT(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(h[m]=s,_=f,p={}):(p=h[m]=h[m]||{},_=s);for(v in _)g=f&&f[v],g&&((!("kill"in g.d)||g.d.kill(v)===!0)&&sc(this,g,"_pt"),delete f[v]),p!=="all"&&(p[v]=1)}return this._initted&&!this._pt&&u&&Yo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return ra(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return ra(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Wt.killTweensOf(i,s,o)},e})(Ta);li(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(r){en[r]=function(){var e=new kn,t=rh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qh=function(e,t,n){return e[t]=n},tg=function(e,t,n){return e[t](n)},GT=function(e,t,n,i){return e[t](i.fp,n)},WT=function(e,t,n){return e.setAttribute(t,n)},ef=function(e,t){return Kt(e[t])?tg:Gh(e[t])&&e.setAttribute?WT:Qh},ng=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},XT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ig=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},tf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},YT=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},qT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?sc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},KT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},rg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Wn=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ng,this.d=l||this,this.set=c||Qh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=KT,this.m=n,this.mt=s,this.tween=i},r})();Gn(Kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return qh[r]=1});ai.TweenMax=ai.TweenLite=en;ai.TimelineLite=ai.TimelineMax=kn;Wt=new kn({sortChildren:!1,defaults:xa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=Zm;var ds=[],Pl={},ZT=[],jd=0,$T=0,Jc=function(e){return(Pl[e]||ZT).map(function(t){return t()})},lh=function(){var e=Date.now(),t=[];e-jd>2&&(Jc("matchMediaInit"),ds.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Ri.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Jc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jd=e,Jc("matchMedia"))},sg=(function(){function r(t,n){this.selector=n&&sh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$T++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Kt(n)&&(s=i,i=n,n=Kt);var o=this,a=function(){var c=Vt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=sh(s)),Vt=o,h=i.apply(o,arguments),Kt(h)&&o._r.push(h),Vt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Kt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Vt;Vt=null,n(this),Vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof en&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ds.length;o--;)ds[o].id===this.id&&ds.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),jT=(function(){function r(t){this.contexts=[],this.scope=t,Vt&&Vt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){zi(n)||(n={matches:n});var o=new sg(0,s||this.scope),a=o.conditions={},l,c,u;Vt&&!o.selector&&(o.selector=Vt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Ri.matchMedia(n[c]),l&&(ds.indexOf(o)<0&&ds.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(lh):l.addEventListener("change",lh)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Xl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ym(i)})},timeline:function(e){return new kn(e)},getTweensOf:function(e,t){return Wt.getTweensOf(e,t)},getProperty:function(e,t,n,i){dn(e)&&(e=gi(e)[0]);var s=us(e||{}).get,o=n?Dm:Im;return n==="native"&&(n=""),e&&(t?o((Jn[t]&&Jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((Jn[a]&&Jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=gi(e),e.length>1){var i=e.map(function(u){return Yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=Jn[t],a=us(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ks._pt=0,h.init(e,n?u+n:u,Ks,0,[e]),h.render(1,h),Ks._pt&&tf(1,Ks)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=Yn.to(e,li((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fs(e.ease,xa.ease)),Yd(xa,e||{})},config:function(e){return Yd(oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Jn[a]&&!ai[a]&&ya(t+" effect requires "+a+" plugin.")}),Kc[t]=function(a,l,c){return n(gi(a),li(l||{},s),c)},o&&(kn.prototype[t]=function(a,l,c){return this.add(Kc[t](a,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){vt[e]=fs(t)},parseEase:function(e,t){return arguments.length?fs(e,t):vt},getById:function(e){return Wt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new kn(e),i,s;for(n.smoothChildTiming=Vn(e.smoothChildTiming),Wt.remove(n),n._dp=0,n._time=n._tTime=Wt._time,i=Wt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof en&&i.vars.onComplete===i._targets[0]))&&Ii(n,i,i._start-i._delay),i=s;return Ii(Wt,n,0),n},context:function(e,t){return e?new sg(e,t):Vt},matchMedia:function(e){return new jT(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||lh()},addEventListener:function(e,t){var n=Pl[e]||(Pl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Pl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:RT,wrapYoyo:CT,distribute:zm,random:Vm,snap:Hm,normalize:AT,getUnit:Mn,clamp:ET,splitColor:qm,toArray:gi,selector:sh,mapRange:Wm,pipe:bT,unitize:wT,interpolate:PT,shuffle:km},install:Am,effects:Kc,ticker:ei,updateRoot:kn.updateRoot,plugins:Jn,globalTimeline:Wt,core:{PropTween:Wn,globals:Rm,Tween:en,Timeline:kn,Animation:Ta,getCache:us,_removeLinkedListItem:sc,reverting:function(){return gn},context:function(e){return e&&Vt&&(Vt.data.push(e),e._ctx=Vt),Vt},suppressOverwrites:function(e){return Vh=e}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xl[r]=en[r]});ei.add(kn.updateRoot);Ks=Xl.to({},{duration:0});var JT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},QT=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=JT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Qc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(dn(s)&&(l={},Gn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}QT(a,s)}}}},Yn=Xl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)gn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Qc("roundProps",oh),Qc("modifiers"),Qc("snap",Hm))||Xl;en.version=kn.version=Yn.version="3.15.0";wm=1;Wh()&&Mo();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Jd,Ar,to,nf,ls,Qd,rf,eb=function(){return typeof window<"u"},pr={},es=180/Math.PI,no=Math.PI/180,ks=Math.atan2,ep=1e8,sf=/([A-Z])/g,tb=/(left|right|width|margin|padding|x)/i,nb=/[\s,\(]\S/,Ui={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ch=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ib=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ob=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},og=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ag=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ab=function(e,t,n){return e.style[t]=n},lb=function(e,t,n){return e.style.setProperty(t,n)},cb=function(e,t,n){return e._gsap[t]=n},ub=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},hb=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},fb=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Xt="transform",Xn=Xt+"Origin",db=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in pr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ui[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=er(i,a)}):this.tfm[e]=o.x?o[e]:er(i,e),e===Xn&&(this.tfm.zOrigin=o.zOrigin);else return Ui.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Xt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Xt}(s||t)&&this.props.push(e,t,s[e])},lg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(sf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=rf(),(!s||!s.isStart)&&!n[Xt]&&(lg(n),i.zOrigin&&n[Xn]&&(n[Xn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},cg=function(e,t){var n={target:e,props:[],revert:pb,save:db};return e._gsap||Yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ug,uh=function(e,t){var n=Ar.createElementNS?Ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ar.createElement(e);return n&&n.style?n:Ar.createElement(e)},si=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(sf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Eo(t)||t,1)||""},tp="O,Moz,ms,Ms,Webkit".split(","),Eo=function(e,t,n){var i=t||ls,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(tp[o]+e in s););return o<0?null:(o===3?"ms":o>=0?tp[o]:"")+e},hh=function(){eb()&&window.document&&(Jd=window,Ar=Jd.document,to=Ar.documentElement,ls=uh("div")||{style:{}},uh("div"),Xt=Eo(Xt),Xn=Xt+"Origin",ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ug=!!Eo("perspective"),rf=Yn.core.reverting,nf=1)},np=function(e){var t=e.ownerSVGElement,n=uh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),to.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),to.removeChild(n),s},ip=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hg=function(e){var t,n;try{t=e.getBBox()}catch{t=np(e),n=1}return t&&(t.width||t.height)||n||(t=np(e)),t&&!t.width&&!t.x&&!t.y?{x:+ip(e,["x","cx","x1"])||0,y:+ip(e,["y","cy","y1"])||0,width:0,height:0}:t},fg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hg(e))},Br=function(e,t){if(t){var n=e.style,i;t in pr&&t!==Xn&&(t=Xt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(sf,"-$1").toLowerCase())):n.removeAttribute(t)}},Rr=function(e,t,n,i,s,o){var a=new Wn(e._pt,t,n,0,1,o?ag:og);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},rp={deg:1,rad:1,turn:1},mb={grid:1,flex:1},kr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ls.style,l=tb.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",_,v,g,m;if(i===o||!s||rp[i]||rp[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&fg(e),(p||o==="%")&&(pr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],$t(p?s/_*h:s/100*_);if(a[l?"width":"height"]=h+(f?o:i),v=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Ar||!v.appendChild)&&(v=Ar.body),g=v._gsap,g&&p&&g.width&&l&&g.time===ei.time&&!g.uncache)return $t(s/g.width*h);if(p&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=h+i,_=e[u],E?e.style[t]=E:Br(e,t)}else(p||o==="%")&&!mb[si(v,"display")]&&(a.position=si(e,"position")),v===e&&(a.position="static"),v.appendChild(ls),_=ls[u],v.removeChild(ls),a.position="absolute";return l&&p&&(g=us(v),g.time=ei.time,g.width=v[u]),$t(f?_*s/h:_&&s?h/_*s:0)},er=function(e,t,n,i){var s;return nf||hh(),t in Ui&&t!=="transform"&&(t=Ui[t],~t.indexOf(",")&&(t=t.split(",")[0])),pr[t]&&t!=="transform"?(s=wa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ql(si(e,Xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Yl[t]&&Yl[t](e,t,n)||si(e,t)||Pm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?kr(e,t,s,n)+n:s},gb=function(e,t,n,i){if(!n||n==="none"){var s=Eo(t,e,1),o=s&&si(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=si(e,"borderTopColor"))}var a=new Wn(this._pt,e.style,t,0,1,ig),l=0,c=0,u,h,f,p,_,v,g,m,E,T,y,I;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=si(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(v=e.style[t],e.style[t]=i,i=si(e,t)||i,v?e.style[t]=v:Br(e,t)),u=[n,i],Zm(u),n=u[0],i=u[1],f=n.match(qs)||[],I=i.match(qs)||[],I.length){for(;h=qs.exec(i);)g=h[0],E=i.substring(l,h.index),_?_=(_+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(_=1),g!==(v=f[c++]||"")&&(p=parseFloat(v)||0,y=v.substr((p+"").length),g.charAt(1)==="="&&(g=eo(p,g)+y),m=parseFloat(g),T=g.substr((m+"").length),l=qs.lastIndex-T.length,T||(T=T||oi.units[t]||y,l===i.length&&(i+=T,a.e+=T)),y!==T&&(p=kr(e,t,v,T)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:p,c:m-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?ag:og;return bm.test(i)&&(a.e=0),this._pt=a,a},sp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_b=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=sp[n]||n,t[1]=sp[i]||i,t.join(" ")},vb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],pr[a]&&(l=1,a=a==="transformOrigin"?Xn:Xt),Br(n,a);l&&(Br(n,Xt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",wa(n,1),o.uncache=1,lg(i)))}},Yl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Wn(e._pt,t,n,0,0,vb);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},ba=[1,0,0,1,0,0],dg={},pg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},op=function(e){var t=si(e,Xt);return pg(t)?ba:t.substr(7).match(Tm).map($t)},of=function(e,t){var n=e._gsap||us(e),i=e.style,s=op(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ba:s):(s===ba&&!e.offsetParent&&e!==to&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,to.appendChild(e)),s=op(e),l?i.display=l:Br(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):to.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fh=function(e,t,n,i,s,o){var a=e._gsap,l=s||of(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],v=l[2],g=l[3],m=l[4],E=l[5],T=t.split(" "),y=parseFloat(T[0])||0,I=parseFloat(T[1])||0,L,A,D,b;n?l!==ba&&(A=p*g-_*v)&&(D=y*(g/A)+I*(-v/A)+(v*E-g*m)/A,b=y*(-_/A)+I*(p/A)-(p*E-_*m)/A,y=D,I=b):(L=hg(e),y=L.x+(~T[0].indexOf("%")?y/100*L.width:y),I=L.y+(~(T[1]||T[0]).indexOf("%")?I/100*L.height:I)),i||i!==!1&&a.smooth?(m=y-c,E=I-u,a.xOffset=h+(m*p+E*v)-m,a.yOffset=f+(m*_+E*g)-E):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=I,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Xn]="0px 0px",o&&(Rr(o,a,"xOrigin",c,y),Rr(o,a,"yOrigin",u,I),Rr(o,a,"xOffset",h,a.xOffset),Rr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+I)},wa=function(e,t){var n=e._gsap||new jm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=si(e,Xn)||"0",u,h,f,p,_,v,g,m,E,T,y,I,L,A,D,b,S,N,k,G,$,ne,Z,K,X,le,O,ye,Ie,Xe,te,ce;return u=h=f=v=g=m=E=T=y=0,p=_=1,n.svg=!!(e.getCTM&&fg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),i.scale=i.rotate=i.translate="none"),A=of(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),fh(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,A)),I=n.xOrigin||0,L=n.yOrigin||0,A!==ba&&(N=A[0],k=A[1],G=A[2],$=A[3],u=ne=A[4],h=Z=A[5],A.length===6?(p=Math.sqrt(N*N+k*k),_=Math.sqrt($*$+G*G),v=N||k?ks(k,N)*es:0,E=G||$?ks(G,$)*es+v:0,E&&(_*=Math.abs(Math.cos(E*no))),n.svg&&(u-=I-(I*N+L*G),h-=L-(I*k+L*$))):(ce=A[6],Xe=A[7],O=A[8],ye=A[9],Ie=A[10],te=A[11],u=A[12],h=A[13],f=A[14],D=ks(ce,Ie),g=D*es,D&&(b=Math.cos(-D),S=Math.sin(-D),K=ne*b+O*S,X=Z*b+ye*S,le=ce*b+Ie*S,O=ne*-S+O*b,ye=Z*-S+ye*b,Ie=ce*-S+Ie*b,te=Xe*-S+te*b,ne=K,Z=X,ce=le),D=ks(-G,Ie),m=D*es,D&&(b=Math.cos(-D),S=Math.sin(-D),K=N*b-O*S,X=k*b-ye*S,le=G*b-Ie*S,te=$*S+te*b,N=K,k=X,G=le),D=ks(k,N),v=D*es,D&&(b=Math.cos(D),S=Math.sin(D),K=N*b+k*S,X=ne*b+Z*S,k=k*b-N*S,Z=Z*b-ne*S,N=K,ne=X),g&&Math.abs(g)+Math.abs(v)>359.9&&(g=v=0,m=180-m),p=$t(Math.sqrt(N*N+k*k+G*G)),_=$t(Math.sqrt(Z*Z+ce*ce)),D=ks(ne,Z),E=Math.abs(D)>2e-4?D*es:0,y=te?1/(te<0?-te:te):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!pg(si(e,Xt)),K&&e.setAttribute("transform",K))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(p*=-1,E+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=$t(p),n.scaleY=$t(_),n.rotation=$t(v)+a,n.rotationX=$t(g)+a,n.rotationY=$t(m)+a,n.skewX=E+a,n.skewY=T+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Xn]=ql(c)),n.xOffset=n.yOffset=0,n.force3D=oi.force3D,n.renderTransform=n.svg?yb:ug?mg:xb,n.uncache=0,n},ql=function(e){return(e=e.split(" "))[0]+" "+e[1]},eu=function(e,t,n){var i=Mn(t);return $t(parseFloat(t)+parseFloat(kr(e,"x",n+"px",i)))+i},xb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mg(e,t)},$r="0deg",ko="0px",jr=") ",mg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,_=n.scaleX,v=n.scaleY,g=n.transformPerspective,m=n.force3D,E=n.target,T=n.zOrigin,y="",I=m==="auto"&&e&&e!==1||m===!0;if(T&&(h!==$r||u!==$r)){var L=parseFloat(u)*no,A=Math.sin(L),D=Math.cos(L),b;L=parseFloat(h)*no,b=Math.cos(L),o=eu(E,o,A*b*-T),a=eu(E,a,-Math.sin(L)*-T),l=eu(E,l,D*b*-T+T)}g!==ko&&(y+="perspective("+g+jr),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(I||o!==ko||a!==ko||l!==ko)&&(y+=l!==ko||I?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+jr),c!==$r&&(y+="rotate("+c+jr),u!==$r&&(y+="rotateY("+u+jr),h!==$r&&(y+="rotateX("+h+jr),(f!==$r||p!==$r)&&(y+="skew("+f+", "+p+jr),(_!==1||v!==1)&&(y+="scale("+_+", "+v+jr),E.style[Xt]=y||"translate(0, 0)"},yb=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,_=n.xOrigin,v=n.yOrigin,g=n.xOffset,m=n.yOffset,E=n.forceCSS,T=parseFloat(o),y=parseFloat(a),I,L,A,D,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=no,c*=no,I=Math.cos(l)*h,L=Math.sin(l)*h,A=Math.sin(l-c)*-f,D=Math.cos(l-c)*f,c&&(u*=no,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,D*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),I*=b,L*=b)),I=$t(I),L=$t(L),A=$t(A),D=$t(D)):(I=h,D=f,L=A=0),(T&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(T=kr(p,"x",o,"px"),y=kr(p,"y",a,"px")),(_||v||g||m)&&(T=$t(T+_-(_*I+v*A)+g),y=$t(y+v-(_*L+v*D)+m)),(i||s)&&(b=p.getBBox(),T=$t(T+i/100*b.width),y=$t(y+s/100*b.height)),b="matrix("+I+","+L+","+A+","+D+","+T+","+y+")",p.setAttribute("transform",b),E&&(p.style[Xt]=b)},Sb=function(e,t,n,i,s){var o=360,a=dn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?es:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*ep)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*ep)%o-~~(c/o)*o)),e._pt=f=new Wn(e._pt,t,n,i,c,ib),f.e=u,f.u="deg",e._props.push(n),f},ap=function(e,t){for(var n in t)e[n]=t[n];return e},Mb=function(e,t,n){var i=ap({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Xt]=t,a=wa(n,1),Br(n,Xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xt],o[Xt]=t,a=wa(n,1),o[Xt]=c);for(l in pr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Mn(c),_=Mn(u),h=p!==_?kr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Wn(e._pt,a,l,h,f-h,ch),e._pt.u=_||0,e._props.push(l));ap(a,i)};Gn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Yl[e>1?"border"+r:r]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(_){return er(a,_,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(_,v){return p[_]=f[v]=f[v]||f[(v-1)/2|0]}),a.init(l,p,h)}});var gg={name:"css",register:hh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,p,_,v,g,m,E,T,y,I,L,A,D,b;nf||hh(),this.styles=this.styles||cg(e),D=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(u=t[v],!(Jn[v]&&Jm(v,t,n,i,e,s)))){if(p=typeof u,_=Yl[v],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ma(u)),_)_(this,e,v,u,n)&&(A=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Nr.lastIndex=0,Nr.test(c)||(g=Mn(c),m=Mn(u),m?g!==m&&(c=kr(e,v,c,m)+m):g&&(u+=g)),this.add(a,"setProperty",c,u,i,s,0,0,v),o.push(v),D.push(v,0,a[v]);else if(p!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,e,s):l[v],dn(c)&&~c.indexOf("random(")&&(c=Ma(c)),Mn(c+"")||c==="auto"||(c+=oi.units[v]||Mn(er(e,v))||""),(c+"").charAt(1)==="="&&(c=er(e,v))):c=er(e,v),f=parseFloat(c),E=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),h=parseFloat(u),v in Ui&&(v==="autoAlpha"&&(f===1&&er(e,"visibility")==="hidden"&&h&&(f=0),D.push("visibility",0,a.visibility),Rr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),v!=="scale"&&v!=="transform"&&(v=Ui[v],~v.indexOf(",")&&(v=v.split(",")[0]))),T=v in pr,T){if(this.styles.save(v),b=u,p==="string"&&u.substring(0,6)==="var(--"){if(u=si(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=si(e,"perspective"),S?e.style.perspective=S:Br(e,"perspective")}h=parseFloat(u)}if(y||(I=e._gsap,I.renderTransform&&!t.parseTransform||wa(e,t.parseTransform),L=t.smoothOrigin!==!1&&I.smooth,y=this._pt=new Wn(this._pt,a,Xt,0,1,I.renderTransform,I,0,-1),y.dep=1),v==="scale")this._pt=new Wn(this._pt,I,"scaleY",I.scaleY,(E?eo(I.scaleY,E+h):h)-I.scaleY||0,ch),this._pt.u=0,o.push("scaleY",v),v+="X";else if(v==="transformOrigin"){D.push(Xn,0,a[Xn]),u=_b(u),I.svg?fh(e,u,0,L,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==I.zOrigin&&Rr(this,I,"zOrigin",I.zOrigin,m),Rr(this,a,v,ql(c),ql(u)));continue}else if(v==="svgOrigin"){fh(e,u,1,L,0,this);continue}else if(v in dg){Sb(this,I,v,f,E?eo(f,E+u):u);continue}else if(v==="smoothOrigin"){Rr(this,I,"smooth",I.smooth,u);continue}else if(v==="force3D"){I[v]=u;continue}else if(v==="transform"){Mb(this,u,e);continue}}else v in a||(v=Eo(v)||v);if(T||(h||h===0)&&(f||f===0)&&!nb.test(u)&&v in a)g=(c+"").substr((f+"").length),h||(h=0),m=Mn(u)||(v in oi.units?oi.units[v]:g),g!==m&&(f=kr(e,v,c,m)),this._pt=new Wn(this._pt,T?I:a,v,f,(E?eo(f,E+h):h)-f,!T&&(m==="px"||v==="zIndex")&&t.autoRound!==!1?ob:ch),this._pt.u=m||0,T&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=sb):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=rb);else if(v in a)gb.call(this,e,v,c,E?E+u:u);else if(v in e)this.add(e,v,c||e[v],E?E+u:u,i,s);else if(v!=="parseTransform"){Yh(v,u);continue}T||(v in a?D.push(v,0,a[v]):typeof e[v]=="function"?D.push(v,2,e[v]()):D.push(v,1,c||e[v])),o.push(v)}}A&&rg(this)},render:function(e,t){if(t.tween._time||!rf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:er,aliases:Ui,getSetter:function(e,t,n){var i=Ui[t];return i&&i.indexOf(",")<0&&(t=i),t in pr&&t!==Xn&&(e._gsap.x||er(e,"x"))?n&&Qd===n?t==="scale"?ub:cb:(Qd=n||{})&&(t==="scale"?hb:fb):e.style&&!Gh(e.style[t])?ab:~t.indexOf("-")?lb:ef(e,t)},core:{_removeProperty:Br,_getMatrix:of}};Yn.utils.checkPrefix=Eo;Yn.core.getStyleSaver=cg;(function(r,e,t,n){var i=Gn(r+","+e+","+t,function(s){pr[s]=1});Gn(e,function(s){oi.units[s]="deg",dg[s]=1}),Ui[i[13]]=r+","+e,Gn(n,function(s){var o=s.split(":");Ui[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){oi.units[r]="px"});Yn.registerPlugin(gg);var To=Yn.registerPlugin(gg)||Yn;To.core.Tween;function Eb(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Tb(r,e,t){return e&&Eb(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mn,Ll,ti,Cr,Pr,io,_g,ts,ro,vg,ar,Ei,xg,yg=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},Sg=1,Zs=[],dt=[],Bi=[],oa=Date.now,dh=function(e,t){return t},bb=function(){var e=ro.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,dt),i.push.apply(i,Bi),dt=n,Bi=i,dh=function(o,a){return t[o](a)}},Ur=function(e,t){return~Bi.indexOf(e)&&Bi[Bi.indexOf(e)+1][t]},aa=function(e){return!!~vg.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},An=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},cl="scrollLeft",ul="scrollTop",ph=function(){return ar&&ar.isPressed||dt.cache++},Kl=function(e,t){var n=function i(s){if(s||s===0){Sg&&(ti.history.scrollRestoration="manual");var o=ar&&ar.isPressed;s=i.v=Math.round(s)||(ar&&ar.iOS?1:0),e(s),i.cacheID=dt.cache,o&&dh("ss",s)}else(t||dt.cache!==i.cacheID||dh("ref"))&&(i.cacheID=dt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Nn={s:cl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Kl(function(r){return arguments.length?ti.scrollTo(r,nn.sc()):ti.pageXOffset||Cr[cl]||Pr[cl]||io[cl]||0})},nn={s:ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:Kl(function(r){return arguments.length?ti.scrollTo(Nn.sc(),r):ti.pageYOffset||Cr[ul]||Pr[ul]||io[ul]||0})},Bn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},wb=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},zr=function(e,t){var n=t.s,i=t.sc;aa(e)&&(e=Cr.scrollingElement||Pr);var s=dt.indexOf(e),o=i===nn.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+o]||Rn(e,"scroll",ph);var a=dt[s+o],l=a||(dt[s+o]=Kl(Ur(e,n),!0)||(aa(e)?i:Kl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},mh=function(e,t,n){var i=e,s=e,o=oa(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,v){var g=oa();v||g-o>l?(s=i,i=_,a=o,o=g):n?i+=_:i=s+(_-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(_){var v=a,g=s,m=oa();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-v)*1e3};return{update:u,reset:h,getVelocity:f}},zo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},lp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Mg=function(){ro=mn.core.globals().ScrollTrigger,ro&&ro.core&&bb()},Eg=function(e){return mn=e||yg(),!Ll&&mn&&typeof document<"u"&&document.body&&(ti=window,Cr=document,Pr=Cr.documentElement,io=Cr.body,vg=[ti,Cr,Pr,io],mn.utils.clamp,xg=mn.core.context||function(){},ts="onpointerenter"in io?"pointer":"mouse",_g=jt.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=jt.eventTypes=("ontouchstart"in Pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sg=0},500),Ll=1),ro||Mg(),Ll};Nn.op=nn;dt.cache=0;var jt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ll||Eg(mn)||console.warn("Please gsap.registerPlugin(Observer)"),ro||Mg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,p=n.ignore,_=n.wheelSpeed,v=n.event,g=n.onDragStart,m=n.onDragEnd,E=n.onDrag,T=n.onPress,y=n.onRelease,I=n.onRight,L=n.onLeft,A=n.onUp,D=n.onDown,b=n.onChangeX,S=n.onChangeY,N=n.onChange,k=n.onToggleX,G=n.onToggleY,$=n.onHover,ne=n.onHoverEnd,Z=n.onMove,K=n.ignoreCheck,X=n.isNormalizer,le=n.onGestureStart,O=n.onGestureEnd,ye=n.onWheel,Ie=n.onEnable,Xe=n.onDisable,te=n.onClick,ce=n.scrollSpeed,he=n.capture,fe=n.allowClicks,Ce=n.lockAxis,Oe=n.onLockAxis;this.target=a=Bn(a)||Pr,this.vars=n,p&&(p=mn.utils.toArray(p)),i=i||1e-9,s=s||0,_=_||1,ce=ce||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(io).lineHeight)||22);var Ye,Qe,Ve,ze,B,bt,qe,W=this,Ne=0,pt=0,He=n.passive||!u&&n.passive!==!1,P=zr(a,Nn),w=zr(a,nn),Y=P(),ae=w(),se=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ei[0]==="pointerdown",re=aa(a),Te=a.ownerDocument||Cr,ve=[0,0,0],Ee=[0,0,0],et=0,me=function(){return et=oa()},xe=function(Be,tt){return(W.event=Be)&&p&&wb(Be.target,p)||tt&&se&&Be.pointerType!=="touch"||K&&K(Be,tt)},De=function(){W._vx.reset(),W._vy.reset(),Qe.pause(),h&&h(W)},Le=function(){var Be=W.deltaX=lp(ve),tt=W.deltaY=lp(Ee),we=Math.abs(Be)>=i,je=Math.abs(tt)>=i;N&&(we||je)&&N(W,Be,tt,ve,Ee),we&&(I&&W.deltaX>0&&I(W),L&&W.deltaX<0&&L(W),b&&b(W),k&&W.deltaX<0!=Ne<0&&k(W),Ne=W.deltaX,ve[0]=ve[1]=ve[2]=0),je&&(D&&W.deltaY>0&&D(W),A&&W.deltaY<0&&A(W),S&&S(W),G&&W.deltaY<0!=pt<0&&G(W),pt=W.deltaY,Ee[0]=Ee[1]=Ee[2]=0),(ze||Ve)&&(Z&&Z(W),Ve&&(g&&Ve===1&&g(W),E&&E(W),Ve=0),ze=!1),bt&&!(bt=!1)&&Oe&&Oe(W),B&&(ye(W),B=!1),Ye=0},Pe=function(Be,tt,we){ve[we]+=Be,Ee[we]+=tt,W._vx.update(Be),W._vy.update(tt),c?Ye||(Ye=requestAnimationFrame(Le)):Le()},Ke=function(Be,tt){Ce&&!qe&&(W.axis=qe=Math.abs(Be)>Math.abs(tt)?"x":"y",bt=!0),qe!=="y"&&(ve[2]+=Be,W._vx.update(Be,!0)),qe!=="x"&&(Ee[2]+=tt,W._vy.update(tt,!0)),c?Ye||(Ye=requestAnimationFrame(Le)):Le()},Fe=function(Be){if(!xe(Be,1)){Be=zo(Be,u);var tt=Be.clientX,we=Be.clientY,je=tt-W.x,ke=we-W.y,$e=W.isDragging;W.x=tt,W.y=we,($e||(je||ke)&&(Math.abs(W.startX-tt)>=s||Math.abs(W.startY-we)>=s))&&(Ve||(Ve=$e?2:1),$e||(W.isDragging=!0),Ke(je,ke))}},We=W.onPress=function(Re){xe(Re,1)||Re&&Re.button||(W.axis=qe=null,Qe.pause(),W.isPressed=!0,Re=zo(Re),Ne=pt=0,W.startX=W.x=Re.clientX,W.startY=W.y=Re.clientY,W._vx.reset(),W._vy.reset(),Rn(X?a:Te,Ei[1],Fe,He,!0),W.deltaX=W.deltaY=0,T&&T(W))},F=W.onRelease=function(Re){if(!xe(Re,1)){An(X?a:Te,Ei[1],Fe,!0);var Be=!isNaN(W.y-W.startY),tt=W.isDragging,we=tt&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),je=zo(Re);!we&&Be&&(W._vx.reset(),W._vy.reset(),u&&fe&&mn.delayedCall(.08,function(){if(oa()-et>300&&!Re.defaultPrevented){if(Re.target.click)Re.target.click();else if(Te.createEvent){var ke=Te.createEvent("MouseEvents");ke.initMouseEvent("click",!0,!0,ti,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),Re.target.dispatchEvent(ke)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&tt&&!X&&Qe.restart(!0),Ve&&Le(),m&&tt&&m(W),y&&y(W,we)}},Q=function(Be){return Be.touches&&Be.touches.length>1&&(W.isGesturing=!0)&&le(Be,W.isDragging)},ee=function(){return(W.isGesturing=!1)||O(W)},oe=function(Be){if(!xe(Be)){var tt=P(),we=w();Pe((tt-Y)*ce,(we-ae)*ce,1),Y=tt,ae=we,h&&Qe.restart(!0)}},Me=function(Be){if(!xe(Be)){Be=zo(Be,u),ye&&(B=!0);var tt=(Be.deltaMode===1?l:Be.deltaMode===2?ti.innerHeight:1)*_;Pe(Be.deltaX*tt,Be.deltaY*tt,0),h&&!X&&Qe.restart(!0)}},be=function(Be){if(!xe(Be)){var tt=Be.clientX,we=Be.clientY,je=tt-W.x,ke=we-W.y;W.x=tt,W.y=we,ze=!0,h&&Qe.restart(!0),(je||ke)&&Ke(je,ke)}},Ze=function(Be){W.event=Be,$(W)},xt=function(Be){W.event=Be,ne(W)},zt=function(Be){return xe(Be)||zo(Be,u)&&te(W)};Qe=W._dc=mn.delayedCall(f||.25,De).pause(),W.deltaX=W.deltaY=0,W._vx=mh(0,50,!0),W._vy=mh(0,50,!0),W.scrollX=P,W.scrollY=w,W.isDragging=W.isGesturing=W.isPressed=!1,xg(this),W.enable=function(Re){return W.isEnabled||(Rn(re?Te:a,"scroll",ph),o.indexOf("scroll")>=0&&Rn(re?Te:a,"scroll",oe,He,he),o.indexOf("wheel")>=0&&Rn(a,"wheel",Me,He,he),(o.indexOf("touch")>=0&&_g||o.indexOf("pointer")>=0)&&(Rn(a,Ei[0],We,He,he),Rn(Te,Ei[2],F),Rn(Te,Ei[3],F),fe&&Rn(a,"click",me,!0,!0),te&&Rn(a,"click",zt),le&&Rn(Te,"gesturestart",Q),O&&Rn(Te,"gestureend",ee),$&&Rn(a,ts+"enter",Ze),ne&&Rn(a,ts+"leave",xt),Z&&Rn(a,ts+"move",be)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=ze=Ve=!1,W._vx.reset(),W._vy.reset(),Y=P(),ae=w(),Re&&Re.type&&We(Re),Ie&&Ie(W)),W},W.disable=function(){W.isEnabled&&(Zs.filter(function(Re){return Re!==W&&aa(Re.target)}).length||An(re?Te:a,"scroll",ph),W.isPressed&&(W._vx.reset(),W._vy.reset(),An(X?a:Te,Ei[1],Fe,!0)),An(re?Te:a,"scroll",oe,he),An(a,"wheel",Me,he),An(a,Ei[0],We,he),An(Te,Ei[2],F),An(Te,Ei[3],F),An(a,"click",me,!0),An(a,"click",zt),An(Te,"gesturestart",Q),An(Te,"gestureend",ee),An(a,ts+"enter",Ze),An(a,ts+"leave",xt),An(a,ts+"move",be),W.isEnabled=W.isPressed=W.isDragging=!1,Xe&&Xe(W))},W.kill=W.revert=function(){W.disable();var Re=Zs.indexOf(W);Re>=0&&Zs.splice(Re,1),ar===W&&(ar=0)},Zs.push(W),X&&aa(a)&&(ar=W),W.enable(v)},Tb(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();jt.version="3.15.0";jt.create=function(r){return new jt(r)};jt.register=Eg;jt.getAll=function(){return Zs.slice()};jt.getById=function(r){return Zs.filter(function(e){return e.vars.id===r})[0]};yg()&&mn.registerPlugin(jt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ue,Gs,ft,Pt,Qn,At,af,Zl,Aa,la,Ko,hl,yn,lc,gh,Ln,cp,up,Ws,Tg,tu,bg,Pn,_h,wg,Ag,Tr,vh,lf,so,cf,ca,xh,nu,fl=1,Sn=Date.now,iu=Sn(),_i=0,Zo=0,hp=function(e,t,n){var i=jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},fp=function(e,t){return t&&(!jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ab=function r(){return Zo&&requestAnimationFrame(r)},dp=function(){return lc=1},pp=function(){return lc=0},Ci=function(e){return e},$o=function(e){return Math.round(e*1e5)/1e5||0},Rg=function(){return typeof window<"u"},Cg=function(){return Ue||Rg()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},xs=function(e){return!!~af.indexOf(e)},Pg=function(e){return(e==="Height"?cf:ft["inner"+e])||Qn["client"+e]||At["client"+e]},Lg=function(e){return Ur(e,"getBoundingClientRect")||(xs(e)?function(){return Ol.width=ft.innerWidth,Ol.height=cf,Ol}:function(){return ir(e)})},Rb=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ur(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Pg(s):e["client"+s])||0}},Cb=function(e,t){return!t||~Bi.indexOf(e)?Lg(e):function(){return Ol}},Oi=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ur(e,n))?o()-Lg(e)()[s]:xs(e)?(Qn[n]||At[n])-Pg(i):e[n]-e["offset"+i])},dl=function(e,t){for(var n=0;n<Ws.length;n+=3)(!t||~t.indexOf(Ws[n+1]))&&e(Ws[n],Ws[n+1],Ws[n+2])},jn=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},jo=function(e){return typeof e=="number"},ns=function(e){return typeof e=="object"},Ho=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},zs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Hs=Math.abs,Ig="left",Dg="top",uf="right",hf="bottom",ps="width",ms="height",ua="Right",ha="Left",fa="Top",da="Bottom",Qt="padding",fi="margin",bo="Width",ff="Height",tn="px",di=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Pb=function(e){var t=di(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},mp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ir=function(e,t){var n=t&&di(e)[gh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},$l=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ng=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Lb=function(e){return function(t){return Ue.utils.snap(Ng(e),t)}},df=function(e){var t=Ue.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Ib=function(e){return function(t,n){return df(Ng(e))(t,n.direction)}},pl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},cn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},ln=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ml=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},gp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},gl={toggleActions:"play",anticipatePin:0},jl={top:0,left:0,center:.5,bottom:1,right:1},Il=function(e,t){if(jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in jl?jl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},_l=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,p=s.fontWeight,_=Pt.createElement("div"),v=xs(n)||Ur(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,m=v?At:n.tagName==="IFRAME"?n.contentDocument.body:n,E=e.indexOf("start")!==-1,T=E?c:u,y="border-color:"+T+";font-size:"+h+";color:"+T+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&v?"fixed;":"absolute;"),(g||l||!v)&&(y+=(i===nn?uf:hf)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=E,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Dl(_,0,i,E),_},Dl=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+bo]=1,s["border"+a+bo]=0,s[n.p]=t+"px",Ue.set(e,s)},ct=[],yh={},Ra,_p=function(){return Sn()-_i>34&&(Ra||(Ra=requestAnimationFrame(ur)))},Vs=function(){(!Pn||!Pn.isPressed||Pn.startX>At.clientWidth)&&(dt.cache++,Pn?Ra||(Ra=requestAnimationFrame(ur)):ur(),_i||Ss("scrollStart"),_i=Sn())},ru=function(){Ag=ft.innerWidth,wg=ft.innerHeight},Jo=function(e){dt.cache++,(e===!0||!yn&&!bg&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!_h||Ag!==ft.innerWidth||Math.abs(ft.innerHeight-wg)>ft.innerHeight*.25))&&Zl.restart(!0)},ys={},Db=[],Ug=function r(){return ln(at,"scrollEnd",r)||cs(!0)},Ss=function(e){return ys[e]&&ys[e].map(function(t){return t()})||Db},$n=[],Og=function(e){for(var t=0;t<$n.length;t+=5)(!e||$n[t+4]&&$n[t+4].query===e)&&($n[t].style.cssText=$n[t+1],$n[t].getBBox&&$n[t].setAttribute("transform",$n[t+2]||""),$n[t+3].uncache=1)},Fg=function(){return dt.forEach(function(e){return En(e)&&++e.cacheID&&(e.rec=e())})},pf=function(e,t){var n;for(Ln=0;Ln<ct.length;Ln++)n=ct[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ca=!0,t&&Og(t),t||Ss("revert")},Bg=function(e,t){dt.cache++,(t||!In)&&dt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),jn(e)&&(ft.history.scrollRestoration=lf=e)},In,gs=0,vp,Nb=function(){if(vp!==gs){var e=vp=gs;requestAnimationFrame(function(){return e===gs&&cs(!0)})}},kg=function(){At.appendChild(so),cf=!Pn&&so.offsetHeight||ft.innerHeight,At.removeChild(so)},xp=function(e){return Aa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},cs=function(e,t){if(Qn=Pt.documentElement,At=Pt.body,af=[ft,Pt,Qn,At],_i&&!e&&!ca){cn(at,"scrollEnd",Ug);return}kg(),In=at.isRefreshing=!0,ca||Fg();var n=Ss("refreshInit");Tg&&at.sort(),t||pf(),dt.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ct.slice(0).forEach(function(i){return i.refresh()}),ca=!1,ct.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),xh=1,xp(!0),ct.forEach(function(i){var s=Oi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),xp(!1),xh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),dt.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Bg(lf,1),Zl.pause(),gs++,In=2,ur(2),ct.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=at.isRefreshing=!1,Ss("refresh")},Sh=0,Nl=1,pa,ur=function(e){if(e===2||!In&&!ca){at.isUpdating=!0,pa&&pa.update(0);var t=ct.length,n=Sn(),i=n-iu>=50,s=t&&ct[0].scroll();if(Nl=Sh>s?-1:1,In||(Sh=s),i&&(_i&&!lc&&n-_i>200&&(_i=0,Ss("scrollEnd")),Ko=iu,iu=n),Nl<0){for(Ln=t;Ln-- >0;)ct[Ln]&&ct[Ln].update(0,i);Nl=1}else for(Ln=0;Ln<t;Ln++)ct[Ln]&&ct[Ln].update(0,i);at.isUpdating=!1}Ra=0},Mh=[Ig,Dg,hf,uf,fi+da,fi+ua,fi+fa,fi+ha,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ul=Mh.concat([ps,ms,"boxSizing","max"+bo,"max"+ff,"position",fi,Qt,Qt+fa,Qt+ua,Qt+da,Qt+ha]),Ub=function(e,t,n){oo(n);var i=e._gsap;if(i.spacerIsNative)oo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},su=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Mh.length,o=t.style,a=e.style,l;s--;)l=Mh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[hf]=a[uf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ps]=$l(e,Nn)+tn,o[ms]=$l(e,nn)+tn,o[Qt]=a[fi]=a[Dg]=a[Ig]="0",oo(i),a[ps]=a["max"+bo]=n[ps],a[ms]=a["max"+ff]=n[ms],a[Qt]=n[Qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Ob=/([A-Z])/g,oo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Ob,"-$1").toLowerCase())}},vl=function(e){for(var t=Ul.length,n=e.style,i=[],s=0;s<t;s++)i.push(Ul[s],n[Ul[s]]);return i.t=e,i},Fb=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Ol={left:0,top:0},yp=function(e,t,n,i,s,o,a,l,c,u,h,f,p,_){En(e)&&(e=e(l)),jn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Il("0"+e.substr(3),n):0));var v=p?p.time():0,g,m,E;if(p&&p.seek(0),isNaN(e)||(e=+e),jo(e))p&&(e=Ue.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&Dl(a,n,i,!0);else{En(t)&&(t=t(l));var T=(e||"0").split(" "),y,I,L,A;E=Bn(t,l)||At,y=ir(E)||{},(!y||!y.left&&!y.top)&&di(E).display==="none"&&(A=E.style.display,E.style.display="block",y=ir(E),A?E.style.display=A:E.style.removeProperty("display")),I=Il(T[0],y[i.d]),L=Il(T[1]||"0",n),e=y[i.p]-c[i.p]-u+I+s-L,a&&Dl(a,L,i,n-L<20||a._isStart&&L>20),n-=n-L}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var D=e+n,b=o._isStart;g="scroll"+i.d2,Dl(o,D,i,b&&D>20||!b&&(h?Math.max(At[g],Qn[g]):o.parentNode[g])<=D+1),h&&(c=ir(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+tn))}return p&&E&&(g=ir(E),p.seek(f),m=ir(E),p._caScrollDist=g[i.p]-m[i.p],e=e/p._caScrollDist*f),p&&p.seek(v),p?e:Math.round(e)},Bb=/(webkit|moz|length|cssText|inset)/i,Sp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===At){e._stOrig=s.cssText,a=di(e);for(o in a)!+o&&!Bb.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},zg=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},xl=function(e,t,n){var i={};i[t.p]="+="+n,Ue.set(e,i)},Mp=function(e,t){var n=zr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,p=l.onComplete,_={};c=c||n();var v=zg(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return v(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){dt.cache++,o.tween&&ur()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Ue.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",n.wheelHandler),at.isTouch&&cn(e,"touchmove",n.wheelHandler),s},at=(function(){function r(t,n){Gs||r.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),vh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Zo){this.update=this.refresh=this.kill=Ci;return}n=mp(jn(n)||jo(n)||n.nodeType?{trigger:n}:n,gl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,v=s.invalidateOnRefresh,g=s.anticipatePin,m=s.onScrubComplete,E=s.onSnapComplete,T=s.once,y=s.snap,I=s.pinReparent,L=s.pinSpacer,A=s.containerAnimation,D=s.fastScrollEnd,b=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:nn,N=!h&&h!==0,k=Bn(n.scroller||ft),G=Ue.core.getCache(k),$=xs(k),ne=("pinType"in n?n.pinType:Ur(k,"pinType")||$&&"fixed")==="fixed",Z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],K=N&&n.toggleActions.split(" "),X="markers"in n?n.markers:gl.markers,le=$?0:parseFloat(di(k)["border"+S.p2+bo])||0,O=this,ye=n.onRefreshInit&&function(){return n.onRefreshInit(O)},Ie=Rb(k,$,S),Xe=Cb(k,$),te=0,ce=0,he=0,fe=zr(k,S),Ce,Oe,Ye,Qe,Ve,ze,B,bt,qe,W,Ne,pt,He,P,w,Y,ae,se,re,Te,ve,Ee,et,me,xe,De,Le,Pe,Ke,Fe,We,F,Q,ee,oe,Me,be,Ze,xt;if(O._startClamp=O._endClamp=!1,O._dir=S,g*=45,O.scroller=k,O.scroll=A?A.time.bind(A):fe,Qe=fe(),O.vars=n,i=i||n.animation,"refreshPriority"in n&&(Tg=1,n.refreshPriority===-9999&&(pa=O)),G.tweenScroll=G.tweenScroll||{top:Mp(k,nn),left:Mp(k,Nn)},O.tweenTo=Ce=G.tweenScroll[S.p],O.scrubDuration=function(we){Q=jo(we)&&we,Q?F?F.duration(we):F=Ue.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return m&&m(O)}}):(F&&F.progress(1).kill(),F=0)},i&&(i.vars.lazy=!1,i._initted&&!O.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),O.animation=i.pause(),i.scrollTrigger=O,O.scrubDuration(h),Fe=0,l||(l=i.vars.id)),y&&((!ns(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in At.style&&Ue.set($?[At,Qn]:k,{scrollBehavior:"auto"}),dt.forEach(function(we){return En(we)&&we.target===($?Pt.scrollingElement||Qn:k)&&(we.smooth=!1)}),Ye=En(y.snapTo)?y.snapTo:y.snapTo==="labels"?Lb(i):y.snapTo==="labelsDirectional"?Ib(i):y.directional!==!1?function(we,je){return df(y.snapTo)(we,Sn()-ce<500?0:je.direction)}:Ue.utils.snap(y.snapTo),ee=y.duration||{min:.1,max:2},ee=ns(ee)?la(ee.min,ee.max):la(ee,ee),oe=Ue.delayedCall(y.delay||Q/2||.1,function(){var we=fe(),je=Sn()-ce<500,ke=Ce.tween;if((je||Math.abs(O.getVelocity())<10)&&!ke&&!lc&&te!==we){var $e=(we-ze)/P,Ht=i&&!N?i.totalProgress():$e,st=je?0:(Ht-We)/(Sn()-Ko)*1e3||0,Dt=Ue.utils.clamp(-$e,1-$e,Hs(st/2)*st/.185),Zt=$e+(y.inertia===!1?0:Dt),Rt,wt,St=y,bn=St.onStart,Mt=St.onInterrupt,qt=St.onComplete;if(Rt=Ye(Zt,O),jo(Rt)||(Rt=Zt),wt=Math.max(0,Math.round(ze+Rt*P)),we<=B&&we>=ze&&wt!==we){if(ke&&!ke._initted&&ke.data<=Hs(wt-we))return;y.inertia===!1&&(Dt=Rt-$e),Ce(wt,{duration:ee(Hs(Math.max(Hs(Zt-Ht),Hs(Rt-Ht))*.185/st/.05||0)),ease:y.ease||"power3",data:Hs(wt-we),onInterrupt:function(){return oe.restart(!0)&&Mt&&zs(O,Mt)},onComplete:function(){O.update(),te=fe(),i&&!N&&(F?F.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),Fe=We=i&&!N?i.totalProgress():O.progress,E&&E(O),qt&&zs(O,qt)}},we,Dt*P,wt-we-Dt*P),bn&&zs(O,bn,Ce.tween)}}else O.isActive&&te!==we&&oe.restart(!0)}).pause()),l&&(yh[l]=O),f=O.trigger=Bn(f||p!==!0&&p),xt=f&&f._gsap&&f._gsap.stRevert,xt&&(xt=xt(O)),p=p===!0?f:Bn(p),jn(a)&&(a={targets:f,className:a}),p&&(_===!1||_===fi||(_=!_&&p.parentNode&&p.parentNode.style&&di(p.parentNode).display==="flex"?!1:Qt),O.pin=p,Oe=Ue.core.getCache(p),Oe.spacer?w=Oe.pinState:(L&&(L=Bn(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Oe.spacerIsNative=!!L,L&&(Oe.spacerState=vl(L))),Oe.spacer=se=L||Pt.createElement("div"),se.classList.add("pin-spacer"),l&&se.classList.add("pin-spacer-"+l),Oe.pinState=w=vl(p)),n.force3D!==!1&&Ue.set(p,{force3D:!0}),O.spacer=se=Oe.spacer,Ke=di(p),me=Ke[_+S.os2],Te=Ue.getProperty(p),ve=Ue.quickSetter(p,S.a,tn),su(p,se,Ke),ae=vl(p)),X){pt=ns(X)?mp(X,gp):gp,W=_l("scroller-start",l,k,S,pt,0),Ne=_l("scroller-end",l,k,S,pt,0,W),re=W["offset"+S.op.d2];var zt=Bn(Ur(k,"content")||k);bt=this.markerStart=_l("start",l,zt,S,pt,re,0,A),qe=this.markerEnd=_l("end",l,zt,S,pt,re,0,A),A&&(Ze=Ue.quickSetter([bt,qe],S.a,tn)),!ne&&!(Bi.length&&Ur(k,"fixedMarkers")===!0)&&(Pb($?At:k),Ue.set([W,Ne],{force3D:!0}),De=Ue.quickSetter(W,S.a,tn),Pe=Ue.quickSetter(Ne,S.a,tn))}if(A){var Re=A.vars.onUpdate,Be=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){O.update(0,0,1),Re&&Re.apply(A,Be||[])})}if(O.previous=function(){return ct[ct.indexOf(O)-1]},O.next=function(){return ct[ct.indexOf(O)+1]},O.revert=function(we,je){if(!je)return O.kill(!0);var ke=we!==!1||!O.enabled,$e=yn;ke!==O.isReverted&&(ke&&(Me=Math.max(fe(),O.scroll.rec||0),he=O.progress,be=i&&i.progress()),bt&&[bt,qe,W,Ne].forEach(function(Ht){return Ht.style.display=ke?"none":"block"}),ke&&(yn=O,O.update(ke)),p&&(!I||!O.isActive)&&(ke?Ub(p,se,w):su(p,se,di(p),xe)),ke||O.update(ke),yn=$e,O.isReverted=ke)},O.refresh=function(we,je,ke,$e){if(!((yn||!O.enabled)&&!je)){if(p&&we&&_i){cn(r,"scrollEnd",Ug);return}!In&&ye&&ye(O),yn=O,Ce.tween&&!ke&&(Ce.tween.kill(),Ce.tween=0),F&&F.pause(),v&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ge){return ge.vars.immediateRender&&ge.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),O.isReverted||O.revert(!0,!0),O._subPinOffset=!1;var Ht=Ie(),st=Xe(),Dt=A?A.duration():Oi(k,S),Zt=P<=.01||!P,Rt=0,wt=$e||0,St=ns(ke)?ke.end:n.end,bn=n.endTrigger||f,Mt=ns(ke)?ke.start:n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),qt=O.pinnedContainer=n.pinnedContainer&&Bn(n.pinnedContainer,O),d=f&&Math.max(0,ct.indexOf(O))||0,x=d,M,R,C,U,z,q,V,j,J,ie,ue,de,Se;for(X&&ns(ke)&&(de=Ue.getProperty(W,S.p),Se=Ue.getProperty(Ne,S.p));x-- >0;)q=ct[x],q.end||q.refresh(0,1)||(yn=O),V=q.pin,V&&(V===f||V===p||V===qt)&&!q.isReverted&&(ie||(ie=[]),ie.unshift(q),q.revert(!0,!0)),q!==ct[x]&&(d--,x--);for(En(Mt)&&(Mt=Mt(O)),Mt=hp(Mt,"start",O),ze=yp(Mt,f,Ht,S,fe(),bt,W,O,st,le,ne,Dt,A,O._startClamp&&"_startClamp")||(p?-.001:0),En(St)&&(St=St(O)),jn(St)&&!St.indexOf("+=")&&(~St.indexOf(" ")?St=(jn(Mt)?Mt.split(" ")[0]:"")+St:(Rt=Il(St.substr(2),Ht),St=jn(Mt)?Mt:(A?Ue.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,ze):ze)+Rt,bn=f)),St=hp(St,"end",O),B=Math.max(ze,yp(St||(bn?"100% 0":Dt),bn,Ht,S,fe()+Rt,qe,Ne,O,st,le,ne,Dt,A,O._endClamp&&"_endClamp"))||-.001,Rt=0,x=d;x--;)q=ct[x]||{},V=q.pin,V&&q.start-q._pinPush<=ze&&!A&&q.end>0&&(M=q.end-(O._startClamp?Math.max(0,q.start):q.start),(V===f&&q.start-q._pinPush<ze||V===qt)&&isNaN(Mt)&&(Rt+=M*(1-q.progress)),V===p&&(wt+=M));if(ze+=Rt,B+=Rt,O._startClamp&&(O._startClamp+=Rt),O._endClamp&&!In&&(O._endClamp=B||-.001,B=Math.min(B,Oi(k,S))),P=B-ze||(ze-=.01)&&.001,Zt&&(he=Ue.utils.clamp(0,1,Ue.utils.normalize(ze,B,Me))),O._pinPush=wt,bt&&Rt&&(M={},M[S.a]="+="+Rt,qt&&(M[S.p]="-="+fe()),Ue.set([bt,qe],M)),p&&!(xh&&O.end>=Oi(k,S)))M=di(p),U=S===nn,C=fe(),Ee=parseFloat(Te(S.a))+wt,!Dt&&B>1&&(ue=($?Pt.scrollingElement||Qn:k).style,ue={style:ue,value:ue["overflow"+S.a.toUpperCase()]},$&&di(At)["overflow"+S.a.toUpperCase()]!=="scroll"&&(ue.style["overflow"+S.a.toUpperCase()]="scroll")),su(p,se,M),ae=vl(p),R=ir(p,!0),j=ne&&zr(k,U?Nn:nn)(),_?(xe=[_+S.os2,P+wt+tn],xe.t=se,x=_===Qt?$l(p,S)+P+wt:0,x&&(xe.push(S.d,x+tn),se.style.flexBasis!=="auto"&&(se.style.flexBasis=x+tn)),oo(xe),qt&&ct.forEach(function(ge){ge.pin===qt&&ge.vars.pinSpacing!==!1&&(ge._subPinOffset=!0)}),ne&&fe(Me)):(x=$l(p,S),x&&se.style.flexBasis!=="auto"&&(se.style.flexBasis=x+tn)),ne&&(z={top:R.top+(U?C-ze:j)+tn,left:R.left+(U?j:C-ze)+tn,boxSizing:"border-box",position:"fixed"},z[ps]=z["max"+bo]=Math.ceil(R.width)+tn,z[ms]=z["max"+ff]=Math.ceil(R.height)+tn,z[fi]=z[fi+fa]=z[fi+ua]=z[fi+da]=z[fi+ha]="0",z[Qt]=M[Qt],z[Qt+fa]=M[Qt+fa],z[Qt+ua]=M[Qt+ua],z[Qt+da]=M[Qt+da],z[Qt+ha]=M[Qt+ha],Y=Fb(w,z,I),In&&fe(0)),i?(J=i._initted,tu(1),i.render(i.duration(),!0,!0),et=Te(S.a)-Ee+P+wt,Le=Math.abs(P-et)>1,ne&&Le&&Y.splice(Y.length-2,2),i.render(0,!0,!0),J||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),tu(0)):et=P,ue&&(ue.value?ue.style["overflow"+S.a.toUpperCase()]=ue.value:ue.style.removeProperty("overflow-"+S.a));else if(f&&fe()&&!A)for(R=f.parentNode;R&&R!==At;)R._pinOffset&&(ze-=R._pinOffset,B-=R._pinOffset),R=R.parentNode;ie&&ie.forEach(function(ge){return ge.revert(!1,!0)}),O.start=ze,O.end=B,Qe=Ve=In?Me:fe(),!A&&!In&&(Qe<Me&&fe(Me),O.scroll.rec=0),O.revert(!1,!0),ce=Sn(),oe&&(te=-1,oe.restart(!0)),yn=0,i&&N&&(i._initted||be)&&i.progress()!==be&&i.progress(be||0,!0).render(i.time(),!0,!0),(Zt||he!==O.progress||A||v||i&&!i._initted)&&(i&&!N&&(i._initted||he||i.vars.immediateRender!==!1)&&i.totalProgress(A&&ze<-.001&&!he?Ue.utils.normalize(ze,B,0):he,!0),O.progress=Zt||(Qe-ze)/P===he?0:he),p&&_&&(se._pinOffset=Math.round(O.progress*et)),F&&F.invalidate(),isNaN(de)||(de-=Ue.getProperty(W,S.p),Se-=Ue.getProperty(Ne,S.p),xl(W,S,de),xl(bt,S,de-($e||0)),xl(Ne,S,Se),xl(qe,S,Se-($e||0))),Zt&&!In&&O.update(),u&&!In&&!He&&(He=!0,u(O),He=!1)}},O.getVelocity=function(){return(fe()-Ve)/(Sn()-Ko)*1e3||0},O.endAnimation=function(){Ho(O.callbackAnimation),i&&(F?F.progress(1):i.paused()?N||Ho(i,O.direction<0,1):Ho(i,i.reversed()))},O.labelToScroll=function(we){return i&&i.labels&&(ze||O.refresh()||ze)+i.labels[we]/i.duration()*P||0},O.getTrailing=function(we){var je=ct.indexOf(O),ke=O.direction>0?ct.slice(0,je).reverse():ct.slice(je+1);return(jn(we)?ke.filter(function($e){return $e.vars.preventOverlaps===we}):ke).filter(function($e){return O.direction>0?$e.end<=ze:$e.start>=B})},O.update=function(we,je,ke){if(!(A&&!ke&&!we)){var $e=In===!0?Me:O.scroll(),Ht=we?0:($e-ze)/P,st=Ht<0?0:Ht>1?1:Ht||0,Dt=O.progress,Zt,Rt,wt,St,bn,Mt,qt,d;if(je&&(Ve=Qe,Qe=A?fe():$e,y&&(We=Fe,Fe=i&&!N?i.totalProgress():st)),g&&p&&!yn&&!fl&&_i&&(!st&&ze<$e+($e-Ve)/(Sn()-Ko)*g?st=1e-4:st===1&&B>$e+($e-Ve)/(Sn()-Ko)*g&&(st=.9999)),st!==Dt&&O.enabled){if(Zt=O.isActive=!!st&&st<1,Rt=!!Dt&&Dt<1,Mt=Zt!==Rt,bn=Mt||!!st!=!!Dt,O.direction=st>Dt?1:-1,O.progress=st,bn&&!yn&&(wt=st&&!Dt?0:st===1?1:Dt===1?2:3,N&&(St=!Mt&&K[wt+1]!=="none"&&K[wt+1]||K[wt],d=i&&(St==="complete"||St==="reset"||St in i))),b&&(Mt||d)&&(d||h||!i)&&(En(b)?b(O):O.getTrailing(b).forEach(function(C){return C.endAnimation()})),N||(F&&!yn&&!fl?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",st,i._tTime/i._tDur):(F.vars.totalProgress=st,F.invalidate().restart())):i&&i.totalProgress(st,!!(yn&&(ce||we)))),p){if(we&&_&&(se.style[_+S.os2]=me),!ne)ve($o(Ee+et*st));else if(bn){if(qt=!we&&st>Dt&&B+1>$e&&$e+1>=Oi(k,S),I)if(!we&&(Zt||qt)){var x=ir(p,!0),M=$e-ze;Sp(p,At,x.top+(S===nn?M:0)+tn,x.left+(S===nn?0:M)+tn)}else Sp(p,se);oo(Zt||qt?Y:ae),Le&&st<1&&Zt||ve(Ee+(st===1&&!qt?et:0))}}y&&!Ce.tween&&!yn&&!fl&&oe.restart(!0),a&&(Mt||T&&st&&(st<1||!nu))&&Aa(a.targets).forEach(function(C){return C.classList[Zt||T?"add":"remove"](a.className)}),o&&!N&&!we&&o(O),bn&&!yn?(N&&(d&&(St==="complete"?i.pause().totalProgress(1):St==="reset"?i.restart(!0).pause():St==="restart"?i.restart(!0):i[St]()),o&&o(O)),(Mt||!nu)&&(c&&Mt&&zs(O,c),Z[wt]&&zs(O,Z[wt]),T&&(st===1?O.kill(!1,1):Z[wt]=0),Mt||(wt=st===1?1:3,Z[wt]&&zs(O,Z[wt]))),D&&!Zt&&Math.abs(O.getVelocity())>(jo(D)?D:2500)&&(Ho(O.callbackAnimation),F?F.progress(1):Ho(i,St==="reverse"?1:!st,1))):N&&o&&!yn&&o(O)}if(Pe){var R=A?$e/A.duration()*(A._caScrollDist||0):$e;De(R+(W._isFlipped?1:0)),Pe(R)}Ze&&Ze(-$e/A.duration()*(A._caScrollDist||0))}},O.enable=function(we,je){O.enabled||(O.enabled=!0,cn(k,"resize",Jo),$||cn(k,"scroll",Vs),ye&&cn(r,"refreshInit",ye),we!==!1&&(O.progress=he=0,Qe=Ve=te=fe()),je!==!1&&O.refresh())},O.getTween=function(we){return we&&Ce?Ce.tween:F},O.setPositions=function(we,je,ke,$e){if(A){var Ht=A.scrollTrigger,st=A.duration(),Dt=Ht.end-Ht.start;we=Ht.start+Dt*we/st,je=Ht.start+Dt*je/st}O.refresh(!1,!1,{start:fp(we,ke&&!!O._startClamp),end:fp(je,ke&&!!O._endClamp)},$e),O.update()},O.adjustPinSpacing=function(we){if(xe&&we){var je=xe.indexOf(S.d)+1;xe[je]=parseFloat(xe[je])+we+tn,xe[1]=parseFloat(xe[1])+we+tn,oo(xe)}},O.disable=function(we,je){if(we!==!1&&O.revert(!0,!0),O.enabled&&(O.enabled=O.isActive=!1,je||F&&F.pause(),Me=0,Oe&&(Oe.uncache=1),ye&&ln(r,"refreshInit",ye),oe&&(oe.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!$)){for(var ke=ct.length;ke--;)if(ct[ke].scroller===k&&ct[ke]!==O)return;ln(k,"resize",Jo),$||ln(k,"scroll",Vs)}},O.kill=function(we,je){O.disable(we,je),F&&!je&&F.kill(),l&&delete yh[l];var ke=ct.indexOf(O);ke>=0&&ct.splice(ke,1),ke===Ln&&Nl>0&&Ln--,ke=0,ct.forEach(function($e){return $e.scroller===O.scroller&&(ke=1)}),ke||In||(O.scroll.rec=0),i&&(i.scrollTrigger=null,we&&i.revert({kill:!1}),je||i.kill()),bt&&[bt,qe,W,Ne].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),pa===O&&(pa=0),p&&(Oe&&(Oe.uncache=1),ke=0,ct.forEach(function($e){return $e.pin===p&&ke++}),ke||(Oe.spacer=0)),n.onKill&&n.onKill(O)},ct.push(O),O.enable(!1,!1),xt&&xt(O),i&&i.add&&!P){var tt=O.update;O.update=function(){O.update=tt,dt.cache++,ze||B||O.refresh()},Ue.delayedCall(.01,O.update),P=.01,ze=B=0}else O.refresh();p&&Nb()},r.register=function(n){return Gs||(Ue=n||Cg(),Rg()&&window.document&&r.enable(),Gs=Zo),Gs},r.defaults=function(n){if(n)for(var i in n)gl[i]=n[i];return gl},r.disable=function(n,i){Zo=0,ct.forEach(function(o){return o[i?"kill":"disable"](n)}),ln(ft,"wheel",Vs),ln(Pt,"scroll",Vs),clearInterval(hl),ln(Pt,"touchcancel",Ci),ln(At,"touchstart",Ci),pl(ln,Pt,"pointerdown,touchstart,mousedown",dp),pl(ln,Pt,"pointerup,touchend,mouseup",pp),Zl.kill(),dl(ln);for(var s=0;s<dt.length;s+=3)ml(ln,dt[s],dt[s+1]),ml(ln,dt[s],dt[s+2])},r.enable=function(){if(ft=window,Pt=document,Qn=Pt.documentElement,At=Pt.body,Ue){if(Aa=Ue.utils.toArray,la=Ue.utils.clamp,vh=Ue.core.context||Ci,tu=Ue.core.suppressOverwrites||Ci,lf=ft.history.scrollRestoration||"auto",Sh=ft.pageYOffset||0,Ue.core.globals("ScrollTrigger",r),At){Zo=1,so=document.createElement("div"),so.style.height="100vh",so.style.position="absolute",kg(),Ab(),jt.register(Ue),r.isTouch=jt.isTouch,Tr=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),_h=jt.isTouch===1,cn(ft,"wheel",Vs),af=[ft,Pt,Qn,At],Ue.matchMedia?(r.matchMedia=function(u){var h=Ue.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ue.addEventListener("matchMediaInit",function(){Fg(),pf()}),Ue.addEventListener("matchMediaRevert",function(){return Og()}),Ue.addEventListener("matchMedia",function(){cs(0,1),Ss("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return ru(),ru})):console.warn("Requires GSAP 3.11.0 or later"),ru(),cn(Pt,"scroll",Vs);var n=At.hasAttribute("style"),i=At.style,s=i.borderTopStyle,o=Ue.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=ir(At),nn.m=Math.round(a.top+nn.sc())||0,Nn.m=Math.round(a.left+Nn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(At.setAttribute("style",""),At.removeAttribute("style")),hl=setInterval(_p,250),Ue.delayedCall(.5,function(){return fl=0}),cn(Pt,"touchcancel",Ci),cn(At,"touchstart",Ci),pl(cn,Pt,"pointerdown,touchstart,mousedown",dp),pl(cn,Pt,"pointerup,touchend,mouseup",pp),gh=Ue.utils.checkPrefix("transform"),Ul.push(gh),Gs=Sn(),Zl=Ue.delayedCall(.2,cs).pause(),Ws=[Pt,"visibilitychange",function(){var u=ft.innerWidth,h=ft.innerHeight;Pt.hidden?(cp=u,up=h):(cp!==u||up!==h)&&Jo()},Pt,"DOMContentLoaded",cs,ft,"load",cs,ft,"resize",Jo],dl(cn),ct.forEach(function(u){return u.enable(0,1)}),l=0;l<dt.length;l+=3)ml(ln,dt[l],dt[l+1]),ml(ln,dt[l],dt[l+2])}else if(Pt){var c=function u(){r.enable(),Pt.removeEventListener("DOMContentLoaded",u)};Pt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(nu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(hl)||(hl=i)&&setInterval(_p,i),"ignoreMobileResize"in n&&(_h=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(dl(ln)||dl(cn,n.autoRefreshEvents||"none"),bg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Bn(n),o=dt.indexOf(s),a=xs(s);~o&&dt.splice(o,a?6:2),i&&(a?Bi.unshift(ft,i,At,i,Qn,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){ct.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(jn(n)?Bn(n):n).getBoundingClientRect(),a=o[s?ps:ms]*i||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},r.positionInViewport=function(n,i,s){jn(n)&&(n=Bn(n));var o=n.getBoundingClientRect(),a=o[s?ps:ms],l=i==null?a/2:i in jl?jl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},r.killAll=function(n){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ys.killAll||[];ys={},i.forEach(function(s){return s()})}},r})();at.version="3.15.0";at.saveStyles=function(r){return r?Aa(r).forEach(function(e){if(e&&e.style){var t=$n.indexOf(e);t>=0&&$n.splice(t,5),$n.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),vh())}}):$n};at.revert=function(r,e){return pf(!r,e)};at.create=function(r,e){return new at(r,e)};at.refresh=function(r){return r?Jo(!0):(Gs||at.register())&&cs(!0)};at.update=function(r){return++dt.cache&&ur(r===!0?2:0)};at.clearScrollMemory=Bg;at.maxScroll=function(r,e){return Oi(r,e?Nn:nn)};at.getScrollFunc=function(r,e){return zr(Bn(r),e?Nn:nn)};at.getById=function(r){return yh[r]};at.getAll=function(){return ct.filter(function(r){return r.vars.id!=="ScrollSmoother"})};at.isScrolling=function(){return!!_i};at.snapDirectional=df;at.addEventListener=function(r,e){var t=ys[r]||(ys[r]=[]);~t.indexOf(e)||t.push(e)};at.removeEventListener=function(r,e){var t=ys[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};at.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],p=Ue.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||p.restart(!0),h.push(_.trigger),f.push(_),s<=h.length&&p.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&En(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return En(s)&&(s=s(),cn(at,"refresh",function(){return s=e.batchMax()})),Aa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(at.create(c))}),t};var Ep=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ou=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===Qn&&r(At,t)},yl={auto:1,scroll:1},kb=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ue.core.getCache(s),a=Sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==At&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(yl[(l=di(s)).overflowY]||yl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!xs(s)&&(yl[(l=di(s)).overflowY]||yl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Hg=function(e,t,n,i){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&kb,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(Pt,jt.eventTypes[0],bp,!1,!0)},onDisable:function(){return ln(Pt,jt.eventTypes[0],bp,!0)}})},zb=/(input|label|select|textarea)/i,Tp,bp=function(e){var t=zb.test(e.target.tagName);(t||Tp)&&(e._gsapAllow=!0,Tp=t)},Hb=function(e){ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Bn(e.target)||Qn,u=Ue.core.globals().ScrollSmoother,h=u&&u.get(),f=Tr&&(e.content&&Bn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=zr(c,nn),_=zr(c,Nn),v=1,g=(jt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,m=0,E=En(i)?function(){return i(a)}:function(){return i||2.8},T,y,I=Hg(c,e.type,!0,s),L=function(){return y=!1},A=Ci,D=Ci,b=function(){l=Oi(c,nn),D=la(Tr?1:0,l),n&&(A=la(0,Oi(c,Nn))),T=gs},S=function(){f._gsap.y=$o(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},N=function(){if(y){requestAnimationFrame(L);var X=$o(a.deltaY/2),le=D(p.v-X);if(f&&le!==p.v+p.offset){p.offset=le-p.v;var O=$o((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+O+", 0, 1)",f._gsap.y=O+"px",p.cacheID=dt.cache,ur()}return!0}p.offset&&S(),y=!0},k,G,$,ne,Z=function(){b(),k.isActive()&&k.vars.scrollY>l&&(p()>l?k.progress(1)&&p(l):k.resetTo("scrollY",l))};return f&&Ue.set(f,{y:"+=0"}),e.ignoreCheck=function(K){return Tr&&K.type==="touchmove"&&N()||v>1.05&&K.type!=="touchstart"||a.isGesturing||K.touches&&K.touches.length>1},e.onPress=function(){y=!1;var K=v;v=$o((ft.visualViewport&&ft.visualViewport.scale||1)/g),k.pause(),K!==v&&ou(c,v>1.01?!0:n?!1:"x"),G=_(),$=p(),b(),T=gs},e.onRelease=e.onGestureStart=function(K,X){if(p.offset&&S(),!X)ne.restart(!0);else{dt.cache++;var le=E(),O,ye;n&&(O=_(),ye=O+le*.05*-K.velocityX/.227,le*=Ep(_,O,ye,Oi(c,Nn)),k.vars.scrollX=A(ye)),O=p(),ye=O+le*.05*-K.velocityY/.227,le*=Ep(p,O,ye,Oi(c,nn)),k.vars.scrollY=D(ye),k.invalidate().duration(le).play(.01),(Tr&&k.vars.scrollY>=l||O>=l-1)&&Ue.to({},{onUpdate:Z,duration:le})}o&&o(K)},e.onWheel=function(){k._ts&&k.pause(),Sn()-m>1e3&&(T=0,m=Sn())},e.onChange=function(K,X,le,O,ye){if(gs!==T&&b(),X&&n&&_(A(O[2]===X?G+(K.startX-K.x):_()+X-O[1])),le){p.offset&&S();var Ie=ye[2]===le,Xe=Ie?$+K.startY-K.y:p()+le-ye[1],te=D(Xe);Ie&&Xe!==te&&($+=te-Xe),p(te)}(le||X)&&ur()},e.onEnable=function(){ou(c,n?!1:"x"),at.addEventListener("refresh",Z),cn(ft,"resize",Z),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),I.enable()},e.onDisable=function(){ou(c,!0),ln(ft,"resize",Z),at.removeEventListener("refresh",Z),I.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=Tr,Tr&&!p()&&p(1),Tr&&Ue.ticker.add(Ci),ne=a._dc,k=Ue.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:zg(p,p(),function(){return k.pause()})},onUpdate:ur,onComplete:ne.vars.onComplete}),a};at.sort=function(r){if(En(r))return ct.sort(r);var e=ft.pageYOffset||0;return at.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ct.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};at.observe=function(r){return new jt(r)};at.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var e=r instanceof jt?r:Hb(r);return Pn&&Pn.target===e.target&&Pn.kill(),xs(e.target)&&(Pn=e),e};at.core={_getVelocityProp:mh,_inputObserver:Hg,_scrollers:dt,_proxies:Bi,bridge:{ss:function(){_i||Ss("scrollStart"),_i=Sn()},ref:function(){return yn}}};Cg()&&Ue.registerPlugin(at);To.registerPlugin(at);class Vb{constructor(){this.lenis=new iT({duration:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.5,infinite:!1}),this.lenis.on("scroll",()=>{at.update()}),this.tickerCallback=e=>{this.lenis.raf(e*1e3)},To.ticker.add(this.tickerCallback),To.ticker.lagSmoothing(0)}scrollTo(e,t={}){this.lenis.scrollTo(e,{offset:0,duration:1.5,...t})}stop(){this.lenis.stop()}start(){this.lenis.start()}}class Gb{constructor(){this.audioCtx=null,this.isEnabled=!1,this.tickInterval=null,this.tickToggle=!1}init(){if(!this.audioCtx){const e=window.AudioContext||window.webkitAudioContext;this.audioCtx=new e}this.audioCtx.state==="suspended"&&this.audioCtx.resume()}toggle(){return this.init(),this.isEnabled=!this.isEnabled,this.isEnabled?this.startTicking():this.stopTicking(),this.isEnabled}startTicking(){this.tickInterval&&clearInterval(this.tickInterval),this.tickInterval=setInterval(()=>{this.playTick()},125)}stopTicking(){this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=null)}playTick(){if(!this.audioCtx||!this.isEnabled)return;const e=this.audioCtx.currentTime;this.tickToggle=!this.tickToggle;const t=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();t.type="triangle",t.frequency.setValueAtTime(this.tickToggle?3800:2900,e),t.frequency.exponentialRampToValueAtTime(800,e+.015),n.gain.setValueAtTime(.04,e),n.gain.exponentialRampToValueAtTime(1e-4,e+.015),t.connect(n),n.connect(this.audioCtx.destination),t.start(e),t.stop(e+.015)}playRatchetClick(){if(!this.audioCtx||!this.isEnabled)return;const e=this.audioCtx.currentTime,t=this.audioCtx.createOscillator(),n=this.audioCtx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(1200,e),t.frequency.exponentialRampToValueAtTime(300,e+.03),n.gain.setValueAtTime(.06,e),n.gain.exponentialRampToValueAtTime(.001,e+.03),t.connect(n),n.connect(this.audioCtx.destination),t.start(e),t.stop(e+.03)}}class Wb{constructor(e,t){this.watchModel=e,this.domElement=t,this.isActive=!1,this.isDragging=!1,this.previousMousePosition={x:0,y:0},this.rotationVelocity={x:0,y:0},this.targetRotation={x:.2,y:0,z:0},this.currentRotation={x:.2,y:0,z:0},this.initEvents()}initEvents(){this.domElement.addEventListener("pointerdown",this.onPointerDown.bind(this)),window.addEventListener("pointermove",this.onPointerMove.bind(this)),window.addEventListener("pointerup",this.onPointerUp.bind(this)),this.domElement.addEventListener("touchstart",this.onTouchStart.bind(this),{passive:!1}),window.addEventListener("touchmove",this.onTouchMove.bind(this),{passive:!1}),window.addEventListener("touchend",this.onTouchEnd.bind(this))}setActive(e){this.isActive=e,e||(this.isDragging=!1)}reset(){this.targetRotation.x=.2,this.targetRotation.y=0,this.targetRotation.z=0,this.rotationVelocity.x=0,this.rotationVelocity.y=0}onPointerDown(e){this.isActive&&(this.isDragging=!0,this.previousMousePosition={x:e.clientX,y:e.clientY},this.rotationVelocity={x:0,y:0})}onPointerMove(e){if(!this.isActive||!this.isDragging)return;const t=e.clientX-this.previousMousePosition.x,n=e.clientY-this.previousMousePosition.y;this.targetRotation.y+=t*.008,this.targetRotation.x+=n*.008,this.targetRotation.x=rs.clamp(this.targetRotation.x,-Math.PI/2.2,Math.PI/2.2),this.rotationVelocity={x:n*.008,y:t*.008},this.previousMousePosition={x:e.clientX,y:e.clientY}}onPointerUp(){this.isDragging=!1}onTouchStart(e){!this.isActive||e.touches.length===0||(this.isDragging=!0,this.previousMousePosition={x:e.touches[0].clientX,y:e.touches[0].clientY})}onTouchMove(e){if(!this.isActive||!this.isDragging||e.touches.length===0)return;e.preventDefault();const t=e.touches[0].clientX-this.previousMousePosition.x,n=e.touches[0].clientY-this.previousMousePosition.y;this.targetRotation.y+=t*.008,this.targetRotation.x+=n*.008,this.targetRotation.x=rs.clamp(this.targetRotation.x,-Math.PI/2.2,Math.PI/2.2),this.previousMousePosition={x:e.touches[0].clientX,y:e.touches[0].clientY}}onTouchEnd(){this.isDragging=!1}update(e){this.isActive&&(this.isDragging||(this.targetRotation.y+=this.rotationVelocity.y,this.targetRotation.x+=this.rotationVelocity.x,this.rotationVelocity.x*=.92,this.rotationVelocity.y*=.92),this.currentRotation.x=rs.lerp(this.currentRotation.x,this.targetRotation.x,.1),this.currentRotation.y=rs.lerp(this.currentRotation.y,this.targetRotation.y,.1),this.currentRotation.z=rs.lerp(this.currentRotation.z,this.targetRotation.z,.1),this.watchModel.group.rotation.x=this.currentRotation.x,this.watchModel.group.rotation.y=this.currentRotation.y,this.watchModel.group.rotation.z=this.currentRotation.z)}}class Xb{constructor(e,t,n){this.watchModel=e,this.orbitController=t,this.audioManager=n,this.initControls()}initControls(){const e=document.querySelectorAll("#case-materials .option-btn");e.forEach(o=>{o.addEventListener("click",a=>{e.forEach(c=>c.classList.remove("active")),o.classList.add("active");const l=o.getAttribute("data-material");this.watchModel.updateCaseMaterial(l),this.audioManager.playRatchetClick()})});const t=document.querySelectorAll("#dial-materials .option-btn");t.forEach(o=>{o.addEventListener("click",a=>{t.forEach(c=>c.classList.remove("active")),o.classList.add("active");const l=o.getAttribute("data-dial");this.watchModel.updateDialColor(l),this.audioManager.playRatchetClick()})});const n=document.querySelectorAll("#strap-materials .option-btn");n.forEach(o=>{o.addEventListener("click",a=>{n.forEach(c=>c.classList.remove("active")),o.classList.add("active");const l=o.getAttribute("data-strap");this.watchModel.updateStrapMaterial(l),this.audioManager.playRatchetClick()})});const i=document.getElementById("reset-view-btn");i&&i.addEventListener("click",()=>{this.orbitController.reset(),this.audioManager.playRatchetClick()});const s=document.getElementById("order-inquiry-btn");s&&s.addEventListener("click",()=>{this.audioManager.playRatchetClick(),alert("Thank you for your interest in the FS 60P Automatic Timepiece. Your bespoke specification has been recorded.")})}}To.registerPlugin(at);class Yb{constructor(e,t,n){this.watchModel=e,this.cameraManager=t,this.orbitController=n,this.annotations={crystal:document.getElementById("anno-crystal"),bezel:document.getElementById("anno-bezel"),dial:document.getElementById("anno-dial"),gears:document.getElementById("anno-gears"),escapement:document.getElementById("anno-escapement"),caseback:document.getElementById("anno-caseback")},this.scrollProgressBar=document.getElementById("scroll-bar"),this.sectionNumIndicator=document.getElementById("current-section-num"),this.dragHint=document.getElementById("drag-hint"),this.toggleAnnotations(!1),this.initTimeline()}initTimeline(){const e=this.watchModel.group;this.cameraManager.camera;const t=To.timeline({scrollTrigger:{trigger:"#app-content",start:"top top",end:"bottom bottom",scrub:1.2,onUpdate:i=>{this.scrollProgressBar&&this.scrollProgressBar.style.setProperty("--scroll-progress",`${i.progress*100}%`);const s=Math.min(5,Math.floor(i.progress*5)+1);this.sectionNumIndicator&&(this.sectionNumIndicator.textContent=`0${s}`),i.progress>.88?(document.body.classList.add("canvas-interactive"),this.orbitController.setActive(!0),this.dragHint&&this.dragHint.classList.remove("hidden")):(document.body.classList.remove("canvas-interactive"),this.orbitController.setActive(!1),this.dragHint&&this.dragHint.classList.add("hidden"))}}}),n={progress:0};t.fromTo(e.position,{x:0,y:-.1,z:0},{x:1.2,y:0,z:1.4,ease:"power2.inOut",duration:2},0).fromTo(e.rotation,{x:.1,y:-.15,z:.02},{x:.35,y:.45,z:-.15,ease:"power2.inOut",duration:2},0),t.to(e.position,{x:0,y:0,z:.2,ease:"power2.inOut",duration:3},2).to(e.rotation,{x:.65,y:-.55,z:.25,ease:"power2.inOut",duration:3},2).to(n,{progress:1,ease:"power2.inOut",duration:3,onUpdate:()=>{this.watchModel.setExplodedProgress(n.progress)}},2),at.create({trigger:"#exploded-section",start:"top 40%",end:"bottom 60%",onEnter:()=>this.toggleAnnotations(!0),onLeave:()=>this.toggleAnnotations(!1),onEnterBack:()=>this.toggleAnnotations(!0),onLeaveBack:()=>this.toggleAnnotations(!1)}),t.to(n,{progress:0,ease:"power2.inOut",duration:2.5,onUpdate:()=>{this.watchModel.setExplodedProgress(n.progress)}},5).to(e.position,{x:-1.2,y:0,z:1.2,ease:"power2.inOut",duration:2.5},5).to(e.rotation,{x:.1,y:Math.PI+.25,z:-.1,ease:"power2.inOut",duration:2.5},5),t.to(e.position,{x:-1.3,y:0,z:.6,ease:"power2.inOut",duration:2.5},7.5).to(e.rotation,{x:.2,y:Math.PI*2-.2,z:0,ease:"power2.inOut",duration:2.5},7.5)}toggleAnnotations(e){Object.values(this.annotations).forEach((t,n)=>{t&&(e?setTimeout(()=>t.classList.add("visible"),n*80):t.classList.remove("visible"))})}}class qb{constructor(){this.canvas=document.getElementById("webgl-canvas"),this.loader=document.getElementById("loader"),this.loaderPercent=document.getElementById("loader-percent"),this.loaderProgressCircle=document.querySelector(".loader-progress-circle"),this.clock=new kM,this.init()}async init(){this.studioScene=new hE(this.canvas),this.cameraManager=new fE,this.watchModel=new KE,this.studioScene.scene.add(this.watchModel.group),this.audioManager=new Gb,this.initAudioToggle(),this.orbitController=new Wb(this.watchModel,document.getElementById("canvas-container")),this.customizerUI=new Xb(this.watchModel,this.orbitController,this.audioManager),this.smoothScroll=new Vb,this.scrollTimeline=new Yb(this.watchModel,this.cameraManager,this.orbitController),await this.runPreloader(),this.animate()}initAudioToggle(){const e=document.getElementById("audio-toggle"),t=e.querySelector(".sound-icon-on"),n=e.querySelector(".sound-icon-off");e.addEventListener("click",()=>{this.audioManager.toggle()?(t.classList.remove("hidden"),n.classList.add("hidden")):(t.classList.add("hidden"),n.classList.remove("hidden"))})}runPreloader(){return new Promise(e=>{let t=0;const n=2073,i=setInterval(()=>{if(t+=Math.floor(Math.random()*12)+6,t>100&&(t=100),this.loaderPercent&&(this.loaderPercent.textContent=`${t}%`),this.loaderProgressCircle){const s=n-t/100*n;this.loaderProgressCircle.style.strokeDashoffset=`${s}`}t>=100&&(clearInterval(i),setTimeout(()=>{this.loader&&this.loader.classList.add("fade-out"),e()},400))},50)})}animate(){requestAnimationFrame(this.animate.bind(this));const e=this.clock.getDelta(),t=this.clock.getElapsedTime();this.watchModel.update(e,t),this.orbitController.update(e),this.cameraManager.update(e),this.studioScene.render(this.cameraManager.camera)}}window.addEventListener("DOMContentLoaded",()=>{new qb});
