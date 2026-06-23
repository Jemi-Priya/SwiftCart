import { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useStyles } from "./SignUp.styles";
import { createUser } from "../helpers/api";
export const SignUp = () => {
  const { classes } = useStyles();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const handleOnChange = (e, field) => {
    setUser({ ...user, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.email || !user.name || !user.password) {
      setError("Please fill all the details");
      return;
    }
    setError("");
    try {
      const response = await createUser(user);
      if (response?.user && response?.jwt) {
        console.log("User created successfully");
      } else {
        setError(response?.message || "Error creating user");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className={classes.signUpPageContainer}>
      <Card className={classes.signUpPageCard}>
        <span className={classes.signUpText}>Create account</span>
        <CardContent className={classes.cardContent}>
          <form onSubmit={handleSubmit} className={classes.formContainer}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={user.name}
              onChange={(e) => handleOnChange(e, "name")}
              fullWidth
              margin="normal"
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={user.email}
              onChange={(e) => handleOnChange(e, "email")}
              fullWidth
              margin="normal"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              value={user.password}
              onChange={(e) => handleOnChange(e, "password")}
              fullWidth
              margin="normal"
            />
            {error && <div className={classes.errorMessage}>{error}</div>}
            <Button
              variant="contained"
              // className={classes.loginButton}
              type="submit"
              // disabled={!email || !password}
            >
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
