import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon, ChevronDownIcon, Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import NavBarItem from "./NavBarItem/navBarItem"
import { DisplayItems } from "./displayOtherItems"


const Navbar = () => {
    const { count, 
            isProductDetailOpen,
            openCart
    } = useContext(ShoppingCartContext)

    const [displayMenu, setDisplayMenu] = useState(false)

    let isMobile = false
    
    if(window.innerWidth < 1100) {
        isMobile = true
    }

    return(
        isMobile === false
        ?
            <nav className={`${isProductDetailOpen ? 'pointer-events-none blur-sm' : 'blur-none'} fixed top-0 right-0 z-10 flex justify-between items-center w-full py-4 bg-white border-b shadow ring ring-blue-500 ring-opacity-50`}>
            <ul className="flex items-center">

                <li className="px-5 font-semibold text-2xl cursor-default">
                        Shopify
                </li>
                <li className="px-5">
                    <NavBarItem to='/'>
                        All
                    </NavBarItem>
                </li>

                <DisplayItems
                    name={'Clothes'}
                    items={["Women's clothing", "Men's clothing"]}
                >

                </DisplayItems>

                <li className="px-5">
                    <NavBarItem to='/electronics'>
                        Electronics
                    </NavBarItem>
                </li>
                <li className="px-5">
                    <NavBarItem to='/jewelery'>
                        Jewelery
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
        :
            <nav className={`${isProductDetailOpen ? 'pointer-events-none blur-sm' : 'blur-none'} fixed top-0 right-0 z-10 flex justify-around items-center w-full py-4 bg-white border-b shadow ring ring-blue-500 ring-opacity-50`}>
                <ul className="flex items-center">

                    <li className="px-5 font-semibold text-2xl cursor-default">
                            Shopify
                    </li>
                    <li className="px-5">
                        <NavBarItem to='/'>
                            Home
                        </NavBarItem>
                    </li>
                    <li className="px-5 flex items-center justify-evenly">
                        <ShoppingBagIcon onClick={() => openCart()} 
                        className="w-6 h-6 cursor-pointer text-blue-400"/>{count}
                    </li>

                    <li>
                        <Bars3Icon 
                        className="w-10 h-10" 
                        onClick={() => setDisplayMenu(!displayMenu)}
                        />
                    </li>

                    {
                        displayMenu 
                        ?
                            <div className="absolute text-xl flex flex-col justify-center items-center w-[100%] h-[100vh] bg-white top-0 left-0">
                                <div className="w-full flex justify-end mr-[2rem]">
                                    <XCircleIcon 
                                        className="w-10 h-10" 
                                        onClick={() => setDisplayMenu(!displayMenu)}
                                    />
                                </div>

                                <ul className="p-2 w-full flex flex-col justify-center items-center">
                                    <li className="px-5 py-2">
                                        <NavBarItem to='/'>
                                            Home
                                        </NavBarItem>
                                    </li>

                                    <li className="px-5 py-2">
                                        <NavBarItem to="/women's-clothing">
                                            Women's clothing
                                        </NavBarItem>
                                    </li>

                                    <li className="px-5 py-2">
                                        <NavBarItem to="/men's-clothing">
                                            Men's clothing
                                        </NavBarItem>
                                    </li>

                                    <li className="px-5 py-2">
                                        <NavBarItem to='/electronics'>
                                            Electronics
                                        </NavBarItem>
                                    </li>
                                    <li className="px-5 py-2">
                                        <NavBarItem to='/jewelery'>
                                            Jewelery
                                        </NavBarItem>
                                    </li>
                                </ul>
                        
                                <ul className="p-2 pt-[10rem] w-full flex flex-col justify-center items-center">
                                    <li className="px-5 py-2">
                                        <NavBarItem to='/my-orders'>
                                            My Orders
                                        </NavBarItem>
                                    </li>
                                    <li className="px-5 py-2">
                                        <NavBarItem to='/my-account'>
                                            My Account
                                        </NavBarItem>
                                    </li>
                                    <li className="px-5 py-2">
                                        <NavBarItem to='/sign-in'>
                                            Sign In
                                        </NavBarItem>
                                    </li>
                                    <li className="px-5 py-2 text-gray-500">
                                        Juesgape
                                    </li>
                                </ul>
                            </div>
                        :
                            ''
                    }

                </ul>
            </nav>
    )
}

export default Navbar


                    {/* <li className="px-5">
                        <NavBarItem to='/'>
                            All
                        </NavBarItem>
                    </li>
                        
                    <DisplayItems
                        name={'Clothes'}
                        items={["Women's clothing", "Men's clothing"]}
                    >
                    
                    </DisplayItems>
                        
                    <li className="px-5">
                        <NavBarItem to='/electronics'>
                            Electronics
                        </NavBarItem>
                    </li>
                    <li className="px-5">
                        <NavBarItem to='/furnitures'>
                            Jewelery
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
                    </li> */}