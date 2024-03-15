import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
