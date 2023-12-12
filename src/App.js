import logo from './logo.svg';
import './App.css';
import Child from './Child';
import { useState } from 'react';
function App(props) {
  const data = [{name:'Anitha',Age:29,Place:'Hyderabad'},
               {name:'Ashiwini',Age:24,Place:'Nalgonda'}]
  return (
    
      <>
       <Child griddata={data} />
      </>
  );
}

export default App;
