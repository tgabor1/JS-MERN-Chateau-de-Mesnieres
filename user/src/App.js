import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/common_components/Header";
import FooterAdmin from "./components/common_components/FooterAdmin";

// pages user
import Index from "./pages/user/pages/Index";
import ParcEtDomaine from "./pages/user/pages/ParcEtDomaine";
import LouerNosSalles from "./pages/user/pages/LouerNosSalles";

import Login from "./pages/admin/login/Login";
import LoginRecover from "./pages/admin/login/LoginRecover";
import LoginRecover2 from "./pages/admin/login/LoginRecover2";

import SelectionMenu from "./pages/admin/menu/SelectionMenu";

import ManageModerator from "./pages/admin/moderators/ManageModerator";
import CreateModerator from "./pages/admin/moderators/CreateModerator";
import EditModerator from "./pages/admin/moderators/EditModerator";

// articles & news
import PathEventNews from "./pages/admin/articles/PathEventNews";
import ManageEvents from "./pages/admin/articles/ManageEvents";
import CreateEvent from "./pages/admin/articles/CreateEvent";
import EditEvent from "./pages/admin/articles/EditEvent";
import ManageNews from "./pages/admin/articles/ManageNews";
import CreateNews from "./pages/admin/articles/CreateNews";
import EditNews from "./pages/admin/articles/EditNews";

// partners
import ManagePartners from "./pages/admin/partners/ManagePartners";
import EditPartner from "./pages/admin/partners/EditPartner";
import CreatePartner from "./pages/admin/partners/CreatePartner";

// partners
import ManageHire from "./pages/admin/hire/ManageHire";
import EditHire from "./pages/admin/hire/EditHire";
import CreateHire from "./pages/admin/hire/CreateHire";

// rent castle
import Visit from "./pages/admin/visit/Visit";

// bedrooms dorms and camping
import PathBedroomDormitory from "./pages/admin/accomodations/PathBedroomDormitory";
import ManageBedrooms from "./pages/admin/accomodations/ManageBedrooms";
import ManageDorms from "./pages/admin/accomodations/ManageDorms";

// rent rooms
import ManageRooms from "./pages/admin/rentCastle/ManageRooms";

// food
import PathFood from "./pages/admin/food/PathFood";
import ManageCaterer from "./pages/admin/food/ManageCaterer";

function App() {
  // display differenet admin either header admin or header user
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* user */}
        <Route path="/" element={<Index />} />
        <Route path="ParcEtDomaine" element={<ParcEtDomaine />} />
        <Route path="LouerNosSalles" element={<LouerNosSalles />} />

        {/* admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/login_recover" element={<LoginRecover />} />
        <Route path="/admin/login_recover_userDB" element={<LoginRecover2 />} />

        {/* menu */}
        <Route path="admin/selection_menu" element={<SelectionMenu />} />

        {/* moderators */}
        <Route path="admin/manage_moderator" element={<ManageModerator />} />
        <Route path="/admin/create_moderator" element={<CreateModerator />} />
        <Route path="/admin/edit_moderator" element={<EditModerator />} />

        {/* articles & news */}
        <Route path="admin/path_events&news" element={<PathEventNews />} />
        <Route path="admin/manage_events" element={<ManageEvents />} />
        <Route path="admin/edit_event" element={<EditEvent />} />
        <Route path="admin/create_event" element={<CreateEvent />} />
        <Route path="admin/manage_news" element={<ManageNews />} />
        <Route path="admin/create_news" element={<CreateNews />} />
        <Route path="admin/edit_news" element={<EditNews />} />

        {/* partners */}
        <Route path="admin/manage_partners" element={<ManagePartners />} />
        <Route path="admin/create_partner" element={<CreatePartner />} />
        <Route path="admin/edit_partner" element={<EditPartner />} />

        {/* hire */}
        <Route path="admin/manage_hire" element={<ManageHire />} />
        <Route path="admin/create_hire" element={<CreateHire />} />
        <Route path="admin/edit_hire" element={<EditHire />} />

        {/* visit */}
        <Route path="admin/visit_castle" element={<Visit />} />

        {/* bedrooms dorms and camping */}
        <Route path="admin/path_bedroom&dormitory" element={<PathBedroomDormitory />} />
        <Route path="admin/manage_bedrooms" element={<ManageBedrooms />} />
        <Route path="admin/manage_dorms_and_camping" element={<ManageDorms />} />

        {/* rent rooms */}
        <Route path="admin/rent_rooms" element={<ManageRooms />} />

        {/* food */}
        <Route path="admin/path_food" element={<PathFood />} />
        <Route path="admin/manage_caterer" element={<ManageCaterer />} />
      </Routes>
      <FooterAdmin />
    </BrowserRouter>
  );
}

export default App;