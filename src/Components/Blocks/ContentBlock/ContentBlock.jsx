import './contentBlock.css'

const ContentBlock = (props) => {

    const { className, title, subtitle, children, url, alt } = props

    return (
        <article className={`${className} container-block`}>
            <div className={`${className} text-block`}>
                <header className={`${className} header-block`}>
                    <h3 className={`${className} title-block`}>
                        {title}
                    </h3>
                    <h3 className={`${className} subtitle-block`}>
                        {subtitle}
                    </h3>
                </header>
                <div className={`${className} children-block`}>
                {children}
                </div>
            </div>
            <div className={`${className} img-container-block`}>
                <img className={`${className} img-block`} src={url} alt={alt} />
            </div>
        </article>
    )
}
export default ContentBlock;