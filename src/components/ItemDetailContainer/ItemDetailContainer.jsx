import CardItem from '../CardItem/CardItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';

function ItemDetailContainer() {
    const [producto, setProducto] = useState({});

    let { id } = useParams();

    async function getProduct() {
        const productRef = doc(db, 'productos', id);
        const productSnapshot = await getDoc(productRef);
        if(productSnapshot.exists()){
            return productSnapshot.data();
        }
        return {};
    }

    useEffect(() => {
        (async () => {
            const producto = await getProduct();
            setProducto(producto);
        })()
    })

    return (
        <div>
            <CardItem
                key={producto.id}
                id={producto.id}
                imagenUrl={producto.imagenUrl}
                nombre={producto.nombre}
                precio={producto.precio}
                categoria={producto.categoria}
            />
        </div>
    )
}
export default ItemDetailContainer;
