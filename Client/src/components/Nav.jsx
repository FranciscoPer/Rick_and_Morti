/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar"
import { Link,  } from "react-router-dom"
import "./Nav.css"


const Nav = ({onSearch, setAccess}) => {
  

const handleLogOut = () => {
  setAccess(false);
  


}

  return(
    <nav className="navBar">
    <button className="logOutButton" onClick={handleLogOut}>LOG OUT</button>
    <div className="centerContainer">
      <SearchBar className="searchbar" onSearch={onSearch} />
      <div className="buttonGroup">
        <button>
          <Link to="/home">HOME</Link>
        </button>
        <button>
          <Link to="/favorites">FAVORITES</Link>
        </button>
        <button>
          <Link to="/about">ABOUT</Link>
        </button>
      </div>
    </div>
  </nav>

  )
} 
export default Nav;