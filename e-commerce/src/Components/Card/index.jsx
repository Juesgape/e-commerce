import { React, useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

const Card = ({id, title, price, category, description, image}) => {

    //Getting context
    const { count, 
            setCount, 
            openProductDetail, 
            setProductInfo,
            isProductDetailOpen,
            orderList,
            setOrderList
        } = useContext(ShoppingCartContext)

    //Show products based on the card info
    const showProduct = (cardInfo) => {
        setProductInfo(cardInfo)
    }
    //Open the aside element
    const openProductInfo = () => {
        openProductDetail()
    }
    //Setting orderList
    const addProductsToCart = (cardInfo) => {
        const newList = [...orderList, cardInfo]
        setOrderList(newList)
        
        setTimeout(() => {
            console.log(newList)
        }, 1000)
    }

    return(
            <div className="pb-8 max-w-xs">
                <div 
                className="h-100 hover:shadow-2xl hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-112 duration-200 w-auto flex justify-center rounded-lg"
                >
                    <figure className='relative w-60 mb-2 cursor-pointer'>
                        <span className="absolute bottom-0 left-0 bg-gray-400 rounded-lg text-black m-2 px-3 py-1 cursor-default">{category}</span>
                        <img 
                        //Showing card information
                        onClick={() => {
                            if(isProductDetailOpen) {
                                showProduct({'id': id, 'title': title, 'price': price, 'category': category, 'description': description, 'image': image})
                            } else {
                                openProductInfo()
                                showProduct({'id': id, 'title': title, 'price': price, 'category': category, 'description': description, 'image': image})
                            }
                        }} 
                        className="w-full h-60 object-fit rounded-lg" src={image} alt={title} 
                        />
                        <button 
                        className="absolute top-0 right-0 flex justify-center bg-gray-400 w-7 h-7 rounded-full m-2 cursor-pointer"
                        onClick={() => {
                            setCount(count + 1)
                            addProductsToCart({'id': id, 'title': title, 'price': price, 'category': category, 'description': description, 'image': image})
                        }}
                        >
                            +
                        </button>
                    </figure>
                </div>

                <div className="pt-8">
                    <div className="text-center">
                        <p>{title}</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-bold">$<span>{price}</span></p>
                    </div>
                </div>
            </div>
    )
}

export default Card