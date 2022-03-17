var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/ristama/projects/ristamaya/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-FS3NJCDW.css";

// app/application/uicomponents/layout/index.tsx
init_react();
var import_react6 = require("react");

// app/application/uicomponents/layout/layout.context.tsx
init_react();
var import_react = require("react");
var defaultContext = {
  useTheme: "root",
  setUseTheme: null
};
var LayoutContext = (0, import_react.createContext)(defaultContext);
var LayoutProvider = LayoutContext.Provider;

// app/application/uicomponents/layout/floatcontrol/index.tsx
init_react();
var import_react2 = __toESM(require("react"));

// app/application/uicomponents/dynamicicon/index.tsx
init_react();
var fiIcons = __toESM(require("react-icons/fi"));
var DynamicIcon = (props) => {
  const icons = __objRest(fiIcons, []);
  const TheIcon = icons[props.icon];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(TheIcon, {
    className: props.className
  }));
};
var dynamicicon_default = DynamicIcon;

// app/application/uicomponents/layout/floatcontrol/index.tsx
var FloatControl = () => {
  const [openMenu, setOpenMenu] = (0, import_react2.useState)(true);
  const { setUseTheme } = (0, import_react2.useContext)(LayoutContext);
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "relative bg-theme-muted border-theme-border m-3 p-1 rounded-full border h-fit w-fit"
  }, /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setOpenMenu(true);
    },
    className: "relative flex w-fit h-fit rounded-full hover:opacity-80 peer"
  }, /* @__PURE__ */ import_react2.default.createElement(dynamicicon_default, {
    icon: "FiSlack",
    className: "w-7 h-7"
  })), openMenu && /* @__PURE__ */ import_react2.default.createElement("div", {
    className: `absolute z-40 flex-row bottom-[40px] right-0 bg-theme-muted w-fit h-fit max-h-[calc(100vh-74px)] overflow-auto border border-theme-border mx-2 rounded-md shadow-md
            invisible opacity-0 -translate-x-full hover:visible hover:opacity-100 hover:translate-x-0 peer-focus:visible peer-focus:opacity-100 peer-focus:translate-x-0 
            transition-all duration-500 px-1 text-center`,
    "aria-hidden": true
  }, /* @__PURE__ */ import_react2.default.createElement("span", {
    className: "text-theme-strong text-sm font-semibold"
  }, "Theme Color"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-cyan");
    },
    className: "justify-center p-1 w-24 flex cursor-pointer text-md bg-cyan-600 my-1 rounded-sm hover:opacity-80"
  }, "Cyan"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-amber");
    },
    className: "justify-center p-1 w-24 flex cursor-pointer text-md bg-amber-600 my-1 rounded-sm hover:opacity-80"
  }, "Amber"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-indigo");
    },
    className: "justify-center p-1 w-24 flex cursor-pointer text-md bg-indigo-600 my-1 rounded-sm hover:opacity-80"
  }, "Indigo"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-slate");
    },
    className: "justify-center p-1 w-24 flex cursor-pointer text-md bg-slate-600 my-1 rounded-sm hover:opacity-80"
  }, "Slate"), /* @__PURE__ */ import_react2.default.createElement("button", {
    onClick: (event) => {
      setUseTheme("theme-stone");
    },
    className: "justify-center p-1 w-24 flex cursor-pointer text-md bg-stone-600 my-1 rounded-sm hover:opacity-80"
  }, "Stone")));
};

// app/application/uicomponents/layout/navbar/index.tsx
init_react();
var import_react5 = __toESM(require("react"));

// app/application/uicomponents/layout/navbar/iconmenu/index.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_remix2 = __toESM(require_remix());
var IconMenu = (props) => {
  const menuItem = !props.menuItem ? [{ title: "Dummy", icon: "FiUser", href: "/" }] : props.menuItem;
  const [openMenu, setOpenMenu] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "relative flex w-16 h-auto m-1 items-center justify-center"
  }, /* @__PURE__ */ import_react3.default.createElement("button", {
    onClick: (event) => {
      setOpenMenu(true);
    },
    className: "relative flex w-fit h-fit p-2 rounded-full hover:scale-95 peer"
  }, /* @__PURE__ */ import_react3.default.createElement(dynamicicon_default, {
    icon: props.icon,
    className: `${props.parentClass}`
  })), openMenu && /* @__PURE__ */ import_react3.default.createElement("div", {
    id: "IconMenus",
    className: `absolute z-40 flex-row top-12 bg-theme-muted w-auto h-auto max-h-[calc(100vh-74px)] overflow-auto border border-theme-border pl-2 pr-9 py-3 mx-2 rounded-md shadow-md
          invisible opacity-0 -translate-y-full hover:visible hover:opacity-100 hover:translate-y-0 peer-focus:visible peer-focus:opacity-100 peer-focus:translate-y-0
          transition-all duration-500 space-y-2 ${props.onleft ? "left-0" : "right-0"}`
  }, menuItem.map((item, index) => /* @__PURE__ */ import_react3.default.createElement(import_remix2.Link, {
    key: index,
    to: item.href
  }, /* @__PURE__ */ import_react3.default.createElement("button", {
    onClick: (event) => {
    },
    className: "items-center flex cursor-pointer text-sm"
  }, /* @__PURE__ */ import_react3.default.createElement(dynamicicon_default, {
    icon: item.icon,
    className: `${props.childClass}`
  }), item.title)))));
};
var iconmenu_default = IconMenu;

// app/application/uicomponents/layout/navbar/menubar/index.tsx
init_react();

// app/application/uicomponents/layout/navbar/menubar/linkitem/index.tsx
init_react();
var import_react4 = __toESM(require("react"));
var import_remix3 = __toESM(require_remix());
var LinkItem = (props) => {
  const spanClass = "absolute h-0 w-full rounded-sm group-hover:h-full transition-all ease-out duration-700";
  return /* @__PURE__ */ import_react4.default.createElement(import_remix3.Link, {
    to: props.href
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    id: "MenuItem",
    className: "relative flex h-16 w-auto px-2 items-center active:text-theme-inverted hover:text-theme-strong group"
  }, /* @__PURE__ */ import_react4.default.createElement("span", {
    className: `bg-theme-muted/5 top-0 left-0 ${spanClass}`
  }), /* @__PURE__ */ import_react4.default.createElement("span", {
    className: `bg-theme-muted/20 bottom-0 left-0 ${spanClass}`
  }), props.title));
};
var linkitem_default = LinkItem;

// app/application/uicomponents/layout/navbar/menubar/index.tsx
var MenuBar = (props) => {
  const LinkItems = !props.LinkItems ? [{ href: "/", title: "RISTAMA" }] : props.LinkItems;
  return /* @__PURE__ */ React.createElement("div", {
    id: "MenuBar",
    className: "relative flex h-full w-fit items-center overflow-auto overflow-y-hidden"
  }, LinkItems.map((item, index) => /* @__PURE__ */ React.createElement(linkitem_default, {
    key: index,
    href: item.href,
    title: item.title
  })));
};
var menubar_default = MenuBar;

// app/application/uicomponents/layout/navbar/index.tsx
var NavBar = (props) => {
  const moduleItems = !props.ModuleItems ? {
    icon: "FiCpu",
    menus: [{ icon: "FiHome", title: "Home", href: "/" }]
  } : props.ModuleItems;
  const controlItems = !props.ControlItems ? {
    icon: "FiUser",
    menus: [{ icon: "FiLogIn", title: "Login", href: "/auth/login" }]
  } : props.ControlItems;
  const menuItems = !props.MenuItems ? [
    { href: "/", title: "Ristamaya" },
    { href: "/shared/playground", title: "Playground" },
    { href: "/shared/tutorial", title: "Tutorial" },
    { href: "/shared/myprojects", title: "My Projects" },
    { href: "/shared/about", title: "About" }
  ] : props.MenuItems;
  return /* @__PURE__ */ import_react5.default.createElement("div", {
    id: "NavBar",
    className: `fixed bg-theme-fill text-theme-base flex h-16 w-screen shadow-md items-center justify-between z-50`
  }, /* @__PURE__ */ import_react5.default.createElement(iconmenu_default, {
    onleft: true,
    icon: moduleItems.icon,
    parentClass: "w-8 h-8",
    childClass: "w-6 h-6",
    menuItem: moduleItems.menus
  }), /* @__PURE__ */ import_react5.default.createElement(menubar_default, {
    LinkItems: menuItems
  }), /* @__PURE__ */ import_react5.default.createElement(iconmenu_default, {
    onleft: false,
    icon: controlItems.icon,
    parentClass: "w-8 h-8",
    childClass: "w-6 h-6",
    menuItem: controlItems.menus
  }));
};
var navbar_default = NavBar;

// app/application/uicomponents/layout/index.tsx
function Layout({ children }) {
  const [useTheme, setUseTheme] = (0, import_react6.useState)("");
  return /* @__PURE__ */ React.createElement(LayoutProvider, {
    value: { useTheme, setUseTheme }
  }, /* @__PURE__ */ React.createElement("div", {
    className: `${useTheme}`
  }, /* @__PURE__ */ React.createElement(navbar_default, null), /* @__PURE__ */ React.createElement("main", {
    id: "MainContent",
    className: `fixed block bg-theme-muted overflow-auto top-16 w-screen h-[calc(100%-64px)] z-40`
  }, children), /* @__PURE__ */ React.createElement("div", {
    id: "ThemeChanger",
    className: "absolute bottom-0 right-0 z-50"
  }, /* @__PURE__ */ React.createElement(FloatControl, null))));
}

// route:/home/ristama/projects/ristamaya/app/root.tsx
var meta = () => {
  return { title: "Ristamaya|Home" };
};
var links = () => [{ rel: "stylesheet", href: tailwind_default }];
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "favicon",
    href: "favicon.png"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route:/home/ristama/projects/ristamaya/app/routes/shared/myprojects/index.tsx
var myprojects_exports = {};
__export(myprojects_exports, {
  default: () => myprojects_default
});
init_react();

// app/application/uicomponents/workonit/index.tsx
init_react();
function WorkOnIt() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-center text-theme-strong text-2xl m-auto mt-3"
  }, "Sorry, I'm still working on it", /* @__PURE__ */ React.createElement("img", {
    src: "/images/img1.png",
    className: "mt-10 m-auto object-cover"
  }));
}
var workonit_default = WorkOnIt;

// route:/home/ristama/projects/ristamaya/app/routes/shared/myprojects/index.tsx
function MyProjects() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var myprojects_default = MyProjects;

// route:/home/ristama/projects/ristamaya/app/routes/shared/tutorial/index.tsx
var tutorial_exports = {};
__export(tutorial_exports, {
  default: () => tutorial_default
});
init_react();
function TutorialShared() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var tutorial_default = TutorialShared;

// route:/home/ristama/projects/ristamaya/app/routes/shared/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
init_react();
function About() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var about_default = About;

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground.tsx
var playground_exports = {};
__export(playground_exports, {
  default: () => Playground,
  meta: () => meta2
});
init_react();
var import_remix6 = __toESM(require_remix());

// app/application/uicomponents/linkitem/index.tsx
init_react();
var import_react7 = __toESM(require("react"));
var import_remix5 = __toESM(require_remix());
var LinkItem2 = (props) => {
  return /* @__PURE__ */ import_react7.default.createElement(import_remix5.Link, {
    to: props.to
  }, /* @__PURE__ */ import_react7.default.createElement("button", {
    id: "MenuItem",
    className: `relative flex items-center active:text-theme-inverted hover:text-theme-strong group ${props.className}`
  }, /* @__PURE__ */ import_react7.default.createElement("span", {
    className: "absolute right-0 h-full w-0 bg-theme-muted bg-opacity-20 rounded-sm group-hover:w-[calc(100%+100px)] transition-all ease-out duration-500"
  }), props.title));
};
var linkitem_default2 = LinkItem2;

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground.tsx
var meta2 = () => {
  return { title: "Ristamaya|Playground" };
};
function Playground() {
  const classNameLink = "h-9 w-40 font-semibold";
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative block text-theme-base z-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "fixed block w-32 h-[calc(100%-64px)] bg-theme-fill z-20 shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative text-theme-strong text-xl font-semibold mt-3 mb-6 pl-2"
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/shared/playground"
  }, "My Stuffs")), /* @__PURE__ */ React.createElement("div", {
    id: "PlaygroundSB",
    className: "relative h-[calc(100%-140px)] text-xs font-semibold overflow-auto overflow-x-hidden pl-2"
  }, /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./layout",
    title: "Layout",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./input",
    title: "input",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./button",
    title: "Button",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./table",
    title: "Table",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./dynamicicon",
    title: "Dynamic Icon",
    className: classNameLink
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./treeview",
    title: "Treeview",
    className: classNameLink
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative text-theme-strong text-xs font-semibold mt-2 text-center"
  }, "React.JS + Tailwind CSS")), /* @__PURE__ */ React.createElement("div", {
    className: "relative flex left-40 w-[calc(100%-192px)] h-auto p-2 z-10"
  }, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)));
}

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground/dynamicicon.tsx
var dynamicicon_exports = {};
__export(dynamicicon_exports, {
  default: () => dynamicicon_default2
});
init_react();
function DynamicIcon2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var dynamicicon_default2 = DynamicIcon2;

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground/formcontrol.tsx
var formcontrol_exports = {};
__export(formcontrol_exports, {
  default: () => formcontrol_default
});
init_react();
function FormControl() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var formcontrol_default = FormControl;

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground/treeview.tsx
var treeview_exports = {};
__export(treeview_exports, {
  default: () => treeview_default
});
init_react();
function Treeview() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var treeview_default = Treeview;

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground/button.tsx
var button_exports = {};
__export(button_exports, {
  default: () => button_default
});
init_react();
function Button() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var button_default = Button;

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground/layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => layout_default
});
init_react();
function Layout2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var layout_default = Layout2;

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground/index.tsx
var playground_exports2 = {};
__export(playground_exports2, {
  default: () => playground_default
});
init_react();
function ComponentsShared() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "text-4xl text-center m-auto"
  }, "Let's explore my UI Components", /* @__PURE__ */ React.createElement("img", {
    src: "/images/img2.png",
    className: "my-6 mx-auto object-fill"
  }), "Just select on left sidebar");
}
var playground_default = ComponentsShared;

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground/input.tsx
var input_exports = {};
__export(input_exports, {
  default: () => input_default
});
init_react();
function Input() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var input_default = Input;

// route:/home/ristama/projects/ristamaya/app/routes/shared/playground/table.tsx
var table_exports = {};
__export(table_exports, {
  default: () => table_default
});
init_react();
function Table() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var table_default = Table;

// route:/home/ristama/projects/ristamaya/app/routes/core/menus/index.tsx
var menus_exports = {};
__export(menus_exports, {
  default: () => menus_default
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/application/uicomponents/input/index.tsx
init_react();
var import_react8 = require("react");
var Input2 = (_a) => {
  var _b = _a, {
    label,
    className,
    inputData,
    errorMessage
  } = _b, props = __objRest(_b, [
    "label",
    "className",
    "inputData",
    "errorMessage"
  ]);
  const [openData, setOpenData] = (0, import_react8.useState)(false);
  const [value, setValue] = (0, import_react8.useState)("");
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative flex m-3 w-fit h-fit items-center justify-center"
  }, /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues({}, props), {
    className: `z-0 relative min-w-10 min-h-8 pt-1 pb-1 px-1 my-1 text-theme-base bg-transparent outline-none border border-theme-border disabled:border-theme-border/50 rounded-[4px] placeholder:text-theme-muted invalid:border-theme-warning peer ${className}`,
    value,
    onChange: (e) => setValue(e.target.value)
  })), /* @__PURE__ */ React.createElement("span", {
    className: "z-10 absolute px-[2px] -top-[5px] left-2 rounded-sm bg-theme-muted leading-none text-sm text-theme-base peer-invalid:text-theme-warning peer-disabled:text-theme-muted"
  }, label), errorMessage && /* @__PURE__ */ React.createElement("span", {
    className: "z-10 absolute px-[2px] -top-[5px] right-1 rounded-full bg-theme-muted text-sm text-theme-warning leading-none"
  }, errorMessage), inputData && /* @__PURE__ */ React.createElement("span", {
    onClick: (e) => setOpenData(!openData),
    className: `absolute cursor-pointer right-1 border-l border-theme-border w-fit h-fit text-theme-base bg-theme-muted`,
    "aria-hidden": true
  }, /* @__PURE__ */ React.createElement(dynamicicon_default, {
    icon: "FiChevronLeft",
    className: `${openData && "-rotate-90"} h-6 w-6  transition duration-300`
  })), openData && /* @__PURE__ */ React.createElement("div", {
    className: `absolute px-1 py-1 flex-row z-20 bottom-[10px] left-0 w-full bg-theme-muted border-l border-r border-b border-theme-border rounded-[4px] translate-y-full`,
    "aria-hidden": true
  }, inputData == null ? void 0 : inputData.map((item, index) => /* @__PURE__ */ React.createElement("div", {
    key: index,
    className: "cursor-pointer hover:bg-theme-fill/75 text-theme-base",
    onClick: (e) => {
      setValue(item);
      setOpenData(!openData);
    }
  }, item))));
};

// app/application/uicomponents/button/index.tsx
init_react();
var import_react9 = __toESM(require("react"));
var Button2 = (_a) => {
  var _b = _a, { label, className } = _b, props = __objRest(_b, ["label", "className"]);
  const spanClass = "absolute top-0 h-full w-0 bg-theme-button-hover/20 group-hover:w-full transition-all ease-out duration-700";
  return /* @__PURE__ */ import_react9.default.createElement("button", __spreadProps(__spreadValues({}, props), {
    className: `relative min-h-fit min-w-fit px-4 py-1 bg-theme-button-base outline-none rounded-md group active:text-theme-inverted m-2 items-center justify-center overflow-hidden text-theme-base ${className}`
  }), label, /* @__PURE__ */ import_react9.default.createElement("span", {
    className: `left-0 ${spanClass}`
  }), /* @__PURE__ */ import_react9.default.createElement("span", {
    className: `right-0 ${spanClass}`
  }));
};

// route:/home/ristama/projects/ristamaya/app/routes/core/menus/index.tsx
var import_react10 = require("react");
function Menus() {
  const [errorMessage, setErrorMessage] = (0, import_react10.useState)("");
  let menuType = String;
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative items-center justify-center p-5"
  }, /* @__PURE__ */ React.createElement(import_remix7.Form, {
    className: "relative border rounded-md shadow-md p-4 w-fit h-fit m-auto bg-theme-muted",
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-3 mb-9 text-center text-theme-strong text-lg "
  }, "Menu Editor"), /* @__PURE__ */ React.createElement(Input2, {
    label: "Title",
    className: "w-96",
    errorMessage,
    name: "title",
    type: "text",
    placeholder: "asdasd"
  }), /* @__PURE__ */ React.createElement(Input2, {
    label: "Menu Type",
    className: "w-96",
    errorMessage,
    name: "menutype",
    type: "text",
    inputData: ["Menu", "Link"]
  }), /* @__PURE__ */ React.createElement(Input2, {
    label: "Parent",
    className: "w-96",
    errorMessage,
    name: "parent",
    type: "text",
    disabled: true
  }), /* @__PURE__ */ React.createElement(Input2, {
    label: "Path",
    className: "w-96",
    errorMessage,
    name: "path",
    type: "text"
  }), /* @__PURE__ */ React.createElement(Input2, {
    label: "Path Type",
    className: "w-96",
    errorMessage,
    name: "pathtype",
    type: "text",
    inputData: ["Internal", "External"]
  }), /* @__PURE__ */ React.createElement(Input2, {
    label: "icon",
    className: "w-96",
    errorMessage,
    name: "icon",
    type: "text"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button2, {
    className: "w-20",
    label: "Save",
    type: "submit"
  }))));
}
var menus_default = Menus;

// route:/home/ristama/projects/ristamaya/app/routes/shared/index.tsx
var shared_exports = {};
__export(shared_exports, {
  default: () => shared_default
});
init_react();
function SharedIndex() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(workonit_default, null));
}
var shared_default = SharedIndex;

// route:/home/ristama/projects/ristamaya/app/routes/auth/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => login_default
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_react11 = require("react");
function Login() {
  const [username, setUserName] = (0, import_react11.useState)("");
  const [password, setPassword] = (0, import_react11.useState)("");
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative w-fit h-fit top-8 items-center justify-center bg-theme-muted m-auto px-3 py-5 rounded-md drop-shadow-md border border-theme-border"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center mb-10 text-4xl font-semibold"
  }, "Login"), /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    className: "relative h-fit w-fit items-center justify-center"
  }, /* @__PURE__ */ React.createElement(Input2, {
    type: "email",
    label: "User Name",
    onChange: (event) => {
      setUserName(event.currentTarget.value);
    },
    value: username,
    name: "username",
    className: "w-full"
  }), /* @__PURE__ */ React.createElement(Input2, {
    type: "password",
    label: "Password",
    onChange: (event) => {
      setPassword(event.currentTarget.value);
    },
    value: password,
    name: "password",
    className: "w-full"
  }), /* @__PURE__ */ React.createElement(Button2, {
    type: "submit",
    label: "Login",
    className: "h-8 w-28 right-0"
  })));
}
var login_default = Login;

// route:/home/ristama/projects/ristamaya/app/routes/core/index.tsx
var core_exports = {};
__export(core_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "relative sm:flex flex-warp w-full text-theme-base items-center align-middle justify-center px-10 py-7"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/img3.png",
    className: "scale-75 sm:scale-100 m-auto object-cover"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-lg sm:text-lg mb-1"
  }, "Hello there I'm", " ", /* @__PURE__ */ React.createElement("span", {
    className: "sm:text-md text-base sm:text-xl font-semibold"
  }, " ", "Anjar", " "), "I call this", /* @__PURE__ */ React.createElement("span", {
    className: "sm:text-md text-base sm:text-xl font-semibold"
  }, " ", "RISTAMAYA,", " "), "it just my personal website built by", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "- Remix JS with Typescript"), /* @__PURE__ */ React.createElement("li", null, "- Tailwind CSS"), /* @__PURE__ */ React.createElement("li", null, "- MongoDB"), /* @__PURE__ */ React.createElement("li", null, "- And More")), "Thanks a lot for visiting please take a look what's going on here")));
}

// route:/home/ristama/projects/ristamaya/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2
});
init_react();
function Index2() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "relative sm:flex flex-warp w-full text-theme-base items-center align-middle justify-center px-10 py-7"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/images/img3.png",
    className: "scale-75 sm:scale-100 m-auto object-cover"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-lg sm:text-lg mb-1"
  }, "Hello there I'm", " ", /* @__PURE__ */ React.createElement("span", {
    className: "sm:text-md text-base sm:text-xl font-semibold"
  }, " ", "Anjar", " "), "I call this", /* @__PURE__ */ React.createElement("span", {
    className: "sm:text-md text-base sm:text-xl font-semibold"
  }, " ", "RISTAMAYA,", " "), "it just my personal website built by", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "- Remix JS with Typescript"), /* @__PURE__ */ React.createElement("li", null, "- Tailwind CSS"), /* @__PURE__ */ React.createElement("li", null, "- MongoDB with Prisma ORM"), /* @__PURE__ */ React.createElement("li", null, "- And More")), "Thanks a lot for visiting please take a look what's going on here")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "58c5941e", "entry": { "module": "/build/entry.client-VQ7QTZA6.js", "imports": ["/build/_shared/chunk-OWRJK3K6.js", "/build/_shared/chunk-K3AZYGPX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-LWZOW75I.js", "imports": ["/build/_shared/chunk-5CY4DAFI.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-EEIXR4WB.js", "imports": ["/build/_shared/chunk-WA3THXCH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/index": { "id": "routes/core/index", "parentId": "root", "path": "core", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/index-BVF3I6VY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/menus/index": { "id": "routes/core/menus/index", "parentId": "root", "path": "core/menus", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/menus/index-Y26FBLQV.js", "imports": ["/build/_shared/chunk-WA3THXCH.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-YSVLCA5Y.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/about/index": { "id": "routes/shared/about/index", "parentId": "root", "path": "shared/about", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/about/index-D5UQJZR5.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/index": { "id": "routes/shared/index", "parentId": "root", "path": "shared", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/index-JYKGLX5E.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/myprojects/index": { "id": "routes/shared/myprojects/index", "parentId": "root", "path": "shared/myprojects", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/myprojects/index-H4ZJ4X4K.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground": { "id": "routes/shared/playground", "parentId": "root", "path": "shared/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground-A26O6W43.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/button": { "id": "routes/shared/playground/button", "parentId": "routes/shared/playground", "path": "button", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/button-WU6GMK42.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/dynamicicon": { "id": "routes/shared/playground/dynamicicon", "parentId": "routes/shared/playground", "path": "dynamicicon", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/dynamicicon-7ZPOELUT.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/formcontrol": { "id": "routes/shared/playground/formcontrol", "parentId": "routes/shared/playground", "path": "formcontrol", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/formcontrol-UJWOMYAP.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/index": { "id": "routes/shared/playground/index", "parentId": "routes/shared/playground", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/playground/index-HFKCE3FU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/input": { "id": "routes/shared/playground/input", "parentId": "routes/shared/playground", "path": "input", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/input-INOQEDYP.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/layout": { "id": "routes/shared/playground/layout", "parentId": "routes/shared/playground", "path": "layout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/layout-4CGLW6KI.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/table": { "id": "routes/shared/playground/table", "parentId": "routes/shared/playground", "path": "table", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/table-OROFCF3J.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/treeview": { "id": "routes/shared/playground/treeview", "parentId": "routes/shared/playground", "path": "treeview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/treeview-RFPU4U3N.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/tutorial/index": { "id": "routes/shared/tutorial/index", "parentId": "root", "path": "shared/tutorial", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/tutorial/index-RRPYMKW7.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-58C5941E.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/shared/myprojects/index": {
    id: "routes/shared/myprojects/index",
    parentId: "root",
    path: "shared/myprojects",
    index: true,
    caseSensitive: void 0,
    module: myprojects_exports
  },
  "routes/shared/tutorial/index": {
    id: "routes/shared/tutorial/index",
    parentId: "root",
    path: "shared/tutorial",
    index: true,
    caseSensitive: void 0,
    module: tutorial_exports
  },
  "routes/shared/about/index": {
    id: "routes/shared/about/index",
    parentId: "root",
    path: "shared/about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/shared/playground": {
    id: "routes/shared/playground",
    parentId: "root",
    path: "shared/playground",
    index: void 0,
    caseSensitive: void 0,
    module: playground_exports
  },
  "routes/shared/playground/dynamicicon": {
    id: "routes/shared/playground/dynamicicon",
    parentId: "routes/shared/playground",
    path: "dynamicicon",
    index: void 0,
    caseSensitive: void 0,
    module: dynamicicon_exports
  },
  "routes/shared/playground/formcontrol": {
    id: "routes/shared/playground/formcontrol",
    parentId: "routes/shared/playground",
    path: "formcontrol",
    index: void 0,
    caseSensitive: void 0,
    module: formcontrol_exports
  },
  "routes/shared/playground/treeview": {
    id: "routes/shared/playground/treeview",
    parentId: "routes/shared/playground",
    path: "treeview",
    index: void 0,
    caseSensitive: void 0,
    module: treeview_exports
  },
  "routes/shared/playground/button": {
    id: "routes/shared/playground/button",
    parentId: "routes/shared/playground",
    path: "button",
    index: void 0,
    caseSensitive: void 0,
    module: button_exports
  },
  "routes/shared/playground/layout": {
    id: "routes/shared/playground/layout",
    parentId: "routes/shared/playground",
    path: "layout",
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/shared/playground/index": {
    id: "routes/shared/playground/index",
    parentId: "routes/shared/playground",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: playground_exports2
  },
  "routes/shared/playground/input": {
    id: "routes/shared/playground/input",
    parentId: "routes/shared/playground",
    path: "input",
    index: void 0,
    caseSensitive: void 0,
    module: input_exports
  },
  "routes/shared/playground/table": {
    id: "routes/shared/playground/table",
    parentId: "routes/shared/playground",
    path: "table",
    index: void 0,
    caseSensitive: void 0,
    module: table_exports
  },
  "routes/core/menus/index": {
    id: "routes/core/menus/index",
    parentId: "root",
    path: "core/menus",
    index: true,
    caseSensitive: void 0,
    module: menus_exports
  },
  "routes/shared/index": {
    id: "routes/shared/index",
    parentId: "root",
    path: "shared",
    index: true,
    caseSensitive: void 0,
    module: shared_exports
  },
  "routes/auth/login": {
    id: "routes/auth/login",
    parentId: "root",
    path: "auth/login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/core/index": {
    id: "routes/core/index",
    parentId: "root",
    path: "core",
    index: true,
    caseSensitive: void 0,
    module: core_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3Jvb3QudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29udGV4dC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9sYXlvdXQvZmxvYXRjb250cm9sL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2R5bmFtaWNpY29uL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2xheW91dC9uYXZiYXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0L25hdmJhci9pY29ubWVudS9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL21lbnViYXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0L25hdmJhci9tZW51YmFyL2xpbmtpdGVtL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0L2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGlua2l0ZW0vaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZHluYW1pY2ljb24udHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZm9ybWNvbnRyb2wudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdHJlZXZpZXcudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvYnV0dG9uLnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2xheW91dC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbnB1dC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90YWJsZS50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9jb3JlL21lbnVzL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2lucHV0L2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2J1dHRvbi9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9jb3JlL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXIsXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2Zvcm1jb250cm9sLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RyZWV2aWV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2J1dHRvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9sYXlvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbnB1dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdGFibGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2NvcmUvbWVudXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTUgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvY29yZS9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVkL215cHJvamVjdHNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWQvdHV0b3JpYWxcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9hYm91dC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWQvYWJvdXRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9keW5hbWljaWNvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiBcImR5bmFtaWNpY29uXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9mb3JtY29udHJvbFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZm9ybWNvbnRyb2xcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZFwiLFxuICAgICAgcGF0aDogXCJmb3JtY29udHJvbFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdHJlZXZpZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RyZWV2aWV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwidHJlZXZpZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2J1dHRvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvYnV0dG9uXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwiYnV0dG9uXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9sYXlvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2xheW91dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiBcImxheW91dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5wdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2lucHV0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwiaW5wdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90YWJsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdGFibGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZFwiLFxuICAgICAgcGF0aDogXCJ0YWJsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL2NvcmUvbWVudXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NvcmUvbWVudXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29yZS9tZW51c1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL2xvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY29yZS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29yZS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb3JlXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIlJpc3RhbWF5YXxIb21lXCIgfTtcbn07XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcblxuaW1wb3J0IExheW91dCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImZhdmljb25cIiBocmVmPVwiZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXlvdXRQcm92aWRlciB9IGZyb20gXCIuL2xheW91dC5jb250ZXh0XCI7XG5pbXBvcnQgeyBGbG9hdENvbnRyb2wgfSBmcm9tIFwiLi9mbG9hdGNvbnRyb2xcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCBbdXNlVGhlbWUsIHNldFVzZVRoZW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dFByb3ZpZGVyIHZhbHVlPXt7IHVzZVRoZW1lLCBzZXRVc2VUaGVtZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VUaGVtZX1gfT5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8bWFpblxuICAgICAgICAgIGlkPVwiTWFpbkNvbnRlbnRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIGJsb2NrIGJnLXRoZW1lLW11dGVkIG92ZXJmbG93LWF1dG8gdG9wLTE2IHctc2NyZWVuIGgtW2NhbGMoMTAwJS02NHB4KV0gei00MGB9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGRpdiBpZD1cIlRoZW1lQ2hhbmdlclwiIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgei01MFwiPlxuICAgICAgICAgIDxGbG9hdENvbnRyb2wgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dFByb3ZpZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIHRoZW1lQ29udGV4dCB7XG4gIHVzZVRoZW1lOiBTdHJpbmc7XG4gIHNldFVzZVRoZW1lOiBhbnk7XG59XG5cbmNvbnN0IGRlZmF1bHRDb250ZXh0ID0ge1xuICB1c2VUaGVtZTogXCJyb290XCIsXG4gIHNldFVzZVRoZW1lOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExheW91dENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHRoZW1lQ29udGV4dD4oZGVmYXVsdENvbnRleHQpO1xuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gTGF5b3V0Q29udGV4dC5Qcm92aWRlcjtcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEeW5hbWljSWNvbiBmcm9tIFwiLi4vLi4vZHluYW1pY2ljb25cIjtcbmltcG9ydCB7IExheW91dENvbnRleHQgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IEZsb2F0Q29udHJvbCA9ICgpID0+IHtcbiAgY29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBzZXRVc2VUaGVtZSB9ID0gdXNlQ29udGV4dChMYXlvdXRDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctdGhlbWUtbXV0ZWQgYm9yZGVyLXRoZW1lLWJvcmRlciBtLTMgcC0xIHJvdW5kZWQtZnVsbCBib3JkZXIgaC1maXQgdy1maXRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgIHNldE9wZW5NZW51KHRydWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZml0IGgtZml0IHJvdW5kZWQtZnVsbCBob3ZlcjpvcGFjaXR5LTgwIHBlZXJcIlxuICAgICAgPlxuICAgICAgICA8RHluYW1pY0ljb24gaWNvbj1cIkZpU2xhY2tcIiBjbGFzc05hbWU9XCJ3LTcgaC03XCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge29wZW5NZW51ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHotNDAgZmxleC1yb3cgYm90dG9tLVs0MHB4XSByaWdodC0wIGJnLXRoZW1lLW11dGVkIHctZml0IGgtZml0IG1heC1oLVtjYWxjKDEwMHZoLTc0cHgpXSBvdmVyZmxvdy1hdXRvIGJvcmRlciBib3JkZXItdGhlbWUtYm9yZGVyIG14LTIgcm91bmRlZC1tZCBzaGFkb3ctbWRcbiAgICAgICAgICAgIGludmlzaWJsZSBvcGFjaXR5LTAgLXRyYW5zbGF0ZS14LWZ1bGwgaG92ZXI6dmlzaWJsZSBob3ZlcjpvcGFjaXR5LTEwMCBob3Zlcjp0cmFuc2xhdGUteC0wIHBlZXItZm9jdXM6dmlzaWJsZSBwZWVyLWZvY3VzOm9wYWNpdHktMTAwIHBlZXItZm9jdXM6dHJhbnNsYXRlLXgtMCBcbiAgICAgICAgICAgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBweC0xIHRleHQtY2VudGVyYH1cbiAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGhlbWUtc3Ryb25nIHRleHQtc20gZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgVGhlbWUgQ29sb3JcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLWN5YW5cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcC0xIHctMjQgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LW1kIGJnLWN5YW4tNjAwIG15LTEgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDeWFuXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLWFtYmVyXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHAtMSB3LTI0IGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1tZCBiZy1hbWJlci02MDAgbXktMSByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFtYmVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLWluZGlnb1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBwLTEgdy0yNCBmbGV4IGN1cnNvci1wb2ludGVyIHRleHQtbWQgYmctaW5kaWdvLTYwMCBteS0xIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSW5kaWdvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLXNsYXRlXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHAtMSB3LTI0IGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1tZCBiZy1zbGF0ZS02MDAgbXktMSByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNsYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLXN0b25lXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHAtMSB3LTI0IGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1tZCBiZy1zdG9uZS02MDAgbXktMSByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN0b25lXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGZpSWNvbnMgZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5cbmNvbnN0IER5bmFtaWNJY29uOiBGQzx7IGljb246IHN0cmluZzsgY2xhc3NOYW1lOiBzdHJpbmcgfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyAuLi5pY29ucyB9ID0gZmlJY29ucztcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBUaGVJY29uOiBKU1guRWxlbWVudCA9IGljb25zW3Byb3BzLmljb25dO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBAdHMtaWdub3JlICovfVxuICAgICAgPFRoZUljb24gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljSWNvbjtcbiIsICJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uTWVudSBmcm9tIFwiLi9pY29ubWVudVwiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4vbWVudWJhclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIG1lbnVJdGVtcyB7XG4gIGljb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25NZW51SXRlbXMge1xuICBpY29uOiBzdHJpbmc7XG4gIG1lbnVzOiBtZW51SXRlbXNbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW51QmFySXRlbXMge1xuICBocmVmOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5hdkJhcjogRkM8e1xuICBNb2R1bGVJdGVtcz86IEljb25NZW51SXRlbXM7XG4gIENvbnRyb2xJdGVtcz86IEljb25NZW51SXRlbXM7XG4gIE1lbnVJdGVtcz86IE1lbnVCYXJJdGVtc1tdO1xufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbW9kdWxlSXRlbXMgPSAhcHJvcHMuTW9kdWxlSXRlbXNcbiAgICA/IHtcbiAgICAgICAgaWNvbjogXCJGaUNwdVwiLFxuICAgICAgICBtZW51czogW3sgaWNvbjogXCJGaUhvbWVcIiwgdGl0bGU6IFwiSG9tZVwiLCBocmVmOiBcIi9cIiB9XSxcbiAgICAgIH1cbiAgICA6IHByb3BzLk1vZHVsZUl0ZW1zO1xuXG4gIGNvbnN0IGNvbnRyb2xJdGVtcyA9ICFwcm9wcy5Db250cm9sSXRlbXNcbiAgICA/IHtcbiAgICAgICAgaWNvbjogXCJGaVVzZXJcIixcbiAgICAgICAgbWVudXM6IFt7IGljb246IFwiRmlMb2dJblwiLCB0aXRsZTogXCJMb2dpblwiLCBocmVmOiBcIi9hdXRoL2xvZ2luXCIgfV0sXG4gICAgICB9XG4gICAgOiBwcm9wcy5Db250cm9sSXRlbXM7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gIXByb3BzLk1lbnVJdGVtc1xuICAgID8gW1xuICAgICAgICB7IGhyZWY6IFwiL1wiLCB0aXRsZTogXCJSaXN0YW1heWFcIiB9LFxuICAgICAgICB7IGhyZWY6IFwiL3NoYXJlZC9wbGF5Z3JvdW5kXCIsIHRpdGxlOiBcIlBsYXlncm91bmRcIiB9LFxuICAgICAgICB7IGhyZWY6IFwiL3NoYXJlZC90dXRvcmlhbFwiLCB0aXRsZTogXCJUdXRvcmlhbFwiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL215cHJvamVjdHNcIiwgdGl0bGU6IFwiTXkgUHJvamVjdHNcIiB9LFxuICAgICAgICB7IGhyZWY6IFwiL3NoYXJlZC9hYm91dFwiLCB0aXRsZTogXCJBYm91dFwiIH0sXG4gICAgICBdXG4gICAgOiBwcm9wcy5NZW51SXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cIk5hdkJhclwiXG4gICAgICBjbGFzc05hbWU9e2BmaXhlZCBiZy10aGVtZS1maWxsIHRleHQtdGhlbWUtYmFzZSBmbGV4IGgtMTYgdy1zY3JlZW4gc2hhZG93LW1kIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gei01MGB9XG4gICAgPlxuICAgICAgPEljb25NZW51XG4gICAgICAgIG9ubGVmdD17dHJ1ZX1cbiAgICAgICAgaWNvbj17bW9kdWxlSXRlbXMuaWNvbn1cbiAgICAgICAgcGFyZW50Q2xhc3M9XCJ3LTggaC04XCJcbiAgICAgICAgY2hpbGRDbGFzcz1cInctNiBoLTZcIlxuICAgICAgICBtZW51SXRlbT17bW9kdWxlSXRlbXMubWVudXN9XG4gICAgICAvPlxuXG4gICAgICA8TWVudUJhciBMaW5rSXRlbXM9e21lbnVJdGVtc30gLz5cblxuICAgICAgPEljb25NZW51XG4gICAgICAgIG9ubGVmdD17ZmFsc2V9XG4gICAgICAgIGljb249e2NvbnRyb2xJdGVtcy5pY29ufVxuICAgICAgICBwYXJlbnRDbGFzcz1cInctOCBoLThcIlxuICAgICAgICBjaGlsZENsYXNzPVwidy02IGgtNlwiXG4gICAgICAgIG1lbnVJdGVtPXtjb250cm9sSXRlbXMubWVudXN9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwgImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBEeW5hbWljSWNvbiBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvZHluYW1pY2ljb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbSB7XG4gIGljb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufVxuXG5jb25zdCBJY29uTWVudTogRkM8e1xuICBvbmxlZnQ6IGJvb2xlYW47XG4gIGljb246IHN0cmluZztcbiAgcGFyZW50Q2xhc3M/OiBzdHJpbmc7XG4gIGNoaWxkQ2xhc3M6IHN0cmluZztcbiAgbWVudUl0ZW06IE1lbnVJdGVtW107XG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBtZW51SXRlbSA9ICFwcm9wcy5tZW51SXRlbVxuICAgID8gW3sgdGl0bGU6IFwiRHVtbXlcIiwgaWNvbjogXCJGaVVzZXJcIiwgaHJlZjogXCIvXCIgfV1cbiAgICA6IHByb3BzLm1lbnVJdGVtO1xuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctMTYgaC1hdXRvIG0tMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgIHNldE9wZW5NZW51KHRydWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZml0IGgtZml0IHAtMiByb3VuZGVkLWZ1bGwgaG92ZXI6c2NhbGUtOTUgcGVlclwiXG4gICAgICA+XG4gICAgICAgIDxEeW5hbWljSWNvbiBpY29uPXtwcm9wcy5pY29ufSBjbGFzc05hbWU9e2Ake3Byb3BzLnBhcmVudENsYXNzfWB9IC8+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge29wZW5NZW51ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwiSWNvbk1lbnVzXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB6LTQwIGZsZXgtcm93IHRvcC0xMiBiZy10aGVtZS1tdXRlZCB3LWF1dG8gaC1hdXRvIG1heC1oLVtjYWxjKDEwMHZoLTc0cHgpXSBvdmVyZmxvdy1hdXRvIGJvcmRlciBib3JkZXItdGhlbWUtYm9yZGVyIHBsLTIgcHItOSBweS0zIG14LTIgcm91bmRlZC1tZCBzaGFkb3ctbWRcbiAgICAgICAgICBpbnZpc2libGUgb3BhY2l0eS0wIC10cmFuc2xhdGUteS1mdWxsIGhvdmVyOnZpc2libGUgaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOnZpc2libGUgcGVlci1mb2N1czpvcGFjaXR5LTEwMCBwZWVyLWZvY3VzOnRyYW5zbGF0ZS15LTBcbiAgICAgICAgICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgc3BhY2UteS0yICR7XG4gICAgICAgICAgICBwcm9wcy5vbmxlZnQgPyBcImxlZnQtMFwiIDogXCJyaWdodC0wXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHttZW51SXRlbS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2luZGV4fSB0bz17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIHNldE9wZW5NZW51KCFvcGVuTWVudSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEeW5hbWljSWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcm9wcy5jaGlsZENsYXNzfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25NZW51O1xuIiwgImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlua0l0ZW0gZnJvbSBcIi4vbGlua2l0ZW1cIjtcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rU291cmNlIHtcbiAgaHJlZjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBNZW51QmFyOiBGQzx7IExpbmtJdGVtcz86IExpbmtTb3VyY2VbXSB9PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBMaW5rSXRlbXMgPSAhcHJvcHMuTGlua0l0ZW1zXG4gICAgPyBbeyBocmVmOiBcIi9cIiwgdGl0bGU6IFwiUklTVEFNQVwiIH1dXG4gICAgOiBwcm9wcy5MaW5rSXRlbXM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9XCJNZW51QmFyXCJcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC1mdWxsIHctZml0IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXktaGlkZGVuXCJcbiAgICA+XG4gICAgICB7TGlua0l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPExpbmtJdGVtIGtleT17aW5kZXh9IGhyZWY9e2l0ZW0uaHJlZn0gdGl0bGU9e2l0ZW0udGl0bGV9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVCYXI7XG4iLCAiLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmNvbnN0IExpbmtJdGVtOiBGQzx7IGhyZWY6IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzcGFuQ2xhc3MgPVxuICAgIFwiYWJzb2x1dGUgaC0wIHctZnVsbCByb3VuZGVkLXNtIGdyb3VwLWhvdmVyOmgtZnVsbCB0cmFuc2l0aW9uLWFsbCBlYXNlLW91dCBkdXJhdGlvbi03MDBcIjtcbiAgcmV0dXJuIChcbiAgICA8TGluayB0bz17cHJvcHMuaHJlZn0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwiTWVudUl0ZW1cIlxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGgtMTYgdy1hdXRvIHB4LTIgaXRlbXMtY2VudGVyIGFjdGl2ZTp0ZXh0LXRoZW1lLWludmVydGVkIGhvdmVyOnRleHQtdGhlbWUtc3Ryb25nIGdyb3VwXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgYmctdGhlbWUtbXV0ZWQvNSB0b3AtMCBsZWZ0LTAgJHtzcGFuQ2xhc3N9YH0+PC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17YGJnLXRoZW1lLW11dGVkLzIwIGJvdHRvbS0wIGxlZnQtMCAke3NwYW5DbGFzc31gfVxuICAgICAgICA+PC9zcGFuPlxuXG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtJdGVtO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gTXlQcm9qZWN0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15UHJvamVjdHM7XG4iLCAiZnVuY3Rpb24gV29ya09uSXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXRoZW1lLXN0cm9uZyB0ZXh0LTJ4bCBtLWF1dG8gbXQtM1wiPlxuICAgICAgU29ycnksIEknbSBzdGlsbCB3b3JraW5nIG9uIGl0XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1nMS5wbmdcIiBjbGFzc05hbWU9XCJtdC0xMCBtLWF1dG8gb2JqZWN0LWNvdmVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya09uSXQ7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBUdXRvcmlhbFNoYXJlZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR1dG9yaWFsU2hhcmVkO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsICJpbXBvcnQgeyBMaW5rLCBNZXRhRnVuY3Rpb24sIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExpbmtJdGVtIGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9saW5raXRlbVwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJSaXN0YW1heWF8UGxheWdyb3VuZFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5Z3JvdW5kKCkge1xuICBjb25zdCBjbGFzc05hbWVMaW5rID0gXCJoLTkgdy00MCBmb250LXNlbWlib2xkXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHRleHQtdGhlbWUtYmFzZSB6LTBcIj5cbiAgICAgIHsvKiBTaWRlYmFyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBibG9jayB3LTMyIGgtW2NhbGMoMTAwJS02NHB4KV0gYmctdGhlbWUtZmlsbCB6LTIwIHNoYWRvdy1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtdGhlbWUtc3Ryb25nIHRleHQteGwgZm9udC1zZW1pYm9sZCBtdC0zIG1iLTYgcGwtMlwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3NoYXJlZC9wbGF5Z3JvdW5kXCI+TXkgU3R1ZmZzPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJQbGF5Z3JvdW5kU0JcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtW2NhbGMoMTAwJS0xNDBweCldIHRleHQteHMgZm9udC1zZW1pYm9sZCBvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIHBsLTJcIlxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtJdGVtIHRvPVwiLi9sYXlvdXRcIiB0aXRsZT1cIkxheW91dFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua30gLz5cbiAgICAgICAgICA8TGlua0l0ZW0gdG89XCIuL2lucHV0XCIgdGl0bGU9XCJpbnB1dFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua30gLz5cbiAgICAgICAgICA8TGlua0l0ZW0gdG89XCIuL2J1dHRvblwiIHRpdGxlPVwiQnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfSAvPlxuICAgICAgICAgIDxMaW5rSXRlbSB0bz1cIi4vdGFibGVcIiB0aXRsZT1cIlRhYmxlXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfSAvPlxuICAgICAgICAgIDxMaW5rSXRlbVxuICAgICAgICAgICAgdG89XCIuL2R5bmFtaWNpY29uXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRHluYW1pYyBJY29uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaW5rSXRlbVxuICAgICAgICAgICAgdG89XCIuL3RyZWV2aWV3XCJcbiAgICAgICAgICAgIHRpdGxlPVwiVHJlZXZpZXdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtdGhlbWUtc3Ryb25nIHRleHQteHMgZm9udC1zZW1pYm9sZCBtdC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgUmVhY3QuSlMgKyBUYWlsd2luZCBDU1NcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggbGVmdC00MCB3LVtjYWxjKDEwMCUtMTkycHgpXSBoLWF1dG8gcC0yIHotMTBcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmNvbnN0IExpbmtJdGVtOiBGQzx7IHRvOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH0+ID0gKFxuICBwcm9wc1xuKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e3Byb3BzLnRvfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJNZW51SXRlbVwiXG4gICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGFjdGl2ZTp0ZXh0LXRoZW1lLWludmVydGVkIGhvdmVyOnRleHQtdGhlbWUtc3Ryb25nIGdyb3VwICR7cHJvcHMuY2xhc3NOYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaC1mdWxsIHctMCBiZy10aGVtZS1tdXRlZCBiZy1vcGFjaXR5LTIwIHJvdW5kZWQtc20gZ3JvdXAtaG92ZXI6dy1bY2FsYygxMDAlKzEwMHB4KV0gdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNTAwXCI+PC9zcGFuPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rSXRlbTtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIER5bmFtaWNJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0ljb247XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBGb3JtQ29udHJvbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gVHJlZXZpZXcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVldmlldztcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIExheW91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIENvbXBvbmVudHNTaGFyZWQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciBtLWF1dG9cIj5cbiAgICAgIExldCdzIGV4cGxvcmUgbXkgVUkgQ29tcG9uZW50c1xuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZzIucG5nXCIgY2xhc3NOYW1lPVwibXktNiBteC1hdXRvIG9iamVjdC1maWxsXCIgLz5cbiAgICAgIEp1c3Qgc2VsZWN0IG9uIGxlZnQgc2lkZWJhclxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRzU2hhcmVkO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gSW5wdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIFRhYmxlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCAiaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvaW5wdXRcIjtcbmltcG9ydCAqIGFzIE1lbnVzQWN0aW9uIGZyb20gXCJ+L2FwcGxpY2F0aW9uL2FjdGlvbnMvbWVudXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGFjdGlvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7fVxuXG5mdW5jdGlvbiBNZW51cygpIHtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBsZXQgbWVudVR5cGUgPSBTdHJpbmc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTVcIj5cbiAgICAgIDxGb3JtXG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJvcmRlciByb3VuZGVkLW1kIHNoYWRvdy1tZCBwLTQgdy1maXQgaC1maXQgbS1hdXRvIGJnLXRoZW1lLW11dGVkXCJcbiAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMyBtYi05IHRleHQtY2VudGVyIHRleHQtdGhlbWUtc3Ryb25nIHRleHQtbGcgXCI+XG4gICAgICAgICAgTWVudSBFZGl0b3JcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctOTZcIlxuICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYXNkYXNkXCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbGFiZWw9XCJNZW51IFR5cGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctOTZcIlxuICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgIG5hbWU9XCJtZW51dHlwZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlucHV0RGF0YT17W1wiTWVudVwiLCBcIkxpbmtcIl19XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGxhYmVsPVwiUGFyZW50XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTk2XCJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICBuYW1lPVwicGFyZW50XCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGxhYmVsPVwiUGF0aFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy05NlwiXG4gICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgICAgbmFtZT1cInBhdGhcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbGFiZWw9XCJQYXRoIFR5cGVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctOTZcIlxuICAgICAgICAgIGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfVxuICAgICAgICAgIG5hbWU9XCJwYXRodHlwZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlucHV0RGF0YT17W1wiSW50ZXJuYWxcIiwgXCJFeHRlcm5hbFwiXX1cbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbGFiZWw9XCJpY29uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LTk2XCJcbiAgICAgICAgICBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX1cbiAgICAgICAgICBuYW1lPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ3LTIwXCIgbGFiZWw9XCJTYXZlXCIgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51cztcbiIsICJpbXBvcnQgeyBGb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb24sIElucHV0SFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHluYW1pY0ljb24gZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL2R5bmFtaWNpY29uXCI7XG5cbmludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBpbnB1dERhdGE/OiBzdHJpbmdbXTtcbiAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgSW5wdXQ6IEZvcndhcmRSZWZSZW5kZXJGdW5jdGlvbjxIVE1MSW5wdXRFbGVtZW50LCBJbnB1dFByb3BzPiA9ICh7XG4gIGxhYmVsLFxuICBjbGFzc05hbWUsXG4gIGlucHV0RGF0YSxcbiAgZXJyb3JNZXNzYWdlLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbb3BlbkRhdGEsIHNldE9wZW5EYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBtLTMgdy1maXQgaC1maXQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBjbGFzc05hbWU9e2B6LTAgcmVsYXRpdmUgbWluLXctMTAgbWluLWgtOCBwdC0xIHBiLTEgcHgtMSBteS0xIHRleHQtdGhlbWUtYmFzZSBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci10aGVtZS1ib3JkZXIgZGlzYWJsZWQ6Ym9yZGVyLXRoZW1lLWJvcmRlci81MCByb3VuZGVkLVs0cHhdIHBsYWNlaG9sZGVyOnRleHQtdGhlbWUtbXV0ZWQgaW52YWxpZDpib3JkZXItdGhlbWUtd2FybmluZyBwZWVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICA+PC9pbnB1dD5cblxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiei0xMCBhYnNvbHV0ZSBweC1bMnB4XSAtdG9wLVs1cHhdIGxlZnQtMiByb3VuZGVkLXNtIGJnLXRoZW1lLW11dGVkIGxlYWRpbmctbm9uZSB0ZXh0LXNtIHRleHQtdGhlbWUtYmFzZSBwZWVyLWludmFsaWQ6dGV4dC10aGVtZS13YXJuaW5nIHBlZXItZGlzYWJsZWQ6dGV4dC10aGVtZS1tdXRlZFwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L3NwYW4+XG5cbiAgICAgIHtlcnJvck1lc3NhZ2UgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ6LTEwIGFic29sdXRlIHB4LVsycHhdIC10b3AtWzVweF0gcmlnaHQtMSByb3VuZGVkLWZ1bGwgYmctdGhlbWUtbXV0ZWQgdGV4dC1zbSB0ZXh0LXRoZW1lLXdhcm5pbmcgbGVhZGluZy1ub25lXCI+XG4gICAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgKX1cblxuICAgICAge2lucHV0RGF0YSAmJiAoXG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNldE9wZW5EYXRhKCFvcGVuRGF0YSl9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgY3Vyc29yLXBvaW50ZXIgcmlnaHQtMSBib3JkZXItbCBib3JkZXItdGhlbWUtYm9yZGVyIHctZml0IGgtZml0IHRleHQtdGhlbWUtYmFzZSBiZy10aGVtZS1tdXRlZGB9XG4gICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8RHluYW1pY0ljb25cbiAgICAgICAgICAgIGljb249XCJGaUNoZXZyb25MZWZ0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIG9wZW5EYXRhICYmIFwiLXJvdGF0ZS05MFwiXG4gICAgICAgICAgICB9IGgtNiB3LTYgIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuXG4gICAgICB7b3BlbkRhdGEgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgcHgtMSBweS0xIGZsZXgtcm93IHotMjAgYm90dG9tLVsxMHB4XSBsZWZ0LTAgdy1mdWxsIGJnLXRoZW1lLW11dGVkIGJvcmRlci1sIGJvcmRlci1yIGJvcmRlci1iIGJvcmRlci10aGVtZS1ib3JkZXIgcm91bmRlZC1bNHB4XSB0cmFuc2xhdGUteS1mdWxsYH1cbiAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpbnB1dERhdGE/Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctdGhlbWUtZmlsbC83NSB0ZXh0LXRoZW1lLWJhc2VcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKGl0ZW0pO1xuICAgICAgICAgICAgICAgIHNldE9wZW5EYXRhKCFvcGVuRGF0YSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtpdGVtfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZvcndhcmRSZWZSZW5kZXJGdW5jdGlvbiwgQnV0dG9uSFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIGV4dGVuZHMgQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+IHtcbiAgbGFiZWw6IHN0cmluZztcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b246IEZvcndhcmRSZWZSZW5kZXJGdW5jdGlvbjxcbiAgSFRNTElucHV0RWxlbWVudCxcbiAgQnV0dG9uUHJvcHNcbj4gPSAoeyBsYWJlbCwgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHNwYW5DbGFzcyA9XG4gICAgXCJhYnNvbHV0ZSB0b3AtMCBoLWZ1bGwgdy0wIGJnLXRoZW1lLWJ1dHRvbi1ob3Zlci8yMCBncm91cC1ob3Zlcjp3LWZ1bGwgdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNzAwXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBtaW4taC1maXQgbWluLXctZml0IHB4LTQgcHktMSBiZy10aGVtZS1idXR0b24tYmFzZSBvdXRsaW5lLW5vbmUgcm91bmRlZC1tZCBncm91cCBhY3RpdmU6dGV4dC10aGVtZS1pbnZlcnRlZCBtLTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiB0ZXh0LXRoZW1lLWJhc2UgJHtjbGFzc05hbWV9YH1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2BsZWZ0LTAgJHtzcGFuQ2xhc3N9YH0+PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgcmlnaHQtMCAke3NwYW5DbGFzc31gfT48L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gU2hhcmVkSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRJbmRleDtcbiIsICJpbXBvcnQgeyBGb3JtIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvaW5wdXRcIjtcbmltcG9ydCAqIGFzIExvZ2luQWN0aW9uIGZyb20gXCJ+L2FwcGxpY2F0aW9uL2FjdGlvbnMvYXV0aC9sb2dpblwiO1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1maXQgaC1maXQgdG9wLTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXRoZW1lLW11dGVkIG0tYXV0byBweC0zIHB5LTUgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCBib3JkZXIgYm9yZGVyLXRoZW1lLWJvcmRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTEwIHRleHQtNHhsIGZvbnQtc2VtaWJvbGRcIj5Mb2dpbjwvaDE+XG4gICAgICA8Rm9ybVxuICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1maXQgdy1maXQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgID5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBsYWJlbD1cIlVzZXIgTmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICBzZXRVc2VyTmFtZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgIC8vIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICBzZXRQYXNzd29yZChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgIC8vIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGxhYmVsPVwiTG9naW5cIiBjbGFzc05hbWU9XCJoLTggdy0yOCByaWdodC0wXCIgLz5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc206ZmxleCBmbGV4LXdhcnAgdy1mdWxsIHRleHQtdGhlbWUtYmFzZSBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIHB4LTEwIHB5LTdcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaW1nMy5wbmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNjYWxlLTc1IHNtOnNjYWxlLTEwMCBtLWF1dG8gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LWxnIG1iLTFcIj5cbiAgICAgICAgICBIZWxsbyB0aGVyZSBJJ217XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206dGV4dC1tZCB0ZXh0LWJhc2Ugc206dGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBBbmphcntcIiBcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgSSBjYWxsIHRoaXNcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTp0ZXh0LW1kIHRleHQtYmFzZSBzbTp0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIFJJU1RBTUFZQSx7XCIgXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIGl0IGp1c3QgbXkgcGVyc29uYWwgd2Vic2l0ZSBidWlsdCBieVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT4tIFJlbWl4IEpTIHdpdGggVHlwZXNjcmlwdDwvbGk+XG4gICAgICAgICAgICA8bGk+LSBUYWlsd2luZCBDU1M8L2xpPlxuICAgICAgICAgICAgPGxpPi0gTW9uZ29EQjwvbGk+XG4gICAgICAgICAgICA8bGk+LSBBbmQgTW9yZTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICBUaGFua3MgYSBsb3QgZm9yIHZpc2l0aW5nIHBsZWFzZSB0YWtlIGEgbG9vayB3aGF0J3MgZ29pbmcgb24gaGVyZVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzbTpmbGV4IGZsZXgtd2FycCB3LWZ1bGwgdGV4dC10aGVtZS1iYXNlIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgcHgtMTAgcHktN1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9pbWczLnBuZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2NhbGUtNzUgc206c2NhbGUtMTAwIG0tYXV0byBvYmplY3QtY292ZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtbGcgbWItMVwiPlxuICAgICAgICAgIEhlbGxvIHRoZXJlIEknbXtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTp0ZXh0LW1kIHRleHQtYmFzZSBzbTp0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIEFuamFye1wiIFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBJIGNhbGwgdGhpc1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOnRleHQtbWQgdGV4dC1iYXNlIHNtOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgUklTVEFNQVlBLHtcIiBcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgaXQganVzdCBteSBwZXJzb25hbCB3ZWJzaXRlIGJ1aWx0IGJ5XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPi0gUmVtaXggSlMgd2l0aCBUeXBlc2NyaXB0PC9saT5cbiAgICAgICAgICAgIDxsaT4tIFRhaWx3aW5kIENTUzwvbGk+XG4gICAgICAgICAgICA8bGk+LSBNb25nb0RCIHdpdGggUHJpc21hIE9STTwvbGk+XG4gICAgICAgICAgICA8bGk+LSBBbmQgTW9yZTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICBUaGFua3MgYSBsb3QgZm9yIHZpc2l0aW5nIHBsZWFzZSB0YWtlIGEgbG9vayB3aGF0J3MgZ29pbmcgb24gaGVyZVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic1OGM1OTQxZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtVlE3UVRaQTYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU9XUkpLM0s2LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzNBWllHUFguanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LUxXWk9XNzVJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01Q1k0REFGSS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9sb2dpbic6eydpZCc6J3JvdXRlcy9hdXRoL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9sb2dpbi1FRUlYUjRXQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstV0EzVEhYQ0guanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvcmUvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY29yZS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb3JlJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb3JlL2luZGV4LUJWRjNJNlZZLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29yZS9tZW51cy9pbmRleCc6eydpZCc6J3JvdXRlcy9jb3JlL21lbnVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvcmUvbWVudXMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvcmUvbWVudXMvaW5kZXgtWTI2RkJMUVYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVdBM1RIWENILmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1ZU1ZMQ0E1WS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9hYm91dC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL2Fib3V0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgtRDVVUUpaUjUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlZCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2luZGV4LUpZS0dMWDVFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL215cHJvamVjdHMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4LUg0Wko0WDRLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL3BsYXlncm91bmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQtQTI2TzZXNDMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9idXR0b24nOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvYnV0dG9uJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzonYnV0dG9uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2J1dHRvbi1XVTZHTUs0Mi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uJzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzonZHluYW1pY2ljb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZHluYW1pY2ljb24tN1pQT0VMVVQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9mb3JtY29udHJvbCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9mb3JtY29udHJvbCcsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGF0aCc6J2Zvcm1jb250cm9sJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2Zvcm1jb250cm9sLVVKV09NWUFQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbmRleC1IRktDRTNGVS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2lucHV0Jzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2lucHV0JywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzonaW5wdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5wdXQtSU5PUUVEWVAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9sYXlvdXQnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvbGF5b3V0JywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzonbGF5b3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2xheW91dC00Q0dMVzZLSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RhYmxlJzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RhYmxlJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzondGFibGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdGFibGUtT1JPRkNGM0ouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90cmVldmlldyc6eydpZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90cmVldmlldycsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGF0aCc6J3RyZWV2aWV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RyZWV2aWV3LVJGUFU0VTNOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3R1dG9yaWFsL2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaGFyZWQvdHV0b3JpYWwnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleC1SUlBZTUtXNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC01OEM1OTQxRS5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FB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QUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDJCQUEyQjtBQUFBLElBQ3ZCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosdUJBQXVCO0FBQUEsSUFDbkIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixxQkFBcUI7QUFBQSxJQUNqQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHFCQUFxQjtBQUFBLElBQ2pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosZ0JBQWdCO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTs7O0FEMUpkLHdCQUF3QixPQUFPLFNBQVM7QUFDdEMsTUFBSTtBQUNKLE1BQUk7QUFFSixNQUFJLE1BQU0saUJBQWlCLE1BQU07QUFDL0Isd0JBQW9CLE1BQU07QUFBQTtBQUc1QixRQUFNLGFBQWEsTUFBTSxRQUFRO0FBQ2pDLFFBQU0sdUJBQXVCLE1BQU0sUUFBUTtBQUUzQyxNQUFJLGNBQWMsUUFBUSxZQUFZLEtBQUssYUFBYTtBQUN0RCw2QkFBeUIsV0FBVyxNQUFNLEtBQUs7QUFBQTtBQUdqRCxRQUFNLGNBQWM7QUFBQSxJQUNsQiwrQkFBK0I7QUFBQSxJQUMvQjtBQUFBLElBQ0EsdUJBQXVCO0FBQUE7QUFJekIsU0FBTyxLQUFLLGFBQWEsUUFBUSxDQUFDLFFBQVE7QUFDeEMsUUFBSSxZQUFZLFFBQVEsTUFBTTtBQUM1QixhQUFPLFlBQVk7QUFBQTtBQUFBO0FBSXZCLFNBQU87QUFBQTtBQUdGLElBQU0sVUFBVSx5Q0FBcUI7QUFBQSxFQUMxQztBQUFBLEVBQ0E7QUFBQSxFQUNBLE1BQU07QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
