!function(){"use strict";var e=window.React,t=window.wp.plugins,a=window.wp.i18n,n=window.wp.editPost,r=window.wp.hooks,l=window.wp.element,i=window.wp.components,s=window.wp.primitives,c=(0,e.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(s.Path,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"})),o=window.wp.data;function d(e){const{name:t,children:a}=e;return(0,r.applyFilters)(t,a||"",e)}function w(){return(0,e.createElement)("svg",{viewBox:"0 0 50 60.12",width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M6.686 31.622V18.918a.077.077 0 0 1 .05-.072l6.5-2.313 6.5-2.313 9.682-3.445L39.1 7.33a.067.067 0 0 0 .036-.028.074.074 0 0 0 .014-.044V.076a.077.077 0 0 0-.032-.062.076.076 0 0 0-.069-.009l-13 4.625-13 4.625-6.5 2.313-6.5 2.313a.067.067 0 0 0-.036.028.097.097 0 0 0-.013.046V52.067c0 .026.013.048.032.062s.044.018.069.009l3.267-1.163 3.267-1.163c.015-.005.028-.015.036-.028s.014-.028.014-.044V37.999l.001-6.377c-.001 0 0 0 0 0z"}),(0,e.createElement)("path",{d:"m23.949 29.976 13-4.625 13-4.625c.015-.005.028-.015.036-.028s.015-.028.015-.044V8.056a.077.077 0 0 0-.032-.062.076.076 0 0 0-.069-.009l-13 4.625-13 4.625-6.5 2.313-6.5 2.313a.067.067 0 0 0-.036.028.074.074 0 0 0-.014.044V60.045c0 .026.013.048.032.062a.076.076 0 0 0 .069.009l6.475-2.304 6.475-2.304 6.525-2.322 6.525-2.322 6.5-2.313 6.5-2.313c.015-.005.028-.015.036-.028s.014-.025.014-.041V27.193a.077.077 0 0 0-.032-.062.076.076 0 0 0-.069-.009l-6.45 2.295L37 31.711a.067.067 0 0 0-.036.028.074.074 0 0 0-.014.044v6.272a.077.077 0 0 1-.05.072l-6.45 2.295L24 42.715a.075.075 0 0 1-.101-.071V30.046c0-.016.005-.031.014-.044a.08.08 0 0 1 .036-.026z"}))}function m(t){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"gblocks-editor-sidebar-header__inner"},(0,r.applyFilters)("generateblocks.editor.sidebarHeader",t.children||"",t)))}(0,t.registerPlugin)("gblocks-editor-sidebar",{render:function(){const[t,r]=(0,l.useState)(""),{openGeneralSidebar:s}=(0,o.useDispatch)(n.store);return(0,e.createElement)(n.PluginSidebar,{name:"gblocks-editor-sidebar",className:"gblocks-editor-sidebar",title:(0,a.__)("GenerateBlocks","generateblocks-pro"),icon:(0,e.createElement)(w,null),headerClassName:"gblocks-editor-sidebar-header",header:(0,e.createElement)(m,{activePanel:t,setActivePanel:r},(0,e.createElement)("span",{className:"gblocks-editor-sidebar-header__title"},(0,a.__)("GenerateBlocks","generateblocks")),(0,e.createElement)(i.Button,{onClick:()=>s("edit-post/block"),icon:c,label:(0,a.__)("Close","generateblocks-pro")}))},(0,e.createElement)(d,{name:"generateblocks.editor.sidebar",activePanel:t,setActivePanel:r}))}})}();