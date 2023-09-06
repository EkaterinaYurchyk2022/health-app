import React from 'react';
import {Image, Modal, Text} from 'react-native';
import ActionSelect from './ActionSelect';
import TabletsNameEnter from './TabletsNameEnter';
import TabletsQuantitySelect from './TabletsQuantitySelect';
import DosageSelect from './DosageSelect';
import {CloseButton, MedicineChoice, ModalContainer, ModalContent, ModalTitle, SaveButton} from './Styles';

type PropsType = {
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
                     }: PropsType) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={openModal}
            onRequestClose={() => setOpenModal(false)}
        >
            <ModalContainer>

                <ModalContent>

                    <CloseButton onPress={() => setOpenModal(false)}>
                        <Image source={require('./assets/x.png')}/>
                    </CloseButton>

                    <ModalTitle>Добавить напоминание</ModalTitle>

                    <ActionSelect handleItemPress={(val)=>handleItemPress(val)} handlePress={handlePress} expanded={expanded}
                                  selectedItem={selectedItem}/>

                    <TabletsNameEnter text={text} setText={setText}/>

                    <MedicineChoice>
                        <TabletsQuantitySelect quantity={quantity} handleQuantityChange={handleQuantityChange}/>
                        <DosageSelect selectedDosage={selectedDosage} dosageExpanded={dosageExpanded}
                                      handleDosagePress={handleDosagePress}
                                      handleDosageExpandPress={handleDosageExpandPress}/>
                    </MedicineChoice>

                    <SaveButton>
                        <Text style={{color:'white', fontSize:12}}>Сохранить</Text>
                    </SaveButton>

                </ModalContent>

            </ModalContainer>

        </Modal>
    );
};

export default ModalWindow;
