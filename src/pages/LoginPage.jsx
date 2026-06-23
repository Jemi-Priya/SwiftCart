import { useState } from "react";
import { useStyles } from "./LoginPage.styles";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { validateUserApi } from "../helpers/api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/userAction";

export const LoginPage = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const loggedinUser = useSelector((state) => state.userReducer.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      setError("Please enter email and password");
      return;
    }

    if (!email) {
      setError("Please enter email");
      return;
    }
    if (!password) {
      setError("Please enter password");
      return;
    }
    setError("");
    try {
      const response = await validateUserApi(email, password);
      console.log("Form submitted");
      if (response?.user) {
        dispatch(setUser(response.user));
        navigate("/");
      } else {
        setError(
          response?.message === "Invalid identifier or password"
            ? "Please provide the correct username and password"
            : response?.message,
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className={classes.loginPageContainer}>
        <img src="/login.png" alt="Login" className={classes.productImage} />
        <Card className={classes.loginPageCard}>
          <CardContent className={classes.cardContent}>
            <div className={classes.loginContainer}>
              <span className={classes.signInText}>
                Sign in to your account
              </span>
              <form onSubmit={handleSubmit} className={classes.formContainer}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                {error && <div className={classes.errorMessage}>{error}</div>}
                <Button
                  variant="contained"
                  className={classes.loginButton}
                  type="submit"
                  fullWidth
                >
                  Login
                </Button>
              </form>
              <div
                onClick={() => navigate("/signup")}
                className={classes.signUpLink}
              >
                Don't have an account? Sign Up
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
