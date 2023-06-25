import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from "../../Context"
import { XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/solid"
import { totalPrice } from "../../Utils"
import './customScrollBarOrders.css'

const ProductsOrder = () => {

    const { orderList,
            setOrderList,
            isCartOpen,
            openCart,
            count,
            setCount,
            order,
            setOrder
    } = useContext(ShoppingCartContext)

    const removeProductFromCart = (id) => {
        //remove product based on id
        const newList = orderList.filter(elem => elem.id !== id)
        setOrderList(newList)
    }

    const handleCheckOut = () => {
        const date = new Date()
        const orderToAdd = {
            'date': date.toLocaleDateString(),
            'products': orderList,
            'quantity': orderList.length,
            'total': totalPrice(orderList)
        }
        setOrder([...order, orderToAdd])
        setOrderList([])
        //resetting quantity in cart
        setCount(count - orderList.length)
    }

    return(
        <aside 
        className={`${isCartOpen ? 'flex': 'hidden'} flex-col fixed right-0 z-20 top-[0] border border-black rounded-tl-lg bg-white max-w-[375px] h-[100vh] p-4 overflow-y-auto overflow-x-hidden custom-scrollbar`}
        >

            <div className="flex justify-between items-center pb-4">
                <h2 className="font-medium text-xl">Orders</h2>
                <div className="cursor-pointer">
                    <XMarkIcon 
                    className="h-6 w-6 "
                    onClick={() => openCart()}
                    />
                </div>
            </div>

            {/* Displaying interface if orderList contains products */}
            {orderList.length > 0 ?
            
            orderList.map(productInfo =>

            <div key={productInfo.id} className='relative w-[375px] p-4 pt-8 pr-8 h-auto border-y-2'>
                <h3 className='text-center text-gray-500'>{productInfo.title}</h3>
                
                <figure className='flex justify-center pt-8 pb-8'>
                    <img className='w-[100px]' src={productInfo.image} alt="Product-image" />
                </figure>
                
                <div className='absolute w-[70%] flex justify-between bottom-2 right-[3rem] items-center'>
                    <p className="text-xl">x<span>1</span></p>

                    <button 
                    className='bg-red-400 p-3 rounded-lg hover:text-white'
                    onClick={() => {
                        removeProductFromCart(productInfo.id)
                        setCount(count - 1)
                    }}
                    >Remove
                </button>

                </div>

            </div>

            )

            :
            <div className="w-[375px] h-[100%] flex justify-center items-center text-center">
                <div>
                    <ShoppingCartIcon className="w-[250px] text-blue-400"/>
                    <p>Your cart is empty</p>
                </div>
                
            </div>

            }

            
            <div className="p-6 flex justify-between items-center">
                <span className="font-light text-2xl">Total:</span>
                <span className="font-medium text-2xl">${totalPrice(orderList)}</span>
            </div>

            <Link to='/my-orders/last'>
                <button
                className="w-full bg-blue-400 text-white p-3 hover:text-black rounded-lg"
                onClick={() => {
                    handleCheckOut()
                }}
                >Checkout
                </button>
            </Link>

        </aside>
    )
}

export {
    ProductsOrder
}