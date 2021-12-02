import { makeStyles } from "@material-ui/core/styles";

export default function Login(props: any) {
  const {
    SPOTIFY_ENDPOINT_AUTHORIZATION,
    CLIENT_ID,
    REDIRECT_URI,
    SCOPE_URI_PARAM,
  } = props;

  const handleLogin = () => {
    // @ts-ignore
    window.location = `${SPOTIFY_ENDPOINT_AUTHORIZATION}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_URI_PARAM}&response_type=token&show_dialog=true`;
  };

  const useStyles = makeStyles({
    login: {
      display: "grid",
      placeItems: "center",
      height: "100vh",
      backgroundColor: "black",

      "& img": {
        width: "50%",
      },

      "& a": {
        padding: "20px",
        borderRadius: "99px",
        backgroundColor: "#1db954",
        fontWeight: 600,
        color: "white",
        textDecoration: "none",
      },

      "& a:hover": {
        backgroundColor: " white",
        borderColor: "#1db954",
        color: "#1db954",
      },
    },
  });
  const classes = useStyles();

  return (
    <div className={classes.login}>
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-Logo"
      />
      <a onClick={handleLogin}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
