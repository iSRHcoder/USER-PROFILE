import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import route from "./../routes/route.json";

export const privatePageHoC = (Component) => {
  const PrivatePage = (props) => {
    const { isAuth } = useContext(AuthContext);

    return isAuth ? (
      <Component {...props} />
    ) : (
      <Navigate to={`/${route.LOGIN}`} />
    );
  };
  return PrivatePage;
};
