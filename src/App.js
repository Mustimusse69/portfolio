import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/HomeCenter';
import Galleri from './components/Galleri/GalleriCenter';
import About from './components/About/AboutCenter';


function App() {
  return (
   
    <BrowserRouter>

      <div className="App">

        <Navbar />

        <Switch>
          <Route path="/Home" exact component={() => <Home  />} />
          <Route path="/Galleri" component={Galleri} />
          <Route path="/About" component={About} />
          
        </Switch>

        <Footer />

      </div>

    </BrowserRouter>
 
  );
}

export default App;
