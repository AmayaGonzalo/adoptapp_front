import ContentBlock from "../../Blocks/ContentBlock/ContentBlock";
import './homeRequirement.css'

const HomeRequirement = () => {
    return (
        <div className='requirement-container'>
            <ContentBlock
                className="requirement"
                title="¿Buscando un nuevo compañero?"
                subtitle="Antes tenés que saber:"
                url="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/02/08/16443364419282.jpg"
            >
                <ul className="requirement-list">
                    <li className="requirement-li">Debes ser mayor de 21 años.</li>
                    <li className="requirement-li">Una mascota requiere tiempo y atención.</li>
                    <li className="requirement-li">La seguridad de las mascotas es nuestra prioridad.</li>
                    <li className="requirement-li">Cada solicitud es evaluada por especialistas para garantizar una adopción segura y responsable.</li>
                </ul>
                </ContentBlock>  
        </div>
    )
}
export default HomeRequirement;