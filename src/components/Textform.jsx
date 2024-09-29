import React,{useState}from 'react';
export default function Textform (props){
const handleUpClick = ()=>{
console.log("Uppercase was clicked" + text);
let newText = text.toUpperCase();
setText(newText)
}
const handleOnChange = (event)=>{
  
  setText(event.target.value);
}
const [text, setText] = useState();
    return(
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3"></div>
      <textarea className="form-control"placeholder="Enter Your Text" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
      <button className="btn btn-primary" onClick={handleUpClick}>convert to uppercase</button>
    </div>
  );
}
