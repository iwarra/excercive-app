import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff", // Customize the background color
    border: "1px solid #ccc", // Add a border
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add a box shadow
    padding: "20px", // Add some padding
    borderRadius: "8px", // Add rounded corners
  },
};

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message, showCancelButton }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
      style={customStyles}
    >
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onConfirm}>OK</button>
        { showCancelButton ? <button onClick={onClose}>Cancel</button> : null }
      </div>
    </ReactModal>
  );
};

export default ConfirmationModal;


// const ConfirmationModal = ( props ) => {
//   return (
//         <div className="modal">
//           <div className="modal-content">
//             <p>{props.name === "/delete" ? 'User deleted' : 'User added'}</p>
//             <button>OK</button>
//           </div>
//         </div>
//         )
// }; 


