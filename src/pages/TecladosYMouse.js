import react, { useEffect, useState } from "react";
import "../styles/TecladosYMouse.css";
import Card from "../components/Card";

const TecladosYMouse = () => {
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

    let filterTeclados = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="tcdsymos" && i.show ==="yes";
    }): [];

    return(
        <div className="containerAll_TyM">
            <a href="/">
                <div className="headerTyM">
                    <h1>Teclados y Mouse</h1>
                </div>
            </a>

            
            <div className="container_TyM">
                <div className="products_TyM">
                    {
                        filterTeclados.map(i=>
                            <Card
                                key={i._id}
                                {...i}
                            />
                        )
                    }
                </div>
            </div>       
        </div>
    );
};

export default TecladosYMouse;