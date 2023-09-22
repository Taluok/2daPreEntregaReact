import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ColorSelector from '../ColorSelect/ColorSelect'; // Asegúrate de importar esto si es necesario
import ItemCount from '../ItemCount/ItemCount'; // Asegúrate de importar esto si es necesario
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'; // Importa tu contexto de carrito si lo tienes
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
            <div key={item.id} className="text-white p-5">
                <img src={`/img/${item.images}`} alt={item.name} className="imageItem" />
                <div className="card-body d-flex flex-column justify-content-around text-center align-items-center">
                    <h1 className="card-title">{item.name}</h1>
                    <p className="card-text"> {item.description}</p>
                    {/* Asegúrate de importar y utilizar ColorSelector si es necesario */}
                    <ColorSelector />
                    <p className="card-text text-danger fw-bold fs-1">${item.price}</p>
                    {quantityAdded > 0 ? (
                        <>
                            <Link to="/cart" className="btn btn-dark">
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
        </div>
    );
};

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default ItemDetail;



