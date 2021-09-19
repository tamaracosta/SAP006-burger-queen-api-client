import UseForm from "./UseForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./ValidationForm";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { Link } from 'react-router-dom';

const Register = () => {
  const { handleChange, handleSubmit, errors } = UseForm(ErrorsMessage);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <Input
          name="name"
          type="text"
          onChange={handleChange}
        />
        <p> {errors.name && errors.name}</p>

        <label htmlFor="email">Email</label>
        <Input
          name="email"
          type="email"
          onChange={handleChange}
        />
        <p> {errors.email && errors.email}</p>

        <label htmlFor="password">Senha</label>
        <Input
          name="password"
          type="password"
          onChange={handleChange}
        />
        <p> {errors.password && errors.password}</p>

        <label htmlFor="confirmPassword">Confirme sua senha</label>
        <Input
          name="confirmPassword"
          type="password"
          onChange={handleChange}
        />
        <p> {errors.password && errors.password}</p>

        <label htmlFor="role">Selecione sua função</label>
        <Input
          name="role"
          type="radio"
          onChange={handleChange}
          value="atendente"
        />
        <Input
          name="role"
          type="radio"
          onChange={handleChange}
          value="cozinheiro"
        />
              
        <Button onClick={openModal}>Cadastre-se</Button>
        
      </form>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>Cadastro realizado com sucesso!</p>
        <Link to="/login"><Button>Fazer Login</Button></Link>
      </Modal>
    </section>
  )
}

export default Register;