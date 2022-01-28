import React from "react";
import "../styles/CatalogueIndex.css"
import hardwarePcCatalogue from "../img/hardwarePcCatalogue.png";
import softwareInstalation from "../img/softwareInstalation.png";
import repair from "../img/repair.png";

const CatalogueIndex = () => {
    return(
        <div>
        <header class="Principalcatalogue">
            <div class="imageCatalogueHeader"><h1>Principal Catalogue</h1></div>
        </header>

        <div class="catalogueContendDiv">
        
            <div class="catalogueContentDivCenter">
                <h1>Services</h1>
                <p>Catalog of all the services provided by AEROMAX from the sale of hardware, software to repairs.</p>
                <div class="divCardsCatalogue">
                    <a href="/catalogue-hardware" id="animacionCatalogueHardware">
                        <div class="cardCatalogue">
                            <img src={hardwarePcCatalogue} alt=""/>
                            <h3>Hardware Sales</h3>
                        </div>
                    </a>

                    <a href="/catalogue-software" id="animacionCatalogueSoftware">
                        <div class="cardCatalogue">
                            <img src={softwareInstalation} alt=""/>
                            <h3>Software Instalation</h3>
                        </div>
                    </a>

                    <a href="/catalogue-repair" id="animacionCatalogueRepair">
                        <div class="cardCatalogue">
                            <img src={repair} alt=""/>
                            <h3>Computer repair</h3>
                        </div>
                    </a>
                </div>
            </div>        
        </div>
    </div>
    );
}

export default CatalogueIndex;