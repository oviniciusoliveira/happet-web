import { Container, Footer } from "./../styles/components/petHomeItem";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import mapIcon from "./../utils/mapIcon";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { FiArrowRight, FiEdit3, FiTrash } from "react-icons/fi";

function PetHomeItem({ petHome }: any) {
  const history = useHistory();

  return (
    <Container className="map-container">
      <MapContainer
        center={[petHome.latitude, petHome.longitude]}
        zoom={16}
        style={{ width: "100%", height: 280 }}
        dragging={false}
        touchZoom={false}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker
          interactive={false}
          icon={mapIcon}
          position={[petHome.latitude, petHome.longitude]}
        />
      </MapContainer>

      <Footer>
        <strong>{petHome.name}</strong>
        <div>
          {history.location.pathname === "/accepted-pet-homes" ? (
            <>
              <Link to={`/edit/${petHome.id}`}>
                <FiEdit3 />
              </Link>
              <Link to={`/delete/${petHome.id}`}>
                <FiTrash />
              </Link>
            </>
          ) : (
            <Link to={`/edit/${petHome.id}`}>
              <FiArrowRight />
            </Link>
          )}
        </div>
      </Footer>
    </Container>
  );
}

export default PetHomeItem;
