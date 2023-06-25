import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './customScrollBar.css'

const ProductDetail = () => {

    const { isProductDetailOpen, 
            openProductDetail, 
            productInfo,
            orderList,
            setOrderList,
            setCount,
            count
        } = useContext(ShoppingCartContext)

    const addProductsToCart = (cardInfo) => {
        const newList = [...orderList, cardInfo]
        setOrderList(newList)
    }

    return(
        <aside 
        className={`${isProductDetailOpen ? 'flex': 'hidden'} flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 border border-black rounded-lg bg-white max-w-[370px] max-h-[98vh] w-[375px] p-4`}
        
        >
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Detail</h2>
                <div className="cursor-pointer">
                    <XMarkIcon 
                    className="h-6 w-6 "
                    onClick={() => openProductDetail()}
                    />
                </div>
            </div>

            <div className='p-4 pt-8 overflow-y-scroll custom-scrollbar'>
                <h3 className='text-center text-gray-500'>{productInfo.title}</h3>
                <figure className='flex justify-center pt-8 pb-8'>
                    <img className='w-[150px]' src={productInfo.image} alt="Product-image" />
                </figure>
                <p className='text-justify'>{productInfo.description}</p>
                <div className='w-full flex justify-between items-center pt-8'>
                    <button 
                    className='bg-blue-400 p-3 rounded-lg text-white hover:text-black'
                    onClick={() => {
                        addProductsToCart(productInfo)
                        setCount(count + 1)
                    }}
                    >Add product
                    </button>
                    
                    <p className='font-bold text-[1.3rem]'>${productInfo.price}</p>
                </div>
            </div>

        </aside>
    )
}

export {
    ProductDetail
}