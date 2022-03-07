import Characters from './components/Characters'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutCharacter from './components/AboutCharacter'
import './App.css'
import Header from './components/Header'

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Characters />} />
          <Route path='/aboutcharacter/:id' element={<AboutCharacter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
