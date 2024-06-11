import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItem(props) {
    
    return (
        <>
        {/* {props.id} */}
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imagenUrl} alt={props.nombre} />
        <Card.Body>
            <Card.Title>{props.nombre}</Card.Title>
            <Card.Text>{props.precio}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
        </>
    );
}

export default CardItem;