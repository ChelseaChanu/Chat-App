import React from "react";

export default function Payment(props){
    return (
        <div className={`payment-container ${props.className}`}>
            <div className="circle"></div>
            <p className="payment-content">{props.payContent}</p>
            <h5 className="dollar">{props.amount}</h5>
        </div>
    )
}