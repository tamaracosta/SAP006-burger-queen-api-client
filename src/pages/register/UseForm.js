import { useState } from "react";
import { UserCreate } from '../../services/auth';

const UseForm = (validation) => {
  localStorage.clear();
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (callback) => {
    
    (setErrors(validation(values)));
    console.log(values);

    if(errors) {
      UserCreate(values.name, values.email, values.password, values.role)
        .then((response) => {
          console.log(111, response)

          if (response.code && response.code === 400) {
            console.log(response.message)
          } else {
            console.log('ok' + response.token);
            callback();
          }

        })
        .catch((error) => {
          console.log('Erro na requisição. [' + error.message + ']')
        })
      }
  };

  return { handleChange, handleSubmit, errors };
}


export default UseForm;
