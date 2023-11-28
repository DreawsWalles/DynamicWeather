import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import {MainPage} from "./Screens/MainPage";
import {View} from "./Screens/View";
import {Load} from "./Screens/Load";
function App() {
    return(
         <Router>
           <Routes>
               <Route path="/" element={<MainPage />}></Route>
               <Route path={"/view"} element={<View />}></Route>
               <Route path={"/load"} element={<Load />}></Route>
           </Routes>
         </Router>
    )
}

export default App;
