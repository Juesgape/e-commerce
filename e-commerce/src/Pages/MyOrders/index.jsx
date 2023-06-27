import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
    const { order,
        } = useContext(ShoppingCartContext)

    return(
        <div>
            <div className="flex justify-center w-80 items-center relative mb-6">
                <h1 className='font-bold text-2xl'>My orders</h1>
            </div>
            {
                order.length > 0 
                ?
                    order.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard 
                            orderDate = {order.date}
                            totalPrice={order.total} 
                            totalProducts={order.quantity} />
                        </Link>
                    ))
                :
                <div className="w-full flex justify-center items-center h-[200px]">
                    <p className="text-lg mb-4 ">You haven't ordered anything... Yet :)</p>
                </div>
            }
        </div>
    )
}

export default MyOrders