export const SPOTIFY_ENDPOINT_AUTHORIZATION =
  "https://accounts.spotify.com/authorize/";

export const CLIENT_ID: any = "eae2c519c3084b16a48056ce021a5ae2";

export const REDIRECT_URI: any = "http://localhost:3000/dashboard/";
export const SCOPES: any = [
  "user-read-playback-state",
  "user-read-currently-playing",
  "playlist-read-private",
];

export const DELIMITER: any = "%20";

export const SCOPE_URI_PARAM: any = SCOPES.join(DELIMITER);
