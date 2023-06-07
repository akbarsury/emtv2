import{Q as ae,M as Ne,N as Se,O as J,S as De,P as Pe,R as M,T as Le,V as xe,W as Be,X as qe,Y as Fe,d as le,r as X,b as p,a as F,l as Me,o as ce,c as ue,j as de,e as g,C as $e,Z as He,f as u,t as x,p as je,i as Ve,_ as ze}from"./main-284d8624.js";const Xe=ae.import("blots/block");class P extends Xe{static create(e){const s=super.create(e);if(e===!0)return s;const n=document.createElement("img");return n.setAttribute("src",e),s.appendChild(n),s}deleteAt(e,s){super.deleteAt(e,s),this.cache={}}static value(e){const{src:s,custom:n}=e.dataset;return{src:s,custom:n}}}P.blotName="imageBlot";P.className="image-uploading";P.tagName="span";ae.register({"formats/imageBlot":P});class he{constructor(e,s){this.quill=e,this.options=s,this.range=null,this.placeholderDelta=null,typeof this.options.upload!="function"&&console.warn("[Missing config] upload function that returns a promise is required");var n=this.quill.getModule("toolbar");n&&n.addHandler("image",this.selectLocalImage.bind(this)),this.handleDrop=this.handleDrop.bind(this),this.handlePaste=this.handlePaste.bind(this),this.quill.root.addEventListener("drop",this.handleDrop,!1),this.quill.root.addEventListener("paste",this.handlePaste,!1)}selectLocalImage(){this.quill.focus(),this.range=this.quill.getSelection(),this.fileHolder=document.createElement("input"),this.fileHolder.setAttribute("type","file"),this.fileHolder.setAttribute("accept","image/*"),this.fileHolder.setAttribute("style","visibility:hidden"),this.fileHolder.onchange=this.fileChanged.bind(this),document.body.appendChild(this.fileHolder),this.fileHolder.click(),window.requestAnimationFrame(()=>{document.body.removeChild(this.fileHolder)})}handleDrop(e){if(e.dataTransfer&&e.dataTransfer.files&&e.dataTransfer.files.length){if(e.stopPropagation(),e.preventDefault(),document.caretRangeFromPoint){const n=document.getSelection(),o=document.caretRangeFromPoint(e.clientX,e.clientY);n&&o&&n.setBaseAndExtent(o.startContainer,o.startOffset,o.startContainer,o.startOffset)}else{const n=document.getSelection(),o=document.caretPositionFromPoint(e.clientX,e.clientY);n&&o&&n.setBaseAndExtent(o.offsetNode,o.offset,o.offsetNode,o.offset)}this.quill.focus(),this.range=this.quill.getSelection();let s=e.dataTransfer.files[0];setTimeout(()=>{this.quill.focus(),this.range=this.quill.getSelection(),this.readAndUploadFile(s)},0)}}handlePaste(e){let s=e.clipboardData||window.clipboardData;if(s&&(s.items||s.files)){let n=s.items||s.files;const o=/^image\/(jpe?g|gif|png|svg|webp)$/i;for(let r=0;r<n.length;r++)if(o.test(n[r].type)){let i=n[r].getAsFile?n[r].getAsFile():n[r];i&&(this.quill.focus(),this.range=this.quill.getSelection(),e.preventDefault(),setTimeout(()=>{this.quill.focus(),this.range=this.quill.getSelection(),this.readAndUploadFile(i)},0))}}}readAndUploadFile(e){let s=!1;const n=new FileReader;n.addEventListener("load",()=>{if(!s){let o=n.result;this.insertBase64Image(o)}},!1),e&&n.readAsDataURL(e),this.options.upload(e).then(o=>{this.insertToEditor(o)},o=>{s=!0,this.removeBase64Image(),console.warn(o)})}fileChanged(){const e=this.fileHolder.files[0];this.readAndUploadFile(e)}insertBase64Image(e){const s=this.range;this.placeholderDelta=this.quill.insertEmbed(s.index,P.blotName,`${e}`,"user")}insertToEditor(e){const s=this.range,n=this.calculatePlaceholderInsertLength();this.quill.deleteText(s.index,n,"user"),this.quill.insertEmbed(s.index,"image",`${e}`,"user"),s.index++,this.quill.setSelection(s,"user")}calculatePlaceholderInsertLength(){return this.placeholderDelta.ops.reduce((e,s)=>(s.hasOwnProperty("insert")&&e++,e),0)}removeBase64Image(){const e=this.range,s=this.calculatePlaceholderInsertLength();this.quill.deleteText(e.index,s,"user")}}window.ImageUploader=he;/**
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
 */const pe="firebasestorage.googleapis.com",fe="storageBucket",We=2*60*1e3,Ke=10*60*1e3;/**
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
 */class h extends Pe{constructor(e,s,n=0){super(V(e),`Firebase Storage: ${s} (${V(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return V(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var d;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(d||(d={}));function V(t){return"storage/"+t}function K(){const t="An unknown error occurred, please check the error payload for server response.";return new h(d.UNKNOWN,t)}function Ge(t){return new h(d.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Ye(t){return new h(d.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Qe(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(d.UNAUTHENTICATED,t)}function Ze(){return new h(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Je(t){return new h(d.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function et(){return new h(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function tt(){return new h(d.CANCELED,"User canceled the upload/download.")}function nt(t){return new h(d.INVALID_URL,"Invalid URL '"+t+"'.")}function st(t){return new h(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ot(){return new h(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+fe+"' property when initializing the app?")}function rt(){return new h(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function it(){return new h(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function at(t){return new h(d.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function W(t){return new h(d.INVALID_ARGUMENT,t)}function ge(){return new h(d.APP_DELETED,"The Firebase app was deleted.")}function lt(t){return new h(d.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function D(t,e){return new h(d.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function S(t){throw new h(d.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class b{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let n;try{n=b.makeFromUrl(e,s)}catch{return new b(e,"")}if(n.path==="")return n;throw st(e)}static makeFromUrl(e,s){let n=null;const o="([A-Za-z0-9.\\-_]+)";function r(m){m.path.charAt(m.path.length-1)==="/"&&(m.path_=m.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+o+i,"i"),l={bucket:1,path:3};function c(m){m.path_=decodeURIComponent(m.path)}const R="v[A-Za-z0-9_]+",T=s.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",y=new RegExp(`^https?://${T}/${R}/b/${o}/o${w}`,"i"),A={bucket:1,path:3},v=s===pe?"(?:storage.googleapis.com|storage.cloud.google.com)":s,_="([^?#]*)",N=new RegExp(`^https?://${v}/${o}/${_}`,"i"),E=[{regex:a,indices:l,postModify:r},{regex:y,indices:A,postModify:c},{regex:N,indices:{bucket:1,path:2},postModify:c}];for(let m=0;m<E.length;m++){const L=E[m],H=L.regex.exec(e);if(H){const ve=H[L.indices.bucket];let j=H[L.indices.path];j||(j=""),n=new b(ve,j),L.postModify(n);break}}if(n==null)throw nt(e);return n}}class ct{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function ut(t,e,s){let n=1,o=null,r=null,i=!1,a=0;function l(){return a===2}let c=!1;function R(..._){c||(c=!0,e.apply(null,_))}function T(_){o=setTimeout(()=>{o=null,t(y,l())},_)}function w(){r&&clearTimeout(r)}function y(_,...N){if(c){w();return}if(_){w(),R.call(null,_,...N);return}if(l()||i){w(),R.call(null,_,...N);return}n<64&&(n*=2);let E;a===1?(a=2,E=0):E=(n+Math.random())*1e3,T(E)}let A=!1;function v(_){A||(A=!0,w(),!c&&(o!==null?(_||(a=2),clearTimeout(o),T(0)):_||(a=1)))}return T(0),r=setTimeout(()=>{i=!0,v(!0)},s),v}function dt(t){t(!1)}/**
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
 */function ht(t){return t!==void 0}function pt(t){return typeof t=="object"&&!Array.isArray(t)}function G(t){return typeof t=="string"||t instanceof String}function ee(t){return Y()&&t instanceof Blob}function Y(){return typeof Blob<"u"&&!Fe()}function te(t,e,s,n){if(n<e)throw W(`Invalid value for '${t}'. Expected ${e} or greater.`);if(n>s)throw W(`Invalid value for '${t}'. Expected ${s} or less.`)}/**
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
 */function Q(t,e,s){let n=e;return s==null&&(n=`https://${e}`),`${s}://${n}/v0${t}`}function _e(t){const e=encodeURIComponent;let s="?";for(const n in t)if(t.hasOwnProperty(n)){const o=e(n)+"="+e(t[n]);s=s+o+"&"}return s=s.slice(0,-1),s}/**
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
 */var U;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(U||(U={}));/**
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
 */function ft(t,e){const s=t>=500&&t<600,o=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return s||o||r}/**
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
 */class gt{constructor(e,s,n,o,r,i,a,l,c,R,T,w=!0){this.url_=e,this.method_=s,this.headers_=n,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=R,this.connectionFactory_=T,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,A)=>{this.resolve_=y,this.reject_=A,this.start_()})}start_(){const e=(n,o)=>{if(o){n(!1,new B(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const i=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(i),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(i),this.pendingConnection_=null;const a=r.getErrorCode()===U.NO_ERROR,l=r.getStatus();if(!a||ft(l,this.additionalRetryCodes_)&&this.retry){const R=r.getErrorCode()===U.ABORT;n(!1,new B(!1,null,R));return}const c=this.successCodes_.indexOf(l)!==-1;n(!0,new B(c,r))})},s=(n,o)=>{const r=this.resolve_,i=this.reject_,a=o.connection;if(o.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());ht(l)?r(l):r()}catch(l){i(l)}else if(a!==null){const l=K();l.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,l)):i(l)}else if(o.canceled){const l=this.appDelete_?ge():tt();i(l)}else{const l=et();i(l)}};this.canceled_?s(!1,new B(!1,null,!0)):this.backoffId_=ut(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class B{constructor(e,s,n){this.wasSuccessCode=e,this.connection=s,this.canceled=!!n}}function _t(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function mt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Rt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wt(t,e,s,n,o,r,i=!0){const a=_e(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return bt(c,e),_t(c,s),mt(c,r),Rt(c,n),new gt(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,i)}/**
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
 */function Tt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yt(...t){const e=Tt();if(e!==void 0){const s=new e;for(let n=0;n<t.length;n++)s.append(t[n]);return s.getBlob()}else{if(Y())return new Blob(t);throw new h(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function At(t,e,s){return t.webkitSlice?t.webkitSlice(e,s):t.mozSlice?t.mozSlice(e,s):t.slice?t.slice(e,s):null}/**
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
 */function Et(t){if(typeof atob>"u")throw at("base-64");return atob(t)}/**
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
 */const k={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class z{constructor(e,s){this.data=e,this.contentType=s||null}}function kt(t,e){switch(t){case k.RAW:return new z(me(e));case k.BASE64:case k.BASE64URL:return new z(be(t,e));case k.DATA_URL:return new z(It(e),Ut(e))}throw K()}function me(t){const e=[];for(let s=0;s<t.length;s++){let n=t.charCodeAt(s);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<t.length-1&&(t.charCodeAt(s+1)&64512)===56320))e.push(239,191,189);else{const r=n,i=t.charCodeAt(++s);n=65536|(r&1023)<<10|i&1023,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(e)}function Ct(t){let e;try{e=decodeURIComponent(t)}catch{throw D(k.DATA_URL,"Malformed data URL.")}return me(e)}function be(t,e){switch(t){case k.BASE64:{const o=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(o||r)throw D(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case k.BASE64URL:{const o=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(o||r)throw D(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=Et(e)}catch(o){throw o.message.includes("polyfill")?o:D(t,"Invalid character found")}const n=new Uint8Array(s.length);for(let o=0;o<s.length;o++)n[o]=s.charCodeAt(o);return n}class Re{constructor(e){this.base64=!1,this.contentType=null;const s=e.match(/^data:([^,]+)?,/);if(s===null)throw D(k.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=Ot(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}function It(t){const e=new Re(t);return e.base64?be(k.BASE64,e.rest):Ct(e.rest)}function Ut(t){return new Re(t).contentType}function Ot(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class C{constructor(e,s){let n=0,o="";ee(e)?(this.data_=e,n=e.size,o=e.type):e instanceof ArrayBuffer?(s?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(s?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,s){if(ee(this.data_)){const n=this.data_,o=At(n,e,s);return o===null?null:new C(o)}else{const n=new Uint8Array(this.data_.buffer,e,s-e);return new C(n,!0)}}static getBlob(...e){if(Y()){const s=e.map(n=>n instanceof C?n.data_:n);return new C(yt.apply(null,s))}else{const s=e.map(i=>G(i)?kt(k.RAW,i).data:i.data_);let n=0;s.forEach(i=>{n+=i.byteLength});const o=new Uint8Array(n);let r=0;return s.forEach(i=>{for(let a=0;a<i.length;a++)o[r++]=i[a]}),new C(o,!0)}}uploadData(){return this.data_}}/**
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
 */function we(t){let e;try{e=JSON.parse(t)}catch{return null}return pt(e)?e:null}/**
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
 */function vt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Nt(t,e){const s=e.split("/").filter(n=>n.length>0).join("/");return t.length===0?s:t+"/"+s}function Te(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function St(t,e){return e}class f{constructor(e,s,n,o){this.server=e,this.local=s||e,this.writable=!!n,this.xform=o||St}}let q=null;function Dt(t){return!G(t)||t.length<2?t:Te(t)}function ye(){if(q)return q;const t=[];t.push(new f("bucket")),t.push(new f("generation")),t.push(new f("metageneration")),t.push(new f("name","fullPath",!0));function e(r,i){return Dt(i)}const s=new f("name");s.xform=e,t.push(s);function n(r,i){return i!==void 0?Number(i):i}const o=new f("size");return o.xform=n,t.push(o),t.push(new f("timeCreated")),t.push(new f("updated")),t.push(new f("md5Hash",null,!0)),t.push(new f("cacheControl",null,!0)),t.push(new f("contentDisposition",null,!0)),t.push(new f("contentEncoding",null,!0)),t.push(new f("contentLanguage",null,!0)),t.push(new f("contentType",null,!0)),t.push(new f("metadata","customMetadata",!0)),q=t,q}function Pt(t,e){function s(){const n=t.bucket,o=t.fullPath,r=new b(n,o);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:s})}function Lt(t,e,s){const n={};n.type="file";const o=s.length;for(let r=0;r<o;r++){const i=s[r];n[i.local]=i.xform(n,e[i.server])}return Pt(n,t),n}function Ae(t,e,s){const n=we(e);return n===null?null:Lt(t,n,s)}function xt(t,e,s,n){const o=we(e);if(o===null||!G(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const i=encodeURIComponent;return r.split(",").map(c=>{const R=t.bucket,T=t.fullPath,w="/b/"+i(R)+"/o/"+i(T),y=Q(w,s,n),A=_e({alt:"media",token:c});return y+A})[0]}function Bt(t,e){const s={},n=e.length;for(let o=0;o<n;o++){const r=e[o];r.writable&&(s[r.server]=t[r.local])}return JSON.stringify(s)}class Ee{constructor(e,s,n,o){this.url=e,this.method=s,this.handler=n,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ke(t){if(!t)throw K()}function qt(t,e){function s(n,o){const r=Ae(t,o,e);return ke(r!==null),r}return s}function Ft(t,e){function s(n,o){const r=Ae(t,o,e);return ke(r!==null),xt(r,o,t.host,t._protocol)}return s}function Ce(t){function e(s,n){let o;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?o=Ze():o=Qe():s.getStatus()===402?o=Ye(t.bucket):s.getStatus()===403?o=Je(t.path):o=n,o.status=s.getStatus(),o.serverResponse=n.serverResponse,o}return e}function Mt(t){const e=Ce(t);function s(n,o){let r=e(n,o);return n.getStatus()===404&&(r=Ge(t.path)),r.serverResponse=o.serverResponse,r}return s}function $t(t,e,s){const n=e.fullServerUrl(),o=Q(n,t.host,t._protocol),r="GET",i=t.maxOperationRetryTime,a=new Ee(o,r,Ft(t,s),i);return a.errorHandler=Mt(e),a}function Ht(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function jt(t,e,s){const n=Object.assign({},s);return n.fullPath=t.path,n.size=e.size(),n.contentType||(n.contentType=Ht(null,e)),n}function Vt(t,e,s,n,o){const r=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let m=0;m<2;m++)E=E+Math.random().toString().slice(2);return E}const l=a();i["Content-Type"]="multipart/related; boundary="+l;const c=jt(e,n,o),R=Bt(c,s),T="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+R+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,w=`\r
--`+l+"--",y=C.getBlob(T,n,w);if(y===null)throw rt();const A={name:c.fullPath},v=Q(r,t.host,t._protocol),_="POST",N=t.maxUploadRetryTime,I=new Ee(v,_,qt(t,s),N);return I.urlParams=A,I.headers=i,I.body=y.uploadData(),I.errorHandler=Ce(e),I}class zt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=U.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=U.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,s,n,o){if(this.sent_)throw S("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(s,e,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw S("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw S("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw S("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw S("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Xt extends zt{initXhr(){this.xhr_.responseType="text"}}function Ie(){return new Xt}/**
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
 */class O{constructor(e,s){this._service=e,s instanceof b?this._location=s:this._location=b.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new O(e,s)}get root(){const e=new b(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Te(this._location.path)}get storage(){return this._service}get parent(){const e=vt(this._location.path);if(e===null)return null;const s=new b(this._location.bucket,e);return new O(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw lt(e)}}function Wt(t,e,s){t._throwIfRoot("uploadBytes");const n=Vt(t.storage,t._location,ye(),new C(e,!0),s);return t.storage.makeRequestWithTokens(n,Ie).then(o=>({metadata:o,ref:t}))}function Kt(t){t._throwIfRoot("getDownloadURL");const e=$t(t.storage,t._location,ye());return t.storage.makeRequestWithTokens(e,Ie).then(s=>{if(s===null)throw it();return s})}function Gt(t,e){const s=Nt(t._location.path,e),n=new b(t._location.bucket,s);return new O(t.storage,n)}/**
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
 */function Yt(t){return/^[A-Za-z]+:\/\//.test(t)}function Qt(t,e){return new O(t,e)}function Ue(t,e){if(t instanceof Z){const s=t;if(s._bucket==null)throw ot();const n=new O(s,s._bucket);return e!=null?Ue(n,e):n}else return e!==void 0?Gt(t,e):t}function Zt(t,e){if(e&&Yt(e)){if(t instanceof Z)return Qt(t,e);throw W("To use ref(service, url), the first argument must be a Storage instance.")}else return Ue(t,e)}function ne(t,e){const s=e==null?void 0:e[fe];return s==null?null:b.makeFromBucketSpec(s,t)}function Jt(t,e,s,n={}){t.host=`${e}:${s}`,t._protocol="http";const{mockUserToken:o}=n;o&&(t._overrideAuthToken=typeof o=="string"?o:qe(o,t.app.options.projectId))}class Z{constructor(e,s,n,o,r){this.app=e,this._authProvider=s,this._appCheckProvider=n,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=pe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=We,this._maxUploadRetryTime=Ke,this._requests=new Set,o!=null?this._bucket=b.makeFromBucketSpec(o,this._host):this._bucket=ne(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=b.makeFromBucketSpec(this._url,e):this._bucket=ne(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){te("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){te("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new O(this,e)}_makeRequest(e,s,n,o,r=!0){if(this._deleted)return new ct(ge());{const i=wt(e,this._appId,n,o,s,this._firebaseVersion,r);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,s){const[n,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,n,o).getPromise()}}const se="@firebase/storage",oe="0.11.2";/**
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
 */const Oe="storage";function en(t,e,s){return t=M(t),Wt(t,e,s)}function tn(t){return t=M(t),Kt(t)}function re(t,e){return t=M(t),Zt(t,e)}function ie(t=Be(),e){t=M(t);const n=Le(t,Oe).getImmediate({identifier:e}),o=xe("storage");return o&&nn(n,...o),n}function nn(t,e,s,n={}){Jt(t,e,s,n)}function sn(t,{instanceIdentifier:e}){const s=t.getProvider("app").getImmediate(),n=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Z(s,n,o,e,De)}function on(){Ne(new Se(Oe,sn,"PUBLIC").setMultipleInstances(!0)),J(se,oe,""),J(se,oe,"esm2017")}on();const rn={uploadContentImage:(t,e)=>new Promise((s,n)=>{const o=re(ie(),`images/content/${t}.png`);en(o,e,{contentType:"image/png"}).then(async()=>{const r=await tn(re(ie(),`images/content/${t}.png`));s(r)}).catch(()=>n(!1))})},an=[[{header:[1,2,3,4,5,6,!1]}],[{size:["small",!1,"large","huge"]}],[{font:[]}],["bold","italic","underline","strike"],[{align:[]}],[{list:"ordered"},{list:"bullet"}],[{color:[]},{background:[]}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],["link","blockquote","image","video","code-block"],["clean"],["AttachmentBlot"]],ln=[{name:"imageUploader",module:he,options:{upload:t=>new Promise((e,s)=>{rn.uploadContentImage(t.name,t).then(n=>{e(n)}).catch(n=>{alert("upload gagal"),s(n)})})}}],cn=le({__name:"QuillEditor",props:{quillContent:{}},setup(t){const e=X(Object(Object.entries(p().appCacheData[`${p().activeContent.data.name}`].subContent[`${p().appCacheData[`${p().activeContent.data.name}`].lastSelectedSubContent}`].page)[Number(F().query.page)-1][1])),s=X(),n=()=>{e.value.data.ops=s.value.getContents().ops,p().updatePageContent()};return(o,r)=>{const i=Me("QuillEditor",!0);return ce(),ue("div",null,[de(i,{ref_key:"quill",ref:s,toolbar:"quillToolbars"in o?o.quillToolbars:g(an),modules:"quillModules"in o?o.quillModules:g(ln),content:o.quillContent.delta,"onUpdate:content":[r[0]||(r[0]=a=>o.quillContent.delta=a),r[1]||(r[1]=a=>n())]},null,8,["toolbar","modules","content"])])}}});const $=t=>(je("data-v-aca8ae5a"),t=t(),Ve(),t),un={key:0,class:"d-flex flex-column gap-4 p-4"},dn={class:"container-fluid border-secondary border-bottom py-2"},hn={class:"row align-items-center gap-2"},pn={class:"col-auto p-1"},fn=$(()=>u("div",{class:"text-uppercase small"},[u("span",{class:"badge badge-primary"},[u("u",null," konten ")])],-1)),gn={class:"text-uppercase badge badge-secondary"},_n={class:"col-auto p-1"},mn=$(()=>u("div",{class:"text-uppercase small"},[u("span",{class:"badge badge-primary"},[u("u",null," subkonten ")])],-1)),bn={class:"text-uppercase badge badge-secondary"},Rn={class:"col-auto p-1"},wn=$(()=>u("div",{class:"text-uppercase small"},[u("span",{class:"badge badge-primary"},[u("u",null," halaman ")])],-1)),Tn={class:"text-uppercase badge badge-secondary"},yn={class:"col-auto p-1"},An=$(()=>u("div",{class:"text-uppercase small"},[u("span",{class:"badge badge-primary"},[u("u",null," status ")])],-1)),En={class:"text-uppercase badge badge-secondary"},kn={class:"editor-content d-flex justify-content-center"},Cn={class:"editor-wrapper col-12 col-md-10 col-lg-8 bg-light rounded-5"},In=le({__name:"editContent",setup(t){const e=X(Object(Object.entries(p().appCacheData[`${p().activeContent.data.name}`].subContent[`${p().appCacheData[`${p().activeContent.data.name}`].lastSelectedSubContent}`].page)[Number(F().query.page)-1][1])),s=$e({updating:!1,updated:!1,html:"<div> </div>",delta:new He(e.value.data)});return(n,o)=>{const r=cn;return ce(),ue("div",un,[u("div",dn,[u("div",hn,[u("div",pn,[fn,u("span",gn,x(("AppStore"in n?n.AppStore:g(p))().activeContent.data.name),1)]),u("div",_n,[mn,u("span",bn,x(("AppStore"in n?n.AppStore:g(p))().appCacheData[`${("AppStore"in n?n.AppStore:g(p))().activeContent.data.name}`].subContent[`${("AppStore"in n?n.AppStore:g(p))().appCacheData[`${("AppStore"in n?n.AppStore:g(p))().activeContent.data.name}`].lastSelectedSubContent}`].name),1)]),u("div",Rn,[wn,u("span",Tn,x(`${Number(("useRoute"in n?n.useRoute:g(F))().query.page)} - `+Object(Object.entries(("AppStore"in n?n.AppStore:g(p))().appCacheData[`${("AppStore"in n?n.AppStore:g(p))().activeContent.data.name}`].subContent[`${("AppStore"in n?n.AppStore:g(p))().appCacheData[`${("AppStore"in n?n.AppStore:g(p))().activeContent.data.name}`].lastSelectedSubContent}`].page)[Number(("useRoute"in n?n.useRoute:g(F))().query.page)-1][1]).name),1)]),u("div",yn,[An,u("span",En,x(g(s).updated?"diperbarui":"tidak diperbarui"),1)])])]),u("div",kn,[u("div",Cn,[de(r,{quillContent:g(s)},null,8,["quillContent"])])])])}}});const On=ze(In,[["__scopeId","data-v-aca8ae5a"]]);export{On as default};
//# sourceMappingURL=editContent-42a4b75f.js.map
