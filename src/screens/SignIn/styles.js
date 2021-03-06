import React from 'react'
import styled from 'styled-components/native'



export const Container = styled.SafeAreaView`
    background-color: #f6e65f;
    flex: 1;
    justify-content: center;
    align-items: center;
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
    font-size: 16px;
    color: #1F2232
`
export const SignMessageBtnTextBold = styled.Text`
    font-size: 16px;
    color: #1F2232;
    font-weight: bold;
    margin-left: 5px;
`

