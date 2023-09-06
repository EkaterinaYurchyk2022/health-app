import React from 'react';
import {List} from 'react-native-paper';

type PropsType = {
    selectedItem:string
    expanded:boolean
    handlePress:()=>void
    handleItemPress:(item:string)=>void
}

const ActionSelect = ({selectedItem, handleItemPress, handlePress, expanded}:PropsType) => {
    return (
        <List.Section>
            <List.Accordion title={selectedItem} expanded={expanded} onPress={handlePress}>
                <List.Item title="Принять лекарство"
                           onPress={() => handleItemPress('Принять лекарство')}/>
                <List.Item title="Измерить давление"
                           onPress={() => handleItemPress('Измерить давление')}/>
            </List.Accordion>
        </List.Section>
    );
};

export default ActionSelect;
