import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
    const { order,
        } = useContext(ShoppingCartContext)

    return(
        <div>
            <div className="flex justify-center w-80 items-center relative pb-2">
                <h1>My orders</h1>
            </div>
            {
                order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard 
                        orderDate = {order.date}
                        totalPrice={order.total} 
                        totalProducts={order.quantity} />
                    </Link>
                ))
            }
        </div>
    )
}

export default MyOrders