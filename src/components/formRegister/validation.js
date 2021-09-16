export const ErrorsMenssage = (values) => {
  let errors = {};
  
  if (values.name === '') {
    errors.userName = 'Preencha seu nome';
  } 
  
  if (!values.email) {
    errors.userEmail = 'Preencha seu email';
  } else if (!/\S+@\S+\.\S+/.test(values.userEmail)) {
    errors.userEmail = 'Opa, email inválido ';
  }

  if (!values.password) {
    errors.password = 'Preencha seu senha'
  } else if (values.password.length < 6) {
    errors.password = 'Sua senha deve conter mais de 6 caracteres';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Por favor, verifique sua senha';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'As senhas não batem';
  }
  return errors;
}

export default ErrorsMenssage;
