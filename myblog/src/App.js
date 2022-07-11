import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Project from './pages/project/Project';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/project' element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
