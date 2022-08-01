import React from "react"
import { Featured } from "../../components/featured/Featured";
import { FeaturedProperties } from "../../components/featuredProperties/FeaturedProperties.jsx";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { PropertyList } from "../../components/propertyList/PropertyList";
import "./home.css"
const Home=()=>{
    return(
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="homeContainer">
            <Featured></Featured>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList></PropertyList>
            <h1 className="homeTitle">Featured</h1>
            <FeaturedProperties></FeaturedProperties>
            </div>
        </div>
    )
}

export default Home;