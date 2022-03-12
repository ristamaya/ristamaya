// import Link from "next/link";
import React, { FC } from "react";
import { Link } from "remix";

const LinkItem: FC<{ href: string; title: string }> = (props) => {
  return (
    <Link to={props.href}>
      <button
        id="MenuItem"
        className="relative flex h-16 w-auto px-2 items-center active:text-theme-inverted hover:text-theme-strong group"
      >
        <span className="absolute bottom-0 left-0 h-0 w-full bg-theme-muted bg-opacity-20 rounded-sm group-hover:h-full transition-all ease-out duration-700"></span>
        <span className="absolute top-0 left-0 h-0 w-full bg-theme-muted bg-opacity-5 rounded-sm group-hover:h-full transition-all ease-out duration-700"></span>

        {props.title}
      </button>
    </Link>
  );
};

export default LinkItem;
