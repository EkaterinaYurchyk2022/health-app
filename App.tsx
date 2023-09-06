import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import ModalWindow from './ModalWindow';


export default function App() {

    const [openModal, setOpenModal] = useState(false)
    const [expanded, setExpanded] = useState(false) // Для открытия выбора действий
    const [dosageExpanded, setDosageExpanded] = useState(false) // Для открытия выбора дозы
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedDosage, setSelectedDosage] = useState('');
    const [text, setText] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [dosage, setDosage] = useState('');

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
        <View style={styles.container}>
            <View style={{
                flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10
            }}>
                <Text style={{flex: 1, fontSize: 24, fontWeight: 'bold', marginLeft: 15}}>Напоминания</Text>
                <Image
                    source={require('./assets/settings.png')}
                    style={{marginLeft: 10, width: 24, height: 24}}
                />
            </View>
            <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 100, width: 175}}>
                {!openModal &&
                    <Text style={{fontSize: 12, color: '#979797', textAlign: 'center'}}>У вас нет напоминаний, чтобы
                        добавить новое нажмите на «+»</Text>}
            </View>

            <TouchableOpacity
                style={{
                    flex: 1,
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    backgroundColor: '#eaeaea',
                    padding: 10,
                    borderRadius: 25,
                }}
                onPress={() => setOpenModal(true)}
            >
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#333', textAlign: 'center'}}>
                    +
                </Text>
            </TouchableOpacity>
            <ModalWindow
                dosage={dosage}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:
            '#fff',
        alignItems:
            'center',
        justifyContent:
            'center',
        color:
            '#000000',
        width:
            375,

    }
    ,
       circle: {
        width: 30,
        height:
            30,
        borderRadius:
            15,
        backgroundColor:
            'gray',
        justifyContent:
            'center',
        alignItems:
            'center',
        marginHorizontal:
            10,
    }
    ,
    icon: {
        fontSize: 15,
        color:
            'white',
    }
    ,
    input: {
        flex: 1,
        fontSize:
            15,
        width:
            165
    }
    ,
});
