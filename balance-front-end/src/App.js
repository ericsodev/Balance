import './App.css';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(10)
  return (
    <div className="App">
      <div className="mainView mx-auto md:w-2/3">
        <h1 class="font-sans text-3xl">Test: {count}</h1>
        <button onClick={() => setcount(count + 1)}>Click me</button>
      </div>
    </div>
  );
}

export default App;
