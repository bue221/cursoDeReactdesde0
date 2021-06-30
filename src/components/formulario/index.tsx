import React from 'react'

import styles from './formulario.module.css'

interface IProps {
    btn: any,
    onchange: any, 
    form: any
}

const Formulario:React.FC<IProps> = ({ btn, onchange, form }) => {
    return (
        <div className={styles.contenedorPrincipal}>
        <form className={styles.contenedor}  onSubmit={btn}>
            <input name='titulo' onChange={onchange}  value={form.titulo} className={styles.titulo} type='text' placeholder='Ingrese un titulo a la nota' />
            <textarea name='descripcion' onChange={onchange}  className={styles.descripcion} placeholder="Ingrese su descripción">{form.descripcion}</textarea>
            <button className={styles.boton} type='submit'>Crear Nota</button>
        </form>
        </div>
    )
}

export default Formulario
