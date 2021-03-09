import React , {Component} from 'react';
import { Text, View ,StyleSheet ,Linking ,Image ,Share} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import imagePath from '../../assets/images/imagePath';
import openMap from 'react-native-open-maps';





export default class TrackOrder extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


  dialCall = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else {phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
 };

 onShare = async () => {
  try {
      const result = await Share.share({
        message:
          'Your order has been dispatched',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
            console.log(result.activityType)
          // shared with activity type of result.activityType
        } else {
          // shared
          console.log('shared')
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('cancel')
      }
    } catch (error) {
      alert(error.message);
    }
}

  render(){
    const {}   =this.state;
    return(
        <View>  
      
      <Text style={styles.heading}>TRACK YOUR ORDER  </Text>


<TouchableOpacity onPress={()=>{this.dialCall(123456789)}}>
    <Image source={imagePath.call}
        style={styles.call}/>
</TouchableOpacity>

      <Text style={styles.contact}>Contact Delivery Agent</Text>


      <TouchableOpacity style={styles.TOuchMail} onPress={() => Linking.openURL('mailto:support@example.com?subject=ORDER TRACKING &body=order Details') }>
    <Image source={imagePath.mail}
        style={styles.mail}/>
</TouchableOpacity>

<Text style={styles.contact}>Mail for any query</Text>



<TouchableOpacity style={styles.TOuchMail} onPress={() => openMap({ latitude: 30.7411, longitude: 76.7790 })  }>
    <Image source={imagePath.location}
        style={styles.mail}/>
</TouchableOpacity>

<Text style={styles.contact}>Live track your order on map</Text>



<TouchableOpacity style={styles.TOuchMail} onPress={() => this.onShare()  }>
    <Image source={imagePath.shareWhite}
        style={styles.mail}/>
</TouchableOpacity>

<Text style={styles.contact}>Share</Text>

      </View>
    )  
  }
}

const styles = StyleSheet.create({

heading:{
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:15,
    fontSize:20,
    fontWeight:'bold'
},
call:{
    width:50,
    height:50,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:50
},
contact:{
    marginLeft:'auto',
    marginRight:'auto',
    fontSize:15,
    marginTop:5
},
mail:{
    width:35,
    height:35,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:10
     
},
TOuchMail:{
    backgroundColor:'#EF5261',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:50,
    width:55,
    height:55,
    borderRadius:100

}

})