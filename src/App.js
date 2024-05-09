import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Routes} from 'react-router-dom';
import {BookForm} from './BookForm';
import {AuthorForm} from './AuthorForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <span class="navbar-brand">Library</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item nav-item-light">
                  <NavLink class="nav-link " to="/books">Manage Books</NavLink>
                </li>
                <li class="nav-item nav-item-light">
                  <NavLink class="nav-link" to="/authors">Manage Authors</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/books" element={<BookForm/>} />
          <Route path="/authors" element={<AuthorForm/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

