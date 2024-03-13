import { Link } from "rakkasjs";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Menu } from "lucide-react";

interface ToolbarProps {}

export function Toolbar({}: ToolbarProps) {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Sign in", path: "/auth" },
    { name: "Sign up", path: "/auth/signup" },
  ];
  return (
    <div className="w-full flex justify-between items-center bg-inherit glass sticky top-0 h-8">
      <h1 className="text-3xl p-2"> Applicate</h1>
      <div className="hidden md:flex gap-2 justify-end items-center px-2">
        <ul className="flex flex-wrap items-center gap-2 divide-x-2">
          {routes.map((route) => (
            <li key={route.path} className="p-2 hover:text-secondary">
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>
      {/* sidebar */}

      <div className="p-2 md:hidden relative w-full flex justify-end">
        <input type="checkbox" className="hidden peer " id="sidebar-toggle" />
        <label htmlFor="sidebar-toggle" className="p-2 md:hidden z-40">
          <Menu />
        </label>
        <div
          className="p-2 gap-2 rounded-lg hidden peer-checked:flex animate-in slide-in-from-top duration-500 
         flex-col justify-center items-center absolute top-10 right-0 w-fit min-w-[250px] 
        bg-base-100/50 glass"
        >
          <ul className="flex flex-col items-center gap-2 divide-y-2">
            {routes.map((route) => (
              <li key={route.path} className="p-2 hover:text-secondary">
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
