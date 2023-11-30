import './textInput.css'

const TextInput = ({id, className, label,type,placeholder,name,value,onChange}) =>{
    return(
        <div className={`${className} grupoInput`}>
            <label className="label" htmlFor={id}>{label}</label>
                <input className='form-input' type={type} placeholder={placeholder} id={id} name={name} value={value} onChange={onChange} required
                />
        </div>
    );
}

export default TextInput;