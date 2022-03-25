import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const ENDPOINT = "http://localhost:4500/";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
