import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import AddFood from "./pages/AddFood/AddFood.jsx";
import ListFood from "./pages/ListFood/ListFood.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Menubar from "./components/Menubar/Menubar.jsx";
import { ToastContainer } from 'react-toastify';


const App = () => {
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const toggleSideBAr = () => {
        setSidebarVisible(!sidebarVisible);
    }
    return (
        <div className="d-flex" id="wrapper">

            <Sidebar sidebarVisible={sidebarVisible} />

            <div id="page-content-wrapper">

                <Menubar toggleSideBAr={toggleSideBAr} />
                <ToastContainer/>

                <div className="container-fluid">
                    <Routes>
                        <Route path='/add' element={<AddFood/>}/>
                        <Route path='/list' element={<ListFood/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/' element={<ListFood/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;