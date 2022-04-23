import "../styles/Catalogo.css";
const Catalogo = () => {
    return(
        <div>  
            <div class="titulo_catalogo">
                <h1>Catálogo</h1>
            </div>

            <div class="menuContainer">
                <a href="/audifonos">
                    <div class="cardMenu primero">
                        <div className="cardmenuTitle">
                            <h1>Audífonos</h1>
                        </div>
                    </div>
                </a>
                <a href="/usb">
                    <div class="cardMenu segundo">
                        <div className="cardmenuTitle">
                            <h1>Usb</h1>
                        </div>
                    </div>
                </a>
                <a href="/microsd">
                    <div class="cardMenu tercera">
                    <div className="cardmenuTitle">
                            <h1>Micro Sd</h1>
                        </div>
                    </div>
                </a>
                <a href="/tecladosYMouse">
                    <div class="cardMenu cuarta">
                        <div className="cardmenuTitle">
                        <h1>Teclados Y Mouse</h1>
                        </div>
                    </div>
                </a>
                <a href="/monitores">
                    <div class="cardMenu five">
                    <div className="cardmenuTitle">
                        <h1>Monitores</h1>
                        </div>
                    </div>
                </a>

                <a href="/bocinas">
                    <div class="cardMenu six">
                    <div className="cardmenuTitle">
                        <h1>Bocinas</h1>
                        </div>
                    </div>
                </a>

                <a href="/tintasytoners">
                    <div class="cardMenu seven">
                    <div className="cardmenuTitle">
                        <h1>Tintas y Toners</h1>
                        </div>
                    </div>
                </a>

                <a href="/cables">
                    <div class="cardMenu eight">
                    <div className="cardmenuTitle">
                        <h1>Cables</h1>
                        </div>
                    </div>
                </a>

                <a href="/redes">
                    <div class="cardMenu nine">
                    <div className="cardmenuTitle">
                        <h1>Redes</h1>
                        </div>
                    </div>
                </a>
                <a href="/fuentes">
                    <div class="cardMenu ten">
                    <div className="cardmenuTitle">
                        <h1>Fuentes de poder</h1>
                        </div>
                    </div>
                </a>
                <a href="/regulador">
                    <div class="cardMenu eleven">
                    <div className="cardmenuTitle">
                        <h1>Reguladores</h1>
                        </div>
                    </div>
                </a>
                <a href="">
                    <div class="cardMenu twelve">
                    <div className="cardmenuTitle">
                        <h1>Todos Los Productos</h1>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Catalogo;