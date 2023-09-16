import { useState } from 'react';
import { useContext } from 'react';
import PropTypes from "prop-types";
import ColorSelector from "../ColorSelect/ColorSelect";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./itemDetail.css";

const ItemDetail = ({ item, isLoading }) => {
    
    const { addItem } = useContext(CartContext);
    
    const [quantityAdded, setQuantityAdded] = useState(0);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        addItem(item, quantity);
    };

    if (isLoading) {
        return <h2>Loading...</h2>;
    };
    
    return (
        <div className="d-flex container col-8 pt-5">
            <img src={item.images} alt={item.name} className="imageItem" />
            <div className="card-body d-flex flex-column justify-content-around text-center align-items-center">
                <h1 className="card-title">{item.name}</h1>
                <p className="card-text"> {item.description}</p>
                <ColorSelector />
                <p className="card-text text-danger fw-bold fs-1">${item.price}</p>
                {quantityAdded > 0 ? (
                    <>
                        <Link to="/cart" className="btn btn-dark ">
                            Terminar Compra
                        </Link>
                        <Link to="/" className="btn btn-dark">
                            Seguir comprando
                        </Link>
                    </>
                ) : (
                    <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
                )}
            </div>
            
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        item: PropTypes.object,
    }),
    isLoading: PropTypes.bool,
};

export default ItemDetail;
