import React from 'react'
import DropdownComponent from '..'

const ModeloGrafico: React.FC = () => {
  const options = ['percentage', 'normalized', 'both']
  return <DropdownComponent title="chartModel" options={options} />
}

export default ModeloGrafico
