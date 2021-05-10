import React from 'react'
import styled from 'styled-components/native'


export default () => {

    return (
        <WaitingBox>
            <WaitingText>
                AGUARDE 
            </WaitingText>
        </WaitingBox>
    )
}


export const WaitingBox = styled.View`  
    elevation: 8;
    background-color: tomato;    
    border-radius: 10;
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    
    

`

export const WaitingText = styled.Text`
    color: azure;

`