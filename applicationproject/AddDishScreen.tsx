import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, Alert, TextInput } from 'react-native';

/*This Screen allows the chef to add the new dishes name, price, description and image which users can view in the Menu Screen */

const AddDishScreen1: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
  const [dishName, setDishName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [imageUri, setImageUri] = useState<string>('');

  const handleAddDish = () => {

    if (dishName && price && description ) {

    if (imageUri.startsWith('http') || imageUri.startsWith('https') || imageUri.startsWith('data')) {

      const newDish = { dishName, price, description, imageUri };
        
      navigation.navigate('MenuScreen', { newDish });
      
      setDishName('');
      setPrice('');
      setDescription('');
      setImageUri('');}

      else {
      Alert.alert('Error', 'Invalid image URL'); }}
     
     else {
      Alert.alert('Error', 'Please fill in all fields');} };
    
  return (

    <View style={styles.container}>

      <Text style={styles.brandName}>Harvest Café</Text>

      <Image style={styles.logo} source={require('./assets/vgejlofd.png')} />

      <Text style={styles.favourite}>Add a New Dish</Text>

      <View style={styles.formContainer}>

        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          value={dishName}
          onChangeText={setDishName} />
       
        <TextInput
          style={styles.input}
          placeholder="Price"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}/>
        
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription} />
       
        <TextInput
          style={styles.input}
          placeholder="Image URL"
          value={imageUri}
          onChangeText={setImageUri}  />
      
        <TouchableOpacity style={styles.addButton} onPress={handleAddDish}>
          <Text style={styles.addButtonText}>Add Dish</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('MenuScreen')}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F0EAD6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, },
  
  brandName: {
    fontSize: 40,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    bottom:95,
    left:28, },
  
  logo: {
    borderRadius: 15,
    height: 70,
    width: 70,
    bottom:155,
    right:146, },
  
  favourite: {
    fontSize: 26,
    color: '#000000',
    fontWeight: 'bold',
    bottom:70,
    left:6,},
  
  
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20, 
    bottom:30,},
  
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff', },
  
  backButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    bottom:502,
    right:145, },
  
  backButtonText: {
    color: '#000',
    fontSize: 20, },
  
  addButton: {
    backgroundColor: '#E6A57A',
    paddingVertical: 10,
    borderRadius: 5,
    width: 100, 
    top:25,
    left:115,},
 
  addButtonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 19, 
  fontWeight:'bold',},});

export default AddDishScreen1;