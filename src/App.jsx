
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './componnets/Home';
import CharacterDetail from './componnets/CharacterDetail';


function App() {

  return (
    <>
      <Router> 
        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/character/:id" element={<CharacterDetail/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
