import React from 'react';
import './styles.css';

const Navbar = (props) => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div>
        <a class="navbar-brand" href="/Home">
          <h1>Portfolio</h1>
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/Home">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Galleri">Galleri</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/About">About</a>
          </li>
        </ul>
        <span class="navbar-text">
        </span>
      </div>

    </nav>

  );
}

export default Navbar;