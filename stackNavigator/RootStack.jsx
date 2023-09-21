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

function RootStack({}) {
	function HeaderTitle({ navigation }) {
		return (
			<View
				style={{
					justifyContent: "flex-end",
					width: "100%",
					flexDirection: "row",
					marginLeft:"20%"
				}}
			>
				<FontAwesome
					name="group"
					size={24}
					color="black"
				/>
			</View>
		);
	}

	// function Roots() {
	// 	return (
	// 		<Drawer.Navigator>
	// 			<Drawer.Screen
	// 				options={({ navigation }) => {
	// 					return {
	// 						drawerIcon: () => (
	// 							<AntDesign name="home" size={24} color="#000000" />
	// 						),

	// 						headerTitle: () => <HeaderTitle navigation={navigation} />,
	// 					};
	// 				}}
	// 				name="Home"
	// 				component={Home}
	// 				initialParams={{ itemId: "" }}
	// 			/>
	// 		</Drawer.Navigator>
	// 	);
	// }

	function Tabs() {
		return (
			<Tab.Navigator
				screenOptions={{
					labelStyle: { fontSize: 22 },
					tabBarStyle: { backgroundColor: "#1338BE", color: "#ffff", height: 65, paddingBottom: 10, paddingTop: 5},
					activeTintColor: "#FFD672",
					inactiveTintColor: "#FFFF",
				}}
			>
				<Tab.Screen
					name="home"
					component={Home}
					options={{
						headerShown: false,
						tabBarLabel: () => (
							<Text style={{fontSize: 12, color: '#FFFFFF'}}>Library</Text>
						),
						tabBarIcon: ({ color }) => (
							<Ionicons name="md-library-outline" size={24} color="#FFD672" />
						),
					}}
				/>
				<Tab.Screen
					name="Bookshelf"
					component={BookShelf}
					options={{
						headerShown: false,
						tabBarLabel: () => (
							<Text style={{fontSize: 12, color: '#FFFFFF'}}>BookShelf</Text>
						),
						tabBarIcon: ({ color }) => (
							// <Ionicons name="md-book-outline" size={24} color="#FFD672" />
							<Image style={{height: 24, width: 24}} source={require('../assets/icons/bookShelf.png')} />
						),
					}}
				/>
				<Tab.Screen
					name="Search"
					component={Search}
					options={{
						headerShown: false,
						tabBarLabel: () => (
							<Text style={{fontSize: 12, color: '#FFFFFF'}}>Search</Text>
						),
						tabBarIcon: ({ color }) => (
							<Ionicons name="md-search" size={24} color="#FFD672" />
						),
					}}
				/>
				<Tab.Screen
					name="Profile"
					component={Profile}
					options={{
						headerShown: false,
						tabBarLabel: () => (
							<Text style={{fontSize: 12, color: '#FFFFFF'}}>My Account</Text>
						),
						tabBarIcon: ({ color }) => (
							<Ionicons name="md-person" size={24} color="#FFD672" />
						),
					}}
				/>
			</Tab.Navigator>
		);
	}

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
					name="tab"
					component={Tabs}
					options={{
						// title: "Transaction Summary",
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
				<Stack.Screen
					name="subscription"
					component={Subscription}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="sucess"
					component={Sucess}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen 
				name="categoryList" 
				component={CategoryList} 
				options={{
					title: "Category List",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="settings" 
				component={Settings} 
				options={{
					title: "settings",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="personal" 
				component={Personal} 
				options={{
					title: "personal",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="statistics" 
				component={Statistics} 
				options={{
					title: "statistics",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="personalJotter" 
				component={PersonalJotter} 
				options={{
					title: "personalJotter",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="editNote" 
				component={EditNote} 
				options={{
					title: "editNote",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="newJotter" 
				component={NewJotter} 
				options={{
					title: "newJotter",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="chatInbox" 
				component={ChatInbox} 
				options={{
					title: "chatInbox",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="eBook" 
				component={Ebook} 
				options={{
					title: "eBook",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="review" 
				component={Review} 
				options={{
					title: "review",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="bookDetails" 
				component={BookDetails} 
				options={{
					title: "bookDetails",
					headerShown: false,
				}}
				/>
				<Stack.Screen 
				name="message" 
				component={Message} 
				options={{
					title: "message",
					headerShown: false,
				}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RootStack;
