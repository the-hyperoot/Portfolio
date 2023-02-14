/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
    RiMenu5Fill,
    RiArrowDownSLine,
    RiFileList2Line,
    RiBriefcaseLine,
    RiStackLine,
    RiBallPenLine,
    RiMailLine,
} from "react-icons/ri";

import { ReactComponent as Logo } from "./../images/logo.svg";

export default function Overlay(props) {
    // ! Menu Toggle
    const [openMenu, setOpenMenu] = useState(true);
    const [showDivs, setShowDivs] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    // ! In-page Navigation
    const scrollToSection = (elementref) => {
        window.scrollTo({
            top: elementref.current.offsetTop,
            behavior: "smooth",
        });
    };

    // ! Return
    return (
        <>
            <div className="overlay">

                <div className="logo-container">
                    <button className="logo-button" onClick={() => scrollToSection(props.home)}>
                        <Logo />
                    </button>
                </div>

                <div className="nav-container">
                    <div className="nav-items">
                        <button
                            className="nav-button"
                            onClick={() => setShowDivs(!showDivs)}
                        >
                            <RiMenu5Fill className="nav-icon" />
                        </button>
                    </div>
                    <div
                        className={`nav-items ${showDivs ? " show" : "hide"}`}
                        onClick={() => scrollToSection(props.experience)}
                    >
                        <button className="nav-button">
                            <RiBriefcaseLine className="nav-icon" />
                        </button>
                        <div className="nav-item-text">Experience</div>
                    </div>
                    <div
                        className={`nav-items ${showDivs ? " show" : "hide"}`}
                        onClick={() => scrollToSection(props.project)}
                    >
                        <button className="nav-button">
                            <RiStackLine className="nav-icon" />
                        </button>
                        <div className="nav-item-text">Project</div>
                    </div>
                    <div
                        className={`nav-items ${showDivs ? " show" : "hide"}`}
                        onClick={() => scrollToSection(props.blog)}
                    >
                        <button className="nav-button">
                            <RiBallPenLine className="nav-icon" />
                        </button>
                        <div className="nav-item-text">Blog</div>
                    </div>
                    <div
                        className={`nav-items ${showDivs ? " show" : "hide"}`}
                        onClick={() => scrollToSection(props.contact)}
                    >
                        <button className="nav-button">
                            <RiMailLine className="nav-icon" />
                        </button>
                        <div className="nav-item-text">Contact</div>
                    </div>
                </div>

                <div className="next-section-container">
                    <button className="next-section-button" onClick={() => scrollToSection(props.home)}>
                        <RiArrowDownSLine className="next-section-icon" />
                    </button>
                </div>

                <div className="blog-container">
                    <button className="blog-button" onClick={() => scrollToSection(props.blog)}>
                        <RiFileList2Line className="blog-icon" />
                    </button>
                </div>
            </div>
        </>
    );
}
