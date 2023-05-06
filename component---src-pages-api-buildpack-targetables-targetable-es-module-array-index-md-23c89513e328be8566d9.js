"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[5115],{74992:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return u}});var t=a(87462),r=a(45987),o=(a(15007),a(64983)),l=a(91515),d=a(20319);const i=["components"],m={},s={_frontmatter:m},p=l.Z;function u(e){let{components:n}=e,a=(0,r.Z)(e,i);return(0,o.mdx)(p,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"targetableesmodulearray"},"TargetableESModuleArray"),(0,o.mdx)(d.Z,{mdxType:"Docs"}),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)("p",null,"Code examples for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TargetableESModuleArray")," class."),(0,o.mdx)("h3",{id:"export-plainhtmlrenderer-and-pagebuilder-in-a-list"},"Export PlainHtmlRenderer and PageBuilder in a list"),(0,o.mdx)("p",null,"This example uses the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TargetableESModuleArray")," class to add ",(0,o.mdx)("inlineCode",{parentName:"p"},"PageBuilder")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"PlainHtmlRenderer")," to the array exported by the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/RichContent/richContentRenderers.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"richContentRenderers.js")," file"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// Create a TargetableESModuleArray linked to the richContentRenderers.js file\nconst renderers = targetable.esModuleArray(\n  "@magento/venia-ui/lib/components/RichContent/richContentRenderers.js"\n);\n\n// Push PageBuilder and PlainHtmlRenderer to the end of the array\nrenderers.push(\'import * as PageBuilder from "@magento/pagebuilder"\');\nrenderers.push(\n  \'import * as PlainHtmlRenderer from "@magento/venia-ui/lib/components/RichContent/plainHtmlRenderer"\'\n);\n')),(0,o.mdx)("p",null,"The file linked to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TargetableESModuleArray"),' class must be a module that export an empty array.\nWithout the module, the loader has nothing to "load" and will not execute.\nCode editors and linters may also complain if the module is missing.'),(0,o.mdx)("p",null,"After the transforms above, ",(0,o.mdx)("inlineCode",{parentName:"p"},"richContentRenderers.js")," enters the bundle as:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'import * as PageBuilder from "@magento/pagebuilder";\nimport * as PlainHtmlRenderer from "@magento/venia-ui/lib/components/RichContent/plainHtmlRenderer";\n\nexport default [PageBuilder, PlainHtmlRenderer];\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-targetables-targetable-es-module-array-index-md-23c89513e328be8566d9.js.map