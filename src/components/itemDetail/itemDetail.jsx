import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ColorSelector from '../ColorSelect/ColorSelect'; 
import ItemCount from '../ItemCount/ItemCount'; 
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './itemDetail.css';

const ItemDetail = ({ item, isLoading }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext); // Utiliza tu contexto de carrito aquí

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        // Agrega el artículo al carrito utilizando tu contexto de carrito
        const itemToAdd = {
            id: item.id,
            name: item.name,
            price: item.price,
            img: item.images,
            description: item.description,
        };

        addItem(itemToAdd, quantity);
        
    };

    if (isLoading) {
        return (
            <div className="loader">
                <h2>Cargando...</h2>
            </div>
        );
    }

    if (!item) {
        return (
            <p>Producto no encontrado ...</p>
        );
    }

    return (
        <div>
            <div key={item.id} className="text-white p-5 item-container">
                <div className="image-container">
                    <img src={`/img/${item.images}`} alt={item.name} className="imageItem" />
                </div>
                <div className="card-body cardBody d-flex flex-column justify-content-around text-center align-items-center">
                    <h1 className="card-title">{item.name}</h1>
                    <p className="card-text cardText"> {item.description}</p>

                    <ColorSelector />
                    <p className="card-text cardtext1 text-danger fw-bold fs-1">${item.price}</p>
                    {quantityAdded > 0 ? (
                        <>
                            <div className="d-flex flex-column">
                                <Link to="/cart" className="btn btn-dark mb-3">
                                    Terminar Compra
                                </Link>
                                <Link to="/" className="btn btn-dark">
                                    Seguir comprando
                                </Link>
                            </div>

                        </>
                    ) : (
                        <ItemCount initial={1} stock={10} onAdd={handleOnAdd} />
                    )}
                </div>
            </div>
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default ItemDetail;



