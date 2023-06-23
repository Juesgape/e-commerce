const ProductsOrder = () => {
    return(
        <aside 
        className={`${isProductDetailOpen ? 'flex': 'hidden'} flex-col fixed right-0 z-20 top-[0rem] border border-black rounded-tl-lg bg-white max-w-[379px] h-[calc(100vh)] p-4`}
        
        >
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Detail</h2>
                <div className="cursor-pointer">
                    <XMarkIcon 
                    className="h-6 w-6 "
                    onClick={() => openProductDetail()}
                    />
                </div>
            </div>

            <div className='p-4 pt-8 overflow-y-scroll custom-scrollbar'>
                <h3 className='text-center text-gray-500'>{productInfo.title}</h3>
                <figure className='flex justify-center pt-8 pb-8'>
                    <img className='w-[200px]' src={productInfo.image} alt="Product-image" />
                </figure>
                <p className='text-justify'>{productInfo.description}</p>
                <div className='w-full flex justify-between items-center pt-8'>
                    <button 
                    className='bg-blue-400 p-3 rounded-lg text-white hover:text-black'
                    onClick={() => addProductsToCart(productInfo)}
                    >Add product
                    </button>
                    
                    <p className='font-bold text-[1.3rem]'>${productInfo.price}</p>
                </div>
            </div>

        </aside>
    )
}

export {
    ProductsOrder
}