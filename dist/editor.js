(()=>{var e={805:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.domReady;var t=n.n(e);const l=window.wp.data,o=window.gb.stylesBuilder,r=(0,l.createReduxStore)("gb-block-styles-current-style",{reducer:o.currentStyleReducer,actions:o.currentStyleActions,selectors:o.currentStyleSelectors}),a=(0,l.createReduxStore)("gb-block-styles-at-rule",{reducer:o.atRuleReducer,actions:o.atRuleActions,selectors:o.atRuleSelectors}),s=(0,l.createReduxStore)("gb-block-styles-nested-rule",{reducer:o.nestedRuleReducer,actions:o.nestedRuleActions,selectors:o.nestedRuleSelectors}),c=(0,l.createReduxStore)("gb-block-styles",{reducer:o.styleReducer,actions:o.styleActions,selectors:o.styleSelectors});(0,l.register)(r),(0,l.register)(c),(0,l.register)(a),(0,l.register)(s);const u=window.wp.hooks,i=["generateblocks/button","generateblocks/headline","generateblocks/container","generateblocks/grid","generateblocks/image","generateblocks/query-loop"];(0,u.addFilter)("blocks.registerBlockType","generateblocks/disableBlocks",(function(e,t){const n=generateBlocksEditor.useV1Blocks;return i.includes(t)&&!n||!i.includes(t)&&t.startsWith("generateblocks")&&n?{...e,supports:{...e.supports,inserter:!1}}:e}));const d=window.React,m=window.wp.components,p=window.wp.i18n,g=window.wp.blocks,b=window.wp.compose,k=window.wp.blockEditor,h=window.lodash;function v(){return(0,d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,d.createElement)("path",{d:"M22.006,22.006L20.665,22.006L20.665,17.629L22.006,17.629L22.006,22.006ZM22.006,14.814L20.665,14.814L20.665,9.185L22.006,9.185L22.006,14.814ZM22.006,6.372L20.672,6.372L20.672,3.328L17.628,3.328L17.628,1.994L21.38,1.994C21.725,1.994 22.006,2.274 22.006,2.619L22.006,6.372ZM6.371,1.994L6.371,3.331L1.994,3.331L1.994,1.994L6.371,1.994ZM14.814,3.331L9.186,3.331L9.186,1.994L14.814,1.994L14.814,3.331Z",style:{fillOpacity:.5}}),(0,d.createElement)("path",{d:"M14,6.5L16.5,6.5L16.5,4L17.5,4L17.5,6.5L20,6.5L20,7.5L17.5,7.5L17.5,10L16.5,10L16.5,7.5L14,7.5L14,6.5Z"}),(0,d.createElement)("path",{d:"M1.993,9L7.701,9L7.701,10.268L1.993,10.268L1.993,9ZM14.993,13.439L13.725,13.439L13.725,10.268L10.554,10.268L10.554,9L14.359,9C14.709,9 14.993,9.284 14.993,9.634L14.993,13.439ZM13.725,16.292L14.993,16.292L14.993,22L13.725,22L13.725,16.292Z",style:{fillRule:"nonzero"}}))}function _(){return(0,d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,d.createElement)("path",{d:"M21.375,22L17.625,22L17.625,20.75L20.75,20.75L20.75,17.625L22,17.625L22,21.375C22,21.72 21.72,22 21.375,22ZM9.188,20.75L14.813,20.75L14.813,22L9.188,22L9.188,20.75ZM6.375,22L2.625,22C2.282,22 2,21.718 2,21.375L2,17.625L3.25,17.625L3.25,20.75L6.375,20.75L6.375,22ZM2,9.187L3.25,9.187L3.25,14.812L2,14.812L2,9.187ZM3.25,6.375L2,6.375L2,2.625C2,2.28 2.28,2 2.625,2L6.375,2L6.375,3.25L3.25,3.25L3.25,6.375ZM9.188,2L14.813,2L14.813,3.25L9.188,3.25L9.188,2ZM22,6.375L20.75,6.375L20.75,3.25L17.625,3.25L17.625,2L21.375,2C21.72,2 22,2.28 22,2.625L22,6.375ZM20.75,9.187L22,9.187L22,14.812L20.75,14.812L20.75,9.187Z",style:{fillRule:"nonzero"}}),(0,d.createElement)("path",{d:"M14,6.5L16.5,6.5L16.5,4L17.5,4L17.5,6.5L20,6.5L20,7.5L17.5,7.5L17.5,10L16.5,10L16.5,7.5L14,7.5L14,6.5Z"}))}const L=(0,b.createHigherOrderComponent)((e=>t=>{const{name:n}=t,{getBlocksByClientId:o,getSelectedBlockClientIds:r,getBlockRootClientId:a}=(0,l.useSelect)((e=>e("core/block-editor")),[]),{replaceBlocks:s,insertBlocks:c}=(0,l.useDispatch)("core/block-editor"),i=r(),b=i.length?i[0]:t.clientId,L=(e=>{const t=(0,l.useSelect)((t=>t("core/block-editor").getBlock(e)));return t?t.innerBlocks.length:0})(b),w=o(i),f=a(b);if(generateBlocksEditor.useV1Blocks)return(0,d.createElement)(e,{...t});let y="";return"generateblocks/element"!==n||f||0!==L||1!==i.length||(y=(0,d.createElement)(d.Fragment,null,y,(0,d.createElement)(m.ToolbarButton,{icon:v,label:(0,p.__)("Add Inner Container","generateblocks"),onClick:()=>{c((0,g.createBlock)("generateblocks/element",{styles:{maxWidth:"var(--gb-container-width)",marginLeft:"auto",marginRight:"auto"}}),void 0,b)},showTooltip:!0}))),y=(0,d.createElement)(d.Fragment,null,y,(0,d.createElement)(m.ToolbarButton,{icon:_,label:(0,p.__)("Add to Container","generateblocks"),onClick:()=>(()=>{if(!w.length)return;const e=w.map((e=>(0,g.createBlock)(e.name,e.attributes,e.innerBlocks))),t=(0,g.createBlock)("generateblocks/element",{},e);(0,h.isEmpty)(t)||s(i,t)})()})),y=(0,u.applyFilters)("generateblocks.editor.toolbarAppenders",y,t),(0,d.createElement)(d.Fragment,null,!!y&&(0,d.createElement)(k.BlockControls,{group:"parent"},(0,d.createElement)(m.ToolbarGroup,null,y)),(0,d.createElement)(e,{...t}))}),"withToolbarAppenders");(0,u.addFilter)("editor.BlockEdit","generateblocks/blockControls/containerAppenders",L);const w=window.wp.primitives,f=(0,d.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,d.createElement)(w.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})),y=window.wp.element,E=window.gb.components;window.wp.richText;wp.element.createElement;(0,p.__)("More design options","generateblocks");const C=window.wp.coreData;function x({onChange:e,value:t,help:n,postType:o}){var r;const a=function(e){return(0,l.useSelect)((t=>{const{getTaxonomies:n}=t(C.store),l={per_page:-1};return e&&!["gp_elements","wp_block"].includes(e)&&(l.type=e),n(l)||[]}),[e])}(o),s=[{value:"",label:(0,p.__)("Select Taxonomy…","generateblocks")},...a?a.map((e=>({value:e.slug,label:e.name}))):[]];return(0,d.createElement)(m.ComboboxControl,{id:"gblocks-select-taxonomy",label:(0,p.__)("Select taxonomy","generateblocks"),help:n,placeholder:(0,p.__)("Select taxonomy","generateblocks"),options:s,value:t||(null!==(r=s[0]?.value)&&void 0!==r?r:""),onChange:e})}function S(e){const{value:t,taxonomy:n,onSelect:o,postId:r}=e,a=(0,l.useSelect)((e=>{const{getEntityRecords:t}=e(C.store),l=["taxonomy",n];r&&l.push({post:r});const o=t(...l);return Array.isArray(o)?o.map((e=>({label:e.name,value:e.id.toString(),id:e.id}))):[]}),[n,r]);return(0,d.createElement)(E.Autocomplete,{id:"gblocks-select-term",label:(0,p.__)("Select Term","generateblocks"),placeholder:(0,p.__)("Select Term","generateblocks"),selected:t,source:a,onSelect:o,toStringKey:"label",showClear:!0,filterOnSelect:!1})}function T(e,t,n,l,o){return e.includes("author")&&t?t?.post_author:n||l||o}function A(e){return e.includes("term")?"term":e.includes("author")?"author":e.includes("user")?"user":"post"}function B({onInsert:e,tagName:t,selectedText:n,currentPost:o,context:r}){var a,s,c,i,g,k;const h=null!==(a=r?.["generateblocks/loopItem"])&&void 0!==a?a:{},v=null!==(s=r?.["generateblocks/queryType"])&&void 0!==s?s:"WP_Query",_=generateBlocksEditor?.dynamicTags,L=function(e,t){return e.filter((e=>{const{visibility:n=!0}=e;return!!n&&(!0===n||!n?.context||n.context.every((e=>t?.[e])))}))}(_,r),w=(0,y.useMemo)((()=>{var e;return[...(null!==(e=generateBlocksInfo?.imageSizes)&&void 0!==e?e:[]).map((e=>{const t=e.replace("-"," ").replace("_"," ");return{value:e,label:t.charAt(0).toUpperCase()+t.slice(1)}}))]}),[]),[f,B]=(0,y.useState)("current"),[M,R]=(0,y.useState)({}),[I,F]=(0,y.useState)(""),[N,O]=(0,y.useState)(""),[Z,P]=(0,y.useState)(""),j=(0,b.useDebounce)(P,200),[$,z]=(0,y.useState)(""),[V,D]=(0,y.useState)(""),[W,H]=(0,y.useState)(""),q=(0,b.useDebounce)(H,200),[U,G]=(0,y.useState)(""),[K,Q]=(0,y.useState)(""),J=(0,b.useDebounce)(Q,200),[X,Y]=(0,y.useState)(!0),[ee,te]=(0,y.useState)("full"),[ne,le]=(0,y.useState)(""),[oe,re]=(0,y.useState)((()=>{if(ne)return _.find((e=>e.tag===ne))})),ae=null!==(c=oe?.supports)&&void 0!==c?c:[],se=null!==(i=oe?.type)&&void 0!==i?i:"post",ce=ae?.includes("meta")||ae?.includes("properties"),ue=ae?.includes("image-size"),ie=ae?.includes("taxonomy"),de=ae?.includes("source"),me=(null!==(g=r?.postId)&&void 0!==g?g:0)||(null!==(k=o?.id)&&void 0!==k?k:0),pe=(0,u.applyFilters)("generateblocks.dynamicTags.sourcesInOptions",[]),ge=(0,y.useMemo)((()=>{const e={},t=[];"author"===se||U.includes("author")?t.push("author"):"comment"===se||U.includes("comment")?t.push("comments"):"term"===se||U.includes("term")?t.push("terms"):"post"===se&&t.push("post"),N&&(e.taxonomy=N);const n={load:t,options:e,postId:0};return I?n.postId=parseInt(I,10):"current"===f&&(n.postId=me),n}),[se,I,N,U]),{record:be}=(0,E.usePostRecord)(ge),{records:ke}=function(e=!0){return(0,l.useSelect)((t=>{const{isResolving:n,getEntityRecords:l,hasFinishedResolution:o}=t(C.store);if(!e)return{record:null,isLoading:!1};const r=["root","user",{per_page:-1}];return{records:l(...r),isLoading:!o("getEntityRecord",r)||n("getEntityRecord",r)}}),[e])}("user"===f),he=(0,y.useMemo)((()=>Array.isArray(ke)?ke.map((e=>({label:`#${e.id} ${e.username}`,value:`${e.id}`}))):[]),[ke]),{record:ve}=(0,E.useTermRecord)({termId:Z,taxonomy:N}),{record:_e}=(0,E.useUserRecord)($);function Le(e){le(e);const t=_.find((t=>t.tag===e));re(t),G(""),B("current"),F(""),O(""),P(""),z(""),H(""),te("full");const n={},l=t?.options;if(l)for(const e in l){const{default:t=null}=l[e];null!==t&&(n[e]=t)}return R(n),t}(0,y.useEffect)((()=>{if(!n)return;const e=function(e){const t=e.match(/\{{([\w_]+)(?:\s+(\w+(?::(?:[^|]+))?(?:\|[\w_]+(?::(?:[^|]+))?)*)?)?\}}/);if(!t)return null;const[,n,l]=t,o={};return l&&l.split("|").forEach((e=>{const[t,n]=e.split(":");o[t]=n||!0})),{tag:n,params:o}}(n),t=e?.tag;if(!t)return;const{type:l}=Le(t),{id:o=null,source:r=null,key:a=null,link:s=null,required:c=!0,tax:u=null,size:i=null,...d}=e?.params;if(o&&("term"===l?(B("term"),P(o)):"user"===l?(B("user"),z(o)):(B("post"),F(o))),pe.includes(r)&&B(r),a&&H(a),u&&O(u),s){const e=s.split(",");G(e[0]),e[1]&&Q(e[1])}i&&te(i),"false"===c&&Y(!1),d&&R(d)}),[n]);const we=(0,y.useMemo)((()=>{const e=Object.values(L).reduce(((e,{type:t,title:n,tag:l})=>{const o=t.charAt(0).toUpperCase()+t.slice(1);return{...e,[t]:{id:t,label:o,items:Array.isArray(e[t]?.items)?[...e[t].items,{label:n,value:l}]:[{label:n,value:l}]}}}),{}),t=Object.values(e);return"WP_Query"===v&&t.sort(((e,t)=>"post"===e.id&&"post"!==t.id?-1:"post"===t.id&&"post"!==e.id?1:0)),t}),[L,v]);(0,y.useEffect)((()=>{if(!ne)return void D("");const e=[];if(I&&"post"===se&&"post"!==f?B("post"):Z&&"term"===se&&"term"!==f?B("term"):$&&"user"===se&&"user"!==f?B("user"):f||B("current"),pe.includes(f)&&e.push(`source:${f}`),I&&"post"===f?e.push(`id:${I}`):Z&&"term"===f?e.push(`id:${Z}`):0<$&&"user"===f&&e.push(`id:${$}`),ce&&W&&e.push(`key:${W}`),U&&ae.includes("link")){const t=[U];K&&t.push(K),e.push(`link:${t.join(",")}`)}ee&&"full"!==ee&&e.push(`size:${ee}`),X||e.push("required:false"),N&&("term"===se||ie)&&e.push(`tax:${N}`),M&&Object.entries(M).forEach((([t,n])=>{!1!==n&&(!0===n?e.push(t):e.push(`${t}:${n}`))}));const t=e.join("|");let n=ne;t&&(n+=" "+t),n=`{{${n}}}`,D(n)}),[I,ne,se,f,ae,W,U,K,X,N,Z,$,M,ee,ie]);const fe=ae.includes("link")&&!["a","button"].includes(t),ye=fe&&(U.includes("meta")||U.includes("option")),Ee=(0,y.useMemo)((()=>fe?"term"===se||ie?[{label:(0,p.__)("None","generateblocks"),value:""},{label:(0,p.__)("Term","generateblocks"),value:"term"}]:[{label:(0,p.__)("None","generateblocks"),value:""},{label:(0,p.__)("Post","generateblocks"),value:"post"},{label:(0,p.__)("Comments area","generateblocks"),value:"comments"},{label:(0,p.__)("Post Meta","generateblocks"),value:"post_meta"},{label:(0,p.__)("Author Meta","generateblocks"),value:"author_meta"},{label:(0,p.__)("Author Archive","generateblocks"),value:"author_archive"},{label:(0,p.__)("Author Email","generateblocks"),value:"author_email"}]:[]),[se,fe,ie]),Ce=(0,y.useMemo)((()=>{const e=[];return"term"===se?e.push({label:(0,p.__)("Current Term","generateblocks"),value:"current"},{label:(0,p.__)("Term","generateblocks"),value:"term"}):"user"===se?e.push({label:(0,p.__)("Current User","generateblocks"),value:"current"},{label:(0,p.__)("Specific User","generateblocks"),value:"user"}):e.push({label:(0,p.__)("Current Post","generateblocks"),value:"current"},{label:(0,p.__)("Specific Post","generateblocks"),value:"post"}),(0,u.applyFilters)("generateblocks.dynamicTags.sourceOptions",e,{dynamicTagType:se})}),[se]),xe=(0,y.useMemo)((()=>function(e,t,n){return e?Object.entries(e).map((l=>{var o;const{type:r,label:a,help:s,options:c,placeholder:i=""}=l[1],g=null!==(o=t?.[l[0]])&&void 0!==o?o:"",b={label:a,help:s,value:g,placeholder:i,onChange:function(e){return n((t=>{const n={...t};return e?n[l[0]]=e:delete n[l[0]],n}))}};let k=m.TextControl;switch(r){case"checkbox":k=m.CheckboxControl,b.checked=!!g,delete b.value;break;case"select":k=m.SelectControl}return Array.isArray(c)&&(b.options=[{value:"",label:(0,p.__)("Default","generateblocks")},...c.map((e=>{var t;return"object"==typeof e?{value:e.value,label:null!==(t=e?.label)&&void 0!==t?t:e.value}:{label:e,value:e}}))]),"number"===r&&(b.type="number"),"checkbox"===r&&(b.checked=!!g,delete b.value),(0,u.applyFilters)("generateblocks.editor.tagSpecificControls",(0,d.createElement)(k,{key:l[0],...b}),e,{state:t,setState:n})})):null}(oe?.options,M,R)),[oe?.options,M,R]),Se=(0,y.useMemo)((()=>h?Object.keys(h).filter((e=>!e.startsWith("_")&&"password"!==e.toLowerCase())).map((e=>({label:e,value:e}))):[]),[h]);return(0,d.createElement)(d.Fragment,null,(0,d.createElement)(E.Autocomplete,{label:(0,p.__)("Select a dynamic tag","generateblocks"),selected:ne,source:we,onSelect:e=>{var t;return Le(null!==(t=e?.value)&&void 0!==t?t:"")},className:"gb-dynamic-tag-select",help:oe?.description,toStringKey:"label",itemFilter:E.Autocomplete.groupItemFilter,filterOnSelect:!1}),!!ne&&(0,d.createElement)(d.Fragment,null,de&&(0,d.createElement)(m.ComboboxControl,{label:(0,p.__)("Source","generateblocks"),value:f,options:Ce,onChange:B}),"post"===f&&(0,d.createElement)(d.Fragment,null,(0,d.createElement)(E.SelectPost,{label:(0,p.__)("Select source post","generateblocks"),value:I,onSelect:e=>{var t;return F(null!==(t=e?.value)&&void 0!==t?t:"")},onClear:()=>F(""),onAdd:({inputValue:e})=>F(e),onEnter:e=>{F(e)},currentPostId:me})),"user"===f&&(0,d.createElement)(d.Fragment,null,(0,d.createElement)(E.Autocomplete,{label:(0,p.__)("Select source user","generateblocks"),selected:$,onSelect:e=>{var t;return z(null!==(t=e?.value)&&void 0!==t?t:"")},source:he,showClear:!0,onClear:()=>z(""),afterInputWrapper:({inputValue:e,items:t})=>(0,d.createElement)(m.Button,{variant:"primary",size:"compact",className:"gb-gc-add__button",disabled:!e||t.length>0,onClick:()=>{z(e)}},(0,p.__)("Add","generateblocks"))})),("term"===se||ie)&&(0,d.createElement)(x,{onChange:O,postType:"term"!==se&&be?.post_type,value:N}),"term"===f&&(0,d.createElement)(S,{postId:"post"===se&&I,value:Z,onSelect:e=>{var t;const n=null!==(t=e?.value)&&void 0!==t?t:e;j(n||0)},taxonomy:N}),ce&&(0,d.createElement)(E.SelectMeta,{value:W,onSelect:e=>{var t;const n=null!==(t=e?.value)&&void 0!==t?t:e;q(n||"")},onEnter:e=>{H(e)},onClear:()=>H(""),onAdd:({inputValue:e})=>H(e),fallback:Se,post:be,user:_e,term:ve,source:f,sourceId:I||$||Z,type:se,help:(0,p.__)("Enter an existing meta key or choose from the list.","generateblocks")}),ue&&(0,d.createElement)(m.ComboboxControl,{label:(0,p.__)("Image Size","generateblocks"),value:ee,options:w,onChange:te}),xe,fe&&(0,d.createElement)(d.Fragment,null,(0,d.createElement)(m.ComboboxControl,{label:(0,p.__)("Link to","generateblocks"),value:U,options:Ee,onChange:G}),ye&&(0,d.createElement)(E.SelectMeta,{value:K,onSelect:e=>{var t;const n=null!==(t=e?.value)&&void 0!==t?t:e;J(n||"")},onEnter:Q,onClear:()=>Q(""),onAdd:({inputValue:e})=>Q(e),post:be,user:_e,term:ve,source:f,sourceId:T(U,be,I,$,Z),type:A(U),help:(0,p.__)("Enter an existing meta key or choose from the list.","generateblocks")})),(0,d.createElement)(m.TextControl,{label:(0,p.__)("Dynamic tag to insert","generateblocks"),value:V,onChange:D}),(0,d.createElement)(m.CheckboxControl,{label:(0,p.__)("Required to render","generateblocks"),className:"gb-dynamic-tag-select__render-if-empty",checked:!!X,onChange:Y,help:(0,p.__)("This tag must output a value for the block to be rendered.","generateblocks")}),(0,d.createElement)(m.Button,{variant:"primary",onClick:()=>{e(V)}},(0,p.__)("Insert dynamic tag","generateblocks"))))}n(805);const M=window.wp.editor,R=(0,d.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,d.createElement)(w.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));function I({onInsert:e,renderToggle:t,tooltip:n,tagName:o,selectedText:r,value:a,foundTags:s,onRemove:c,context:u}){const[i,g]=(0,y.useState)(!1),[b,k]=(0,y.useState)(null),h=(0,l.useSelect)((e=>{const{getCurrentPost:t}=e(M.store);return t?t():null}));function v(){g(!i)}const _=(0,y.createInterpolateElement)((0,p.__)("Choose an existing dynamic tag to edit, or <CreateNew />."),{CreateNew:(0,d.createElement)((function(){return(0,d.createElement)(m.Button,{onClick:()=>k(""),variant:"link",className:"gb-dynamic-tag-modal__create-new"},(0,p.__)("insert a new one","generateblocks"))}),null)});return(0,y.useEffect)((()=>{var e;if(!i)return;const t=null!==(e=document.querySelector(".gblocks-button-link-dropdown"))&&void 0!==e?e:"";return t&&(t.style.zIndex=0),()=>{t&&(t.style.zIndex="")}}),[i]),(0,d.createElement)(d.Fragment,null,(0,d.createElement)((function(){if(t)return t({isOpen:i,onToggle:v});const e=(0,d.createElement)(m.Button,{onClick:v,"aria-expanded":i,icon:(0,d.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256"},(0,d.createElement)("rect",{width:"256",height:"256",fill:"none"}),(0,d.createElement)("ellipse",{cx:"128",cy:"80",rx:"88",ry:"48",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),(0,d.createElement)("path",{d:"M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),(0,d.createElement)("path",{d:"M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})),label:(0,p.__)("Dynamic tags","generateblocks")});return(0,d.createElement)(d.Fragment,null,n?(0,d.createElement)(m.Tooltip,{text:n},e):e)}),null),i&&(0,d.createElement)(m.Modal,{title:(0,p.__)("Dynamic Tags","generateblocks"),onRequestClose:()=>{k(null),v()},className:"gb-dynamic-tag-modal",size:"medium"},(0,d.createElement)("div",{className:"gb-dynamic-tag-modal__content"},s&&s.length&&null===b&&!r?(0,d.createElement)(d.Fragment,null,(0,d.createElement)("p",{style:{margin:0}},_),(0,d.createElement)("ul",{className:"gb-dynamic-tag-modal__found-tags"},s.map((e=>(0,d.createElement)("li",{key:e},(0,d.createElement)(m.Button,{onClick:()=>k(e),className:"gb-dynamic-tag-modal__tag",variant:"link"},e),(0,d.createElement)(m.Button,{onClick:()=>{c(e),v()},size:"small",icon:R,label:(0,p.__)("Remove tag from content","generateblocks"),showTooltip:!0})))))):(0,d.createElement)(B,{onInsert:t=>{e(t,{tagToReplace:b}),k(null),v()},tagName:o,value:a,selectedText:b||r,tagToReplace:b,currentPost:h,context:u}))))}function F({htmlAttributes:e,setAttributes:t,attributesName:n="htmlAttributes",label:l=(0,p.__)("Link","generateblocks"),context:o}){var r,a,s;const c=null!==(r=e?.href)&&void 0!==r?r:"",u=null!==(a=e?.target)&&void 0!==a?a:"",i=null!==(s=e?.rel)&&void 0!==s?s:"";return(0,y.useEffect)((()=>{if("_blank"===u){if(!i.includes("noopener")){const l=i?i.split(" "):[];l.push("noopener"),t({[n]:{...e,rel:l.join(" ")}})}}else if(i.includes("noopener")){const l=i?i.split(" "):[];l.splice(l.indexOf("noopener"),1),t({[n]:{...e,rel:l.join(" ")}})}}),[u,i]),(0,d.createElement)("div",{className:"gb-url-controls components-base-control"},(0,d.createElement)(m.BaseControl,{label:l,id:"gb-url-controls__link",htmlFor:"gb-url-controls__link-input"},(0,d.createElement)(E.Stack,{layout:"flex",direction:"horizontal",wrap:!1,gap:"5px"},(0,d.createElement)(k.URLInput,{id:"gb-url-controls__link-input",className:"gb-url-controls__link-input",value:c,onChange:l=>{t({[n]:{...e,href:l}})},disableSuggestions:c.includes("{{")}),(0,d.createElement)(I,{onInsert:l=>{t({[n]:{...e,href:l}})},selectedText:c.startsWith("{{")?c:"",context:o}))),(!!c||!!u||!!i)&&(0,d.createElement)(d.Fragment,null,(0,d.createElement)(m.ToggleControl,{label:(0,p.__)("Open link in a new tab","generateblocks"),checked:u||"",onChange:l=>{const o={...e};l?o.target="_blank":delete o.target,t({[n]:o})}}),(0,d.createElement)(m.ToggleControl,{label:(0,p.__)('Add rel="nofollow"',"generateblocks"),checked:i?.includes("nofollow")||"",onChange:l=>{const o={...e},r=i?i.split(" "):[];l&&!r.includes("nofollow")&&r.push("nofollow"),!l&&r.includes("nofollow")&&r.splice(r.indexOf("nofollow"),1),r.length>0?o.rel=r.join(" "):delete o.rel,t({[n]:o})}}),(0,d.createElement)(m.ToggleControl,{label:(0,p.__)('Add rel="sponsored"',"generateblocks"),checked:i?.includes("sponsored")||"",onChange:l=>{const o={...e},r=i?i.split(" "):[];l&&!r.includes("sponsored")&&r.push("sponsored"),!l&&r.includes("sponsored")&&r.splice(r.indexOf("sponsored"),1),r.length>0?o.rel=r.join(" "):delete o.rel,t({[n]:o})}})))}function N({tagName:e,setAttributes:t,htmlAttributes:n,context:l}){var o;if("a"!==e)return null;const r=null!==(o=n?.href)&&void 0!==o?o:"";return(0,d.createElement)(k.BlockControls,null,(0,d.createElement)(m.ToolbarGroup,null,(0,d.createElement)(m.Dropdown,{contentClassName:"gblocks-button-link-dropdown",popoverProps:{position:"bottom right"},renderToggle:({isOpen:e,onToggle:t})=>(0,d.createElement)(m.ToolbarButton,{icon:f,label:r?(0,p.__)("Change Link","generateblocks"):(0,p.__)("Add Link","generateblocks"),onClick:t,"aria-expanded":e,isPressed:!!r}),renderContent:()=>(0,d.createElement)(d.Fragment,null,(0,d.createElement)(F,{htmlAttributes:n,setAttributes:t,context:l}))})))}const O=(0,b.createHigherOrderComponent)((e=>t=>{const{name:n,attributes:l,setAttributes:o,context:r}=t,{tagName:a,htmlAttributes:s}=l;return"generateblocks/text"!==n||"a"!==a?(0,d.createElement)(e,{...t}):(0,d.createElement)(d.Fragment,null,(0,d.createElement)(e,{...t}),(0,d.createElement)(N,{setAttributes:o,htmlAttributes:s,tagName:a,context:r}))}),"withButtonLinkToolbar");(0,u.addFilter)("editor.BlockEdit","generateblocks/blockControls/buttonLinkToolbar",O,100),t()((()=>{const e=new URLSearchParams(window.location.search);e.delete("gb-styles-search"),window.history.replaceState(null,"",`${window.location.pathname}?${e.toString()}`)}))})()})();