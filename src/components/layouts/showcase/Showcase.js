import React from "react";
import './showcase.styles.css'
import Navbar from "../navbar/Navbar";
import SearchInputForm from "../../forms/searchInputForm/SearchInputForm";

const Showcase = () => {
    return (
        <section className="showcase-container">
            <Navbar darkTheme={false}/>
            
            <div className="overlay"></div>
            <div className="showcase-content">
                <h1>top <span className="text-primary">Libros </span>Disponibles</h1>
                <p>Tenemos la mejor seleccion de libros a un click</p>
                
                <SearchInputForm darkTheme={ true }/>
            </div>
        </section>
    )
}

export default Showcase;