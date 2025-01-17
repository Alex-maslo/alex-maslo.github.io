import Menu from "../components/Menu.tsx";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="mt-16">
      <Menu />
      <Outlet />
    </div>
  );
};

export default MainLayout;
