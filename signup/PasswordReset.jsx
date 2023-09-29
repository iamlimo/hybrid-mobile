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
import { useDispatch, useSelector } from "react-redux";
import { verifyEmailPending, verifyEmailSuccess, verifyEmailfailed } from "../src/Store/AuthSlice";
import { Formik } from "formik";
import * as Yup from 'yup';
import { useNavigation } from "@react-navigation/native";
import axios from "../src/axios";


const SignupSchema = Yup.object().shape({
	email: Yup.string().email('Incorrect email').required('Please enter your email address.'),
});

export default function PasswordReset() {
	const {loading, error} = useSelector((state) => state.auth.loading)
	const dispatch = useDispatch();
	const navigation = useNavigation();

	const handleSubmit = async (values) => {
		const response = await axios.post('auth/verify-email', values)
		.then(response => {
			navigation.navigate('prompt')
		})
		.catch(error => {
			dispatch(verifyEmailfailed())
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
					backgroundColor: "#ffffff",
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
							Forget password
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
							Please fill email and we’ll send you a link to get back into your
							account.
						</Text>
					</View>
					<Formik
					  initialValues={{
				      email: '',
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
							marginTop: "20%",
							marginBottom: "70%",
						}}
					>
						<TextInput
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
							placeholderTextColor={"#141414"}
							placeholder="Enter your Email"
							values={values.email}
                            onChangeText={handleChange('email')}
                            onBlur={() => setFieldTouched('email')}
						/>
					</View>
					{touched.email && errors.email && (
                        <Text style={{color: 'red'}}>{errors.email}</Text>
                    )}

					<View>
						<TouchableOpacity
							style={[
								styles.submitButton, {backgroundColor: isValid ? '#FFD672' : 'red'}
							]}
							onPress={handleSubmit}
							disabled={!isValid}
						>
							<Text style={{ color: "#000000" }}>
							{loading ? 'Loading...' : 'Submit'}
							</Text>
						</TouchableOpacity>
					</View>
					</View>
					)}
					</Formik>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("verification")}
							style={{
								backgroundColor: "#Ffffff",
								padding: 15,
								borderRadius: 5,
								alignItems: "center",
								marginVertical: 10,
							}}
						>
							<Text style={{ color: "#000000" }}>Cancel</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
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
	submitButton: {
		padding: 15,
		borderRadius: 5,
		alignItems: "center",
		marginVertical: 10,
	}
});
