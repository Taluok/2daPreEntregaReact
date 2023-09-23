import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";


const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
    if (totalQuantity === 0) {
        return (
            <div className="container cart-body">
                <h1>El carrito esta vacio!</h1>
                <Link to="/" className="btn btn-dark">
                    Ir al Inicio
                </Link>
            </div>
        );
    }

    return (
        <div className="container cartBody">
            {cart.map((p) => (
                <CartItem key={p.id} {...p} />
            ))}
            <h3 className="total">Total: ${total}</h3>
            <div className="cartBoton">
                <button onClick={() => clearCart()} className="btn btn-danger">
                    Vaciar Carrito
                </button>
                <Link to="/checkout" className="btn btn-dark">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default Cart;