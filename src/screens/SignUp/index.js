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
import { useNavigation } from '@react-navigation/native'
import BarberLogo from '../../assets/barber.svg'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'


export default () => {

    const navigation = useNavigation()

    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }

    const handleSignClick = () => {

    }

    return (
        <Container>
            <BarberLogo width="100%" height="160px" />

            <InputArea>

               <SignInput IconSvg={EmailIcon}
                password=''
                placeholder="Digite seu nome"
                value={nameField}
                onChangeText={t=>setNameField(t)}
               />
               <SignInput IconSvg={EmailIcon}
                password=''
                placeholder="Digite seu email"
                value={emailField}
                onChangeText={t=>setEmailField(t)}
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