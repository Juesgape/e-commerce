import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import { ProductDetail } from "../../Components/ProductDetail"

const Home = () => {
    const [items, setItems] = useState(null)

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

    return(
        <div>
            <div className="flex pt-[8rem] flex-wrap gap-8 w-full max-w-screen-lg justify-center">
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
            <ProductDetail/>
        </div>
    )
}

export default Home