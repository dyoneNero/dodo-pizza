import React from 'react';
import "./delivery_block.scss"
import {motion} from "framer-motion";

function DeliverBlock(props) {
    const [sizeMap, setSizeMap] = React.useState(false);

    const sizeMapVariants = {
        size:{
            scale: 1.5,
            color: "red"
        },
        close:{
            scale: 1
        }
    }

    return (
        <div className="delivery_block">
            <div className="delivery_block__container">
                <h2>Доставка и оплата</h2>
                <section className="delivery_block__container__block">
                    <div className="delivery_block__container__block block-info">
                        <h1>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</h1>
                        Если мы не успеем доставить продукты в течение 60 минут, курьер подарит вам сертификат или промокод на большую пиццу 35 см на традиционном тесте.
                    </div>
                    <div className="delivery_block__container__block block-info">
                        <h1>ДОДО ПИЦЦА — СЕТЬ ПИЦЦЕРИЙ № 1 В РОССИИ</h1>
                        <p>по доставке пиццы по данным из отчета Euromonitor International на май 2017 года.</p>
                        Все цены в меню указаны без учета скидок.
                    </div>
                    <div className="delivery_block__container__block block-info">
                        <h1>599 ₽</h1>
                        <p>Минимальная сумма доставки</p>
                        <h1>7 000 ₽</h1>
                        <p>Максимальная сумма при оплате наличными</p>
                        Изображения продуктов могут отличаться от продуктов в заказе.
                    </div>
                    <div className="delivery_block__container__block block-info">
                        <h1>ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h1>
                        <button className="delivery_block__container__block block-info-map"

                        >
                            <a href=""
                               onMouseEnter={() => setSizeMap(true)}
                               onMouseLeave={() => setSizeMap(false)}
                            >
                                <p>Зона доставки</p>
                            </a>
                            <motion.div
                                animate={sizeMap ? "size":"close"}
                                variants={sizeMapVariants}
                                transition={{duration: 1.5}}
                            >
                                <img src="https://dodopizza-a.akamaihd.net/site-static/dist/afdce5bbb5d38204b6c6.jpg" alt=""/>
                            </motion.div>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default DeliverBlock;