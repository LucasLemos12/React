
import 'bootstrap/dist/css/bootstrap.css'; 
import './App.css';
import Presentacion from "./Presentacion";
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import Brand from "./components/Brand";
import { Component } from 'react';
import Menu from './components/Menu';


export default class App extends Component{
  opciones = ["inicio", "catalogo", "Contacto"];

  constructor(){
    super();
    this.state = {title: "", opciones: this.opciones};
  }

  // cambiarState(){
  //   this.setState({title: "SportY"});
  // }


  // parte de clases
  componentDidMount () {
    // console.log ("1. Montaje");
    setTimeout(() => {
      this.setState({title: "SportY"});
    }, 5000);
  }

componentWillUpdate(){
  // console.log ("2. se actualizo")
}

componentWillUnmount () {
  // console.log("se desmonto")
}



  render (){
    return (
      <div className='App'>
          <header className='App-header'>
          <Brand>{this.state.title}</Brand>
          
          <Menu opciones={this.opciones} />
          {/* <ItemListContainer description={{desc: "SportY"}}/> */}
          </header>
      </div>
    );
  }
}

