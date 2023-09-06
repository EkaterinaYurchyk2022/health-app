import {Image} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import ModalWindow from './ModalWindow';
import {Button, ButtonIcon, Container, MainContent, NotificationText, Text, TopLayout} from './Styles';


export default function App() {

    const [openModal, setOpenModal] = useState(false)
    const [expanded, setExpanded] = useState(false) // Для открытия выбора действий
    const [dosageExpanded, setDosageExpanded] = useState(false) // Для открытия выбора дозы
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedDosage, setSelectedDosage] = useState('');
    const [text, setText] = useState('');
    const [quantity, setQuantity] = useState(0);

    const handlePress = () => setExpanded(!expanded) // Для появления селекта выбора действия
    const handleDosageExpandPress = () => setDosageExpanded(!dosageExpanded) // Для появления селекта дозировки

    const handleItemPress = (item: string) => { // При нажатии на действие, оно устанавливается как выбранное и выпадающий список закрывается
        setSelectedItem(item);
        setExpanded(false)
    };

    const handleDosagePress = (dosage:string) => { // При нажатии на дозировку, она устанавливается как выбранная и выпадающий список закрывается
        setSelectedDosage(dosage);
        setDosageExpanded(false)
    };

    const handleQuantityChange = (value: number) => { // Для изменения количества выбранных таблеток
        setQuantity(value);
    };

    return (
        <Container>

            <TopLayout>
                <Text>Напоминания</Text>
                <Image source={require('./assets/settings.png')}/>
            </TopLayout>

            <MainContent>
                {!openModal &&
                    <NotificationText>У вас нет напоминаний, чтобы
                        добавить новое нажмите на «+»</NotificationText>}
            </MainContent>

            <Button onPress={() => setOpenModal(true)}>
                <ButtonIcon>
                    +
                </ButtonIcon>
            </Button>

            <ModalWindow
                handleDosageExpandPress={handleDosageExpandPress}
                handleDosagePress={handleDosagePress}
                dosageExpanded={dosageExpanded}
                selectedDosage={selectedDosage}
                handleQuantityChange={handleQuantityChange}
                quantity={quantity}
                setText={()=>setText(text)}
                text={text}
                selectedItem={selectedItem}
                expanded={expanded}
                openModal={openModal}
                handlePress={handlePress}
                handleItemPress={(val)=>handleItemPress(val)}
                setOpenModal={setOpenModal}
            />
            <StatusBar style="auto"/>
        </Container>
    );
}

