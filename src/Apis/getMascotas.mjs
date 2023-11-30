import axios from "axios";
export const baseUrl = 'http://localhost:3000/';

// export const getMascotas = async () => {
//   try {
//     const response = await fetch( baseUrl + 'mascota' );
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     <h1> Error inesperado del servidor </h1>
//     console.error('Error:', error);
//   }
// };

// export const getNewPets = async() => {
//   try {
//     const response = await axios.get( baseUrl +'pets/newPets');
//     const data = response.data;
//     return data
//   } catch (error) {
//     <h1> Error inesperado del servidor </h1>
//   }
// }

export const getMascotas = async (pageNumber) => {
  try {
    const response = await axios.get( baseUrl+`mascota/filter__${pageNumber}` );
    const data = response.data;
    return data;
  } catch (error) {
    <h1> Error inesperado del servidor </h1>
  }
};

export const getNewPets = async() => {
  try {
    const response = await axios.get( baseUrl +'mascota/newPets');
    const data = response.data;
    return data
  } catch (error) {
    <h1> Error inesperado del servidor </h1>
  }
}