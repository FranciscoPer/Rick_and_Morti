import { useState, useEffect } from "react";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import axios from "axios";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Favorites from "./components/Favorites.jsx";
import Error from "./components/Error.jsx";
import Form from "./components/Form.jsx";


const email = 'panchopertile@hotmail.com';
const password = 'pancho123';


function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])
  const [acces, setAcess] = useState(false)

  const login = (userData) => {
    if(userData.email === email && userData.password === password){
      setAcess(true);
      navigate('/home');
    }

  }

  useEffect(() => {
    !acces && navigate('/');

  }, [acces])


  const onSearch = (id) => {
    axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-franciscoper`)
    .then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 }

 const onClose = (id) => {
  const charactersFiltered = characters.filter(character =>
    character.id !== Number(id))
    setCharacters(charactersFiltered)
 }


 


  return (
    <div className="App">

      {
        location.pathname !== '/'
        ? <Nav onSearch={onSearch} setAcess={setAcess}/>
        : null

      }
      

    <Routes>
      <Route path='/home' element={ <Cards characters=
      {characters} onClose={onClose}/> } />
      <Route path='/about' element={<About/>} />
      <Route path='/detail/:id' element={<Detail/>} />
      <Route path="*" element={<Error/>} />
      <Route path="/" element={<Form login={login}/>} />
      <Route path="/favorites" element={<Favorites/>} />
      
    </Routes>
      
    
     
    </div>
  );
}

export default App;
