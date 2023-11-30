import SectionStructure from "Components/home/HomeSections/SectionStructure/SectionStructure";
import ContentBlock from 'Components/Blocks/ContentBlock/ContentBlock';
import './informationSection.css';

const InformationSection = () => {
    return (
        <SectionStructure
        className='information'
            sectionTitle='Información'>
            <ContentBlock 
            className="information"
            title="Campaña de vacunación antirrábica"
            url="https://www.zooplus.es/magazine/wp-content/uploads/2019/02/vacunas-para-perros-768x512.jpg">
                <p className="information-text">
                El departamento de zoonosis de la ciudad de Ushuaia se encontrara realizando una nueva jornada de vacunación antirrabica este proximo Sabado 20 y Domingo 21...
            </p>
            </ContentBlock>
        </SectionStructure>
    )
}
export default InformationSection;