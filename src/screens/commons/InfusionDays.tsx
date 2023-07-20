import React, { useEffect, useState } from "react";
import { SelectList } from 'react-native-dropdown-select-list';

const InfusionDays = ({onSelect = () => {}}) => {

    const [selected, setSelected] = React.useState("");

    const handleSelectInfusionDays = (value) => {
        setSelected(value);
        onSelect(value)
    };

    const data = [
        { key: '1', value: '1' },
        { key: '2', value: '2' },
        { key: '3', value: '3' },
        { key: '4', value: '4' },
        { key: '5', value: '5' }
    ]

    return (
        <SelectList
            setSelected={handleSelectInfusionDays}
            data={data.map(days => ({key: days.key, value: days.value }))}
            save="key"
            search={false}
            boxStyles={{ borderColor: "#EB0102" }}
            inputStyles={{ color: "#EB0102", fontWeight: "bold" }}
            placeholder="Defina quantas vezes você faz infusão"
            dropdownStyles={{ borderColor: "#EB0102" }}
            dropdownTextStyles={{ color: "#EB0102" }}
        />
    )

}

export default InfusionDays;