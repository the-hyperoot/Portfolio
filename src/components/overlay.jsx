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

export default function Overlay(props) {
    // ! Menu Toggle
    const [openMenu, setOpenMenu] = useState(true);
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
                <div className="Home" onClick={() => scrollToSection(props.home)}>
                    <button className="top-left flex-center overlay-button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2250 2250"
                            className="icon logo"
                        >
                            <path d="M523.665 0c-194.01 0-351.303 157.274-351.303 351.322h1101.94c178.129 0 322.306 148.288 315.508 327.895-6.471 170.889-152.281 303.564-323.266 303.564H656.113c-29.938 0-45.858 35.334-26.04 57.763l1010.72 1143.99h410.583c22.583 0 34.605-26.654 19.626-43.572l-716.932-811.584c336.517-40.269 596.874-332.12 587.023-681.483C1930.876 285.069 1625.45-.002 1262.49-.002H523.666Z" />
                            <path d="M189.261 2068.21c0 100.331 81.456 181.787 181.787 181.787s181.787-81.456 181.787-181.787-81.456-181.787-181.787-181.787-181.787 81.456-181.787 181.787Z" />
                        </svg>
                    </button>
                </div>
                <div>
                    <button
                        className="top-right flex-center overlay-button"
                        onClick={toggleMenu}
                    >
                        <RiMenu5Fill className="icon menu" />
                    </button>
                    <div className={openMenu ? "nav-menu" : "nav-menu nav-menu-show"}>
                        <ul>
                            <li
                                className="nav-items"
                                onClick={() => scrollToSection(props.experience)}
                            >
                                <button className="flex-center nav-item-button">
                                    <RiBriefcaseLine className="icon" />
                                </button>
                                <div className="nav-item-text">
                                    <h2>Experience</h2>
                                </div>
                            </li>
                            <li
                                className="nav-items"
                                onClick={() => scrollToSection(props.project)}
                            >
                                <button className="flex-center nav-item-button">
                                    <RiStackLine className="icon" />
                                </button>
                                <div className="nav-item-text">
                                    <h2>Project</h2>
                                </div>
                            </li>
                            <li
                                className="nav-items"
                                onClick={() => scrollToSection(props.blog)}
                            >
                                <button className="flex-center nav-item-button">
                                    <RiBallPenLine className="icon" />
                                </button>
                                <div className="nav-item-text">
                                    <h2>Blog</h2>
                                </div>
                            </li>
                            <li
                                className="nav-items"
                                onClick={() => scrollToSection(props.contact)}
                            >
                                <button className="flex-center nav-item-button">
                                    <RiMailLine className="icon" />
                                </button>
                                <div className="nav-item-text">
                                    <h2>Contact</h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button className="bottom-left flex-center overlay-button">
                        <RiArrowDownSLine className="icon" />
                    </button>
                </div>
                <div>
                    <button className="bottom-right flex-center overlay-button">
                        <RiFileList2Line className="icon" />
                    </button>
                </div>
            </div>
        </>
    );
}
