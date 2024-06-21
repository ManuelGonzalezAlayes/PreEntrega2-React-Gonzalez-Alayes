import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardItem(props) {
    
    return (
        <>
        {/* {props.id} */}
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imagenUrl} alt={props.nombre} />
        <Card.Body>
            <Card.Title>{props.nombre}</Card.Title>
            <Card.Text>{props.precio}</Card.Text>
            <Link to={`/item/${props.id}`}><Button variant="primary">Ver producto</Button></Link>
        </Card.Body>
        </Card>
        </>
    );
}

export default CardItem;