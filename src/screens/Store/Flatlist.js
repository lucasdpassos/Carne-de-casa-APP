import React, { useState } from 'react';
import { View, Text, FlatList, Button, SafeAreaView, processColor, ImageBackground, TouchableOpacity } from 'react-native';
import 'localstorage-polyfill'


const padraobg = require('../../assets/carnepadrao.jpeg')


const products = [
  { _id: 1, name: 'Kit Dia-a-Dia', price: 151.27, quantity: 0, bg: padraobg, contains:'Aranha da Alcatra 1kg, Carne Moída 500g, hambúrguer de frango Cx c. 12, Filé de Peito de Frango 1kg, 2 frangos 2kg cada, frango a passarinho 1kg, moela 1kg, linguiça suína 400g, linguiça calabresa 400g, lasanha 600g, nuggets 300g, salsicha 1kg, batata frita 400g ' },
  { _id: 2, name: 'Kit SUPER Dia-a-Dia', price: 29, quantity: 0, bg: padraobg },
  { _id: 3, name: 'Kit Maneiro', price: 200, quantity: 0, bg: padraobg },
  { _id: 4, name: 'Kit Quinzenal', price: 200, quantity: 0, bg: padraobg },
  { _id: 5, name: 'Kit Sinistro', price: 200, quantity: 0, bg: padraobg },
  { _id: 6, name: 'Kit Churrasco', price: 200, quantity: 0, bg: padraobg },
  { _id: 7, name: 'Kit Mini-Churrasco', price: 200, quantity: 0, bg: padraobg },
  { _id: 8, name: 'Kit Nós 2', price: 200, quantity: 0, bg: padraobg },
  { _id: 9, name: 'Kit Nós 2', price: 200, quantity: 0, bg: padraobg },
  { _id: 10, name: 'Kit Brasa Leve', price: 200, quantity: 0, bg: padraobg },
  { _id: 12, name: 'Kit Churrasco Nobre', price: 200, quantity: 0, bg: padraobg },
  { _id: 13, name: 'Kit Churrasco Excelência', price: 200, quantity: 0, bg: padraobg },
];

const pArray = []

const baby = []


class ListItem extends React.Component {
  render() {
    const { item } = this.props;

    var baby = []
    

    return (
    
      <View  style={{ justifyContent: 'space-between', alignItems: 'center',  backgroundColor: 'tomato', width: 395, height: 155 }}>
        <View style={{borderRadius: 100}}>
        <ImageBackground style={{width: 60, height: 60, position: 'absolute', marginLeft: -30, marginTop: 29, backgroundColor:'azure'}} imageStyle={{ borderRadius: 106, flex: -1}} source={item.bg}></ImageBackground>
        </View>
        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
       
          <Text  style={{ color: 'azure', fontSize:14, fontWeight:'bold' }}>{item.name}  </Text>     
               
          <Text  style={{ color: 'azure', fontSize:24, fontWeight:'bold', right:150, top:55 }}>R${item.price}</Text>

          <View style={{display:'flex', position:'absolute', left:110, flexDirection:'row', maxWidth:120}} >
          <Text  style={{ color: 'azure', fontSize:10, fontWeight:'bold',  }} numberOfLines={15}>{item.contains}</Text>
          </View>
          
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity title="-"  onPress={this.props.onSubtract} style={{width: 24, height: 30, backgroundColor: '#246EB9', }} ><Text style={{ textAlign: 'center', color: 'azure', fontSize: 22  }}>-</Text></TouchableOpacity>
          <Text style={{ backgroundColor: 'azure', fontSize: 20, width: 20, textAlign: 'center' }}>{item.quantity}</Text>
          <TouchableOpacity title="+" onPress={this.props.onAdd}  style={{width: 24, height: 30, backgroundColor: '#246EB9', }} ><Text style={{ textAlign: 'center', color: 'azure', fontSize: 22  }}>+</Text></TouchableOpacity>
        </View>
      </View>
     
    )
  }
}

class App extends React.Component {
  state = {
    products,
    pArray,
    baby
  };

  
  onSubtract = (item, index) => {
    const products = [...this.state.products];
    if(products[index].quantity > 0)
{
    products[index].quantity -= 1;
}
    this.setState({ products });
  }

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }
  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
    const baby = [...this.state.baby]
    const newValue = item.name
    this.state.baby.push(newValue)
    this.setState(baby)    
    console.log(baby)
    localStorage.setItem("userBabyStorage", baby); 
  }  
  onPush = (item, index) => {
    const baby = [...this.state.baby]
    const newValue = item.name
    this.state.baby.push(newValue)
    this.setState(baby)    
    console.log(baby)
    localStorage.setItem("userBabyStorage", baby); 
  }


  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    let totalbaby = [];
    let babyArray = localStorage.getItem("userBabyStorage");  
   

    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalbaby = this.state.baby;
      babyArray = localStorage.getItem("userBabyStorage")
      totalPrice += item.quantity * item.price;
    })

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={this.state.products}
          renderItem={({ item, index }) => (
            <ListItem
              item={item}
              onSubtract={() => this.onSubtract(item, index)}
              onAdd={() => this.onAdd(item, index)}
              onPush={() => this.onPush(item, index)}
            />
          )}
          keyExtractor={item => item._id}
        />
        <Text>Quantidade de Produtos: {totalQuantity}</Text>
        <Text>Preço Total: R${totalPrice}</Text>
        <Text>Produtos: {babyArray}</Text>
      </SafeAreaView>
    );
  }
}

export default App;