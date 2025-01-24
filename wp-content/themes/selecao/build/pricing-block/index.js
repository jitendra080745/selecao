(()=>{"use strict";var e,t={202:()=>{const e=window.wp.blocks,t=window.wp.i18n,i=window.wp.blockEditor,n=window.wp.components,l=window.wp.element,r=window.ReactJSXRuntime,c=JSON.parse('{"UU":"custom-blocks/pricing-block"}');(0,e.registerBlockType)(c.UU,{edit:function({attributes:e,setAttributes:c}){const{title:o,heading:s,repeater:a}=e,d=(e,t,i)=>{const n=[...a];n[e][t]=i,c({repeater:n})},h=(e,t,i,n)=>{const l=[...a];l[e].subtitles[t][i]=n,c({repeater:l})},[p,b]=(0,l.useState)(!0);return(0,r.jsxs)("div",{...(0,i.useBlockProps)(),children:[(0,r.jsxs)("h2",{onClick:()=>{b(!p)},className:"block-title "+(p?"":"show"),style:{cursor:"pointer",color:p?"black":"gray"},children:[(0,t.__)("Pricing Block","pricing-block"),(0,r.jsx)("span",{})]}),(0,r.jsxs)("div",{className:"block-wrap "+(p?"collapsed":""),children:[" ",!p&&(0,r.jsxs)("div",{className:"cta-fields",children:[(0,r.jsx)("h6",{children:(0,t.__)("Title","pricing-block")}),(0,r.jsx)(n.TextControl,{value:o,onChange:e=>c({title:e}),placeholder:(0,t.__)("Add Title","pricing-block")}),(0,r.jsx)("h6",{children:(0,t.__)("Heading","pricing-block")}),(0,r.jsx)(n.TextControl,{value:s,onChange:e=>c({heading:e}),placeholder:(0,t.__)("Add Heading","pricing-block")}),(0,r.jsxs)(n.PanelBody,{title:(0,t.__)("Repeater Items","pricing-block"),initialOpen:!0,children:[a.map(((e,i)=>(0,r.jsx)(n.PanelRow,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{children:(0,t.__)("Title","pricing-block")}),(0,r.jsx)(n.CheckboxControl,{label:(0,t.__)("Featured","pricing-block"),checked:e.checked,onChange:e=>d(i,"checked",e)}),(0,r.jsx)(n.TextControl,{value:e.title,onChange:e=>d(i,"title",e),placeholder:(0,t.__)("Enter item title...","pricing-block")}),(0,r.jsx)("h6",{children:(0,t.__)("SubTitles","pricing-block")}),(0,r.jsxs)(n.PanelBody,{initialOpen:!0,children:[e.subtitles.map(((e,l)=>(0,r.jsx)(n.PanelRow,{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h6",{children:(0,t.__)("SubTitle","pricing-block")}),(0,r.jsx)(n.TextControl,{value:e.text,onChange:e=>h(i,l,"text",e),placeholder:(0,t.__)("Enter subtitle...","pricing-block")}),(0,r.jsx)(n.CheckboxControl,{label:(0,t.__)("Line Through Checkbox","pricing-block"),checked:e.checked,onChange:e=>h(i,l,"checked",e)}),(0,r.jsx)(n.Button,{onClick:()=>((e,t)=>{const i=[...a];i[e].subtitles=i[e].subtitles.filter(((e,i)=>i!==t)),c({repeater:i})})(i,l),isDestructive:!0,style:{marginTop:"10px"},children:(0,t.__)("Remove SubTitle","pricing-block")})]})},l))),(0,r.jsx)(n.Button,{onClick:()=>(e=>{const t=[...a];t[e].subtitles.push({text:"",checked:!1}),c({repeater:t})})(i),isPrimary:!0,style:{marginTop:"10px"},children:(0,t.__)("Add SubTitle","pricing-block")})]}),(0,r.jsx)("h6",{children:(0,t.__)("Number","pricing-block")}),(0,r.jsx)(n.TextControl,{value:e.number,onChange:e=>d(i,"number",e),placeholder:(0,t.__)("Enter Number...","pricing-block")}),(0,r.jsx)("h6",{children:(0,t.__)("Month","pricing-block")}),(0,r.jsx)(n.TextControl,{value:e.month,onChange:e=>d(i,"month",e),placeholder:(0,t.__)("Enter Month...","pricing-block")}),(0,r.jsx)("h6",{children:(0,t.__)("Eyebrow","pricing-block")}),(0,r.jsx)(n.TextControl,{value:e.eyebrow,onChange:e=>d(i,"eyebrow",e),placeholder:(0,t.__)("Enter text...","pricing-block")}),(0,r.jsx)("h6",{children:(0,t.__)("Button Text","pricing-block")}),(0,r.jsx)(n.TextControl,{value:e.buttonText,onChange:e=>d(i,"buttonText",e),placeholder:(0,t.__)("Enter button text...","pricing-block")}),(0,r.jsx)("h6",{children:(0,t.__)("Button URL","pricing-block")}),(0,r.jsx)(n.TextControl,{value:e.buttonUrl,onChange:e=>d(i,"buttonUrl",e),placeholder:(0,t.__)("Enter button URL...","pricing-block")}),(0,r.jsx)(n.Button,{onClick:()=>(e=>{const t=a.filter(((t,i)=>i!==e));c({repeater:t})})(i),isDestructive:!0,style:{marginTop:"10px"},children:(0,t.__)("Remove Item","pricing-block")})]})},i))),(0,r.jsx)(n.Button,{onClick:()=>{const e=[...a,{image:"",eyebrow:"",title:"",description:"",subtitles:[]}];c({repeater:e})},isPrimary:!0,style:{marginTop:"10px"},children:(0,t.__)("Add Item","pricing-block")})]})]})]})]})},save:function({attributes:e}){const{title:t,heading:n,repeater:l}=e;return(0,r.jsx)("div",{...i.useBlockProps.save(),children:(0,r.jsxs)("section",{id:"pricing",className:"pricing section",children:[(0,r.jsxs)("div",{className:"container section-title","data-aos":"fade-up",children:[t&&(0,r.jsx)("h2",{children:t}),n&&(0,r.jsx)("p",{children:n})]}),(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row gy-3",children:l.length>0&&l.map(((e,t)=>(0,r.jsx)("div",{className:"col-xl-3 col-lg-6","data-aos":"fade-up","data-aos-delay":"100",children:(0,r.jsxs)("div",{className:"pricing-item "+(e.checked?"featured":""),children:[e.eyebrow&&(0,r.jsx)("span",{className:"advanced",children:e.eyebrow}),e.title&&(0,r.jsx)("h3",{children:e.title}),(0,r.jsxs)("h4",{children:[(0,r.jsx)("sup",{children:"$"}),e.number,e.month&&(0,r.jsxs)("span",{children:["/ ",e.month]})]}),(0,r.jsx)("ul",{children:e.subtitles&&e.subtitles.length>0&&e.subtitles.map(((e,t)=>(0,r.jsx)("li",{"data-aos":"fade-up","data-aos-delay":"100",className:e.checked?"na":"",children:e.text},t)))}),(0,r.jsx)("div",{className:"btn-wrap",children:(0,r.jsx)("a",{href:e.buttonUrl||"#",className:"btn-buy",children:e.buttonText||"Click Here"})})]})},t)))})})]})})}})}},i={};function n(e){var l=i[e];if(void 0!==l)return l.exports;var r=i[e]={exports:{}};return t[e](r,r.exports,n),r.exports}n.m=t,e=[],n.O=(t,i,l,r)=>{if(!i){var c=1/0;for(d=0;d<e.length;d++){for(var[i,l,r]=e[d],o=!0,s=0;s<i.length;s++)(!1&r||c>=r)&&Object.keys(n.O).every((e=>n.O[e](i[s])))?i.splice(s--,1):(o=!1,r<c&&(c=r));if(o){e.splice(d--,1);var a=l();void 0!==a&&(t=a)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,l,r]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={498:0,598:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var l,r,[c,o,s]=i,a=0;if(c.some((t=>0!==e[t]))){for(l in o)n.o(o,l)&&(n.m[l]=o[l]);if(s)var d=s(n)}for(t&&t(i);a<c.length;a++)r=c[a],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},i=globalThis.webpackChunkcustom_block=globalThis.webpackChunkcustom_block||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var l=n.O(void 0,[598],(()=>n(202)));l=n.O(l)})();