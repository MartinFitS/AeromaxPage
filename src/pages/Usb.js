import react, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../styles/Usb.css";

const Usb = () => {
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

    let filterUsb = areThereProducts === false ? products.filter((i)=>{
        return i.category ==="usb" && i.show ==="yes";
    }): [];
    
    return(
        <div>
             <div className="containerAll_Usb">
                <a href="/">
                    <div className="headerUsb">
                        <h1>Memorias Usb</h1>
                    </div>
                </a>


                <div className="container_Usb">
                    <div className="products_Usb">
                        {
                            filterUsb.map(i=>
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

export default Usb;