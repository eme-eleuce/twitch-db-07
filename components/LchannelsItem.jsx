import React from "react"
import Image from "next/image";



const LchannelsItem = ({img, profile_img, title, user, game, views}) => {

    return (
        

        <div className='p-3  w-full backdrop-blur-md bg-black/40 rounded-lg'>

           <div className='relative inline-block  group '>
           
           <div className='block rounded-lg'>
           <Image src={img} className='rounded-lg object-fill'/>
           </div>
           </div>
            <div className='flex pt-2'>
                <div className='pr-2'>
                    <Image alt='/' src={profile_img} width='60' height='60' className='rounded-full'/>
                    <div className='px-3 content-center bg-red-600 mx-1'>
                        <p>{views}K</p>
                    </div>
                </div>
                <div>
                    <p className='text-sm font-extrabold text-[#E9E9EB] hover:text-black cursor-pointer'>{title} </p>
                    <p className='text-sm  italic font-bold text-[#eca850]'>{user} </p>
                    <p className='text-sm text-gray-300'>{game} </p>
                </div>
            </div>
          
        </div>
    )
}

export default LchannelsItem;