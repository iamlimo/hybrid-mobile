/** @format */
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	ScrollView,
	TextInput,
    Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { useDispatch, useSelector } from "react-redux";
import { registerFailed, registerPending, registerSuccessful} from "../src/Store/AuthSlice";
import axios from "../src/axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please enter your full name.'),
    username: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please enter your username.'),
      email: Yup.string().email('Invalid email').required('Please enter your email address.'),
      password: Yup.string()
        .min(8)
        .required('Please enter your password.')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            'must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
        ),
      password_confirmation: Yup.string()
        .min(8, 'Confirm password must be 8 characters long')
        .oneOf([Yup.ref('password')], 'Passwords do not match.')
        .required('Confirm password is required'),
  });



export default function SignUp() {

	const navigation = useNavigation();
	const {loading, error} = useSelector((state) => state.auth)

	const dispatch = useDispatch();


	const handleSubmit = async (values) => {
		dispatch(registerPending()); 
		AsyncStorage.setItem("userData", JSON.stringify(values));
		const response = await axios.post('/auth/register', values)
		.then(response => {
			if (response.data.status === true) {
				dispatch(registerSuccessful(values));
				}
			navigation.navigate("verification")
			console.log(response.data);
			console.log(values);
		})
		.catch(error => {
			dispatch(registerFailed());
			console.error('Registration failed:', error.data);
		});
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
							onPress={()=>navigation.navigate('login')}
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

                    <Formik
                     initialValues={{
                      name: '',
                      username: '',
                      email: '',
                      password: '', 
                      password_confirmation: '',
                     }}
                     validationSchema={SignupSchema}
                    //  onSubmit={values => Alert.alert(JSON.stringify(values))}
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
						{/* FULL NAME */}
						<TextInput
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							placeholderTextColor={"#141414"}
							placeholder="Full Name"
                            values={values.name}
                            onChangeText={handleChange('name')}
                            onBlur={() => setFieldTouched('name')}
						/>
					</View>
                    {touched.name && errors.name && (
                        <Text style={{color: 'red'}}>{errors.name}</Text>
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
						{/* USERNAME */}
						<TextInput
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							placeholderTextColor={"#141414"}
							placeholder="Username"
                            values={values.username}
                            onChangeText={handleChange('username')}
                            onBlur={() => setFieldTouched('username')}
						/>
					</View>
                    {touched.username && errors.username && (
                        <Text style={{color: 'red'}}>{errors.username}</Text>
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
						{/* EMAIL */}
						<TextInput
							placeholderTextColor={"#141414"}
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							placeholder="Email"
                            // autoCapitalize={false}
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
						{/* PASSWORD */}
						<TextInput
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							placeholderTextColor={"#141414"}
							placeholder="Password"
                            // autoCapitalize={false} 
                            values={values.password}
                            onChangeText={handleChange('password')}
                            onBlur={() => setFieldTouched('password')}
						/>
					</View>
                    {touched.password && errors.password && (
                        <Text style={{color: 'red'}}>{errors.password}</Text>
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
						{/* CONFIRM PASSWORD */}
						<TextInput
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							placeholderTextColor={"#141414"}
							placeholder="Confirm Password"
                            values={values.password_confirmation}
                            onChangeText={handleChange('password_confirmation')}
                            onBlur={() => setFieldTouched('password_confirmation')}
						/>
					</View>
                    {touched.password_confirmation && errors.password_confirmation && (
                        <Text style={{color: 'red'}}>{errors.password_confirmation}</Text>
                    )}

					    {/* BUTTON */}
					<View>
                        { error && <Text style={{color: 'red'}}>{'Username or Email already registered'}</Text>}
						<TouchableOpacity
                        style={[
                            styles.submitButton, {backgroundColor: isValid ? '#141414' : 'red'}
                          ]}
                            onPress={handleSubmit}
                            disabled={!isValid}
						>
							<Text style={{ color: "#FFFFFF" }}>
								{loading ? 'Loading...' : 'Create an Account'}
							</Text>
						</TouchableOpacity>
					</View>

                    </View>
                    )}
                    </Formik>

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

const styles = StyleSheet.create({
    submitButton: {
        // backgroundColor: "#141414",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 10,
    }
})