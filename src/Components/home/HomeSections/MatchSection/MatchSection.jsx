import ContentBlock from 'Components/Blocks/ContentBlock/ContentBlock';
import SectionStructure from 'Components/home/HomeSections/SectionStructure/SectionStructure';
import './matchSection.css';

const MatchSection = () => {
    return (
        <SectionStructure
        className='match'
        sectionTitle='Ya hicieron match'>
            <ContentBlock
            className="match"
            title="Ellos ya encontraron un hogar donde le brinden amor."
            url="https://img.freepik.com/foto-gratis/hombre-abrazando-su-amigable-pitbull_23-2149131399.jpg">
            <p className='match-text'>¡Sumate vos también a ésta familia y dales una oportunidad!</p>
            </ContentBlock>
        </SectionStructure>
    )
}
export default MatchSection;