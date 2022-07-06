import React from "react"; 
import Foto from '../public/cosas/image.jpg';

const Reseñas = () => {

    return (

        

<div id="review" className="flex   py-10 ">
    <div className="m-1 lg:px-16 sm:ml-4">
        <div className="container flex flex-col items-center mx-auto lg:items-center text-center sm:text-xl">
            <p className="relative flex items-start justify-start w-full text-xl font-bold tracking-wider text-[#E9E9EB] uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>


            <h2 className="relative flex items-center justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center text-[#eca850]">
            See the most honest reviews
                 </h2>
               

            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
                <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 p-2 lg:mb-0 backdrop-blur-sm bg-black/40  rounded-lg">
                    <div className="flex items-center justify-center">
                        <div className="w-16 h-16 mr-4 overflow-hidden  rounded-full">
                            <img src="https://i.pinimg.com/280x280_RS/85/b2/9c/85b29c0cedafd23546350cba4fd004d4.jpg" className="object-cover w-20"/>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h4 className="font-bold text-[#E9E9EB]">Sander G</h4>
                            <p className="text-gray-400">sangh98</p>
                        </div>
                    </div>
                    <blockquote className="mt-8 text-lg pb-1 text-[#E9E9EB] font-medium">"Lately you watch almost as much advertisements as content of a streamer, if you dont pay subscription on all the channels you will be bombed by advertisements of any kind."</blockquote>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto p-2 mx-0 mb-12 border-l  border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 backdrop-blur-sm bg-black/40  rounded-lg">
                    <div className="flex items-center justify-center">
                        <div className="w-16 h-16 mr-4 overflow-hidden  rounded-full">
                            <img src="https://pbs.twimg.com/media/A6aSUngCIAAouPj?format=jpg&name=small" className="object-cover w-20 "/>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h4 className="font-bold text-[#E9E9EB]">Susan N</h4>
                            <p className="text-gray-400">1nsusan</p>
                        </div>
                    </div>
                    <blockquote className="mt-8 text-lg pb-1 text-[#E9E9EB] font-medium">"Filled with garbage people who make a living off sitting on their lazy arses, Any girl can be naked as long as they paint their body? Ight let your children watch that"</blockquote>
                </div>
                <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3 p-2 backdrop-blur-sm bg-black/40 rounded-lg">
                    <div className="flex items-center justify-center">
                        <div className="w-16 h-16 mr-4 overflow-hidden  rounded-full">
                            <img src="https://i.pinimg.com/474x/d5/fe/03/d5fe03de7fbd3b54a6c04c77d42f80ba.jpg" className="object-cover w-20"/>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <h4 className="font-bold text-[#E9E9EB]">John S</h4>
                            <p className="text-gray-400">smithat87</p>
                        </div>
                    </div>
                    <blockquote className="mt-8 text-lg pb-1 text-[#E9E9EB] font-medium">"Untrustable, can't keep connected, keep getting bumbed off and frozen, too many pop ups. Not satisfying chat not user friendly and part of the suppression of free speech,  what a shame!"</blockquote>
                </div>
            </div>
        </div>
    </div>
</div>




    )
}

export default Reseñas;