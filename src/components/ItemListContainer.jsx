import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../src/Back";
import ItemList from "./itemList/itemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const  { categoryId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getProducts(categoryId).then((response) => {
            setItems(response);
            setIsLoading(false);
        })
    }, [categoryId]);

    return <ItemList items={items} isLoading={isLoading} />;
};

export default ItemListContainer;



