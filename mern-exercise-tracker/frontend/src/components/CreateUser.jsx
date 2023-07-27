import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useUser from "../hooks/useUser";
import ConfirmationModal from "./ConfirmationModal";

function CreateUser() {
  const { newUser, handleSubmit, addNewUser } = useUser();
  const { theme } = useContext(ThemeContext);
  const createLight = theme === "light";
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen)

  const handleCreateUser = (e) => {
    handleSubmit(e)
    setIsModalOpen(true);
  };

  return (
    <div>
        <h1 className={createLight ? "h3 mb-3 text-dark" : "h3 mb-3 text-light"}>Create New User</h1>
        <form onSubmit={ handleCreateUser }>
          <div className="form-group"> 
            <label className={createLight ? "text-dark" : "text-light"}>Username:</label>
            <input  
                type="text"
                required
                className="form-control my-2"
                value={ newUser }
                onChange={(e) => addNewUser(e)}
                />
            <button 
              type="submit" 
              className="btn btn-primary mt-3"
            >
              Create User
            </button>
          </div>
        </form>
        <ConfirmationModal
          isOpen={isModalOpen}
          onConfirm={() => setIsModalOpen(false)}
          message="User added"
        />
      </div>
  );
}

export default CreateUser;