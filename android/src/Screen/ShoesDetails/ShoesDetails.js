import React, { Component } from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import imagePath from "../../Images/imagePath";


export default class ShoesDetails extends Component {
    render() {
        const { selectItem } = this.props.route.params;
        return (
            <View>
                <View style={styles.header}>
                    <Text style={styles.details}>DETAILS</Text>
                    <Image
                        source={imagePath.share}
                        style={styles.share}
                    />
                    <Image
                        source={imagePath.heart}
                        style={styles.icon}
                    />
                    <Image
                        source={imagePath.cart}
                        style={styles.icon}
                    />

                </View>
                <Image
                    source={selectItem.photo}
                    style={styles.photo}
                />


                <Text style={styles.name}>{selectItem.name}</Text>
                <Text style={styles.line}>{selectItem.line}</Text>
                <View style={styles.rowDirection}>
                    <Text style={styles.price1}>
                        Rs.{selectItem.price1}
                    </Text>
                    <Text style={styles.price2}>
                        Rs.{selectItem.price2}
                    </Text>
                    <Text style={styles.offer}>
                        ( {selectItem.offer} )
                        </Text>
                </View>
                <Text style={styles.tax}>inclusive of all taxes</Text>




                <View style={styles.rowDirection}>
                    <TouchableOpacity style={styles.wishlist}>
                    <Image
                        source={imagePath.heart}
                        style={styles.iconbtn}
                        />
                        <Text style={styles.wishText}>WISHLIST</Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.wishlist , styles.btnColor}>
                    <Image
                        source={imagePath.bag}
                        style={styles.iconbtn}/>
                        <Text style={styles.wishText1  }>ADD TO BAG</Text>
                        
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        flexDirection: "row",
        marginTop: 10,



    },
    details: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: "bold"
    },
    share: {
        width: 20,
        height: 20,
        marginLeft: 'auto',
        marginRight: 20,

    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 20,
        marginLeft: 20
    },


    photo: {
        height: 400,
        width: '100%',


    },
    name: {
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10,
        marginTop: 5
    },
    
    line: {
        fontSize: 15,
        color: "gray",
        marginLeft: 10,
    },
    rowDirection: {
        flexDirection: 'row',
        marginTop: 5
    },
    price2: {
        fontSize: 12,
        marginTop: 2,
        textDecorationLine: 'line-through',
        color: "gray",
        marginRight: 2,
        marginLeft: 2
    },
    offer: {
        color: 'red'
    },
    price1: {
        marginLeft: 10,
    },
    tax: {
        marginLeft: 10,
        color: "#54baa4",
        fontWeight: "bold"
    },
    wishlist: {
        borderColor: "gray",
        borderWidth: 1,
        marginLeft:10,
        flexDirection:"row"
    
    },
    wishText:{
        color:"gray",
        fontWeight:"bold",
        fontSize:20,
        marginTop:10,
        marginBottom:10,
        marginLeft:0,
        marginRight:20
    },
    iconbtn:{
        width: 20,
        height: 20,
        marginTop:15,
        marginLeft:20,
        marginRight:2,
        
    },
    btnColor:{
        backgroundColor:'#F51CB3',
        borderColor: "gray",
        borderWidth: 1,
        marginLeft:10,
        flexDirection:"row"
    },
    wishText1:{
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        marginTop:12,
        marginBottom:10,
        marginLeft:0,
        marginRight:20,
        
    },



})