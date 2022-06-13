import React from 'react';
import "./often_order_block.scss"

function OftenOrderCard(props) {
    return (
        <div className="often_order_card">
            <img src={props.imageCard} alt=""/>
            <div className="often_order_card__text">
                <span>{props.titleCard}</span>
                <div>{props.costCard}</div>
            </div>
        </div>
    );
}

export default OftenOrderCard;