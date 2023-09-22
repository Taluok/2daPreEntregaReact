import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../Back";
import ItemDetail from "./itemDetail/itemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
            .then((response) => {
                setItem(response);
            })
            .catch(() => {
                setItem(null);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    return item ? <ItemDetail item={item} isLoading={isLoading} /> : null;
};

export default ItemDetailContainer;
