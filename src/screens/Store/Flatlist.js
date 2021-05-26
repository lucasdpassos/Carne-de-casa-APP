import React, { useState } from 'react';
import { View, Text, FlatList, Button, SafeAreaView, processColor, ImageBackground, TouchableOpacity } from 'react-native';



const padraobg = require('../../assets/carnepadrao.jpeg')


const products = [
  { _id: 1, name: 'Kit Dia-a-Dia', price: 50, quantity: 0, bg: padraobg },
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
        <ImageBackground style={{width: 80, height: 80, position: 'absolute', marginLeft: -190, marginTop: 15}} imageStyle={{ borderRadius: 106, flex: -1}} source={item.bg}></ImageBackground>
        </View>
        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
       
          <Text  style={{ color: 'azure' }}>{item.name} - </Text>          
          <Text  style={{ color: 'azure' }}>R${item.price}</Text>
          
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity title="-"  onPress={this.props.onSubtract} style={{width: 24, height: 30, backgroundColor: '#246EB9', }} ><Text style={{ textAlign: 'center', color: 'azure', fontSize: 22  }}>-</Text></TouchableOpacity>
          <Text style={{ backgroundColor: 'azure', fontSize: 20, width: 20, textAlign: 'center' }}>{item.quantity}</Text>
          <TouchableOpacity title="+" onPress={this.props.onPush}  style={{width: 24, height: 30, backgroundColor: '#246EB9', }} ><Text style={{ textAlign: 'center', color: 'azure', fontSize: 22  }}>+</Text></TouchableOpacity>
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
  }  
  onPush = (item, index) => {
    const baby = [...this.state.baby]
    const newValue = item.name
    this.state.baby.push(newValue)
    this.setState(baby)
    console.log(baby)
  }


  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    let totalbaby = [];
    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalbaby = this.state.baby;
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
        <Text>Total Quantity: {totalQuantity}</Text>
        <Text>Total Price: {totalPrice}</Text>
        <Text>Total Price: {baby}</Text>
      </SafeAreaView>
    );
  }
}

export default App;