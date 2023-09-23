import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartItem.css'

const CartItem = (item) => {

    const { removeItem } = useContext(CartContext);

    return <div className="container cartCardd d-flex col-12 justify-content-around">
        <img src={`/img/${item.img}`} alt={item.name} className="imageItem1" />
        <h3 className="card-title text-center cardTitle">{item.name}</h3>
        <p className="card-text cardText">${item.price}</p>
        <p className="card-text cardText">Cantidad: {item.quantity}</p>
        <button onClick={() => removeItem(item.id)} className="btn btn-danger cartRemove">x</button>
    </div>;
};

export default CartItem;

