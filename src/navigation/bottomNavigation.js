import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/Home";
import AddProduct from "../Screens/AddProduct";

const Tab = createBottomTabNavigator();

const BottomNavigation = () =>{
    return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Add" component={AddProduct} />
            </Tab.Navigator>
    )
}

export default BottomNavigation;