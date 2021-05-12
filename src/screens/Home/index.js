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
    BuyButton,
    BuyButtonTxt,
    MenuButton,
    MenuButtonTxt,
    MenuHolder,
    ContainerHolder,
    LogoHolder,
    TriMenu
   

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
import { Appbar } from 'react-native-paper';
import { ScrollView, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import axios from 'axios'

export default () => {

    const marketIcon = <Icon name="shopping-bag" size={20} color="white" />;
    const tagsIcon = <Icon name="person" size={15} color="white" />;
    const reportIcon = <Icon name="file" size={15} color="white" />;
    const trophyIcon = <Icon name="trophy" size={15} color="white" />;
    const diceIcon = <Icons name="casino" size={15} color="white" />;
    const lowPriceIcon = <Icons name="payments" size={15} color="white" />;
    const helpIcon = <Icon name="headphones" size={15} color="white" />;
    const menuIcon = <Icons name="menu" size={55} color="#C93F3C" />;

    const [modalVisible, setModalVisible] = useState(false);

    var vOneLS = localStorage.getItem("userNameLocalStorage");  
    var vTwoLS = localStorage.getItem("isUserIdLocalStorage");  

    var nameField = vOneLS; 
    var cliente_id = vTwoLS; 
    const navigation = useNavigation()

    const [cpfcnpjField, setcpfcnpjField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const [complainField, setComplainField] = useState('')
    const [complainMsg, setComplainMsg] = useState('Meu aplicativo não funciona')
    const [complainModalVisible, setComplainModalVisible] = useState(false)
    
    const complainDate = Date()

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }
    const handleStoreClick = () => {
        navigation.reset({
            routes: [{name: 'Store'}]
        })
    }
    const handleClientClick = () => {
        navigation.reset({
            routes: [{name: 'Client'}]
        })
    }
    const handleSellClick = () => {
        navigation.reset({
            routes: [{name: 'Sell'}]
        })
    }
    const handleStockClick = () => {
        alert('Função disponível em breve')
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

    const updateComplain = () => {  
        setTimeout(() => {
        sendSupport()
        
      }, 5000);
  }
    var today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const complain = {
      id_cliente: cliente_id,
      tipo_chamado: complainField,
      mensagem_ch: complainMsg,
      data_ch: date,
      nome: nameField,
    }

    async function sendSupport() {          
        await axios.post(`https://api-carnedecasa.herokuapp.com/api/newsupport`, complain)
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
            <Text style={styles.modalText}>Qual problema deseja relatar?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setComplainField('Não consigo fazer meu pedido');setComplainModalVisible(!complainModalVisible)}}
              
            >
              <Text style={styles.textStyle}>Não consigo fazer meu pedido</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setComplainField('Não consigo registrar meu cliente');setComplainModalVisible(!complainModalVisible)}}
              
            >
              <Text style={styles.textStyle}>Não consigo registrar meu cliente</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {alert('Reclamação efetuada, em breve um colaborador do suporte técnico entrará em contato');setModalVisible(!modalVisible);sendSupport()}}
              
            >
              <Text style={styles.textStyle}>Não consigo registrar venda</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {alert('Reclamação efetuada, em breve um colaborador do suporte técnico entrará em contato');setModalVisible(!modalVisible);sendSupport()}}
              
            >
              <Text style={styles.textStyle}>Não consigo ver meu estoque</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {alert('Reclamação efetuada, em breve um colaborador do suporte técnico entrará em contato');setModalVisible(!modalVisible);sendSupport()}}
              
            >
              <Text style={styles.textStyle}>Fiz um pedido e não tive retorno</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonCancel, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible)}}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
               <Modal
        animationType="slide"
        transparent={true}
        visible={complainModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setComplainModalVisible(!complainModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Tem certeza que deseja abrir seu chamado?</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {alert('Reclamação efetuada, em breve um colaborador do suporte técnico entrará em contato');setModalVisible(!modalVisible);setComplainModalVisible(!complainModalVisible);updateComplain()}}
              
            >
              <Text style={styles.textStyle}>Sim</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible);setComplainModalVisible(!complainModalVisible);updateComplain()}}
              
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
           
          </View>
        </View>
      </Modal>
           
            <MenuContainer>
           
                <LogoHolder>
            <CarneLogo width="100%" height="220px" />
                </LogoHolder>
            <SignMessageBtn onPress={handleMessageButtonClick}>
                <SignMessageBtnText>Bem vindo, {nameField}!</SignMessageBtnText> 
            </SignMessageBtn>
          </MenuContainer>
          <MenuContainer>
            <BuyButton onPress={handleStoreClick}>
            <BuyButtonTxt >NOVO PEDIDO {marketIcon}</BuyButtonTxt>
            </BuyButton>                           
          
           
            
            <BuyButton onPress={handleClientClick}>
            <BuyButtonTxt >CADASTRO DE CLIENTE {tagsIcon}</BuyButtonTxt>
            </BuyButton>  
            <BuyButton onPress={handleSellClick}>
            <BuyButtonTxt>REGISTRAR VENDAS {reportIcon}</BuyButtonTxt>
            </BuyButton>  
            <BuyButton onPress={handleStockClick}>
            <BuyButtonTxt>ESTOQUE LOCAL {reportIcon}</BuyButtonTxt>
            </BuyButton>  
            <BuyButton onPress={handleStockClick}>
            <BuyButtonTxt>MÍDIA {reportIcon}</BuyButtonTxt>
            </BuyButton>  

            <BuyButton onPress={() => setModalVisible(!modalVisible)}>
            <BuyButtonTxt>SUPORTE {helpIcon}</BuyButtonTxt>
            </BuyButton>  
            </MenuContainer>      
          
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
  