import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useConnectDashboard(
  InitalValue: any,
  InitialValue2: any,
  key1: any
) {
  const [value, setValue] = useState<any>(InitalValue);
  const [value2, setValue2] = useState<any>(InitialValue2);

  useEffect(() => {
    const datanew = localStorage.getItem(key1); // value

    axios
      .get(`https://api.spotify.com/v1/search?q=${value}&type=track%2Cartist`, {
        headers: {
          Authorization: "Bearer " + datanew,
        },
      })
      .then((response) => {
        setValue2(response.data);

        console.log(value2);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [value]);

  return [value, setValue, value2, setValue2];
}
