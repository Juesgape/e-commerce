import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const Layout = ({children}) => {
    const context = useContext(ShoppingCartContext)

    return(
        <div className='flex flex-col items-center mt-[8rem]'>
            {children}
        </div>
    )
}

export default Layout