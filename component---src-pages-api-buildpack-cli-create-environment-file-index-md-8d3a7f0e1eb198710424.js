"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[2204],{25128:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return s}});var t=a(87462),i=a(45987),l=(a(15007),a(64983)),d=a(91515);const r=["components"],m={},o={_frontmatter:m},p=d.Z;function s(e){let{components:n}=e,a=(0,i.Z)(e,r);return(0,l.mdx)(p,(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"create-environment-file"},"Create environment file"),(0,l.mdx)("p",null,"Whether its a new storefront project or a fresh PWA Studio repository clone, PWA Studio requires a ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file to set up the environment for your site.\nThe ",(0,l.mdx)("inlineCode",{parentName:"p"},"create-env-file")," subcommand for the ",(0,l.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/cli/"},(0,l.mdx)("inlineCode",{parentName:"a"},"buildpack"))," CLI command automatically creates this file using pre-defined environment variables and default values."),(0,l.mdx)("h2",{id:"example"},"Example"),(0,l.mdx)("p",null,"Usage example with ",(0,l.mdx)("inlineCode",{parentName:"p"},"npx"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"npx @magento/pwa-buildpack create-env-file <dir>\n")),(0,l.mdx)("p",null,"This command generates a ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file in the specified directory."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file follows the ",(0,l.mdx)("inlineCode",{parentName:"p"},"dotenv")," file format and includes documentation comments for the environment variable declarations.\nThe ",(0,l.mdx)("inlineCode",{parentName:"p"},"create-env-file")," command uses the ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/envVarDefinitions.json"},(0,l.mdx)("inlineCode",{parentName:"a"},"envVarDefinitions.json"))," file in the PWA Studio source code to create this file."),(0,l.mdx)("h2",{id:"command-flags"},"Command flags"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Name"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"--use-examples")),(0,l.mdx)("td",{parentName:"tr",align:null},"Use ",(0,l.mdx)("inlineCode",{parentName:"td"},"example")," values for all variables in the generated ",(0,l.mdx)("inlineCode",{parentName:"td"},".env")," file.")))),(0,l.mdx)("h2",{id:"defining-variables-for-the-env-file"},"Defining variables for the ",(0,l.mdx)("inlineCode",{parentName:"h2"},".env")," file"),(0,l.mdx)("p",null,"Use any of the following methods to define the generated variables in the ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Set one or more variables defined in the ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/envVarDefinitions.json"},(0,l.mdx)("inlineCode",{parentName:"a"},"envVarDefinitions.json"))," file before running ",(0,l.mdx)("inlineCode",{parentName:"li"},"create-env-file")," to override the ",(0,l.mdx)("inlineCode",{parentName:"li"},"default")," values written to the ",(0,l.mdx)("inlineCode",{parentName:"li"},".env")," file.\nThese values can be set using shell scripting or other OS-specific methods."),(0,l.mdx)("li",{parentName:"ul"},"Call ",(0,l.mdx)("inlineCode",{parentName:"li"},"create-env-file")," with the ",(0,l.mdx)("inlineCode",{parentName:"li"},"--use-examples")," flag to use the ",(0,l.mdx)("inlineCode",{parentName:"li"},"example")," values for variables declared in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"envVarDefinitions.json")," file.\nCalling the ",(0,l.mdx)("inlineCode",{parentName:"li"},"create-env-file")," command without this flag still writes the ",(0,l.mdx)("inlineCode",{parentName:"li"},"example")," values to the ",(0,l.mdx)("inlineCode",{parentName:"li"},".env")," file, but\nthe entry is commented out.")),(0,l.mdx)("p",null,"Variables with no environment definitions nor ",(0,l.mdx)("inlineCode",{parentName:"p"},"example")," values in the ",(0,l.mdx)("inlineCode",{parentName:"p"},"envVarDefinitions.json")," file are declared in the ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file with an empty value."),(0,l.mdx)("p",null,"Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-text"},"MAGENTO_BACKEND_URL=\n")),(0,l.mdx)("h2",{id:"programmatic-api"},"Programmatic API"),(0,l.mdx)("p",null,"Adding the ",(0,l.mdx)("inlineCode",{parentName:"p"},"@magento/pwa-buildpack")," dependency to your project gives you access to the programmatic API for creating the ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file."),(0,l.mdx)("h3",{id:"createdotenvfiledirectory-options"},(0,l.mdx)("inlineCode",{parentName:"h3"},"createDotEnvFile(directory, options)")),(0,l.mdx)("p",null,"Uses the current environment variables and ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/envVarDefinitions.json"},(0,l.mdx)("inlineCode",{parentName:"a"},"envVarDefinitions.json"))," file to generate the contents of a ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file."),(0,l.mdx)("h4",{id:"example-1"},"Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},'const { createDotEnvFile } = require("@magento/pwa-buildpack");\n\nconst fileContents = createDotEnvFile(process.cwd());\n')),(0,l.mdx)("h4",{id:"parameters"},"Parameters"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,l.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"dirOrEnv")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"string")," path or a ",(0,l.mdx)("inlineCode",{parentName:"td"},"process.env"),"-like object"),(0,l.mdx)("td",{parentName:"tr",align:null},"Provides the path to the project root.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"options")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"object")),(0,l.mdx)("td",{parentName:"tr",align:null},"An object containing additional options.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"options.logger")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"object")),(0,l.mdx)("td",{parentName:"tr",align:null},"The object to use for logging.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"options.useExamples")),(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"boolean")),(0,l.mdx)("td",{parentName:"tr",align:null},"Whether to populate the ",(0,l.mdx)("inlineCode",{parentName:"td"},".env")," file with ",(0,l.mdx)("inlineCode",{parentName:"td"},"example")," values.")))),(0,l.mdx)("p",null,"If ",(0,l.mdx)("inlineCode",{parentName:"p"},"dirOrEnv")," is a string and the specified directory contains a ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file, it is read before being overwritten to preserve existing variables."),(0,l.mdx)("p",null,"If ",(0,l.mdx)("inlineCode",{parentName:"p"},"dirOrEnv")," is a ",(0,l.mdx)("inlineCode",{parentName:"p"},"process.env"),"-like object, the ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file is not parsed before being overwritten."),(0,l.mdx)("h4",{id:"return-value"},"Return value"),(0,l.mdx)("p",null,"The return value is the string value of a ",(0,l.mdx)("inlineCode",{parentName:"p"},".env")," file."),(0,l.mdx)("p",null,"Parse this value using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"dotenv")," API or write it out to the filesystem."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-cli-create-environment-file-index-md-8d3a7f0e1eb198710424.js.map