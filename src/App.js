
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Admin/Sidebar';
import Topbar from './Components/Admin/Topbar';
import Language from './Components/Screen/Language';
import Navbar from './Components/Admin/Navbar';
import Movies from './Components/Screen/Movies';

function App() {
  return (
    <div className="App">
      {/* <Sidebar/>
      <Topbar/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path={'/languages'} element={<Language />}/>
            <Route path={'/movies'} element={<Movies/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
