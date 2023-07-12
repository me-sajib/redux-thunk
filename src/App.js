import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layouts from './components/Layouts';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layouts />} />
      </Routes>
    </>
  );
}

export default App;
