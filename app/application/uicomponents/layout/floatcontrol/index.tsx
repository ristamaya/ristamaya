import React, { useState, useContext } from "react";
import DynamicIcon from "../../dynamicicon";
import { LayoutContext } from "../layout.context";

export const FloatControl = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const { setUseTheme } = useContext(LayoutContext);

  return (
    <div className="relative bg-theme-muted border-theme-border m-3 p-1 rounded-full border h-fit w-fit">
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setOpenMenu(true);
        }}
        className="relative flex w-fit h-fit rounded-full hover:opacity-80 peer"
      >
        <DynamicIcon icon="FiSlack" className="w-7 h-7" />
      </button>
      {openMenu && (
        <div
          className={`absolute z-40 flex-row bottom-[40px] right-0 bg-theme-muted w-fit h-fit max-h-[calc(100vh-74px)] overflow-auto border border-theme-border mx-2 rounded-md shadow-md
            invisible opacity-0 -translate-x-full hover:visible hover:opacity-100 hover:translate-x-0 peer-focus:visible peer-focus:opacity-100 peer-focus:translate-x-0 
            transition-all duration-500 px-1 text-center`}
          aria-hidden={true}
        >
          <span className="text-theme-strong text-sm font-semibold">
            Theme Color
          </span>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setUseTheme("theme-cyan");
            }}
            className="justify-center p-1 w-24 flex cursor-pointer text-md bg-cyan-600 my-1 rounded-sm hover:opacity-80"
          >
            Cyan
          </button>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setUseTheme("theme-amber");
            }}
            className="justify-center p-1 w-24 flex cursor-pointer text-md bg-amber-600 my-1 rounded-sm hover:opacity-80"
          >
            Amber
          </button>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setUseTheme("theme-indigo");
            }}
            className="justify-center p-1 w-24 flex cursor-pointer text-md bg-indigo-600 my-1 rounded-sm hover:opacity-80"
          >
            Indigo
          </button>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setUseTheme("theme-slate");
            }}
            className="justify-center p-1 w-24 flex cursor-pointer text-md bg-slate-600 my-1 rounded-sm hover:opacity-80"
          >
            Slate
          </button>
          <button
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              setUseTheme("theme-stone");
            }}
            className="justify-center p-1 w-24 flex cursor-pointer text-md bg-stone-600 my-1 rounded-sm hover:opacity-80"
          >
            Stone
          </button>
        </div>
      )}
    </div>
  );
};
