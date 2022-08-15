import React from "react";
import "./Featured.scss";
import logo from "../../assets/marko.png";
const Featured = () => {
    return (
        <div className="featured-containers">
            <div className="featured-container">
                <div className="featured-container-wrapper">
                    <div>Featured on:</div>
                    <a
                        href="https://sceka-movies.herokuapp.com/"
                        className="scekaMovies"
                    >
                        scekaMovies
                    </a>
                    <div className="marko-wrapper">
                        <a
                            href="https://www.markoscekic.com"
                            className="scekaMovies"
                        >
                            <img src={logo} className="marko" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
