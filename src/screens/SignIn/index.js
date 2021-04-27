import React, { useState } from 'react'
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageBtn,
    SignMessageBtnText,
    SignMessageBtnTextBold

 } from './styles'

import Api from '../../Api'

import { useNavigation } from '@react-navigation/native'
import CarneLogo from '../../assets/carnelogo.svg'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import axios from 'axios'




export default () => {

    const navigation = useNavigation()

    const [cpfcnpjField, setcpfcnpjField] = useState('')
    const [passwordField, setPasswordField] = useState('')

        

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
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
            <CarneLogo width="100%" height="320px" />

            <InputArea>

               <SignInput IconSvg={EmailIcon}
               
                placeholder="CPF / CNPJ"
                value={cpfcnpjField}                
                onChangeText={t=>setcpfcnpjField(t)}
               />
               <SignInput IconSvg={LockIcon}
               
                placeholder="Senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
               />

                <CustomButton onPress={loginRequest} >
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>


            </InputArea>

            <SignMessageBtn onPress={handleMessageButtonClick}>
                <SignMessageBtnText>Está sem acesso?</SignMessageBtnText>
                <SignMessageBtnTextBold>Falar com o suporte</SignMessageBtnTextBold>
            </SignMessageBtn>

        </Container>
    )
}