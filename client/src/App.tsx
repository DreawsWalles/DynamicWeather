import React from 'react';
import './App.css';
import {Routing} from "./Components/Routing";
import {Header} from "./Components/Header/Header";
function App() {
    return(
        <div>
            <Header />
            <Routing />
        </div>
    )
}

export default App;
