import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Key from "./components/Key";
import Review from "./components/Review";
import { Reviews } from "./data";
import Features from "./components/Features";
import Cta from "./components/Cta";
function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Key />
      <Review reviews={Reviews} />
      <Features />
      <Cta />
    </div>
  );
}

export default App;
