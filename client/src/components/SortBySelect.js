import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { BiNoEntry } from "react-icons/bi";
import HorizontalStack from "./util/HorizontalStack";

const SortBySelect = ({ onSortBy, sortBy, sorts }) => {
  const noOptionsAvailable = Object.keys(sorts).length === 0;

  return (
    <HorizontalStack spacing={1} alignItems="center">
      <Typography
        color="text.secondary"
        variant="subtitle2"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          fontWeight: 600,
          color: "#f5f5f5",
          fontSize: "1.1rem",
        }}
      >
        Sort by:
      </Typography>

      <FormControl variant="outlined" sx={{ minWidth: 150 }}>
        <Select
          size="small"
          value={sorts[sortBy] || ""}
          sx={{
            backgroundColor: "#f5f5f5",
            "& .MuiSelect-icon": { color: "#705eaa" }, // Icon color
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#705eaa", // Outline color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#333",
            },
          }}
          onChange={onSortBy}
          displayEmpty
          renderValue={(selected) =>
            selected || (
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <BiNoEntry style={{ marginRight: 4 }} />
                No options
              </Typography>
            )
          }
        >
          {noOptionsAvailable ? (
            <MenuItem disabled>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <BiNoEntry style={{ marginRight: 4 }} />
                No options available
              </Typography>
            </MenuItem>
          ) : (
            Object.keys(sorts).map((sortName, i) => (
              <MenuItem value={sorts[sortName]} key={i}>
                {sorts[sortName]}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </HorizontalStack>
  );
};

export default SortBySelect;
