import { SexoContent } from './styles'

const SexoComponente = () => (
  <>
    <h3>Sexo</h3>
    <SexoContent>
      <label htmlFor="male">Masculino</label>
      <input type="checkbox" name="male" id="male" />
    </SexoContent>
    <SexoContent>
      <label htmlFor="female">Feminino</label>
      <input type="checkbox" name="female" id="female" />
    </SexoContent>
  </>
)

export default SexoComponente
