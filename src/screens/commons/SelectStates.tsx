import React, { useEffect, useState } from "react";
import { fetchStates } from "../../helper/states";
import { SelectList } from 'react-native-dropdown-select-list';

const SelectStates = ({ onSelect = () => {} }) => {
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState(null);

    useEffect(() => {
        fetchStates().then((states) => {
            setStates(states);
        });
    }, []);

    const handleStateChange = (value) => {
        setSelectedState(value);
        console.log(value)
        onSelect(value);
    };

    return (
        <SelectList
            setSelected={handleStateChange}
            data={states.map(state => ({ key: state.id, value: state.name }))}
            save="key"
            search={false}
            boxStyles={{ borderColor: "#EB0102" }}
            inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
            placeholder="Selecione o seu estado"
            dropdownStyles={{ borderColor: "#EB0102" }}
            dropdownTextStyles={{ color: "#EB0102" }}
        />
    );
}

export default SelectStates;
