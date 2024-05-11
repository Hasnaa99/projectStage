import { Route } from "react-router-dom";
import Acceuil from "../pages/PageAcceuil/Acceuil";
import Sociale from "../pages/Sociale/Sociale";
import Medical from "../pages/Medical/Medical";
import DemandeAttest from "../pages/Sociale/DemandeAttest";
import DemandeConge from './../pages/Sociale/Demandecong';
import DemandeAbsence from './../pages/Sociale/Absence';
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import ListHotelS from "../pages/Sociale/Voyage";
import ListHotelSFamille from "../pages/Sociale/VoyageFami";
import InscriptionForm from "../pages/PageAcceuil/InscritEvent";


const routes = [
    
        {path:'/',element:<Acceuil/>},
        { path: "/sociale", element: <Sociale/> },
        {path:'/administrative' , element:<AdminDashboard/>},
        { path: "/medical", element: <Medical/> },
        { path: "/voyage", element: <ListHotelS/> },
        { path: "/voyageFamille", element: <ListHotelSFamille/> },
        { path: "/demandeAttestation", element: <DemandeAttest/> },
        { path: "/demandeConge", element: <DemandeConge/> },
        { path: "/demandeAbsence", element: <DemandeAbsence/> },
        { path: "/inscriEvent/:eventId", element: <InscriptionForm/> },
    ] 
    
;
const router = routes.map((route, index) => (
  <Route key={index} path={route.path} element={route.element} />
));

export default router;
