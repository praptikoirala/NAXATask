import React from "react";

import InfoContainer from "./info-container";
import ImageContainer from "./image-container";

const ServiceBody = ({info}) => {
    const divStyle = 'min-h-[25rem] px-28 pt-24 flex items-center justify-center space-x-20';

    return(
        info.map((data, index) => {

            return(
                <section key={index} className="bg-grey-bg" id={index}>
                    {index % 2 === 0 ?
                        <div className={divStyle}>
                            <ImageContainer image={data.service_order === 1 || data.service_order === 2 ? data.icon : data.photo}/> 
                            <InfoContainer icon={data.service_order === 1 || data.service_order === 2 ? data.photo : data.icon} title={data.title} desc1={data.description1} desc2={data.description2}/>
                        </div> : 
                        <div className={divStyle}>
                            <InfoContainer icon={data.service_order === 1 || data.service_order === 2 ? data.photo : data.icon} title={data.title} desc1={data.description1} desc2={data.description2}/>
                            <ImageContainer image={data.service_order === 1 || data.service_order === 2 ? data.icon : data.photo}/> 
                        </div>
                    }
                </section>)
        })
    )
}

export default ServiceBody;