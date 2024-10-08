import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


/*This Screen allows the customers to view the dishes that they have ordered in the Menu Screen */

const OrderScreen = ({ navigation, route }) => {
  const { orderedDishes } = route.params;

  return (

    <View style={styles.container}>

      <Text style={styles.brandName}>Harvest Café</Text>

      <Image style={styles.logo} source={require('./assets/vgejlofd.png')} />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('MenuScreen')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Your Orders</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {orderedDishes.map((dishName, index) => (
          
          <Text key={index} style={styles.dishName}>
            {dishName}
          </Text> ))}
       

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EAD6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,},  
  
  brandName: {
    fontSize: 40,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    top:15,
    left:32, },
  
  logo: {
    borderRadius: 15,
    height: 70,
    width: 70,
    bottom:45,
    right:146, },

  backButton: {
      backgroundColor: '#ffffff',
      paddingVertical: 5,
      paddingHorizontal: 8,
      borderRadius: 5,
      bottom:30,
      right:145, },
    
  backButtonText: {
      color: '#000',
      fontSize: 20, },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: -35,
    left:15,
    bottom:68, },
 
  scrollContainer:{
    justifyContent: 'flex-start',},
  
  dishName: {
    fontSize: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#E6A57A',
    fontWeight:'bold',
    borderRadius: 8,
    width: '100%', 
    textAlign: 'center',
    elevation: 1, },
    
});

export default OrderScreen;





