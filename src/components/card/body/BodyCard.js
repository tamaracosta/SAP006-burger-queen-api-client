import { BackgroundCard, DivProduct} from './BodyCardStyle';
import ToggleBtn from './ToggleBtn';

const BodyCard = ({itens, showCard}) => {


    return (
        <div className="container">
           <BackgroundCard style={ {'display': (showCard ? 'block' : 'none') }}>
                {itens.map(item=>
                    (
                        <DivProduct key={item.id}>
                            <p> {item.id} </p>
                            <p> {item.name} </p>
                            <p> R$ {item.price} </p>
                            <ToggleBtn idProduct={item.id} nameProduct={item.name}/>
                        </DivProduct>
                    )
                )}
            </BackgroundCard>
        </div>
    )
}

export default BodyCard
