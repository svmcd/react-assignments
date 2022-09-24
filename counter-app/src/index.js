//import React
import React from "react";
//import ReactDOM
import ReactDOM from "react-dom/client";
//import App
import App from "./App/app"
//variable connected to the html element root
const root = ReactDOM.createRoot(document.getElementById('root'));
//render the variable
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);