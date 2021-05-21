import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Barber from '../../assets/barber.svg'
import CarneLogo from '../../assets/carnelogo.svg'
import axios from 'axios'
import { RESULTS } from 'react-native-permissions';




export default function MyProducts() {

const quinzenalImg = require('../../assets/QUINZENAL.png')

  const [people, setPeople] = useState([
    { name: 'DIA A DIA', id: '1', img: quinzenalImg },
    { name: 'CHURRASCO', id: '2', img: 'babaca' },
    { name: 'MINI-CHURRASCO', id: '3', img: 'babaca' },
    { name: 'luigi', id: '4', img: 'babaca' },
    { name: 'peach', id: '5', img: 'babaca' },
    { name: 'toad', id: '6', img: 'babaca' },
    { name: 'bowser', id: '7', img: 'babaca' },
  ]);
  
  componentDidMount = async () => {

   
    const headers = {
        'Authorization': 'Bearer' + token
    }

   var laranja = await axios.get("http://localhost:3333/api/getproducts", {
        headers: headers
    }).then(function (response) {
        
        const dados = response.data;
        const nome = dados.nome
        const id = dados.id
        const preco = dados.preco
        var products = {
            nome: nome,
            id: id,
            preco: preco
        }
        return products
    }).catch(error => {
        console.log(error)
    })

}

  return (
    <View style={styles.container}>

      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id} 
        data={people} 
        renderItem={({ item }) => (             
            <View style={styles.item}>
           <Image style={styles.image} source={item.img} /><Text style={styles.productTitle}>{item.name}</Text><TouchableOpacity style={styles.shopper} onPress={() => alert('eita')}><Text style={styles.shopperText}>+</Text></TouchableOpacity>
            </View>
             
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f6e65f',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 0,
    backgroundColor: 'tomato',
    fontSize: 24,
    borderRadius: 180,
    flex: 1,
     display: 'flex',     
     alignItems: 'center',
     flexDirection: 'column'
    
  },
  image: {
      width: 100,
      height: 100,
      borderRadius: 100

  },
  productTitle: {     
     fontSize: 12,
     fontWeight: 'bold',
     color: 'azure',
     marginTop: 10
  },
  shopper: {
      fontSize: 10,
      borderRadius: 180,
      backgroundColor: 'tomato',
      padding: 1,
      maxHeight: 50,     
      marginTop: 20,
      display: 'flex',
      justifyContent: 'center'

      

  },
  shopperText: {
      color: 'azure',
      fontSize: 40,
      
  }

});
