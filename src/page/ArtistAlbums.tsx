import Card from "@mui/material/Card";
import useConnectArtistAlbums from "../hooks/useConnectArtistAlbums";
import DisplayAlbum from "../components/DisplayAlbum";

export function ArtistAlbums() {
  const [items, setItems] = useConnectArtistAlbums("", "accessToken", "id");

  return <DisplayAlbum items={items} />;
}
