
import { useState } from 'react';
import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import Alert from './componets/Alert';
import Counter from './componets/Counter';

 
import Textform from './componets/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App (){
  //assignment code 
 /* const[redmode, redsetmode]=useState('light');
   const switchmode = ()=>{
    if(redmode==='light'){
      redsetmode('dark');
  document.body.style.backgroundColor ='#FF0000'
   showalert("red mode sucessful login","success")
   document.title =("TextUtils -Dark mode");
    }else{
      redsetmode('light');
    document.body.style.backgroundColor ='white'
    showalert("light mode sucessful login","success")
   document.title =("TextUtils -light mode");


    }
   } */

   //assignment code end here
   const [mode , setmode]=useState('light');//show the dark mode is enable or not 
  const [alert,setAlert]=useState(null);
  
  const showalert= (message,type) =>{
         setAlert({
         msg:message,
         type:type
            })
         setTimeout(() => {
          setAlert(null);
         }, 6000);
 
  
}
const removebodyclasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')

}
 const toggelemode = (cls) =>{
  removebodyclasses();
document.body.classList.add('bg-'+cls)
   if(mode ==='light'){
    setmode('dark');
    document.body.style.backgroundColor ='#042743'
    showalert("dark mode sucessful login","success")
     //  document.title =("TextUtils -Dark mode");
       // for interval which is showing pop msg non website
     /*  setInterval(() => {
         document.title =("textutlis is amzing ");
       }, 2000);
        setInterval(() => {
         document.title =("install now");
       }, 1500);*/
   }else{
    setmode('light');
    document.body.style.backgroundColor ='white'
    showalert("light mode is login","success");
   //document.title =("TextUtils -light mode");


   }
  }
  return (
    <>
<Router>
<Navbar title="textutiles" mode={mode}  toggelemode={toggelemode} boutText="contact"/>
 <Alert alert={alert}/>
 
<div className='container my-3'>
{  /*using exact bacuse some time react will choose same name file thats why*/}
<Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route  exact path="/" element={ <Textform showalert={showalert} heading="try textUtils Word Counter ,Character counter ,copy text" mode={mode}/>}>
          </Route>
                  <Route exact path="/Counter" element={<Counter/>}>
          </Route>
        </Routes>
</div>
</Router>


    </>
  );
}

export default App;
