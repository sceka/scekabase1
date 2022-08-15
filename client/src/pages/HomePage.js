import React from "react";
import Featured from "../components/Featured/Featured";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";

const HomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <Featured />
        </>
    );
};

export default HomePage;
