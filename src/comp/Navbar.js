import React from 'react'
import { Link  } from "react-router-dom";
  
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <Link className="navbar-brand" to="/">React Practice</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link className="nav-item nav-link active" to="/">Home</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-item nav-link" to="/temp">Temperature</Link>
          </li>
          <li class="nav-item dropdown">
          <Link className="nav-item nav-link" to="/registration">Registration</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-item nav-link" to="/quiz">Quiz</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-item nav-link" to="/search">Search</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-item nav-link" to="/random">Random</Link>
          </li>
          <li class="nav-item">
          <Link className="nav-item nav-link" to="/tasks">Tasks</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}


