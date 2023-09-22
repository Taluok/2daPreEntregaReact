import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./itemList.css";

const ItemList = ({ items, isLoading }) => {
    return (
        <div className="item-list">
            {isLoading ? (
                <h2 className="loading-text">Cargando productos...</h2>
            ) : (
                <div className="row">
                    {items.map((item) => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img
                                    src={`/img/${item.images}`}
                                    alt={item.name}
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <h3 className="card-title">{item.name}</h3>
                                    <p className="card-text">${item.price}</p>
                                    <p className="card-text">{item.category}</p>
                                    <Link
                                        to={`/item/${item.id}`}
                                        className="btn btn-primary btn-details"
                                    >
                                        Ver Detalles
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
};

export default ItemList;




