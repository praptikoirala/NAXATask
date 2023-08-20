import React from "react";

const InfoContainer = ({icon, title, desc1, desc2}) => {
    const description1 = desc1.replace(/<p>/g, '').replace(/<\/p>/g, '');
    const description2 = desc2.replace(/<p>/g, '').replace(/<\/p>/g, '');

    return(
        <div className="space-y-5 text-sm font-thin">
            <img src={icon} alt="icon1" className="h-14"/>
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{description1}</p>
            <p className="bg-purple-bg py-5 px-7">{description2}</p>
        </div>
    )

}

export default InfoContainer;