import React, { useState } from 'react';

const ColorSelector = () => {
    const [color, setColor] = useState('White');

    const handChange = (event) => {
        setColor(event.target.value);
    };
    

    return (
        <div>
            <select onChange={(e) => setColor(e.target.value)} value={color}>
                <option value="White">Blanco</option>
                <option value="Blue">Azul</option>
                <option value="Black">Negro</option>
            </select>

            <div
                style={{
                    width: '70px',
                    height: '50px',
                    borderRadius: '8px',
                    border: '1px solid black',
                    backgroundColor: color,
                }}
            />
        </div>
    );
};

export default ColorSelector;

