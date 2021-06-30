import React from 'react'

interface IProps {
    titulo: string,
    descripcion: string
}

const Tarjeta: React.FC<IProps> = ({ titulo, descripcion }) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
        </div>
    )
}

export default Tarjeta