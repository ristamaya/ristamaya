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
var tailwind_default = "/build/_assets/tailwind-77KDUXZV.css";

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
  return { title: "Ristamaya|Components" };
};
function Components() {
  const classNameLink = "h-9 w-40 font-semibold";
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

// route:/home/ristama/projects/ristamaya/app/routes/shared/components/button.tsx
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

// route:/home/ristama/projects/ristamaya/app/routes/shared/components/input.tsx
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

// route:/home/ristama/projects/ristamaya/app/routes/shared/components/table.tsx
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
var assets_manifest_default = { "version": "2a535b33", "entry": { "module": "/build/entry.client-QNYBVZ64.js", "imports": ["/build/_shared/chunk-2KMWXAQR.js", "/build/_shared/chunk-K3AZYGPX.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-XBXOKVSD.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/auth/login": { "id": "routes/auth/login", "parentId": "root", "path": "auth/login", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/auth/login-LUQ2GGRG.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/core/index": { "id": "routes/core/index", "parentId": "root", "path": "core", "index": true, "caseSensitive": void 0, "module": "/build/routes/core/index-BVF3I6VY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LIPB66DX.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/about/index": { "id": "routes/shared/about/index", "parentId": "root", "path": "shared/about", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/about/index-4466OMFO.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components": { "id": "routes/shared/components", "parentId": "root", "path": "shared/components", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components-Q4VGAUVO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/button": { "id": "routes/shared/components/button", "parentId": "routes/shared/components", "path": "button", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/button-XG43VENG.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/dynamicicon": { "id": "routes/shared/components/dynamicicon", "parentId": "routes/shared/components", "path": "dynamicicon", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/dynamicicon-D6YZ5FH2.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/formcontrol": { "id": "routes/shared/components/formcontrol", "parentId": "routes/shared/components", "path": "formcontrol", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/formcontrol-APHIH65T.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/index": { "id": "routes/shared/components/index", "parentId": "routes/shared/components", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/components/index-5MCL5WEH.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/input": { "id": "routes/shared/components/input", "parentId": "routes/shared/components", "path": "input", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/input-RVJ3KGT2.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/layout": { "id": "routes/shared/components/layout", "parentId": "routes/shared/components", "path": "layout", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/layout-YFMPNPO6.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/table": { "id": "routes/shared/components/table", "parentId": "routes/shared/components", "path": "table", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/table-QJWSJF4P.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/components/treeview": { "id": "routes/shared/components/treeview", "parentId": "routes/shared/components", "path": "treeview", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/shared/components/treeview-RBEFZC6C.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/index": { "id": "routes/shared/index", "parentId": "root", "path": "shared", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/index-6436CQJO.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/myprojects/index": { "id": "routes/shared/myprojects/index", "parentId": "root", "path": "shared/myprojects", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/myprojects/index-WICU7BH3.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/shared/tutorial/index": { "id": "routes/shared/tutorial/index", "parentId": "root", "path": "shared/tutorial", "index": true, "caseSensitive": void 0, "module": "/build/routes/shared/tutorial/index-QHTYJOUQ.js", "imports": ["/build/_shared/chunk-QWR4IIWN.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-2A535B33.js" };

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
  "routes/shared/components/button": {
    id: "routes/shared/components/button",
    parentId: "routes/shared/components",
    path: "button",
    index: void 0,
    caseSensitive: void 0,
    module: button_exports
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
  "routes/shared/components/input": {
    id: "routes/shared/components/input",
    parentId: "routes/shared/components",
    path: "input",
    index: void 0,
    caseSensitive: void 0,
    module: input_exports
  },
  "routes/shared/components/table": {
    id: "routes/shared/components/table",
    parentId: "routes/shared/components",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi8uLi8uLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3Jvb3QudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xheW91dC9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb250ZXh0LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vY29tcG9uZW50cy9sYXlvdXQvZmxvYXRjb250cm9sL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vY29tcG9uZW50cy9keW5hbWljaWNvbi9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9pY29ubWVudS9pbmRleC50c3giLCAiLi4vLi4vLi4vYXBwL2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvbGF5b3V0L25hdmJhci9tZW51YmFyL2luZGV4LnRzeCIsICIuLi8uLi8uLi9hcHAvYXBwbGljYXRpb24vY29tcG9uZW50cy9sYXlvdXQvbmF2YmFyL21lbnViYXIvbGlua2l0ZW0vaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXgudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3dvcmtvbml0L2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMudHN4IiwgIi4uLy4uLy4uL2FwcC9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xpbmtpdGVtL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWNpY29uLnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2Zvcm1jb250cm9sLnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL3RyZWV2aWV3LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUudHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2luZGV4LnRzeCIsICJyb3V0ZTovaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2F1dGgvbG9naW4udHN4IiwgInJvdXRlOi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvY29yZS9pbmRleC50c3giLCAicm91dGU6L2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9uZXRsaWZ5XCI7XG5pbXBvcnQgKiBhcyBidWlsZCBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7XG5cbi8qXG4gKiBSZXR1cm5zIGEgY29udGV4dCBvYmplY3Qgd2l0aCBhdCBtb3N0IDMga2V5czpcbiAqICAtIGBuZXRsaWZ5R3JhcGhUb2tlbmA6IHJhdyBhdXRoZW50aWNhdGlvbiB0b2tlbiB0byB1c2Ugd2l0aCBOZXRsaWZ5IEdyYXBoXG4gKiAgLSBgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW5gOiBGb3IgdXNlIHdpdGggSldUcyBnZW5lcmF0ZWQgYnlcbiAqICAgIGBuZXRsaWZ5LWdyYXBoLWF1dGhgLlxuICogIC0gYG5ldGxpZnlHcmFwaFNpZ25hdHVyZWA6IGEgc2lnbmF0dXJlIGZvciBzdWJzY3JpcHRpb24gZXZlbnRzLiBXaWxsIGJlXG4gKiAgICBwcmVzZW50IGlmIGEgc2VjcmV0IGlzIHNldC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9hZENvbnRleHQoZXZlbnQsIGNvbnRleHQpIHtcbiAgbGV0IHJhd0F1dGhvcml6YXRpb25TdHJpbmc7XG4gIGxldCBuZXRsaWZ5R3JhcGhUb2tlbjtcblxuICBpZiAoZXZlbnQuYXV0aGxpZnlUb2tlbiAhPSBudWxsKSB7XG4gICAgbmV0bGlmeUdyYXBoVG9rZW4gPSBldmVudC5hdXRobGlmeVRva2VuO1xuICB9XG5cbiAgY29uc3QgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBjb25zdCBncmFwaFNpZ25hdHVyZUhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJ4LW5ldGxpZnktZ3JhcGgtc2lnbmF0dXJlXCJdO1xuXG4gIGlmIChhdXRoSGVhZGVyICE9IG51bGwgJiYgL0JlYXJlciAvZ2kudGVzdChhdXRoSGVhZGVyKSkge1xuICAgIHJhd0F1dGhvcml6YXRpb25TdHJpbmcgPSBhdXRoSGVhZGVyLnNwbGl0KFwiIFwiKVsxXTtcbiAgfVxuXG4gIGNvbnN0IGxvYWRDb250ZXh0ID0ge1xuICAgIGNsaWVudE5ldGxpZnlHcmFwaEFjY2Vzc1Rva2VuOiByYXdBdXRob3JpemF0aW9uU3RyaW5nLFxuICAgIG5ldGxpZnlHcmFwaFRva2VuOiBuZXRsaWZ5R3JhcGhUb2tlbixcbiAgICBuZXRsaWZ5R3JhcGhTaWduYXR1cmU6IGdyYXBoU2lnbmF0dXJlSGVhZGVyLFxuICB9O1xuXG4gIC8vIFJlbW92ZSBrZXlzIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3Qua2V5cyhsb2FkQ29udGV4dCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGxvYWRDb250ZXh0W2tleV0gPT0gbnVsbCkge1xuICAgICAgZGVsZXRlIGxvYWRDb250ZXh0W2tleV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbG9hZENvbnRleHQ7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gY3JlYXRlUmVxdWVzdEhhbmRsZXIoe1xuICBidWlsZCxcbiAgZ2V0TG9hZENvbnRleHQsXG4gIG1vZGU6IHByb2Nlc3MuZW52Lk5PREVfRU5WLFxufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL3R1dG9yaWFsL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9hYm91dC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9keW5hbWljaWNvbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9mb3JtY29udHJvbC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy90cmVldmlldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b24udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9ob21lL3Jpc3RhbWEvcHJvamVjdHMvcmlzdGFtYXlhL2FwcC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEyIGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL2hvbWUvcmlzdGFtYS9wcm9qZWN0cy9yaXN0YW1heWEvYXBwL3JvdXRlcy9zaGFyZWQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE0IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2F1dGgvbG9naW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2NvcmUvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCIvaG9tZS9yaXN0YW1hL3Byb2plY3RzL3Jpc3RhbWF5YS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuICBleHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCJAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3RcIjtcbiAgZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG4gIGV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gICAgXCJyb290XCI6IHtcbiAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgICBwYXRoOiBcIlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUwXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL215cHJvamVjdHMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNoYXJlZC9teXByb2plY3RzXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL3R1dG9yaWFsL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVkL3R1dG9yaWFsXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic2hhcmVkL2Fib3V0XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNoYXJlZC9jb21wb25lbnRzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9keW5hbWljaWNvblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvZHluYW1pY2ljb25cIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50c1wiLFxuICAgICAgcGF0aDogXCJkeW5hbWljaWNvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU1XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvZm9ybWNvbnRyb2xcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2Zvcm1jb250cm9sXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHNcIixcbiAgICAgIHBhdGg6IFwiZm9ybWNvbnRyb2xcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzL3RyZWV2aWV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy90cmVldmlld1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzXCIsXG4gICAgICBwYXRoOiBcInRyZWV2aWV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTdcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b25cIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzXCIsXG4gICAgICBwYXRoOiBcImJ1dHRvblwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU4XG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50c1wiLFxuICAgICAgcGF0aDogXCJsYXlvdXRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2lucHV0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9pbnB1dFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzXCIsXG4gICAgICBwYXRoOiBcImlucHV0XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvdGFibGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHNcIixcbiAgICAgIHBhdGg6IFwidGFibGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy9zaGFyZWQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3NoYXJlZC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzaGFyZWRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYXV0aC9sb2dpblwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYXV0aC9sb2dpblwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhdXRoL2xvZ2luXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvY29yZS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvY29yZS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJjb3JlXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIlJpc3RhbWF5YXxIb21lXCIgfTtcbn07XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbi8vICAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbi8vIH1cblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImZhdmljb25cIiBocmVmPVwiZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMYXlvdXRQcm92aWRlciB9IGZyb20gXCIuL2xheW91dC5jb250ZXh0XCI7XG5pbXBvcnQgeyBGbG9hdENvbnRyb2wgfSBmcm9tIFwiLi9mbG9hdGNvbnRyb2xcIjtcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9OiBQcm9wcykge1xuICBjb25zdCBbdXNlVGhlbWUsIHNldFVzZVRoZW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dFByb3ZpZGVyIHZhbHVlPXt7IHVzZVRoZW1lLCBzZXRVc2VUaGVtZSB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VUaGVtZX1gfT5cbiAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8bWFpblxuICAgICAgICAgIGlkPVwiTWFpbkNvbnRlbnRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17YGZpeGVkIGJsb2NrIGJnLXRoZW1lLW11dGVkIG92ZXJmbG93LWF1dG8gdG9wLTE2IHctc2NyZWVuIGgtW2NhbGMoMTAwJS02NHB4KV0gei00MGB9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGRpdiBpZD1cIlRoZW1lQ2hhbmdlclwiIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgei01MFwiPlxuICAgICAgICAgIDxGbG9hdENvbnRyb2wgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dFByb3ZpZGVyPlxuICApO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIHRoZW1lQ29udGV4dCB7XG4gIHVzZVRoZW1lOiBTdHJpbmc7XG4gIHNldFVzZVRoZW1lOiBhbnk7XG59XG5cbmNvbnN0IGRlZmF1bHRDb250ZXh0ID0ge1xuICB1c2VUaGVtZTogXCJyb290XCIsXG4gIHNldFVzZVRoZW1lOiBudWxsLFxufTtcblxuZXhwb3J0IGNvbnN0IExheW91dENvbnRleHQgPSBjcmVhdGVDb250ZXh0PHRoZW1lQ29udGV4dD4oZGVmYXVsdENvbnRleHQpO1xuZXhwb3J0IGNvbnN0IExheW91dFByb3ZpZGVyID0gTGF5b3V0Q29udGV4dC5Qcm92aWRlcjtcbiIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEeW5hbWljSWNvbiBmcm9tIFwiLi4vLi4vZHluYW1pY2ljb25cIjtcbmltcG9ydCB7IExheW91dENvbnRleHQgfSBmcm9tIFwiLi4vbGF5b3V0LmNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IEZsb2F0Q29udHJvbCA9ICgpID0+IHtcbiAgY29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgeyBzZXRVc2VUaGVtZSB9ID0gdXNlQ29udGV4dChMYXlvdXRDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctdGhlbWUtbXV0ZWQgYm9yZGVyLXRoZW1lLWJvcmRlciBtLTMgcC0xIHJvdW5kZWQtZnVsbCBib3JkZXIgaC1maXQgdy1maXRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgIHNldE9wZW5NZW51KHRydWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZml0IGgtZml0IHJvdW5kZWQtZnVsbCBob3ZlcjpvcGFjaXR5LTgwIHBlZXJcIlxuICAgICAgPlxuICAgICAgICA8RHluYW1pY0ljb24gaWNvbj1cIkZpU2xhY2tcIiBjbGFzc05hbWU9XCJ3LTcgaC03XCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAge29wZW5NZW51ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIHotNDAgZmxleC1yb3cgYm90dG9tLVs0MHB4XSByaWdodC0wIGJnLXRoZW1lLW11dGVkIHctZml0IGgtZml0IG1heC1oLVtjYWxjKDEwMHZoLTc0cHgpXSBvdmVyZmxvdy1hdXRvIGJvcmRlciBib3JkZXItdGhlbWUtYm9yZGVyIG14LTIgcm91bmRlZC1tZCBzaGFkb3ctbWRcbiAgICAgICAgICAgIGludmlzaWJsZSBvcGFjaXR5LTAgLXRyYW5zbGF0ZS14LWZ1bGwgaG92ZXI6dmlzaWJsZSBob3ZlcjpvcGFjaXR5LTEwMCBob3Zlcjp0cmFuc2xhdGUteC0wIHBlZXItZm9jdXM6dmlzaWJsZSBwZWVyLWZvY3VzOm9wYWNpdHktMTAwIHBlZXItZm9jdXM6dHJhbnNsYXRlLXgtMCBcbiAgICAgICAgICAgIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBweC0xIHRleHQtY2VudGVyYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtdGhlbWUtc3Ryb25nIHRleHQtc20gZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgVGhlbWUgQ29sb3JcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLWN5YW5cIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcC0xIHctMjQgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LW1kIGJnLWN5YW4tNjAwIG15LTEgcm91bmRlZC1zbSBob3ZlcjpvcGFjaXR5LTgwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBDeWFuXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLWFtYmVyXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHAtMSB3LTI0IGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1tZCBiZy1hbWJlci02MDAgbXktMSByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFtYmVyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLWluZGlnb1wiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBwLTEgdy0yNCBmbGV4IGN1cnNvci1wb2ludGVyIHRleHQtbWQgYmctaW5kaWdvLTYwMCBteS0xIHJvdW5kZWQtc20gaG92ZXI6b3BhY2l0eS04MFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgSW5kaWdvXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLXNsYXRlXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHAtMSB3LTI0IGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1tZCBiZy1zbGF0ZS02MDAgbXktMSByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFNsYXRlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgICAgICBzZXRVc2VUaGVtZShcInRoZW1lLXN0b25lXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImp1c3RpZnktY2VudGVyIHAtMSB3LTI0IGZsZXggY3Vyc29yLXBvaW50ZXIgdGV4dC1tZCBiZy1zdG9uZS02MDAgbXktMSByb3VuZGVkLXNtIGhvdmVyOm9wYWNpdHktODBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN0b25lXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCAiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGZpSWNvbnMgZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5cbmNvbnN0IER5bmFtaWNJY29uOiBGQzx7IGljb246IHN0cmluZzsgY2xhc3NOYW1lOiBzdHJpbmcgfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyAuLi5pY29ucyB9ID0gZmlJY29ucztcbiAgLy8gQHRzLWlnbm9yZVxuICBjb25zdCBUaGVJY29uOiBKU1guRWxlbWVudCA9IGljb25zW3Byb3BzLmljb25dO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBAdHMtaWdub3JlICovfVxuICAgICAgPFRoZUljb24gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljSWNvbjtcbiIsICJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJY29uTWVudSBmcm9tIFwiLi9pY29ubWVudVwiO1xuaW1wb3J0IE1lbnVCYXIgZnJvbSBcIi4vbWVudWJhclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIG1lbnVJdGVtcyB7XG4gIGljb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25NZW51SXRlbXMge1xuICBpY29uOiBzdHJpbmc7XG4gIG1lbnVzOiBtZW51SXRlbXNbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW51QmFySXRlbXMge1xuICBocmVmOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5hdkJhcjogRkM8e1xuICBNb2R1bGVJdGVtcz86IEljb25NZW51SXRlbXM7XG4gIENvbnRyb2xJdGVtcz86IEljb25NZW51SXRlbXM7XG4gIE1lbnVJdGVtcz86IE1lbnVCYXJJdGVtc1tdO1xufT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbW9kdWxlSXRlbXMgPSAhcHJvcHMuTW9kdWxlSXRlbXNcbiAgICA/IHtcbiAgICAgICAgaWNvbjogXCJGaUNwdVwiLFxuICAgICAgICBtZW51czogW3sgaWNvbjogXCJGaUhvbWVcIiwgdGl0bGU6IFwiSG9tZVwiLCBocmVmOiBcIi9cIiB9XSxcbiAgICAgIH1cbiAgICA6IHByb3BzLk1vZHVsZUl0ZW1zO1xuXG4gIGNvbnN0IGNvbnRyb2xJdGVtcyA9ICFwcm9wcy5Db250cm9sSXRlbXNcbiAgICA/IHtcbiAgICAgICAgaWNvbjogXCJGaVVzZXJcIixcbiAgICAgICAgbWVudXM6IFt7IGljb246IFwiRmlMb2dJblwiLCB0aXRsZTogXCJMb2dpblwiLCBocmVmOiBcIi9hdXRoL2xvZ2luXCIgfV0sXG4gICAgICB9XG4gICAgOiBwcm9wcy5Db250cm9sSXRlbXM7XG5cbiAgY29uc3QgbWVudUl0ZW1zID0gIXByb3BzLk1lbnVJdGVtc1xuICAgID8gW1xuICAgICAgICB7IGhyZWY6IFwiL1wiLCB0aXRsZTogXCJSaXN0YW1heWFcIiB9LFxuICAgICAgICB7IGhyZWY6IFwiL3NoYXJlZC9jb21wb25lbnRzXCIsIHRpdGxlOiBcIk15IFN0dWZmc1wiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL3R1dG9yaWFsXCIsIHRpdGxlOiBcIlR1dG9yaWFsXCIgfSxcbiAgICAgICAgeyBocmVmOiBcIi9zaGFyZWQvbXlwcm9qZWN0c1wiLCB0aXRsZTogXCJNeSBQcm9qZWN0c1wiIH0sXG4gICAgICAgIHsgaHJlZjogXCIvc2hhcmVkL2Fib3V0XCIsIHRpdGxlOiBcIkFib3V0XCIgfSxcbiAgICAgIF1cbiAgICA6IHByb3BzLk1lbnVJdGVtcztcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGlkPVwiTmF2QmFyXCJcbiAgICAgIGNsYXNzTmFtZT17YGZpeGVkIGJnLXRoZW1lLWZpbGwgdGV4dC10aGVtZS1iYXNlIGZsZXggaC0xNiB3LXNjcmVlbiBzaGFkb3ctbWQgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB6LTUwYH1cbiAgICA+XG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgb25sZWZ0PXt0cnVlfVxuICAgICAgICBpY29uPXttb2R1bGVJdGVtcy5pY29ufVxuICAgICAgICBwYXJlbnRDbGFzcz1cInctOCBoLThcIlxuICAgICAgICBjaGlsZENsYXNzPVwidy02IGgtNlwiXG4gICAgICAgIG1lbnVJdGVtPXttb2R1bGVJdGVtcy5tZW51c31cbiAgICAgIC8+XG5cbiAgICAgIDxNZW51QmFyIExpbmtJdGVtcz17bWVudUl0ZW1zfSAvPlxuXG4gICAgICA8SWNvbk1lbnVcbiAgICAgICAgb25sZWZ0PXtmYWxzZX1cbiAgICAgICAgaWNvbj17Y29udHJvbEl0ZW1zLmljb259XG4gICAgICAgIHBhcmVudENsYXNzPVwidy04IGgtOFwiXG4gICAgICAgIGNoaWxkQ2xhc3M9XCJ3LTYgaC02XCJcbiAgICAgICAgbWVudUl0ZW09e2NvbnRyb2xJdGVtcy5tZW51c31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IER5bmFtaWNJY29uIGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvZHluYW1pY2ljb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbSB7XG4gIGljb246IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufVxuXG5jb25zdCBJY29uTWVudTogRkM8e1xuICBvbmxlZnQ6IGJvb2xlYW47XG4gIGljb246IHN0cmluZztcbiAgcGFyZW50Q2xhc3M/OiBzdHJpbmc7XG4gIGNoaWxkQ2xhc3M6IHN0cmluZztcbiAgbWVudUl0ZW06IE1lbnVJdGVtW107XG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBtZW51SXRlbSA9ICFwcm9wcy5tZW51SXRlbVxuICAgID8gW3sgdGl0bGU6IFwiRHVtbXlcIiwgaWNvbjogXCJGaVVzZXJcIiwgaHJlZjogXCIvXCIgfV1cbiAgICA6IHByb3BzLm1lbnVJdGVtO1xuICBjb25zdCBbb3Blbk1lbnUsIHNldE9wZW5NZW51XSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctMTYgaC1hdXRvIG0tMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xuICAgICAgICAgIHNldE9wZW5NZW51KHRydWUpO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZml0IGgtZml0IHAtMiByb3VuZGVkLWZ1bGwgaG92ZXI6c2NhbGUtOTUgcGVlclwiXG4gICAgICA+XG4gICAgICAgIDxEeW5hbWljSWNvbiBpY29uPXtwcm9wcy5pY29ufSBjbGFzc05hbWU9e2Ake3Byb3BzLnBhcmVudENsYXNzfWB9IC8+XG4gICAgICA8L2J1dHRvbj5cblxuICAgICAge29wZW5NZW51ICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwiSWNvbk1lbnVzXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB6LTQwIGZsZXgtcm93IHRvcC0xMiBiZy10aGVtZS1tdXRlZCB3LWF1dG8gaC1hdXRvIG1heC1oLVtjYWxjKDEwMHZoLTc0cHgpXSBvdmVyZmxvdy1hdXRvIGJvcmRlciBib3JkZXItdGhlbWUtYm9yZGVyIHBsLTIgcHItOSBweS0zIG14LTIgcm91bmRlZC1tZCBzaGFkb3ctbWRcbiAgICAgICAgICBpbnZpc2libGUgb3BhY2l0eS0wIC10cmFuc2xhdGUteS1mdWxsIGhvdmVyOnZpc2libGUgaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6dHJhbnNsYXRlLXktMCBwZWVyLWZvY3VzOnZpc2libGUgcGVlci1mb2N1czpvcGFjaXR5LTEwMCBwZWVyLWZvY3VzOnRyYW5zbGF0ZS15LTBcbiAgICAgICAgICB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgc3BhY2UteS0yICR7XG4gICAgICAgICAgICBwcm9wcy5vbmxlZnQgPyBcImxlZnQtMFwiIDogXCJyaWdodC0wXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHttZW51SXRlbS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2luZGV4fSB0bz17aXRlbS5ocmVmfT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIHNldE9wZW5NZW51KCFvcGVuTWVudSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1jZW50ZXIgZmxleCBjdXJzb3ItcG9pbnRlciB0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxEeW5hbWljSWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcm9wcy5jaGlsZENsYXNzfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEljb25NZW51O1xuIiwgImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlua0l0ZW0gZnJvbSBcIi4vbGlua2l0ZW1cIjtcblxuZXhwb3J0IGludGVyZmFjZSBMaW5rU291cmNlIHtcbiAgaHJlZjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xufVxuXG5jb25zdCBNZW51QmFyOiBGQzx7IExpbmtJdGVtcz86IExpbmtTb3VyY2VbXSB9PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBMaW5rSXRlbXMgPSAhcHJvcHMuTGlua0l0ZW1zXG4gICAgPyBbeyBocmVmOiBcIi9cIiwgdGl0bGU6IFwiUklTVEFNQVwiIH1dXG4gICAgOiBwcm9wcy5MaW5rSXRlbXM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgaWQ9XCJNZW51QmFyXCJcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC1mdWxsIHctZml0IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1hdXRvIG92ZXJmbG93LXktaGlkZGVuXCJcbiAgICA+XG4gICAgICB7TGlua0l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgPExpbmtJdGVtIGtleT17aW5kZXh9IGhyZWY9e2l0ZW0uaHJlZn0gdGl0bGU9e2l0ZW0udGl0bGV9IC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVCYXI7XG4iLCAiLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmNvbnN0IExpbmtJdGVtOiBGQzx7IGhyZWY6IHN0cmluZzsgdGl0bGU6IHN0cmluZyB9PiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIHRvPXtwcm9wcy5ocmVmfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgaWQ9XCJNZW51SXRlbVwiXG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaC0xNiB3LWF1dG8gcHgtMiBpdGVtcy1jZW50ZXIgYWN0aXZlOnRleHQtdGhlbWUtaW52ZXJ0ZWQgaG92ZXI6dGV4dC10aGVtZS1zdHJvbmcgZ3JvdXBcIlxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgaC0wIHctZnVsbCBiZy10aGVtZS1tdXRlZCBiZy1vcGFjaXR5LTIwIHJvdW5kZWQtc20gZ3JvdXAtaG92ZXI6aC1mdWxsIHRyYW5zaXRpb24tYWxsIGVhc2Utb3V0IGR1cmF0aW9uLTcwMFwiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtMCB3LWZ1bGwgYmctdGhlbWUtbXV0ZWQgYmctb3BhY2l0eS01IHJvdW5kZWQtc20gZ3JvdXAtaG92ZXI6aC1mdWxsIHRyYW5zaXRpb24tYWxsIGVhc2Utb3V0IGR1cmF0aW9uLTcwMFwiPjwvc3Bhbj5cblxuICAgICAgICB7cHJvcHMudGl0bGV9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xpbms+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rSXRlbTtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBNeVByb2plY3RzKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlQcm9qZWN0cztcbiIsICJmdW5jdGlvbiBXb3JrT25JdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtdGhlbWUtc3Ryb25nIHRleHQtMnhsIG0tYXV0byBtdC0zXCI+XG4gICAgICBTb3JyeSwgSSdtIHN0aWxsIHdvcmtpbmcgb24gaXRcbiAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pbWcxLnBuZ1wiIGNsYXNzTmFtZT1cIm10LTEwIG0tYXV0byBvYmplY3QtY292ZXJcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrT25JdDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBUdXRvcmlhbFNoYXJlZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR1dG9yaWFsU2hhcmVkO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXQ7XG4iLCAiaW1wb3J0IHsgTGluaywgTWV0YUZ1bmN0aW9uLCBPdXRsZXQgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMaW5rSXRlbSBmcm9tIFwifi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2xpbmtpdGVtXCI7XG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIlJpc3RhbWF5YXxDb21wb25lbnRzXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudHMoKSB7XG4gIGNvbnN0IGNsYXNzTmFtZUxpbmsgPSBcImgtOSB3LTQwIGZvbnQtc2VtaWJvbGRcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2sgdGV4dC10aGVtZS1iYXNlIHotMFwiPlxuICAgICAgey8qIFNpZGViYXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGJsb2NrIHctMjggaC1bY2FsYygxMDAlLTY0cHgpXSBiZy10aGVtZS1maWxsIHotMjAgc2hhZG93LW1kXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC10aGVtZS1zdHJvbmcgdGV4dC14bCBmb250LXNlbWlib2xkIG10LTMgbWItNiBwbC0yXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvc2hhcmVkL2NvbXBvbmVudHNcIj5NeSBTdHVmZnM8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cIlNoYXJlZENvbXBTQlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1bY2FsYygxMDAlLTE0MHB4KV0gdGV4dC14cyBmb250LXNlbWlib2xkIG92ZXJmbG93LWF1dG8gb3ZlcmZsb3cteC1oaWRkZW4gcGwtMlwiXG4gICAgICAgID5cbiAgICAgICAgICA8TGlua0l0ZW0gdG89XCIuL2xheW91dFwiIHRpdGxlPVwiTGF5b3V0XCIgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfSAvPlxuICAgICAgICAgIDxMaW5rSXRlbSB0bz1cIi4vaW5wdXRcIiB0aXRsZT1cImlucHV0XCIgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfSAvPlxuICAgICAgICAgIDxMaW5rSXRlbSB0bz1cIi4vYnV0dG9uXCIgdGl0bGU9XCJCdXR0b25cIiBjbGFzc05hbWU9e2NsYXNzTmFtZUxpbmt9IC8+XG4gICAgICAgICAgPExpbmtJdGVtIHRvPVwiLi90YWJsZVwiIHRpdGxlPVwiVGFibGVcIiBjbGFzc05hbWU9e2NsYXNzTmFtZUxpbmt9IC8+XG4gICAgICAgICAgPExpbmtJdGVtXG4gICAgICAgICAgICB0bz1cIi4vZHluYW1pY2ljb25cIlxuICAgICAgICAgICAgdGl0bGU9XCJEeW5hbWljIEljb25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVMaW5rfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPExpbmtJdGVtXG4gICAgICAgICAgICB0bz1cIi4vdHJlZXZpZXdcIlxuICAgICAgICAgICAgdGl0bGU9XCJUcmVldmlld1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZUxpbmt9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC10aGVtZS1zdHJvbmcgdGV4dC14cyBmb250LXNlbWlib2xkIG10LTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBSZWFjdC5KUyArIFRhaWx3aW5kIENTU1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ29udGVudCAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBsZWZ0LTQwIHctW2NhbGMoMTAwJS0xOTJweCldIGgtYXV0byBwLTIgei0xMFwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuY29uc3QgTGlua0l0ZW06IEZDPHsgdG86IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgY2xhc3NOYW1lOiBzdHJpbmcgfT4gPSAoXG4gIHByb3BzXG4pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGluayB0bz17cHJvcHMudG99PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBpZD1cIk1lbnVJdGVtXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgYWN0aXZlOnRleHQtdGhlbWUtaW52ZXJ0ZWQgaG92ZXI6dGV4dC10aGVtZS1zdHJvbmcgZ3JvdXAgJHtwcm9wcy5jbGFzc05hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBoLWZ1bGwgdy0wIGJnLXRoZW1lLW11dGVkIGJnLW9wYWNpdHktMjAgcm91bmRlZC1zbSBncm91cC1ob3Zlcjp3LVtjYWxjKDEwMCUrMTAwcHgpXSB0cmFuc2l0aW9uLWFsbCBlYXNlLW91dCBkdXJhdGlvbi01MDBcIj48L3NwYW4+XG4gICAgICAgIHtwcm9wcy50aXRsZX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvTGluaz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtJdGVtO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIER5bmFtaWNJY29uKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0ljb247XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gRm9ybUNvbnRyb2woKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udHJvbDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBUcmVldmlldygpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyZWV2aWV3O1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIEJ1dHRvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBMYXlvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gQ29tcG9uZW50c1NoYXJlZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtY2VudGVyIG0tYXV0b1wiPlxuICAgICAgTGV0J3MgZXhwbG9yZSBteSBVSSBDb21wb25lbnRzXG4gICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaW1nMi5wbmdcIiBjbGFzc05hbWU9XCJteS02IG14LWF1dG8gb2JqZWN0LWZpbGxcIiAvPlxuICAgICAgSnVzdCBzZWxlY3Qgb24gbGVmdCBzaWRlYmFyXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudHNTaGFyZWQ7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZnVuY3Rpb24gSW5wdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiIsICJpbXBvcnQgV29ya09uSXQgZnJvbSBcIn4vYXBwbGljYXRpb24vY29tcG9uZW50cy93b3Jrb25pdFwiO1xuXG5mdW5jdGlvbiBUYWJsZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPFdvcmtPbkl0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuIiwgImltcG9ydCBXb3JrT25JdCBmcm9tIFwifi9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3dvcmtvbml0XCI7XG5cbmZ1bmN0aW9uIFNoYXJlZEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8V29ya09uSXQgLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcmVkSW5kZXg7XG4iLCAiaW1wb3J0IFdvcmtPbkl0IGZyb20gXCJ+L2FwcGxpY2F0aW9uL2NvbXBvbmVudHMvd29ya29uaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxXb3JrT25JdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHNtOmZsZXggZmxleC13YXJwIHctZnVsbCB0ZXh0LXRoZW1lLWJhc2UgaXRlbXMtY2VudGVyIGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBweC0xMCBweS03XCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2ltZzMucG5nXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzY2FsZS03NSBzbTpzY2FsZS0xMDAgbS1hdXRvIG9iamVjdC1jb3ZlclwiXG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgc206dGV4dC1sZyBtYi0xXCI+XG4gICAgICAgICAgSGVsbG8gdGhlcmUgSSdte1wiIFwifVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNtOnRleHQtbWQgdGV4dC1iYXNlIHNtOnRleHQteGwgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgQW5qYXJ7XCIgXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIEkgY2FsbCB0aGlzXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206dGV4dC1tZCB0ZXh0LWJhc2Ugc206dGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBSSVNUQU1BWUEse1wiIFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBpdCBqdXN0IG15IHBlcnNvbmFsIHdlYnNpdGUgYnVpbHQgYnlcbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+LSBSZW1peCBKUyB3aXRoIFR5cGVzY3JpcHQ8L2xpPlxuICAgICAgICAgICAgPGxpPi0gVGFpbHdpbmQgQ1NTPC9saT5cbiAgICAgICAgICAgIDxsaT4tIE1vbmdvREI8L2xpPlxuICAgICAgICAgICAgPGxpPi0gQW5kIE1vcmU8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgVGhhbmtzIGEgbG90IGZvciB2aXNpdGluZyBwbGVhc2UgdGFrZSBhIGxvb2sgd2hhdCdzIGdvaW5nIG9uIGhlcmVcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc206ZmxleCBmbGV4LXdhcnAgdy1mdWxsIHRleHQtdGhlbWUtYmFzZSBpdGVtcy1jZW50ZXIgYWxpZ24tbWlkZGxlIGp1c3RpZnktY2VudGVyIHB4LTEwIHB5LTdcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvaW1nMy5wbmdcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNjYWxlLTc1IHNtOnNjYWxlLTEwMCBtLWF1dG8gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZyBzbTp0ZXh0LWxnIG1iLTFcIj5cbiAgICAgICAgICBIZWxsbyB0aGVyZSBJJ217XCIgXCJ9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic206dGV4dC1tZCB0ZXh0LWJhc2Ugc206dGV4dC14bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICBBbmphcntcIiBcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgSSBjYWxsIHRoaXNcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbTp0ZXh0LW1kIHRleHQtYmFzZSBzbTp0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIFJJU1RBTUFZQSx7XCIgXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIGl0IGp1c3QgbXkgcGVyc29uYWwgd2Vic2l0ZSBidWlsdCBieVxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT4tIFJlbWl4IEpTIHdpdGggVHlwZXNjcmlwdDwvbGk+XG4gICAgICAgICAgICA8bGk+LSBUYWlsd2luZCBDU1M8L2xpPlxuICAgICAgICAgICAgPGxpPi0gTW9uZ29EQjwvbGk+XG4gICAgICAgICAgICA8bGk+LSBBbmQgTW9yZTwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICBUaGFua3MgYSBsb3QgZm9yIHZpc2l0aW5nIHBsZWFzZSB0YWtlIGEgbG9vayB3aGF0J3MgZ29pbmcgb24gaGVyZVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOicyYTUzNWIzMycsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUU5ZQlZaNjQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJLTVdYQVFSLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSzNBWllHUFguanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVhCWE9LVlNELmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYXV0aC9sb2dpbic6eydpZCc6J3JvdXRlcy9hdXRoL2xvZ2luJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2F1dGgvbG9naW4nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYXV0aC9sb2dpbi1MVVEyR0dSRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVdSNElJV04uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2NvcmUvaW5kZXgnOnsnaWQnOidyb3V0ZXMvY29yZS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjb3JlJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jb3JlL2luZGV4LUJWRjNJNlZZLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtTElQQjY2RFguanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvYWJvdXQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlZC9hYm91dCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2Fib3V0L2luZGV4LTQ0NjZPTUZPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RV1I0SUlXTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL2NvbXBvbmVudHMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMtUTRWR0FVVk8uanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9idXR0b24nOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvYnV0dG9uJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMnLCdwYXRoJzonYnV0dG9uJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2J1dHRvbi1YRzQzVkVORy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVdSNElJV04uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWNpY29uJzp7J2lkJzoncm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2R5bmFtaWNpY29uJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMnLCdwYXRoJzonZHluYW1pY2ljb24nLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvZHluYW1pY2ljb24tRDZZWjVGSDIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFXUjRJSVdOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9mb3JtY29udHJvbCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9mb3JtY29udHJvbCcsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9jb21wb25lbnRzJywncGF0aCc6J2Zvcm1jb250cm9sJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2Zvcm1jb250cm9sLUFQSElINjVULmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RV1I0SUlXTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cycsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9pbmRleC01TUNMNVdFSC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2lucHV0Jzp7J2lkJzoncm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2lucHV0JywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMnLCdwYXRoJzonaW5wdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQtUlZKM0tHVDIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFXUjRJSVdOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQnOnsnaWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0JywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMnLCdwYXRoJzonbGF5b3V0JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC1ZRk1QTlBPNi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVdSNElJV04uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlJzp7J2lkJzoncm91dGVzL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlJywncGFyZW50SWQnOidyb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMnLCdwYXRoJzondGFibGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUtUUpXU0pGNFAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFXUjRJSVdOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy90cmVldmlldyc6eydpZCc6J3JvdXRlcy9zaGFyZWQvY29tcG9uZW50cy90cmVldmlldycsJ3BhcmVudElkJzoncm91dGVzL3NoYXJlZC9jb21wb25lbnRzJywncGF0aCc6J3RyZWV2aWV3JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9jb21wb25lbnRzL3RyZWV2aWV3LVJCRUZaQzZDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RV1I0SUlXTi5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc2hhcmVkL2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlZC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzaGFyZWQnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NoYXJlZC9pbmRleC02NDM2Q1FKTy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVdSNElJV04uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4Jzp7J2lkJzoncm91dGVzL3NoYXJlZC9teXByb2plY3RzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NoYXJlZC9teXByb2plY3RzJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvbXlwcm9qZWN0cy9pbmRleC1XSUNVN0JIMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVdSNElJV04uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NoYXJlZC90dXRvcmlhbC9pbmRleCc6eydpZCc6J3JvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc2hhcmVkL3R1dG9yaWFsJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zaGFyZWQvdHV0b3JpYWwvaW5kZXgtUUhUWUpPVVEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFXUjRJSVdOLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtMkE1MzVCMzMuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsc0NBQXNDO0FBQUEsTUFDbkUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxtQ0FBbUM7QUFBQSxNQUNoRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBR2pDLEFBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxnQkFBZ0IsUUFBUTtBQUk1QixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxjQUFjO0FBQUE7QUFBQTtBQUUxQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLGNBQWM7QUFBQTtBQUFBO0FBRTFDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFFMUMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sY0FBYztBQUFBO0FBQUE7QUFHMUMsQUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxVQUFVO0FBQUEsTUFDdkMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxxQkFBcUI7QUFBQSxNQUNsRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsV0FBVztBQUFBLE1BQ3hDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMscUJBQXFCO0FBQUEsTUFDbEQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsWUFBWTtBQUFBLE1BQ3pDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsZUFBZTtBQUFBLE1BQzVDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxXQUFXO0FBQUEsTUFDeEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxpQkFBaUI7QUFBQSxNQUM5QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGVBQWU7QUFBQSxNQUM1QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLHFCQUFxQjtBQUFBLE1BQ2xELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsb0JBQW9CO0FBQUEsTUFDakQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxhQUFhO0FBQUEsTUFDMUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxtQkFBbUI7QUFBQSxNQUNoRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLG1CQUFtQjtBQUFBLE1BQ2hELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsYUFBYTtBQUFBLE1BQzFDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsaUJBQWlCO0FBQUEsTUFDOUMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ3RPbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFxQzs7O0FDQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQStCO0FBQy9CLG1CQUE0QjtBQUdiLHVCQUNiLFNBQ0Esb0JBQ0EsaUJBQ0EsY0FDQTtBQUNBLFFBQU0sU0FBUyxrQ0FDYixvQ0FBQywwQkFBRDtBQUFBLElBQWEsU0FBUztBQUFBLElBQWMsS0FBSyxRQUFRO0FBQUE7QUFHbkQsa0JBQWdCLElBQUksZ0JBQWdCO0FBRXBDLFNBQU8sSUFBSSxTQUFTLG9CQUFvQixRQUFRO0FBQUEsSUFDOUMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBO0FBQUE7OztBQ2xCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVFPOzs7Ozs7QUNSUDtBQUFBLG9CQUFvQzs7O0FDQXBDO0FBQUEsbUJBQTBDO0FBTzFDLElBQU0saUJBQWlCO0FBQUEsRUFDckIsVUFBVTtBQUFBLEVBQ1YsYUFBYTtBQUFBO0FBR1IsSUFBTSxnQkFBZ0IsZ0NBQTRCO0FBQ2xELElBQU0saUJBQWlCLGNBQWM7OztBQ2I1QztBQUFBLG9CQUE0Qzs7O0FDQTVDO0FBQ0EsY0FBeUI7QUFFekIsSUFBTSxjQUF1RCxDQUFDLFVBQVU7QUFDdEUsUUFBVyxrQkFBVSxTQUFWO0FBRVgsUUFBTSxVQUF1QixNQUFNLE1BQU07QUFFekMsU0FDRSwwREFFRSxvQ0FBQyxTQUFEO0FBQUEsSUFBUyxXQUFXLE1BQU07QUFBQTtBQUFBO0FBS2hDLElBQU8sc0JBQVE7OztBRFpSLElBQU0sZUFBZSxNQUFNO0FBQ2hDLFFBQU0sQ0FBQyxVQUFVLGVBQWUsNEJBQVM7QUFDekMsUUFBTSxFQUFFLGdCQUFnQiw4QkFBVztBQUVuQyxTQUNFLG9EQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9EQUFDLFVBQUQ7QUFBQSxJQUNFLFNBQVMsQ0FBQyxVQUErQztBQUN2RCxrQkFBWTtBQUFBO0FBQUEsSUFFZCxXQUFVO0FBQUEsS0FFVixvREFBQyxxQkFBRDtBQUFBLElBQWEsTUFBSztBQUFBLElBQVUsV0FBVTtBQUFBLE9BRXZDLFlBQ0Msb0RBQUMsT0FBRDtBQUFBLElBQ0UsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUlYLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUEwQyxnQkFHMUQsb0RBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxDQUFDLFVBQStDO0FBQ3ZELGtCQUFZO0FBQUE7QUFBQSxJQUVkLFdBQVU7QUFBQSxLQUNYLFNBR0Qsb0RBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxDQUFDLFVBQStDO0FBQ3ZELGtCQUFZO0FBQUE7QUFBQSxJQUVkLFdBQVU7QUFBQSxLQUNYLFVBR0Qsb0RBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxDQUFDLFVBQStDO0FBQ3ZELGtCQUFZO0FBQUE7QUFBQSxJQUVkLFdBQVU7QUFBQSxLQUNYLFdBR0Qsb0RBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxDQUFDLFVBQStDO0FBQ3ZELGtCQUFZO0FBQUE7QUFBQSxJQUVkLFdBQVU7QUFBQSxLQUNYLFVBR0Qsb0RBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxDQUFDLFVBQStDO0FBQ3ZELGtCQUFZO0FBQUE7QUFBQSxJQUVkLFdBQVU7QUFBQSxLQUNYO0FBQUE7OztBRWhFWDtBQUFBLG9CQUEwQjs7O0FDQTFCO0FBQUEsb0JBQW9DO0FBQ3BDLG9CQUFxQjtBQVNyQixJQUFNLFdBTUQsQ0FBQyxVQUFVO0FBQ2QsUUFBTSxXQUFXLENBQUMsTUFBTSxXQUNwQixDQUFDLEVBQUUsT0FBTyxTQUFTLE1BQU0sVUFBVSxNQUFNLFNBQ3pDLE1BQU07QUFDVixRQUFNLENBQUMsVUFBVSxlQUFlLDRCQUFTO0FBRXpDLFNBQ0Usb0RBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0RBQUMsVUFBRDtBQUFBLElBQ0UsU0FBUyxDQUFDLFVBQStDO0FBQ3ZELGtCQUFZO0FBQUE7QUFBQSxJQUVkLFdBQVU7QUFBQSxLQUVWLG9EQUFDLHFCQUFEO0FBQUEsSUFBYSxNQUFNLE1BQU07QUFBQSxJQUFNLFdBQVcsR0FBRyxNQUFNO0FBQUEsT0FHcEQsWUFDQyxvREFBQyxPQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXO0FBQUE7QUFBQSxrREFHVCxNQUFNLFNBQVMsV0FBVztBQUFBLEtBRzNCLFNBQVMsSUFBSSxDQUFDLE1BQU0sVUFDbkIsb0RBQUMsb0JBQUQ7QUFBQSxJQUFNLEtBQUs7QUFBQSxJQUFPLElBQUksS0FBSztBQUFBLEtBQ3pCLG9EQUFDLFVBQUQ7QUFBQSxJQUNFLFNBQVMsQ0FBQyxVQUErQztBQUFBO0FBQUEsSUFHekQsV0FBVTtBQUFBLEtBRVYsb0RBQUMscUJBQUQ7QUFBQSxJQUNFLE1BQU0sS0FBSztBQUFBLElBQ1gsV0FBVyxHQUFHLE1BQU07QUFBQSxNQUVyQixLQUFLO0FBQUE7QUFVdEIsSUFBTyxtQkFBUTs7O0FDaEVmOzs7QUNBQTtBQUNBLG9CQUEwQjtBQUMxQixvQkFBcUI7QUFFckIsSUFBTSxXQUFnRCxDQUFDLFVBQVU7QUFDL0QsU0FDRSxvREFBQyxvQkFBRDtBQUFBLElBQU0sSUFBSSxNQUFNO0FBQUEsS0FDZCxvREFBQyxVQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFVO0FBQUEsS0FFVixvREFBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsTUFDaEIsb0RBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLE1BRWYsTUFBTTtBQUFBO0FBTWYsSUFBTyxtQkFBUTs7O0FEWmYsSUFBTSxVQUE0QyxDQUFDLFVBQVU7QUFDM0QsUUFBTSxZQUFZLENBQUMsTUFBTSxZQUNyQixDQUFDLEVBQUUsTUFBTSxLQUFLLE9BQU8sZUFDckIsTUFBTTtBQUNWLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLEtBRVQsVUFBVSxJQUFJLENBQUMsTUFBTSxVQUNwQixvQ0FBQyxrQkFBRDtBQUFBLElBQVUsS0FBSztBQUFBLElBQU8sTUFBTSxLQUFLO0FBQUEsSUFBTSxPQUFPLEtBQUs7QUFBQTtBQUFBO0FBTTNELElBQU8sa0JBQVE7OztBRkpmLElBQU0sU0FJRCxDQUFDLFVBQVU7QUFDZCxRQUFNLGNBQWMsQ0FBQyxNQUFNLGNBQ3ZCO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixPQUFPLENBQUMsRUFBRSxNQUFNLFVBQVUsT0FBTyxRQUFRLE1BQU07QUFBQSxNQUVqRCxNQUFNO0FBRVYsUUFBTSxlQUFlLENBQUMsTUFBTSxlQUN4QjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTyxDQUFDLEVBQUUsTUFBTSxXQUFXLE9BQU8sU0FBUyxNQUFNO0FBQUEsTUFFbkQsTUFBTTtBQUVWLFFBQU0sWUFBWSxDQUFDLE1BQU0sWUFDckI7QUFBQSxJQUNFLEVBQUUsTUFBTSxLQUFLLE9BQU87QUFBQSxJQUNwQixFQUFFLE1BQU0sc0JBQXNCLE9BQU87QUFBQSxJQUNyQyxFQUFFLE1BQU0sb0JBQW9CLE9BQU87QUFBQSxJQUNuQyxFQUFFLE1BQU0sc0JBQXNCLE9BQU87QUFBQSxJQUNyQyxFQUFFLE1BQU0saUJBQWlCLE9BQU87QUFBQSxNQUVsQyxNQUFNO0FBRVYsU0FDRSxvREFBQyxPQUFEO0FBQUEsSUFDRSxJQUFHO0FBQUEsSUFDSCxXQUFXO0FBQUEsS0FFWCxvREFBQyxrQkFBRDtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTSxZQUFZO0FBQUEsSUFDbEIsYUFBWTtBQUFBLElBQ1osWUFBVztBQUFBLElBQ1gsVUFBVSxZQUFZO0FBQUEsTUFHeEIsb0RBQUMsaUJBQUQ7QUFBQSxJQUFTLFdBQVc7QUFBQSxNQUVwQixvREFBQyxrQkFBRDtBQUFBLElBQ0UsUUFBUTtBQUFBLElBQ1IsTUFBTSxhQUFhO0FBQUEsSUFDbkIsYUFBWTtBQUFBLElBQ1osWUFBVztBQUFBLElBQ1gsVUFBVSxhQUFhO0FBQUE7QUFBQTtBQU0vQixJQUFPLGlCQUFROzs7QUpsRUEsZ0JBQWdCLEVBQUUsWUFBbUI7QUFDbEQsUUFBTSxDQUFDLFVBQVUsZUFBZSw0QkFBUztBQUV6QyxTQUNFLG9DQUFDLGdCQUFEO0FBQUEsSUFBZ0IsT0FBTyxFQUFFLFVBQVU7QUFBQSxLQUNqQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFXLEdBQUc7QUFBQSxLQUNqQixvQ0FBQyxnQkFBRCxPQUNBLG9DQUFDLFFBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILFdBQVc7QUFBQSxLQUVWLFdBRUgsb0NBQUMsT0FBRDtBQUFBLElBQUssSUFBRztBQUFBLElBQWUsV0FBVTtBQUFBLEtBQy9CLG9DQUFDLGNBQUQ7QUFBQTs7O0FEWkgsSUFBTSxPQUFxQixNQUFNO0FBQ3RDLFNBQU8sRUFBRSxPQUFPO0FBQUE7QUFTWCxJQUFNLFFBQXVCLE1BQU0sQ0FBQyxFQUFFLEtBQUssY0FBYyxNQUFNO0FBSXZELGVBQWU7QUFDNUIsU0FDRSxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVCxvQ0FBQyxRQUFELE1BQ0Usb0NBQUMsUUFBRDtBQUFBLElBQU0sU0FBUTtBQUFBLE1BQ2Qsb0NBQUMsUUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLElBQVcsU0FBUTtBQUFBLE1BQzlCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEtBQUk7QUFBQSxJQUFVLE1BQUs7QUFBQSxNQUN6QixvQ0FBQyxvQkFBRCxPQUNBLG9DQUFDLHFCQUFELFFBRUYsb0NBQUMsUUFBRCxNQUNFLG9DQUFDLFFBQUQsTUFDRSxvQ0FBQyxzQkFBRCxRQUVGLG9DQUFDLGlDQUFELE9BQ0Esb0NBQUMsdUJBQUQsT0FDQSxvQ0FBQywwQkFBRDtBQUFBOzs7QVN6Q1I7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUE7QUFBQSxvQkFBb0I7QUFDbEIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FBcUQsa0NBRWxFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLEtBQUk7QUFBQSxJQUFtQixXQUFVO0FBQUE7QUFBQTtBQUs1QyxJQUFPLG1CQUFROzs7QURQZixzQkFBc0I7QUFDcEIsU0FDRSwwREFDRSxvQ0FBQyxrQkFBRDtBQUFBO0FBS04sSUFBTyxxQkFBUTs7O0FFVmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLDBCQUEwQjtBQUN4QixTQUNFLDBEQUNFLG9DQUFDLGtCQUFEO0FBQUE7QUFLTixJQUFPLG1CQUFROzs7QUNWZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsaUJBQWlCO0FBQ2YsU0FDRSwwREFDRSxvQ0FBQyxrQkFBRDtBQUFBO0FBS04sSUFBTyxnQkFBUTs7O0FDVmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTJDOzs7QUNBM0M7QUFBQSxvQkFBMEI7QUFDMUIsb0JBQXFCO0FBRXJCLElBQU0sWUFBaUUsQ0FDckUsVUFDRztBQUNILFNBQ0Usb0RBQUMsb0JBQUQ7QUFBQSxJQUFNLElBQUksTUFBTTtBQUFBLEtBQ2Qsb0RBQUMsVUFBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVyx1RkFBdUYsTUFBTTtBQUFBLEtBRXhHLG9EQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxNQUNmLE1BQU07QUFBQTtBQU1mLElBQU8sb0JBQVE7OztBRGhCUixJQUFNLFFBQXFCLE1BQU07QUFDdEMsU0FBTyxFQUFFLE9BQU87QUFBQTtBQUdILHNCQUFzQjtBQUNuQyxRQUFNLGdCQUFnQjtBQUV0QixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUViLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLG9CQUFEO0FBQUEsSUFBTSxJQUFHO0FBQUEsS0FBcUIsZUFHaEMsb0NBQUMsT0FBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsV0FBVTtBQUFBLEtBRVYsb0NBQUMsbUJBQUQ7QUFBQSxJQUFVLElBQUc7QUFBQSxJQUFXLE9BQU07QUFBQSxJQUFTLFdBQVc7QUFBQSxNQUNsRCxvQ0FBQyxtQkFBRDtBQUFBLElBQVUsSUFBRztBQUFBLElBQVUsT0FBTTtBQUFBLElBQVEsV0FBVztBQUFBLE1BQ2hELG9DQUFDLG1CQUFEO0FBQUEsSUFBVSxJQUFHO0FBQUEsSUFBVyxPQUFNO0FBQUEsSUFBUyxXQUFXO0FBQUEsTUFDbEQsb0NBQUMsbUJBQUQ7QUFBQSxJQUFVLElBQUc7QUFBQSxJQUFVLE9BQU07QUFBQSxJQUFRLFdBQVc7QUFBQSxNQUNoRCxvQ0FBQyxtQkFBRDtBQUFBLElBQ0UsSUFBRztBQUFBLElBQ0gsT0FBTTtBQUFBLElBQ04sV0FBVztBQUFBLE1BRWIsb0NBQUMsbUJBQUQ7QUFBQSxJQUNFLElBQUc7QUFBQSxJQUNILE9BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxPQUdmLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUFvRSw2QkFNckYsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsc0JBQUQ7QUFBQTs7O0FFNUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSx3QkFBdUI7QUFDckIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxrQkFBRDtBQUFBO0FBS04sSUFBTyx1QkFBUTs7O0FDVmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLHVCQUF1QjtBQUNyQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLGtCQUFEO0FBQUE7QUFLTixJQUFPLHNCQUFROzs7QUNWZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsb0JBQW9CO0FBQ2xCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsa0JBQUQ7QUFBQTtBQUtOLElBQU8sbUJBQVE7OztBQ1ZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxrQkFBa0I7QUFDaEIsU0FDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxrQkFBRDtBQUFBO0FBS04sSUFBTyxpQkFBUTs7O0FDVmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLG1CQUFrQjtBQUNoQixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLGtCQUFEO0FBQUE7QUFLTixJQUFPLGlCQUFROzs7QUNWZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsNEJBQTRCO0FBQzFCLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQThCLGtDQUUzQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxLQUFJO0FBQUEsSUFBbUIsV0FBVTtBQUFBLE1BQTZCO0FBQUE7QUFNekUsSUFBTyxxQkFBUTs7O0FDWmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLGlCQUFpQjtBQUNmLFNBQ0Usb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsa0JBQUQ7QUFBQTtBQUtOLElBQU8sZ0JBQVE7OztBQ1ZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxpQkFBaUI7QUFDZixTQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLGtCQUFEO0FBQUE7QUFLTixJQUFPLGdCQUFROzs7QUNWZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsdUJBQXVCO0FBQ3JCLFNBQ0UsMERBQ0Usb0NBQUMsa0JBQUQ7QUFBQTtBQUtOLElBQU8saUJBQVE7OztBQ1ZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZSxpQkFBaUI7QUFDOUIsU0FDRSxvQ0FBQyxPQUFELE1BQ0Usb0NBQUMsa0JBQUQ7QUFBQTs7O0FDTE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFlLGtCQUFpQjtBQUM5QixTQUNFLG9DQUFDLE9BQUQsTUFDRSxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFVO0FBQUEsS0FDYixvQ0FBQyxPQUFEO0FBQUEsSUFDRSxLQUFJO0FBQUEsSUFDSixXQUFVO0FBQUEsTUFFWixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FBMEIsbUJBQ3hCLEtBQ2hCLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUNiLEtBQUksU0FDQyxNQUNELGVBRVAsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2IsS0FBSSxjQUNNLE1BQ04sd0NBRVAsb0NBQUMsTUFBRCxNQUNFLG9DQUFDLE1BQUQsTUFBSSwrQkFDSixvQ0FBQyxNQUFELE1BQUksbUJBQ0osb0NBQUMsTUFBRCxNQUFJLGNBQ0osb0NBQUMsTUFBRCxNQUFJLGdCQUNEO0FBQUE7OztBQ3pCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWUsa0JBQWlCO0FBQzlCLFNBQ0Usb0NBQUMsT0FBRCxNQUNFLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVU7QUFBQSxLQUNiLG9DQUFDLE9BQUQ7QUFBQSxJQUNFLEtBQUk7QUFBQSxJQUNKLFdBQVU7QUFBQSxNQUVaLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLFdBQVU7QUFBQSxLQUEwQixtQkFDeEIsS0FDaEIsb0NBQUMsUUFBRDtBQUFBLElBQU0sV0FBVTtBQUFBLEtBQ2IsS0FBSSxTQUNDLE1BQ0QsZUFFUCxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxXQUFVO0FBQUEsS0FDYixLQUFJLGNBQ00sTUFDTix3Q0FFUCxvQ0FBQyxNQUFELE1BQ0Usb0NBQUMsTUFBRCxNQUFJLCtCQUNKLG9DQUFDLE1BQUQsTUFBSSxtQkFDSixvQ0FBQyxNQUFELE1BQUksY0FDSixvQ0FBQyxNQUFELE1BQUksZ0JBQ0Q7QUFBQTs7O0FDekJmO0FBQUEsSUFBTywwQkFBUSxFQUFDLFdBQVUsWUFBVyxTQUFRLEVBQUMsVUFBUyxtQ0FBa0MsV0FBVSxDQUFDLG9DQUFtQyx1Q0FBcUMsVUFBUyxFQUFDLFFBQU8sRUFBQyxNQUFLLFFBQU8sWUFBVyxRQUFVLFFBQU8sSUFBRyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywyQkFBMEIsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8scUJBQW9CLEVBQUMsTUFBSyxxQkFBb0IsWUFBVyxRQUFPLFFBQU8sY0FBYSxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyx3Q0FBdUMsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLHFCQUFvQixFQUFDLE1BQUsscUJBQW9CLFlBQVcsUUFBTyxRQUFPLFFBQU8sU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsd0NBQXVDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGdCQUFlLEVBQUMsTUFBSyxnQkFBZSxZQUFXLFFBQU8sUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1DQUFrQyxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyw2QkFBNEIsRUFBQyxNQUFLLDZCQUE0QixZQUFXLFFBQU8sUUFBTyxnQkFBZSxTQUFRLE1BQUssaUJBQWdCLFFBQVUsVUFBUyxnREFBK0MsV0FBVSxDQUFDLHFDQUFvQyxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLDRCQUEyQixFQUFDLE1BQUssNEJBQTJCLFlBQVcsUUFBTyxRQUFPLHFCQUFvQixTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUywrQ0FBOEMsV0FBVSxRQUFVLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sbUNBQWtDLEVBQUMsTUFBSyxtQ0FBa0MsWUFBVyw0QkFBMkIsUUFBTyxVQUFTLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLHNEQUFxRCxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sd0NBQXVDLEVBQUMsTUFBSyx3Q0FBdUMsWUFBVyw0QkFBMkIsUUFBTyxlQUFjLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJEQUEwRCxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sd0NBQXVDLEVBQUMsTUFBSyx3Q0FBdUMsWUFBVyw0QkFBMkIsUUFBTyxlQUFjLFNBQVEsUUFBVSxpQkFBZ0IsUUFBVSxVQUFTLDJEQUEwRCxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sa0NBQWlDLEVBQUMsTUFBSyxrQ0FBaUMsWUFBVyw0QkFBMkIsUUFBTyxRQUFVLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLHFEQUFvRCxXQUFVLFFBQVUsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxrQ0FBaUMsRUFBQyxNQUFLLGtDQUFpQyxZQUFXLDRCQUEyQixRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMscURBQW9ELFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxtQ0FBa0MsRUFBQyxNQUFLLG1DQUFrQyxZQUFXLDRCQUEyQixRQUFPLFVBQVMsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsc0RBQXFELFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxrQ0FBaUMsRUFBQyxNQUFLLGtDQUFpQyxZQUFXLDRCQUEyQixRQUFPLFNBQVEsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMscURBQW9ELFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyxxQ0FBb0MsRUFBQyxNQUFLLHFDQUFvQyxZQUFXLDRCQUEyQixRQUFPLFlBQVcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsd0RBQXVELFdBQVUsQ0FBQyxxQ0FBb0MsYUFBWSxPQUFNLGFBQVksT0FBTSxvQkFBbUIsT0FBTSxvQkFBbUIsU0FBTyx1QkFBc0IsRUFBQyxNQUFLLHVCQUFzQixZQUFXLFFBQU8sUUFBTyxVQUFTLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLDBDQUF5QyxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sa0NBQWlDLEVBQUMsTUFBSyxrQ0FBaUMsWUFBVyxRQUFPLFFBQU8scUJBQW9CLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLHFEQUFvRCxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0NBQStCLEVBQUMsTUFBSyxnQ0FBK0IsWUFBVyxRQUFPLFFBQU8sbUJBQWtCLFNBQVEsTUFBSyxpQkFBZ0IsUUFBVSxVQUFTLG1EQUFrRCxXQUFVLENBQUMscUNBQW9DLGFBQVksT0FBTSxhQUFZLE9BQU0sb0JBQW1CLE9BQU0sb0JBQW1CLFdBQVEsT0FBTTs7O0E3Qm9CNXRMLElBQU0sUUFBUSxFQUFFLFFBQVE7QUFDeEIsSUFBTSxTQUFTO0FBQUEsRUFDcEIsUUFBUTtBQUFBLElBQ04sSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQ0FBa0M7QUFBQSxJQUM5QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdDQUFnQztBQUFBLElBQzVCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNkJBQTZCO0FBQUEsSUFDekIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiw0QkFBNEI7QUFBQSxJQUN4QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHdDQUF3QztBQUFBLElBQ3BDLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosd0NBQXdDO0FBQUEsSUFDcEMsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixxQ0FBcUM7QUFBQSxJQUNqQyxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLG1DQUFtQztBQUFBLElBQy9CLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosbUNBQW1DO0FBQUEsSUFDL0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQ0FBa0M7QUFBQSxJQUM5QixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGtDQUFrQztBQUFBLElBQzlCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosa0NBQWtDO0FBQUEsSUFDOUIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWix1QkFBdUI7QUFBQSxJQUNuQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLHFCQUFxQjtBQUFBLElBQ2pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVoscUJBQXFCO0FBQUEsSUFDakIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOzs7QURqSmQsd0JBQXdCLE9BQU8sU0FBUztBQUN0QyxNQUFJO0FBQ0osTUFBSTtBQUVKLE1BQUksTUFBTSxpQkFBaUIsTUFBTTtBQUMvQix3QkFBb0IsTUFBTTtBQUFBO0FBRzVCLFFBQU0sYUFBYSxNQUFNLFFBQVE7QUFDakMsUUFBTSx1QkFBdUIsTUFBTSxRQUFRO0FBRTNDLE1BQUksY0FBYyxRQUFRLFlBQVksS0FBSyxhQUFhO0FBQ3RELDZCQUF5QixXQUFXLE1BQU0sS0FBSztBQUFBO0FBR2pELFFBQU0sY0FBYztBQUFBLElBQ2xCLCtCQUErQjtBQUFBLElBQy9CO0FBQUEsSUFDQSx1QkFBdUI7QUFBQTtBQUl6QixTQUFPLEtBQUssYUFBYSxRQUFRLENBQUMsUUFBUTtBQUN4QyxRQUFJLFlBQVksUUFBUSxNQUFNO0FBQzVCLGFBQU8sWUFBWTtBQUFBO0FBQUE7QUFJdkIsU0FBTztBQUFBO0FBR0YsSUFBTSxVQUFVLHlDQUFxQjtBQUFBLEVBQzFDO0FBQUEsRUFDQTtBQUFBLEVBQ0EsTUFBTTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
