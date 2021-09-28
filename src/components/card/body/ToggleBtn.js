import { useState } from 'react';
import { Button } from './ToggleBtnStyle';

const ToggleBtn = () => {
    const [count, setCount ] = useState(0)

    function increase() {
        setCount(count+1)
        
    }

    function decrease() {
        if(count > 0) {
            setCount(count-1)          
       }   
    }

    const colorBtnDecrease = (count === 0 ? '#a7a7a7': 'black')

    return (
        <div>
            <Button onClick={decrease} style={{color: colorBtnDecrease}}>-</Button> 
            <Button >{count}</Button> 
           <Button onClick={increase}>+</Button>                   

        </div>
    )
}

export default ToggleBtn