import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Bocinas.css";

const Bocinas = () => {
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

    let filterBocinas = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="bocinas" && i.show ==="yes";
    }): [];

    return(<div>
         <div className="containerAll_Bocinas">
                <a href="/">
                    <div className="headerBocinas">
                        <h1>Bocinas</h1>
                    </div>
                </a>


                <div className="container_Bocinas">
                    <div className="products_Bocinas">
                        {
                            filterBocinas.map(i=>
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

export default Bocinas;