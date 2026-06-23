import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { addItemToCart, deleteItemFromCart } from "../store/actions/itemAction";
import { getAllProductsApi } from "../helpers/api";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useStyles } from "./ProductCard.styles";

const ProductCard = (props) => {
  const { classes } = useStyles();
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const allProducts = await getAllProductsApi();
    setAllProducts(allProducts.data);
  };

  const handleAddItem = (item) => {
    props.setAddItem(item);
  };

  const handleDeleteIem = (item) => {
    props.setDeleteItem(item);
  };

  return (
    <Grid container spacing={2} className={classes.productContainer}>
      {allProducts?.map((item) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }} key={item.id}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={"http://localhost:1337" + item.image?.[0]?.url}
                className={classes.productImage}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.description}
                </Typography>
                <br></br>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {item.salePrice}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleAddItem(item)}>
                  Add to Cart
                </Button>
                {/* <Button
                size="small"
                onClick={() => handleDeleteIem(item)}
                disabled={
                  !props.cartList?.some(
                    (cartItem) => cartItem.id === item.id,
                  )
                }
              >
                Delete from Cart
              </Button> */}
                <Button size="small">Add to Wishlist</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

const mapStateToProps = (state) => {
  console.log("state accessed from ProductCard", state);
  return {
    cartList: state.itemReducer.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAddItem: (item) => dispatch(addItemToCart(item)),
    setDeleteItem: (item) => dispatch(deleteItemFromCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
