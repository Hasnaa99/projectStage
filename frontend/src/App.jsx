import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import React from "react";
import router from "./routes";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import Layout from './layouts/Layout';
import NotFound from './pages/NotFound';
import Login from './Login/Login';
function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route path="/administrative/*" element={<AdminDashboard />} />
          <Route element={<Layout />}>
            {router}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
