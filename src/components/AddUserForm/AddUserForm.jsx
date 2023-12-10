/* eslint-disable react-refresh/only-export-components */
import { Button, Col, Row } from "react-bootstrap";
import styles from "./AddUserForm.module.css";
import { useRef, useState } from "react";
import { addUser } from "../../services/Users";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";
import route from "./../../routes/route.json";
import { backgroundHoC } from "../../hoc/backgroundHoC";
import { privatePageHoC } from "../../hoc/privatePageHoC";
import { EMAILREGEX, MOBILEREGEX, STRINGREGEX } from "../../Constants";

const AddUserForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const rerenderCount = useRef(0);

  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  const navigate = useNavigate();

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
    }, 5000);
  };

  const resetFormHandler = () => {
    setFname("");
    setLname("");
    setEmail("");
    setMobile("");
  };

  const isFormValidate = () => {
    const validates = [
      {
        isValid: !fname,
        errorMsg: "First Name field is required !!!",
        elementRef: fnameRef,
      },
      {
        isValid: !(fname.length >= 3),
        errorMsg: "First Name field should have aleast 3 characters !!!",
        elementRef: fnameRef,
      },
      {
        isValid: !STRINGREGEX.test(fname),
        errorMsg: "Please provide valid First Name !!!",
        elementRef: fnameRef,
      },
      {
        isValid: !lname,
        errorMsg: "Last Name field is required !!!",
        elementRef: lnameRef,
      },
      {
        isValid: !(lname.length >= 3),
        errorMsg: "Last Name field should have aleast 3 characters !!!",
        elementRef: lnameRef,
      },
      {
        isValid: !STRINGREGEX.test(lname),
        errorMsg: "Please provide valid Last Name !!!",
        elementRef: lnameRef,
      },
      {
        isValid: !email,
        errorMsg: "Email id field is required !!!",
        elementRef: emailRef,
      },
      {
        isValid: !EMAILREGEX.test(email),
        errorMsg: "Please provide valid Email id !!!",
        elementRef: emailRef,
      },
      {
        isValid: !mobile,
        errorMsg: "Mobile Number field is required !!!",
        elementRef: mobileRef,
      },
      {
        isValid: !MOBILEREGEX.test(mobile),
        errorMsg: "Please provide valid Mobile Number !!!",
        elementRef: mobileRef,
      },
    ];

    for (const validate of validates) {
      if (validate.isValid) {
        msgHandler(validate.errorMsg, "error");
        validate.elementRef.current.focus();
        return false;
      }
    }

    return true;
  };

  const addUserHandler = () => {
    if (!isFormValidate()) {
      return;
    }
    const user = { fname, lname, email, mobile };
    setIsLoader(true);
    //API call
    addUser(user)
      .then((data) => {
        const { id } = data;
        msgHandler(
          `User has been created successfully with id ${id}`,
          "success"
        );
        resetFormHandler();
        setIsLoader(false);
      })
      .catch(() => {
        msgHandler(`Error: Something went wrong, please try again!!!`, "error");
        setIsLoader(false);
      });
  };

  return (
    <>
      <div style={{ marginTop: "3rem" }}>
        <div className={styles.form}>
          <Row>
            <Col xs={4}>
              <label className={styles.label}>
                <h3>First Name :</h3>
              </label>
            </Col>
            <Col xs={7}>
              <input
                ref={fnameRef}
                type="text"
                className={styles.input}
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <label className={styles.label}>
                <h3>Last Name :</h3>
              </label>
            </Col>
            <Col xs={7}>
              <input
                ref={lnameRef}
                type="text"
                className={styles.input}
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <label className={styles.label}>
                <h3>Email Id :</h3>
              </label>
            </Col>
            <Col xs={7}>
              <input
                ref={emailRef}
                type="text"
                className={styles.input}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <label className={styles.label}>
                <h3>Mobile No. :</h3>
              </label>
            </Col>
            <Col xs={7}>
              <input
                ref={mobileRef}
                type="number"
                className={styles.input}
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Button
                variant="primary"
                className="mt-4 fs-3"
                onClick={addUserHandler}
                disabled={isLoader}
              >
                Create User
              </Button>{" "}
            </Col>
            <Col>
              <Button
                variant="link"
                className="mt-4 fs-3"
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
          <p className="text-success fs-3 mt-5 fw-bold">{successMsg}</p>
        </div>
        <div>
          <p className="text-danger fs-3 mt-5 fw-bold">{errorMsg}</p>
        </div>
      </div>
      <div>
        <p className="text-primary fs-3 mt-5 fw-bold">
          Re-rendering Count: {++rerenderCount.current}
        </p>
      </div>
    </>
  );
};

export default backgroundHoC(privatePageHoC(AddUserForm));
