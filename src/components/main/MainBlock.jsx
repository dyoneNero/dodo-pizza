import React from 'react';
import MainCard from "./MainCard";
import "./main_block.scss"

//Array
import PizzasArr from "../../array/pizza.json";
import CombosArr from "../../array/combo.json";
import SnacksArr from "../../array/snacks.json";
import DesertsArr from "../../array/desert.json";
import DrinksArr from "../../array/drinks.json";
import OtherArr from "../../array/other.json";


function MainBlock(props) {
    return (
        <div className="main_block">
                <p><a id="Пицца">Пицца</a></p>
                <section className="main_block__list">
                        {PizzasArr.map(
                            (obj) => (
                                <MainCard {...obj}/>
                            )
                        )}
                </section>
                <p><a id="Комбо">Комбо</a></p>
                <section className="main_block__list">
                        {CombosArr.map(
                            (obj) => (
                                <MainCard {...obj}/>
                            )
                        )}
                </section>
                <p><a id="Закуски">Закуски</a></p>
                <section className="main_block__list">
                        {SnacksArr.map(
                            (obj) => (
                                <MainCard {...obj}/>
                            )
                        )}
                </section>
                <p><a id="Десерты">Десерты</a></p>
                <section className="main_block__list">
                        {DesertsArr.map(
                            (obj) => (
                                <MainCard {...obj}/>
                            )
                        )}
                </section>
                <p><a id="Напитки">Напитки</a></p>
                <section className="main_block__list">
                        {DrinksArr.map(
                            (obj) => (
                                <MainCard {...obj}/>
                            )
                        )}
                </section>
                <p><a id="Другие товары">Другие товары</a></p>
                <section className="main_block__list">
                        {OtherArr.map(
                            (obj) => (
                                <MainCard {...obj}/>
                            )
                        )}
                </section>
        </div>
    );
}

export default MainBlock;