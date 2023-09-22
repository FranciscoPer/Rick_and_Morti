/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import {addFav, removeFav} from '../redux/actions'
import { connect } from 'react-redux'
import { useState, useEffect } from "react";
import "./Card.css";

function Card({id, name, status,  species, gender, image, onClose, addFav, removeFav, myFavorites}) {

  const [isFav, setIsFav] = useState(false)
  
  
  const handleFavorite = () => {
    if(isFav){
      setIsFav(false)
      removeFav(id)
    }
    else {
      setIsFav(true)
      addFav({id, name, status,  species, gender, image, onClose})
    }

  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [id, myFavorites]);

 const cardStyle = {
  backgroundImage: `url(${image})`, // Establecer imagen como fondo
};
 

  return (
    <div className="card" style={cardStyle}>

  {
   isFav 
   ? (
      <button className="corazon" onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
  }
  

    <button className="botonx" onClick={() => onClose(id)}>X</button>
    <Link to={`/detail/${id}`}>
    <h2 style={{ color: "white", WebkitTextStroke: "1px black" }}>{name}</h2>
    </Link>
  
    <h2>{species}</h2>
    <h2>{gender}</h2>
    <h2>{status}</h2>
    
    
    
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addFav: (character) => dispatch(addFav(character)) ,
    removeFav: (id) => dispatch(removeFav(id)) 
  }
  }


export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Card)