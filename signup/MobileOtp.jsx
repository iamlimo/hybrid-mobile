/** @format */

import React, { useState } from "react";

import {
	Text,
	View,
	SafeAreaView,
	Image,
	Button,
	TouchableOpacity,
	Alert,
} from "react-native";
import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { pinStyle } from "./otp";
// import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
export default function MobileOtp({ navigation, route }) {
	const email = route?.params?.emails;
	console.log(email, "emails");
	const next = () => {
		navigation.navigate("login", {
			token: value,
		});
	};
	const CELL_COUNT = 4;

	const [value, setValue] = useState("");
	const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	});

	return (
		<SafeAreaView style={pinStyle.container}>
			<SafeAreaView style={pinStyle.subContainer}>
				<CodeField
					ref={ref}
					{...props}
					value={value}
					onChangeText={setValue}
					cellCount={CELL_COUNT}
					rootStyle={pinStyle.codeFieldRoot}
					keyboardType="number-pad"
					textContentType="oneTimeCode"
					renderCell={({ index, symbol, isFocused }) => (
						<Text
							key={index}
							style={[pinStyle.cell, isFocused && pinStyle.focusCell]}
							onLayout={getCellOnLayoutHandler(index)}
						>
							{symbol || (isFocused ? <Cursor /> : null)}
						</Text>
					)}
				/>
			</SafeAreaView>

			
		</SafeAreaView>
	);
}
