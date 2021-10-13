export const ErrorsMessage = (values) => {
  let errors = {};
  
  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email inválido ';
  }

  if (!values.password) {
    errors.password = 'Preencha sua senha'
  } else if (values.password.length < 6) {
    errors.password = 'Sua senha deve conter mais de 5 caracteres';
  }

  errors.ok = (!errors.email && !errors.password);

  return errors;
}

export default ErrorsMessage;
