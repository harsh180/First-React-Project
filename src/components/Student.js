import React, { Component } from 'react'
import './Stud.css';
import Stud from './Stud'
export class Student extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             duedate:"",
             issuedate:"02/03/2020",
             fine:"300 rs"

        }
    }
    CheckDue(message){
       {
           this.setState({duedate:message})
       }
    }
    render() {
        return (
            <div className="div1">
               <div>
                   <h2>Student info</h2>
                  <h4> Name:Harsh chaurasia</h4>
                   <h4>Enrollment No :A71004819048</h4>
                   <h4>Dob:06/01/2002</h4>
               </div>
               <div>
                <Stud data={{duedate:this.state.duedate,checker:this.CheckDue.bind(this)}}/>
               </div>
               <div>
              <button className="button">Fine due:{this.state.fine}</button>
               </div>
               <div className="div2">
               <div >
               <img src='/aiit/aiit8.jpg' alt='chandu' height='230px' width='200px'/>
               <h4>issue date: 15/07/2020</h4>
               <h4>due date:23/07/2020</h4>
              </div>
               <div>
                <img src='/aiit/aiit9.jpg' alt='chandu' height='230px' width='200px'/>
                <h4>issue date:18/07/2020</h4>
                <h4>due date:27/07/2020</h4>
                </div>
             </div>
            </div>
        )
    }
}

export default Student
