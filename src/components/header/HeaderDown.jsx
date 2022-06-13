import React, {useState} from 'react';
import "./header_down.scss"
import {motion} from "framer-motion";

const cartEnterVariants = {
    arrowEnter: {
        opacity: 1,
        x: 5
    },
    arrowClose: {
        opacity: 0,
        x: 0
    },
    numEnter: {
        opacity: 0,
        x: 5
    },
    numClose: {
        opacity: 1,
        x: 0
    }
}

const logoAnimVariants = {
    start:{
        left: 50,
        transition: { duration: 0.2 }
    },
    end:{
        left:0,
        transition: { duration: 0.2 }
    },
    startNav:{
        x: 50,
        transition: { duration: 0.2 }
    },
    endNav:{
        x: 0,
        transition: { duration: 0.2 }
    },
    startHeader:{
        boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2 }
    },
    endHeader:{
        boxShadow: "none",
        transition: { duration: 0.2 }
    }
}



function HeaderDown(props) {
    const [cartEnter, setCartEnter] = useState(false);
    const [logoAnim, setLogoAnim] = useState(false);

    const navLinks = ['Пицца', 'Комбо', 'Закуски', 'Десерты', 'Напитки', 'Другие товары', 'Акции', 'Контакты', 'О нас', 'Работа в Додо']

    //Не робит
    window.addEventListener("scroll", () => {
        let scrollDistance = window.scrollY;
        document.querySelectorAll(".section").forEach((el, i) => {
            if (el.offsetTop - document.querySelectorAll('nav').clientHeight <= scrollDistance){
                document.querySelectorAll('nav a').forEach((el) => {
                    if (el.classList.contains('active')){
                        el.classList.remove('active');
                    }
                })
                document.querySelectorAll('nav li')[i].querySelector('a').classList.add('active');
            }
        })
    })

    //Выезжает лого
    window.addEventListener("scroll", () => {
        let scrollDistances = window.scrollY;
        if (scrollDistances <= 90){
            setLogoAnim(true);
        }
        else if(scrollDistances >= 100){
            setLogoAnim(false);
        }
    })

    //Якоря 1
    //   const anchors = document.querySelectorAll('.anchors_class')
    //   for (let anchor of anchors){
    //       anchor.addEventListener("click", function (eve){
    //           eve.preventDefault();
    //           const blockID = anchor.getAttribute('href');
    //          document.querySelector('#' + blockID).scrollIntoView({
    //              behavior: "smooth",
    //              block: "start"
    //           })
    //       })
    //   }

    //Якоря 2
    document.querySelectorAll('a.anchors_class').forEach(link => {
        link.addEventListener('click', function (eve){
            eve.preventDefault()

            let href = this.getAttribute('href').substring(1)

            const scrollTarget = document.getElementById(href)

            const topOffset = 0//document.querySelector('erg').offsetHeight
            const elementPos = scrollTarget.getBoundingClientRect().top
            const offsetPos = elementPos - topOffset;

            window.scrollBy({
                top: offsetPos,
                behavior: 'smooth'
            })
        })
    })

    console.log(logoAnim);

    return (
        <motion.header className="header_down"
                animate={logoAnim ? "endHeader" : "startHeader"}
                variants={logoAnimVariants}
        >
                <div className="header_down__container">
                    <div className="header_down__container__left_path_down left_path_down">
                        <nav className="header_down__container__left_path_down left_path_down-list">
                            <div className="header_down__container__left_path_down left_path_down-list-logo">
                                <div className="header_down__container__left_path_down left_path_down-list-logo-close"></div>
                                <motion.div animate={logoAnim ? "end" : "start"}
                                            variants={logoAnimVariants}
                                            className="header_down__container__left_path_down left_path_down-list-logo-picture"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 62 64" fill="none">
                                        <path d="M28.6 0C47.2 0 61.5 12.8 61.5 31.8C61.5 50.9 47.2 64 28.6 64H7.7C3.5 64 0 61.2 0 56.3V8C0 3.1 3.5 0 7.7 0H28.6V0Z" fill="#FF6900"/>
                                        <path d="M50 24.9C49.9 25.7 49 25.7 48.6 25C47.3 22.8 45.6 22.4 42.9 22.2C40.9 22.1 38.5 22.3 36.3 22.3C35.9 22.3 35.8 22 35.8 21.9C36.2 20 37.8 16.5 39.5 16.2C40.3 16.1 42.1 15.9 43.1 15.9C47.7 15.9 50.2 21.2 50 24.9V24.9ZM24 43C26.9 43.8 31 44.3 34.4 44C40.3 43.6 44.8 41.4 47.3 39.8C45.8 43.6 40.1 46 34.7 46.6C34.7 46.9 34.6 47.1 34.6 47.4C38.7 47.2 42.6 45.8 44.4 44.6C43.4 48.3 38.4 49.8 33.8 50.1C33.7 50.4 33.5 50.7 33.4 50.9C36.1 50.9 38.6 50.5 40.1 50C38 53.9 29 56.6 21.4 53C23.1 49.6 23.9 46.2 24 43V43ZM49.1 16.4C47.3 14.7 44.9 13.9 42.8 14C39.8 14 37.3 14.8 33.6 14.9C31.1 15 28.8 9.49999 25.8 8.79999C24.5 5.89999 21.5 5.49999 19.7 6.99999C18 5.99999 15.4 6.49999 15.3 8.39999C13.4 7.79999 10.9 8.79999 12 11.4C7.3 11.5 6.5 15.7 9.6 16.1C5.5 18.4 7.4 22.4 10.8 21.6C11.4 27.6 14.1 35.4 9.7 37.3C9.2 37.5 7.2 38 3.4 37.1C2.3 36.8 1.1 36.5 0 36.2V39.3C3.3 40.1 6.6 40.7 8.7 40.5C14.5 39.9 14.8 35.1 14.5 30.9C14.2 26.8 12.8 22 13.3 18.6L13.1 18.4C11 20.6 9.6 20 9.4 19.3C9.1 17.9 11.6 16.1 13 15.5C13 15.4 13.1 15.3 13.1 15.2C11.8 15.4 10.2 15.2 10.1 14.3C10 13.2 12.3 12.1 15.3 12.4C15.4 12.4 15.4 12.3 15.5 12.3L14.9 12C14.1 11.6 13.9 10.9 14.2 10.5C14.5 9.99999 15.3 9.79999 16 9.79999C17.1 9.79999 18 10.1 18.7 10.4C18.8 10.4 18.8 10.3 18.9 10.3C18.7 10.1 18.4 9.89999 18.3 9.69999C18.1 9.39999 18.1 8.89999 18.4 8.69999C18.8 8.39999 19.9 8.29999 20.8 9.09999L21.3 9.59999C21.4 9.59999 21.5 9.59999 21.6 9.49999C21.4 9.29999 21.3 8.99999 21.3 8.79999C21.2 8.49999 21.3 8.09999 21.7 7.99999C22.1 7.89999 22.6 8.09999 22.9 8.49999C23.2 8.89999 23.4 9.49999 23.5 9.79999C21.4 9.99999 18.9 10.8 17.4 12.9C15.9 14.9 15.3 18.1 16.2 21.1C16.8 24.2 18 27.1 19.1 30.1V30.2C21.5 37.1 26.1 54.1 3.8 63.1C4.6 63.6 6.2 64 7.5 64H9.8C14.4 61.6 17.5 58.7 19.7 55.8C29.9 60.3 39.2 58 43.2 50.6C45.9 49 47.6 45.7 47.7 43.4C49.4 41.3 49.7 38.7 49.2 36.9C49.1 36.5 48.7 36.5 48.1 36.8C39.8 41.8 32.5 42.6 23.8 40C23.6 36.6 22.9 33.7 22.6 31.9C22.4 28.4 23.5 26.7 29.9 28.8C34.1 29.9 36 31.8 37.5 32.8C38.2 33.3 39.1 33.9 39.6 33.5C39.9 33.3 40 32.7 40 32C39.9 30.1 39 26.9 38.2 25.7C40.7 25.6 42.8 25.6 43.9 25.7C46.3 26.1 46.5 27.4 46.8 27.9C47.5 29.9 51.4 29.4 51.7 27.7C52.3 24.2 52.5 19.6 49.1 16.4ZM4.7 46.4C3.1 46.3 1.5 46.3 0 46.4V48.5C2.7 47.9 4.4 47.6 4.4 47.6L4.7 46.4Z" fill="black"/>
                                        <path d="M29.7 24.5C26.2 23.7 22.3 22.7 20.3 19.7C20.3 19.6 20.2 19.6 20.1 19.6C20 19.6 20 19.7 20 19.7C20 19.9 20 20 20.1 20.2L19.8 20.3C19.3 19.5 19.1 18.6 19.7 17.9C20.5 16.9 22 17 23 17.6L22.9 17.9C22.4 17.8 21.9 17.8 21.5 18C21.2 18.2 21.1 18.5 21.3 18.8C23 22 28 22.7 33.9 22.2C34.5 22.2 34.6 21.9 34.7 21.6C35.2 19.6 36.1 17.7 37.5 16.3C36.4 16.5 35.4 16.5 34.6 16.5C31.6 16.7 29.8 16.3 29.3 15.9L29.4 15.6C29.7 15.7 30.1 15.7 30.1 15.6C30.2 15.5 30.1 15.4 30 15.3C29.4 14.8 26.8 12.1 26.8 12.1C26.5 9.8 23.2 9.8 21.9 12L21.5 11.9C21.6 11.4 21.8 11 22 10.7C19.3 11.3 17.7 13.8 17.4 16.1C16.2 26.3 31.7 23.9 36.1 28C36.2 28.1 36.4 28.4 36.5 28.2C36.7 28 34.7 25.6 29.7 24.5V24.5ZM24.3 12.3C25 12.1 26.1 12.8 26.6 13.9C27.2 15 27 16.1 26.3 16.4C25.6 16.7 24.5 15.9 24 14.8C23.9 14.6 23.9 14.5 23.8 14.3H23.9C24.1 14.5 24.4 14.6 24.6 14.5C24.9 14.3 24.8 13.9 24.6 13.5C24.4 13.2 24.1 12.9 23.8 12.9L23.7 12.8C23.9 12.5 24.1 12.4 24.3 12.3ZM47.3 39.8C44.8 41.4 40.3 43.6 34.4 44C31 44.2 27 43.8 24 43C24 44 23.9 45 23.7 46C25.4 46.4 28.3 47 32.6 47.1C32.4 48.2 31.2 52.2 28.3 54.7C33.7 54.9 38.6 52.8 40.1 50C38.6 50.5 36 51 33.4 50.9C33.5 50.6 33.7 50.4 33.8 50.1C38.4 49.9 43.4 48.4 44.4 44.6C42.6 45.8 38.7 47.2 34.6 47.4C34.6 47.1 34.7 46.9 34.7 46.6C40.1 45.9 45.8 43.6 47.3 39.8" fill="white"/>
                                    </svg>
                                </motion.div>
                            </div>
                                <ul className="header_down__container__left_path_down left_path_down-list-ul">
                                    {
                                        navLinks.map(obj =>
                                        <motion.li animate={logoAnim ? "endNav" : "startNav"}
                                                   variants={logoAnimVariants}
                                        >
                                            <a href={`#${obj}`} className="anchors_class">
                                                {obj}
                                            </a>
                                        </motion.li>
                                    )}
                                </ul>
                        </nav>
                    </div>
                    <div className="header_down__container__right_path_down right_path_down">
                        <button className="header_down__container__right_path_down right_path_down-cart"
                                onMouseEnter = {() => setCartEnter(true)}
                                onMouseLeave={() => setCartEnter(false)}
                        >
                            <span>Корзина</span>
                            <div className="header_down__container__right_path_down right_path_down-cart-stick"></div>
                            <motion.div
                                animate = {cartEnter ? "arrowEnter" : "arrowClose"}
                                variants = {cartEnterVariants}
                                className="header_down__container__right_path_down right_path_down-cart-arrow"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                                    <path d="M12 5.483L7.286 10M1 5.483H12H1ZM12 5.483L7.286 1L12 5.483Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </motion.div>
                            <motion.div
                                animate={cartEnter ? "numEnter" : "numClose"}
                                variants={cartEnterVariants}
                            ><span>1</span></motion.div>
                        </button>
                    </div>
                </div>
        </motion.header>
    );
}

export default HeaderDown;