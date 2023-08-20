import React from "react";

import Navbar from "./navbar";

const ServiceHead = ({info}) => {

    return(
       <div>
            <Navbar info={info} />
            <div className="min-h-[25rem] max-w-[40rem] flex flex-col justify-center space-y-7 ml-[7rem]">
                <h1 className="text-yellow-secondary text-sm font-bold">SERVICES</h1>
                <p className="text-4xl">At <span className='text-blue-primary'>NAXA</span>, we work on <span className='text-blue-primary'>ideas</span>; ideas that can provide <span className='text-blue-primary'>simple solutions</span> to <span className='text-blue-primary'>complex problems</span>.</p>
                <p className="text-sm font-bold ">We work as a team to generate, explore, build and validate ideas. We also contextualize innovations around the world to find the best fitting solutions to local problems.</p>
            </div>
       </div>
    )
}

export default ServiceHead;