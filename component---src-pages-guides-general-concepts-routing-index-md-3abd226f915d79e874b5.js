"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[2770],{63103:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return p},default:function(){return m}});var n=o(87462),a=o(45987),i=(o(15007),o(64983)),r=o(91515);const s=["components"],p={},u={_frontmatter:p},d=r.Z;function m(e){let{components:t}=e,o=(0,a.Z)(e,s);return(0,i.mdx)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"routing"},"Routing"),(0,i.mdx)("p",null,"For web applications, routing is the process of mapping a URL to specific page resources."),(0,i.mdx)("h2",{id:"overview"},"Overview"),(0,i.mdx)("p",null,"In a multi-page application, routing is performed on the server side.\nEvery URL request fetches new HTML from the server and the browser loads the entire page.\nThis approach is inefficient because the same assets get loaded every time site navigation occurs."),(0,i.mdx)("p",null,"For a single-page application (SPA), such as a progressive web app, routing is performed on the client side.\nSingle-page applications do not reload the browser during navigation.\nInstead, the application uses the URL to fetch smaller pieces of data from the server and updates specific items on the page."),(0,i.mdx)("h2",{id:"routing-for-pwa-studio-storefronts"},"Routing for PWA Studio storefronts"),(0,i.mdx)("p",null,"PWA Studio provides tools that support both server-side and client-side routing."),(0,i.mdx)("h3",{id:"server-side-routing"},"Server-side routing"),(0,i.mdx)("p",null,"Server-side routing is accomplished using the ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/upward/"},"UPWARD")," configuration file.\nSince the configuration file defines how the server responds to requests,\nyou can specify a different template to render each page type, such as a CMS page or a product details page."),(0,i.mdx)("p",null,"Early versions of the Venia storefront used this approach, but\nin the current version, every page request now returns the same HTML with the application shell.\nThe application decides how the page should render based on the request."),(0,i.mdx)("h3",{id:"client-side-routing"},"Client-side routing"),(0,i.mdx)("p",null,"Client-side routing happens inside the storefront application.\nWhen a user navigates inside the application, it updates the relevant pieces instead of refreshing the entire page to update content."),(0,i.mdx)("p",null,"Since Venia is a single-page application, it uses client-side routing for internal navigation."),(0,i.mdx)("h2",{id:"how-routing-works-in-venia"},"How routing works in Venia"),(0,i.mdx)("p",null,"This section goes over the routing flow implemented in Venia.\nIt is the default workflow for all new projects created using the scaffolding tool,\nbut it is not the only possible workflow for routing."),(0,i.mdx)("h3",{id:"initial-request"},"Initial request"),(0,i.mdx)("p",null,"Venia's UPWARD server handles the initial request to the storefront application.\nIts ",(0,i.mdx)("inlineCode",{parentName:"p"},"upward.yml")," configuration tells the server to return an ",(0,i.mdx)("inlineCode",{parentName:"p"},"index.html")," page created at build time by Webpack, via the ",(0,i.mdx)("a",{parentName:"p",href:"https://webpack.js.org/plugins/html-webpack-plugin/"},"HtmlWebpackPlugin"),".\nThe content of this file is the same for all page types."),(0,i.mdx)("p",null,"After the browser loads the application shell, routing is handled client-side by React Router."),(0,i.mdx)("h3",{id:"routes-component"},"Routes component"),(0,i.mdx)("p",null,"Used inside the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/App/app.js"},"App component"),", the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Routes/routes.js"},"Routes component")," provides the switch logic for deciding which component to use to render the main content for the current route."),(0,i.mdx)("p",null,"Routes in a PWA do not have to correspond to routes in the Adobe Commerce or Magento Open Source application backend.\nFor example, Venia has routes not defined in the backend, such as ",(0,i.mdx)("em",{parentName:"p"},"Create account")," or full page ",(0,i.mdx)("em",{parentName:"p"},"Checkout"),".\nThese routes are assigned components which render content for those pages in the Routes component."),(0,i.mdx)("h3",{id:"magentoroute-component"},"MagentoRoute component"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/MagentoRoute/magentoRoute.js"},"MagentoRoute component")," handles the routes that are specific to the Adobe Commerce or Magento Open Source application, such as a product or category page.\nIt uses its ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/peregrine/"},"Peregrine talon")," counterpart to determine which component to display."),(0,i.mdx)("h3",{id:"usemagentoroute-talon"},"useMagentoRoute() talon"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/MagentoRoute/useMagentoRoute.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"useMagentoRoute()"))," talon returns the correct component for a page type. It uses the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/talons/MagentoRoute/getRouteComponent.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"getRouteComponent()"))," helper function to get the ",(0,i.mdx)("strong",{parentName:"p"},"root component")," associated with a page type.\nIt uses the ",(0,i.mdx)("inlineCode",{parentName:"p"},"resolveUnknownRoute()")," function to determine the page type for a route and retrieves the root component associated with that type using a global ",(0,i.mdx)("inlineCode",{parentName:"p"},"fetchRootComponent")," function.\nThe ",(0,i.mdx)("inlineCode",{parentName:"p"},"fetchRootComponent")," function is autogenerated at build time by the Buildpack RootComponentsPlugin, which searches for RootComponents in the project and builds a manifest."),(0,i.mdx)("h3",{id:"resolveunknownroute"},"resolveUnknownRoute()"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/Router/resolveUnknownRoute.js"},(0,i.mdx)("inlineCode",{parentName:"a"},"resolveUnknownRoute()"))," function is a utility function for fetching page type information from the backend server using a GraphQL query.\nThe ",(0,i.mdx)("inlineCode",{parentName:"p"},"getRouteComponent()")," function uses the information from this query to get the correct root component from an object that maps page types to root components."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-general-concepts-routing-index-md-3abd226f915d79e874b5.js.map