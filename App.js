import React, { useState } from 'react';
import './App.css'

function App() {
  const [ estado, setEstado] = useState('ENTRADA');
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);
  const [min,setMin] = useState(0);
  const [max,setMax] = useState(300);
  
  const iniciarJogo = () =>{
    setEstado('RODANDO')
    setMin(0)
    setMax(300)
    setNumPalpite(1)
    setPalpite(150)
  }

  if(estado==='ENTRADA'){
    return (
      <div className="App">
        <button onClick={iniciarJogo}>Começar a jogar</button>
      </div>
    )
  }

  const menor = () =>{
    setNumPalpite(numPalpite + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min)/2)+ min
    setPalpite(proxPalpite)
  }

  const maior = ()=>{
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite)/2)+ palpite
    setPalpite(proxPalpite)
  }

  const acertou  = () =>{
    setEstado('FIM')
  }
  if(estado==='FIM'){
    return (
      <div className="App">
      <p>Acertou o número {palpite} com {numPalpite} chutes!!</p>
      <button onClick={iniciarJogo}>Jogar Novamente</button>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Busca Binária</h1>
  <h3>Seu número é {palpite}</h3>
      <p>Min: { min} | Max: {max}</p>
      <button onClick={maior}> + </button>
      <button onClick={acertou}>acertou</button>
      <button onClick={menor}> - </button>
    </div>
  );
}

export default App;
