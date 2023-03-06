import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Expenses from "./pages/Expenses/Expenses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Sidebar />
        <Expenses />
      </Router>
    </>
  );
}

export default App;
