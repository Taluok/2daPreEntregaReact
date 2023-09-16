import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'

const CartItem = (item) => {

    const { removeItem } = useContext(CartContext);

    return <div className="container cartCard d-flex col-12 justify-content-around">
        <img src={item.images} alt={item.name} className="cartImg img-fluid" />
        <h3 className="card-title text-center">{item.name}</h3>
        <p className="card-text">${item.price}</p>
        <p className="card-text">Cantidad: {item.quantity}</p>
        <button onClick={() => removeItem(item.id)} className="btn btn-danger cartRemove">x</button>
    </div>;
};

export default CartItem;