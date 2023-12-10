import { useEffect, useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import { deleteUsers, getUsers } from "../../services/Users";
import Loader from "../Loader/Loader";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import route from "./../../routes/route.json";
import ModalPopup from "../ModalPopup/ModalPopup";

const Profiles = ({ page = "1" }) => {
  const [users, setUsers] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalShow, setIsModalShow] = useState(false);
  const [deleteUserIndex, setDeleteUserIndex] = useState(null);

  const navigate = useNavigate();
  const nextPage = page === "1" ? "2" : "1";
  const reDirectPageHandler = () => navigate(`/${route.PROFILES}/${nextPage}`);

  useEffect(() => {
    if (!(page === "1" || page === "2")) {
      navigate("/error");
    }
  }, [navigate, page]);

  useEffect(() => {
    setIsLoader(true);
    setIsError(false);
    getUsers(page)
      .then((details) => {
        setUsers(details.data);
        setIsLoader(false);
      })
      .catch(() => {
        setIsLoader(false);
        setIsError(true);
      });
  }, [page]);

  const userModalDeleteHandler = () => {
    if (deleteUserIndex != null) {
      const userId = users[deleteUserIndex].id;

      deleteUsers(userId).then((isDeleted) => {
        if (isDeleted) {
          const _users = [...users];
          _users.splice(deleteUserIndex, 1);
          setUsers(_users);
        }
        modalClosehandler();
      });
    }
  };
  const userDeleteHandler = (userIndex) => {
    setIsModalShow(true);
    setDeleteUserIndex(userIndex);
  };

  const modalClosehandler = () => {
    setIsModalShow(false);
    setDeleteUserIndex(null);
  };

  const profiles = users.map((user, index) => (
    <ProfileCard
      key={index}
      name={user.first_name}
      email={user.email}
      imgSrc={user.avatar}
      userDeleteHandler={userDeleteHandler}
      index={index}
    />
  ));

  return (
    <div className="mt-5">
      <h1>User Profile</h1>
      <p style={{ fontSize: "1.8rem" }}>Page: {page}</p>
      {isLoader && <Loader isxLarge />}
      {!isLoader && (
        <>
          {!isError && <div>{profiles}</div>}

          {isError && (
            <p style={{ color: "red", fontWeight: "bold", fontSize: "1.5rem" }}>
              Error: Something went wrong, please try later!!!
            </p>
          )}

          <Button
            variant="contained"
            onClick={() => {
              reDirectPageHandler();
            }}
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            Page: {nextPage}
          </Button>
        </>
      )}
      <ModalPopup
        show={isModalShow}
        handleClose={modalClosehandler}
        handleAction={userModalDeleteHandler}
        modalBody="Are you sure about to delete this profile ?"
        actionLabel="Delete"
        actionBtnVariant="danger"
      />
    </div>
  );
};

Profiles.propTypes = {
  page: PropTypes.string,
};

export default Profiles;
