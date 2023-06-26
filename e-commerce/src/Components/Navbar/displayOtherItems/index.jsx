import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"
import NavBarItem from '../NavBarItem/navBarItem.jsx'

const DisplayItems = ({name, items}) => {
    const [toggleItemMenu, setToggleItemMenu] = useState(false)

    return (
        <div className="relative">
            <li 
            className="px-5 cursor-pointer flex items-center"
            onClick={() => setToggleItemMenu(!toggleItemMenu)}
            >
                {name}
            
                {toggleItemMenu ? <ChevronUpIcon className="w-5 h-5 mt-1"/> : <ChevronDownIcon className="w-5 h-5 mt-1"/>}
            </li>

            {
                toggleItemMenu 
                ?
                    <div className="absolute top-8 left-[-1rem] text-center w-[150px] p-2 border border-black rounded-lg bg-white">
                        {
                            items.map((item, index) => 
                                <NavBarItem key={index}
                                    to={'/' + item.split(' ').join('-').toLowerCase()}

                                >
                                    <li className="mb-2 cursor-pointer" key={index}>
                                        {item}
                                    </li>
                                </NavBarItem>
                            )
                        }
                    </div>
                :
                ''
            }

        </div>
    )
}

export {
    DisplayItems
}