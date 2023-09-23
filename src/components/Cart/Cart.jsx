import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="container cart-body">
                <h1>El carrito está vacío!</h1>
                <Link to="/" className="btn btn-dark">
                    Ir al Inicio
                </Link>
            </div>
        );
    }

    return (
        <div className="container cartBody">
            {cart.map(({ id, name, price, quantity }) => (
                <CartItem key={id} id={id} name={name} price={price} quantity={quantity} />
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
