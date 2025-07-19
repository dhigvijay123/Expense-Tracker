import React from "react"
import { useNavigate } from "react-router-dom";
import "./Home.css"
export default function Home() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate("/login");
    }
    const handleSignupClick = () => {
        navigate("/signup");

    }
    return (
        <div className="home">
            <div className="navigator-container">
                <div className="logo">
                    CredTrack
                </div>
                <div className="actions-container">
                    <div className="login" onClick={handleLoginClick}>
                        Login
                    </div>
                    <div className="signup" onClick={handleSignupClick}>
                        Signup
                    </div>
                </div>
            </div>
            <div className="about">
                <section className="video-section">
                    <video className="background-video" width="100%" height="450" src="https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/hero-desktop.mp4?tr=q-95"type="video/mp4"autoPlay muted loop></video>
                    <div className="overlay-text">
                        <div className="overview">Crafted for Cashflow Clarity</div>
                        <div className="tagline">See, Sort, and Strategize all in one glance</div>
                    </div>
                </section>
            </div>
        </div>
    )
}