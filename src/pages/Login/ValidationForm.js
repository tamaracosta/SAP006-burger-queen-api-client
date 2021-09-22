export const ErrorsMessage = (values) => {
  let errors = {};
  
  if (!values.name) {
    errors.name = 'Preencha seu nome';
  } 
  
  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Opa, email inválido ';
  }

  return errors;
}

export default ErrorsMessage;
