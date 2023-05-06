"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[6642],{44643:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return s}});var t=a(87462),i=a(45987),r=(a(15007),a(64983)),o=a(91515);const d=["components"],m={},l={_frontmatter:m},p=o.Z;function s(e){let{components:n}=e,a=(0,i.Z)(e,d);return(0,r.mdx)(p,(0,t.Z)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"load-environment-file"},"Load environment file"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"load-env")," subcommand for the ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/api/buildpack/cli/"},(0,r.mdx)("inlineCode",{parentName:"a"},"buildpack"))," CLI command loads and validates the local ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file according to the variable declarations in the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/pwa-buildpack/envVarDefinitions.json"},(0,r.mdx)("inlineCode",{parentName:"a"},"envVarDefinitions.json"))," file.\nThis includes any deprecated or changed settings.\nWhen loading from ",(0,r.mdx)("inlineCode",{parentName:"p"},".env"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"buildpack")," does not override previously declared variables."),(0,r.mdx)("h2",{id:"command-flags"},"Command flags"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"--core-dev-mode")),(0,r.mdx)("td",{parentName:"tr",align:null},"Used only by the core PWA Studio repository for quick setups of the core dev environment.")))),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"--core-dev-mode")," flag tells ",(0,r.mdx)("inlineCode",{parentName:"p"},"buildpack")," to run ",(0,r.mdx)("inlineCode",{parentName:"p"},"buildpack create-env-file --use-examples")," if an existing ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file does not exist in the given directory path."),(0,r.mdx)("h2",{id:"usage-tips"},"Usage tips"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"load-env")," command in NPM scripts instead of directly invoking it with ",(0,r.mdx)("inlineCode",{parentName:"p"},"npx"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Use a command, shell script, or spawned subprocess to override individual environment variables at start time.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The command does not require a ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file to be present."),(0,r.mdx)("p",{parentName:"li"},"If a ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file is not present, the environment is still valid if another process or command sets the required variables.\nIf the file is not present and the variable ",(0,r.mdx)("inlineCode",{parentName:"p"},"NODE_ENV")," is not set to ",(0,r.mdx)("inlineCode",{parentName:"p"},"production"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"buildpack")," logs a warning."))),(0,r.mdx)("h2",{id:"programmatic-api"},"Programmatic API"),(0,r.mdx)("p",null,"Adding the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@magento/pwa-buildpack")," dependency to your project gives you access to the programmatic API for loading the ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file."),(0,r.mdx)("h3",{id:"loadenvironmentdirorenv-logger"},(0,r.mdx)("inlineCode",{parentName:"h3"},"loadEnvironment(dirOrEnv, [logger])")),(0,r.mdx)("p",null,"Loads a given directory's ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file and provides a ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/general-concepts/configuration/"},"configuration object"),"."),(0,r.mdx)("h4",{id:"example"},"Example"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'const { loadEnvironment } = require("@magento/pwa-buildpack");\n\nconst configuration = await loadEnvironment(process.cwd());\n')),(0,r.mdx)("h4",{id:"parameters"},"Parameters"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Data type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"dirOrEnv")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")," path or ",(0,r.mdx)("inlineCode",{parentName:"td"},"process.env")," object"),(0,r.mdx)("td",{parentName:"tr",align:null},"Provides a path to the project root.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"logger")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"object")),(0,r.mdx)("td",{parentName:"tr",align:null},"An optional logger object to use instead of the default console.")))),(0,r.mdx)("p",null,"If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"dirOrEnv")," parameter is a ",(0,r.mdx)("inlineCode",{parentName:"p"},"process.env")," object, it will not attempt to parse a ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file."),(0,r.mdx)("h4",{id:"return-value"},"Return value"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"loadEnvironment()")," function returns a configuration object."),(0,r.mdx)("h3",{id:"configuration-object"},"Configuration object"),(0,r.mdx)("p",null,"Use the configuration object returned by ",(0,r.mdx)("inlineCode",{parentName:"p"},"loadEnvironment()")," as a single source of truth for configuration."),(0,r.mdx)("h4",{id:"properties"},"Properties"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:"center"},"Alias"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"env")),(0,r.mdx)("td",{parentName:"tr",align:"center"},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"The raw environment object")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"isProduction")),(0,r.mdx)("td",{parentName:"tr",align:"center"},(0,r.mdx)("inlineCode",{parentName:"td"},"isProd")),(0,r.mdx)("td",{parentName:"tr",align:null},"True if ",(0,r.mdx)("inlineCode",{parentName:"td"},"NODE_ENV=production"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"isDevelopment")),(0,r.mdx)("td",{parentName:"tr",align:"center"},(0,r.mdx)("inlineCode",{parentName:"td"},"isDev")),(0,r.mdx)("td",{parentName:"tr",align:null},"True if ",(0,r.mdx)("inlineCode",{parentName:"td"},"NODE_ENV=development"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"isTest")),(0,r.mdx)("td",{parentName:"tr",align:"center"},"-"),(0,r.mdx)("td",{parentName:"tr",align:null},"True if ",(0,r.mdx)("inlineCode",{parentName:"td"},"NODE_ENV=test"))))),(0,r.mdx)("h4",{id:"methods"},"Methods"),(0,r.mdx)("p",null,"The configuration object provides methods that return settings in specific namespaces.\nThis lets you pass smaller objects instead of a single, plain object full of global configuration values."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"section(sectionName)"),"\n: Returns a plain object with environment variables in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"sectionName")," namespace.\nThe property keys are ",(0,r.mdx)("a",{parentName:"p",href:"https://npmjs.com/package/camelspace"},"camelCased")," for convenience."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"sections(...sectionNames)"),"\n: Returns a plain object with environment variables from the specified namespaces.\nThe namespaces are assigned to different camelCased properties named after the section name."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"all()"),"\n: Returns the entire environment object, camelCased for convenience, with no namespace separations."),(0,r.mdx)("h3",{id:"full-example-script"},"Full example script"),(0,r.mdx)("p",null,"The following example is a script that starts an ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/packages/upward/javascript/"},"UPWARD-JS")," server using configuration values loaded from the environment and ",(0,r.mdx)("inlineCode",{parentName:"p"},".env")," file in the project path."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { loadEnvironment } from \"@magento/pwa-buildpack\";\n\n// Give `loadEnvironment` the path to the project root.\n// If the current file is in project root, use the Node builtin `__dirname`.\nconst configuration = await loadEnvironment(\"/Users/me/path/to/project\");\n\n// `loadEnvironment` has now read the contents of\n// `/Users/me/path/to/project/.env` and merged it with any environment\n// variables that were alredy set.\n\n// Create an UPWARD server using env vars that begin with `UPWARD_JS_`\ncreateUpwardServer(configuration.section(\"upwardJs\"));\n\n// If these environment variables are set:\n//\n// UPWARD_JS_HOST=https://local.upward/\n// UPWARD_JS_PORT=8081\n//\n// then `configuration.section('upwardJs')` produces this object:\n//\n// {\n//   host: 'https://local.upward',\n//   port: '8081'\n// }\n//\n// No other environment variables are included in this object unless they begin\n// with `UPWARD_JS_` which is the equivalent of `upwardJs` camel-cased.\n\n// The .all() method turns the whole environment into an object, with all\n// CONSTANT_CASE names turned into camelCase names.\nconst allConfig = configuration.all();\n\n// This object will have one property for each set environment variable,\n// including the UPWARD variables named above.\n// But `configuration.all()` does not namespace them, they have longer names:\n//\n// {\n//   upwardJsHost: 'https://local.upward',\n//   upwardJsPort: '8081'\n// }\n//\n// This huge object defeats the purpose of loadEnvironment() and should\n// only be used for debugging.\n\n// Instead, let's create an UPWARD server combining two environment variable\n// sections with hardcoded overrides to some values.\ncreateUpwardServer({\n  ...configuration.section(\"upwardJs\"),\n  ...configuration.section(\"magento\"),\n  bindLocal: true,\n});\n\n// This uses JavaScript object spreading to combine several sections of\n// configuration and override a value.\n// If the environment contains these values:\n//\n// UPWARD_JS_HOST=https://local.pwadev\n// UPWARD_JS_PORT=443\n// UPWARD_JS_BIND_LOCAL=\n// MAGENTO_BACKEND_URL=https://local.magento\n//\n// Then the above code passes the following object to `createUpwardServer`:\n//\n// {\n//   host: 'https://local.pwadev',\n//   port: '443',\n//   backendUrl: 'https://local.magento',\n//   bindLocal: true\n// }\n\n// The `sections()` method can split an env object into named subsections:\ncreateUpwardServer(configuration.sections(\"upwardJs\", \"magento\"));\n\n// Given the same environment variables as above, this code will pass the\n// following to `createUpwardServer`:\n//\n// {\n//   upwardJs: {\n//     host: 'https://local.pwadev',\n//     port: '443',\n//     bindLocal: '' // the null string is used as a falsy value\n//   },\n//   magento: {\n//     backendUrl: 'https://local.magento'\n//   }\n// }\n//\n// (The above is not the actual config object format for `createUpwardServer`,\n// but if it was, that's how you'd make it.)\n\n// Use the convenience properties `isProd` and `isDev` instead of testing\n// `process.env.NODE_ENV` directly:\nif (configuration.isDev) {\n  console.log(\"Development mode\");\n}\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-cli-load-environment-file-index-md-7f2b7962f5f0d0056ab8.js.map