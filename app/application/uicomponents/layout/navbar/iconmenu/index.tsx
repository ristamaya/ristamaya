import React, { FC, useState } from "react";
import { Link } from "remix";
import DynamicIcon from "~/application/uicomponents/dynamicicon";

export interface MenuItem {
  icon: string;
  title: string;
  href: string;
}

const IconMenu: FC<{
  onleft: boolean;
  icon: string;
  parentClass?: string;
  childClass: string;
  menuItem: MenuItem[];
}> = (props) => {
  const menuItem = !props.menuItem
    ? [{ title: "Dummy", icon: "FiUser", href: "/" }]
    : props.menuItem;
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="relative flex w-16 h-auto m-1 items-center justify-center">
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setOpenMenu(true);
        }}
        className="relative flex w-fit h-fit p-2 rounded-full hover:scale-95 peer"
      >
        <DynamicIcon icon={props.icon} className={`${props.parentClass}`} />
      </button>

      {openMenu && (
        <div
          id="IconMenus"
          className={`absolute z-40 flex-row top-12 bg-theme-muted w-auto h-auto max-h-[calc(100vh-74px)] overflow-auto border border-theme-border pl-2 pr-9 py-3 mx-2 rounded-md shadow-md
          invisible opacity-0 -translate-y-full hover:visible hover:opacity-100 hover:translate-y-0 peer-focus:visible peer-focus:opacity-100 peer-focus:translate-y-0
          transition-all duration-500 space-y-2 ${
            props.onleft ? "left-0" : "right-0"
          }`}
        >
          {menuItem.map((item, index) => (
            <Link key={index} to={item.href}>
              <button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  // setOpenMenu(!openMenu);
                }}
                className="items-center flex cursor-pointer text-sm"
              >
                <DynamicIcon
                  icon={item.icon}
                  className={`${props.childClass}`}
                />
                {item.title}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default IconMenu;
