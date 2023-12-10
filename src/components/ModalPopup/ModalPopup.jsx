import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

// eslint-disable-next-line no-unused-vars
const ModalPopup = ({
  show,
  handleClose,
  handleAction,
  modalTitle = "Please Confirm",
  modalBody = "Are you sure ?",
  actionLabel = "save",
  actionBtnVariant = "primary",
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalBody}</Modal.Body>
        <Modal.Footer>
          <Button variant={actionBtnVariant} onClick={handleAction}>
            {actionLabel}
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalPopup.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAction: PropTypes.func.isRequired,
  modalTitle: PropTypes.string,
  modalBody: PropTypes.string,
  actionLabel: PropTypes.string,
  actionBtnVariant: PropTypes.string,
};
export default ModalPopup;
