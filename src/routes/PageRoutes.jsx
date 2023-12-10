import { Route, Routes } from "react-router-dom";
import route from "./route.json";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import ProfilesPage from "../pages/ProfilesPage";
import Home from "../pages/Home";
import SettingsPage from "../pages/SettingsPage";
import SupportPage from "../pages/SupportPage";
import LogIn from "../pages/LogIn";
import AddUsers from "../pages/AddUsers";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={route.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={route.PROFILES}>
            <Route index element={<ProfilesPage />} />
            <Route path=":page" element={<ProfilesPage />} />
          </Route>
          <Route path={route.ADD_USER} element={<AddUsers />} />
          <Route path={route.SETTINGS} element={<SettingsPage />} />
          <Route path={route.SUPPORT} element={<SupportPage />} />
          <Route path={route.LOGIN} element={<LogIn />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
