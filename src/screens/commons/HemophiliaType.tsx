import React, { useEffect, useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list';

const HemophiliaType = ({onSelect = () => {}}) => {

    const [selected, setSelected] = React.useState("");

    const handleSelectHemophiliaType = (value) => {
        setSelected(value)
        onSelect(value)
    };

    const data = [
        { key: 'A_LEVE', value: 'A / Leve' },
        { key: 'A_MODERADA', value: 'A / Moderada' },
        { key: 'A_GRAVE', value: 'A / Grave' },
        { key: 'B_LEVE', value: 'B / Leve' },
        { key: 'B_MODERADA', value: 'B / Moderada' },
        { key: 'B_GRAVE', value: 'B / Grave' }
    ]

    

    return (
        <SelectList
            setSelected={handleSelectHemophiliaType}
            data={data.map(type => ({ key: type.key, value: type.value }))}
            save="key"
            search={false}
            boxStyles={{ borderColor: "#EB0102", width: "100%", height: 45 }}
            inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
            placeholder="Selecione o tipo de sua Hemofilia"
            dropdownStyles={{ borderColor: "#EB0102" }}
            dropdownTextStyles={{ color: "#EB0102" }}

        />
    )
}

export default HemophiliaType;