import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useConnectArtistAlbums(
  InitalValue: any,
  key1: any,
  key2: any
) {
  const [value, setValue] = useState<any>(InitalValue);

  useEffect(() => {
    const datanew = localStorage.getItem(key1);
    const idNew = localStorage.getItem(key2); // value

    axios
      .get(
        `https://api.spotify.com/v1/artists/${idNew}/albums?include_groups=single%2Cappears_on&market=ES&limit=10&offset=5`,
        {
          headers: {
            Authorization: `Bearer ${datanew}`,
          },
        }
      )
      .then((response) => {
        setValue(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return [value, setValue];
}
