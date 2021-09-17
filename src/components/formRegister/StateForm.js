import { useState } from "react";

const StateForm = (validation) => {
  const [values, setValues] = useState({
    userName: '',
    userEmail: '',
    password: '',
    password2: '',
    autoComplete: ''
  });

  const [errors, setErrors] = useState({
    userName: '',
    userEmail: '',
    password: '',
    password2: '',
    autoComplete: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validation(values));
    setSubmitted(true);
    // conecção com api
  };

  return { values, handleChange, handleSubmit, errors };
}

export default StateForm;