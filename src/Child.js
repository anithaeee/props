import React from 'react'
import { useState } from 'react'
const Child = (props) => {
    const [name, setname] = useState('');
  return (
    <div className='App'>
        <h1>Welcome{props.name}</h1>
    </div>
  );
}

export default Child;