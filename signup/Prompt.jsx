
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
export default function Prompt({ navigation }) {
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
					<View style={{ marginVertical: "30%" }}>
						<Text
							style={{
								color: "#141414",
								fontFamily: "InterBold",
								fontSize: 20,
								textAlign: "center",
								marginTop: 20,
							}}
						>
							Check your email
						</Text>
					</View>
					<View
						style={{
							backgroundColor: "#FFD672",
							paddingVertical: 30,
							borderRadius: 20,
							paddingHorizontal: 20,
							width: "80%",
							alignSelf: "center",
							marginBottom: "30%",
						}}
					>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,
								textAlign: "center",
								// marginTop: 20,
							}}
						>
							We just sent a link {"\n"}am******el@gmail.com to verify {"\n"}
							your change of password.
						</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("subscription")}
							style={{
								backgroundColor: "#FFD672",
								padding: 15,
								borderRadius: 5,
								alignItems: "center",
								marginVertical: 10,
							}}
						>
							<Text style={{ color: "#000000" }}>Back to Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

