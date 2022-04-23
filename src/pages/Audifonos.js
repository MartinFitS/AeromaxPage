import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Audifonos.css"


const Audifonos = () => {
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

    let filterAudifonos = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="audifonos" && i.show ==="yes";
    }): [];

    return(
        <div>
            <div className="containerAll_Audifonos">
                <a href="/">
                    <div className="headerAudifonos">
                        <h1>Audífonos y diademas</h1>
                    </div>
                </a>


                <div className="container_Audifonos">
                    <div className="products_Audifonos">
                        {
                            filterAudifonos.map(i=>
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

export default Audifonos;