import { Root } from "@/root/Root";
import ReactDOM from "react-dom/client";
import { router } from "./root/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Root router={router} />
);
