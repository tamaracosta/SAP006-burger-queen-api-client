import { useState } from "react";
import { LoginWithEmailPassword } from '../../services/auth';
// import ErrorsMessage from '../../services/ValidationForm.js';

const useForm = (validation) => {
  const [messageError, setMessageError] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  // const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    (setErrors(validation(values)));
    console.log(values);
  
    LoginWithEmailPassword(values.email, values.password)
        .then((response) => {

          if (response.code && response.code === 400) {
            alert(response.message)
          } else {
            alert('ok' + response.token);
            localStorage.setItem('token', response.token);
          }

        })
        .catch((error) => {
          setMessageError('Erro na requisição. [' + error.message + ']');
          console.log(messageError)
        })

    // (setErrors(validation(values)));
    // console.log(values);
    // setSubmitting(true);
    // conecção com api deve ser aqui
  };

  return { handleChange, handleSubmit, errors };
}

export default useForm;