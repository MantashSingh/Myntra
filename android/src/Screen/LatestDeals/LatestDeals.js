import React, { Component } from "react"
import { View, Text, Image, StyleSheet, FlatList } from "react-native"
import BtnComponent from "../../Component/BtnCompoment"
import LatestDealsCard from "../../Component/LatestDealsCard"
import navigationStrings from "../../constants/navigationStrings"
import imagePath from "../../Images/imagePath"



export default class LatestDeals extends Component {
    constructor(props) {
        super(props);
        this.state = {

            myData: [
                {
                    id: 0,
                    
                    photo:imagePath.shoe1,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",

                },
                {
                    id: 1,
                    photo:imagePath.shoe2,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",
                },
                {
                    id: 2,
                    photo:imagePath.shoe3,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",
                },
                {
                    id: 3,
                    photo:imagePath.shoes5,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",
                },
                {
                    id: 4,
                    photo:imagePath.shoe1,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",
                },
                {
                    id: 5,
                    
                    photo:imagePath.shoe1,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",

                },
                {
                    id: 6,
                    photo:imagePath.shoe2,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",
                },
                {
                    id: 7,
                    photo:imagePath.shoe3,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",
                },
                {
                    id: 8,
                    photo:imagePath.shoes5,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",
                },
                {
                    id: 9,
                    photo:imagePath.shoe1,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",
                },
                {
                    id: 10,
                    photo:imagePath.shoe1,
                    name:"Reebok",
                    line:"Men Travellar LP Runner",
                    price1:"2,999",
                    price2:"3,599",
                    offer:"30% OFF",
                },
            ]




        }
    }


    _onNextScrean=(id)=>{
        //   console.log(id)
    const {navigation}=this.props
    const {myData}=this.state
    let newArray=[...myData]
    // alert(JSON.stringify(newArray[id]))
    navigation.navigate(navigationStrings.SHOES_DETAILS,{selectItem:newArray[id]});
    // alert(selectItem)
      }
    render() {
        const{navigation} = this.props;
        const { myData } = this.state;
        return (

            <View>
                <View style={styles.rowDirection}>
                    <Text style={styles.footware} >FOOTWEAR</Text>

                    <Image style={styles.icon}
                        source={imagePath.search}
                    />
                    <Image style={styles.icon}
                        source={imagePath.heart}
                    />
                    <Image style={styles.icon}
                        source={imagePath.cart}
                    />
                </View>


                <Text style={styles.items}>xxxx Items</Text>


                <Image style={styles.footwareImg}
                    source={imagePath.footware}
                />


                <View>


                    <View>

                        <FlatList
                            data={myData}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
                            renderItem={({ item }) => <LatestDealsCard data={item} _onNextScrean={this._onNextScrean} />}
                        />
                    </View>

                </View>
                </View>

        )
    }
}

const styles = StyleSheet.create({
                    rowDirection: {
                    flexDirection: "row",
        marginTop: 10

    },
    icon: {
                    width: 30,
        height: 30,
        marginRight: 10,
    },
    footware: {
                    fontSize: 20,
        fontWeight: "bold",
        marginLeft: 30,
        marginRight: 100

    },
    items: {
                    marginTop: -10,
        marginLeft: 45,
        color: "gray"

    },
    footwareImg: {
                    width: 350,
        height: 50,
        marginTop: 20,
        marginLeft: 5
    },
    shoes: {
                    width: 170,
        height: 200,
        marginRight: 8,
        marginLeft: 5
    }

})