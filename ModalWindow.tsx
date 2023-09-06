import React from 'react';
import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ActionSelect from './ActionSelect';
import TabletsNameEnter from './TabletsNameEnter';
import TabletsQuantitySelect from './TabletsQuantitySelect';
import DosageSelect from './DosageSelect';

type PropsType = {
    dosage: string
    openModal: boolean
    setOpenModal: (value: boolean) => void
    handleItemPress: (selectedItem:string) => void
    handlePress: () => void
    expanded: boolean
    selectedItem: string
    text: string
    setText: () => void
    quantity: number
    handleQuantityChange: (val: number) => void
    selectedDosage: string
    dosageExpanded: boolean
    handleDosagePress: (dosage: string) => void
    handleDosageExpandPress: () => void
}

const ModalWindow = ({
                         openModal,
                         setOpenModal,
                         handleItemPress,
                         handlePress,
                         expanded,
                         selectedItem,
                         text,
                         setText,
                         quantity,
                         handleQuantityChange,
                         selectedDosage,
                         dosageExpanded,
                         handleDosagePress,
                         handleDosageExpandPress,
                         dosage
                     }: PropsType) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={openModal}
            onRequestClose={() => setOpenModal(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <TouchableOpacity style={{alignItems: 'flex-end'}} onPress={() => setOpenModal(false)}>
                        <Image source={require('./assets/x.png')}/>
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 16, marginBottom: 30}}>Добавить
                        напоминание</Text>
                    <ActionSelect handleItemPress={(val)=>handleItemPress(val)} handlePress={handlePress} expanded={expanded}
                                  selectedItem={selectedItem}/>
                    <TabletsNameEnter text={text} setText={setText}/>
                    <View style={{
                        marginTop: 10,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                        <TabletsQuantitySelect quantity={quantity} handleQuantityChange={handleQuantityChange}/>
                        <DosageSelect selectedDosage={selectedDosage} dosageExpanded={dosageExpanded}
                                      handleDosagePress={handleDosagePress}
                                      handleDosageExpandPress={handleDosageExpandPress}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalWindow;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#F3F3F3',
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
})
