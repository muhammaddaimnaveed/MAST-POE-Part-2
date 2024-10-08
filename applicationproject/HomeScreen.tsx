import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


/* This Screen Contains the splash screen on the app which conatins the restuarants name, chef's name and the restuarants logo.   */

type Props = {
  navigation: any; 
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('MenuScreen');
  };

  return (

    <View style={styles.container}>

      <Text style={styles.brandName}>Harvest Café</Text>

      <Text style={styles.chefName}>Chef Christoffel</Text>

      <View style={styles.mainPicture}>
        <Image style={styles.logo} source={require("./assets/vgejlofd.png")} />
      </View>

      <Text style={styles.text1}>Hope You're Hungry...</Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#001f3e',
    alignItems: 'center',
    justifyContent: 'flex-start', },
 
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    bottom: -150,
    left: 6,
    alignItems: 'center',
    borderRadius: 5, },
  
  buttonText: {
    color: '#000000',
    right: 5,
    fontSize: 23, },
 
  brandName: {
    fontSize: 50,
    alignItems: 'center',
    color: '#ffffff',
    bottom: -38,
    left:-5,
    fontWeight:"bold", },

  chefName: {
    fontSize: 25,
    alignItems: 'center',
    color: '#ffffff',
    bottom: -50,
    fontWeight:"bold", },

  text1: {
    fontSize: 29,
    left: 10,
    color: '#ffffff',
    bottom: -100,
    fontWeight:"bold",  },

  mainPicture: {
    paddingTop: 20,
    alignItems: 'center',
    bottom: -60, },

  logo: {
    borderRadius: 15,
    height: 300,
    width: 300, },

});

export default HomeScreen;