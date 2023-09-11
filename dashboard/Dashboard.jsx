/** @format */

import React, { useState } from "react";
import {
	Button,
	TouchableOpacity,
	// Text,
	View,
	ScrollView,
	TextInput,
	Image,
	Text,
} from "react-native";
import { ProgressBar, MD3Colors } from "react-native-paper";
import { dashboard } from "./dashboardstyle";
export default function Dashboard({ navigation }) {
	const [selectone, setSelectOne] = useState(1);
	const activeone = () => {
		setSelectOne(1);
		console.log("hello 1");
	};
	const activetwo = () => {
		setSelectOne(2);
		console.log("hello 2");
	};
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			showsHorizontalScrollIndicator={false}
			style={{
				backgroundColor: "#FFD672",
				height: "100%",
			}}
		>
			<View style={{ marginHorizontal: 20, marginBottom: 20 }}>
				<View>
					<Text
						style={{
							marginTop: 10,
							marginLeft: 10,
							fontFamily: "InterBold",
							fontSize: 25,
							alignSelf: "center",
						}}
					>
						Welcome, Isaac
					</Text>
				</View>
				<Image
					style={{
						marginTop: 70,
						// marginBottom: 30,
						alignSelf: "center",
					}}
					source={require("../assets/book.png")}
				/>

				<View>
					<Text
						style={{
							color: "#141414",
							fontFamily: "Inter",
							fontSize: 15,
							alignSelf: "center",
							// marginTop: "20%",
						}}
					>
						You don't have a book
					</Text>
				</View>
				<View
					style={{
						backgroundColor: "#000000",
						padding: 3,
						marginTop: 20,
						width: "50%",
						alignSelf: "center",
					}}
				>
					<Button title="continue reading" color="#ffff" />
				</View>
				<View>
					<Text
						style={{
							color: "#141414",
							fontFamily: "InterBold",
							fontSize: 17,
							// marginLeft: 47,
							marginTop: 20,
						}}
					>
						Categories
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						padding: 3,
						marginTop: 20,
						width: "50%",
						alignSelf: "center",
					}}
				>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("");
							activeone();
						}}
					>
						<Text
							style={selectone === 1 ? dashboard.active : dashboard.notactive}
						>
							Fiction
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("");
							activetwo();
						}}
					>
						<Text
							style={selectone === 2 ? dashboard.active : dashboard.notactive}
						>
							Non-Fiction
						</Text>
					</TouchableOpacity>
				</View>

				{selectone === 1 ? (
					<View>
						<View
							style={{
								flexDirection: "row",
								padding: 3,
								marginTop: 20,
								// width: "50%",
								alignSelf: "center",
							}}
						>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									padding: 10,
									margin: 20,
									flexDirection: "row",
								}}
							>
								<Image
									style={{}}
									source={require("../assets/adventures.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 15,
										textAlign: "center",
										// marginTop: 10,
										marginLeft: 10,
									}}
								>
									Adventures
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									padding: 10,
									margin: 20,
									flexDirection: "row",
								}}
							>
								<Image
									style={{}}
									source={require("../assets/pyschology.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 15,
										textAlign: "center",
										// marginTop: 10,
										marginLeft: 10,
									}}
								>
									Psychology
								</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: "row", marginLeft: -10 }}>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									padding: 1,
									margin: 10,
									paddingHorizontal: 7,

									flexDirection: "row",
									paddingVertical: 5,
								}}
							>
								<Image
									style={{ alignSelf: "center", marginLeft: 5 }}
									source={require("../assets/money.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 10,

										alignSelf: "center",
										paddingHorizontal: 5,
										paddingVertical: 10,
									}}
								>
									Money
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									paddingVertical: 5,
									margin: 10,
									paddingHorizontal: 7,
									flexDirection: "row",
								}}
							>
								<Image
									style={{ alignSelf: "center", marginLeft: 5 }}
									source={require("../assets/romance.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 10,

										alignSelf: "center",
										paddingHorizontal: 5,
										paddingVertical: 10,
										// marginLeft: 10,
									}}
								>
									Romance
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									paddingVertical: 5,
									margin: 10,
									flexDirection: "row",
									paddingHorizontal: 7,
								}}
							>
								<Image
									style={{ alignSelf: "center", marginLeft: 5 }}
									source={require("../assets/science.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 10,

										alignSelf: "center",
										paddingHorizontal: 5,
										paddingVertical: 10,
										// marginLeft: 10,
									}}
								>
									Science
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				) : null}
				{selectone === 2 ? (
					<View>
						<View
							style={{
								flexDirection: "row",
								padding: 3,
								marginTop: 20,
								width: "100%",
								alignSelf: "center",
							}}
						>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									padding: 10,
									margin: 20,
									flexDirection: "row",
								}}
							>
								<Image
									style={{}}
									source={require("../assets/adventures.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 15,
										textAlign: "center",
										// marginTop: 10,
										marginLeft: 10,
									}}
								>
									Finance
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									padding: 10,
									margin: 20,
									flexDirection: "row",
								}}
							>
								<Image
									style={{}}
									source={require("../assets/pyschology.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 15,
										textAlign: "center",
										// marginTop: 10,
										marginLeft: 10,
									}}
								>
									Politics
								</Text>
							</TouchableOpacity>
						</View>

						<View style={{ flexDirection: "row", width: "100%" }}>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									padding: 1,
									margin: 10,
									paddingHorizontal: 7,

									flexDirection: "row",
									paddingVertical: 5,
								}}
							>
								<Image
									style={{ alignSelf: "center", marginLeft: 5 }}
									source={require("../assets/money.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 10,

										alignSelf: "center",
										paddingHorizontal: 5,
										paddingVertical: 10,
									}}
								>
									Money
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									paddingVertical: 5,
									margin: 10,
									paddingHorizontal: 7,
									flexDirection: "row",
								}}
							>
								<Image
									style={{ alignSelf: "center", marginLeft: 5 }}
									source={require("../assets/romance.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 10,

										alignSelf: "center",
										paddingHorizontal: 5,
										paddingVertical: 10,
										// marginLeft: 10,
									}}
								>
									Histroy
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									backgroundColor: "#D7D7D7",
									paddingVertical: 5,
									margin: 10,
									flexDirection: "row",
									paddingHorizontal: 7,
								}}
							>
								<Image
									style={{ alignSelf: "center", marginLeft: 5 }}
									source={require("../assets/science.png")}
								/>
								<Text
									style={{
										color: "#141414",
										fontFamily: "Inter",
										fontSize: 10,

										alignSelf: "center",
										paddingHorizontal: 5,
										paddingVertical: 10,
										// marginLeft: 10,
									}}
								>
									Science
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				) : null}
				<View>
					<Text
						style={{
							color: "#141414",
							fontFamily: "InterBold",
							fontSize: 18,
							marginVertical: 30,
						}}
					>
						Reading
					</Text>
				</View>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					style={{ flexDirectionz: "row" }}
				>
					<View style={{ marginRight: 20 }}>
						<Image
							style={{ alignSelf: "center" }}
							source={require("../assets/bigbook.png")}
						/>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,

								// alignSelf: "center",
							}}
						>
							The Picture of{"\n"}
							Dorian Gray
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
								// alignSelf: "center",
							}}
						>
							Oscar Wilde
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
							}}
						>
							You completed{" "}
						</Text>
						<ProgressBar progress={0.5} color="#141414" />
						<View
							style={{
								backgroundColor: "#000000",
								padding: 3,
								marginTop: 20,
								// width: "30%",
								borderRadius: 4,
								// alignSelf: "center",
							}}
						>
							<Button title="continue reading" color="#ffff" />
						</View>
					</View>
					<View style={{ marginHorizontal: 20 }}>
						<Image
							style={{ alignSelf: "center" }}
							source={require("../assets/bigbook.png")}
						/>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,

								// alignSelf: "center",
							}}
						>
							The Picture of{"\n"}
							Dorian Gray
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
								// alignSelf: "center",
							}}
						>
							Oscar Wilde
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
							}}
						>
							You completed{" "}
						</Text>
						<ProgressBar progress={0.5} color="#141414" />
						<View
							style={{
								backgroundColor: "#000000",
								padding: 3,
								marginTop: 20,
								// width: "30%",
								borderRadius: 4,
								// alignSelf: "center",
							}}
						>
							<Button title="continue reading" color="#ffff" />
						</View>
					</View>
					<View style={{ marginRight: 20 }}>
						<Image
							style={{ alignSelf: "center" }}
							source={require("../assets/bigbook.png")}
						/>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,

								// alignSelf: "center",
							}}
						>
							The Picture of{"\n"}
							Dorian Gray
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
								// alignSelf: "center",
							}}
						>
							Oscar Wilde
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
							}}
						>
							You completed{" "}
						</Text>
						<ProgressBar progress={0.5} color="#141414" />
						<View
							style={{
								backgroundColor: "#000000",
								padding: 3,
								marginTop: 20,
								// width: "30%",
								borderRadius: 4,
								// alignSelf: "center",
							}}
						>
							<Button title="continue reading" color="#ffff" />
						</View>
					</View>
					<View style={{ marginRight: 20 }}>
						<Image
							style={{ alignSelf: "center" }}
							source={require("../assets/bigbook.png")}
						/>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,

								// alignSelf: "center",
							}}
						>
							The Picture of{"\n"}
							Dorian Gray
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
								// alignSelf: "center",
							}}
						>
							Oscar Wilde
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
							}}
						>
							You completed{" "}
						</Text>
						<ProgressBar progress={0.5} color="#141414" />
						<View
							style={{
								backgroundColor: "#000000",
								padding: 3,
								marginTop: 20,
								// width: "30%",
								borderRadius: 4,
								// alignSelf: "center",
							}}
						>
							<Button title="continue reading" color="#ffff" />
						</View>
					</View>
				</ScrollView>
				<View>
					<Text
						style={{
							color: "#141414",
							fontFamily: "InterBold",
							fontSize: 18,
							marginVertical: 30,
						}}
					>
						Unread
					</Text>
				</View>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					style={{ flexDirectionz: "row" }}
				>
					<View style={{ marginRight: 20 }}>
						<Image
							style={{ alignSelf: "center" }}
							source={require("../assets/zero.png")}
						/>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,

								// alignSelf: "center",
							}}
						>
							The Picture of{"\n"}
							Dorian Gray
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
								// alignSelf: "center",
							}}
						>
							Oscar Wilde
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
							}}
						>
							You completed{" "}
						</Text>

						<View
							style={{
								backgroundColor: "#000000",
								fontSize: 5,
								marginTop: 20,
								marginTop: 20,
								// width: "30%",
								borderRadius: 4,
								// alignSelf: "center",
							}}
						>
							<Button title="start reading" color="#ffff" />
						</View>
					</View>
					<View style={{ marginHorizontal: 20 }}>
						<Image
							style={{ alignSelf: "center" }}
							source={require("../assets/milk.png")}
						/>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,

								// alignSelf: "center",
							}}
						>
							The Picture of{"\n"}
							Dorian Gray
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
								// alignSelf: "center",
							}}
						>
							Oscar Wilde
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
							}}
						>
							You completed{" "}
						</Text>

						<View
							style={{
								backgroundColor: "#000000",
								fontSize: 5,
								marginTop: 20,
								marginTop: 20,
								// width: "30%",
								borderRadius: 4,
								// alignSelf: "center",
							}}
						>
							<Button title="start reading" color="#ffff" />
						</View>
					</View>
					<View style={{ marginRight: 20 }}>
						<Image
							style={{ alignSelf: "center" }}
							source={require("../assets/zero.png")}
						/>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,

								// alignSelf: "center",
							}}
						>
							The Picture of{"\n"}
							Dorian Gray
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
								// alignSelf: "center",
							}}
						>
							Oscar Wilde
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
							}}
						>
							You completed{" "}
						</Text>

						<View
							style={{
								backgroundColor: "#000000",
								fontSize: 5,
								marginTop: 20,
								marginTop: 20,
								// width: "30%",
								borderRadius: 4,
								// alignSelf: "center",
							}}
						>
							<Button title="start reading" color="#ffff" />
						</View>
					</View>
					<View style={{ marginRight: 20 }}>
						<Image
							style={{ alignSelf: "center" }}
							source={require("../assets/milk.png")}
						/>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 15,

								// alignSelf: "center",
							}}
						>
							The Picture of{"\n"}
							Dorian Gray
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
								// alignSelf: "center",
							}}
						>
							Oscar Wilde
						</Text>
						<Text
							style={{
								color: "#141414",
								fontFamily: "Inter",
								fontSize: 10,
								marginVertical: 2,
							}}
						>
							You completed{" "}
						</Text>

						<View
							style={{
								backgroundColor: "#000000",
								fontSize: 5,
								marginTop: 20,
								fontFamily: "Inter",
								borderRadius: 4,
								// alignSelf: "center",
							}}
						>
							<Button
								title="start reading"
								color="#ffff"
								style={{ fontSize: 5, marginTop: 20 }}
							/>
						</View>
					</View>
				</ScrollView>
			</View>
		</ScrollView>
	);
}
