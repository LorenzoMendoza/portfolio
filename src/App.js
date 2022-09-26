import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
