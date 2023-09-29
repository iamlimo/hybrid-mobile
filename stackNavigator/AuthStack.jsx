/** @format */

// import "react-native-gesture-handler";
// import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	FontAwesome,
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import Splash from "../signup/Splash";
import Signup from "../signup/SignUp";
import Verification from "../signup/Verification";
import Login from "../signup/login";
import PasswordReset from "../signup/PasswordReset";
import Prompt from "../signup/Prompt";
import Subscription from "../signup/Subscription";
import Sucess from "../signup/Sucess";
// import Dashboard from "../dashboard/Dashboard";
import BookShelf from "../src/pages/BookShelf";
import CategoryList from "../src/pages/CategoryList";
import Search from "../src/pages/Search";
import Profile from "../src/pages/Profile";
import Settings from "../src/pages/Settings";
import Personal from "../src/pages/Personal";
import Statistics from "../src/pages/Statistics";
import PersonalJotter from "../src/pages/PersonalJotter";
import EditNote from "../src/pages/EditNote";
import NewJotter from "../src/pages/NewJotter";
import Message from "../src/pages/Message";
import ChatInbox from "../src/pages/ChatInbox";
import Ebook from "../src/pages/Ebook";
import Review from "../src/components/book/Review";
import BookDetails from "../src/pages/BookDetails";
import Home from "../src/pages/Home";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

function AuthStack() {
	const [fontsLoaded] = useFonts({
		Inter: require("../assets/fonts/Inter-Regular.ttf"),
		InterBold: require("../assets/fonts/Inter-Bold.ttf"),
	});
	const onLayoutRootView = async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	};

	if (!fontsLoaded) {
		return (
			<View>
				<Text>nothing to show</Text>
			</View>
		);
	}

	return (
		<NavigationContainer>
			<View onLayout={onLayoutRootView}></View>
			<Stack.Navigator initialRouteName="SplashScreens">
				<Stack.Screen
					name="splash"
					component={Splash}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="signup"
					component={Signup}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="verification"
					component={Verification}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="login"
					component={Login}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="passwordreset"
					component={PasswordReset}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="prompt"
					component={Prompt}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AuthStack;
