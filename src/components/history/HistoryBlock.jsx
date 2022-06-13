import React from 'react';
import "./history_block.scss"
import HistoryCard from "./HistoryCard";

//PICTURE
import CoffeePic from "../../png/history/coffee.jpg"
import PathPic from "../../png/history/path.jpg"
import PayPic from "../../png/history/pay.jpg"
import GreenLightPic from "../../png/history/green_light.jpg"
import GuessPic from "../../png/history/guess.jpg"
import ChildPic from "../../png/history/child.jpg"

function HistoryBlock(props) {
    return (
        <div className="history_block">
            <div className="history_block__container">
                <HistoryCard imgHistory={CoffeePic}/>
                <HistoryCard imgHistory={PathPic}/>
                <HistoryCard imgHistory={PayPic}/>
                <HistoryCard imgHistory={GreenLightPic}/>
                <HistoryCard imgHistory={GuessPic}/>
                <HistoryCard imgHistory={ChildPic}/>
                <HistoryCard imgHistory={CoffeePic}/>
                <HistoryCard imgHistory={PathPic}/>
                <HistoryCard imgHistory={PayPic}/>
                <HistoryCard imgHistory={GreenLightPic}/>
                <HistoryCard imgHistory={GuessPic}/>
                <HistoryCard imgHistory={ChildPic}/>
            </div>
        </div>
    );
}

export default HistoryBlock;