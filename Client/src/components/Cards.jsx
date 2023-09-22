/* eslint-disable react/prop-types */
import Card from "./Card";
import "./Card.css";




export default function Cards({ characters, onClose }) {
  return (
    <div className="cards-wrapper">
      {characters.map(({id, name, status,  species, gender, origin,  image}) => {
        return (
          <Card
           key ={id}
           onClose={onClose}
           id={+id}
           name={name}
           status={status}
           species={species}
           gender={gender}
           origin={origin.name}
           image={image}
           className = "card"
           

          
          />
        )
      }
      
    
      
      )}
 
    </div>
  );

}

