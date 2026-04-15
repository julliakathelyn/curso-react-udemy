import React from 'react'
import './MyComponent.css'

const MyComponent = () => {
  return (
    <div>
      <h1> CSS de componente</h1>
      <p>Este é um parágrafo estilizado com CSS de componente.</p>
      <p className='my-comp-paragraph'>Este é outro parágrafo estilizado com CSS de componente.</p>
    </div>
  )
}

export default MyComponent
