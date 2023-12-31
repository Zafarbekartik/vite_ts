import { useLocation } from "react-router-dom";

function useBreadcrumbs() {
  const location = useLocation();

  const crumbs = location.pathname.split("/").filter((crumb) => crumb !== "");

  return crumbs;
}

export default useBreadcrumbs;
