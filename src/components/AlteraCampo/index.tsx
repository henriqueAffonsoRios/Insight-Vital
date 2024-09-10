import React, { useState } from 'react'
import { DecreaseBtn, Input, IncreaseBtn } from './styles'

interface CampoProps {
  valores: { de: number; ate: number }
  incremento: number
  scroll?: boolean
  valorLimite: { min: number; max: number }
}

const AlteraCampo: React.FC<CampoProps> = ({
  valores,
  incremento,
  scroll = false,
  valorLimite
}) => {
  const [focado, setFocado] = useState({ de: false, ate: false })
  const [valor, setValor] = useState(valores)

  const alteraFoco = (campo: 'de' | 'ate', estado: boolean) => {
    setFocado((val) => ({ ...val, [campo]: estado }))
  }

  const alteraValor = (campo: 'de' | 'ate', incrementoValor: number) => {
    setValor((val) => {
      const novoValor = val[campo] + incrementoValor

      if (campo === 'de') {
        return {
          de: Math.max(valorLimite.min, Math.min(novoValor, valorLimite.max)),
          ate: Math.max(
            val.ate,
            Math.max(valorLimite.min, Math.min(novoValor, valorLimite.max))
          )
        }
      } else {
        return {
          ...val,
          ate: Math.max(
            val.de,
            Math.max(valorLimite.min, Math.min(novoValor, valorLimite.max))
          )
        }
      }
    })
  }

  const alteraBlur = (
    event: React.FocusEvent<HTMLDivElement>,
    campo: 'de' | 'ate'
  ) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      alteraFoco(campo, false)
    }
  }

  const aplicaScroll = (
    campo: 'de' | 'ate',
    isIncremento: boolean,
    event: React.WheelEvent
  ) => {
    const incrementaValor = isIncremento ? incremento : -incremento

    if (
      (isIncremento && event.deltaY < 0) ||
      (!isIncremento && event.deltaY > 0)
    ) {
      alteraValor(campo, incrementaValor)
    }
  }

  return (
    <>
      <div>
        {!focado.de && <label>De:</label>}
        <Input
          tabIndex={0}
          onFocus={() => alteraFoco('de', true)}
          onBlur={(evento) => alteraBlur(evento, 'de')}
        >
          {focado.de && (
            <DecreaseBtn
              onClick={() => alteraValor('de', -incremento)}
              onWheel={
                scroll
                  ? (evento) => aplicaScroll('de', false, evento)
                  : undefined
              }
            >
              -
            </DecreaseBtn>
          )}
          <span>{valor.de}</span>
          {focado.de && (
            <IncreaseBtn
              onClick={() => alteraValor('de', incremento)}
              onWheel={
                scroll
                  ? (evento) => aplicaScroll('de', true, evento)
                  : undefined
              }
            >
              +
            </IncreaseBtn>
          )}
        </Input>
      </div>
      <div>
        {!focado.ate && <label>Até:</label>}
        <Input
          tabIndex={0}
          onFocus={() => alteraFoco('ate', true)}
          onBlur={(evento) => alteraBlur(evento, 'ate')}
        >
          {focado.ate && (
            <DecreaseBtn
              onClick={() => alteraValor('ate', -incremento)}
              onWheel={
                scroll
                  ? (evento) => aplicaScroll('ate', false, evento)
                  : undefined
              }
            >
              -
            </DecreaseBtn>
          )}
          <span>{valor.ate}</span>
          {focado.ate && (
            <IncreaseBtn
              onClick={() => alteraValor('ate', incremento)}
              onWheel={
                scroll
                  ? (evento) => aplicaScroll('ate', true, evento)
                  : undefined
              }
            >
              +
            </IncreaseBtn>
          )}
        </Input>
      </div>
    </>
  )
}

export default AlteraCampo
