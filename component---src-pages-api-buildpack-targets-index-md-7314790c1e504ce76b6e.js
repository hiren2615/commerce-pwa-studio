"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[3342],{5184:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return d}});var n=a(87462),r=a(45987),s=(a(15007),a(64983)),o=a(91515),i=a(48792);const c=["components"],p={},l={_frontmatter:p},u=o.Z;function d(e){let{components:t}=e,a=(0,r.Z)(e,c);return(0,s.mdx)(u,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"targets"},"Targets"),(0,s.mdx)("p",null,"Buildpack's targets follow the same Target API as other packages' targets, but they play a unique role.\nBuildpack targets are the fundamental \"roots\" of the PWA Studio Target system."),(0,s.mdx)("h2",{id:"overview"},"Overview"),(0,s.mdx)("p",null,"All other Targets operate by intercepting other Targets.\nBuildBus runs the declare and intercept phases by itself.\nBut nothing ",(0,s.mdx)("em",{parentName:"p"},"calls")," targets to run any interceptors until Buildpack begins the process, by directly invoking one of its ",(0,s.mdx)("em",{parentName:"p"},"own")," targets."),(0,s.mdx)("p",null,"The Buildpack targets are therefore very generic and low-level.\nThey are meant to be used as building blocks for higher-level feature targets, such as adding routing or navigation logic."),(0,s.mdx)("p",null,"Even deeper than Buildpack targets are the very similar Hooks that make up ",(0,s.mdx)("a",{parentName:"p",href:"https://v4.webpack.js.org/api/plugins/"},"Webpack's plugin system"),".\nInterceptors can use Buildpack's ",(0,s.mdx)("inlineCode",{parentName:"p"},"webpackCompiler")," target to acquire a reference to the Webpack Compiler object for each build, and can then do anything a Webpack plugin can do.\nBecause of their similarity in form and function, the PWA Studio Targets system integrates seamlessly into the larger Webpack ecosystem as a commerce-driven superset of its functionality."),(0,s.mdx)(i.Z,{mdxType:"Docs"}))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-targets-index-md-7314790c1e504ce76b6e.js.map