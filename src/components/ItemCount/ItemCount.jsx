import { useState } from 'react';
import PropTypes from 'prop-types';

const ItemCount = ({ initial, onAdd, stock }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-dark" onClick={decrement}>
                    -
                </button>
                <h4 className="number">{quantity}</h4>
                <button className="btn btn-dark" onClick={increment}>
                    +
                </button>
            </div>
            <hr />
            <div>
                <button
                    className="btn btn-dark"
                    onClick={() => onAdd(quantity)}
                    disabled={!stock}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;

ItemCount.propTypes = {
    initial: PropTypes.number,
    stock: PropTypes.number,
    onAdd: PropTypes.func,
};
