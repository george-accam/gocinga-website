import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import Seo from "./components/Seo";

function App() {
  return (
    <>
      <div className="bg-slate-100">
        <Router>
          <div className="pb-16">
            <Header />
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Seo
                    title="Home Page"
                    description="Welcome to our NGO website"
                  />
                  <HomePage />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Seo
                    title="About Us"
                    description="Learn more about our NGO"
                  />
                  <AboutUs />
                </>
              }
            />
            <Route
              path="/projects"
              element={
                <>
                  <Seo
                    title="Projects"
                    description="Our latest projects and initiatives"
                  />
                  <Projects />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Seo title="Contact Us" description="Get in touch with us" />
                  <ContactUs />
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
