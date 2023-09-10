import React from "react";

export default function RecieverChat(props){
    return(
        <div className={`reciever-chat ${props.className}`}>
            <p>{props.chatContent}</p>
        </div>
    )
}