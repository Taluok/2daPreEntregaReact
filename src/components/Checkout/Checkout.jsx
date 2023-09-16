
import React, { useState } from 'react';
import"./Checkout.css";


const Checkout = () => {
    
    const [shippingInfo, setShippingInfo] = useState({
        fullName: '',
        address: '',
        city: '',
        postalCode: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo({ ...shippingInfo, [name]: value });
    };

    const handlePlaceOrder = () => {
        // Aquí se realizaría la lógica para procesar el pedido, como enviar la información al servidor y realizar el pago.

        // Por simplicidad, este ejemplo solo redirige de vuelta a la página principal después de realizar el pedido.
        history.push('/');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form>
                <div>
                    <label htmlFor="fullName">Nombre Completo:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={shippingInfo.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="address">Dirección:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={shippingInfo.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="city">Ciudad:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={shippingInfo.city}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="postalCode">Código Postal:</label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={shippingInfo.postalCode}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" onClick={handlePlaceOrder}>
                    Realizar Pedido
                </button>
            </form>
        </div>
    );
};

export default Checkout;
