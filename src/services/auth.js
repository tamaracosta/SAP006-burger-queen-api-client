const baseURL = 'https://lab-api-bq.herokuapp.com';
const headers = { "Content-Type": "application/json" }

export const UserCreate = async (name, email, password, role) => {
  return await fetch(`${baseURL}/users`, {
    method: "POST",
    headers,
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
  
    return await fetch(`${baseURL}/auth`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(res => res.json());
};
