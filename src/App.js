import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Services from "./components/Services/services";
import Gallery from "./components/Gallery/gallery";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
