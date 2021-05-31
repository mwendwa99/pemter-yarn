import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import Service from './Components/ServicePage/Service';
import About from './Components/About/About';
// import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <section className="App">
      <Router>
        {/* <ScrollToTop /> */}
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/service" exact component={Service} />
        </Switch>
      </Router>
    </section>
  );
}

export default App;
