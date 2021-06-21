import logo from './logo.svg';
import './App.css';
import BIP39generator from './components/BIP39generator';
import BIP32generator from './components/BIP32generator';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <BIP39generator/>

        <BIP32generator/>
      </header>
    </div>
  );
}

export default App;
