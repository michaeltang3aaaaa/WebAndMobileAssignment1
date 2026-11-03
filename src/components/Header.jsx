import {BrowserRouter, Routes, Link, Route} from "react-router-dom";
import "./Header.css";
import city from "../images/homeCity.jpg";
import nature from "../images/homeNature.jpg";

function AppHeader() {
    return(
        <div>
            <div id="AppHeader">
                <h1>Explore Malaysia</h1>
                <h3>Discover Malaysia, Create Memories.</h3>

                <ul className="navigation">
                    <li><a href="#home_introduce_container">Home</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <section className="home_introduce_container">
                <div className="introduce_image_container">
                    <img class="img1" src={city} alt="City" />
                    <img class="img2" src={nature} alt="Nature" />
                </div>

                <div className="introduce_word_container">
                    <p> <strong>Why us?</strong><br/> Looking for a travel agency? We offer excellent services, carefully planned itineraries, and a variety of travel packages to suit different interests and budgets. Whether you are travelling with family, friends, or on your own, we aim to make every journey comfortable and memorable. </p>

                    <p> From beautiful beaches and breathtaking natural landscapes to vibrant cities and rich cultural heritage, every corner of Malaysia has something special to offer. Explore local cuisines, discover hidden gems, and create unforgettable memories with us! </p>
                </div>
            </section>
        </div>
    );
}
export default AppHeader; 