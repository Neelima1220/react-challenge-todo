import React, { useState } from 'react';
import './style.css';

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputvalue] = useState('');
  const addCities = () => {
    setList([...list, inputValue]);
    setInputvalue('');
  };
  const handleDelete = (i) => {
    const filteredData = list.filter((item) => item !== i);
    setList(filteredData);
  };
  return (
    <div className="App">
      <input
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      <button onClick={addCities}>Add</button>
      <ul>
        {list.length > 0 &&
          list.map((item, index) => (
            <li>
              {item} <button onClick={() => handleDelete(item)}>delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}
