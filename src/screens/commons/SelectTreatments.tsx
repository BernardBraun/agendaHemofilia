import { useEffect, useState } from "react";
import { fetchTreatments } from "../../helper/treatments";
import { SelectList } from 'react-native-dropdown-select-list';

const SelectTreatments = ({ onSelect = () => { } }) => {
    const [treatments, setTreatments] = useState([]);
    const [selectedTreatment, setSelectedTreatment] = useState(null);

    useEffect(() => {
        fetchTreatments().then((treatments) => {
            setTreatments(treatments);
        });
    }, []);

    const handleTreatmentChange = (value) => {
        setSelectedTreatment(value);
        console.log(value)
        onSelect(value);
    };

    return (
        <SelectList
            setSelected={handleTreatmentChange}    
            data={treatments.map(treatment => ({ key: treatment.id, value: treatment.title + " " + treatment.dosage + "/" + treatment.unitMeasure }))}
            save="key"
            search={false}
            boxStyles={{ borderColor: '#EB0102' }}
            inputStyles={{ color: '#EB0102', fontWeight: 'bold' }}
            placeholder="Informe o tratamento feito"
            dropdownStyles={{ borderColor: '#EB0102' }}
            dropdownTextStyles={{ color: '#EB0102' }}
        />
    );
};

export default SelectTreatments;