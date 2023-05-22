import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({listaTarea}) => {
    
    return (
        
            <ListGroup>
                {listaTarea.map((tarea,index)=> <ItemTarea key={index} tarea ={tarea}></ItemTarea>)}
            </ListGroup>
        
    );
};

export default ListaTareas;