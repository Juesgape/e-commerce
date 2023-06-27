import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { totalPrice } from "../../Utils";

function MyOrder() {
    const {order} = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = order?.length - 1

    return(

        <div className="px-4">

            <div className="flex justify-center w-80 items-center relative mb-6">
                <Link to='/my-orders' className="absolute left-0">
                    <ChevronLeftIcon className="h-8 w-8 text-black cursor-pointer"/>
                </Link>
                <h1 className="font-bold text-2xl">My order</h1>
            </div>

            

            { order.length > 0 
            
            ?
                <div>
                    {order[index]?.products.map(productInfo => 
                    <div key={productInfo.id} className="p-2 max-w-[350px]">
                        <div className='relative h-[200px] px-4 border border-black rounded-lg'>
                            <figure className='h-[80%] flex justify-between items-center pt-2'>
                                <img className='w-[80px] m-4' src={productInfo.image} alt="Product-image" />
                                <h3 className='text-center text-gray-500'>{productInfo.title}</h3>
                            </figure>
                            <div className="w-full flex justify-end">
                                <span className="text-sm font-bold">${productInfo.price}</span>
                            </div>

                        </div>
                    </div>
                )}
                    <div className="w-full flex justify-end pr-4 my-4">
                        <p className="font-bold text-2xl">Total:<span> ${totalPrice(order[index].products)}</span></p>
                    </div>
                </div>
                

                
                
            :

            <p>There's nothing in your order</p>
            }
        </div>
        
    )
}

export default MyOrder