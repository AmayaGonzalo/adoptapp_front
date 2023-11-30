import React, { useState, useEffect } from 'react';
import { baseUrl } from 'Apis/getMascotas.mjs';
import SectionStructure from 'Components/home/HomeSections/SectionStructure/SectionStructure';
import './profilePage.css';
import NotFoundImg from 'assets/not-found.svg';

const ProfilePage = ( ) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Recupera el token del almacenamiento local
        const authToken = localStorage.getItem('auth-token');

        if (!authToken) {
          console.error('Token de autenticación no encontrado.');
          return;
        }

        const response = await fetch(baseUrl + 'user/perfil', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfileData(data);
          console.log(data)
        } else {
          console.error('Error al obtener los datos del perfil');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <main>

   
    {profileData  ? (<>

      <SectionStructure className='profile' sectionTitle={`¡Hola ${profileData.user.username}!`}>
      <div className='profile-content'>
        <h2>Información Personal</h2>
        <ul>
          <li>
            <strong>Nombre:</strong> {`${profileData.client.name} ${profileData.client.surname}`}
          </li>
          <li>
            <strong>Email:</strong> {`${profileData.user.email}`}
          </li>
          <li>
            <strong>Edad:</strong> {`${profileData.client.age}`} años
          </li>
          <li>
            <strong>Domicilio:</strong> {`${profileData.client.address}`}
          </li>
          <li>
            <strong>Lugar de residencia:</strong> {`${profileData.client.livingPlace}`}
          </li>
          <li>
            <strong>Ciudad:</strong> {`${profileData.city}`}
          </li>
        </ul>
        <div className='btn-editar'>
          <button>Editar</button>
        </div>
      </div>
    </SectionStructure>
      
      </>) : ( 
      <div className='page-not-found'>
          <h3 className='not-found-title'> Lo siento, esta sección no está disponible.</h3>
          <img className='not-found-img' src={NotFoundImg} alt='not-found'></img>
      </div>
  )}

    
    </main>
  );
};


export default ProfilePage;