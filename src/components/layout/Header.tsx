import { displayName } from "@/../package.json";
import { pathsByName, routeIndexByPath, routes } from "@/main";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeIcon } from "../ThemeIcon";

export default function Header() {
  const navigateTo = useNavigate();

  const location = useLocation();
  const index = routeIndexByPath[location.pathname];
  const routeName = index === undefined ? undefined : routes[index].id;

  return (
    <header className="flex flex-row flex-none items-center bg-background3 text-content1 w-full h-12">
      <ThemeIcon className="!h-7 !w-7 cursor-pointer ml-4 mr-2" />
      <p
        className="text-content1 cursor-pointer"
        onClick={() => navigateTo(pathsByName.Home)}
      >
        {displayName}
      </p>
      <p
        className="ml-auto mr-4 cursor-pointer hover:text-primary4 text-content2"
        onClick={() =>
          navigateTo(
            routeName === "Home" ? pathsByName.About : pathsByName.Home
          )
        }
      >
        {routeName === "Home" ? "About" : "Home"}
      </p>
    </header>
  );
}
