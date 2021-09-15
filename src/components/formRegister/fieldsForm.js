
import Input from "../Input";
import StateForm from "./StateForm";
import Button from "../button/Button.js";
import ErrorsMenssage from './validation';

export const FieldsForm = (submitForm) => {
  const { values, handleChange, handleSubmit, errors } = StateForm(submitForm, ErrorsMenssage);

  return (
    <form className="test" onSubmit={handleSubmit}>
      <label htmlFor="userName">Nome</label>
      <Input
        id="userName"
        type="text"
        name="userName"
        placeholder="your name"
        value={values.userName}
        onChange={handleChange}
      />
      {errors.userName && <p className="msgErrs">{errors.userName}</p>}
      <label htmlFor="userEmail">Email</label>
      <Input
        id="userEmail"
        type="text"
        name="userEmail"
        autoComplete="username"
        placeholder="email@example.com"
        value={values.userEmail}
        onChange={handleChange}
      />
      {errors.userEmail && <p className="msgErrs">{errors.userEmail}</p>}
      <label htmlFor="password">Sua senha</label>
      <Input
        id="password"
        type="password"
        placeholder="Your secret password"  
        autoComplete="new-password"
        values={values.password}
        onChange={handleChange}
      />
      {errors.password && <p className="msgErrs">{errors.password}</p>}
      <label htmlFor="password2">Confirme sua senha</label>
      <Input
        id="password2"
        type="password"
        placeholder="Confirm your password" 
        autoComplete="new-password"
        values={values.password2}
        onChange={handleChange}
      />
       {errors.password2 && <p className="msgErrs">{errors.password2}</p>}
      <Button type="suBmit">Finalizar Cadastro</Button>
    </form>
  )
}

export default FieldsForm;