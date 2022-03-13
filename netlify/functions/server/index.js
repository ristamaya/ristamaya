var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
var tailwind_default = "/build/_assets/tailwind-JGBOFRFM.css";

// app/application/components/layout/index.tsx
init_react();
var import_react6 = require("react");

// app/application/components/layout/layout.context.tsx
init_react();
var import_react = require("react");
var defaultContext = {
  useTheme: "root",
  setUseTheme: null
};
var LayoutContext = (0, import_react.createContext)(defaultContext);
var LayoutProvider = LayoutContext.Provider;

// app/application/components/layout/floatcontrol/index.tsx
init_react();
var import_react2 = __toESM(require("react"));

// app/application/components/dynamicicon/index.tsx
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

// app/application/components/layout/floatcontrol/index.tsx
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

// app/application/components/layout/navbar/index.tsx
init_react();
var import_react5 = __toESM(require("react"));

// app/application/components/layout/navbar/iconmenu/index.tsx
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

// app/application/components/layout/navbar/menubar/index.tsx
init_react();

// app/application/components/layout/navbar/menubar/linkitem/index.tsx
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

// app/application/components/layout/navbar/menubar/index.tsx
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

// app/application/components/layout/navbar/index.tsx
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
    { href: "/shared/components", title: "My Stuffs" },
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

// app/application/components/layout/index.tsx
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

// app/application/components/workonit/index.tsx
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

// route:/home/ristama/projects/ristamaya/app/routes/shared/components.tsx
var components_exports = {};
__export(components_exports, {
  default: () => Components,
  meta: () => meta2
});
init_react();
var import_remix6 = __toESM(require_remix());

// app/application/components/linkitem/index.tsx
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

// route:/home/ristama/projects/ristamaya/app/routes/shared/components.tsx
var meta2 = () => {
  return { title: "Ristama|Components" };
};
function Components() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "relative block text-theme-base z-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "fixed block w-28 h-[calc(100%-64px)] bg-theme-fill z-20 shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative text-theme-strong text-xl font-semibold mt-3 mb-6 pl-2"
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
    to: "/shared/components"
  }, "My Stuffs")), /* @__PURE__ */ React.createElement("div", {
    id: "SharedCompSB",
    className: "relative h-[calc(100%-140px)] text-xs font-semibold overflow-auto overflow-x-hidden pl-2"
  }, /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./layout",
    title: "Layout",
    className: "h-9 w-40 font-semibold"
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./formcontrol",
    title: "Form",
    className: "h-9 w-40 font-semibold"
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./dynamicicon",
    title: "Dynamic Icon",
    className: "h-9 w-40 font-semibold"
  }), /* @__PURE__ */ React.createElement(linkitem_default2, {
    to: "./treeview",
    title: "Treeview",
    className: "h-9 w-40 font-semibold"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "relative text-theme-strong text-xs font-semibold mt-2 text-center"
  }, "React.JS + Tailwind CSS")), /* @__PURE__ */ React.createElement("div", {
    className: "relative flex left-40 w-[calc(100%-192px)] h-auto p-2 z-10"
  }, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)));
}

// route:/home/ristama/projects/ristamaya/app/routes/shared/components/dynamicicon.tsx
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

// route:/home/ristama/projects/ristamaya/app/routes/shared/components/formcontrol.tsx
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

// route:/home/ristama/projects/ristamaya/app/routes/shared/components/treeview.tsx
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

// route:/home/ristama/projects/ristamaya/app/routes/shared/components/layout.tsx
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

// route:/home/ristama/projects/ristamaya/app/routes/shared/components/index.tsx
var components_exports2 = {};
__export(components_exports2, {
  default: () => components_default
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
var components_default = ComponentsShared;

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
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(workonit_default, null));
}

// route:/home/ristama/projects/ristamaya/app/routes/core/index.tsx
var core_exports = {};
__export(core_exports, {
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
  }, " ", "RISTAMAYA,", " "), "it just my personal website built by", /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "- Remix JS with Typescript"), /* @__PURE__ */ React.createElement("li", null, "- Tailwind CSS"), /* @__PURE__ */ React.createElement("li", null, "- MongoDB"), /* @__PURE__ */ React.createElement("li", null, "- And More")), "Thanks a lot for visiting please take a look what's going on here")));
}

// route:/home/ristama/projects/ristamaya/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3
});
init_react();
function Index3() {
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

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "c8d12dfb", "entry": { "module": "/build/entry.client-ETPWTYUW.js", "imports": ["/build/_shared/chunk-SYS2HG3Y.js", "/build/_shared/chunk-K3AZYGPX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-SSFOFDZL.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-LUQ2GGRG.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/index": { "id": "routes/core/index", "parentId": "root", "path": "core", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/index-BVF3I6VY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LIPB66DX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/about/index": { "id": "routes/shared/about/index", "parentId": "root", "path": "shared/about", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/about/index-4466OMFO.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components": { "id": "routes/shared/components", "parentId": "root", "path": "shared/components", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components-BJV3CQE7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/dynamicicon": { "id": "routes/shared/components/dynamicicon", "parentId": "routes/shared/components", "path": "dynamicicon", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/dynamicicon-D6YZ5FH2.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/formcontrol": { "id": "routes/shared/components/formcontrol", "parentId": "routes/shared/components", "path": "formcontrol", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/formcontrol-APHIH65T.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/index": { "id": "routes/shared/components/index", "parentId": "routes/shared/components", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/components/index-5MCL5WEH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/layout": { "id": "routes/shared/components/layout", "parentId": "routes/shared/components", "path": "layout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/layout-YFMPNPO6.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/treeview": { "id": "routes/shared/components/treeview", "parentId": "routes/shared/components", "path": "treeview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/treeview-RBEFZC6C.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/index": { "id": "routes/shared/index", "parentId": "root", "path": "shared", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/index-6436CQJO.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/myprojects/index": { "id": "routes/shared/myprojects/index", "parentId": "root", "path": "shared/myprojects", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/myprojects/index-WICU7BH3.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/tutorial/index": { "id": "routes/shared/tutorial/index", "parentId": "root", "path": "shared/tutorial", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/tutorial/index-QHTYJOUQ.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-C8D12DFB.js" };

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
  "routes/shared/components": {
    id: "routes/shared/components",
    parentId: "root",
    path: "shared/components",
    index: void 0,
    caseSensitive: void 0,
    module: components_exports
  },
  "routes/shared/components/dynamicicon": {
    id: "routes/shared/components/dynamicicon",
    parentId: "routes/shared/components",
    path: "dynamicicon",
    index: void 0,
    caseSensitive: void 0,
    module: dynamicicon_exports
  },
  "routes/shared/components/formcontrol": {
    id: "routes/shared/components/formcontrol",
    parentId: "routes/shared/components",
    path: "formcontrol",
    index: void 0,
    caseSensitive: void 0,
    module: formcontrol_exports
  },
  "routes/shared/components/treeview": {
    id: "routes/shared/components/treeview",
    parentId: "routes/shared/components",
    path: "treeview",
    index: void 0,
    caseSensitive: void 0,
    module: treeview_exports
  },
  "routes/shared/components/layout": {
    id: "routes/shared/components/layout",
    parentId: "routes/shared/components",
    path: "layout",
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/shared/components/index": {
    id: "routes/shared/components/index",
    parentId: "routes/shared/components",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: components_exports2
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3Jvb3QudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb250ZXh0LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vY29tcG9uZW50cy9sYXlvdXQvZmxvYXRjb250cm9sL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vY29tcG9uZW50cy9keW5hbWljaWNvbi9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9pY29ubWVudS9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9tZW51YmFyL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL21lbnViYXIvbGlua2l0ZW0vaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3dvcmtvbml0L2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xpbmtpdGVtL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWNpY29uLnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2Zvcm1jb250cm9sLnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL3RyZWV2aWV3LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvYXV0aC9sb2dpbi50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9jb3JlL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBjb25zdCBhdXRoSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcImF1dGhvcml6YXRpb25cIl07XG4gIGNvbnN0IGdyYXBoU2lnbmF0dXJlSGVhZGVyID0gZXZlbnQuaGVhZGVyc1tcIngtbmV0bGlmeS1ncmFwaC1zaWduYXR1cmVcIl07XG5cbiAgaWYgKGF1dGhIZWFkZXIgIT0gbnVsbCAmJiAvQmVhcmVyIC9naS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgcmF3QXV0aG9yaXphdGlvblN0cmluZyA9IGF1dGhIZWFkZXIuc3BsaXQoXCIgXCIpWzFdO1xuICB9XG5cbiAgY29uc3QgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXIsXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWNpY29uLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2Zvcm1jb250cm9sLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL3RyZWV2aWV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9hdXRoL2xvZ2luLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9jb3JlL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWQvbXlwcm9qZWN0c1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL3R1dG9yaWFsL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNoYXJlZC90dXRvcmlhbFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9hYm91dC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNoYXJlZC9hYm91dFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50c1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWQvY29tcG9uZW50c1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvZHluYW1pY2ljb25cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWNpY29uXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHNcIixcbiAgICAgIHBhdGg6IFwiZHluYW1pY2ljb25cIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2Zvcm1jb250cm9sXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9mb3JtY29udHJvbFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzXCIsXG4gICAgICBwYXRoOiBcImZvcm1jb250cm9sXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy90cmVldmlld1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvdHJlZXZpZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50c1wiLFxuICAgICAgcGF0aDogXCJ0cmVldmlld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50c1wiLFxuICAgICAgcGF0aDogXCJsYXlvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVkXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2F1dGgvbG9naW5cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2F1dGgvbG9naW5cIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYXV0aC9sb2dpblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2NvcmUvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2NvcmUvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiY29yZVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGlua3NGdW5jdGlvbixcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJSaXN0YW1heWF8SG9tZVwiIH07XG59O1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3RhaWx3aW5kLmNzc1wiO1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4vLyAgIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG4vLyB9XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcblxuaW1wb3J0IExheW91dCBmcm9tIFwifi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xheW91dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJmYXZpY29uXCIgaHJlZj1cImZhdmljb24ucG5nXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAgPExpdmVSZWxvYWQgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGF5b3V0UHJvdmlkZXIgfSBmcm9tIFwiLi9sYXlvdXQuY29udGV4dFwiO1xuaW1wb3J0IHsgRmxvYXRDb250cm9sIH0gZnJvbSBcIi4vZmxvYXRjb250cm9sXCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuL25hdmJhclwiO1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgY29uc3QgW3VzZVRoZW1lLCBzZXRVc2VUaGVtZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXRQcm92aWRlciB2YWx1ZT17eyB1c2VUaGVtZSwgc2V0VXNlVGhlbWUgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dXNlVGhlbWV9YH0+XG4gICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgPG1haW5cbiAgICAgICAgICBpZD1cIk1haW5Db250ZW50XCJcbiAgICAgICAgICBjbGFzc05hbWU9e2BmaXhlZCBibG9jayBiZy10aGVtZS1tdXRlZCBvdmVyZmxvdy1hdXRvIHRvcC0xNiB3LXNjcmVlbiBoLVtjYWxjKDEwMCUtNjRweCldIHotNDBgfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxkaXYgaWQ9XCJUaGVtZUNoYW5nZXJcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wIHotNTBcIj5cbiAgICAgICAgICA8RmxvYXRDb250cm9sIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXRQcm92aWRlcj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSB0aGVtZUNvbnRleHQge1xuICB1c2VUaGVtZTogU3RyaW5nO1xuICBzZXRVc2VUaGVtZTogYW55O1xufVxuXG5jb25zdCBkZWZhdWx0Q29udGV4dCA9IHtcbiAgdXNlVGhlbWU6IFwicm9vdFwiLFxuICBzZXRVc2VUaGVtZTogbnVsbCxcbn07XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDx0aGVtZUNvbnRleHQ+KGRlZmF1bHRDb250ZXh0KTtcbmV4cG9ydCBjb25zdCBMYXlvdXRQcm92aWRlciA9IExheW91dENvbnRleHQuUHJvdmlkZXI7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRHluYW1pY0ljb24gZnJvbSBcIi4uLy4uL2R5bmFtaWNpY29uXCI7XG5pbXBvcnQgeyBMYXlvdXRDb250ZXh0IH0gZnJvbSBcIi4uL2xheW91dC5jb250ZXh0XCI7XG5cbmV4cG9ydCBjb25zdCBGbG9hdENvbnRyb2wgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuTWVudSwgc2V0T3Blbk1lbnVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHsgc2V0VXNlVGhlbWUgfSA9IHVzZUNvbnRleHQoTGF5b3V0Q29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXRoZW1lLW11dGVkIGJvcmRlci10aGVtZS1ib3JkZXIgbS0zIHAtMSByb3VuZGVkLWZ1bGwgYm9yZGVyIGgtZml0IHctZml0XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICBzZXRPcGVuTWVudSh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB3LWZpdCBoLWZpdCByb3VuZGVkLWZ1bGwgaG92ZXI6b3BhY2l0eS04MCBwZWVyXCJcbiAgICAgID5cbiAgICAgICAgPER5bmFtaWNJY29uIGljb249XCJGaVNsYWNrXCIgY2xhc3NOYW1lPVwidy03IGgtN1wiIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtvcGVuTWVudSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB6LTQwIGZsZXgtcm93IGJvdHRvbS1bNDBweF0gcmlnaHQtMCBiZy10aGVtZS1tdXRlZCB3LWZpdCBoLWZpdCBtYXgtaC1bY2FsYygxMDB2aC03NHB4KV0gb3ZlcmZsb3ctYXV0byBib3JkZXIgYm9yZGVyLXRoZW1lLWJvcmRlciBteC0yIHJvdW5kZWQtbWQgc2hhZG93LW1kXG4gICAgICAgICAgICBpbnZpc2libGUgb3BhY2l0eS0wIC10cmFuc2xhdGUteC1mdWxsIGhvdmVyOnZpc2libGUgaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6dHJhbnNsYXRlLXgtMCBwZWVyLWZvY3VzOnZpc2libGUgcGVlci1mb2N1czpvcGFjaXR5LTEwMCBwZWVyLWZvY3VzOnRyYW5zbGF0ZS14LTAgXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgcHgtMSB0ZXh0LWNlbnRlcmB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXRoZW1lLXN0cm9uZyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIFRoZW1lIENvbG9yXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1jeWFuXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHAtMSB3LTI0IGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1tZCBiZy1jeWFuLTYwMCBteS0xIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ3lhblxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1hbWJlclwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBwLTEgdy0yNCBmbGV4IGN1cnNvci1wb2ludGVyIHRleHQtbWQgYmctYW1iZXItNjAwIG15LTEgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBbWJlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1pbmRpZ29cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcC0xIHctMjQgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LW1kIGJnLWluZGlnby02MDAgbXktMSByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEluZGlnb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1zbGF0ZVwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBwLTEgdy0yNCBmbGV4IGN1cnNvci1wb2ludGVyIHRleHQtbWQgYmctc2xhdGUtNjAwIG15LTEgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTbGF0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgc2V0VXNlVGhlbWUoXCJ0aGVtZS1zdG9uZVwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBwLTEgdy0yNCBmbGV4IGN1cnNvci1wb2ludGVyIHRleHQtbWQgYmctc3RvbmUtNjAwIG15LTEgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdG9uZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIiwgImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBmaUljb25zIGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuXG5jb25zdCBEeW5hbWljSWNvbjogRkM8eyBpY29uOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgLi4uaWNvbnMgfSA9IGZpSWNvbnM7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgVGhlSWNvbjogSlNYLkVsZW1lbnQgPSBpY29uc1twcm9wcy5pY29uXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogQHRzLWlnbm9yZSAqL31cbiAgICAgIDxUaGVJY29uIGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0ljb247XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSWNvbk1lbnUgZnJvbSBcIi4vaWNvbm1lbnVcIjtcbmltcG9ydCBNZW51QmFyIGZyb20gXCIuL21lbnViYXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBtZW51SXRlbXMge1xuICBpY29uOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJY29uTWVudUl0ZW1zIHtcbiAgaWNvbjogc3RyaW5nO1xuICBtZW51czogbWVudUl0ZW1zW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUJhckl0ZW1zIHtcbiAgaHJlZjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBOYXZCYXI6IEZDPHtcbiAgTW9kdWxlSXRlbXM/OiBJY29uTWVudUl0ZW1zO1xuICBDb250cm9sSXRlbXM/OiBJY29uTWVudUl0ZW1zO1xuICBNZW51SXRlbXM/OiBNZW51QmFySXRlbXNbXTtcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG1vZHVsZUl0ZW1zID0gIXByb3BzLk1vZHVsZUl0ZW1zXG4gICAgPyB7XG4gICAgICAgIGljb246IFwiRmlDcHVcIixcbiAgICAgICAgbWVudXM6IFt7IGljb246IFwiRmlIb21lXCIsIHRpdGxlOiBcIkhvbWVcIiwgaHJlZjogXCIvXCIgfV0sXG4gICAgICB9XG4gICAgOiBwcm9wcy5Nb2R1bGVJdGVtcztcblxuICBjb25zdCBjb250cm9sSXRlbXMgPSAhcHJvcHMuQ29udHJvbEl0ZW1zXG4gICAgPyB7XG4gICAgICAgIGljb246IFwiRmlVc2VyXCIsXG4gICAgICAgIG1lbnVzOiBbeyBpY29uOiBcIkZpTG9nSW5cIiwgdGl0bGU6IFwiTG9naW5cIiwgaHJlZjogXCIvYXV0aC9sb2dpblwiIH1dLFxuICAgICAgfVxuICAgIDogcHJvcHMuQ29udHJvbEl0ZW1zO1xuXG4gIGNvbnN0IG1lbnVJdGVtcyA9ICFwcm9wcy5NZW51SXRlbXNcbiAgICA/IFtcbiAgICAgICAgeyBocmVmOiBcIi9cIiwgdGl0bGU6IFwiUmlzdGFtYXlhXCIgfSxcbiAgICAgICAgeyBocmVmOiBcIi9zaGFyZWQvY29tcG9uZW50c1wiLCB0aXRsZTogXCJNeSBTdHVmZnNcIiB9LFxuICAgICAgICB7IGhyZWY6IFwiL3NoYXJlZC90dXRvcmlhbFwiLCB0aXRsZTogXCJUdXRvcmlhbFwiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL215cHJvamVjdHNcIiwgdGl0bGU6IFwiTXkgUHJvamVjdHNcIiB9LFxuICAgICAgICB7IGhyZWY6IFwiL3NoYXJlZC9hYm91dFwiLCB0aXRsZTogXCJBYm91dFwiIH0sXG4gICAgICBdXG4gICAgOiBwcm9wcy5NZW51SXRlbXM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBpZD1cIk5hdkJhclwiXG4gICAgICBjbGFzc05hbWU9e2BmaXhlZCBiZy10aGVtZS1maWxsIHRleHQtdGhlbWUtYmFzZSBmbGV4IGgtMTYgdy1zY3JlZW4gc2hhZG93LW1kIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gei01MGB9XG4gICAgPlxuICAgICAgPEljb25NZW51XG4gICAgICAgIG9ubGVmdD17dHJ1ZX1cbiAgICAgICAgaWNvbj17bW9kdWxlSXRlbXMuaWNvbn1cbiAgICAgICAgcGFyZW50Q2xhc3M9XCJ3LTggaC04XCJcbiAgICAgICAgY2hpbGRDbGFzcz1cInctNiBoLTZcIlxuICAgICAgICBtZW51SXRlbT17bW9kdWxlSXRlbXMubWVudXN9XG4gICAgICAvPlxuXG4gICAgICA8TWVudUJhciBMaW5rSXRlbXM9e21lbnVJdGVtc30gLz5cblxuICAgICAgPEljb25NZW51XG4gICAgICAgIG9ubGVmdD17ZmFsc2V9XG4gICAgICAgIGljb249e2NvbnRyb2xJdGVtcy5pY29ufVxuICAgICAgICBwYXJlbnRDbGFzcz1cInctOCBoLThcIlxuICAgICAgICBjaGlsZENsYXNzPVwidy02IGgtNlwiXG4gICAgICAgIG1lbnVJdGVtPXtjb250cm9sSXRlbXMubWVudXN9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIiwgImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBEeW5hbWljSWNvbiBmcm9tIFwifi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2R5bmFtaWNpY29uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUl0ZW0ge1xuICBpY29uOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn1cblxuY29uc3QgSWNvbk1lbnU6IEZDPHtcbiAgb25sZWZ0OiBib29sZWFuO1xuICBpY29uOiBzdHJpbmc7XG4gIHBhcmVudENsYXNzPzogc3RyaW5nO1xuICBjaGlsZENsYXNzOiBzdHJpbmc7XG4gIG1lbnVJdGVtOiBNZW51SXRlbVtdO1xufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbWVudUl0ZW0gPSAhcHJvcHMubWVudUl0ZW1cbiAgICA/IFt7IHRpdGxlOiBcIkR1bW15XCIsIGljb246IFwiRmlVc2VyXCIsIGhyZWY6IFwiL1wiIH1dXG4gICAgOiBwcm9wcy5tZW51SXRlbTtcbiAgY29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB3LTE2IGgtYXV0byBtLTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICBzZXRPcGVuTWVudSh0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB3LWZpdCBoLWZpdCBwLTIgcm91bmRlZC1mdWxsIGhvdmVyOnNjYWxlLTk1IHBlZXJcIlxuICAgICAgPlxuICAgICAgICA8RHluYW1pY0ljb24gaWNvbj17cHJvcHMuaWNvbn0gY2xhc3NOYW1lPXtgJHtwcm9wcy5wYXJlbnRDbGFzc31gfSAvPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIHtvcGVuTWVudSAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cIkljb25NZW51c1wiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgei00MCBmbGV4LXJvdyB0b3AtMTIgYmctdGhlbWUtbXV0ZWQgdy1hdXRvIGgtYXV0byBtYXgtaC1bY2FsYygxMDB2aC03NHB4KV0gb3ZlcmZsb3ctYXV0byBib3JkZXIgYm9yZGVyLXRoZW1lLWJvcmRlciBwbC0yIHByLTkgcHktMyBteC0yIHJvdW5kZWQtbWQgc2hhZG93LW1kXG4gICAgICAgICAgaW52aXNpYmxlIG9wYWNpdHktMCAtdHJhbnNsYXRlLXktZnVsbCBob3Zlcjp2aXNpYmxlIGhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOnRyYW5zbGF0ZS15LTAgcGVlci1mb2N1czp2aXNpYmxlIHBlZXItZm9jdXM6b3BhY2l0eS0xMDAgcGVlci1mb2N1czp0cmFuc2xhdGUteS0wXG4gICAgICAgICAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHNwYWNlLXktMiAke1xuICAgICAgICAgICAgcHJvcHMub25sZWZ0ID8gXCJsZWZ0LTBcIiA6IFwicmlnaHQtMFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7bWVudUl0ZW0ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPExpbmsga2V5PXtpbmRleH0gdG89e2l0ZW0uaHJlZn0+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBzZXRPcGVuTWVudSghb3Blbk1lbnUpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXMtY2VudGVyIGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1zbVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8RHluYW1pY0ljb25cbiAgICAgICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuY2hpbGRDbGFzc31gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uTWVudTtcbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmtJdGVtIGZyb20gXCIuL2xpbmtpdGVtXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGlua1NvdXJjZSB7XG4gIGhyZWY6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgTWVudUJhcjogRkM8eyBMaW5rSXRlbXM/OiBMaW5rU291cmNlW10gfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgTGlua0l0ZW1zID0gIXByb3BzLkxpbmtJdGVtc1xuICAgID8gW3sgaHJlZjogXCIvXCIsIHRpdGxlOiBcIlJJU1RBTUFcIiB9XVxuICAgIDogcHJvcHMuTGlua0l0ZW1zO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwiTWVudUJhclwiXG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGgtZnVsbCB3LWZpdCBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctYXV0byBvdmVyZmxvdy15LWhpZGRlblwiXG4gICAgPlxuICAgICAge0xpbmtJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxMaW5rSXRlbSBrZXk9e2luZGV4fSBocmVmPXtpdGVtLmhyZWZ9IHRpdGxlPXtpdGVtLnRpdGxlfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51QmFyO1xuIiwgIi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5jb25zdCBMaW5rSXRlbTogRkM8eyBocmVmOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmcgfT4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayB0bz17cHJvcHMuaHJlZn0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGlkPVwiTWVudUl0ZW1cIlxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGgtMTYgdy1hdXRvIHB4LTIgaXRlbXMtY2VudGVyIGFjdGl2ZTp0ZXh0LXRoZW1lLWludmVydGVkIGhvdmVyOnRleHQtdGhlbWUtc3Ryb25nIGdyb3VwXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIGgtMCB3LWZ1bGwgYmctdGhlbWUtbXV0ZWQgYmctb3BhY2l0eS0yMCByb3VuZGVkLXNtIGdyb3VwLWhvdmVyOmgtZnVsbCB0cmFuc2l0aW9uLWFsbCBlYXNlLW91dCBkdXJhdGlvbi03MDBcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBoLTAgdy1mdWxsIGJnLXRoZW1lLW11dGVkIGJnLW9wYWNpdHktNSByb3VuZGVkLXNtIGdyb3VwLWhvdmVyOmgtZnVsbCB0cmFuc2l0aW9uLWFsbCBlYXNlLW91dCBkdXJhdGlvbi03MDBcIj48L3NwYW4+XG5cbiAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlua0l0ZW07XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gTXlQcm9qZWN0cygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15UHJvamVjdHM7XG4iLCAiZnVuY3Rpb24gV29ya09uSXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXRoZW1lLXN0cm9uZyB0ZXh0LTJ4bCBtLWF1dG8gbXQtM1wiPlxuICAgICAgU29ycnksIEknbSBzdGlsbCB3b3JraW5nIG9uIGl0XG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1nMS5wbmdcIiBjbGFzc05hbWU9XCJtdC0xMCBtLWF1dG8gb2JqZWN0LWNvdmVyXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya09uSXQ7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gVHV0b3JpYWxTaGFyZWQoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUdXRvcmlhbFNoYXJlZDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBBYm91dCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIiwgImltcG9ydCB7IExpbmssIE1ldGFGdW5jdGlvbiwgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTGlua0l0ZW0gZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy9saW5raXRlbVwiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJSaXN0YW1hfENvbXBvbmVudHNcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcG9uZW50cygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIHRleHQtdGhlbWUtYmFzZSB6LTBcIj5cbiAgICAgIHsvKiBTaWRlYmFyICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBibG9jayB3LTI4IGgtW2NhbGMoMTAwJS02NHB4KV0gYmctdGhlbWUtZmlsbCB6LTIwIHNoYWRvdy1tZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtdGhlbWUtc3Ryb25nIHRleHQteGwgZm9udC1zZW1pYm9sZCBtdC0zIG1iLTYgcGwtMlwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL3NoYXJlZC9jb21wb25lbnRzXCI+TXkgU3R1ZmZzPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9XCJTaGFyZWRDb21wU0JcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtW2NhbGMoMTAwJS0xNDBweCldIHRleHQteHMgZm9udC1zZW1pYm9sZCBvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIHBsLTJcIlxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtJdGVtXG4gICAgICAgICAgICB0bz1cIi4vbGF5b3V0XCJcbiAgICAgICAgICAgIHRpdGxlPVwiTGF5b3V0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOSB3LTQwIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmtJdGVtXG4gICAgICAgICAgICB0bz1cIi4vZm9ybWNvbnRyb2xcIlxuICAgICAgICAgICAgdGl0bGU9XCJGb3JtXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOSB3LTQwIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmtJdGVtXG4gICAgICAgICAgICB0bz1cIi4vZHluYW1pY2ljb25cIlxuICAgICAgICAgICAgdGl0bGU9XCJEeW5hbWljIEljb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC05IHctNDAgZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TGlua0l0ZW1cbiAgICAgICAgICAgIHRvPVwiLi90cmVldmlld1wiXG4gICAgICAgICAgICB0aXRsZT1cIlRyZWV2aWV3XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOSB3LTQwIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtdGhlbWUtc3Ryb25nIHRleHQteHMgZm9udC1zZW1pYm9sZCBtdC0yIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgUmVhY3QuSlMgKyBUYWlsd2luZCBDU1NcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIENvbnRlbnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggbGVmdC00MCB3LVtjYWxjKDEwMCUtMTkycHgpXSBoLWF1dG8gcC0yIHotMTBcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmNvbnN0IExpbmtJdGVtOiBGQzx7IHRvOiBzdHJpbmc7IHRpdGxlOiBzdHJpbmc7IGNsYXNzTmFtZTogc3RyaW5nIH0+ID0gKFxuICBwcm9wc1xuKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExpbmsgdG89e3Byb3BzLnRvfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJNZW51SXRlbVwiXG4gICAgICAgIGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGFjdGl2ZTp0ZXh0LXRoZW1lLWludmVydGVkIGhvdmVyOnRleHQtdGhlbWUtc3Ryb25nIGdyb3VwICR7cHJvcHMuY2xhc3NOYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaC1mdWxsIHctMCBiZy10aGVtZS1tdXRlZCBiZy1vcGFjaXR5LTIwIHJvdW5kZWQtc20gZ3JvdXAtaG92ZXI6dy1bY2FsYygxMDAlKzEwMHB4KV0gdHJhbnNpdGlvbi1hbGwgZWFzZS1vdXQgZHVyYXRpb24tNTAwXCI+PC9zcGFuPlxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rSXRlbTtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBEeW5hbWljSWNvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNJY29uO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIEZvcm1Db250cm9sKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybUNvbnRyb2w7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gVHJlZXZpZXcoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmVldmlldztcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBMYXlvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gQ29tcG9uZW50c1NoYXJlZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIG0tYXV0b1wiPlxuICAgICAgTGV0J3MgZXhwbG9yZSBteSBVSSBDb21wb25lbnRzXG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1nMi5wbmdcIiBjbGFzc05hbWU9XCJteS02IG14LWF1dG8gb2JqZWN0LWZpbGxcIiAvPlxuICAgICAgSnVzdCBzZWxlY3Qgb24gbGVmdCBzaWRlYmFyXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudHNTaGFyZWQ7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gU2hhcmVkSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFyZWRJbmRleDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc206ZmxleCBmbGV4LXdhcnAgdy1mdWxsIHRleHQtdGhlbWUtYmFzZSBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIHB4LTEwIHB5LTdcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaW1nMy5wbmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNjYWxlLTc1IHNtOnNjYWxlLTEwMCBtLWF1dG8gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LWxnIG1iLTFcIj5cbiAgICAgICAgICBIZWxsbyB0aGVyZSBJJ217XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206dGV4dC1tZCB0ZXh0LWJhc2Ugc206dGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBBbmphcntcIiBcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgSSBjYWxsIHRoaXNcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTp0ZXh0LW1kIHRleHQtYmFzZSBzbTp0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIFJJU1RBTUFZQSx7XCIgXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIGl0IGp1c3QgbXkgcGVyc29uYWwgd2Vic2l0ZSBidWlsdCBieVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT4tIFJlbWl4IEpTIHdpdGggVHlwZXNjcmlwdDwvbGk+XG4gICAgICAgICAgICA8bGk+LSBUYWlsd2luZCBDU1M8L2xpPlxuICAgICAgICAgICAgPGxpPi0gTW9uZ29EQjwvbGk+XG4gICAgICAgICAgICA8bGk+LSBBbmQgTW9yZTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICBUaGFua3MgYSBsb3QgZm9yIHZpc2l0aW5nIHBsZWFzZSB0YWtlIGEgbG9vayB3aGF0J3MgZ29pbmcgb24gaGVyZVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzbTpmbGV4IGZsZXgtd2FycCB3LWZ1bGwgdGV4dC10aGVtZS1iYXNlIGl0ZW1zLWNlbnRlciBhbGlnbi1taWRkbGUganVzdGlmeS1jZW50ZXIgcHgtMTAgcHktN1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9pbWczLnBuZ1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2NhbGUtNzUgc206c2NhbGUtMTAwIG0tYXV0byBvYmplY3QtY292ZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHNtOnRleHQtbGcgbWItMVwiPlxuICAgICAgICAgIEhlbGxvIHRoZXJlIEknbXtcIiBcIn1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTp0ZXh0LW1kIHRleHQtYmFzZSBzbTp0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIEFuamFye1wiIFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBJIGNhbGwgdGhpc1xuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOnRleHQtbWQgdGV4dC1iYXNlIHNtOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgUklTVEFNQVlBLHtcIiBcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgaXQganVzdCBteSBwZXJzb25hbCB3ZWJzaXRlIGJ1aWx0IGJ5XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPi0gUmVtaXggSlMgd2l0aCBUeXBlc2NyaXB0PC9saT5cbiAgICAgICAgICAgIDxsaT4tIFRhaWx3aW5kIENTUzwvbGk+XG4gICAgICAgICAgICA8bGk+LSBNb25nb0RCPC9saT5cbiAgICAgICAgICAgIDxsaT4tIEFuZCBNb3JlPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIFRoYW5rcyBhIGxvdCBmb3IgdmlzaXRpbmcgcGxlYXNlIHRha2UgYSBsb29rIHdoYXQncyBnb2luZyBvbiBoZXJlXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2M4ZDEyZGZiJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1FVFBXVFlVVy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstU1lTMkhHM1kuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LM0FaWUdQWC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtU1NGT0ZEWkwuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hdXRoL2xvZ2luJzp7J2lkJzoncm91dGVzL2F1dGgvbG9naW4nLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYXV0aC9sb2dpbicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hdXRoL2xvZ2luLUxVUTJHR1JHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RV1I0SUlXTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvY29yZS9pbmRleCc6eydpZCc6J3JvdXRlcy9jb3JlL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2NvcmUnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NvcmUvaW5kZXgtQlZGM0k2VlkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1MSVBCNjZEWC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9hYm91dC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL2Fib3V0JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgtNDQ2Nk9NRk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFXUjRJSVdOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cyc6eydpZCc6J3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaGFyZWQvY29tcG9uZW50cycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy1CSlYzQ1FFNy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWNpY29uJzp7J2lkJzoncm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWNpY29uJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMnLCdwYXRoJzonZHluYW1pY2ljb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvZHluYW1pY2ljb24tRDZZWjVGSDIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFXUjRJSVdOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9mb3JtY29udHJvbCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9mb3JtY29udHJvbCcsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9jb21wb25lbnRzJywncGF0aCc6J2Zvcm1jb250cm9sJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2Zvcm1jb250cm9sLUFQSElINjVULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RV1I0SUlXTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9pbmRleC01TUNMNVdFSC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2xheW91dCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cycsJ3BhdGgnOidsYXlvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0LVlGTVBOUE82LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RV1I0SUlXTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvdHJlZXZpZXcnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvdHJlZXZpZXcnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cycsJ3BhdGgnOid0cmVldmlldycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy90cmVldmlldy1SQkVGWkM2Qy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVdSNElJV04uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvaW5kZXgtNjQzNkNRSk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFXUjRJSVdOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaGFyZWQvbXlwcm9qZWN0cycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXgtV0lDVTdCSDMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFXUjRJSVdOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL3R1dG9yaWFsL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlZC90dXRvcmlhbCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL3R1dG9yaWFsL2luZGV4LVFIVFlKT1VRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RV1I0SUlXTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUM4RDEyREZCLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVC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QSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosa0NBQWtDO0FBQUEsSUFDOUIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix1QkFBdUI7QUFBQSxJQUNuQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHFCQUFxQjtBQUFBLElBQ2pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoscUJBQXFCO0FBQUEsSUFDakIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOzs7QUR0SGQsd0JBQXdCLE9BQU8sU0FBUztBQUN0QyxNQUFJO0FBQ0osTUFBSTtBQUVKLE1BQUksTUFBTSxpQkFBaUIsTUFBTTtBQUMvQix3QkFBb0IsTUFBTTtBQUFBO0FBRzVCLFFBQU0sYUFBYSxNQUFNLFFBQVE7QUFDakMsUUFBTSx1QkFBdUIsTUFBTSxRQUFRO0FBRTNDLE1BQUksY0FBYyxRQUFRLFlBQVksS0FBSyxhQUFhO0FBQ3RELDZCQUF5QixXQUFXLE1BQU0sS0FBSztBQUFBO0FBR2pELFFBQU0sY0FBYztBQUFBLElBQ2xCLCtCQUErQjtBQUFBLElBQy9CO0FBQUEsSUFDQSx1QkFBdUI7QUFBQTtBQUl6QixTQUFPLEtBQUssYUFBYSxRQUFRLENBQUMsUUFBUTtBQUN4QyxRQUFJLFlBQVksUUFBUSxNQUFNO0FBQzVCLGFBQU8sWUFBWTtBQUFBO0FBQUE7QUFJdkIsU0FBTztBQUFBO0FBR0YsSUFBTSxVQUFVLHlDQUFxQjtBQUFBLEVBQzFDO0FBQUEsRUFDQTtBQUFBLEVBQ0EsTUFBTTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
