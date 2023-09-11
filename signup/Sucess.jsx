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

export default function Sucess({ navigation }) {
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
					Hooray!!!
						</Text>
					</View>
					<View
						style={{
							// backgroundColor: "#FFD672",
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
							Your subscription is successful
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
							<Text style={{ color: "#000000" }}>VIEW MY LIBRARY</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
