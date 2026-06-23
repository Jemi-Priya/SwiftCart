import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { setSearchValue } from "../store/actions/searchAction";
import { connect } from "react-redux";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./TopNavBar.styles";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const TopNavBar = (props) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  const handleSearch = (e) => {
    props.setSearch(e.target.value);
  };

  const totalNoOfProducts = props.cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            onClick={() => navigate("/")}
            className={classes.checkoutButton}
          >
            Shopping Cart
          </Typography>
          <IconButton
            onClick={() => navigate("/checkout")}
            className={classes.checkoutButton}
          >
            <ShoppingCartIcon fontSize="small" />
            <CartBadge
              badgeContent={totalNoOfProducts}
              color="primary"
              overlap="circular"
              showZero
            />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleSearch(e)}
            />
          </Search>
          <Button
            className={classes.loginButton}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state) => {
  console.log("Redux State:", state);
  return {
    searchValue: state.searchReducer.searchKeyword,
    cartItems: state.itemReducer.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSearch: (searchValue) => dispatch(setSearchValue(searchValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);
