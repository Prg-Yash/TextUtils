import React, { useState } from "react";

export default function FormText(props) {
  const [text, SetText] = useState("Enter text here");
  const onClickChangeUp = () => {
    let newText=text.toUpperCase();
    // console.log("Text converted to Uppercase");
    SetText(newText);
    // showAlert("Changed to Uppercase","success")
    props.showAlert("Changed to UpperCase","success");
  };
  const onClickChangeLo= () => {
    let newText=text.toLowerCase();
    // console.log("Text converted to Uppercase");
    SetText(newText);
    props.showAlert("Changed to LowerCase","success");
  };
  const onChangehandle=(event)=>{
    console.log("On Change");
    SetText(event.target.value);
  }
  const onClickCopy=()=>{
   
    
    navigator.clipboard.writeText(text)
    
    // console.log("Text copied to clipboard");
    
    props.showAlert("Text Copied","success");
  }
  const onClickClear=()=>{
    SetText('')
    props.showAlert("Text Cleared","success");
  }
  const onClickListen=()=>{
    let speech=new SpeechSynthesisUtterance()
    speech.text=text
    window.speechSynthesis.speak(speech)
    props.showAlert("You are listening ","success");
  }
  const onClickRemoveES=()=>{
    const newText = text.replace(/\s+/g, ' ');
    SetText(newText);
    props.showAlert("Extra spaces removed", "success");
  }

  return (
    <>
      <div className="container">
        <div className="Head">
        <h1 className="heading" style={{color: props.mode==='light'? 'black':'white'}}>Enter text to analyze</h1>
        </div>
        <div className="mb-3">
        
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={onChangehandle}
            style={{backgroundColor: props.mode==='light'? 'white':'#5C8374',color: props.mode==='light'? 'black':'white'}}
          ></textarea>
        </div>
        <button
          className="btn-btnConvert"
          onClick={onClickChangeUp}
          
        >
          Convert to UPPERCASE
        </button>
        <button
          className="btn-btnConvert"
          onClick={onClickChangeLo}
         
        >
          Convert to lowercase
        </button>
        <button
          className="btn-btnConvert"
          onClick={onClickCopy}
         
        >
          Copy Text
        </button>
        <button
          className="btn-btnConvert"
          onClick={onClickClear}
         
        >
        Clear Text
        </button>
        <button
          className="btn-btnConvert"
          onClick={onClickRemoveES}
         
        >
        Remove Extra Spaces
        </button>
        <button
          className="btn-btnConvert"
          onClick={onClickListen}
         
        >
        Listen Text
        </button>
   
      </div>
      <div className="container my-3" style={{color: props.mode==='light'? 'black':'white'}}>
        <h1 >Your Text Summary</h1>
        <b>{(text.split(/\s+/).filter((el)=>{return el.length!==0})).length} words and {text.length} characters</b>
        <p className="my-2"><b>{0.008*text.split(/\s+/).filter((el)=>{return el.length!==0}).length} read  time</b></p>
      </div>
    </>
  );
}
