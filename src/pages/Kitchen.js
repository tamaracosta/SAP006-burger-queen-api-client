
import { GetOrders } from '../services/products';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';

const Kitchen = () => {
    const [kitchen, setKitchen] = useState([]);


    useEffect(() => {
        GetOrders()
            .then((json) => setKitchen(json))
    }, [])

    return (
        <>
        <Header showLogOut={true} />
        <div>
            <h1>Cozinha</h1>
            <>
                {kitchen.map((item) => (
                    <div key={item.id}>
                        <p>nome: {item.client_name} </p>
                        <p>mesa {item.table} </p>
                        {item.Products.map((produto) =>
                            <>
                                <p>produto: {produto.name}</p>
                                <p>quantidade: {produto.qtd}</p>
                            </>
                        )}
                    </div>
                ))}
            </>

        </div>
        </>
    )
}

export default Kitchen;