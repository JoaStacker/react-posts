import { createContext, useState } from 'react';
import CompA from './components/CompA';
import './App.css';

const Number = createContext(4)
const ChangeNum = createContext()

function App() {
  const [number, setNumber] = useState(5)

  const incrementNumber = () => {
    setNumber(number + 1)
  }

  return (
    <div className="App">
      <h1>Working with context</h1>
      <Number.Provider value={number}>
        <ChangeNum.Provider value={incrementNumber}>
          <CompA />
        </ChangeNum.Provider>
      </Number.Provider>
    </div>
  );
}

export default App;
export { Number, ChangeNum };