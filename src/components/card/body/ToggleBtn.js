import { Button } from './ToggleBtnStyle';


const ToggleBtn = ({ callback, idProduct, nameProduct, price, quantidade = 0 }) => {

  function increase() {
    callback(idProduct, nameProduct, price, quantidade + 1)
  }

  function decrease() {
    callback(idProduct, nameProduct, price, quantidade - 1)
  }


  const colorBtnDecrease = (quantidade === 0 ? '#a7a7a7' : 'black')

  return (
    <>
      <div>
        <Button onClick={decrease} style={{ color: colorBtnDecrease }}>-</Button>
        <Button>{quantidade}</Button>
        <Button onClick={increase}>+</Button>
      </div>
    </>
  )
}

export default ToggleBtn