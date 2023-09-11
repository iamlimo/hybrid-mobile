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
export default function PasswordReset({ navigation }) {
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
							placeholderTextColor={"#141414"}
							placeholder="Enter your Email"
							style={{ color: "#141414", fontFamily: "Inter", fontSize: 16.5 }}
						/>
					</View>

					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("prompt")}
							style={{
								backgroundColor: "#FFD672",
								padding: 15,
								borderRadius: 5,
								alignItems: "center",
								marginVertical: 10,
							}}
						>
							<Text style={{ color: "#000000" }}>Submit</Text>
						</TouchableOpacity>
					</View>
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
});
