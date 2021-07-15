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
    BackMenu,
    BackSellMenu

 } from './styles'

import Api from '../../Api'

import { useNavigation } from '@react-navigation/native'
import CarneLogo from '../../assets/carnelogo.svg'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialIcons';
import LockIcon from '../../assets/lock.svg'
import axios from 'axios'
import 'localstorage-polyfill'



export default  () => {
    
    
    const navigation = useNavigation()

    const [cpfcnpjField, setcpfcnpjField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [dateField, setDateField] = useState('')
    const [kitField, setKitField] = useState('')
    const [valueField, setValueField] = useState('')
    const [nameField, setNameField] = useState('')
    const arrowLeftIcon = <Icon name="arrow-left" size={35} color="#C93F3C" />;

    const backMenuClick = () => {
        navigation.reset({
            routes: [{name: 'Home'}]
        })
    }
    

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }
    const handleRegister = () => {
        alert('Registro efetuado com sucesso!')
        navigation.reset({
            routes: [{name: 'Home'}]
        })
    }
    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function loginRequest() {            

        (async () => {
            const rawResponse = await axios(`https://api-carnedecasa.herokuapp.com/api/login`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              data: JSON.stringify({cpfcnpj: cpfcnpjField})
            }).then(function(response) {
                console.log(response.data);
                console.log(cpfcnpjField)
                var userData = response.data
                var isUser = userData[0].cpfcnpj
               
                const userName = userData[0].nome

                localStorage.setItem("userNameLocalStorage", userData[0].nome); 
               
                function getData() {
                    setNameField(isUser)
                }
                console.log(isUser)
                
                if(isUser != null) {
                    navigation.reset({
                        routes: [{name: 'Home'}]
                    })
                }
             
            })
                
               
            
          })();
        
    


      
 
    }          
        
   

    return (
        <Container>           
        <BackSellMenu onPress={backMenuClick}>{arrowLeftIcon}</BackSellMenu>
        <SignMessageBtnTextBold>Registrar Venda</SignMessageBtnTextBold>
            <InputArea>

               <SignInput IconSvg={EmailIcon}
               
                placeholder="Nome do Cliente"
                value={cpfcnpjField}                
                onChangeText={t=>setcpfcnpjField(t)}
               />
               <SignInput IconSvg={LockIcon}
               
                placeholder="Kit(s) Vendido(s)"
                value={kitField}
                onChangeText={t=>setKitField(t)}
               
               />
               <SignInput IconSvg={LockIcon}
               
                placeholder="Valor total da Venda"
                value={valueField}
                onChangeText={t=>setValueField(t)}
               
               />
               <SignInput IconSvg={LockIcon}
               
                placeholder="Data da venda"
                value={dateField}
                onChangeText={t=>setDateField(t)}
           
               />
              
              

                <CustomButton onPress={handleRegister} >
                    <CustomButtonText>Registrar</CustomButtonText>
                </CustomButton>


            </InputArea>

          

        </Container>
    )

    

}


