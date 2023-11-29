import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import {MainPage} from "../Screens/MainPage/MainPage";
import {View} from "../Screens/View";
import {Load} from "../Screens/Load/Load";
export function Routing(){
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