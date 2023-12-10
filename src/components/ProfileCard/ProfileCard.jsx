/* eslint-disable react-refresh/only-export-components */

import styles from "./ProfileCard.module.css";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { backgroundHoC } from "../../hoc/backgroundHoC";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { PROFILE_CARD_BG_COLOR } from "../../Constants";

const ProfileCard = ({
  name = "",
  email = "",
  imgSrc = "",
  userDeleteHandler,
  index,
  isBtnDisabled = false,
}) => {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className={styles.ProfileCard}>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <img src={imgSrc} alt="userImage" width="150" height="150" />
      {isAuth && (
        <Button
          variant="outline-danger"
          style={{
            marginTop: "2rem",
            fontSize: "1rem",
          }}
          onClick={() => userDeleteHandler(index)}
          disabled={isBtnDisabled}
        >
          Delete
        </Button>
      )}
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  imgSrc: PropTypes.string,
  userDeleteHandler: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isBtnDisabled: PropTypes.bool,
};

export default backgroundHoC(ProfileCard, PROFILE_CARD_BG_COLOR);
