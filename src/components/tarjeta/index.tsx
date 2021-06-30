import React from 'react'

import styles from './tarjeta.module.css'

interface IProps {
    titulo: string,
    descripcion: string
}

const Tarjeta: React.FC<IProps> = ({ titulo, descripcion }) => {
    return (
        <div className={styles.contenedor}>
            <h1 className={styles.titulo}>{titulo}</h1>
            <p className={styles.descripcion}>{descripcion}</p>
        </div>
    )
}

export default Tarjeta