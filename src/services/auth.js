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


// async function Testando() {
  // const request = {
  //   method: 'POST',
  //   headers: {
  //     "name": "",
  //     "email": "",
  //     "password": "",
  //     "role": "",
  //     "restaurant": ""
  //   },
  // };

//   let response = await fetch('https://lab-api-bq.herokuapp.com/api-docs/#/users/createUser')
//   let userData = await response.json();
//   let [user1, user2] = await Promise.all([Testando(1), Testando(2)])
//   console.log(user1, user2)

//   return userData;
// };

// console.log(Testando())