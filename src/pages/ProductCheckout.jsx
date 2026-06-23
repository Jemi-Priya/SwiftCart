import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TopNavBar from "../components/TopNavBar";
import { styled } from "@mui/material/styles";
import QuantitySelector from "../components/QuantitySelector";
import { useStyles } from "./ProductCheckout.styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ProductCheckout = () => {
  const { classes } = useStyles();
  const cartItems = useSelector((state) => state.itemReducer.cartItems);
  console.log("cartItems, checkout", cartItems);

  const totalSum = (quantity, salePrice) => {
    return quantity * salePrice;
  };

  const subtotal = cartItems?.reduce(
    (totalSum, item) => totalSum + item.salePrice * item.quantity,
    0,
  );

  return (
    <>
      <TopNavBar />
      <div>Shopping Cart</div>
      {cartItems.length === 0 && (
        <div className={classes.emptyCart}>
          <img
            src="no_item_in_cart.png"
            alt="Empty Cart"
            classes={classes.emptyCartImage}
          />
        </div>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableBody>
            {cartItems
              ?.filter((row) => row.quantity > 0)
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    <QuantitySelector item={row} />
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.salePrice}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {totalSum(row.quantity, row.salePrice)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {cartItems.length > 0 && (
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{subtotal}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductCheckout;
