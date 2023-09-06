import React from 'react';
import {Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {TextInput} from 'react-native-paper';

type PropsType = {
    quantity: number
    handleQuantityChange:(quantity:number)=>void
}

const TabletsQuantitySelect = ({quantity, handleQuantityChange}:PropsType) => {
    return (
        <View>
            <Text style={{fontSize: 12, }}>Количество таблеток</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                height: 65,
                backgroundColor: 'white',
            }}>
                <View style={{
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Ionicons name="md-remove-circle-outline" size={24} color="black"
                              onPress={() => handleQuantityChange(quantity - 1)}/>
                </View>
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
                <View style={{
                    width: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Ionicons name="add-circle-outline" size={24} color="black"
                              onPress={() => handleQuantityChange(quantity + 1)}/>
                </View>
            </View>
        </View>
    );
};

export default TabletsQuantitySelect;
