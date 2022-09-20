import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import ProfilesForm from './components/ProfilesForm'
import axios from 'axios';
import UsersList from './components/UsersList'
import './App.css'

function App() {

  const [ users, setUsers ] = useState([])
  const [ userSelected, setUserSelected ] = useState(null)
  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data));
  }, [])

  const getUsers = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data));
  }


  const deselectedUser = () => setUserSelected(null);

  const selectUser = (user) => {
    setUserSelected(user)
  }

  console.log(userSelected)
  return (
    <div className="App">
      <ProfilesForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectedUser = {deselectedUser}
      />
      <UsersList
        users={users}
        selectUser={selectUser}
        getUsers={getUsers}
      />
    </div>
  )
}

export default App
