import { useState,useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
var today = new Date().toLocaleDateString();



function Navbar(){
 const [initial,changeIt] = useState('Susan');
 const [age,setAge] = useState(0);

    
const handleClick=()=>{
    alert(new Date().toLocaleTimeString());
}
const handle=(pass)=>{

    console.log(initial , age);
  setAge(()=>{
   return age+1;
  })
  changeIt(pass)

//the function is called when onclick event is triggred.
// the function is called with the value of the button as the argument.
// the value of the button is passed to the function.

}
const [trigger,setTrigger] = useState(today);

const changeDate=()=>{
setTrigger(new Date().toLocaleTimeString() ,"date changed");
}


// use effect takes a function as an argument and fres on  every render 



    return(
        <nav>
            <h3>Hi {initial} your number is {age}</h3>
            <ul style={navbarStyle}>
                <li><Link style={linkStyle} to="/">Home</Link></li>
                <li><Link style={linkStyle} to="/form">Create</Link></li>
                <li><Link style={linkStyle} to="/contact">Contact</Link></li>
                <li><Link style={linkStyle} to="/details">Details</Link></li>

                <li><button onClick={handleClick} >New Blog</button></li>
                <li><button onClick={(e)=>handle("Jasmine")} >Button</button></li>
                <li><button onClick={(e)=>changeDate()} >Change Date</button></li>
                
                {/* the ananonymouse function can directly acces the buttons evennt */}
            </ul>
        </nav>
    )
}

const navbarStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    paddingTop: '25px',
    display:'flex',
    justifyContent:'space-around',
    listStyleType:'none',
}
const linkStyle ={
    color:'#fff',
    textDecoration:'none'
}

export default Navbar;