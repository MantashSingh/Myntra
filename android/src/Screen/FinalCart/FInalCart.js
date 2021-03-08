import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { add } from 'react-native-reanimated';

import navigationStrings from "../../constants/navigationStrings"
 


export default class FinalCart extends Component {
  constructor(props) {

    super(props);
    this.state = {
      total: 0,
      totalPrice2: 0

    }
  }


  countAdd = (index) => {
    const { itemCount, addTocartITem } = this.props.route.params;
    const { count, total } = this.state;
    let newArray = [...addTocartITem]
    newArray[index].quantity += 1



    let check = newArray.length

    let totalHere = 0;
    let totalHerePrice2 = 0;
    // alert(JSON.stringify(newArray))

    for (let i = 0; i < check; i++) {


      totalHere += newArray[i].price1 * newArray[i].quantity
      totalHerePrice2 += newArray[i].price2 * newArray[i].quantity
    }



    // alert(addTocartITem[index].quantity)
    this.setState({
      addTocartITem: newArray,
      total: totalHere,
      totalPrice2: totalHerePrice2

    })
  }
  countSub = (index) => {
    const { itemCount, addTocartITem } = this.props.route.params;
    const { count, total } = this.state;
    let newArray = [...addTocartITem]




    if (newArray[index].quantity > 1) {
      newArray[index].quantity -= 1



      let check = newArray.length

      let totalHere = 0;
      let totalHerePrice2 = 0;
      // alert(JSON.stringify(newArray))

      for (let i = 0; i < check; i++) {


        totalHere += newArray[i].price1 * newArray[i].quantity
        totalHerePrice2 += newArray[i].price2 * newArray[i].quantity

      }

      // alert(addTocartITem[index].quantity)
      this.setState({
        addTocartITem: newArray,
        total: totalHere,
        totalPrice2: totalHerePrice2

      })
    }
  }


  componentDidMount() {

    const { itemCount, addTocartITem } = this.props.route.params;
    const { total } = this.state;

    let newArray = [...addTocartITem]
    let check = newArray.length

    let totalHere = 0;
    let totalHerePrice2 = 0;
    // alert(JSON.stringify(newArray))

    for (let i = 0; i < check; i++) {


      totalHere += newArray[i].price1 * newArray[i].quantity
      totalHerePrice2 += newArray[i].price2 * newArray[i].quantity

    }


    this.setState({
      addTocartITem: newArray,
      total: totalHere,
      totalPrice2: totalHerePrice2
    })



  }



  _renderItem = ({ item, index }) => {
    const { itemCount, addTocartITem } = this.props.route.params;
    const { count, countAdd, countSub , placeOrder } = this.state;
    return (
      <View>


        <View style={styles.rowDirection}>
          <Image
            source={item.photo}
            style={styles.photo} />
          <View style={styles.colDirection}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.line}>{item.line}</Text>
            <Text style={styles.line}>Size:8</Text>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.line}> Rs {item.price1}</Text>
            <Text style={styles.line2}> Rs {item.price2}</Text>
            <Text style={styles.line3}>({item.offer})</Text>
            <Text></Text>
            </View>

            <View style={styles.newView}>
              <TouchableOpacity onPress={() => this.countSub(index)}>
                <Text style={styles.sub}>-</Text>
              </TouchableOpacity>
              <Text style={styles.count}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => this.countAdd(index)}>
                <Text style={styles.add}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
          


        </View>
      </View>
    )
  }




  render() {
    const { total, totalPrice2 ,placeOrder} = this.state;
    const { itemCount, addTocartITem  } = this.props.route.params;
    const {navigation} = this.props;
    return (

      <View style={{ flex: 1 }}>


        <Text style={styles.headerText}>SHOPPING BAG</Text>
        <View style={styles.headerShadow}>



        </View>

        <View style={{ flex: 1 }}>
          <ScrollView>
            <FlatList
              data={addTocartITem}
              showsVerticalScrollIndicator={false}
              // numColumns={2}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
              renderItem={(item, index) => this._renderItem(item, index)}
            />

            <View >
              <Text style={{ marginTop: 7, fontWeight: "bold", marginLeft: 8 }}>PRICE DETAILS ({addTocartITem.length} Items)</Text>
              <View style={{ backgroundColor: 'gray', height: 1, opacity: 0.5, marginLeft: 8, marginRight: 8, marginBottom: 8, marginTop: 5 }}></View>

              <View style={styles.paymentRow}>
                <Text style={{ opacity: 0.7 }}>Total MRP</Text>
                <Text style={{ marginLeft: 'auto' }}>Rs. {totalPrice2}</Text>
              </View>
              <View style={styles.paymentRow}>
                <Text style={{ opacity: 0.7 }}>Discount on MRP</Text>
                <Text style={{ marginLeft: 'auto', color: '#54baa4' }}> - Rs. {totalPrice2 - total}</Text>
              </View>
              <View style={styles.paymentRow}>
                <Text style={{ opacity: 0.7 }}>Convenience Fee</Text>
                <Text style={{ marginLeft: 'auto', textDecorationLine: 'line-through' }}>Rs.99</Text>
                <Text style={{ color: '#54baa4' }}> FREE</Text>
              </View>
              <View style={{ backgroundColor: 'gray', height: 1, opacity: 0.5, marginLeft: 8, marginRight: 8, marginBottom: 8, marginTop: 5 }}></View>
              <View style={styles.paymentRow}>

                <Text style={{ opacity: 0.7 , fontWeight:'bold'  }}>Total Amount</Text>
                <Text style={{ marginLeft: 'auto' ,fontWeight:'bold' }}>Rs. {total}</Text>

              </View>





            </View>
          </ScrollView>
        </View>

        

        <TouchableOpacity style={styles.placeOrder} onPress={()=>navigation.navigate(navigationStrings.TRACK_ORDER)}>

          <Text style={{color:"white" , fontSize:20 , marginRight:'auto' , marginLeft:"auto" , marginTop:"auto" , marginBottom:"auto"}}>PLACE ORDER</Text>
        </TouchableOpacity>



        <View>


        </View>
        {/* <Text>{total}</Text> */}
      </View>




    )
  }
}



const styles = StyleSheet.create({

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 10,


  },
  headerShadow: {
    height: 1.5,
    backgroundColor: "gray",
    opacity: 0.5
  },
  photo: {
    width: 150,
    height: 200
  },
  rowDirection: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 3,
    marginLeft: 3,
    marginTop: 2
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  colDirection: {
    flexDirection: "column",
    marginLeft: 20
  },
  add: {
    fontSize: 25,
    paddingLeft: 12,
    paddingTop:2,
    
    backgroundColor: '#FF3F6D',
    borderRadius: 50,
    width: 40,
    height: 40,
    color: "white",
    marginTop: 10
  },
  count: {
    fontSize: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 20,

  },
  sub: {
    fontSize: 25,
    paddingLeft: 16,
    
    backgroundColor: '#FF3F6D',
    borderRadius: 100,
    width: 40,
    height: 40,
    color: "white",
    marginTop: 10,
  
    

  },
  line: {
    marginTop: 10,
    fontSize: 15
  },
  line2: {
    marginTop: 13,
    fontSize: 15,
    fontSize:12,
    textDecorationLine:'line-through'
  },
  line3: {
    marginTop: 10,
    fontSize: 15,
    color:'#54baa4'
  },
  newView: {
    // marginLeft:-40,
    flexDirection: 'row'
  },
  paymentRow: {
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 8,
    marginLeft: 8


  },
  placeOrder:{
    backgroundColor:"#FF3F6D",
    height:50,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    marginBottom:5

  }





})
