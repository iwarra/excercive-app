import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import useUser from "../hooks/useUser";
import ConfirmationModal from "./ConfirmationModal";

function CreateUser() {
  const { newUser, handleSubmit, addNewUser } = useUser();
  const { theme } = useContext(ThemeContext);
  const createLight = theme === "light";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ error, setError ] = useState(false);

//updates the error state as soon as the input is valid  
  useEffect(() => {
    if (newUser.length >= 3) {
      setError(false);
    }
  }, [newUser]);

  const handleCreateUser = (e) => {
    if (error) {
      e.preventDefault() 
      return
    }
    handleSubmit(e)
    setIsModalOpen(true);
  };

  const handleBlur = (e) => {
    e.target.value.length < 3 ? setError(true) : setError(false)
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
                onChange={ (e) => {addNewUser(e)} }
                onBlur={ handleBlur }
                />
                 {error && <p style={{ color: 'red' }}>The username must contain at least three letters.</p>}
            <button 
              type="submit" 
              className="btn btn-primary mt-3"
            >
              Create User
            </button>
          </div>
        </form>
        <ConfirmationModal
          isOpen={ isModalOpen }
          onClose={ () => setIsModalOpen(false) }
          message="User added"
          showCancelButton={false}
        />
      </div>
  );
}

export default CreateUser;