import React, {useState, useEffect} from "react";
import "../styles/HardwareCatalogue.css"
import Card from "../components/Card.js";

const HardwareCatalogue = () => {
    const url = "https://aeromax-api.herokuapp.com/all-products";
    const [products, setProducts] = useState();

    const fetchApi = async () =>{
        const response = await fetch(url);
        const responseJSON = await response.json();
        setProducts(responseJSON);
    }

    useEffect(()=>{
        fetchApi();
    },[])

    let areThereProducts = !products;

    let filterCatalogueHardware = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="hardware";
    }): [];
    

    return(
        <div>
            <header className="hardwareHeader">
            <a href="/">
                    <div className="headerImageHardware">
                    </div>
                </a>
                <h1>Hardware</h1>
            </header>

            <div className="container_products-hardware">
            <div className="div_products-hardware">
                {
                    filterCatalogueHardware.map(i=>
                        <Card
                            key={i._id}
                            {...i}
                        />
                    )
                }
            </div>
            </div>
        </div>
    )
}

export default HardwareCatalogue;