/* eslint-disable react-refresh/only-export-components */
import { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { backgroundHoC } from "../../hoc/backgroundHoC";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import route from "./../../routes/route.json";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const navigate = useNavigate();

  const { loginHandler: contextLoginHandler } = useContext(AuthContext);
  const { addUserDataHandler } = useContext(UserContext);

  const resetFormHandler = () => {
    setUserName("");
    setPassword("");
  };
  const msgHandler = (msg, type) => {
    if (type === "success") {
      setSuccessMsg(msg);
    } else if (type === "error") {
      setErrorMsg(msg);
    }

    setTimeout(() => {
      setSuccessMsg("");
      navigate(route.HOME);
      setErrorMsg("");
    }, 2000);
  };

  const loginHandler = () => {
    if (!(userName && password)) {
      msgHandler("please enter a Username and Password", "error");
    }
    // call the API
    setIsLoader(true);
    setTimeout(() => {
      setIsLoader(false);
      if (userName === password) {
        resetFormHandler();
        msgHandler("Successfully LogIn", "success");
        navigate(route.HOME);
        contextLoginHandler();
        addUserDataHandler({ userName });
      } else {
        msgHandler("Invalid Username and Password", "error");
      }
    }, 2000);
  };

  return (
    <>
      <div style={{ width: "40rem", height: "15rem", paddingTop: "3rem" }}>
        <Row style={{ marginBottom: "1rem" }}>
          <Col xs={5}>
            <label htmlFor="userName">
              <h3>First Name :</h3>
            </label>
          </Col>
          <Col xs={7}>
            <input
              className="fs-4"
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <label htmlFor="password">
              <h3>Password :</h3>
            </label>
          </Col>
          <Col xs={7}>
            <input
              className="fs-4"
              type="text"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Button
              variant="primary"
              className="mt-4 fs-5"
              onClick={loginHandler}
              disabled={false}
            >
              Create User
            </Button>
          </Col>
          <Col>
            <Button
              variant="link"
              className="mt-4 fs-4"
              onClick={resetFormHandler}
            >
              Reset form
            </Button>
          </Col>
        </Row>
      </div>
      {isLoader && (
        <>
          <div style={{ marginTop: "3rem", marginLeft: "7rem" }}>
            <Loader />
          </div>
        </>
      )}
      <div>
        <p className="text-success fs-2 mt-5 fw-bold">{successMsg}</p>
        <p className="text-danger fs-2 mt-5 fw-bold">{errorMsg}</p>
      </div>
    </>
  );
};

export default backgroundHoC(LoginForm);
