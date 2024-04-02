import { Box, Button, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Item = ({ name, price, itemImage }) => {
  const classes = {
    container: {
      padding: "0.5rem",
      width: "13rem",
      textAlign: "right",
    },
    image: { width: "100%" },
    productTitle: { fontSize: "1.5rem" },
    text: {
      fontSize: "1rem",
    },
    button: {
      backgroundColor: "#B1D426",
      width: "100%",
      color: "black",
      fontSize: "1.3rem",
      ":hover": {
        backgroundColor: "#B1D426",
      },
    },
  };

  return (
    <Box sx={classes.container}>
      <img style={classes.image} alt="Item" src={itemImage} />
      <Typography sx={classes.productTitle} variant="h5">
        {name}
      </Typography>
      <Typography sx={classes.text} variant="h5">
        {price}
      </Typography>
      {/* <Typography sx={classes.text} variant="h5">
        נשאר במלאי {amount}
      </Typography> */}
      <Button sx={classes.button}>הוספה לעגלה</Button>
    </Box>
  );
};

export default Item;
