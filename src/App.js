import { BrowserRouter as Router, Routes, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Chef from "./Components/Chef";
import Gallery from "./Components/Gallery";
import MeetTheChef from "./Components/MeetTheChef";
import MenuAppetizers from "./Components/MenuAppetizers";
import MenuDesserts from "./Components/MenuDesserts";
import MenuJuiceBar from "./Components/MenuJuiceBar";
import NearByFindUs from "./Components/NearByFindUs";
import Reservations from "./Components/Reservations";
import Sectionhero from "./Components/Sectionhero";
import Home from "./Components/Home";
import { Button, Card, Col, container, Row } from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
     <Header />
        <Routes>
        <Route exact path="/" element={<Home/>} />   
        <Route exact path="About" element={<About/>} />
        <Route exact path="Chef" element={<Chef/>} />
        </Routes>
   <Footer />
   </Router>
  );
}

export default App;
