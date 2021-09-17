import { useState } from "react";
// import { useHistory } from 'react-router-dom'
import { UserCreate } from '../../services/auth';


const UseForm = (validation) => {
  // const clearToken =  localStorage.clear();
  const [messageError, setMessageError] = useState('');

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

  // const history = useHistory()

  // const routerHall = () => {
  //   history.push('/hall')
  // }
  // const routerKitchen = () => {
  //   history.push('/kitchen')
  // }


  const handleSubmit = (e) => {
    e.preventDefault();

    (setErrors(validation(values)));
    console.log(values);

    if(errors) {
      UserCreate()
        .then((response) => {

          if (response.code && response.code === 400) {
            console.log(response.message)
          } else {
            alert('ok' + response.token);
            localStorage.setItem('token', response.token);

            const id = response.id
            localStorage.setItem("id", id)
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


export default UseForm;
