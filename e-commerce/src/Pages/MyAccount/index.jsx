import React from "react";
import youCatPhoto from '../../assets/cat-you.jpg'

function MyAccount() {
    return(
        <div className="p-8">
            <h1 className='font-bold text-2xl'>My Account</h1>

            <div className="w-full mt-8 flex justify-center items-center border border-black p-4 rounded-lg">
                <div className="flex justify-between">
                    <figure className="max-w-[300px] mr-8 rounded-lg">
                        <img className="rounded-lg" src={youCatPhoto} alt="you-profile-cat" />
                    </figure>

                    <div className="flex flex-col gap-8 items-center text-center justify-center">
                        <p className="text-3xl font-bold">You</p>
                        <div>
                            <p>An amazing person with compulsive buying disorder 😎</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default MyAccount