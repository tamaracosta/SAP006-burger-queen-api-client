import Header from "../components/header/Header";
import { DefaultTitle, Paragraph, ResumeTitle } from "../components/tipography/TipographyStyle";
import { GetOrders} from '../services/products';
import { useState, useEffect } from 'react';
import { BackgroundCard, DivProductKitchen } from "../components/card/body/BodyCardStyle";
import { Link } from "react-router-dom";

const OrdersDelivered = () => {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        GetOrders()
            .then((json) => {
               
                const orderDelivered = json.filter((item) => item.status === 'Entregue');
                setOrders(orderDelivered)

            })

    }, [])

    return (
        <>
            <Header showLogOut={true} />                    
           
            <div className="container">
                <DefaultTitle>Pedidos Entregues</DefaultTitle>
                <Link to="/hall"><div style={{color: '#ce8e43', textAlign: "left"}} > Voltar</div></Link>
            </div>
                
            {orders.map((item) => (
                <div className="container" key={item.id}>
                    <BackgroundCard >
                        <DivProductKitchen>
                            <ResumeTitle>Status: {item.status}</ResumeTitle>
                            <Paragraph>Nome: {item.client_name}</Paragraph>
                            <Paragraph>Mesa: {item.table}</Paragraph>
                            <div className="container">
                            {item.Products.map((product) =>
                                <span key={product.id}>
                                <p>{product.qtd} {product.name} {product.flavor} {product.complement}</p>                                   
                                </span>                                   
                               
                            )}
                            </div>
                        </DivProductKitchen>
                    </BackgroundCard>
                </div>                
            ))}
        </>
    )
}

export default OrdersDelivered;