import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/_1_header";
import Banner from "./components/_2_banner";
import About from "./components/_3_about";
import Skills from "./components/_4_skills";
import Projects from "./components/_5_projects";
import Contact from "./components/_6_contact";
import Footer from "./components/_7_footer";

// pages
import Calculator from "./pages/calculator";
import TodoList from "./pages/TodoList";
import WeatherApp from "./pages/WeatherApp";



function App() {
  return (
    <Router>
      <div className="font-sans bg-[#0F172A] text-white scroll-smooth">
        <Routes>
          {/* main portfolio page */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Banner />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Individual project pages */}
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/weather-app" element={<WeatherApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
