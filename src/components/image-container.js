import React from "react";

const ImageContainer = ({image}) => {

    return(
        <div className="min-w-[27rem]">
            <img src={image} alt="N/A" className="w-full" />
        </div>
    )

}

export default ImageContainer;