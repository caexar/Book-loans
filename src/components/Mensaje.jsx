import React from 'react'

const Mensaje = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       <h1>hola {props.nombre} y {props.nombre2} bienvenidos </h1> 
       <h2>sus id son {props.id} y {props.id2} respectivamente </h2>
    </div>
  )
}

export default Mensaje