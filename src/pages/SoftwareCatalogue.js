import React, {useState, useEffect} from "react";
import "../styles/SoftwareCatalogue.css";
import Card from "../components/Card.js";

function SoftwareCatalogue() {
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

    let filterCatalogueSoftware = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="software";
    }): [];

    console.log(filterCatalogueSoftware);

    return(
        <div>
            <header className="softwareHeader">
            <a href="/">
                    <div className="headerImagesoftware">
                    </div>
                </a>
                <h1>Software</h1>
            </header>

            <div className="container_products-software">
                <div className="div_products-software">
                    {
                        filterCatalogueSoftware.map(i=>
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

export default SoftwareCatalogue;