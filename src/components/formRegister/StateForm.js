import { useState } from "react";

const StateForm = () => {
  const [values, setValues] = useState({
    userName: '',
    userEmail: '',
    password: '',
    password2: '',
    autoComplete: ''
  })
 //  useEffect const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return { values, handleChange, handleSubmit }
}

export default StateForm;