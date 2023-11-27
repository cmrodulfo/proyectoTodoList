import React from 'react'
import { useState } from 'react'
import './Tarea.css'
import Boligrafo from '../../assets/boligrafo.png'
import Eliminar from '../../assets/eliminar.png'
import Guardar from '../../assets/cheque.png'



function Tarea() {

    /*Tareat Iniciales*/
    const [tareas, setTareas] = useState([
        { id: 1, texto: 'Hacer TPO React', completedo: false, editar: false },
        { id: 2, texto: 'Entregar TPO en campus', completado: false, editar: false }
    ])

    /* Logica para agregar nuevas tareas*/
    const [input, setInput] = useState('')

    const agregarTarea = (e) => {
        e.preventDefault()
        const nuevaTarea = { id: Date.now(), texto: input, completado: false }
        setTareas([...tareas, nuevaTarea])
        setInput('')
    }

    /* Logica para dar tarea por terminada*/
    const [checked, setChecked] = useState(false)
    const terminarTarea = (id) => {
        setTareas(
            tareas.map((tarea) => {
                if (tarea.id === id) {
                    return { ...tarea, completado: !tarea.completado }
                }
                return tarea

            })
        )

        setChecked(!checked)
    }

    /* Logica para dar eliminar tarea*/

    const eliminarTarea = (id) => {
        // const index = tareas.indexOf(id)

        setTareas(tareas.filter(tarea => tarea.id != id))

    }

    /* Logica para dar editar tarea*/

    const [inputEditado, setInputEditado] = useState('')

    const editarTarea = (id) => {
        setTareas(
            tareas.map((tarea) => {
                if (tarea.id === id) {
                    setInputEditado(tarea.texto)
                    return { ...tarea, editar: !tarea.editar }
                }
                return tarea
            })
        )
    }
    const guardarTarea = (id) => {
        setTareas(
            tareas.map((tarea) => {
                if (tarea.id === id) {
                    return { ...tarea, texto: inputEditado, editar: !tarea.editar }
                }
                return tarea
            })
        )
        setInput('')
    }

    /* Compnente*/

    return (
        <div className='contenedorListaTareas'>
            <ul >
                {tareas.map((tarea) => (
                    <div className='listaTareas'>
                        <div className='checkLista'>

                        <div className='contenedorCheckbox'>

                            <input
                                className='checkbox'
                                type="radio"
                                name="tareaTerminada"
                                id="tareaTerminada"
                                onClick={() => terminarTarea(tarea.id)}
                            />

                        </div>
                        <li
                            className='tarea'
                            key={tarea.id}
                            style={{ textDecoration: tarea.completado ? "line-through" : "none" }}>

                            {tarea.editar ? (
                                <>
                                    <input
                                        className='tareaEditar'
                                        value={inputEditado}
                                        onChange={(e) => setInputEditado(e.currentTarget.value)}
                                    />
                                </>
                            ) :
                                <>
                                    {tarea.texto}
                                </>
                            }

                        </li>
                        </div>
                        <div className='contenedorBotoner'>
                            {tarea.editar
                                ?
                                < button onClick={() => guardarTarea(tarea.id)} ><img src={Guardar} alt="icono editar" /></button>
                                :
                                < button className='botonEditar' onClick={() => editarTarea(tarea.id)} ><img src={Boligrafo} alt="icono editar" /></button>
                            }

                            <button className='botonEliminar' onClick={() => eliminarTarea(tarea.id)}><img src={Eliminar} alt="icono editar" /></button>
                        </div>

                    </div>

                ))
                }
            </ul >
            <div className='contenedorNuevaTarea'>

                <input
                    className='inputNuevaTarea'
                    type="text"
                    placeholder='Escribir tarea'
                    onChange={(e) => setInput(e.currentTarget.value)} 
                    value={input}/>

                <button className='botonAgregar' type='submit' onClick={agregarTarea}><img src={Guardar} alt="icono editar" /></button>
            </div>
        </div >
    )
}

export default Tarea