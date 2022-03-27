import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast.js";
function App() {
 return (
   <div className="App">
     <header className="App-header">
       <h1>React Weather App</h1>
     </header>
     <main>
       <Forecast />
     </main>
     <footer>
       Page created by Fadoua
     </footer>
   </div>
 );
}
export default App;