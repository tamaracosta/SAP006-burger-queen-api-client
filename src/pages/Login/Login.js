import useForm from "./useForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./ValidationForm";

const LoginDeus = () => {
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
        {errors.email && <p className="msgErrs">{errors.email}</p>}
        <label htmlFor="email">Senha</label>
        <Input
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Entrar</Button>
  
      </form>
    </section>
  )
}

export default LoginDeus;