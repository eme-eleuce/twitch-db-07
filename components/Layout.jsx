import React from 'react';
import MenuL from './menuLateral';
import Principal from './principal';


const Layout = () => {

    return (

        <div className='pt-[60px] flex w-full'>
           <MenuL />
           <Principal />
        </div>
    )
}

export default Layout;