import Hero from "./components/hero/Hero";
import NavBar from "./components/navBar/NavBar";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Experiences from "./components/experiences/Experiences";
import Prices from "./components/prices/Prices";
import Contact from "./components/contacts/Contact";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Services />
            <Experiences />
            <Prices />
            <Contact />
        </>
    );
}

export default App;
