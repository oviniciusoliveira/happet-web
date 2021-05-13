import logoLight from "./../images/logoLight.png";
import logoDark from "./../images/logoDark.png";
import Leaflet from "leaflet";

export const mapIconLight = Leaflet.icon({
  iconUrl: logoLight,
  iconSize: [50, 50],
  popupAnchor: [165, 35],
});

export const mapIconDark = Leaflet.icon({
  iconUrl: logoDark,
  iconSize: [50, 50],
  popupAnchor: [165, 35],
});
