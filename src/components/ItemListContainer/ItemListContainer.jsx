import { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { id: categoryId } = useParams();

    async function getProducts() {
        if(!categoryId){
            const productsCol = collection(db, 'productos');
            const productsSnapshot = await getDocs(productsCol);
            const productsList = productsSnapshot.docs.map((doc) => ( { ...doc.data(), id: doc.id}))
            return productsList;
        }else{
            const productsRefFilter = query(
                collection(db, "productos"),
                where("categoria", "==", categoryId)
            )

            const productsSnapshot = await getDocs(productsRefFilter);
            const products = [];
            if(!productsSnapshot.empty){
                productsSnapshot.forEach( p => {
                    products.push({ id: p.id, ...p.data() });
                })
            }
            return products;
        }
    }

    useEffect(() => {
        (async () => {
            const productos = await getProducts();
            setProductos(productos);
        })()
    })

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
                    categoria={producto.categoria}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemListContainer;