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

function App() {
  return (
    <Router>
     <Header />
        <Routes>
        <Route exact path="/" element={<Home/>} />   
        </Routes>
   <Footer />
   </Router>
  );
}

export default App;
