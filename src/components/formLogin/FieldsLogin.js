import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import Input from '../input/Input';
import { LoginWithEmailPassword } from '../../services/auth';
import { useHistory } from 'react-router-dom'

const FieldsLogin = () => {
    const [values, setValues] = React.useState({email: "", password: ""});
    const [messageError, setMessageError] = React.useState('');
       
    const history = useHistory()

    const routerHall = () => {
        history.push('/hall')
    }
    const routerKitchen = () => {
        history.push('/kitchen')
    }

       let handleSubmit = (e) => {
        e.preventDefault()

        LoginWithEmailPassword(values.email, values.password)
            .then((response) => {
            console.log(response);

            if(response.code && response.code === 400){
               alert(response.message)
            } else {
                alert('ok, token válido');
                localStorage.setItem('token', response.token);
                
                const id = response.id
                localStorage.setItem("id", id)
                            
                if (response.role === "hall") {
                    routerHall();
                } if (response.role === "kitchen") {
                    routerKitchen();
                }
           
            }
                
         })
        .catch((error)=> {
             setMessageError('Erro na requisição. [' + error.message + ']');

        })
    }

      const handleValues = (e) => {
        setValues({...values,  [e.target.name]: e.target.value}) 
    }

    return (
        <section>
        <form action="" onSubmit={handleSubmit}>
            <Input type="email" label="Email" id="name" name="email" onChange={handleValues} />
            <Input type="password" label="Senha" id="password" name="password" onChange={handleValues} /> 
            <Button>Entrar</Button>
            <p>ou</p>
            <p>Primeira vez? <Link to="/register">Cadastre-se aqui</Link></p>
            
        </form>

{messageError}
<br/>
{JSON.stringify(values)}

    </section>
    )
}

export default FieldsLogin
