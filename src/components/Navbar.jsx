import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Navbar() {


return(
   <nav>
    <ul>
        <li>
            <Link to={'/'} ><FontAwesomeIcon icon={faHouse} /></Link>
        </li>
    </ul>
   </nav>
)

}

export default Navbar;
