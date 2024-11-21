import { useState } from 'react';
import Calculator from './components/Oct_29/Calculator';

function App() {
  const [theme,setTheme]=useState(true);
  const [fsize,setFsize]=useState(10);
  const lightTheme ={
    backgroundColor: "white", //background-color: #282c34;
    color: '#282c34',
    fontSize:fsize+"px"
  }
  const darkTheme ={
    backgroundColor: "#282c34",
    color: 'white',
    fontSize:fsize+"px",
    height: 100+"vh"
  }
  return (
    <div className="App">
      <div className="App-header" style={theme?lightTheme:darkTheme}>
        <Calculator/>
        <hr></hr>
        <button onClick={()=>{setTheme(!theme)}}>{theme?"Go Dark":"Go Light"}</button>
        <br/>
        Font Size:<input type='range' 
        name="fontchg" min='10' max='20' 
        step='1' value={fsize} onChange={(e)=>{setFsize(e.target.value); console.log(fsize)}}/>
      </div>
    </div>
  );
}

export default App;
