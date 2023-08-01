import ReactModal from "react-modal";

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message, showCancelButton }) => {

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
          <button className="btn-red" onClick={ onConfirm }>Ok</button>
          <button className="btn-blue" onClick={ onClose }>Cancel</button> 
          </>
        ) : <> <button onClick={ onClose } className="btn-blue" >Ok</button>
        </> }
      </div>
    </ReactModal>
  );
};

export default ConfirmationModal;


