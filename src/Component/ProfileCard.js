import React, { Component } from "react";
import {  Text, View ,StyleSheet ,Image } from "react-native";
import imagePath from "../assets/images/imagePath";



function ProfileCard({ icon ,text1 ,text2 }) {

    return (
        <View>

            <View style={{ flexDirection: "row", backgroundColor: "white" }}>
                <Image
                    source={icon}
                    style={styles.box} />
                <View style={{ flexDirection: "column" }}>
                    <Text style={styles.text1}>{text1}</Text>
                    <Text style={styles.text2}>{text2}</Text>

                </View>
                <Image
                    source={imagePath.next}
                    style={styles.next} />
            </View>
            <View style={{ backgroundColor: "gray", height: 0.5, opacity: 0.5 }}></View>
        </View>


    )



}
export default ProfileCard;


const styles = StyleSheet.create({
box:{
    width:30,
    height:30,
    marginLeft:15,
    marginRight:15,
    marginTop:20,
    marginBottom:15
},
next:{
    height:10,
    width:10,
    marginLeft:"auto",
    marginRight:15,
    marginTop:30
},
text1:{
    fontSize:15,
    fontWeight:"bold",
    
    marginRight:15,
    marginTop:15,
    marginBottom:5
   
},
text2:{
    color:"gray",
    marginBottom:10,
    fontSize:10
}
})