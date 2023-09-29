/** @format */

import { StyleSheet } from "react-native";

export const pinStyle = StyleSheet.create({
	root: { padding: 10, minHeight: 300 },
	title: { textAlign: "center", fontSize: 30 },
	codeFieldRoot: { marginTop: 20 },
	cell: {
		width: 50,
		marginLeft: 10,
		marginRight: 10,
		padding: 10,
		height: 60,
		lineHeight: 38,
		fontSize: 24,
		borderWidth: 2,
		borderColor: "#000000",
		textAlign: "center",
		borderRadius: 10,
	},
	focusCell: {
		borderColor: "#000",
	},
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: "#ffffff",
	},
	topText: {
		fontFamily: "PoppinsBold",
		fontSize: 40,
		lineHeight: "52",
		lineHeight: "87%",
		color: "#1B4B66",
		marginTop: "20%",
	},
	input: {
		alignSelf: "stretch",
		height: 40,
		marginVertical: 20,
		margin: 12,
		borderRadius: 5,
		padding: 12,
		fontSize: 14,
		border: "none",
		backgroundColor: "#F1F1F1",
		color: "#605979",
	},
	topText2: {
		fontFamily: "PoppinsBold",
		fontSize: 40,
		lineHeight: "52",

		color: "#1B4B66",
		marginTop: "20%",
	},
	subContainer: {
		marginHorizontal: 20,
	},
	texts: {
		// // fontStyle: "normal",
		fontWeight: "400",
		fontSize: 18,
		lineHeight: 18,
		marginVertical: 20,
	},
	text2: {
		// // fontStyle: "normal",
		// fontWeight: "400",
		fontSize: 16,
		lineHeight: 18,
		/* or 150% */
		margin: 20,
		color: "#013C86",
	},
	resend: {
		textAlign: "center",
		padding: 20,
		color: "#013C86",
		fontWeight: "400",
		fontSize: 12,
		lineHeight: "18p",
	},
	buttomText: {
		display: "flex",
		textAlign: "center",
		fontFamily: "Inter",
	},
	buttomTextotp: {
		fontSize: 15,
		display: "flex",
		textAlign: "center",
		fontFamily: "Inter",
	},
	buttomText2: {
		fontFamily: "Inter",
		display: "flex",

		fontSize: 18,
		color: "#141414",
	},
	buttomText2otp: {
		fontFamily: "Inter",
		display: "flex",
		textAlign: "center",
		fontSize: 14,
		color: "#0468BF",
	},
	buttomgroup: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 30,
	},
	button: {
		marginVertical: "20%",
		backgroundColor: "#FFD672",
		width: "100%",
		padding: 10,
		color: "#ffff",
		fontFamily: "Inter",
		borderRadius: 10,
	},
	buttonotp: {
		marginVertical: "20%",
		backgroundColor: "#0468BF",
		width: "100%",
		padding: 10,
		color: "#ffff",
		fontFamily: "Inter",
		borderRadius: 10,
	},
	buttonlocation: {
		marginVertical: 20,
		backgroundColor: "#0468BF",
		width: "100%",
		padding: 10,
		color: "#ffff",
		fontFamily: "Inter",
		borderRadius: 10,
		marginTop: 70,
	},
	buttonlocation2: {
		marginVertical: 20,
		width: "100%",
		padding: 10,
		color: "#0468BF",
		fontFamily: "Inter",
		borderRadius: 10,
		borderWidth: 2,
		borderColor: "#0468BF",
	},
	location: {
		fontFamily: "PoppinsBold",
		fontSize: 34,
		// lineHight: "34",
		color: "#171520",
		textAlign: "center",
		display: "flex",
	},
	divider: {
		fontFamily: "Inter",
		fontSize: 24,
		// lineHight: "34",
		color: "#626262",
		textAlign: "center",
		display: "flex",
		marginTop: -15,
	},
	dividergroup: {
		// marginHorizontal:20,
		display: "flex",
		flexDirection: "row",
	},

	groupsmall: {
		display: "flex",
		width: "30%",
		marginVertical: 30,
	},

	groupsmalls: {
		display: "flex",
		width: "30%",
		marginVertical: 30,
		marginLeft: 10,
	},
	locationimage: {
		marginVertical: 50,
		display: "flex",
		alignItems: "center",
	},
});
