import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Formulario from "./components/Formulario";

/* 1.36 video */
function App() {
  return (
    <>
    <Container className="my-5 mainPage">
       <h1 className="display-4 text-center text-light">Listas de tareas</h1>
       <hr className="text-light"/>
       {/* aqui va el formulario */}
       <Formulario></Formulario>
    </Container>
    <footer className="bg-dark text-light text-center py-5">
      <p> &copy; Todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App