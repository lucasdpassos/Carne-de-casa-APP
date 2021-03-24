import React from 'react'
import styled from 'styled-components/native'


const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: azure;
    flex-direction: row;
    border-radius: 30px;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
`

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: black;
    margin-left: 10px;

`

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24px" height="24px" fill="black" />
            <Input 
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={password}
            />
        </InputArea>
    )
}