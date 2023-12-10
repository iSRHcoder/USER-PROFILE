import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { SS_USER_DATA } from "../Constants";

export const UserContext = createContext();

const sessionUserData = JSON.parse(sessionStorage.getItem(SS_USER_DATA));

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(sessionUserData || {});

  const { isAuth } = useContext(AuthContext);

  const addUserDataHandler = (data) => setUserData(data);

  useEffect(() => {
    sessionStorage.setItem(SS_USER_DATA, JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    if (!isAuth) {
      setUserData({});
    }
  }, [isAuth]);

  return (
    <UserContext.Provider value={{ userData, addUserDataHandler }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserProvider;
