import Card from "@mui/material/Card";
import useConnectArtistAlbums from "../hooks/useConnectArtistAlbums";
import DisplayArtistAlbums from "../components/DisplayArtistAlbums";

export function ArtistAlbums() {
  const [items, setItems] = useConnectArtistAlbums("", "accessToken", "id");

  return <DisplayArtistAlbums items={items} />;
}
