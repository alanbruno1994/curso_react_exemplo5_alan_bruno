import {useEffect,useState} from 'react';


function App() {
  const[value,setValue]=useState(0)
  const[factorial,setFactorial]=useState(0)

  useEffect(function(){//chama quando renderizar o componente
    console.log('executando sem []')
  })

  useEffect(function(){//chama na primeira renderizacao
    console.log('executando com []')
  },[])

  useEffect(function(){//chama quando alterar value
    console.log('monitorando value')
    let temp=1;
    for(let v=value;v>0;v--){
      temp=temp*v;
    }
    setFactorial(temp)
  },[value])

  

  return (
    <div className="App">
       <input value={value} onChange={event=>setValue(+event.target.value)}></input>
       <p>{factorial}</p>
    </div>
  );
}

export default App;
