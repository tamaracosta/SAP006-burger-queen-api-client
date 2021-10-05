import { useState, useEffect } from 'react';
import { GetAllProducts, PostOrders } from "../services/products.js";
import { GiCoffeeCup, GiHamburger, GiFrenchFries } from 'react-icons/gi';
import { Title } from '../components/card/header/HeaderCardStyle';
import HeaderCard from '../components/card/header/HeaderCard';
import BodyCard from '../components/card/body/BodyCard';
import { BackgroundCard, DivProduct } from '../components/card/body/BodyCardStyle.js';
import { MdDelete , MdLocalDrink} from 'react-icons/md';
import Button from '../components/button/Button';
import { DefaultTitle, Paragraph } from '../components/tipography/TipographyStyle.js';
import Header from '../components/header/Header.js';
import Input from '../components/input/Input.js';
import Modal from '../components/modal/Modal.js';




const Hall = () => {
    const [breakfast, setBreakfast] = useState([]);
    const [showBreakfast, setShowBreakfast] = useState(false);
    const [hamburguer, setHamburguer] = useState([]);
    const [showHamburguer, setShowHamburguer] = useState(false);
    const [drink, setDrink] = useState([]);
    const [showDrink, setShowDrink] = useState(false);
    const [side, setSide] = useState([]);
    const [showSide, setShowSide] = useState(false);
    const [nome, setNome] = useState('');
    const [mesa, setMesa] = useState('');
    const [pedido, setPedido] = useState([]);
    const [allValue, setAllValue] = useState('');
    const [showResume, setShowResume] = useState(false);
    const [showModal, setShowModal] = useState(false);
    



    useEffect(() => {
        GetAllProducts()
            .then((json) => {
                const breakfastList = json.filter((item) => item.type === "breakfast");
                console.log('breakfast BQ', breakfastList);
                setBreakfast(breakfastList);

                const hamburguerList = json.filter((item) => item.sub_type === 'hamburguer');
                console.log('hamburguer BQ', hamburguerList);
                setHamburguer(hamburguerList);

                const drinkList = json.filter((item) => item.sub_type === 'drinks');
                console.log('drink BQ', drinkList);
                setDrink(drinkList);

                const sides = json.filter((item) => item.sub_type === 'side');
                console.log('side BQ', sides);
                setSide(sides);

            });
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
    }


    const handleChange = (e) => {
        setNome(e.target.value)
    };

    const handleChangeTable = (e) => {
        setMesa(e.target.value)
    };


    const addOrderResume = (idProduct, nameProduct, currentCount, price) => {
        const pedidoAtualizado = [
            ...pedido.filter(item => item.id !== idProduct),
            {
                id: idProduct,
                quantidade: currentCount,
                name: nameProduct,
                price: price,
                totalProductPrice: price * currentCount,
            },
        ];
       
        
        
        setPedido(pedidoAtualizado);
        totalValue(pedidoAtualizado);
    }

    const enviarResume = () => {
        setShowModal(true)
        const allProducts = pedido.map((item) => {
            
            const productsArr =
            {
                id: item.id,
                qtd: item.quantidade,
            }
           
            return productsArr
            
        })
        PostOrders(nome, mesa, allProducts)
        .then(console.log('oq tem aqui gay?'))
    }



    const remove = (index) => {
        const updatedList = [...pedido];
        const deletedItems = updatedList.splice(index, 1);
        console.log(deletedItems)
        setPedido(updatedList);
        setAllValue(allValue - deletedItems[0].totalProductPrice);
    }



    const totalValue = (pedidoAtual) => {
        let total = 0;
        pedidoAtual.forEach(item => {
            total += item.totalProductPrice;
        })
        setAllValue(total)
        console.log(total)

        if (total > 0) {
            setShowResume(true)
        } else {
            setShowResume(false)
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
                label="Mesa"
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
                    itens={breakfast}
                    showCard={showBreakfast}
                    callback={addOrderResume}
                />

                <HeaderCard onClick={() => handleClick("hamburguer")}>
                    <GiHamburger />
                    <Title>Hambúrguer</Title>
                </HeaderCard>
                <BodyCard
                    itens={hamburguer}
                    showCard={showHamburguer}
                    callback={addOrderResume}
                />

                <HeaderCard onClick={() => handleClick("drink")}>
                    <MdLocalDrink />
                    <Title>Bebidas</Title>
                </HeaderCard>
                <BodyCard
                    itens={drink}
                    showCard={showDrink}
                    callback={addOrderResume}
                />

                <HeaderCard onClick={() => handleClick("side")}>
                    <GiFrenchFries />
                    <Title>Acompanhamento</Title>
                </HeaderCard>
                <BodyCard
                    itens={side}
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
                   <Paragraph>Cliente: {nome}</Paragraph>
                   <Paragraph>Mesa: {mesa}</Paragraph>

                   {pedido.map((item, index) => (
                       <DivProduct key={item.id}>
                           <p>Id: {item.id} </p>
                           <p>Qtd: {item.quantidade} x R${item.price} </p>
                           <p> {item.name} </p>
                           <p> R$ {item.totalProductPrice}</p>

                           <MdDelete onClick={() => remove(index)} style={{ color: '#d13030', cursor: 'pointer' }} />

                       </DivProduct>
                   ))}

                   <Paragraph>Valor Total: R${allValue} </Paragraph>
                   <Button onClick={() => enviarResume()}>Enviar</Button>
               </BackgroundCard>

           </div>)
        : null}
        
        </>
    )


}


export default Hall

