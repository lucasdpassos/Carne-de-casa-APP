import React from 'react'
import styled from 'styled-components/native'



export const Container = styled.SafeAreaView`
    background-color: #f6e65f;
    flex: 1;
    
`

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
`
export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    width: 100%;
    background-color: azure;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`
export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: #1F2232;

`
export const SignMessageBtn = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 20px;
`
export const SignMessageBtnText = styled.Text`
    font-size: 30px;
    color: #C93F3C;
`
export const SignMessageBtnTextBold = styled.Text`
    font-size: 16px;
    color: #1F2232;
    font-weight: bold;
    margin-left: 5px;
`

export const MenuContainer = styled.View`
    width: 400px;
    height: 300px;  
    justify-content: space-between;
    
  
`

export const BuyButton = styled.TouchableOpacity`    
    
    elevation: 8;
    background-color: #C93F3C;
    
    border-radius: 10px;
    max-width: 250px;
    height: 70px;
    justify-content: center;
    align-items: center;
    left: 17%;
    padding: 15px;
    display: flex;
    
`

export const BuyButtonTxt = styled.Text`

    font-size: 14px;
    color: #FFFFFF;;
   

   

`

export const MenuButton = styled.TouchableOpacity`
    elevation: 8;
    background-color: #C93F3C;
    border-radius: 10px;
    width: 120px;
    height: 100px;    
    align-items: center;
    justify-content: center;

`

export const MenuButtonTxt = styled.Text`

    font-size: 13px;
    color: #FFFFFF;
   
`

export const MenuHolder = styled.View`
    width: 270px;
    height: 450px;    
    margin: 0 auto;    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
    
    

`
   
export const LogoHolder = styled.View`
    width: 300px;
    height: 100px;    
    left: 11%;

`
   
export const TriMenu = styled.TouchableOpacity`  
   
    width: 40px;
    height: 30px;    
    align-items: center;
    justify-content: center;
    position: absolute;
    top:10%;
`