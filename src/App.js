import logo from './logo.svg';
import './App.css';
import './scss/app.scss';
import Header from './components/Header';
import React, { useState } from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

export const MyContext = React.createContext();
function App() {
  const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <MyContext.Provider value={{ searchValue: searchValue, setSearchValue: setSearchValue }}>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </div>
  );
}
export default App;
