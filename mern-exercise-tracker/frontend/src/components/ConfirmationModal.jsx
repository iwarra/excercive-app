import ReactModal from "react-modal";
import { useState } from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message, showCancelButton }) => {
  const [isBlueButtonHovered, setIsBlueButtonHovered] = useState(false);
  const [isRedButtonHovered, setIsRedButtonHovered] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff", 
      border: "1px solid #5e5e5c", 
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
      borderRadius: "10px", 
      padding: "50px"
    },
    button: {
      backgroundColor: isBlueButtonHovered ? "#0d6efd" : "#fff",
      color: isBlueButtonHovered ? "#fff" : "#0d6efd",
      paddingInline: "0.75rem",
      paddingBlock: "0.375rem",
      cursor: "pointer",
      fontSize: "1rem",
      borderRadius: "6px",
      border: "2px solid #0d6efd",
      marginTop: "8px",
      transition: "color .2s ease-in-out,background-color .2s ease-in-out"
    },
    okButton: {
      backgroundColor: isRedButtonHovered ? "red" : "#fff",
      color: isRedButtonHovered ? "#fff" : "red",
      border: "2px solid red",
      paddingInline: "0.75rem",
      paddingBlock: "0.375rem",
      cursor: "pointer",
      fontSize: "1rem",
      borderRadius: "6px",
      transition: "color .2s ease-in-out,background-color .2s ease-in-out"
    }
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
      style={customStyles}
    >
      <div className="modal-content">
        <p>{message}</p>
        { showCancelButton ? (
          <>
          <button 
            onMouseEnter={() => setIsRedButtonHovered(true)}
            onMouseLeave={() => setIsRedButtonHovered(false)}
            onClick={onConfirm} 
            style={ customStyles.okButton }>Ok</button>
          <button 
            style={customStyles.button} 
            onClick={onClose} 
            onMouseEnter={() => setIsBlueButtonHovered(true)} 
            onMouseLeave={() => setIsBlueButtonHovered(false)}>Cancel</button> 
          </>
        ) : <> <button
            onMouseEnter={() => setIsBlueButtonHovered(true)}
            onMouseLeave={() => setIsBlueButtonHovered(false)}
            onClick={onClose} 
            style={ customStyles.button }
        >Ok</button>
        </> }
      </div>
    </ReactModal>
  );
};

export default ConfirmationModal;


