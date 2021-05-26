import React from 'react';
import { View, Text, FlatList, Button, SafeAreaView, processColor, ImageBackground, TouchableOpacity } from 'react-native';


const padraobg = require('../../assets/carnepadrao.jpeg')

const products = [
  { _id: 1, name: 'Kit Dia-a-Dia', price: 50, quantity: 0, bg: padraobg },
  { _id: 2, name: 'Item 2', price: 29, quantity: 0, bg: padraobg },
  { _id: 3, name: 'Item 3', price: 200, quantity: 0, bg: padraobg },
];

class ListItem extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'tomato', borderRadius: 100, width: 155, height: 155 }}>
        <View style={{borderRadius: 100}}>
        <ImageBackground style={{width: 80, height: 80}} imageStyle={{ borderRadius: 106, flex: -1}} source={item.bg}></ImageBackground>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
       
          <Text  style={{ color: 'azure' }}>{item.name} - </Text>          
          <Text  style={{ color: 'azure' }}>R${item.price}</Text>
          
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
  };

  onSubtract = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity -= 1;
    this.setState({ products });
  }

  onAdd = (item, index) => {
    const products = [...this.state.products];
    products[index].quantity += 1;
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    products.forEach((item) => {
      totalQuantity += item.quantity;
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
            />
          )}
          keyExtractor={item => item._id}
        />
        <Text>Total Quantity: {totalQuantity}</Text>
        <Text>Total Price: {totalPrice}</Text>
      </SafeAreaView>
    );
  }
}

export default App;