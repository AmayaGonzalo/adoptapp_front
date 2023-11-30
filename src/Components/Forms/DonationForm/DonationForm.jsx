import React from 'react'
import TextInput from 'Components/Inputs/TextInput/TextInput'
import './donationForm.css';
//import ComponenteInputOpciones from './InputOpciones'

export const DonationForm = () => {
  return (
    <>
      <form className='donation-form'>
        <div className='donation-options'>
          <label className='label-options' htmlFor="donation">Quiero colaborar con:</label>
          <select id='donation' name='donation'>
            <option value="Alimento">Alimento</option>
            <option value="Hogar">Hogar transitorio</option>
            <option value="Medicamentos">Medicamentos</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <TextInput
          className='donation'
          label="Telefono de contacto"
          placeholder="02901-xxxxxx "
          type="number"
          id="telefono"
          name="telefono" />
        <TextInput
          className='donation'
          label="Mail"
          placeholder="mail@ejemplo.com"
          type="email"
          id="mail"
          name="mail" />
        {/* //componente Nuevo que aparece si se selecciona "otros" */}
        <div className="btn-form-donation">
          <button className="donation-btn" type='submit'>Enviar</button>
        </div>
      </form>
    </>
  )
}

export default DonationForm;