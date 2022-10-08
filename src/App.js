
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Presentacion from "./Presentacion";
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <div className='App'>
        
        <NavBar/>
        <ItemListContainer description={{desc: "SportY"}}/>
    </div>
  );
}

export default App;
