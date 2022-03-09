import './App.css';
import { useState,useEffect } from 'react';
import Axios from 'axios'; 

function App() {
  const [method, setmethod] = useState("");
  const [facto, setfacto] = useState("");
  const [factos, setfactos] = useState("");
  useEffect(() => {
   setmethod('You clicked on get facts using axios');
  },[facto]);
  useEffect(() => {
  setmethod('You clicked on get facts using fetch');
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
      <button onClick={getAnything}>Click on Me for a fact using axios</button>
    
    <h2>
      {facto}
    </h2>
    <br/>
      <button onClick={getAnother}>Click on Me for a fact using FETCH</button>
  
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
