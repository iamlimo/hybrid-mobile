/** @format */

import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	ImageBackground,
	Text,
	View,
	Button,
	TouchableOpacity,
	Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { loginSuccessful, logoutUser } from "../src/Store/AuthSlice";


export default function Splash({ navigation }) {

	const dispatch = useDispatch();

	const handlePress = () => {
		if(dispatch(logoutUser())){
			navigation.navigate("login")
		} else if (dispatch(loginSuccessful())){
			navigation.navigate("tab")
		}
	}


	return (
		<SafeAreaView>
			<View style={styles.mainCardContainer}>
				<ImageBackground
					style={styles.cardContainer}
					imageStyle={styles.imageStyle}
					source={require("../assets/splash.png")}
				>
				<View style={styles.div1}>
					<Image style={styles.companyImg}
					source={require('../assets/companyOne.png')} 
					/>
					<View style={{width: '100%', marginTop: 25}}>
					    <Text style={{fontSize: 22, fontWeight: 400, color: 'white'}}>
					         Explore world's largest
					    </Text>
					    <Text style={{fontSize: 22, fontWeight: 400, color: 'white', marginTop: 5 }}>
					         E-library
					    </Text>
					<TouchableOpacity
					onPress={handlePress}
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: "#CCAB5B",
							height: 58.72,
							width: 159,
							fontFamily: "Inter",
							borderRadius: 14.5,
							marginTop: 25
						}}
					>
						<Text
						  style={{
							fontSize: 18,
							fontWeight: 500,
						  }}
						>
							Start Reading
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
					onPress={() => navigation.navigate("signup")}
					>
						<Text
							style={{
								color: "#FFF6DE",
								fontFamily: "Inter",
								fontSize: 16.5,
								marginTop: 15,
							}}
						>
							Create an account
						</Text>
					</TouchableOpacity>
					</View>
				</View>
				</ImageBackground>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	mainCardContainer: {
		width: "100%",
		height: "100%",
	},
	cardContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		width: "100%",
		height: "100%",
	},
	cardGroup: {
		paddingHorizontal: 13,
	},
	imageStyle: {
		borderRadius: 10,
	},
	div1: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: '88%',
		height: '75%',
		paddingHorizontal: 25,
		paddingBottom: 25,
		borderRadius: 20,
		backgroundColor: '#141414'
	},
	companyImg: {
		borderRadius: 12,
		width: '65%',
		height: '50%',
	},
});
