
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Modal, ScrollView } from 'react-native'

import TopHeader from '../../Component/TopHeader'
import imagePath from '../../assets/images/imagePath'


export default class HomePage extends Component {
  constructor() {
    super()
    this.state = {
      isMenuModalVisible: false,
    }

    // _openModal = () => {
    //   const { isMenuModalVisible } = this.state;
    //   this.setState({ isMenuModalVisible: true });

    // }

    // _closeModal = () => {
    //   const { isMenuModalVisible } = this.state;
    //   this.setState({ isMenuModalVisible: false });
    // }
  }
  render() {
    const { isMenuModalVisible } = this.state;
    return (

      <View>
        <TopHeader />


        {/* <Modal transparent onRequestClose={() => this._closeModal()} visible={false}>
          <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)" }}>
            <View style={styles.continer}>
              <Image
                source={imagePath.modalTop}
                style={styles.modalTop}
              />
            </View>
          </View>
        </Modal> */}

        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <Image
              source={imagePath.casualShoes}
              style={styles.imgScroll}
            />
            <Image
              source={imagePath.sportsShoes}
              style={styles.imgScroll}
            />
            <Image
              source={imagePath.flipFlop}
              style={styles.imgScroll}
            />
            <Image
              source={imagePath.tshirt}
              style={styles.imgScroll}
            />
            <Image
              source={imagePath.jeans}
              style={styles.imgScroll}
            />

            <Image
              source={imagePath.casualShoes}
              style={styles.imgScroll}
            />
            <Image
              source={imagePath.sportsShoes}
              style={styles.imgScroll}
            />
            <Image
              source={imagePath.flipFlop}
              style={styles.imgScroll}
            />
            <Image
              source={imagePath.tshirt}
              style={styles.imgScroll}
            />
            <Image
              source={imagePath.jeans}
              style={styles.imgScroll}
            />





          </ScrollView>
        </View>
        
        <ScrollView>
          <Image
            source={imagePath.sale}
            style={styles.sale}
          />



          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <Image
              source={imagePath.bob}
              style={styles.bankScroll}
            />
            <Image
              source={imagePath.kotak}
              style={styles.bankScroll}
            />
            <Image
              source={imagePath.sc}
              style={styles.bankScroll}
            />
          </ScrollView>


          <Image
            source={imagePath.flat}
            style={styles.flat}
          />

          <Image
            source={imagePath.crazy}
            style={styles.crazyDeal}
          />



          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            <Image
              source={imagePath.crazy1}
              style={styles.crazy}
            />
            <Image
              source={imagePath.crazy2}
              style={styles.crazy}
            />
            <Image
              source={imagePath.crazy3}
              style={styles.crazy}
            />
          </ScrollView>

          <Image
            source={imagePath.budget}
            style={styles.budget}
          />
          <Image
            source={imagePath.budget2}
            style={styles.budget2}
          />







        </ScrollView>



      </View>


    );
  }
}


const styles = StyleSheet.create({
  container: {

    height: "100%",

  },
  modalTop: {
    width: '90%',
    height: '100%'

  },
  scrollShadow: {
    width: '100%',
    height: 3,
    backgroundColor: '#000',
    opacity: 0.1
  },
  imgScroll: {
    marginTop: 0,
    width: 70,
    height: 100,



  },
  sale: {
    width: 400,
    height: 400,
    marginTop: -10,
    resizeMode: 'contain'
  },
  bankScroll: {
    width: 600,
    height: 70,
    marginLeft: 20,
    resizeMode: 'contain'

  },
  flat: {
    width: 410,
    height: 650,
    resizeMode: 'contain',
    marginTop: -230
  },
  crazyDeal: {
    width: 410,
    height: 200,
    resizeMode: 'contain',
    marginTop: -300
  },
  crazy: {
    width: 250,
    height: 800,
    resizeMode: 'contain',
    marginRight: 30,
    marginTop: -230



  },
  budget: {
    width: 360,
    height: 500,
    resizeMode: 'contain',
    marginTop: -280
  },
  budget2: {
    width: 360,
    height: 500,
    resizeMode: 'contain',
    marginTop: -230,
    marginBottom: 50
  }


});
