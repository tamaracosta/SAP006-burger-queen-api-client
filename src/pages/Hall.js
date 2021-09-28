import { useState, useEffect } from 'react';
import { GetAllProducts } from "../services/auth";
import { GiCoffeeCup, GiHamburger, GiFrenchFries } from 'react-icons/gi';
import { BiDrink } from 'react-icons/bi';
import { Title } from '../components/card/header/HeaderCardStyle';
import HeaderCard from '../components/card/header/HeaderCard';
import BodyCard from '../components/card/body/BodyCard';
 

const Hall= () => {
    const [breakfast, setBreakfast] = useState([]);
    const [showBreakfast, setShowBreakfast] = useState(false);
    const [hamburguer, setHamburguer] = useState([]);
    const [showHamburguer, setShowHamburguer] = useState(false);
    const [drink, setDrink] = useState([]);
    const [showDrink, setShowDrink] = useState(false);

    useEffect(() => {
        GetAllProducts()
        .then((json) => {            
            const breakfastList = json.filter((item) => item.type === "breakfast" );
            console.log('breakfast BQ', breakfastList);
            setBreakfast(breakfastList);

            const hamburguerList = json.filter((item) => item.sub_type === 'hamburguer');
            console.log('hamburguer BQ', hamburguerList);
            setHamburguer(hamburguerList);

            const drinkList = json.filter((item) => item.sub_type === 'drinks');
            console.log('drink BQ', drinkList);
            setDrink(drinkList);
           

        });
     }, []);
    
    
   

    const handleClick = (typeProduct) => {
        if(typeProduct === "breakfast") {
            setShowBreakfast(!showBreakfast);
        }
        if(typeProduct === "hamburguer") {
            setShowHamburguer(!showHamburguer);
        }
        if(typeProduct === "drink") {
            setShowDrink(!showDrink);
        }
        
    }

    const [nome, setNome] = useState('');
    const [mesa, setMesa] = useState('');
    
      const handleChange = (e) => {
        setNome(e.target.value)
    };

    const handleChangeTable = (e) => {
        setMesa(e.target.value)
    };
   
    return (
        <>
            <h1>Hall</h1>

            <label>Nome do Cliente</label>
            <input onChange={handleChange} className="input" type="text" name="nameClient"></input>


            <label>Mesa</label>
            <input onChange={handleChangeTable} className="input" type="number" name="tableClient" step="any">
            </input>
            
          
            <HeaderCard onClick={() => handleClick("breakfast")}>
                <GiCoffeeCup /><Title>Café da Manhã</Title> 
            </HeaderCard>            
            <BodyCard itens={breakfast} showCard={showBreakfast}  />            

            <HeaderCard onClick={() => handleClick("hamburguer")}>
                <GiHamburger />
                <Title>Hambúrguer</Title>
            </HeaderCard>
            <BodyCard itens={hamburguer} showCard={showHamburguer} />

            <HeaderCard onClick={() => handleClick("drink")}>
                <BiDrink />
                <Title>Bebidas</Title> 
            </HeaderCard>
            <BodyCard itens={drink} showCard={showDrink}  />

            <HeaderCard><GiFrenchFries /><Title>Acompanhamento</Title></HeaderCard>

            <div style={{width: '400px', height: '400px', backgroundColor: 'white'}}>Comanda
            <br/>            
            {nome}
            <br/> 
            {mesa}
            
            </div>
            
        </>
    )
}

export default Hall