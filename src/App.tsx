import React, { useState } from "react";

import styles from './App.module.css'

import Formulario from "./components/formulario";
import Tarjeta from "./components/tarjeta";

import data from './utils/mocks/todos.json'

interface Todo {
  titulo: string,
  descripcion: string
}

const App = () => {

  const [tareas, setTareas] = useState<Todo[]>([])
  const [formulario, setFormulario] = useState<Todo>({
    titulo: '', descripcion: '' 
  })

  const onhandlechange = (e: any) => {
    setFormulario({...formulario,
      [e.target.name] : e.target.value
    })
  }

  const oprimirBtn = (e: any)=> {
    e.preventDefault();
    setTareas([...tareas, formulario])
    setFormulario({ titulo: '', descripcion: '' })
  }



  return (
    <div className={styles.contenedor} >
      <h1 className={styles.titulo}>TODO APP REACT</h1>
      <Formulario btn={oprimirBtn} onchange={onhandlechange} form={formulario} />
      <div className={styles.contenedorTarjetas}>
      {tareas.length === 0 && <h2>Crea tu primer tarea .....</h2>}
      {tareas.map((todo: Todo)=>(
        <Tarjeta titulo={todo.titulo} descripcion={todo.descripcion} />
      ))}
      </div>
    </div>
  );
};

export default App;
