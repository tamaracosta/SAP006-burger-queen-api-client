import FieldsForm from './fieldsFom.js';
import { useState } from 'react';

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  function submitForm() {
    setSubmitted(true);
  }

  return (
    <>

      <h1>Página para cadastro</h1>
      <FieldsForm />
    </>
  )
}

export default Form;