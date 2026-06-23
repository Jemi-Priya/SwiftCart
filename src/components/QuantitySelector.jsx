import { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { updateItem } from "../store/actions/itemAction";

export default function QuantitySelector({ item }) {
  console.log("QuantitySelector item", item);
  console.log("QuantitySelector item quantity", item.quantity);
  const dispatch = useDispatch();

  const increment = () => {
    console.log("item", item);
    dispatch(updateItem({ ...item, quantity: item.quantity + 1 }));
  };

  const decrement = () => {
    if (item.quantity > 0) {
      dispatch(updateItem({ ...item, quantity: item.quantity - 1 }));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: 2,
        width: "fit-content",
      }}
    >
      <IconButton onClick={decrement}>
        <RemoveIcon />
      </IconButton>

      <Typography sx={{ minWidth: 40, textAlign: "center" }}>
        {item.quantity}
      </Typography>

      <IconButton onClick={increment}>
        <AddIcon />
      </IconButton>
    </Box>
  );
}
