import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
  return (
    <section className="App">
      <Navbar />
      <Home />
      <About />
    </section>
  );
}

export default App;
