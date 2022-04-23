import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/AllProducts.css"

const AllProducts = () => {
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

    return(
        <div>
            <div className="containerAll_todosLosProductos">
                <a href="/catalogo">
                    <div className="headertodosLosProductos">
                    </div>
                </a>


                <div className="container_todosLosProductos">
                    <div className="products_todosLosProductos">
                        {
                            areThereProducts === false ?  products.map(i=>
                                <Card
                                    key={i._id}
                                    {...i}
                                />):null
                        }
                    </div>
                </div>       
            </div>
        </div>
    )
};

export default AllProducts;