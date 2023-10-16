import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header >
        <nav className="App-header">
          <ul className="header-buttons">
            <li>
              <button className="login-button">Log In</button>
            </li>
            <li>
              <button className="signup-button">Sign up</button>
            </li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <div className="content">
          <h1>The chemical negatively charged</h1>
          <p className='info'>
            Numerous calculations predict, and experiments confirm, that the force field reflects the beam,
            while the mass defect is not formed. The chemical compound is negatively charged. While the mass defect is.
          </p>
          <button className="get-started-button">Get Started</button>
        </div>
      </main>
    </div>
  );
}

export default App;
