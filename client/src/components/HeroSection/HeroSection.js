import React from "react";
import "./HeroSection.scss";
import phone from "../../assets/phone.png";
import eth from "../../assets/eth1.png";
import bitcoin from "../../assets/bitcoin.png";
import lite from "../../assets/lite.png";
import piramid from "../../assets/piramid.png";
import circle from "../../assets/circle.png";
import cube from "../../assets/cube.png";
import spiral from "../../assets/spiral.png";
const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-section-text">
                <div className="hero-section-text-wrapper">
                    <div className="hero-section-title">
                        Earn up to 5.7% APY interest from your crypto assets
                    </div>
                    <div className="hero-section-desc">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        amet diam in est pharetra porttitor libero netus nulla
                        tempor cont.
                    </div>
                </div>
                <div className="hero-section-buttons">
                    <button className="hero-section-button">Get started</button>
                    <button className="hero-section-second-button">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="hero-section-image">
                <div>
                    <img src={phone} className="phone" alt="phone" />
                    <img src={eth} className="eth" alt="ethereum" />
                    <img src={bitcoin} className="btc" alt="bitcoin" />
                    <img src={lite} className="lite" alt="lite" />
                    <img src={spiral} className="spiral" alt="spiral" />
                    <img src={piramid} className="piramid" alt="piramid" />
                    <img src={circle} className="circle" alt="circle" />
                    <img src={cube} className="cube" alt="cube" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
