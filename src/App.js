import './App.css';
import HeaderLayout from './components/layouts/HeaderLayout/HeaderLayout';
import HomeLayout from './components/layouts/HomeLayout/HomeLayout';
import AboutLayout from './components/layouts/AboutLayout/AboutLayout';
import WorkLayout from './components/layouts/WorkLayout/WorkLayout';
import ServiceLayout from './components/layouts/ServiceLayout/ServiceLayout';
import TestimonialLayout from './components/layouts/TestimonialLayout/TestimonialLayout';
import ContactLayout from './components/layouts/ContactLayout/ContactLayout';
import FooterLayout from './components/layouts/FooterLayout/FooterLayout';
import SkillLayout from './components/layouts/SkillLayout/SkillLayout';
import Load from "./components/layouts/Load/Load";
import {useEffect, useState} from "react";


function App() {
    const [load, setLoad] = useState(false);
    window.cargarLoad = (state)=>{
        setLoad(state)
    }

  return (
    <div className="App">
      {/* <!--=============== HEADER ===============--> */}
        <HeaderLayout/>
        {/* <!--=============== MAIN ===============--> */}
        <main className="main">
            <Load load={load}/>
            {/* <!--=============== HOME ===============--> */}
            <HomeLayout/>
            {/* <!--=============== ABOUT ===============--> */}
            <AboutLayout/>
            {/* <!--=============== SKILLS ===============--> */}
            <SkillLayout/>
            {/* <!--=============== SERVICES ===============--> */}
            <ServiceLayout/>
            {/* <!--=============== WORK ===============--> */}
            {/*<WorkLayout/>*/}
            {/* <!--=============== TESTIMONIALS ===============--> */}
            {/*<TestimonialLayout/>*/}
            {/* <!--=============== CONTACT ===============--> */}
            <ContactLayout/>
        </main>
        {/* <!--=============== FOOTER ===============--> */}
        <FooterLayout/>
    </div>
  );
}

export default App;
