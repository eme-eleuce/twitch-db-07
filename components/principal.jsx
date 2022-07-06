import React from "react"
import Final from "./final";

import Lchannels from "./lchannels";
import Reseñas from "./reseñas";


const Principal = () => {

    return (

        <div className='absolute left-[64px] xl:left-[220px] '>
            
           <Lchannels />
           <Reseñas />
           <Final />
        </div>
    )
}

export default Principal;