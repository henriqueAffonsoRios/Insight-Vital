import AlteraCampo from '../AlteraCampo'

const AnoComponente = () => (
  <>
    <h3>Ano</h3>
    <AlteraCampo
      valores={{ de: 1990, ate: 1990 }}
      incremento={1}
      valorLimite={{ min: 1990, max: 2021 }}
      scroll={true}
    />
  </>
)

export default AnoComponente
