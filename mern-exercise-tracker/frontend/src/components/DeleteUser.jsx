import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";
import { SelectAUser } from "./SelectAUser";
import useUser from "../hooks/useUser";
import ConfirmationModal from "./ConfirmationModal";

const DeleteUser = () => {
  const { theme } = useContext(ThemeContext);
  const { selectedID } = useContext(DataContext)
  const { deleteUser } = useUser();
  const editLight = theme === "light";
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const handleDeleteUser = () => {
    deleteUser(selectedID);
    setConfirmationModalOpen(false);
  };

  return (
    <div>
      <h1 className={editLight ? "h3 mb-3 text-dark" : "h3 mb-3 text-light"}>Delete a user</h1>
      <SelectAUser></SelectAUser> 
      <button 
        className="btn btn-primary mt-3"
        onClick={() => setConfirmationModalOpen(true)} 
      >
        Delete a user
      </button>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        message="Are you sure you want to delete this user?"
        onConfirm={handleDeleteUser}
        showCancelButton={true}
      />
    </div>
  );
};


//onClick={() => deleteUser(selectedID)
export default DeleteUser;
