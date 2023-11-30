import './Modal.css';
import './ModalLogin.css';
import ReactDOM from 'react-dom';
import SectionStructure from 'Components/home/HomeSections/SectionStructure/SectionStructure';
import { baseUrl } from 'Apis/getMascotas.mjs';
import { React, useState, useEffect } from 'react';
import ModalRegister from 'Components/Modales/ModalRegister';
import ClientForm from 'Components/Forms/ClientForm/clientForm';
import visibilityOff from'../../assets/visibility_off.svg';
import visibilityOn from'../../assets/visibility_on.svg';
export const ModalLogin = ({ onLogin, isLoggedIn, children, isOpen, closeModal, modalNumber }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isOpenModal1, setIsOpenModal1] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

 

    // Efecto para limpiar los campos cuando el modal se cierre
    useEffect(() => {
        if (!isOpen) {
          setEmail('');
          setPassword('');
          setError('');
        }
      }, [isOpen]);


    //método POST para el Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(baseUrl + 'auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        // Almacena el token después de una respuesta exitosa
        localStorage.setItem('auth-token', data.token);
        setError('');
        // Actualiza el estado antes de navegar
        closeModal();
        onLogin(true);
        
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        
        // Muestra un mensaje de alerta personalizado centrado
        const alertDiv = document.createElement('div');
        alertDiv.className = 'centered-alert';
        alertDiv.textContent = 'Usuario y/o contraseña incorrecta';
        document.body.appendChild(alertDiv);

        // Elimina el mensaje después de 3 segundos (ajusta según sea necesario)
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 3000);
        
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  //Función para cambiar el icono al mostrar y ocultar contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  const handleClick = (event) => {
    event.stopPropagation();
  };

 

  return ReactDOM.createPortal(
    <>
      <div className={`modal-${modalNumber} ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleClick}>
          <button className="modal-close-btn" onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="modal-close-icon" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          {modalNumber === '3' ? (
            <>
              <div className="modal-title-content">
                <p className="modal-title" style={{ fontSize: '30px', marginBottom: '5px', marginTop: '25px' }}> </p>
              </div>

              <main className="login-main-page" style={{ height: '300px' }}>
                <SectionStructure className="login" sectionTitle="Iniciar Sesión">
                  <section className="login-section">
                    <div className="login-content">
                      <div className="login-box">
                        <form onSubmit={handleLogin}>
                          <label>
                            Correo electrónico:
                            <input type="email" value={email} onChange={handleEmailChange} />
                          </label>
                          <br />

                          <div className="password-container">
                            <label>
                              Contraseña:
                              <div className="password-input-container">
                                <input
                                  type={showPassword ? 'text' : 'password'}
                                  id="password"
                                  value={password}
                                  onChange={handlePasswordChange}
                                />
                                <div className="password-icon" onClick={togglePasswordVisibility}>
                                  <img
                                    src={showPassword ? visibilityOn : visibilityOff}
                                    alt="Toggle Password Visibility"
                                  />
                                </div>
                              </div>
                            </label>
                          </div>

                          <br />
                          <button className="button-login" type="submit">
                            Ingresar
                          </button>
                        </form>
                        <p>
                          ¿No tienes una cuenta?{' '}
                          <button className="button-register" onClick={() => setIsOpenModal1(true)}>
                            Regístrate aquí
                          </button>
                        </p>
                      </div>
                      <ModalRegister
                        isOpen={isOpenModal1}
                        closeModal={() => setIsOpenModal1(false)}
                        modalNumber="2"
                      >
                        <ClientForm closeModal={() => setIsOpenModal1(false)}></ClientForm>
                      </ModalRegister>
                    </div>
                  </section>
                </SectionStructure>
              </main>
            </>
          ) : (
            <>
              {children}
            </>
          )}
        </div>
      </div>
      
    </>,
    document.body
  );
};

export default ModalLogin;