import React from "react";
import { Input } from "@mui/material";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  searchQuery?: string;
  onChange?: any;
}

function SearchComponent(props: Props) {
  return (
    <div>
      <Input
        className="css-input"
        style={{
          maxWidth: "250px",
          padding: "4px",
          fontSize: "16px",
          borderWidth: "4px",
          backgroundColor: "#ffffff",
          color: "#000000",
          borderStyle: "solid",
          borderRadius: "0px",
          boxShadow: "-1px 0px 11px rgba(66, 66, 66, 0.75",
          textShadow: "0px 0px 5px rgba(66, 66, 66, 0.62)",
        }}
        value={props.searchQuery}
        onChange={props.onChange}
      />
      <span>
        <SearchIcon style={{ position: "relative", right: 30, top: 10 }} />
      </span>
    </div>
  );
}

export default SearchComponent;
