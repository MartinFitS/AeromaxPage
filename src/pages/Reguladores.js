import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Reguladores.css";

const Reguladores = () => {
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

    let filterReguladores = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="reguladores" && i.show ==="yes";
    }): [];
    return(
    <div>
        <div className="containerAll_Reguladores">
                <a href="/">
                    <div className="headerReguladores">
                        <h1>Reguladores</h1>
                    </div>
                </a>


                <div className="container_Reguladores">
                    <div className="products_Reguladores">
                        {
                            filterReguladores.map(i=>
                                <Card
                                    key={i._id}
                                    {...i}
                                />
                            )
                        }
                    </div>
                </div>       
            </div>
    </div>
    )
}

export default Reguladores;