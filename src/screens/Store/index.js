import React, { useState } from 'react'
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageBtn,
    SignMessageBtnText,
    SignMessageBtnTextBold,
    MenuContainer,
    TriMenu,
    BackMenu,
    StoreNavBar,
    BuyButton,
    BuyButtonTxt,
    MenuButton,
    MenuButtonTxt,
    MenuHolder,
    ContainerHolder,
    LogoHolder,
    BuyCardEUEELA,
    BuyKitEUEELA,
    BuyCardMEUEU,
    BuyKitMEUEU,
    BuyCardQUINZENAL,
    BuyKitQUINZENAL,
    BuyCardFRANGAO,
    BuyKitFRANGAO,
    BuyCardFRANGONOBRE,
    BuyKitFRANGONOBRE,
    BuyCardFRANGOMODERADO,
    BuyKitFRANGOMODERADO,
    BackToCar,
    
  

 } from './styles'

import Api from '../../Api'

import { useNavigation } from '@react-navigation/native'
import RNPickerSelect from "react-native-picker-select";
import CarneLogo from '../../assets/carnelogo.svg'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import 'localstorage-polyfill'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import 'localstorage-polyfill'
import WaitingBox from './Waiting'
import Waiting from './Waiting'
import axios from 'axios'
import ProductCard from './ProductCard'
import ListItem from './Flatlist'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default () => {

    var babyArray = localStorage.getItem("userBabyStorage")

    var vOneLS = localStorage.getItem("userNameLocalStorage");  
    var finalBuy = localStorage.getItem("userBuyStorage");  

    var nameField = vOneLS; 

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };

    const marketIcon = <Icon name="shopping-bag" size={20} color="white" />;
    const tagsIcon = <Icon name="tags" size={15} color="white" />;
    const reportIcon = <Icon name="file" size={15} color="white" />;
    const trophyIcon = <Icon name="trophy" size={15} color="white" />;
    const diceIcon = <Icons name="casino" size={15} color="white" />;
    const lowPriceIcon = <Icons name="payments" size={15} color="white" />;
    const helpIcon = <Icon name="headphones" size={15} color="white" />;
    const menuIcon = <Icons name="menu" size={55} color="#C93F3C" />;
    const carIcon = <Icon name="shopping-cart" size={35} color="#C93F3C" />;
    const arrowLeftIcon = <Icon name="arrow-left" size={35} color="#C93F3C" />;

    var vOneLS = localStorage.getItem("userNameLocalStorage");  
    var finalBuy = localStorage.getItem("userBuyStorage"); 
    var babyArray = localStorage.getItem("userBabyStorage")
    var array123 = babyArray
    var finalCar = finalBuy
    var nameField = vOneLS; 
    const navigation = useNavigation()

    const [cpfcnpjField, setcpfcnpjField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [carVisible, setCarVisible] = useState(false);
    const [scheduleVisible, setScheduleVisible] = useState(false);
    const [deliveryVisible, setDeliveryVisible] = useState(false);
    const [paymentVisible, setPaymentVisible] = useState(false);
    const [marketCarIcon, setMarketCarIcon] = useState('');
    const [kitName, setKitName] = useState('')
    const [kitPrice, setKitPrice] = useState('')
    var [theArray, setTheArray] = useState([]);
    var theArrayString = theArray.join('                        -  ');
    let [isLoading, setIsLoading] = useState(false)
    let [scheduleDate, setScheduleDate] = useState('')
    var [kitPriceArray, setKitPriceArray] = useState([0])
    var [dateMode, setDateMode] = useState('')
    var [deliveryMode, setDeliveryMode] = useState('')
    var [paymentMode, setPaymentMode] = useState('')
    var [resumeVisible, setResumeVisible] = useState(false)

    var firstDate = new Date().getDate() + 3;
    var secondDate = new Date().getDate() + 4;
    var thirdDate = new Date().getDate() + 5;
    var month = new Date().getMonth();
    var finalFirstDate = `${firstDate}/${month}`
    var finalSecondDate = `${secondDate}/${month}`
    var finalThirdDate = `${thirdDate}/${month}`

    const Item = {
      nome: kitName,
      id: 1,
      price: kitPrice
    }

    
    const array1 = [1, 2, 3, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;    

    const backMenuClick = () => {
        navigation.reset({
            routes: [{name: 'Home'}]
        })
    }
   
    var sum = kitPriceArray.reduce((a, n) => (a + Number(n)), 0);

    const finishBuy = () => {
      console.log(finalBuy)
      if(finalCar.totalPrice < 2000) {
        alert('O pedido mínimo é de R$2.000')
      }else {
        setScheduleVisible(!scheduleVisible)
      }
    }
    
    const updateCart = () => {   
      setIsLoading(true)  
      setTimeout(() => {
        setTheArray([...theArray, [Item.nome,  Item.price]]);       
        setKitPriceArray([...kitPriceArray, [Item.price]])        
        setIsLoading(false)    
        
      }, 3000);
  }
       const handleFinalClick = async () => {
                  
        
                navigation.reset({
                    routes: [{name: 'Done'}]
                })               
         
        
    }

    const request = {
      descricao: theArrayString,
      valor_pedido: sum,
      id_pedido: 1,
      frete: deliveryMode,
      tipo_pg: paymentMode,
      data_entrega: dateMode,
      nome_cliente: nameField      
    }

    async function sendRequest() {          
        await axios.post(`https://api-carnedecasa.herokuapp.com/api/newsell`, request)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
     
      }

    return (
        <Container>
              <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enviar para o carrinho o Kit {kitName} no valor de {kitPrice}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible);updateCart()}}
              
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonCancel, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
              <Modal
        animationType="slide"
        transparent={true}
        visible={carVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!carVisible);
        }}
      >
        <View style={styles.centeredView}>
       
          <View style={styles.modalView}>
          <BackToCar onPress={() => setCarVisible(!carVisible)}>{arrowLeftIcon}</BackToCar>
            <Text style={styles.modalText}>Carrinho de {nameField}: </Text>
            <View style={styles.finalView}>
            <Text style={styles.finalViewText}>{theArrayString}</Text>
            </View>
            <Text style={styles.modalText}>TOTAL: R${sum}</Text> 

            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => finishBuy()}
            >               
              <Text style={styles.textStyle}>Ir para o agendamento</Text>
            </Pressable>
           
          </View>
        </View>
      </Modal>  
   
              <Modal
        animationType="slide"
        transparent={true}
        visible={scheduleVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!scheduleVisible);
        }}
      >
        <View style={styles.centeredView}>
       
          <View style={styles.modalView}>
          <BackToCar onPress={() => setScheduleVisible(!Visible)}>{arrowLeftIcon}</BackToCar>
            <Text style={styles.modalText}>Escolha uma das datas disponíveis:</Text>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {setDateMode(finalFirstDate);setDeliveryVisible(!deliveryVisible)}}
            >               
              <Text style={styles.textStyle}>{firstDate}/{month}</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {setDateMode(finalSecondDate);setDeliveryVisible(!deliveryVisible)}}
            >               
              <Text style={styles.textStyle}>{secondDate}/{month}</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {setDateMode(finalThirdDate);setDeliveryVisible(!deliveryVisible)}}
            >               
              <Text style={styles.textStyle}>{thirdDate}/{month}</Text>
            </Pressable>         
            

          
           
          </View>
        </View>
      </Modal>  
   
              <Modal
        animationType="slide"
        transparent={true}
        visible={deliveryVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!deliveryVisible);
        }}
      >
        <View style={styles.centeredView}>
       
          <View style={styles.modalView}>
          <BackToCar onPress={() => setDeliveryVisible(!deliveryVisible)}>{arrowLeftIcon}</BackToCar>
            <Text style={styles.modalText}>Estamos quase lá! Você prefere Frete ou Retirar o pedido pessoalmente?</Text>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {setDeliveryMode('Retirar');setPaymentVisible(!paymentVisible)}}
            >               
              <Text style={styles.textStyle}>Retirar o Pedido</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {setDeliveryMode('Frete');setKitPriceArray([...kitPriceArray, 15]);setPaymentVisible(!paymentVisible)}}
            >               
              <Text style={styles.textStyle}>Frete (+ R$15,00)</Text>
            </Pressable>
                 
            

          
           
          </View>
        </View>
      </Modal>  
              <Modal
        animationType="slide"
        transparent={true}
        visible={paymentVisible}
        onRequestClose={() => {
         
          setModalVisible(!paymentVisible);
        }}
      >
        <View style={styles.centeredView}>
       
          <View style={styles.modalView}>
          <BackToCar onPress={() => setPaymentVisible(!paymentVisible)}>{arrowLeftIcon}</BackToCar>
            <Text style={styles.modalText}>Qual será o meio de pagamento? (Será feito na entrega do pedido)</Text>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {setPaymentMode('Boleto');setResumeVisible(!resumeVisible)}}
            >               
              <Text style={styles.textStyle}>Boleto</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {setPaymentMode('TED/PIX');setResumeVisible(!resumeVisible)}}
            >               
              <Text style={styles.textStyle}>TED / PIX</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {setPaymentMode('Cartão de Crédito');setResumeVisible(!resumeVisible)}}
            >               
              <Text style={styles.textStyle}>Cartão de Crédito</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {setPaymentMode('Cartão de Débito');setResumeVisible(!resumeVisible)}}
            >               
              <Text style={styles.textStyle}>Cartão de Débito</Text>
            </Pressable>
                 
            

          
           
          </View>
        </View>
      </Modal>  
              <Modal
        animationType="slide"
        transparent={true}
        visible={resumeVisible}
        onRequestClose={() => {
         
          setModalVisible(!resumeVisible);
        }}
      >
        <View style={styles.centeredView}>
       
          <View style={styles.modalView}>
          <BackToCar onPress={() => setResumeVisible(!resumeVisible)}>{arrowLeftIcon}</BackToCar>
            <Text style={styles.modalText}>Resumo do seu pedido:</Text>                        
            <Text style={styles.modalText}>Total: {sum}</Text>                        
            <Text style={styles.modalText}>Data de entrega: {dateMode}</Text>                        
            <Text style={styles.modalText}>Frete ou Retirada: {deliveryMode}</Text>                        
            <Text style={styles.modalText}>Método de pagamento: {paymentMode}</Text>                        
            

            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {sendRequest();handleFinalClick()}}
            >               
              <Text style={styles.textStyle}>Ok, finalizar pedido</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => setResumeVisible(!resumeVisible)}
            >               
              <Text style={styles.textStyle}>Cancelar e voltar</Text>
            </Pressable>
           
          </View>
        </View>
      </Modal>  
    
   
             
           <StoreNavBar>
            <TriMenu style={{backgroundColor:'tomato', borderWidth:1, width:100, position:'absolute', left:150, display:'flex', justifyContent:'center', alignItems:'center'}} onPress={() => {
              this.scrollView.scrollToEnd({ animated: true }); 
               
            }}><Text style={{color:'azure'}}>Ver Carrinho</Text></TriMenu>
            <BackMenu onPress={backMenuClick} value={marketCarIcon}>{arrowLeftIcon}</BackMenu>
            
            </StoreNavBar>
           <ScrollView  ref={(view) => {
    this.scrollView = view }} >
            <MenuContainer>           
            <ListItem />                       
            </MenuContainer> 
                          
            </ScrollView>
          
          
        </Container>
    )
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
     
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 185,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      width: 300
    },
    buttonCancel: {
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      top: 15,
      width: 300
    },
    buttonFinal: {
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      top: 15,
      width: 300
    },
    buttonOpen: {
      backgroundColor: "black",
    },
    buttonClose: {
      backgroundColor: "black",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 16,
      width: 100
    },
    finalViewText: {
      marginBottom: 15,
      
      fontSize: 16,
      width: 100
    },
    finalView: {
        width: 300,
        height: 300,
        backgroundColor: '#f0f0f5',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
  });
  

{/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}