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




const URL = 'http://localhost:3001/rickandmorty/login/';


function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)
  
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await  axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;

         setAccess(access);
         access && navigate('/home');
   
      
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate])

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      
      
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      
    } catch (error) {
      window.alert('¡No hay personajes con este ID!');
      
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(character =>
      character.id !== +id)
    setCharacters(charactersFiltered)
  }
  let backgroundClass = '';

  // Verificamos la ruta actual y asignamos la clase adecuada
  if (location.pathname === '/home') {
    backgroundClass = 'home-bg';
  } else if (location.pathname === '/') {
    backgroundClass = 'about-bg';
  }
  if (location.pathname.includes('/detail/')) {
    backgroundClass = 'home-bg';
  }
  if (location.pathname.includes('/favorites')) {
    backgroundClass = 'home-bg';
  }
  

  return (
    <div className={`App ${backgroundClass}`}>
      {
        location.pathname !== '/'
        ? <Nav onSearch={onSearch} setAccess={setAccess} /> // Corregí setAcess a setAccess
        : null
      }
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}  />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/"  element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
