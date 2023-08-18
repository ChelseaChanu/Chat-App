import React from "react";

export default function RecieverChat(props){
    return(
        <div className="reciever-chat">
            <p>{props.chatContent}</p>
        </div>
    )
}