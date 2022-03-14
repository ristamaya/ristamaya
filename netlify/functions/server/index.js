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
var tailwind_default = "/build/_assets/tailwind-6TUK4DRB.css";

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
            transition-all duration-500 px-1 text-center`
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
  return /* @__PURE__ */ import_react4.default.createElement(import_remix3.Link, {
    to: props.href
  }, /* @__PURE__ */ import_react4.default.createElement("button", {
    id: "MenuItem",
    className: "relative flex h-16 w-auto px-2 items-center active:text-theme-inverted hover:text-theme-strong group"
  }, /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "absolute bottom-0 left-0 h-0 w-full bg-theme-muted bg-opacity-20 rounded-sm group-hover:h-full transition-all ease-out duration-700"
  }), /* @__PURE__ */ import_react4.default.createElement("span", {
    className: "absolute top-0 left-0 h-0 w-full bg-theme-muted bg-opacity-5 rounded-sm group-hover:h-full transition-all ease-out duration-700"
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
    className: "fixed block w-28 h-[calc(100%-64px)] bg-theme-fill z-20 shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative text-theme-strong text-xl font-semibold mt-3 mb-6 pl-2"
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/shared/playground"
  }, "My Stuffs")), /* @__PURE__ */ React.createElement("div", {
    id: "SharedCompSB",
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
var import_react9 = require("react");

// app/application/uicomponents/button/index.tsx
init_react();
var import_react8 = __toESM(require("react"));
var Button2 = (_a, ref) => {
  var _b = _a, { label, className } = _b, otherProps = __objRest(_b, ["label", "className"]);
  return /* @__PURE__ */ import_react8.default.createElement("button", __spreadProps(__spreadValues({}, otherProps), {
    className: "relative flex bg-theme-button-accent h-8 w-32 items-center justify-center outline-none rounded-md hover:bg-theme-button-accent-hover"
  }), label);
};

// app/application/uicomponents/input/index.tsx
init_react();
var Input2 = (_a, ref) => {
  var _b = _a, { name, label, className } = _b, otherProps = __objRest(_b, ["name", "label", "className"]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative flex my-2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "z-10 absolute px-1 -top-[6px] left-2 rounded-sm bg-theme-muted text-sm text-theme-muted leading-tight"
  }, label), /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues({}, otherProps), {
    name,
    className: "z-0 relative w-full h-10 pt-3 pb-2 px-2 my-1 text-theme-base bg-transparent outline-none border border-theme-border rounded-md placeholder:text-theme-muted"
  })));
};

// route:/home/ristama/projects/ristamaya/app/routes/auth/login.tsx
function Login() {
  const [username, setUserName] = (0, import_react9.useState)("");
  const [password, setPassword] = (0, import_react9.useState)("");
  const [loginMessage, setLoginMessage] = (0, import_react9.useState)("");
  const [btnDisable, setBtnDisable] = (0, import_react9.useState)(false);
  const [effect, setEffect] = (0, import_react9.useState)(false);
  async function loginHandler(event) {
    event.preventDefault();
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative block w-80 h-fit top-8 bg-theme-muted m-auto px-3 py-5 rounded-md drop-shadow-md border border-theme-border"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "relative text-center mb-10 text-4xl font-semibold"
  }, "Login"), /* @__PURE__ */ React.createElement("form", {
    onSubmit: loginHandler
  }, /* @__PURE__ */ React.createElement(Input2, {
    type: "text",
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
    className: ""
  }), loginMessage && /* @__PURE__ */ React.createElement("p", {
    className: "text-rose-600 text-opacity-40"
  }, loginMessage)));
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
var assets_manifest_default = { "version": "55a92feb", "entry": { "module": "/build/entry.client-QJLBJVRG.js", "imports": ["/build/_shared/chunk-HPSITHEW.js", "/build/_shared/chunk-K3AZYGPX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-5JKQFRUH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-WTN75KXM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/index": { "id": "routes/core/index", "parentId": "root", "path": "core", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/index-BVF3I6VY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-YSVLCA5Y.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/about/index": { "id": "routes/shared/about/index", "parentId": "root", "path": "shared/about", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/about/index-D5UQJZR5.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/index": { "id": "routes/shared/index", "parentId": "root", "path": "shared", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/index-JYKGLX5E.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/myprojects/index": { "id": "routes/shared/myprojects/index", "parentId": "root", "path": "shared/myprojects", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/myprojects/index-H4ZJ4X4K.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground": { "id": "routes/shared/playground", "parentId": "root", "path": "shared/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground-QENDASFZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/button": { "id": "routes/shared/playground/button", "parentId": "routes/shared/playground", "path": "button", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/button-WU6GMK42.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/dynamicicon": { "id": "routes/shared/playground/dynamicicon", "parentId": "routes/shared/playground", "path": "dynamicicon", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/dynamicicon-7ZPOELUT.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/formcontrol": { "id": "routes/shared/playground/formcontrol", "parentId": "routes/shared/playground", "path": "formcontrol", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/formcontrol-UJWOMYAP.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/index": { "id": "routes/shared/playground/index", "parentId": "routes/shared/playground", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/playground/index-HFKCE3FU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/input": { "id": "routes/shared/playground/input", "parentId": "routes/shared/playground", "path": "input", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/input-INOQEDYP.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/layout": { "id": "routes/shared/playground/layout", "parentId": "routes/shared/playground", "path": "layout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/layout-4CGLW6KI.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/table": { "id": "routes/shared/playground/table", "parentId": "routes/shared/playground", "path": "table", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/table-OROFCF3J.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/treeview": { "id": "routes/shared/playground/treeview", "parentId": "routes/shared/playground", "path": "treeview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/treeview-RFPU4U3N.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/tutorial/index": { "id": "routes/shared/tutorial/index", "parentId": "root", "path": "shared/tutorial", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/tutorial/index-RRPYMKW7.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-55A92FEB.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3Jvb3QudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29udGV4dC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9sYXlvdXQvZmxvYXRjb250cm9sL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2R5bmFtaWNpY29uL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2xheW91dC9uYXZiYXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0L25hdmJhci9pY29ubWVudS9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL21lbnViYXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0L25hdmJhci9tZW51YmFyL2xpbmtpdGVtL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0L2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGlua2l0ZW0vaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZHluYW1pY2ljb24udHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZm9ybWNvbnRyb2wudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdHJlZXZpZXcudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvYnV0dG9uLnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2xheW91dC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbnB1dC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90YWJsZS50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9idXR0b24vaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvaW5wdXQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvY29yZS9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyLFxuICB9O1xuXG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3Qua2V5cyhsb2FkQ29udGV4dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3R1dG9yaWFsL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9hYm91dC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9keW5hbWljaWNvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9mb3JtY29udHJvbC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90cmVldmlldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9idXR0b24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvbGF5b3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5wdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RhYmxlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2F1dGgvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2NvcmUvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNoYXJlZC9teXByb2plY3RzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3R1dG9yaWFsL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVkL3R1dG9yaWFsXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVkL2Fib3V0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9keW5hbWljaWNvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZHluYW1pY2ljb25cIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZFwiLFxuICAgICAgcGF0aDogXCJkeW5hbWljaWNvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZm9ybWNvbnRyb2xcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2Zvcm1jb250cm9sXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwiZm9ybWNvbnRyb2xcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RyZWV2aWV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90cmVldmlld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiBcInRyZWV2aWV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9idXR0b25cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2J1dHRvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiBcImJ1dHRvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvbGF5b3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9sYXlvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZFwiLFxuICAgICAgcGF0aDogXCJsYXlvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2lucHV0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbnB1dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiBcImlucHV0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdGFibGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RhYmxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwidGFibGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL2xvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvY29yZS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29yZS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb3JlXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIlJpc3RhbWF5YXxIb21lXCIgfTtcbn07XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbi8vICAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbi8vIH1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9sYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiZmF2aWNvblwiIGhyZWY9XCJmYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExheW91dFByb3ZpZGVyIH0gZnJvbSBcIi4vbGF5b3V0LmNvbnRleHRcIjtcbmltcG9ydCB7IEZsb2F0Q29udHJvbCB9IGZyb20gXCIuL2Zsb2F0Y29udHJvbFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9uYXZiYXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIGNvbnN0IFt1c2VUaGVtZSwgc2V0VXNlVGhlbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0UHJvdmlkZXIgdmFsdWU9e3sgdXNlVGhlbWUsIHNldFVzZVRoZW1lIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3VzZVRoZW1lfWB9PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxtYWluXG4gICAgICAgICAgaWQ9XCJNYWluQ29udGVudFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgYmxvY2sgYmctdGhlbWUtbXV0ZWQgb3ZlcmZsb3ctYXV0byB0b3AtMTYgdy1zY3JlZW4gaC1bY2FsYygxMDAlLTY0cHgpXSB6LTQwYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8ZGl2IGlkPVwiVGhlbWVDaGFuZ2VyXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB6LTUwXCI+XG4gICAgICAgICAgPEZsb2F0Q29udHJvbCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0UHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgdGhlbWVDb250ZXh0IHtcbiAgdXNlVGhlbWU6IFN0cmluZztcbiAgc2V0VXNlVGhlbWU6IGFueTtcbn1cblxuY29uc3QgZGVmYXVsdENvbnRleHQgPSB7XG4gIHVzZVRoZW1lOiBcInJvb3RcIixcbiAgc2V0VXNlVGhlbWU6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgTGF5b3V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8dGhlbWVDb250ZXh0PihkZWZhdWx0Q29udGV4dCk7XG5leHBvcnQgY29uc3QgTGF5b3V0UHJvdmlkZXIgPSBMYXlvdXRDb250ZXh0LlByb3ZpZGVyO1xuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IER5bmFtaWNJY29uIGZyb20gXCIuLi8uLi9keW5hbWljaWNvblwiO1xuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gXCIuLi9sYXlvdXQuY29udGV4dFwiO1xuXG5leHBvcnQgY29uc3QgRmxvYXRDb250cm9sID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7IHNldFVzZVRoZW1lIH0gPSB1c2VDb250ZXh0KExheW91dENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy10aGVtZS1tdXRlZCBib3JkZXItdGhlbWUtYm9yZGVyIG0tMyBwLTEgcm91bmRlZC1mdWxsIGJvcmRlciBoLWZpdCB3LWZpdFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgc2V0T3Blbk1lbnUodHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy1maXQgaC1maXQgcm91bmRlZC1mdWxsIGhvdmVyOm9wYWNpdHktODAgcGVlclwiXG4gICAgICA+XG4gICAgICAgIDxEeW5hbWljSWNvbiBpY29uPVwiRmlTbGFja1wiIGNsYXNzTmFtZT1cInctNyBoLTdcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7b3Blbk1lbnUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgei00MCBmbGV4LXJvdyBib3R0b20tWzQwcHhdIHJpZ2h0LTAgYmctdGhlbWUtbXV0ZWQgdy1maXQgaC1maXQgbWF4LWgtW2NhbGMoMTAwdmgtNzRweCldIG92ZXJmbG93LWF1dG8gYm9yZGVyIGJvcmRlci10aGVtZS1ib3JkZXIgbXgtMiByb3VuZGVkLW1kIHNoYWRvdy1tZFxuICAgICAgICAgICAgaW52aXNpYmxlIG9wYWNpdHktMCAtdHJhbnNsYXRlLXgtZnVsbCBob3Zlcjp2aXNpYmxlIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOnRyYW5zbGF0ZS14LTAgcGVlci1mb2N1czp2aXNpYmxlIHBlZXItZm9jdXM6b3BhY2l0eS0xMDAgcGVlci1mb2N1czp0cmFuc2xhdGUteC0wIFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHB4LTEgdGV4dC1jZW50ZXJgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC10aGVtZS1zdHJvbmcgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBUaGVtZSBDb2xvclxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtY3lhblwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBwLTEgdy0yNCBmbGV4IGN1cnNvci1wb2ludGVyIHRleHQtbWQgYmctY3lhbi02MDAgbXktMSByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEN5YW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtYW1iZXJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcC0xIHctMjQgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LW1kIGJnLWFtYmVyLTYwMCBteS0xIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQW1iZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtaW5kaWdvXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHAtMSB3LTI0IGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1tZCBiZy1pbmRpZ28tNjAwIG15LTEgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBJbmRpZ29cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtc2xhdGVcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcC0xIHctMjQgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LW1kIGJnLXNsYXRlLTYwMCBteS0xIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2xhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtc3RvbmVcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcC0xIHctMjQgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LW1kIGJnLXN0b25lLTYwMCBteS0xIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3RvbmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZmlJY29ucyBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxuY29uc3QgRHluYW1pY0ljb246IEZDPHsgaWNvbjogc3RyaW5nOyBjbGFzc05hbWU6IHN0cmluZyB9PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IC4uLmljb25zIH0gPSBmaUljb25zO1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IFRoZUljb246IEpTWC5FbGVtZW50ID0gaWNvbnNbcHJvcHMuaWNvbl07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEB0cy1pZ25vcmUgKi99XG4gICAgICA8VGhlSWNvbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNJY29uO1xuIiwgImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEljb25NZW51IGZyb20gXCIuL2ljb25tZW51XCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi9tZW51YmFyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgbWVudUl0ZW1zIHtcbiAgaWNvbjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbk1lbnVJdGVtcyB7XG4gIGljb246IHN0cmluZztcbiAgbWVudXM6IG1lbnVJdGVtc1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVCYXJJdGVtcyB7XG4gIGhyZWY6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgTmF2QmFyOiBGQzx7XG4gIE1vZHVsZUl0ZW1zPzogSWNvbk1lbnVJdGVtcztcbiAgQ29udHJvbEl0ZW1zPzogSWNvbk1lbnVJdGVtcztcbiAgTWVudUl0ZW1zPzogTWVudUJhckl0ZW1zW107XG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBtb2R1bGVJdGVtcyA9ICFwcm9wcy5Nb2R1bGVJdGVtc1xuICAgID8ge1xuICAgICAgICBpY29uOiBcIkZpQ3B1XCIsXG4gICAgICAgIG1lbnVzOiBbeyBpY29uOiBcIkZpSG9tZVwiLCB0aXRsZTogXCJIb21lXCIsIGhyZWY6IFwiL1wiIH1dLFxuICAgICAgfVxuICAgIDogcHJvcHMuTW9kdWxlSXRlbXM7XG5cbiAgY29uc3QgY29udHJvbEl0ZW1zID0gIXByb3BzLkNvbnRyb2xJdGVtc1xuICAgID8ge1xuICAgICAgICBpY29uOiBcIkZpVXNlclwiLFxuICAgICAgICBtZW51czogW3sgaWNvbjogXCJGaUxvZ0luXCIsIHRpdGxlOiBcIkxvZ2luXCIsIGhyZWY6IFwiL2F1dGgvbG9naW5cIiB9XSxcbiAgICAgIH1cbiAgICA6IHByb3BzLkNvbnRyb2xJdGVtcztcblxuICBjb25zdCBtZW51SXRlbXMgPSAhcHJvcHMuTWVudUl0ZW1zXG4gICAgPyBbXG4gICAgICAgIHsgaHJlZjogXCIvXCIsIHRpdGxlOiBcIlJpc3RhbWF5YVwiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL3BsYXlncm91bmRcIiwgdGl0bGU6IFwiUGxheWdyb3VuZFwiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL3R1dG9yaWFsXCIsIHRpdGxlOiBcIlR1dG9yaWFsXCIgfSxcbiAgICAgICAgeyBocmVmOiBcIi9zaGFyZWQvbXlwcm9qZWN0c1wiLCB0aXRsZTogXCJNeSBQcm9qZWN0c1wiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL2Fib3V0XCIsIHRpdGxlOiBcIkFib3V0XCIgfSxcbiAgICAgIF1cbiAgICA6IHByb3BzLk1lbnVJdGVtcztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwiTmF2QmFyXCJcbiAgICAgIGNsYXNzTmFtZT17YGZpeGVkIGJnLXRoZW1lLWZpbGwgdGV4dC10aGVtZS1iYXNlIGZsZXggaC0xNiB3LXNjcmVlbiBzaGFkb3ctbWQgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB6LTUwYH1cbiAgICA+XG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgb25sZWZ0PXt0cnVlfVxuICAgICAgICBpY29uPXttb2R1bGVJdGVtcy5pY29ufVxuICAgICAgICBwYXJlbnRDbGFzcz1cInctOCBoLThcIlxuICAgICAgICBjaGlsZENsYXNzPVwidy02IGgtNlwiXG4gICAgICAgIG1lbnVJdGVtPXttb2R1bGVJdGVtcy5tZW51c31cbiAgICAgIC8+XG5cbiAgICAgIDxNZW51QmFyIExpbmtJdGVtcz17bWVudUl0ZW1zfSAvPlxuXG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgb25sZWZ0PXtmYWxzZX1cbiAgICAgICAgaWNvbj17Y29udHJvbEl0ZW1zLmljb259XG4gICAgICAgIHBhcmVudENsYXNzPVwidy04IGgtOFwiXG4gICAgICAgIGNoaWxkQ2xhc3M9XCJ3LTYgaC02XCJcbiAgICAgICAgbWVudUl0ZW09e2NvbnRyb2xJdGVtcy5tZW51c31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IER5bmFtaWNJY29uIGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9keW5hbWljaWNvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIHtcbiAgaWNvbjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59XG5cbmNvbnN0IEljb25NZW51OiBGQzx7XG4gIG9ubGVmdDogYm9vbGVhbjtcbiAgaWNvbjogc3RyaW5nO1xuICBwYXJlbnRDbGFzcz86IHN0cmluZztcbiAgY2hpbGRDbGFzczogc3RyaW5nO1xuICBtZW51SXRlbTogTWVudUl0ZW1bXTtcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtID0gIXByb3BzLm1lbnVJdGVtXG4gICAgPyBbeyB0aXRsZTogXCJEdW1teVwiLCBpY29uOiBcIkZpVXNlclwiLCBocmVmOiBcIi9cIiB9XVxuICAgIDogcHJvcHMubWVudUl0ZW07XG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy0xNiBoLWF1dG8gbS0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgc2V0T3Blbk1lbnUodHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy1maXQgaC1maXQgcC0yIHJvdW5kZWQtZnVsbCBob3ZlcjpzY2FsZS05NSBwZWVyXCJcbiAgICAgID5cbiAgICAgICAgPER5bmFtaWNJY29uIGljb249e3Byb3BzLmljb259IGNsYXNzTmFtZT17YCR7cHJvcHMucGFyZW50Q2xhc3N9YH0gLz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7b3Blbk1lbnUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJJY29uTWVudXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHotNDAgZmxleC1yb3cgdG9wLTEyIGJnLXRoZW1lLW11dGVkIHctYXV0byBoLWF1dG8gbWF4LWgtW2NhbGMoMTAwdmgtNzRweCldIG92ZXJmbG93LWF1dG8gYm9yZGVyIGJvcmRlci10aGVtZS1ib3JkZXIgcGwtMiBwci05IHB5LTMgbXgtMiByb3VuZGVkLW1kIHNoYWRvdy1tZFxuICAgICAgICAgIGludmlzaWJsZSBvcGFjaXR5LTAgLXRyYW5zbGF0ZS15LWZ1bGwgaG92ZXI6dmlzaWJsZSBob3ZlcjpvcGFjaXR5LTEwMCBob3Zlcjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6dmlzaWJsZSBwZWVyLWZvY3VzOm9wYWNpdHktMTAwIHBlZXItZm9jdXM6dHJhbnNsYXRlLXktMFxuICAgICAgICAgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBzcGFjZS15LTIgJHtcbiAgICAgICAgICAgIHByb3BzLm9ubGVmdCA/IFwibGVmdC0wXCIgOiBcInJpZ2h0LTBcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge21lbnVJdGVtLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17aW5kZXh9IHRvPXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gc2V0T3Blbk1lbnUoIW9wZW5NZW51KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBmbGV4IGN1cnNvci1wb2ludGVyIHRleHQtc21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPER5bmFtaWNJY29uXG4gICAgICAgICAgICAgICAgICBpY29uPXtpdGVtLmljb259XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3Byb3BzLmNoaWxkQ2xhc3N9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbk1lbnU7XG4iLCAiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rSXRlbSBmcm9tIFwiLi9saW5raXRlbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtTb3VyY2Uge1xuICBocmVmOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1lbnVCYXI6IEZDPHsgTGlua0l0ZW1zPzogTGlua1NvdXJjZVtdIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IExpbmtJdGVtcyA9ICFwcm9wcy5MaW5rSXRlbXNcbiAgICA/IFt7IGhyZWY6IFwiL1wiLCB0aXRsZTogXCJSSVNUQU1BXCIgfV1cbiAgICA6IHByb3BzLkxpbmtJdGVtcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cIk1lbnVCYXJcIlxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgdy1maXQgaXRlbXMtY2VudGVyIG92ZXJmbG93LWF1dG8gb3ZlcmZsb3cteS1oaWRkZW5cIlxuICAgID5cbiAgICAgIHtMaW5rSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8TGlua0l0ZW0ga2V5PXtpbmRleH0gaHJlZj17aXRlbS5ocmVmfSB0aXRsZT17aXRlbS50aXRsZX0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUJhcjtcbiIsICIvLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuY29uc3QgTGlua0l0ZW06IEZDPHsgaHJlZjogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e3Byb3BzLmhyZWZ9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cIk1lbnVJdGVtXCJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLTE2IHctYXV0byBweC0yIGl0ZW1zLWNlbnRlciBhY3RpdmU6dGV4dC10aGVtZS1pbnZlcnRlZCBob3Zlcjp0ZXh0LXRoZW1lLXN0cm9uZyBncm91cFwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBoLTAgdy1mdWxsIGJnLXRoZW1lLW11dGVkIGJnLW9wYWNpdHktMjAgcm91bmRlZC1zbSBncm91cC1ob3ZlcjpoLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNzAwXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC0wIHctZnVsbCBiZy10aGVtZS1tdXRlZCBiZy1vcGFjaXR5LTUgcm91bmRlZC1zbSBncm91cC1ob3ZlcjpoLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNzAwXCI+PC9zcGFuPlxuXG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtJdGVtO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gTXlQcm9qZWN0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15UHJvamVjdHM7XG4iLCAiZnVuY3Rpb24gV29ya09uSXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXRoZW1lLXN0cm9uZyB0ZXh0LTJ4bCBtLWF1dG8gbXQtM1wiPlxuICAgICAgU29ycnksIEknbSBzdGlsbCB3b3JraW5nIG9uIGl0XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1nMS5wbmdcIiBjbGFzc05hbWU9XCJtdC0xMCBtLWF1dG8gb2JqZWN0LWNvdmVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya09uSXQ7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBUdXRvcmlhbFNoYXJlZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR1dG9yaWFsU2hhcmVkO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsICJpbXBvcnQgeyBMaW5rLCBNZXRhRnVuY3Rpb24sIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExpbmtJdGVtIGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9saW5raXRlbVwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJSaXN0YW1heWF8UGxheWdyb3VuZFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5Z3JvdW5kKCkge1xuICBjb25zdCBjbGFzc05hbWVMaW5rID0gXCJoLTkgdy00MCBmb250LXNlbWlib2xkXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHRleHQtdGhlbWUtYmFzZSB6LTBcIj5cbiAgICAgIHsvKiBTaWRlYmFyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBibG9jayB3LTI4IGgtW2NhbGMoMTAwJS02NHB4KV0gYmctdGhlbWUtZmlsbCB6LTIwIHNoYWRvdy1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtdGhlbWUtc3Ryb25nIHRleHQteGwgZm9udC1zZW1pYm9sZCBtdC0zIG1iLTYgcGwtMlwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3NoYXJlZC9wbGF5Z3JvdW5kXCI+TXkgU3R1ZmZzPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJTaGFyZWRDb21wU0JcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtW2NhbGMoMTAwJS0xNDBweCldIHRleHQteHMgZm9udC1zZW1pYm9sZCBvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIHBsLTJcIlxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtJdGVtIHRvPVwiLi9sYXlvdXRcIiB0aXRsZT1cIkxheW91dFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua30gLz5cbiAgICAgICAgICA8TGlua0l0ZW0gdG89XCIuL2lucHV0XCIgdGl0bGU9XCJpbnB1dFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua30gLz5cbiAgICAgICAgICA8TGlua0l0ZW0gdG89XCIuL2J1dHRvblwiIHRpdGxlPVwiQnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfSAvPlxuICAgICAgICAgIDxMaW5rSXRlbSB0bz1cIi4vdGFibGVcIiB0aXRsZT1cIlRhYmxlXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfSAvPlxuICAgICAgICAgIDxMaW5rSXRlbVxuICAgICAgICAgICAgdG89XCIuL2R5bmFtaWNpY29uXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRHluYW1pYyBJY29uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaW5rSXRlbVxuICAgICAgICAgICAgdG89XCIuL3RyZWV2aWV3XCJcbiAgICAgICAgICAgIHRpdGxlPVwiVHJlZXZpZXdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtdGhlbWUtc3Ryb25nIHRleHQteHMgZm9udC1zZW1pYm9sZCBtdC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgUmVhY3QuSlMgKyBUYWlsd2luZCBDU1NcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggbGVmdC00MCB3LVtjYWxjKDEwMCUtMTkycHgpXSBoLWF1dG8gcC0yIHotMTBcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmNvbnN0IExpbmtJdGVtOiBGQzx7IHRvOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH0+ID0gKFxuICBwcm9wc1xuKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e3Byb3BzLnRvfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJNZW51SXRlbVwiXG4gICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGFjdGl2ZTp0ZXh0LXRoZW1lLWludmVydGVkIGhvdmVyOnRleHQtdGhlbWUtc3Ryb25nIGdyb3VwICR7cHJvcHMuY2xhc3NOYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaC1mdWxsIHctMCBiZy10aGVtZS1tdXRlZCBiZy1vcGFjaXR5LTIwIHJvdW5kZWQtc20gZ3JvdXAtaG92ZXI6dy1bY2FsYygxMDAlKzEwMHB4KV0gdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNTAwXCI+PC9zcGFuPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rSXRlbTtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIER5bmFtaWNJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0ljb247XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBGb3JtQ29udHJvbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gVHJlZXZpZXcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVldmlldztcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIExheW91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIENvbXBvbmVudHNTaGFyZWQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciBtLWF1dG9cIj5cbiAgICAgIExldCdzIGV4cGxvcmUgbXkgVUkgQ29tcG9uZW50c1xuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZzIucG5nXCIgY2xhc3NOYW1lPVwibXktNiBteC1hdXRvIG9iamVjdC1maWxsXCIgLz5cbiAgICAgIEp1c3Qgc2VsZWN0IG9uIGxlZnQgc2lkZWJhclxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRzU2hhcmVkO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gSW5wdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIFRhYmxlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBTaGFyZWRJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlZEluZGV4O1xuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9pbnB1dFwiO1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvZ2luTWVzc2FnZSwgc2V0TG9naW5NZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYnRuRGlzYWJsZSwgc2V0QnRuRGlzYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtlZmZlY3QsIHNldEVmZmVjdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9naW5IYW5kbGVyKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vY2FsbCBhcGlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9jayB3LTgwIGgtZml0IHRvcC04IGJnLXRoZW1lLW11dGVkIG0tYXV0byBweC0zIHB5LTUgcm91bmRlZC1tZCBkcm9wLXNoYWRvdy1tZCBib3JkZXIgYm9yZGVyLXRoZW1lLWJvcmRlclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtY2VudGVyIG1iLTEwIHRleHQtNHhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgTG9naW5cbiAgICAgIDwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17bG9naW5IYW5kbGVyfT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGxhYmVsPVwiVXNlciBOYW1lXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgIHNldFVzZXJOYW1lKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJMb2dpblwiIGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICAgIHtsb2dpbk1lc3NhZ2UgJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcm9zZS02MDAgdGV4dC1vcGFjaXR5LTQwXCI+e2xvZ2luTWVzc2FnZX08L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwgImltcG9ydCBSZWFjdCwgeyBGb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb24sIEJ1dHRvbkhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIEJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uOiBGb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb248SFRNTElucHV0RWxlbWVudCwgQnV0dG9uUHJvcHM+ID0gKFxuICB7IGxhYmVsLCBjbGFzc05hbWUsIC4uLm90aGVyUHJvcHMgfSxcbiAgcmVmXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggYmctdGhlbWUtYnV0dG9uLWFjY2VudCBoLTggdy0zMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3V0bGluZS1ub25lIHJvdW5kZWQtbWQgaG92ZXI6YmctdGhlbWUtYnV0dG9uLWFjY2VudC1ob3ZlclwiXG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiIsICJpbXBvcnQgeyBGb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb24sIElucHV0SFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBjbGFzc05hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IElucHV0OiBGb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb248SFRNTElucHV0RWxlbWVudCwgSW5wdXRQcm9wcz4gPSAoXG4gIHsgbmFtZSwgbGFiZWwsIGNsYXNzTmFtZSwgLi4ub3RoZXJQcm9wcyB9LFxuICByZWZcbikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBteS0yXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ6LTEwIGFic29sdXRlIHB4LTEgLXRvcC1bNnB4XSBsZWZ0LTIgcm91bmRlZC1zbSBiZy10aGVtZS1tdXRlZCB0ZXh0LXNtIHRleHQtdGhlbWUtbXV0ZWQgbGVhZGluZy10aWdodFwiPlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L3NwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIGNsYXNzTmFtZT1cInotMCByZWxhdGl2ZSB3LWZ1bGwgaC0xMCBwdC0zIHBiLTIgcHgtMiBteS0xIHRleHQtdGhlbWUtYmFzZSBiZy10cmFuc3BhcmVudCBvdXRsaW5lLW5vbmUgYm9yZGVyIGJvcmRlci10aGVtZS1ib3JkZXIgcm91bmRlZC1tZCBwbGFjZWhvbGRlcjp0ZXh0LXRoZW1lLW11dGVkXCJcbiAgICAgID48L2lucHV0PlxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzbTpmbGV4IGZsZXgtd2FycCB3LWZ1bGwgdGV4dC10aGVtZS1iYXNlIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgcHgtMTAgcHktN1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9pbWczLnBuZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2NhbGUtNzUgc206c2NhbGUtMTAwIG0tYXV0byBvYmplY3QtY292ZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtbGcgbWItMVwiPlxuICAgICAgICAgIEhlbGxvIHRoZXJlIEknbXtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTp0ZXh0LW1kIHRleHQtYmFzZSBzbTp0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIEFuamFye1wiIFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBJIGNhbGwgdGhpc1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOnRleHQtbWQgdGV4dC1iYXNlIHNtOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgUklTVEFNQVlBLHtcIiBcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgaXQganVzdCBteSBwZXJzb25hbCB3ZWJzaXRlIGJ1aWx0IGJ5XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPi0gUmVtaXggSlMgd2l0aCBUeXBlc2NyaXB0PC9saT5cbiAgICAgICAgICAgIDxsaT4tIFRhaWx3aW5kIENTUzwvbGk+XG4gICAgICAgICAgICA8bGk+LSBNb25nb0RCPC9saT5cbiAgICAgICAgICAgIDxsaT4tIEFuZCBNb3JlPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIFRoYW5rcyBhIGxvdCBmb3IgdmlzaXRpbmcgcGxlYXNlIHRha2UgYSBsb29rIHdoYXQncyBnb2luZyBvbiBoZXJlXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNtOmZsZXggZmxleC13YXJwIHctZnVsbCB0ZXh0LXRoZW1lLWJhc2UgaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBweC0xMCBweS03XCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ltZzMucG5nXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzY2FsZS03NSBzbTpzY2FsZS0xMDAgbS1hdXRvIG9iamVjdC1jb3ZlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC1sZyBtYi0xXCI+XG4gICAgICAgICAgSGVsbG8gdGhlcmUgSSdte1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOnRleHQtbWQgdGV4dC1iYXNlIHNtOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgQW5qYXJ7XCIgXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIEkgY2FsbCB0aGlzXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206dGV4dC1tZCB0ZXh0LWJhc2Ugc206dGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBSSVNUQU1BWUEse1wiIFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBpdCBqdXN0IG15IHBlcnNvbmFsIHdlYnNpdGUgYnVpbHQgYnlcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+LSBSZW1peCBKUyB3aXRoIFR5cGVzY3JpcHQ8L2xpPlxuICAgICAgICAgICAgPGxpPi0gVGFpbHdpbmQgQ1NTPC9saT5cbiAgICAgICAgICAgIDxsaT4tIE1vbmdvREIgd2l0aCBQcmlzbWEgT1JNPC9saT5cbiAgICAgICAgICAgIDxsaT4tIEFuZCBNb3JlPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIFRoYW5rcyBhIGxvdCBmb3IgdmlzaXRpbmcgcGxlYXNlIHRha2UgYSBsb29rIHdoYXQncyBnb2luZyBvbiBoZXJlXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzU1YTkyZmViJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1RSkxCSlZSRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSFBTSVRIRVcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LM0FaWUdQWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNUpLUUZSVUguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2xvZ2luJzp7J2lkJzoncm91dGVzL2F1dGgvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9sb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2xvZ2luLVdUTjc1S1hNLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29yZS9pbmRleCc6eydpZCc6J3JvdXRlcy9jb3JlL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvcmUnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvcmUvaW5kZXgtQlZGM0k2VlkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1ZU1ZMQ0E1WS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9hYm91dC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL2Fib3V0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgtRDVVUUpaUjUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlZCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2luZGV4LUpZS0dMWDVFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL215cHJvamVjdHMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4LUg0Wko0WDRLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL3BsYXlncm91bmQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQtUUVOREFTRlouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9idXR0b24nOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvYnV0dG9uJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzonYnV0dG9uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2J1dHRvbi1XVTZHTUs0Mi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uJzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzonZHluYW1pY2ljb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZHluYW1pY2ljb24tN1pQT0VMVVQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9mb3JtY29udHJvbCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9mb3JtY29udHJvbCcsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGF0aCc6J2Zvcm1jb250cm9sJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2Zvcm1jb250cm9sLVVKV09NWUFQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbmRleC1IRktDRTNGVS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2lucHV0Jzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2lucHV0JywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzonaW5wdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5wdXQtSU5PUUVEWVAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9sYXlvdXQnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvbGF5b3V0JywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzonbGF5b3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2xheW91dC00Q0dMVzZLSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RhYmxlJzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RhYmxlJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzondGFibGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdGFibGUtT1JPRkNGM0ouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90cmVldmlldyc6eydpZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90cmVldmlldycsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGF0aCc6J3RyZWV2aWV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RyZWV2aWV3LVJGUFU0VTNOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3R1dG9yaWFsL2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaGFyZWQvdHV0b3JpYWwnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleC1SUlBZTUtXNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9idWlsZC9tYW5pZmVzdC01NUE5MkZFQi5qcyd9OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxzQ0FBc0M7QUFBQSxNQUNuRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG1DQUFtQztBQUFBLE1BQ2hFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFHakMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLGdCQUFnQixRQUFRO0FBSTVCLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLGlCQUFpQjtBQUFBLE1BQzlDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxZQUFZO0FBQUEsTUFDekMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUcxQyxBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7QUFBQSxNQUN4QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxl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
