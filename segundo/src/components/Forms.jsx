import { useState } from "react"
import styles from "./css/Forms.module.css"

const Forms = () => {
    const [nome, useNome] =useState()
    const [email, useEmail] =useState()
    const [senha, useSenha] =useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("nome:", nome)
    }

  return (
    <div>
        <h3>Forms</h3>
        <form 
        className={styles.formulario} 
        onSubmit={handleSubmit}>
            <label 
            className={styles.inputLabel}>
                Nome 
            <input 
            className={styles.input} 
            onChange={(e) => {
                useNome(e.target.value)
            }} 
            type="text" 
            placeholder="Username" />
            </label>
            <label 
            className={styles.inputLabel}>
                Email 
            <input 
            className={styles.input} 
            onChange={(e) => {
                useEmail(e.target.value)
            }} type="text" 
            placeholder="Email" />
            </label>
            <label 
            className={styles.inputLabel}>
                Senha 
            <input 
            className={styles.input} 
            onChange={(e) => {
                useSenha(e.target.value)
            }} 
            type="password" 
            placeholder="Password" />
            </label>
            <input 
            type="button" 
            value="Cadastrar" 
            className={styles.button} />
        </form>
    </div>
  )
}

export default Forms