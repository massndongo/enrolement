import * as React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Enrolement from "./Enrolement";
import List from "./List";

const Drawer = createDrawerNavigator();

const Home = () => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Enrolement">
                <Drawer.Screen name="Enrolement" component={Enrolement} />
                <Drawer.Screen name="List" component={List} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
};

export default Home;