import React from "react";

export default function Header(){
    return(
        <div className="header-container">
            <i class="fa-solid fa-angle-left"></i>
            <img src="./images/avatar.jpg" alt=" "/>
            <div className="profile">
                <h4 className="name">Samuel Green</h4>
                <p className="availability">Available to Walk</p>
            </div>
            <div className="ellipsis">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    )
}