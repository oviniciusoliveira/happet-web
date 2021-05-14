import { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPlus, FiArrowRight, FiArrowLeft } from "react-icons/fi";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { ThemeContext } from "styled-components";

import {
  Container,
  Aside,
  Header,
  Footer,
  CreatePetHome,
} from "./../styles/pages/petHomeMap";

import "leaflet/dist/leaflet.css";

import { mapIconLight, mapIconDark } from "./../utils/mapIcon";
import api from "../services/api";
import LogoComTexto from "../components/LogoComTexto";
import Loading from "./../components/Loading";

interface PetHome {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function PetHomeMap() {
  const [petHomes, setPetHomes] = useState<PetHome[]>([]);
  const [acceptedPetHomes, setAcceptedPetHomes] = useState<PetHome[]>([]);
  const { title } = useContext(ThemeContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get("pet-homes").then((response) => {
      setPetHomes(response.data);
      setAcceptedPetHomes(
        petHomes.filter((petHome: any) => petHome.is_accepted)
      );
    });
    setLoading(false);
  }, [petHomes]);

  return (
    <Container>
      {loading && <Loading />}
      <Aside>
        <Header>
          <LogoComTexto />
          <h2>Identifique um Pet Home no mapa</h2>
          <p>Muitos animais estão esperando por um novo dono</p>
        </Header>
        <Footer>
          <strong>Liberdade</strong>
          <span>São Paulo</span>
        </Footer>
        <button onClick={() => history.push("/")}>
          <FiArrowLeft color="white" />
        </button>
      </Aside>
      <MapContainer
        center={[-23.5653115, -46.6411145]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/${title}-v10/tiles/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {acceptedPetHomes.map((petHome) => {
          return (
            <Marker
              key={petHome.id}
              icon={title === "light" ? mapIconLight : mapIconDark}
              position={[petHome.latitude, petHome.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {petHome.name}
                <Link to={`/petHomes/${petHome.id}`}>
                  <FiArrowRight size={20} color="#fff"></FiArrowRight>
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
      <CreatePetHome to="/petHomes/create" className="create-petHome">
        <FiPlus size={32} color="white" />
      </CreatePetHome>
    </Container>
  );
}

export default PetHomeMap;
