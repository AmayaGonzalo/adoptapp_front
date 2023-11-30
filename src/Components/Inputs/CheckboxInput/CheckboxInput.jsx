import './checkboxInput.css';

const CheckboxInput = ({name, value, id, text, type, checked, onChange }) => {

    return (
        <>
        <label className="filter-label" htmlFor={id}>
            <input className="filter-checkbox" type={type} id={`${name}${value}`} checked={checked} value={value} name={name} onChange={onChange}/>
        {text}
        </label>
        </>
    )
}
export default CheckboxInput;