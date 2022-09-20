import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './css/ProfilesForm.css'

const ProfilesForm = ({getUsers, userSelected, deselectedUser}) => {

  const {register, handleSubmit, reset } = useForm();

  useEffect(() => {
      if(userSelected){
        reset(userSelected)
      }
  }, [userSelected])

  const submit = (data) => {
    if(userSelected){
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data).then(() => getUsers());
    } else {
      //creating user
    axios.post('https://users-crud1.herokuapp.com/users/', data)
      .then(() => getUsers())
      .catch(error => console.log(error.response));
  }
  clear();
}

const clear = () => {
  reset({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
  })
  deselectedUser();
}

  return (
    <div className="form-container">

    <form onSubmit={handleSubmit(submit)}>
      <div className="input-container">
        <label htmlFor="email">Email</label><br/>
        <input type="text" id="email" {...register("email")}/>
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="password" {...register("password")}/>
      </div>
      <div className="input-container">
        <label htmlFor="first_name">First name</label><br/>
        <input type="text" id="first_name" {...register("first_name")}/>
      </div>
      <div className="input-container">
        <label htmlFor="last_name">Last name</label><br/>
        <input type="text" id="last_name" {...register("last_name")}/>
      </div>
      <div className="input-container">
        <label htmlFor="birthday">Last name</label><br/>
        <input type="date" id="birthday" {...register("birthday")}/>
      </div>
      <button>Submit</button>
      <button onClick={clear} type="button">
        Clear
      </button>

    </form>
    </div>

  )
}

export default ProfilesForm
