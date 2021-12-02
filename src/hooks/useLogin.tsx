import React, { useState, useEffect } from "react";

export default function useLogin(accessToken: any) {
  const [value, setValue2] = useState<any>(accessToken);

  const getReturnParamsFromSpotifyAuth = (hash: any) => {
    const stringAfterHash = hash.substring(1);
    const paramsInUrl = stringAfterHash.split("&");
    const paramsSplitUp = paramsInUrl.reduce(
      (accumulator: any, currentValue: any) => {
        const [key, value] = currentValue.split("=");
        accumulator[key] = value;
        return accumulator;
      },
      {}
    );
    return paramsSplitUp;
  };

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        getReturnParamsFromSpotifyAuth(window.location.hash);
      console.log({ access_token });
      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("expiresIn", expires_in);
      localStorage.setItem("tokenType", token_type);
    }
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setValue2(localStorage.getItem("accessToken"));
    }
  }, []);

  return [value, setValue2];
}
