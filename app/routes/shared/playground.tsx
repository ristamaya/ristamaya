import { Link, MetaFunction, Outlet } from "remix";
import LinkItem from "~/application/uicomponents/linkitem";

export const meta: MetaFunction = () => {
  return { title: "Ristamaya|Playground" };
};

export default function Playground() {
  const classNameLink = "h-9 w-40 font-semibold";

  return (
    <div className="relative block text-theme-base z-0">
      {/* Sidebar */}
      <div className="fixed block w-28 h-[calc(100%-64px)] bg-theme-fill z-20 shadow-md">
        <div className="relative text-theme-strong text-xl font-semibold mt-3 mb-6 pl-2">
          <Link to="/shared/playground">My Stuffs</Link>
        </div>

        <div
          id="SharedCompSB"
          className="relative h-[calc(100%-140px)] text-xs font-semibold overflow-auto overflow-x-hidden pl-2"
        >
          <LinkItem to="./layout" title="Layout" className={classNameLink} />
          <LinkItem to="./input" title="input" className={classNameLink} />
          <LinkItem to="./button" title="Button" className={classNameLink} />
          <LinkItem to="./table" title="Table" className={classNameLink} />
          <LinkItem
            to="./dynamicicon"
            title="Dynamic Icon"
            className={classNameLink}
          />
          <LinkItem
            to="./treeview"
            title="Treeview"
            className={classNameLink}
          />
        </div>
        <div className="relative text-theme-strong text-xs font-semibold mt-2 text-center">
          React.JS + Tailwind CSS
        </div>
      </div>

      {/* Content */}
      <div className="relative flex left-40 w-[calc(100%-192px)] h-auto p-2 z-10">
        <Outlet />
      </div>
    </div>
  );
}
