import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

function CardItem(props) {
    const { addOrder } = useContext(CartContext);
    const handleAgregarAlCarrito = () => {
        const { categoria, imagenUrl, nombre, precio, id } = props;
        const product = { categoria, imagenUrl, nombre, precio, id };
        addOrder(product);
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.imagenUrl} alt={props.nombre} />
            <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>{props.precio}</Card.Text>
                <Link to={`/item/${props.id}`}>
                    <Button variant="primary">Ver producto</Button>
                </Link>
                <Button onClick={handleAgregarAlCarrito} style={{marginTop: '5px'}} variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default CardItem;
