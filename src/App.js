import './App.css';
import Footer from './Components/Footer/footer.jsx';
import Header from './Components/Header/header.jsx';
import HomePage from './Pages/Home/Home.jsx';
import AdoptPage from './Pages/Adoption/AdoptionPage';
import ComplaintsPage from 'Pages/Complaints/ComplaintsPage';
import InformationPage from 'Pages/Information/InformationPage';
import DonationPage from 'Pages/Donations/DonationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfilePage from 'Pages/Profile/profilePage';
import { useState, useEffect } from 'react';

function App() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    try {
      // Recupera el token del almacenamiento local
      const token = localStorage.getItem('auth-token');
      if (token) {
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  }, [localStorage]); // Se ejecuta solo una vez al montar el componente


  const handleLogout = () => {
    // Elimina el token al cerrar sesión
    localStorage.removeItem('auth-token');
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>      
        <Header isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} onLogout={handleLogout} />        
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/adopciones/mascotas'
                   element={<AdoptPage  isLoggedIn={isLoggedIn}
                                        onLogin={() => setIsLoggedIn(true)}
                                        onLogout={handleLogout}
                          />} 
            >
            </Route>
            <Route path='/denuncias' element={<ComplaintsPage/>}></Route>
            <Route path='/informacion' element={<InformationPage/>}></Route>
            <Route path='/donaciones' element={<DonationPage/>}></Route>
            
            <Route path="/user/perfil" element={<ProfilePage />} />
            </Routes>
        <Footer/>     
    </BrowserRouter>
  );
}

export default App;
