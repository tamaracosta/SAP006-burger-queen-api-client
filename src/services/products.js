const HEADERS_API = { "Content-Type": "application/json", 
"Authorization": localStorage.getItem("token") }

export const ProductsAll = async () => {
  return await fetch('https://lab-api-bq.herokuapp.com/products', {
    method: 'GET',
    HEADERS_API,
  })
  .then(res => res.json())
}