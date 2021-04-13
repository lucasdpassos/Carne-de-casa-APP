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


export default () => {

    const navigation = useNavigation()

    const [cpfcnpjField, setcpfcnpjField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
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
           

           

            <SignMessageBtn onPress={handleMessageButtonClick}>
                <SignMessageBtnText>HOMESCREEN i</SignMessageBtnText>
              
            </SignMessageBtn>

        </Container>
    )
}