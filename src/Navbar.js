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
                <input type='checkbox'/>
            </div>
            <ul className='navbar_menu_items'>
                <li className='navbar_links'>
                    <Link to='/'><p className='navbar_font2'>About</p></Link>
                </li>
                <li className='navbar_links'>
                    <Link to='/projects'><p className='navbar_font2'>Projects</p></Link>
                </li>
                <li className='navbar_links'>
                    <Link to='/interests'><p className='navbar_font2'>interests</p></Link>
                </li>
                <li id='navbar_links_linkedin' >
                    <a href='https://www.linkedin.com/in/naeem-mannan-073924126/'><p className='navbar_font2'>Linkedin</p></a>
                </li>
            </ul>
        </nav> 
        </>
    );
}

export default Navbar;