import React from 'react';
 import Landing from './components/Landing';
  import Contact from './components/Contact';

import './App.css';
 import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <main>
      <Route exact path="/" component={Landing} />
           <Route path="/contact" component={Contact} />
        </main>
    </div>
  );
}

export default App;
