import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './customScrollBar.css'

const ProductDetail = () => {

    const {isProductDetailOpen, openProductDetail, productInfo} = useContext(ShoppingCartContext)
    console.log(productInfo, 'ProductInfo')

    return(
        <aside 
        className={`${isProductDetailOpen ? 'flex': 'hidden'} flex-col fixed right-0 z-20 top-[0rem] border border-black rounded-tl-lg bg-white w-[375px] h-[100vh] p-4`}
        
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

            <div className='p-4 pt-12 overflow-y-scroll custom-scrollbar'>
                <h3 className='text-center text-gray-500'>{productInfo.title}</h3>
                <figure className='flex justify-center pt-8 pb-8'>
                    <img className='w-[200px]' src={productInfo.image} alt="Product-image" />
                </figure>
                <p className='text-justify'>{productInfo.description}</p>
                <p className='w-full flex justify-end font-bold text-[1.3rem] pt-4'>${productInfo.price}</p>
            </div>

        </aside>
    )
}

export {
    ProductDetail
}