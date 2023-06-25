import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";


function MyOrder() {
    const {order} = useContext(ShoppingCartContext)

    return(

        <div className="px-4">
            <h3>My order</h3>

            

            { order.length > 0 ?
            
                order[order.length -1].products.map(productInfo => 
                    <div key={productInfo.id} className="p-2 max-w-[350px]">
                        <div className='relative h-[200px] px-4 border border-black rounded-lg'>
                            <figure className='h-[80%] flex justify-between items-center pt-2'>
                                <img className='w-[100px] m-4' src={productInfo.image} alt="Product-image" />
                                <h3 className='text-center text-gray-500'>{productInfo.title}</h3>
                            </figure>
                            <div className="w-full flex justify-end">
                            <span className="text-lg">x1</span>
                            </div>

                        </div>
                    </div>
                )
            :

            <p>There's nothing in your order</p>
            }
        </div>
        
    )
}

export default MyOrder