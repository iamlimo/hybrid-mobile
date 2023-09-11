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
export default function SignUp({ navigation }) {
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
						<TextInput
							placeholderTextColor={"#141414"}
							placeholder="Full Name"
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
							placeholder="Confirm Password"
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
						/>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("verification")}
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
