import { useState, useEffect, useContext } from "react"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ProductsOrder } from "../../Components/ProductsOrder"
import { ShoppingCartContext } from "../../Context"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const ProductsByCategory = ({pathName}) => {

    const context = useContext(ShoppingCartContext)

    // Get Products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)
    // Search for products by title
    const [searchByTitle, setSearchByTitle] = useState(null)

    //setting items in base by category
    useEffect(() => {
        const categoryItems = context.items?.filter((elem) => elem.category === pathName)
        setItems(categoryItems)
    },[pathName])


    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))

    },[items, searchByTitle])

    const renderView = () => {

        if(searchByTitle?.length > 0 && filteredItems?.length === 0){
            return (
                <div className="w-full flex justify-center mt-10">
                    <p className="font-bold text-xl">Sorry, we don't have that product :(</p>
                </div>
            )
        } else if(searchByTitle?.length > 0) {
            return (
                <div className={`${context.isProductDetailOpen || context.isCartOpen ? 'blur-sm pointer-events-none overflow-hidden' : 'blur-none pointer-events-auto' } flex flex-wrap gap-8 w-full max-w-screen-lg justify-center`}>
                    {
                        filteredItems?.map((item) =>
                            <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            category={item.category}
                            description={item.description}
                            image={item.image}
                            />
                        )
                    }
                </div>
            )
        } else {
            return(
                <div className={`${context.isProductDetailOpen || context.isCartOpen ? 'blur-sm pointer-events-none overflow-hidden' : 'blur-none pointer-events-auto' } flex flex-wrap gap-8 w-full max-w-screen-lg justify-center`}>
                    {
                        items?.map((item) =>
                            <Card
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            category={item.category}
                            description={item.description}
                            image={item.image}
                            />
                        )
                    }
                </div>
            )
        }
    }

    return(
        <div>

            <div className="w-full flex justify-center pb-8">
            <div className="w-80 relative">
                    <input 
                        type="text" 
                        placeholder="Search for a product..." 
                        className={`${context.isProductDetailOpen || context.isCartOpen ? 'blur-sm pointer-events-none' : 'blur-none pointer-events-auto'} rounded-lg border border-black w-80 p-2 focus:border-blue-400 outline-none pr-10`}
                        onChange={(event) => setSearchByTitle(event.target.value)}
                    />
                    <MagnifyingGlassIcon className={`${context.isProductDetailOpen || context.isCartOpen ? 'blur-sm ' : 'blur-none pointer-events-auto'} w-6 h-6 absolute right-2 bottom-2`} />
                </div>
            </div>

            <div className={`flex justify-start w-full items-center pb-[2rem]`}>
                <div className="w-full pl-[2rem]">
                    <h1 className={`${context.isProductDetailOpen || context.isCartOpen ? 'blur-sm ' : 'blur-none'} font-bold text-2xl`}>{pathName.toUpperCase()}</h1>
                </div>
            </div>

            {renderView()}

            <ProductDetail/>
            <ProductsOrder/>
        </div>
    )
}

export default ProductsByCategory