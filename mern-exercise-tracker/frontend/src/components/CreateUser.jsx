import useUser from "../hooks/useUser";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function CreateUser() {
  const { newUser, handleSubmit, addNewUser } = useUser();
  const { theme } = useContext(ThemeContext);
  const createLight = theme === "light";
  
  return (
    <div>
        <h1 className={createLight ? "h3 mb-3 text-dark" : "h3 mb-3 text-light"}>Create New User</h1>
        <form onSubmit={ handleSubmit }>
          <div className="form-group"> 
            <label className={createLight ? "text-dark" : "text-light"}>Username:</label>
            <input  
                type="text"
                required
                className="form-control my-2"
                value={ newUser }
                onChange={ addNewUser }
                />
            <button type="submit" className="btn btn-primary mt-3">Create User</button>
          </div>
        </form>
      </div>
  );
}

export default CreateUser;