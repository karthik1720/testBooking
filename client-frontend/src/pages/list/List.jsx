import React from "react"
import Header from "../../components/header/Header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./list.css";
const List=()=>{
    return(
        <div>
         <Navbar></Navbar>
         <Header type="list"></Header>
         <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label htmlFor="">Destination</label>
                        <input type="text" className="text" />
                    </div>
                    <div className="lsItem">
                        <label htmlFor="">Check-in Date</label>
                    </div>
                </div>
                <div className="listResult"></div>
            </div>
         </div>
        </div>
    )
}

export default List;