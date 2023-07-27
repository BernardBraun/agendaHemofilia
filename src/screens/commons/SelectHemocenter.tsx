import React, { useEffect, useState } from "react";
import { fetchHemocenters } from "../../helper/hemocenter";
import { SelectList } from 'react-native-dropdown-select-list';

const SelectHemocenter = ({onSelect = () => {}}) => {
    const [hemocenters, setHemocenters] = useState([]);
    const [selectedHemocenter, setSelectedHemocenter] = useState(null);

    useEffect(() => {
        fetchHemocenters().then((hemocenters) => {
            setHemocenters(hemocenters);
        });
    }, []);

    const handleHemocenterChange = (value) => {
        setSelectedHemocenter(value);
        onSelect(value);
    };

    return (
        <SelectList
            setSelected={handleHemocenterChange}
            data={hemocenters.map(hemocenter => ({ key: hemocenter.id, value: hemocenter.name }))}
            save="key"
            search={false}
            boxStyles={{ borderColor: "#EB0102" }}
            inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
            placeholder="Selecione o seu Hemocentro"
            dropdownStyles={{ borderColor: "#EB0102" }}
            dropdownTextStyles={{ color: "#EB0102" }}
        />
    );
}

export default SelectHemocenter;