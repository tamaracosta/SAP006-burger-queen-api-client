export const Register = (users) => {
  return fetch('https://lab-api-bq.herokuapp.com/users', {
    method: "POST",
      headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
       name: users.name,
       email: users.email,
       password: users.password,
       role: "sample role",
       restaurant: "Ovni Burger"
    })
  }
)};


export const LoginWithEmailPassword = async (email, password) => {
  console.log(111, email, password)
  return await fetch("https://lab-api-bq.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify ({
      email: email,
      password: password
    })
  }).then(response => response.json());

};
