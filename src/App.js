import {Route, Routes} from 'react-router-dom'

import About from './pages/About'
import Projects from './pages/Projects';

import './App.css';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={<About/>} />
        <Route exact path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
