import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import AddContact from "../components/AddContact";
import EditContact from "../components/EditContact";
import ContactDetail from "../components/ContactDetail";
import ContactList from "../components/ContactList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/add" element={<AddContact />} />
      <Route path="/detail/:id" element={<ContactDetail />} />
      <Route path="/edit/:id" element={<EditContact />} />
    </Routes>
  );
};

export default MainRoutes;
