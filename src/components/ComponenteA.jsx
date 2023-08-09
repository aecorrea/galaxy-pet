import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const ComponenteA = () => {

    const {cart, setCart, comision, long} 
    = useContext(CartContext)

  return (
    <>
    <h1>{comision}</h1>
    <p>{cart}</p>
    <button onClick={() => setCart("Nuevo Valor")}>
        Sumar Valor
    </button>
    </>
  )
}

export default ComponenteA