import { BackgroundCard, DivProduct } from './BodyCardStyle';
import ToggleBtn from './ToggleBtn';


const BodyCard = ({ itens, showCard, callback }) => {
 
    return (
        <div className="container">
            <BackgroundCard style={{ 'display': (showCard ? 'block' : 'none') }}>
                {itens.map(item =>
                (
                    <DivProduct key={item.id}>
                        <p> {item.id} </p>
                        <p> {item.name} </p>
                        <p> R$ {item.price} </p>
                        <ToggleBtn 
                             callback={callback}
                             idProduct={item.id}
                             nameProduct={item.name}
                             price={item.price}
                            />
                    </DivProduct>
                )
                )}
            </BackgroundCard>
        </div>
    )
}

export default BodyCard
