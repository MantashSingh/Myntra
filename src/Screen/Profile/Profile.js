import React, { Component } from "react"
import { View, Text, StyleSheet, Image, Modal } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import imagePath from "../../assets/images/imagePath"
import * as ImagePicker from 'react-native-image-picker';
import ProfileCard from "../../Component/ProfileCard";

const options = {
    title: 'my pic app',
    takePhotoButtonTitle: 'Take photo with your camera',
    chooseFromLibraryButtonTitle: 'Choose photo from library',
}
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            pic: null,

            isMenuModalVisible: false,
            image: {
                uri:
                  'https://www.hayalanka.com/wp-content/uploads/2017/07/avtar-image.jpg',
              },
        }
    }



    chooseImage = () => {
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                this.setState({
                    image: source,
                    isMenuModalVisible:false
                });
            }
        });
    };


    chooseImageFromGallery = () => {

        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                this.setState({
                    image: source,
                    isMenuModalVisible:false
                });
            }
        });

    };


    _openModal = () => {
        const { isMenuModalVisible } = this.state;


        this.setState({ isMenuModalVisible: true });


    }

    _closeModal = () => {
        const { isMenuModalVisible, ChatData, postArray } = this.state;

        this.setState({ isMenuModalVisible: false });
    }





    render() {
        const { isMenuModalVisible } = this.state;
        return (


            <View>
                <Text style={styles.header}>Profile</Text>
                {/* */}
                <View style={styles.banner}></View>

                <View style={{ flexDirection: "row", backgroundColor: "white", height: 100, marginBottom: 25 }}>
                    <TouchableOpacity style={styles.profile} onPress={this._openModal}>
                        <Image source={this.state.image}
                            style={{ width: 120, height: 120 }} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logIn}>
                        <Text style={styles.loginText}>LOG IN/SIGN UP</Text>
                    </TouchableOpacity>
                </View>


                <View>
                    <ProfileCard icon={imagePath.box} text1={"Orders"} text2={"Check your order status"} />
                    <ProfileCard icon={imagePath.support} text1={"Help Center"} text2={"Help regarding your recent purchases"} />
                    <ProfileCard icon={imagePath.heart} text1={"Wishlist"} text2={"Your most loved styles"} />
                </View>



                <Modal transparent onRequestClose={() => this._closeModal()} visible={isMenuModalVisible}>
                    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
                        <View style={styles.modalUp}>

                        </View>

                        <View style={styles.modalDown}>
                            {/* <Text style={styles.upload}>Upload Photo</Text> */}

                            <Text style={styles.modalBtn} onPress={() => this.chooseImage()}>Click picture</Text>
                            <Text style={styles.modalBtn} onPress={() => this.chooseImageFromGallery()}>Open gallery</Text>
                            <Text style={styles.modalBtn} onPress={() => this._closeModal()}>Close</Text>

                        </View>



                    </View>

                </Modal>







            </View>
        )
    }
}

const styles = StyleSheet.create({

    header: {
        marginTop: 10,
        marginLeft: 15,
        fontSize: 20,
        color: "gray",
        fontWeight: "bold",
        marginBottom: 20
    },
    banner: {
        backgroundColor: "#545766",
        height: 150,
    },
    profile: {
        marginTop: -50,
        marginLeft: 20,
        borderColor: "gray",
        borderWidth: 0.5,
    },
    logIn: {
        backgroundColor: "#FF3F6D",
        height: 45,
        width: 180,
        marginLeft: 20,
        marginTop: 25,
        borderRadius: 5

    },
    loginText: {
        marginLeft: 'auto',
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        color: "white"
    },
    modalUp: {

        //   marginBottom:"auto",
        //   marginLeft:"auto",
        //   marginRight:"auto"

    },
    modalDown: {
        backgroundColor: 'white',
        width: '100%',
        height: 200,
        marginTop: "auto",
        paddingTop:10
    
    },
    modalBtn: {
        backgroundColor: "#FF3F6D",
        width: 300,
        height: 40,
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 15,
        color: "white",
        fontSize:20,
        textAlign:"center",
        paddingVertical:5
    },
    upload:{
        marginLeft: "auto",
        marginRight: "auto",
        fontSize:20,
        fontWeight:"bold"
    }




})