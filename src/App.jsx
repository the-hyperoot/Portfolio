import "./css/app.css";
import Overlay from "./components/overlay";
import Homepage from "./components/homepage";

// eslint-disable-next-line no-unused-vars
import BlogRedirect from "./components/blog-redirect";

export default function App() {
  return (
    <div className="app">
      {/* <BlogRedirect /> */}

      <Overlay />
      <Homepage />
    </div>
  );
}