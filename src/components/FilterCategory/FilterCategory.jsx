import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import items from "../../db.items";
import { onlyUnique } from "../../utils/array";

const FilterCategory = () => {
  const [category, setCategory] = useState("");
  const categories = items.map((item) => item.category).filter(onlyUnique);

  console.log(categories);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select value={category} label="Category" onChange={handleChange}>
          <MenuItem value={10}>alcohol</MenuItem>
          <MenuItem value={20}>dairy</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterCategory;
