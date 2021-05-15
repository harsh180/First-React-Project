import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Signup from './components/Signup'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Time from './components/Time';
import Programming from './components/Programming';
import Business from './components/Business';
import FL from './components/FL';
import LAW from './components/LAW';
import Maths from './components/Maths';
import Biotechnology from './components/Biotechnology';
import Physcology from './components/Physcology';
import Magzine from './components/Magzine';
import Question from './components/Question';
import BBa from './components/BBa';
import BSC from './components/BSC';
import ASCO from './components/ASCO';
import Student from './components/Student';
import About from './components/About';

ReactDOM.render(
  
    <Router>
      <Route exact path="/" component={App}/>
      <Route path ="/Time" component={Time}/>
      <Route path ="/Stud" component={Student}/>
      <Route path="/Signup" component={Signup}/>
      <Route path="/programming" component={Programming}/>
      <Route path="/business" component={Business}/>
       <Route path="/FL" component={FL}/>
      <Route path="/LAW" component={LAW}/>
      <Route path="/mathematics" component={Maths}/>
      <Route path="/Biotech" component={Biotechnology}/>
      <Route path="/phys" component={Physcology}/> 
      <Route path="/QP"   component={Question}/>
      <Route path="/Magzine" component={Magzine}/>
      <Route path="/ASCO"   component={ASCO}/>
      <Route path="/BBa" component={BBa}/>
      <Route path="/BSC" component={BSC}/>
      <Route path="/About" component={About}/>
    </Router>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
