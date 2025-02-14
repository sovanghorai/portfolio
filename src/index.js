import React from "react";
import  ReactDOM  from "react-dom";
import App from './App'
import './index.css'
import ReactGA from "react-ga4";

ReactGA.initialize("G-XTBM2WTEZR");
ReactGA.send({ 
    hitType: "pageview",
    page: window.location.pathname,
    title: "Home Page", 
    
});




ReactDOM.render(
<App/>,document.querySelector("#root")

)