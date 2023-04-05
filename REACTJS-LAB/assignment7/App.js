import React, { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button className="OpenModal"onClick={handleOpen}>Open Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>My mother would always make me my favourite dishes.</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
