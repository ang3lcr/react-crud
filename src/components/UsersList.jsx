import React from 'react';
import axios from 'axios';
import './css/UserList.css'

  const UsersList = ({ users, selectUser, getUsers }) => {
    const deleteUser = (id) =>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUsers());
    }

    return(
      <div className="users-list">

        <ul className="list">
          {
            users.map(user => (
              <li key = {user.id}>
                <b>User: </b>{user.id}
                <div className="data"><b>First Name: </b>{user.first_name}</div>
                <div className="data"><b>Last Name: </b>{user.last_name}</div>
                <div className="data"><b>Email: </b>{user.email}</div>
                <div className="data"><b>Birthday: </b>{user.birthday}</div>
                <button onClick={() => selectUser(user)}>
                  Update
                </button>
                <button onClick={() => deleteUser(user.id)}>
                  Delete
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  };

  export default UsersList;
