import SearchBar from "./SearchBar"
import { Link,  } from "react-router-dom"

const Nav = ({onSearch, setAccess}) => {
  

const handleLogOut = () => {
  setAccess(false);
  


}

  return(
    <nav>
      <button onClick={handleLogOut}>LOG OUT </button>
    <SearchBar onSearch={onSearch}/>

    <button>
      <Link to= '/about' >ABOUT</Link>
    </button>
    
    <button>
      <Link to='/home' >HOME</Link>
    </button>

    <button>
      <Link to='/favorites'> FAVORITES </Link>
    </button>
      
    </nav>
  )
} 
export default Nav;