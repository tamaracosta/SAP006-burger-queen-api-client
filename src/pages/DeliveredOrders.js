import Header from "../components/header/Header";
import { DefaultTitle, Paragraph } from "../components/tipography/TipographyStyle";
import { GetOrders} from '../services/products';
import { useState, useEffect } from 'react';
import { BackgroundCard, DivProductKitchen } from "../components/card/body/BodyCardStyle";

const DeliveredOrders = () => {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        GetOrders()
            .then((json) => {
               
                const pedidosEntregues = json.filter((item) => item.status === 'Entregue');
                setOrders(pedidosEntregues)

            })
    }, [])

    return (
        <>
            <Header showLogOut={true} />                    
            <DefaultTitle>Pedidos Entregues</DefaultTitle>
            
                
            {orders.map((item) => (
                <div className="container">
                    <BackgroundCard>
                        <DivProductKitchen  key={item.id}>
                            <Paragraph style={{fontSize:"1.5em"}}>Status: {item.status}</Paragraph>
                            <Paragraph>Nome: {item.client_name}</Paragraph>
                            <Paragraph>Mesa: {item.table}</Paragraph>
                            {item.Products.map((product) =>
                                <div className="teste">
                                    <p>{product.qtd}</p>
                                    <p>{product.name}</p>
                                    <p>{product.flavor}</p>
                                    <p>{product.complement}</p>
                                </div>
                            )}
                        </DivProductKitchen>
                    </BackgroundCard>
                </div>                
            ))}
        </>
    )
}

export default DeliveredOrders;