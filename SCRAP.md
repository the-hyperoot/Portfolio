```css
.overlay {
    z-index: 10;
    position: fixed;
    width: 100vw;
    height: 100vh;
}

/* !Logo [top-left] */

.logo-container {
    position: absolute;
    width: 3rem;
    height: 3rem;
    top: 5vh;
    left: 7.5vw;
}

.logo-button {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 25%;
    fill: var(--COLOR_TEXT);
    color: var(--COLOR_TEXT);
    border-style: solid;
    border-width: 2px;
}

.logo-button:hover {
    fill: var(--COLOR_PRIMARY);
    color: var(--COLOR_PRIMARY);
}

/* !Nav Menu [top-right] */

.nav-container {
    position: absolute;
    top: 5vh;
    right: 7.5vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.nav-items {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: right;
    border-style: solid;
    border-width: 2px;
    margin-bottom: 0.5rem;
}

.hide {
    transition: all 300ms ease-in-out;
    opacity: 0;
    visibility: hidden;
}

.show {
    visibility: visible;
    opacity: 1;
}

.nav-button {
    width: 3rem;
    height: 3rem;
}

.nav-icon {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 25%;
    color: var(--COLOR_TEXT);
}

.nav-item-text {
    color: var(--COLOR_PRIMARY);
    padding: 0.5rem;
    display: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
}

.nav-items:hover {
    color: var(--COLOR_PRIMARY);
}

.nav-items:hover .nav-icon {
    color: var(--COLOR_PRIMARY);
}

.nav-items:hover .nav-item-text {
    display: inline-block;
}

/* !Next Section [bottom-left] */

.next-section-container {
    position: absolute;
    width: 3rem;
    height: 3rem;
    bottom: 5vh;
    left: 7.5vw;
}

.next-section-button {
    width: 100%;
    height: 100%;
    padding: 25%;
    position: relative;
    color: var(--COLOR_TEXT);
    border-style: solid;
    border-width: 2px;
}

.next-section-icon {
    width: 100%;
    height: 100%;
}

.next-section-button:hover {
    color: var(--COLOR_PRIMARY);
}

/* !Blog [bottom-right] */

.blog-container {
    position: absolute;
    width: 3rem;
    height: 3rem;
    bottom: 5vh;
    right: 7.5vw;
}

.blog-button {
    width: 100%;
    height: 100%;
    padding: 25%;
    position: relative;
    color: var(--COLOR_TEXT);
    border-style: solid;
    border-width: 2px;
}

.blog-icon {
    width: 100%;
    height: 100%;
}

.blog-button:hover {
    color: var(--COLOR_PRIMARY);
}
```



```jsx
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
```


App.jsx
```jsx
import { useRef } from "react";

import "./css/app.css";

import Overlay from "./components/overlay";
import Homepage from "./components/homepage";
import Experience from "./components/experience";
import Project from "./components/project";
import Blog from "./components/blog";
import Contact from "./components/contact";


export default function App() {
  // ! In-page Navigation
  const home = useRef(null);
  const experience = useRef(null);
  const project = useRef(null);
  const blog = useRef(null);
  const contact = useRef(null);

  // ! Return
  return (
    <div className="app">
      <Overlay
        home={home}
        experience={experience}
        project={project}
        blog={blog}
        contact={contact}
      />

      <div className="section" ref={home}>
        <Homepage />
      </div>
      <div className="section" ref={experience}>
        <Experience />
      </div>
      <div className="section" ref={project}>
        <Project />
      </div>
      <div className="section" ref={blog}>
        <Blog />
      </div>
      <div className="section" ref={contact}>
        <Contact />
      </div>
    </div>
  );
}
```