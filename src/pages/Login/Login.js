import useForm from "./useForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./ValidationForm";
import { Link } from 'react-router-dom';

const LoginUser = () => {
  const { handleChange, handleSubmit, errors } = useForm(ErrorsMessage);

  return (
    <section>
      <form className="container" action="" onSubmit={handleSubmit}>
        <Input
          label="Email"
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="Digite o seu email"
        />
        {errors.email && <p>{errors.email && errors.email}</p>}

        
        <Input
          label="Senha"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Digite a sua senha"
        />
        <p className="errorMessage">{errors.password && errors.password}</p>

        <Button>Entrar</Button>
        <p>ou</p>
        <p style={{fontSize: '1.2em', margin: '2em'}} className="link-register">Primeira vez? <Link className="link" to="/register" style={{color: 'var(--pink)',
        display: 'block'}}>Cadastre-se aqui</Link></p>

      </form>
    </section>
  )
}

export default LoginUser;
