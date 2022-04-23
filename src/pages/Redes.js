import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Redes.css";

const Redes = () =>{
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

    let filterRedes = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="redes" && i.show ==="yes";
    }): [];

    return(
        <div>
            <div className="containerAll_Redes">
                <a href="/">
                    <div className="headerRedes">
                        <h1>Redes</h1>
                    </div>
                </a>


                <div className="container_Redes">
                    <div className="products_Redes">
                        {
                            filterRedes.map(i=>
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

export default Redes;