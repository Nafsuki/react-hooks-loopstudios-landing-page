import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Careers from './components/Pages/Careers'
import Events from './components/Pages/Events'
import Products from './components/Pages/Products'
import Support from './components/Pages/Support'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/careers' exact component={Careers} />
          <Route path='/events' exact component={Events} />
          <Route path='/products' exact component={Products} />
          <Route path='/support' exact component={Support} />
        </Switch>
        <Footer />  
      </Router>
    </div>
  );
}

export default App;
