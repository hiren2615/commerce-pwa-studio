"use strict";(self.webpackChunkcommerce_pwa_studio=self.webpackChunkcommerce_pwa_studio||[]).push([[4985],{59340:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return l}});var a=n(87462),o=n(45987),s=(n(15007),n(64983)),r=n(91515);const i=["components"],d={},p={_frontmatter:d},c=r.Z;function l(e){let{components:t}=e,n=(0,o.Z)(e,i);return(0,s.mdx)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"state-management"},"State management"),(0,s.mdx)("p",null,"State management describes the way the application handles changing state data as a result of user interactions."),(0,s.mdx)("h2",{id:"overview"},"Overview"),(0,s.mdx)("p",null,"An application, such as a PWA storefront, uses state data to render dynamic content to the user.\nInteractions, such as clicking on a button or loading the page, modify the state and update the appearance or behavior of the application."),(0,s.mdx)("p",null,"For example, a shopper clicks on a button to add an item to the shopping cart.\nThe application needs a way to add that item to the shopping cart while the shopper continues to browse the application.\nIt also needs to update the visual components that use shopping cart data to reflect the new state."),(0,s.mdx)("h2",{id:"local-versus-global-state"},"Local versus global state"),(0,s.mdx)("p",null,"Local and global are the two different types of state a component can depend on."),(0,s.mdx)("p",null,"Local state data is any data scoped within a component or its children components.\nThis type of data is not shared with a component's parent or peer data.\nOtherwise, that data should be ",(0,s.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lifting-state-up.html"},"lifted"),"."),(0,s.mdx)("p",null,"For example, a button component's disabled state is never used outside that component, so\nit is categorized as local state data."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},"const MyButton = () => {\n  const [isDisabled, setIsDisabled] = useState(false);\n\n  const handleClick = useCallback(() => setIsDisabled(true), []);\n\n  return (\n    <button onClick={handleClick} disabled={isDisabled}>\n      Click me!\n    </button>\n  );\n};\n")),(0,s.mdx)("p",null,"Global state data is any data made available to components in the entire application.\nComponents that depend on a global state value subscribe to changes for that value and re-render themselves.\nMost components do not depend on the entire global state.\nInstead, a component only uses small pieces of the entire global state."),(0,s.mdx)("p",null,"Shopping cart data is an example of global state data that components in different levels of the application use and modify."),(0,s.mdx)("h2",{id:"common-state-management-technologies"},"Common state management technologies"),(0,s.mdx)("p",null,"There are many libraries and framework features that implement state management.\nThis section describes two such technologies used in the PWA Studio project."),(0,s.mdx)("h3",{id:"redux"},"Redux"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://redux.js.org/introduction/getting-started"},"Redux")," is a state management design pattern and library.\nIt promotes the idea of a global object tree that contains the state of the whole application.\nThis object is known as a ",(0,s.mdx)("a",{parentName:"p",href:"https://redux.js.org/glossary#store"},"store"),"."),(0,s.mdx)("p",null,"The store is a read-only object, which can only be updated by dispatching a ",(0,s.mdx)("a",{parentName:"p",href:"https://redux.js.org/glossary#reducer"},"reducer")," function.\nReducer functions accept the current state and an ",(0,s.mdx)("a",{parentName:"p",href:"https://redux.js.org/basics/actions"},"action")," object as parameters and returns the next state."),(0,s.mdx)("p",null,"Application components are able to ",(0,s.mdx)("a",{parentName:"p",href:"https://redux.js.org/api/store#dispatchaction"},"dispatch")," various actions to update the state.\nComponents can also ",(0,s.mdx)("a",{parentName:"p",href:"https://redux.js.org/api/store#subscribelistener"},"subscribe")," to state changes to update their appearance or behavior."),(0,s.mdx)("p",null,"Early versions of PWA Studio used the Redux library directly as the primary mechanism for managing application state,\nand the Redux pattern can be seen in hooks such as ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/hooks/useRestResponse.js"},(0,s.mdx)("inlineCode",{parentName:"a"},"useRestResponse()")),"."),(0,s.mdx)("p",null,"Currently, PWA Studio abstracts away its Redux implementation details using Peregrine hooks and context providers.\nThis opens up the possibility of the project replacing Redux in Peregrine with another state management library without breaking state dependent components, such as those in Venia."),(0,s.mdx)("p",null,"PWA Studio allows you to customize reducers and enhancers.\nThe following example uses ",(0,s.mdx)("inlineCode",{parentName:"p"},"combineReducers()")," to combine the default Peregrine reducers with custom reducers specific to the project and uses the combined reducers when creating the Redux store."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},'// Example src/store.js file\n\nimport { combineReducers, createStore } from "redux";\nimport { enhancer, reducers } from "@magento/peregrine";\n\nimport myReducers from "./lib/reducers";\n\n// You can add your own reducers here and combine them with the Peregrine exports.\nconst rootReducer = combineReducers({ ...reducers, ...myReducers });\n\nexport default createStore(rootReducer, enhancer);\n')),(0,s.mdx)("h3",{id:"react-hooks"},"React hooks"),(0,s.mdx)("p",null,"React version 16.8 introduced the concept of ",(0,s.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"hooks"),".\nHooks allow ",(0,s.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html#function-and-class-components"},"function components")," to manage their own internal state by letting them use the same component lifecycle features available to class components."),(0,s.mdx)("p",null,"Earlier versions of React only allowed class components to manage state,\nso stateful classes often became complex and hard to understand.\nHooks help developers to decompose large components into smaller functions that are focused on specific logic, such as fetching data."),(0,s.mdx)("p",null,"Since PWA Studio favors using function components over classes, it uses many of React's ",(0,s.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html"},"built-in hooks")," in its Venia and Peregrine libraries.\nThe Peregrine library also provides ",(0,s.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-custom.html"},"custom React hooks")," for storefront developers.\nThese hooks contain common storefront logic such as state management."),(0,s.mdx)("h2",{id:"state-management-in-pwa-studio"},"State management in PWA Studio"),(0,s.mdx)("p",null,"State management in PWA Studio is a mix of the Redux library, React hooks, and React context providers.\nThe Redux library is the underlying technology that powers state management behind the scenes, but\ncomponents do not interact with the global store directly.\nInstead, components that need global state data use React hooks and context providers to read or update the current state."),(0,s.mdx)("h3",{id:"context-providers"},"Context providers"),(0,s.mdx)("p",null,"React components look and behave as a result of their props.\nNormally, this means an application needs to explicitly pass state data as a prop down the React application tree to components that need that data.\nThis is known as ",(0,s.mdx)("em",{parentName:"p"},"prop drilling"),"."),(0,s.mdx)("p",null,"To avoid prop drilling, React provides the ",(0,s.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html"},"Context")," feature.\nThe Context feature allows an application to define a value and make it available to its descendants without passing it down the tree."),(0,s.mdx)("p",null,"A Context object contains a Provider and Consumer property.\nA ",(0,s.mdx)("inlineCode",{parentName:"p"},"Context.Provider")," component defines the shared data for its children, and\na corresponding ",(0,s.mdx)("inlineCode",{parentName:"p"},"Context.Consumer")," acquires the data and subscribes to any changes."),(0,s.mdx)("p",null,"PWA Studio uses the Context feature to provide application state data to storefront components through the ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/peregrine/lib/PeregrineContextProvider/peregrineContextProvider.js"},(0,s.mdx)("inlineCode",{parentName:"a"},"PeregrineContextProvider"))," component.\nWrapping an application with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"PeregrineContextProvider")," lets its components access different slices of the entire application state."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},"// Example src/index.js\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { Adapter } from '@magento/venia-drivers';\nimport { PeregrineContextProvider } from '@magento/peregrine';\n\nimport store from './store'; // This was defined in the previous example\nimport MyApplication from `./src/components/MyApplication`;\n\nconst apiBase = new URL('/graphql', location.origin).toString();\n\nReactDOM.render(\n    <Adapter\n        apiBase={apiBase}\n        apollo={{ link: authLink.concat(Adapter.apolloLink(apiBase)) }}\n        store={store}\n    >\n        <PeregrineContextProvider>\n            <MyApplication />\n        </PeregrineContextProvider>\n    </Adapter>,\n    document.getElementById('root')\n);\n\n")),(0,s.mdx)("h3",{id:"global-state-slices"},"Global state slices"),(0,s.mdx)("p",null,"Peregrine exposes global state data in slices through the ",(0,s.mdx)("inlineCode",{parentName:"p"},"PeregrineContextProvider")," component and custom React hooks.\nA state data slice is a subset of values from the global state.\nEach slice contains data about a specific part of the application, such as the shopping cart state or user session state."),(0,s.mdx)("p",null,"To access a global state slice, wrap the ",(0,s.mdx)("inlineCode",{parentName:"p"},"PeregrineContextProvider")," around the main application (as shown in the previous example)."),(0,s.mdx)("p",null,"Next, import the appropriate ",(0,s.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/tree/develop/packages/peregrine/lib/context"},"context hook")," and decompose the array returned by the hook function call.\nThe decomposed array yields the state data and an API object to update that state."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},'// Example src/components/MyWelcomeMessage/myWelcomeMessage.js\n\nimport { useUserContext } from "@magento/peregrine/lib/context/user";\n\nconst MyWelcomeMessage = () => {\n  const [userContext, userContextApi] = useUserContext();\n\n  const { isSignedIn, currentUser } = userContext;\n  const { firstname, lastname } = currentUser;\n\n  if (isSignedIn) {\n    return (\n      <span>\n        Welcome {firstname} {lastname}!\n      </span>\n    );\n  }\n\n  return null;\n};\n\nexport default MyWelcomeMessage;\n')))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-general-concepts-state-management-index-md-6bb569c4565920429a91.js.map