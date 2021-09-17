// const username = UserForm;
//     const [values, setValues] = useState({ email: "", password: "" });
//     const [messageError, setMessageError] = useState('');

//     let  = (e) => {
//         e.preventDefault()

//         LoginWithEmailPassword(values.email, values.password)
//             .then((response) => {
//                 console.log(response)

//                 if (response.code && response.code === 400) {
//                     alert(response.message)
//                 } else {
//                     alert('ok' + response.token);
//                     localStorage.setItem('token', response.token);

//                 }

//             })
//             .catch((error) => {
//                 setMessageError('Erro na requisição. [' + error.message + ']');

//             })
//     }
//     const handleValues = (e) => {
//         setValues({ ...values, [e.target.name]: e.target.value })
//     }

//     {messageError}
//     <br />
//     {JSON.stringify(values)}
