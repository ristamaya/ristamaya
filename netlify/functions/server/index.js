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
var tailwind_default = "/build/_assets/tailwind-QTPLPZ2F.css";

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
var Input2 = (_a, ref) => {
  var _b = _a, { label, className, errorMessage } = _b, otherProps = __objRest(_b, ["label", "className", "errorMessage"]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative flex m-2 w-fit h-fit items-center"
  }, /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues({}, otherProps), {
    className: "z-0 relative min-w-10 min-h-8 pt-1 pb-1 px-1 my-1 text-theme-base bg-transparent outline-none border border-theme-border rounded-[4px] placeholder:text-theme-muted invalid:border-theme-warning peer"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "z-10 absolute px-[2px] -top-[5px] left-2 rounded-sm bg-theme-muted leading-none text-sm text-theme-base peer-invalid:text-theme-warning"
  }, label), errorMessage && /* @__PURE__ */ React.createElement("span", {
    className: "z-10 absolute px-[2px] -top-[5px] right-1 rounded-full bg-theme-muted text-sm text-theme-warning leading-none"
  }, errorMessage));
};

// app/application/uicomponents/button/index.tsx
init_react();
var import_react8 = __toESM(require("react"));
var Button2 = (_a, ref) => {
  var _b = _a, { label, className } = _b, otherProps = __objRest(_b, ["label", "className"]);
  return /* @__PURE__ */ import_react8.default.createElement("button", __spreadProps(__spreadValues({}, otherProps), {
    className: "relative flex bg-theme-button-accent h-8 w-32 items-center justify-center outline-none rounded-md hover:bg-theme-button-accent-hover"
  }), label);
};

// route:/home/ristama/projects/ristamaya/app/routes/core/menus/index.tsx
var import_react9 = require("react");
function Menus() {
  const [errorMessage, setErrorMessage] = (0, import_react9.useState)("");
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative items-center justify-center p-5"
  }, /* @__PURE__ */ React.createElement(import_remix7.Form, {
    className: "relative border rounded-md shadow-md p-4 w-fit h-fit m-auto bg-theme-muted",
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-3 mb-9 text-center text-theme-strong text-lg "
  }, "Menu Editor"), /* @__PURE__ */ React.createElement(Input2, {
    name: "parent",
    label: "Parent",
    className: "w-28",
    errorMessage
  }), /* @__PURE__ */ React.createElement(Input2, {
    name: "title",
    label: "Title",
    className: "w-28",
    errorMessage
  }), /* @__PURE__ */ React.createElement(Input2, {
    name: "title",
    label: "Title",
    className: "w-28",
    errorMessage
  }), /* @__PURE__ */ React.createElement(Input2, {
    name: "title",
    label: "Title",
    className: "w-28",
    errorMessage
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button2, {
    className: "w-18",
    label: "Save"
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
var import_react10 = require("react");
function Login() {
  const [username, setUserName] = (0, import_react10.useState)("");
  const [password, setPassword] = (0, import_react10.useState)("");
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative block w-fit h-fit top-8 items-center justify-center bg-theme-muted m-auto px-3 py-5 rounded-md drop-shadow-md border border-theme-border"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "relative text-center mb-10 text-4xl font-semibold"
  }, "Login"), /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post"
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
    className: ""
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
var assets_manifest_default = { "version": "76a8013e", "entry": { "module": "/build/entry.client-VQ7QTZA6.js", "imports": ["/build/_shared/chunk-OWRJK3K6.js", "/build/_shared/chunk-K3AZYGPX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2RTYS3YT.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-7DTWJIZX.js", "imports": ["/build/_shared/chunk-TOBMHUSJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/index": { "id": "routes/core/index", "parentId": "root", "path": "core", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/index-BVF3I6VY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/menus/index": { "id": "routes/core/menus/index", "parentId": "root", "path": "core/menus", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/menus/index-5E5QSRIM.js", "imports": ["/build/_shared/chunk-TOBMHUSJ.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-YSVLCA5Y.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/about/index": { "id": "routes/shared/about/index", "parentId": "root", "path": "shared/about", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/about/index-D5UQJZR5.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/index": { "id": "routes/shared/index", "parentId": "root", "path": "shared", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/index-JYKGLX5E.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/myprojects/index": { "id": "routes/shared/myprojects/index", "parentId": "root", "path": "shared/myprojects", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/myprojects/index-H4ZJ4X4K.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground": { "id": "routes/shared/playground", "parentId": "root", "path": "shared/playground", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground-A26O6W43.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/button": { "id": "routes/shared/playground/button", "parentId": "routes/shared/playground", "path": "button", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/button-WU6GMK42.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/dynamicicon": { "id": "routes/shared/playground/dynamicicon", "parentId": "routes/shared/playground", "path": "dynamicicon", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/dynamicicon-7ZPOELUT.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/formcontrol": { "id": "routes/shared/playground/formcontrol", "parentId": "routes/shared/playground", "path": "formcontrol", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/formcontrol-UJWOMYAP.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/index": { "id": "routes/shared/playground/index", "parentId": "routes/shared/playground", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/playground/index-HFKCE3FU.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/input": { "id": "routes/shared/playground/input", "parentId": "routes/shared/playground", "path": "input", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/input-INOQEDYP.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/layout": { "id": "routes/shared/playground/layout", "parentId": "routes/shared/playground", "path": "layout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/layout-4CGLW6KI.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/table": { "id": "routes/shared/playground/table", "parentId": "routes/shared/playground", "path": "table", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/table-OROFCF3J.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/playground/treeview": { "id": "routes/shared/playground/treeview", "parentId": "routes/shared/playground", "path": "treeview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/playground/treeview-RFPU4U3N.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/tutorial/index": { "id": "routes/shared/tutorial/index", "parentId": "root", "path": "shared/tutorial", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/tutorial/index-RRPYMKW7.js", "imports": ["/build/_shared/chunk-RQJMVAZD.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-76A8013E.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3Jvb3QudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0L2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29udGV4dC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9sYXlvdXQvZmxvYXRjb250cm9sL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2R5bmFtaWNpY29uL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2xheW91dC9uYXZiYXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0L25hdmJhci9pY29ubWVudS9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL21lbnViYXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGF5b3V0L25hdmJhci9tZW51YmFyL2xpbmtpdGVtL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0L2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvbGlua2l0ZW0vaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZHluYW1pY2ljb24udHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZm9ybWNvbnRyb2wudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdHJlZXZpZXcudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvYnV0dG9uLnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2xheW91dC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbnB1dC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90YWJsZS50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9jb3JlL21lbnVzL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2lucHV0L2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vdWljb21wb25lbnRzL2J1dHRvbi9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9jb3JlL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXIsXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2Zvcm1jb250cm9sLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RyZWV2aWV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2J1dHRvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9sYXlvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbnB1dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdGFibGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2NvcmUvbWVudXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTUgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvY29yZS9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVkL215cHJvamVjdHNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWQvdHV0b3JpYWxcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9hYm91dC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWQvYWJvdXRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9keW5hbWljaWNvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiBcImR5bmFtaWNpY29uXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9mb3JtY29udHJvbFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZm9ybWNvbnRyb2xcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZFwiLFxuICAgICAgcGF0aDogXCJmb3JtY29udHJvbFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdHJlZXZpZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RyZWV2aWV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwidHJlZXZpZXdcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2J1dHRvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvYnV0dG9uXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwiYnV0dG9uXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9sYXlvdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2xheW91dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kXCIsXG4gICAgICBwYXRoOiBcImxheW91dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5wdXRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2lucHV0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmRcIixcbiAgICAgIHBhdGg6IFwiaW5wdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTFcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90YWJsZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdGFibGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvcGxheWdyb3VuZFwiLFxuICAgICAgcGF0aDogXCJ0YWJsZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL2NvcmUvbWVudXMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NvcmUvbWVudXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29yZS9tZW51c1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL2xvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE1XG4gICAgfSxcbiAgXCJyb3V0ZXMvY29yZS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29yZS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb3JlXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIlJpc3RhbWF5YXxIb21lXCIgfTtcbn07XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbi8vICAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbi8vIH1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9sYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiZmF2aWNvblwiIGhyZWY9XCJmYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExheW91dFByb3ZpZGVyIH0gZnJvbSBcIi4vbGF5b3V0LmNvbnRleHRcIjtcbmltcG9ydCB7IEZsb2F0Q29udHJvbCB9IGZyb20gXCIuL2Zsb2F0Y29udHJvbFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi9uYXZiYXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIGNvbnN0IFt1c2VUaGVtZSwgc2V0VXNlVGhlbWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0UHJvdmlkZXIgdmFsdWU9e3sgdXNlVGhlbWUsIHNldFVzZVRoZW1lIH19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3VzZVRoZW1lfWB9PlxuICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDxtYWluXG4gICAgICAgICAgaWQ9XCJNYWluQ29udGVudFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgYmxvY2sgYmctdGhlbWUtbXV0ZWQgb3ZlcmZsb3ctYXV0byB0b3AtMTYgdy1zY3JlZW4gaC1bY2FsYygxMDAlLTY0cHgpXSB6LTQwYH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8ZGl2IGlkPVwiVGhlbWVDaGFuZ2VyXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCB6LTUwXCI+XG4gICAgICAgICAgPEZsb2F0Q29udHJvbCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0UHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgdGhlbWVDb250ZXh0IHtcbiAgdXNlVGhlbWU6IFN0cmluZztcbiAgc2V0VXNlVGhlbWU6IGFueTtcbn1cblxuY29uc3QgZGVmYXVsdENvbnRleHQgPSB7XG4gIHVzZVRoZW1lOiBcInJvb3RcIixcbiAgc2V0VXNlVGhlbWU6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgTGF5b3V0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8dGhlbWVDb250ZXh0PihkZWZhdWx0Q29udGV4dCk7XG5leHBvcnQgY29uc3QgTGF5b3V0UHJvdmlkZXIgPSBMYXlvdXRDb250ZXh0LlByb3ZpZGVyO1xuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IER5bmFtaWNJY29uIGZyb20gXCIuLi8uLi9keW5hbWljaWNvblwiO1xuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gXCIuLi9sYXlvdXQuY29udGV4dFwiO1xuXG5leHBvcnQgY29uc3QgRmxvYXRDb250cm9sID0gKCkgPT4ge1xuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCB7IHNldFVzZVRoZW1lIH0gPSB1c2VDb250ZXh0KExheW91dENvbnRleHQpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy10aGVtZS1tdXRlZCBib3JkZXItdGhlbWUtYm9yZGVyIG0tMyBwLTEgcm91bmRlZC1mdWxsIGJvcmRlciBoLWZpdCB3LWZpdFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgc2V0T3Blbk1lbnUodHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy1maXQgaC1maXQgcm91bmRlZC1mdWxsIGhvdmVyOm9wYWNpdHktODAgcGVlclwiXG4gICAgICA+XG4gICAgICAgIDxEeW5hbWljSWNvbiBpY29uPVwiRmlTbGFja1wiIGNsYXNzTmFtZT1cInctNyBoLTdcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICB7b3Blbk1lbnUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgei00MCBmbGV4LXJvdyBib3R0b20tWzQwcHhdIHJpZ2h0LTAgYmctdGhlbWUtbXV0ZWQgdy1maXQgaC1maXQgbWF4LWgtW2NhbGMoMTAwdmgtNzRweCldIG92ZXJmbG93LWF1dG8gYm9yZGVyIGJvcmRlci10aGVtZS1ib3JkZXIgbXgtMiByb3VuZGVkLW1kIHNoYWRvdy1tZFxuICAgICAgICAgICAgaW52aXNpYmxlIG9wYWNpdHktMCAtdHJhbnNsYXRlLXgtZnVsbCBob3Zlcjp2aXNpYmxlIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOnRyYW5zbGF0ZS14LTAgcGVlci1mb2N1czp2aXNpYmxlIHBlZXItZm9jdXM6b3BhY2l0eS0xMDAgcGVlci1mb2N1czp0cmFuc2xhdGUteC0wIFxuICAgICAgICAgICAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHB4LTEgdGV4dC1jZW50ZXJgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC10aGVtZS1zdHJvbmcgdGV4dC1zbSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICBUaGVtZSBDb2xvclxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtY3lhblwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBwLTEgdy0yNCBmbGV4IGN1cnNvci1wb2ludGVyIHRleHQtbWQgYmctY3lhbi02MDAgbXktMSByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEN5YW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtYW1iZXJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcC0xIHctMjQgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LW1kIGJnLWFtYmVyLTYwMCBteS0xIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQW1iZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtaW5kaWdvXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHAtMSB3LTI0IGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1tZCBiZy1pbmRpZ28tNjAwIG15LTEgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBJbmRpZ29cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtc2xhdGVcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcC0xIHctMjQgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LW1kIGJnLXNsYXRlLTYwMCBteS0xIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU2xhdGVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgIHNldFVzZVRoZW1lKFwidGhlbWUtc3RvbmVcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcC0xIHctMjQgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LW1kIGJnLXN0b25lLTYwMCBteS0xIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3RvbmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZmlJY29ucyBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcblxuY29uc3QgRHluYW1pY0ljb246IEZDPHsgaWNvbjogc3RyaW5nOyBjbGFzc05hbWU6IHN0cmluZyB9PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IC4uLmljb25zIH0gPSBmaUljb25zO1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IFRoZUljb246IEpTWC5FbGVtZW50ID0gaWNvbnNbcHJvcHMuaWNvbl07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIEB0cy1pZ25vcmUgKi99XG4gICAgICA8VGhlSWNvbiBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNJY29uO1xuIiwgImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEljb25NZW51IGZyb20gXCIuL2ljb25tZW51XCI7XG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi9tZW51YmFyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgbWVudUl0ZW1zIHtcbiAgaWNvbjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSWNvbk1lbnVJdGVtcyB7XG4gIGljb246IHN0cmluZztcbiAgbWVudXM6IG1lbnVJdGVtc1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVCYXJJdGVtcyB7XG4gIGhyZWY6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgTmF2QmFyOiBGQzx7XG4gIE1vZHVsZUl0ZW1zPzogSWNvbk1lbnVJdGVtcztcbiAgQ29udHJvbEl0ZW1zPzogSWNvbk1lbnVJdGVtcztcbiAgTWVudUl0ZW1zPzogTWVudUJhckl0ZW1zW107XG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBtb2R1bGVJdGVtcyA9ICFwcm9wcy5Nb2R1bGVJdGVtc1xuICAgID8ge1xuICAgICAgICBpY29uOiBcIkZpQ3B1XCIsXG4gICAgICAgIG1lbnVzOiBbeyBpY29uOiBcIkZpSG9tZVwiLCB0aXRsZTogXCJIb21lXCIsIGhyZWY6IFwiL1wiIH1dLFxuICAgICAgfVxuICAgIDogcHJvcHMuTW9kdWxlSXRlbXM7XG5cbiAgY29uc3QgY29udHJvbEl0ZW1zID0gIXByb3BzLkNvbnRyb2xJdGVtc1xuICAgID8ge1xuICAgICAgICBpY29uOiBcIkZpVXNlclwiLFxuICAgICAgICBtZW51czogW3sgaWNvbjogXCJGaUxvZ0luXCIsIHRpdGxlOiBcIkxvZ2luXCIsIGhyZWY6IFwiL2F1dGgvbG9naW5cIiB9XSxcbiAgICAgIH1cbiAgICA6IHByb3BzLkNvbnRyb2xJdGVtcztcblxuICBjb25zdCBtZW51SXRlbXMgPSAhcHJvcHMuTWVudUl0ZW1zXG4gICAgPyBbXG4gICAgICAgIHsgaHJlZjogXCIvXCIsIHRpdGxlOiBcIlJpc3RhbWF5YVwiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL3BsYXlncm91bmRcIiwgdGl0bGU6IFwiUGxheWdyb3VuZFwiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL3R1dG9yaWFsXCIsIHRpdGxlOiBcIlR1dG9yaWFsXCIgfSxcbiAgICAgICAgeyBocmVmOiBcIi9zaGFyZWQvbXlwcm9qZWN0c1wiLCB0aXRsZTogXCJNeSBQcm9qZWN0c1wiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL2Fib3V0XCIsIHRpdGxlOiBcIkFib3V0XCIgfSxcbiAgICAgIF1cbiAgICA6IHByb3BzLk1lbnVJdGVtcztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwiTmF2QmFyXCJcbiAgICAgIGNsYXNzTmFtZT17YGZpeGVkIGJnLXRoZW1lLWZpbGwgdGV4dC10aGVtZS1iYXNlIGZsZXggaC0xNiB3LXNjcmVlbiBzaGFkb3ctbWQgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB6LTUwYH1cbiAgICA+XG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgb25sZWZ0PXt0cnVlfVxuICAgICAgICBpY29uPXttb2R1bGVJdGVtcy5pY29ufVxuICAgICAgICBwYXJlbnRDbGFzcz1cInctOCBoLThcIlxuICAgICAgICBjaGlsZENsYXNzPVwidy02IGgtNlwiXG4gICAgICAgIG1lbnVJdGVtPXttb2R1bGVJdGVtcy5tZW51c31cbiAgICAgIC8+XG5cbiAgICAgIDxNZW51QmFyIExpbmtJdGVtcz17bWVudUl0ZW1zfSAvPlxuXG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgb25sZWZ0PXtmYWxzZX1cbiAgICAgICAgaWNvbj17Y29udHJvbEl0ZW1zLmljb259XG4gICAgICAgIHBhcmVudENsYXNzPVwidy04IGgtOFwiXG4gICAgICAgIGNoaWxkQ2xhc3M9XCJ3LTYgaC02XCJcbiAgICAgICAgbWVudUl0ZW09e2NvbnRyb2xJdGVtcy5tZW51c31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IER5bmFtaWNJY29uIGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9keW5hbWljaWNvblwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVJdGVtIHtcbiAgaWNvbjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBocmVmOiBzdHJpbmc7XG59XG5cbmNvbnN0IEljb25NZW51OiBGQzx7XG4gIG9ubGVmdDogYm9vbGVhbjtcbiAgaWNvbjogc3RyaW5nO1xuICBwYXJlbnRDbGFzcz86IHN0cmluZztcbiAgY2hpbGRDbGFzczogc3RyaW5nO1xuICBtZW51SXRlbTogTWVudUl0ZW1bXTtcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtID0gIXByb3BzLm1lbnVJdGVtXG4gICAgPyBbeyB0aXRsZTogXCJEdW1teVwiLCBpY29uOiBcIkZpVXNlclwiLCBocmVmOiBcIi9cIiB9XVxuICAgIDogcHJvcHMubWVudUl0ZW07XG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy0xNiBoLWF1dG8gbS0xIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgc2V0T3Blbk1lbnUodHJ1ZSk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy1maXQgaC1maXQgcC0yIHJvdW5kZWQtZnVsbCBob3ZlcjpzY2FsZS05NSBwZWVyXCJcbiAgICAgID5cbiAgICAgICAgPER5bmFtaWNJY29uIGljb249e3Byb3BzLmljb259IGNsYXNzTmFtZT17YCR7cHJvcHMucGFyZW50Q2xhc3N9YH0gLz5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICB7b3Blbk1lbnUgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJJY29uTWVudXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHotNDAgZmxleC1yb3cgdG9wLTEyIGJnLXRoZW1lLW11dGVkIHctYXV0byBoLWF1dG8gbWF4LWgtW2NhbGMoMTAwdmgtNzRweCldIG92ZXJmbG93LWF1dG8gYm9yZGVyIGJvcmRlci10aGVtZS1ib3JkZXIgcGwtMiBwci05IHB5LTMgbXgtMiByb3VuZGVkLW1kIHNoYWRvdy1tZFxuICAgICAgICAgIGludmlzaWJsZSBvcGFjaXR5LTAgLXRyYW5zbGF0ZS15LWZ1bGwgaG92ZXI6dmlzaWJsZSBob3ZlcjpvcGFjaXR5LTEwMCBob3Zlcjp0cmFuc2xhdGUteS0wIHBlZXItZm9jdXM6dmlzaWJsZSBwZWVyLWZvY3VzOm9wYWNpdHktMTAwIHBlZXItZm9jdXM6dHJhbnNsYXRlLXktMFxuICAgICAgICAgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBzcGFjZS15LTIgJHtcbiAgICAgICAgICAgIHByb3BzLm9ubGVmdCA/IFwibGVmdC0wXCIgOiBcInJpZ2h0LTBcIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge21lbnVJdGVtLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17aW5kZXh9IHRvPXtpdGVtLmhyZWZ9PlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gc2V0T3Blbk1lbnUoIW9wZW5NZW51KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBmbGV4IGN1cnNvci1wb2ludGVyIHRleHQtc21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPER5bmFtaWNJY29uXG4gICAgICAgICAgICAgICAgICBpY29uPXtpdGVtLmljb259XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3Byb3BzLmNoaWxkQ2xhc3N9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbk1lbnU7XG4iLCAiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rSXRlbSBmcm9tIFwiLi9saW5raXRlbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmtTb3VyY2Uge1xuICBocmVmOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IE1lbnVCYXI6IEZDPHsgTGlua0l0ZW1zPzogTGlua1NvdXJjZVtdIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IExpbmtJdGVtcyA9ICFwcm9wcy5MaW5rSXRlbXNcbiAgICA/IFt7IGhyZWY6IFwiL1wiLCB0aXRsZTogXCJSSVNUQU1BXCIgfV1cbiAgICA6IHByb3BzLkxpbmtJdGVtcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cIk1lbnVCYXJcIlxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLWZ1bGwgdy1maXQgaXRlbXMtY2VudGVyIG92ZXJmbG93LWF1dG8gb3ZlcmZsb3cteS1oaWRkZW5cIlxuICAgID5cbiAgICAgIHtMaW5rSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICA8TGlua0l0ZW0ga2V5PXtpbmRleH0gaHJlZj17aXRlbS5ocmVmfSB0aXRsZT17aXRlbS50aXRsZX0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudUJhcjtcbiIsICIvLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuY29uc3QgTGlua0l0ZW06IEZDPHsgaHJlZjogc3RyaW5nOyB0aXRsZTogc3RyaW5nIH0+ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e3Byb3BzLmhyZWZ9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cIk1lbnVJdGVtXCJcbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLTE2IHctYXV0byBweC0yIGl0ZW1zLWNlbnRlciBhY3RpdmU6dGV4dC10aGVtZS1pbnZlcnRlZCBob3Zlcjp0ZXh0LXRoZW1lLXN0cm9uZyBncm91cFwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCBoLTAgdy1mdWxsIGJnLXRoZW1lLW11dGVkIGJnLW9wYWNpdHktMjAgcm91bmRlZC1zbSBncm91cC1ob3ZlcjpoLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNzAwXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC0wIHctZnVsbCBiZy10aGVtZS1tdXRlZCBiZy1vcGFjaXR5LTUgcm91bmRlZC1zbSBncm91cC1ob3ZlcjpoLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNzAwXCI+PC9zcGFuPlxuXG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtJdGVtO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gTXlQcm9qZWN0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15UHJvamVjdHM7XG4iLCAiZnVuY3Rpb24gV29ya09uSXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXRoZW1lLXN0cm9uZyB0ZXh0LTJ4bCBtLWF1dG8gbXQtM1wiPlxuICAgICAgU29ycnksIEknbSBzdGlsbCB3b3JraW5nIG9uIGl0XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1nMS5wbmdcIiBjbGFzc05hbWU9XCJtdC0xMCBtLWF1dG8gb2JqZWN0LWNvdmVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya09uSXQ7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBUdXRvcmlhbFNoYXJlZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR1dG9yaWFsU2hhcmVkO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gQWJvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiIsICJpbXBvcnQgeyBMaW5rLCBNZXRhRnVuY3Rpb24sIE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExpbmtJdGVtIGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9saW5raXRlbVwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJSaXN0YW1heWF8UGxheWdyb3VuZFwiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbGF5Z3JvdW5kKCkge1xuICBjb25zdCBjbGFzc05hbWVMaW5rID0gXCJoLTkgdy00MCBmb250LXNlbWlib2xkXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHRleHQtdGhlbWUtYmFzZSB6LTBcIj5cbiAgICAgIHsvKiBTaWRlYmFyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBibG9jayB3LTMyIGgtW2NhbGMoMTAwJS02NHB4KV0gYmctdGhlbWUtZmlsbCB6LTIwIHNoYWRvdy1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtdGhlbWUtc3Ryb25nIHRleHQteGwgZm9udC1zZW1pYm9sZCBtdC0zIG1iLTYgcGwtMlwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3NoYXJlZC9wbGF5Z3JvdW5kXCI+TXkgU3R1ZmZzPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJQbGF5Z3JvdW5kU0JcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtW2NhbGMoMTAwJS0xNDBweCldIHRleHQteHMgZm9udC1zZW1pYm9sZCBvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIHBsLTJcIlxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtJdGVtIHRvPVwiLi9sYXlvdXRcIiB0aXRsZT1cIkxheW91dFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua30gLz5cbiAgICAgICAgICA8TGlua0l0ZW0gdG89XCIuL2lucHV0XCIgdGl0bGU9XCJpbnB1dFwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua30gLz5cbiAgICAgICAgICA8TGlua0l0ZW0gdG89XCIuL2J1dHRvblwiIHRpdGxlPVwiQnV0dG9uXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfSAvPlxuICAgICAgICAgIDxMaW5rSXRlbSB0bz1cIi4vdGFibGVcIiB0aXRsZT1cIlRhYmxlXCIgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfSAvPlxuICAgICAgICAgIDxMaW5rSXRlbVxuICAgICAgICAgICAgdG89XCIuL2R5bmFtaWNpY29uXCJcbiAgICAgICAgICAgIHRpdGxlPVwiRHluYW1pYyBJY29uXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lTGlua31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxMaW5rSXRlbVxuICAgICAgICAgICAgdG89XCIuL3RyZWV2aWV3XCJcbiAgICAgICAgICAgIHRpdGxlPVwiVHJlZXZpZXdcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtdGhlbWUtc3Ryb25nIHRleHQteHMgZm9udC1zZW1pYm9sZCBtdC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgUmVhY3QuSlMgKyBUYWlsd2luZCBDU1NcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggbGVmdC00MCB3LVtjYWxjKDEwMCUtMTkycHgpXSBoLWF1dG8gcC0yIHotMTBcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmNvbnN0IExpbmtJdGVtOiBGQzx7IHRvOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH0+ID0gKFxuICBwcm9wc1xuKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e3Byb3BzLnRvfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJNZW51SXRlbVwiXG4gICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGFjdGl2ZTp0ZXh0LXRoZW1lLWludmVydGVkIGhvdmVyOnRleHQtdGhlbWUtc3Ryb25nIGdyb3VwICR7cHJvcHMuY2xhc3NOYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaC1mdWxsIHctMCBiZy10aGVtZS1tdXRlZCBiZy1vcGFjaXR5LTIwIHJvdW5kZWQtc20gZ3JvdXAtaG92ZXI6dy1bY2FsYygxMDAlKzEwMHB4KV0gdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNTAwXCI+PC9zcGFuPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rSXRlbTtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIER5bmFtaWNJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0ljb247XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBGb3JtQ29udHJvbCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1Db250cm9sO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gVHJlZXZpZXcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVldmlldztcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIExheW91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIENvbXBvbmVudHNTaGFyZWQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LWNlbnRlciBtLWF1dG9cIj5cbiAgICAgIExldCdzIGV4cGxvcmUgbXkgVUkgQ29tcG9uZW50c1xuICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ltZzIucG5nXCIgY2xhc3NOYW1lPVwibXktNiBteC1hdXRvIG9iamVjdC1maWxsXCIgLz5cbiAgICAgIEp1c3Qgc2VsZWN0IG9uIGxlZnQgc2lkZWJhclxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnRzU2hhcmVkO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gSW5wdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIFRhYmxlKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7XG4iLCAiaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwifi9hcHBsaWNhdGlvbi91aWNvbXBvbmVudHMvaW5wdXRcIjtcbmltcG9ydCAqIGFzIE1lbnVzQWN0aW9uIGZyb20gXCJ+L2FwcGxpY2F0aW9uL2FjdGlvbnMvbWVudXNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGFjdGlvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7fVxuXG5mdW5jdGlvbiBNZW51cygpIHtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC01XCI+XG4gICAgICA8Rm9ybVxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBib3JkZXIgcm91bmRlZC1tZCBzaGFkb3ctbWQgcC00IHctZml0IGgtZml0IG0tYXV0byBiZy10aGVtZS1tdXRlZFwiXG4gICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgbWItOSB0ZXh0LWNlbnRlciB0ZXh0LXRoZW1lLXN0cm9uZyB0ZXh0LWxnIFwiPlxuICAgICAgICAgIE1lbnUgRWRpdG9yXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICBuYW1lPVwicGFyZW50XCJcbiAgICAgICAgICBsYWJlbD1cIlBhcmVudFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0yOFwiXG4gICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0yOFwiXG4gICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0yOFwiXG4gICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0yOFwiXG4gICAgICAgICAgZXJyb3JNZXNzYWdlPXtlcnJvck1lc3NhZ2V9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInctMThcIiBsYWJlbD1cIlNhdmVcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudXM7XG4iLCAiaW1wb3J0IHsgRm9yd2FyZFJlZlJlbmRlckZ1bmN0aW9uLCBJbnB1dEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBJbnB1dDogRm9yd2FyZFJlZlJlbmRlckZ1bmN0aW9uPEhUTUxJbnB1dEVsZW1lbnQsIElucHV0UHJvcHM+ID0gKFxuICB7IGxhYmVsLCBjbGFzc05hbWUsIGVycm9yTWVzc2FnZSwgLi4ub3RoZXJQcm9wcyB9LFxuICByZWZcbikgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBtLTIgdy1maXQgaC1maXQgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgey4uLm90aGVyUHJvcHN9XG4gICAgICAgIGNsYXNzTmFtZT1cInotMCByZWxhdGl2ZSBtaW4tdy0xMCBtaW4taC04IHB0LTEgcGItMSBweC0xIG15LTEgdGV4dC10aGVtZS1iYXNlIGJnLXRyYW5zcGFyZW50IG91dGxpbmUtbm9uZSBib3JkZXIgYm9yZGVyLXRoZW1lLWJvcmRlciByb3VuZGVkLVs0cHhdIHBsYWNlaG9sZGVyOnRleHQtdGhlbWUtbXV0ZWQgaW52YWxpZDpib3JkZXItdGhlbWUtd2FybmluZyBwZWVyXCJcbiAgICAgID48L2lucHV0PlxuXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ6LTEwIGFic29sdXRlIHB4LVsycHhdIC10b3AtWzVweF0gbGVmdC0yIHJvdW5kZWQtc20gYmctdGhlbWUtbXV0ZWQgbGVhZGluZy1ub25lIHRleHQtc20gdGV4dC10aGVtZS1iYXNlIHBlZXItaW52YWxpZDp0ZXh0LXRoZW1lLXdhcm5pbmdcIj5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9zcGFuPlxuXG4gICAgICB7ZXJyb3JNZXNzYWdlICYmIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiei0xMCBhYnNvbHV0ZSBweC1bMnB4XSAtdG9wLVs1cHhdIHJpZ2h0LTEgcm91bmRlZC1mdWxsIGJnLXRoZW1lLW11dGVkIHRleHQtc20gdGV4dC10aGVtZS13YXJuaW5nIGxlYWRpbmctbm9uZVwiPlxuICAgICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImltcG9ydCBSZWFjdCwgeyBGb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb24sIEJ1dHRvbkhUTUxBdHRyaWJ1dGVzIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIEJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uOiBGb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb248SFRNTElucHV0RWxlbWVudCwgQnV0dG9uUHJvcHM+ID0gKFxuICB7IGxhYmVsLCBjbGFzc05hbWUsIC4uLm90aGVyUHJvcHMgfSxcbiAgcmVmXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggYmctdGhlbWUtYnV0dG9uLWFjY2VudCBoLTggdy0zMiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgb3V0bGluZS1ub25lIHJvdW5kZWQtbWQgaG92ZXI6YmctdGhlbWUtYnV0dG9uLWFjY2VudC1ob3ZlclwiXG4gICAgPlxuICAgICAge2xhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIFNoYXJlZEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcmVkSW5kZXg7XG4iLCAiaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJ+L2FwcGxpY2F0aW9uL3VpY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIn4vYXBwbGljYXRpb24vdWljb21wb25lbnRzL2lucHV0XCI7XG5pbXBvcnQgKiBhcyBMb2dpbkFjdGlvbiBmcm9tIFwifi9hcHBsaWNhdGlvbi9hY3Rpb25zL2F1dGgvbG9naW5cIjtcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHctZml0IGgtZml0IHRvcC04IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy10aGVtZS1tdXRlZCBtLWF1dG8gcHgtMyBweS01IHJvdW5kZWQtbWQgZHJvcC1zaGFkb3ctbWQgYm9yZGVyIGJvcmRlci10aGVtZS1ib3JkZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWNlbnRlciBtYi0xMCB0ZXh0LTR4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIExvZ2luXG4gICAgICA8L2gxPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgIGxhYmVsPVwiVXNlciBOYW1lXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgIHNldFVzZXJOYW1lKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgLy8gcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgIHNldFBhc3N3b3JkKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgLy8gcmVxdWlyZWQ9e3RydWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbGFiZWw9XCJMb2dpblwiIGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNtOmZsZXggZmxleC13YXJwIHctZnVsbCB0ZXh0LXRoZW1lLWJhc2UgaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBweC0xMCBweS03XCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ltZzMucG5nXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzY2FsZS03NSBzbTpzY2FsZS0xMDAgbS1hdXRvIG9iamVjdC1jb3ZlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC1sZyBtYi0xXCI+XG4gICAgICAgICAgSGVsbG8gdGhlcmUgSSdte1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOnRleHQtbWQgdGV4dC1iYXNlIHNtOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgQW5qYXJ7XCIgXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIEkgY2FsbCB0aGlzXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206dGV4dC1tZCB0ZXh0LWJhc2Ugc206dGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBSSVNUQU1BWUEse1wiIFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBpdCBqdXN0IG15IHBlcnNvbmFsIHdlYnNpdGUgYnVpbHQgYnlcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+LSBSZW1peCBKUyB3aXRoIFR5cGVzY3JpcHQ8L2xpPlxuICAgICAgICAgICAgPGxpPi0gVGFpbHdpbmQgQ1NTPC9saT5cbiAgICAgICAgICAgIDxsaT4tIE1vbmdvREI8L2xpPlxuICAgICAgICAgICAgPGxpPi0gQW5kIE1vcmU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgVGhhbmtzIGEgbG90IGZvciB2aXNpdGluZyBwbGVhc2UgdGFrZSBhIGxvb2sgd2hhdCdzIGdvaW5nIG9uIGhlcmVcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc206ZmxleCBmbGV4LXdhcnAgdy1mdWxsIHRleHQtdGhlbWUtYmFzZSBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIHB4LTEwIHB5LTdcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaW1nMy5wbmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNjYWxlLTc1IHNtOnNjYWxlLTEwMCBtLWF1dG8gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LWxnIG1iLTFcIj5cbiAgICAgICAgICBIZWxsbyB0aGVyZSBJJ217XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206dGV4dC1tZCB0ZXh0LWJhc2Ugc206dGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBBbmphcntcIiBcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgSSBjYWxsIHRoaXNcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTp0ZXh0LW1kIHRleHQtYmFzZSBzbTp0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIFJJU1RBTUFZQSx7XCIgXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIGl0IGp1c3QgbXkgcGVyc29uYWwgd2Vic2l0ZSBidWlsdCBieVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT4tIFJlbWl4IEpTIHdpdGggVHlwZXNjcmlwdDwvbGk+XG4gICAgICAgICAgICA8bGk+LSBUYWlsd2luZCBDU1M8L2xpPlxuICAgICAgICAgICAgPGxpPi0gTW9uZ29EQiB3aXRoIFByaXNtYSBPUk08L2xpPlxuICAgICAgICAgICAgPGxpPi0gQW5kIE1vcmU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgVGhhbmtzIGEgbG90IGZvciB2aXNpdGluZyBwbGVhc2UgdGFrZSBhIGxvb2sgd2hhdCdzIGdvaW5nIG9uIGhlcmVcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonNzZhODAxM2UnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVZRN1FUWkE2LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1PV1JKSzNLNi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUszQVpZR1BYLmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC0yUlRZUzNZVC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2F1dGgvbG9naW4nOnsnaWQnOidyb3V0ZXMvYXV0aC9sb2dpbicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhdXRoL2xvZ2luJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2F1dGgvbG9naW4tN0RUV0pJWlguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVRPQk1IVVNKLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9jb3JlL2luZGV4Jzp7J2lkJzoncm91dGVzL2NvcmUvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY29yZScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvY29yZS9pbmRleC1CVkYzSTZWWS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvcmUvbWVudXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY29yZS9tZW51cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb3JlL21lbnVzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb3JlL21lbnVzL2luZGV4LTVFNVFTUklNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1UT0JNSFVTSi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtWVNWTENBNVkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlZC9hYm91dCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4LUQ1VVFKWlI1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlZC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaGFyZWQnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9pbmRleC1KWUtHTFg1RS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlZC9teXByb2plY3RzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleC1INFpKNFg0Sy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlZC9wbGF5Z3JvdW5kJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kLUEyNk82VzQzLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvYnV0dG9uJzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2J1dHRvbicsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGF0aCc6J2J1dHRvbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9idXR0b24tV1U2R01LNDIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9keW5hbWljaWNvbic6eydpZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9keW5hbWljaWNvbicsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGF0aCc6J2R5bmFtaWNpY29uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2R5bmFtaWNpY29uLTdaUE9FTFVULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZm9ybWNvbnRyb2wnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvZm9ybWNvbnRyb2wnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZCcsJ3BhdGgnOidmb3JtY29udHJvbCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9mb3JtY29udHJvbC1VSldPTVlBUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2luZGV4JywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvaW5kZXgtSEZLQ0UzRlUuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbnB1dCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9pbnB1dCcsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGF0aCc6J2lucHV0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2lucHV0LUlOT1FFRFlQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvbGF5b3V0Jzp7J2lkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL2xheW91dCcsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGF0aCc6J2xheW91dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC9sYXlvdXQtNENHTFc2S0kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90YWJsZSc6eydpZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90YWJsZScsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kJywncGF0aCc6J3RhYmxlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9wbGF5Z3JvdW5kL3RhYmxlLU9ST0ZDRjNKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1SUUpNVkFaRC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdHJlZXZpZXcnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3BsYXlncm91bmQvdHJlZXZpZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZCcsJ3BhdGgnOid0cmVldmlldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvcGxheWdyb3VuZC90cmVldmlldy1SRlBVNFUzTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUlFKTVZBWkQuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL3R1dG9yaWFsJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXgtUlJQWU1LVzcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVJRSk1WQVpELmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtNzZBODAxM0UuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7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
