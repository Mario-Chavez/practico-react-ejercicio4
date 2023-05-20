import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

let nextId = 0;

const Formulario = () => {
    
    const [tarea, setTarea] = useState("");
    const [listadoTareas, setListadoTareas] = useState([]);
    
    
    const agregarTarea = (e) => {
       e.preventDefault(); 
       setListadoTareas([
        ...listadoTareas,
        { id: nextId++, tarea: tarea }
      ]);
    };
    
    return (
        <section>
            <Form onSubmit={agregarTarea}>
                <Form.Group className="mb-3 d-flex " controlId="tarea">
                    <Form.Control 
                    className="me-5"
                    type="text" 
                    placeholder="Escribe tu tarea" 
                    onChange={(e)=>setTarea(e.target.value)}
                    value={tarea}
                    />
                    
                    <Button className="ms-5" variant="primary" type="submit">
                    Enviar
                    </Button>
                </Form.Group>
              <ListaTareas listaTarea ={listadoTareas}  /> 
                  
            </Form>
        </section>
    );
};

export default Formulario;