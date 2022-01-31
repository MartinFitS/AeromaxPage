import "../styles/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Principal from "../pages/PrincipalPage";
import CatalogueIndex from "../pages/CatalogueIndex";
import SoftwareCatalogue from "../pages/SoftwareCatalogue";
import HardwareCatalogue from "../pages/HardwareCatalogue";
import RepairCatalogue from "../pages/RepairCatalogue";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Principal/>}/>
        <Route exact path="/catalogue-index" element={<CatalogueIndex/>}/>
        <Route exact path="/catalogue-hardware" element={<HardwareCatalogue/>}/>
        <Route exact path="/catalogue-software" element={<SoftwareCatalogue/>}/>
        <Route exact path="/catalogue-repair" element={<RepairCatalogue/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
