import InputsBox from "Components/Inputs/InputsBox/InputsBox";
import CheckboxInput from "Components/Inputs/CheckboxInput/CheckboxInput";
import './searchFilter.css'
import { useState } from "react";

const SearchFilter = ({ setFilters }) => {

    const specieOptions = [
        {text: "Perro", value: "Perro", name: "specie" },
        {text: "Gato",  value: "Gato",  name: "specie" },
        {text: "Otros", value: "Otros", name: "specie" }
    ];
    const sexOptions = [
        {text: "Macho",  value: "Macho",  name: "sex" },
        {text: "Hembra", value: "Hembra", name: "sex" }
    ];
    const locationOptions = [
        {text: "Ushuaia",    value: "1", name: "location" },
        {text: "Tolhuin",    value: "2", name: "location" },
        {text: "Rio Grande", value: "3", name: "location" }
    ];

    const [selectedOptions, setSelectedOptions] = useState({
        specie: undefined,
        sex: undefined,
        location: undefined
    });

    const handleStateChange = (event) => {
        //Se desestructura los valores del checkbox al ocurrir el evento. Extrayendo los valores 'name' y checked
        const { name, checked, value } = event.target;

        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [name]: checked ? value : undefined
        }));

        setFilters((prevFilter) => ({
            ...prevFilter, // se crea una copia del objeto prevFilter para mantener todos los filtros seleccionados
            [name]: checked ? value : undefined // se verifica si el check es true se retorna el name del mismo sino se devuelve undefined
        }));
    }
    return (
        <>
            <InputsBox
                title="Especie">
                {specieOptions.map((option, index) => (
                    <CheckboxInput
                        key={index}
                        type="checkbox"
                        text={option.text}
                        value={option.value}
                        name={option.name}
                        onChange={handleStateChange}
                        checked={selectedOptions.specie === option.value}
                    />
                ))}
            </InputsBox>
            <InputsBox
                title="Sexo">
                {sexOptions.map((option, index) => (
                    <CheckboxInput
                        key={index}
                        type="checkbox"
                        text={option.text}
                        value={option.value}
                        name={option.name}
                        onChange={handleStateChange}
                        checked={selectedOptions.sex === option.value}
                    />
                ))}
            </InputsBox>
            <InputsBox
                title="Ubicacion">
                {locationOptions.map((option, index) => (
                    <CheckboxInput
                        key={index}
                        type="checkbox"
                        text={option.text}
                        value={option.value}
                        name={option.name}
                        onChange={handleStateChange}
                        checked={selectedOptions.location === option.value}
                    />
                ))}
            </InputsBox>
        </>
    )
}
export default SearchFilter;