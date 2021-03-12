import React from 'react'
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

export default () => {
    return (
        <Container>
            <BarberLogo width="100%" height="160px" />

            <InputArea>

               

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