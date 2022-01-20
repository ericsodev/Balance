import "./App.css";
import "./fonts/metropolis.css";
import "./fonts/inter.css";
import Landing from "./containers/landing/Landing";
import Dashboard from "./containers/dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
