// import './Header.css'; 
import img from '../assets/logo.svg'

const Header = () => {
    return (
        <header className="container">
            <img className="logo" src={img} alt="logo"/>
        </header>
    )
}

export default Header
