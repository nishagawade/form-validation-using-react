import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [formData, setFormData] = useState({
    name : "",
    email : ""
  })

  const [errors, setErrors] = useState({})

  const validate = () =>{
    const tempErrors = {}

    if(!formData.name) tempErrors.name = 'Name is Required';
    if(!formData.email) tempErrors.email = 'Email is Required';
    setErrors(tempErrors)

    return Object.keys(tempErrors).length === 0;
  }


  const handleSubmit = (e) =>{
    
    e.preventDefault()
    if(validate()){
      console.log("form submitted")
    }
  }

  const handleChange = (e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name] : value})
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' value={formData.name}  onChange = {handleChange} name = 'name'></input> <br/> <br/>
      {errors.name && <p>{errors.name}</p>}

      <label>Email</label>
      <input type='text' value={formData.email} onChange = {handleChange} name = 'email'></input> <br/> <br/>
      {errors.email && <p>{errors.email}</p>}

      <button type='submit'>Submit</button>
    </form>
  );
}

export default App;
