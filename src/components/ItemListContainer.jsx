import customFetch from "../utils/customFetch";
import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
const {products} = require("../utils/products")

const ItemListContainer = ({greeting}) => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        if (idCategory === undefined) {
        customFetch(2000, products)
        .then(result => setDatos(result))
        .catch(error => console.log(error))
    } else {
        customFetch(2000, products.filter(item => item.categoryId == idCategory))
        .then(result => setDatos(result))
        .catch(error => console.log(error))
    }
    }, [idCategory])

    const onAdd = (cantidad) => {
        alert("Has seleccionado " + cantidad + " items.")
    }

    return (
        <>
        {greeting}
        <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;