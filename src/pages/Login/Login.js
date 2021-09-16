import useForm from "./useForm";
import Input from "../../components/Forms/Input";
import Button from "../../components/Forms/Button";

const LoginDeus = () => {
  const { handleChange, handleSubmit } = useForm();

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <Input
          name="email"
          type="text"
          onChange={handleChange}
        />
  
        <Input
          name="password"
          type="password"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Entrar</Button>
        <p>ou</p>

      </form>
    </section>
  )

}

export default LoginDeus;