import './Navbar.css';
import { Link } from 'react-router-dom';
import insignia from "./assets/pictures/Insignia3(large).jpg";
import { useState } from 'react';  // Import useState for handling state

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);  // State to track checkbox status

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);  // Update state when checkbox is clicked
    console.log('Checkbox checked:', e.target.checked);  // Log the checkbox state
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <label htmlFor="navbar_checkbox" className="navbar_hamburgerlines">
            <span className={`navbar_hamburgerline ${isChecked ? "line1_active" : ""}`}></span>
            <span className={`navbar_hamburgerline ${isChecked ? "line2_active" : ""}`}></span>
            <span className={`navbar_hamburgerline ${isChecked ? "line3_active" : ""}`}></span>
          </label>
          
          {/* Add onChange handler to the checkbox */}
          <input 
            id="navbar_checkbox" 
            type="checkbox" 
            onChange={handleCheckboxChange} 
          />

          <Link className="navbar_profile_link" to="/">
            <img id="navbar_logo" src={insignia} alt="Logo" />
            <p className="navbar_font" id="navbar_name"> Naeem Mannan </p>
          </Link>
        </div>

        {/* Navbar menu items */}
        <div className={`navbar_menu_items ${isChecked ? "open" : ""}`}>
        <ul id="navbar_items_list">
          <li className="navbar_links">
            <Link to="/"><p className="navbar_font2">About</p></Link>
          </li>
          <li className="navbar_links">
            <Link to="/projects"><p className="navbar_font2">Projects</p></Link>
          </li>
          <li className="navbar_links">
            <Link to="/interests"><p className="navbar_font2">Interests</p></Link>
          </li>
          <li className="navbar_links" id="navbar_links_linkedin">
            <Link to="/contacts"><p className="navbar_font2">Contacts</p></Link>
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
