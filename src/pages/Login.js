import Button from '../components/button/Button';
import { Link } from 'react-router-dom';
// import fetchData from '../services/auth';

const login = () => {
    return (
        <div>
            Tela inicial
            <Button variant="active">
                <Link to="/hall">Entrar</Link>
            </Button>
            <Button variant="desative">
                <Link to="/register">Cadastrar</Link>
            </Button>


        </div>
    )
}

export default login
