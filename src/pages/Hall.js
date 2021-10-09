import { useState, useEffect } from 'react';
import { GetAllProducts, PostOrders } from "../services/products.js";
import { GiCoffeeCup, GiHamburger, GiFrenchFries } from 'react-icons/gi';
import { Title } from '../components/card/header/HeaderCardStyle';
import HeaderCard from '../components/card/header/HeaderCard';
import BodyCard from '../components/card/body/BodyCard';
import { BackgroundCard, DivProduct } from '../components/card/body/BodyCardStyle.js';
import { MdDelete, MdLocalDrink } from 'react-icons/md';
import Button from '../components/button/Button';
import { DefaultTitle, Paragraph } from '../components/tipography/TipographyStyle.js';
import Header from '../components/header/Header.js';
import Input from '../components/input/Input.js';
import Modal from '../components/modal/Modal.js';




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
    const [menu, setMenu] = useState([]);


    useEffect(() => {
        GetAllProducts()
            .then((json) => setMenu(json));
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


    const addOrderResume = (idProduct, nameProduct, price, quantidade) => {
        const updatedOrder = [
            ...order.filter(item => item.id !== idProduct),
            {
                id: idProduct,
                name: nameProduct,
                price: price,
                totalProductPrice: price * quantidade,
            },
        ];

        const updatedMenu = menu.map((item) => {
            if(item.id === idProduct) {
                return {...item, quantidade: quantidade}
            }
            return item
        })

        setMenu(updatedMenu)

        setOrder(updatedOrder);
        totalValue(updatedOrder);
    }

    const sendResume = () => {
        setShowModal(true)
        const allProducts = order.map((item) => {

            const productsArr =
            {
                id: item.id,
                qtd: item.quantidade,
            }

            return productsArr

        })
        PostOrders(nameClient, table, allProducts)
    }



    const remove = (index) => {
        const updatedList = [...order];
        const deletedItems = updatedList.splice(index, 1);
        console.log(deletedItems)
        setOrder(updatedList);
        setAllValue(allValue - deletedItems[0].totalProductPrice);
        console.log(setAllValue)

        const updatedMenu = menu.map((item) => {
            if(item.id === deletedItems[0].id) {
                return {...item, quantidade: 0 }
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
        console.log(total)

        if (total > 0) {
            setShowResume(true)
        } else {
            total = 0
        }
    }

    return (
        <>
            <Header showLogOut={true} />

            <DefaultTitle>Salão</DefaultTitle>

            <div className="container">
                <Input
                    label="Nome do Cliente"
                    id="name"
                    className="input"
                    name="nameClient"
                    type="text"
                    onChange={handleChange}

                />


                <Input
                    label="Mesa do Cliente"
                    className="input"
                    name="tableClient"
                    type="number"
                    onChange={handleChangeTable}
                    step="any"
                    min="0"

                />


            </div>

            <div>

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

            <Modal showModal={showModal} setShowModal={setShowModal} >
                <p>Pedidos enviados com sucesso!</p>
            </Modal>


            {/* -----------------COMANDA ---------------------*/}
            {showResume ? (
                <div className="container">
                    <BackgroundCard>
                        <h3>Comanda</h3>
                        <Paragraph>Cliente: {nameClient}</Paragraph>
                        <Paragraph>Mesa: {table}</Paragraph>

                        {order.map((item, index) => (
                            <DivProduct key={item.id}>
                                <p>Id: {item.id} </p>
                                <p>Qtd: {item.quantidade} x R$ {item.price} </p>
                                <p> {item.name} </p>
                                <p> R$ {item.totalProductPrice}</p>

                                <MdDelete onClick={() => remove(index)} style={{ color: '#d13030', cursor: 'pointer' }} />

                            </DivProduct>
                        ))}

                        <Paragraph>Valor Total: R$ {allValue } </Paragraph>
                        <Button onClick={() => sendResume()}>Enviar</Button>
                    </BackgroundCard>

                </div>
            ) : null}

        </>
    )
}


export default Hall

