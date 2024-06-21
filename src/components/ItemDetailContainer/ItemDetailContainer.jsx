import productosData from '../../assets/productos.json';
import Card from 'react-bootstrap/Card';
import CardItem from '../CardItem/CardItem';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [productos, setProductos] = useState([]);

useEffect(() => {
setProductos(productosData);
}, []);

let params = useParams();
console.log (params)

const filterId =(producto) => {
    
    return producto.id==params.id
}
return (
    <div>
        {productos.filter(filterId).map( (producto) => {
            return (
            <CardItem
                key={producto.id}
                id={producto.id}
                imagenUrl={producto.imagenUrl}
                nombre={producto.nombre}
                precio={producto.precio}
                categoria={producto.categoria}
                />)
        } )}
    </div>
)
}
export default ItemDetailContainer;
