import React from "react";
import './paginationButtons.css'

const PaginationButton = (props) => {
    const { className, id, value, onClick, text } = props

    const previousBtn = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="previous-pag-btn" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" /> </svg>

    const nextBtn = <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="next-pag-btn" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
    </svg>


    return (

        <button className={className} id={id} value={value} onClick={onClick} >{text === 'Anterior'? previousBtn : text === 'Siguiente' ? nextBtn : text}</button>
    )
}
export default PaginationButton;