import { useContext } from "react";
import { SelectAUser } from "./SelectAUser";
import useUser from "../hooks/useUser";
import { ThemeContext } from "../context/ThemeContext";
import { DataContext } from "../context/DataContext";

const DeleteUser = () => {
  const { theme } = useContext(ThemeContext);
  const { selectedID } = useContext(DataContext)
  const { deleteUser } = useUser();

  const editLight = theme === "light";

  return (
    <div>
      <h1 className={editLight ? "h3 mb-3 text-dark" : "h3 mb-3 text-light"}>Delete a user</h1>
      <SelectAUser></SelectAUser>
      <button className="btn btn-primary mt-3" onClick={() => deleteUser(selectedID)}>Delete a user</button>
    </div>
  );
};

export default DeleteUser;
