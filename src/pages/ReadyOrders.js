import Header from "../components/header/Header";
import { DefaultTitle, Paragraph } from "../components/tipography/TipographyStyle";
import { GetOrders, updateOrderStatus} from '../services/products';
import { useState, useEffect } from 'react';
import { BackgroundCard, DivProductKitchen } from "../components/card/body/BodyCardStyle";
import { GreenButton } from "../components/button/ButtonStyle";
import { Link } from "react-router-dom";

const ReadyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        GetOrders()
            .then((json) => {
                
                const pedidosFinalizados = json.filter((item) => item.status === 'Finalizado');
                setOrders(pedidosFinalizados)
               
            })
    }, [])


    const changeStatus = (item, index) => {
             
        updateOrderStatus(item.id, "Entregue").then(() => {
            const updatedList = [...orders];
            updatedList.splice(index, 1);
            setOrders(updatedList);
         })

    }

    return (
        <>

            <Header showLogOut={true} />                    
            <div className="container">
                <DefaultTitle>Pedidos Prontos</DefaultTitle>
                <Link to="/hall"><div style={{color: '#ce8e43', textAlign: "left"}} > Voltar</div></Link>
            </div>
            
        
            <section className="container">
            
            {orders.map((item, index) => (
                <div key={item.id}>
                    <BackgroundCard className="item">
                        <DivProductKitchen  >

                            <Paragraph>Status: {item.status}</Paragraph>
                            <Paragraph>Nome: {item.client_name}</Paragraph>
                            <Paragraph>Mesa: {item.table}</Paragraph>
                            
                            <div className="container">
                            {item.Products.map((product) =>
                                <p>{product.qtd} {product.name} {product.flavor} {product.complement}</p>                                   
                               
                            )}
                            </div>

                            <div>
                                <GreenButton onClick={() => changeStatus(item,index)}> Entregar </GreenButton >
                            </div>

                        </DivProductKitchen>
                    </BackgroundCard>
                </div>
                
            ))}
            </section>



        </>
    )

}

export default ReadyOrders;


