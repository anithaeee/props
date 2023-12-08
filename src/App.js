import logo from './logo.svg';
import './App.css';
import props from './Child';
import { useState } from 'react';
function Child(props) {
  const[ name, setname] = useState('');
  return (
    
      <>
       <Child name={'Anitha'} />
      </>
  );
}

export default Child;
