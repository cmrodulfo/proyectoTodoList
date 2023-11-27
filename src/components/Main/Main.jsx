import "./Main.css";
import Tarea from './Tarea'
import Hoja from '../../assets/hoja.jpg'
const Main =()=>{
    return( 
    <div className="contenedorMain">
        <img className="imagen" src={Hoja} alt="Fondo con forma Hoja" srcset="" />
        <div className="tareas">

        <Tarea/>
        </div>
        
    </div>
    )}
export default Main;
