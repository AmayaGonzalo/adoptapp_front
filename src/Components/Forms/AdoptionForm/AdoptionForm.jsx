import TextInput from 'Components/Inputs/TextInput/TextInput'
import InputRadioGroup from 'Components/Inputs/InputRadioGroup/InputRadioGroup';
import axios from 'axios';
import Modal from 'Components/Modales/Modal';
import React, { useState } from 'react';
import { baseUrl } from 'Apis/getMascotas.mjs';
import './adoptionForm.css'

const locationOptions = [
  { text: 'Ushuaia', value: '1' },
  { text: 'Tolhuin', value: '2' },
  { text: 'Rio Grande', value: '3' },
];

const livingPlaceOptions = [
  { text: 'Casa', value: 'casa' },
  { text: 'Departamento', value: 'departamento' },
];

const hasPetOptions = [
  { text: 'Si', value: '1' },
  { text: 'No', value: '0' },
];


const AdoptionForm = ({ petId, closeModal1 }) => {

  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const [adoptionMesage, setAdoptionMesage] = useState();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
    phoneNumber: '',
    address: '',
    cityId: '',
    hasPet: '',
    livingPlace: '',
  });

  const adoptFunction = async (petId, data) => {
    const interestedIn = petId;
    try {
      const userData = {
        ...data,
        interestedIn
      };
      /*const responseUser =*/ await axios.post(baseUrl + `user/temporaryUser`, userData);

      /*if (responseUser.data.success) {
        const responsePet = await axios.put(baseUrl + `pets/addInterested/${petId}`, {
          headers: { 'Content-Type': 'application/json' },
        });
        setAdoptionMesage(responsePet.data.message);
        setOpenModal2(true);
      } else {
        console.error('Error al agregar el usuario:', responseUser.data.message);
      }*/
    } catch (error) {
      /*if (error.response.status === 409) {
        alert(`Este mail ya se encuentra registrado para adoptar una mascota, aguarde a que sus datos sean confirmados o solicite reemplazar la mascota por la cual esta interesado/a.`)
      } else {
        alert(`Error inesperado del sistema.`)
      }*/
    }
  }
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };
  // Se crea metodos para verificar los valores del formulario que no se envien vacios
  const validateForm = (elements) => {
    const values = Object.values(elements);
    const isComplete = values.every(value => !!value);
    return isComplete;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Se verifica formato de email y telefono
    const validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validatePhone = /^\d{8,}$/;
    const isValidForm = validateForm(formData) && validateEmail.test(formData.email) &&
      validatePhone.test(formData.phoneNumber) && formData.age >= 21;

    if (!isValidForm) {
      alert('Por favor ingrese los datos correctamente');
      return;
    }
    // Si pasa las verificaciones se envia el formulario
    try {
      adoptFunction(petId, formData);
      setAdoptionMesage(
        <>
          <h2>¡Gracias por tu interés en adoptar una mascota!</h2>
          <p> Hemos recibido tu solicitud de adopción y te hemos enviado un correo electrónico de confirmación. Por favor, revisa tu bandeja de entrada y sigue las instrucciones para confirmar tu dirección de correo electrónico.</p>
          <p className='adopt-greetin'>Equipo de Adopciones.</p>
          <p clasName='signature'>Adoptapp </p>
        </>);
      setIsOpenModal2(true)
    } catch (error) {
      setAdoptionMesage('Ocurrio un error inesperado intente nuevamente');
      setIsOpenModal2(true);
    }
  }
  return (
    <>
      <form className='adoption-form' onSubmit={handleSubmit}>
        <div className='adoption-form-inputs'>
          <TextInput
            className='adoption'
            label="Nombre"
            placeholder="Nombre Completo"
            id="nombre"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextInput
            className='adoption'
            label="Apellido"
            placeholder="Apellido"
            id="apellido"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
          />
          <TextInput
            className='adoption'
            label="Edad"
            placeholder="Ingrese su edad"
            id="edad"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <TextInput
            className='adoption'
            label="Domicilio"
            placeholder="Ingrese su domicilio"
            id="domicilio"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <TextInput
            className='adoption'
            label="Email"
            placeholder="email@correo.com"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextInput
            className='adoption'
            label="Numero de telefono"
            placeholder="2901xxxxxx"
            type="number"
            id="telefono"
            name="phoneNumber"
            min="8"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className='checkbox-form'>
          <InputRadioGroup
            title="Localidad"
            options={locationOptions}
            name="cityId"
            onChange={handleInputChange}
          />
          <InputRadioGroup
            title="¿Dónde vive?"
            options={livingPlaceOptions}
            name="livingPlace"
            onChange={handleInputChange}
          />
          <InputRadioGroup
            title="¿Tiene mascota?"
            options={hasPetOptions}
            name="hasPet"
            onChange={handleInputChange}
          />
        </div>
        <div className="btn-form-div">
          <button className='btn-adopt-form' type='submit'>Enviar</button>
        </div>
      </form>
      <Modal modalNumber="2"
        isOpen={isOpenModal2}
        closeModal={() => { setIsOpenModal2(false); closeModal1() }} >
        <div className='adoption-message'>{adoptionMesage}</div>
      </Modal>
    </>
  );
}

export default AdoptionForm;
