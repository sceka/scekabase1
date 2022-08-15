import React from "react";
import ChartSection from "../components/Chart/Chart";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import SignedInHeroSection from "../components/SignedInHeroSection/SignedInHeroSection";

const SignedInPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <ChartSection />
        </div>
    );
};

export default SignedInPage;
