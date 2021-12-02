import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import SearchComponent from "../components/SearchComponent";
import useConnectDashboard from "../hooks/useConnectDashboard";

export function Dashboard() {
  const [SearchQuery, setSearchQuery, items, setItems] = useConnectDashboard(
    "a",
    "",
    "accessToken"
  );

  return (
    <div>
      <SearchComponent
        searchQuery={SearchQuery}
        onChange={(e: any) => {
          setSearchQuery(e.target.value);
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {items
          ? items.artists?.items
              ?.filter((item: any) =>
                item.name.toLowerCase().startsWith(SearchQuery.toLowerCase())
              )

              .map((filteredItem: any) => {
                return (
                  <Link to="/artist/albums/">
                    <Card
                      onClick={() => {
                        localStorage.setItem("id", filteredItem.id);
                      }}
                      style={{ margin: "10px" }}
                      sx={{ maxWidth: 300 }}
                    >
                      <CardContent>
                        {filteredItem.images
                          .filter((img: any) => img.height === 160)
                          .map((img: any) => {
                            return (
                              <img
                                src={
                                  !img.url
                                    ? "https://www.legal.ca/public/uploads/images/noimage.jpg"
                                    : img.url
                                }
                              />
                            );
                          })}

                        <Typography>{filteredItem.name}</Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {filteredItem.followers.total} followers
                        </Typography>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {filteredItem.popularity} popularity
                        </Typography>

                        <Rating
                          style={{ position: "relative", top: 25, right: 4.5 }}
                          name="simple-controlled"
                          value={filteredItem.popularity > 40 ? 5 : 3}
                        />
                      </CardContent>
                    </Card>
                  </Link>
                );
              })
          : null}
      </div>
    </div>
  );
}
