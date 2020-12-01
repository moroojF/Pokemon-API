import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [myPkmns, setMyPkmns] = useState([]);
  const myHadler = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(response => {
        return response.json();
      }).then(response => {
        setMyPkmns(response.results);
      }).catch(err => {
        console.log(err);
      });
  }
  return (
    <>
      <nav className="nav justify-content-center py-3 bg-warning text-muted">
        <h2>Welcome to Pokemon API</h2>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card mt-4">
              <h5 className="card-header text-muted">View the list</h5>
              <div className="card-body">
                <p className="card-text text-muted">Click the button below to show all the Pokemons</p>
                <button className="btn btn-outline-secondary" onClick={myHadler}>Fetch the Pokemon</button></div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row mt-5">
          <div className="col-4"></div>
          <div className="col-4" ><ul>{
            myPkmns.map((item, i) =>
              <li key={i}>{item.name}</li>
            )
          }</ul></div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
}

export default App;
