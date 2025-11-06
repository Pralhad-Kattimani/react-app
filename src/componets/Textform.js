
import { useState } from "react"

export default function TextForm(props) {


  
    const handalUpclick  = ()=>{
     console.log("upper case was clicked" + Text);
     let newtext = Text.toUpperCase();
     props.showalert("converted to upper case","success")

     setText(newtext)
    }
    const handalLoclick  = ()=>{
     console.log("upper case was clicked" + Text);
     let newtext = Text.toLowerCase();
      props.showalert("converted to lower case","success")

     setText(newtext)
    }

     const handalClearclick  = ()=>{
     console.log("upper case was clicked" + Text);
     let newtext = '';

     setText(newtext)
      props.showalert("text will be cleared","success")
    }
    const handalCopyclick  = ()=>{
     console.log("copied button cliked" + Text);
     navigator.clipboard.writeText(Text);
     props.showalert("text will be copied","success")
    }

    const onchange  = (event)=>{
     console.log("on change clicked");
     setText(event.target.value)
    }
     const[Text, setText] = useState('');
     // ✅ Handle background and text color based on both modes
   let backgroundColor = "white";
   let textColor = "black";

if (props.mode === "dark") {
  backgroundColor = "#042743"; // dark blue mode
  textColor = "white";
}

if (props.redmode === "dark") {
  backgroundColor = "#FF0000"; // red mode overrides dark
  textColor = "white";
}
  
//code end here
   return (
        <>
        <div className="container"style={{color: textColor}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className ="mb-3" >
               { /* <textarea className="form-control"  style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'black'}} id="mybox"  onChange={onchange} value={Text} rows="8"
                 ></textarea>*/}
                 <textarea className="form-control" id="mybox" onChange={onchange}  value={Text} rows="8" 
                 style={{ backgroundColor: backgroundColor,
              color: textColor}}/>

                  
                <button disabled={Text.length===0} className='btn btn-success mx-2 my-3' onClick={handalUpclick}>button to uppercase</button>
                <button disabled={Text.length===0} className='btn btn-success mx-2 my-3' onClick={handalLoclick}>button to lowercase</button>
                <button disabled={Text.length===0} className='btn btn-success mx-2 my-3' onClick={handalClearclick}>button to clear</button>
                <button disabled={Text.length===0} className='btn btn-success mx-2 my-3' onClick={handalCopyclick}>button to copy</button>
                 </div> 


           
        </div>
        <div className="container my-5" style={{color: textColor}}>
            <h1> this is the summary</h1>
            <p> {Text.split(/\s+/).filter((word) => word.length !== 0).length}word {Text.length} characters</p>
            <p>{0.008 * Text.split("").length} minutes read</p>
            <p>priview</p>
            <p>{Text}</p>
        </div>
        </>
    )
}
