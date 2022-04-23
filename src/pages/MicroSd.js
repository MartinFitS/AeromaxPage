import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/MicroSd.css";

const MicroSd = () => {
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

    let filterMicro = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="microsd" && i.show ==="yes";
    }): [];

    return(<div>
        <div className="containerAll_Micro">
                <a href="/">
                    <div className="headerMicro">
                        <h1>Micro</h1>
                    </div>
                </a>


                <div className="container_Micro">
                    <div className="products_Micro">
                        {
                            filterMicro.map(i=>
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

export default MicroSd;