import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Tintas.css";

const Tintas = () =>{
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

    let filterTintas = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="tntsytnrs" && i.show ==="yes";
    }): [];

    return(<div>
        <div className="containerAll_Tintas">
                <a href="/">
                    <div className="headerTintas">
                        <h1>Tintas</h1>
                    </div>
                </a>


                <div className="container_Tintas">
                    <div className="products_Tintas">
                        {
                            filterTintas.map(i=>
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
}

export default Tintas;