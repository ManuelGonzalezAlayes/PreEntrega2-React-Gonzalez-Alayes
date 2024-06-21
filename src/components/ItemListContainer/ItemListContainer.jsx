import React, { useState, useEffect } from 'react';
import productosData from '../../assets/productos.json';
import CardItem from '../CardItem/CardItem';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
const [productos, setProductos] = useState([]);

useEffect(() => {
setProductos(productosData);
}, []);

let params = useParams();
console.log (params)

const filterCategory =(producto) => {
    
    return producto.categoria===params.id
}


return (
<div className="justify-content-between">
    <h1 className='mb-4 mt-3'>Nuestros productos</h1>
        <ul className="d-flex flex-wrap justify-content-between">
    {productos.filter(filterCategory).map((producto) => (
        <CardItem
        key={producto.id}
        id={producto.id}
        imagenUrl={producto.imagenUrl}
        nombre={producto.nombre}
        precio={producto.precio}
        categoria={producto.categoria}
        />
    ))}
    </ul>
</div>
);
};

export default ItemListContainer;
