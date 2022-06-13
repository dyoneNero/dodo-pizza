import React from 'react';

function HistoryCard(props) {
    return (
        <div className="history_card">
            <a href="">
                <img src={props.imgHistory} alt=""/>
            </a>
        </div>
    );
}

export default HistoryCard;