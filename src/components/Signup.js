
import React from 'react';
//import './style.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './style.css'
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <div className="div2">
    <div>
    <form className={classes.root} noValidate autoComplete="off">
        <h2>ENTER DETAILS</h2><hr></hr>
        <TextField
          required
          id="outlined-required"
          label="First-name"
          defaultValue=""
          variant="outlined"
        /><br></br>
        <TextField
          required
          id="outlined-required"
          label="Last-name"
          defaultValue=""
          variant="outlined"
        /><br></br>
        <TextField
        required
          id="outlined-required"
          label="Fee-reciept-No"
          defaultValue=""
          variant="outlined"
        /><br></br>
        <TextField
        required
          id="outlined-required"
          label="Form-No"
          defaultValue=""
          variant="outlined"
        /><br></br>
         <TextField
        required
          id="outlined-number"
          label="School-Name"
          defaultValue=""
          variant="outlined"
        /><br></br>
        <TextField
        required
          id="outlined-number"
          label="Course"
          defaultValue=""
          variant="outlined"
        /><br></br>
         <TextField
        required
          id="outlined-number"
          label="Semester"
          type="number"
          variant="outlined"
        /><br></br>
        <TextField
          id="outlined-password-input"
          label="Generate-Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        /><br></br>
     </form>
     </div>
     <div className="div4">
     <input type="file" id="myfile" name="filename" className="div5"/>
     <input type="submit" className="div3"/>
     </div>
     <div>
     <button> <Link to="/Time"  style={{color:'#FFF'}}>NEXT</Link></button> 
     </div>
     </div>
  );
}

  