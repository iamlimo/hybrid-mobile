/** @format */

import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	View,
	ScrollView,
	Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MobileOtp from "./MobileOtp";
import { pinStyle } from "./otp";
export default function Verification({ navigation }) {
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
				<Image
					style={{
						marginTop: 70,
						marginBottom: 30,
						alignSelf: "center",
					}}
					source={require("../assets/verification.png")}
				/>
				<View>
					<Text
						style={{
							color: "#141414",
							fontFamily: "InterBold",
							fontSize: 30,
							textAlign: "center",
							marginTop: 20,
						}}
					>
						Verification code
					</Text>
				</View>
				<TouchableOpacity>
					<Text
						style={{
							color: "#141414",
							fontFamily: "Inter",
							fontSize: 15,
							textAlign: "center",
							marginTop: 20,
						}}
					>
						Please enter the four verification code send to your email.
					</Text>
				</TouchableOpacity>
				<MobileOtp />
				<View style={pinStyle.subContainer}>
					<TouchableOpacity
						onPress={() => navigation.navigate("login")}
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
					<View style={pinStyle.buttomgroup}>
						<TouchableOpacity>
							<Text style={pinStyle.buttomText}>
								Didn’t recieve the code?
								<Text style={pinStyle.buttomText2}> Send Another</Text>
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
