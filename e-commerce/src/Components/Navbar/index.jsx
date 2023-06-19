import { NavLink } from "react-router-dom"
import NavBarItem from "./NavBarItem/navBarItem"

const Navbar = () => {

    return(
        <nav className='flex justify-between bg-pink-300 items-center z-10 w-full py-10'>
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
                <li className="px-5">
                    🚮 0
                </li>
            </ul>
        </nav>
    )
}

export default Navbar