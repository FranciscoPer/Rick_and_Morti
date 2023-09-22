/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Style.css"


export default function SearchBar({onSearch}) {
  
  const [id, setId] = useState('')

  const handleChange = (event) => {
    setId(event.target.value)

  }


  return (
    <div>
      <input type="search" onChange={handleChange} value={id} className="searchbar"/>
      <button className="agregar" onClick={() => {onSearch(id); setId('')}}>Agregar</button>
    </div>
  );
}
