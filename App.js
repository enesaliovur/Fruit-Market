import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./src/screens/HomeScreen";
import { SettingsScreen } from "./src/screens/SettingsScreen";
import { AccountSettingScreen } from "./src/screens/AccountSettingScreen";

import { ProfileScreen } from "./src/screens/ProfileScreen";
import { ShoppingCartScreen } from "./src/screens/ShoppingCartScreen";
import { FavouriteScreen } from "./src/screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MyOrdersScreen } from "./src/screens/MyOrdersScreen";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "gray",
          labelStyle: {
            fontSize: 15,
            margin: 0,
            padding: 0,
            fontWeight: "300",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: "Anasayfa",

            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="home-outline"
                size={24}
                color={focused ? "#69a03a" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Shopping Cart"
          component={ShoppingCartScreen}
          options={{
            tabBarLabel: "Sepetim",
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="shoppingcart"
                size={24}
                color={focused ? "#69a03a" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{
            tabBarLabel: "Favoriler",
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="hearto"
                size={24}
                color={focused ? "#69a03a" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarLabel: "Profil",
            tabBarIcon: ({ focused }) => (
              <Feather
                name="user"
                size={24}
                color={focused ? "#69a03a" : "gray"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile Main"
        options={{
          headerShown: false,
          title: "Ayarlar",
          headerStyle: {
            backgroundColor: "#69a03a",
          },
          headerTintColor: "white",
        }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="My Orders"
        options={{
          title: "Siparişlerim",
          headerStyle: {
            backgroundColor: "#69a03a",
          },
          headerTintColor: "white",
        }}
        component={MyOrdersScreen}
      />
      <Stack.Screen
        name="Settings"
        options={{
          title: "Ayarlar",
          headerStyle: {
            backgroundColor: "#69a03a",
          },
          headerTintColor: "white",
        }}
        component={SettingsScreen}
      />
      <Stack.Screen
        name="Account Setting"
        options={{
          title: "Hesap Ayarları",
          headerStyle: {
            backgroundColor: "#69a03a",
          },
          headerTintColor: "white",
        }}
        component={AccountSettingScreen}
      />
    </Stack.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: "E-Manav",
          headerStyle: {
            backgroundColor: "#69a03a",
          },
          headerTintColor: "white",
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default App;
