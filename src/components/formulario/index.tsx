import React from 'react'

import styles from './formulario.module.css'

const Formulario = () => {
    return (
        <div className={styles.contenedorPrincipal}>
        <form className={styles.contenedor}>
            <input className={styles.titulo} type='text' placeholder='Ingrese un titulo a la nota' />
            <textarea className={styles.descripcion} placeholder="Ingrese su descripción"></textarea>
            <button className={styles.boton} type='submit'>Crear Nota</button>
        </form>
        </div>
    )
}

export default Formulario
