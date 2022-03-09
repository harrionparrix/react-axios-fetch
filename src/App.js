import './App.css';
import { useState,useEffect } from 'react';
import Axios from 'axios'; 

function App() {
  const [method, setmethod] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [facto, setfacto] = useState("");
  const [factos, setfactos] = useState("");
  const[display,setdisplay]=useState(false);

  useEffect(() => {
    setIsUpdate(true); 
    if(isUpdate)
    {
   setmethod('You clicked on get facts using axios');}
  },[facto]);
  
  useEffect(() => {
    setIsUpdate(true);
    if(isUpdate)
    {
  setmethod('You clicked on get facts using fetch');}
},[factos]);
  const getAnything=()=>{
    Axios.get('https://catfact.ninja/fact').then(
      (response) => {
          setfacto(response.data.fact);     
  }
    );
};
const getAnother=()=>{
fetch("https://catfact.ninja/fact").then(
(response)=>response.json()).then(
  (data)=>{
      setfactos(data.fact);
    
  }
)
};
  return (
    <>
    <h1>
      Welcome to CatFacts</h1>
      <br/>
      <button onClick={()=>{
          getAnything()
          setdisplay(true);
      }}>Click on Me for a fact using axios</button>
    
    <h2>
      {facto}
    </h2>
    <br/>
    <button onClick={()=>{
          getAnother()
          setdisplay(true);
      }}>Click on Me for a fact using FETCH</button>
  
    <h2>
      {factos}
    </h2>
    <h1>
      {method}
    </h1>
    </>
  );
}

export default App;
