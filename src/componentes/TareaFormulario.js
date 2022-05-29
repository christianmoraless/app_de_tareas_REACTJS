import React,{useState} from 'react';
import '../styles/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';
function TareaFormulario(props){

    const [input,setInput] = useState('');

    const manejarCambio = e => {
        console.log('escribiendo');
        setInput(e.target.value)
        console.log(e.target.value)
    }

    
    const manejarEnvio = e => {
        e.preventDefault();
        console.log('Enviando formulario');
        const tareaNueva = {
            id: uuidv4(),
            texto:input,
            completada:false
        }
        props.onSubmit(tareaNueva);
    }


    return(
        <form className='tarea_formulario'
        onSubmit={manejarEnvio}>
            <input
                className='tarea_input'
                type='text'
                placeholder='Escribe una tarea'
                name='texto'
                onChange={manejarCambio}
            />
            <button className='tarea_boton'>
                Agregar Tarea
            </button>
        </form>
    )
}

export default TareaFormulario;