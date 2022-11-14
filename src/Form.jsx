import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";

function Form(){
    var [values,setValue] = useState([]);
    const history = useHistory();
    const theBody ={

    }

    function addItems(classname,value){
        theBody[classname] = value;
        
    }
    function submit(){
       fetch('http://localhost:3000/api',
       {
              method: 'POST',
                headers: {  
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(theBody)
       })
    }
    return (
        <div>
            <h2>Create new </h2>
        <form style={formStyle}>
            <label>Blog Title</label>
            <input 
            className="title"
            type="text"
            required
            style={inputStyle}
            onChange={(e)=>addItems(e.target.className,e.target.value)}

            />
            <label>Blog Body</label>
            <textarea
            className="body"
            type="text"
            required
            onChange={(e)=>addItems(e.target.className,e.target.value)}
            style={inputStyle}

            />
            <label>Blog AUthor</label>
            <input 
            className="author"
            type="text"
            required
            onChange={(e)=>addItems(e.target.className,e.target.value)}
            style={inputStyle}
            />
            <select 
            className="category"
            onChange={(e)=>addItems(e.target.className,e.target.value)}
            style={inputStyle}
            >
                <option value="public">Public</option>
                <option value="private">Private</option>
            </select>
            <button style={btnStyle} onClick={(e)=>{
                e.preventDefault();
                setValue([theBody])
                console.log(theBody);
            }}>Add Blog</button>
        </form>
        </div>
    )
}

export default Form

const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}
const inputStyle={
    width: '5cm',
    padding: '15px',
    margin: '5px 0 22px 0',

}
const btnStyle={
    padding: '8px',
    outline: 'none',
    border: 'none',
    color: '#333',
    background: 'orange',
    borderRadius:'5px',

}