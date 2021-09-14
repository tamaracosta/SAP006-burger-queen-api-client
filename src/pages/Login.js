import Button from '../components/button/Button';
import Input from '../components/Input'
import { Link } from 'react-router-dom';
// import fetchData from '../services/auth';


const login = () => {
    return (
        <div>
            <p class="slogan">Hambúrguer de outro planeta</p>
            <Input type="email" label="Email" id="name" />
            <Input type="password" label="Senha" id="password" />

            <Button variant="neon-on"> 
                <Link to="/hall">Entrar</Link>
            </Button> 
            <Button variant="neon-off">
                <Link to="/register">Cadastrar</Link>
            </Button>


        </div>
    )
}

export default login
