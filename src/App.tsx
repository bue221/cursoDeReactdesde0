import React, { useState } from "react";
import Primero from "./components/primero/Primero";

const App = () => {
  const [formulario, setFormulario] = useState({
    titulo: "",
  });

  const [data, setData] = useState<any>([]);

  const handleChange = (e: any) => {
    setFormulario({
      ...formulario,
      titulo: e.target.value,
    });
  };

  const guardarNota = () => {
    var dataDePaso = {
      titulo: formulario.titulo,
    };
    setData([...data, dataDePaso]);
  };

  return (
    <div>
      <input
        type="text"
        name="titulo"
        placeholder="Ingrese su titulo"
        value={formulario.titulo}
        onChange={handleChange}
      />
      <button onClick={guardarNota}>Crear nota</button>
      {data?.map((i: any, index: number) => (
        <h2 key={index}>{i.titulo}</h2>
      ))}
      <Primero />
    </div>
  );
};

export default App;
