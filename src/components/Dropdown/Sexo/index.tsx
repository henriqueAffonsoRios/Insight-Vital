import React from 'react'
import DropdownComponent from '..'

const SexoComponente: React.FC = () => {
  const options = ['male', 'female', 'both']
  return <DropdownComponent title="sex" options={options} />
}

export default SexoComponente
