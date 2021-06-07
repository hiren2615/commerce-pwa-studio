(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7940],{56858:function(t,n,e){"use strict";e.r(n),e.d(n,{_frontmatter:function(){return d},default:function(){return p}});var o=e(22122),i=e(19756),r=(e(15007),e(64983)),s=e(99536),a=e(73583),d={},u={_frontmatter:d},c=s.Z;function p(t){var n=t.components,e=(0,i.Z)(t,["components"]);return(0,r.mdx)(c,(0,o.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"productlisting"},"ProductListing"),(0,r.mdx)("p",null,"These talons provide logic for components that render products in a shopping cart and forms that update the quantity or configuration for each product."),(0,r.mdx)(a.Z,{mdxType:"Component"}),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("h3",{id:"useproductlisting"},"useProductListing()"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useProductListing } from '@magento/peregrine/lib/talons/CartPage/ProductListing/useProductListing';\n\nimport { GET_PRODUCT_LISTING } from './myProductListing.gql';\n\nconst MyProductListing = props => {\n    const { setIsCartUpdating } = props;\n\n    const talonProps = useProductListing({\n        queries: {\n            getProductListing: GET_PRODUCT_LISTING\n        }\n    });\n    const { activeEditItem, isLoading, items, setActiveEditItem } = talonProps;\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    return (\n        // JSX that renders the list of products in a cart using the talon props\n    )\n}\n\nexport default MyProductListing;\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-peregrine-talons-cart-page-product-listing-index-md-2bfde73dda1fcfcad4d0.js.map