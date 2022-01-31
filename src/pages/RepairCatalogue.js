import React, {useState, useEffect} from "react";
import "../styles/RepairCatalogue.css";
import Card from "../components/Card";

const RepairCatalogue = () => {
    const url = "https://aeromax-api.herokuapp.com/all-products";
    const [products, setProducts] = useState();

    const fetchApi = async () =>{
        const response = await fetch(url);
        const responseJSON = await response.json();
        setProducts(responseJSON);
    }

    useEffect(()=>{
        fetchApi();
    },[]);
    let areThereProducts = !products;

    let filterCatalogueRepair = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="repair";
    }): [];

    return(
        <div>
        <header className="repairHeader">
        <a href="/catalogue-index">
                <div className="headerImageRepair">
                </div>
            </a>
            <h1>Repair</h1>
        </header>

        <div className="container_products-repair">
        <div className="div_products-repair">
                    {
                        filterCatalogueRepair.map(i=>
                            <Card
                                key={i._id}
                                {...i}
                            />
                        )
                    }
        </div>
        </div>

        <div className="contact-section">
            <div className="contact-div">
                <h1>If you have another problem, contact the technician directly</h1>
                <p>Send him a WhatsApp message directly with the button below. Where you explain in detail the problem of your equipment</p>
                <a target="_blank" href="https://wa.me/3143386885?text=Hola%20tengo%20un%20problema%20con%20mi%20computadora">Contact the technician</a>
            </div>
        </div>
    </div>
    )
}

export default RepairCatalogue;