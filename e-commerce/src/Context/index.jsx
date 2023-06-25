import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({children}) => {
    // Shopping Cart count
    const [count, setCount] = useState(0)

    //Opening shopping card List °
    const [isCartOpen, setIsCartOpen] = useState(false)
    const openCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    // Product Detail° Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)
    
    //Showing products info
    const [productInfo, setProductInfo] = useState({})

    //Adding products to cart ° Shopping Cart
    const [orderList, setOrderList] = useState([])

    // Shopping Cart Order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            isProductDetailOpen,
            productInfo,
            setProductInfo,
            orderList,
            setOrderList,
            isCartOpen,
            openCart,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {
    ShoppingCartProvider,
    ShoppingCartContext
}