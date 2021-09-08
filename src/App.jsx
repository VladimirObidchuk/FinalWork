import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Event from "./components/event/Event";
import ProductSection from "./components/ProductSection/ProductSection";
import Advantages from "./components/advantages/Advantages";
import Subscrible from "./components/subscrible/Subscrible";
import Tabs from "./components/Tabs/Tabs";
import AboutUs from "./components/aboutUs/AboutUs";
import MoreInfo from "./components/moreInfo/MoreInfo";
import Statistic from "./components/statistic/Statistic";
import PoductsWork from "./components/productWork/ProductWork";
import Contact from "./components/contact/Contact";
import "./App.scss";
import Login from "./components/login/Login";

const ourProducts = [
  "BG_card10.png",
  "BG_card11.png",
  "BG_card12.png",
  "BG_card13.png",
  "BG_card14.png",
  "BG_card15.png",
  "BG_card16.png",
  "BG_card17.png",
  "BG_card18.png",
];

const topSales = [
  "BG_card1.png",
  "BG_card2.png",
  "BG_card3.png",
  "BG_card4.png",
  "BG_card5.png",
  "BG_card6.png",
  "BG_card7.png",
  "BG_card8.png",
  "BG_card9.png",
];

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Header />
          <Tabs />
          <Event />
          <ProductSection title="Our Products" images={ourProducts} />
          <Subscrible />
          <ProductSection title="Top Sales" images={topSales} />
          <Advantages />
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
          <Advantages />
          <MoreInfo />
          <Statistic />
          <PoductsWork />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
