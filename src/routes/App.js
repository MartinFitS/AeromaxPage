import "../styles/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "../pages/PrincipalPage";
import CatalogueIndex from "../pages/CatalogueIndex";
import SoftwareCatalogue from "../pages/SoftwareCatalogue";
import RepairCatalogue from "../pages/RepairCatalogue";
import TecladosYMouse from "../pages/TecladosYMouse";
import Audifonos from "../pages/Audifonos";
import Usb from "../pages/Usb";
import MicroSd from "../pages/MicroSd";
import Monitores from "../pages/Monitores";
import Bocinas from "../pages/Bocinas";
import Tintas from "../pages/Tintas";
import Cables from "../pages/Cables";
import Redes from "../pages/Redes";
import Reguladores from "../pages/Reguladores";
import Fuentes from "../pages/Fuentes";
import Catalogo from "../pages/Catalogo";
import AllProducts from "../pages/AllProducts";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Principal/>}/>
        <Route exact path="/catalogue-index" element={<CatalogueIndex/>}/>
        <Route exact path="/catalogue-software" element={<SoftwareCatalogue/>}/>
        <Route exact path="/catalogue-repair" element={<RepairCatalogue/>}/>
        <Route exact path="/tecladosYMouse" element={<TecladosYMouse/>}/>
        <Route exact path="/monitores" element={<Monitores/>}/>
        <Route exact path="/audifonos" element={<Audifonos/>}/>
        <Route exact path="/usb" element={<Usb/>}/>
        <Route exact path="/microsd" element={<MicroSd/>}/>
        <Route exact path="/bocinas" element={<Bocinas/>}/>
        <Route exact path="/tintasytoners" element={<Tintas/>}/>
        <Route exact path="/cables" element={<Cables/>}/>
        <Route exact path="/redes" element={<Redes/>}/>
        <Route exact path="/fuentes" element={<Fuentes/>}/>
        <Route exact path="/regulador" element={<Reguladores/>}/>
        <Route exact path="/catalogo" element={<Catalogo/>}/>
        <Route exact path="/all-products" element={<AllProducts/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
