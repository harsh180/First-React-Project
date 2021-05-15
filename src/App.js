import React from 'react'
//import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
//import Biotechnology from './components/Biotechnology';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
      
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="div1">
    <div>
     <form className={classes.root} noValidate autoComplete="on">
        <h2>LOGIN</h2><hr></hr>
        <TextField
          required
          id="outlined-required"
          label="Form-number"
          defaultValue=""
          variant="outlined"
        /><br></br>
        <TextField
        required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        /><br></br>
        </form>
        </div>
      <div>
            <button><Link to ="/Signup" style={{color:'#FFF'}}>NEW ADMIT</Link></button>
             <button><Link to ="/Time" style={{color:'#FFF'}}>SUBMIT</Link></button>
    </div>
    </div>
  )
}

export default App

 {/* import React, { Component } from 'react'
import {db} from './components/Firebase';
import Addbook from './components/Addbook';

 class App extends Component {
   state={
     Books:null
   }
   componentDidMount(){
     console.log("mounted");
     db.collection('Books')
       .get()
       .then(snapshot => {
         const Books =[]
         snapshot.forEach(doc => {
           const data =doc.data()
           Books.push(data)
           
         });
         this.setState({Books:Books})
            //console.log(snapshot);
       })
       .catch(error => console.log(error))
   }
  render() {
    return (
      <div className="App">
        <h1>upperline</h1>
        {
           this.state.Books &&
           this.state.Books.map(Book => {
             return(
               <div>
                 <p>{Book.name}</p>
                 <p>{Book.decription}</p>
                 </div>
             )
           })
        }
        <button><link to ="Signup">signup</link></button>
      </div>
    )
  }

 }
export default App;
*/ }