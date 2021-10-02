import useForm from "./useForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./ValidationForm";
import { Link } from 'react-router-dom';
import ImgBackgroundStyle from "../../components/img-background/ImgBackgroundStyle";
import { LinkStyle, Paragraph } from "../../components/tipography/TipographyStyle";
import { SecundaryParagraph } from "../../components/tipography/TipographyStyle";
import Header from "../../components/header/Header";

const LoginUser = () => {
  const { handleChange, handleSubmit, errors } = useForm(ErrorsMessage);

  return (

    <>
    <Header />
    
    <section>
    <ImgBackgroundStyle />
     

      <form className="container" action="" onSubmit={handleSubmit}>
        <Input
          label="Email"
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          placeholder="Digite o seu email"
        />
        <SecundaryParagraph>{errors.email && errors.email}</SecundaryParagraph>

        
        <Input
          label="Senha"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Digite a sua senha"
        />
        <SecundaryParagraph>{errors.password && errors.password}</SecundaryParagraph>

        <Button>Entrar</Button>
        <Paragraph>ou</Paragraph>
        <Paragraph>Primeira vez?</Paragraph>
        <Link to="/register"><LinkStyle>Cadastre-se aqui</LinkStyle></Link>

      </form>
    </section>
    </>
  )
}

export default LoginUser;
