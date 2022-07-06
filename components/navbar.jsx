import React, {Fragment, useState} from "react";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/cosas/logo.png';
import { Menu, Transition } from '@headlessui/react';
import {BsSearch, BsThreeDotsVertical} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';



function classNames(...classes) {

    return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  
const [nav, SetNav] = useState(true)

const handleNav = () => {
     SetNav(!nav)
}

    return (

        <div className='fixed h-14 items-center w-full flex flex-nowrap p-4 mb-[2px] z-10 backdrop-blur-sm bg-black/40 '>
            {/*Lado Izquierdo */}
            <div className=' flex grow items-center justify-start'>
             
                <Link href='/'>
                    <a className='flex'>
                       <Image  src={Logo}
                               alt='/'
                               width='38'
                               height='38'
                               className='cursor-pointer z-10'/>
                    </a>
                </Link>
                 <p className='p-4 font-extrabold text-[#E9E9EB]'>Browse</p>
                 <div>
                 <Menu as='div' className='relative text-left hidden md:flex'>
            <div className='flex'>
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg backdrop-blur-lg bg-black/80 ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='/#review'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Reviews
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
         </div>
    </div>
            {/* Medio */}
            <div className='hidden md:flex grow-[2] items-center justify-center'>
                <div className='bg-gray-300 text-black flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-xl'>
                    <div>
                        <input type="text" 
                        className='bg-transparent  border-none focus:outline-none'
                        placeholder='Search'
                        />
                    </div>
                    <div>
                        <BsSearch />
                    </div>
                </div>
            </div>
            {/* Deerecho */}

              <div className='hidden md:flex grow items-center justify-end'>
                 <div className='flex items-center'>
                    <Link href='/'>
                     <button className='px-4 py-[6px] rounded-lg font-extrabold mr-2 '>
                        Account
                     </button>
                    </Link>
                    <FaUserAlt size={25}/>
                 </div>
              </div>
              <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
              </div>
              {/* Menú para telefono,  no cerraba completamente al darle a la equis */}
               
               
        </div>
    )



     }

export default Navbar;