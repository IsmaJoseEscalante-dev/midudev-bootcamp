import './App.css';
import Mensaje from './Mensaje';


const Descripcion = () => {
  return <div> Esta aplicación se encarga de administrar la App</div>
}

function App() {
  return (
    <div className="App">
      <Mensaje color = "red" message = "Estamos trabajando"/>
      <Mensaje color = "yellow" message = "en un"/>
      <Mensaje color = "green" message = "curso de React"/>
      <Mensaje/>
      <Descripcion/>
    </div>
  );
}

export default App;
