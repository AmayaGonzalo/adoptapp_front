import './header.css';
import { Link, useLocation } from 'react-router-dom';
import  Logo  from 'assets/logo.svg'
import { scrollToTop } from 'functions.mjs';
// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ModalLogin from 'Components/Modales/ModalLogin';


const Header = ( { onLogin, isLoggedIn, onLogout } ) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpenModal1, setIsOpenModal1] = useState(false);
   // Lógica para determinar si se muestra la imagen de fondo
  const showBackgroundImage = location.pathname !== '/login';
       
    const handleLogout = () => {
      // Elimina el token al cerrar sesión
    localStorage.removeItem('auth-token');
    onLogout(); // Llama a la función proporcionada al cerrar sesión
    navigate('/');
    };  
   

    return (
        <div className={`header ${showBackgroundImage ? 'with-background' : ''}`}>
            <nav id="nav" className='main-nav'>
            <div className='logo-div'>
                <Link to='/' className='logo-link'>
                    <img className='logo' src={Logo} alt="logo" onClick={scrollToTop}/>
                </Link>
            </div> 
                <ul className="nav-links">
                    <li className="link-item">
                        <Link to='/adopciones/mascotas' onClick={scrollToTop}>Adoptar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/denuncias' onClick={scrollToTop} >Denunciar</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/informacion' onClick={scrollToTop} >Información</Link>
                    </li>
                    <li className="link-item">
                        <Link to='/donaciones' onClick={scrollToTop} >Ayudar</Link>
                    </li>
                    <li className="link-item">
                        <a href='#footer'>Contacto</a>
                        <ul className="nav-icons">
                            <li><i className="fa-brands fa-whatsapp"></i></li>
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                        </ul>
                    </li>                    
                    {isLoggedIn ? (
                        <>
                            <li className="link-item">
                                <Link to="/user/perfil">Perfil</Link>
                            </li>
                            <li className="link-item">
                                <button className="btn-link-item" onClick={handleLogout}>Cerrar Sesión</button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="link-item">
                                <button className="btn-link-item" onClick={() => setIsOpenModal1(true)}  >Iniciar Sesión</button>
                            </li>
                            <ModalLogin
                                isOpen={isOpenModal1}
                                closeModal={() => { setIsOpenModal1(false); } }                               
                                modalNumber="3"
                                onLogin={() => onLogin(false)}
                                >                                        
                            </ModalLogin>
                        </>
                    )}                   
                </ul>   
            </nav>
            <button type="button" id="btn-burger" className="button-menu">
                <span className="lines"></span>
                <span className="lines"></span>
                <span className="lines"></span>
            </button>
            <header className="header" id="home">
        </header>
        </div>
    );
};

export default Header;