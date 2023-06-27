import { createContext, useState, useEffect } from 'react'

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

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    // Search for products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetching = await fetch('https://fakestoreapi.com/products')
                const data = await fetching.json()
                setItems(data)
            } catch(err) {
                console.warn(err)
            }
        }
        fetchData()
        },[])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))

    },[items, searchByTitle])

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
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export {
    ShoppingCartProvider,
    ShoppingCartContext
}