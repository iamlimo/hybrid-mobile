/** @format */

import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	ScrollView,
	TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import axios from "../src/axios";



export default function SignUp({ navigation }) {
	const [name, setName] = useState('')
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [nameError, setNameError] = useState('');
	const [usernameError, setUsernameError] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [error, setError] = useState('');


	const createAccount = () => {
		const headers = {
		    'Content-Type': 'application/json', 
			withCredentials: true 
		  };
		const userData = {name, email, username, password, password_confirmation: confirmPassword};
		axios.post(`/auth/register`,
		userData, 
		{headers},)
		.then(response => {
			console.log(response.data.message);
		  if (response.status >= 200 && !nameError && !emailError && !passwordError ) {
			// Registration successful
			navigation.navigate("verification")
			setError('');
		  } else {
			console.log(userData);
			setError(response.data.message);
		  }
		})
		.catch(error => {
		  console.error('Registration failed:', error.datda.message);
		  setError('Registration failed. Please try again later.');
		});
	}

	const handleSubmit =  async () => {
		  const nameRegex = /^[a-zA-Z\s]+$/; // Allow only letters and spaces
		  if (!name || !nameRegex.test(name)) {
			setNameError('name field is required');
		  }else{
			  setNameError('');
		  }

		  if (!username) {
			setUsernameError('username field is required');
		  }else{
			setUsernameError('');
		  }

		  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
		  if (!email) {
			setEmailError('email is required');
		    } else if (!emailRegex.test(email)){
			  setEmailError('please input a valid email address');
		  }else{
			setEmailError('');
		  }

		  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //At least 8 characters with at least one letter and one number
		  if (!password) {
			setPasswordError('password field is required')
		  }else if (!passwordRegex.test(password)){
		    setPasswordError('password must contain 8 characters with at least one letter and one number')
		  }else if(password !== confirmPassword){
			setPasswordError('passwords do not match')
		  }else{
			setPasswordError('');
		}

		createAccount();
	}


	return (
		<SafeAreaView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={{
					backgroundColor: "#FFD672",
					height: "100%",
				}}
			>
				<View style={{ marginHorizontal: 20 }}>
					<TouchableOpacity
						style={{
							flexDirection: "row",
							marginTop: 10,
							justifyContent: "space-between",
						}}
						onPress={() => navigation.navigate("splash")}
					>
						<View style={{ flexDirection: "row", marginTop: 10 }}>
							<Ionicons name="arrow-back" size={24} color="black" />
							<Text
								style={{
									marginTop: 5,
									marginLeft: 10,
									fontFamily: "Inter",
									fontSize: 14,
								}}
							>
								Back
							</Text>
						</View>
						<View>
							<Text
								style={{
									marginTop: 10,
									marginLeft: 10,
									fontFamily: "Inter",
									fontSize: 14,
								}}
							>
								Login
							</Text>
						</View>
					</TouchableOpacity>

					<View>
						<Text
							style={{
								color: "#141414",
								fontFamily: "InterBold",
								fontSize: 25,
								// marginLeft: 47,
								marginTop: "20%",
							}}
						>
							Sign Up
						</Text>
					</View>
					<View>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,
								// marginLeft: 47,
								marginTop: 20,
							}}
						>
							Create a free account to get access to unlimited books and ebooks
						</Text>
					</View>
					<View
						style={{
							border: "2",
							border: "none",
							borderBottomWidth: 1,
							borderColor: "#000000",
							paddingVertical: 20,
							color: "#141414",
							marginVertical: 20,
						}}
					>
						{/* FULL NAME */}
						<TextInput
							placeholderTextColor={"#141414"}
							placeholder="Full Name"
							value={name}
							onChangeText={(text) => setName(text)}
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
						/>
					</View>
					<Text style={{color: 'red'}}>{nameError}</Text>

					<View
						style={{
							border: "2",
							border: "none",
							borderBottomWidth: 1,
							borderColor: "#000000",
							paddingVertical: 20,
							color: "#141414",
							marginVertical: 20,
						}}
					>
						{/* USERNAME */}
						<TextInput
							placeholderTextColor={"#141414"}
							placeholder="Username"
							value={username}
							onChangeText={(text) => setUsername(text)}
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
						/>
					</View>
					<Text style={{color: 'red'}}>{usernameError}</Text>

					<View
						style={{
							border: "2",
							border: "none",
							borderBottomWidth: 1,
							borderColor: "#000000",
							paddingVertical: 20,
							color: "#141414",
							marginVertical: 20,
						}}
					>
						{/* EMAIL */}
						<TextInput
							placeholderTextColor={"#141414"}
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							placeholder="Email"
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
					</View>
						<Text style={{color: 'red'}}>{emailError}</Text>

					<View
						style={{
							border: "2",
							border: "none",
							borderBottomWidth: 1,
							borderColor: "#000000",
							paddingVertical: 20,
							color: "#141414",
							marginVertical: 20,
						}}
					>
						{/* PASSWORD */}
						<TextInput
							placeholderTextColor={"#141414"}
							placeholder="Password"
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
					</View>
						<Text style={{color: 'red'}}>{passwordError}</Text>

					<View
						style={{
							border: "2",
							border: "none",
							borderBottomWidth: 1,
							borderColor: "#000000",
							paddingVertical: 20,
							color: "#141414",
							marginVertical: 20,
						}}
					>
						{/* CONFIRM PASSWORD */}
						<TextInput
							placeholderTextColor={"#141414"}
							placeholder="Confirm Password"
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							value={confirmPassword}
							onChangeText={(text) => setConfirmPassword(text)}
						/>
					</View>
					<Text style={{color: 'red'}}>{passwordError}</Text>

					<View>
						<TouchableOpacity
							onPress={handleSubmit}
							style={{
								backgroundColor: "#141414",
								padding: 15,
								borderRadius: 5,
								alignItems: "center",
								marginVertical: 10,
							}}
						>
							<Text style={{ color: "#FFFFFF" }}>Create an Account</Text>
						</TouchableOpacity>
					</View>
					<Text style={{color: 'red'}}>{error}</Text>
					<View style={{ alignItems: "center" }}>
						<Text
							style={{ fontFamily: "Inter", fontSize: 15, color: "#505050" }}
						>
							By signing up, you are agreeing to put{"\n"}
						</Text>
						<View style={{ flexDirection: "row" }}>
							<TouchableOpacity>
								<Text
									style={{
										fontFamily: "Inter",
										fontSize: 15,
										color: "#141414",
									}}
								>
									Terms of Use
								</Text>
							</TouchableOpacity>
							<Text
								style={{ fontFamily: "Inter", fontSize: 14, color: "#505050" }}
							>
								{" "}
								and{" "}
							</Text>
							<TouchableOpacity>
								<Text
									style={{
										fontFamily: "Inter",
										fontSize: 15,
										color: "#141414",
									}}
								>
									Privacy Policy
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
