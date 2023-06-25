import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import NavBarItem from "./NavBarItem/navBarItem"


const Navbar = () => {
    const { count, 
            isProductDetailOpen,
            openCart
    } = useContext(ShoppingCartContext)

    return(
        <nav className={`${isProductDetailOpen ? 'pointer-events-none blur-sm' : 'blur-none'} fixed top-0 right-0 z-10 flex justify-between bg-pink-300 items-center w-full py-4`}>
            <ul className="flex items-center">

                <li className="px-5 font-semibold text-lg">
                    <NavBarItem to='/'>
                        Shopi
                    </NavBarItem>
                </li>
                <li className="px-5">
                    <NavBarItem to='/'>
                        All
                    </NavBarItem>
                </li>
                <li className="px-5">
                    <NavBarItem to='/clothes'>
                        Clothes
                    </NavBarItem>
                </li>
                <li className="px-5">
                    <NavBarItem to='/electronics'>
                        Electronics
                    </NavBarItem>
                </li>
                <li className="px-5">
                    <NavBarItem to='/furnitures'>
                        Furnitures
                    </NavBarItem>
                </li>
                <li className="px-5">
                    <NavBarItem to='/toys'>
                        Toys
                    </NavBarItem>
                </li>
                <li className="px-5">
                    <NavBarItem to='/others'>
                        Others
                    </NavBarItem>
                </li>
            </ul>

            <ul className="flex items-center">
                <li className="px-5 text-gray-500">
                    Juesgape
                </li>
                <li className="px-5">
                    <NavBarItem to='/my-orders'>
                        My Orders
                    </NavBarItem>
                </li>
                <li className="px-5">
                    <NavBarItem to='/my-account'>
                        My Account
                    </NavBarItem>
                </li>
                <li className="px-5">
                    <NavBarItem to='/sign-in'>
                        Sign In
                    </NavBarItem>
                </li>
                <li className="px-5 flex items-center justify-evenly">
                    <ShoppingBagIcon onClick={() => {
                        openCart()
                    }} 
                    className="w-6 h-6 cursor-pointer text-blue-400"/>{count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar