import React, { useEffect, useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list';

const Inhibitor = ({onSelect = () => {}}) => {

    const [selected, setSelected] = React.useState("");

    const handleSelectInhibitor = (value) => {
        setSelected(value);
        onSelect(value)
    };

    const data = [
        { key: true, value: 'Sim' },
        { key: false, value: 'Não' }
    ]

    return (
        <SelectList
            setSelected={handleSelectInhibitor}
            data={data.map(inhibitor => ({key: inhibitor.key, value: inhibitor.value }))}
            save="key"
            search={false}
            boxStyles={{ borderColor: "#EB0102" }}
            inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
            placeholder="Selecione se você possui ou não inibidor"
            dropdownStyles={{ borderColor: "#EB0102" }}
            dropdownTextStyles={{ color: "#EB0102" }}
        />
    )
}

export default Inhibitor;