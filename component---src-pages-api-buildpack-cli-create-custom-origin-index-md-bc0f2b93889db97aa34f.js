(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[991],{47353:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var a,r=t(22122),o=t(19756),i=(t(15007),t(64983)),m=t(99536),d={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),l={_frontmatter:d},p=m.Z;function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.mdx)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"create-custom-origin"},"Create custom origin"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"create-custom-origin")," is a ",(0,i.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/cli/"},(0,i.mdx)("inlineCode",{parentName:"a"},"buildpack"))," CLI subcommand which creates a unique local hostname and trusted SSL certificate for your project."),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("p",null,"Usage example with ",(0,i.mdx)("inlineCode",{parentName:"p"},"npx"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"npx @magento/pwa-buildpack create-custom-origin <dir>\n")),(0,i.mdx)("p",null,"This feature requires administrative access, so it may prompt you for an administrative password at the command line.\nIt does not permanently elevate permissions for the dev process, but instead, it launches a privileged subprocess to execute one command."),(0,i.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"This command should be used only in a development environment and never as part of a production deployment process."),(0,i.mdx)("h2",{id:"benefits-of-a-custom-origin"},"Benefits of a custom origin"),(0,i.mdx)("p",null,"Developing a storefront with a custom origin provides the following benefits:"),(0,i.mdx)("h3",{id:"enables-https"},"Enables HTTPS"),(0,i.mdx)("p",null,"Some PWA features, such as ServiceWorkers and Push Notifications, are only available on HTTPS secure domains.\nSome browsers make exceptions for the domain ",(0,i.mdx)("inlineCode",{parentName:"p"},"localhost"),", but this is non-standard."),(0,i.mdx)("p",null,"HTTPS development is becoming the norm, but\ncreating a self-signed certificate and configuring your server and browser to support this is a complex process."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"create-custom-origin")," command automates this process reliably on most operating systems.\nIt uses ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/davewasmer/devcert"},"devcert"),' to edit your local hostfile, create and manage certificates, and try to configure web browsers to "trust" the certificate.\nThis prevents security errors from showing up in browsers.'),(0,i.mdx)("p",null,"In the future, browsers will require trust, as well as SSL itself, to enable some features."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"PWADevServer uses OpenSSL to generate these certificates; your operating system must have an ",(0,i.mdx)("inlineCode",{parentName:"p"},"openssl")," command of version 1.0 or above to use this feature."),(0,i.mdx)("h3",{id:"unique-domains-prevent-serviceworker-collisions"},"Unique domains prevent ServiceWorker collisions"),(0,i.mdx)("p",null,"PWA features, such as ServiceWorkers, use the concept of a 'scope' to separate installed ServiceWorkers from each other.\nA scope is a combination of a domain name, port, and path.\nIf you use ",(0,i.mdx)("inlineCode",{parentName:"p"},"localhost")," for developing multiple PWAs, you run the risk of Service Workers overriding or colliding with each other."),(0,i.mdx)("h2",{id:"customization"},"Customization"),(0,i.mdx)("p",null,"Use environment variables in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"CUSTOM_ORIGIN_")," namespace to change the behavior of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"create-custom-origin")," command."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Environment Variable Name"),(0,i.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"CUSTOM_ORIGIN_ENABLED")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"true")),(0,i.mdx)("td",{parentName:"tr",align:null},"Enable the custom origin feature")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"CUSTOM_ORIGIN_ADD_UNIQUE_HASH")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"true")),(0,i.mdx)("td",{parentName:"tr",align:null},"Add a unique hash string to the custom origin.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"CUSTOM_ORIGIN_SUBDOMAIN")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows you to manually specify the subdomain prefix of the custom origin instead of using the package name.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"CUSTOM_ORIGIN_EXACT_DOMAIN")),(0,i.mdx)("td",{parentName:"tr",align:null}),(0,i.mdx)("td",{parentName:"tr",align:null},"Allows you to specify the ",(0,i.mdx)("em",{parentName:"td"},"exact")," domain of the custom origin instead of a subdomain under ",(0,i.mdx)("inlineCode",{parentName:"td"},".local.pwadev"),".")))),(0,i.mdx)("p",null,"Set these variables permanently in your ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file, or argue them at the command line for overrides:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},'CUSTOM_ORIGIN_EXACT_DOMAIN="my.pwa" \\\nnpx @magento/pwa-buildpack create-custom-origin .\n')),(0,i.mdx)("h3",{id:"unique-hash"},"Unique hash"),(0,i.mdx)("p",null,"If ",(0,i.mdx)("inlineCode",{parentName:"p"},"CUSTOM_ORIGIN_ADD_UNIQUE_HASH")," is set to ",(0,i.mdx)("inlineCode",{parentName:"p"},"true"),", the ",(0,i.mdx)("inlineCode",{parentName:"p"},"create-custom-origin")," command adds a unique hash string to the custom origin.\nThis string is based on the filesystem location."),(0,i.mdx)("p",null,"This naturally separates domains when running multiple project folders on one developer machine."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-cli-create-custom-origin-index-md-bc0f2b93889db97aa34f.js.map