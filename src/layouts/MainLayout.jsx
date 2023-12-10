import { Outlet } from "react-router-dom";
import AppHeader from "../Components/AppHeader/AppHeader";
import AppFooter from "../Components/AppFooter/AppFooter";

const MainLayout = () => {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
};

export default MainLayout;
