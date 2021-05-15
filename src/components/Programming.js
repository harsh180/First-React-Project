import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';
import Program from '../Json/Program.json';
import './aiit.css';
export class Programming extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       search:""
    }
  }
  onChange(e){
    this.setState({search:e.target.value.substr(0,30)})
  }
  
  render() {
         let filtered =Program.filter((data) => 
         {
           return data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
         })
    return ( 
      <div className="aiit">
         <div >
        <h2>Search:</h2>
        <input type="text" className="searchbox" placeholder="Search books" onChange={this.onChange.bind(this)}></input>
       </div>
      <div className="div1">
       {
           filtered.map((data) =>{
           return  <Card style={{ width: '18rem' }}>
                   <ListGroup variant="flush">
              <ListGroup.Item>{data.name}</ListGroup.Item>
              <ListGroup.Item>{data.Auther}</ListGroup.Item>
              <ListGroup.Item>{data.id}</ListGroup.Item>
               </ListGroup><br></br>
              </Card>
           
         })
       }
     </div>
      </div>
    )
  }
}

export default Programming



