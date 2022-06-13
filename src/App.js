import './App.scss';
import HeaderUp from "./components/header/HeaderUp";
import HeaderDown from "./components/header/HeaderDown";
import HistoryBlock from "./components/history/HistoryBlock";
import OftenOrderBlock from "./components/often_order/OftenOrderBlock";
import Main from "./components/main/Main";
import DeliverBlock from "./components/delivery/DeliverBlock";
import Footer from "./components/footer/Footer";
import SecretBuyer from "./components/footer/SecretBuyer";
// import {Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <HeaderUp/>
        <HeaderDown/>
        <HistoryBlock/>
        <OftenOrderBlock/>
        <Main/>
        <DeliverBlock/>
        <SecretBuyer/>
        <Footer/>
    </div>
  );
}

export default App;
