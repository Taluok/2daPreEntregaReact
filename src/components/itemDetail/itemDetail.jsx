import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import PropTypes from "prop-types";
import ColorSelector from "../ColorSelect/ColorSelect";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./itemDetail.css";

const ItemDetail = ({ item, isLoading }) => {
    const [itemData, setItemData] = useState(null);
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        if (item) {
            const db = getFirestore();
            const itemRef = doc(db, 'items', item.id);

            getDoc(itemRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        setItemData({
                            id: snapshot.id,
                            ...snapshot.data(),
                        });
                    } else {
                        console.log('El artículo no existe');
                    }
                })
                .catch((error) => {
                    console.error('Error al obtener el artículo:', error);
                });
        }
    }, [item]);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const itemToAdd = {
            id: item.id,
            name: item.name,
            price: item.price,
            img: item.images,
            description: item.description,
        };

        addItem(itemToAdd, quantity);
    };

    if (!itemData) {
        return <p>Producto no encontrado ...</p>
    };

    if (isLoading) {
        return <h2>Cargando...</h2>;
    }

    return (
        <div>
            <div key={item.id} className="text-white p-5">
                <img src={`/img/${itemData.images}`} alt={itemData.name} className="imageItem" />
                <div className="card-body d-flex flex-column justify-content-around text-center align-items-center">
                    <h1 className="card-title">{itemData.name}</h1>
                    <p className="card-text"> {itemData.description}</p>
                    <ColorSelector />
                    <p className="card-text text-danger fw-bold fs-1">${itemData.price}</p>
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
