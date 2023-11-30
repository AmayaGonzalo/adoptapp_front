import React, {useState } from 'react';
import Card from 'Components/Card/Card';
import ModalLogin from 'Components/Modales/ModalLogin';

const PetCards = ({ petList, isLoggedIn, onLogin }) => {

    const [isOpenModal1, setIsOpenModal1] = useState(false);
    const [selectPetId, setSelectPetId] = useState(null);
    const [selectPetName, setSelectPetName] = useState(null);
    const [isAdoptionSuccess, setIsAdoptionSuccess] = useState(false);

    const handleAdoptClick = (pet) => {        

        if (isLoggedIn) {
            console.log('Datos de la mascota:', pet);            
            // Si el usuario está logueado, muestra el modal de adopción exitosa
            setIsAdoptionSuccess(true);
            setIsOpenModal1(true);
            alert('id: '+pet.id+ ',\n'+'nombre: '+pet.name)
        } else {
            setIsAdoptionSuccess(false);
            // Si el usuario no está logueado, abre el modal de inicio de sesión
            setIsOpenModal1(true);
            setSelectPetName(null);
        }
    };

    return (
        <>
            {petList.map(pet => (
                <Card
                    id={pet.id}
                    key={pet.id}
                    petImg={pet.url_img}
                    description={pet.description}
                    name={pet.name}
                    sex={pet.sex}
                    age={pet.age}
                    attribute={pet.attributes.map((attribut, index) => (
                         <li key={index}>{attribut.attribut}</li>
                     ))}
                    location={pet.city}
                    onClick={() =>  {   setIsOpenModal1(true);
                                        handleAdoptClick(pet); }}
                    interested={pet.interested > 0 ? `${pet.interested} interesados`
                        : '0 interesados'}
                >
                </Card>
            ))}           
               {!isAdoptionSuccess && (
            // Muestra el ModalLogin solo si isAdoptionSuccess es false
            <ModalLogin
            isOpen={isOpenModal1}
            closeModal={() => setIsOpenModal1(false)}
            modalNumber="3"
            onLogin={() => onLogin(false)}
            ></ModalLogin>
      )}
        </>
    )
};

export default PetCards;