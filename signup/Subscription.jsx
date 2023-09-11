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
import { Ionicons, Entypo } from "@expo/vector-icons";
export default function Subscription({ navigation }) {
	return (
		<SafeAreaView>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={{
					backgroundColor: "#FFffff",
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
							<Entypo name="cross" size={24} color="black" />
						</View>
					</TouchableOpacity>

					<View>
						<Text
							style={{
								color: "#141414",
								fontFamily: "InterBold",
								fontSize: 25,
								// marginLeft: 47,
								marginVertical: "20%",
							}}
						>
							Get access to all books and resources
						</Text>
					</View>

					<View style={{ flexDirection: "row", marginVertical: 20 }}>
						<Ionicons name="checkmark-done" size={24} color="#39BA00" />
						<Text
							style={{
								color: "rgba(20, 20, 20, 0.7)",
								fontFamily: "Inter",
								fontSize: 15,
								marginLeft: 10,
							}}
						>
							Unlimited books, resources and publications
						</Text>
					</View>
					<View style={{ flexDirection: "row", marginVertical: 20 }}>
						<Ionicons name="checkmark-done" size={24} color="#39BA00" />
						<Text
							style={{
								color: "rgba(20, 20, 20, 0.7)",
								fontFamily: "Inter",
								fontSize: 15,
								marginLeft: 10,
							}}
						>
							Flexible and affordable
						</Text>
					</View>
					<View style={{ flexDirection: "row", marginVertical: 20 }}>
						<Ionicons name="checkmark-done" size={24} color="#39BA00" />
						<Text
							style={{
								color: "rgba(20, 20, 20, 0.7)",
								fontFamily: "Inter",
								fontSize: 15,
								marginLeft: 10,
							}}
						>
							Share notes
						</Text>
					</View>
					<View style={{ flexDirection: "row", marginVertical: 20 }}>
						<Ionicons name="checkmark-done" size={24} color="#39BA00" />
						<Text
							style={{
								color: "rgba(20, 20, 20, 0.7)",
								fontFamily: "Inter",
								fontSize: 15,
								marginLeft: 10,
							}}
						>
							Cancel anytime
						</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("verification")}
							style={{
								backgroundColor: "#FFD672",
								padding: 5,
								borderRadius: 5,
								width: "50%",
								marginVertical: 10,
							}}
						>
							<Text style={{ color: "#000000", padding: 5 }}>Monthly plan</Text>
							<Text style={{ color: "#000000", padding: 5 }}>
								#1,000 per month
							</Text>
						</TouchableOpacity>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("verification")}
							style={{
								backgroundColor: "#FFD672",
								padding: 5,
								borderRadius: 5,
								width: "50%",
								marginVertical: 10,
							}}
						>
							<Text style={{ color: "#000000", padding: 5 }}>
								12 months plan
							</Text>
							<Text style={{ color: "#000000", padding: 5 }}>
								#12,000 per month
							</Text>
						</TouchableOpacity>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("sucess")}
							style={{
								backgroundColor: "#FFD672",
								padding: 15,
								borderRadius: 5,
								alignItems: "center",
								marginVertical: 50,
							}}
						>
							<Text style={{ color: "#000000" }}>Subscribe Now</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
