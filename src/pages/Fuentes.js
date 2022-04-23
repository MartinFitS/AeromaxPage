import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Fuentes.css";

const Fuentes = () =>{
    const url = "http://localhost:3000/all-products";
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

    let filterFuentes = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="fdp" && i.show ==="yes";
    }): [];

    return(<div>
        <div className="containerAll_Fuentes">
                <a href="/">
                    <div className="headerFuentes">
                        <h1>Fuentes de poder</h1>
                    </div>
                </a>


                <div className="container_Fuentes">
                    <div className="products_Fuentes">
                        {
                            filterFuentes.map(i=>
                                <Card
                                    key={i._id}
                                    {...i}
                                />
                            )
                        }
                    </div>
                </div>       
            </div>
    </div>)
};

export default Fuentes;