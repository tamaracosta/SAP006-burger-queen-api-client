import { useState, useEffect } from 'react';
import { GetAllProducts, PostOrders } from "../services/products.js";
import { GiCoffeeCup, GiHamburger, GiFrenchFries } from 'react-icons/gi';
import { Title } from '../components/card/header/HeaderCardStyle';
import HeaderCard from '../components/card/header/HeaderCard';
import BodyCard from '../components/card/body/BodyCard';
import { BackgroundCard, DivProduct } from '../components/card/body/BodyCardStyle.js';
import { MdDelete , MdLocalDrink} from 'react-icons/md';
import { DefaultTitle, Paragraph } from '../components/tipography/TipographyStyle.js';
import Header from '../components/header/Header.js';
import Modal from '../components/modal/Modal.js';
import { GreenButton, OrderButton, RedButton} from '../components/button/ButtonStyle.js';
import { Link } from 'react-router-dom';
import { GetOrders } from '../services/products';
import { ClientData } from '../components/input/InputStyle.js';




const Hall = () => {
    const [showBreakfast, setShowBreakfast] = useState(false);
    const [showHamburguer, setShowHamburguer] = useState(false);
    const [showHamburguerDuplo, setShowHamburguerDuplo] = useState(false);
    const [showDrink, setShowDrink] = useState(false);
    const [showSide, setShowSide] = useState(false);
    const [nameClient, setNameClient] = useState('');
    const [table, setTable] = useState('');
    const [order, setOrder] = useState([]);
    const [allValue, setAllValue] = useState('');
    const [showResume, setShowResume] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [menu, setMenu] = useState([]);
    const [readyOrder, setReadyOrder] = useState([]);
  
    
    useEffect(() => {
        GetAllProducts()
        .then((json) => setMenu(json));

        GetOrders()
        .then((json) => {
           
            const pedidosFinalizados = json.filter((item) => item.status === 'Finalizado');
            setReadyOrder((pedidosFinalizados) ? pedidosFinalizados.length : 0)
                  
         })
                           
    }, []);

    
    const handleClick = (typeProduct) => {
        if (typeProduct === "breakfast") {
            setShowBreakfast(!showBreakfast);
        }
        if (typeProduct === "hamburguer") {
            setShowHamburguer(!showHamburguer);
        }
        if (typeProduct === "drink") {
            setShowDrink(!showDrink);
        }
        if (typeProduct === "side") {
            setShowSide(!showSide);
        }
        if (typeProduct === "hamburguerDuplo") {
            setShowHamburguerDuplo(!showHamburguerDuplo);
        }
    }

    const handleChange = (e) => {
        setNameClient(e.target.value)
    };

    const handleChangeTable = (e) => {
        setTable(e.target.value)
    };


    const addOrderResume = (idProduct, nameProduct, price, quantityProduct, flavor, complement) => {
    
        let updatedOrder = [
            ...order.filter(item => item.id !== idProduct),
        ];

        if(quantityProduct > 0) {
            updatedOrder.push(
                {
                    id: idProduct,
                    quantity: quantityProduct,
                    name: nameProduct,
                    price: price,
                    totalProductPrice: price * quantityProduct,
                    flavor: flavor,
                    complement: complement

                }
            );
        }

        const updatedMenu = menu.map((item) => {
            if(item.id === idProduct) {
                return {...item, quantity: quantityProduct}
            }
            return item
        })

        setMenu(updatedMenu)
        setOrder(updatedOrder);
        totalValue(updatedOrder);
    }

    const sendResume = () => {      
        if (nameClient !== '' && table !== '' && order.length > 0) {
            
            const allProducts = order.map((item) => {
                 const productsArr =
                {
                    id: item.id,
                    qtd: item.quantity,
                }
                return productsArr
            })

            PostOrders(nameClient, table, allProducts).then(() => {
                setShowModal(true);
                setShowResume(false);
                setNameClient('');
                setTable('');
                setMenu(menu.map(item => {
                    item.quantity = 0;
                    return item;
                }));
                setOrder([]);
                setShowBreakfast(false);
                setShowHamburguer(false);
                setShowHamburguerDuplo(false);
                setShowSide(false);
                setShowDrink(false);
                window.scrollTo( 0, 0 );
            })
            
        }
        
    }

    const remove = (index) => {
        const updatedList = [...order];
        const deletedItems = updatedList.splice(index, 1);
        setOrder(updatedList);
        setAllValue(allValue - deletedItems[0].totalProductPrice);


        const updatedMenu = menu.map((item) => {
            if(item.id === deletedItems[0].id) {
                return {...item, quantity: 0 }
            }
            return item
            })
            setMenu(updatedMenu)
        }
        
    const totalValue = (currentOrder) => {
        let total = 0;
        currentOrder.forEach(item => {
            total += item.totalProductPrice;
        })
        setAllValue(total)
        
        if (total > 0) {
            setShowResume(true)
        } else {
            total = 0
        }
    }

    const confirmCancelResume = () => {
        if (nameClient === '' || table=== '') {
            setShowCancelModal(false)
           } else {
            setShowCancelModal(true)
           }
    }

    const cancelResume = () => {
        setShowCancelModal(false)
        setShowResume(false)
    }

    const msgError = (nameClient === '' || table === '') ? <p style={{color: 'red'}}><i>Por gentileza, preencha os dados do Cliente</i></p> : null;

    const alertReadyOrder =  (readyOrder > 0)
    ?  <> ({readyOrder}) </>
    : null;

    return (
        <>
            <Header showLogOut={true} />
            <DefaultTitle>Salão</DefaultTitle>
            <div className="container side-elements">
                <Link to="/readyorders"><OrderButton> Pedidos Prontos
                {alertReadyOrder}                  
                </OrderButton> </Link>

                <Link to="/deliveredorders"><OrderButton>Pedidos Entregues</OrderButton></Link>
            </div>


            <div className="container">
                <HeaderCard onClick={() => handleClick("breakfast")}>
                    <GiCoffeeCup /><Title>Café da Manhã</Title>
                </HeaderCard>
                <BodyCard
                    itens={menu.filter((item) => item.type === "breakfast")}
                    showCard={showBreakfast}
                    callback={addOrderResume}
                />

                <HeaderCard onClick={() => handleClick("hamburguer")}>
                    <GiHamburger />
                    <Title>Hambúrguer Simples</Title>
                </HeaderCard>
                <BodyCard
                    itens={menu.filter((item) => item.name === 'Hambúrguer simples')}
                    showCard={showHamburguer}
                    callback={addOrderResume}
                />

                <HeaderCard onClick={() => handleClick("hamburguerDuplo")}>
                    <GiHamburger />
                    <Title>Hambúrguer Duplo</Title>
                </HeaderCard>
                <BodyCard
                    itens={menu.filter((item) => item.name === 'Hambúrguer duplo')}
                    showCard={showHamburguerDuplo}
                    callback={addOrderResume}
                />

                <HeaderCard onClick={() => handleClick("drink")}>
                    <MdLocalDrink />
                    <Title>Bebidas</Title>
                </HeaderCard>
                <BodyCard
                    itens={menu.filter((item) => item.sub_type === 'drinks')}
                    showCard={showDrink}
                    callback={addOrderResume}
                />


                <HeaderCard onClick={() => handleClick("side")}>
                    <GiFrenchFries />
                    <Title>Acompanhamento</Title>
                </HeaderCard>
                <BodyCard
                    itens={menu.filter((item) => item.sub_type === 'side')}
                    showCard={showSide}
                    callback={addOrderResume}
                />
            </div>
            <div className="container">
                <Paragraph>Dados do Cliente</Paragraph>
            </div>
            <div className="container side-elements">
                               
                <ClientData
                placeholder="Nome"
                label="Nome do Cliente"
                id="name"
                className="input"
                name="nameClient"
                type="text"
                onChange={handleChange}                               
                value={nameClient}
                /> 
                
                <ClientData
                placeholder="Mesa"
                label="Mesa do Cliente"
                className="input"
                name="tableClient"
                type="number"
                onChange={handleChangeTable}
                value={table}
                step="any"
                min="0"                               
                />
                                                                      
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal} >
                <p>Pedidos enviados com sucesso!</p>
            </Modal>
            
            <Modal showModal={showCancelModal} setShowModal={setShowCancelModal} >
                <p>Você deseja cancelar esse pedido?</p> 
                <div style={{textAlign: 'center'}}>  
                    <RedButton style={{width: '150px'}} onClick={() => cancelResume()}>Cancelar</RedButton>   
                </div>         
            </Modal>

    {/* -----------------COMANDA ---------------------*/}
            {showResume ? (
                <div className="container">
                    <BackgroundCard>
                        <h3>Comanda</h3>
                        {msgError}
                        <Paragraph>Cliente: {nameClient}</Paragraph>
                        <Paragraph>Mesa: {table}</Paragraph>

                
                        {order.map((item, index) => (
                            <DivProduct key={item.id}>
                                <p>Qtd: {item.quantity} x {item.price} </p>
                                <p> {item.name} </p>                       
                                <p>{item.flavor}</p>
                                <p>{item.complement}</p>
                                <p> R$ {item.totalProductPrice}</p>

                                <MdDelete onClick={() => remove(index)} style={{ color: '#d13030', cursor: 'pointer' }} />
                            </DivProduct>

                        ))}

                        <Paragraph>Valor Total: R$ {allValue} </Paragraph>
                        <GreenButton onClick={() => sendResume()}>Enviar</GreenButton>
                        <RedButton onClick={() => confirmCancelResume()}>Cancelar</RedButton>
                    </BackgroundCard>

                </div>)
            : null}
            
        </>
    )

}

export default Hall

