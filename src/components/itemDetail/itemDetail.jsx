import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import PropTypes from "prop-types";
import ColorSelector from "../ColorSelect/ColorSelect";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./itemDetail.css";

const ItemDetail = ({ product, isLoading }) => {
    const [item, setItem] = useState(null);
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        if (product) {
            const db = getFirestore();
            const itemRef = doc(db, 'items', product.id);

            getDoc(itemRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        setItem({
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
    }, [product]);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.images,
            description: product.description,
        };

        addItem(item, quantity);
    };

    if (!product) {
        return <p>Producto no encontrado ...</p>
    };

    if (isLoading) {
        return <h2>Cargando...</h2>;
    }

    return (
        <div>
            <div key={product.id} className="text-white p-5">
                <img src={`/img/${item.images}`} alt={item.name} className="imageItem" />
                <div className="card-body d-flex flex-column justify-content-around text-center align-items-center">
                    <h1 className="card-title">{item.name}</h1>
                    <p className="card-text"> {item.description}</p>
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
    product: PropTypes.object, // Asegúrate de definir este prop apropiadamente
    isLoading: PropTypes.bool,
};

export default ItemDetail;
