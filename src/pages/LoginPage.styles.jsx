import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()({
  productImage: {
    objectFit: "contain",
    border: "2px solid #ddd",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
  },
  loginPageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: "150px",
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 20px",
    gap: "16px",
  },
  loginHeader: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  errorMessage: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "red",
    fontStyle: "italic",
  },
  signUpLink: {
    fontSize: "14px",
    color: "#1976d2",
    cursor: "pointer",
    textDecoration: "underline",
    fontWeight: "bold",
    "&:hover": {
      color: "#1565c0",
    },
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  loginPageCard: {
    height: "460px",
    border: "2px solid #ddd",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    width: "365px",
  },
  signInText: {
    fontSize: "20px",
    fontWeight: "bold",
  },
});
