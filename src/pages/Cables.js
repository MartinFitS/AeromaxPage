import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Cables.css";

const Cables = () => {
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

    let filterCables = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="cables" && i.show ==="yes";
    }): [];
    return(
        <div>
            <div className="containerAll_Cables">
                <a href="/">
                    <div className="headerCables">
                        <h1>Cables</h1>
                    </div>
                </a>


                <div className="container_Cables">
                    <div className="products_Cables">
                        {
                            filterCables.map(i=>
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

export default Cables;