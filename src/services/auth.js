export async function UserCreate(name, email, password, role) {
  return await fetch('https://lab-api-bq.herokuapp.com/users', {
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
  }
  ).then(response => {
    console.log(response);
    return response.json();
  }).then(json => {
    console.log(json);
    return json
  })
};


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
