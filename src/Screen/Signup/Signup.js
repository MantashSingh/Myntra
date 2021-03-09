import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import imagePath from "../../assets/images/imagePath";
import TextInputComponent from "../../Component/TextInputComponent";
import BtnComponent from '../../Component/BtnCompoment';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abc: 'abc',
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.login}>Signup !</Text>
        </View>



        <View style={styles.footer}>
          
          <ScrollView>

            <TextInputComponent Holder={'Name'} img={imagePath.name} />

            <TextInputComponent Holder={'Email'} img={imagePath.email} />

            <TextInputComponent Holder={'Phone'} img={imagePath.phone} />

            <TextInputComponent Holder={'Password'} img={imagePath.password} />

            <BtnComponent
              btnText={"Sign Up"}
              btnStyle={styles.loginbtn}
              btnOnPress={() => this.props.navigation.navigate('homePage')}
              btnTextStyle={styles.loginText}
            />
            <BtnComponent
              btnText={"Skip for now"}

              btnOnPress={() => this.props.navigation.navigate('homePage')}
              btnTextStyle={styles.Goto}
            />

          </ScrollView>

        </View>





        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F51CB3"
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  login: {
    color: "white",
    fontSize: 30
  },
  loginbtn: {
    width: 150,
    height: 50,
    marginTop: 30,
    backgroundColor: "#F51CB3",
    borderRadius: 50,
    marginLeft: 90,
  },
  loginText: {
    paddingLeft: '30%',
    paddingTop: 10,
    fontSize: 20,
    color: "white"
  },
  Goto: {
    fontSize: 15,
    color: "#F51CB3",

    marginTop: 20,
    marginLeft: 120
  }

})
