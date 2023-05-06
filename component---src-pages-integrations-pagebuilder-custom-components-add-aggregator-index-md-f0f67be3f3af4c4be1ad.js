"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[2552],{50146:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return u}});var o=n(87462),a=n(45987),r=(n(15007),n(64983)),i=n(91515);const p=["components"],d={},s=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var m;const l={_frontmatter:d},c=i.Z;function u(e){let{components:t}=e,n=(0,a.Z)(e,p);return(0,r.mdx)(c,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"add-aggregator"},"Add aggregator"),(0,r.mdx)("p",null,"The purpose of the configuration aggregator (",(0,r.mdx)("inlineCode",{parentName:"p"},"configAggregator"),") is to retrieve properties from a content type's HTML and return those properties as a flat object of ",(0,r.mdx)("inlineCode",{parentName:"p"},"key:values"),". The framework (specifically the ",(0,r.mdx)("inlineCode",{parentName:"p"},"<ContentTypeFactory />"),") then passes this object to your component, where you can assign the properties to your component's corresponding properties for rendering within a PWA Studio app."),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"/commerce-pwa-studio/assets/d7b1b5648a946bb171b43bee0a28a7b2/AddAggregatorOverview.svg",alt:"Aggregator Overview"})),(0,r.mdx)("h2",{id:"content-type-html"},"Content type HTML"),(0,r.mdx)("p",null,"The key to building out your aggregator is knowing the structure, content, and properties available in your content type's master format. You can do this the hard way by looking in the database of your Adobe Commerce or Magento Open Source backend instance (specifically, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"content")," field in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"cms_page")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"cms_block")," tables). But there is a better way."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Protip"),": Place a ",(0,r.mdx)("inlineCode",{parentName:"p"},"console.log(node)")," at the top of your ",(0,r.mdx)("inlineCode",{parentName:"p"},"configAggregator")," function so you can see exactly what your content type's HTML (the ",(0,r.mdx)("inlineCode",{parentName:"p"},"HTMLElement")," passed by the framework) looks like. In the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ExampleQuote")," starter code, you would add it as shown here:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"export default (node, props) => {\n  console.log(node);\n  return {\n    // Retrieve properties from node here\n  };\n};\n")),(0,r.mdx)("p",null,"The console output should look something like this:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"936px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"11.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/00591eec8e34a19d6e8354041d77dec9/5530d/AggregatorHTMLConsoleOutput.webp 320w","/commerce-pwa-studio/static/00591eec8e34a19d6e8354041d77dec9/0c8fb/AggregatorHTMLConsoleOutput.webp 640w","/commerce-pwa-studio/static/00591eec8e34a19d6e8354041d77dec9/a7d94/AggregatorHTMLConsoleOutput.webp 936w"],sizes:"(max-width: 936px) 100vw, 936px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/00591eec8e34a19d6e8354041d77dec9/dd4a7/AggregatorHTMLConsoleOutput.png 320w","/commerce-pwa-studio/static/00591eec8e34a19d6e8354041d77dec9/0f09e/AggregatorHTMLConsoleOutput.png 640w","/commerce-pwa-studio/static/00591eec8e34a19d6e8354041d77dec9/6d612/AggregatorHTMLConsoleOutput.png 936w"],sizes:"(max-width: 936px) 100vw, 936px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-pwa-studio/static/00591eec8e34a19d6e8354041d77dec9/6d612/AggregatorHTMLConsoleOutput.png",alt:"Content type HTML",title:"Content type HTML",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"node")," (HTMLElement) passed to the aggregator contains only your content type's HTML from the master format, not the entire master format as you would find in the database."),(0,r.mdx)("h2",{id:"the-aggregator"},"The Aggregator"),(0,r.mdx)("p",null,"The interface for a ",(0,r.mdx)("inlineCode",{parentName:"p"},"configAggregator")," is:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-ts"},"(node: HTMLElement, props: {contentType: string, appearance: string}) => {[key: string]: any}\n")),(0,r.mdx)("p",null,"To recap, the purpose of your component's aggregator is to collect (aggregate) properties from your content type's HTML and return a property object for use in your component. The object you return should contain all the text, html, inline styles, and classes you need to faithfully reproduce your content type as a component in PWA Studio."),(0,r.mdx)("p",null,"Let's look at our Quote content HTML in detail (color coded for easier analysis) to determine the properties we want to pass to our component:"),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"/commerce-pwa-studio/assets/4b11a7f9a20521cc0d68d0b21745c83a/MasterFormatHTML.svg",alt:"Master format HTML"})),(0,r.mdx)("p",null,"Here's what we think we need for our component:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The inline ",(0,r.mdx)("strong",{parentName:"li"},"styles")," from the main node"),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},"text")," content from the ",(0,r.mdx)("inlineCode",{parentName:"li"},"<blockquote>")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"author")," nodes"),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("strong",{parentName:"li"},"HTML")," content from the ",(0,r.mdx)("inlineCode",{parentName:"li"},"description")," node"),(0,r.mdx)("li",{parentName:"ul"},"The CSS ",(0,r.mdx)("strong",{parentName:"li"},"classes")," from all three child nodes (",(0,r.mdx)("inlineCode",{parentName:"li"},"<blockquote>"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"author"),", and ",(0,r.mdx)("inlineCode",{parentName:"li"},"description"),")")),(0,r.mdx)("p",null,"To retrieve these properties, you'll want to use a combination of ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},"HTMLElement DOM properties")," along with our ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/integrations/pagebuilder/utility-functions/"},"utility functions"),", as shown next in the example."),(0,r.mdx)("h3",{id:"example-aggregator"},"Example aggregator"),(0,r.mdx)("p",null,"Here is the aggregator we use for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ExampleQuote")," component:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'import { getAdvanced } from "../../utils";\n\nexport default (node, props) => {\n  console.log(node);\n\n  return {\n    quote: node.childNodes[0].textContent,\n    author: node.childNodes[1].textContent,\n    description: node.childNodes[2].innerHTML,\n    ...getAdvanced(node),\n  };\n};\n')),(0,r.mdx)("p",null,"First we ",(0,r.mdx)("inlineCode",{parentName:"p"},"import")," the ",(0,r.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/integrations/pagebuilder/utility-functions/"},"utility functions")," we want to use. In our case, we know that our Quote content type provides end users with the Advanced form section. So we import the ",(0,r.mdx)("inlineCode",{parentName:"p"},"getAdvanced()")," function from ",(0,r.mdx)("inlineCode",{parentName:"p"},"utils.js"),". This function is a wrapper that just runs a number of other utility functions that can be used independently if these values are on different nodes:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"export function getAdvanced(node) {\n  return {\n    ...getPadding(node),\n    ...getMargin(node),\n    ...getBorder(node),\n    ...getTextAlign(node),\n    ...getCssClasses(node),\n    ...getIsHidden(node),\n  };\n}\n")),(0,r.mdx)("p",null,"Then we use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"element")," names from the content type HTML (color coded in green above) as our property key names: ",(0,r.mdx)("inlineCode",{parentName:"p"},"quote"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"author"),", and ",(0,r.mdx)("inlineCode",{parentName:"p"},"description"),". Naming your properties like this helps to identify where the data in the component comes from."),(0,r.mdx)("p",null,"Next, we use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"textContent")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"innerHTML")," DOM properties to grab the text and html values from the appropriate ",(0,r.mdx)("inlineCode",{parentName:"p"},"childNodes"),"."),(0,r.mdx)("p",null,"Finally, we use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"getAdvanced()")," utility function to retrieve all the property values from the Advanced section of our content type's form and use the spread operator ",(0,r.mdx)("inlineCode",{parentName:"p"},"(...)")," to expand them into the current object."),(0,r.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The Quote content type also has a form section called Background (from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"pagebuilder_base_form_with_background_attributes")," form). This section of the form allows end users to enter all kinds of background attributes, such as images, colors, positions and so on. If your custom content uses the Background section, you should retrieve the those attributes using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"getBackgroundImages(node)")," utility function. However, to keep things simple for our component, we decided not to pull these attributes from the HTML."),(0,r.mdx)("h3",{id:"retrieving-data-from-different-appearances"},"Retrieving data from different Appearances"),(0,r.mdx)("p",null,"If your content type has different appearances, the HTML for each appearance will also differ. To handle these differences, we provide the ",(0,r.mdx)("inlineCode",{parentName:"p"},"appearance")," within the ",(0,r.mdx)("inlineCode",{parentName:"p"},"props")," argument so you can modify your queries in order to retrieve data from the correct node."),(0,r.mdx)("p",null,"For our Quote content type, we only have one appearance (the default); so we do not need to use it. However, the Row content type has three appearances, so it uses a conditional based on the ",(0,r.mdx)("inlineCode",{parentName:"p"},"props.appearance")," value to determine the correct node to use, as shown here:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"// Targeting appearances in the Row aggregator\n\nexport default (node, props) => {\n    // Determine which node holds the data for the appearance\n    const dataNode =\n        props.appearance === 'contained' ? node.childNodes[0] : node;\n    return {\n        minHeight: dataNode.style.minHeight ? dataNode.style.minHeight : null,\n        ...\n    };\n")),(0,r.mdx)("h2",{id:"test-the-aggregator"},"Test the aggregator"),(0,r.mdx)("p",null,"The best way to see the properties returned by your aggregator is using ",(0,r.mdx)("inlineCode",{parentName:"p"},"console.log()"),". For our Quote aggregator, we can do something like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'import { getAdvanced, getCssClasses, getBackgroundImages } from "../../utils";\n\nexport default (node, props) => {\n  console.log(node);\n\n  const propObject = {\n    quote: node.childNodes[0].textContent,\n    author: node.childNodes[1].textContent,\n    description: node.childNodes[2].innerHTML,\n    ...getAdvanced(node),\n  };\n\n  console.log(propObject);\n  return propObject;\n};\n')),(0,r.mdx)("p",null,"Adding ",(0,r.mdx)("inlineCode",{parentName:"p"},"console.log(node)")," at the beginning of your aggregator function, and at he end (",(0,r.mdx)("inlineCode",{parentName:"p"},"console.log(propObject)"),"), helps to show you the HTML you receive and the object you return. The property object returned from our aggregator looks like this:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"866px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/36a6ebbb475cfe1037b816f06bf9ebc2/5530d/AggregatorObjectConsoleOutput.webp 320w","/commerce-pwa-studio/static/36a6ebbb475cfe1037b816f06bf9ebc2/0c8fb/AggregatorObjectConsoleOutput.webp 640w","/commerce-pwa-studio/static/36a6ebbb475cfe1037b816f06bf9ebc2/addc7/AggregatorObjectConsoleOutput.webp 866w"],sizes:"(max-width: 866px) 100vw, 866px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/36a6ebbb475cfe1037b816f06bf9ebc2/dd4a7/AggregatorObjectConsoleOutput.png 320w","/commerce-pwa-studio/static/36a6ebbb475cfe1037b816f06bf9ebc2/0f09e/AggregatorObjectConsoleOutput.png 640w","/commerce-pwa-studio/static/36a6ebbb475cfe1037b816f06bf9ebc2/4219d/AggregatorObjectConsoleOutput.png 866w"],sizes:"(max-width: 866px) 100vw, 866px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-pwa-studio/static/36a6ebbb475cfe1037b816f06bf9ebc2/4219d/AggregatorObjectConsoleOutput.png",alt:"Aggregator object console output",title:"Aggregator object console output",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)(s,{variant:"help",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"You will need to know the property ",(0,r.mdx)("inlineCode",{parentName:"p"},"key-values")," you are returning so that that you can assign them to corresponding properties in your component when you build it out."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrations-pagebuilder-custom-components-add-aggregator-index-md-f0f67be3f3af4c4be1ad.js.map