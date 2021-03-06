import React from "react";
import computadoraImage from "../img/Computadora.png";
import audifonosImage from "../img/audifonos.png";
import windowsImage from "../img/windows11.png";
import pcGamerImage from "../img/pcGamer.png";
import "../styles/PrincipalPage.css";
import "../styles/Animations.css"

const Principal = () => {

    window.addEventListener("scroll", ()=>{
        let animacion1 = document.getElementById("animacion1");
        let animacion2 = document.getElementById("animacion2");
        let animacion3 = document.getElementById("animacion3");

        let animacion4 = document.getElementById("imagen4");
        let animacion5 = document.getElementById("imagen1");
        let animacion6 = document.getElementById("imagen2");
        let animacion7 = document.getElementById("imagen3");

        let posicionObj1 = animacion1.getBoundingClientRect().top;
        let posicionObjDeAbajo = animacion4.getBoundingClientRect().top/ 1.5;

        let tamanoDePantalla = window.innerHeight;

        if(posicionObj1 < tamanoDePantalla){
            animacion1.style.animation = "moverDeDerechaAIzquierda 1s ease-out";
            animacion2.style.animation = "moverDeDerechaAIzquierda 1s ease-out";
            animacion3.style.animation = "moverDeDerechaAIzquierda 1s ease-out";
        }

        if(posicionObjDeAbajo < tamanoDePantalla){
            animacion4.style.animation = "moverDeDerechaAIzquierda 1s ease-out"
            animacion5.style.animation = "moverDeIzquierdaADerecha 1s ease-out"
            animacion6.style.animation = "moverDeArribaHaciaAbajo 1s ease-out"
            animacion7.style.animation = "moverDeAbajoHaciaArriba 1s ease-out"
        }
    });

    return(
        <div>
        <div className="header-content">
        <div className="header-title">
            <div className="logo_title"></div>
            <h1>Ciber Aerom@x</h1>
            <p>Venta y reparación de computadoras, laptops, formateos , instalación de programas, respaldos , redes y más.</p>
            <a href="/catalogo"><button>Ver Productos</button></a>
        </div>
        <div className="header-image">
                <img src={computadoraImage}  id="computadora" alt=""/>
        </div>
    </div>
    <h1 className="title-div_services">Nuestros Servicios</h1>
    <div className="services">

        <div id="animacion1" className="services-card">
            <img src={audifonosImage} id="animacion1" alt=""/>

            <div className="services-info_card">
                <h1>Venta de Hardaware</h1>
                <p>Desde audifonos, teclados, memorias etc.</p>
                <a href="/catalogo"><button>Ir a ver</button></a>
            </div>
        </div>

        <div id="animacion2" className="services-card">
            <img src={windowsImage} id="animacion2" alt=""/>

            <div className="services-info_card">
                <h1>Instalación de Programas</h1>
                <p>Windows, word, excel etc.</p>
                <a href="/catalogue-software"><button>Ir a ver</button></a>
            </div>
        </div>
        <div id="animacion3" className="services-card">
            <img src={pcGamerImage} id="animacion3" alt=""/>

            <div className="services-info_card">
                <h1>Reparación de computadoras</h1>
                <p>Cotización de arreglos informáticos.</p>
                <a href="/catalogue-repair"><button>Ir a ver</button></a>
            </div>
        </div>
    </div>

    <h1 className="h1-Qualities">Cualidades</h1>

    <div className="qualities">
        <div className="qualities-rowFirst">
            <div className="qualities-card_one" id="imagen1"><div className="titleCard-image"><h1>Los mas rápidos</h1></div></div>
            <div className="qualities-card_two" id="imagen2"><div className="titleCard-image"><h1>Expertos</h1></div></div>
        </div>
        <div className="qualities-rowSecond">
            <div className="qualities-card_three" id="imagen3"><div className="titleCard-image"><h1>Los mas efectivos</h1></div></div>
            <div className="qualities-card_four" id="imagen4"><div className="titleCard-image"><h1>Los mas accesibles</h1></div></div>
        </div>
    </div>

    <footer>
        <div className="contact-footer">
            <h3>A Mexican computer sales and repair company.</h3>
            <h2>Manzanillo, COL</h2>
            <p>Copyright 2020 Martín Serna. All Rights Reserved</p>
        </div>

        <div className="socialMedia">
            <ul>
                <li><a target="_blank" href="https://www.facebook.com/martin.sernadiaz">Facebook</a></li>
                <li><a target="_blank" href="https://www.instagram.com/mserna10/?hl=es-la">Instagram</a></li>
                <li><a target="_blank" href="https://github.com/MartinFitS">GitHub</a></li>
            </ul>
        </div>
    </footer>
    </div>
    )
}
export default Principal;