import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Join from "./components/Join/Join";

const ENDPOINT = "http://localhost:4500/";


function App() {

  

  return (
    <div className="App">

    <Router>
      <Route exact path= "/" component ={Join} />

      <Route path = "/chat" />


    </Router>
      
    </div>
  );
}

export default App;
