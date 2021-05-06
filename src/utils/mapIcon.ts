import logoImg from "./../images/logo.png";
import Leaflet from "leaflet";

const mapIcon = Leaflet.icon({
  iconUrl: logoImg,
  iconSize: [50, 50],
  popupAnchor: [165, 35],
});

export default mapIcon;
