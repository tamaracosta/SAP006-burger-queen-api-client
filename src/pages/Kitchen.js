
import { GetOrders } from '../services/products';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';

const Cozinha = () => {
    const [cozinha, setCozinha] = useState([]);


    useEffect(() => {
        GetOrders()
            .then((json) => setCozinha(json))
    }, [])

    return (
        <>
        <Header showLogOut={true} />
        <div>
            <h1>Cozinha</h1>
            <>
                {cozinha.map((item) => (
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

export default Cozinha;