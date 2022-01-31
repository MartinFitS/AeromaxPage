import React from "react";
import "../styles/NotFound.css"

const NotFound = () => {
    return(
        <div className="index-404">
            <div className="div-404">
                <div className="h1-404">
                    <h1>404</h1>
                </div>
                <div className="h2-404">
                    <h2>Not Found</h2>
                </div>
                <div className="p-404">
                    <p>The resource requested could not be found on this server!</p>
                </div>
                <div className="btn-404">
                    <a href="/">Return to Aeromax</a>
                </div>
            </div>
        </div>
    )
}

export default NotFound;