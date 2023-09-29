/** @format */

// import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	ScrollView,
	Image,
	TextInput,
	Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { pinStyle } from "./otp";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { loginFailed, loginPending, loginSuccessful } from "../src/Store/AuthSlice";
import axios from "../src/axios";
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignupSchema = Yup.object().shape({
      email: Yup.string().email('Invalid email').required('Please enter your email address.'),
      password: Yup.string()
        .min(8)
        .required('Please enter your password.')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
        ),
  });


export default function Login({ navigation }) {
	const {loading, error} = useSelector((state) => state.auth)

	const dispatch = useDispatch();

	const handleSubmit = async (values) => {
		dispatch(loginPending())
		const response = await axios.post('auth/login', values)
		.then(response => {
			if(response.data.status === true){
				dispatch(loginSuccessful(values))
			}
			const userData = response.data;
			AsyncStorage.setItem('userToken', JSON.stringify(userData));
			// return userData;
			console.log(userData);  
			navigation.navigate("tab")
		})
		.catch(error => {
			dispatch(loginFailed())
			console.error('Registration failed:', error.data);
			throw error;
		})
	}

	return (
		<SafeAreaView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={{
					backgroundColor: "#FFFfff",
					height: "100%",
				}}
			>
				<View style={{ marginHorizontal: 20 }}>
					<View>
						<Text
							style={{
								color: "#141414",
								fontFamily: "InterBold",
								fontSize: 30,
								// textAlign: "center",
								marginTop: "30%",
							}}
						>
							Welcome back!
						</Text>
					</View>
					<View>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,

								marginTop: 20,
							}}
						>
							Sign in to your account
						</Text>
					</View>

					<Formik
					   initialValues={{
						email: '',
						password: '', 
					   }}
					   validationSchema={SignupSchema}
					   onSubmit={handleSubmit}
					>
						{({values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit})=> (
					<View>
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
						<TextInput
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							placeholderTextColor={"#141414"}
							placeholder="Email"
							values={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
						/>
					</View>
					{touched.email && errors.email && (
                        <Text style={{color: 'red'}}>{errors.email}</Text>
                    )}
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
						<TextInput
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							placeholderTextColor={"#141414"}
							placeholder="Password"
							values={values.name}
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password')}
						/>
					</View>
					{touched.password && errors.password && (
                        <Text style={{color: 'red'}}>{errors.password}</Text>
                    )}
					<TouchableOpacity
						onPress={() => navigation.navigate("passwordreset")}
					>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,
								textAlign: "right",
								marginTop: 20,
							}}
						>
							Forgot password?
						</Text>
					</TouchableOpacity>
					{ error && <Text style={{color: 'red'}}>{'Email or password invalid'}</Text>}
					<TouchableOpacity
						style={[
                            styles.button, {backgroundColor: isValid ? '#FFD672' : 'red'}
                          ]}
                        onPress={handleSubmit}
                        disabled={!isValid}
					>
						<Text
							style={{
								textAlign: "center",
								padding: 5,
								fontFamily: "Inter",
								fontSize: 15,
								color: "#141414",
							}}
						>
						{loading ? 'Loading...' : 'Sign in'}
						</Text>
					</TouchableOpacity>
					</View>
					)}
					</Formik>

					<View style={{ flexDirection: "row", alignSelf: "center" }}>
						<FontAwesome5
							name="facebook"
							size={24}
							color="#0000ff"
							style={{ marginLeft: 10 }}
						/>
						<AntDesign
							style={{ marginLeft: 20 }}
							name="apple1"
							size={24}
							color="black"
						/>
						<Image
							style={{
								objectFit: "scale-down",
								height: 26,
								marginLeft: 10,
							}}
							source={require("../assets/google.png")}
						/>
					</View>
					<View style={pinStyle.buttomgroup}>
							<Text style={pinStyle.buttomText}>
								Don't have an account ?
							</Text>
							<Pressable onPress={()=> navigation.navigate("signup")}>
							  <Text style={pinStyle.buttomText2}> Sign Up</Text>
							</Pressable>
					</View>

				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	button: {
		marginTop: "5%",
		marginBottom: "25%",
		// backgroundColor: "#FFD672",
		width: "100%",
		padding: 10,
		color: "#ffff",
		fontFamily: "Inter",
		borderRadius: 10,
	},
	mainCardContainer: {
		width: "100%",
		borderRadius: 20,
	},
	cardContainer: {
		height: "100%",
	},
	cardGroup: {
		// paddingVertical: 18,
		paddingHorizontal: 13,
	},
	imageStyle: {
		borderRadius: 10,
	},
});
