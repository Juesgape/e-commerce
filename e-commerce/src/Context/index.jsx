import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    // Shopping Cart count
    const [count, setCount] = useState(0)

    // Product Detail° Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)
    
    //Showing products info
    const [productInfo, setProductInfo] = useState({})

    //Adding products to cart ° Shopping Cart
    const [orderList, setOrderList] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            isProductDetailOpen,
            productInfo,
            setProductInfo,
            orderList,
            setOrderList
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {
    ShoppingCartProvider,
    ShoppingCartContext
}