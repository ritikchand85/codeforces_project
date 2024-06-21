import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Fetchdata from './fetch_data.jsx';
import './styles.css';

export default function Searchhandle() {
  const [data, setData] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef(null);

  function event() {
    let value=document.querySelector('.search-input').value;
    
      setData(value);
      setHasSearched(true);
    
    
  }

  return (
    <>
    <div className='handle'>
      <div className='outer'>
        <input type="text" placeholder="codeforces handle" className="search-input"></input>
        <button className="search-button" onClick={event}>Search</button>
      </div>
      
    </div>
    <Fetchdata data={data} hasSearched={hasSearched} />
    </>
  );
}
