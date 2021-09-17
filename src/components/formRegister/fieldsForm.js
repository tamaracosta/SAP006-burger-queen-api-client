
import Input from "../Input";
import StateForm from "./StateForm";
import ErrorsMenssage from './validation';

export const FieldsForm = () => {
  const { values, handleChange, handleSubmit, errors } = StateForm(ErrorsMenssage);

  return (
    <form className="test" onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <Input  id="name"  type="text" name="name" placeholder="your name"
        value={values.name}
        onChange={handleChange}
      />
      {errors.name && <p className="msgErrs">{errors.name}</p>}
      <label htmlFor="email">Email</label>
      <Input
        id="email"
        type="text"
        name="email"
        autoComplete="username"
        placeholder="email@example.com"
        value={values.email}
        onChange={handleChange}
      />
      {errors.email && <p className="msgErrs">{errors.email}</p>}
      <label htmlFor="password">Crie sua senha</label>
      <Input
        id="password"
        type="password"
        name="password"
        placeholder="Your secret password"
        autoComplete="new-password"
        value={values.password}
        onChange={handleChange}
      />
      {errors.password && <p className="msgErrs">{errors.password}</p>}
      <label htmlFor="role">Confirme sua senha</label>
      <Input
        id="role"
        type="password"
        name="role"
        placeholder="Confirm your password"
        autoComplete="new-password"
        value={values.role}
        onChange={handleChange}
      />
      {errors.role && <p className="msgErrs">{errors.role}</p>}

      <label>Salão</label>
      <Input 
        type="radio"
        name="roleHall"
        value={values.roleHall}
        onChange={handleChange}
      />
      <label>Cozinha</label>
      <Input
        type="radio"
        name="roleKitchen"
        value={values.roleKitchen}
        onChange={handleChange}
      />

      <button>Finalizar Cadastro</button>
    </form>
  )
}

export default FieldsForm;