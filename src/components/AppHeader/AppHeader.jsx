import { Button, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./AppHeader.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import route from "./../../routes/route.json";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

const AppHeader = () => {
  const navigate = useNavigate();

  const { isAuth, logoutHandler } = useContext(AuthContext);
  const {
    userData: { userName = "" },
  } = useContext(UserContext);

  const activeClasses = ({ isActive }) =>
    isActive
      ? "text-white fw-bold text-decoration-none"
      : "text-decoration-none";

  const { lightToDarkHandler, isDark, darkToLightHandler } =
    useContext(ThemeContext);

  const iconClasses = isDark
    ? "bi bi-brightness-high-fill fs-2"
    : "bi bi-moon-fill fs-2";

  const darkClickHandler = isDark ? darkToLightHandler : lightToDarkHandler;

  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark" className={styles.AppHeader}>
        <Container>
          <Navbar.Brand style={{ fontSize: "larger", marginRight: "3rem" }}>
            <NavLink
              to={route.HOME}
              className="text-decoration-none text-white"
            >
              User-Profiles
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to={route.PROFILES} className={activeClasses}>
                Profiles
              </NavLink>
            </Nav.Link>
            {isAuth && (
              <>
                <Nav.Link>
                  <NavLink to={route.ADD_USER} className={activeClasses}>
                    Add User
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to={route.SETTINGS} className={activeClasses}>
                    Settings
                  </NavLink>
                </Nav.Link>
              </>
            )}
            <Nav.Link>
              <NavLink to={route.SUPPORT} className={activeClasses}>
                Support
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav.Link>
            {!isAuth && (
              <Button
                className="me-3 fs-4"
                variant="light"
                onClick={() => navigate(route.LOGIN)}
              >
                Login
              </Button>
            )}
            {isAuth && (
              <Button
                className="me-3 fs-4"
                variant="light"
                onClick={logoutHandler}
              >
                Logout
              </Button>
            )}
            <Button className="me-3" onClick={darkClickHandler}>
              <i className={iconClasses}></i>
            </Button>
            {isAuth && (
              <Button className="fs-2 ">
                <i className="bi bi-person-fill me-2"></i>
                {userName}
              </Button>
            )}
          </Nav.Link>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
