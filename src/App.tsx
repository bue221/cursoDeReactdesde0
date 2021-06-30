import React, { useState } from "react";

import styles from './App.module.css'

import Formulario from "./components/formulario";
import Tarjeta from "./components/tarjeta";

const App = () => {

  return (
    <div className={styles.contenedor} >
      <Formulario />
      <Tarjeta titulo='titulo 1' descripcion='descripcion 1'/>
      <Tarjeta titulo='titulo 2' descripcion='descripcion 1'/>
      <Tarjeta titulo='titulo 3' descripcion='descripcion 1'/>
      <Tarjeta titulo='titulo 4' descripcion='descripcion 1'/>
      <Tarjeta titulo='titulo 5' descripcion='descripcion 1'/>
      <Tarjeta titulo='titulo 6' descripcion='descripcion 1'/>
    </div>
  );
};

export default App;
