import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Monitores.css"

const Monitores = () => {
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

    let filterMonitores = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="monitores" && i.show ==="yes";
    }): [];

    return(
        <div>
            <div className="containerAll_Monitores">
                <a href="/">
                    <div className="headerMonitores">
                        <h1>Monitores</h1>
                    </div>
                </a>


                <div className="container_Monitores">
                    <div className="products_Monitores">
                        {
                            filterMonitores.map(i=>
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

export default Monitores;