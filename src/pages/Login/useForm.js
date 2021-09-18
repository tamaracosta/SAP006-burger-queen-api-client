import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { LoginWithEmailPassword } from '../../services/auth';

const useForm = (validation) => {
  const clearToken =  localStorage.clear();
  const [messageError, setMessageError] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    });
  };

  const history = useHistory()

  const routerHall = () => {
    history.push('/hall')
  }
  const routerKitchen = () => {
    history.push('/kitchen')
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    (setErrors(validation(values)));
    console.log(values);

    if(errors) {
      LoginWithEmailPassword(values.email, values.password)
        .then((response) => {

          if (response.code && response.code === 400) {
            console.log(response.message)
          } else {
           console.log('ok' + response.token);
            localStorage.setItem('token', response.token);

            const id = response.id
            localStorage.setItem("id", id)

            if (response.role === "hall") {
              routerHall();
               clearToken();
            } if (response.role === "kitchen") {
              routerKitchen();
              clearToken();
            }
          }

        })
        .catch((error) => {
          setMessageError('Erro na requisição. [' + error.message + ']');
          console.log(messageError)
        })
      }
  };

  return { handleChange, handleSubmit, errors };
}

export default useForm;