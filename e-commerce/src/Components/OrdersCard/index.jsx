import { CalendarDaysIcon, ShoppingCartIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = (props) => {
    const {totalPrice, totalProducts, orderDate} = props

    return (
        <div className="flex justify-between items-center mb-3 border border-black p-4 rounded-lg">
            
            <div className="flex justify-between items-center w-full">
                <div>
                    <div className="flex">
                        <div className="pr-2">
                            <CalendarDaysIcon className="w-6 h-6"/>
                        </div>
                        <p>{orderDate}</p>
                    </div>
                    <div className="flex">
                        <div className="pr-2">
                            <ShoppingCartIcon className="w-6 h-6"/>
                        </div>
                        <p><span>{totalProducts}</span> articles</p>
                    </div>
                </div>

                <div>
                    <div className="flex">
                        <p>${totalPrice}</p>
                        <ChevronRightIcon className="w-6 h-6" />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export {
    OrdersCard
}