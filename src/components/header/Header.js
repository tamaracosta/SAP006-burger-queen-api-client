import img from '../../assets/logo.svg';
import { Container} from './HeaderStyle';

const Header = () => {
    return (
        <Container className="container">
            <img className="logo" src={img} alt="logo"/>
        </Container>
        
    )
}

export default Header
