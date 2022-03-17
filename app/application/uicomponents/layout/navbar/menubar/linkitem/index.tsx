// import Link from "next/link";
import React, { FC } from "react";
import { Link } from "remix";

const LinkItem: FC<{ href: string; title: string }> = (props) => {
  const spanClass =
    "absolute h-0 w-full rounded-sm group-hover:h-full transition-all ease-out duration-700";
  return (
    <Link to={props.href}>
      <button
        id="MenuItem"
        className="relative flex h-16 w-auto px-2 items-center active:text-theme-inverted hover:text-theme-strong group"
      >
        <span className={`bg-theme-muted/5 top-0 left-0 ${spanClass}`}></span>
        <span
          className={`bg-theme-muted/20 bottom-0 left-0 ${spanClass}`}
        ></span>

        {props.title}
      </button>
    </Link>
  );
};

export default LinkItem;
