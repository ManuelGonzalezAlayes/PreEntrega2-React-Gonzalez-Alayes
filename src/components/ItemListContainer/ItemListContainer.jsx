import React, { useState, useEffect } from 'react';
import productosData from '../../assets/productos.json';
import CardItem from '../CardItem/CardItem';

const ItemListContainer = () => {
const [productos, setProductos] = useState([]);

useEffect(() => {
setProductos(productosData);
}, []);

return (
<div className="justify-content-between">
    <h1 className='mb-4 mt-3'>Nuestros productos</h1>
        <ul className="d-flex flex-wrap justify-content-between">
    {productos.map((producto) => (
        <CardItem
        key={producto.id}
        id={producto.id}
        imagenUrl={producto.imagenUrl}
        nombre={producto.nombre}
        precio={producto.precio}
        />
    ))}
    </ul>
</div>
);
};

export default ItemListContainer;
