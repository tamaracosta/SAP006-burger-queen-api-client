const baseURL = 'https://lab-api-bq.herokuapp.com';
const token  = localStorage.getItem("token");

export const GetAllProducts = async () => {
  return await fetch(`${baseURL}/products`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Authorization':`${token}`
    },
  }).then(res => res.json())
}

export const ProductsId = async () => {
  return await fetch('https://lab-api-bq.herokuapp.com/products{productId}', {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Accept': 'application/json',
    },
  }).then(res => res.json())
}

console.log(ProductsId);