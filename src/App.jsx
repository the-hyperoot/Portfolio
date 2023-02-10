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
