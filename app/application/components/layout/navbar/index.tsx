import React, { FC } from "react";
import IconMenu from "./iconmenu";
import MenuBar from "./menubar";

export interface menuItems {
  icon: string;
  title: string;
  href: string;
}

export interface IconMenuItems {
  icon: string;
  menus: menuItems[];
}

export interface MenuBarItems {
  href: string;
  title: string;
}

const NavBar: FC<{
  ModuleItems?: IconMenuItems;
  ControlItems?: IconMenuItems;
  MenuItems?: MenuBarItems[];
}> = (props) => {
  const moduleItems = !props.ModuleItems
    ? {
        icon: "FiCpu",
        menus: [{ icon: "FiHome", title: "Home", href: "/" }],
      }
    : props.ModuleItems;

  const controlItems = !props.ControlItems
    ? {
        icon: "FiUser",
        menus: [{ icon: "FiLogIn", title: "Login", href: "/auth/login" }],
      }
    : props.ControlItems;

  const menuItems = !props.MenuItems
    ? [
        { href: "/", title: "Ristamaya" },
        { href: "/shared/components", title: "My Stuffs" },
        { href: "/shared/tutorial", title: "Tutorial" },
        { href: "/shared/myprojects", title: "My Projects" },
        { href: "/shared/about", title: "About" },
      ]
    : props.MenuItems;

  return (
    <div
      id="NavBar"
      className={`fixed bg-theme-fill text-theme-base flex h-16 w-screen shadow-md items-center justify-between z-50`}
    >
      <IconMenu
        onleft={true}
        icon={moduleItems.icon}
        parentClass="w-8 h-8"
        childClass="w-6 h-6"
        menuItem={moduleItems.menus}
      />

      <MenuBar LinkItems={menuItems} />

      <IconMenu
        onleft={false}
        icon={controlItems.icon}
        parentClass="w-8 h-8"
        childClass="w-6 h-6"
        menuItem={controlItems.menus}
      />
    </div>
  );
};

export default NavBar;
