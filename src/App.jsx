import './CSS/App.css';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar';
import { MovieProvider } from './Contexts/MovieContext';

function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar></NavBar>
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/favourites' element={<Favourites></Favourites>}></Route>
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
};

export default App
