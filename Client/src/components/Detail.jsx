import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.css";



const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
      
      <div className="detail-card">
  <div className="detail-image">
    <img src={character?.image} alt={character?.name} />
  </div>
  <div className="detail-info">
    <h2>{character?.name}</h2>
    <h2>{character?.status}</h2>
    <h2>{character?.species}</h2>
    <h2>{character?.origin?.name}</h2>
  </div>
</div>
 
    )
}

export default Detail;