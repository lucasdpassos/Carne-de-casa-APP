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
    BuyKitFRANGOMODERADO
  

 } from './styles'

import Api from '../../Api'

import { useNavigation } from '@react-navigation/native'
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



export default () => {

    var vOneLS = localStorage.getItem("userNameLocalStorage");  

    var nameField = vOneLS; 


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

    var nameField = vOneLS; 
    const navigation = useNavigation()

    const [cpfcnpjField, setcpfcnpjField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const [carVisible, setCarVisible] = useState(false);
    const [marketCarIcon, setMarketCarIcon] = useState('');
    let [kitName, setKitName] = useState('')
    let [kitPrice, setKitPrice] = useState('')
    let [theArray, setTheArray] = useState([]);

    const Carrinho = {
      nome: kitName,
      id: 1,
      price: kitPrice
    }

    const backMenuClick = () => {
        navigation.reset({
            routes: [{name: 'Home'}]
        })
    }

    
    const handleSignClick = async () => {
        if(cpfcnpjField != '') {

            let json = await Api.signIn(cpfcnpjField)  
            
            if (json == true) {
                navigation.reset({
                    routes: [{name: 'SignUp'}]
                })                
            } else {
                
            }
            

        } else {
            alert('Preencha os campos')
        }
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
            <Text style={styles.modalText}>Enviar para o carrinho o Kit {kitName} no valor de R$191,41?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
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
            <Text style={styles.modalText}>Carrinho de {nameField}: </Text>
            <View style={styles.finalView}>
            <Text style={styles.finalViewText}>{Carrinho.nome} - {Carrinho.price}</Text>
            </View>
            <Text style={styles.modalText}>{Carrinho.price}</Text> {/* DESCOBRIR COMO CALCULAR O TOTAL */}

            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => setCarVisible(!carVisible)}
            >               
              <Text style={styles.textStyle}>Finalizar Compras</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
           <StoreNavBar>
            <TriMenu onPress={() => setCarVisible(!carVisible)} value={marketCarIcon}>{carIcon}</TriMenu>
            <BackMenu onPress={backMenuClick} value={marketCarIcon}>{arrowLeftIcon}</BackMenu>
            </StoreNavBar>
           <ScrollView>
            <MenuContainer>
                <BuyCardEUEELA source={require('../../assets/EUEELA.png')} />
                <BuyKitEUEELA onPress={() => { setKitName('EU E ELA');setKitPrice('R$999');setModalVisible(!modalVisible);}}><BuyButtonTxt>Comprar</BuyButtonTxt></BuyKitEUEELA>
                <BuyCardMEUEU source={require('../../assets/MEUEU.png')} />
                <BuyKitMEUEU onPress={() => { setKitName('MEU EU');setModalVisible(!modalVisible)}}><BuyButtonTxt>Comprar</BuyButtonTxt></BuyKitMEUEU>
                <BuyCardQUINZENAL source={require('../../assets/QUINZENAL.png')} />
                <BuyKitQUINZENAL  onPress={() => { setKitName('KIT QUINZENAL');setModalVisible(!modalVisible)}}><BuyButtonTxt>Comprar</BuyButtonTxt></BuyKitQUINZENAL>
                <BuyCardFRANGAO source={require('../../assets/FRANGAO.png')} />
                <BuyKitFRANGAO onPress={() => { setKitName('FRANGÃO');setModalVisible(!modalVisible)}}><BuyButtonTxt>Comprar</BuyButtonTxt></BuyKitFRANGAO>
                <BuyCardFRANGONOBRE source={require('../../assets/FRANGONOBRE.png')} />
                <BuyKitFRANGONOBRE onPress={() => { setKitName('FRANGO NOBRE');setModalVisible(!modalVisible)}}><BuyButtonTxt>Comprar</BuyButtonTxt></BuyKitFRANGONOBRE>
                <BuyCardFRANGOMODERADO source={require('../../assets/FRANGOMODERADO.png')} />
                <BuyKitFRANGOMODERADO onPress={() => { setKitName('FRANGO MODERADO');setModalVisible(!modalVisible)}}><BuyButtonTxt>Comprar</BuyButtonTxt></BuyKitFRANGOMODERADO>
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
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 145,
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