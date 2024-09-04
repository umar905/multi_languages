import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home/Home.jsx'
import './i18n.jsx'
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  );
}

export default App;
