(()=>{"use strict";var e,i={409:()=>{const e=window.wp.blocks,i=window.wp.i18n,s=window.wp.blockEditor,t=window.wp.components,l=window.wp.element,a=window.ReactJSXRuntime,n=JSON.parse('{"UU":"custom-blocks/testimonial-block"}');(0,e.registerBlockType)(n.UU,{edit:function({attributes:e,setAttributes:n}){const{title:o,heading:r,repeater:c}=e,d=(e,i,s)=>{const t=[...c];t[e][i]=s,n({repeater:t})},[m,p]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{"undefined"!=typeof Swiper&&new Swiper(".swiper.testing",{loop:!0,slidesPerView:3,speed:600,autoplay:{delay:5e3},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:40},1200:{slidesPerView:3,spaceBetween:10}}})}),[c]),(0,a.jsxs)("div",{...(0,s.useBlockProps)(),children:[(0,a.jsxs)("h2",{onClick:()=>{p(!m)},className:"block-title "+(m?"":"show"),style:{cursor:"pointer",color:m?"black":"gray"},children:[(0,i.__)("Testimonial Block","testimonial-block"),(0,a.jsx)("span",{})]}),(0,a.jsx)("div",{className:"block-wrap "+(m?"collapsed":""),children:!m&&(0,a.jsxs)("div",{className:"cta-fields",children:[(0,a.jsx)("h6",{children:(0,i.__)("Title","testimonial-block")}),(0,a.jsx)(t.TextControl,{value:o,onChange:e=>n({title:e}),placeholder:(0,i.__)("Add Title","testimonial-block")}),(0,a.jsx)("h6",{children:(0,i.__)("Heading","testimonial-block")}),(0,a.jsx)(t.TextControl,{value:r,onChange:e=>n({heading:e}),placeholder:(0,i.__)("Add Heading","testimonial-block")}),(0,a.jsxs)(t.PanelBody,{title:(0,i.__)("Repeater Items","testimonial-block"),initialOpen:!0,children:[c.length>0&&(0,a.jsx)("div",{className:"swiper-wrapper",children:c.map(((e,l)=>(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsx)(t.PanelRow,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h6",{children:(0,i.__)("Image","testimonial-block")}),(0,a.jsx)(s.MediaUploadCheck,{children:(0,a.jsx)("div",{className:"image-upload-section",children:e.image?(0,a.jsxs)("div",{className:"image-wrapper",children:[(0,a.jsx)("img",{src:e.image,alt:(0,i.__)("Selected Image","testimonial-block")}),(0,a.jsx)(t.Button,{onClick:()=>d(l,"image",""),isDestructive:!0,children:(0,i.__)("Remove Image","testimonial-block")})]}):(0,a.jsx)(s.MediaUpload,{onSelect:e=>d(l,"image",e.url),allowedTypes:["image"],value:e.image,render:({open:e})=>(0,a.jsx)(t.Button,{onClick:e,isSecondary:!0,children:(0,i.__)("Select Image","testimonial-block")})})})}),(0,a.jsx)("h6",{children:(0,i.__)("Title","testimonial-block")}),(0,a.jsx)(t.TextControl,{value:e.title,onChange:e=>d(l,"title",e),placeholder:(0,i.__)("Enter item title...","testimonial-block")}),(0,a.jsx)("h6",{children:(0,i.__)("Subtitle","testimonial-block")}),(0,a.jsx)(t.TextControl,{value:e.subtitle,onChange:e=>d(l,"subtitle",e),placeholder:(0,i.__)("Enter subtitle...","testimonial-block")}),(0,a.jsx)("h6",{children:(0,i.__)("Description","testimonial-block")}),(0,a.jsx)(t.TextControl,{value:e.description,onChange:e=>d(l,"description",e),placeholder:(0,i.__)("Enter description...","testimonial-block")}),(0,a.jsx)(t.Button,{onClick:()=>(e=>{const i=c.filter(((i,s)=>s!==e));n({repeater:i})})(l),isDestructive:!0,style:{marginTop:"10px"},children:(0,i.__)("Remove Item","testimonial-block")})]})})},l)))}),(0,a.jsx)(t.Button,{onClick:()=>{const e=[...c,{image:"",title:"",subtitle:"",description:""}];n({repeater:e})},isPrimary:!0,style:{marginTop:"10px"},children:(0,i.__)("Add Item","testimonial-block")})]})]})})]})},save:function({attributes:e}){const{title:i,heading:t,repeater:l}=e;return(0,a.jsx)("div",{...s.useBlockProps.save(),children:(0,a.jsxs)("section",{id:"testimonials",className:"testimonials section",children:[(0,a.jsxs)("div",{className:"container section-title","data-aos":"fade-up",children:[i&&(0,a.jsx)("h2",{children:i}),t&&(0,a.jsx)("p",{children:t})]}),(0,a.jsx)("div",{className:"container","data-aos":"fade-up","data-aos-delay":"100",children:(0,a.jsxs)("div",{className:"swiper testing",children:[(0,a.jsx)("div",{className:"swiper-wrapper",children:l.length>0&&l.map(((e,i)=>(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"testimonial-item",children:[e.image&&(0,a.jsx)("img",{src:e.image,alt:`Testimonial ${i+1}`,className:"testimonial-img"}),e.title&&(0,a.jsx)("h3",{children:e.title}),e.subtitle&&(0,a.jsx)("h4",{children:e.subtitle}),(0,a.jsxs)("div",{className:"stars",children:[(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"}),(0,a.jsx)("i",{className:"bi bi-star-fill"})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("i",{className:"bi bi-quote quote-icon-left"}),(0,a.jsx)("span",{children:e.description}),(0,a.jsx)("i",{className:"bi bi-quote quote-icon-right"})]})]})},i)))}),(0,a.jsx)("div",{className:"swiper-pagination"})]})})]})})}})}},s={};function t(e){var l=s[e];if(void 0!==l)return l.exports;var a=s[e]={exports:{}};return i[e](a,a.exports,t),a.exports}t.m=i,e=[],t.O=(i,s,l,a)=>{if(!s){var n=1/0;for(d=0;d<e.length;d++){for(var[s,l,a]=e[d],o=!0,r=0;r<s.length;r++)(!1&a||n>=a)&&Object.keys(t.O).every((e=>t.O[e](s[r])))?s.splice(r--,1):(o=!1,a<n&&(n=a));if(o){e.splice(d--,1);var c=l();void 0!==c&&(i=c)}}return i}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[s,l,a]},t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),(()=>{var e={673:0,421:0};t.O.j=i=>0===e[i];var i=(i,s)=>{var l,a,[n,o,r]=s,c=0;if(n.some((i=>0!==e[i]))){for(l in o)t.o(o,l)&&(t.m[l]=o[l]);if(r)var d=r(t)}for(i&&i(s);c<n.length;c++)a=n[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},s=globalThis.webpackChunkcustom_block=globalThis.webpackChunkcustom_block||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))})();var l=t.O(void 0,[421],(()=>t(409)));l=t.O(l)})();