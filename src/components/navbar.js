import React from "react";
import { Link } from 'react-scroll';

const Navbar = ({info}) => {

    return(
        <div className="flex flex-col items-center justify-center p-5 space-y-3">
            <img src='/images/logo.png' alt="logo" className="h-7 hover:cursor-pointer"/>
            <div className="w-fit flex space-x-3 text-sm mx-3">
                {info.map((item, index) => {
                    return (
                        <div key={index} className="w-fit rounded-3xl p-3 hover:cursor-pointer hover:font-bold hover:bg-grey-bg">
                            <Link to={index} spy={true} smooth={true} offset={75} duration={500}>{item.title}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar;