import useForm from "./useForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./ValidationForm";
import { Link } from 'react-router-dom';

const LoginUser = () => {
  const { handleChange, handleSubmit, errors } = useForm(ErrorsMessage);

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input
          name="email"
          type="text"
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email && errors.email}</p>}

        <label htmlFor="email">Senha</label>
        <Input
          name="password"
          type="password"
          onChange={handleChange}
        />
        <p className="errorMessage">{errors.password && errors.password}</p>

        <Button onClick={handleSubmit}>Entrar</Button>
        <p>ou</p>
            <p>Primeira vez? <Link to="/register">Cadastre-se aqui</Link></p>
      </form>
    </section>
  )
}

export default LoginUser;
