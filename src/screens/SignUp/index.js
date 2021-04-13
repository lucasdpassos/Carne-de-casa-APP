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

    const [nameField, setNameField] = useState('')
    const [cpfcnpjField, setcpfcnpjField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    const handleSignClick = async () => {
        if(cpfcnpjField != '') {
            let res = await Api.signUp(cpfcnpjField)
            console.log(res)
            if(res.token) {
                alert('Worked')
            } else {
                alert('Erro: ' +res.error)
            }
        } else {
            alert('Preencha todos os campos')
        }
    }

    return (
        <Container>
            <CarneLogo width="100%" height="160px" />

            <InputArea>

               <SignInput IconSvg={EmailIcon}
                
                placeholder="Digite seu nome"
                value={nameField}
                onChangeText={t=>setNameField(t)}
               />
               <SignInput IconSvg={EmailIcon}
           
                placeholder="Digite seu email"
                value={cpfcnpjField}
                onChangeText={t=>setcpfcnpjField(t)}
               />
               <SignInput IconSvg={LockIcon}
               
                placeholder="Digite uma senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
               />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustomButton>


            </InputArea>

            <SignMessageBtn onPress={handleMessageButtonClick}>
                <SignMessageBtnText>Já possui cadastro?</SignMessageBtnText>
                <SignMessageBtnTextBold>Login</SignMessageBtnTextBold>
            </SignMessageBtn>

        </Container>
    )
}