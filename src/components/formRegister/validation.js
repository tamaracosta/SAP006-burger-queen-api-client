export const ErrorsMenssage = (values) => {
  let errors = {};
  const emailForm = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const passForm = !/\S+@\S+\.\S+/;

  if (values.userName === '') {
    errors.userName = 'Preencha seu nome';
  } 
  // else if (!/^[A-Za-z]+/.test(values.userName)) {
  //   errors.userName = 'Opa, verifique seu nome';
  // }

  if (values.userEmail === '') {
    errors.userEmail = 'Preencha seu email';
  } else if (emailForm.test(values.userEmail)) {
    errors.userEmail = 'Opa, email inválido ';
  }

  if (values.password === '') {
    errors.password = 'Preencha seu senha'
  } if (values.password.length < 6) {
    errors.password = 'Sua senha deve conter mais de 6 caracteres';
  }
  // else if (values.password === '' || values.password.length < 6) {
  //   errors.password = 'Sua senha deve conter mais de 6 caracteres';
  // }


  if (!values.password2) {
    errors.password2 = 'Por favor, verifique sua senha';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'As senhas não batem';
  }
  return errors;
}

export default ErrorsMenssage;

// switch (!values) {
//   case 'error': 
//   errors.userName = 'Nome inválido'
//   break 

//   case 'error1': 
//   errors.userEmail = 'Email inválido'
//   break



//   default:
// }