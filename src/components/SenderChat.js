import React from "react";

export default function SenderChat(props){
    return(
        <div className={`sender-chat ${props.className}`}>
            <p>{props.chatContent}</p>
        </div>
    )
}