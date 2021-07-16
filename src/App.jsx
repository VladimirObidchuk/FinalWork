import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from './component/menu/Menu';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Event from './component/event/Event';
import Product from './component/product/Product';
import Advantages from "./component/advantages/Advantages";
import Subscrible from "./component/subscrible/Subscrible";
import Tabs from "./component/Tabs/Tabs";
import AboutUs from "./component/aboutUs/AboutUs";
import MoreInfo from "./component/moreInfo/MoreInfo";
import Statistic from "./component/statistic/Statistic";
import PoductsWork from "./component/productWork/ProductWork";
import Contact from "./component/contact/Contact";
import SaleProduct from "./component/saleProduct/SaleProduct";
import './App.scss';


function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/Home">
          <Header />
          <Tabs />
          <Event />
          <Product />
          <Subscrible />
          <SaleProduct />
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
