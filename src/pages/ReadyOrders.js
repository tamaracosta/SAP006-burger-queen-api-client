import Header from "../components/header/Header";
import { DefaultTitle, Paragraph } from "../components/tipography/TipographyStyle";
import { GetOrders, updateOrderStatus} from '../services/products';
import { useState, useEffect } from 'react';
import { BackgroundCard, DivProductKitchen } from "../components/card/body/BodyCardStyle";
import { GreenButton } from "../components/button/ButtonStyle";

const ReadyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        GetOrders()
            .then((json) => {
                
                const pedidosFinalizados = json.filter((item) => item.status === 'Finalizado');
                setOrders(pedidosFinalizados)
            })
    }, [])


    const changeStatus2 = (item, index) => {
             
        updateOrderStatus(item.id, "Entregue").then(() => {
            const updatedList = [...orders];
            updatedList.splice(index, 1);
            setOrders(updatedList);
         })

    }

    return (
        <>

            <Header showLogOut={true} />                    
            <DefaultTitle>Pedidos Prontos</DefaultTitle>
        
                
            {orders.map((item, index) => (
                <div className="container" key={item.id}>
                    <BackgroundCard>
                        <DivProductKitchen  >

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

                            <div>
                                <GreenButton onClick={() => changeStatus2(item,index)}> Entregar </GreenButton >
                            </div>

                        </DivProductKitchen>
                    </BackgroundCard>
                </div>
                
            ))}




        </>
    )

}

export default ReadyOrders;


