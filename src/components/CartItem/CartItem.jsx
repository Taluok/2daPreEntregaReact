import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ id, name, price, img, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="container cartCardd d-flex col-12 justify-content-around">
            <img src={`/img/${img}`} alt={name} className="imageItem1" />
            <h3 className="card-title text-center cardTitle">{name}</h3>
            <p className="card-text cardText">${price}</p>
            <p className="card-text cardText">Cantidad: {quantity}</p>
            <button onClick={() => removeItem(id)} className="btn btn-danger cartRemove">
                x
            </button>
        </div>
    );
};

export default CartItem;


