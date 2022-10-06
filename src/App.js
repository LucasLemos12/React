import logo from './logo.svg';
import './App.css';
import Presentacion from "./Presentacion";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

function App({texto}) {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
