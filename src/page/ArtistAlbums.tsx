import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "../App.css";
import useConnectArtistAlbums from "../hooks/useConnectArtistAlbums";

export function ArtistAlbums() {
  const [items, setItems] = useConnectArtistAlbums("", "accessToken", "id");

  return (
    <div className="container">
      {items
        ? items.items.map((item: any) => {
            return (
              <div>
                <Card className="item" sx={{ maxWidth: 300 }}>
                  <CardContent>
                    {item.images
                      .filter((img: any) => img.height === 300)
                      .map((img: any) => {
                        return (
                          <CardMedia
                            component="img"
                            height="200"
                            image={img.url}
                            alt="album cover"
                          />
                        );
                      })}

                    <Typography>{item.name}</Typography>

                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {/* {item.name} */}
                    </Typography>
                    <Typography
                      sx={{ position: "relative", top: 35 }}
                      color="text.secondary"
                    >
                      {item.release_date}
                    </Typography>
                    <Typography
                      sx={{ position: "relative", top: 30 }}
                      color="text.secondary"
                    >
                      {item.total_tracks} tracks
                    </Typography>
                    <Typography
                      sx={{ position: "relative", top: 25 }}
                      color="text.secondary"
                    >
                      {item.artists.map((artistsIncluded: any) => {
                        return <span> {artistsIncluded.name} /</span>;
                      })}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => {
                        window.open(item.external_urls.spotify);
                      }}
                      size="small"
                    >
                      Preview On Spotify
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })
        : null}
    </div>
  );
}
