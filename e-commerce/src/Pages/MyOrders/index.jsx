import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ProductsOrder } from "../../Components/ProductsOrder";

function MyOrders() {
    const { order,
        } = useContext(ShoppingCartContext)

    return(
        <div>
            <div className="flex justify-center w-80 items-center relative mb-6">
                <Link to='/' className="absolute left-0">
                    <ChevronLeftIcon className="h-8 w-8 text-black cursor-pointer"/>
                </Link>
                <h1 className="font-bold text-2xl">My orders</h1>
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

            <ProductsOrder />
        </div>
    )
}

export default MyOrders