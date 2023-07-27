import React, { useEffect, useState } from "react";
import { fetchCitiesForStates } from "../../helper/cities";
import { SelectList } from 'react-native-dropdown-select-list';

const SelectCities = ({ selectedState, onSelect = () => {} }) => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        if (selectedState) {
            fetchCitiesForStates(selectedState).then((cities) => {
                setCities(cities);
            });
        }
    }, [selectedState]);

    const handleCityChange = (value) => {
        setSelectedCity(value);
        onSelect(value);
    };

    return (
        <SelectList
            setSelected={handleCityChange}
            data={cities.map(city => ({ key: city.id, value: city.name }))}
            save="key"
            search={false}
            boxStyles={{ borderColor: "#EB0102" }}
            inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
            placeholder="Selecione a sua cidade"
            dropdownStyles={{ borderColor: "#EB0102" }}
            dropdownTextStyles={{ color: "#EB0102" }}
        />
    );
}

export default SelectCities;
