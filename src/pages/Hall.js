import { useState } from 'react';
import { GetAllProducts } from "../services/auth";


const Hall= () => {
    const [produtos, setProdutos] = useState([]);

    const handleClick = () => {
        GetAllProducts()
        .then((json) => {
            const breakfast = json.filter((item) => item.type === 'breakfast');
            console.log('breakfast BQ', breakfast);
            setProdutos(breakfast);

        });
    }


    return (
        <div>
            <h1>Hall</h1>
            <button onClick={handleClick}>Café da manhã</button>
            {/*JSON.stringify(produto)*/}

            {produtos.map(item=>
                (
                    <div key={item.id}>
                        <p> {item.name} </p>
                        <p> {item.price} </p>
                    </div>
                )
            )}
        </div>
    )
}

export default Hall