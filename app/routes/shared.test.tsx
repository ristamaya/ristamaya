import { Outlet } from "remix";

export default function Shared() {
  return (
    <div className="flex-row text-theme-base">
      <div className="h-6 w-full bg-theme-fill text-center">
        This is layout components of "shared" route
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
