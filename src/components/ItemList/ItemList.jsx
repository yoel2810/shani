import { Box } from "@mui/material";
import items from "../../db.items";
import Item from "../Item/Item";

const ItemList = () => {
  return (
    <Box>
      {items.map((item, index) => (
        <Item
          itemImage={item.image}
          name={item.name}
          price={item.price}
          key={index}
        />
      ))}
    </Box>
  );
};

export default ItemList;
