import TextInput from 'Components/Inputs/TextInput/TextInput'
import './donationForm.css';
//import ComponenteInputOpciones from './InputOpciones'

export const DonationForm = () => {
  return (
    <>
      <form className='complaint-form'>
        <div className='complaint-options'>
          <label className='label-options' htmlFor="complaint">Quiero notificar:</label>
          <select id='donation' name='donation'>
            <option value="extravio">Extravío</option>
            <option value="maltrato">Maltrato</option>
            <option value="abandono">Abandono</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <TextInput
          className='complaint'
          label="Telefono de contacto"
          placeholder="02901-xxxxxx "
          type="number"
          id="phone"
          name="phone" />
        <TextInput
          className='complaint'
          label="Lugar del hecho"
          placeholder=""
          type="text"
          id="place"
          name="place" />
        {/* //componente Nuevo que aparece si se selecciona "otros" */}
        <div className="btn-form-complaint">
          <button className="complaint-btn" type='submit'>Enviar</button>
        </div>
      </form>
    </>
  )
}

export default DonationForm;