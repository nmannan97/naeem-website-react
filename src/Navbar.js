import './Navbar.css'
import {Link} from 'react-router-dom'

import insignia from "./assets/pictures/Insignia3(large).jpg"

function Navbar(){

    
    return(
        <>
        <nav className="navbar">
            <div className="navbar_container">
                <div className="navbar_hamburgerlines"> 
                    <span className="navbar_hamburgerline line1"></span>
                    <span className="navbar_hamburgerline line2"></span>
                    <span className="navbar_hamburgerline line3"></span>
                </div>

                <Link className='navbar_profile_link'  to='/'>
                    <img id="navbar_logo" src={insignia}/>
                    <p className='navbar_font'> Naeem Mannan </p>
                </Link>
            </div>
            <input type='checkbox'/>
            <ul className='navbar_menu_items'>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/interests'>interests</Link>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/naeem-mannan-073924126/'>Linkedin</a>
                </li>
            </ul>
        </nav> 
        </>
    );
}

export default Navbar;