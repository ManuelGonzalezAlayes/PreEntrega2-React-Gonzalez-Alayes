import React, { useState, useEffect } from 'react';
import productosData from '../../assets/productos.json';
import CardItem from '../CardItem/CardItem';

const ItemListContainer = () => {
const [productos, setProductos] = useState([]);

useEffect(() => {
setProductos(productosData);
}, []);

return (
<div>
    <h1>Nuestros productos</h1>
    <ul>
    {productos.map((producto) => (
        <CardItem
        id={producto.id}
        nombre={producto.nombre}
        precio={producto.precio}
        />
    ))}
    </ul>
</div>
);
};

export default ItemListContainer;
