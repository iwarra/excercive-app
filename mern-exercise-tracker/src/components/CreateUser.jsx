import axios from 'axios';
import { useState } from 'react';

function CreateUser() {
  const [username, setUsername] = useState('');

   const onChangeUsername = e => {
    setUsername(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
    };

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));

    setUsername('');
  }; 


  return (
    <div>
        <h1 className="h3 mb-3">Create New User</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control my-2"
                value={username}
                onChange={onChangeUsername}
                />
            <button type="submit" className="btn btn-primary mt-3">Create User</button>
          </div>
        </form>
      </div>
  );
}

export default CreateUser;