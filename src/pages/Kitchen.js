
import { GetOrders, updateOrderStatus } from '../services/products';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import { BackgroundCard } from '../components/card/body/BodyCardStyle';
import { DefaultTitle, Paragraph } from '../components/tipography/TipographyStyle';
import { GreenButton, SecundaryButton} from '../components/button/ButtonStyle';

const Kitchen = () => {
    const [kitchen, setKitchen] = useState([]);    

    useEffect(() => {
        GetOrders()
            .then((json) => {
                json.sort( (a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() );

                const updateItems = json.map((item) => {
                    if(item.status === "pending") {
                        item.status = "Pendente"
                    } 

                    return item;
                })

                const filterArray = updateItems.filter(item => item.status !== 'Finalizado' && item.status !== 'Entregue' );
                setKitchen(filterArray);
                
            })
            
    }, [])

    

    const changeStatus = (item, option) => {
        let newState = item.status;
        if(item.status === 'Pendente' && option === 'Preparar') {
            newState = "Preparando..."            
        } else if (item.status === 'Preparando...' && option === 'Finalizar') {
            alert('Pedido foi enviado para o garçom')
            const newArray = kitchen.filter(pedido => pedido.id !== item.id );
            setKitchen(newArray)
            newState = "Finalizado"
        } else if(item.status === 'Pendente' && option === 'Finalizar') {
            alert('Você deve preparar o pedido primeiro')
        } else {
            return;
        }   
       
    
        updateOrderStatus(item.id, newState).then(() => {
            if (newState === "Preparando..."){

                const updatedKitchenArray = kitchen.map((pedido) => {
                    if(pedido.id === item.id) {
                        pedido.status = newState;
                        pedido.updatedAt = new Date()
                    }
                    return pedido
                });

                setKitchen(updatedKitchenArray)
            }
        })
           
    }

    
    return (
        <>
            <Header showLogOut={true} />
            <DefaultTitle>Cozinha</DefaultTitle>
                          
            {kitchen.map((item) => (
                <div className="container" key={item.id}  >
                    <BackgroundCard >
                        <Paragraph>Solicitado: {new Date(item.createdAt).toLocaleString()}</Paragraph>
                        
                        {item.status === "Finalizado" ? <Paragraph>Finalizado: {new Date(item.updatedAt).toLocaleString()}</Paragraph> : null}
                                                
                        <Paragraph style={{fontSize:"1.5em"}}>Status: {item.status}</Paragraph>
                        <Paragraph>Nome: {item.client_name}</Paragraph>
                        <Paragraph>Mesa: {item.table}</Paragraph>
                            
                        <div className="container">
                            {item.Products.map((product) =>
                            <span key={product.id}>
                                <p>{product.qtd} {product.name} {product.flavor} {product.complement}</p>                                   
                            </span>
                            )}
                        </div>
                            

                       
                        <div>
                            <GreenButton onClick={() => changeStatus(item, 'Preparar')}> Preparar </GreenButton >
                            <SecundaryButton onClick={() => changeStatus(item, 'Finalizar')} > Finalizar </SecundaryButton >

                        </div>

                        
                    </BackgroundCard>
                </div>
                
            ))}               
              
            
        </>
    )
}

export default Kitchen;

