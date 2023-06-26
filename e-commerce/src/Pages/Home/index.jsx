import { useContext } from "react"
import { Card } from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"
import { ProductsOrder } from "../../Components/ProductsOrder"
import { ShoppingCartContext } from "../../Context"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const Home = () => {

    const { isProductDetailOpen,
            items, 
            searchByTitle,
            setSearchByTitle,
            filteredItems
        } = useContext(ShoppingCartContext)

    const renderView = () => {

        if(searchByTitle?.length > 0 && filteredItems.length === 0){
            return (
                <div className="w-full flex justify-center mt-10">
                    <p className="font-bold text-xl">Sorry, we don't have that product :(</p>
                </div>
            )
        } else if(searchByTitle?.length > 0) {
            return (
                <div className={`${isProductDetailOpen ? 'blur-sm pointer-events-none overflow-hidden' : 'blur-none pointer-events-auto' } flex flex-wrap gap-8 w-full max-w-screen-lg justify-center`}>
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
                <div className={`${isProductDetailOpen ? 'blur-sm pointer-events-none overflow-hidden' : 'blur-none pointer-events-auto' } flex flex-wrap gap-8 w-full max-w-screen-lg justify-center`}>
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
                        placeholder="what are you looking for" 
                        className="rounded-lg border border-black w-80 p-2 focus:border-blue-400 outline-none pr-10"
                        onChange={(event) => setSearchByTitle(event.target.value)}
                    />
                    <MagnifyingGlassIcon className="w-6 h-6 absolute right-2 bottom-2" />
                </div>
            </div>

            <div className="flex justify-center w-80 items-center relative pb-2">
                <h1>My orders</h1>
            </div>

            {renderView()}

            <ProductDetail/>
            <ProductsOrder/>
        </div>
    )
}

export default Home