import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"; 


const Navbar = () => {

    const [searchText, setSearchText] = useState(""); // Estado para almacenar el texto de búsqueda

    const handleSearchChange = (e) => {
        setSearchText(e.target.value); // Actualiza el estado con el texto de búsqueda
    };

    // Lógica para realizar la búsqueda cuando se presiona Enter, por ejemplo
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la búsqueda con el valor en `searchText`
        console.log("Buscar producto:", searchText);
    }; 

    const notificationCount = 5;
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbarColor">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    SneakerHub
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="navbarLink nav-link" exact="true" to="/">
                        Home
                        </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/OtherSneakers">
                                Nuevos Sneakers
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/Pantalones">
                                Otros Productos Jordan
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
                {/* Campo de búsqueda */}
                <form className="d-flex" onSubmit={handleSearchSubmit}>
                    <input
                        className="form-control me-2 mi-input"
                        type="search"
                        placeholder="Buscar productos"
                        aria-label="Search"
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                    <button className="btn " type="submit">
                        Buscar
                    </button>
                </form>
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;



