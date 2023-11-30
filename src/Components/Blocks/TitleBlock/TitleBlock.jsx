import './titleBlock.css';

const TitleBlock = (props) => {
    return (
        <header className="title-section-container">
            <h3 className="title-section-block">
                {props.title}
            </h3>
        </header>
    )
}
export default TitleBlock;