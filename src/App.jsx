import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return <div className="App">{!token ? <Login onLogin={handleLogin} /> : <Dashboard />}</div>;
}

export default App;
