import {Route, Routes} from 'react-router-dom'

import About from './pages/About'
import Projects from './pages/Projects';
import Interests from './pages/Interests'
import Contacts from './pages/Contacts';

import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<About />} />
        <Route exact path='/projects' element={<Projects />}/>
        <Route exact path='/interests' element={<Interests />}/>
        <Route exact path='/contacts' element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
