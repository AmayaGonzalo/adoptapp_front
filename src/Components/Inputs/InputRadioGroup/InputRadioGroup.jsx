import React from 'react';
import InputsBox from '../InputsBox/InputsBox';
import CheckboxInput from '../CheckboxInput/CheckboxInput';

const InputRadioGroup = ({ title, options, name, onChange }) => {
    return (
        <InputsBox title={title}>
            {options.map(option => (
                <CheckboxInput
                    key={option.value}
                    type="radio"
                    text={option.text}
                    value={option.value}
                    name={name}
                    onChange={onChange}
                />
            ))}
        </InputsBox>
    );
};

export default InputRadioGroup;