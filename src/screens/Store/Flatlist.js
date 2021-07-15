import React, { useState } from 'react';
import { View, Text, FlatList, Button, SafeAreaView, processColor, ImageBackground, TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native';
import 'localstorage-polyfill'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
const padraobg = require('../../assets/carnelogo.png')

var vOneLS = localStorage.getItem("userNameLocalStorage");  
const userName = vOneLS


const products = [
  { _id: 1, name: 'Kit Dia-a-Dia', price: 151.27, quantity: 0, bg: padraobg, contains:'Aranha da Alcatra 1kg, Carne Moída 500g, hambúrguer de frango Cx c. 12, Filé de Peito de Frango 1kg, 2 frangos 2kg cada, frango a passarinho 1kg, moela 1kg, linguiça suína 400g, linguiça calabresa 400g, lasanha 600g, nuggets 300g, salsicha 1kg, batata frita 400g ' },
  { _id: 2, name: 'Kit SUPER Dia-a-Dia', price: 302.54, quantity: 0, bg: padraobg, contains:'Aranha da Alcatra 2kg, Carne moída 1kg, hambúrguer de frango 2 cx c. 12, filé de peito de Frango 1kg, 4 frangos 2kg cada, frango a passarinho 2kg, moela 2kg, linguiça suína 800g, linguiça calabresa 800g, lasanha 2 pct de 600g, nuggets 2 pct de 300g, salsicha 2kg, batata frita 800g ' },
  { _id: 3, name: 'Kit Maneiro', price: 75.22, quantity: 0, bg: padraobg, contains: 'Batata frita 400g, hambúrguer bovino Cx c. 12, hambúrguer de frango Cx c. 12, almôndegas 400g, lasanha 600g, nuggets 300g, salsicha 1kg' },
  { _id: 4, name: 'Kit Quinzenal', price: 130.54, quantity: 0, bg: padraobg, contains: '2 frangos de 2kg cada, filé de peito de frango 1kg, contrafilé 1kg, aranha de alcatra 1kg, almôndegas 1kg, carne moída 500g, linguiça calabresa 400g, linguiça suína 400g' },
  { _id: 5, name: 'Kit Sinistro', price: 154.24, quantity: 0, bg: padraobg, contains: 'Almôndegas 2kg, hambúrguer bovino duas Cx c. 12, hambúruger de frango duas Cx. c. 12, salsicha 2kg, batata frita 800g ' },
  { _id: 6, name: 'Kit Churrasco', price: 155.15, quantity: 0, bg: padraobg, contains: 'Contra filé 2kg, linguiça de frango 1kg, linguiça de pernil 1kg, sal grosso 500g, pão de alho 2 pcts de 400g, drumet de frango 1kg, coração de frango 1kg' },
  { _id: 7, name: 'Kit Mini-Churrasco', price: 80.55, quantity: 0, bg: padraobg, contains: 'Contra filé 1kg, linguiça de pernil 1kg, sal grosso 500g, pão de alho 2 pcts de 400g cada, drumet de frango 1kg' },
  { _id: 8, name: 'Kit Nós 2', price: 72.79, quantity: 0, bg: padraobg, contains: 'Contra filé 1kg, pão de alho 400g, drumet de frango 1kg, linguiça de pernil 1kg, sal grosso 500g' },  
  { _id: 9, name: 'Kit Brasa Leve', price: 152.99, quantity: 0, bg: padraobg, contains: 'Contra filé 2kg, pão de alho 2 pcts com 400g cada, drumet de frango 1kg, queijo coalho 500g, linguiça suína 400g, linguiça de pernil 1kg, linguiça de frango 1kg, sal grosso 500g' },
  { _id: 10, name: 'Kit Churrasco Nobre', price: 105.17, quantity: 0, bg: padraobg, contains: 'Contra filé 1kg, pão de alho 2 pcts com 400g cada, drumet de frango 1kg, linguiça de pernil 1kg, linguiça suína 400g, queijo coalho 500g, sal grosso 500g' },
  { _id: 11, name: 'Kit Churrasco Excelência', price: 167.39, quantity: 0, bg: padraobg, contains: 'Contra filé 2kg, pão de alho 2 pcts com 400g cada, coração de frango 1kg, queijo coalho 500g, linguiça suína 400g, linguiça de pernil 1kg, linguiça de frango 1kg, sal grosso 500g' },
];

const pArray = []

const baby = []



class ListItem extends React.Component {
  render() {
    const { item } = this.props;

    var baby = []
    

    return (


      
    
    
      <View  style={{ justifyContent: 'space-between', alignItems: 'center',  backgroundColor: 'black', width: 395, height: 155 }}>
        
        <View style={{borderRadius: 100}}>
        <ImageBackground style={{width: 60, height: 60, position: 'absolute', marginLeft: -30, marginTop: 29, backgroundColor:'azure', borderRadius:55}} imageStyle={{ borderRadius: 106, flex: -1}} source={item.bg}></ImageBackground>
        </View>
        <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
       
          <Text  style={{ color: 'azure', fontSize:14, fontWeight:'bold' }}>{item.name}  </Text>     
               
          <Text  style={{ color: 'azure', fontSize:18, fontWeight:'bold', right:100, top:55 }}>R${item.price}</Text>

          <View style={{display:'flex', position:'absolute', left:120, flexDirection:'row', maxWidth:120}} >
         
          </View>
          
        </View>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity title="-"  onPress={this.props.onSubtract} style={{width: 24, height: 30, backgroundColor: 'tomato', }} ><Text style={{ textAlign: 'center', color: 'azure', fontSize: 22  }}>-</Text></TouchableOpacity>
          <Text style={{ backgroundColor: 'azure', fontSize: 20, width: 20, textAlign: 'center' }}>{item.quantity}</Text>
          <TouchableOpacity title="+" onPress={this.props.onAdd}  style={{width: 24, height: 30, backgroundColor: 'tomato', }} ><Text style={{ textAlign: 'center', color: 'azure', fontSize: 22  }}>+</Text></TouchableOpacity>
        </View>
      </View>
     
    )
  }
}

class App extends React.Component {
  state = {
    products,
    pArray,
    baby,
    data: '',
    frete: '',
    pagamento: '',
    
    modalVisible: false,
    deliveryVisible: false,
    paymentVisible: false,
    resumeVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setDeliveryVisible = (visible) => {
    this.setState({ deliveryVisible: visible });
  }
  setPaymentVisible = (visible) => {
    this.setState({ paymentVisible: visible });
  }
  setResumeVisible = (visible) => {
    this.setState({ resumeVisible: visible });
  }
  setData = (value) => {
    this.setState({ data: value });
  }
  setFrete = (value) => {
    this.setState({ frete: value });
  }
  setPagamento = (value) => {
    this.setState({ pagamento: value });
  }
  
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
  OnModal = () => {
    this.setState({modalVisible: true})
  }
 

  render() {
    const { products } = this.state;
    let totalQuantity = 0;
    let totalPrice = 0;
    let totalbaby = [];
    let babyArray = localStorage.getItem("userBabyStorage"); 
    const modalVisible = this.state.modalVisible
    const deliveryVisible = this.state.deliveryVisible
    const paymentVisible = this.state.paymentVisible
    const resumeVisible = this.state.resumeVisible
    const data = this.state.data
    const frete = this.state.frete
    const pagamento = this.state.pagamento
    

    products.forEach((item) => {
      totalQuantity += item.quantity;
      totalbaby = this.state.baby;
      babyArray = localStorage.getItem("userBabyStorage")
      totalPrice += item.quantity * item.price;
      
    })
    
    let finalBuy = {
      quantidade: totalQuantity,
      valor: totalPrice,
      produtos: babyArray,
      data: data,
      frete: frete,
      pagamento: pagamento
    }
    async function storeData() {          
     await axios(`https://morada-pdf-api.herokuapp.com/api/newasset`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              data: finalBuy})
      .then(res => {        
        console.log(res.data);          
      })
   
    }
    function terminarCompra() {
      alert('Seu pedido foi recebido com sucesso, você receberá mais detalhes do seu pedido em breve por email/whatsapp/sms')
      const navigation = useNavigation();      
      navigation.reset({
        routes: [{name: 'Done'}]
     })
    }
    
    

    return (
      <SafeAreaView style={{ flex: 1 }}>





<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          
        }}
      >
        <View style={{backgroundColor:'azure', width:400, height:800}}>
          <View style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:105}} >
            <Text style={{fontSize:20}}>ENTREGA</Text>
            <Text>Escolha uma das datas disponíveis</Text>
           
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {this.setData('18/07'); this.setDeliveryVisible(!deliveryVisible)}}
            >               
              <Text style={styles.textStyle}>18/07</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {this.setData('19/07'); this.setDeliveryVisible(!deliveryVisible)}}
            >               
              <Text style={styles.textStyle}>19/07</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {this.setData('20/07'); this.setDeliveryVisible(!deliveryVisible)}}
            >               
              <Text style={styles.textStyle}>20/07</Text>
            </Pressable>         
            
          </View>
        </View>
      </Modal>




      <Modal
        animationType="slide"
        transparent={true}
        visible={deliveryVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!deliveryVisible);
        }}
      >
        <View>
       
          <View style={{backgroundColor:'azure', width:400, height:800, display:'flex', justifyContent:'center', alignItems:'center'}}>   
          <View style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:75, width:300}}>    
            <Text style={{fontSize:18}}>Caso você retire o pedido na loja, não precisará pagar o valor do frete, o que você prefere?</Text>
            
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {this.setFrete('Retirada'); this.setPaymentVisible(!paymentVisible)}}
            >               
              <Text style={styles.textStyle}>Retirar o Pedido</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {this.setFrete('Frete'); this.setPaymentVisible(!paymentVisible)}}
            >               
              <Text style={styles.textStyle}>Frete (+ R$25,00)</Text>
            </Pressable>
                 
            

          
            </View> 
          </View>
        </View>
      </Modal>  




      <Modal
        animationType="slide"
        transparent={true}
        visible={paymentVisible}
        onRequestClose={() => {
         
          setModalVisible(!paymentVisible);
        }}
      >
        <View style={styles.centeredView}>
       
          <View style={styles.modalView}>
          
            <Text style={styles.modalText}>Qual será o meio de pagamento? (Será feito na entrega do pedido)</Text>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {this.setPagamento('Boleto'); this.setResumeVisible(!resumeVisible)}}
            >               
              <Text style={styles.textStyle}>Boleto</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {this.setPagamento('TED / PIX'); this.setResumeVisible(!resumeVisible)}}
            >               
              <Text style={styles.textStyle}>TED / PIX</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {this.setPagamento('Cartão de Crédito'); this.setResumeVisible(!resumeVisible)}}
            >               
              <Text style={styles.textStyle}>Cartão de Crédito</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {this.setPagamento('Débito'); this.setResumeVisible(!resumeVisible)}}
            >               
              <Text style={styles.textStyle}>Cartão de Débito</Text>
            </Pressable>
                 
            

          
           
          </View>
        </View>
      </Modal>  


      <Modal
        animationType="slide"
        transparent={true}
        visible={resumeVisible}
        onRequestClose={() => {
         
          setModalVisible(!resumeVisible);
        }}
      >
        <View style={styles.centeredView}>
       
          <View style={styles.modalView}>
          
            <Text style={styles.modalText}>Resumo do seu pedido:</Text>                        
            <Text style={styles.modalText}>Total: R${totalPrice}</Text>                        
            <Text style={styles.modalText}>Data de entrega: {data}</Text>                        
            <Text style={styles.modalText}>Frete ou Retirada: {frete}</Text>                        
            <Text style={styles.modalText}>Método de pagamento: {pagamento}</Text>                        
            

            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => {storeData(); this.setResumeVisible(!resumeVisible);this.setPaymentVisible(!paymentVisible);this.setDeliveryVisible(!deliveryVisible);this.setModalVisible(!modalVisible)}}
            >               
              <Text style={styles.textStyle}>Ok, finalizar pedido</Text>
            </Pressable>
            <Pressable
              style={[styles.buttonFinal, styles.buttonClose]}
              onPress={() => setResumeVisible(!resumeVisible)}
            >               
              <Text style={styles.textStyle}>Cancelar e voltar</Text>
            </Pressable>
           
          </View>
        </View>
      </Modal>  











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
        <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:22}}>Carrinho</Text>
        </View>
        <View style={{display:'flex', backgroundColor:'azure', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:20}}>Quantidade de Produtos: {totalQuantity}</Text>
        <Text style={{fontSize:20}}>Preço da Compra: R${totalPrice}</Text>    
        <Text style={{fontSize:16}}>Frete: R$25</Text>    
        <Text style={{fontSize:22}}>Preço Final: R${totalPrice + 25}</Text>    
        </View> 
        <View style={{display:'flex', justifyContent:'center', alignItems:'center' }}>   
        <TouchableOpacity style={{backgroundColor:'azure', borderWidth: 1, borderColor:'grey', width:200, height:50, display:'flex', justifyContent:'center', alignItems:'center'}} onPress={() => this.setModalVisible(!modalVisible)}><Text>Finalizar Compra</Text></TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }}
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
     
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 185,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      width: 300
    },
    buttonCancel: {
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      top: 15,
      width: 300
    },
    buttonFinal: {
      borderRadius: 20,
      padding: 20,
      elevation: 2,
      marginTop: 15,
      width: 300
    },
    buttonOpen: {
      backgroundColor: "black",
    },
    buttonClose: {
      backgroundColor: "black",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
      fontSize: 16,
      width: 100
    },
    finalViewText: {
      marginBottom: 15,
      
      fontSize: 16,
      width: 100
    },
    finalView: {
        width: 300,
        height: 300,
        backgroundColor: '#f0f0f5',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
  })

export default App;