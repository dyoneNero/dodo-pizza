import React from 'react';

function MainCard(props) {
    return (
        <article className="main_card">
            <div className="main_card__text">
                <img src={props.imageCard} alt=""/>
                <div>{props.titleCard}</div>
                {props.textCard}
            </div>
            <div className="main_card__pay">
                <span>{props.costCard}</span>
                <button>Выбрать</button>
            </div>
        </article>
    );
}

export default MainCard;