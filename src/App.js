import {Route, Routes} from 'react-router-dom'

import About from './pages/About'
import Projects from './pages/Projects';
import Interests from './pages/Interests'

import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<About/>} />
        <Route exact path='/naeem-website-react' element={<About/>} />
        <Route exact path='/naeem-website-react/' element={<About/>} />
        <Route exact path='/naeem-website-react/projects' element={<Projects/>}/>
        <Route exact path='/naeem-website-react/interests' element={<Interests/>}/>
      </Routes>
    </div>
  );
}

export default App;
