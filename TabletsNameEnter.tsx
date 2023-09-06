import React from 'react';
import {TextInput} from 'react-native-paper';

type PropsType = {
    text:string
    setText:(text:string)=>void
}

const TabletsNameEnter = ({text, setText}:PropsType) => {
    return (
        <TextInput
            placeholder="Введите название"
            placeholderTextColor="#979797"
            value={text}
            onChangeText={text => setText(text)}
            style={{backgroundColor: 'white', borderRadius: 4,}}
        />
    );
};

export default TabletsNameEnter;
