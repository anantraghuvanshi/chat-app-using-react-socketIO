import {BrowserRouter, Router, Route} from 'react-router-dom';
import './App.css';
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat"

const ENDPOINT = "http://localhost:4500/";


function App() {

return (


  <Router>

    <Route exact path="/" component={Join} />
    <Route path="/chat" component={Chat} />

  </Router>

);
}

export default App;