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
import { Text } from 'react-native'
import BarberLogo from '../../assets/barber.svg'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'


export default () => {

    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    return (
        <Container>
            <BarberLogo width="100%" height="160px" />

            <InputArea>

               <SignInput IconSvg={EmailIcon}
               
                placeholder="Email"
                value={emailField}
                onChangeText={t=>setEmailField(t)}
               />
               <SignInput IconSvg={LockIcon}
               
                placeholder="Senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
               />

                <CustomButton>
                    <CustomButtonText>Login</CustomButtonText>
                </CustomButton>


            </InputArea>

            <SignMessageBtn>
                <SignMessageBtnText>Ainda sem cadastro?</SignMessageBtnText>
                <SignMessageBtnTextBold>Cadastrar</SignMessageBtnTextBold>
            </SignMessageBtn>

        </Container>
    )
}