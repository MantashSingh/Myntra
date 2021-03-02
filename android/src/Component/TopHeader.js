import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import imagePath from '../Images/imagePath'
import HeaderTouch from '../Component/HeaderTouch'



function TopHeader()
{
    return(

        <View style={styles.header}>
            
        
        <HeaderTouch img={imagePath.menu}styles={styles.icon} />
        <HeaderTouch img={imagePath.logoMyntra} styles={styles.logo}/>
        <HeaderTouch img={imagePath.search} styles={styles.icon}/>
        <HeaderTouch img={imagePath.bell} styles={styles.icon}/>
        <HeaderTouch img={imagePath.heart} styles={styles.icon}/>
        <HeaderTouch img={imagePath.cart} styles={styles.icon}/>
    

    </View>
    )
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      backgroundColor:"white"
  
    },
    icon:{
      width:20, 
      height:20,
      marginLeft:10,
      marginTop:10,
      marginRight:12,
      marginBottom:10
    },
    logo:{
      width:30, 
      height:30,
      marginLeft:10,
      marginRight:100,
      marginTop:5,
    
    }
  
  });
  
  export default TopHeader;