import React from 'react';
import {View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TextInput} from 'react-native-paper';
import {QuantityChoice, Icon, TextLabel} from './Styles';

type PropsType = {
    quantity: number
    handleQuantityChange:(quantity:number)=>void
}

const TabletsQuantitySelect = ({quantity, handleQuantityChange}:PropsType) => {
    return (
        <View>

            <TextLabel style={{fontSize: 12,}}>Количество таблеток</TextLabel>

            <QuantityChoice>

                <Icon>
                    <Ionicons name="md-remove-circle-outline" size={24} color="black"
                              onPress={() => handleQuantityChange(quantity - 1)}/>
                </Icon>

                <TextInput
                    placeholderTextColor="#979797"
                    value={quantity.toString()}
                    style={{
                        backgroundColor: 'white',
                        color: 'white',
                        borderRadius: 4,
                        width: 165,
                        height: 50,
                        flex: 1,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        fontSize: 15,
                    }}
                />

                <Icon>
                    <Ionicons name="add-circle-outline" size={24} color="black"
                              onPress={() => handleQuantityChange(quantity + 1)}/>
                </Icon>

            </QuantityChoice>

        </View>
    );
};

export default TabletsQuantitySelect;
