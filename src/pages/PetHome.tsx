import { useEffect, useState } from "react";
// import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
// import { Marker, TileLayer } from "react-leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
// import L from "leaflet";

import mapIcon from "./../utils/mapIcon";

// import PrimaryButton from "../../components/PrimaryButton";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
// import Map from "../../components/Map";

import {
  Container,
  Details,
  Images,
  ImageButton,
  DetailsContent,
  OpenDetails,
} from "./../styles/pages/petHome";

import { useParams } from "react-router-dom";

interface PetHomeInterface {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: string;
    url: string;
  }>;
}

export interface PetHomeParams {
  id: string;
}

export default function PetHome() {
  const [petHome, setPetHome] = useState<PetHomeInterface>();
  const params = useParams<PetHomeParams>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`pet-homes/${params.id}`).then((response) => {
      setPetHome(response.data);
    });
  }, [params.id]);

  if (!petHome) {
    return <p>Carregando ...</p>;
  }

  return (
    <Container>
      <Sidebar />

      <main>
        <Details>
          <img src={petHome.images[activeImageIndex].url} alt={petHome.name} />

          <Images>
            {petHome.images.map((image, index) => {
              return (
                <ImageButton
                  key={image.id}
                  className={activeImageIndex === index ? "active" : ""}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={petHome.name} />
                </ImageButton>
              );
            })}
          </Images>

          <DetailsContent>
            <h1>{petHome.name}</h1>
            <p>{petHome.about}</p>

            <div className="map-container">
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

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${petHome.latitude},${petHome.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{petHome.instructions}</p>

            <OpenDetails>
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {petHome.opening_hours}
              </div>
              {petHome.open_on_weekends ? (
                <div className="open-on-weekends">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
            </OpenDetails>

            {/* <PrimaryButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </PrimaryButton> */}
          </DetailsContent>
        </Details>
      </main>
    </Container>
  );
}
