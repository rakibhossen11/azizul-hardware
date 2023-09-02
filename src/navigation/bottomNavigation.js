import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home";
import AddProduct from "../Screens/AddProduct";
import RegisterForm from "../Screens/RegisterForm";

const Tab = createBottomTabNavigator();

const BottomNavigation = () =>{
    return(
            <Tab.Navigator >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({focused}) => (
                        <View>
                            <Image 
                            source={require('../../assets/home.png')} 
                            resizeMode='contain'
                            style={{
                              width: 25,
                              height: 25,
                              tintColor: focused ? '#2a52be' : '#000',
                              margin: 10,
                            }}
                            />
                        </View>
                    )
                }} />
                <Tab.Screen name="Add" component={AddProduct} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image 
                                source={require('../../assets/add.png')} 
                                resizeMode='contain'
                                style={{
                                  width: 25,
                                  height: 25,
                                  tintColor: focused ? '#2a52be' : '#000',
                                  margin: 10,
                                }}
                                />
                            </View>
                        )
                    }}/>
                <Tab.Screen name="Register" component={RegisterForm} 
                    options={{
                        tabBarIcon: ({focused}) => (
                            <View>
                                <Image 
                                source={require('../../assets/add.png')} 
                                resizeMode='contain'
                                style={{
                                  width: 25,
                                  height: 25,
                                  tintColor: focused ? '#2a52be' : '#000',
                                  margin: 10,
                                }}
                                />
                            </View>
                        )
                    }}/>
            </Tab.Navigator>
    )
}

export default BottomNavigation;