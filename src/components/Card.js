import React from "react";
import "../styles/Card.css"
const Card = (props)=>{

    const {price, img, nameOfProduct} = props;

    return(
        <React.Fragment>
      

                <div className="card-products">
                    <img src={img} alt=""/>
                    <div className="card-products_content">
                        <h3>{nameOfProduct}</h3>
                        <h4>{price}$</h4>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Card;