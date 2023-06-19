import React from "react"

const Card = ({id, title, price, category, description, image}) => {
    return(
        <React.Fragment>
            <div className="pb-8 max-w-xs">

                <div className="h-100 hover:shadow-2xl hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-112 duration-200 w-auto flex justify-center rounded-lg">
                    <figure className='relative w-60 mb-2 cursor-pointer'>
                        <span className="absolute bottom-0 left-0 bg-gray-400 rounded-lg text-black m-2 px-3 py-1 cursor-default">{category}</span>
                        <img className="w-full h-60 object-fit rounded-lg" src={image} alt={title} />
                        <div className="absolute top-0 right-0 flex justify-center bg-gray-400 w-7 h-7 rounded-full m-2 cursor-pointer">
                        +
                        </div>
                    </figure>
                </div>

                <div className="pt-8">
                    <div className="text-center">
                        <p>{title}</p>
                    </div>
                    <div className="flex justify-center">
                        <p className="font-bold">$<span>{price}</span></p>
                    </div>
                </div>
            </div>
        
        </React.Fragment>
    )
}

export default Card