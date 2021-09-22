const baseURL = 'https://lab-api-bq.herokuapp.com';
const token  = localStorage.getItem("token");

export const UserCreate = async (name, email, password, role) => {
  return await fetch(`${baseURL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "Ovnir Burger"
    }),
  }).then(res => res.json())
};


export const LoginWithEmailPassword = async (email, password) => {
  console.log(111, email, password)
  
    return await fetch(baseURL+'/auth', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(response => response.json());

};

export const GetAllProducts = async () => {
  
    return await fetch(baseURL+'/products', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      'Authorization':`${token}`
    },
    
  }).then(response => response.json())
  

};