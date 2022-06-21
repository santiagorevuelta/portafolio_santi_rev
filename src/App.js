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


function App() {
  
  return (
    <div className="App">
      {/* <!--=============== HEADER ===============--> */}
        <HeaderLayout></HeaderLayout>
        {/* <!--=============== MAIN ===============--> */}
        <main className="main">
            {/* <!--=============== HOME ===============--> */}
            <HomeLayout></HomeLayout>
            {/* <!--=============== ABOUT ===============--> */}            
            <AboutLayout></AboutLayout>
            {/* <!--=============== SKILLS ===============--> */}
            <SkillLayout></SkillLayout>
            {/* <!--=============== SERVICES ===============--> */}
            <ServiceLayout></ServiceLayout>            
            {/* <!--=============== WORK ===============--> */}
            <WorkLayout></WorkLayout>
            {/* <!--=============== TESTIMONIALS ===============--> */}            
            {/* <TestimonialLayout></TestimonialLayout> */}
            {/* <!--=============== CONTACT ===============--> */}
            <ContactLayout></ContactLayout>
        </main>
        {/* <!--=============== FOOTER ===============--> */}
        <FooterLayout></FooterLayout>
    </div>
  );
}

export default App;
