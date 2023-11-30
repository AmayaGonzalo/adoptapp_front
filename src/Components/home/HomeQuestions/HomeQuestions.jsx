import ContentBlock from "Components/Blocks/ContentBlock/ContentBlock";
import { useState } from "react";
import './homeQuestions.css'

const HomeQuestions = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null)

    const toggleAnswer = (index) => {
        setSelectedQuestion(index === selectedQuestion ? null : index)
    }
    const plusIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="plus-icon" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
    </svg>;

    const lessIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="less-icon" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
    return (
        <div className='questions-container'>
            <ContentBlock
                className="questions"
                title="¿Querés adoptar pero tenés dudas?"
                subtitle="Te compartimos las preguntas más frecuentes"
                url='https://www.perrospedia.com/wp-content/uploads/2013/05/cachorro-leyendo.jpg'>
                <ul className="questions-list">
                <li className='question' onClick={() => toggleAnswer(1)}
                    selected={selectedQuestion === 1}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 1 ?  plusIcon  :  lessIcon }
                        </div>
                        <p className="question-p">¿Es obligatorio completar el formulario de adopcion?</p>
                    </div>
                    <p className={`${selectedQuestion === 1 ? 'show-answer' : 'answer'}`} >Sí, es necesario y obligatorio. Adoptarlas es asumir un compromiso de por vida. Tenemos que asegurarnos que la mascota se adapta a las condiciones de vida de la nueva familia tanto como la familia a las características de las mascotas.
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(2)}
                    selected={selectedQuestion === 2}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 2 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">¿Como me preparo para la llegada de mi mascota?</p>
                    </div>
                    <p className={`${selectedQuestion === 2 ? 'show-answer' : 'answer'}`} >Asegurate de contar con los elementos básicos para que esté cómoda: una cuchita o colchoneta donde dormir, un platito para comer y tomar agua, una chapita o collar con tus datos y su nombre, y, si es un gatito piedritas y litera.
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(3)}
                    selected={selectedQuestion === 3}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 3 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">¿Cuales son los cuidados que debe recibir mi mascota?</p>
                    </div>
                    <p className={`${selectedQuestion === 3 ? 'show-answer' : 'answer'}`}>Es muy importante que te acerques a un veterinario que pueda recomendarte y enseñarte sobre las vacunas que necesita, cuándo aplicarlas, cómo realizar una correcta desparasitación, según peso, hábitos, edad, y qué alimento cubre las necesidades de tu mascota.
                    </p>
                </li>
                </ul>
            </ContentBlock>
            <ContentBlock
                className="questions"
                title="¿Por qué adoptar?"
                subtitle="Contamos con 9 razones para que adoptar sea la mejor eleccion"
                url='https://images.pexels.com/photos/9942475/pexels-photo-9942475.jpeg?auto=compress&cs=tinysrgb&w=600'>
                <ul className="questions-list">
                <li className='question' onClick={() => toggleAnswer(1)}
                    selected={selectedQuestion === 1}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 1 ?  plusIcon  :  lessIcon }
                        </div>
                        <p className="question-p">1.Evita la superpoblación</p>
                    </div>
                    <p className={`${selectedQuestion === 1 ? 'show-answer' : 'answer'}`} > Al adoptar se contribuye a reducir la superpoblación, ya que si se compra una mascota se quita la oportunidad 
        de brindarle el refugio y cariño a una mascota de la calle indefensa
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(2)}
                    selected={selectedQuestion === 2}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 2 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">2.Una vida no tiene precio</p>
                    </div>
                    <p className={`${selectedQuestion === 2 ? 'show-answer' : 'answer'}`} > Los animales sienten y sufren, por tanto deberíamos abandonar el pensamiento de ver a una mascota como un producto
        que se consigue a cualquier precio.
        Al comprar una se afianza sobre la creencia de poder mercantilizar animales sin importar su integridad
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(3)}
                    selected={selectedQuestion === 3}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 3 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">3.Estarás ayudando a otro animal de la calle</p>
                    </div>
                    <p className={`${selectedQuestion === 3 ? 'show-answer' : 'answer'}`}>Las personas que se llevan a un gato o perro de un refugio animal, colaboran con el rescate de otros animales,
        ya que estos centros de adopcion renuevan un espacio para otro animales que estén en peligro o abandono
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(4)}
                    selected={selectedQuestion === 4}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 4 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">4.No se incita a la venta animal</p>
                    </div>
                    <p className={`${selectedQuestion === 4 ? 'show-answer' : 'answer'}`}>La comercializacion animal fortalece el maltrato y trafico animal. 
        Quienes organizan esto, no respetan el ciclo de reproducción de las hembras,                 
        lo que produce problemas en el desarrollo de la vida de los propios animales
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(5)}
                    selected={selectedQuestion === 5}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 5 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">5.Los animales de refugio no son agresivos</p>
                    </div>
                    <p className={`${selectedQuestion === 5 ? 'show-answer' : 'answer'}`}> Los animales al convivir con personas y con otros de su especie, 
        se vuelven mas tolerantes y pacíficos, mas allá de que cada mascota tiene su propio caracter
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(6)}
                    selected={selectedQuestion === 6}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 6 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p"> 6.Variedad de opciones</p>
                    </div>
                    <p className={`${selectedQuestion === 6 ? 'show-answer' : 'answer'}`}> Se puede escoger de diferentes tamaños y edades, de acuerdo al gusto, el tiempo, 
        paciencia y experiencia propia
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(7)}
                    selected={selectedQuestion === 7}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 7 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">7.Son los animales más cariñosos</p>
                    </div>
                    <p className={`${selectedQuestion === 7 ? 'show-answer' : 'answer'}`}>Ellos reconocen quién les quiere y agradecen esta oportunidad, por esta razón 
        estos animalitos serán los más fieles
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(8)}
                    selected={selectedQuestion === 8}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 8 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">8.Adoptarás a una mascota sola</p>
                    </div>
                    <p className={`${selectedQuestion === 8 ? 'show-answer' : 'answer'}`}>Los refugios en la mayoría de los casos se responsabilizan de tener a los animales 
        lo mas saludable posible para que el adoptante no tenga dificultades o dudas a la hora de llevarse 
        una mascota a sus hogares
                    </p>
                </li>
                <li className='question' onClick={() => toggleAnswer(9)}
                    selected={selectedQuestion === 9}>
                    <div className="question-div">
                        <div className="toggle-icon">
                            {selectedQuestion === 9 ? plusIcon : lessIcon }
                        </div>
                        <p className="question-p">9.Encontrarás un compañero único</p>
                    </div>
                    <p className={`${selectedQuestion === 9 ? 'show-answer' : 'answer'}`}>Los animales tienen una sensibilidad especial y sienten nuestras vibras y energias;
        la mascota se amoldará al dueño y también imitará algunas actitudes nuestras
                    </p>
                </li>
                </ul>
            </ContentBlock>
        </div>
    )
}
export default HomeQuestions;