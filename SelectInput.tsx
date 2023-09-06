import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput, Menu, Divider } from 'react-native-paper';

interface SelectInputProps {
    label: string;
    options: string[];
    onSelect: (selectedOption: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ label, options, onSelect }) => {
    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const showMenu = () => setVisible(true);
    const hideMenu = () => setVisible(false);

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        hideMenu();
    };

    return (
        <View>
            <TextInput
                label={label}
                value={selectedOption}
                mode="outlined"
                onFocus={showMenu}
            />

            <Menu
                visible={visible}
                onDismiss={hideMenu}
                anchor={<Button onPress={showMenu}>Open Menu</Button>}
            >
                {options.map((option, index) => (
                    <React.Fragment key={option}>
                        {index > 0 && <Divider />}
                        <Menu.Item
                            onPress={() => handleOptionSelect(option)}
                            title={option}
                        />
                    </React.Fragment>
                ))}
            </Menu>
        </View>
    );
};

export default SelectInput;
