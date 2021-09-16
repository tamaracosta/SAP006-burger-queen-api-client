import { useState } from "react";

export async function UserPost() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  return fetch('https://lab-api-bq.herokuapp.com/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password,
      role,
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

export default UserPost;

