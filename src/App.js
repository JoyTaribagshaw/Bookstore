import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Categories from './pages/Categories';
import Books from './pages/Books';

const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;
