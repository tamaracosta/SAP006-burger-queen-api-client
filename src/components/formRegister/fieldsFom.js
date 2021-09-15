
import Input from "../Input";
import StateForm from "./StateForm";
// import Button from "../button/Button.js";

export const FieldsForm = () => {
  const { values, handleChange, handleSubmit } = StateForm();
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
      <label htmlFor="password">Sua senha</label>
      <Input
        id="password"
        type="password"
        placeholder="Your secret password"  
        autoComplete="new-password"
        values={values.password}
        onChange={handleChange}
      />
      <label htmlFor="password2">Confirme sua senha</label>
      <Input
        id="password2"
        type="password"
        placeholder="Confirm your password" 
        autoComplete="new-password"
        values={values.password2}
        onChange={handleChange}
      />
      <button>Finalizar Cadastro</button>
    </form>
  )
}

export default FieldsForm;