/** @format */

import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	ImageBackground,
	Text,
	View,
	Button,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Splash({ navigation }) {
	return (
		<SafeAreaView>
			<View style={styles.mainCardContainer}>
				<ImageBackground
					style={styles.cardContainer}
					imageStyle={styles.imageStyle}
					source={require("../assets/splash.png")}
				>
					<View
						style={{
							backgroundColor: "#CCAB5B",
							marginTop: "147%",
							padding: 10,
							width: "40%",
							fontFamily: "Inter",
							borderRadius: 10,
							marginLeft: 40,
						}}
					>
						<Button color="#000000" title="Start reading" />
					</View>
					<TouchableOpacity onPress={() => navigation.navigate("signup")}>
						<Text
							style={{
								color: "#FFF6DE",
								fontFamily: "Inter",
								fontSize: 16.5,
								marginLeft: 47,
								marginTop: 13,
							}}
						>
							Create an account
						</Text>
					</TouchableOpacity>
				</ImageBackground>
			</View>
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
