import React from "react";

export default function Images(){
    const Image = [
        "/images/dog-image-1.jpg",
        "/images/dog-image-2.jpg",
        "/images/dog-image-3.jpg"
    ];

    return(
        <div className="image-container">
            {Image.map((img)=>{
                return(
                    <div>
                        <img src= {img} alt=" "/>
                    </div>
                )
            })
        }
        </div>
    )
}