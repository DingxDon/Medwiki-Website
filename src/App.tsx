import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from './components/Page/HomePage';
import { useContext } from 'react';
import { UserContext } from './context/MDstate';
import Blog from './components/Page/Blog';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

function App() {
  const context = useContext(UserContext)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<HomePage />} />
          <Route path={`/:type/:searchtype/:id`} element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
