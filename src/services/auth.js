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


export const loginWithEmailPassword = (users) => {
  return  fetch("https://lab-api-bq.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify ({
      "email": users.email,
      "password": users.password
    })
  });
};
