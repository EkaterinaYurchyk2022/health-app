import React from 'react';
import {View} from 'react-native';
import {List} from 'react-native-paper';
import {TextLabel} from './Styles';

type PropsType = {
    selectedDosage: string
    dosageExpanded:boolean
    handleDosageExpandPress:(dosage:string)=>void
    handleDosagePress:(dosageTitle: string)=>void
}
const DosageSelect = ({selectedDosage, dosageExpanded, handleDosageExpandPress, handleDosagePress}:PropsType) => {
    return (
        <View>

            <TextLabel>Дозировка</TextLabel>

            <List.Section style={{width:165, marginTop:1}}>
                <List.Accordion title={selectedDosage} expanded={dosageExpanded} onPress={()=>handleDosageExpandPress(selectedDosage)} >
                    <List.Item title="Мг."
                               onPress={() => handleDosagePress('Мг.')}/>
                </List.Accordion>
            </List.Section>

        </View>
    );
};

export default DosageSelect;
