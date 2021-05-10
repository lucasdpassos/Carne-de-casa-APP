import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageBtn,
    SignMessageBtnText,
    SignMessageBtnTextBold,
   

 } from './styles'

import Api from '../../Api'

import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'
import CarneLogo from '../../assets/carnelogo.svg'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import { ScrollView, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import axios from 'axios'
import 'localstorage-polyfill'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';


export default  () => {
    
    
    const navigation = useNavigation()

    const [cpfcnpjField, setcpfcnpjField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [nameField, setNameField] = useState('')
    

                   
    const closeIcon = <Icon name="arrow-left" size={45} color="tomato" />;


    const backToHomeClick = () => {
        navigation.reset({
            routes: [{name: 'Home'}]
        })
    }
 
  
   

    return (
        <Container>

           
            <DoneText>Pedido Realizado!</DoneText>
            <DoneSubText>Seu pedido será preparado, boas vendas!</DoneSubText>
           
            <DoneImg source={require('../../assets/delivery.png')}  />

            <CloseMenu onPress={() => backToHomeClick()}>{closeIcon}</CloseMenu>
        

        </Container>
    )

    

}



    export const DoneImg = styled.Image`
    width: 590px;
    height: 340px;
    position: absolute;
    top: 30%;
    right: -25%;  
    `

    export const DoneText = styled.Text`   
    font-size: 20px;
    color: tomato;
    position: absolute;
    top: 10%;
    right: 29%;




    `
    export const DoneSubText = styled.Text`   
    font-size: 14px;
    color: tomato;
    position: absolute;
    top: 15%;
    right: 17%;


    `
    export const CloseMenu = styled.TouchableOpacity`  
   
    width: 50px;
    height: 30px;       
    justify-content: flex-start;
    position: absolute;
    top: 85%;    
    right: 45%;
  
`

