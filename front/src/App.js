import logo from './logo.svg';
import './App.css';
import ViewCats from './components/viewCats';
import Admin from './components/admin';

import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Container style={{maxWidth: "99%"}}>
        <Routes>
          <Route path="/" exact element={<ViewCats/>} />
          <Route path="/administration" exact element={<Admin/>} />
        </Routes>
      </Container>

    </BrowserRouter>
  );
}

export default App;
