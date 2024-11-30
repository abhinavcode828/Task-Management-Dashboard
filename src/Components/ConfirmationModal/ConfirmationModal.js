import React, { useEffect } from "react";
import {
  Overlay,
  Modal,
  Message,
  ButtonGroup,
  Button,
} from "../ConfirmationModal/ConfirmationModalStyles";

function ConfirmationModal({ message, onConfirm, onCancel }) {
  useEffect(() => {
    const modal = document.getElementById("confirmation-modal");
    modal && modal.focus();

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onCancel]);

  return (
    <Overlay>
      <Modal
        id="confirmation-modal"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-message"
        tabIndex="-1"
      >
        <h2 id="modal-title" style={{ display: "none" }}>
          Confirmation
        </h2>
        <Message id="modal-message">{message}</Message>
        <ButtonGroup>
          <Button className="confirm" onClick={onConfirm}>
            Yes
          </Button>
          <Button className="cancel" onClick={onCancel}>
            No
          </Button>
        </ButtonGroup>
      </Modal>
    </Overlay>
  );
}

export default ConfirmationModal;
