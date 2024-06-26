import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mid from "./components/Mid";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <Header onHome />
      <Hero />
      <Mid />
      <Events />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
