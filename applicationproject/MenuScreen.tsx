import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

interface Dish {
  imageUri: string;
  dishName: string;
  price: number;
  description: string;
}

const MenuScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [savedDishes, setSavedDishes] = useState<Dish[]>([]);
  const [dishCount, setDishCount] = useState<number>(0);

  const permanentDishes: Dish[] = [
    
    {
      imageUri: 'https://www.cookingclassy.com/wp-content/uploads/2019/09/garlic-bread-04.jpg',
      dishName: 'Garlic Bread',
      price: 30,
      description: 'Freshly baked bread smothered in garlic butter and herbs.',
    },

    {
      imageUri: 'https://gimmedelicious.com/wp-content/uploads/2020/01/Chocolate-Molten-Lava-Cakes-2-3.jpg',
      dishName: 'Chocolate Lava Cake',
      price: 60,
      description: 'A rich chocolate cake with a molten center, served warm with a scoop of ice cream.',
    },

    {
      imageUri: 'https://th.bing.com/th/id/OIP.s1QegpuY5x626pPbsFgJKAHaE8?pid=ImgDet&w=184&h=122&c=7&dpr=1,3',
      dishName: 'Coffee',
      price: 25,
      description: 'Freshly brewed coffee served hot.',
    },

    {
      imageUri: 'https://th.bing.com/th/id/OIP._j9ncnDoTv-OdguR63NemgHaII?pid=ImgDet&w=184&h=201&c=7&dpr=1,3',
      dishName: 'Fettuccine Alfredo',
      price: 120,
      description: 'Creamy fettuccine pasta made with butter and Parmesan cheese, topped with grilled chicken.',
    },

    {
      imageUri: 'https://thumbs.dreamstime.com/b/crispy-flavorful-serving-onion-rings-generative-ai-delicious-serving-onion-rings-piled-high-plate-served-273863853.jpg',
      dishName: 'Onion Rings',
      price: 80,
      description: 'Crispy battered onion rings served with a tangy dipping sauce.',
    },

    {
      imageUri: 'https://th.bing.com/th/id/OIP.Qqnja9XKylZ3JNtJ6A8MRAHaGl?pid=ImgDet&w=184&h=163&c=7&dpr=1,3',
      dishName: 'Steak',
      price: 250,
      description: 'Juicy steak freshly grilled, cooked to your preference, served with vegetables.',
    },

    {
      imageUri: 'https://th.bing.com/th/id/OIP.IeOQAc1Tdt1mC4lhyEc0yQHaE3?w=282&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      dishName: 'Cheesecake',
      price: 45,
      description: 'A rich and creamy cheesecake on a buttery graham cracker crust, topped with berries.',
    },

    {
      imageUri: 'https://th.bing.com/th/id/OIP.n-8RG6pDOoc5mX2AQ0rD0AHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1,3',
      dishName: 'Milkshakes',
      price: 40,
      description: 'Creamy milkshakes made with ice cream and milk, available in various flavors like chocolate, vanilla, and strawberry.',
    }, ];
 

  useEffect(() => {
    setDishes(permanentDishes);
  }, []);

  useEffect(() => {
    if (route.params?.newDish) 
      { setDishes((prevDishes) => [...prevDishes, route.params.newDish]); }},
    [route.params?.newDish]);

  useEffect(() => {
    setDishCount(dishes.length);
  }, [dishes]);

  const navigateToAddDish = () => {
    navigation.navigate('AddDishScreen');};
  

  const saveDish = (dish: Dish) => {
    setSavedDishes((prevSavedDishes) => {
      if (!prevSavedDishes.some(savedDish => savedDish.dishName === dish.dishName)) {
      return [...prevSavedDishes, dish];}
      return prevSavedDishes;});
    
  };

  return (
    <View style={styles.container}>

      <Text style={styles.brandName}>Harvest Café</Text>

      <Image style={styles.logo} source={require('./assets/vgejlofd.png')} />

      <Text style={styles.menu}>Menu</Text>

      <Text style={styles.dishCounter}>Total Dishes: {dishCount}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToAddDish}>
        <Image style={styles.add} source={require('./assets/add.png')} />
      </TouchableOpacity>

      <Text style={styles.chef}>Chef</Text>

      <ScrollView style={styles.scrollView}>
        
        {dishes.map((dish, index) => (

          <View key={index} style={styles.dishContainer}>

            <Image source={{ uri: dish.imageUri }} style={styles.image} />
            
            <View style={styles.textContainer}>
              <Text style={styles.dishName}>{dish.dishName}</Text>
              <Text style={styles.dishPrice}>Price: R{dish.price}</Text>
              <Text style={styles.dishDescription}>{dish.description}</Text>
              <TouchableOpacity style={styles.saveButton} onPress={() => saveDish(dish)}>
                <Text style={styles.saveButtonText}>Order</Text>
              </TouchableOpacity>
            </View>

          </View>  ))}
      

      </ScrollView>

      <TouchableOpacity 
        style={styles.orderButton} 
        onPress={() => navigation.navigate('OrderScreen', { orderedDishes: savedDishes.map(d => d.dishName) })}>
        <Text style={styles.orderButtonText}>View Orders</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EAD6',
    alignItems: 'center',
    padding: 20,},
  
  scrollView: {
    width: '100%',
    maxHeight: 390,
    bottom:60,},
 
  brandName: {
    fontSize: 40,
    color: '#000000',
    fontWeight: "bold",
    top:14,
    left:32, },
 
  logo: {
    borderRadius: 15,
    height: 70,
    width: 70,
    bottom:45,
    right:145, },
 
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    bottom:98,
    right:145, },

  buttonText: {
    color: '#000',
    fontSize: 20,  },
    

  add: {
    width: 25,
    height: 25,
    bottom:85,
    right:146,  },

    chef:{
     fontSize:16,
     bottom:82,
     right:145,
    },
  
  menu: {
    fontSize: 30,
    fontWeight: 'bold',
    bottom:32,
    left:20, }, 


    text: {
      fontSize: 22,
      fontWeight: 'bold',
      bottom:32,
      left:20, }, 
   
 
  dishCounter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    bottom:20,
    left:20, },
 
  dishContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    elevation: 2, },
  
  textContainer: {
    flex: 1,
    marginLeft: 10,},

  image: {
    width: 110,
    height: 110,
    borderRadius: 10,  },
 
  dishName: {
    fontSize: 20,
    fontWeight: 'bold',},
  
  dishPrice: {
    fontSize: 20,
    color: '#333',},
 
  dishDescription: {
    fontSize: 15,
    color: '#666',},
  
  saveButton: {
    backgroundColor: '#E6A57A',
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginTop: 10,
    width: 50,},
 
  saveButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',  },

  orderButton: {
    backgroundColor: '#E6A57A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    bottom: 30,
    left:12,  },
 
  orderButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', },
 
});

export default MenuScreen;
