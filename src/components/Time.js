import {Link} from 'react-router-dom';
import React from 'react';

import './Style1.css';

function Time() {
  return (
    <div>
      <div className="navbar">
       <button> <Link to ="/Stud" style={{color:'#FFF'}}>Student info</Link></button>
       <button><Link to="/About" style={{ color:'#FFF'}}>About...</Link></button>
       
      </div>
      
      <div className="CSS-grid">
                  <button className="butt"><Link to ="/Biotech" style={{color:'#FFF'}}>Biotechnlogy</Link></button>
                 <button className="butt2"><Link to ="/mathematics"style={{color:'#FFF'}}   >MATHS</Link></button>
                   <button className="butt3"><Link to ="/phys"style={{color:'#FFF'}}>PHYSCYOLOGY</Link></button>
                   <button className="butt4"><Link to ="/FL"style={{color:'#FFF'}}>FOREIGN LANGUAGE</Link></button>
                  <button className="butt5"><Link to ="/LAW"style={{color:'#FFF'}}>LAW</Link></button>
                 <button className="butt6"><Link to ="/business"style={{color:'#FFF'}}>BUSINESS</Link></button>
                  <button className="butt7"><Link to ="/Programming"style={{color:'#FFF'}}>AIIT</Link></button>
                   <button className="butt8"><Link to ="/Magzine"style={{color:'#FFF'}}>Research paper</Link></button>
                 <button className="butt9"><Link to ="/QP"style={{color:'#FFF'}}>QUESTION PAPER</Link></button>
                <button className="butt10"><Link to ="/BBa"style={{color:'#FFF'}}>BBA</Link></button>
               <button className="butt11"><Link to ="/BSC"style={{color:'#FFF'}}>BSC</Link></button>
                <button className="butt12"><Link to ="/ASCO"style={{color:'#FFF'}}>ASCO</Link></button>
            </div>
 
    </div>
  )
}

export default Time








   
 
