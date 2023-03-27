import { displayName } from "@/../package.json";
import { pathsByName, routeIndexByPath } from "@/main";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigateTo = useNavigate();
  const location = useLocation();
  const routeIndex = routeIndexByPath[location.pathname] ?? -1;

  return (
    <header className="flex flex-row flex-none items-center bg-background3 text-content1 w-full h-12">
      <img
        className="h-full w-auto mx-2 cursor-pointer"
        src="/images/icon/icon.svg"
        onClick={() => navigateTo(pathsByName.Home)}
      />
      <p
        className="text-content1 cursor-pointer"
        onClick={() => navigateTo(pathsByName.Home)}
      >
        {displayName}
      </p>
      <p
        className="ml-auto mr-4 cursor-pointer hover:text-primary4 text-content2"
        onClick={() => navigateTo(pathsByName.About)}
      >
        About
      </p>
    </header>
  );
}
