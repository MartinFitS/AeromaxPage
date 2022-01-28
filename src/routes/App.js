import "../styles/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "../pages/PrincipalPage";
import CatalogueIndex from "../pages/CatalogueIndex";
import SoftwareCatalogue from "../pages/SoftwareCatalogue";
import HardwareCatalogue from "../pages/HardwareCatalogue";
import RepairCatalogue from "../pages/RepairCatalogue";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Principal/>}/>
        <Route exact path="/catalogue-index" element={<CatalogueIndex/>}/>
        <Route exact path="/catalogue-hardware" element={<HardwareCatalogue/>}/>
        <Route exact path="/catalogue-software" element={<SoftwareCatalogue/>}/>
        <Route exact path="/catalogue-repair" element={<RepairCatalogue/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
