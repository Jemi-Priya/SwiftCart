import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()({
	errorMessage: {
		fontSize: "15px",
		fontWeight: "bold",
		color: "red",
		fontStyle: "italic",
	},
	signUpPageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "150px"
	},
	signUpPageCard: {
		width: "100%",
		maxWidth: "450px",
		border: "2px solid #ddd",
		borderRadius: "8px",
		boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
	},
	signUpText: {
		fontSize: "24px",
		fontWeight: "bold",
		padding: "44px"
	},
	cardContent: {
		padding: "0px 44px"
	},
	formContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	}
})