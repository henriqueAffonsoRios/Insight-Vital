import React from 'react'
import AlteraCampo from '../AlteraCampo'

const IdadeComponente = () => (
  <>
    <h3>Idade</h3>
    <AlteraCampo
      valores={{ de: 0, ate: 0 }}
      incremento={5}
      valorLimite={{ min: 0, max: 80 }}
    />
  </>
)

export default IdadeComponente
