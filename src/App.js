
import { useState } from 'react';
import './App.css';
import FormText from './components/FormText';
import Navbar from './components/Navbar';
// import { About } from './components/About';
import { Alert } from './components/Alert';
// import {
//   BrowserRouter as Router,
//  Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode,setMode ]=useState('light');
  const onClickMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#092635"
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="aliceblue"
      showAlert("Light Mode Enabled","success")
    }
  }
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      message:message,
 type:type    
    }
  
    )
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }


  return (
  <>
  {/* <Router> */}

   <Navbar home="Home" mode={mode} onClickMode={onClickMode}/>
  <Alert alert={alert} />
 <div className='container my-3'>
  
          <FormText mode={mode} showAlert={showAlert}/>
 {/* <Routes> */}
          {/* <Route path="/about" element={<About />}/ > */}
         {/* </Routes> */}
 </div>/
 {/* </Router> */}
</>
  );
}

export default App;
