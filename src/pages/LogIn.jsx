import { useContext } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import route from "./../routes/route.json";

const LogIn = () => {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      {!isAuth && (
        <div
          style={{
            paddingTop: "6rem",
            display: "inline-block",
          }}
        >
          <h1 className="mb-3">Log In</h1>
          <LoginForm />
        </div>
      )}
      {isAuth && <Navigate to={route.HOME} />}
    </>
  );
};

export default LogIn;
