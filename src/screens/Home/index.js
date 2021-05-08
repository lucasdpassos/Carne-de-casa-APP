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


export default () => {

    const marketIcon = <Icon name="shopping-bag" size={20} color="white" />;
    const tagsIcon = <Icon name="tags" size={15} color="white" />;
    const reportIcon = <Icon name="file" size={15} color="white" />;
    const trophyIcon = <Icon name="trophy" size={15} color="white" />;
    const diceIcon = <Icons name="casino" size={15} color="white" />;
    const lowPriceIcon = <Icons name="payments" size={15} color="white" />;
    const helpIcon = <Icon name="headphones" size={15} color="white" />;
    const menuIcon = <Icons name="menu" size={55} color="#C93F3C" />;

    var vOneLS = localStorage.getItem("userNameLocalStorage");  

    var nameField = vOneLS; 
    const navigation = useNavigation()

    const [cpfcnpjField, setcpfcnpjField] = useState('')
    const [passwordField, setPasswordField] = useState('')

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
           
            
           
            <MenuContainer>
            <TriMenu>{menuIcon}</TriMenu>
                <LogoHolder>
            <CarneLogo width="100%" height="220px" />
                </LogoHolder>
            <SignMessageBtn onPress={handleMessageButtonClick}>
                <SignMessageBtnText>Bem vindo, {nameField}!</SignMessageBtnText> 
            </SignMessageBtn>

            <BuyButton onPress={handleStoreClick}>
            <BuyButtonTxt >NOVO PEDIDO {marketIcon}</BuyButtonTxt>
            </BuyButton>
            </MenuContainer>                 
            
                      
            <MenuHolder>
           
                <MenuButton>
                    <MenuButtonTxt>Meus Pedidos  {tagsIcon}</MenuButtonTxt>
                </MenuButton>
                <MenuButton>
                    <MenuButtonTxt>Relatórios  {reportIcon}</MenuButtonTxt>
                </MenuButton>
                <MenuButton>
                    <MenuButtonTxt>Conquistas  {trophyIcon}</MenuButtonTxt>
                </MenuButton>
                <MenuButton>
                    <MenuButtonTxt>Sorteios  {diceIcon}</MenuButtonTxt>
                </MenuButton>
                <MenuButton>
                    <MenuButtonTxt>Descontos  {lowPriceIcon}</MenuButtonTxt>
                </MenuButton>
                <MenuButton>
                    <MenuButtonTxt>Suporte  {helpIcon}</MenuButtonTxt>
                </MenuButton>
            </MenuHolder>
          
        </Container>
    )
}