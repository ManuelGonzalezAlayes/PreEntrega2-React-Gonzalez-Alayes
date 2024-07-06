import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const CartWidget = () => {
    const { orders } = useContext(CartContext);
    return (<button type="button" className="btn btn-primary position-relative">
    <div className='gap-3'>
        <i className="bi bi-cart"></i>
        <span className="position-absolute top-50 start-100 translate-middle badge rounded-pill bg-danger">
            {orders.length}
            <span className="visually-hidden">unread messages</span>
        </span>
    </div>
    </button>
    )
}

export default CartWidget
