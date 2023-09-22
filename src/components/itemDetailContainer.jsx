import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../src/Back"
import ItemDetail from "./itemDetail/itemDetail";

const ItemDetailContainer = () => {
    const [items, setItem] = useState(null);
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

    return <ItemDetail items={items} isLoading={isLoading} />;
};

export default ItemDetailContainer;
