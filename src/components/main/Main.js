import React from 'react';
import MainBlock from "./MainBlock";
import "./main.scss"

function Main(props) {
    return (
        <div className="main">
            <div className="main__container">
                <MainBlock/>
            </div>
        </div>
    );
}

export default Main;