import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
    const [shippingInfo, setShippingInfo] = useState({
        fullName: '',
        address: '',
        city: '',
        postalCode: '',
    });

    const [orderId, setOrderId] = useState(null);

    const createOrder = () => {
        // Verificar si los campos de información de envío están completos
        if (!shippingInfo.fullName || !shippingInfo.address || !shippingInfo.city || !shippingInfo.postalCode) {
            alert("Por favor, complete todos los campos de información de envío.");
            return;
        }

        // Construir el objeto de orden
        const order = {
            buyer: {
                name: shippingInfo.fullName,
                address: shippingInfo.address,
                city: shippingInfo.city,
                postalCode: shippingInfo.postalCode,
            },
            items: [
                // ...
            ],
            total: 4450,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
            .then((docRef) => {
                setOrderId(docRef.id);
                alert("Orden creada con ID: " + docRef.id);
            })
            .catch((error) => {
                console.error("Error al crear la orden:", error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    return (
        <div>
            <h2 className= "tituloCheckout">Ingresa tus datos para poder completar la compra</h2>
            <form className="formCheckout">
                {/* Campos de entrada para la información de envío */}
                <div>
                    <label>Nombre completo:</label>
                    <input
                        type="text"
                        name="fullName"
                        value={shippingInfo.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Dirección:</label>
                    <input
                        type="text"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Ciudad:</label>
                    <input
                        type="text"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Código postal:</label>
                    <input
                        type="text"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="button" onClick={createOrder}>
                    Realizar Pedido
                </button>

                {!!orderId && <p>Orden creada con ID: {orderId}</p>}
            </form>
        </div>
    );
};

export default Checkout;



