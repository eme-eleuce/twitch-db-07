import React from 'react';
import { rec_channels, top_channels } from '../data/MOCK_DATA';
import { FaPlay } from 'react-icons/fa';
import { GiPodium } from 'react-icons/gi';
import Image from 'next/image';
import { BsDot } from 'react-icons/bs';



const MenuL = () => {


   const AchicarText = (str, num) => {

      if (str?.length > num) {
        
        return str.slice(0, num) + '...'
      } else {
       
        return str;
      }
    }
 

    return (

        <div className='w-14 fixed sm:w-16 xl:w-[15rem] h-screen p-1 backdrop-blur-sm bg-black/50 no-scrollbar overflow-y-scroll rounded-md'>
           <div >
            <p className='hidden xl:flex uppercase font-extrabold text-sm lg:pb-2 text-[#E9E9EB]  pt-2 ml-4'>Recommended Channels</p>
            <p className='border-b-2 lg:border-0 mt-2'> <FaPlay size={26} color='white' className='xl:hidden justify-center w-full mb-2'/></p>
           </div>
           {rec_channels.map((item, index) => ( 

            <div key={index} className='mt-1 inline-flex py-[2px]  items-center w-full lg:hover:bg-gray-400/50  cursor-pointer'> 
                 <div >
                    <Image src={item.avatar} width='50' height='50' className='rounded-full' />
                 </div>
                 <div className='hidden xl:flex justify-between w-full ml-2'>
                    <div>
                        <p className='italic font-bold text-[#eca850]'>{item.username} </p>
                        <p className=' text-gray-300'>{AchicarText(item.game_name, 12)} </p>
                    </div>
                    <p className='flex items-center text-[#E9E9EB]'> <BsDot size={40} color='red' /> {item.rank}K</p>
                 </div>
            </div>
            ))}
            <div>
               <p className='hidden xl:flex uppercase font-extrabold text-sm py-4 text-[#E9E9EB]  ml-14'>Top Channels</p>
               <p className='border-b-2 lg:border-0'> <GiPodium color='white' size={40} className='xl:hidden justify-center w-full mb-2'/></p>
           </div>
           {top_channels.map((item, index) => (

              <div key={index} className=' mt-1 inline-flex py-[2px] items-center w-full   lg:hover:bg-gray-400/50 cursor-pointer'>
                     <div>
                    <Image src={item.avatar} width='50' height='50' className='rounded-full'/>
                 </div>
                 <div className='hidden xl:flex justify-between w-full ml-2'>
                    <div>
                        <p className='italic font-bold text-[#eca850]'>{item.username} </p>
                        <p className=' text-gray-300'>{AchicarText(item.game_name, 12)}</p>
                    </div>
                    <p className='flex items-center text-[#E9E9EB]'> <BsDot size={40} color='red' /> {item.rank}K</p>
                 </div>
              </div>
           ) )}

        </div>
    )
}

export default MenuL;