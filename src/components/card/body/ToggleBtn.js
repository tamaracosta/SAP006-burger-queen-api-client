import { Button } from './ToggleBtnStyle';

const ToggleBtn = ({ callback, idProduct, nameProduct, price, quantityProduct = 0, flavor, complement }) => {

  function increase() {
    callback(idProduct, nameProduct, price, quantityProduct + 1, flavor, complement)
  }

  function decrease() {
    let quantity = quantityProduct;
    if(quantityProduct > 0) {
      quantity--;
    }
    
    callback(idProduct, nameProduct, price, quantity, flavor, complement)
  }


  const colorBtnDecrease = (quantityProduct === 0 ? '#a7a7a7' : 'black')

  return (
    <>
      <div>
        <Button onClick={decrease} style={{ color: colorBtnDecrease }}>-</Button>
        <Button>{quantityProduct}</Button>
        <Button onClick={increase}>+</Button>
      </div>
    </>
  )
}

export default ToggleBtn