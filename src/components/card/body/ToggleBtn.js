import { useState } from 'react';
import { Button } from './ToggleBtnStyle';

const ToggleBtn = ({ callback, idProduct, nameProduct, price }) => {
  const [count, setCount] = useState(0)
  
  function increase() {
    let currentCount = count + 1
    setCount(currentCount)
    callback(idProduct, nameProduct, currentCount, price )
  }

  function decrease() {
    let currentCount = count - 1
    if (count > 0) {
      setCount(currentCount)
      callback(idProduct, nameProduct, currentCount, price )
    }
  }

  const colorBtnDecrease = (count === 0 ? '#a7a7a7' : 'black')

  return (
    <>
      <Button onClick={decrease} style={{ color: colorBtnDecrease }}>-</Button>
      <Button >{count}</Button>
      <Button onClick={increase}>+</Button>
    </>
  )
}

export default ToggleBtn