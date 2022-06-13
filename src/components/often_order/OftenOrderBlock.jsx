import React from 'react';
import OftenOrderCard from "./OftenOrderCard";
import "./often_order_block.scss";
import CombosArr from "../../array/combo.json"

function OftenOrderBlock(props) {
    return (
        <div className="often_order_block">
            <div className="often_order_block__slider">
                <div className="often_order_block__slider__container">
                    <p>Часто заказывают</p>
                    <div className="often_order_block__slider__container__list">
                        {CombosArr.map((obj) => (
                            <OftenOrderCard {...obj}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OftenOrderBlock;