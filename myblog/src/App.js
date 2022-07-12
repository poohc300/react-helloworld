import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Project from './pages/project/Project';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/project' element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
