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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { pinStyle } from "./otp";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
export default function Login({ navigation }) {
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
							placeholderTextColor={"#141414"}
							placeholder="Email"
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
						/>
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
						<TextInput
							placeholderTextColor={"#141414"}
							placeholder="Password"
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
						/>
					</View>
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
					<TouchableOpacity
						onPress={() => navigation.navigate("tab")}
						style={pinStyle.button}
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
							Create an Account
						</Text>
					</TouchableOpacity>
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
						<TouchableOpacity>
							<Text style={pinStyle.buttomText}>
								Don't have an account ?
								<Text style={pinStyle.buttomText2}> Sign Up</Text>
							</Text>
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
});
