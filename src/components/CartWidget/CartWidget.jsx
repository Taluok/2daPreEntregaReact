import { useContext } from 'react';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    // Define una clase CSS condicional
    const cartNumberClass = totalQuantity > 0 ? 'cart-number cart-number-active' : 'cart-number';

    return (
        <Link to="/cart">
            <Icon className='cart-icon display-6' icon="raphael:cart" />
            
            <span className={cartNumberClass} style={{ textDecoration: 'none' }}>{totalQuantity > 0 && totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;


