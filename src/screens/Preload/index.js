import React, { useEffect } from 'react'
import { Container, LoadingIcon } from './styles'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native'

import BarberLogo from '../../assets/barber.svg'

export default () => {

    const navigation = useNavigation()

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token !== null) {
                // Token Validation
                
            } else {
                navigation.navigate('SignIn')
            }
        }

        checkToken()
    })


    return (
        <Container>
            <BarberLogo width="260px" height="160px" />
            <LoadingIcon size="large" color="#edeef7" />
        </Container>
    )
}