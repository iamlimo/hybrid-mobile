/** @format */
import { StyleSheet, Text, View } from "react-native";
import RootStack from "./stackNavigator/AppStack";
import { Provider, useSelector } from "react-redux";
import store from "./src/Store/store";
import AuthStack from "./stackNavigator/AuthStack";
import AppStack from "./stackNavigator/AppStack";
import { useState } from "react";
import MainStack from "./stackNavigator/MainStack";


export default function App() {
	// const isLoggedIn = useSelector((state) => state.auth)
	// const [ isLoggedIn, setIsLoggedIn]= useState(false)
	return (
		<Provider store={store}>
			<MainStack />
			{/* {
			isLoggedIn
			? 
			<AuthStack />
			:
			 <AppStack />
		    }  */}
		</Provider>
	);
}

