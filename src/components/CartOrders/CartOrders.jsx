import { useContext } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../../Context/CartContext"

export default function CartOrders(){
    const { orders, confirmOrder, removeOrder } = useContext(CartContext);

    const ConfirmOrderButton = () => {
        return (
            <div style={{display:'flex', justifyContent: 'flex-end'}}>
                <Button onClick={confirmOrder}>Confirmar</Button>
            </div>
        )
    }

    const CancelOrderButton = (props) => {
        return (
            <div style={{display:'flex', justifyContent: 'flex-end'}}>
                <Button variant="danger" onClick={() => removeOrder(props.orderId)}>Cancelar</Button>
            </div>
        )
    }

    return(
        <div style={{margin:'auto', width: '50%', marginTop: '15px'}}>
            {orders.length > 0 ? <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map( (order, index) => {
                        return(
                            <tr key={order.index}>
                                <td>{order.categoria}</td>
                                <td>{order.nombre}</td>
                                <td>${order.precio}</td>
                                <td><CancelOrderButton orderId={index}/></td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td>Total</td>
                        <td>${orders.reduce( (acc, act) => acc + act.precio, 0)}</td>
                    </tr>
                </tbody>
            </Table> : null }
            {orders.length > 0 ? <ConfirmOrderButton/> : <h1>El carrito está vacío</h1>}
        </div>
    )
}
